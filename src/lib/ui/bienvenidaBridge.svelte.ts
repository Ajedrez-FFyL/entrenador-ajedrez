/**
 * Puente para volver a abrir la Bienvenida desde Ajustes (igual patrón que
 * `feedback/solicitud.svelte.ts`): Bienvenida.svelte vive una sola vez en App.svelte.
 */
let pedida = $state(false)

export function pedirBienvenida() {
  pedida = true
}

export function bienvenidaPedida(): boolean {
  return pedida
}

export function limpiarPedidoBienvenida() {
  pedida = false
}
