export type IdSeccion = 'partidas' | 'aperturas' | 'tactica' | 'finales' | 'progreso' | 'tutoriales' | 'ajustes'

export interface Seccion {
  id: IdSeccion
  titulo: string
  icono: string
  /** Si está, se usa la pieza propia del club (public/marca/piezas/<pieza>.svg) en vez de `icono`. */
  pieza?: 'peon' | 'caballo' | 'rey'
  descripcion: string
}

export const SECCIONES: Seccion[] = [
  {
    id: 'partidas',
    titulo: 'Partidas',
    icono: '♟',
    pieza: 'peon',
    descripcion: 'Importación desde Lichess y Chess.com, errores detectados por Stockfish y estadísticas.',
  },
  {
    id: 'aperturas',
    titulo: 'Aperturas',
    icono: '♞',
    pieza: 'caballo',
    descripcion: 'Explorador de cualquier apertura, mi repertorio, práctica por niveles y explicaciones de por qué sí y por qué no.',
  },
  {
    id: 'tactica',
    titulo: 'Táctica',
    icono: '⚔',
    descripcion: 'Ejercicios a partir de mis propios errores, con repaso espaciado.',
  },
  {
    id: 'finales',
    titulo: 'Finales',
    icono: '♚',
    pieza: 'rey',
    descripcion: 'Temario progresivo y editor para jugar cualquier final contra Stockfish.',
  },
  {
    id: 'progreso',
    titulo: 'Progreso',
    icono: '◔',
    descripcion: 'Dominio por apertura y tema, y cola de repaso de lo fallado.',
  },
  {
    id: 'tutoriales',
    titulo: 'Ayuda',
    icono: '?',
    descripcion: 'Qué hace cada pestaña y glosario de términos de la app.',
  },
  {
    id: 'ajustes',
    titulo: 'Ajustes',
    icono: '⚙',
    descripcion: 'Usuarios, preferencias y respaldo.',
  },
]
