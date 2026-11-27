/** Ficha pública de un libro de la biblioteca de ajedrez (se genera con `scripts/preparar-biblioteca.ts`). */
export interface LibroBiblioteca {
  id: string
  titulo: string
  autor: string
  tema: string
  subtema: string
  nivel: string
  /** 1 a 5, o null si todavía no se evaluó. */
  dificultad: number | null
  idioma: string
  paginas: number | null
  queCubre: string
  /** Dónde está pensado que vaya dentro de la app (Aperturas, Problemas, Solo ficha…). */
  destino: string
  /** Lo que ya hay en la app a partir de este libro. */
  enApp: {
    problemas: number
    partidas: number
    finales: { id: string; titulo: string }[]
    aperturas: { id: string; nombre: string }[]
  }
}

let promesa: Promise<LibroBiblioteca[]> | undefined
export function cargarBiblioteca(): Promise<LibroBiblioteca[]> {
  promesa ??= fetch(`${import.meta.env.BASE_URL}datos/biblioteca.json`)
    .then((r) => (r.ok ? (r.json() as Promise<LibroBiblioteca[]>) : []))
    .catch(() => [])
  return promesa
}

/** Cita: autor, título (sin la parte entre paréntesis con editorial y año, que va aparte). */
export function citaLibro(l: LibroBiblioteca): string {
  return l.autor ? `${l.autor}, ${l.titulo}` : l.titulo
}

export const hayEnApp = (l: LibroBiblioteca): boolean =>
  l.enApp.problemas > 0 || l.enApp.partidas > 0 || l.enApp.finales.length > 0 || l.enApp.aperturas.length > 0
