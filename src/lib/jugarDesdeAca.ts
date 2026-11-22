/**
 * "Jugar desde acá": cualquier pantalla con un tablero puede mandar su posición a la pantalla de juego
 * contra la computadora. La posición viaja por sessionStorage porque las pestañas de la app no comparten estado.
 * (Hoy la pantalla de juego vive en Finales; en la fase C5 se mueve a la pestaña Editor.)
 */
const CLAVE = 'ffyl-jugar-desde'

export function jugarDesdeAca(fen: string) {
  try {
    sessionStorage.setItem(CLAVE, fen)
  } catch {
    // sin almacenamiento: la pantalla de juego abre con su editor vacío
  }
  location.hash = '#/finales'
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
