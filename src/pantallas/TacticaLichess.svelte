<script lang="ts">
  import { armarSesionProblemas, bajarTema, cargarProblemas, estadoProblemas, filtrosIniciales, FILTROS_PROBLEMAS, nombreTema, temaEstaGuardado, TEMAS_FILTRO, TEMAS_LIBROS, type FiltrosProblemas, type Origen, type Problema } from '../lib/problemas/problemas.ts'
  import type { ResultadoIntento } from '../lib/repaso/repaso.ts'
  import HistorialSesion from '../lib/ui/HistorialSesion.svelte'
  import ProblemaLichess from '../lib/ui/ProblemaLichess.svelte'
  import { hashTactica } from '../lib/enlaces.ts'
  import BotonCopiarLink from '../lib/ui/BotonCopiarLink.svelte'
  import SelectorMultiple from '../lib/ui/SelectorMultiple.svelte'

  let RANGOS = $state<[number, number, string][]>([
    [1400, 1700, '1400 a 1700'],
    [1500, 2000, '1500 a 2000 (alrededor de tu nivel)'],
    [1700, 2000, '1700 a 2000'],
    [2000, 2200, '2000 a 2200 (más difíciles)'],
    [1400, 2200, 'Todos'],
  ])

  let { origen = 'lichess', temaPedido }: { origen?: Origen; temaPedido?: string } = $props()
  let temas = $derived(origen === 'libros' ? TEMAS_LIBROS : TEMAS_FILTRO)
  let opcionesTemas = $derived(temas.map((t) => ({ valor: t, etiqueta: nombreTema(t) })))

  // El componente se crea de nuevo al cambiar de origen (está dentro de un {#key}).
  // svelte-ignore state_referenced_locally
  let filtros = $state<FiltrosProblemas>({ ...FILTROS_PROBLEMAS, origen })
  let libros = $state<string[]>([])
  let rango = $state(1)
  let resumen = $state<{ total: number; vencidos: number; nuevosHoy: number; nuevos: number }>()
  let hayDatos = $state(true)
  let sesion = $state<Problema[]>([])
  let indice = $state(0)
  let enSesion = $state(false)
  let resultados = $state<ResultadoIntento[]>([])
  // Historial de la sesión: tocar un cuadradito vuelve a ver ese problema, en modo repaso.
  let revisando = $state<number>()

  // C4d: cada tema (fuera de los 4.550 de siempre) se baja la primera vez que se elige en el filtro,
  // y de ahí en más queda guardado para usarlo sin conexión (ver `bajarTema` en problemas.ts).
  let descargando = $state<string>()
  let faltaConexion = $state(false)

  async function prepararTemas(temas: string[] | undefined) {
    descargando = undefined
    faltaConexion = false
    if (origen !== 'lichess' || !temas?.length || temas.length >= TEMAS_FILTRO.length) return
    for (const t of temas) {
      if (await temaEstaGuardado(t)) continue
      if (!navigator.onLine) {
        faltaConexion = true
        continue
      }
      descargando = nombreTema(t)
      try {
        await bajarTema(t)
      } catch {
        faltaConexion = true
      }
    }
    descargando = undefined
  }

  // svelte-ignore state_referenced_locally
  cargarProblemas(origen).then((p) => {
    hayDatos = p.length > 0
    libros = [...new Set(p.map((x) => x.fuente?.titulo).filter((t): t is string => !!t))].sort()
  })

  // Si en la bienvenida se eligió un nivel aproximado, arranca con ese rango (se agrega como opción propia).
  // svelte-ignore state_referenced_locally
  filtrosIniciales(origen).then((f) => {
    if (f.ratingMin === FILTROS_PROBLEMAS.ratingMin && f.ratingMax === FILTROS_PROBLEMAS.ratingMax) return
    RANGOS = [[f.ratingMin, f.ratingMax, `${f.ratingMin} a ${f.ratingMax} (tu nivel)`], ...RANGOS]
    rango = 0
  })
  let opcionesLibros = $derived(libros.map((l) => ({ valor: l, etiqueta: l })))

  $effect(() => {
    filtros.ratingMin = RANGOS[rango][0]
    filtros.ratingMax = RANGOS[rango][1]
  })

  async function actualizar() {
    const e = await estadoProblemas($state.snapshot(filtros))
    resumen = { total: e.todos.length, vencidos: e.vencidos.length, nuevosHoy: Math.min(e.nuevosHoy, e.nuevos.length), nuevos: e.nuevos.length }
  }

  $effect(() => {
    void [filtros.temas, filtros.libros, filtros.ratingMin, filtros.ratingMax]
    prepararTemas(filtros.temas).then(actualizar)
  })

  async function empezar() {
    sesion = await armarSesionProblemas($state.snapshot(filtros))
    indice = 0
    resultados = []
    enSesion = sesion.length > 0
  }

  async function seguir(r: ResultadoIntento) {
    resultados.push(r)
    indice++
    if (indice >= sesion.length) {
      enSesion = false
      await actualizar()
    }
  }
</script>

{#if revisando !== undefined && sesion[revisando]}
  <div class="barra">
    <span>Revisando el problema {revisando + 1}</span>
    <button class="boton enlace" onclick={() => (revisando = undefined)}>Volver a la sesión</button>
  </div>
  {#key `revisar-${revisando}`}
    <ProblemaLichess problema={sesion[revisando]} alSeguir={() => (revisando = undefined)} repaso />
  {/key}
{:else if enSesion && sesion[indice]}
  <div class="barra">
    <span>Problema {indice + 1} de {sesion.length}</span>
    <button class="boton enlace" onclick={() => { enSesion = false; actualizar() }}>Terminar</button>
  </div>
  {#key sesion[indice].id}
    <ProblemaLichess problema={sesion[indice]} alSeguir={seguir} />
  {/key}
  <HistorialSesion {resultados} alElegir={(i) => (revisando = i)} />
{:else if !hayDatos}
  <p class="suave">La selección de problemas no está disponible en esta versión.</p>
{:else}
  {#if origen === 'libros'}
    <p class="suave">
      Problemas tomados de los libros de tu biblioteca, cada uno con su libro y capítulo. Solo entran los que Stockfish
      (o la tablebase, en los finales) confirma. Se juega la línea entera: el rival responde solo, podés volver atrás y,
      si te equivocás, volver a intentar. Si encontrás otra jugada que también gana, te avisa y seguís buscando la del libro.
    </p>
  {:else}
    <p class="suave">
      Una selección de la base pública de problemas de Lichess (CC0): problemas probados por miles de jugadores y bien
      valorados, filtrados por tema y rating. Los que fallás vuelven antes.
    </p>
  {/if}
  {#if resultados.length}
    <p><b>Sesión terminada: {resultados.filter((r) => r !== 'mal').length} de {resultados.length} bien.</b></p>
  {/if}
  {#if descargando}
    <p class="suave">Bajando ejercicios de {descargando}…</p>
  {:else if faltaConexion}
    <p class="suave">Este tema necesita internet la primera vez.</p>
  {/if}
  <section class="tarjeta">
    {#if resumen}
      <div class="numeros">
        <div><b>{resumen.vencidos}</b><span>para repasar</span></div>
        <div><b>{resumen.nuevosHoy}</b><span>nuevos hoy</span></div>
        <div><b>{resumen.total}</b><span>con estos filtros</span></div>
      </div>
      <button class="boton principal" onclick={empezar} disabled={resumen.vencidos + resumen.nuevosHoy === 0}>Empezar</button>
    {:else}
      <p>Cargando…</p>
    {/if}
  </section>
  <section class="tarjeta">
    <h2>Filtros</h2>
    {#if filtros.temas?.length === 1 && temas.includes(filtros.temas[0])}
      <div class="campo">
        <span class="suave">Tema: <b>{nombreTema(filtros.temas[0])}</b></span>
        <BotonCopiarLink hash={hashTactica(filtros.temas[0], origen, TEMAS_FILTRO.includes(filtros.temas[0]) && TEMAS_LIBROS.includes(filtros.temas[0]))} />
      </div>
    {/if}
    <div class="campo">
      <span class="rotulo">Tema</span>
      <SelectorMultiple
        opciones={opcionesTemas}
        etiqueta="tema"
        inicial={temaPedido ? [temaPedido] : undefined}
        claveStorage={temaPedido ? undefined : `tactica-temas-${origen}`}
        alCambiar={(v) => (filtros.temas = v)}
      />
    </div>
    {#if origen === 'libros'}
      <div class="campo">
        <span class="rotulo">Libro</span>
        <SelectorMultiple opciones={opcionesLibros} etiqueta="libro" claveStorage="tactica-libros" alCambiar={(v) => (filtros.libros = v)} />
      </div>
    {:else}
      <label>
        Rating
        <select bind:value={rango}>
          {#each RANGOS as r, i (i)}<option value={i}>{r[2]}</option>{/each}
        </select>
      </label>
    {/if}
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
  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  select {
    flex: 1;
  }
  .campo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .campo .rotulo {
    flex: none;
  }
  .campo :global(.selector-multiple) {
    flex: 1;
  }
</style>
