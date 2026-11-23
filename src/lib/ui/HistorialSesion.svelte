<script lang="ts">
  import type { ResultadoIntento } from '../repaso/repaso.ts'

  interface Props {
    resultados: ResultadoIntento[]
    alElegir: (indice: number) => void
  }
  let { resultados, alElegir }: Props = $props()

  const CLASE: Record<ResultadoIntento, string> = { bien: 'verde', pista: 'amarillo', mal: 'rojo' }
  const DESCRIPCION: Record<ResultadoIntento, string> = {
    bien: 'bien al primer intento',
    pista: 'con errores o pista',
    mal: 'solución vista',
  }
</script>

{#if resultados.length}
  <div class="historial-sesion" role="list" aria-label="Historial de la sesión">
    {#each resultados as r, i (i)}
      <button
        type="button"
        class="cuadrado {CLASE[r]}"
        onclick={() => alElegir(i)}
        title={`Ejercicio ${i + 1}: ${DESCRIPCION[r]}. Tocar para volver a verlo.`}
        aria-label={`Ejercicio ${i + 1}: ${DESCRIPCION[r]}. Tocar para volver a verlo.`}
      ></button>
    {/each}
  </div>
{/if}

<style>
  .historial-sesion {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 2px 0 8px;
  }
  .cuadrado {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 0;
    cursor: pointer;
  }
  .verde {
    background: #3f9b4b;
  }
  .amarillo {
    background: #d7a62b;
  }
  .rojo {
    background: #c9483c;
  }
</style>
