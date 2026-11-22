<script lang="ts">
  interface Props {
    /** Jugadas ya numeradas ("23. Cf3", "23… Cf6"), una por media jugada. */
    etiquetas: string[]
    /** Posición mostrada: 0 = la de partida, n = después de la jugada n. */
    idx: number
    /** Pide ir a la posición i (el que usa el componente decide si es válida). */
    alIr: (i: number) => void
    /** Primera posición a la que se puede volver (en los problemas de Lichess, después de la jugada del rival). */
    desde?: number
    /** Comentario después de la media jugada n: se subraya la jugada. */
    comentarios?: Record<number, string>
    /** Si se pasan, aparece el botón de reproducir/pausar. */
    reproduciendo?: boolean
    alAlternar?: () => void
    vacio?: string
  }
  let { etiquetas, idx, alIr, desde = 0, comentarios, reproduciendo = false, alAlternar, vacio = 'Sin jugadas.' }: Props = $props()

  let final = $derived(etiquetas.length)

  // Flechas del teclado, como en Lichess (salvo que se esté escribiendo en un campo).
  $effect(() => {
    const tecla = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && ['INPUT', 'SELECT', 'TEXTAREA'].includes(t.tagName)) return
      if (e.key === 'ArrowLeft') alIr(Math.max(desde, idx - 1))
      else if (e.key === 'ArrowRight') alIr(Math.min(final, idx + 1))
      else if (e.key === 'ArrowUp' || e.key === 'Home') alIr(desde)
      else if (e.key === 'ArrowDown' || e.key === 'End') alIr(final)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', tecla)
    return () => window.removeEventListener('keydown', tecla)
  })
</script>

<div class="navegador">
  <div class="jugadas">
    {#each etiquetas as e, i (i)}
      {#if i >= desde}
        <button class="jugada" class:actual={idx === i + 1} class:comentada={!!comentarios?.[i + 1]} onclick={() => alIr(i + 1)}>{e}</button>
      {/if}
    {:else}
      <span class="suave">{vacio}</span>
    {/each}
  </div>
  <div class="botones" class:con-play={!!alAlternar}>
    <button class="boton" title="Al principio (↑)" aria-label="Al principio" onclick={() => alIr(desde)} disabled={idx <= desde}>⏮</button>
    <button class="boton" title="Atrás (←)" aria-label="Atrás" onclick={() => alIr(idx - 1)} disabled={idx <= desde}>◀</button>
    {#if alAlternar}
      <button class="boton" aria-label={reproduciendo ? 'Pausar' : 'Reproducir'} title={reproduciendo ? 'Pausar' : 'Reproducir'} onclick={alAlternar} disabled={final === 0}>
        {reproduciendo ? '⏸' : '⏵'}
      </button>
    {/if}
    <button class="boton" title="Adelante (→)" aria-label="Adelante" onclick={() => alIr(idx + 1)} disabled={idx >= final}>▶</button>
    <button class="boton" title="Al final (↓)" aria-label="Al final" onclick={() => alIr(final)} disabled={idx >= final}>⏭</button>
  </div>
</div>

<style>
  .navegador {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .jugadas {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 4px;
    max-height: 160px;
    overflow-y: auto;
    font-variant-numeric: tabular-nums;
  }
  .jugada {
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  .jugada:hover {
    background: var(--borde);
  }
  .jugada.comentada {
    text-decoration: underline dotted;
  }
  .jugada.actual {
    background: var(--acento);
    color: var(--acento-texto);
  }
  .botones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  .botones.con-play {
    grid-template-columns: repeat(5, 1fr);
  }
</style>
