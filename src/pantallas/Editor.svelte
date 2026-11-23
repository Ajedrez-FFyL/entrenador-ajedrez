<script lang="ts">
  import type { Evaluacion } from '../lib/ajedrez/evaluacion.ts'
  import { FEN_INICIAL } from '../lib/ajedrez/posicion.ts'
  import EditorPosicion from '../lib/ui/EditorPosicion.svelte'
  import { Exploracion } from '../lib/ui/exploracion.svelte.ts'
  import JugarPosicion from '../lib/ui/JugarPosicion.svelte'
  import Navegacion from '../lib/ui/Navegacion.svelte'
  import PanelMotor from '../lib/ui/PanelMotor.svelte'
  import type { Flecha } from '../lib/ui/Tablero.svelte'
  import TableroEval from '../lib/ui/TableroEval.svelte'
  import { tomarPosicionPendiente } from '../lib/jugarDesdeAca.ts'

  type Modo = 'editar' | 'analizar' | 'jugar'

  // Si se llega con "Jugar desde acá" (botón en otra pantalla), arranca directo jugando esa posición.
  // svelte-ignore state_referenced_locally
  const pendiente = tomarPosicionPendiente()
  let fen = $state(pendiente ?? FEN_INICIAL)
  let valido = $state(true)
  let error = $state('')
  // svelte-ignore state_referenced_locally
  let modo = $state<Modo>(pendiente ? 'jugar' : 'editar')
  let jugarClave = $state(0)

  let ex = $state<Exploracion>()
  let mejorMotor = $state<string>()
  let evaluacion = $state<Evaluacion>()
  let etiquetaEval = $state<string>()

  let enLinea = $state(navigator.onLine)

  function analizar() {
    ex = new Exploracion(fen)
    mejorMotor = undefined
    evaluacion = undefined
    etiquetaEval = undefined
    modo = 'analizar'
  }
  function jugar() {
    jugarClave++
    modo = 'jugar'
  }
  function volverAEditar() {
    modo = 'editar'
  }

  function llevarALichess() {
    if (!enLinea || !valido) return
    window.open(`https://lichess.org/analysis/${fen.replace(/ /g, '_')}`, '_blank', 'noopener')
  }

  function abrirEditorLichess() {
    if (!enLinea) return
    window.open('https://lichess.org/editor', '_blank', 'noopener')
  }

  let copiado = $state(false)
  async function copiarFenAccion() {
    try {
      await navigator.clipboard.writeText(fen)
      copiado = true
      setTimeout(() => (copiado = false), 1500)
    } catch {
      /* sin portapapeles */
    }
  }

  function descargarPgn() {
    const pgn = `[SetUp "1"]\n[FEN "${fen}"]\n\n*\n`
    const blob = new Blob([pgn], { type: 'application/x-chess-pgn' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'posicion.pgn'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }

  let flechas = $derived.by((): Flecha[] => (mejorMotor ? [{ de: mejorMotor.slice(0, 2), a: mejorMotor.slice(2, 4), color: 'blue' }] : []))
</script>

<svelte:window ononline={() => (enLinea = true)} onoffline={() => (enLinea = false)} />

<h1>Editor</h1>

{#if modo === 'jugar'}
  <div class="barra">
    <span>Jugando</span>
  </div>
  {#key jugarClave}
    <JugarPosicion {fen} alSalir={volverAEditar} />
  {/key}
{:else if modo === 'analizar' && ex}
  <div class="barra">
    <span>Analizando</span>
    <button class="boton enlace" onclick={volverAEditar}>Volver al editor</button>
  </div>
  <TableroEval fen={ex.fen} orientacion="white" puedeMover={ex.turno} ultimaJugada={ex.ultima} {flechas} alJugar={(u) => ex?.jugar(u)} {evaluacion} {etiquetaEval} />
  <Navegacion {ex} />
  <PanelMotor fen={ex.fen} bind:mejor={mejorMotor} bind:evaluacion bind:etiquetaEval />
{:else}
  <p class="suave">Armá cualquier posición para analizarla, jugarla contra la computadora o llevarla a Lichess.</p>

  <EditorPosicion bind:fen bind:valido bind:error />

  <section class="tarjeta">
    <h2>Desde una imagen</h2>
    <p class="suave">Subí la foto en Lichess (botón "From image"), copiá el FEN y pegalo acá arriba.</p>
    <button class="boton" onclick={abrirEditorLichess} disabled={!enLinea}>Abrir lichess.org/editor</button>
    {#if !enLinea}<p class="suave">Necesita internet.</p>{/if}
  </section>

  <section class="tarjeta">
    <h2>Acciones</h2>
    <div class="fila">
      <button class="boton principal" onclick={analizar} disabled={!valido}>Analizar con Stockfish</button>
      <button class="boton principal" onclick={jugar} disabled={!valido}>Jugar contra la computadora</button>
    </div>
    <div class="fila">
      <button class="boton" onclick={llevarALichess} disabled={!valido || !enLinea}>Llevar a Lichess</button>
      <button class="boton" onclick={copiarFenAccion} disabled={!valido}>{copiado ? 'Copiado' : 'Copiar FEN'}</button>
      <button class="boton" onclick={descargarPgn} disabled={!valido}>Descargar PGN</button>
    </div>
    {#if !valido}<p class="suave">{error || 'Corregí la posición para poder usar estas acciones.'}</p>{/if}
    {#if valido && !enLinea}<p class="suave">Llevar a Lichess necesita internet. Analizar y jugar funcionan sin conexión.</p>{/if}
  </section>
{/if}

<style>
  .barra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: var(--texto-suave);
  }
</style>
