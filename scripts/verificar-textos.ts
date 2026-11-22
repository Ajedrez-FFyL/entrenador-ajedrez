/**
 * Fase C3, paso 2: revisa las jugadas que se MENCIONAN en los textos de las explicaciones de aperturas
 * (src/contenido/aperturas/*.json) — a diferencia de verificar-explicaciones.ts, que verifica las jugadas
 * de las lecciones (`notas`/`porQueNo`), este script busca jugadas escritas dentro del TEXTO en prosa.
 *
 * Qué recorre y en qué posición la ubica (el «nodo» de ese texto):
 *  - `notas[clave].porQue`: la posición DESPUÉS de jugar `clave` (la jugada que el texto explica).
 *  - `notas[clave].porQueNo[].texto`: la posición después de `clave.slice(0,-1) + alt.uci` (después de la
 *    jugada mala que no conviene), porque el texto explica CÓMO se castiga, es decir las jugadas que vienen
 *    después de jugarla.
 *  - `trampas[].texto`: la posición final de `trampa.jugadas` (la trampa ya completa).
 *  - `planesBlancas`, `planesNegras`, `estructura`, `rupturas`: son ideas generales sobre el curso, no
 *    atadas a una jugada ni una posición exacta (pueden describir algo varias jugadas después de la raíz).
 *    Por eso NO se intenta verificar su legalidad: toda jugada que mencionen se anota en «no ubicables»
 *    para que una persona la revise con el contexto completo (paso 3 de C3, no automatizado).
 *
 * Para cada jugada ubicable se comprueba (a) que sea legal en esa posición y (b) que no pierda más de 1,5
 * peones según Stockfish (profundidad 16, un hilo). Solo se verifica la PRIMERA jugada que aparece en cada
 * texto: un texto puede describir una secuencia de varias jugadas, y no hay forma confiable de saber en qué
 * posición ubicar la segunda sin jugar la primera, así que no se encadenan.
 *
 * Limitación conocida (heurística, no hay forma de evitarla sin leer el texto): el extractor puede confundir
 * una jugada real con una casilla mencionada sin que sea una jugada propuesta («controla d5», «el alfil de
 * d3»); por eso esto es un primer filtro mecánico, no un veredicto. El paso 3 de C3 (revisión manual con
 * Opus) decide caso por caso; este script no corrige ni marca nada en los JSON.
 *
 * Uso: node scripts/verificar-textos.ts [profundidad] [archivo ...]
 * Sin archivos, revisa los 96 y escribe el .md final. Con archivos (para correr varios procesos en
 * paralelo, uno por núcleo), revisa solo esos y, en vez del .md, escribe un JSON parcial en
 * docs/revision-aperturas/.parcial-<primer archivo>.json; después, `node scripts/combinar-textos.ts`
 * junta todos los parciales de esa carpeta en el .md final y los borra.
 * Motor: variable de entorno STOCKFISH (ruta al ejecutable); por defecto, el que ya estaba instalado.
 * Termina con código 1 si hay jugadas ilegales o perdedoras (para usarlo en CI).
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { invertir, textoEvaluacion, type Evaluacion } from '../src/lib/ajedrez/evaluacion.ts'
import { fenDe, jugarUci, posDesdeFen, uciDeSan } from '../src/lib/ajedrez/posicion.ts'
import { fensDeLinea } from '../src/lib/aperturas/arbol.ts'
import type { Explicacion } from '../src/lib/aperturas/explicaciones.ts'
import { MotorNativo } from './lib-motor.ts'

const PROFUNDIDAD = Number(process.argv[2] ?? 16)
const MAXIMO_PEONES = 1.5
const CARPETA = 'src/contenido/aperturas'
const SALIDA = 'docs/revision-aperturas/textos-dudosos.md'

const motor = new MotorNativo(PROFUNDIDAD)

// Letras de pieza: castellano (R D T A C) e inglés (K Q B N); la «R» castellana (Rey) y la inglesa (Rook)
// no pueden distinguirse por la letra sola, y en estos textos (redactados en castellano) R siempre es Rey.
const LETRA_A_INGLES: Record<string, string> = { R: 'K', D: 'Q', T: 'R', A: 'B', C: 'N', K: 'K', Q: 'Q', B: 'B', N: 'N' }
const sanAIngles = (san: string) => san.replace(/[KQBNRDTAC]/g, (l) => LETRA_A_INGLES[l])

// Una jugada en notación algebraica: enroque, jugada de pieza (con desambiguación y captura opcionales) o
// de peón (con captura opcional), con promoción y jaque/mate opcionales.
const PATRON_JUGADA = /O-O-O|O-O|0-0-0|0-0|[KQBNRDTAC][a-h]?[1-8]?x?[a-h][1-8](?:=[KQBNRDTAC])?[+#]?|[a-h]x?[a-h]?[1-8](?:=[KQBNRDTAC])?[+#]?/g

/** Jugadas mencionadas en un texto, en el orden en que aparecen (en inglés, listas para `uciDeSan`). */
function jugadasEnTexto(texto: string): string[] {
  return [...texto.matchAll(PATRON_JUGADA)].map((m) => sanAIngles(m[0]))
}

const peones = (ev: Evaluacion) => (ev.mate !== undefined ? (ev.mate > 0 ? 99 : -99) : (ev.cp ?? 0) / 100)

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

/** Comprueba la primera jugada del texto en `fen`; agrega a `ilegales` o `perdedoras` si corresponde. */
async function verificarEnPosicion(curso: string, campo: string, texto: string, fen: string) {
  const [san] = jugadasEnTexto(texto)
  if (!san) return
  const pos = posDesdeFen(fen)
  const uci = uciDeSan(pos, san)
  if (!uci) {
    ilegales.push({ curso, campo, texto, jugada: san, fen })
    return
  }
  const antes = await motor.analizar(fen)
  let perdida: number
  let detalle: string
  if (antes.mejor === uci) {
    perdida = 0
    detalle = ''
  } else {
    const sig = jugarUci(pos, uci)!
    const despues = await motor.analizar(fenDe(sig))
    const evDespues = invertir(despues.ev)
    perdida = peones(antes.ev) - peones(evDespues)
    detalle = `Stockfish (prof. ${PROFUNDIDAD}) prefiere ${antes.mejor}: ${textoEvaluacion(antes.ev)} contra ${textoEvaluacion(evDespues)} (pierde ${perdida.toFixed(2)} peones)`
  }
  if (perdida > MAXIMO_PEONES) perdedoras.push({ curso, campo, texto, jugada: san, fen, detalle })
}

/** Textos generales (planes, estructura, rupturas): no atados a una jugada, van directo a «no ubicables». */
function anotarSiMencionaJugada(curso: string, campo: string, texto: string, fen: string) {
  if (jugadasEnTexto(texto).length) noUbicables.push({ curso, campo, texto, fen })
}

const SOLO = process.argv.slice(3).map((a) => a.split('/').pop()!).map((a) => (a.endsWith('.json') ? a : `${a}.json`))
const archivos = readdirSync(CARPETA).filter((f) => f.endsWith('.json') && (!SOLO.length || SOLO.includes(f)))

for (const archivo of archivos) {
  const e: Explicacion = JSON.parse(readFileSync(`${CARPETA}/${archivo}`, 'utf8'))
  const raizArr = e.raiz.split(' ')
  const fenRaiz = fensDeLinea(raizArr).at(-1)!

  for (const texto of e.planesBlancas) anotarSiMencionaJugada(e.nombre, 'planesBlancas', texto, fenRaiz)
  for (const texto of e.planesNegras) anotarSiMencionaJugada(e.nombre, 'planesNegras', texto, fenRaiz)
  if (e.estructura) anotarSiMencionaJugada(e.nombre, 'estructura', e.estructura, fenRaiz)
  for (const texto of e.rupturas) anotarSiMencionaJugada(e.nombre, 'rupturas', texto, fenRaiz)

  for (const [clave, nota] of Object.entries(e.notas)) {
    const ucis = clave.split(' ')
    const prefijo = ucis.slice(0, -1)
    const fenClave = fensDeLinea(ucis).at(-1)
    if (fenClave) await verificarEnPosicion(e.nombre, `notas["${clave}"].porQue`, nota.porQue, fenClave)
    for (const alt of nota.porQueNo ?? []) {
      const fenAlt = fensDeLinea([...prefijo, alt.uci]).at(-1)
      if (fenAlt) await verificarEnPosicion(e.nombre, `notas["${clave}"].porQueNo["${alt.uci}"]`, alt.texto, fenAlt)
    }
  }

  for (const t of e.trampas) {
    const ucis = t.jugadas.split(' ')
    const fenFinal = fensDeLinea(ucis).at(-1)
    if (fenFinal) await verificarEnPosicion(e.nombre, `trampas["${t.jugadas}"]`, t.texto, fenFinal)
  }

  console.log(`${archivo}: revisado`)
}
motor.cerrar()

mkdirSync('docs/revision-aperturas', { recursive: true })
if (SOLO.length) {
  const parcial = `docs/revision-aperturas/.parcial-${archivos[0]?.replace('.json', '') ?? 'vacio'}.json`
  writeFileSync(parcial, JSON.stringify({ ilegales, perdedoras, noUbicables }))
  console.log(`\n${parcial}: ${ilegales.length} ilegales, ${perdedoras.length} perdedoras, ${noUbicables.length} no ubicables.`)
  process.exit(ilegales.length || perdedoras.length ? 1 : 0)
}

const filaIlegal = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} | ${r.jugada} | \`${r.fen}\` |`
const filaPerdedora = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} | ${r.jugada} | ${r.detalle} | \`${r.fen}\` |`
const filaNoUbicable = (r: Resultado) => `| ${r.curso} | \`${r.campo}\` | ${r.texto.replace(/\|/g, '\\|')} |`

const md = `# Textos dudosos de aperturas (Fase C3, paso 2)

Generado por \`scripts/verificar-textos.ts\` con Stockfish 16 (no se consiguió Stockfish 18: GitHub y
stockfishchess.org están bloqueados por la red de este entorno; ver el PR), profundidad ${PROFUNDIDAD}.
Revisa las jugadas mencionadas en los textos en prosa de los ${readdirSync(CARPETA).filter((f) => f.endsWith('.json')).length} cursos. No modifica ningún JSON. Metodología y limitaciones en la
cabecera del script.

## Jugadas ilegales (${ilegales.length})

La primera jugada mencionada en el texto no es legal en la posición de ese nodo.

| Curso | Campo | Texto | Jugada detectada | FEN del nodo |
| --- | --- | --- | --- | --- |
${ilegales.map(filaIlegal).join('\n')}

## Jugadas que pierden más de ${MAXIMO_PEONES} peones (${perdedoras.length})

| Curso | Campo | Texto | Jugada detectada | Evaluación | FEN del nodo |
| --- | --- | --- | --- | --- | --- |
${perdedoras.map(filaPerdedora).join('\n')}

## No ubicables — planes genéricos, para revisión humana (${noUbicables.length})

Textos de \`planesBlancas\`/\`planesNegras\`/\`estructura\`/\`rupturas\` que mencionan al menos una jugada;
no se verifican porque describen ideas generales, no la jugada exacta de un nodo (ver cabecera del script).

| Curso | Campo | Texto |
| --- | --- | --- |
${noUbicables.map(filaNoUbicable).join('\n')}
`
writeFileSync(SALIDA, md)
console.log(`\n${SALIDA}: ${ilegales.length} ilegales, ${perdedoras.length} perdedoras, ${noUbicables.length} no ubicables.`)
process.exit(ilegales.length || perdedoras.length ? 1 : 0)
