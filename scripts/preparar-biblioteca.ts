/**
 * Prepara `public/datos/biblioteca.json` (pestaña «Biblioteca») a partir del catálogo de la biblioteca
 * de ajedrez de Mati. El catálogo (CSV) es privado y NO va al repo: se pasa la ruta como argumento.
 *
 * Uso: node scripts/preparar-biblioteca.ts "<ruta al CSV>"
 *
 * Qué publica: solo campos públicos de cada libro (id, título, autor, tema, subtema, nivel, dificultad,
 * idioma, páginas, «qué cubre» y destino) más lo que hay en la app. Nunca copia la ruta del archivo, las
 * notas ni la decisión de Mati, el problema conocido ni el estado en la app. Descarta las filas con
 * destino «Descartar» y «Docencia (ficha + ideas)».
 *
 * Correcciones que sobreviven a un CSV nuevo (se aplican por ID):
 * - `scripts/biblioteca-que-cubre.json`: id → texto final de «qué cubre» (gana sobre la limpieza automática).
 * - `scripts/biblioteca-correcciones.json`: `titulo`, `autor` y `paginas` por id (títulos con notas sobre
 *   el archivo, páginas que son las del archivo y no las del libro).
 * - `scripts/biblioteca-equivalencias.json`: título de la fuente en la app → id del libro.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const DESTINOS_EXCLUIDOS = new Set(['Descartar', 'Docencia (ficha + ideas)'])

const ruta = process.argv[2]
if (!ruta) {
  console.error('Uso: node scripts/preparar-biblioteca.ts "<ruta al CSV del catálogo>"')
  process.exit(1)
}

// ---------- CSV (RFC 4180: comillas, comas y saltos de línea dentro de campos) ----------
function leerCsv(texto: string): string[][] {
  const filas: string[][] = []
  let fila: string[] = []
  let campo = ''
  let entreComillas = false
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i]
    if (entreComillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') { campo += '"'; i++ } else entreComillas = false
      } else campo += c
    } else if (c === '"') entreComillas = true
    else if (c === ',') { fila.push(campo); campo = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++
      fila.push(campo); campo = ''
      if (fila.length > 1 || fila[0] !== '') filas.push(fila)
      fila = []
    } else campo += c
  }
  if (campo !== '' || fila.length) { fila.push(campo); filas.push(fila) }
  return filas
}

const leerJson = <T>(r: string): T => JSON.parse(readFileSync(r, 'utf8')) as T

// ---------- Limpieza automática de «qué cubre» ----------
// Una ficha pública describe el libro, no el archivo: se sacan las frases sobre PDF, escaneo, OCR, etc.
const META = /\b(PDF|OCR|escane\w*|digesto|metadatos?|capa de texto|nombre de(l)? archivo|archivos?|carpeta|copias?|marcadores|portada del|inferid[oa]|probablemente|por el (título|nombre)|sin índice|índice (no|visible|llega|se corta|parcial)|no está en el|Ojo|módulo|app\b|CUEX|usuario|Panel|a confirmar|Muy útil|ideal para|fuente principal|mejor fuente|dos páginas por hoja|fotocopia|extracto|ruido|ilegible|corrupt[oa]|reconstruid[oa]s?|se lee con dificultad|\.docx?)\b/i
const PARENTESIS_META = /\([^()]*\b(PDF|OCR|escane\w*|digesto|metadatos?|inferid[oa]|probablemente|nombre de archivo|marcadores|encabezado|deducido|portada)\b[^()]*\)/gi

function limpiarQueCubre(bruto: string): string {
  let t = bruto.replace(/\*+/g, '').replace(PARENTESIS_META, '')
  t = t.replace(/\(?\bpágs?\.\s*(del\s+)?PDF\s*/gi, '(pág. ').replace(/\(pág\. (\d+)\)?/g, '(pág. $1)')
  const frases = t.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿¡"«(1-9])/)
  const buenas = frases.filter((f) => !META.test(f))
  return buenas.join(' ').replace(/\s+/g, ' ').replace(/(\S)\s+\.(?=\s|$)/g, '$1.').trim()
}

function limpiarTitulo(t: string): string {
  return t.replace(PARENTESIS_META, '').replace(/\s*\((metadatos y OCR|por los marcadores)\)/gi, '').replace(/\s+/g, ' ').trim()
}

// ---------- Lo que hay en la app ----------
interface FuenteApp { titulo: string }
interface ProblemaLibro { fuente: FuenteApp }
interface TemaFinal { id: string; titulo: string; fuentes?: FuenteApp[] }
interface CursoApertura { id: string; nombre: string; fuentes?: FuenteApp[] }

const equivalencias = leerJson<Record<string, string>>('scripts/biblioteca-equivalencias.json')
const problemas = leerJson<ProblemaLibro[]>('public/datos/problemas-libros.json')
const partidas = leerJson<ProblemaLibro[]>('public/datos/partidas-libros.json')
const temario = leerJson<{ temas: TemaFinal[] }>('src/contenido/finales/temario.json')

import { readdirSync } from 'node:fs'
const cursos: CursoApertura[] = readdirSync('src/contenido/aperturas')
  .filter((f) => f.endsWith('.json'))
  .map((f) => leerJson<CursoApertura>(`src/contenido/aperturas/${f}`))

const nProblemas = new Map<string, number>()
const nPartidas = new Map<string, number>()
const finalesPorLibro = new Map<string, { id: string; titulo: string }[]>()
const aperturasPorLibro = new Map<string, { id: string; nombre: string }[]>()
const sinAsignar = new Map<string, string>() // título → dónde aparece

const sumar = (m: Map<string, number>, id: string) => m.set(id, (m.get(id) ?? 0) + 1)
function agregarUnico<T extends { id: string }>(m: Map<string, T[]>, libro: string, x: T) {
  const lista = m.get(libro) ?? []
  if (!lista.some((y) => y.id === x.id)) lista.push(x)
  m.set(libro, lista)
}
const esFuenteAbierta = (t: string) => /\(Wikipedia|\(Wikilibros|Catálogo abierto de aperturas de Lichess/.test(t)

for (const p of problemas) {
  const id = equivalencias[p.fuente.titulo]
  if (id) sumar(nProblemas, id)
  else sinAsignar.set(p.fuente.titulo, 'Problemas de libros')
}
for (const p of partidas) {
  const id = equivalencias[p.fuente.titulo]
  if (id) sumar(nPartidas, id)
  else sinAsignar.set(p.fuente.titulo, 'Partidas de libros')
}
for (const tema of temario.temas) {
  for (const f of tema.fuentes ?? []) {
    const id = equivalencias[f.titulo]
    if (id) agregarUnico(finalesPorLibro, id, { id: tema.id, titulo: tema.titulo })
    else if (!esFuenteAbierta(f.titulo)) sinAsignar.set(f.titulo, 'Finales')
  }
}
for (const curso of cursos) {
  for (const f of curso.fuentes ?? []) {
    const id = equivalencias[f.titulo]
    if (id) agregarUnico(aperturasPorLibro, id, { id: curso.id, nombre: curso.nombre })
    else if (!esFuenteAbierta(f.titulo)) sinAsignar.set(f.titulo, 'Aperturas')
  }
}

// ---------- Armado ----------
const filas = leerCsv(readFileSync(ruta, 'utf8').replace(/^﻿/, ''))
const cab = filas[0]
const col = (nombre: string) => {
  const i = cab.indexOf(nombre)
  if (i < 0) throw new Error(`Falta la columna «${nombre}» en el CSV`)
  return i
}
const C = {
  titulo: col('Título'), autor: col('Autor'), tema: col('Tema'), nivel: col('Nivel (propuesta)'),
  dificultad: col('Dificultad 1-5 (propuesta)'), destino: col('Destino en la app (propuesta)'),
  subtema: col('Subtema'), idioma: col('Idioma'), paginas: col('Páginas'), queCubre: col('Qué cubre'), id: col('ID'),
}

const queCubreFinal = leerJson<Record<string, string>>('scripts/biblioteca-que-cubre.json')
const correcciones = leerJson<{ titulo?: Record<string, string>; autor?: Record<string, string>; paginas?: Record<string, number | null> }>('scripts/biblioteca-correcciones.json')
const entero = (s: string) => (/^\d+$/.test(s.trim()) ? Number(s.trim()) : null)

interface Libro {
  id: string
  titulo: string
  autor: string
  tema: string
  subtema: string
  nivel: string
  dificultad: number | null
  idioma: string
  paginas: number | null
  queCubre: string
  destino: string
  enApp: {
    problemas: number
    partidas: number
    finales: { id: string; titulo: string }[]
    aperturas: { id: string; nombre: string }[]
  }
}

const libros: Libro[] = []
let excluidos = 0
let cortadosSinCorregir = 0
for (const f of filas.slice(1)) {
  const destino = f[C.destino].trim()
  if (DESTINOS_EXCLUIDOS.has(destino)) { excluidos++; continue }
  const id = f[C.id].trim()
  const bruto = f[C.queCubre]
  let queCubre = queCubreFinal[id] ?? limpiarQueCubre(bruto)
  if (bruto.length === 400 && !(id in queCubreFinal)) {
    // Texto cortado a mitad de palabra y sin corrección escrita: se corta en la última oración completa.
    const hasta = Math.max(queCubre.lastIndexOf('. '), queCubre.endsWith('.') ? queCubre.length - 1 : -1)
    queCubre = hasta > 40 ? queCubre.slice(0, hasta + 1) : ''
    cortadosSinCorregir++
  }
  libros.push({
    id,
    titulo: correcciones.titulo?.[id] ?? limpiarTitulo(f[C.titulo]),
    autor: correcciones.autor?.[id] ?? f[C.autor].trim(),
    tema: f[C.tema].trim(),
    subtema: f[C.subtema].trim(),
    nivel: f[C.nivel].trim(),
    dificultad: entero(f[C.dificultad]),
    idioma: f[C.idioma].trim(),
    paginas: id in (correcciones.paginas ?? {}) ? correcciones.paginas![id] : entero(f[C.paginas]),
    queCubre,
    destino,
    enApp: {
      problemas: nProblemas.get(id) ?? 0,
      partidas: nPartidas.get(id) ?? 0,
      finales: finalesPorLibro.get(id) ?? [],
      aperturas: aperturasPorLibro.get(id) ?? [],
    },
  })
}

const idsLibros = new Set(libros.map((l) => l.id))
const equivalenciasHuerfanas = Object.entries(equivalencias).filter(([, id]) => !idsLibros.has(id))
writeFileSync('public/datos/biblioteca.json', JSON.stringify(libros, null, 1) + '\n')

console.log(`Libros publicados: ${libros.length} (excluidos por destino: ${excluidos})`)
console.log(`Textos de «qué cubre» cortados a 400 y sin corrección escrita: ${cortadosSinCorregir}`)
console.log(`Libros con algo en la app: ${libros.filter((l) => l.enApp.problemas || l.enApp.partidas || l.enApp.finales.length || l.enApp.aperturas.length).length}`)
if (equivalenciasHuerfanas.length) console.log('Equivalencias a libros que no están en la biblioteca publicada:', equivalenciasHuerfanas)
console.log(`Fuentes de la app sin asignar a un libro (${sinAsignar.size}):`)
for (const [t, donde] of [...sinAsignar].sort()) console.log(`  - [${donde}] ${t}`)
