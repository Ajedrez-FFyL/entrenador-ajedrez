<script lang="ts">
  /** Franja de marca, siempre visible: nombre del espacio a la izquierda, sello UBA + FFyL a la derecha. */
</script>

<header class="marca">
  <span class="nombre">Entrenador de ajedrez <span class="suave">· Ajedrez FFyL</span></span>
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
    font-family: 'Fraunces', Georgia, serif;
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
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--texto);
  }

  @media (max-width: 480px) {
    .suave {
      display: none;
    }
  }
</style>
