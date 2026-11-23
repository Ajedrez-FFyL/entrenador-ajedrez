/**
 * "¿Cómo funciona?" en Ajustes: abre la pestaña Ayuda con el desplegable que corresponde ya
 * abierto. La posición viaja por sessionStorage porque las pestañas de la app no comparten estado
 * (mismo patrón que jugarDesdeAca.ts).
 */
const CLAVE = 'ffyl-abrir-ayuda'

export type TemaAyuda = 'respaldo-archivo' | 'respaldo-drive' | 'opiniones'

export function irAAyuda(tema: TemaAyuda) {
  try {
    sessionStorage.setItem(CLAVE, tema)
  } catch {
    // sin almacenamiento: la Ayuda abre sin nada desplegado
  }
  location.hash = '#/tutoriales'
}

/** Lee y borra el tema pendiente (una sola vez). */
export function tomarAyudaPendiente(): TemaAyuda | undefined {
  try {
    const t = sessionStorage.getItem(CLAVE) ?? undefined
    sessionStorage.removeItem(CLAVE)
    return t as TemaAyuda | undefined
  } catch {
    return undefined
  }
}
