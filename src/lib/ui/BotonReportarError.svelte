<script lang="ts">
  import { pedirFeedback } from '../feedback/solicitud.svelte.ts'

  interface Props {
    curso: string
    campo: string
    texto: string
    fen: string
  }
  let { curso, campo, texto, fen }: Props = $props()

  function reportar() {
    pedirFeedback({ tipo: 'bug', texto, curso, campo, fen })
  }
</script>

<button type="button" class="boton enlace reportar" onclick={reportar}>Reportar un error en este texto</button>

<style>
  .reportar {
    font-size: 0.78rem;
  }
</style>
