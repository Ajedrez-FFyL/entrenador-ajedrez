<script lang="ts">
  import { chancesDeGanar, type Evaluacion } from '../ajedrez/evaluacion.ts'

  interface Props {
    /** Evaluación desde el lado de las blancas (como en Lichess). */
    ev: Evaluacion
    /** Bando que se ve abajo en el tablero: la parte de ese color crece desde ahí. */
    orientacion: 'white' | 'black'
    /** Texto a mostrar en vez del calculado (por ejemplo "#" en un jaque mate). */
    etiqueta?: string
  }
  let { ev, orientacion, etiqueta }: Props = $props()

  // Misma curva que usa Lichess: pasa de centipeones a porcentaje de chances de las blancas.
  let blancas = $derived(50 + 50 * chancesDeGanar(ev))
  let texto = $derived.by(() => {
    if (etiqueta) return etiqueta
    if (ev.mate !== undefined) return `M${Math.abs(ev.mate)}`
    return (Math.abs(ev.cp ?? 0) / 100).toFixed(1)
  })
  let ventajaBlanca = $derived(ev.mate !== undefined ? ev.mate > 0 : (ev.cp ?? 0) >= 0)
  // El número va en la parte del color que va ganando: abajo si ese color es el que está abajo en el tablero.
  let enBordeAbajo = $derived(ventajaBlanca ? orientacion === 'white' : orientacion === 'black')
  let descripcion = $derived(
    ev.mate !== undefined
      ? `Mate en ${Math.abs(ev.mate)} a favor de las ${ev.mate > 0 ? 'blancas' : 'negras'}`
      : `Evaluación ${(ev.cp ?? 0) > 0 ? '+' : (ev.cp ?? 0) < 0 ? '−' : ''}${texto}`,
  )
</script>

<div class="barra-eval" class:negras-abajo={orientacion === 'black'} role="img" aria-label={descripcion} title={descripcion}>
  <div class="blancas" style:--p={`${blancas}%`}></div>
  <span class="num" class:abajo={enBordeAbajo} class:clara={ventajaBlanca} class:oscura={!ventajaBlanca}>{texto}</span>
</div>

<style>
  .barra-eval {
    position: relative;
    flex: none;
    width: 20px;
    align-self: stretch;
    background: #2f2c28;
    border: 1px solid var(--borde);
    border-radius: 4px;
    overflow: hidden;
  }
  .blancas {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--p);
    background: #f4efe6;
    transition: height 0.3s;
  }
  .negras-abajo .blancas {
    bottom: auto;
    top: 0;
  }
  .num {
    position: absolute;
    left: 0;
    right: 0;
    top: 2px;
    text-align: center;
    font-size: 0.62rem;
    font-weight: 700;
    line-height: 1;
  }
  .num.abajo {
    top: auto;
    bottom: 2px;
  }
  .num.clara {
    color: #2f2c28; /* sobre la parte blanca */
  }
  .num.oscura {
    color: #f4efe6; /* sobre la parte negra */
  }
  @media (max-width: 600px) {
    .barra-eval {
      width: auto;
      height: 16px;
      align-self: auto;
    }
    .blancas {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: var(--p);
      height: auto;
      transition: width 0.3s;
    }
    .negras-abajo .blancas {
      left: auto;
      right: 0;
    }
    .num,
    .num.abajo {
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      left: auto;
      right: 4px;
      text-align: right;
      font-size: 0.7rem;
    }
    .num.abajo {
      left: 4px;
      right: auto;
      text-align: left;
    }
  }
</style>
