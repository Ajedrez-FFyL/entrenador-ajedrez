/**
 * Arma la selección offline de problemas a partir de la base pública de Lichess (CC0,
 * https://database.lichess.org/#puzzles). La base se procesa en streaming (zstd) sin guardarla:
 * se corta en cuanto se completan los cupos por tema.
 *
 * Criterios: rating 1400-2200 (alrededor del objetivo 1700-1800), desvío de rating < 90,
 * popularidad ≥ 85 y al menos 300 partidas jugadas (problemas probados y bien valorados).
 * Cupo de 250 por tema prioritario: cada problema cuenta para el primer tema de la lista que tenga.
 *
 * C4d suma, por tema, un archivo bajable aparte (`public/datos/problemas/<tema>.json`) con criterios
 * más amplios (rating 600-2400, popularidad positiva, ≥ 100 partidas), balanceado por tramos de 200 de
 * rating, sin duplicar los de `problemas.json`. Como el descompresor zstd nativo de Node no entiende
 * los frames saltables de en medio del archivo y se corta a las ~180.000 filas (alcanza para los cupos
 * chicos de arriba, no para ~40.000 repartidos en 19 temas x 9 tramos), esa parte usa `fzstd` para leer
 * el archivo completo.
 *
 * Uso: node scripts/preparar-problemas.ts   → problemas.json + public/datos/problemas/<tema>.json
 *   SOLO_AMPLIACION=1 node scripts/preparar-problemas.ts   → solo los archivos por tema (no retoca problemas.json)
 *   LICHESS_CSV_LOCAL=<ruta al .csv.zst ya bajado> node scripts/preparar-problemas.ts   → sin red para la ampliación
 */
import { mkdirSync, writeFileSync, createReadStream } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { Readable, Transform } from 'node:stream'
import { createInterface } from 'node:readline'
import { createZstdDecompress } from 'node:zlib'
import { Decompress } from 'fzstd'

const URL_BASE = 'https://database.lichess.org/lichess_db_puzzle.csv.zst'
const CUPO = 250

// Orden de prioridad: primero los motivos que más pesan en tus errores (material colgado,
// horquillas, clavadas, mates) y después el resto.
const TEMAS = [
  'hangingPiece',
  'fork',
  'pin',
  'skewer',
  'discoveredAttack',
  'mateIn1',
  'mateIn2',
  'mateIn3',
  'backRankMate',
  'deflection',
  'attraction',
  'intermezzo',
  'xRayAttack',
  'trappedPiece',
  'defensiveMove',
  'quietMove',
  'sacrifice',
  'rookEndgame',
  'pawnEndgame',
] as const

interface Problema {
  id: string
  fen: string
  jugadas: string[]
  rating: number
  temas: string[]
}

async function generarBase() {
  const cupos = new Map<string, Problema[]>(TEMAS.map((t) => [t, []]))
  const completos = () => [...cupos.values()].every((l) => l.length >= CUPO)

  const resp = await fetch(URL_BASE)
  if (!resp.ok || !resp.body) throw new Error(`No se pudo bajar la base (${resp.status})`)

  // El archivo usa el formato zstd "seekable": empieza (y termina) con frames saltables que el
  // descompresor de Node no reconoce. Se saltean los 12 bytes del primero; el del final (la tabla
  // de búsqueda) se trata como fin de datos.
  let saltear = 12
  const sinCabecera = new Transform({
    transform(chunk: Buffer, _enc, listo) {
      if (saltear > 0) {
        const corte = Math.min(saltear, chunk.length)
        saltear -= corte
        chunk = chunk.subarray(corte)
      }
      listo(null, chunk)
    },
  })
  const descompresor = createZstdDecompress()
  descompresor.on('error', (e) => {
    console.log(`Fin del flujo comprimido (${e.message}).`)
    descompresor.end()
  })
  const flujo = Readable.fromWeb(resp.body as never).pipe(sinCabecera).pipe(descompresor)
  const lineas = createInterface({ input: flujo })

  let leidas = 0
  for await (const linea of lineas) {
    leidas++
    if (leidas === 1) continue // encabezado
    const [id, fen, moves, rating, desvio, popularidad, partidas, temas] = linea.split(',')
    const r = Number(rating)
    if (r < 1400 || r > 2200 || Number(desvio) >= 90 || Number(popularidad) < 85 || Number(partidas) < 300) continue
    const lista = temas.split(' ')
    const tema = TEMAS.find((t) => lista.includes(t) && cupos.get(t)!.length < CUPO)
    if (!tema) continue
    cupos.get(tema)!.push({ id, fen, jugadas: moves.split(' '), rating: r, temas: lista })
    if (leidas % 100000 === 0) console.log(`${leidas} leídas; elegidos ${[...cupos.values()].reduce((s, l) => s + l.length, 0)}`)
    if (completos()) break
  }
  flujo.destroy()

  const problemas = [...cupos.values()].flat()
  mkdirSync('public/datos', { recursive: true })
  writeFileSync('public/datos/problemas.json', JSON.stringify(problemas))
  console.log(`Base: ${problemas.length} problemas tras leer ${leidas} filas.`)
  for (const [t, l] of cupos) console.log(`  ${t}: ${l.length}`)
}

// --- C4d: ampliación por tema, bajable aparte ---

const RATING_MIN = 600
const RATING_MAX = 2400
const ANCHO_TRAMO = 200
const TRAMOS = (RATING_MAX - RATING_MIN) / ANCHO_TRAMO // 9
const CUPO_POR_TRAMO = 235 // ≈ 235 * 9 tramos * 19 temas ≈ 40.000

function tramoDe(rating: number): number | undefined {
  if (rating < RATING_MIN || rating > RATING_MAX) return undefined
  return Math.min(TRAMOS - 1, Math.floor((rating - RATING_MIN) / ANCHO_TRAMO))
}

async function idsExistentes(): Promise<Set<string>> {
  try {
    const problemas = JSON.parse(await readFile('public/datos/problemas.json', 'utf8')) as Problema[]
    return new Set(problemas.map((p) => p.id))
  } catch {
    return new Set()
  }
}

async function generarPorTemaYRating() {
  const excluidos = await idsExistentes()
  const cupos = new Map<string, Problema[][]>(TEMAS.map((t) => [t, Array.from({ length: TRAMOS }, () => [])]))
  const completos = () => [...cupos.values()].every((tramos) => tramos.every((l) => l.length >= CUPO_POR_TRAMO))

  let encabezadoVisto = false
  let leidas = 0
  let elegidas = 0
  let detener = false

  function procesarLinea(linea: string) {
    if (!encabezadoVisto) {
      encabezadoVisto = true
      return
    }
    leidas++
    const [id, fen, moves, ratingS, , popularidadS, partidasS, temasS] = linea.split(',')
    if (excluidos.has(id)) return
    const rating = Number(ratingS)
    const tramo = tramoDe(rating)
    if (tramo === undefined) return
    if (Number(popularidadS) <= 0 || Number(partidasS) < 100) return
    const lista = temasS.split(' ')
    const tema = TEMAS.find((t) => lista.includes(t) && cupos.get(t)![tramo].length < CUPO_POR_TRAMO)
    if (!tema) return
    cupos.get(tema)![tramo].push({ id, fen, jugadas: moves.split(' '), rating, temas: lista })
    elegidas++
    if (leidas % 500000 === 0) console.log(`  ampliación: ${leidas} leídas; elegidas ${elegidas}`)
  }

  let buf = ''
  const dec = new Decompress((chunk) => {
    buf += Buffer.from(chunk).toString('utf8')
    let inicio = 0
    let corte: number
    while (!detener && (corte = buf.indexOf('\n', inicio)) !== -1) {
      procesarLinea(buf.slice(inicio, corte))
      inicio = corte + 1
      if (completos()) detener = true
    }
    buf = buf.slice(inicio)
  })

  const rutaLocal = process.env.LICHESS_CSV_LOCAL
  let origen: AsyncIterable<Buffer>
  if (rutaLocal) {
    origen = createReadStream(rutaLocal)
  } else {
    const resp = await fetch(URL_BASE)
    if (!resp.ok || !resp.body) throw new Error(`No se pudo bajar la base (${resp.status})`)
    origen = Readable.fromWeb(resp.body as never)
  }
  for await (const chunk of origen as AsyncIterable<Buffer>) {
    if (detener) break
    dec.push(new Uint8Array(chunk), false)
  }
  if (!detener) dec.push(new Uint8Array(0), true)
  ;(origen as unknown as { destroy?: () => void }).destroy?.()

  mkdirSync('public/datos/problemas', { recursive: true })
  for (const [tema, tramos] of cupos) {
    const lista = tramos.flat()
    writeFileSync(`public/datos/problemas/${tema}.json`, JSON.stringify(lista))
    console.log(`  ${tema}: ${lista.length} (tramos: ${tramos.map((t) => t.length).join('/')})`)
  }
  console.log(`Ampliación: ${elegidas} elegidas tras leer ${leidas} filas (excluidos ${excluidos.size} ya en problemas.json).`)
}

if (!process.env.SOLO_AMPLIACION) await generarBase()
await generarPorTemaYRating()
process.exit(0)
