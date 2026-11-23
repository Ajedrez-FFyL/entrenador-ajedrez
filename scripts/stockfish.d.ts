/** Tipos mínimos del paquete npm `stockfish` (no trae los suyos): ver scripts/lib-motor.ts. */
declare module 'stockfish' {
  interface MotorWasm {
    sendCommand(comando: string): void
  }
  export default function stockfish(variante?: string): Promise<MotorWasm>
}
