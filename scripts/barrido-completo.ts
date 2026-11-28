/**
 * Barrido completo: evalúa con Stockfish nativo TODAS mis jugadas de TODAS las partidas (no solo
 * los momentos de pérdida de material que cubrió el análisis previo), a la misma profundidad que
 * usa la app por defecto (`PREFERENCIAS_INICIALES.profundidad` en `src/lib/datos/db.ts`: 12), y
 * arma los errores con `construirError`, la misma función que usa la cola de la app
 * (`src/lib/analisis/cola.svelte.ts`) — mismos umbrales, misma clasificación.
 *
 * Varios procesos de Stockfish en paralelo (`scripts/barrido-trabajador.ts`, uno por núcleo menos
 * uno), con caché por FEN en disco (`datos-privados/barrido/cache-profundidad-<N>.jsonl`): cada
 * posición se analiza una sola vez aunque se repita en varias partidas, y si se corta a la mitad,
 * la próxima corrida retoma leyendo la caché (no vuelve a analizar lo que ya está ahí).
 *
 * Uso: node scripts/barrido-completo.ts [--muestra=N] [--procesos=N] [--carpeta-pgn=ruta]
 *   --muestra=N     en vez de las partidas completas, analiza solo N elegidas repartidas en todo
 *                    el historial (fecha, color, ritmo variados), para probar antes de lanzar todo.
 *                    También imprime una estimación del tiempo total extrapolando esta corrida.
 *   --procesos=N     cantidad de procesos de Stockfish en paralelo (por defecto, núcleos menos uno).
 * Variable de entorno STOCKFISH: ruta al Stockfish nativo (si no, usa la copia ya instalada por
 * "Stockfish - instalar y analizar" en Facultad).
 *
 * Salida: datos-privados/barrido/resultado[-muestra-N].json con { partidas, errores } listos para
 * `scripts/barrido-a-respaldo.ts`. Log legible en datos-privados/barrido/log.txt.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cpus } from 'node:os'
import { fork, type ChildProcess } from 'node:child_process'
import { Chess, type Position } from 'chessops/chess'
import { fenDe, jugarUci } from '../src/lib/ajedrez/posicion.ts'
import { construirError, type AnalisisPosicion } from '../src/lib/analisis/errores.ts'
import { partidasDesdeTextoPgn } from '../src/lib/datos/normalizar.ts'
import type { ErrorPartida, Partida, Respaldo } from '../src/lib/datos/tipos.ts'

// --- Configuración ---------------------------------------------------------------------------

const PROFUNDIDAD = 12 // PREFERENCIAS_INICIALES.profundidad en src/lib/datos/db.ts
const STOCKFISH_DEFECTO =
  'D:/Documentos de Mati/Facultad/2025 - 1er cuatrimestre/Ajedrez/Claude Ajedrez/Claude outputs/Stockfish - instalar y analizar/stockfish/stockfish.exe'
const RUTA_MOTOR = process.env.STOCKFISH ?? STOCKFISH_DEFECTO
const HASH_MB = Number(process.env.BARRIDO_HASH_MB ?? 64)
const USUARIOS = { lichess: 'avatargs', chesscom: 'avatargs' }
const CARPETA_BARRIDO = 'datos-privados/barrido'
const RUTA_CACHE = join(CARPETA_BARRIDO, `cache-profundidad-${PROFUNDIDAD}.jsonl`)
const RUTA_LOG = join(CARPETA_BARRIDO, 'log.txt')

function args(nombre: string): string | undefined {
  return process.argv.find((a) => a.startsWith(`--${nombre}=`))?.split('=')[1]
}

const CARPETA_PGN = args('carpeta-pgn') ?? 'docs/contexto/partidas'
const MUESTRA = args('muestra') ? Number(args('muestra')) : undefined
const N_PROCESOS = args('procesos') ? Number(args('procesos')) : Math.max(1, cpus().length - 1)

mkdirSync(CARPETA_BARRIDO, { recursive: true })

function log(msg: string) {
  const linea = `[${new Date().toISOString()}] ${msg}`
  console.log(msg)
  appendFileSync(RUTA_LOG, linea + '\n')
}

// --- 1. Partidas -----------------------------------------------------------------------------

const porId = new Map<string, Partida>()
for (const archivo of readdirSync(CARPETA_PGN).filter((f) => f.endsWith('.pgn'))) {
  const texto = readFileSync(join(CARPETA_PGN, archivo), 'utf8')
  for (const p of partidasDesdeTextoPgn(texto, USUARIOS)) porId.set(p.id, p)
}
const todas = [...porId.values()].filter((p) => p.estadoAnalisis !== 'omitida')
log(`Partidas leídas: ${porId.size}, analizables (no omitidas): ${todas.length}`)

/** Reparte N partidas a lo largo de todo el historial (fecha), para que la muestra sea variada. */
function elegirMuestra(partidas: Partida[], n: number): Partida[] {
  if (n >= partidas.length) return partidas
  const ordenadas = [...partidas].sort((a, b) => a.fecha - b.fecha)
  const paso = ordenadas.length / n
  const elegidas: Partida[] = []
  const vistos = new Set<number>()
  for (let i = 0; i < n; i++) {
    let idx = Math.floor(i * paso)
    while (vistos.has(idx) && idx < ordenadas.length - 1) idx++
    vistos.add(idx)
    elegidas.push(ordenadas[idx])
  }
  return elegidas
}

const partidas = MUESTRA !== undefined ? elegirMuestra(todas, MUESTRA) : todas
log(`Partidas a procesar esta corrida: ${partidas.length}${MUESTRA !== undefined ? ' (muestra)' : ''}`)

// --- 2. Replay de cada partida: posiciones, y qué plies hacen falta (los de mi turno y su siguiente) ---

interface DatosPartida {
  partida: Partida
  fens: string[]
  posiciones: Position[]
  necesarias: Set<number>
}

function analisisTerminal(pos: Position): AnalisisPosicion {
  return { ev: pos.isCheckmate() ? { mate: 0 } : { cp: 0 }, mejor: '', linea: [] }
}

function replay(partida: Partida): DatosPartida {
  const fens: string[] = []
  const posiciones: Position[] = []
  let pos: Position = Chess.default()
  for (let ply = 0; ply <= partida.jugadas.length; ply++) {
    fens.push(fenDe(pos))
    posiciones.push(pos)
    if (ply < partida.jugadas.length) {
      const sig = jugarUci(pos, partida.jugadas[ply])
      if (!sig) break
      pos = sig
    }
  }
  const necesarias = new Set<number>()
  for (let ply = 0; ply < fens.length - 1; ply++) {
    if (posiciones[ply].turn === partida.miColor) {
      necesarias.add(ply)
      necesarias.add(ply + 1)
    }
  }
  return { partida, fens, posiciones, necesarias }
}

const datos = partidas.map(replay)

// --- 3. Posiciones distintas que hacen falta: terminales se resuelven solas, el resto va a la caché ---

const cache = new Map<string, AnalisisPosicion>()
const fensNecesarios = new Set<string>()
for (const d of datos) {
  for (const ply of d.necesarias) {
    const fen = d.fens[ply]
    if (d.posiciones[ply].isEnd()) cache.set(fen, analisisTerminal(d.posiciones[ply]))
    else fensNecesarios.add(fen)
  }
}

let yaEnCacheDeDisco = 0
if (existsSync(RUTA_CACHE)) {
  for (const linea of readFileSync(RUTA_CACHE, 'utf8').split('\n')) {
    if (!linea.trim()) continue
    const r = JSON.parse(linea) as { fen: string; ev: AnalisisPosicion['ev']; mejor: string; linea: string[] }
    cache.set(r.fen, { ev: r.ev, mejor: r.mejor, linea: r.linea })
  }
}
for (const fen of fensNecesarios) if (cache.has(fen)) yaEnCacheDeDisco++

const porHacer = [...fensNecesarios].filter((fen) => !cache.has(fen))
log(
  `Posiciones distintas necesarias: ${fensNecesarios.size}, ya en caché: ${yaEnCacheDeDisco}, ` +
    `a analizar en esta corrida: ${porHacer.length}`,
)

// --- 4. Analizar lo que falta con un pool de procesos nativos de Stockfish --------------------

type MensajeTrabajador =
  | { listo: true }
  | { id: number; error: string }
  | { id: number; ev: AnalisisPosicion['ev']; mejor: string; linea: string[] }

let msPorPosMedido: number | undefined // promedio real de esta corrida, para la extrapolación del paso 6

async function analizarConPool(fens: string[]): Promise<void> {
  if (fens.length === 0) return
  const nProcesos = Math.min(N_PROCESOS, fens.length)
  log(`Lanzando ${nProcesos} procesos de Stockfish (núcleos: ${cpus().length}).`)

  let siguiente = 0
  let hechos = 0
  let erroresMotor = 0
  const inicio = Date.now()
  let ultimoLog = inicio

  await new Promise<void>((resolverTodo) => {
    const trabajadores: ChildProcess[] = []

    const asignar = (hijo: ChildProcess) => {
      if (siguiente >= fens.length) return
      hijo.send({ id: siguiente, fen: fens[siguiente] })
      siguiente++
    }

    for (let i = 0; i < nProcesos; i++) {
      const hijo = fork(join(import.meta.dirname, 'barrido-trabajador.ts'), [], {
        env: { ...process.env, STOCKFISH: RUTA_MOTOR, BARRIDO_PROFUNDIDAD: String(PROFUNDIDAD), BARRIDO_HASH_MB: String(HASH_MB) },
      })
      trabajadores.push(hijo)
      hijo.on('message', (msg: MensajeTrabajador) => {
        if ('listo' in msg) {
          asignar(hijo)
          return
        }
        if ('error' in msg) {
          erroresMotor++
          log(`Error analizando ${fens[msg.id]}: ${msg.error}`)
        } else {
          const fen = fens[msg.id]
          const r: AnalisisPosicion = { ev: msg.ev, mejor: msg.mejor, linea: msg.linea }
          cache.set(fen, r)
          appendFileSync(RUTA_CACHE, JSON.stringify({ fen, ...r }) + '\n')
        }
        hechos++
        const ahora = Date.now()
        msPorPosMedido = (ahora - inicio) / hechos
        if (ahora - ultimoLog > 15_000 || hechos === fens.length) {
          ultimoLog = ahora
          const restantes = fens.length - hechos
          log(
            `${hechos}/${fens.length} posiciones (${((ahora - inicio) / 60000).toFixed(1)} min, ${msPorPosMedido.toFixed(0)} ms/pos, ` +
              `restan ≈${((restantes * msPorPosMedido) / 60000).toFixed(1)} min)`,
          )
        }
        if (siguiente < fens.length) asignar(hijo)
        if (hechos >= fens.length) {
          for (const t of trabajadores) t.kill()
          resolverTodo()
        }
      })
    }
  })

  const segTotal = (Date.now() - inicio) / 1000
  log(
    `Terminado: ${fens.length} posiciones en ${(segTotal / 60).toFixed(1)} min ` +
      `(${((segTotal * 1000) / fens.length).toFixed(0)} ms/pos en promedio, ${erroresMotor} errores de motor).`,
  )
}

await analizarConPool(porHacer)

// --- 5. Armar errores igual que la app (construirError), con estadoAnalisis = 'analizada' -----

const erroresPorId = new Map<string, ErrorPartida>()
const partidasFinal: Partida[] = []
for (const d of datos) {
  const analisisPorPly = new Map<number, AnalisisPosicion>()
  for (const ply of d.necesarias) {
    const a = cache.get(d.fens[ply])
    if (a) analisisPorPly.set(ply, a)
  }
  for (let ply = 0; ply < d.fens.length - 1; ply++) {
    if (d.posiciones[ply].turn !== d.partida.miColor) continue
    const antes = analisisPorPly.get(ply)
    const despues = analisisPorPly.get(ply + 1)
    if (!antes || !despues || !antes.mejor) continue
    const e = construirError(d.partida, ply, d.fens[ply], antes, despues, 'app')
    if (e) erroresPorId.set(e.id, e)
  }
  partidasFinal.push({ ...d.partida, estadoAnalisis: 'analizada' })
}
const erroresFinal = [...erroresPorId.values()]
const cuenta = (f: (e: ErrorPartida) => string) =>
  erroresFinal.reduce<Record<string, number>>((acc, e) => ((acc[f(e)] = (acc[f(e)] ?? 0) + 1), acc), {})
log(`Errores encontrados: ${erroresFinal.length} ${JSON.stringify(cuenta((e) => e.clasificacion))}`)

const sufijo = MUESTRA !== undefined ? `-muestra-${MUESTRA}` : ''
const rutaResultado = join(CARPETA_BARRIDO, `resultado${sufijo}.json`)
writeFileSync(rutaResultado, JSON.stringify({ partidas: partidasFinal, errores: erroresFinal }))
log(`Escrito ${rutaResultado}`)

// --- 6. Si es una muestra: extrapolar el tiempo total y comparar con analisis-previo.json -----

if (MUESTRA !== undefined) {
  const datosCompletos = todas.map(replay)
  const fensTotales = new Set<string>()
  for (const d of datosCompletos) {
    for (const ply of d.necesarias) if (!d.posiciones[ply].isEnd()) fensTotales.add(d.fens[ply])
  }
  let yaResueltas = 0
  for (const fen of fensTotales) if (cache.has(fen)) yaResueltas++
  const faltan = fensTotales.size - yaResueltas
  log(
    `Posiciones distintas en las ${todas.length} partidas: ${fensTotales.size} ` +
      `(ya resueltas con esta corrida y la caché previa: ${yaResueltas}, ${((yaResueltas / fensTotales.size) * 100).toFixed(1)} %).`,
  )
  if (msPorPosMedido !== undefined && faltan > 0) {
    const minEstimados = (faltan * msPorPosMedido) / 60000
    log(
      `Al promedio medido en esta corrida (${msPorPosMedido.toFixed(0)} ms/posición con ${Math.min(N_PROCESOS, porHacer.length)} procesos), ` +
        `faltan ${faltan} posiciones ≈ ${minEstimados.toFixed(0)} min (${(minEstimados / 60).toFixed(1)} h) para completar las ${todas.length} partidas.`,
    )
  } else if (faltan === 0) {
    log('Esta muestra ya deja en caché todas las posiciones de las partidas completas: nada que estimar.')
  }

  if (existsSync('datos-privados/analisis-previo.json')) {
    const previo = JSON.parse(readFileSync('datos-privados/analisis-previo.json', 'utf8')) as Respaldo
    const idsMuestra = new Set(partidas.map((p) => p.id))
    const erroresPrevios = previo.errores.filter((e) => idsMuestra.has(e.partidaId))
    const previosPorId = new Map(erroresPrevios.map((e) => [e.id, e]))
    const nuevosPorId = new Map(erroresFinal.map((e) => [e.id, e]))

    let confirmados = 0
    let cambiaronClasificacion = 0
    for (const [id, previoE] of previosPorId) {
      const nuevoE = nuevosPorId.get(id)
      if (!nuevoE) continue
      if (nuevoE.clasificacion === previoE.clasificacion) confirmados++
      else cambiaronClasificacion++
    }
    const nuevosNoVistos = [...nuevosPorId.keys()].filter((id) => !previosPorId.has(id)).length
    const yaNoAparecen = [...previosPorId.keys()].filter((id) => !nuevosPorId.has(id)).length

    log(
      `Comparación con analisis-previo.json (solo estas ${partidas.length} partidas): ` +
        `previo tenía ${erroresPrevios.length} errores, el barrido encontró ${erroresFinal.length}. ` +
        `Confirmados igual: ${confirmados}, cambiaron de clasificación: ${cambiaronClasificacion}, ` +
        `nuevos (no estaban en el previo): ${nuevosNoVistos}, del previo que el barrido no repite: ${yaNoAparecen}.`,
    )
  } else {
    log('No se encontró datos-privados/analisis-previo.json: se omite la comparación.')
  }
}
