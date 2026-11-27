<script lang="ts">
  import { hashFicha, idFichaDeResto } from '../lib/enlaces.ts'
  import BotonCopiarLink from '../lib/ui/BotonCopiarLink.svelte'
  import { avisar } from '../lib/ui/avisos.svelte.ts'
  import { cargarBiblioteca, citaLibro, hayEnApp, type LibroBiblioteca } from '../lib/biblioteca/biblioteca.ts'

  const POR_PAGINA = 40
  const ORDEN_NIVEL = ['Inicial', 'Intermedio', 'Avanzado', 'Todos']

  let todos = $state<LibroBiblioteca[]>([])
  let cargando = $state(true)
  let busqueda = $state('')
  let tema = $state('')
  let nivel = $state('')
  let dificultad = $state('')
  let idioma = $state('')
  let soloEnApp = $state(false)
  let pagina = $state(0)
  // Link directo `#/biblioteca/<ID>`: la ficha abierta sale del hash, así el botón «atrás» del navegador vuelve a la lista.
  let { resto = [] }: { resto?: string[] } = $props()
  const idPedido = $derived(idFichaDeResto(resto))
  let elegido = $derived(idPedido ? todos.find((l) => l.id.toUpperCase() === idPedido) : undefined)
  let avisado = ''
  $effect(() => {
    if (cargando || !idPedido || elegido || avisado === idPedido) return
    avisado = idPedido
    avisar('No encontré esa ficha')
  })

  cargarBiblioteca().then((l) => {
    todos = l
    cargando = false
  })

  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const distintos = (f: (l: LibroBiblioteca) => string) => [...new Set(todos.map(f).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'))
  let temas = $derived(distintos((l) => l.tema))
  let niveles = $derived(distintos((l) => l.nivel).sort((a, b) => ORDEN_NIVEL.indexOf(a) - ORDEN_NIVEL.indexOf(b)))
  let idiomas = $derived(distintos((l) => l.idioma))

  let filtrados = $derived.by(() => {
    const q = norm(busqueda.trim())
    return todos
      .filter(
        (l) =>
          (!tema || l.tema === tema) &&
          (!nivel || l.nivel === nivel) &&
          (!idioma || l.idioma === idioma) &&
          (!dificultad || (dificultad === 'sin' ? l.dificultad === null : l.dificultad === Number(dificultad))) &&
          (!soloEnApp || hayEnApp(l)) &&
          (!q || norm(`${l.titulo} ${l.autor}`).includes(q)),
      )
      .sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }))
  })
  $effect(() => {
    void [busqueda, tema, nivel, dificultad, idioma, soloEnApp]
    pagina = 0
  })
  let visibles = $derived(filtrados.slice(pagina * POR_PAGINA, (pagina + 1) * POR_PAGINA))
  let hayFiltros = $derived(!!(busqueda || tema || nivel || dificultad || idioma || soloEnApp))
  function limpiar() {
    busqueda = tema = nivel = dificultad = idioma = ''
    soloEnApp = false
  }

  const plural = (n: number, uno: string, varios: string) => `${n.toLocaleString('es-AR')} ${n === 1 ? uno : varios}`
  const puntos = (d: number | null) => (d === null ? 'Sin dificultad asignada' : `Dificultad ${d} de 5`)
</script>

{#if elegido}
  {@const l = elegido}
  <div class="barra-ficha">
    <button class="boton enlace" onclick={() => (location.hash = '#/biblioteca')}>← Volver a la lista</button>
    <BotonCopiarLink hash={hashFicha(l.id)} />
  </div>
  <article class="ficha">
    <h1>{l.titulo}</h1>
    {#if l.autor}<p class="autor">{l.autor}</p>{/if}

    <dl class="datos">
      <div><dt>Tema</dt><dd>{l.tema}{l.subtema ? ` · ${l.subtema}` : ''}</dd></div>
      <div><dt>Nivel</dt><dd>{l.nivel}</dd></div>
      <div>
        <dt>Dificultad</dt>
        <dd>
          {#if l.dificultad === null}
            Sin asignar
          {:else}
            <span class="puntos" role="img" aria-label={puntos(l.dificultad)}>
              {#each [1, 2, 3, 4, 5] as n (n)}<span class="punto" class:lleno={n <= (l.dificultad ?? 0)}></span>{/each}
            </span>
            <span class="suave">{l.dificultad} de 5</span>
          {/if}
        </dd>
      </div>
      <div><dt>Idioma</dt><dd>{l.idioma}</dd></div>
      {#if l.paginas}<div><dt>Páginas</dt><dd>{l.paginas.toLocaleString('es-AR')}</dd></div>{/if}
      <div><dt>Destino previsto en la app</dt><dd>{l.destino}</dd></div>
    </dl>

    <section>
      <h2>Qué cubre</h2>
      {#if l.queCubre}
        <p>{l.queCubre}</p>
      {:else}
        <p class="suave">Todavía no hay una descripción de este libro.</p>
      {/if}
    </section>

    <section>
      <h2>En la app</h2>
      {#if hayEnApp(l)}
        <ul class="en-app">
          {#if l.enApp.problemas}
            <li>
              <a href="#/tactica">{plural(l.enApp.problemas, 'problema', 'problemas')}</a>
              <span class="suave"> en Táctica → Problemas de libros</span>
            </li>
          {/if}
          {#if l.enApp.partidas}
            <li>
              <a href="#/partidas">{plural(l.enApp.partidas, 'partida', 'partidas')}</a>
              <span class="suave"> en Mis partidas → Partidas de libros</span>
            </li>
          {/if}
          {#if l.enApp.finales.length}
            <li>
              <a href="#/finales">Fuente de {plural(l.enApp.finales.length, 'tema', 'temas')} de Finales</a>
              <span class="suave">: {l.enApp.finales.map((t) => t.titulo).join('; ')}</span>
            </li>
          {/if}
          {#if l.enApp.aperturas.length}
            <li>
              <a href="#/aperturas">Citado en {plural(l.enApp.aperturas.length, 'curso', 'cursos')} de Aperturas</a>
              <span class="suave">: {l.enApp.aperturas.map((c) => c.nombre).join('; ')}</span>
            </li>
          {/if}
        </ul>
      {:else}
        <p class="suave">Todavía no hay contenido de este libro en la app.</p>
      {/if}
    </section>

    <section>
      <h2>Cita</h2>
      <p><cite>{citaLibro(l)}</cite></p>
    </section>
  </article>
{:else}
  <h1>Biblioteca</h1>
  <p class="suave">
    Los libros de la biblioteca del espacio, con qué cubre cada uno, para quién es y qué ya se usa de él en la app. Son fichas
    de consulta: no se pueden leer los libros desde acá.
  </p>

  {#if cargando}
    <p>Cargando…</p>
  {:else if !todos.length}
    <p class="suave">Todavía no hay fichas en esta versión.</p>
  {:else}
    <div class="filtros">
      <input type="search" class="buscador" placeholder="Buscar por título o autor" aria-label="Buscar por título o autor" bind:value={busqueda} />
      <label>
        <span class="suave">Tema</span>
        <select bind:value={tema}>
          <option value="">Todos</option>
          {#each temas as t (t)}<option value={t}>{t}</option>{/each}
        </select>
      </label>
      <label>
        <span class="suave">Nivel</span>
        <select bind:value={nivel}>
          <option value="">Todos</option>
          {#each niveles as n (n)}<option value={n}>{n}</option>{/each}
        </select>
      </label>
      <label>
        <span class="suave">Dificultad</span>
        <select bind:value={dificultad}>
          <option value="">Todas</option>
          {#each [1, 2, 3, 4, 5] as n (n)}<option value={String(n)}>{n} de 5</option>{/each}
          <option value="sin">Sin asignar</option>
        </select>
      </label>
      <label>
        <span class="suave">Idioma</span>
        <select bind:value={idioma}>
          <option value="">Todos</option>
          {#each idiomas as i (i)}<option value={i}>{i}</option>{/each}
        </select>
      </label>
    </div>
    <div class="fila barra">
      <label class="check"><input type="checkbox" bind:checked={soloEnApp} /> Solo los que ya se usan en la app</label>
      <span class="suave" aria-live="polite">{plural(filtrados.length, 'libro', 'libros')}</span>
      {#if hayFiltros}<button class="boton enlace" onclick={limpiar}>Limpiar filtros</button>{/if}
    </div>

    {#if !filtrados.length}
      <p class="suave">No hay libros con esos filtros.</p>
    {:else}
      <ul class="lista">
        {#each visibles as l (l.id)}
          <li>
            <button onclick={() => (location.hash = hashFicha(l.id))}>
              <b>{l.titulo}</b>
              <span class="suave">
                {[l.autor, l.tema, l.nivel, l.dificultad ? `dificultad ${l.dificultad}` : '', l.idioma].filter(Boolean).join(' · ')}
              </span>
            </button>
          </li>
        {/each}
      </ul>
      {#if filtrados.length > POR_PAGINA}
        <div class="fila">
          <button class="boton" disabled={pagina === 0} onclick={() => pagina--}>Anteriores</button>
          <span class="suave">Página {pagina + 1} de {Math.ceil(filtrados.length / POR_PAGINA)}</span>
          <button class="boton" disabled={(pagina + 1) * POR_PAGINA >= filtrados.length} onclick={() => pagina++}>Siguientes</button>
        </div>
      {/if}
    {/if}
  {/if}
{/if}

<style>
  .barra-ficha {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .filtros {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
    align-items: flex-end;
  }
  .filtros label {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 0.85rem;
    flex: 1;
    min-width: 130px;
  }
  .filtros .buscador {
    flex: 1 1 100%;
  }
  .barra {
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .check {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    font-size: 0.9rem;
  }
  .lista {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .lista button {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 10px;
    border: 1px solid var(--borde);
    border-radius: 8px;
    background: var(--superficie);
    color: var(--texto);
  }
  .lista button span {
    font-size: 0.85rem;
  }
  .lista button:hover {
    border-color: var(--acento);
  }
  .fila {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }
  .ficha {
    margin-top: 8px;
    max-width: 760px;
  }
  .autor {
    font-size: 1.1rem;
    margin: 0 0 12px;
    color: var(--texto-suave);
  }
  .datos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 8px 16px;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    background: var(--superficie);
    padding: 12px 16px;
    margin: 0 0 16px;
  }
  .datos dt {
    color: var(--texto-suave);
    font-size: 0.8rem;
  }
  .datos dd {
    margin: 0;
    font-weight: 500;
  }
  .puntos {
    display: inline-flex;
    gap: 3px;
    margin-right: 6px;
    vertical-align: middle;
  }
  .punto {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--acento);
  }
  .punto.lleno {
    background: var(--acento);
  }
  section h2 {
    font-size: 1.05rem;
    margin-top: 16px;
  }
  .en-app {
    margin: 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
</style>
