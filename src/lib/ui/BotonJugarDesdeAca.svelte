<script lang="ts">
  import { jugarDesdeAca } from '../jugarDesdeAca.ts'

  interface Props {
    fen: string
  }
  let { fen }: Props = $props()
</script>

<button class="boton" onclick={() => jugarDesdeAca(fen)} title="Abre esta posición en la pantalla de juego para jugarla contra Stockfish">Jugar desde acá</button>
