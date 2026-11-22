<script lang="ts">
  import { etiquetasJugadas } from '../ajedrez/posicion.ts'
  import type { Exploracion } from './exploracion.svelte.ts'
  import Navegador from './Navegador.svelte'

  interface Props {
    ex: Exploracion
    /** Jugadas desde las que empieza la parte interesante (en los problemas de Lichess, después de la jugada del rival). */
    desde?: number
  }
  let { ex, desde = 0 }: Props = $props()

  let etiquetas = $derived(etiquetasJugadas(ex.base, ex.ucis))
</script>

<Navegador {etiquetas} idx={ex.idx} {desde} alIr={(i) => ex.ir(i)} vacio="Mové en el tablero para analizar." />
