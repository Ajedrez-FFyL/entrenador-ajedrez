/**
 * Junta los parciales que dejan las corridas en paralelo de `verificar-textos.ts <profundidad> <archivos...>`
 * (docs/revision-aperturas/.parcial-*.json) en el docs/revision-aperturas/textos-dudosos.md final, y borra
 * los parciales. Uso: node scripts/combinar-textos.ts [profundidad] [cantidadDeCursos]
 */
import { readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs'

const PROFUNDIDAD = process.argv[2] ?? '16'
const CANTIDAD_CURSOS = process.argv[3] ?? '96'
const CARPETA = 'docs/revision-aperturas'
const SALIDA = `${CARPETA}/textos-dudosos.md`

interface Resultado {
  curso: string
  campo: string
  texto: string
  jugada?: string
  fen: string
  detalle?: string
}
const ilegales: Resultado[] = []
const perdedoras: Resultado[] = []
const noUbicables: Resultado[] = []

const parciales = readdirSync(CARPETA).filter((f) => f.startsWith('.parcial-') && f.endsWith('.json'))
if (!parciales.length) { console.log('No hay parciales para combinar.'); process.exit(1) }
for (const f of parciales) {
  const p = JSON.parse(readFileSync(`${CARPETA}/${f}`, 'utf8'))
  ilegales.push(...p.ilegales)
  perdedoras.push(...p.perdedoras)
  noUbicables.push(...p.noUbicables)
}

const filaIlegal = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} | ${r.jugada} | \`${r.fen}\` |`
const filaPerdedora = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} | ${r.jugada} | ${r.detalle} | \`${r.fen}\` |`
const filaNoUbicable = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} |`

const md = `# Textos dudosos de aperturas (Fase C3, paso 2)

Generado por \`scripts/verificar-textos.ts\` (corrido en paralelo y combinado con \`combinar-textos.ts\`)
con el motor del paquete npm \`stockfish\` (build \`single\`, id UCI "Stockfish 19 WASM" — ver el PR),
profundidad ${PROFUNDIDAD}. Revisa las jugadas mencionadas en los textos en prosa de los ${CANTIDAD_CURSOS}
cursos. No modifica ningún JSON. Metodología y limitaciones en la cabecera de \`scripts/verificar-textos.ts\`.

## Jugadas ilegales (${ilegales.length})

La primera jugada mencionada en el texto no es legal en la posición de ese nodo.

| Curso | Campo | Texto | Jugada detectada | FEN del nodo |
| --- | --- | --- | --- | --- |
${ilegales.map(filaIlegal).join('\n')}

## Jugadas que pierden más de 1,5 peones (${perdedoras.length})

| Curso | Campo | Texto | Jugada detectada | Evaluación | FEN del nodo |
| --- | --- | --- | --- | --- | --- |
${perdedoras.map(filaPerdedora).join('\n')}

## No ubicables — planes genéricos, para revisión humana (${noUbicables.length})

Textos de \`planesBlancas\`/\`planesNegras\`/\`estructura\`/\`rupturas\` que mencionan al menos una jugada, y
cualquier otro texto con «prepara» (siempre describe una jugada de varias más adelante). No se verifican
porque describen ideas generales, no la jugada exacta de un nodo (ver cabecera de
\`scripts/verificar-textos.ts\`).

| Curso | Campo | Texto |
| --- | --- | --- |
${noUbicables.map(filaNoUbicable).join('\n')}
`
writeFileSync(SALIDA, md)
// Sidecar para scripts/generar-para-opus.ts (no reparsea el .md).
writeFileSync(`${CARPETA}/textos-dudosos.json`, JSON.stringify({ ilegales, perdedoras, noUbicables }))
for (const f of parciales) unlinkSync(`${CARPETA}/${f}`)
console.log(`${SALIDA}: ${ilegales.length} ilegales, ${perdedoras.length} perdedoras, ${noUbicables.length} no ubicables (${parciales.length} parciales combinados y borrados).`)
