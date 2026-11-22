import { mount } from 'svelte'
import '@fontsource/bitter/latin-400.css'
import '@fontsource/bitter/latin-500.css'
import '@fontsource/bitter/latin-600.css'
import '@fontsource/bitter/latin-700.css'
import '@fontsource/archivo/latin-400.css'
import '@fontsource/archivo/latin-500.css'
import '@fontsource/archivo/latin-600.css'
import '@fontsource/archivo/latin-700.css'
import './app.css'
import App from './App.svelte'

// Respaldo en Drive oculto por defecto: `?drive=1` lo habilita en este navegador y `?drive=0` lo borra.
// Se limpia el parámetro de la barra para que no quede ni al instalar la app.
try {
  const url = new URL(location.href)
  const drive = url.searchParams.get('drive')
  if (drive === '1') localStorage.setItem('ffyl-drive', '1')
  else if (drive === '0') localStorage.removeItem('ffyl-drive')
  if (drive !== null) {
    url.searchParams.delete('drive')
    history.replaceState(null, '', url.pathname + url.search + url.hash)
  }
} catch {
  // sin almacenamiento disponible: Drive queda oculto
}

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
