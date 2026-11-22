<script lang="ts">
  import { arbolDeCursos, buscarCursos, cargarCatalogo, jugadasDeNodo, type Catalogo, type NodoCurso } from '../../lib/aperturas/catalogo.ts'
  import { fensDeLinea } from '../../lib/aperturas/arbol.ts'
  import { EXPLICACIONES } from '../../lib/aperturas/explicaciones.ts'
  import type { Color } from '../../lib/datos/tipos.ts'
  import MiniTablero from '../../lib/ui/MiniTablero.svelte'

  /**
   * Elegir una apertura navegando el árbol de variantes: se ve un solo nivel por vez (1.e4, 1.d4, 1.c4, 1.Cf3 y
   * otras primeras jugadas), con migas de pan y «← Atrás». El buscador ignora el árbol y muestra una lista plana
   * con la ruta de cada resultado; al borrar la búsqueda se vuelve al lugar donde se estaba.
   */
  interface Props {
    color: Color
    /** Ids de los cursos que ya están en «Mis aperturas» con este color. */
    yaAgregadas: string[]
    /** Progreso de cada curso que ya se estudia (id → «12/40 líneas»). */
    progreso: Record<string, string>
    alElegir: (id: string) => void
    alCancelar: () => void
  }
  let { color, yaAgregadas, progreso, alElegir, alCancelar }: Props = $props()

  const arbol = arbolDeCursos(EXPLICACIONES)
  let ruta = $state.raw<NodoCurso[]>([])
  let busqueda = $state('')
  let catalogo = $state.raw<Catalogo>()
  cargarCatalogo().then((c) => (catalogo = c))

  let actual = $derived(ruta.at(-1))
  let nivel = $derived(actual ? actual.hijos : arbol)
  let resultados = $derived(busqueda.trim() ? buscarCursos(arbol, catalogo, busqueda) : [])
  const fen = (n: NodoCurso) => fensDeLinea(n.raiz).at(-1)!
  const ya = (n: NodoCurso) => !!n.curso && yaAgregadas.includes(n.curso.id)

  function entrar(n: NodoCurso) {
    ruta = [...ruta, n]
  }
  function irA(i: number) {
    ruta = ruta.slice(0, i)
  }
  function verEnArbol(r: { nodo: NodoCurso; ruta: NodoCurso[] }) {
    ruta = r.nodo.hijos.length ? [...r.ruta, r.nodo] : r.ruta
    busqueda = ''
  }
  const textoVariantes = (n: NodoCurso) => `${n.variantes} variante${n.variantes === 1 ? '' : 's'}`
</script>

<div class="cabecera">
  <h2>Agregar una apertura con {color === 'white' ? 'blancas' : 'negras'}</h2>
  <button class="boton enlace" onclick={alCancelar}>Cancelar</button>
</div>

<input class="busqueda" type="search" placeholder="Buscar por nombre o jugadas (Siciliana, Ruy Lopez, Ab5…)" bind:value={busqueda} aria-label="Buscar apertura" />

{#if busqueda.trim()}
  <p class="suave">{resultados.length} resultado{resultados.length === 1 ? '' : 's'}</p>
  <ul class="resultados">
    {#each resultados as r (r.nodo.id)}
      <li>
        <div class="texto">
          <b>{r.nodo.nombre}</b>
          <span class="suave ruta">{[...r.ruta.map((x) => x.nombre), r.nodo.nombre].join(' › ')}</span>
          <span class="suave jugadas">{jugadasDeNodo(r.nodo.raiz)}</span>
        </div>
        <div class="acciones">
          {#if ya(r.nodo)}
            <span class="suave">Ya la tenés</span>
          {:else}
            <button class="boton" onclick={() => alElegir(r.nodo.curso!.id)}>Agregar</button>
          {/if}
          <button class="boton enlace" onclick={() => verEnArbol(r)}>Ver en el árbol</button>
        </div>
      </li>
    {/each}
  </ul>
  {#if !resultados.length}<p class="suave">No hay aperturas que coincidan. Probá con otra palabra o con las jugadas (por ejemplo «Cf3» o «Nf3»).</p>{/if}
{:else}
  <nav class="migas" aria-label="Ubicación en el árbol de aperturas">
    {#if ruta.length}<button class="boton" onclick={() => irA(ruta.length - 1)}>← Atrás</button>{/if}
    <ol>
      <li>
        {#if ruta.length}<button class="enlace-miga" onclick={() => irA(0)}>Aperturas</button>{:else}<span aria-current="page">Aperturas</span>{/if}
      </li>
      {#each ruta as n, i (n.id)}
        <li>
          <span class="sep" aria-hidden="true">›</span>
          {#if i < ruta.length - 1}<button class="enlace-miga" onclick={() => irA(i + 1)}>{n.nombre}</button>{:else}<span aria-current="page">{n.nombre}</span>{/if}
        </li>
      {/each}
    </ol>
  </nav>

  {#if actual?.curso}
    <section class="curso-actual">
      <div>
        <b>{actual.curso.nombre}</b>
        <span class="suave">{jugadasDeNodo(actual.raiz)}</span>
      </div>
      {#if ya(actual)}
        <span class="suave">Ya la tenés · {progreso[actual.curso.id] ?? ''}</span>
      {:else}
        <button class="boton principal" onclick={() => alElegir(actual.curso!.id)}>Practicar esta</button>
      {/if}
    </section>
    <p class="suave">O elegí una de sus variantes:</p>
  {/if}

  <ul class="grilla">
    {#each nivel as n (n.id)}
      <li class="carta" class:ya={ya(n)}>
        <button
          class="cuerpo"
          onclick={() => (n.curso && !n.hijos.length ? alElegir(n.curso.id) : n.curso ? undefined : entrar(n))}
          disabled={ya(n) && !n.hijos.length}
          aria-label={n.curso && !n.hijos.length ? `Agregar ${n.nombre}` : n.curso ? n.nombre : `Abrir ${n.nombre}`}
        >
          <span class="nombre">{n.nombre}</span>
          <MiniTablero fen={fen(n)} orientacion={color} />
          {#if n.raiz.length}<span class="suave detalle">{jugadasDeNodo(n.raiz)}</span>{/if}
          {#if n.variantes}<span class="suave detalle">{n.curso ? textoVariantes(n) : `${n.variantes} aperturas adentro`}</span>{/if}
          {#if ya(n)}<span class="detalle estudio">Ya la estudiás · {progreso[n.curso!.id] ?? ''}</span>{/if}
        </button>
        {#if n.curso && n.hijos.length}
          <div class="dos-acciones">
            {#if !ya(n)}<button class="boton" onclick={() => alElegir(n.curso!.id)}>Practicar esta</button>{/if}
            <button class="boton" onclick={() => entrar(n)}>Ver variantes ({n.variantes})</button>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  .cabecera {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 8px;
  }
  .cabecera h2 {
    margin: 0;
  }
  .busqueda {
    width: 100%;
    margin: 4px 0 10px;
  }
  .migas {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
  .migas ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
    font-size: 0.92rem;
  }
  .migas li {
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .sep {
    color: var(--texto-suave);
  }
  .enlace-miga {
    border: none;
    background: none;
    color: var(--acento);
    font: inherit;
    cursor: pointer;
    padding: 2px 0;
    text-decoration: underline;
  }
  [aria-current='page'] {
    font-weight: 600;
  }
  .curso-actual {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    background: var(--superficie);
    padding: 10px 12px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .curso-actual .suave {
    display: block;
  }
  .grilla,
  .resultados {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .grilla {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  .carta {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    background: var(--superficie);
    padding: 8px;
  }
  .carta:hover {
    border-color: var(--acento);
  }
  .carta.ya {
    opacity: 0.8;
  }
  .cuerpo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    text-align: left;
    border: none;
    background: none;
    color: var(--texto);
    padding: 0;
    cursor: pointer;
    font: inherit;
  }
  .cuerpo:disabled {
    cursor: default;
  }
  .nombre {
    font-weight: 600;
    font-size: 0.88rem;
    min-height: 2.3em;
  }
  .detalle {
    font-size: 0.78rem;
  }
  .estudio {
    color: #3f9b4b;
  }
  .dos-acciones {
    display: grid;
    gap: 6px;
  }
  .resultados {
    display: grid;
    gap: 8px;
  }
  .resultados li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    background: var(--superficie);
    padding: 8px 10px;
    flex-wrap: wrap;
  }
  .texto {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1 1 220px;
  }
  .ruta,
  .jugadas {
    font-size: 0.82rem;
  }
  .acciones {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
