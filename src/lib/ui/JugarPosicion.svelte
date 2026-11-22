<script lang="ts">
  import { fenDe, jugarUci, posDesdeFen, clavePosicion, sanDeUci, etiquetasJugadas } from '../ajedrez/posicion.ts'
  import { motorInteractivo, type OpcionesAnalisis } from '../motor/motor.ts'
  import { Exploracion } from './exploracion.svelte.ts'
  import Navegador from './Navegador.svelte'
  import TableroEval from './TableroEval.svelte'
  import type { Evaluacion } from '../ajedrez/evaluacion.ts'
  import { invertir } from '../ajedrez/evaluacion.ts'

  interface Props {
    fen: string
    alSalir?: () => void
  }
  let { fen: fenInicial, alSalir }: Props = $props()

  type Nivel = 'facil' | 'medio' | 'dificil' | 'maximo'
  const NIVELES: Record<Nivel, { nombre: string; aprox: string; opciones: OpcionesAnalisis }> = {
    facil: { nombre: 'Fácil', aprox: '≈ 1200', opciones: { nivel: { skill: 3 }, profundidad: 6, tiempoMs: 300 } },
    medio: { nombre: 'Medio', aprox: '≈ 1600', opciones: { nivel: { elo: 1600 }, profundidad: 10, tiempoMs: 700 } },
    dificil: { nombre: 'Difícil', aprox: '≈ 2000', opciones: { nivel: { elo: 2000 }, profundidad: 14, tiempoMs: 1000 } },
    maximo: { nombre: 'Máximo', aprox: 'fuerza completa', opciones: { profundidad: 18, tiempoMs: 1200 } },
  }

  // svelte-ignore state_referenced_locally
  const turnoInicial = fenInicial.split(' ')[1] === 'b' ? 'black' : 'white'
  let color = $state<'white' | 'black'>(turnoInicial)
  let nivel = $state<Nivel>('medio')
  let empezada = $state(false)
  // svelte-ignore state_referenced_locally
  let ex = $state<Exploracion>(new Exploracion(fenInicial))
  let pensando = $state(false)
  let rendida = $state(false)
  let evaluacion = $state<Evaluacion>()
  let evaluar = $state(false)
  let ficha = 0

  let enElFinal = $derived(ex.idx === ex.ucis.length)
  // La posición real de la partida es la última; ex.fen es la que se está mirando.
  let fenActual = $derived(ex.fens[ex.fens.length - 1])
  let repeticiones = $derived.by(() => {
    const clave = clavePosicion(fenActual)
    return ex.fens.filter((f) => clavePosicion(f) === clave).length
  })
  let fin = $derived.by((): string | undefined => {
    if (rendida) return 'Te rendiste.'
    const pos = posDesdeFen(fenActual)
    if (pos.isCheckmate()) return pos.turn === color ? 'Jaque mate: ganó Stockfish.' : '¡Jaque mate! Ganaste.'
    if (pos.isStalemate()) return 'Tablas por ahogado.'
    if (pos.isInsufficientMaterial()) return 'Tablas por material insuficiente.'
    if (pos.halfmoves >= 100) return 'Tablas por la regla de las 50 jugadas.'
    if (repeticiones >= 3) return 'Tablas por triple repetición.'
    return undefined
  })
  let turnoMio = $derived(posDesdeFen(fenActual).turn === color)
  let etiquetas = $derived(etiquetasJugadas(fenInicial, ex.ucis))

  function empezar() {
    ex = new Exploracion(fenInicial)
    rendida = false
    evaluacion = undefined
    empezada = true
    if (posDesdeFen(fenInicial).turn !== color) responder()
  }

  async function responder() {
    const mia = ++ficha
    pensando = true
    const f = fenActual
    const r = await motorInteractivo().analizar(f, NIVELES[nivel].opciones)
    if (mia !== ficha || fin) {
      pensando = false
      return
    }
    // La evaluación (desde el lado de las blancas) solo se muestra si se la pidió: no es parte de jugar.
    if (r.lineas.length) evaluacion = f.split(' ')[1] === 'w' ? r.ev : invertir(r.ev)
    await new Promise((ok) => setTimeout(ok, 250))
    if (mia !== ficha) return
    if (r.mejor && jugarUci(posDesdeFen(f), r.mejor)) {
      ex.ucis = [...ex.ucis, r.mejor]
      ex.idx = ex.ucis.length
    }
    pensando = false
  }

  function alJugar(uci: string) {
    // Solo se juega estando en la última posición.
    if (!empezada || fin || pensando || !enElFinal || !turnoMio) return
    if (!jugarUci(posDesdeFen(fenActual), uci)) return
    ex.ucis = [...ex.ucis, uci]
    ex.idx = ex.ucis.length
    if (!fin) responder()
  }

  function rendirse() {
    ficha++
    pensando = false
    rendida = true
  }

  let puedeMover = $derived(empezada && !fin && !pensando && enElFinal && turnoMio ? color : undefined)
  let sanUltima = $derived(ex.ucis.length ? sanDeUci(posDesdeFen(ex.fens[ex.fens.length - 2]), ex.ucis[ex.ucis.length - 1]) : undefined)
</script>

<div class="jugar">
  {#if !empezada}
    <section class="tarjeta">
      <h2>Jugar desde esta posición</h2>
      <div class="previa"><TableroEval fen={fenInicial} orientacion={color} /></div>
      <div class="fila">
        <label><input type="radio" bind:group={color} value="white" /> Juego con blancas</label>
        <label><input type="radio" bind:group={color} value="black" /> Juego con negras</label>
      </div>
      <label class="nivel">
        Nivel de Stockfish
        <select bind:value={nivel}>
          {#each Object.entries(NIVELES) as [id, n] (id)}<option value={id}>{n.nombre} ({n.aprox})</option>{/each}
        </select>
      </label>
      <div class="fila">
        <button class="boton principal" onclick={empezar}>Empezar</button>
        {#if alSalir}<button class="boton enlace" onclick={alSalir}>Volver</button>{/if}
      </div>
    </section>
  {:else}
    <TableroEval fen={ex.fen} orientacion={color} {puedeMover} ultimaJugada={ex.ultima} alJugar={alJugar} evaluacion={evaluar ? evaluacion : undefined} />
    <p class="suave estado">
      {#if fin}<b>{fin}</b>
      {:else if pensando}Stockfish está pensando…
      {:else if !enElFinal}Estás mirando una posición anterior: volvé al final (⏭) para seguir jugando.
      {:else}Te toca jugar con {color === 'white' ? 'blancas' : 'negras'}.{/if}
      <span> · Nivel {NIVELES[nivel].nombre.toLowerCase()}</span>
    </p>
    <Navegador {etiquetas} idx={ex.idx} alIr={(i) => ex.ir(i)} vacio="Todavía no se jugó ninguna jugada." />
    <label class="check"><input type="checkbox" bind:checked={evaluar} /> Mostrar la evaluación de Stockfish (barra, aproximada según el nivel)</label>
    <div class="fila">
      {#if !fin}<button class="boton" onclick={rendirse}>Rendirme / Terminar</button>{/if}
      <button class="boton" onclick={() => { ficha++; pensando = false; empezar() }}>Empezar de nuevo</button>
      <button class="boton enlace" onclick={() => { ficha++; pensando = false; empezada = false }}>Cambiar color o nivel</button>
      {#if alSalir}<button class="boton enlace" onclick={alSalir}>Volver</button>{/if}
    </div>
    {#if sanUltima}<p class="suave">Última jugada: {sanUltima}</p>{/if}
  {/if}
</div>

<style>
  .jugar {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .jugar p {
    margin: 0;
  }
  label {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .previa {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
  .nivel {
    flex-wrap: wrap;
  }
</style>
