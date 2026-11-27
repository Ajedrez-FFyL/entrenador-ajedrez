<script lang="ts">
  export interface OpcionSelector {
    valor: string
    etiqueta: string
  }

  interface Props {
    opciones: OpcionSelector[]
    etiqueta: string // singular, para los textos ("tema", "libro")
    etiquetaPlural?: string // por si el plural no es solo agregar "s"
    /** Si se pasa, recuerda la última selección en localStorage con esta clave. */
    claveStorage?: string
    /** Selección inicial (p. ej. por un link directo): tiene prioridad sobre lo guardado y sobre «todo». */
    inicial?: string[]
    alCambiar: (seleccionados: string[]) => void
  }

  let { opciones, etiqueta, etiquetaPlural, claveStorage, inicial, alCambiar }: Props = $props()
  let plural = $derived(etiquetaPlural ?? `${etiqueta}s`)

  function cargar(): string[] {
    const pedidos = inicial?.filter((v) => opciones.some((o) => o.valor === v))
    if (pedidos?.length) return pedidos
    if (claveStorage) {
      try {
        const guardado = JSON.parse(localStorage.getItem(claveStorage) ?? 'null')
        if (Array.isArray(guardado)) {
          const validos = guardado.filter((v): v is string => typeof v === 'string' && opciones.some((o) => o.valor === v))
          if (validos.length) return validos
        }
      } catch {
        /* sin almacenamiento */
      }
    }
    // Por defecto, todo elegido: equivale a no filtrar.
    return opciones.map((o) => o.valor)
  }

  let seleccionados = $state<string[]>([])
  let abierto = $state(false)
  // `opciones` puede llegar vacío al crear el componente y completarse después (p. ej. el libro,
  // que sale de un fetch): recién se elige la selección inicial (localStorage, o todo) cuando ya
  // hay opciones, y solo una vez.
  let inicializado = false
  $effect(() => {
    if (inicializado || !opciones.length) return
    inicializado = true
    seleccionados = cargar()
  })

  $effect(() => {
    if (!inicializado) return
    alCambiar($state.snapshot(seleccionados))
  })

  $effect(() => {
    const v = $state.snapshot(seleccionados)
    if (!claveStorage || !inicializado) return
    try {
      localStorage.setItem(claveStorage, JSON.stringify(v))
    } catch {
      /* sin almacenamiento: la selección no se recuerda */
    }
  })

  function alternar(valor: string) {
    seleccionados = seleccionados.includes(valor) ? seleccionados.filter((v) => v !== valor) : [...seleccionados, valor]
  }
  function elegirTodos() {
    seleccionados = opciones.map((o) => o.valor)
  }
  function elegirNinguno() {
    seleccionados = []
  }

  let texto = $derived.by(() => {
    if (seleccionados.length === opciones.length) return `Todos los ${plural}`
    if (seleccionados.length === 0) return `Ningún ${etiqueta}`
    if (seleccionados.length === 1) {
      const o = opciones.find((x) => x.valor === seleccionados[0])
      return o ? o.etiqueta : `1 ${etiqueta} elegido`
    }
    return `${seleccionados.length} ${plural} elegidos`
  })

  // Cierra el desplegable al perder el foco (tocar afuera, o moverse a otro control con el teclado).
  function alPerderFoco(e: FocusEvent) {
    const contenedor = e.currentTarget as HTMLElement
    requestAnimationFrame(() => {
      if (!contenedor.contains(document.activeElement)) abierto = false
    })
  }
</script>

<div class="selector-multiple" onfocusout={alPerderFoco}>
  <button type="button" class="boton disparador" onclick={() => (abierto = !abierto)} aria-expanded={abierto}>
    {texto} <span class="flecha">{abierto ? '▲' : '▼'}</span>
  </button>
  {#if abierto}
    <div class="panel" role="group">
      <div class="acciones">
        <button type="button" class="boton enlace" onclick={elegirTodos}>Elegir todos</button>
        <button type="button" class="boton enlace" onclick={elegirNinguno}>Ninguno</button>
      </div>
      <ul>
        {#each opciones as o (o.valor)}
          <li>
            <label>
              <input type="checkbox" checked={seleccionados.includes(o.valor)} onchange={() => alternar(o.valor)} />
              {o.etiqueta}
            </label>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .selector-multiple {
    position: relative;
  }
  .disparador {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    text-align: left;
  }
  .flecha {
    color: var(--texto-suave);
    font-size: 0.8rem;
  }
  .panel {
    position: absolute;
    z-index: 10;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--fondo);
    border: 1px solid var(--borde);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    max-height: 60vh;
    overflow-y: auto;
  }
  .acciones {
    display: flex;
    gap: 12px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--borde);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 4px 0;
  }
  li label {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    padding: 0 12px;
    cursor: pointer;
  }
  li label:hover {
    background: var(--borde);
  }
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    flex: none;
  }
</style>
