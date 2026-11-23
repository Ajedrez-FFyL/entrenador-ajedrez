import { leerAjuste, guardarAjuste } from '../datos/db.ts'
import type { IdSeccion } from '../secciones.ts'

/**
 * URL del Google Apps Script Web App desplegado por Mati (ver docs/contexto/feedback.md).
 * Si está vacía, el botón de feedback avisa que todavía no está configurado.
 */
export const URL_FEEDBACK = 'https://script.google.com/macros/s/AKfycbzzxC6_8qRbbVAGHlB7L-bmNDoVIgV1UEoXoTtBbdd0KbXk57BHJhZtOvcovqNpJqAGJA/exec'

export type TipoFeedback = 'bug' | 'opinion' | 'sugerencia'

export const MAXIMO_CARACTERES = 2000
export const MAXIMO_POR_HORA = 5

export interface EnvioFeedback {
  tipo: TipoFeedback
  texto: string
  nombre: string
  pestana: IdSeccion
  fecha: string // ISO
  appVersion?: string
  /** User-Agent del navegador, para diagnóstico (ver docs/contexto/feedback.md: campo nuevo, falta en la planilla). */
  navegador?: string
  /** Contexto de "Reportar un error en este texto" (aperturas): curso y campo de la explicación. */
  curso?: string
  campo?: string
  fen?: string
  /** Campo trampa: invisible para una persona, un bot que completa todos los campos lo llena. Si llega con algo, no se manda. */
  trampa?: string
}

export const leerNombreFeedback = () => leerAjuste<string>('feedback:nombre', '')
export const guardarNombreFeedback = (nombre: string) => guardarAjuste('feedback:nombre', nombre)

const CLAVE_ENVIOS = 'ffyl-feedback-envios'

/** Cuántos envíos lleva este dispositivo en la última hora (límite contra un uso accidental en bucle, no contra abuso real). */
export function enviosEnLaUltimaHora(): number {
  try {
    const marcas: number[] = JSON.parse(localStorage.getItem(CLAVE_ENVIOS) ?? '[]')
    const haceUnaHora = Date.now() - 60 * 60 * 1000
    return marcas.filter((t) => t > haceUnaHora).length
  } catch {
    return 0
  }
}

function registrarEnvio() {
  try {
    const haceUnaHora = Date.now() - 60 * 60 * 1000
    const marcas: number[] = JSON.parse(localStorage.getItem(CLAVE_ENVIOS) ?? '[]')
    const vigentes = marcas.filter((t) => t > haceUnaHora)
    vigentes.push(Date.now())
    localStorage.setItem(CLAVE_ENVIOS, JSON.stringify(vigentes))
  } catch {
    /* sin almacenamiento: no se puede limitar, pero tampoco bloquear */
  }
}

export async function enviarFeedback(envio: EnvioFeedback): Promise<void> {
  if (!URL_FEEDBACK) throw new Error('Opiniones y reportes todavía no está activado en esta versión de la app.')
  if (envio.trampa) return // bot: no se manda, pero tampoco se avisa (para no darle pistas)
  if (enviosEnLaUltimaHora() >= MAXIMO_POR_HORA) throw new Error(`Ya mandaste ${MAXIMO_POR_HORA} en la última hora. Probá de nuevo más tarde.`)
  // no-cors: Apps Script Web Apps no devuelven headers CORS legibles; no podemos leer la respuesta,
  // así que asumimos éxito si el fetch no tira una excepción de red.
  await fetch(URL_FEEDBACK, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ ...envio, texto: envio.texto.slice(0, MAXIMO_CARACTERES) }),
  })
  registrarEnvio()
}
