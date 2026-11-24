import { PgnParser, type Game, type PgnNodeData } from 'chessops/pgn'
import { db, guardarAjuste, leerAjuste, leerUsuarios } from '../datos/db.ts'
import { partidaDesdePgn } from '../datos/normalizar.ts'
import type { Fuente, Partida } from '../datos/tipos.ts'
import { importarChesscom } from './chesscom.ts'
import { importarLichess } from './lichess.ts'

/** Guarda solo las partidas que no estaban: nunca pisa una partida ya analizada. */
async function guardarNuevas(partidas: Partida[]): Promise<number> {
  const lote = [...new Map(partidas.map((p) => [p.id, p])).values()]
  const existentes = await db.partidas.bulkGet(lote.map((p) => p.id))
  const nuevas = lote.filter((_, i) => !existentes[i])
  await db.partidas.bulkAdd(nuevas)
  return nuevas.length
}

async function avanzarCursor(fuente: Fuente, lote: Partida[]) {
  const actual = await leerAjuste<number>(`cursor:${fuente}`, 0)
  const maximo = Math.max(actual, ...lote.map((p) => p.fecha))
  await guardarAjuste(`cursor:${fuente}`, maximo)
}

export interface ResultadoImportacion {
  fuente: Fuente
  nuevas: number
  error?: string
}

/** Importa las partidas nuevas de Lichess y Chess.com desde la última importación. */
export async function importarNuevas(alInformar: (mensaje: string) => void): Promise<ResultadoImportacion[]> {
  const usuarios = await leerUsuarios()
  const resultados: ResultadoImportacion[] = []

  if (usuarios.lichess) {
    let nuevas = 0
    try {
      const desde = await leerAjuste<number>('cursor:lichess', 0)
      alInformar('Lichess: conectando…')
      await importarLichess(
        usuarios.lichess,
        desde,
        async (lote) => {
          nuevas += await guardarNuevas(lote)
          await avanzarCursor('lichess', lote)
        },
        (n) => alInformar(`Lichess: ${n} partidas recibidas…`),
      )
      resultados.push({ fuente: 'lichess', nuevas })
    } catch (e) {
      resultados.push({ fuente: 'lichess', nuevas, error: mensajeDeError(e) })
    }
  }

  if (usuarios.chesscom) {
    let nuevas = 0
    try {
      const desde = await leerAjuste<number>('cursor:chesscom', 0)
      alInformar('Chess.com: conectando…')
      await importarChesscom(
        usuarios.chesscom,
        desde,
        async (lote) => {
          nuevas += await guardarNuevas(lote)
          await avanzarCursor('chesscom', lote)
        },
        (n, mes) => alInformar(`Chess.com: ${mes}, ${n} partidas…`),
      )
      resultados.push({ fuente: 'chesscom', nuevas })
    } catch (e) {
      resultados.push({ fuente: 'chesscom', nuevas, error: mensajeDeError(e) })
    }
  }

  await guardarAjuste('ultimaImportacion', Date.now())
  return resultados
}

/**
 * Las exportaciones PGN de Lichess suelen bajarse sin tiempos. Esto vuelve a pedir todas las
 * partidas a la API (que sí los trae) y completa el reloj de las que no lo tienen. Tarda: Lichess
 * entrega unas 20 partidas por segundo sin token.
 */
export async function completarRelojesLichess(alInformar: (mensaje: string) => void): Promise<number> {
  const { lichess } = await leerUsuarios()
  if (!lichess) return 0
  let completadas = 0
  await importarLichess(
    lichess,
    0,
    async (lote) => {
      const existentes = await db.partidas.bulkGet(lote.map((p) => p.id))
      const cambios: Partida[] = []
      lote.forEach((p, i) => {
        const actual = existentes[i]
        if (actual && !actual.relojes && p.relojes?.length) cambios.push({ ...actual, relojes: p.relojes })
      })
      await db.partidas.bulkPut(cambios)
      completadas += cambios.length
    },
    (n) => alInformar(`${n} partidas revisadas, ${completadas} relojes completados…`),
  )
  return completadas
}

const TANDA_PGN = 500
// Caracteres leídos entre cesiones del hilo: alcanza para notar el progreso sin trabar la pestaña.
const CHUNK_TEXTO_PGN = 200_000

function cederHilo(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0))
}

export interface ProgresoImportacionPgn {
  leidas: number
  total: number
  nuevas: number
}

/**
 * Cuenta las partidas del archivo (una por encabezado "[Event") para poder mostrar una barra de
 * progreso real; es solo una estimación (un PGN sin ese encabezado sigue importándose igual).
 */
function contarPartidas(texto: string): number {
  return (texto.match(/^\[Event /gm) ?? []).length
}

/**
 * Importa un archivo PGN con muchas partidas (de Lichess, Chess.com u otra exportación) sin
 * trabar la pestaña: usa el parser en streaming de chessops, que arma cada partida a medida que
 * llega el texto, y guarda y cede el hilo cada 500 partidas leídas (archivos de 20.000+ partidas
 * tardan igual, pero la interfaz sigue respondiendo y se puede ver cuánto falta).
 */
export async function importarArchivoPgn(
  texto: string,
  alProgresar?: (p: ProgresoImportacionPgn) => void,
): Promise<{ leidas: number; nuevas: number }> {
  const usuarios = await leerUsuarios()
  const total = contarPartidas(texto)
  let leidas = 0
  let nuevas = 0
  let pendientes: Partida[] = []

  const guardarPendientes = async () => {
    if (!pendientes.length) return
    nuevas += await guardarNuevas(pendientes)
    pendientes = []
    alProgresar?.({ leidas, total, nuevas })
  }

  const parser = new PgnParser((game: Game<PgnNodeData>, err) => {
    leidas++
    if (err) return // partida demasiado compleja para el presupuesto del parser: se descarta
    const p = partidaDesdePgn(game, usuarios)
    if (p) pendientes.push(p)
  })

  for (let i = 0; i < texto.length; i += CHUNK_TEXTO_PGN) {
    parser.parse(texto.slice(i, i + CHUNK_TEXTO_PGN), { stream: true })
    if (pendientes.length >= TANDA_PGN) {
      await guardarPendientes()
      await cederHilo()
    }
  }
  parser.parse('') // avisa el final del texto: emite la última partida si quedó abierta
  await guardarPendientes()

  return { leidas, nuevas }
}

export function mensajeDeError(e: unknown): string {
  if (e instanceof TypeError) return 'No hay conexión o el sitio no respondió.'
  return e instanceof Error ? e.message : String(e)
}
