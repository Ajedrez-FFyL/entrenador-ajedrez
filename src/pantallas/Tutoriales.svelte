<script lang="ts">
  import { driveHabilitado } from '../lib/drive/drive.ts'
  import { tomarAyudaPendiente } from '../lib/ayuda.ts'
  let abierto = $state<string>()
  const toggle = (id: string) => (abierto = abierto === id ? undefined : id)

  // "¿Cómo funciona?" en Ajustes: llega acá pidiendo abrir un desplegable puntual.
  let abrirDatos = $state(false)
  let abrirArchivo = $state(false)
  let abrirDrive = $state(false)
  let abrirOpiniones = $state(false)

  $effect(() => {
    const tema = tomarAyudaPendiente()
    let id: string | undefined
    if (tema === 'respaldo-archivo') {
      abrirDatos = true
      abrirArchivo = true
      id = 'ayuda-datos'
    } else if (tema === 'respaldo-drive') {
      abrirDatos = true
      abrirDrive = true
      id = 'ayuda-datos'
    } else if (tema === 'opiniones') {
      abrirOpiniones = true
      id = 'ayuda-opiniones'
    }
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
</script>

<h1>Ayuda</h1>
<p class="suave">Qué hace cada pestaña y un glosario de los términos que usa la app.</p>

<section class="tarjeta">
  <h2>Pestañas</h2>

  <div class="item">
    <h3>Partidas</h3>
    <p class="suave">
      Importá tus partidas de Lichess o Chess.com (poniendo tu usuario en Ajustes) o subí un archivo PGN. La app las analiza con
      Stockfish en el teléfono o la compu, detecta tus errores y arma estadísticas (por apertura, color, fase de la partida y
      reloj). Todo lo que subís ahí queda guardado solo en tu dispositivo: nadie más del equipo lo ve.
    </p>
  </div>

  <div class="item">
    <h3>Aperturas</h3>
    <p class="suave">
      <b>Explorador</b>: mirá cualquier apertura con cualquier color, con las jugadas que juegan los maestros (no lo que juega un
      1800) y lo que recomienda el motor. <b>Mi repertorio</b>: guardá las líneas que elegís jugar. <b>Práctica</b>: estudiá tu
      repertorio por niveles, con repaso espaciado (así no se te olvida con el tiempo) y explicaciones de "por qué sí" y "por qué
      no" para cada jugada. Para sumar una apertura (<b>Agregar apertura</b>) vas bajando por un árbol, un nivel por vez: 1.e4 ›
      1…c5 Siciliana › Najdorf. Arriba tenés las migas de pan y «← Atrás», y el buscador (por nombre, en castellano o en inglés,
      o por jugadas como «Ab5» o «Bb5») te muestra todo en una lista con su ruta. Al terminar una línea en una lección, la
      posición queda quieta: podés recorrerla con las flechas, prender Stockfish, jugar desde ahí o tocar «Seguir». Si preferís
      que pase sola a la siguiente, activalo en Ajustes («Pasar solo a la siguiente línea»).
    </p>
  </div>

  <div class="item">
    <h3>Táctica</h3>
    <p class="suave">
      Ejercicios armados a partir de tus propios errores en partidas reales, más táctica general (ejercicios de la base abierta de Lichess, licencia CC0) y problemas de libros de ajedrez
      (estos dos últimos son los mismos para todo el equipo). Repaso espaciado también acá. El tema (y, en problemas de
      libros, el libro) se elige con una lista de casillas: podés marcar varios a la vez. Una jugada que no es la mejor
      no termina el ejercicio: podés ver por qué no sirve, pedir una pista o intentar de nuevo; recién contás como
      fallado si pedís la solución. Debajo del tablero queda una fila de cuadraditos con el resultado de cada ejercicio
      de la sesión (verde: bien a la primera; amarillo: con error o pista; rojo: solución vista); tocar uno lo vuelve a
      mostrar sin que cuente de nuevo para el repaso. En Progreso, la sección «Historial» lista todos los intentos (con
      filtro por fecha y resultado) y un botón para reintentar los fallados. Un final en el que te equivocaste en una
      partida real aparece acá en «Mis errores» y también en Finales → «De mis partidas»: es el mismo error, visto
      desde dos lugares.
    </p>
  </div>

  <div class="item">
    <h3>Finales</h3>
    <p class="suave">
      <b>Temario</b>: finales clásicos que hay que saber, verificados con tablebases. <b>De mis partidas</b>: finales
      que aparecieron en tus propias partidas (exclusivo tuyo; el mismo error aparece también en Táctica → Mis
      errores). Para armar y jugar cualquier posición propia, usá la pestaña Editor.
    </p>
  </div>

  <div class="item">
    <h3>Editor</h3>
    <p class="suave">
      Armá cualquier posición a mano (paleta de piezas, FEN editable, pegar un PGN) y después analizala con Stockfish,
      jugala contra la computadora o llevala a Lichess para armar un estudio. "Desde una imagen": abre lichess.org/editor
      en otra pestaña (tiene reconocimiento de diagramas por foto) para después pegar el FEN acá. Los botones "Jugar
      desde acá" de cualquier otra pantalla abren esta pestaña con esa posición y el juego ya listo para empezar.
    </p>
  </div>

  <div class="item">
    <h3>Progreso</h3>
    <p class="suave">
      Un resumen de cuánto dominás cada tema y apertura, y qué te toca repasar hoy según el repaso espaciado. Sin rachas ni
      puntajes: la idea es que te sirva para ver qué falta, no para competir.
    </p>
  </div>

  <div class="item">
    <h3>Biblioteca</h3>
    <p class="suave">
      Una ficha por cada libro de la biblioteca (qué cubre, nivel, dificultad, idioma y qué hay de él en la app), con búsqueda
      por título o autor y filtros por tema, nivel, dificultad e idioma. Es solo de consulta: no tiene los libros.
    </p>
  </div>

  <div class="item">
    <h3>Links directos</h3>
    <p class="suave">
      Cada tema de Táctica o de Finales, curso de Aperturas y ficha de la Biblioteca se puede abrir con un link: tocá
      «Copiar link» dentro de ese tema, curso o ficha y pegalo donde quieras (por ejemplo, en el sitio de un curso).
      La lista completa está en <code>docs/links-directos.md</code> del repositorio.
    </p>
  </div>

  <div class="item">
    <h3>Ajustes</h3>
    <p class="suave">Tu usuario de Lichess/Chess.com, preferencias del motor y exportar/importar tu respaldo.</p>
  </div>
</section>

<section class="tarjeta">
  <h2>Glosario</h2>
  <dl class="glosario">
    {#each [
      ['Repaso espaciado (FSRS)', 'Sistema que decide cuándo te vuelve a tocar cada ejercicio: lo que fallás vuelve pronto, lo que sabés bien se espacia cada vez más en el tiempo.'],
      ['Por qué sí / por qué no', 'Explicación de por qué una jugada es buena, o de cómo te castiga el rival si jugás una mala (con la refutación del motor animada en el tablero).'],
      ['Masters', 'Base de partidas de jugadores de alto nivel (grandes maestros) de Lichess. La app la usa como referencia de "lo correcto" en vez de partidas de nivel amateur.'],
      ['Motor / Stockfish', 'El programa que analiza posiciones y dice cuál es la mejor jugada y qué tan buena o mala es cada una.'],
      ['Nivel (en aperturas)', 'Cuánta profundidad y cuántas variantes de una apertura ya estudiaste. Para subir de nivel hay que acertar al menos 85 % de las jugadas y no tener nada vencido en el repaso.'],
      ['Vencido', 'Un ejercicio o línea que el repaso espaciado dice que ya te toca repasar hoy.'],
      ['Tema táctico', 'El motivo por el que funciona una jugada táctica: horquilla, clavada, pieza colgada, ataque descubierto, mate, etc.'],
    ] as [t, d] (t)}
      <dt>{t}</dt>
      <dd class="suave">{d}</dd>
    {/each}
  </dl>
</section>

<section class="tarjeta">
  <h2>Preguntas frecuentes</h2>
  {#each [
    ['¿Mis partidas y mis errores los ve alguien más del equipo?', 'No. Cada uno que usa la app tiene su propia información guardada en su propio dispositivo. Nadie más la ve, ni siquiera quien administra el espacio.'],
    ['¿Qué pasa si cambio de celular o se me borra el navegador?', driveHabilitado() ? 'Hay un respaldo manual en Ajustes (exportar/importar); y si ya está activado el respaldo automático a tu Google Drive, se restaura solo.' : 'Usá el respaldo con archivo en Ajustes: «Exportar respaldo» en el dispositivo viejo, pasá el archivo, y «Importar respaldo» en el nuevo. Se combinan sin pisar lo más nuevo.'],
    ['Encontré un error o se me ocurre una mejora, ¿dónde lo digo?', 'Con el botón 💬 de Opiniones y reportes, que está siempre visible (abajo a la derecha, en cualquier pestaña).'],
  ] as [p, r] (p)}
    <button class="pregunta" onclick={() => toggle(p)} aria-expanded={abierto === p}>
      {p}
    </button>
    {#if abierto === p}
      <p class="suave respuesta">{r}</p>
    {/if}
  {/each}
</section>

<section class="tarjeta">
  <h2>Más ayuda</h2>

  <details class="desplegable" id="ayuda-datos" bind:open={abrirDatos}>
    <summary><h3>Cómo pasar mis datos a otro dispositivo</h3></summary>

    <details bind:open={abrirArchivo}>
      <summary>Con un archivo (manual)</summary>
      <ol>
        <li>En el dispositivo viejo: Ajustes → «Exportar respaldo».</li>
        <li>Pasate el archivo que se descarga al dispositivo nuevo (mail, WhatsApp, un pendrive, lo que uses).</li>
        <li>En el dispositivo nuevo: Ajustes → «Importar respaldo» y elegí ese archivo.</li>
      </ol>
      <p class="suave">Se combina con lo que ya haya en el dispositivo nuevo, sin pisar el progreso más nuevo.</p>
    </details>

    {#if driveHabilitado()}
      <details bind:open={abrirDrive}>
        <summary>Con Google Drive (automático)</summary>
        <ol>
          <li>En Ajustes → «Respaldo automático a Google Drive» → «Conectar Google Drive», e iniciá sesión.</li>
          <li>Hacé lo mismo en el otro dispositivo, con la misma cuenta de Google.</li>
          <li>Se sincroniza solo al abrir la app; «Sincronizar ahora» lo hace al toque cuando quieras.</li>
        </ol>
        <p class="suave">Se guarda en una carpeta privada de tu Drive que solo ve esta app.</p>
      </details>

      <details>
        <summary>¿Cuál me conviene?</summary>
        <p>
          Con archivo: no depende de ninguna cuenta, pero hay que acordarse de exportar e importar a mano cada vez que
          cambiás de dispositivo. Con Google Drive: una vez conectado en los dos dispositivos, se mantiene solo sin
          que hagas nada; a cambio, Google puede pedirte reconectar cada 7 días y hace falta conexión para sincronizar.
          Si usás un solo dispositivo, ninguno de los dos hace falta (aunque exportar de vez en cuando es una buena
          copia de seguridad).
        </p>
      </details>
    {/if}
  </details>

  <details class="desplegable" id="ayuda-opiniones" bind:open={abrirOpiniones}>
    <summary><h3>Cómo dejar tu opinión o reportar un problema</h3></summary>
    <p>
      El botón 💬 (abajo a la derecha, en cualquier pestaña) abre un formulario corto, con tres tipos:
    </p>
    <ul>
      <li><b>Bug</b> (palabra en inglés para "error de la app"): algo que no anda o anda mal. Ej.: "el tablero no deja mover las piezas en el celular".</li>
      <li><b>Sugerencia</b>: algo que te gustaría que la app tenga y todavía no tiene.</li>
      <li><b>Opinión</b>: qué te gusta o no te gusta, sin que sea ni un error ni un pedido puntual.</li>
    </ul>
    <p>
      Para un bug, cuanto más preciso el reporte, más fácil es arreglarlo. Ayuda contar: en qué pestaña estabas, qué
      hiciste (los pasos, en orden), qué esperabas que pasara y qué pasó en realidad, y si fue en el celular o en la
      compu. La app ya manda de forma automática la pestaña, el navegador y la versión, así que no hace falta
      repetirlos.
    </p>
    <p class="suave">
      Mandá uno apenas algo te llame la atención, aunque te parezca chico: es más fácil arreglarlo recién encontrado
      que semanas después. Lo lee Mati y no se publica en ningún lado.
    </p>
  </details>
</section>

<style>
  .item + .item {
    border-top: 1px solid var(--borde);
    padding-top: 12px;
  }

  .item h3 {
    font-size: 0.95rem;
  }

  .item p {
    margin: 4px 0 0;
  }

  .glosario {
    margin: 0;
  }

  .glosario dt {
    font-weight: 600;
    margin-top: 10px;
  }

  .glosario dd {
    margin: 2px 0 0;
  }

  .desplegable {
    margin-top: 12px;
  }

  .desplegable > summary {
    cursor: pointer;
    list-style: revert;
  }

  .desplegable > summary h3 {
    display: inline;
    margin: 0;
    font-size: 0.95rem;
  }

  .desplegable[open] > summary {
    margin-bottom: 8px;
  }

  .desplegable details {
    margin: 8px 0 8px 16px;
  }

  .desplegable details summary {
    cursor: pointer;
    font-weight: 600;
  }

  .desplegable ol,
  .desplegable ul {
    margin: 6px 0;
    padding-left: 20px;
  }

  .pregunta {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    background: none;
    color: var(--texto);
    font-weight: 600;
    padding: 8px 0;
    border-bottom: 1px solid var(--borde);
  }

  .respuesta {
    margin: 6px 0 0;
  }
</style>
