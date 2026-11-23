/**
 * Fase C3, paso 1: genera docs/revision-aperturas/fallas-jugadas.md a partir del campo `verificacion`
 * que ya quedó escrito en cada src/contenido/aperturas/*.json por `verificar-explicaciones.ts` (no corre
 * Stockfish de nuevo). Para cada jugada con `ok: false` arma una propuesta PROVISORIA (no la aplica):
 *  - "(por qué no)" que no pierde lo suficiente → sacarla (no se fuerza el ejemplo).
 *  - nota cuya pérdida no supera 0,15 → marcarla `inferior` con una nota.
 *  - nota que pierde más de 0,15 → corregir por la jugada que prefiere el motor, o sacarla si esa
 *    jugada no es una variante propia del curso.
 * La pérdida en peones se lee de los dos valores de evaluación que ya guarda `detalle` (son centipeones
 * reales, /100; el umbral que decidió ok/false usa otra escala de probabilidad, así que esto es una
 * lectura aproximada para ordenar la revisión, no el número exacto que usó el verificador).
 *
 * Uso: node scripts/generar-fallas-jugadas.ts
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { fenDe, jugadaLegal, lineaConNumeros } from '../src/lib/ajedrez/posicion.ts'
import { Chess } from 'chessops/chess'
import type { Explicacion, ResultadoVerificacion } from '../src/lib/aperturas/explicaciones.ts'

const CARPETA = 'src/contenido/aperturas'
const SALIDA = 'docs/revision-aperturas/fallas-jugadas.md'

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

interface Fila {
  jugadas: string
  fen: string
  detalle: string
  diferencia: string
  propuesta: string
}
const porCurso = new Map<string, Fila[]>()
let totalFallas = 0

for (const archivo of readdirSync(CARPETA).filter((f) => f.endsWith('.json'))) {
  const e: Explicacion = JSON.parse(readFileSync(`${CARPETA}/${archivo}`, 'utf8'))
  const resultados = e.verificacion?.resultados ?? {}
  const filas: Fila[] = []
  for (const [clave, r] of Object.entries(resultados) as [string, ResultadoVerificacion][]) {
    if (r.ok) continue
    totalFallas++
    const esPorQueNo = clave.endsWith(' (por qué no)')
    const ucis = (esPorQueNo ? clave.slice(0, -' (por qué no)'.length) : clave).split(' ')
    const fen = fenEnPly(ucis, ucis.length - 1)
    const jugadas = lineaConNumeros('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', ucis) + (esPorQueNo ? ' (por qué no)' : '')
    const evs = evalsEnDetalle(r.detalle)
    const diferencia = evs ? Math.abs(evs[0] - evs[1]).toFixed(2) + ' peones (aprox., ver nota arriba)' : '—'
    const diff = evs ? Math.abs(evs[0] - evs[1]) : undefined
    let propuesta: string
    if (r.detalle === 'Jugada ilegal') propuesta = 'sacar: la raíz o la línea no son legales (revisar antes que nada).'
    else if (esPorQueNo) propuesta = 'sacar este «por qué no»: la alternativa no pierde lo suficiente para ser un ejemplo claro.'
    else if (diff !== undefined && diff <= 0.15) propuesta = 'marcar como `inferior` con una nota («teoría aceptada, el motor prefiere X»).'
    else propuesta = 'corregir por la jugada que prefiere el motor (ver «detalle»), o sacar la nota si esa jugada lleva a otra apertura o no es variante propia de este curso.'
    filas.push({ jugadas, fen, detalle: r.detalle, diferencia, propuesta })
  }
  if (filas.length) porCurso.set(e.nombre, filas)
}

const secciones = [...porCurso.entries()]
  .sort((a, b) => b[1].length - a[1].length)
  .map(
    ([nombre, filas]) => `## ${nombre} (${filas.length})

| Jugadas desde la raíz | FEN (antes de la última jugada) | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- |
${filas.map((f) => `| ${f.jugadas} | \`${f.fen}\` | ${f.detalle.replace(/\|/g, '\\|')} | ${f.diferencia} | ${f.propuesta} |`).join('\n')}
`,
  )
  .join('\n')

const md = `# Jugadas que fallan la verificación (Fase C3, paso 1)

Generado por \`scripts/generar-fallas-jugadas.ts\` a partir del campo \`verificacion\` que deja
\`node scripts/verificar-explicaciones.ts 18\` en cada \`src/contenido/aperturas/*.json\` (motor: ver el PR
sobre la versión de Stockfish usada). **Las propuestas son provisorias: no se aplicó ningún cambio**; las
decide Mati con Opus (paso 3 de C3).

Total: **${totalFallas} jugadas** en **${porCurso.size} cursos**.

${secciones}
`
mkdirSync('docs/revision-aperturas', { recursive: true })
writeFileSync(SALIDA, md)
console.log(`${SALIDA}: ${totalFallas} fallas en ${porCurso.size} cursos.`)
