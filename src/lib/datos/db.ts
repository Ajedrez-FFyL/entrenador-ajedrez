import Dexie, { type Table } from 'dexie'
import { pedirAlmacenamientoPersistente } from './almacenamiento.ts'
import type { Ajuste, ErrorPartida, Intento, LineaRepertorio, Partida, Repaso, RepasoLinea } from './tipos.ts'
import type { Usuarios } from './normalizar.ts'

class BaseDatos extends Dexie {
  partidas!: Table<Partida, string>
  errores!: Table<ErrorPartida, string>
  repasos!: Table<Repaso, string>
  ajustes!: Table<Ajuste, string>
  repertorio!: Table<LineaRepertorio, string>
  repasosLineas!: Table<RepasoLinea, string>
  intentos!: Table<Intento, number>

  constructor() {
    super('entrenador-ajedrez')
    this.version(1).stores({
      partidas: 'id, fecha, estadoAnalisis, fuente',
      errores: 'id, partidaId, clasificacion, fase, fecha',
      repasos: 'errorId, card.due, creado',
      ajustes: 'clave',
    })
    this.version(2).stores({
      repertorio: 'id, color',
      repasosLineas: 'id, color, card.due',
    })
    // Historial de intentos (C4): tabla nueva, no toca ninguna de las anteriores.
    this.version(3).stores({
      intentos: '++id, ejercicioId, fecha, fuente',
    })
  }
}

export const db = new BaseDatos()

// Pide al navegador que no borre los datos por falta de espacio (en iOS ayuda instalar la app).
// Ajustes.svelte muestra el resultado (estaPersistido()).
pedirAlmacenamientoPersistente()

export async function leerAjuste<T>(clave: string, porDefecto: T): Promise<T> {
  const fila = await db.ajustes.get(clave)
  return fila === undefined ? porDefecto : (fila.valor as T)
}

export async function guardarAjuste(clave: string, valor: unknown): Promise<void> {
  await db.ajustes.put({ clave, valor })
}

export const leerUsuarios = () => leerAjuste<Usuarios>('usuarios', {})

/**
 * Para decidir si mostrar la Bienvenida: ¿hay algo propio ya cargado? Todo por `count()` (nunca
 * `toArray()`), así que es rápido incluso con miles de partidas.
 */
export async function hayDatosPropios(): Promise<boolean> {
  const [partidas, errores, repasos, repasosLineas, intentos, repertorio, usuarios] = await Promise.all([
    db.partidas.count(),
    db.errores.count(),
    db.repasos.count(),
    db.repasosLineas.count(),
    db.intentos.count(),
    db.repertorio.count(),
    leerUsuarios(),
  ])
  return (
    partidas > 0 ||
    errores > 0 ||
    repasos > 0 ||
    repasosLineas > 0 ||
    intentos > 0 ||
    repertorio > 0 ||
    !!usuarios.lichess ||
    !!usuarios.chesscom
  )
}

export interface Preferencias {
  profundidad: number // profundidad del análisis de fondo
  nuevosPorDia: number
  /** Lecciones de aperturas: pasar solas a la línea siguiente en vez de esperar el botón «Seguir». */
  pasarSolo: boolean
  /** Elegido en la bienvenida (nivel aproximado): rango de rating inicial para los ejercicios de táctica. */
  rangoTactica?: { min: number; max: number }
}

export const PREFERENCIAS_INICIALES: Preferencias = { profundidad: 12, nuevosPorDia: 15, pasarSolo: false }

export async function leerPreferencias(): Promise<Preferencias> {
  return { ...PREFERENCIAS_INICIALES, ...(await leerAjuste<Partial<Preferencias>>('preferencias', {})) }
}
