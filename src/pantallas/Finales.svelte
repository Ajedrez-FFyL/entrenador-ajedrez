<script lang="ts">
  import { textoEvaluacion } from '../lib/ajedrez/evaluacion.ts'
  import { db } from '../lib/datos/db.ts'
  import type { ErrorPartida, Repaso } from '../lib/datos/tipos.ts'
  import type { Objetivo, PosicionFinal, Temario, TemaFinal } from '../lib/finales/tipos.ts'
  import temarioJson from '../contenido/finales/temario.json'
  import { hashFinal, idFinalDeResto } from '../lib/enlaces.ts'
  import BotonCopiarLink from '../lib/ui/BotonCopiarLink.svelte'
  import { avisar } from '../lib/ui/avisos.svelte.ts'
  import JugarPosicion, { type ConfigFinal } from '../lib/ui/JugarPosicion.svelte'

  const temario = temarioJson as Temario
  const NIVELES = [...new Set(temario.temas.map((t) => t.nivel))].sort()

  // Link directo `#/finales/tema/<id>`: el tema abierto sale del hash, así el botón «atrás» del navegador vuelve al temario.
  let { resto = [] }: { resto?: string[] } = $props()
  const claveResto = $derived(resto.join('/'))
  const idPedido = $derived(idFinalDeResto(resto))
  let tema = $derived(idPedido ? temario.temas.find((t) => t.id === idPedido) : undefined)

  $effect(() => {
    void claveResto
    // Cualquier cambio del hash saca de la posición que se esté jugando.
    jugando = undefined
    colaOrigen = undefined
    if (!claveResto) return
    if (tema) vista = 'temario'
    else avisar('No encontré ese tema')
  })

  let vista = $state<'temario' | 'mis-finales'>('temario')
  let jugando = $state<{ fen: string; config: ConfigFinal; clave: number }>()
  let repasos = $state(new Map<string, Repaso>())
  let propios = $state<ErrorPartida[]>([])
  // De qué lista salió la posición que se está jugando y en qué lugar, para el botón "Siguiente posición".
  let colaOrigen = $state<{ lista: 'tema' | 'propios'; indice: number }>()

  async function cargar() {
    const lista = await db.repasos.where('errorId').startsWith('final').toArray()
    repasos = new Map(lista.map((r) => [r.errorId, r]))
    const errores = await db.errores.where('fase').equals('final').toArray()
    propios = errores
      .filter((e) => e.clasificacion !== 'imprecision' && objetivoDe(e))
      .sort((a, b) => b.fecha - a.fecha)
  }
  cargar()

  /** Objetivo de un final propio según la evaluación antes del error: ganado → ganar, parejo → tablas. */
  function objetivoDe(e: ErrorPartida): Objetivo | undefined {
    const ev = e.evalAntes
    if (ev.mate !== undefined) return ev.mate > 0 ? 'ganar' : undefined
    const cp = ev.cp ?? 0
    if (cp >= 200) return 'ganar'
    if (Math.abs(cp) < 150) return 'tablas'
    return undefined
  }

  const idPosicion = (t: TemaFinal, p: PosicionFinal) => `final:${t.id}/${p.id}`
  const configDeTema = (t: TemaFinal, p: PosicionFinal): ConfigFinal => ({ objetivo: p.objetivo, consigna: p.consigna, pista: p.pista, maxJugadas: p.maxJugadas, idRepaso: idPosicion(t, p) })
  const configDePropio = (e: ErrorPartida): ConfigFinal => {
    const objetivo = objetivoDe(e)!
    return { objetivo, consigna: objetivo === 'ganar' ? 'Ganá este final de tu partida.' : 'Hacé tablas en este final de tu partida.', maxJugadas: 40, idRepaso: `final-propio:${e.id}` }
  }

  function estado(id: string): 'nuevo' | 'repasar' | 'logrado' {
    const r = repasos.get(id)
    if (!r) return 'nuevo'
    return new Date(r.card.due).getTime() <= Date.now() ? 'repasar' : 'logrado'
  }

  function dominioTema(t: TemaFinal): number {
    return t.posiciones.filter((p) => estado(idPosicion(t, p)) === 'logrado').length / t.posiciones.length
  }

  let clave = 0
  function jugar(fen: string, config: ConfigFinal, origen?: { lista: 'tema' | 'propios'; indice: number }) {
    jugando = { fen, config, clave: ++clave }
    colaOrigen = origen
  }

  async function salir() {
    jugando = undefined
    colaOrigen = undefined
    await cargar()
  }

  // Siguiente posición de la misma lista (temario de un tema, o "Mis finales"), si hay una: el
  // botón "Siguiente posición" de JugarPosicion desaparece cuando esto da undefined.
  let siguiente = $derived.by((): (() => void) | undefined => {
    if (!colaOrigen) return undefined
    if (colaOrigen.lista === 'tema') {
      const sig = tema?.posiciones[colaOrigen.indice + 1]
      if (!tema || !sig) return undefined
      const t = tema
      const indice = colaOrigen.indice + 1
      return () => jugar(sig.fen, configDeTema(t, sig), { lista: 'tema', indice })
    }
    const sig = propios.slice(0, 40)[colaOrigen.indice + 1]
    if (!sig) return undefined
    const indice = colaOrigen.indice + 1
    return () => jugar(sig.fen, configDePropio(sig), { lista: 'propios', indice })
  })

  const ETIQUETA = { nuevo: 'sin intentar', repasar: 'para repasar', logrado: 'logrado' }
</script>

<h1>Finales</h1>

{#if jugando}
  {#key jugando.clave}
    <JugarPosicion fen={jugando.fen} config={jugando.config} alSalir={salir} alSiguiente={siguiente} />
  {/key}
{:else}
  <div class="pestanas" role="tablist">
    <button role="tab" aria-selected={vista === 'temario'} onclick={() => { vista = 'temario'; if (tema) location.hash = '#/finales' }}>Temario</button>
    <button role="tab" aria-selected={vista === 'mis-finales'} onclick={() => (vista = 'mis-finales')}>De mis partidas</button>
  </div>

  {#if vista === 'temario' && tema}
    <div class="barra-tema">
      <button class="boton enlace" onclick={() => (location.hash = '#/finales')}>← Temario</button>
      <BotonCopiarLink hash={hashFinal(tema.id)} />
    </div>
    <section class="tarjeta">
      <h2>{tema.titulo}</h2>
      {#each tema.explicacion as parrafo (parrafo)}<p>{parrafo}</p>{/each}
      <h3>Ideas clave</h3>
      <ul>{#each tema.ideas as idea (idea)}<li>{idea}</li>{/each}</ul>
      <p class="suave">
        Fuentes: {#each tema.fuentes as f, i (f.titulo + (f.capitulo ?? ''))}{i ? ' · ' : ''}{#if f.url}<a href={f.url} target="_blank" rel="noopener">{f.titulo}</a>{:else}<cite>{f.titulo}</cite>{/if}{f.capitulo ? `, ${f.capitulo}` : ''}{/each}.
        Explicación generada, puede contener errores; las posiciones están verificadas con las tablebases de Lichess.
      </p>
    </section>
    <section class="tarjeta">
      <h2>Posiciones para jugar</h2>
      <ul class="lista">
        {#each tema.posiciones as p, i (p.id)}
          {@const t = tema}
          {@const id = idPosicion(t, p)}
          <li>
            <div>
              <b>{p.consigna}</b>
              <div class="suave">{p.objetivo === 'ganar' ? 'Ganar' : 'Tablas'} · hasta {p.maxJugadas} jugadas · <span class="etiqueta {estado(id)}">{ETIQUETA[estado(id)]}</span></div>
            </div>
            <button class="boton principal" onclick={() => jugar(p.fen, configDeTema(t, p), { lista: 'tema', indice: i })}>Jugar</button>
          </li>
        {/each}
      </ul>
    </section>
  {:else if vista === 'temario'}
    {#each NIVELES as nivel (nivel)}
      <section class="tarjeta">
        <h2>Nivel {nivel}</h2>
        <ul class="lista">
          {#each temario.temas.filter((t) => t.nivel === nivel) as t (t.id)}
            <li>
              <button class="tema" onclick={() => (location.hash = hashFinal(t.id))}>
                <b>{t.titulo}</b>
                <span class="suave">{t.posiciones.length} {t.posiciones.length === 1 ? 'posición' : 'posiciones'} · dominio {Math.round(100 * dominioTema(t))} %</span>
              </button>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  {:else if vista === 'mis-finales'}
    <section class="tarjeta">
      <p class="suave">
        Finales de tus partidas donde cometiste un error o un error grave. Si la posición estaba ganada, el objetivo es ganarla;
        si estaba pareja, aguantar las tablas. Jugás desde el momento anterior al error.
      </p>
      {#if propios.length === 0}
        <p class="suave">Todavía no hay finales con errores detectados: hacen falta partidas tuyas analizadas con Stockfish.</p>
        <a class="boton principal" href="#/partidas">Ir a Mis partidas</a>
      {:else}
        <ul class="lista">
          {#each propios.slice(0, 40) as e, i (e.id)}
            {@const objetivo = objetivoDe(e)!}
            {@const id = `final-propio:${e.id}`}
            <li>
              <div>
                <b>{new Date(e.fecha).toLocaleDateString('es-AR')} · jugada {e.numeroJugada} · {e.miColor === 'white' ? 'blancas' : 'negras'}</b>
                <div class="suave">{objetivo === 'ganar' ? 'Ganar' : 'Tablas'} · estaba {textoEvaluacion(e.evalAntes)} · <span class="etiqueta {estado(id)}">{ETIQUETA[estado(id)]}</span></div>
              </div>
              <button
                class="boton principal"
                onclick={() => jugar(e.fen, configDePropio(e), { lista: 'propios', indice: i })}
              >
                Jugar
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </section>
  {/if}
{/if}

<style>
  .barra-tema {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .lista {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .lista li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid var(--borde);
  }
  .tema {
    width: 100%;
    text-align: left;
    border: none;
    background: none;
    color: var(--texto);
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .etiqueta.logrado {
    border-color: #3f9b4b;
    color: #3f9b4b;
  }
  .etiqueta.repasar {
    border-color: var(--acento);
    color: var(--acento);
  }
  h3 {
    font-size: 0.95rem;
    margin: 4px 0 0;
  }
  ul:not(.lista) {
    margin: 0;
  }
</style>
