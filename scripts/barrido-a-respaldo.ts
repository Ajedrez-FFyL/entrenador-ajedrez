/**
 * Convierte el resultado del barrido (datos-privados/barrido/resultado*.json, salida de
 * `scripts/barrido-completo.ts`) en un respaldo que se importa desde Ajustes → Importar respaldo.
 *
 * `importarRespaldo` (src/lib/datos/respaldo.ts) ya suma sin pisar progreso más nuevo: un error
 * nuevo se agrega por id, uno que ya existe con origen 'previo' se reemplaza por el del barrido
 * (origen 'app'), y uno que ya es 'app' se deja como está. Los repasos no se tocan (este respaldo
 * no trae ninguno). Por eso alcanza con mandar TODOS los errores del barrido: no hace falta
 * filtrar a mano los que ya están en analisis-previo.json.
 *
 * Las partidas sí necesitan un cuidado: `importarRespaldo` reemplaza la partida entera (no la
 * combina campo a campo) cuando `estadoAnalisis` "sube" de rango, así que si el barrido manda una
 * partida con `relojes` incompletos (vuelve a parsear el PGN de cero; no corre
 * `completar-relojes.ts`), se perderían los relojes ya completados que trae analisis-previo.json.
 * Por eso cada partida toma los relojes de ahí si los tiene, antes de pasar a 'analizada'.
 *
 * Uso: node scripts/barrido-a-respaldo.ts [resultado.json] [--previo ruta] [--salida ruta]
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import type { ErrorPartida, Partida, Respaldo } from '../src/lib/datos/tipos.ts'

function args(nombre: string): string | undefined {
  return process.argv.find((a) => a.startsWith(`--${nombre}=`))?.split('=')[1]
}

const RESULTADO = (process.argv[2]?.startsWith('--') ? undefined : process.argv[2]) ?? 'datos-privados/barrido/resultado.json'
const PREVIO = args('previo') ?? 'datos-privados/analisis-previo.json'
const SALIDA = args('salida') ?? 'datos-privados/barrido/respaldo-barrido.json'

if (!existsSync(RESULTADO)) {
  console.error(`No encuentro ${RESULTADO}. Corré primero scripts/barrido-completo.ts (o datos-privados/barrido/correr-barrido.bat).`)
  process.exit(1)
}

const { partidas, errores } = JSON.parse(readFileSync(RESULTADO, 'utf8')) as { partidas: Partida[]; errores: ErrorPartida[] }

const relojesPrevios = new Map<string, number[]>()
if (existsSync(PREVIO)) {
  const previo = JSON.parse(readFileSync(PREVIO, 'utf8')) as Respaldo
  for (const p of previo.partidas) if (p.relojes) relojesPrevios.set(p.id, p.relojes)
} else {
  console.warn(`Aviso: no encuentro ${PREVIO}; las partidas del respaldo llevan los relojes tal cual salen del PGN (pueden estar incompletos).`)
}

let conRelojesDelPrevio = 0
const partidasFinal = partidas.map((p) => {
  const relojes = relojesPrevios.get(p.id)
  if (relojes) conRelojesDelPrevio++
  return relojes ? { ...p, relojes } : p
})

const respaldo: Respaldo = {
  formato: 'entrenador-ajedrez',
  version: 1,
  creado: Date.now(),
  partidas: partidasFinal,
  errores,
  repasos: [],
  ajustes: [],
  repertorio: [],
  repasosLineas: [],
  intentos: [],
}
writeFileSync(SALIDA, JSON.stringify(respaldo))

const cuenta = (xs: ErrorPartida[]) => xs.reduce<Record<string, number>>((a, e) => ((a[e.clasificacion] = (a[e.clasificacion] ?? 0) + 1), a), {})
console.log(`Partidas: ${partidasFinal.length} (con relojes tomados de ${PREVIO}: ${conRelojesDelPrevio})`)
console.log(`Errores: ${errores.length} ${JSON.stringify(cuenta(errores))}`)
console.log(`Escrito ${SALIDA}`)
