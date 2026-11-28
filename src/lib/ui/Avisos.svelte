<script lang="ts">
  import { avisoActual, cerrarAviso } from './avisos.svelte.ts'
</script>

{#if avisoActual()}
  <div class="aviso" role="status" aria-live="polite">
    <span>{avisoActual()}</span>
    <button class="cerrar" onclick={cerrarAviso} aria-label="Cerrar aviso">×</button>
  </div>
{/if}

<style>
  .aviso {
    position: fixed;
    left: 50%;
    bottom: calc(76px + env(safe-area-inset-bottom));
    transform: translateX(-50%);
    z-index: 60;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(92vw, 420px);
    padding: 10px 14px;
    background: var(--marino, #1e2655);
    color: #fff;
    border-radius: var(--radio);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    font-size: 0.92rem;
  }
  .cerrar {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 2px;
  }
  @media (min-width: 900px) {
    .aviso {
      bottom: 24px;
    }
  }
</style>
