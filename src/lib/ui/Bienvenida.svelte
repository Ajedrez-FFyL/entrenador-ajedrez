<script lang="ts">
  import { guardarAjuste, leerPreferencias } from '../datos/db.ts'
  import type { IdSeccion } from '../secciones.ts'

  interface Props {
    /** Avisa que terminó (o se saltó); `destino` es la pestaña elegida en el paso 3, si se llegó a elegir. */
    alTerminar: (destino?: IdSeccion) => void
  }
  let { alTerminar }: Props = $props()

  interface OpcionNivel {
    etiqueta: string
    rango: { min: number; max: number }
  }
  const NIVELES: OpcionNivel[] = [
    { etiqueta: 'Menos de 1200', rango: { min: 600, max: 1200 } },
    { etiqueta: '1200 a 1600', rango: { min: 1200, max: 1600 } },
    { etiqueta: '1600 a 2000', rango: { min: 1600, max: 2000 } },
    { etiqueta: 'Más de 2000', rango: { min: 2000, max: 2400 } },
  ]

  const DESTINOS: { valor: IdSeccion; etiqueta: string }[] = [
    { valor: 'aperturas', etiqueta: 'Aperturas' },
    { valor: 'tactica', etiqueta: 'Táctica' },
    { valor: 'finales', etiqueta: 'Finales' },
    { valor: 'partidas', etiqueta: 'Mis partidas' },
  ]

  let paso = $state<1 | 2 | 3>(1)
  let lichess = $state('')
  let chesscom = $state('')
  let nivel = $state<OpcionNivel>()
  let destino = $state<IdSeccion>()

  async function marcarVista() {
    await guardarAjuste('bienvenidaVista', true)
  }

  async function pasoUsuarios() {
    if (lichess.trim() || chesscom.trim()) {
      await guardarAjuste('usuarios', { lichess: lichess.trim() || undefined, chesscom: chesscom.trim() || undefined })
    }
    paso = 2
  }

  async function pasoNivel() {
    if (nivel) {
      const preferencias = await leerPreferencias()
      await guardarAjuste('preferencias', { ...preferencias, rangoTactica: { min: nivel.rango.min, max: nivel.rango.max } })
    }
    paso = 3
  }

  async function terminar() {
    await marcarVista()
    alTerminar(destino)
  }

  async function saltearTodo() {
    await marcarVista()
    alTerminar()
  }
</script>

<div class="fondo" role="presentation"></div>
<div class="panel tarjeta" role="dialog" aria-label="Bienvenida">
  <div class="cabecera">
    <h2>¡Bienvenido/a!</h2>
    <button class="boton enlace" onclick={saltearTodo}>Saltear todo</button>
  </div>

  {#if paso === 1}
    <p class="suave">Paso 1 de 3 · Si jugás en Lichess o Chess.com, importamos tus partidas para detectar tus errores típicos. Lo podés cargar después en Ajustes si ahora no lo tenés a mano.</p>
    <label>
      Usuario de Lichess
      <input type="text" bind:value={lichess} autocomplete="off" autocapitalize="off" spellcheck="false" />
    </label>
    <label>
      Usuario de Chess.com
      <input type="text" bind:value={chesscom} autocomplete="off" autocapitalize="off" spellcheck="false" />
    </label>
    <div class="fila">
      <button class="boton" onclick={() => (paso = 2)}>Saltear</button>
      <button class="boton principal" onclick={pasoUsuarios}>Siguiente</button>
    </div>
  {:else if paso === 2}
    <p class="suave">Paso 2 de 3 · ¿Cuál es tu nivel aproximado? Lo usamos para elegir ejercicios de táctica de un nivel parecido al tuyo (lo podés cambiar después).</p>
    <div class="opciones">
      {#each NIVELES as n (n.etiqueta)}
        <label class="opcion"><input type="radio" name="nivel" checked={nivel === n} onchange={() => (nivel = n)} /> {n.etiqueta}</label>
      {/each}
    </div>
    <div class="fila">
      <button class="boton" onclick={() => (paso = 1)}>Atrás</button>
      <button class="boton principal" onclick={pasoNivel}>Siguiente</button>
    </div>
  {:else}
    <p class="suave">Paso 3 de 3 · ¿Qué querés entrenar primero?</p>
    <div class="opciones">
      {#each DESTINOS as d (d.valor)}
        <label class="opcion"><input type="radio" name="destino" checked={destino === d.valor} onchange={() => (destino = d.valor)} /> {d.etiqueta}</label>
      {/each}
    </div>
    <div class="fila">
      <button class="boton" onclick={() => (paso = 2)}>Atrás</button>
      <button class="boton principal" onclick={terminar}>Empezar</button>
    </div>
  {/if}
</div>

<style>
  .fondo {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 70;
  }

  .panel {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 71;
    width: min(440px, calc(100vw - 32px));
    max-height: calc(100dvh - 64px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .cabecera {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .cabecera h2 {
    margin: 0;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.9rem;
  }

  .opciones {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .opcion {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .fila {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
</style>
