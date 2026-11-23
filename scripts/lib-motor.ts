/**
 * Stockfish para los scripts de desarrollo (verificar contenido, explorar posiciones): el mismo paquete
 * npm `stockfish` que ya usa la app (`scripts/copiar-motor.mjs`), pero la versión `single` (WASM de
 * fuerza completa, un solo hilo — la app usa `lite-single`, más chica y más débil, para que cargue rápido
 * en el celular). Reemplaza al binario externo que antes se buscaba con la variable STOCKFISH: no hace
 * falta instalar nada aparte, y evita depender de poder bajar Stockfish de GitHub o de stockfishchess.org
 * (bloqueados en algunos entornos de desarrollo).
 *
 * El motor corre adentro del proceso de Node (no es un proceso aparte): no expone un `stdout` para leer
 * línea por línea como un binario, así que las respuestas UCI se capturan interceptando `console.log`
 * (es donde este build manda su salida; no hay un `Module.print` configurable que funcione en este
 * paquete) — pero SOLO mientras se espera una respuesta puntual (`esperar()` la instala y la saca apenas
 * llega la línea que busca), para no tapar los `console.log` propios del script que usa el motor el resto
 * del tiempo. Por eso un solo `MotorNativo` a la vez por proceso, y no se puede hacer `console.log` desde
 * otro lado mientras una llamada a `analizar()` está en vuelo (no pasa: todo es async de a una jugada).
 */
import stockfishFactory from 'stockfish'
import { chancesDeGanar, invertir, type Evaluacion } from '../src/lib/ajedrez/evaluacion.ts'
import { fensDeLinea } from '../src/lib/aperturas/arbol.ts'

export interface Analisis {
  ev: Evaluacion
  mejor: string
  pv: string[]
  lineas: { ev: Evaluacion; pv: string[] }[]
}

export class MotorNativo {
  private motor: { sendCommand(comando: string): void } | undefined
  private oyente: ((l: string) => void) | undefined
  private cache = new Map<string, Analisis>()
  private listo: Promise<void>
  private profundidad: number

  /**
   * Con un solo hilo, Stockfish da siempre el mismo resultado: necesario para verificaciones
   * reproducibles. `hilos` queda por compatibilidad con los llamadores existentes, pero el build
   * `single` solo admite 1 (lo rechaza cualquier otro valor), así que se ignora en la práctica.
   */
  constructor(profundidad: number, hilos = 1) {
    this.profundidad = profundidad
    this.listo = stockfishFactory('single').then((motor) => {
      this.motor = motor
      const listo = this.esperar((l) => l === 'readyok')
      this.enviar('uci')
      this.enviar(`setoption name Threads value ${hilos}`)
      this.enviar('setoption name Hash value 256')
      this.enviar('isready')
      return listo
    })
  }

  private enviar(c: string) {
    this.motor!.sendCommand(c)
  }

  private esperar(fin: (l: string) => boolean, cada?: (l: string) => void): Promise<void> {
    const original = console.log
    console.log = (...args: unknown[]) => this.oyente?.(args.map(String).join(' '))
    return new Promise((ok) => {
      this.oyente = (l) => {
        cada?.(l)
        if (fin(l)) {
          console.log = original
          ok()
        }
      }
    })
  }

  async analizar(fen: string, multipv = 1): Promise<Analisis> {
    await this.listo
    const clave = `${fen}|${multipv}`
    const previo = this.cache.get(clave)
    if (previo) return previo
    // Borra la tabla hash: si no, el resultado depende de qué posiciones se analizaron antes
    // y una verificación puede pasar o fallar según el orden.
    const limpio = this.esperar((l) => l === 'readyok')
    this.enviar('ucinewgame')
    this.enviar('isready')
    await limpio
    const lineas: { ev: Evaluacion; pv: string[] }[] = []
    let mejor = ''
    const fin = this.esperar(
      (l) => l.startsWith('bestmove'),
      (l) => {
        const s = / score (cp|mate) (-?\d+)/.exec(l)
        const p = / pv (.+)$/.exec(l)
        if (s && p && !l.includes('bound')) {
          const i = Number(/ multipv (\d+)/.exec(l)?.[1] ?? 1) - 1
          lineas[i] = { ev: s[1] === 'cp' ? { cp: Number(s[2]) } : { mate: Number(s[2]) }, pv: p[1].trim().split(' ') }
        }
        if (l.startsWith('bestmove')) mejor = l.split(' ')[1]
      },
    )
    this.enviar(`setoption name MultiPV value ${multipv}`)
    this.enviar(`position fen ${fen}`)
    // Tope de tiempo opcional (TOPE_MS): una posición patológica no puede colgar una verificación larga.
    this.enviar(`go depth ${this.profundidad}${process.env.TOPE_MS ? ` movetime ${process.env.TOPE_MS}` : ""}`)
    await fin
    const r: Analisis = { ev: lineas[0]?.ev ?? { cp: 0 }, mejor, pv: lineas[0]?.pv ?? [], lineas: lineas.filter(Boolean) }
    this.cache.set(clave, r)
    return r
  }

  /**
   * Pérdida de chances de ganar (escala 0 a 2) de jugar `uci` tras `prefijo`, con la evaluación
   * antes y después desde el lado que mueve, y la mejor línea del rival después. undefined si es ilegal.
   */
  async evaluarJugada(prefijo: string[], uci: string) {
    const fens = fensDeLinea([...prefijo, uci])
    if (fens.length !== prefijo.length + 2) return undefined
    const antes = await this.analizar(fens[fens.length - 2])
    if (antes.mejor === uci) return { perdida: 0, antes: antes.ev, despues: antes.ev, refutacion: antes.pv.slice(1), mejor: antes.mejor }
    const despues = await this.analizar(fens[fens.length - 1])
    const evDespues = invertir(despues.ev)
    return { perdida: chancesDeGanar(antes.ev) - chancesDeGanar(evDespues), antes: antes.ev, despues: evDespues, refutacion: despues.pv, mejor: antes.mejor }
  }

  cerrar() {
    this.enviar('quit')
  }
}
