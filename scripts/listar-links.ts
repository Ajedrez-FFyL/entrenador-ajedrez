/**
 * Arma docs/links-directos.md: todos los links directos válidos de la app (a un tema de Táctica o de Finales,
 * a un curso de Aperturas y a una ficha de la Biblioteca), con la URL de producción y el nombre legible.
 * Las reglas de los links están en src/lib/enlaces.ts, y las listas salen de los mismos archivos que usa la app.
 *
 * Uso: node scripts/listar-links.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import { colorPorDefecto, hashCurso, hashDe, hashFicha, hashFinal, hashTactica, SITIO } from '../src/lib/enlaces.ts'
import { NOMBRE_TEMA, TEMAS_FILTRO, TEMAS_LIBROS } from '../src/lib/problemas/temas.ts'

const raiz = path.resolve(import.meta.dirname, '..')
const leer = <T>(ruta: string): T => JSON.parse(fs.readFileSync(path.join(raiz, ruta), 'utf8')) as T

const url = (hash: string) => SITIO + hash
const celda = (s: string) => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim()
const nombreTema = (t: string) => NOMBRE_TEMA[t] ?? t

interface Fila {
  nombre: string
  url: string
}
function tabla(filas: Fila[], cabecera = 'Nombre'): string {
  return [`| ${cabecera} | Link |`, '|---|---|', ...filas.map((f) => `| ${celda(f.nombre)} | \`${f.url}\` |`)].join('\n')
}

// ── Táctica ──
const tactica: Fila[] = []
for (const t of TEMAS_FILTRO) tactica.push({ nombre: `${nombreTema(t)} (problemas de Lichess)`, url: url(hashTactica(t, 'lichess', TEMAS_LIBROS.includes(t))) })
for (const t of TEMAS_LIBROS)
  tactica.push({
    nombre: `${nombreTema(t)} (problemas de libros)`,
    url: url(hashTactica(t, 'libros', TEMAS_FILTRO.includes(t))),
  })

// ── Aperturas ──
interface Explicacion {
  id: string
  nombre: string
}
const dirAperturas = path.join(raiz, 'src/contenido/aperturas')
const aperturas: (Fila & { id: string })[] = fs
  .readdirSync(dirAperturas)
  .filter((f) => f.endsWith('.json'))
  .map((f) => leer<Explicacion>(`src/contenido/aperturas/${f}`))
  .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
  .map((e) => ({
    id: e.id,
    nombre: `${e.nombre} (con ${colorPorDefecto(e.nombre) === 'white' ? 'blancas' : 'negras'})`,
    url: url(hashCurso(e.id, colorPorDefecto(e.nombre), false)),
  }))

// ── Finales ──
interface TemaFinal {
  id: string
  titulo: string
  nivel: string
}
const temas = leer<{ temas: TemaFinal[] }>('src/contenido/finales/temario.json').temas
const finales: Fila[] = temas.map((t) => ({ nombre: `${t.titulo} (nivel ${t.nivel})`, url: url(hashFinal(t.id)) }))

// ── Biblioteca ──
interface Ficha {
  id: string
  titulo: string
  autor?: string
}
const fichas = leer<Ficha[]>('public/datos/biblioteca.json')
  .slice()
  .sort((a, b) => a.id.localeCompare(b.id))
const biblioteca: Fila[] = fichas.map((f) => ({ nombre: f.autor ? `${f.titulo}, ${f.autor}` : f.titulo, url: url(hashFicha(f.id)) }))

const total = tactica.length + aperturas.length + finales.length + biblioteca.length
const md = `# Links directos del Entrenador de ajedrez

Generado con \`node scripts/listar-links.ts\`: no editar a mano. Hay **${total} links** (Táctica ${tactica.length}, Aperturas ${aperturas.length}, Finales ${finales.length}, Biblioteca ${biblioteca.length}).

Cada link abre la app en ese tema, curso o ficha; el botón "Copiar link" de la app arma el mismo link. Un id que no existe abre la pestaña normal con el aviso "No encontré…".

Sitio: ${SITIO}

## Táctica (${tactica.length})

Forma: \`#/tactica/tema/<tema>\`. Abre los ejercicios de ese tema con el tema ya elegido (el primer uso de cada tema de Lichess necesita internet para bajarlo). Los temas que existen en Lichess y en libros (mate en 1, 2 y 3, y jugada defensiva) abren Lichess; para los de libros se agrega \`/libros\`.

${tabla(tactica, 'Tema')}

## Aperturas (${aperturas.length})

Forma: \`#/aperturas/curso/<curso>\`. Abre el curso con el color indicado entre paréntesis; para el otro color se agrega \`/blancas\` o \`/negras\` al final (por ejemplo \`${url(hashDe('aperturas', 'curso', 'inglesa', 'negras'))}\`).

${tabla(aperturas, 'Curso')}

## Finales (${finales.length})

Forma: \`#/finales/tema/<tema>\`. Abre ese tema del temario, con su explicación y sus posiciones.

${tabla(finales, 'Tema')}

## Biblioteca (${biblioteca.length})

Forma: \`#/biblioteca/<ID>\`. Abre la ficha del libro (el ID no distingue mayúsculas, \`l042\` y \`L042\` van igual).

${tabla(biblioteca, 'Libro')}
`
fs.writeFileSync(path.join(raiz, 'docs/links-directos.md'), md)
console.log(`docs/links-directos.md: ${total} links (Táctica ${tactica.length}, Aperturas ${aperturas.length}, Finales ${finales.length}, Biblioteca ${biblioteca.length})`)
