<script lang="ts">
  import { untrack } from 'svelte'
  import { Chessground } from 'chessground'
  import type { Api } from 'chessground/api'
  import type { Key, Piece } from 'chessground/types'
  import { Chess } from 'chessops/chess'
  import { parseFen } from 'chessops/fen'
  import { parsePgn, startingPosition } from 'chessops/pgn'
  import { parseSan } from 'chessops/san'
  import { FEN_INICIAL, fenDe } from '../ajedrez/posicion.ts'
  import 'chessground/assets/chessground.base.css'
  import 'chessground/assets/chessground.brown.css'
  import 'chessground/assets/chessground.cburnett.css'

  const FEN_VACIO = '8/8/8/8/8/8/8/8 w - - 0 1'
  const MENSAJE_ERROR: Record<string, string> = {
    ERR_EMPTY: 'El tablero está vacío.',
    ERR_OPPOSITE_CHECK: 'El bando que no mueve está en jaque: no es una posición legal.',
    ERR_PAWNS_ON_BACKRANK: 'No puede haber peones en la primera ni en la última fila.',
    ERR_KINGS: 'Tiene que haber exactamente un rey de cada color.',
    ERR_VARIANT: 'Posición no válida.',
  }

  interface Props {
    /** FEN inicial (p. ej. al llegar desde otra pantalla). */
    fen?: string
    valido?: boolean
    error?: string
  }
  // svelte-ignore state_referenced_locally
  let { fen = $bindable(FEN_INICIAL), valido = $bindable(true), error = $bindable('') }: Props = $props()

  const PIEZAS_BLANCAS: Piece[] = (['king', 'queen', 'rook', 'bishop', 'knight', 'pawn'] as const).map((role) => ({ color: 'white', role }))
  const PIEZAS_NEGRAS: Piece[] = (['king', 'queen', 'rook', 'bishop', 'knight', 'pawn'] as const).map((role) => ({ color: 'black', role }))

  let elemento: HTMLDivElement
  let cg: Api | undefined
  let seleccionada = $state<Piece | 'borrar' | undefined>()
  let orientacion = $state<'white' | 'black'>('white')
  // svelte-ignore state_referenced_locally
  let turno = $state<'w' | 'b'>(fen.split(' ')[1] === 'b' ? 'b' : 'w')
  // svelte-ignore state_referenced_locally
  let enroque = $state(enroqueDesdeFen(fen))
  // svelte-ignore state_referenced_locally
  let alPaso = $state(campoAlPaso(fen))
  let textoFen = $state(fen)
  let copiado = $state(false)
  let textoPgn = $state('')
  let errorPgn = $state('')

  function enroqueDesdeFen(f: string): { K: boolean; Q: boolean; k: boolean; q: boolean } {
    const campo = f.split(' ')[2] ?? '-'
    return { K: campo.includes('K'), Q: campo.includes('Q'), k: campo.includes('k'), q: campo.includes('q') }
  }
  function campoAlPaso(f: string): string {
    const c = f.split(' ')[3] ?? '-'
    return c === '-' ? '' : c
  }
  function campoEnroque(): string {
    const s = `${enroque.K ? 'K' : ''}${enroque.Q ? 'Q' : ''}${enroque.k ? 'k' : ''}${enroque.q ? 'q' : ''}`
    return s || '-'
  }

  /** Arma el FEN a partir del tablero y los campos (turno, enroque, al paso), y valida. */
  function recomponerFen() {
    const tablero = cg?.getFen() ?? FEN_VACIO.split(' ')[0]
    textoFen = `${tablero} ${turno} ${campoEnroque()} ${alPaso.trim() || '-'} 0 1`
    validar(textoFen)
    fen = textoFen
  }

  function validar(f: string): boolean {
    const setup = parseFen(f.trim())
    if (setup.isErr) {
      error = 'El FEN no es válido.'
      valido = false
      return false
    }
    const pos = Chess.fromSetup(setup.value)
    if (pos.isErr) {
      error = MENSAJE_ERROR[pos.error.message] ?? 'Posición ilegal.'
      valido = false
      return false
    }
    error = ''
    valido = true
    return true
  }

  $effect(() => {
    // El tablero se crea una sola vez: la posición inicial se lee sin suscribirse a cambios.
    const inicial = untrack(() => textoFen.split(' ')[0])
    cg = Chessground(elemento, {
      fen: inicial,
      orientation: untrack(() => orientacion),
      movable: { free: true, color: 'both' },
      draggable: { deleteOnDropOff: true },
      premovable: { enabled: false },
      highlight: { lastMove: false },
      events: {
        select: (key: Key) => {
          if (!cg || !seleccionada) return
          if (seleccionada === 'borrar') cg.setPieces(new Map([[key, undefined]]))
          else cg.setPieces(new Map([[key, { ...seleccionada }]]))
          recomponerFen()
        },
        change: recomponerFen,
      },
    })
    const obs = new ResizeObserver(() => cg?.redrawAll())
    obs.observe(elemento)
    validar(untrack(() => textoFen))
    return () => {
      obs.disconnect()
      cg?.destroy()
    }
  })

  $effect(() => {
    cg?.set({ orientation: orientacion })
  })

  function alCambiarCampo() {
    recomponerFen()
  }

  function cargarFenEscrito() {
    const partes = textoFen.trim().split(/\s+/)
    const setup = parseFen(textoFen.trim())
    if (setup.isErr) {
      error = 'El FEN no es válido.'
      valido = false
      return
    }
    cg?.set({ fen: partes[0] })
    turno = partes[1] === 'b' ? 'b' : 'w'
    enroque = enroqueDesdeFen(textoFen)
    alPaso = campoAlPaso(textoFen)
    validar(textoFen)
    fen = textoFen
  }

  function posicionInicial() {
    cg?.set({ fen: FEN_INICIAL.split(' ')[0] })
    turno = 'w'
    enroque = { K: true, Q: true, k: true, q: true }
    alPaso = ''
    recomponerFen()
  }

  function limpiarTablero() {
    cg?.set({ fen: FEN_VACIO.split(' ')[0] })
    enroque = { K: false, Q: false, k: false, q: false }
    alPaso = ''
    recomponerFen()
  }

  function girarTablero() {
    orientacion = orientacion === 'white' ? 'black' : 'white'
  }

  async function copiarFen() {
    try {
      await navigator.clipboard.writeText(textoFen)
      copiado = true
      setTimeout(() => (copiado = false), 1500)
    } catch {
      /* portapapeles no disponible */
    }
  }

  function cargarPgn() {
    errorPgn = ''
    if (!textoPgn.trim()) return
    try {
      const juegos = parsePgn(textoPgn)
      const juego = juegos[0]
      if (!juego) {
        errorPgn = 'No se encontró ninguna partida en el texto.'
        return
      }
      const inicio = startingPosition(juego.headers)
      if (inicio.isErr) {
        errorPgn = 'El PGN no tiene una posición inicial válida.'
        return
      }
      const pos = inicio.value
      for (const nodo of juego.moves.mainline()) {
        const move = parseSan(pos, nodo.san)
        if (!move) {
          errorPgn = `No se pudo jugar "${nodo.san}" del PGN.`
          return
        }
        pos.play(move)
      }
      const nuevoFen = fenDe(pos)
      cg?.set({ fen: nuevoFen.split(' ')[0] })
      turno = nuevoFen.split(' ')[1] === 'b' ? 'b' : 'w'
      enroque = enroqueDesdeFen(nuevoFen)
      alPaso = campoAlPaso(nuevoFen)
      recomponerFen()
      textoPgn = ''
    } catch {
      errorPgn = 'No se pudo leer el PGN.'
    }
  }

  const simbolo = (p: Piece) => ({ king: 'R', queen: 'D', rook: 'T', bishop: 'A', knight: 'C', pawn: 'P' })[p.role]
</script>

{#snippet filaPiezas(piezas: Piece[])}
  <div class="paleta">
    {#each piezas as p (p.color + p.role)}
      <button
        type="button"
        class="pieza {p.color}"
        class:activa={seleccionada !== 'borrar' && seleccionada?.color === p.color && seleccionada?.role === p.role}
        onclick={() => (seleccionada = p)}
        aria-label={`${p.role} ${p.color}`}
      >
        {simbolo(p)}
      </button>
    {/each}
  </div>
{/snippet}

<div class="editor">
  {@render filaPiezas(PIEZAS_NEGRAS)}

  <div class="tablero" bind:this={elemento}></div>

  {@render filaPiezas(PIEZAS_BLANCAS)}

  <div class="herramientas">
    <button type="button" class="pieza" class:activa={!seleccionada} onclick={() => (seleccionada = undefined)} title="Mano: mover piezas arrastrando">✋</button>
    <button type="button" class="pieza" class:activa={seleccionada === 'borrar'} onclick={() => (seleccionada = 'borrar')} title="Goma: tocá una pieza para sacarla">✕</button>
    <span class="suave">Elegí una pieza y tocá una casilla para ponerla. También podés arrastrar piezas, o arrastrar una afuera del tablero para sacarla.</span>
  </div>

  <div class="fila acciones-tablero">
    <button class="boton" onclick={posicionInicial}>Posición inicial</button>
    <button class="boton" onclick={limpiarTablero}>Limpiar el tablero</button>
    <button class="boton" onclick={girarTablero}>Girar el tablero</button>
  </div>

  <div class="fila">
    <label><input type="radio" bind:group={turno} value="w" onchange={alCambiarCampo} /> Juegan las blancas</label>
    <label><input type="radio" bind:group={turno} value="b" onchange={alCambiarCampo} /> Juegan las negras</label>
  </div>

  <fieldset class="enroque">
    <legend>Enroque disponible</legend>
    <label><input type="checkbox" bind:checked={enroque.K} onchange={alCambiarCampo} /> Blancas, corto (O-O)</label>
    <label><input type="checkbox" bind:checked={enroque.Q} onchange={alCambiarCampo} /> Blancas, largo (O-O-O)</label>
    <label><input type="checkbox" bind:checked={enroque.k} onchange={alCambiarCampo} /> Negras, corto (O-O)</label>
    <label><input type="checkbox" bind:checked={enroque.q} onchange={alCambiarCampo} /> Negras, largo (O-O-O)</label>
  </fieldset>

  <label>
    Captura al paso (casilla, opcional)
    <input bind:value={alPaso} onchange={alCambiarCampo} placeholder="ej. e3" spellcheck="false" />
  </label>

  <label>
    FEN
    <span class="con-boton">
      <input bind:value={textoFen} onchange={cargarFenEscrito} spellcheck="false" />
      <button type="button" class="boton" onclick={copiarFen}>{copiado ? 'Copiado' : 'Copiar'}</button>
    </span>
  </label>
  {#if error}<p class="mal">{error}</p>{/if}

  <label>
    Pegar un PGN (toma la posición final)
    <textarea bind:value={textoPgn} rows="3" placeholder="1. e4 e5 2. Cf3 Cc6 …"></textarea>
  </label>
  <div class="fila">
    <button class="boton" onclick={cargarPgn} disabled={!textoPgn.trim()}>Cargar PGN</button>
  </div>
  {#if errorPgn}<p class="mal">{errorPgn}</p>{/if}
</div>

<style>
  .editor {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .tablero {
    width: min(100%, calc(100dvh - 300px));
    min-width: min(100%, 280px);
    aspect-ratio: 1 / 1;
    margin: 0 auto;
  }
  .paleta {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
  }
  .herramientas {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .pieza {
    width: 36px;
    height: 36px;
    border: 1px solid var(--borde);
    border-radius: 8px;
    background: var(--superficie);
    color: var(--texto);
    font-weight: 700;
    flex: none;
  }
  .pieza.white {
    background: #f4efe6;
    color: #23201c;
  }
  .pieza.black {
    background: #3a3630;
    color: #f4efe6;
  }
  .pieza.activa {
    outline: 2px solid var(--acento);
  }
  label {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  label input:not([type='radio']):not([type='checkbox']) {
    flex: 1;
  }
  .con-boton {
    display: flex;
    flex: 1;
    gap: 6px;
  }
  .con-boton input {
    flex: 1;
  }
  .enroque {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    padding: 8px 12px;
  }
  .enroque label {
    flex: none;
  }
  .enroque legend {
    padding: 0 4px;
    color: var(--texto-suave);
    font-size: 0.85rem;
  }
  textarea {
    flex: 1;
    font: inherit;
    color: var(--texto);
    background: var(--fondo);
    border: 1px solid var(--borde);
    border-radius: 8px;
    padding: 8px;
    resize: vertical;
  }
  .mal {
    color: #c9483c;
    margin: 0;
  }
  .acciones-tablero {
    justify-content: center;
  }
</style>
