/**
 * "Jugar desde acá": cualquier pantalla con un tablero puede mandar su posición a la pestaña Editor,
 * que la abre con el modo "Jugar contra la computadora" activo. La posición viaja por sessionStorage
 * porque las pestañas de la app no comparten estado.
 */
const CLAVE = 'ffyl-jugar-desde'

export function jugarDesdeAca(fen: string) {
  try {
    sessionStorage.setItem(CLAVE, fen)
  } catch {
    // sin almacenamiento: el Editor abre con el tablero vacío
  }
  location.hash = '#/editor'
}

/** Lee y borra la posición pendiente (una sola vez). */
export function tomarPosicionPendiente(): string | undefined {
  try {
    const fen = sessionStorage.getItem(CLAVE) ?? undefined
    sessionStorage.removeItem(CLAVE)
    return fen
  } catch {
    return undefined
  }
}
