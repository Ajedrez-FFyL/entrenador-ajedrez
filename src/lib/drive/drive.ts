import { guardarAjuste, leerAjuste } from '../datos/db.ts'
import { crearRespaldo, importarRespaldo, type ResumenImportacion } from '../datos/respaldo.ts'

/**
 * Client ID de OAuth de Google Cloud Console (tipo "Aplicación web"). Lo completa Mati una vez
 * creado (ver docs/contexto/drive-sync.md). Sin esto, la sincronización queda desactivada.
 */
export const CLIENT_ID = ''

const SCOPE = 'https://www.googleapis.com/auth/drive.appdata'
const NOMBRE_ARCHIVO = 'respaldo.json'

let gisCargado: Promise<void> | undefined
let tokenClient: google.accounts.oauth2.TokenClient | undefined
let tokenActual: { accessToken: string; expira: number } | undefined

function cargarGis(): Promise<void> {
  if (gisCargado) return gisCargado
  gisCargado = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://accounts.google.com/gsi/client'
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('No se pudo cargar Google Identity Services (¿sin conexión?).'))
    document.head.appendChild(s)
  })
  return gisCargado
}

export const leerCuentaDrive = () => leerAjuste<string>('drive:cuenta', '')

/** Pide permiso con un popup de Google. Hace falta la primera vez (o si el permiso se revocó). */
export async function conectarDrive(): Promise<string> {
  if (!CLIENT_ID) throw new Error('La sincronización con Drive todavía no está configurada en esta versión de la app.')
  await cargarGis()
  return new Promise((resolve, reject) => {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPE,
      callback: async (resp) => {
        if (resp.error) {
          reject(new Error('No se otorgó el permiso.'))
          return
        }
        tokenActual = { accessToken: resp.access_token, expira: Date.now() + (resp.expires_in - 60) * 1000 }
        const cuenta = await obtenerCuenta(resp.access_token)
        await guardarAjuste('drive:cuenta', cuenta)
        resolve(cuenta)
      },
      error_callback: () => reject(new Error('No se pudo conectar con Google Drive.')),
    })
    tokenClient.requestAccessToken({ prompt: tokenActual ? '' : 'consent' })
  })
}

export async function desconectarDrive(): Promise<void> {
  if (tokenActual) google.accounts.oauth2.revoke(tokenActual.accessToken, () => undefined)
  tokenActual = undefined
  await guardarAjuste('drive:cuenta', '')
}

async function obtenerCuenta(accessToken: string): Promise<string> {
  const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: `Bearer ${accessToken}` } })
  if (!r.ok) return ''
  const datos = (await r.json()) as { email?: string }
  return datos.email ?? ''
}

/**
 * Consigue un access token válido. Si ya hay uno conectado pero sin interacción reciente,
 * intenta renovarlo en silencio (sin popup); si el navegador lo bloquea, pide interacción explícita.
 */
async function token(interactivo: boolean): Promise<string> {
  if (tokenActual && tokenActual.expira > Date.now()) return tokenActual.accessToken
  if (!CLIENT_ID) throw new Error('La sincronización con Drive todavía no está configurada en esta versión de la app.')
  const cuenta = await leerCuentaDrive()
  if (!cuenta) throw new Error('Drive no está conectado.')
  await cargarGis()
  return new Promise((resolve, reject) => {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPE,
      callback: (resp) => {
        if (resp.error) {
          reject(new Error('Hace falta reconectar Drive desde Ajustes.'))
          return
        }
        tokenActual = { accessToken: resp.access_token, expira: Date.now() + (resp.expires_in - 60) * 1000 }
        resolve(resp.access_token)
      },
      error_callback: () => reject(new Error('Hace falta reconectar Drive desde Ajustes.')),
    })
    tokenClient.requestAccessToken({ prompt: interactivo ? 'consent' : '' })
  })
}

async function buscarArchivo(accessToken: string): Promise<string | undefined> {
  const r = await fetch(
    `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name='${NOMBRE_ARCHIVO}'&fields=files(id)`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  )
  if (!r.ok) throw new Error(`Drive respondió ${r.status}.`)
  const datos = (await r.json()) as { files: { id: string }[] }
  return datos.files[0]?.id
}

async function descargarArchivo(accessToken: string, id: string): Promise<string> {
  const r = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!r.ok) throw new Error(`Drive respondió ${r.status}.`)
  return r.text()
}

async function subirArchivo(accessToken: string, id: string | undefined, texto: string): Promise<void> {
  const metadatos = id ? {} : { name: NOMBRE_ARCHIVO, parents: ['appDataFolder'] }
  const limite = 'entrenador_ajedrez_limite'
  const cuerpo =
    `--${limite}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadatos)}\r\n` +
    `--${limite}\r\nContent-Type: application/json\r\n\r\n${texto}\r\n--${limite}--`
  const url = id
    ? `https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=multipart`
    : 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'
  const r = await fetch(url, {
    method: id ? 'PATCH' : 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': `multipart/related; boundary=${limite}` },
    body: cuerpo,
  })
  if (!r.ok) throw new Error(`No se pudo subir el respaldo a Drive (${r.status}).`)
}

/**
 * Baja el respaldo de Drive (si hay), lo fusiona con lo local (sin pisar progreso más nuevo),
 * y sube la versión combinada. Pensado para correr al abrir la app y desde un botón manual.
 */
export async function sincronizarDrive(interactivo = false): Promise<ResumenImportacion | undefined> {
  const accessToken = await token(interactivo)
  const id = await buscarArchivo(accessToken)
  let resumen: ResumenImportacion | undefined
  if (id) {
    const texto = await descargarArchivo(accessToken, id)
    resumen = await importarRespaldo(texto)
  }
  const respaldo = await crearRespaldo()
  await subirArchivo(accessToken, id, JSON.stringify(respaldo))
  await guardarAjuste('drive:ultimaSincro', Date.now())
  return resumen
}

export const leerUltimaSincroDrive = () => leerAjuste<number | undefined>('drive:ultimaSincro', undefined)
