<script lang="ts">
  import { untrack } from 'svelte'
  import { hashCurso } from '../../lib/enlaces.ts'
  import BotonCopiarLink from '../../lib/ui/BotonCopiarLink.svelte'
  import { fensDeLinea } from '../../lib/aperturas/arbol.ts'
  import { armarCurso, estadoCurso, guardarMisAperturas, leerMisAperturas, type MisAperturas } from '../../lib/aperturas/curso.ts'
  import { EXPLICACIONES, type Explicacion } from '../../lib/aperturas/explicaciones.ts'
  import type { Color } from '../../lib/datos/tipos.ts'
  import MiniTablero from '../../lib/ui/MiniTablero.svelte'
  import ArbolAperturas from './ArbolAperturas.svelte'
  import Curso from './Curso.svelte'

  /**
   * Inicio de la práctica de aperturas: una fila para blancas y otra para negras con las aperturas que
   * eligió el usuario. Cada apertura se abre en su curso, con secciones y lecciones.
   */
  /** Curso pedido por el hash (`#/aperturas/curso/<id>/<color>`): abrir y cerrar un curso es cambiar el hash, así «atrás» funciona. */
  let { cursoId, cursoColor }: { cursoId?: string; cursoColor?: Color } = $props()

  let mias = $state<MisAperturas>({ white: [], black: [] })
  let progreso = $state<Record<string, string>>({})
  let abierta = $state<{ explicacion: Explicacion; color: Color }>()
  let agregando = $state<Color>()

  const porId = new Map(EXPLICACIONES.map((e) => [e.id, e]))
  const fenFinal = (e: Explicacion) => fensDeLinea(e.raiz.split(' ')).at(-1)!

  async function cargar() {
    mias = await leerMisAperturas()
    for (const color of ['white', 'black'] as Color[])
      for (const id of mias[color]) {
        const e = porId.get(id)
        if (!e) continue
        armarCurso(e, color)
          .then(estadoCurso)
          .then((s) => (progreso = { ...progreso, [`${color}:${id}`]: `${s.aprendidas}/${s.total} líneas${s.vencidas.length ? ` · ${s.vencidas.length} para repasar` : ''}` }))
      }
  }
  cargar()

  $effect(() => {
    const id = cursoId
    const color = cursoColor
    untrack(() => {
      const e = id ? porId.get(id) : undefined
      if (e && color) abierta = { explicacion: e, color }
      else if (abierta) {
        abierta = undefined
        cargar()
      }
    })
  })

  async function agregar(color: Color, id: string) {
    const nuevas = { ...mias, [color]: [...mias[color].filter((x) => x !== id), id] }
    await guardarMisAperturas(nuevas)
    agregando = undefined
    await cargar()
  }

  async function quitar(color: Color, id: string) {
    await guardarMisAperturas({ ...mias, [color]: mias[color].filter((x) => x !== id) })
    location.hash = '#/aperturas'
    await cargar()
  }
</script>

{#if abierta}
  {@const a = abierta}
  {#key a}
    <Curso
      explicacion={a.explicacion}
      color={a.color}
      alVolver={() => {
        location.hash = '#/aperturas'
      }}
      alQuitar={() => quitar(a.color, a.explicacion.id)}
    />
  {/key}
{:else if agregando}
  <ArbolAperturas
    color={agregando}
    yaAgregadas={mias[agregando]}
    progreso={Object.fromEntries(mias[agregando].map((id) => [id, progreso[`${agregando}:${id}`] ?? '']))}
    alElegir={(id) => agregar(agregando!, id)}
    alCancelar={() => (agregando = undefined)}
  />
{:else}
  <p class="suave">Elegí qué aperturas practicar con cada color. Dentro de cada una, las líneas se van sumando de a poco, lección por lección.</p>
  {#each [['white', 'Con blancas'], ['black', 'Con negras']] as [color, titulo] (color)}
    {@const c = color as Color}
    <section class="fila-aperturas">
      <h3>{titulo}</h3>
      <ul class="carrusel">
        {#each mias[c] as id (id)}
          {@const e = porId.get(id)}
          {#if e}
            <li>
              <button class="carta" onclick={() => (location.hash = hashCurso(e.id, c))}>
                <span class="nombre">{e.nombre}</span>
                <MiniTablero fen={fenFinal(e)} orientacion={c} />
                <span class="suave detalle">{progreso[`${c}:${id}`] ?? '…'}</span>
              </button>
            </li>
          {/if}
        {/each}
        <li>
          <button class="carta agregar" onclick={() => (agregando = c)}>
            <span class="mas">+</span>
            <span>Agregar apertura</span>
          </button>
        </li>
      </ul>
    </section>
  {/each}
{/if}

<style>
  .fila-aperturas h3 {
    font-size: 1rem;
    margin: 16px 0 8px;
  }
  .carrusel {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .carrusel {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 6px;
  }
  .carrusel li {
    flex: none;
    width: 150px;
  }
  .carta {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    background: var(--superficie);
    color: var(--texto);
    padding: 8px;
    cursor: pointer;
    font: inherit;
  }
  .carta:hover {
    border-color: var(--acento);
  }
  .nombre {
    font-weight: 600;
    font-size: 0.88rem;
    min-height: 2.3em;
  }
  .detalle {
    font-size: 0.78rem;
  }
  .agregar {
    align-items: center;
    justify-content: center;
    min-height: 190px;
    color: var(--texto-suave);
  }
  .mas {
    font-size: 2rem;
    line-height: 1;
  }
</style>
