import { Chess, type Position } from 'chessops/chess'
import { makeSan } from 'chessops/san'
import { clavePosicion, fenDe, jugadaLegal, lineaConNumeros } from '../ajedrez/posicion.ts'
import type { Explicacion } from './explicaciones.ts'
import type { Apertura, AperturaDatos } from './tipos.ts'

/** Nombres en español de las familias más comunes; el resto queda con el nombre original en inglés. */
const FAMILIAS_ES: Record<string, string> = {
  'Alekhine Defense': 'Defensa Alekhine',
  'Benoni Defense': 'Defensa Benoni',
  'Bird Opening': 'Apertura Bird',
  'Bishop\'s Opening': 'Apertura de alfil',
  'Bogo-Indian Defense': 'Defensa Bogoindia',
  'Caro-Kann Defense': 'Defensa Caro-Kann',
  'Catalan Opening': 'Apertura Catalana',
  'Center Game': 'Partida del centro',
  'Dutch Defense': 'Defensa Holandesa',
  'English Opening': 'Apertura Inglesa',
  'Four Knights Game': 'Partida de los cuatro caballos',
  'French Defense': 'Defensa Francesa',
  'Grünfeld Defense': 'Defensa Grünfeld',
  'Italian Game': 'Partida Italiana',
  'King\'s Gambit': 'Gambito de Rey',
  'King\'s Gambit Accepted': 'Gambito de Rey aceptado',
  'King\'s Gambit Declined': 'Gambito de Rey rehusado',
  'King\'s Indian Attack': 'Ataque Indio de Rey',
  'King\'s Indian Defense': 'Defensa India de Rey',
  'King\'s Pawn Game': 'Apertura de peón de rey',
  'Modern Defense': 'Defensa Moderna',
  'Nimzo-Indian Defense': 'Defensa Nimzoindia',
  'Nimzo-Larsen Attack': 'Ataque Nimzo-Larsen',
  'Old Indian Defense': 'Defensa India Antigua',
  'Petrov\'s Defense': 'Defensa Petrov',
  'Philidor Defense': 'Defensa Philidor',
  'Pirc Defense': 'Defensa Pirc',
  'Queen\'s Gambit Accepted': 'Gambito de Dama aceptado',
  'Queen\'s Gambit Declined': 'Gambito de Dama rehusado',
  'Queen\'s Gambit': 'Gambito de Dama',
  'Queen\'s Indian Defense': 'Defensa India de Dama',
  'Queen\'s Pawn Game': 'Apertura de peón de dama',
  'Réti Opening': 'Apertura Réti',
  'Ruy Lopez': 'Apertura Española',
  'Scandinavian Defense': 'Defensa Escandinava',
  'Scotch Game': 'Apertura Escocesa',
  'Semi-Slav Defense': 'Defensa Semieslava',
  'Sicilian Defense': 'Defensa Siciliana',
  'Slav Defense': 'Defensa Eslava',
  'Three Knights Opening': 'Apertura de los tres caballos',
  'Two Knights Defense': 'Defensa de los dos caballos',
  'Vienna Game': 'Partida Vienesa',
  'Zukertort Opening': 'Apertura Zukertort',
  'London System': 'Sistema Londres',
  'Indian Defense': 'Defensa India',
  'Horwitz Defense': 'Defensa Horwitz',
  'Owen Defense': 'Defensa Owen',
  'Polish Opening': 'Apertura Polaca',
  'Van Geet Opening': 'Apertura Van Geet',
  'Hungarian Opening': 'Apertura Húngara',
  'Trompowsky Attack': 'Ataque Trompowsky',
  'Ponziani Opening': 'Apertura Ponziani',
  'Elephant Gambit': 'Gambito Elefante',
  'Latvian Gambit': 'Gambito Letón',
  'Danish Gambit': 'Gambito Danés',
  'Englund Gambit': 'Gambito Englund',
  'Budapest Defense': 'Defensa Budapest',
  'Benko Gambit': 'Gambito Benko',
  'Tarrasch Defense': 'Defensa Tarrasch',
  'Rat Defense': 'Defensa Rata',
  'Nimzowitsch Defense': 'Defensa Nimzowitsch',
  'Hippopotamus Defense': 'Defensa Hipopótamo',
  'English Defense': 'Defensa Inglesa',
  'Kangaroo Defense': 'Defensa Canguro',
  'Mexican Defense': 'Defensa Mexicana',
  'Benko Gambit Accepted': 'Gambito Benko aceptado',
  'Benko Gambit Declined': 'Gambito Benko rehusado',
}

export function familiaEnEspanol(familia: string): string {
  return FAMILIAS_ES[familia] ?? familia
}

const ADJETIVOS_ES: Record<string, string> = {
  Classical: 'Clásica',
  Exchange: 'del Cambio',
  Normal: 'Normal',
  Modern: 'Moderna',
  Closed: 'Cerrada',
  Open: 'Abierta',
  Advance: 'del Avance',
  Symmetrical: 'Simétrica',
  Accelerated: 'Acelerada',
  Main: 'principal',
  'Two Knights': 'de los Dos Caballos',
  'Three Knights': 'de los Tres Caballos',
  'Four Knights': 'de los Cuatro Caballos',
  Russian: 'Rusa',
  Knight: 'del Caballo',
  Transpositional: 'de transposición',
  Fianchetto: 'del Fianchetto',
  Central: 'Central',
  Rare: 'rara',
}

/** Traducción mecánica de las partes más comunes («X Variation» → «Variante X»); los nombres propios quedan igual. */
function varianteEnEspanol(variante: string): string {
  const adj = (x: string) => ADJETIVOS_ES[x] ?? x
  return variante
    .split(', ')
    .map((p) =>
      p
        .replace(/^Main Line$/, 'Línea principal')
        .replace(/^(.+) Gambit Accepted$/, (_, x) => `Gambito ${adj(x)} aceptado`)
        .replace(/^(.+) Gambit Declined$/, (_, x) => `Gambito ${adj(x)} rehusado`)
        .replace(/^(.+) Variation$/, (_, x) => `Variante ${adj(x)}`)
        .replace(/^(.+) Attack$/, (_, x) => `Ataque ${adj(x)}`)
        .replace(/^(.+) Gambit$/, (_, x) => `Gambito ${adj(x)}`)
        .replace(/^(.+) Defense$/, (_, x) => `Defensa ${adj(x)}`)
        .replace(/^(.+) System$/, (_, x) => `Sistema ${adj(x)}`)
        .replace(/^(.+) Line$/, (_, x) => `Línea ${adj(x)}`),
    )
    .join(', ')
}

export function nombreEnEspanol(a: Pick<Apertura, 'familia' | 'variante'>): string {
  return a.variante ? `${familiaEnEspanol(a.familia)}: ${varianteEnEspanol(a.variante)}` : familiaEnEspanol(a.familia)
}

export interface Catalogo {
  aperturas: Apertura[]
  porPosicion: Map<string, Apertura>
}

let promesa: Promise<Catalogo> | undefined

function armar(datos: AperturaDatos[]): Catalogo {
  const aperturas: Apertura[] = datos.map((d) => {
    const [familia, variante] = d.nombre.split(/:\s*/, 2)
    return { ...d, familia, variante, ucis: d.jugadas.split(' ') }
  })
  // Cada posición nombrada recibe la línea más corta que llega a ella (las transposiciones
  // conservan el nombre de la primera).
  const porPosicion = new Map<string, Apertura>()
  for (const a of [...aperturas].sort((x, y) => x.ucis.length - y.ucis.length)) {
    const pos: Position = Chess.default()
    for (const uci of a.ucis) {
      const move = jugadaLegal(pos, uci)
      if (!move) break
      pos.play(move)
    }
    const clave = clavePosicion(fenDe(pos))
    if (!porPosicion.has(clave)) porPosicion.set(clave, a)
  }
  return { aperturas, porPosicion }
}

export function cargarCatalogo(): Promise<Catalogo> {
  promesa ??= fetch(`${import.meta.env.BASE_URL}datos/aperturas.json`)
    .then((r) => r.json() as Promise<AperturaDatos[]>)
    .then(armar)
  return promesa
}

/** La apertura con nombre más profunda por la que pasa la partida (como hace Lichess). */
export function clasificar(catalogo: Catalogo, jugadas: string[], maxPlies = 40): Apertura | undefined {
  const pos: Position = Chess.default()
  let ultima: Apertura | undefined
  for (const uci of jugadas.slice(0, maxPlies)) {
    const move = jugadaLegal(pos, uci)
    if (!move) break
    pos.play(move)
    ultima = catalogo.porPosicion.get(clavePosicion(fenDe(pos))) ?? ultima
  }
  return ultima
}

// ───────────────────────── Árbol de cursos (de lo general a lo particular) ─────────────────────────

/**
 * Un lugar del árbol de aperturas: un curso (con `curso`), una carpeta que agrupa cursos (sin `curso`) o los
 * dos a la vez cuando el curso contiene a otros (la Siciliana contiene a la Najdorf).
 */
export interface NodoCurso {
  /** Identificador estable: el id del curso o `carpeta:` + las jugadas de la raíz. */
  id: string
  /** Jugadas UCI desde la posición inicial hasta la posición del nodo. */
  raiz: string[]
  nombre: string
  curso?: Explicacion
  hijos: NodoCurso[]
  /** Cantidad de cursos que cuelgan de este nodo, sin contarlo. */
  variantes: number
}

/**
 * Carpetas que se muestran como un paso propio, por la raíz de la posición. Todo nodo intermedio que no
 * está en esta lista es transparente: sus cursos pasan al nodo de arriba (si no, entre 1.e4 e5 y la
 * Española habría un paso de «2.Cf3» y otro por cada orden de jugadas). Los nombres son descriptivos
 * porque la carpeta no tiene curso propio.
 */
const CARPETAS: Record<string, string> = {
  'e2e4 e7e5': '1…e5 — Partidas abiertas',
  'd2d4 d7d5': '1…d5 — Gambito de Dama y otros sistemas con 1…d5',
  'd2d4 g8f6': '1…Cf6 — Defensas indias y sistemas con Cf6',
  'd2d4 g8f6 c2c4': '1.d4 Cf6 2.c4 — Defensas indias',
}

/** Primer nivel: grupos fijos por primera jugada. */
const GRUPOS: { raiz: string; nombre: string }[] = [
  { raiz: 'e2e4', nombre: '1.e4' },
  { raiz: 'd2d4', nombre: '1.d4' },
  { raiz: 'c2c4', nombre: '1.c4 (Inglesa)' },
  { raiz: 'g1f3', nombre: '1.Cf3 (Réti)' },
]

/** Agrupaciones a mano de aperturas raras que, sueltas, harían un nivel larguísimo (ver `Aclaración de Mati`). */
const OTRAS: { padre: string; nombre: string; ids: string[] }[] = [
  { padre: 'e2e4', nombre: 'Otras respuestas a 1.e4', ids: ['san-jorge', 'owen', 'nimzowitsch'] },
  { padre: 'd2d4', nombre: 'Otras respuestas a 1.d4', ids: ['englund', 'horwitz', 'benoni-antigua', 'mikenas'] },
]

const esPrefijo = (a: string[], b: string[]) => a.length <= b.length && a.every((u, i) => u === b[i])

function contar(n: NodoCurso): number {
  n.variantes = n.hijos.reduce((s, h) => s + (h.curso ? 1 : 0) + contar(h), 0)
  return n.variantes
}

/**
 * Árbol de los cursos armado solo con el campo `raiz`: el padre de un curso es el curso (o la carpeta de
 * `CARPETAS`) cuya raíz es el prefijo más largo de la suya. Devuelve los nodos del primer nivel: 1.e4,
 * 1.d4, 1.c4, 1.Cf3 y «Otras primeras jugadas». Un curso con `excluye` («lo que no tiene curso propio»,
 * como Otras partidas abiertas) cuelga de la carpeta que está en su misma raíz.
 */
export function arbolDeCursos(explicaciones: Explicacion[]): NodoCurso[] {
  const nodos: NodoCurso[] = explicaciones.map((e) => ({ id: e.id, raiz: e.raiz.split(' '), nombre: e.nombre, curso: e, hijos: [], variantes: 0 }))
  const carpetas: NodoCurso[] = Object.entries(CARPETAS).map(([r, nombre]) => ({ id: `carpeta:${r}`, raiz: r.split(' '), nombre, hijos: [], variantes: 0 }))
  const posibles = [...nodos.filter((n) => !n.curso?.excluye), ...carpetas]
  const sueltos: NodoCurso[] = []
  const padreDe = (n: NodoCurso): NodoCurso | undefined => {
    // Un curso «resto» cuelga de la carpeta de su misma raíz; los demás, de un prefijo estricto.
    const largo = n.curso?.excluye ? n.raiz.length : n.raiz.length - 1
    return posibles.filter((p) => p !== n && p.raiz.length <= largo && esPrefijo(p.raiz, n.raiz)).sort((a, b) => b.raiz.length - a.raiz.length)[0]
  }
  const conPadre = (n: NodoCurso) => {
    const p = padreDe(n)
    if (p) p.hijos.push(n)
    else sueltos.push(n)
  }
  for (const n of [...nodos, ...carpetas]) conPadre(n)
  // Las agrupaciones «otras respuestas»: sacan algunos nodos sueltos de su grupo y los ponen en una carpeta.
  const grupos: NodoCurso[] = GRUPOS.map((g) => ({ id: `grupo:${g.raiz}`, raiz: g.raiz.split(' '), nombre: g.nombre, hijos: [], variantes: 0 }))
  const otrasPrimeras: NodoCurso = { id: 'grupo:otras', raiz: [], nombre: 'Otras primeras jugadas', hijos: [], variantes: 0 }
  for (const n of sueltos) (grupos.find((g) => g.raiz[0] === n.raiz[0]) ?? otrasPrimeras).hijos.push(n)
  for (const o of OTRAS) {
    const g = grupos.find((x) => x.raiz[0] === o.padre.split(' ')[0])!
    const miembros = g.hijos.filter((h) => o.ids.includes(h.id))
    if (!miembros.length) continue
    g.hijos = g.hijos.filter((h) => !miembros.includes(h))
    g.hijos.push({ id: `carpeta:otras-${o.padre}`, raiz: o.padre.split(' '), nombre: o.nombre, hijos: miembros, variantes: 0 })
  }
  // Una carpeta sin cursos adentro no se muestra; una carpeta de un solo curso (1.c4, 1.Cf3) pasa a ser ese curso.
  const limpiar = (n: NodoCurso): NodoCurso | undefined => {
    n.hijos = n.hijos.map(limpiar).filter((h): h is NodoCurso => h !== undefined)
    if (!n.curso && !n.hijos.length) return undefined
    return n
  }
  const orden = (n: NodoCurso) => {
    const peso = (x: NodoCurso) => x.variantes + (x.curso ? 1 : 0)
    n.hijos.sort((a, b) => peso(b) - peso(a) || a.nombre.localeCompare(b.nombre))
    n.hijos.forEach(orden)
  }
  const primero: NodoCurso[] = []
  for (const g of [...grupos, otrasPrimeras]) {
    const l = limpiar(g)
    if (!l) continue
    contar(l)
    // Una sola tarjeta adentro: el grupo es ese curso, con el nombre del grupo en vez del del curso.
    primero.push(l.hijos.length === 1 && !l.curso ? { ...l.hijos[0], nombre: l.nombre } : l)
  }
  primero.forEach(orden)
  return primero
}

/** Recorre el árbol en profundidad; `ruta` son los nodos desde el primer nivel hasta el padre del nodo visitado. */
export function recorrerArbol(nodos: NodoCurso[], visitar: (n: NodoCurso, ruta: NodoCurso[]) => void, ruta: NodoCurso[] = []) {
  for (const n of nodos) {
    visitar(n, ruta)
    recorrerArbol(n.hijos, visitar, [...ruta, n])
  }
}

/** Jugadas de una línea como texto en castellano («1.e4 e5 2.Cf3») o, con `ingles`, en notación inglesa («1.e4 e5 2.Nf3»). */
export function jugadasDeNodo(raiz: string[], ingles = false): string {
  const inicial = Chess.default()
  if (!ingles) return lineaConNumeros(fenDe(inicial), raiz).replace(/\. /g, '.').replace(/… /g, '…').trim()
  const pos: Position = Chess.default()
  let texto = ''
  for (const uci of raiz) {
    const m = jugadaLegal(pos, uci)
    if (!m) break
    if (pos.turn === 'white') texto += `${pos.fullmoves}.`
    else if (!texto) texto += `${pos.fullmoves}…`
    texto += makeSan(pos, m) + ' '
    pos.play(m)
  }
  return texto.trim()
}

const sinAcentos = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export interface ResultadoBusqueda {
  nodo: NodoCurso
  /** Nombres de los pasos anteriores hasta este curso («1.e4 › Siciliana»). */
  ruta: NodoCurso[]
}

/**
 * Busca cursos por nombre en castellano, nombre en inglés (el del catálogo de Lichess en la posición de la
 * raíz) y jugadas, en las dos notaciones («Ab5» y «Bb5»). Todas las palabras de la consulta tienen que aparecer.
 */
export function buscarCursos(nodos: NodoCurso[], catalogo: Catalogo | undefined, consulta: string): ResultadoBusqueda[] {
  const palabras = sinAcentos(consulta).split(/\s+/).filter(Boolean)
  if (!palabras.length) return []
  const r: ResultadoBusqueda[] = []
  recorrerArbol(nodos, (nodo, ruta) => {
    if (!nodo.curso) return
    const pos: Position = Chess.default()
    for (const u of nodo.raiz) {
      const m = jugadaLegal(pos, u)
      if (!m) break
      pos.play(m)
    }
    const ingles = catalogo?.porPosicion.get(clavePosicion(fenDe(pos)))?.nombre ?? ''
    const pajar = sinAcentos(`${nodo.nombre} ${nodo.curso.id.replace(/-/g, ' ')} ${ingles} ${jugadasDeNodo(nodo.raiz)} ${jugadasDeNodo(nodo.raiz, true)}`)
    if (palabras.every((p) => pajar.includes(p))) r.push({ nodo, ruta })
  })
  return r
}
