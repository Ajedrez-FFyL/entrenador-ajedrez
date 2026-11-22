/**
 * Separa cursos de aperturas (Fase C, C2-bis): reparte las notas de un archivo en cursos nuevos sin
 * perder ninguna (cada nota conserva su resultado de verificación) y mueve el archivo viejo a
 * `datos-fuente/cursos-reemplazados/` (no se borra). Se corre una sola vez: después de correrlo ya no
 * existen los archivos de origen. Uso: node scripts/separar-cursos.ts
 */
import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import type { Explicacion, Fuente, NotaJugada, ResultadoVerificacion, Trampa } from '../src/lib/aperturas/explicaciones.ts'

const CARPETA = 'src/contenido/aperturas'
const ARCHIVO_VIEJOS = 'datos-fuente/cursos-reemplazados'

const leer = (id: string): Explicacion => JSON.parse(readFileSync(`${CARPETA}/${id}.json`, 'utf8'))
const guardar = (e: Explicacion) => writeFileSync(`${CARPETA}/${e.id}.json`, JSON.stringify(e, null, 2) + '\n')

type Parte = Pick<Explicacion, 'id' | 'nombre' | 'raiz' | 'resumen' | 'planesBlancas' | 'planesNegras' | 'estructura' | 'rupturas' | 'piezas'> & {
  excluye?: string[]
  fuentes: (viejo: Fuente[]) => Fuente[]
  /** Clave de la nota (con su orden de jugadas) → clave nueva, o undefined si la nota no va a este curso. */
  repartir: (clave: string) => string | undefined
  trampas: (t: Trampa) => boolean
}

interface Origen {
  e: Explicacion
  notas: [string, NotaJugada][]
  resultados: Record<string, ResultadoVerificacion>
}

function origen(id: string): Origen {
  const e = leer(id)
  return { e, notas: Object.entries(e.notas), resultados: e.verificacion?.resultados ?? {} }
}

/** Copia las notas de `o` que `p.repartir` asigna, con sus resultados (incluidos los de «por qué no»). */
function armarParte(o: Origen, p: Parte, extra?: { notas: Record<string, NotaJugada>; resultados: Record<string, ResultadoVerificacion> }): Explicacion {
  const notas: Record<string, NotaJugada> = {}
  const resultados: Record<string, ResultadoVerificacion> = {}
  for (const [clave, nota] of o.notas) {
    const nueva = p.repartir(clave)
    if (nueva === undefined) continue
    notas[nueva] = nota
    const prefijo = nueva.split(' ').slice(0, -1).join(' ')
    const prefijoViejo = clave.split(' ').slice(0, -1).join(' ')
    if (o.resultados[clave]) resultados[nueva] = o.resultados[clave]
    for (const a of nota.porQueNo ?? []) {
      const r = o.resultados[`${prefijoViejo} ${a.uci} (por qué no)`]
      if (r) resultados[`${prefijo} ${a.uci} (por qué no)`] = r
    }
  }
  if (extra) {
    Object.assign(notas, extra.notas)
    Object.assign(resultados, extra.resultados)
  }
  const e: Explicacion = {
    id: p.id,
    nombre: p.nombre,
    raiz: p.raiz,
    resumen: p.resumen,
    planesBlancas: p.planesBlancas,
    planesNegras: p.planesNegras,
    estructura: p.estructura,
    rupturas: p.rupturas,
    piezas: p.piezas,
    trampas: o.e.trampas.filter(p.trampas),
    notas,
    fuentes: p.fuentes(o.e.fuentes),
    verificacion: { ...o.e.verificacion!, resultados },
  }
  if (p.excluye) (e as Explicacion & { excluye?: string[] }).excluye = p.excluye
  return e
}

function archivar(id: string) {
  renameSync(`${CARPETA}/${id}.json`, `${ARCHIVO_VIEJOS}/${id}.json`)
}

const empieza = (clave: string, r: string) => clave === r || clave.startsWith(r + ' ')
const quienes = (f: Fuente[], ...nombres: string[]) => f.filter((x) => nombres.some((n) => x.titulo.includes(n)))

// ───────────────────────── 1.e4 e5: Española / Italiana / Otras ─────────────────────────
{
  const o = origen('espanola-italiana')
  const RUY = 'e2e4 e7e5 g1f3 b8c6 f1b5'
  const ITA = 'e2e4 e7e5 g1f3 b8c6 f1c4'
  const tronco = (c: string) => RUY.startsWith(c + ' ') || c === 'e2e4 e7e5' // jugadas anteriores a la raíz: 1.e4 e5, 2.Cf3, 2...Cc6
  const existentes = readdirSync(CARPETA)
    .filter((f) => f.endsWith('.json') && f !== 'espanola-italiana.json')
    .map((f) => ({ id: f.slice(0, -5), e: leer(f.slice(0, -5)) }))
  // Notas «de otras» que ya tienen su curso: se suman a ese curso si todavía no están.
  const aOtroCurso = (c: string) =>
    existentes.filter((x) => x.e.raiz.length > 'e2e4 e7e5'.length && empieza(c, x.e.raiz)).sort((a, b) => b.e.raiz.length - a.e.raiz.length)[0]
  const sumadas = new Map<string, number>()
  const resumenDestino = new Map<string, number>()
  const propias = (c: string) => empieza(c, RUY) || empieza(c, ITA)
  const otras = (c: string) => !propias(c)

  const espanola = armarParte(o, {
    id: 'espanola',
    nombre: 'Apertura Española (Ruy López)',
    raiz: RUY,
    resumen:
      'Tras 1.e4 e5 2.Cf3 Cc6, 3.Ab5 aumenta la presión sobre el caballo que defiende e5. El plan blanco es sostener esa presión, enrocar, jugar Te1, preparar d4 con c3 y maniobrar con el caballo (Cbd2-f1-g3); el negro suele echar al alfil con ...a6 y ...b5, se desarrolla con ...Ae7, ...d6 y enroque, y busca contrajuego en el flanco de dama con ...Ca5 y ...c5.',
    planesBlancas: [
      'Presión sostenida sobre e5 (el alfil de b5 amenaza cambiar el defensor), enroque, Te1, c3 y d4; maniobra típica del caballo Cbd2-f1-g3.',
      'Aprovechar cualquier descuido sobre el peón de e5.',
    ],
    planesNegras: [
      'Mantener el punto e5 bien defendido: cada vez que deja de estarlo, Axc6 seguido de Cxe5 aparece.',
      '...a6 y ...b5 para echar al alfil, ...Ae7, ...d6, enroque; después ...Ca5 y ...c5 para ganar espacio en el flanco de dama.',
    ],
    estructura: 'Peones en e4 y e5 enfrentados. En la Española cerrada se forma la cadena blanca c3-d4-e4 contra la negra c5-d6-e5.',
    rupturas: ['d4 de las blancas, preparada con c3.', '...d5 del negro, sobre todo en la Abierta.', '...c5 y ...b5 del negro para ganar espacio en el flanco de dama.'],
    piezas: [
      'Alfil blanco de f1: b5; ante ...a6 y ...b5 se retira a a4 y b3, y desde b3 sigue mirando f7.',
      'Caballo negro de c6: el defensor de e5; a veces va a a5 para cambiar el alfil de b3.',
      'Torre blanca: e1, para sostener e4 y hacer real la amenaza sobre e5.',
      'Alfil negro de f8: e7 (Española cerrada).',
    ],
    fuentes: (f) => quienes(f, 'Fundamental Chess Openings', 'Hector', 'Archangel', 'Larsen', 'Bologan', 'Ruy Lopez', 'Johnsen', 'Seirawan', 'Catálogo'),
    repartir: (c) => (empieza(c, RUY) || tronco(c) ? c : undefined),
    trampas: (t) => empieza(t.jugadas, RUY),
  })
  const italiana = armarParte(o, {
    id: 'italiana',
    nombre: 'Apertura Italiana (Giuoco Piano)',
    raiz: ITA,
    resumen:
      'Tras 1.e4 e5 2.Cf3 Cc6, 3.Ac4 apunta a f7, el punto débil del enroque negro. El plan blanco es preparar d4 con c3 (la versión lenta, con d3, lleva a maniobras y a un ataque en el flanco de rey); el negro se desarrolla con ...Ac5, ...Cf6 y ...d6 y busca la ruptura ...d5 en el momento justo.',
    planesBlancas: ['Alfil sobre f7, c3 para preparar d4; en la versión lenta (d3), maniobras y ataque en el flanco de rey.', 'Aprovechar cualquier descuido sobre f7 o sobre el peón de e5.'],
    planesNegras: ['Desarrollo armónico (...Ac5, ...Cf6, ...d6) y la ruptura ...d5 en el momento justo.', 'Mantener el punto e5 bien defendido y cuidar f7.'],
    estructura: 'Peones en e4 y e5 enfrentados. Si las blancas logran d4 con apoyo de c3, ganan espacio; el negro sostiene e5 con ...d6 o cambia en d4.',
    rupturas: ['d4 de las blancas, preparada con c3.', '...d5 del negro.'],
    piezas: ['Alfil blanco de f1: c4, apuntando a f7.', 'Alfil negro de f8: c5 (Giuoco Piano).', 'Caballo negro de c6: defensor de e5.'],
    fuentes: (f) => quienes(f, 'Fundamental Chess Openings', 'Italian Game', 'Seirawan', 'Catálogo'),
    repartir: (c) => (empieza(c, ITA) || tronco(c) ? c : undefined),
    trampas: (t) => empieza(t.jugadas, ITA),
  })
  // El resto: lo que ya tiene curso va a ese curso; lo demás queda en «Otras partidas abiertas».
  const extra = { notas: {} as Record<string, NotaJugada>, resultados: {} as Record<string, ResultadoVerificacion> }
  const aOtros = new Map<string, { notas: Record<string, NotaJugada>; resultados: Record<string, ResultadoVerificacion> }>()
  for (const [c, nota] of o.notas) {
    if (!otras(c) || tronco(c)) continue
    const dest = aOtroCurso(c)
    const prefijo = c.split(' ').slice(0, -1).join(' ')
    const res: Record<string, ResultadoVerificacion> = {}
    if (o.resultados[c]) res[c] = o.resultados[c]
    for (const a of nota.porQueNo ?? []) {
      const r = o.resultados[`${prefijo} ${a.uci} (por qué no)`]
      if (r) res[`${prefijo} ${a.uci} (por qué no)`] = r
    }
    if (dest && !dest.e.notas[c]) {
      let m = aOtros.get(dest.id)
      if (!m) aOtros.set(dest.id, (m = { notas: {}, resultados: {} }))
      m.notas[c] = nota
      Object.assign(m.resultados, res)
      sumadas.set(dest.id, (sumadas.get(dest.id) ?? 0) + 1)
    } else if (dest) resumenDestino.set(dest.id, (resumenDestino.get(dest.id) ?? 0) + 1)
    else {
      extra.notas[c] = nota
      Object.assign(extra.resultados, res)
    }
  }
  const abiertas = armarParte(
    o,
    {
      id: 'abiertas-otras',
      nombre: 'Otras partidas abiertas (1.e4 e5)',
      raiz: 'e2e4 e7e5',
      excluye: [RUY, ITA],
      resumen:
        'Lo que queda de 1.e4 e5 fuera de la Española y la Italiana: las terceras jugadas blancas tranquilas (Ae2, d3, g3, c4), el juego del centro con 2.d4, los intentos tempranos de dama (2.Dh5, 2.De2) y las respuestas poco comunes del negro en la segunda jugada (2...d5, 2...f6, 2...De7, 2...Df6, 2...Ac5). Cada una de las que tienen curso propio (Escocesa, Petrov, Philidor, Gambito de Rey…) se estudia en su tarjeta; acá quedan las demás.',
      planesBlancas: ['Ocupar el centro y desarrollar rápido: las blancas tienen la iniciativa en casi todas estas líneas.', 'Castigar los intentos prematuros de dama del rival.'],
      planesNegras: ['Cuidar el peón de e5 y desarrollarse sin perder tiempo con la dama.', 'Contragolpear en el centro con ...d5 cuando las blancas se descuidan.'],
      estructura: 'Peones en e4 y e5; el que abra el centro primero con ventaja de desarrollo suele tener la iniciativa.',
      rupturas: ['d4 de las blancas.', '...d5 del negro.'],
      piezas: ['La dama sale temprano en varias líneas (Dh5, De2): perder tiempos con ella es la causa de los errores típicos.'],
      fuentes: (f) => quienes(f, 'Elephant', 'Fundamental Chess Openings', 'Catálogo'),
      repartir: (c) => (tronco(c) ? c : undefined),
      trampas: (t) => otras(t.jugadas),
    },
    extra,
  )
  for (const [id, m] of aOtros) {
    const d = leer(id)
    Object.assign(d.notas, m.notas)
    if (d.verificacion) Object.assign(d.verificacion.resultados, m.resultados)
    guardar(d)
  }
  for (const e of [espanola, italiana, abiertas]) guardar(e)
  archivar('espanola-italiana')
  console.log(`espanola ${Object.keys(espanola.notas).length}, italiana ${Object.keys(italiana.notas).length}, abiertas-otras ${Object.keys(abiertas.notas).length}`)
  console.log('sumadas a cursos existentes:', Object.fromEntries(sumadas), '| ya estaban:', Object.fromEntries(resumenDestino))
}

// ───────────────────────── Gambito de Dama Rehusado ─────────────────────────
{
  const o = origen('gambito-de-dama-rehusado')
  const cambio = (c: string) => c.split(' ').includes('c4d5')
  const base = 'd2d4 d7d5 c2c4 e7e6 b1c3 g8f6'
  const comunes = ['Paul van der Sterren', 'Wikipedia', 'Catálogo', 'Schandorff']
  const cam = armarParte(o, {
    id: 'gdr-cambio',
    nombre: 'Gambito de Dama Rehusado: Variante del Cambio',
    raiz: `${base} c4d5`,
    resumen:
      'Con 4.cxd5 las blancas definen la estructura Carlsbad (peones blancos en d4 y e3 contra negros en c6 y d5, columna c semiabierta para las blancas y e para el negro). El plan típico es el ataque de minorías (Tb1, b4 y b5) para crear debilidades en el flanco de dama; el negro busca juego en el flanco de rey con ...Ce4 o ...f5.',
    planesBlancas: ['Ataque de minorías: b4-b5 contra los peones c6 y d5.', 'Alternativa: f3 y e4 para un centro grande.'],
    planesNegras: ['Juego en el flanco de rey con ...Ce4, ...f5 o maniobras de piezas.', 'Cambiar piezas menores para aliviar la falta de espacio.'],
    estructura: 'Carlsbad: peones blancos en d4 y e3 contra negros en c6 y d5, columna c semiabierta para las blancas y e para el negro.',
    rupturas: ['b4-b5 o e4 de las blancas.', '...c5 o ...f5 del negro.'],
    piezas: ['Alfil blanco de c1: g5.'],
    fuentes: (f) => f.filter((x) => comunes.some((n) => x.titulo.includes(n))),
    repartir: (c) => (cambio(c) ? c : undefined),
    trampas: () => false,
  })
  const clas = armarParte(o, {
    id: 'gdr-clasico',
    nombre: 'Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker)',
    raiz: `${base} c1g5`,
    resumen:
      'Con 4.Ag5 las blancas clavan el caballo de f6 y el negro elige entre dos sistemas. En la Cambridge Springs (4...Cbd7 5.e3 c6 6.Cf3 Da5) la dama negra va a a5 y clava el caballo de c3; en la Lasker (4...Ae7 5.e3 O-O 6.Cf3 h6 7.Ah4 Ce4) el negro busca cambios con ...Ce4 para aliviar la posición.',
    planesBlancas: ['Mantener la clavada y la presión en el centro sin perder el control de e4.', 'Evitar la trampa de la dama negra en a5 en la Cambridge Springs.'],
    planesNegras: ['En la Cambridge Springs: ...Da5 y presión sobre c3 y d4.', 'En la Lasker: cambiar piezas con ...Ce4 para aliviar la falta de espacio.'],
    estructura: 'Centro con peones blancos en d4 y e3 contra negros en d5 y e6; el alfil de g5 clava el caballo de f6.',
    rupturas: ['e4 de las blancas, cuando está preparada.', '...c5 o ...c6 y ...e5 del negro.'],
    piezas: ['Alfil blanco de c1: g5.', 'Dama negra: a5 en la Cambridge Springs.'],
    fuentes: (f) => f.filter((x) => comunes.some((n) => x.titulo.includes(n)) || x.titulo.includes('Cambridge') || x.titulo.includes('EDAMI')),
    repartir: (c) => (cambio(c) ? undefined : c),
    trampas: () => false,
  })
  guardar(cam)
  guardar(clas)
  archivar('gambito-de-dama-rehusado')
  console.log(`gdr-cambio ${Object.keys(cam.notas).length}, gdr-clasico ${Object.keys(clas.notas).length}`)
}

// ───────────────────────── Siciliana Cerrada / Grand Prix ─────────────────────────
{
  const o = origen('siciliana-cerrada')
  const R = 'e2e4 c7c5 b1c3'
  // Notas del Grand Prix: 2.Cc3 Cc6 3.f4 y 2.Cc3 d6 3.f4, que se pasan al orden 2.f4 (misma posición).
  const gp = (c: string) => /^e2e4 c7c5 b1c3 (b8c6|d7d6) f2f4 /.test(c)
  const aGp = (c: string) => c.replace(/^e2e4 c7c5 b1c3 (b8c6|d7d6) f2f4/, (_, n) => `e2e4 c7c5 f2f4 ${n} b1c3`)
  const cer = armarParte(o, {
    id: 'siciliana-cerrada',
    nombre: 'Siciliana Cerrada',
    raiz: R,
    resumen:
      'Las blancas no abren el centro con d4: con 2.Cc3 juegan g3, Ag2, d3 y más tarde f4, con ataque en el flanco de rey. El negro suele hacer el fianchetto y buscar juego en el flanco de dama con ...Tb8 y ...b5.',
    planesBlancas: ['f4-f5 y ataque en el flanco de rey.', 'Fianchetto del rey y d3 para un centro sólido.'],
    planesNegras: ['...Tb8, ...b5-b4 en el flanco de dama.', '...e6 y ...d5 para golpear el centro.'],
    estructura: 'Centro cerrado: peones blancos en d3 y e4; negros en c5 y d6.',
    rupturas: ['f4-f5 de las blancas.', '...b5-b4 y ...d5 del negro.'],
    piezas: ['Alfiles en g2 y g7.', 'Caballo blanco de g1: e2 o f3.'],
    fuentes: (f) => f.filter((x) => !x.titulo.includes('Plaskett')),
    // Las dos jugadas f4 quedan acá como alternativa («por qué f4»); lo que sigue pasa al Grand Prix.
    repartir: (c) => (gp(c) ? undefined : c),
    trampas: () => false,
  })
  const grand = armarParte(o, {
    id: 'grand-prix',
    nombre: 'Siciliana Grand Prix (ataque con f4)',
    raiz: 'e2e4 c7c5 f2f4',
    resumen:
      'Las blancas juegan f4 enseguida (2.f4, o 2.Cc3 y 3.f4), con Cf3 y Ab5 o Ac4, y buscan un ataque rápido en el flanco de rey sin abrir el centro con d4. El negro suele hacer el fianchetto, enroca y contraataca con ...d6 y ...Cf6 en el centro y en el flanco de dama.',
    planesBlancas: ['f4-f5 y ataque en el flanco de rey con Cf3, Ac4 o Ab5.', 'Desarrollo rápido y sin abrir el centro.'],
    planesNegras: ['Desarrollarse con ...Cc6, ...g6 y ...Ag7, y contragolpear con ...d5.', 'No ceder f5 sin lucha.'],
    estructura: 'Peones blancos en e4 y f4 (el centro de avance); negros en c5 y d6.',
    rupturas: ['f4-f5 de las blancas.', '...d5 y ...b5 del negro.'],
    piezas: ['Alfil blanco de f1: c4 o b5.', 'Caballo blanco de g1: f3.'],
    fuentes: (f) => f.filter((x) => ['Rogozenko', 'Plaskett', 'Jones', 'Catálogo', 'Sicilian Defence', 'Paul van der Sterren'].some((n) => x.titulo.includes(n))),
    repartir: (c) => (gp(c) ? aGp(c) : undefined),
    trampas: () => false,
  })
  archivar('siciliana-cerrada') // antes de guardar: el curso nuevo conserva el id
  guardar(cer)
  guardar(grand)
  console.log(`siciliana-cerrada ${Object.keys(cer.notas).length}, grand-prix ${Object.keys(grand.notas).length}`)
}

if (!existsSync(`${ARCHIVO_VIEJOS}/espanola-italiana.json`)) throw new Error('No se archivó el curso viejo')
