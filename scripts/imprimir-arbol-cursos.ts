/**
 * Imprime el árbol de cursos de aperturas (`arbolDeCursos`) para revisarlo: un curso colgado del padre
 * equivocado se ve enseguida. Uso: node scripts/imprimir-arbol-cursos.ts
 */
import { cargarModulo, cerrarVite } from './lib-vite-node.ts'

interface Nodo {
  id: string
  raiz: string[]
  nombre: string
  curso?: object
  hijos: Nodo[]
  variantes: number
}
interface Cat {
  arbolDeCursos(e: unknown[]): Nodo[]
  jugadasDeNodo(raiz: string[]): string
}
const cat = await cargarModulo<Cat>('/src/lib/aperturas/catalogo.ts')
const { EXPLICACIONES } = await cargarModulo<{ EXPLICACIONES: unknown[] }>('/src/lib/aperturas/explicaciones.ts')
const arbol = cat.arbolDeCursos(EXPLICACIONES)
let cursos = 0
const imprimir = (n: Nodo, nivel: number) => {
  if (n.curso) cursos++
  const jugadas = n.raiz.length ? ` [${cat.jugadasDeNodo(n.raiz)}]` : ''
  const marca = n.curso ? (n.hijos.length ? '● curso con variantes' : '● curso') : '▸ carpeta'
  console.log(`${'  '.repeat(nivel)}${n.nombre}${jugadas}  — ${marca}${n.variantes ? ` (${n.variantes})` : ''}`)
  n.hijos.forEach((h) => imprimir(h, nivel + 1))
}
arbol.forEach((n) => imprimir(n, 0))
console.log(`\n${cursos} cursos en el árbol (de ${EXPLICACIONES.length}).`)
await cerrarVite()
