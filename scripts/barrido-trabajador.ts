/**
 * Proceso hijo del barrido completo (`scripts/barrido-completo.ts`): un Stockfish nativo propio
 * que resuelve las posiciones que le manda el proceso principal por IPC, una por vez. Se lanza
 * con `child_process.fork`, uno por núcleo (menos uno).
 *
 * Variables de entorno (las pone el proceso principal al hacer `fork`):
 *   STOCKFISH            ruta al binario nativo.
 *   BARRIDO_PROFUNDIDAD  profundidad de análisis (igual para todas las posiciones).
 *   BARRIDO_HASH_MB      tabla hash por proceso, en MB.
 */
import { MotorProceso } from './lib-motor-proceso.ts'

interface Pedido {
  id: number
  fen: string
}

const rutaMotor = process.env.STOCKFISH
if (!rutaMotor) throw new Error('Falta STOCKFISH (ruta al binario nativo) en el entorno del trabajador.')

const motor = new MotorProceso(rutaMotor, Number(process.env.BARRIDO_PROFUNDIDAD ?? 12), Number(process.env.BARRIDO_HASH_MB ?? 64))

process.on('message', (pedido: Pedido) => {
  motor
    .analizar(pedido.fen)
    .then((r) => process.send!({ id: pedido.id, ...r }))
    .catch((e) => process.send!({ id: pedido.id, error: e instanceof Error ? e.message : String(e) }))
})

process.send!({ listo: true })
