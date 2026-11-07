<script lang="ts">
  let abierto = $state<string>()
  const toggle = (id: string) => (abierto = abierto === id ? undefined : id)
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
      no" para cada jugada.
    </p>
  </div>

  <div class="item">
    <h3>Táctica</h3>
    <p class="suave">
      Ejercicios armados a partir de tus propios errores en partidas reales, más problemas de Lichess y de libros de ajedrez
      (estos dos últimos son los mismos para todo el equipo). Repaso espaciado también acá.
    </p>
  </div>

  <div class="item">
    <h3>Finales</h3>
    <p class="suave">
      <b>Temario</b>: finales clásicos que hay que saber, verificados con tablebases. <b>Posición libre</b>: armá cualquier
      posición de final y jugala contra Stockfish. <b>De mis partidas</b>: finales que aparecieron en tus propias partidas
      (exclusivo tuyo).
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
    ['¿Qué pasa si cambio de celular o se me borra el navegador?', 'Hay un respaldo manual en Ajustes (exportar/importar); y si ya está activado el respaldo automático a tu Google Drive, se restaura solo.'],
    ['Encontré un error o se me ocurre una mejora, ¿dónde lo digo?', 'Con el botón de Feedback que está siempre visible (abajo a la derecha, en cualquier pestaña).'],
  ] as [p, r] (p)}
    <button class="pregunta" onclick={() => toggle(p)} aria-expanded={abierto === p}>
      {p}
    </button>
    {#if abierto === p}
      <p class="suave respuesta">{r}</p>
    {/if}
  {/each}
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
