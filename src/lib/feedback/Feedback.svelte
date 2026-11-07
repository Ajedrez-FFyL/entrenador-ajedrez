<script lang="ts">
  import { enviarFeedback, leerNombreFeedback, guardarNombreFeedback, URL_FEEDBACK, type TipoFeedback } from './feedback.ts'
  import type { IdSeccion } from '../secciones.ts'

  let { pestanaActual }: { pestanaActual: IdSeccion } = $props()

  let abierto = $state(false)
  let tipo = $state<TipoFeedback>('bug')
  let texto = $state('')
  let nombre = $state('')
  let estado = $state<'listo' | 'enviando' | 'enviado' | 'error'>('listo')

  leerNombreFeedback().then((n) => (nombre = n))

  function abrir() {
    estado = 'listo'
    abierto = true
  }

  async function enviar() {
    if (!texto.trim() || !nombre.trim()) return
    estado = 'enviando'
    await guardarNombreFeedback(nombre.trim())
    try {
      await enviarFeedback({
        tipo,
        texto: texto.trim(),
        nombre: nombre.trim(),
        pestana: pestanaActual,
        fecha: new Date().toISOString(),
      })
      estado = 'enviado'
      texto = ''
    } catch {
      estado = 'error'
    }
  }
</script>

<button class="flotante" onclick={abrir} aria-label="Dejar feedback">💬</button>

{#if abierto}
  <div class="fondo" onclick={() => (abierto = false)} role="presentation"></div>
  <div class="panel tarjeta" role="dialog" aria-label="Feedback">
    <h2>Feedback</h2>
    {#if estado === 'enviado'}
      <p class="suave">¡Gracias! Lo anotamos.</p>
      <button class="boton" onclick={() => (abierto = false)}>Cerrar</button>
    {:else}
      <div class="pestanas" role="tablist">
        <button role="tab" aria-selected={tipo === 'bug'} onclick={() => (tipo = 'bug')}>Bug</button>
        <button role="tab" aria-selected={tipo === 'opinion'} onclick={() => (tipo = 'opinion')}>Opinión</button>
        <button role="tab" aria-selected={tipo === 'sugerencia'} onclick={() => (tipo = 'sugerencia')}>Sugerencia</button>
      </div>

      <label>
        Tu nombre
        <input type="text" bind:value={nombre} placeholder="Para saber quién lo mandó" />
      </label>

      <label>
        Contanos
        <textarea bind:value={texto} rows="4" placeholder="Qué viste, qué esperabas, o qué se te ocurre mejorar…"></textarea>
      </label>

      {#if !URL_FEEDBACK}
        <p class="suave">El feedback todavía no está activado en esta versión de la app.</p>
      {:else if estado === 'error'}
        <p class="suave">No se pudo enviar (revisá tu conexión). Probá de nuevo.</p>
      {/if}

      <div class="fila">
        <button class="boton" onclick={() => (abierto = false)}>Cancelar</button>
        <button class="boton principal" disabled={!texto.trim() || !nombre.trim() || estado === 'enviando' || !URL_FEEDBACK} onclick={enviar}>
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
</style>
