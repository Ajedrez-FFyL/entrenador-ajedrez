import { leerAjuste, guardarAjuste } from '../datos/db.ts'
import type { IdSeccion } from '../secciones.ts'

/**
 * URL del Google Apps Script Web App desplegado por Mati (ver docs/contexto/feedback.md).
 * Si está vacía, el botón de feedback avisa que todavía no está configurado.
 */
export const URL_FEEDBACK = ''

export type TipoFeedback = 'bug' | 'opinion' | 'sugerencia'

export interface EnvioFeedback {
  tipo: TipoFeedback
  texto: string
  nombre: string
  pestana: IdSeccion
  fecha: string // ISO
  appVersion?: string
}

export const leerNombreFeedback = () => leerAjuste<string>('feedback:nombre', '')
export const guardarNombreFeedback = (nombre: string) => guardarAjuste('feedback:nombre', nombre)

export async function enviarFeedback(envio: EnvioFeedback): Promise<void> {
  if (!URL_FEEDBACK) throw new Error('El feedback todavía no está configurado (falta la URL del Apps Script).')
  // no-cors: Apps Script Web Apps no devuelven headers CORS legibles; no podemos leer la respuesta,
  // así que asumimos éxito si el fetch no tira una excepción de red.
  await fetch(URL_FEEDBACK, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(envio),
  })
}
