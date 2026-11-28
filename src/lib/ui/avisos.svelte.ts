/** Aviso breve (tipo «toast») que se muestra unos segundos abajo en la pantalla. */
let texto = $state('')
let temporizador: ReturnType<typeof setTimeout> | undefined

export function avisar(mensaje: string, ms = 3500) {
  texto = mensaje
  clearTimeout(temporizador)
  temporizador = setTimeout(() => (texto = ''), ms)
}

export const avisoActual = () => texto
export function cerrarAviso() {
  clearTimeout(temporizador)
  texto = ''
}
