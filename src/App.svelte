<script lang="ts">
  import { SECCIONES, type IdSeccion } from './lib/secciones'
  import Marca from './lib/ui/Marca.svelte'
  import AvisoActualizacion from './lib/AvisoActualizacion.svelte'
  import Ajustes from './pantallas/Ajustes.svelte'
  import Aperturas from './pantallas/Aperturas.svelte'
  import Editor from './pantallas/Editor.svelte'
  import Finales from './pantallas/Finales.svelte'
  import Progreso from './pantallas/Progreso.svelte'
  import MisPartidas from './pantallas/MisPartidas.svelte'
  import Tactica from './pantallas/Tactica.svelte'
  import Tutoriales from './pantallas/Tutoriales.svelte'
  import Feedback from './lib/feedback/Feedback.svelte'
  import { driveHabilitado, leerCuentaDrive, sincronizarDrive } from './lib/drive/drive.ts'
  import { pedirAlmacenamientoPersistente } from './lib/datos/almacenamiento.ts'

  // Si Drive ya está conectado, sincroniza en silencio al abrir la app (sin popup; si hace falta
  // interacción, no insiste: queda para que el usuario sincronice a mano desde Ajustes).
  if (driveHabilitado()) leerCuentaDrive().then((cuenta) => {
    if (cuenta) sincronizarDrive(false).catch(() => undefined)
  })

  // Para que el navegador no borre los datos solos si el dispositivo se queda sin espacio.
  // No hace falta esperar la respuesta acá: Ajustes muestra el resultado cuando se visita.
  pedirAlmacenamientoPersistente()

  function seccionDesdeHash(): IdSeccion {
    const id = location.hash.replace('#/', '')
    return SECCIONES.some((s) => s.id === id) ? (id as IdSeccion) : 'partidas'
  }

  let actual = $state<IdSeccion>(seccionDesdeHash())
  let seccion = $derived(SECCIONES.find((s) => s.id === actual)!)
  let enLinea = $state(navigator.onLine)
</script>

<svelte:window
  onhashchange={() => (actual = seccionDesdeHash())}
  ononline={() => (enLinea = true)}
  onoffline={() => (enLinea = false)}
/>

<div class="marco">
  <nav aria-label="Secciones">
    {#each SECCIONES as s (s.id)}
      <a href={`#/${s.id}`} aria-current={s.id === actual ? 'page' : undefined}>
        {#if s.pieza}
          <span class="icono icono-pieza pieza-{s.pieza}" aria-hidden="true"></span>
        {:else}
          <span class="icono" aria-hidden="true">{s.icono}</span>
        {/if}
        <span class="rotulo">{s.titulo}</span>
      </a>
    {/each}
  </nav>

  <div class="columna">
    <Marca />
    <main>
    {#if !enLinea}
      <p class="sin-conexion">Sin conexión: todo funciona salvo importar partidas y las consultas en línea.</p>
    {/if}
    {#if actual === 'partidas'}
      <MisPartidas />
    {:else if actual === 'tactica'}
      <Tactica />
    {:else if actual === 'aperturas'}
      <Aperturas />
    {:else if actual === 'finales'}
      <Finales />
    {:else if actual === 'editor'}
      <Editor />
    {:else if actual === 'progreso'}
      <Progreso />
    {:else if actual === 'tutoriales'}
      <Tutoriales />
    {:else if actual === 'ajustes'}
      <Ajustes />
    {:else}
      <h1>{seccion.titulo}</h1>
      <p class="descripcion">{seccion.descripcion}</p>
      <p class="pendiente">En construcción</p>
    {/if}
    </main>
  </div>
</div>

<AvisoActualizacion />
<Feedback pestanaActual={actual} />

<style>
  .marco {
    display: flex;
    flex-direction: column-reverse;
    min-height: 100dvh;
  }

  nav {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: var(--superficie);
    border-top: 1px solid var(--borde);
    padding-bottom: env(safe-area-inset-bottom);
  }

  nav a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 4px;
    color: var(--texto-suave);
    text-decoration: none;
    font-size: 0.72rem;
  }

  nav a[aria-current='page'] {
    color: var(--acento);
  }

  .icono {
    font-size: 1.35rem;
    line-height: 1;
  }

  .icono-pieza {
    width: 1.1rem;
    height: 1.35rem;
    background-color: currentColor;
    mask-image: var(--svg-pieza);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask-image: var(--svg-pieza);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
  }

  .pieza-peon {
    --svg-pieza: url('/marca/piezas/peon.svg');
  }

  .pieza-caballo {
    --svg-pieza: url('/marca/piezas/caballo.svg');
  }

  .pieza-rey {
    --svg-pieza: url('/marca/piezas/rey.svg');
  }

  .columna {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  main {
    flex: 1;
    padding: 24px 16px;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
  }

  .descripcion {
    color: var(--texto-suave);
  }

  .pendiente {
    display: inline-block;
    padding: 4px 10px;
    border: 1px dashed var(--borde);
    border-radius: var(--radio);
    color: var(--texto-suave);
    font-size: 0.85rem;
  }

  .sin-conexion {
    background: var(--superficie);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
    padding: 8px 12px;
    font-size: 0.85rem;
  }

  @media (min-width: 900px) {
    .marco {
      flex-direction: row;
    }

    nav {
      position: sticky;
      top: 0;
      height: 100dvh;
      flex-direction: column;
      justify-content: flex-start;
      width: 200px;
      border-top: none;
      border-right: 1px solid var(--borde);
      padding: 16px 8px;
      overflow: hidden;
    }

    /* El riel de navegación queda con mucho espacio vacío debajo de los ítems
       (sobre todo en pantallas altas): un caballo del club, apenas visible, lo llena. */
    nav::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -30px;
      width: 230px;
      height: 260px;
      transform: translateX(-50%);
      background-color: var(--texto);
      opacity: 0.05;
      mask-image: url('/marca/piezas/caballo.svg');
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: contain;
      -webkit-mask-image: url('/marca/piezas/caballo.svg');
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      -webkit-mask-size: contain;
      pointer-events: none;
    }

    nav a {
      position: relative;
      z-index: 1;
      flex: none;
      flex-direction: row;
      gap: 10px;
      padding: 10px 12px;
      border-radius: var(--radio);
      font-size: 0.95rem;
    }

    nav a[aria-current='page'] {
      background: var(--fondo);
    }
  }
</style>
