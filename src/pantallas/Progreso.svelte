<script lang="ts">
  import { db } from '../lib/datos/db.ts'
  import type { ErrorPartida, FuenteIntento, Intento, ResultadoIntento } from '../lib/datos/tipos.ts'
  import { calcularProgreso, type Fila, type Progreso } from '../lib/progreso.ts'
  import { cargarProblemas, idRepaso, type Problema } from '../lib/problemas/problemas.ts'
  import Ejercicio from '../lib/ui/Ejercicio.svelte'
  import ProblemaLichess from '../lib/ui/ProblemaLichess.svelte'

  let progreso = $state<Progreso>()
  calcularProgreso().then((p) => (progreso = p))

  const pct = (x: number) => `${Math.round(100 * x)} %`
  const acierto = (f: Fila) => (f.intentos ? pct(f.aciertos / f.intentos) : '—')

  // Historial de intentos (C4): todos los que se terminaron, sin importar la fuente ni si cuentan
  // para el repaso espaciado (eso ya lo muestran las secciones de arriba).
  const NOMBRE_FUENTE: Record<FuenteIntento, string> = { propios: 'Mis errores', lichess: 'Táctica general', libros: 'Problemas de libros', final: 'Finales' }
  const NOMBRE_RESULTADO: Record<ResultadoIntento, string> = { bien: 'Bien', pista: 'Difícil (con errores o pista)', mal: 'Otra vez (solución vista)' }

  let historial = $state<Intento[]>([])
  db.intentos.toArray().then((h) => (historial = h.sort((a, b) => b.fecha - a.fecha)))

  let filtroResultado = $state<ResultadoIntento | 'todos'>('todos')
  let filtroDesde = $state('') // yyyy-mm-dd

  let historialFiltrado = $derived.by(() => {
    const desde = filtroDesde ? new Date(filtroDesde).getTime() : undefined
    return historial.filter((i) => (filtroResultado === 'todos' || i.resultado === filtroResultado) && (desde === undefined || i.fecha >= desde))
  })

  type Item = { tipo: 'error'; error: ErrorPartida } | { tipo: 'problema'; problema: Problema }

  let sesionReintento = $state<Item[]>()
  let indiceReintento = $state(0)
  let reintentando = $state(false)

  /** Reabre un ejercicio fallado a partir de su `ejercicioId`; `undefined` si ya no existe (o es un final, que todavía no se puede reabrir desde aquí). */
  async function resolverItem(i: Intento): Promise<Item | undefined> {
    if (i.fuente === 'propios') {
      const error = await db.errores.get(i.ejercicioId)
      return error ? { tipo: 'error', error } : undefined
    }
    if (i.fuente === 'lichess' || i.fuente === 'libros') {
      const problemas = await cargarProblemas(i.fuente)
      const p = problemas.find((p) => idRepaso(p) === i.ejercicioId)
      return p ? { tipo: 'problema', problema: p } : undefined
    }
    return undefined
  }

  async function reintentarFallados() {
    reintentando = true
    const fallados = historialFiltrado.filter((i) => i.resultado === 'mal')
    const unicos = [...new Map(fallados.map((i) => [i.ejercicioId, i])).values()]
    const items = (await Promise.all(unicos.map(resolverItem))).filter((x): x is Item => x !== undefined)
    sesionReintento = items
    indiceReintento = 0
    reintentando = false
  }

  function siguienteReintento() {
    indiceReintento++
    if (!sesionReintento || indiceReintento >= sesionReintento.length) sesionReintento = undefined
  }
</script>

{#if sesionReintento && sesionReintento[indiceReintento]}
  {@const it = sesionReintento[indiceReintento]}
  <div class="barra">
    <span>Reintentando el fallado {indiceReintento + 1} de {sesionReintento.length}</span>
    <button class="boton enlace" onclick={() => (sesionReintento = undefined)}>Terminar</button>
  </div>
  {#key `reintento-${indiceReintento}`}
    {#if it.tipo === 'error'}
      <Ejercicio error={it.error} alSeguir={siguienteReintento} repaso />
    {:else}
      <ProblemaLichess problema={it.problema} alSeguir={siguienteReintento} repaso />
    {/if}
  {/key}
{:else}

<h1>Progreso</h1>
<p class="suave">Dominio por área y lo que toca repasar. Sin rachas ni puntos: solo lo que sabés y lo que falta.</p>

{#if !progreso}
  <p class="suave">Calculando…</p>
{:else}
  <section class="tarjeta">
    <h2>Para repasar hoy</h2>
    <div class="numeros">
      <a href="#/tactica"><b>{progreso.colaHoy.tactica}</b><span>mis errores</span></a>
      <a href="#/tactica"><b>{progreso.colaHoy.problemas}</b><span>problemas</span></a>
      <a href="#/aperturas"><b>{progreso.colaHoy.aperturas}</b><span>líneas de apertura</span></a>
      <a href="#/finales"><b>{progreso.colaHoy.finales}</b><span>finales</span></a>
    </div>
    <p class="suave">Lo que fallás vuelve antes; lo que sale bien se espacia cada vez más (repaso espaciado FSRS).</p>
  </section>

  <section class="tarjeta">
    <h2>Táctica: mis errores por motivo</h2>
    {#if progreso.tacticaPorMotivo.length}
      <div class="tabla-scroll">
        <table>
          <thead><tr><th>Motivo</th><th class="num">Ejercicios</th><th class="num">Practicados</th><th class="num">Acierto</th><th class="num">Para repasar</th></tr></thead>
          <tbody>
            {#each progreso.tacticaPorMotivo as f (f.nombre)}
              <tr><td>{f.nombre}</td><td class="num">{f.total}</td><td class="num">{pct(f.practicados / f.total)}</td><td class="num">{acierto(f)}</td><td class="num">{f.vencidos}</td></tr>
            {/each}
          </tbody>
        </table>
      </div>
      <p class="suave">Motivo: cómo castigaba el rival tu jugada (o, si no se reconoce, el tema de la mejor jugada).</p>
    {:else}
      <p class="suave">Todavía no hay errores cargados.</p>
    {/if}
  </section>

  {#if progreso.problemasPorTema.length}
    <section class="tarjeta">
      <h2>Táctica general por tema</h2>
      <div class="tabla-scroll">
        <table>
          <thead><tr><th>Tema</th><th class="num">Practicados</th><th class="num">Acierto</th><th class="num">Para repasar</th></tr></thead>
          <tbody>
            {#each progreso.problemasPorTema as f (f.nombre)}
              <tr><td>{f.nombre}</td><td class="num">{f.practicados} de {f.total}</td><td class="num">{acierto(f)}</td><td class="num">{f.vencidos}</td></tr>
            {/each}
          </tbody>
        </table>
      </div>
    </section>
  {/if}

  <section class="tarjeta">
    <h2>Aperturas: mi repertorio</h2>
    {#each progreso.aperturas as a (a.color)}
      <h3>{a.color} · {a.lineas} línea{a.lineas === 1 ? '' : 's'}</h3>
      {#if a.niveles.length}
        <ul class="niveles">
          {#each a.niveles as n (n.nombre)}
            <li>
              <span>{n.nombre}</span>
              <span class="medidor"><span style:width={pct(n.dominio)}></span></span>
              <span class="num">{pct(n.dominio)} de {n.total}</span>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="suave">Sin líneas: armalo desde Aperturas → Mi repertorio.</p>
      {/if}
    {/each}
  </section>

  <section class="tarjeta">
    <h2>Finales del temario</h2>
    <ul class="niveles">
      {#each progreso.finales as f (f.titulo)}
        <li>
          <span>{f.titulo}</span>
          <span class="medidor"><span style:width={pct(f.dominio)}></span></span>
          <span class="num">{pct(f.dominio)}</span>
        </li>
      {/each}
    </ul>
  </section>
{/if}

<section class="tarjeta">
  <h2>Historial</h2>
  {#if !historial.length}
    <p class="suave">Todavía no hay ejercicios terminados: el historial se llena jugando en Táctica, Aperturas o Finales.</p>
    <a class="boton principal" href="#/tactica">Ir a Táctica</a>
  {:else}
    <div class="fila-filtros">
      <label>
        Resultado
        <select bind:value={filtroResultado}>
          <option value="todos">Todos</option>
          <option value="bien">Bien</option>
          <option value="pista">Difícil (con errores o pista)</option>
          <option value="mal">Otra vez (solución vista)</option>
        </select>
      </label>
      <label>
        Desde
        <input type="date" bind:value={filtroDesde} />
      </label>
      <button
        class="boton"
        onclick={reintentarFallados}
        disabled={reintentando || !historialFiltrado.some((i) => i.resultado === 'mal')}
      >
        Reintentar los fallados
      </button>
    </div>
    <p class="suave">{historialFiltrado.length} de {historial.length} intentos con estos filtros.</p>
    <div class="tabla-scroll">
      <table>
        <thead><tr><th>Fecha</th><th>Fuente</th><th>Resultado</th></tr></thead>
        <tbody>
          {#each historialFiltrado.slice(0, 200) as i (i.id)}
            <tr>
              <td>{new Date(i.fecha).toLocaleString('es-AR')}</td>
              <td>{NOMBRE_FUENTE[i.fuente]}</td>
              <td>{NOMBRE_RESULTADO[i.resultado]}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    {#if historialFiltrado.length > 200}
      <p class="suave">Mostrando los 200 más recientes de {historialFiltrado.length}.</p>
    {/if}
  {/if}
</section>

{/if}

<style>
  .numeros a {
    color: var(--texto);
    text-decoration: none;
  }
  h3 {
    font-size: 0.95rem;
    margin: 6px 0 0;
  }
  .niveles {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .niveles li {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(60px, 1fr) auto;
    gap: 10px;
    align-items: center;
    font-size: 0.9rem;
  }
  .medidor {
    height: 8px;
    border-radius: 4px;
    background: var(--borde);
    overflow: hidden;
  }
  .medidor span {
    display: block;
    height: 100%;
    background: var(--acento);
  }
  .num {
    font-variant-numeric: tabular-nums;
    color: var(--texto-suave);
  }
  .fila-filtros {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }
  .fila-filtros label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .barra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: var(--texto-suave);
  }
</style>
