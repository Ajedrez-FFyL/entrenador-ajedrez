<script lang="ts" module>
  export interface Linea {
    titulo: string
    fen: string // posición de partida
    ucis: string[]
  }
</script>

<script lang="ts">
  import { untrack } from 'svelte'
  import { etiquetasJugadas, fenDe, jugarUci, posDesdeFen } from '../ajedrez/posicion.ts'
  import type { Position } from 'chessops/chess'
  import Navegador from './Navegador.svelte'

  interface Props {
    linea: Linea
    /** Informa la posición a mostrar en el tablero, la última jugada y la próxima. */
    alMover: (fen: string, ultima?: string, proxima?: string) => void
    /** Comentario después de la media jugada n (1 = después de la primera jugada). */
    comentarios?: Record<number, string>
    /** Si arranca reproduciendo sola (las partidas largas, mejor que no). */
    autoReproducir?: boolean
  }

  let { linea, alMover, comentarios, autoReproducir = true }: Props = $props()

  let fens = $derived.by(() => {
    const lista = [linea.fen]
    let pos: Position = posDesdeFen(linea.fen)
    for (const uci of linea.ucis) {
      const sig = jugarUci(pos, uci)
      if (!sig) break
      pos = sig
      lista.push(fenDe(pos))
    }
    return lista
  })
  let etiquetas = $derived(etiquetasJugadas(linea.fen, linea.ucis))
  let idx = $state(0)
  let reproduciendo = $state(true)

  function ir(i: number) {
    idx = Math.max(0, Math.min(fens.length - 1, i))
    alMover(fens[idx], idx > 0 ? linea.ucis[idx - 1] : undefined, linea.ucis[idx])
  }

  // Al cambiar de línea se vuelve al principio. `untrack`: sin él, este efecto también dependería de `idx`
  // (ir() lo lee) y cada vez que cambiara la posición se reiniciaría la línea: ◀ no devolvía el tablero.
  $effect(() => {
    void linea
    untrack(() => {
      idx = 0
      reproduciendo = autoReproducir
      ir(0)
    })
  })

  $effect(() => {
    if (!reproduciendo) return
    const t = setInterval(() => {
      if (idx >= fens.length - 1) reproduciendo = false
      else ir(idx + 1)
    }, 1100)
    return () => clearInterval(t)
  })

  function manual(i: number) {
    reproduciendo = false
    ir(i)
  }
</script>

<div class="visor">
  <div class="titulo">{linea.titulo}</div>
  <Navegador {etiquetas} {idx} {comentarios} alIr={manual} {reproduciendo} alAlternar={() => (reproduciendo = !reproduciendo)} />
  {#if comentarios?.[idx]}<p class="comentario">{comentarios[idx]}</p>{/if}
</div>

<style>
  .visor {
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    padding: 10px 12px;
    background: var(--superficie);
  }
  .titulo {
    font-weight: 600;
    margin-bottom: 6px;
  }
  .comentario {
    margin: 8px 0 0;
    padding: 6px 8px;
    border-left: 3px solid var(--acento);
    background: var(--fondo);
  }
</style>
