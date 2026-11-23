# Para decidir con Opus (Fase C3, triage)

Junta lo que hay que decidir de `fallas-jugadas.md` y `textos-dudosos.md` en un solo documento, en
tablas compactas y en orden de importancia. **No se aplicó ningún cambio de contenido.** Fuente de cada
sección: scripts/generar-fallas-jugadas.ts y scripts/verificar-textos.ts (ver esos .md para el detalle
completo, incluido "Ruido" y "No ubicables", que no están acá).

Total de esta tabla: **13 filas** (tope pedido: ~150).

## 1. Textos perdedores (13)

La jugada mencionada en el texto es legal pero pierde más de 1,5 peones según Stockfish. **Ojo**: varias
de estas (se nota por frases como "sin temer X", "no puede ser molestada por X", "pierden fuerza con X")
describen una jugada del RIVAL que el texto da por descartada, no una jugada propia — el mismo patrón que
"impide/frena/evita" (ver la cabecera de verificar-textos.ts), pero con frases que el extractor no llegó
a cubrir. Es probable que varias de estas 13 sean también falsos positivos del extractor, no errores
reales; léanse con esa sospecha antes de tocar el contenido.

| Curso | Campo | Texto (recortado) | Jugada | Evaluación |
| --- | --- | --- | --- | --- |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 f1e1 e8f7"].porQueNo["c7c6"]` | ...c6? e4 Cxe4 Cxe4 fxe4 Txe4: el blanco consiguió la ruptura y el peón de e4 negro desaparece. | Nxe4 | Stockfish (prof. 16) prefiere e2e4: +1,2 contra −7,7 (pierde 8.94 peones). Refutación: fxe4 Cg5 d5 f3 h6 |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3"].porQue` | La versión que recomiendan Lakdawala y Hansen: con h3 ya jugado, el alfil en e3 no puede ser molestado por ...Cg4. | Ng4 | Stockfish (prof. 16) prefiere b8a6: −0,6 contra −7,7 (pierde 7.09 peones). Refutación: hxg4 Cc6 f4 e5 dxe5 |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8e7 e1g1 b8c6 f1e1 c8g4 c2c3 f7f5"].porQue` | Con c3 ya jugado, el avance ...f5 es sólido: c4 y Ce5 pierden fuerza con las piezas negras tan activas. | Ne5 | Stockfish (prof. 16) prefiere d1b3: 0,0 contra −8,3 (pierde 8.33 peones). Refutación: Axd1 Ab5 Ah4 Cxc6 Axf2+ |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 a7a6 f1e2 g8e7"].porQue` | La Taimanov propiamente dicha, la que el propio Taimanov llamaba «su» variante: con ...a6 ya jugada, el caballo puede ir a e7 sin temer Cdb… | Ndb5 | Stockfish (prof. 16) prefiere c1e3: +0,8 contra −3,8 (pierde 4.61 peones). Refutación: axb5 Cxb5 Cg6 h4 Cxh4 |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8b4 e4e5 h7h6 g5d2 b4c3 b2c3 f6e4 d1g4 e8f8 d2c1"].porQue` | Retira el alfil para no perderlo con ...Cxd2. | Nxd2 | Stockfish (prof. 16) prefiere c7c5: +0,0 contra −8,4 (pierde 8.38 peones). Refutación: Axd2 h5 Df3 Re8 h4 |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 b1c3 d5e4 d4d5 c6b8"].porQueNo["c6b4"]` | a3 y el caballo termina en a6, mientras las blancas recuperan el peón con Cxe4. | Nxe4 | Stockfish (prof. 16) prefiere a2a3: +1,1 contra −1,6 (pierde 2.61 peones). Refutación: Dxd5 Dxd5 Cxd5 Ad2 Af5 |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6 f1c4 h7h6 b2b3"].porQueNo["d2d3"]` | 5.d3 g5 6.g3 Cc6!: el blanco queda peor en todas las líneas (Shaw). | Nc6 | Stockfish (prof. 16) prefiere g7g5: +1,3 contra −0,5 (pierde 1.80 peones). Refutación: Axf4 Ca5 Dd2 Cxc4 dxc4 |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6"].porQueNo["f8h6"]` | 6...Ah6? 7.d4 d6 8.Axf7+!: el ataque blanco se impone. | Bxf7+ | Stockfish (prof. 16) prefiere d2d4: 0,0 contra −2,9 (pierde 2.85 peones). Refutación: Rxf7 d4 Df6 e5 Df5 |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6"].porQueNo["c8g4"]` | f3 y Ae3 dejan al alfil sin función y las blancas con un centro fuerte. | Be3 | Stockfish (prof. 16) prefiere f2f3: +1,4 contra −8,0 (pierde 9.39 peones). Refutación: Axd1 Txd1 e6 Ch3 Dc8 |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 e7e5"].porQueNo["c7c6"]` | ...c6? e5 Cd5 Cxd5 cxd5: el blanco gana espacio y el negro no tiene contrajuego. | Nd5 | Stockfish (prof. 16) prefiere e4e5: +1,9 contra −6,7 (pierde 8.57 peones). Refutación: cxd5 e5 Ce4 c3 e6 |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 g1f3 b8c6 f1d3 f7f5 e5f6 f8f6 c1g5 e6e5"].porQueNo["d8a5"]` | ...Da5? O-O Tf8 Axh7+: el sacrificio en h7 funciona. | O-O | Stockfish (prof. 16) prefiere g5f6: +4,9 contra +2,8 (pierde 2.11 peones). Refutación: Tf8 Axh7+ Rxh7 Axe7 Cxe7 |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3"].porQue` | Desarrolla: con a3 ya jugado, el caballo no puede ser clavado con ...Ab4. | Bb4 | Stockfish (prof. 16) prefiere d7d5: −0,2 contra −7,8 (pierde 7.63 peones). Refutación: axb4 Cc6 b5 Cb4 Af4 |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8f5 c2c4"].porQue` | La misma idea que contra 2...Ag4: con el alfil afuera, c4 y Db3 contra b7. Koltanowski aconseja salirse del Colle cuando el rival da una op… | Bg4 | Stockfish (prof. 16) prefiere e7e6: −0,4 contra −2,5 (pierde 2.16 peones). Refutación: cxd5 Axf3 gxf3 Dxd5 e4 |

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

