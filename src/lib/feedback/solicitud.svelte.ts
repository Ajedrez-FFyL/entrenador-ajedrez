import type { TipoFeedback } from './feedback.ts'

/**
 * Puente para abrir el formulario de opiniones y reportes ya completado, desde cualquier parte de
 * la app (p. ej. "Reportar un error en este texto" en una explicación de aperturas). Feedback.svelte
 * vive una sola vez en App.svelte: esto le avisa que hay que abrirse con estos datos.
 */
export interface SolicitudFeedback {
  tipo: TipoFeedback
  texto: string
  curso?: string
  campo?: string
  fen?: string
}

let solicitud = $state<SolicitudFeedback>()

export function pedirFeedback(s: SolicitudFeedback) {
  solicitud = s
}

export function solicitudActual(): SolicitudFeedback | undefined {
  return solicitud
}

export function limpiarSolicitud() {
  solicitud = undefined
}
