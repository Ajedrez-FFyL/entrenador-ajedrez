<script lang="ts">
  import { invertir, textoEvaluacion, type Evaluacion } from '../ajedrez/evaluacion.ts'
  import { aEspanol, clavePosicion, etiquetasJugadas, fenDe, jugarUci, posDesdeFen, sanDeUci } from '../ajedrez/posicion.ts'
  import { consultarTablebase, damasDe, revisar, soloRey, type Resultado } from '../finales/juego.ts'
  import type { Objetivo } from '../finales/tipos.ts'
  import { motorInteractivo, type OpcionesAnalisis } from '../motor/motor.ts'
  import { registrarIntento } from '../repaso/repaso.ts'
  import { Exploracion } from './exploracion.svelte.ts'
  import Navegador from './Navegador.svelte'
  import TableroEval from './TableroEval.svelte'

  /** Modo "final": objetivo fijo, el rival juega con tablebase (si hay conexión) o Stockfish fuerte, y el resultado entra al repaso espaciado. Sin esto, modo libre: elegís color y nivel de Stockfish, sin objetivo. */
  export interface ConfigFinal {
    objetivo: Objetivo
    consigna: string
    pista?: string
    maxJugadas: number
    idRepaso?: string
  }

  interface Props {
    fen: string
    config?: ConfigFinal
    alSalir?: () => void
  }
  let { fen: fenInicial, config, alSalir }: Props = $props()

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
  // El modo "final" arranca directo (el color lo fija la posición); el modo libre pide elegir color y nivel.
  // svelte-ignore state_referenced_locally
  let empezada = $state(!!config)
  // svelte-ignore state_referenced_locally
  let ex = $state<Exploracion>(new Exploracion(fenInicial))
  let pensando = $state(false)
  let rendida = $state(false)
  // Modo libre: evaluación desde el lado de las blancas, calculada con el mismo análisis que ya
  // usa el motor para elegir su jugada (no cambia su fuerza ni su tiempo).
  let evaluacion = $state<Evaluacion>()
  // Modo final: evaluación desde mi lado (siempre calculada, para decidir si el objetivo sigue vigente;
  // se reutiliza para la barra).
  let evMia = $state<Evaluacion>()
  // Mientras se juega, la barra funciona como pista: apagada por defecto, el dispositivo recuerda la
  // elección. Al terminar la partida se ve igual, esté prendida o no.
  function leerVerEvaluacion(): boolean {
    try { return localStorage.getItem('ffyl-ver-evaluacion-al-jugar') === 'si' } catch { return false }
  }
  let evaluar = $state(leerVerEvaluacion())
  $effect(() => {
    try { localStorage.setItem('ffyl-ver-evaluacion-al-jugar', evaluar ? 'si' : 'no') } catch { /* sin almacenamiento */ }
  })
  let resultado = $state<Resultado>({ estado: 'sigue' })
  let verPista = $state(false)
  let usoPista = $state(false)
  let consejo = $state<string>()
  let mejorTablebase = $state<string>()
  let repeticionesMap = new Map<string, number>()
  let ficha = 0

  // svelte-ignore state_referenced_locally
  const damasIniciales = config ? damasDe(posDesdeFen(fenInicial), turnoInicial) : 0
  // svelte-ignore state_referenced_locally
  const exigirMate = config ? soloRey(posDesdeFen(fenInicial), turnoInicial === 'white' ? 'black' : 'white') : false

  function contarRepeticion(fen: string): number {
    const clave = clavePosicion(fen)
    const n = (repeticionesMap.get(clave) ?? 0) + 1
    repeticionesMap.set(clave, n)
    return n
  }
  // svelte-ignore state_referenced_locally
  if (config) contarRepeticion(fenInicial)

  let enElFinal = $derived(ex.idx === ex.ucis.length)
  let fenActual = $derived(ex.fens[ex.fens.length - 1])
  let repeticiones = $derived.by(() => {
    const clave = clavePosicion(fenActual)
    return ex.fens.filter((f) => clavePosicion(f) === clave).length
  })
  // Fin del modo libre: jaque mate, ahogado, material insuficiente, 50 jugadas, triple repetición o rendición.
  let finLibre = $derived.by((): string | undefined => {
    if (config) return undefined
    if (rendida) return 'Te rendiste.'
    const pos = posDesdeFen(fenActual)
    if (pos.isCheckmate()) return pos.turn === color ? 'Jaque mate: ganó Stockfish.' : '¡Jaque mate! Ganaste.'
    if (pos.isStalemate()) return 'Tablas por ahogado.'
    if (pos.isInsufficientMaterial()) return 'Tablas por material insuficiente.'
    if (pos.halfmoves >= 100) return 'Tablas por la regla de las 50 jugadas.'
    if (repeticiones >= 3) return 'Tablas por triple repetición.'
    return undefined
  })
  let fin = $derived(config ? resultado.estado !== 'sigue' : !!finLibre)
  let turnoMio = $derived(posDesdeFen(fenActual).turn === color)
  let etiquetas = $derived(etiquetasJugadas(fenInicial, ex.ucis))
  let jugadasPropias = $derived(Math.ceil(ex.ucis.length / 2))

  function empezar() {
    ex = new Exploracion(fenInicial)
    rendida = false
    evaluacion = undefined
    evMia = undefined
    resultado = { estado: 'sigue' }
    consejo = undefined
    mejorTablebase = undefined
    usoPista = false
    verPista = false
    repeticionesMap = new Map()
    if (config) contarRepeticion(fenInicial)
    empezada = true
    if (posDesdeFen(fenInicial).turn !== color) responderLibre()
  }

  /** Modo final: evaluación fresca de una posición, desde mi lado, consultando al motor. */
  async function evaluarMia(fen: string): Promise<Evaluacion> {
    const pos = posDesdeFen(fen)
    const r = await motorInteractivo().analizar(fen, { profundidad: 18, tiempoMs: 1200 })
    return pos.turn === color ? r.ev : invertir(r.ev)
  }

  /** Modo final: decide si el ejercicio sigue, se logró o se falló, y registra el repaso si corresponde. */
  async function terminarFinal(tablebase?: string): Promise<boolean> {
    const pos = posDesdeFen(ex.fen)
    const repeticiones = repeticionesMap.get(clavePosicion(ex.fen)) ?? 1
    const r = revisar(pos, {
      objetivo: config!.objetivo,
      yo: color,
      jugadas: jugadasPropias,
      maxJugadas: config!.maxJugadas,
      damasIniciales,
      exigirMate,
      repeticiones,
      evMia,
      tablebase,
    })
    if (r.estado === 'sigue') return false
    // La partida termina por motivos distintos: jaque mate y tablas forzadas (ahogado, material
    // insuficiente, repetición, 50 jugadas) tienen una evaluación obvia; en los demás casos (la
    // jugada hizo que la posición dejara de estar ganada según las tablebases, se llegó al máximo
    // de jugadas, etc.) la posición sigue siendo jugable y hay que consultarle al motor su
    // evaluación real en vez de mostrar la que quedó calculada antes de esta jugada.
    const tablasForzadas = pos.isStalemate() || pos.isInsufficientMaterial() || repeticiones >= 3 || pos.halfmoves >= 100
    evMia = pos.isCheckmate() ? { mate: 0 } : tablasForzadas ? { cp: 0 } : await evaluarMia(ex.fen)
    resultado = r
    if (config!.idRepaso) await registrarIntento(config!.idRepaso, r.estado === 'logrado' ? (usoPista ? 'pista' : 'bien') : 'mal')
    return true
  }

  /** Modo final: el rival responde con la tablebase (juego perfecto, con conexión) o Stockfish fuerte. */
  async function responderFinal() {
    const p = posDesdeFen(ex.fen)
    const tb = await consultarTablebase(ex.fen, p.board.occupied.size())
    let uci = tb?.moves[0]?.uci
    const r = await motorInteractivo().analizar(ex.fen, { profundidad: 18, tiempoMs: 1200 })
    evMia = invertir(r.ev)
    uci ??= r.mejor
    if (!uci || !jugarUci(p, uci)) return
    ex.jugar(uci)
    contarRepeticion(ex.fen)
    const tbDespues = await consultarTablebase(ex.fen, posDesdeFen(ex.fen).board.occupied.size())
    const termino = await terminarFinal(tbDespues?.category)
    // Si sigue, la evaluación de arriba quedó calculada ANTES de esta jugada de la computadora
    // (se usó para elegirla): con la barra pedida, se refresca para la posición ya jugada.
    if (!termino && evaluar) evMia = await evaluarMia(ex.fen)
  }

  /** Modo libre: el rival responde con Stockfish al nivel elegido. */
  async function responderLibre() {
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
    if (r.mejor && jugarUci(posDesdeFen(f), r.mejor)) ex.jugar(r.mejor)
    pensando = false
  }

  async function alJugar(uci: string) {
    if (!empezada || fin || pensando || !enElFinal || !turnoMio) return
    const antes = posDesdeFen(ex.fen)
    const sig = jugarUci(antes, uci)
    if (!sig) return
    const san = sanDeUci(antes, uci)

    if (config) {
      pensando = true
      consejo = undefined
      mejorTablebase = undefined
      const fenAntes = fenDe(antes)
      const fenDespues = fenDe(sig)
      const [tbAntes, tbDespues] = await Promise.all([
        consultarTablebase(fenAntes, antes.board.occupied.size()),
        consultarTablebase(fenDespues, sig.board.occupied.size()),
      ])
      ex.jugar(uci)
      contarRepeticion(fenDespues)
      if (tbAntes && tbDespues) {
        const pierde = config.objetivo === 'ganar' ? tbDespues.category !== 'loss' && tbDespues.category !== 'maybe-loss' : tbDespues.category === 'win' || tbDespues.category === 'maybe-win'
        if (pierde && tbAntes.moves[0]) mejorTablebase = tbAntes.moves[0].uci
        if (pierde) consejo = `Con ${san} se escapa el resultado. La jugada correcta era ${aEspanol(tbAntes.moves[0].san)}.`
      }
      if (!(await terminarFinal(tbDespues?.category))) await responderFinal()
      pensando = false
    } else {
      ex.jugar(uci)
      if (!fin) await responderLibre()
    }
  }

  function rendirse() {
    ficha++
    pensando = false
    rendida = true
  }

  // Evaluación para la barra, siempre desde el lado de las blancas: en modo final, la de evMia
  // (desde mi lado) dada vuelta si juego con negras; en modo libre, la ya calculada por el motor.
  let evaluacionBarra = $derived.by(() => {
    if (!config) return evaluacion
    if (!evMia) return undefined
    return color === 'white' ? evMia : invertir(evMia)
  })
  // Se ve si el interruptor está prendido, o siempre que la partida ya terminó.
  let evaluacionAMostrar = $derived(evaluar || fin ? evaluacionBarra : undefined)
  let puedeMover = $derived(empezada && !fin && !pensando && enElFinal && turnoMio ? color : undefined)
  let sanUltima = $derived(ex.ucis.length ? sanDeUci(posDesdeFen(ex.fens[ex.fens.length - 2]), ex.ucis[ex.ucis.length - 1]) : undefined)
  let flechas = $derived.by(() => (mejorTablebase ? [{ de: mejorTablebase.slice(0, 2), a: mejorTablebase.slice(2, 4), color: 'green' as const }] : []))
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
    <div>
      <p><b>{config?.consigna ?? 'Jugás desde esta posición.'}</b></p>
      <p class="suave">
        {#if config}
          Objetivo: {config.objetivo === 'ganar' ? 'ganar' : 'hacer tablas'} · jugás con {color === 'white' ? 'blancas' : 'negras'} · jugada {jugadasPropias} de {config.maxJugadas}
          {#if evMia}· Stockfish: {textoEvaluacion(evMia)}{/if}
        {:else}
          {#if fin}<b>{finLibre}</b>
          {:else if pensando}Stockfish está pensando…
          {:else if !enElFinal}Estás mirando una posición anterior: volvé al final (⏭) para seguir jugando.
          {:else}Te toca jugar con {color === 'white' ? 'blancas' : 'negras'}.{/if}
          <span> · Nivel {NIVELES[nivel].nombre.toLowerCase()}</span>
        {/if}
      </p>
    </div>

    <TableroEval
      fen={ex.fen}
      orientacion={color}
      {puedeMover}
      ultimaJugada={ex.ultima}
      {flechas}
      {alJugar}
      evaluacion={evaluacionAMostrar}
    />

    {#if pensando}<p class="suave">Pensando…</p>{/if}
    {#if consejo}<p class="mal">{consejo}</p>{/if}
    {#if config && resultado.estado !== 'sigue'}
      <p class={resultado.estado === 'logrado' ? 'bien' : 'mal'}><b>{resultado.estado === 'logrado' ? '✓ Logrado' : '✗ No salió'}:</b> {resultado.motivo}</p>
    {/if}
    {#if verPista && config?.pista}<p class="idea">{config.pista}</p>{/if}

    <Navegador {etiquetas} idx={ex.idx} alIr={(i) => ex.ir(i)} vacio="Todavía no se jugó ninguna jugada." />
    <label class="check">
      <input type="checkbox" bind:checked={evaluar} />
      Mostrar evaluación <span class="suave">(mientras jugás funciona como pista; al terminar se ve siempre)</span>
    </label>

    <div class="fila">
      {#if config}
        {#if config.pista && !fin}<button class="boton" onclick={() => { verPista = true; usoPista = true }} disabled={verPista}>Pista</button>{/if}
        <button class="boton" onclick={empezar}>Empezar de nuevo</button>
      {:else}
        {#if !fin}<button class="boton" onclick={rendirse}>Rendirme / Terminar</button>{/if}
        <button class="boton" onclick={empezar}>Empezar de nuevo</button>
        <button class="boton enlace" onclick={() => { ficha++; pensando = false; empezada = false }}>Cambiar color o nivel</button>
      {/if}
      {#if alSalir}<button class="boton enlace" onclick={alSalir}>Volver</button>{/if}
    </div>
    {#if sanUltima}<p class="suave">Última jugada: {sanUltima}</p>{/if}
    {#if config}
      <p class="suave nota">
        {navigator.onLine ? 'Con conexión: el rival juega perfecto con las tablebases de Lichess y cada jugada tuya se verifica al instante.' : 'Sin conexión: el rival juega con Stockfish.'}
      </p>
    {/if}
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
  .bien {
    color: #3f9b4b;
  }
  .mal {
    color: #c9483c;
  }
  .idea {
    border-left: 3px solid var(--acento);
    padding-left: 10px;
  }
  .nota {
    font-size: 0.8rem;
  }
</style>
