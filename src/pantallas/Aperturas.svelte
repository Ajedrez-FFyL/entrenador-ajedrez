<script lang="ts">
  import { armarArbol, lineasDesde } from '../lib/aperturas/arbol.ts'
  import { cargarCatalogo } from '../lib/aperturas/catalogo.ts'
  import { EXPLICACIONES } from '../lib/aperturas/explicaciones.ts'
  import type { Color } from '../lib/datos/tipos.ts'
  import { colorPorDefecto, interpretarCurso } from '../lib/enlaces.ts'
  import { avisar } from '../lib/ui/avisos.svelte.ts'
  import MisAperturas from './aperturas/MisAperturas.svelte'
  import Explorador from './aperturas/Explorador.svelte'
  import Practica from './aperturas/Practica.svelte'
  import Repertorio from './aperturas/Repertorio.svelte'

  // Link directo `#/aperturas/curso/<id>[/blancas|/negras]`: abre ese curso (el color, si falta, se deduce del nombre).
  let { resto = [] }: { resto?: string[] } = $props()
  let cursoPedido = $state<{ id: string; color: Color }>()

  $effect(() => {
    const clave = resto.join('/')
    if (!clave) {
      cursoPedido = undefined
      return
    }
    const pedido = interpretarCurso(clave.split('/'))
    const e = pedido && EXPLICACIONES.find((x) => x.id === pedido.id)
    if (!pedido || !e) {
      cursoPedido = undefined
      avisar('No encontré ese curso')
      return
    }
    cursoPedido = { id: e.id, color: pedido.color ?? colorPorDefecto(e.nombre) }
    modo = 'practica'
    practica = undefined
  })

  let modo = $state<'practica' | 'explorar' | 'repertorio'>('practica')
  let inicial = $state<string[]>([])
  let practica = $state<{ color: Color; lineas: string[][]; titulo: string }>()
  let claveExplorador = $state(0)

  /**
   * Líneas para practicar desde una posición: las del catálogo de aperturas y, además, las de las notas
   * escritas (verificadas con Stockfish) que salen de ahí, que suelen ir más lejos en la teoría.
   */
  async function practicarDesde(color: Color, prefijo: string[], titulo: string) {
    const arbol = armarArbol(await cargarCatalogo())
    const lineas = lineasDesde(arbol, prefijo, 40)
    const raiz = prefijo.join(' ')
    for (const e of EXPLICACIONES) {
      for (const clave of Object.keys(e.notas)) {
        if (clave.startsWith(raiz + ' ')) lineas.push(clave.split(' '))
      }
    }
    practica = { color, lineas: lineas.length ? lineas : [prefijo], titulo }
    modo = 'practica'
  }

  function practicarLineas(color: Color, lineas: string[][], titulo: string) {
    practica = { color, lineas, titulo }
    modo = 'practica'
  }

  function explorar(ucis: string[]) {
    inicial = ucis
    claveExplorador++
    modo = 'explorar'
  }
</script>

<h1>Aperturas</h1>

<div class="pestanas" role="tablist">
  <button role="tab" aria-selected={modo === 'practica'} onclick={() => (modo = 'practica')}>Práctica</button>
  <button role="tab" aria-selected={modo === 'explorar'} onclick={() => (modo = 'explorar')}>Explorar</button>
  <button role="tab" aria-selected={modo === 'repertorio'} onclick={() => (modo = 'repertorio')}>Mi repertorio</button>
</div>

<style>
  .con-explicacion {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .con-explicacion select {
    flex: 1;
    min-width: 200px;
  }
</style>

{#if modo === 'explorar'}
  {#if EXPLICACIONES.length}
    <label class="con-explicacion">
      <span class="suave">Con explicación escrita ({EXPLICACIONES.length}):</span>
      <select
        onchange={(ev) => {
          const e = EXPLICACIONES.find((x) => x.id === ev.currentTarget.value)
          if (e) explorar(e.raiz.split(' '))
          ev.currentTarget.value = ''
        }}
      >
        <option value="">Elegí una apertura…</option>
        {#each EXPLICACIONES as e (e.id)}<option value={e.id}>{e.nombre}</option>{/each}
      </select>
    </label>
  {/if}
  {#key claveExplorador}
    <Explorador {inicial} alPracticar={practicarDesde} />
  {/key}
{:else if modo === 'repertorio'}
  <Repertorio alPracticar={practicarLineas} alExplorar={explorar} />
{:else if practica}
  {#key practica}
    <Practica {...practica} autoEmpezar alSalir={() => (practica = undefined)} />
  {/key}
{:else}
  <MisAperturas cursoId={cursoPedido?.id} cursoColor={cursoPedido?.color} />
{/if}
