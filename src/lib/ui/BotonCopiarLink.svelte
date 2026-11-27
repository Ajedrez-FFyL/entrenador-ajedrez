<script lang="ts">
  import { urlCompleta } from '../enlaces.ts'
  import { avisar } from './avisos.svelte.ts'

  /** Hash del destino (`#/finales/tema/…`); se copia con el sitio y la carpeta actuales. */
  let { hash, texto = 'Copiar link' }: { hash: string; texto?: string } = $props()

  async function copiar() {
    const url = urlCompleta(hash)
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // Sin permiso de portapapeles (p. ej. página sin HTTPS): copia con un campo temporal.
      const campo = document.createElement('textarea')
      campo.value = url
      campo.style.position = 'fixed'
      campo.style.opacity = '0'
      document.body.appendChild(campo)
      campo.select()
      const ok = document.execCommand('copy')
      campo.remove()
      if (!ok) {
        avisar(`No se pudo copiar. El link es: ${url}`, 8000)
        return
      }
    }
    avisar('Link copiado')
  }
</script>

<button class="boton enlace" onclick={copiar} title="Copia el link directo a esta pantalla">{texto}</button>
