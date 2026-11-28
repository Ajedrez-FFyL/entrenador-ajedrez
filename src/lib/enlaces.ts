/**
 * Links directos: el hash tiene la forma `#/<seccion>/<resto…>` y cada pantalla interpreta el resto.
 *   #/tactica/tema/<tema>[/libros]     ejercicios de un tema (Lichess, o de libros si se agrega /libros
 *                                      o si el tema solo existe en libros)
 *   #/aperturas/curso/<curso>[/blancas|/negras]
 *   #/finales/tema/<tema>
 *   #/biblioteca/<ID de ficha>
 * Sin dependencias de Svelte ni del navegador, para que lo use también `scripts/listar-links.ts`.
 */
import { SECCIONES, type IdSeccion } from './secciones.ts'

export interface Ruta {
  seccion: IdSeccion
  resto: string[]
}

export function parsearHash(hash: string): Ruta {
  const [primero, ...resto] = hash.replace(/^#\/?/, '').split('?')[0].split('/')
  const seccion = SECCIONES.some((s) => s.id === primero) ? (primero as IdSeccion) : 'partidas'
  return { seccion, resto: resto.filter(Boolean).map(decodificar) }
}

function decodificar(s: string): string {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

export const hashDe = (seccion: IdSeccion, ...resto: string[]) => `#/${[seccion, ...resto].map(encodeURIComponent).join('/')}`

export const SITIO = 'https://ajedrez-ffyl.github.io/entrenador-ajedrez/'

// ── Táctica ──────────────────────────────────────────────────────────────────────────────────
export type OrigenTactica = 'lichess' | 'libros'

export const hashTactica = (tema: string, origen: OrigenTactica, ambos: boolean) =>
  hashDe('tactica', 'tema', tema, ...(origen === 'libros' && ambos ? ['libros'] : []))

/**
 * Interpreta `tema/<id>[/libros]`. Un tema que existe en los dos orígenes abre Lichess salvo que el link diga
 * `/libros`; uno que solo existe en libros abre libros.
 */
export function interpretarTactica(
  resto: string[],
  temasLichess: readonly string[],
  temasLibros: readonly string[],
): { tema: string; origen: OrigenTactica } | undefined {
  if (resto[0] !== 'tema' || !resto[1]) return undefined
  const tema = resto[1]
  const pideLibros = resto[2] === 'libros'
  if (pideLibros && temasLibros.includes(tema)) return { tema, origen: 'libros' }
  if (temasLichess.includes(tema)) return { tema, origen: 'lichess' }
  if (temasLibros.includes(tema)) return { tema, origen: 'libros' }
  return undefined
}

// ── Aperturas ────────────────────────────────────────────────────────────────────────────────
export type ColorCurso = 'white' | 'black'
const NOMBRE_COLOR: Record<ColorCurso, string> = { white: 'blancas', black: 'negras' }

export const hashCurso = (id: string, color: ColorCurso, conColor = true) =>
  hashDe('aperturas', 'curso', id, ...(conColor ? [NOMBRE_COLOR[color]] : []))

/** Defensas y gambitos de las negras: sus cursos se practican, por defecto, con negras. */
const CON_NEGRAS = /^(Defensa|Contragambito|Siciliana|Francesa|Benoni|Grünfeld|Gambito (Benko|Blumenfeld|Budapest|Englund|Letón|Vaganian|de Dama Rehusado))/i
/** Nombres que empiezan como una defensa pero son del lado de las blancas. */
const CON_BLANCAS = /^(Siciliana (Alapin|Cerrada|Grand Prix|Moscú|Rossolimo)|Grünfeld con fianchetto)/i

/** Color con el que se abre un curso si el link no dice otro. */
export function colorPorDefecto(nombre: string): ColorCurso {
  return CON_NEGRAS.test(nombre) && !CON_BLANCAS.test(nombre) ? 'black' : 'white'
}

export function interpretarCurso(resto: string[]): { id: string; color?: ColorCurso } | undefined {
  if (resto[0] !== 'curso' || !resto[1]) return undefined
  const c = resto[2]?.toLowerCase()
  return { id: resto[1], color: c === 'negras' ? 'black' : c === 'blancas' ? 'white' : undefined }
}

// ── Finales y Biblioteca ─────────────────────────────────────────────────────────────────────
export const hashFinal = (id: string) => hashDe('finales', 'tema', id)
export const idFinalDeResto = (resto: string[]) => (resto[0] === 'tema' ? resto[1] : undefined)

export const hashFicha = (id: string) => hashDe('biblioteca', id)
export const idFichaDeResto = (resto: string[]) => resto[0]?.toUpperCase()
