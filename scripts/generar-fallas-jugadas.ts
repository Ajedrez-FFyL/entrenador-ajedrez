/**
 * Fase C3, paso 1 (triage, 23/11): genera docs/revision-aperturas/fallas-jugadas.md a partir del campo
 * `verificacion` que ya quedó escrito en cada src/contenido/aperturas/*.json por
 * `verificar-explicaciones.ts` (no corre Stockfish de nuevo). Clasifica cada jugada con `ok: false` en:
 *  - **Grave**: pierde más de 1 peón respecto de la mejor (o es ilegal, o el motor ve mate).
 *  - **Discutible**: entre 0,3 y 1 peón.
 *  - **Ruido**: menos de 0,3 peón (probablemente teoría aceptada con una pérdida chica).
 * La pérdida en peones se lee de los dos valores de evaluación que ya guarda `detalle` (son centipeones
 * reales, /100; el umbral que decidió ok/false usa otra escala de probabilidad, así que esto es una
 * lectura aproximada para clasificar, no el número exacto que usó el verificador).
 *
 * LIMITACIÓN: el plan pide sumar a "Discutible" las jugadas que son teoría conocida (≥50 partidas en la
 * base Masters), pero esa base (datos-privados/profundizar/masters.json, con la cantidad de partidas por
 * jugada) es un archivo privado de Mati, generado con su token de Lichess, y no está en este entorno; la
 * API en línea de Masters tampoco (lichess.org no es alcanzable acá). La clasificación de abajo es solo
 * por la pérdida en peones: una jugada muy jugada por maestros que acá sale "Grave" puede en realidad ser
 * "Discutible" una vez que Mati la mire con ese dato. Para cada "Grave"/"Discutible" se arma además una
 * propuesta PROVISORIA (no se aplica ningún cambio): sacar un "por qué no" débil, marcar `inferior`, o
 * corregir por la jugada del motor.
 *
 * Uso: node scripts/generar-fallas-jugadas.ts
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { fenDe, jugadaLegal, lineaConNumeros } from '../src/lib/ajedrez/posicion.ts'
import { Chess } from 'chessops/chess'
import type { Explicacion, ResultadoVerificacion } from '../src/lib/aperturas/explicaciones.ts'

const CARPETA = 'src/contenido/aperturas'
const SALIDA = 'docs/revision-aperturas/fallas-jugadas.md'
const UMBRAL_GRAVE = 1
const UMBRAL_DISCUTIBLE = 0.3

function fenEnPly(ucis: string[], hastaPly: number): string {
  const pos = Chess.default()
  for (const uci of ucis.slice(0, hastaPly)) {
    const m = jugadaLegal(pos, uci)
    if (!m) break
    pos.play(m)
  }
  return fenDe(pos)
}

/** Los dos valores de evaluación («+0,3», «−0,9», «mate en 4», «recibe mate en 3») que trae `detalle`. */
function evalsEnDetalle(detalle: string): [number, number] | undefined {
  const TOKEN = /mate en \d+|recibe mate en \d+|[+−-]?\d+,\d+/g
  const num = (t: string) => {
    if (/^mate en/.test(t)) return 100
    if (/^recibe mate en/.test(t)) return -100
    return Number(t.replace('−', '-').replace(',', '.'))
  }
  const m = [...detalle.matchAll(TOKEN)].map((x) => num(x[0]))
  return m.length >= 2 ? [m[0], m[1]] : undefined
}

type Categoria = 'Grave' | 'Discutible' | 'Ruido'

interface Fila {
  curso: string
  jugadas: string
  fen: string
  detalle: string
  diferencia: string
  categoria: Categoria
  propuesta: string
}
const filas: Fila[] = []
const ruidoPorCurso = new Map<string, number>()

for (const archivo of readdirSync(CARPETA).filter((f) => f.endsWith('.json'))) {
  const e: Explicacion = JSON.parse(readFileSync(`${CARPETA}/${archivo}`, 'utf8'))
  const resultados = e.verificacion?.resultados ?? {}
  for (const [clave, r] of Object.entries(resultados) as [string, ResultadoVerificacion][]) {
    if (r.ok) continue
    const esPorQueNo = clave.endsWith(' (por qué no)')
    const ucis = (esPorQueNo ? clave.slice(0, -' (por qué no)'.length) : clave).split(' ')
    const fen = fenEnPly(ucis, ucis.length - 1)
    const jugadas = lineaConNumeros('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', ucis) + (esPorQueNo ? ' (por qué no)' : '')
    const ilegal = r.detalle === 'Jugada ilegal'
    const evs = ilegal ? undefined : evalsEnDetalle(r.detalle)
    const diff = evs ? Math.abs(evs[0] - evs[1]) : undefined
    const categoria: Categoria = ilegal || diff === undefined || diff > UMBRAL_GRAVE ? 'Grave' : diff >= UMBRAL_DISCUTIBLE ? 'Discutible' : 'Ruido'
    if (categoria === 'Ruido') {
      ruidoPorCurso.set(e.nombre, (ruidoPorCurso.get(e.nombre) ?? 0) + 1)
      continue
    }
    const diferencia = diff !== undefined ? `${diff.toFixed(2)} peones (aprox.)` : '—'
    let propuesta: string
    if (ilegal) propuesta = 'sacar: la raíz o la línea no son legales (revisar antes que nada).'
    else if (esPorQueNo) propuesta = 'sacar este «por qué no»: la alternativa no pierde lo suficiente para ser un ejemplo claro.'
    else if (categoria === 'Discutible') propuesta = 'marcar como `inferior` con una nota («teoría aceptada, el motor prefiere X»), si corresponde — ver la limitación de Masters arriba.'
    else propuesta = 'corregir por la jugada que prefiere el motor (ver «detalle»), o sacar la nota si esa jugada lleva a otra apertura o no es variante propia de este curso.'
    filas.push({ curso: e.nombre, jugadas, fen, detalle: r.detalle, diferencia, categoria, propuesta })
  }
}

const graves = filas.filter((f) => f.categoria === 'Grave').sort((a, b) => a.curso.localeCompare(b.curso))
const discutibles = filas.filter((f) => f.categoria === 'Discutible').sort((a, b) => a.curso.localeCompare(b.curso))
const totalRuido = [...ruidoPorCurso.values()].reduce((s, n) => s + n, 0)

const fila = (f: Fila) => `| ${f.curso} | ${f.jugadas} | \`${f.fen}\` | ${f.detalle.replace(/\|/g, '\\|')} | ${f.diferencia} | ${f.propuesta} |`
const tabla = (fs: Fila[]) => `| Curso | Jugadas desde la raíz | FEN (antes de la última jugada) | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- | --- |
${fs.map(fila).join('\n')}`

const md = `# Jugadas que fallan la verificación — triage (Fase C3)

Generado por \`scripts/generar-fallas-jugadas.ts\` a partir del campo \`verificacion\` que deja
\`node scripts/verificar-explicaciones.ts 18\` en cada \`src/contenido/aperturas/*.json\` (motor: ver el PR
sobre la versión de Stockfish usada). **Las propuestas son provisorias: no se aplicó ningún cambio**; las
decide Mati con Opus. Clasificación por pérdida en peones (ver la limitación de Masters en la cabecera del
script: no se pudo cruzar con la base Masters, así que algo "Grave" acá puede ser teoría conocida).

Total: **${filas.length + totalRuido} jugadas** — **${graves.length} graves**, **${discutibles.length} discutibles**, **${totalRuido} ruido**.

## Graves (${graves.length})

Pierden más de ${UMBRAL_GRAVE} peón respecto de la mejor, son ilegales, o el motor ve mate.

${tabla(graves)}

## Discutibles (${discutibles.length})

Entre ${UMBRAL_DISCUTIBLE} y ${UMBRAL_GRAVE} peón.

${tabla(discutibles)}

## Ruido (${totalRuido})

Menos de ${UMBRAL_DISCUTIBLE} peón: probablemente teoría aceptada con una pérdida chica. Solo la cantidad
por curso; no se listan una por una.

| Curso | Cantidad |
| --- | --- |
${[...ruidoPorCurso.entries()].sort((a, b) => b[1] - a[1]).map(([c, n]) => `| ${c} | ${n} |`).join('\n')}
`
mkdirSync('docs/revision-aperturas', { recursive: true })
writeFileSync(SALIDA, md)
// Sidecar para scripts/generar-para-opus.ts (no reparsea el .md).
writeFileSync('docs/revision-aperturas/fallas-jugadas.json', JSON.stringify({ graves, discutibles, totalRuido }))
console.log(`${SALIDA}: ${graves.length} graves, ${discutibles.length} discutibles, ${totalRuido} ruido.`)
