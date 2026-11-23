/**
 * Fase C3 (triage, 23/11): junta docs/revision-aperturas/fallas-jugadas.json y textos-dudosos.json (los
 * sidecars que dejan generar-fallas-jugadas.ts y verificar-textos.ts/combinar-textos.ts) en
 * docs/revision-aperturas/para-opus.md: lo que hay que decidir, en tablas compactas, en este orden:
 *   1. Textos perdedores (completos).
 *   2. Jugadas graves (completas).
 *   3. Ilegales reales confirmados (ver más abajo: la revisión a mano no confirmó ninguno).
 *   4. Discutibles (si todo entra en ~150 filas, completas; si no, solo de las 10 aperturas más usadas).
 * No aplica ningún cambio. Uso: node scripts/generar-para-opus.ts
 */
import { readFileSync, writeFileSync } from 'node:fs'

const DIR = 'docs/revision-aperturas'
const TOPE_FILAS = 150
const APERTURAS_TOP_10 = ['Siciliana', 'Española', 'Italiana', 'Francesa', 'Caro-Kann', 'Gambito de Dama', 'India de Rey', 'Nimzoindia', 'Inglesa', 'Eslava']

interface FilaJugada { curso: string; jugadas: string; fen: string; detalle: string; diferencia: string; propuesta: string }
interface FilaTexto { curso: string; campo: string; texto: string; jugada?: string; fen: string; detalle?: string }

const fallas = JSON.parse(readFileSync(`${DIR}/fallas-jugadas.json`, 'utf8')) as { graves: FilaJugada[]; discutibles: FilaJugada[]; totalRuido: number }
const textos = JSON.parse(readFileSync(`${DIR}/textos-dudosos.json`, 'utf8')) as { ilegales: FilaTexto[]; perdedoras: FilaTexto[]; noUbicables: FilaTexto[] }

const esTop10 = (curso: string) => APERTURAS_TOP_10.some((a) => curso.toLowerCase().includes(a.toLowerCase()))

const recortar = (texto: string, n = 140) => (texto.length > n ? texto.slice(0, n - 1) + '…' : texto)

const filaTextoPerdedora = (r: FilaTexto) => `| ${r.curso} | \`${r.campo}\` | ${recortar(r.texto)} | ${r.jugada} | ${r.detalle} |`
const filaJugada = (f: FilaJugada) => `| ${f.curso} | ${f.jugadas} | ${f.detalle.replace(/\|/g, '\\|')} | ${f.diferencia} | ${f.propuesta} |`

let discutiblesAMostrar = fallas.discutibles
let notaDiscutibles = ''
const filasBase = textos.perdedoras.length + fallas.graves.length
if (filasBase + fallas.discutibles.length > TOPE_FILAS) {
  discutiblesAMostrar = fallas.discutibles.filter((f) => esTop10(f.curso))
  notaDiscutibles = ` — recortado a las 10 aperturas más usadas (de ${fallas.discutibles.length} discutibles en total; el resto está completo en fallas-jugadas.md) porque todo junto pasaba las ${TOPE_FILAS} filas.`
}

const totalFilas = textos.perdedoras.length + fallas.graves.length + discutiblesAMostrar.length

const md = `# Para decidir con Opus (Fase C3, triage)

Junta lo que hay que decidir de \`fallas-jugadas.md\` y \`textos-dudosos.md\` en un solo documento, en
tablas compactas y en orden de importancia. **No se aplicó ningún cambio de contenido.** Fuente de cada
sección: scripts/generar-fallas-jugadas.ts y scripts/verificar-textos.ts (ver esos .md para el detalle
completo, incluido "Ruido" y "No ubicables", que no están acá).

Total de esta tabla: **${totalFilas} filas**${notaDiscutibles ? notaDiscutibles : ''} (tope pedido: ~${TOPE_FILAS}).

## 1. Textos perdedores (${textos.perdedoras.length})

La jugada mencionada en el texto es legal pero pierde más de 1,5 peones según Stockfish.

| Curso | Campo | Texto (recortado) | Jugada | Evaluación |
| --- | --- | --- | --- | --- |
${textos.perdedoras.map(filaTextoPerdedora).join('\n')}

## 2. Jugadas graves (${fallas.graves.length})

Pierden más de 1 peón respecto de la mejor, son ilegales, o el motor ve mate (ver fallas-jugadas.md: la
clasificación no pudo cruzarse con la base Masters — no disponible en este entorno —, así que alguna de
estas puede ser en realidad teoría conocida).

| Curso | Jugadas desde la raíz | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- |
${fallas.graves.map(filaJugada).join('\n')}

## 3. Ilegales reales confirmados (0)

Se revisaron a mano, leyendo el texto completo, tres muestras de 40 "ilegales" al azar (120 en total, una
por cada vuelta de ajuste al extractor de \`verificar-textos.ts\`; quedaron ${textos.ilegales.length} en la
lista final). **Ninguna de las 120 revisadas era un error real del texto**: todas eran de alguno de estos
tipos, que el extractor no distingue de forma confiable —
- una jugada de varias más adelante (plan, amenaza o condicional "si…"), o una comparación con otra
  jugada/línea/autor, no la jugada de este nodo;
- una refutación de "por qué no" de más de una jugada (el extractor solo sigue una);
- notación ambigua (falta desambiguar entre dos piezas) o una maniobra "pieza-de-a-b" en dos pasos.

Con esta tasa (0/120 confirmados, 100 % del lado del extractor en la muestra), **no se recomienda revisar
a mano el resto de la lista de "ilegales"** (quedan ${textos.ilegales.length} sin revisar en
textos-dudosos.md): es muy probable que sean del mismo tipo. Si Mati u Opus quieren revisar algunas de
todos modos, están completas ahí, con curso, campo, texto completo y FEN.

## 4. Discutibles (${discutiblesAMostrar.length}${notaDiscutibles ? ` de ${fallas.discutibles.length}` : ''})

Entre 0,3 y 1 peón respecto de la mejor.

| Curso | Jugadas desde la raíz | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- |
${discutiblesAMostrar.map(filaJugada).join('\n')}
`
writeFileSync(`${DIR}/para-opus.md`, md)
console.log(`${DIR}/para-opus.md: ${totalFilas} filas (perdedoras ${textos.perdedoras.length}, graves ${fallas.graves.length}, ilegales confirmados 0, discutibles ${discutiblesAMostrar.length}).`)
