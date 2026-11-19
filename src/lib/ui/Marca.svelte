<script lang="ts">
  /** Franja de marca, siempre visible: nombre del espacio a la izquierda, sello UBA + FFyL a la derecha. */

  type Tema = 'sistema' | 'claro' | 'oscuro'

  const ETIQUETA: Record<Tema, string> = { sistema: 'Automático', claro: 'Claro', oscuro: 'Oscuro' }
  const ICONO: Record<Tema, string> = { sistema: '🌓', claro: '☀️', oscuro: '🌙' }
  const SIGUIENTE: Record<Tema, Tema> = { sistema: 'claro', claro: 'oscuro', oscuro: 'sistema' }

  function leerTema(): Tema {
    const guardado = localStorage.getItem('ffyl-tema')
    return guardado === 'claro' || guardado === 'oscuro' ? guardado : 'sistema'
  }

  let tema = $state<Tema>(leerTema())

  function aplicar(t: Tema) {
    if (t === 'sistema') {
      localStorage.removeItem('ffyl-tema')
      document.documentElement.removeAttribute('data-tema')
    } else {
      localStorage.setItem('ffyl-tema', t)
      document.documentElement.setAttribute('data-tema', t)
    }
  }

  function alternarTema() {
    tema = SIGUIENTE[tema]
    aplicar(tema)
  }
</script>

<header class="marca">
  <span class="nombre">Entrenador de ajedrez <span class="suave">· Ajedrez FFyL</span></span>
  <div class="derecha">
    <button
      type="button"
      class="tema"
      onclick={alternarTema}
      title={`Tema: ${ETIQUETA[tema]} (tocar para cambiar)`}
      aria-label={`Tema: ${ETIQUETA[tema]}. Tocar para cambiar.`}
    >
      <span class="tema-icono" aria-hidden="true">{ICONO[tema]}</span>
      <span class="tema-etiqueta">{ETIQUETA[tema]}</span>
    </button>
    <a
      class="facultad"
      href="https://filo.uba.ar"
      target="_blank"
      rel="noopener"
      title="Facultad de Filosofía y Letras — UBA"
    >
      <span class="sello">
        <img src="/marca/sello-uba.png" alt="Universidad de Buenos Aires" />
      </span>
      <span class="sigla">FFyL</span>
    </a>
  </div>
</header>

<style>
  .marca {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 16px;
    padding-top: calc(10px + env(safe-area-inset-top));
    border-bottom: 1px solid var(--borde);
    background: var(--superficie);
  }

  .nombre {
    font-family: 'Bitter', Georgia, serif;
    font-weight: 600;
    font-size: 1rem;
    color: var(--texto);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .suave {
    font-weight: 500;
    color: var(--texto-suave);
  }

  .derecha {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .tema {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: 1px solid var(--borde);
    border-radius: 999px;
    padding: 5px 10px;
    color: var(--texto-suave);
    font-size: 0.78rem;
    line-height: 1;
  }

  .tema:hover {
    border-color: var(--acento);
    color: var(--acento);
  }

  .tema-icono {
    font-size: 0.95rem;
  }

  .facultad {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--texto-suave);
    flex-shrink: 0;
  }

  .sello {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: #f4efe4; /* crema fija: el sello es tinta marino, necesita fondo claro en los dos temas */
    flex-shrink: 0;
  }

  .facultad img {
    height: 26px;
    width: auto;
  }

  .sigla {
    font-family: 'Bitter', Georgia, serif;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--texto);
  }

  @media (max-width: 480px) {
    .suave {
      display: none;
    }

    .tema-etiqueta {
      display: none;
    }

    .tema {
      padding: 6px 8px;
    }
  }
</style>
