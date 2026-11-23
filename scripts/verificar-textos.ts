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
 * Limitación conocida (heurística, no hay forma de evitarla sin leer el texto): una jugada de peón SIN
 * captura ni coronación («e5», «d4» sueltos) no se verifica — ver el comentario de PATRON_JUGADA, era la
 * fuente de miles de falsos «ilegal» («ataca e5» no es la jugada e5). Un texto con «prepara» (siempre
 * describe una jugada de varias más adelante, no la de este nodo: «prepara Cc3») va directo a «no
 * ubicables», igual que los planes generales. El extractor también puede confundir una jugada de pieza
 * real con una mención que no es una jugada propuesta («el alfil de d3 queda activo») o con una descripción
 * condicional de varias jugadas más adelante («si el blanco recupera con la dama, ...Cc6 la ataca»: la
 * posición de ese nodo no es donde se podría jugar ...Cc6); por eso esto es un primer filtro mecánico, no
 * un veredicto, y toda fila de «ilegales»/«perdedoras» puede ser en realidad una de estas dos cosas. El
 * paso 3 de C3 (revisión manual con Opus) decide caso por caso; este script no corrige ni marca nada en
 * los JSON.
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

// Una jugada en notación algebraica, SOLO las formas que no se confunden con nombrar una casilla al pasar
// («ataca e5», «el alfil de d3»): enroque, jugada de pieza (con desambiguación y captura opcionales),
// captura de peón (lleva x) o coronación (lleva =), con jaque/mate opcional. Una jugada de peón SIN captura
// ni coronación («e5», «d4» sueltos) no cuenta como jugada mencionada: en estos textos, en prosa, eso casi
// siempre nombra la casilla que ataca o defiende la jugada recién hecha, no propone una jugada nueva — y
// confundirlas daba miles de falsos «ilegal» (la casilla ya está jugada, claro que no se puede jugar de nuevo).
const PATRON_JUGADA = /O-O-O|O-O|0-0-0|0-0|[KQBNRDTAC][a-h]?[1-8]?x?[a-h][1-8](?:=[KQBNRDTAC])?[+#]?|[a-h]x[a-h][1-8](?:=[KQBNRDTAC])?[+#]?|[a-h][1-8]=[KQBNRDTAC][+#]?/g

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

/** «prepara X» siempre describe una jugada de varias más adelante, nunca la de este nodo. */
const esPlanALargoPlazo = (texto: string) => /\bprepara(n|ndo)?\b/i.test(texto)

/** Analiza `uci` en `fen` y agrega a `ilegales` o `perdedoras` si corresponde; `san` es solo para mostrar. */
async function verificarJugada(curso: string, campo: string, texto: string, san: string, uci: string, fen: string) {
  const antes = await motor.analizar(fen)
  let perdida: number
  let detalle: string
  if (antes.mejor === uci) {
    perdida = 0
    detalle = ''
  } else {
    const sig = jugarUci(posDesdeFen(fen), uci)!
    const despues = await motor.analizar(fenDe(sig))
    const evDespues = invertir(despues.ev)
    perdida = peones(antes.ev) - peones(evDespues)
    detalle = `Stockfish (prof. ${PROFUNDIDAD}) prefiere ${antes.mejor}: ${textoEvaluacion(antes.ev)} contra ${textoEvaluacion(evDespues)} (pierde ${perdida.toFixed(2)} peones)`
  }
  if (perdida > MAXIMO_PEONES) perdedoras.push({ curso, campo, texto, jugada: san, fen, detalle })
}

/** Comprueba la primera jugada del texto en `fen`; agrega a `ilegales` o `perdedoras` si corresponde. */
async function verificarEnPosicion(curso: string, campo: string, texto: string, fen: string) {
  if (esPlanALargoPlazo(texto)) {
    noUbicables.push({ curso, campo, texto, fen })
    return
  }
  const [san] = jugadasEnTexto(texto)
  if (!san) return
  const uci = uciDeSan(posDesdeFen(fen), san)
  if (!uci) {
    ilegales.push({ curso, campo, texto, jugada: san, fen })
    return
  }
  await verificarJugada(curso, campo, texto, san, uci, fen)
}

/**
 * Para `porQueNo`: el texto casi siempre arranca repitiendo la jugada mala («6.Cd2? e5!: …»), que ya
 * conocemos (es `altUci`) y no es una jugada nueva propuesta; si la primera jugada del texto resuelve,
 * EN LA POSICIÓN DEL PREFIJO (donde se juega la alternativa), a la misma jugada, se descarta y se usa la
 * siguiente (la refutación, que si menciona una jugada es en `fenAlt`). Sin esto, ese primer token se
 * terminaba comprobando — mal — como si fuera legal todavía en `fenAlt`, después de jugarse dos veces.
 */
async function verificarPorQueNo(curso: string, campo: string, texto: string, fenPrefijo: string, altUci: string, fenAlt: string) {
  if (esPlanALargoPlazo(texto)) {
    noUbicables.push({ curso, campo, texto, fen: fenAlt })
    return
  }
  const sanes = jugadasEnTexto(texto)
  let san = sanes[0]
  if (san && uciDeSan(posDesdeFen(fenPrefijo), san) === altUci) san = sanes[1]
  if (!san) return
  const uci = uciDeSan(posDesdeFen(fenAlt), san)
  if (!uci) {
    ilegales.push({ curso, campo, texto, jugada: san, fen: fenAlt })
    return
  }
  await verificarJugada(curso, campo, texto, san, uci, fenAlt)
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
    // Una nota `error` explica, en `porQue`, qué convenía JUGAR EN VEZ de la jugada marcada como error
    // ("era mejor X"): esa jugada es una alternativa en la posición ANTERIOR (el prefijo), no una jugada
    // después de la que se juega. Sin esto, cientos de textos de error daban falsos "ilegal".
    const fenPorQue = nota.error ? fensDeLinea(prefijo).at(-1) : fensDeLinea(ucis).at(-1)
    if (fenPorQue) await verificarEnPosicion(e.nombre, `notas["${clave}"].porQue`, nota.porQue, fenPorQue)
    const fenPrefijo = fensDeLinea(prefijo).at(-1)
    for (const alt of nota.porQueNo ?? []) {
      const fenAlt = fensDeLinea([...prefijo, alt.uci]).at(-1)
      if (fenPrefijo && fenAlt) await verificarPorQueNo(e.nombre, `notas["${clave}"].porQueNo["${alt.uci}"]`, alt.texto, fenPrefijo, alt.uci, fenAlt)
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

Textos de \`planesBlancas\`/\`planesNegras\`/\`estructura\`/\`rupturas\` que mencionan al menos una jugada, y
cualquier otro texto con «prepara» (siempre describe una jugada de varias más adelante). No se verifican
porque describen ideas generales, no la jugada exacta de un nodo (ver cabecera del script).

| Curso | Campo | Texto |
| --- | --- | --- |
${noUbicables.map(filaNoUbicable).join('\n')}
`
writeFileSync(SALIDA, md)
console.log(`\n${SALIDA}: ${ilegales.length} ilegales, ${perdedoras.length} perdedoras, ${noUbicables.length} no ubicables.`)
process.exit(ilegales.length || perdedoras.length ? 1 : 0)
