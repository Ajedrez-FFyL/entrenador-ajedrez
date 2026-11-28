/**
 * Un Stockfish nativo (binario de verdad, no el WASM de `scripts/lib-motor.ts`) corriendo como
 * proceso hijo, para el barrido completo de partidas (`scripts/barrido-completo.ts`): hace falta
 * la velocidad del binario nativo y poder tener varios procesos en paralelo, uno por núcleo.
 *
 * Como `lib-motor.ts`, limpia la tabla hash (`ucinewgame`) antes de cada posición: así el
 * resultado depende solo del FEN y no del orden en que se analiza, que es lo que hace que la
 * caché por FEN sea válida sin importar qué proceso ni en qué momento resolvió cada posición.
 */
import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process'
import type { Evaluacion } from '../src/lib/ajedrez/evaluacion.ts'

export interface AnalisisPosicion {
  ev: Evaluacion // desde el punto de vista del bando que mueve
  mejor: string
  linea: string[]
}

export class MotorProceso {
  private proceso: ChildProcessWithoutNullStreams
  private buffer = ''
  private oyente: ((linea: string) => void) | undefined
  private listo: Promise<void>
  private profundidad: number

  constructor(rutaMotor: string, profundidad: number, hashMb = 64) {
    this.profundidad = profundidad
    this.proceso = spawn(rutaMotor, [], { stdio: ['pipe', 'pipe', 'pipe'] })
    this.proceso.stdout.on('data', (d: Buffer) => this.recibir(d.toString()))
    this.proceso.stderr.resume() // se ignora, pero hay que drenarlo para que no se bloquee
    const listo = this.esperar((l) => l === 'readyok')
    this.enviar('uci')
    this.enviar('setoption name Threads value 1')
    this.enviar(`setoption name Hash value ${hashMb}`)
    this.enviar('isready')
    this.listo = listo
  }

  private enviar(comando: string) {
    this.proceso.stdin.write(comando + '\n')
  }

  private recibir(texto: string) {
    this.buffer += texto
    let i: number
    while ((i = this.buffer.indexOf('\n')) >= 0) {
      const linea = this.buffer.slice(0, i).trimEnd()
      this.buffer = this.buffer.slice(i + 1)
      if (linea) this.oyente?.(linea)
    }
  }

  private esperar(fin: (l: string) => boolean, cada?: (l: string) => void): Promise<void> {
    return new Promise((ok) => {
      this.oyente = (l) => {
        cada?.(l)
        if (fin(l)) {
          this.oyente = undefined
          ok()
        }
      }
    })
  }

  async analizar(fen: string): Promise<AnalisisPosicion> {
    await this.listo
    const limpio = this.esperar((l) => l === 'readyok')
    this.enviar('ucinewgame')
    this.enviar('isready')
    await limpio
    let ev: Evaluacion = { cp: 0 }
    let linea: string[] = []
    let mejor = ''
    const fin = this.esperar(
      (l) => l.startsWith('bestmove'),
      (l) => {
        if (l.startsWith('bestmove')) {
          mejor = l.split(' ')[1]
          return
        }
        if (!l.includes(' multipv 1 ') || l.includes('bound')) return
        const s = / score (cp|mate) (-?\d+)/.exec(l)
        const p = / pv (.+)$/.exec(l)
        if (!s || !p) return
        ev = s[1] === 'cp' ? { cp: Number(s[2]) } : { mate: Number(s[2]) }
        linea = p[1].trim().split(' ')
      },
    )
    this.enviar(`position fen ${fen}`)
    this.enviar(`go depth ${this.profundidad}`)
    await fin
    return { ev, mejor: mejor === '(none)' ? '' : mejor, linea }
  }

  cerrar() {
    this.enviar('quit')
    this.proceso.kill()
  }
}
