<script lang="ts">
  import {
    enviarFeedback,
    enviosEnLaUltimaHora,
    leerNombreFeedback,
    guardarNombreFeedback,
    MAXIMO_CARACTERES,
    MAXIMO_POR_HORA,
    URL_FEEDBACK,
    type TipoFeedback,
  } from './feedback.ts'
  import { limpiarSolicitud, solicitudActual } from './solicitud.svelte.ts'
  import type { IdSeccion } from '../secciones.ts'

  let { pestanaActual }: { pestanaActual: IdSeccion } = $props()

  let abierto = $state(false)
  let tipo = $state<TipoFeedback>('bug')
  let texto = $state('')
  let nombre = $state('')
  let estado = $state<'listo' | 'enviando' | 'enviado' | 'error'>('listo')
  let mensajeError = $state('')
  let trampa = $state('') // campo invisible: si un bot lo completa, no se manda
  let contexto = $state<{ curso?: string; campo?: string; fen?: string }>()

  leerNombreFeedback().then((n) => (nombre = n))

  // "Reportar un error en este texto" (aperturas) pide abrir el formulario ya completado.
  $effect(() => {
    const s = solicitudActual()
    if (!s) return
    tipo = s.tipo
    texto = s.texto
    contexto = { curso: s.curso, campo: s.campo, fen: s.fen }
    abierto = true
    estado = 'listo'
    limpiarSolicitud()
  })

  function abrir() {
    estado = 'listo'
    contexto = undefined
    abierto = true
  }

  async function enviar() {
    if (!texto.trim() || !nombre.trim()) return
    estado = 'enviando'
    mensajeError = ''
    await guardarNombreFeedback(nombre.trim())
    try {
      await enviarFeedback({
        tipo,
        texto: texto.trim(),
        nombre: nombre.trim(),
        pestana: pestanaActual,
        fecha: new Date().toISOString(),
        appVersion: __APP_VERSION__,
        navegador: navigator.userAgent,
        curso: contexto?.curso,
        campo: contexto?.campo,
        fen: contexto?.fen,
        trampa: trampa || undefined,
      })
      estado = 'enviado'
      texto = ''
      contexto = undefined
    } catch (err) {
      mensajeError = err instanceof Error ? err.message : 'No se pudo enviar.'
      estado = 'error'
    }
  }

  let restantes = $derived(MAXIMO_CARACTERES - texto.length)
  let puedeEnviar = $derived(!!texto.trim() && !!nombre.trim() && estado !== 'enviando' && !!URL_FEEDBACK && enviosEnLaUltimaHora() < MAXIMO_POR_HORA)
</script>

<button class="flotante" onclick={abrir} aria-label="Dejar tu opinión o reportar un problema">💬</button>

{#if abierto}
  <div class="fondo" onclick={() => (abierto = false)} role="presentation"></div>
  <div class="panel tarjeta" role="dialog" aria-label="Opiniones y reportes">
    <h2>Opiniones y reportes</h2>
    {#if estado === 'enviado'}
      <p class="suave">¡Gracias! Lo anotamos.</p>
      <button class="boton" onclick={() => (abierto = false)}>Cerrar</button>
    {:else}
      <div class="pestanas" role="tablist">
        <button role="tab" aria-selected={tipo === 'bug'} onclick={() => (tipo = 'bug')}>Bug</button>
        <button role="tab" aria-selected={tipo === 'opinion'} onclick={() => (tipo = 'opinion')}>Opinión</button>
        <button role="tab" aria-selected={tipo === 'sugerencia'} onclick={() => (tipo = 'sugerencia')}>Sugerencia</button>
      </div>

      {#if contexto?.curso}
        <p class="suave contexto">Sobre la explicación de <b>{contexto.curso}</b>{contexto.campo ? ` (${contexto.campo})` : ''}.</p>
      {/if}

      <label>
        Tu nombre
        <input type="text" bind:value={nombre} placeholder="Para saber quién lo mandó" />
      </label>

      <label>
        Contanos
        <textarea bind:value={texto} rows="4" maxlength={MAXIMO_CARACTERES} placeholder="Qué viste, qué esperabas, o qué se te ocurre mejorar…"></textarea>
      </label>
      <p class="suave contador">{restantes} caracteres disponibles</p>

      <!-- Campo trampa contra bots: invisible para una persona, oculto del lector de pantalla. -->
      <input
        type="text"
        name="sitio"
        bind:value={trampa}
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        class="trampa"
      />

      <p class="suave aviso">Se manda también, para ayudarnos a diagnosticar: la pestaña donde estabas, tu navegador y la versión de la app.</p>

      {#if !URL_FEEDBACK}
        <p class="suave">Opiniones y reportes todavía no está activado en esta versión de la app.</p>
      {:else if estado === 'error'}
        <p class="suave">{mensajeError || 'No se pudo enviar (revisá tu conexión).'} Probá de nuevo.</p>
      {/if}

      <div class="fila">
        <button class="boton" onclick={() => (abierto = false)}>Cancelar</button>
        <button class="boton principal" disabled={!puedeEnviar} onclick={enviar}>
          {estado === 'enviando' ? 'Enviando…' : 'Enviar'}
        </button>
      </div>
    {/if}
  </div>
{/if}

<style>
  .flotante {
    position: fixed;
    right: 16px;
    bottom: 76px;
    z-index: 40;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    border: none;
    background: var(--acento);
    color: var(--acento-texto);
    font-size: 1.3rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 900px) {
    .flotante {
      bottom: 16px;
    }
  }

  .fondo {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 50;
  }

  .panel {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 51;
    width: min(420px, calc(100vw - 32px));
    max-height: calc(100dvh - 64px);
    overflow-y: auto;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.85rem;
    color: var(--texto-suave);
  }

  textarea {
    font: inherit;
    color: var(--texto);
    background: var(--fondo);
    border: 1px solid var(--borde);
    border-radius: 8px;
    padding: 8px;
    resize: vertical;
  }

  .contador {
    margin: -6px 0 0;
    text-align: right;
    font-size: 0.75rem;
  }

  .contexto {
    margin: 0;
  }

  .aviso {
    font-size: 0.75rem;
    margin: 0;
  }

  .trampa {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
</style>
