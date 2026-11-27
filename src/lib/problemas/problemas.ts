import { db, leerPreferencias } from '../datos/db.ts'
import type { Fuente } from '../aperturas/explicaciones.ts'

/**
 * Problema de la base pública de Lichess (CC0): `jugadas[0]` es la jugada del rival que plantea el problema.
 * Problema de un libro: tiene `fuente` y `jugadas[0]` ya es la jugada que hay que encontrar.
 */
export interface Problema {
  id: string
  fen: string
  jugadas: string[]
  rating?: number
  temas: string[]
  fuente?: Fuente
}

export type Origen = 'lichess' | 'libros'
export const esDeLibro = (p: Problema) => p.fuente !== undefined

export { NOMBRE_TEMA, TEMAS_LIBROS, TEMAS_FILTRO } from './temas.ts'
import { NOMBRE_TEMA, TEMAS_LIBROS, TEMAS_FILTRO } from './temas.ts'

export const nombreTema = (t: string) => NOMBRE_TEMA[t] ?? t

const promesaLibros: { p?: Promise<Problema[]> } = {}
let promesaBaseLichess: Promise<Problema[]> | undefined

function cargarJson(url: string): Promise<Problema[]> {
  return fetch(url)
    .then((r) => (r.ok ? (r.json() as Promise<Problema[]>) : []))
    .catch(() => [])
}

/**
 * Ampliación C4d: por cada tema de `TEMAS_FILTRO` hay un archivo bajable aparte
 * (`public/datos/problemas/<tema>.json`, ~2.000 problemas, rating 600-2400) que se guarda en esta
 * caché del navegador la primera vez que se baja, para usarlo después sin conexión. Los 4.550 de
 * siempre (`problemas.json`) no dependen de esto y siguen cargándose igual.
 */
const CACHE_TEMAS = 'problemas-por-tema-v1'
const urlTema = (tema: string) => `${import.meta.env.BASE_URL}datos/problemas/${tema}.json`

const hayCache = () => typeof caches !== 'undefined'

/** Sin red: lo que ya esté guardado de bajadas anteriores (o `[]` si ese tema nunca se bajó). */
async function temaDesdeCache(tema: string): Promise<Problema[]> {
  if (!hayCache()) return []
  try {
    const cache = await caches.open(CACHE_TEMAS)
    const resp = await cache.match(urlTema(tema))
    return resp ? ((await resp.json()) as Problema[]) : []
  } catch {
    return []
  }
}

export async function temaEstaGuardado(tema: string): Promise<boolean> {
  if (!hayCache()) return false
  try {
    return (await (await caches.open(CACHE_TEMAS)).match(urlTema(tema))) !== undefined
  } catch {
    return false
  }
}

/** Baja un tema y lo deja guardado para la próxima vez. Tira si no hay conexión o falla la bajada. */
export async function bajarTema(tema: string): Promise<void> {
  const resp = await fetch(urlTema(tema))
  if (!resp.ok) throw new Error(`No se pudo bajar el tema ${tema} (${resp.status})`)
  if (hayCache()) await (await caches.open(CACHE_TEMAS)).put(urlTema(tema), resp.clone())
}

/**
 * Problemas de Lichess (`problemas.json`, siempre) o de libros (`problemas-libros.json`), cargados una
 * sola vez. Para `lichess` suma además los temas que ya se hayan bajado (caché, sin red) con `bajarTema`.
 */
export async function cargarProblemas(origen: Origen = 'lichess'): Promise<Problema[]> {
  if (origen === 'libros') {
    promesaLibros.p ??= cargarJson(`${import.meta.env.BASE_URL}datos/problemas-libros.json`)
    return promesaLibros.p
  }
  promesaBaseLichess ??= cargarJson(`${import.meta.env.BASE_URL}datos/problemas.json`)
  const [base, ...porTema] = await Promise.all([promesaBaseLichess, ...TEMAS_FILTRO.map(temaDesdeCache)])
  return [...base, ...porTema.flat()]
}

const PREFIJO: Record<Origen, string> = { lichess: 'lichess-problema:', libros: 'libro-problema:' }
export const idRepaso = (p: Problema) => `${PREFIJO[esDeLibro(p) ? 'libros' : 'lichess']}${p.id}`

export interface FiltrosProblemas {
  origen?: Origen
  /** Selección múltiple: entra si tiene al menos uno. Sin definir, o con todas las opciones elegidas, no filtra. */
  temas?: string[]
  /** Solo problemas de libros: selección múltiple de títulos, misma regla que `temas`. */
  libros?: string[]
  ratingMin: number
  ratingMax: number
}

export const FILTROS_PROBLEMAS: FiltrosProblemas = { ratingMin: 1500, ratingMax: 2000 }

/**
 * Rango de rating inicial: el de la bienvenida (`preferencias.rangoTactica`, nivel aproximado)
 * si se eligió, si no el de `FILTROS_PROBLEMAS`.
 */
export async function filtrosIniciales(origen?: Origen): Promise<FiltrosProblemas> {
  const { rangoTactica } = await leerPreferencias()
  return rangoTactica ? { ratingMin: rangoTactica.min, ratingMax: rangoTactica.max, origen } : { ...FILTROS_PROBLEMAS, origen }
}

function inicioDelDia(): number {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

/**
 * Filtro de selección múltiple: sin elegir nada (`undefined`) no filtra; con todo el universo elegido
 * tampoco (equivale a "Todos"); si no, entra con que tenga al menos uno de los elegidos.
 */
function pasaSeleccion(valores: (string | undefined)[], elegidos: string[] | undefined, universo: string[]): boolean {
  if (elegidos === undefined || elegidos.length === universo.length) return true
  if (!elegidos.length) return false
  return valores.some((v) => v !== undefined && elegidos.includes(v))
}

export async function estadoProblemas(f: FiltrosProblemas) {
  const origen = f.origen ?? 'lichess'
  const temasUniverso = origen === 'libros' ? TEMAS_LIBROS : TEMAS_FILTRO
  const todosOrigen = await cargarProblemas(origen)
  const librosUniverso = [...new Set(todosOrigen.map((p) => p.fuente?.titulo).filter((t): t is string => !!t))]
  const todos = todosOrigen.filter(
    (p) =>
      pasaSeleccion(p.temas, f.temas, temasUniverso) &&
      pasaSeleccion([p.fuente?.titulo], f.libros, librosUniverso) &&
      (origen === 'libros' || ((p.rating ?? 0) >= f.ratingMin && (p.rating ?? 0) <= f.ratingMax)),
  )
  const repasos = await db.repasos.where('errorId').startsWith(PREFIJO[origen]).toArray()
  const porId = new Map(repasos.map((r) => [r.errorId, r]))
  const ahora = Date.now()
  const { nuevosPorDia } = await leerPreferencias()
  const nuevosHoy = Math.max(0, nuevosPorDia - repasos.filter((r) => r.creado >= inicioDelDia()).length)
  const vencidos = todos.filter((p) => {
    const r = porId.get(idRepaso(p))
    return r && new Date(r.card.due).getTime() <= ahora
  })
  const nuevos = todos.filter((p) => !porId.has(idRepaso(p)))
  return { todos, vencidos, nuevos, nuevosHoy, porId }
}

/** Sesión: los vencidos primero (lo fallado vuelve antes) y después nuevos al azar, hasta el límite diario. */
export async function armarSesionProblemas(f: FiltrosProblemas, maximo = 20): Promise<Problema[]> {
  const { vencidos, nuevos, nuevosHoy, porId } = await estadoProblemas(f)
  vencidos.sort((a, b) => new Date(porId.get(idRepaso(a))!.card.due).getTime() - new Date(porId.get(idRepaso(b))!.card.due).getTime())
  const mezcla = [...nuevos].sort(() => Math.random() - 0.5).slice(0, nuevosHoy)
  return [...vencidos, ...mezcla].slice(0, maximo)
}
