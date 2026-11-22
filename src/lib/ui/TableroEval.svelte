<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type { Evaluacion } from '../ajedrez/evaluacion.ts'
  import BarraEval from './BarraEval.svelte'
  import Tablero from './Tablero.svelte'

  type PropsTablero = ComponentProps<typeof Tablero>
  interface Props extends PropsTablero {
    /** Evaluación desde el lado de las blancas. Si no hay (motor apagado), no se muestra la barra. */
    evaluacion?: Evaluacion
    etiquetaEval?: string
  }
  let { evaluacion, etiquetaEval, ...tablero }: Props = $props()
</script>

<div class="con-barra" class:sin-barra={!evaluacion}>
  {#if evaluacion}<BarraEval ev={evaluacion} orientacion={tablero.orientacion} etiqueta={etiquetaEval} />{/if}
  <div class="tab"><Tablero {...tablero} /></div>
</div>

<style>
  .con-barra {
    display: flex;
    gap: 6px;
    align-items: stretch;
  }
  .tab {
    flex: 1;
    min-width: 0;
  }
  @media (max-width: 600px) {
    .con-barra {
      flex-direction: column;
    }
  }
</style>
