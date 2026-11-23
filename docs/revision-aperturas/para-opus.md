# Para decidir con Opus (Fase C3, triage)

Junta lo que hay que decidir de `fallas-jugadas.md` y `textos-dudosos.md` en un solo documento, en
tablas compactas y en orden de importancia. **No se aplicó ningún cambio de contenido.** Fuente de cada
sección: scripts/generar-fallas-jugadas.ts y scripts/verificar-textos.ts (ver esos .md para el detalle
completo, incluido "Ruido" y "No ubicables", que no están acá).

Total de esta tabla: **0 filas** (tope pedido: ~150).

## 1. Textos perdedores (0)

La jugada mencionada en el texto es legal pero pierde más de 1,5 peones según Stockfish. **Ojo**: varias
de estas (se nota por frases como "sin temer X", "no puede ser molestada por X", "pierden fuerza con X")
describen una jugada del RIVAL que el texto da por descartada, no una jugada propia — el mismo patrón que
"impide/frena/evita" (ver la cabecera de verificar-textos.ts), pero con frases que el extractor no llegó
a cubrir. Es probable que varias de estas 13 sean también falsos positivos del extractor, no errores
reales; léanse con esa sospecha antes de tocar el contenido.

| Curso | Campo | Texto (recortado) | Jugada | Evaluación |
| --- | --- | --- | --- | --- |


## 2. Jugadas graves (0)

Pierden más de 1 peón respecto de la mejor, son ilegales, o el motor ve mate (ver fallas-jugadas.md: la
clasificación no pudo cruzarse con la base Masters — no disponible en este entorno —, así que alguna de
estas puede ser en realidad teoría conocida).

| Curso | Jugadas desde la raíz | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- |


## 3. Ilegales reales confirmados (0)

Se revisaron a mano, leyendo el texto completo, tres muestras de 40 "ilegales" al azar (120 en total, una
por cada vuelta de ajuste al extractor de `verificar-textos.ts`; quedaron 76 en la
lista final). **Ninguna de las 120 revisadas era un error real del texto**: todas eran de alguno de estos
tipos, que el extractor no distingue de forma confiable —
- una jugada de varias más adelante (plan, amenaza o condicional "si…"), o una comparación con otra
  jugada/línea/autor, no la jugada de este nodo;
- una refutación de "por qué no" de más de una jugada (el extractor solo sigue una);
- notación ambigua (falta desambiguar entre dos piezas) o una maniobra "pieza-de-a-b" en dos pasos.

Con esta tasa (0/120 confirmados, 100 % del lado del extractor en la muestra), **no se recomienda revisar
a mano el resto de la lista de "ilegales"** (quedan 76 sin revisar en
textos-dudosos.md): es muy probable que sean del mismo tipo. Si Mati u Opus quieren revisar algunas de
todos modos, están completas ahí, con curso, campo, texto completo y FEN.

## 4. Discutibles (0)

Entre 0,3 y 1 peón respecto de la mejor.

| Curso | Jugadas desde la raíz | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- |

