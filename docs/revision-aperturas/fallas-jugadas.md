# Jugadas que fallan la verificación — triage (Fase C3)

Generado por `scripts/generar-fallas-jugadas.ts` a partir del campo `verificacion` que deja
`node scripts/verificar-explicaciones.ts 18` en cada `src/contenido/aperturas/*.json` (motor: ver el PR
sobre la versión de Stockfish usada). **Las propuestas son provisorias: no se aplicó ningún cambio**; las
decide Mati con Opus. Clasificación por pérdida en peones (ver la limitación de Masters en la cabecera del
script: no se pudo cruzar con la base Masters, así que algo "Grave" acá puede ser teoría conocida).

Total: **0 jugadas** — **0 graves**, **0 discutibles**, **0 ruido**.

## Graves (0)

Pierden más de 1 peón respecto de la mejor, son ilegales, o el motor ve mate.

| Curso | Jugadas desde la raíz | FEN (antes de la última jugada) | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- | --- |


## Discutibles (0)

Entre 0.3 y 1 peón.

| Curso | Jugadas desde la raíz | FEN (antes de la última jugada) | Qué dice el motor | Diferencia | Propuesta provisoria |
| --- | --- | --- | --- | --- | --- |


## Ruido (0)

Menos de 0.3 peón: probablemente teoría aceptada con una pérdida chica. Solo la cantidad
por curso; no se listan una por una.

| Curso | Cantidad |
| --- | --- |

