# Textos dudosos de aperturas (Fase C3, paso 2)

Generado por `scripts/verificar-textos.ts` con el motor del paquete npm `stockfish` (build `single`, id
UCI "Stockfish 19 WASM" — ver el PR), profundidad 16. Revisa las jugadas mencionadas en los
textos en prosa de los 96 cursos. No modifica ningún JSON. Metodología y limitaciones en la
cabecera del script. 12 excepciones revisadas (de 12 definidas en
`docs/revision-aperturas/excepciones-textos.json`): no entran en «perdedoras».

## Jugadas ilegales (76)

La primera jugada mencionada en el texto no es legal en la posición de ese nodo.

| Curso | Campo | Texto | Jugada detectada | FEN del nodo |
| --- | --- | --- | --- | --- |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 b8c6 g1f3"].porQue` | Se llega a una línea tranquila de los Dos Caballos. Cc3 lleva a la Vienesa. | Nc3 | `r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 2 4` |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 c2c4"].porQue` | Invita a ...d4: una Benoni con colores invertidos, muy parecida a 1.Cf3 d5 2.c4. | Nf3 | `rnbqkbnr/ppp2ppp/8/3pp3/2P5/6P1/PP1PPPBP/RNBQK1NR b KQkq - 0 3` |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 g1f3 b8c6 d2d3"].porQue` | Una Pirc invertida; Larsen llegaba a jugar 4.O-O, provocando ...e4 para obligar a 5.Ce1. | O-O | `r1bqkbnr/ppp2ppp/2n5/3pp3/8/3P1NP1/PPP1PPBP/RNBQK2R b KQkq - 0 4` |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5"].porQueNo["f8d6"]` | e4 Ae7 e5: el negro perdió un tiempo con el alfil. | Be7 | `rnbqk2r/pppp1ppp/3bpn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq - 2 4` |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 h7h6 g5f6 d8f6 e2e4"].porQue` | Ocupa el centro: con la dama en f6, el negro ya no puede discutir e4 con el caballo. Cc3 y Cbd2 son igual de buenas. | Nc3 | `rnb1kb1r/pppp1pp1/4pq1p/8/3PP3/5N2/PPP2PPP/RN1QKB1R b KQkq - 0 5` |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 e2e4 a6f1 e1f1 g7g6"].porQue` | El rey blanco perdió el enroque; lo hará "a mano" con g3 y Rg2. | Kg2 | `rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP3PPP/R1BQ1KNR w kq - 0 9` |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5"].porQueNo["d4c5"]` | 2.dxc5? e6 y ...Axc5: el negro recupera el peón con un buen desarrollo. | Bxc5 | `rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2` |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4 d7d6 b1c3"].porQue` | Desarrollo sencillo; Ce2-g3 o Ad3 son igual de buenos. Con tanto espacio, el blanco puede elegir el flanco donde atacar. | Ne2 | `rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4` |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4"].porQueNo["b1c3"]` | ...Cxc3 bxc3: las blancas quedan con peones doblados sin compensación. | bxc3 | `r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 1 5` |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8f5 f1d3"].porQue` | Ofrece cambiar el alfil más activo del negro; 6.Ag5 es igual de bueno. | Bg5 | `rn1qkb1r/ppp1pppp/5n2/5b2/3P4/2NB1N2/PPP3PP/R1BQK2R b KQkq - 2 6` |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e7e5 d4e5"].porQueNo["f1b5"]` | 5.Ab5+? c6 6.dxe5 Dxd1+: el negro cambia damas con el peón de e4 de ventaja. | dxe5 | `rnbqkb1r/ppp2ppp/5n2/1B2p3/3Pp3/2N2P2/PPP3PP/R1BQK1NR b KQkq - 1 5` |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 c8f5 f2f3"].porQueNo["g1e2"]` | 4.Cge2? e6 5.Cg3 Cf6: el blanco no recupera el peón ni tiene compensación. | Ng3 | `rn1qkbnr/ppp1pppp/8/5b2/3Pp3/2N5/PPP1NPPP/R1BQKB1R b KQkq - 3 4` |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 g1f3 f8c5 e2e3 b8c6"].porQue` | Ataca e5 por segunda vez: el negro recuperará el peón con ...Cgxe5. | Ngxe5 | `r1bqk2r/pppp1ppp/2n5/2b1P3/2P3n1/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 6` |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1d2"].porQue` | Defiende e4 con el caballo sin permitir la clavada ...Ab4. | Bb4 | `rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3` |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 f1c4 g8f6 e4g5 e7e6 d1e2 h7h6 g5f7 e8f7 e2e6"]` | 5.Ac4 Cgf6 6.Cg5 e6 7.De2 h6?? 8.Cxf7! Rxf7 9.Dxe6+: el rey negro queda en el centro bajo un ataque decisivo. Hay que jugar 7...Cb6. | Nb6 | `r1bq1b1r/pp1n1kp1/2p1Qn1p/8/2BP4/8/PPP2PPP/R1B1K1NR b KQ - 0 9` |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 c7c5"].porQueNo["f6e4"]` | El caballo en e4 queda expuesto: el enroque y Cd2 lo echan. | Nd2 | `rnbqkb1r/ppp2ppp/4p3/8/2pPn3/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6` |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3"].porQue` | Sistema Colle: cadena c3-d4-e3, Ad3, Cbd2 y la ruptura e4. | Bd3 | `rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3` |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4"].porQueNo["c6d4"]` | Cxd4 exd4 Dxd4 y la dama blanca queda centralizada. | exd4 | `r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5` |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5"].porQueNo["d2d3"]` | ...h6 Cf3 e4: el negro gana tiempos y cambia el alfil. | Nf3 | `r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/3P4/PPP2PPP/RNBQK2R b KQkq - 0 6` |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5 c7c6 d5c6 b7c6 b5e2"].porQueNo["b5a4"]` | ...h6 Ch3 Ag4: el alfil queda lejos y el caballo de h3, fuera de juego. | Nh3 | `r1bqkb1r/p4ppp/2p2n2/n3p1N1/B7/8/PPPP1PPP/RNBQK2R b KQkq - 1 8` |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2"].porQue` | La dama se retira a tiempo: el blanco completa el desarrollo con O-O, Tac1 y f3 para consolidar el Maroczy. | Rac1 | `r1bq1rk1/pp2ppbp/3p1np1/8/2P1P3/2N1B3/PP1QBPPP/R3K2R b KQ - 4 10` |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 f8g7 c1e3 g8f6 b1c3 f6g4 d1g4 c6d4 g4d1"].porQueNo["g4g5"]` | Dg5? h6 Dd5 Cc2+: el caballo da jaque y gana la torre de a1. | Qd5 | `r1bqk2r/pp1pppbp/6p1/6Q1/2PnP3/2N1B3/PP3PPP/R3KB1R b KQkq - 1 9` |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 c2c3 d4c3 b1c3"].porQue` | El gambito aceptado: Ac4, O-O y Db3 contra f7, con desarrollo rápido por el peón. | Bc4 | `r1bqkbnr/pppp1ppp/2n5/8/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 5` |
| Apertura Escocesa | `trampas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8e7 b1c3 g7g6 c1g5 f8g7 c3d5 g7d4 d1d4 c6d4 d5f6 e8f8 g5h6"]` | 4...Cge7 5.Cc3 g6? 6.Ag5 Ag7? 7.Cd5!! Axd4 8.Dxd4!! Cxd4 9.Cf6+ Rf8 10.Ah6, mate. | Bh6 | `r1bq1k1r/ppppnp1p/5NpB/8/3nP3/8/PPP2PPP/R3KB1R b KQ - 3 10` |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3"].porQue` | Desarrollo flexible: controla e5 y todavía no decide entre Cc3, e3 o cxd5. | Nc3 | `rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3` |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3 f8b4"].porQueNo["b8d7"]` | ...Cbd7? e4 Ag6 Cxc4: el blanco consiguió su centro sin pagar nada. | Bg6 | `r2qkb1r/pp1n1ppp/2p1pn2/4Nb2/P1pP4/2N2P2/1P2P1PP/R1BQKB1R w KQkq - 1 8` |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d7b6 c4e5 a7a5"].porQueNo["e7e6"]` | ...e6? f3 Ag6 e4: el blanco arma el centro que buscaba. | Bg6 | `r2qkb1r/pp3ppp/1np1pn2/4Nb2/P2P4/2N5/1P2PPPP/R1BQKB1R w KQkq - 0 9` |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5"].porQueNo["c6d4"]` | Cxd4 exd4 y el negro queda con un peón débil en d4. | exd4 | `r1bqk2r/1pppbppp/p4n2/4p3/B2nP3/5N2/PPPP1PPP/RNBQR1K1 w kq - 6 7` |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2"].porQue` | El Ataque Wormald: la dama defiende e4 para que el blanco pueda armar c3 y d4 sin permitir la Española Abierta (5.0-0 Cxe4). | O-O | `r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB1K2R b KQkq - 3 5` |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 f8c5 c2c3 d7d6"].porQueNo["g8f6"]` | 6...Cf6? 7.d4 exd4 8.e5 y el negro ya tiene problemas serios: el caballo de f6 no tiene buenas casillas (Johnsen y Johannessen). | exd4 | `r1bqk2r/2pp1ppp/p1n2n2/1pb1p3/4P3/1BP2N2/PP1P1PPP/RNBQK2R w KQkq - 1 7` |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3"].porQueNo["f1b5"]` | 4.Ab5? a6 5.Axc6+ bxc6: el negro tiene la pareja de alfiles y el blanco no consiguió nada. | Bxc6+ | `r1bqkbnr/ppp2ppp/2n1p3/1B1p4/3PP3/8/PPPN1PPP/R1BQK1NR b KQkq - 3 4` |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e3"].porQue` | Abre el alfil de f1 para recuperar el peón con Axc4. | Bxc4 | `rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR b KQkq - 0 3` |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c5"].porQue` | Seudo-Tarrasch: contraataca d4 enseguida. El alfil de g5 dejó de cuidar b2, así que ...Db6 puede llegar con fuerza. | Qb6 | `rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 5` |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3"].porQue` | Defiende d4 y abre el alfil de f1. Tomar el peón con cxd5 exd5 Cxd5 cae en la trampa ...Cxd5, porque el alfil de g5 queda colgado. | cxd5 | `r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 5` |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c8f5 c4d5 f5b1"].porQue` | Cambia el alfil por el caballo para recuperar el peón con ...Dxd5 sin que la dama sea molestada. | Qxd5 | `rn1qkbnr/ppp1pppp/8/3P4/3P4/8/PP2PPPP/RbBQKBNR w KQkq - 0 4` |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1e2"].porQue` | Desarrolla el alfil de forma modesta, con la idea de Ah5+. | Bh5+ | `rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPB1PP/RNBQK1NR b KQkq - 1 3` |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1e2"].porQue` | Con Ce2 las blancas guardan dos planes: enroque largo y ataque con g4, o enroque corto, f3 y e4. | Ne2 | `r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ1NPPP/R3K2R b KQ - 5 9` |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 c4d5 f6d5 d1d2 d7b6"].porQue` | La recomendación de Panczyk e Ilczuk, más clásica que 8...Ab4: el caballo libera d7 para el alfil y refuerza el que está en d5. | Bb4 | `r1b1kb1r/pp3ppp/1np1p3/q2n2B1/3P4/2N1PN2/PP1Q1PPP/R3KB1R w KQkq - 2 9` |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 g1f3"].porQue` | El desarrollo moderno: con Ae3 o Tb1 las blancas sostienen d4 y se reservan d5. | Be3 | `rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R b KQkq - 2 7` |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 c8g4"].porQue` | Variante Smyslov: ...Cfd7-b6 echa a la dama y presiona d4. | Nfd7 | `rn1q1rk1/ppp1ppbp/5np1/8/2QPP1b1/2N2N2/PP3PPP/R1B1KB1R w KQ - 1 8` |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3"].porQueNo["d4e5"]` | ...dxe5 Dxd8+ Rxd8: final sin ventaja y el blanco ya no tiene d4. | Qxd8+ | `rnbqkb1r/ppp2ppp/3p1n2/4P3/2P5/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 4` |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 e5e4"].porQue` | Crítica para evaluar 4.Cf3, aunque poco jugada: lleva a posiciones mucho más caóticas que 4...Cbd7. | Nbd7 | `rnbqkb1r/ppp2ppp/3p1n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5` |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 f6e4"].porQue` | Muy sólida: el cambio de caballos baja la tensión, y el blanco tiene que seguir peleando por e4 con e3 y Ad3 o con Cd2. | Bd3 | `rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 3 6` |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2"].porQue` | Desarrolla el alfil y se guarda Cf3 o f4. | Nf3 | `rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq - 1 5` |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1e3"].porQue` | Desarrolla y controla d4, sin Cf3. | Nf3 | `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ - 3 6` |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5"].porQueNo["g1f3"]` | Cf3? d4: el caballo de c3 tiene que irse (Ca4 o Cb1) y el negro se queda con el centro. | Na4 | `rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq - 1 3` |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1"].porQue` | Enroca. Los planes típicos son d4 para abrir el centro, o a3, Tb1 y b4 en el flanco de dama. | Rb1 | `r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 b kq - 3 6` |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 d4e5 d6e5 c4f7"].porQue` | Sacrifica en f7 para Cg5+ y Ce6, que atrapa la dama. | Ng5+ | `r1bqk2r/pppnbBpp/5n2/4p3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 7` |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f1c4 f5e4 f3e5"].porQue` | Lo mejor contra 3...fxe4: el blanco recupera el peón y apunta a f7 y a Dh5+. | Qh5+ | `rnbqkbnr/pppp2pp/8/4N3/2B1p3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4` |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 b1c3 f8b4"].porQueNo["f8e7"]` | Demasiado pasivo: 5.d5! Cb8 6.e4 y las blancas ganan espacio con tiempo. | Nb8 | `r1bqk2r/ppppbppp/2n1pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5` |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 b1c3 e7e5 g1f3 e5e4"].porQueNo["f8d6"]` | 4...Ad6? 5.d5 Ce7: el alfil tapa el peón de d y el negro queda muy pasivo. | Ne7 | `r1bqk2r/pppp1ppp/2nb1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5` |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 e7e6"].porQueNo["b7a6"]` | Axa6 Cxa6: el caballo queda mal y el negro pierde tiempo. | Nxa6 | `rn1qkbnr/p1pppppp/bp6/8/3PP3/3B4/PPP2PPP/RNBQK1NR w KQkq - 3 4` |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 c2c4 g4f3 g2f3"].porQue` | Hay que tomar con el peón de g: abre la columna g y deja el centro intacto. Con 4.exf3 el negro no tiene ningún problema (Bosch). | exf3 | `rn1qkbnr/ppp1pppp/8/3p4/2PP4/5P2/PP2PP1P/RNBQKB1R b KQkq - 0 4` |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 c2c4 d5c4 d4d5"].porQue` | Gana espacio: el peón de c4 queda adelantado y el blanco lo recuperará con e4 y Axc4. | Bxc4 | `rnbqkbnr/pp2pppp/8/2pP4/2p5/5N2/PP2PPPP/RNBQKB1R b KQkq - 0 4` |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 f1c4 g8f6"].porQue` | Lo mejor: desarrolla atacando e4, y 3...Ae7 es igual de bueno. | Be7 | `rnbqkb1r/ppp2ppp/3p1n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4` |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f1e2 f8g7 h2h4 c7c5 d4c5 d8a5 e1f1"].porQue` | El rey sale de e1 para que ...Axc3 no llegue con jaque. | Bxc3 | `rnb1k2r/pp2ppbp/3p1np1/q1P5/4P2P/2N5/PPP1BPP1/R1BQ1KNR b kq - 2 7` |
| Apertura Polaca | `notas["b2b4 e7e5 c1b2 d7d6 e2e3"].porQue` | Desarrollo flexible: siguen c4, Cf3 y Ae2, presionando e5 desde lejos. | Nf3 | `rnbqkbnr/ppp2ppp/3p4/4p3/1P6/4P3/PBPP1PPP/RN1QKBNR b KQkq - 0 3` |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 g8f6"].porQue` | Contraataca e4, que ya no puede defenderse con Cc3. | Nc3 | `r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4` |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 b2b4"].porQue` | Rodea el peón de d4: b4 y Ab2 lo presionan desde el flanco. | Bb2 | `rnbqkbnr/ppp1pppp/8/8/1PPp4/5N2/P2PPPPP/RNBQKB1R b KQkq - 0 3` |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 d7d5 f3e5 d5e4 e5c6"].porQueNo["d1h5"]` | 7.Dh5+? g6 8.Cxg6 hxg6 9.Dxh8 Dd5: el negro gana más de lo que pierde y ataca. | Nxg6 | `r1bqkbnr/ppp3pp/2n5/1B2N2Q/4p3/8/PPPP1PPP/R1B1K2R b KQkq - 1 7` |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 g8f6 d1e2 d8e7"].porQueNo["f8b4"]` | ...Ab4? c3 Ae7 d4: el blanco gana tiempo y abre el centro. | Be7 | `r1bqk2r/pppp2pp/2n2n2/1B2p3/1b2N3/5N2/PPPPQPPP/R1B1K2R w KQkq - 3 7` |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5"].porQue` | La dama queda bien en d5: Cc3 no la puede atacar porque c3 está ocupada. | Nc3 | `rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4` |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 b8d7"].porQue` | El «primo pobre» de 4...Dxd7: el caballo de d7 desarrolla, pero no presiona d4. Las blancas consiguen una ventaja de espacio sin riesgo y el negro queda sólido pero pasivo, como en un erizo. | Qxd7 | `r2qkbnr/pp1npppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5` |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 b8d7 e1g1"].porQue` | Jones juega igual que contra 4...Dxd7: primero el enroque, sin dar al negro la casilla e5 para su caballo. | Qxd7 | `r2qkbnr/pp1npppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 1 5` |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1e3"].porQue` | Ataque Inglés: Ae3, f3, Dd2 y enroque largo, para avanzar con los peones del flanco de rey. | Qd2 | `rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6` |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 d8b6"].porQueNo["b8c6"]` | Cxc6 bxc6 y e5: el caballo de f6 tiene que retirarse. | bxc6 | `r1bqkb1r/1p3ppp/p1nppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8` |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 d7c6 d2d3"].porQue` | Con la columna d abierta, d4 ya no es tan atractivo: las blancas juegan d3, h3, Cc3, Ae3 y Dd2, con Ah6. | Nc3 | `r1bqkbnr/pp2pp1p/2p3p1/2p5/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5` |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 d7c6 d2d3 f8g7 h2h3 g8f6 b1c3"].porQue` | Un plan simple pero peligroso: Ae3 (o Af4), Dd2, Ah6 para cambiar el alfil de g7, y quizás el enroque largo. | Be3 | `r1bqk2r/pp2ppbp/2p2np1/2p5/4P3/2NP1N1P/PPP2PP1/R1BQK2R b KQkq - 2 7` |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6"].porQueNo["b8c6"]` | g5 Cd7: el caballo es echado con tiempo y las blancas siguen avanzando. | Nd7 | `r1bqkb1r/pp3ppp/2nppn2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R w KQkq - 1 7` |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6"].porQueNo["g7g6"]` | g5 Ch5: el caballo queda mal en el borde. | Nh5 | `rnbqkb1r/pp3p1p/3ppnp1/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R w KQkq - 0 7` |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 e2e3"].porQue` | Lo que el propio Tarrasch consideraba correcto: no darle al negro «la ventaja del peón aislado» con cxd5. Hoy casi no se juega, pero sus posiciones aparecen muy seguido desde la Inglesa Simétrica. | cxd5 | `rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4` |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5d4 f3d4 h7h6 g5e3 f8e8 d1a4"].porQue` | La propuesta de Schandorff, más agresiva que la Db3 de Karpov: la dama ataca al caballo de c6. | Qb3 | `r1bqr1k1/pp2bpp1/2n2n1p/3p4/Q2N4/2N1B1P1/PP2PPBP/R4RK1 b - - 3 12` |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 d7d5 g5f6 e7f6 e2e3 f8d6 g2g3"].porQue` | Un enfoque más modesto: Ag2, Cd2 y Ce2, guardando la ruptura c4 para el momento oportuno. | Bg2 | `rnbqk2r/ppp2ppp/3b1p2/3p4/3P4/4P1P1/PPP2P1P/RN1QKBNR b KQkq - 0 5` |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 e7e6 e2e4 h7h6 g5f6 d8f6 b1c3"].porQue` | Más agresiva que 5.Cf3 (que lleva a una posición del Ataque Torre): deja libre el peón de f para avanzar. | Nf3 | `rnb1kb1r/pppp1pp1/4pq1p/8/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 1 5` |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5"].porQue` | Ocupa el centro: es una Nimzowitsch (1.e4 Cc6) con colores invertidos. | Nc6 | `rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 2` |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 b8d7"].porQueNo["f6e4"]` | Cxe4 dxe4 e3: el peón de e4 queda débil y el negro perdió tiempo. | dxe4 | `rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/2N5/PPP1PPPP/R2QKBNR w KQkq - 2 4` |

## Jugadas que pierden más de 1.5 peones (0)

| Curso | Campo | Texto | Jugada detectada | Evaluación | FEN del nodo |
| --- | --- | --- | --- | --- | --- |


## No ubicables — planes genéricos, para revisión humana (3889)

Textos de `planesBlancas`/`planesNegras`/`estructura`/`rupturas` que mencionan al menos una jugada, y
cualquier otro texto con «prepara» (siempre describe una jugada de varias más adelante). No se verifican
porque describen ideas generales, no la jugada exacta de un nodo (ver cabecera del script).

| Curso | Campo | Texto |
| --- | --- | --- |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6"].porQueNo["d7d5"]` | 2...d5?!, el Gambito Elefante: después de 3.exd5 el negro no recupera el peón con comodidad (si 3...Dxd5 4.Cc3 con tiempo) y lo más jugado, 3...e4 4.De2, deja al blanco con un peón de más. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 d7d5 e4d5 e5e4 d1e2"].porQue` | Clava el peón de e4 contra el rey y prepara Cc3 para ganarlo. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 d7d5 e4d5 e5e4 d1e2 g8f6"].porQue` | Defiende e4 desarrollando. Después de 5.Cc3 Ae7 6.Cxe4 el blanco queda con un peón de más (Purser, Jensen y Pape). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1h5"].porQue` | El «ataque de la dama errante»: amenaza Ac4 y Dxf7#, el Mate del Pastor. Contra una defensa correcta, la dama salió demasiado pronto y el blanco pierde tiempo. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1h5 b8c6"].porQue` | Defiende e5 desarrollando una pieza: lo más natural. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4"].porQue` | Partida del Centro: abre el juego enseguida, aunque el peón de d4 se va a cambiar muy temprano. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4"].porQue` | Toma: si el blanco recupera con la dama, ...Cc6 la ataca ganando tiempo. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 g1f3"].porQue` | En vez de exponer la dama, desarrolla y deja la recuperación de d4 para después. Muchas veces transpone a la Escocesa. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 g1f3 b8c6"].porQue` | Lo más natural: defiende d4 y, tras Cxd4, se llega a la Escocesa. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 f1b5"].porQue` | Apertura Portuguesa: el alfil sale sin atacar nada, porque todavía no hay caballo en c6. ...c6 o ...Cf6 lo cuestionan enseguida. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f1e2"].porQue` | Desarrolla de forma modesta: prepara d4 o d3 sin comprometerse. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 f2f3 g8f6"].porQue` | Desarrolla y prepara ...d5 para abrir el centro, aprovechando que f3 le quitó al caballo blanco su mejor casilla. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1h5 b8c6 f1c4"].porQue` | Amenaza mate en f7 con la dama y el alfil. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,1 contra −1,4, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d3 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (+0,0 contra −0,9, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 c2c3 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... Cf6 (+0,3 contra −0,9, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 c2c4 d7d5"].porQue` | Según Stockfish es un error: era mejor 2... Ac5 (+0,3 contra −1,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 f7f6"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,3 contra −2,1, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 f7f6 f3e5 f6e5"].porQue` | Según Stockfish es un error: era mejor 3... De7 (−2,0 contra −4,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 f8c5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,3 contra −1,8, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 d8f6"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,3 contra −1,3, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 d8f6 f1c4 f6g6 e1g1"].porQue` | Enroca: si ...Dxe4, Axf7+ gana material. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1e2"].porQue` | Defiende e4 y prepara f4, aunque tapa el alfil de f1. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1e2 b8c6 c2c3"].porQue` | Prepara d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1e2 b8c6 c2c3 g8f6 g1f3 f8c5 d2d4"].porQue` | Según Stockfish es un error: era mejor 5. Cxe5 (−0,3 contra −1,3, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d3 g8f6 f2f4 f8c5"].porQue` | Según Stockfish es un error: era mejor 3... exf4 (−0,1 contra −1,9, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f3e5"].porQue` | Según Stockfish es un error: era mejor 3. Ab5 (+0,4 contra −4,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 c2c3"].porQue` | Prepara d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 c2c3 d7d5"].porQue` | Golpea en el centro antes de que el blanco juegue d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 c2c3 d7d5 d1h5"].porQue` | Según Stockfish es un error: era mejor 3. exd5 (−0,1 contra −1,5, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 f2f3"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −1,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1g4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −1,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 d8e7 f1c4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,9 contra −2,0, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 c7c6"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,3 contra −1,2, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f1e2 g8f6 d2d3 d7d5 b1d2 f8c5 c2c3"].porQue` | Prepara b4 o d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f1e2 g8f6 d2d3 d7d5 b1d2 f8c5 c2c3 a7a5"].porQue` | Frena b4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 d1d4 b8c6 d4e3 g8f6 b1c3 f8b4 c1d2 e8g8 e1c1 f8e8 f1c4 d7d6 g1h3"].porQue` | El caballo va a f4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f1e2 g8f6 d2d3 d7d5 b1d2 f8c5 e1g1 e8g8 c2c3"].porQue` | Prepara b4 o d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 f1e2 g8f6 d2d3 d7d5 b1d2 f8c5 e1g1 e8g8 c2c3 a7a5"].porQue` | Frena b4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 c2c4 g8f6 f3e5"].porQue` | Según Stockfish es un error: era mejor 4. Cc3 (+0,0 contra −3,4, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 f2f4 f8c5 g1f3 b8c6 c2c3"].porQue` | Prepara d4. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 f1d3"].porQue` | Desarrolla en lugar de recuperar el peón. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d2d4 e5d4 f1c4"].porQue` | Desarrolla en lugar de recuperar el peón. |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 g1f3 b8c6 b2b4"].porQue` | Según Stockfish es un error: era mejor 3. Ab5 (+0,4 contra −1,3, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 d1g4 g8f6 g4f5"].porQue` | Según Stockfish es un error: era mejor 3. Dg3 (−1,1 contra −3,2, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 e1e2"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −1,2, para el bando que juega). |
| Otras partidas abiertas (1.e4 e5) | `notas["e2e4 e7e5 b2b3"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −0,6, para el bando que juega). |
| Contragambito Albin | `planesBlancas` | Fianchetto (g3, Ag2) y Cbd2 para rodear el peón de d4. |
| Contragambito Albin | `planesNegras` | Sostener la cuña de d4 con ...Cc6. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5"].porQue` | Contragambito: entrega el peón para clavar una cuña en d4 después de dxe5 d4. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4"].porQue` | La cuña en d4 quita c3 y e3 a las blancas y frena su desarrollo. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3"].porQue` | Desarrollo natural; después vienen g3, Ag2 y Cbd2. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3"].porQueNo["d1c2"]` | ...Cc6 y ...Cb4 echan a la dama con tiempo. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3"].porQue` | El fianchetto: tras ...d4, la diagonal larga quedó abierta y el alfil presiona el flanco de dama. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 c8g4"].porQue` | Prepara ...Dd7 y el enroque largo, con ideas de ...Ah3 y ...h5. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 b1d2"].porQue` | El caballo va a b3 para atacar el peón de d4. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 a2a3"].porQue` | Un arma directa contra el Albin (Schandorff): prepara b4 y Ab2 para atacar el peón de d4 y quitarle al negro la casilla b4. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 c8g4 f1g2 d8d7"].porQue` | El plan clásico: enroque largo y ataque al rey blanco con ...Ah3 y ...h5. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 c8g4 f1g2 d8d7 e1g1"].porQue` | El rey se va a un flanco donde las blancas también atacan: la partida será una carrera de ataques. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 c8g4 f1g2 g8e7"].porQue` | La preferida de Stockfish: el caballo va a g6 para recuperar el peón de e5. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 g8e7 f1g2 e7g6 e1g1"].porQue` | El rey a salvo: el peón de e5 va a caer, pero las blancas quedan mejor desarrolladas y con la gran diagonal para su alfil. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 b1d2 c8g4 a2a3"].porQue` | Prepara b4 y Ab2 contra la cuña de d4, como en la línea de 5.a3. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 a2a3 c8e6 b1d2"].porQue` | El caballo defiende c4, que el alfil atacaba, y va a b3 para atacar d4. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 a2a3 a7a5"].porQue` | Impide b4, que era el plan de 5.a3. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 b1d2 c8g4 h2h3 g4f3 d2f3 f8b4 c1d2 d8e7"].porQue` | Ataca el peón de e5 y prepara el enroque largo. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 e2e3"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (+0,7 contra −0,3, para el bando que juega). |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 e2e3 f8b4 c1d2 d4e3"].porQue` | Toma en e3: si Axb4??, exf2+ y fxg1=C+ es la trampa de Lasker. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 g8e7 f1g2 e7g6 e1g1 g6e5 f3e5 c6e5 b2b3"].porQue` | Prepara Ab2. |
| Contragambito Albin | `notas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 g1f3 b8c6 g2g3 c8e6 b1d2 d8d7"].porQue` | Prepara ...Ah3 o el enroque largo. |
| Contragambito Albin | `trampas["d2d4 d7d5 c2c4 e7e5 d4e5 d5d4 e2e3 f8b4 c1d2 d4e3 d2b4 e3f2 e1e2 f2g1n"]` | Trampa de Lasker: 4.e3? Ab4+ 5.Ad2 dxe3 6.Axb4?? exf2+ 7.Re2 fxg1=C+! Coronar en caballo con jaque; si 8.Txg1, ...Ag4+ gana la dama. |
| Defensa Alekhine | `planesBlancas` | Variante Moderna (d4 y Cf3): espacio sin extenderse demasiado. |
| Defensa Alekhine | `planesBlancas` | Variante del Cambio (exd6): una estructura más simple con algo de espacio. |
| Defensa Alekhine | `planesNegras` | Atacar el centro avanzado con ...d6, ...Cc6, ...Ag4 (contra el defensor de d4) y a veces ...f6. |
| Defensa Alekhine | `planesNegras` | Fianchetto con ...g6 y ...Ag7 en las líneas tranquilas. |
| Defensa Alekhine | `notas["e2e4 g8f6"].porQue` | Provoca el avance del peón para atacarlo después. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5"].porQue` | El caballo se centraliza: desde d5 puede ir a b6 si lo echan con c4. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6"].porQue` | Ataca el peón de e5 enseguida: es el plan de la Alekhine. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 g7g6"].porQue` | Fianchetto: el alfil de g7 va a presionar e5 y d4 desde lejos. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 c2c4 d5b6 d2d4 d7d6 f2f4"].porQue` | Ataque de los Cuatro Peones: el centro más grande posible. Muy analizado y de doble filo: el negro lo atacará con ...dxe5, ...Cc6 y ...Af5. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 c2c4 d5b6 d2d4 d7d6 e5d6 c7d6"].porQue` | Mantiene más tensión: el negro conserva ...d5 y ...e5, aunque concede a las blancas una mayoría en el flanco de dama. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 c2c4 d5b6 d2d4 d7d6 e5d6 e7d6"].porQue` | Estructura simétrica más flexible: el negro presionará d4 con ...Cc6 y ...Ae7-f6. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 c8g4"].porQue` | La jugada de los manuales: desarrolla el alfil antes de ...e6 y se prepara para tomar en f3 si conviene. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 d6e5 f3e5 c7c6"].porQue` | Prepara ...Cd7 sin permitir sacrificios en f7: hoy es una de las líneas principales. |
| Defensa Alekhine | `notas["e2e4 g8f6 b1c3 d7d5 e4d5 f6d5 f1c4"].porQue` | Analizada a fondo en tiempos de Alekhine; hoy es una variante para evitar la teoría. Tras 4...Cb6 5.Ab3 Cc6 o 4...e6, los dos bandos se desarrollan sin problemas. |
| Defensa Alekhine | `notas["e2e4 g8f6 b1c3 d7d5 e4e5 f6d7"].porQue` | Contra 3.e5 el negro elige entre ...Cfd7, ...Ce4 e incluso ...d4. Desde d7, el caballo apoya ...c5. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 c2c4 d5b6 c4c5 b6d5 f1c4 e7e6 b1c3"].porQue` | Lo más agudo: si 6...Cxc3 7.dxc3 Axc5, las blancas esperan compensación por el peón. 7...Cc6 es la forma más prudente. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6"].porQue` | Lo más usual en los Cuatro Peones: presiona d4 y prepara ...Af5. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6 g1f3"].porQue` | Desarrollo sin complicaciones: el negro tiene muchas formas de presionar el centro (...Ab4, ...Cb4, ...Ag4, ...Dd7). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6 g1f3 f8e7 d4d5"].porQue` | La más crítica según FCO: tras 10...exd5 11.cxd5 Cb4 se llega a posiciones verdaderamente caóticas. Stockfish prefiere el desarrollo tranquilo 10.Ae2. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 c5c4"].porQue` | La idea de 6...c5: el negro prepara ...Ab4 y ataca el centro blanco de frente. Es estratégicamente correcto, pero muy arriesgado. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 e5d6 c7d6 b1c3 g7g6 c1e3 f8g7 a1c1"].porQue` | El plan más popular hoy: la torre refuerza el caballo de c3 y el peón de c4, y así el blanco puede jugar d5 o b3 cuando lo necesite. |
| Defensa Alekhine | `notas["e2e4 g8f6 f1c4"].porQue` | Según Stockfish es un error: era mejor 2. e5 (+0,9 contra −1,2, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 f1c4 d5b6 c4b3 c7c5"].porQue` | Gana espacio y amenaza ...c4 para encerrar al alfil. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5"].porQue` | Desarrolla el alfil afuera antes de jugar ...e6. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6"].porQue` | Completa la estructura y prepara ...Ab4 o ...Ae7. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 e5d6 c7d6 b1c3 g7g6"].porQue` | Prepara el fianchetto para presionar d4. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6e4"].porQue` | Según Stockfish es un error: era mejor 2... Cd5 (−0,6 contra −1,5, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 c8f5"].porQue` | Desarrolla el alfil antes de cerrarlo con ...e6. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6 g1f3 d8d7"].porQue` | Prepara el enroque largo. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6 g1f3 d8d7 f1e2 e8c8 e1g1 f8e7"].porQue` | Según Stockfish es un error: era mejor 11... Rb8 (−1,1 contra −2,3, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 b8c6 c1e3 c8f5 b1c3 e7e6 g1f3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 d6e5 f4e5 c8f5 b1c3 e7e6 g1f3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Alekhine | `notas["e2e4 g8f6 d2d3"].porQue` | Según Stockfish es un error: era mejor 2. e5 (+0,9 contra −0,1, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 b2b3"].porQue` | Prepara Ab2 apuntando a la diagonal larga. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 c2c4 d5b6 b2b3"].porQue` | Refuerza c4 y prepara Ab2. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 c8f5 b1c3 e7e6 g1f3 b8a6"].porQue` | El caballo va a b4 o c7. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 b7b5"].porQue` | Según Stockfish es un error: era mejor 3... d6 (−0,7 contra −2,1, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6g8 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... d6 (−1,0 contra −2,4, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 f2f4 g7g6 b1c3 f8g7 c1e3 e8g8"].porQue` | Según Stockfish es un error: era mejor 7... dxe5 (−0,8 contra −1,9, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 g1f3 c8g4 f1e2"].porQue` | Según Stockfish es un error: era mejor 6. exd6 (+1,0 contra +0,1, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 c8g4 f1e2 c7c6 f3g5 g4f5 e2d3"].porQue` | Según Stockfish es un error: era mejor 7. e6 (+1,2 contra +0,3, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 f1c4 d5b6 c4b3 d6e5 d1h5 e7e6 d4e5 a7a5 a2a4"].porQue` | Frena ...a4. |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 g1f3 c8g4 d4d5"].porQue` | Según Stockfish es un error: era mejor 6. exd6 (+1,0 contra −0,1, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 c2c4 d5b6 c4c5"].porQue` | Según Stockfish es un error: era mejor 5. f4 (+0,8 contra −1,2, para el bando que juega). |
| Defensa Alekhine | `notas["e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 c8g4 f1e2 c7c6 e1g1 g4f3 e2f3 d6e5 d4e5 e7e6 d1e2 b8d7 c2c4 d5e7 b2b3"].porQue` | Prepara Ab2. |
| Apertura del Alfil | `planesBlancas` | Presionar f7 con el alfil y, según la respuesta, jugar d3 y Cf3 (estilo Italiana lenta) o Cc3 y f4 (estilo Vienesa). |
| Apertura del Alfil | `planesNegras` | Desarrollar con ...Cf6 y atacar e4 enseguida, la respuesta más natural. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4"].porQue` | El alfil sale antes que el caballo: apunta a f7 y deja al blanco elegir más tarde entre Cf3, Cc3 y f4. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6"].porQue` | La respuesta más natural y la preferida de Stockfish: ataca e4 enseguida. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6"].porQueNo["f8e7"]` | 2...Ae7? pierde un peón: 3.Dh5 ataca e5 y f7 a la vez (si ...g6, Dxe5). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3"].porQue` | La forma moderna: defiende e4 y evita la Petrov que se daría con 2.Cf3 Cf6. Después vienen Cf3 o Cc3, con estructura de Italiana lenta. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 c7c6 d2d4"].porQue` | Contra 2...c6, Lane recomienda abrir el centro: si ...exd4, Dxd4 y la dama queda bien, porque el negro ya no puede echarla con ...Cc6 (la casilla está ocupada por su peón). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 b1c3 b8c6 d1g4"].porQue` | El castigo a la simetría: la dama ataca g7. Lo correcto para el negro es ...Rf8 o ...g6; si 4...Df6?!, sigue 5.Cd5! con ataque decisivo. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 d1h5"].porQue` | Ataca e5 y f7 a la vez y obliga al negro a defender con la dama, que después le estorba el desarrollo. Flear la propone como sorpresa: el blanco saca el alfil y la dama antes que el caballo de g1. Stockfish prefiere el desarrollo normal con 3.Cf3. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 c7c6 g1f3 d7d5 c4b3 f8d6 e4d5"].porQue` | Para Flear, la forma más exigente de enfrentar el centro negro: después de ...cxd5 el peón de d5 queda como blanco del alfil de b3 y de las piezas blancas. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d4 e5d4 g1f3"].porQue` | El Gambito Urusov: si 4...Cc6, se llega a los Dos Caballos; si 4...Cxe4, las blancas recuperan el peón con la dama y se desarrollan muy rápido. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d4 e5d4 g1f3 f6e4 d1d4 e4f6"].porQue` | El caballo vuelve a una casilla segura. Las blancas siguen con Ag5, Cc3 y el enroque largo, con mucha presión por el peón. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 c7c6"].porQue` | Prepara ...d5 para ocupar el centro con apoyo. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d4 e5d4 g1f3 f6e4"].porQue` | Toma también el peón de e4 con el caballo. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 f2f3 f8c5"].porQue` | Desarrolla y aprovecha que f3 dejó débil la diagonal g1-a7: al blanco le va a costar enrocar. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 b8c6 b1c3 f8b4 g1e2"].porQue` | Desarrolla el caballo por e2 para poder retomar en c3 con él si el negro cambia. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 c2c3"].porQue` | Prepara d4 para ganar tiempo contra el alfil de c5. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 c2c3 d7d5"].porQue` | Golpea en el centro antes de que el blanco juegue d4. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 f8e7"].porQue` | Desarrolla de forma sólida y prepara el enroque. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 e4e5 d7d5 e5f6"].porQue` | Según Stockfish es un error: era mejor 6. Ab5+ (−0,0 contra −1,6, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... Cf6 (−0,0 contra −1,6, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 c7c6"].porQue` | Prepara ...d5 para atacar al alfil y al centro. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... Cf6 (−0,0 contra −1,1, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 b1c3 f8c5 g1e2 b7b5"].porQue` | Según Stockfish es un error: era mejor 4... O-O (−0,0 contra −1,0, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 b2b4 c5b4 f2f4"].porQue` | Según Stockfish es un error: era mejor 4. c3 (−0,2 contra −1,7, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 b2b4 c5b4 f2f4 e5f4 g1f3"].porQue` | Desarrolla e impide ...Dh4+. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 b2b4 c5b4 f2f4 e5f4 g1f3 b4e7"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (+1,6 contra +0,2, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 b2b4 c5b4 c2c3"].porQue` | Gana tiempo contra el alfil y prepara d4. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 d1e2"].porQue` | Defiende e4 con la dama y prepara f4. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 d1e2 b8c6 c2c3 g8f6 f2f4"].porQue` | Según Stockfish es un error: era mejor 5. Cf3 (−0,2 contra −3,0, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 d7d5"].porQue` | Según Stockfish es un error: era mejor 2... Cf6 (−0,0 contra −1,0, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 f8c5 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (+0,3 contra −0,9, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d4 e5d4 c2c3"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (−0,2 contra −1,5, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 b7b5 c4b5 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... c6 (−1,5 contra −2,7, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 b8c6 g1f3 f8c5 c2c3"].porQue` | Prepara d4. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 d2d3 b8c6 g1f3 f8c5 c2c3 d7d6 c4b3 a7a6 b1d2 e8g8 h2h3 c5a7 d2f1"].porQue` | El caballo va a g3. |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 f2f3 f8c5 g1e2 b8c6 b2b4"].porQue` | Según Stockfish es un error: era mejor 5. Cbc3 (−0,8 contra −2,0, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 g1e2 f6e4 e2c3"].porQue` | Según Stockfish es un error: era mejor 4. d4 (−1,3 contra −2,6, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,0 contra −1,0, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 f2f3"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,0 contra −1,3, para el bando que juega). |
| Apertura del Alfil | `notas["e2e4 e7e5 f1c4 g8f6 g1e2"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,0 contra −1,4, para el bando que juega). |
| Apertura del Alfil | `trampas["e2e4 e7e5 f1c4 f8c5 b1c3 b8c6 d1g4 d8f6 c3d5 f6f2 e1d1 e8f8 g1h3 f2d4 d2d3 d7d6 g4f3 c8h3 h1f1"]` | La «Vienesa espejo»: 2...Ac5 3.Cc3 Cc6 4.Dg4! Df6?! 5.Cd5! Dxf2+ 6.Rd1 Rf8 7.Ch3 Dd4 8.d3 d6 9.Df3 Axh3 10.Tf1!: amenaza mate en f7 y c3 encierra a la dama negra. Un clásico que Lane muestra en su introducción. |
| Apertura del Alfil | `trampas["e2e4 e7e5 f1c4 f8c5 d1h5 g8f6 h5f7"]` | 2...Ac5 3.Dh5 Cf6?? 4.Dxf7#: el mate del pastor. Lo correcto es 3...De7 o 3...Df6. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3"].porQue` | Abre la diagonal del alfil de f1 y de la dama sin comprometer el centro. Es modesta: el blanco suele seguir con d4, c4 o b3 y transpone a otras aperturas. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3 e7e5 d2d4"].porQue` | Ataca e5 enseguida: si ...exd4, exd4 y el blanco queda con un centro cómodo. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["c2c3"].porQue` | Apertura Saragossa: prepara d4 apoyado y le da a la dama las casillas b3 y a4. Es sana, aunque modesta. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["a2a3"].porQue` | Apertura Anderssen: una jugada de espera que prepara b4. No hace nada por el centro, y el negro lo ocupa con ...e5 o ...d5. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["d2d3"].porQue` | Apertura Mieses: abre la diagonal del alfil de c1, pero ocupa poco centro. Suele llevar a un Ataque Indio de Rey. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["h2h3"].porQue` | Apertura Clemenz: prepara g4 o simplemente espera. No ayuda en nada al centro. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["h2h4"].porQue` | Apertura Kádas: el peón de torre avanza sin un objetivo claro. El negro ocupa el centro con ...e5 o ...d5. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["f2f3 e7e5 b1c3"].porQue` | Lo más sólido: desarrolla y cubre e4. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3 e7e5 b1c3 d7d5 d2d4 f8b4"].porQue` | Según Stockfish es un error: era mejor 3... e4 (+0,3 contra −1,0, para el bando que juega). |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3 e7e5 c2c4 d7d6 b1c3 b8c6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3 e7e5 b1c3 d7d5 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. Dh5 (−0,3 contra −1,2, para el bando que juega). |
| Apertura Van't Kruijs (1.e3) y otras primeras jugadas raras | `notas["e2e3 e7e5 f1c4 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... d5 (+0,4 contra −1,1, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `planesBlancas` | Ag2, Cf3, O-O y elegir después el esquema: c4 (Inglesa), d3 y e4 (Ataque Indio de Rey), o d4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5"].porQue` | Acepta el desafío: el negro ocupa el centro como si fuera el blanco. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 d2d3"].porQue` | La forma más popular: impide ...e4 y prepara Cf3. Se llega a una Pirc con colores invertidos y un tiempo de más. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 d2d3 g8f6 g1f3 b8c6 e1g1 f8e7 c2c4"].porQue` | Para Stockfish lo más preciso: ataca el centro desde el flanco, como en una Pirc donde el negro tuviera la jugada. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 g1f3"].porQue` | La idea de Larsen: provoca ...e4 para atacar después el peón avanzado. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g8f6 f1g2 g7g6 e2e4"].porQue` | Impide que el negro llegue a la India de Rey: la posición se parece a una Pirc. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3"].porQue` | Lo más preciso según Stockfish: se llega a una Réti (1.Cf3 d5 2.g3), con el caballo controlando e5 antes de que el negro arme ...e5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g8f6 f1g2 d7d5"].porQue` | Ocupa el centro con un peón: el blanco tiene que decidir entre Cf3 (Réti o Catalana), c4 o d3. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g8f6 f1g2 d7d5 g1f3"].porQue` | Lo más flexible: se llega a esquemas de Réti o de Ataque Indio de Rey. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c5"].porQue` | Gana espacio: si el blanco sigue con Ag2 y d4, se llega a una Grünfeld con colores invertidos. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g8f6 f1g2 c7c6 e1g1 c8g4 d2d4"].porQue` | Ocupa el centro: con el alfil negro en g4, el blanco busca una estructura de Catalana o de peón de dama. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g8f6 f1g2 e7e6 e1g1 f8e7"].porQue` | Desarrolla de forma sólida y prepara el enroque. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c6"].porQue` | Refuerza d5 y prepara ...Ag4 o ...Af5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c6 f1g2 c8g4 e1g1 b8d7"].porQue` | Desarrolla y prepara ...e5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c6 f1g2 c8g4 e1g1 b8d7 d2d4"].porQue` | Ocupa el centro y frena ...e5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c5 f1g2 g8f6 e1g1 e7e6 d2d3"].porQue` | Prepara e4 para atacar el centro negro, como en un Ataque Indio de Rey. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g7g6"].porQue` | Prepara su propio fianchetto. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g7g6 f1g2 f8g7 e1g1 e7e5 d2d3"].porQue` | Prepara e4 o c4 para atacar el centro negro. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g8f6 f1g2 g7g6"].porQue` | Prepara su propio fianchetto. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 f7f5 e2e4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,5 contra −0,7, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 f7f5 e2e4 f5e4 d1h5"].porQue` | Según Stockfish es un error: era mejor 3. d3 (−0,5 contra −1,8, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 h7h5"].porQue` | Amenaza ...h4 para atacar el peón de g3. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 b8c6 b1c3 d7d5 d2d4"].porQue` | Ocupa el centro y frena ...e5. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g8f6 f1g2 c7c6 e1g1 c8f5 d2d3 e7e6 b1d2"].porQue` | Desarrolla y prepara e4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g8f6 f1g2 c7c6 e1g1 c8g4 d2d4 b8d7"].porQue` | Desarrolla y prepara ...e6. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 f1g2 e7e5 b2b4"].porQue` | Según Stockfish es un error: era mejor 3. c4 (−0,3 contra −1,3, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 e7e5 f1g2 d7d5 g1f3 b8c6 d2d3 g8f6 e1g1 f8e7 c2c3"].porQue` | Prepara b4 o d4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g8f6 f1g2 c7c6 e1g1 c8f5 d2d3 e7e6 b1d2 f8e7 b2b3"].porQue` | Prepara Ab2. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c5 f1g2 b8c6 d2d4 g8f6 e1g1 c5d4 f3d4 e7e5 d4c6 b7c6 c2c4 c8e6 b1c3 a8c8"].porQue` | La torre va a la columna c. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g8f6 f1g2 d7d5 g1f3 c7c6 e1g1 c8f5 d2d3 e7e6 b1d2 h7h6 b2b3"].porQue` | Prepara Ab2. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 c7c5 f1g2 b8c6 d2d4 g8f6 e1g1 e7e6 c2c4 d5c4 d1a4 c8d7 a4c4 b7b5 c4d3 c5c4 d3d1 a8c8"].porQue` | La torre va a la columna c. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g7g6 f1g2 f8g7 e1g1 e7e5 d2d3 g8e7 e2e4 e8g8 e4d5 e7d5 f1e1 b8c6 b1c3 d5e7 a1b1"].porQue` | Prepara b4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 b8c6 b1c3 d7d5 d2d4 e7e5 d4e5 d5d4 c3e4 f7f5"].porQue` | Según Stockfish es un error: era mejor 5... Dd5 (−0,1 contra −1,2, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 g7g5"].porQue` | Según Stockfish es un error: era mejor 2... g6 (−0,2 contra −1,6, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g7g6 f1g2 f8g7 c2c4 c7c5 b1c3 b8c6 g1f3 d7d6 e1g1 e7e5 a2a3"].porQue` | Prepara b4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g7g6 f1g2 f8g7 c2c4 c7c5 b1c3 b8c6 g1f3 d7d6 e1g1 e7e5 a2a3 a7a5"].porQue` | Frena b4. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 d7d5 g1f3 e7e5"].porQue` | Según Stockfish es un error: era mejor 2... g6 (−0,2 contra −1,4, para el bando que juega). |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 c7c5 f1g2 b8c6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 c7c5 f1g2 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura 1.g3 (Húngara o Benko) | `notas["g2g3 g7g5"].porQue` | Según Stockfish es un error: era mejor 1... e5 (−0,2 contra −1,3, para el bando que juega). |
| Ataque Indio de Rey | `planesBlancas` | Te1 y e5: con el peón en e5 el negro pierde el caballo de f6 como defensor y las blancas atacan en el flanco de rey (h4, Cf1-h2-g4, Af4). |
| Ataque Indio de Rey | `planesNegras` | Ganar espacio en el flanco de dama con ...c5, ...Cc6, ...b5-b4 y ...a5. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5"].porQue` | Lo más natural: ocupa el centro. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5"].porQue` | Gana espacio en el flanco de dama: el plan típico del negro. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1"].porQue` | Prepara e5 y deja libre f1 para el caballo de d2. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1"].porQueNo["f3g5"]` | ...e5 y ...Ag4: el caballo en g5 no tiene futuro. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1 a8b8 e4e5 f6d7 d2f1"].porQue` | El plan clásico de Botvinnik-Uhlmann (Moscú, 1956), que Shamkovich comenta en la introducción: e5 gana espacio y le quita f6 al caballo negro; el caballo de d2 va por f1 hacia h2, g4 o e3 para atacar el enroque. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1 a8b8 e4e5 f6d7 d2f1 b7b5"].porQue` | La respuesta típica: mientras el blanco ataca en el flanco de rey, el negro avanza en el de dama (...b4, ...a5) para abrir líneas. La partida se decide por quién llega antes. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 c7c5 g1f3 b8c6 g2g3 g7g6"].porQue` | Un esquema simétrico: el negro hace su propio fianchetto y la partida se vuelve más lenta y posicional. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 b7b6 e4e5"].porQue` | Aprovecha la lentitud de ...b6: echa al caballo antes de que el negro organice la presión sobre e5. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1 b7b5"].porQue` | La otra forma: ...b5 directo, sin preparar con ...Tb8. El blanco sigue con e5 y el caballo de d2 a f1 rumbo al flanco de rey. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 c7c5 g1f3 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 b7b6"].porQue` | Prepara el fianchetto del alfil de dama. |
| Ataque Indio de Rey | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 c7c5 g1f3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 g8e7 f1e1 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `planesBlancas` | e3, Cbd2, c3, Ad3 y enroque; después e4 para abrir el centro. |
| Ataque Torre | `planesNegras` | ...c5 y ...Db6 contra b2, el punto débil del sistema. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5"].porQue` | El Ataque Torre: clava el caballo antes de jugar c4 (que muchas veces no se juega). |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5"].porQue` | La respuesta más popular: ataca d4 y prepara ...Db6. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3"].porQue` | La forma típica: mantiene el esquema y la estructura. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 h7h6"].porQue` | Le pregunta al alfil: si Axf6, el negro tiene la pareja de alfiles. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 d8b6"].porQue` | El intento más agudo de molestar el esquema blanco: ataca b2 enseguida. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 d8b6 b1d2 b6b2 f1d3"].porQue` | Las blancas entregan el peón de b2 por desarrollo y ataque. Es muy poco claro si la compensación alcanza, pero tantos jugadores cayeron en esta posición que quedó como terreno de especialistas. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 f8e7"].porQue` | Lo que prefieren casi todos los que no estudiaron 4...Db6: posterga la elección entre ...d6 y ...d5. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 c5d4 e3d4 f8e7 b1d2 d7d6 c2c3 b8d7 f1d3"].porQue` | El esquema con el que Carlos Torre aniquiló el enroque de Lasker en Moscú, 1925: c3 y Ad3, el caballo a c4 y las torres a e1 y d1. Desarrollo simple y potencial de ataque. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 b1d2"].porQue` | La más precisa para Stockfish: prepara la ruptura central e4 o c4, según cómo se acomode el negro. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 e2e3 c7c5"].porQue` | La respuesta más activa: presiona d4 y prepara ...Cc6 y ...Db6. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 f8e7 b1d2"].porQue` | Desarrollo flexible: prepara e4 si el negro no juega ...d5. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 e2e3 c7c5 c2c3 b8d7 b1d2 f8e7 f1d3 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 e2e3 c7c5 c2c3 b8d7 b1d2 f8e7 f1d3 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 e2e3 b8d7 f1d3 f8e7 b1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 h7h6 g5h4 c7c5 e2e3 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 f8e7 b1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 h7h6 g5h4 c7c5 e2e3 c5d4 e3d4 f8e7 b1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 h7h6 g5h4 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 f8e7 b1d2 c5d4 e3d4 b7b6"].porQue` | Prepara ...Ab7. |
| Ataque Torre | `notas["d2d4 g8f6 g1f3 e7e6 c1g5 f8e7 b1d2 d7d5 e2e3 e8g8 f1d3 c7c5 c2c3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito Benko | `planesBlancas` | Aceptar y consolidar: e4, Cf3, enroque y defender el flanco de dama. |
| Gambito Benko | `estructura` | Tras ...axb5 o ...Axa6, las columnas a y b quedan abiertas para el negro; las blancas tienen un peón de más en el centro. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5"].porQue` | Aceptar es lo más directo: las blancas se quedan con el peón y tienen que defenderlo. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6"].porQue` | Sigue con el plan: abrir la columna a. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6"].porQue` | El alfil va a a6: impide el enroque cómodo de las blancas y apunta al flanco de dama. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 e2e4 a6f1 e1f1 g7g6 g2g3 f8g7 f1g2 e8g8 g1f3 b8d7"].porQue` | El plan estándar: ...Db6 o ...Da5 y ...Tfb8 contra el flanco de dama. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 e2e3"].porQue` | Acepta, pero con la idea de neutralizar el juego del negro en el flanco de dama antes de jugar e4. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 g1f3"].porQue` | Sin tomar el peón: si ...bxc4, Cc3 y e4 llevan a una Benoni normal; ...b4 o ...Ab7 son buenas respuestas. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 g7g6 e2e4"].porQue` | Lo más fuerte: sin ...d6 todavía, el avance e4-e5 se vuelve una amenaza real. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5b6 d8b6 b1c3"].porQueNo["e2e3"]` | 6.e3? e6!: el centro blanco se deshace después de 7.Cc3 exd5 8.Cxd5 Cxd5. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 f2f3 e7e6 e2e4"].porQue` | Sigue con el plan: el peón de e4 sostiene d5 y arma el centro. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6"].porQue` | Refuerza c5 y prepara ...g6. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6"].porQue` | Prepara el fianchetto: el alfil de g7 va a presionar el flanco de dama. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 e2e4 a6f1 e1f1"].porQue` | Retoma con el rey: va a hacer un enroque artificial con g3 y Rg2. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 e2e4 a6f1 e1f1 f8g7 g2g3"].porQue` | Prepara Rg2 para resguardar al rey. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 e2e4 a6f1 e1f1 f8g7 g2g3 e8g8"].porQue` | Enroca: el negro va a presionar con las torres en las columnas a y b. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 e2e3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b1c3 a6b5 e2e4 b5b4 c3b5"].porQue` | El caballo va a b5, desde donde amenaza d6 y c7. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 e2e4 a6f1 e1f1 g7g6 g2g3"].porQue` | Prepara Rg2 para resguardar al rey. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 g2g4"].porQue` | Según Stockfish es un error: era mejor 4. cxb5 (+0,6 contra −0,5, para el bando que juega). |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 f2f4"].porQue` | Prepara e4 y e5. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 g2g3"].porQue` | Prepara el fianchetto. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 f3d2"].porQue` | El caballo va a c4 para presionar d6 y b6. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 g2g3 f8g7 f1g2 b8d7 a1b1"].porQue` | Prepara b4. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5b6 d8b6 b1c3 d7d6 e2e4 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5b6 d8b6 b1c3 d7d6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Benko | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 b1d2 b5c4 e2e4 c4c3 b2c3 g7g6"].porQue` | Prepara el fianchetto. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5"].porQue` | Lo más fuerte: gana espacio y deja al peón de c5 sin pareja. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5"].porQue` | La Benoni Antigua propiamente dicha: cierra el centro y planea ...d6, ...Ae7 y ...f5. Stockfish prefiere 2...e6, que deja el centro más abierto. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4"].porQue` | Ocupa más espacio. Con el centro cerrado, el blanco puede elegir entre jugar en el flanco de rey (h3 y g4, o f4) o en el de dama (a4 y Cd2-c4). |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4 d7d6"].porQue` | Completa la cadena c5-d6-e5. El negro sigue con ...Ae7 y ...Cf6, y prepara la ruptura ...f5. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4 d7d6 b1c3 f8e7"].porQue` | Prepara ...Ag5 para cambiar su alfil malo, encerrado por sus propios peones, por el alfil bueno del blanco. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4 d7d6 b1c3 f8e7 f1b5"].porQue` | Un jaque incómodo: si ...Ad7, Axd7+ cambia el alfil bueno del negro; si ...Cd7, el caballo tapa a su propio alfil. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e5 e2e4 d7d6 b1c3 f8e7 f1b5 b8d7"].porQue` | Lo más preciso: el negro conserva su alfil de casillas blancas. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e6 c2c4 e6d5 c4d5 d7d6"].porQue` | Frena el avance d6 y prepara ...g6, ...Ag7 y ...Cf6: el esquema de la Benoni Moderna. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 g8f6 b1c3"].porQue` | Sin c4, el blanco prepara e4 enseguida y deja al caballo de f6 sin buen destino. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 d7d6 e2e4 g8f6"].porQue` | Ataca e4 y prepara ...g6 y ...Ag7, con una Benoni en la que el blanco todavía no jugó c4. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 g8f6 g1f3 c5c4"].porQue` | Según Stockfish es un error: era mejor 3... e6 (−0,6 contra −1,6, para el bando que juega). |
| Benoni Antigua | `notas["d2d4 c7c5 d4c5 b8a6"].porQue` | Prepara recuperar el peón en c5. |
| Benoni Antigua | `notas["d2d4 c7c5 g1f3"].porQue` | Según Stockfish es un error: era mejor 2. d5 (+0,7 contra −0,2, para el bando que juega). |
| Benoni Antigua | `notas["d2d4 c7c5 c2c4"].porQue` | Según Stockfish es un error: era mejor 2. d5 (+0,7 contra −0,2, para el bando que juega). |
| Benoni Antigua | `notas["d2d4 c7c5 d4c5 b7b6"].porQue` | Según Stockfish es un error: era mejor 2... e6 (−0,2 contra −1,3, para el bando que juega). |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 d7d6 e2e4 g8f6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 d7d6 e2e4 g8f6 b1c3 g7g6 g1f3 f8g7 f1b5 c8d7 a2a4 e8g8 e1g1 b8a6"].porQue` | El caballo va a c7. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e6 c2c4 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 f1d3 a7a6"].porQue` | Prepara ...b5. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 e7e6 c2c4 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 f1d3 a7a6 a2a4"].porQue` | Frena ...b5. |
| Benoni Antigua | `notas["d2d4 c7c5 d4d5 d7d6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Benoni Antigua | `notas["d2d4 c7c5 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. d5 (+0,7 contra −0,7, para el bando que juega). |
| Defensa Benoni Moderna | `planesNegras` | Presionar e4 con ...Te8 y los caballos. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6"].porQue` | Benoni Moderna: va a cambiar en d5 para crear la mayoría en el flanco de dama. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6"].porQue` | Frena e5 y abre el alfil de c8. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6"].porQueNo["a7a6"]` | Antes de desarrollar el flanco de rey: f4 y e5 llegan con fuerza. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4"].porQue` | Ataque de los Cuatro Peones: amenaza e5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3"].porQue` | Variante Clásica: desarrollo sencillo. Después vienen Ae2 y Cd2-c4 contra d6. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2"].porQue` | El caballo va a c4 a presionar d6, la debilidad del negro. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 h2h3"].porQue` | Variante Moderna: impide ...Ag4; el alfil irá a d3 para sostener e4. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5"].porQue` | Benoni Checa: cierra el centro. El plan es ...Ae7, ...Ce8 y ...f5, o cambiar alfiles con ...Ag5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7"].porQue` | La posición base de la Benoni checa: el negro cerró el centro y renunció a la actividad central, así que depende de rupturas de flanco (...f5, a veces ...b5). El blanco ataca el punto e5 con f4 o el peón de c5 con b4. Raetsky y Chetverik advierten que, por la falta de espacio, el negro muchas veces termina solo defendiéndose; Stockfish le da al blanco una ventaja clara. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 g1f3 g7g6 g2g3"].porQue` | El sistema del fianchetto: el alfil de g2 frena la ruptura ...b5 y protege el rey; el plan es Cd2-c4 contra d6. Stockfish prefiere 7.h3, que prepara e4 sin permitir ...Ag4. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 f8e8"].porQue` | Presiona e4 para frenar el avance central; ...a6, ...Cbd7 y ...b5 vendrán después. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 g1f3 g7g6"].porQue` | Prepara el fianchetto: el alfil de g7 es la pieza clave de la Benoni. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4c5 e7e6"].porQue` | Prepara ...Axc5 para recuperar el peón. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 e2e3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 e2e3 g7g6 b1c3 f8g7 g1f3 e8g8 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4 f8g7 g1f3 e8g8 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6"].porQue` | Prepara el fianchetto; el peón se recupera después. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 a7a6 a2a4"].porQue` | Impide ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f3d2"].porQue` | El caballo va a c4 para presionar d6. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 d7d6"].porQue` | Sostiene c5 y deja ...e5 o ...e6 para después. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4 f8g7 e4e5"].porQue` | Según Stockfish es un error: era mejor 8. Ab5+ (+0,9 contra −0,0, para el bando que juega). |
| Defensa Benoni Moderna | `notas["d2d4 c7c5 d4d5 b8a6"].porQue` | El caballo va a c7 para apoyar ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8a6 f2f3 a6c7"].porQue` | El caballo va a c7 para apoyar ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8a6 f2f3 a6c7 a2a4"].porQue` | Frena ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8a6 f2f3 a6c7 a2a4 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8d7 a2a4"].porQue` | Frena ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8d7 a2a4 a7a6"].porQue` | Prepara ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8d7 a2a4 a7a6 d1c2 a8b8"].porQue` | Prepara ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8d7 a2a4 a7a6 d1c2 a8b8 a4a5"].porQue` | Frena ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7 g2g3 b8d7 f1g2 a7a6"].porQue` | Prepara ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8d7 a2a4 d7e5 a1a3 a7a6"].porQue` | Prepara ...b5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7 g2g3 e8g8 f1g2 b8d7 g1e2 f6e8"].porQue` | Prepara ...f5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7 g2g3 e8g8 f1g2 b8d7 g1e2 f6e8 e1g1 g7g6"].porQue` | Prepara ...f5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 f6e4 d1c2 d8a5 b1d2 e4d6"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (−1,3 contra −2,4, para el bando que juega). |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 f8e7 g2g3 e8g8 f1g2 f6e8"].porQue` | Prepara ...f5. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4d5 d7d6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Benoni Moderna | `notas["d2d4 g8f6 c2c4 c7c5 d4c5 e7e6 g1f3 f8c5 e2e3 e8g8 a2a3"].porQue` | Prepara b4. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4"].porQue` | Lo más directo: amenaza dxe5 y abre el centro. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 f1e1"].porQue` | También bueno: recupera el peón después de ...Cd6. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3"].porQue` | Desarrollo; el plan blanco es avanzar la mayoría del flanco de rey. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 c8d7"].porQue` | Prepara ...Rc8: el rey negro busca refugio en el flanco de dama. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 d7d6"].porQue` | Lleva la partida a una Defensa Steinitz (por ejemplo 5.d4 Ad7 6.Cc3 exd4 7.Cxd4 Ae7). Es un orden más preciso que 3...d6 directo, porque las blancas ya enrocaron corto y no pueden elegir el enroque largo. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 d8e8"].porQue` | Una preparación útil: el rey vuelve a e8 y deja la columna d para las torres. Otra es 9...Ad7 con ...Rc8. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 f5e7"].porQue` | Increíblemente artificial pero importante: el caballo va a g6 y le abre al alfil de c8 el camino a f5 o g4. Las blancas tendrán que avanzar f4 y g4 en el flanco de rey, y el negro esperar el momento de ...h5. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6b7 b2b3"].porQue` | Prepara Ab2 y le quita c4 al caballo. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1e2"].porQue` | Evita el cambio de damas y deja la dama en la columna e. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 c8d7 h2h3 h7h6 b2b3"].porQue` | Prepara Ab2. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 h7h6 h2h3"].porQue` | Le quita g4 al caballo y prepara g4. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6e4"].porQue` | El caballo va a e4. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6f5"].porQue` | El caballo va a f5. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7 d1e2 e4d6 b5c6 b7c6 d4e5 d6f5 e2e4 g7g6"].porQue` | Prepara ...Ag7 y frena Dxc6. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 a7a6 b5a4 b7b5 a4b3 d7d5 d4e5 c8e6 b1d2 e4c5 c2c3"].porQue` | Prepara una retirada para el alfil. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f8c5 c2c3 e8g8 d2d4 c5b6 c1g5 d7d6 d1d3"].porQue` | La dama apoya d4 y prepara Cbd2. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 h7h6 h2h3 f5e7 c1e3 e7g6"].porQue` | El caballo va a g6. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f8c5 c2c3 e8g8 d2d4 c5b6 c1g5 h7h6 g5h4 d7d6 a2a4 a7a5"].porQue` | Frena a5. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6g4"].porQue` | Según Stockfish es un error: era mejor 4... Cxe4 (−0,3 contra −2,0, para el bando que juega). |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 b5c6 d7c6 d4e5 d6f5 d1d8 e8d8 b1c3 f5e7 h2h3 e7g6"].porQue` | El caballo va a g6. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 d2d3 d7d6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Berlinesa | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 e4d6 d4e5 d6b5 a2a4 b5d4"].porQue` | El caballo va a d4. |
| Apertura Bird | `planesBlancas` | Fianchetto (Cf3, g3, Ag2) o Stonewall (d4, e3). |
| Apertura Bird | `notas["f2f4 d7d5 g1f3"].porQue` | Desarrolla y cubre h4, el punto débil tras f4. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6"].porQue` | El alfil apunta a g3 y h2: amenaza ...Dh4+. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3"].porQue` | La única jugada que tapa h4: frena ...Dh4+. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3 g7g5"].porQue` | La continuación más intransigente del Gambito From: amenaza ...g4. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g8f6 e2e3"].porQue` | Con e3 y b3 el alfil de dama va a la gran diagonal: un plan que en la Holandesa casi no se ve. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3 f8g7 f1g2 g8f6 e1g1 e8g8 d2d3 c7c5 c2c3 b8c6 b1a3"].porQue` | La línea principal del Sistema Oso Polar (Danielsen): un Leningrado con colores invertidos. El caballo va a c2 y el plan es empujar e4; si el negro contesta ...e5, f5 abre la columna f y libera al alfil de c1. Danielsen advierte dos cosas: no dejar que el negro bloquee con ...d4, y cuidar la diagonal a7-g1, que f4 debilitó. |
| Apertura Bird | `notas["f2f4 c7c5 e2e4"].porQue` | Pasa a una Siciliana con f4, como el Ataque Gran Prix: para Stockfish, lo mejor. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3 g7g5 g2g3"].porQue` | La defensa moderna: tapa la diagonal del alfil de d6 y prepara Ag2. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3 g8h6"].porQue` | Prepara ...Cg4 para atacar h2 y e3 en el Gambito From. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3"].porQue` | Prepara el fianchetto: es la Bird con estructura de Leningrado invertida. |
| Apertura Bird | `notas["f2f4 g8f6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Bird | `notas["f2f4 g8f6 g1f3 g7g6 b2b4"].porQue` | Gana espacio y prepara Ab2 para oponerse al alfil de g7. |
| Apertura Bird | `notas["f2f4 h7h6"].porQue` | Prepara ...g5 para atacar el peón de f4. |
| Apertura Bird | `notas["f2f4 g7g6"].porQue` | Prepara el fianchetto para presionar la diagonal que debilitó f4. |
| Apertura Bird | `notas["f2f4 d7d5 e2e4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (−0,2 contra −1,8, para el bando que juega). |
| Apertura Bird | `notas["f2f4 d7d5 b2b3"].porQue` | Prepara el fianchetto de dama para controlar e5. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3 f8g7 f1g2 g8f6 e1g1 e8g8 d2d3"].porQue` | Prepara e4. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3 f8g7 f1g2 g8f6 e1g1 e8g8 d2d3 c7c5 c2c3"].porQue` | Controla d4 y prepara Da4 o e4. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3 f8g7 f1g2 g8f6 e1g1 e8g8 d2d3 c7c5 c2c3 b8c6 b1a3 a8b8 a3c2"].porQue` | El caballo va a c2. |
| Apertura Bird | `notas["f2f4 d7d5 g2g4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (−0,2 contra −4,0, para el bando que juega). |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g7g6 g2g3 f8g7 f1g2 g8f6 e1g1 e8g8 d2d3 c7c5 c2c3 b8c6 b1a3 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g8f6 e2e3 c7c5 b2b3"].porQue` | Prepara Ab2. |
| Apertura Bird | `notas["f2f4 d7d5 g1f3 g8f6 e2e3 c7c5 b2b3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Bird | `notas["f2f4 e7e5 f4e5 g8e7"].porQue` | Según Stockfish es un error: era mejor 2... d6 (−0,5 contra −1,4, para el bando que juega). |
| Apertura Bird | `notas["f2f4 c7c5 e2e4 b8c6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Bird | `notas["f2f4 h7h6 g1f3 g7g5"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−0,1 contra −0,9, para el bando que juega). |
| Apertura Bird | `notas["f2f4 g7g5"].porQue` | Según Stockfish es un error: era mejor 1... Cf6 (+0,3 contra −0,8, para el bando que juega). |
| Apertura Bird | `trampas["f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 b1c3 d8h4 g2g3 h4g3 h2g3 d6g3"]` | Gambito From: si las blancas no tapan h4 con el caballo, ...Dh4+ g3 Dxg3+ hxg3 Axg3 es mate. |
| Gambito Blackmar-Diemer | `planesBlancas` | Columna f abierta, Ad3, De1-h4 y ataque contra el enroque. |
| Gambito Blackmar-Diemer | `rupturas` | d5 o Ce5 de las blancas. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4"].porQue` | Aceptar es lo más fuerte. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3"].porQue` | Ofrece el peón de f: si ...exf3, Cxf3 con desarrollo rápido. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 g7g6"].porQueNo["c7c5"]` | dxc5 y tras el cambio de damas el rey negro pierde el enroque. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c7c6"].porQue` | También bueno: refuerza d5 y prepara ...Af5 o ...Ag4. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 e7e6 f1d3"].porQue` | Desarrollo natural: después del enroque, las blancas buscan el ataque con De1-h4 o Ag5. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8g4"].porQue` | La Defensa Teichmann: presiona el caballo que defiende d4. Stockfish prefiere el fianchetto 5...g6. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8g4 h2h3"].porQueNo["f1c4"]` | 6.Ac4? e6 y si 7.h3 Ah5: la clavada sigue y el blanco no tiene compensación por el peón. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8f5"].porQue` | El alfil sale antes de cerrar con ...e6. Stockfish prefiere el fianchetto 5...g6. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e7e5 d4e5"].porQue` | Lo correcto contra la contraofensiva central: las blancas no pierden un peón y el negro tiene que recuperar e5. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 c7c6 f3e4"].porQue` | Si el negro no acepta, el blanco recupera el peón y se queda con un buen centro. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 c8f5 f2f3"].porQue` | Sigue con el espíritu del gambito, ofreciendo el peón de f. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 e7e5 g1e2"].porQue` | Contra el Contragambito Lemberger, lo más preciso para Stockfish: desarrolla y deja la recuperación de e4 para después. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e7e5"].porQue` | Según Stockfish es un error: era mejor 4... exf3 (+0,7 contra −1,2, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 c7c6"].porQue` | Prepara ...Db6 o ...exf3 y refuerza d5. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8f5 f3e5"].porQue` | Centraliza el caballo y prepara g4. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e7e6"].porQue` | Según Stockfish es un error: era mejor 4... exf3 (+0,7 contra −0,7, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 c8g4 h2h3 g4f3 d1f3 c7c6 f3f2"].porQue` | Prepara Ac4 y el enroque. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 c1g5 c8f5 g5f6 e7f6 g2g4"].porQue` | Según Stockfish es un error: era mejor 6. De2 (−0,6 contra −1,5, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 g7g6 f1c4 f8g7 e1g1 e8g8 d1e1"].porQue` | La dama va a h4 para atacar. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 b7b6"].porQue` | Según Stockfish es un error: era mejor 5... g6 (+0,7 contra −1,0, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 d1f3"].porQue` | Según Stockfish es un error: era mejor 5. Cxf3 (−0,7 contra −1,5, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 a7a6"].porQue` | Según Stockfish es un error: era mejor 4... exf3 (+0,7 contra −0,5, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4e3"].porQue` | Según Stockfish es un error: era mejor 4... exf3 (+0,7 contra −0,3, para el bando que juega). |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 c1e3"].porQue` | Desarrolla antes de f3. |
| Gambito Blackmar-Diemer | `notas["d2d4 d7d5 e2e4 d5e4 b1c3 g8f6 f2f3 e4f3 g1f3 g7g6 f1c4 f8g7 h2h4"].porQue` | Según Stockfish es un error: era mejor 7. Ag5 (−0,7 contra −1,9, para el bando que juega). |
| Gambito Blumenfeld | `planesBlancas` | Mantener el peón de d5 y la ventaja de espacio (5.e4 o 5.Ag5). |
| Gambito Blumenfeld | `planesBlancas` | Si el negro gana el centro, atacar los peones e6 y d5 con Cc3 y e4. |
| Gambito Blumenfeld | `planesNegras` | Destruir el centro blanco con ...exd5, ...bxc4 o ...d5. |
| Gambito Blumenfeld | `rupturas` | ...exd5, ...bxc4 y ...d5 del negro. |
| Gambito Blumenfeld | `rupturas` | e4 y Cc3 de las blancas para sostener el centro. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 e2e4"].porQue` | Para Stockfish, la respuesta más incisiva: refuerza el centro y deja que el negro tome en e4 si quiere. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 e2e4"].porQueNo["b2b3"]` | Sostener la cadena con b3 es lento: ...bxc4 y ...exd5 deshacen el centro blanco. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 e2e4"].porQueNo["d1c2"]` | ...bxc4 y el negro gana la lucha por el centro antes de que llegue e4. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 c1g5"].porQue` | La que Alterman considera más fuerte: clava el caballo y ataca la defensa de d5, sin aceptar el peón. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 b1c3 b5b4 c3a4"].porQueNo["c3b1"]` | Volver a b1 pierde demasiado tiempo: el negro juega ...Ab7 y ...exd5 con ventaja. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 d5e6 f7e6"].porQue` | Lo correcto: el negro arma el centro de peones e6 y d5 que buscaba con el gambito. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 d5e6 f7e6 c4b5 d7d5"].porQue` | El centro de peones e6-d5 por el peón: el negro sigue con ...Ad6, ...O-O y ...Ab7. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 d5e6 f7e6 c4b5 d7d5 b1c3"].porQue` | Lo más fuerte para Stockfish: presiona d5 de inmediato. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 c1g5 e6d5 c4d5 h7h6"].porQue` | Pregunta al alfil: después de Axf6 Dxf6, la dama sale activa. |
| Gambito Blumenfeld | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 c1g5 e6d5 c4d5 h7h6 g5f6 d8f6 d1c2"].porQue` | Controla e4 y prepara Cbd2 y e4; 8.Cbd2 es igual de bueno. |
| Gambito Blumenfeld | `trampas["d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 b1c3 b5b4 c3b5 a7a6"]` | Si el caballo blanco, atacado por ...b4, se va a b5, ...a6 lo deja sin casillas. |
| Defensa Bogoindia | `planesBlancas` | Interponer con Ad2 (para cambiar alfiles) o Cbd2, y ganar espacio en el centro. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7"].porQue` | Defiende el alfil y prepara ...e5 o el cambio en d2. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4d2"].porQue` | El cambio simple: después ...d5 lleva a estructuras del Gambito de Dama o la Catalana. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5"].porQue` | Si Axb4 axb4, el negro gana la columna a y control del centro. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 c7c5"].porQue` | Provocador: tras Axb4 cxb4 el negro juega ...d6 y ...e5, con una posición flexible. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6"].porQue` | Prepara ...Axd2+: si Dxd2, ...Ce4 molesta; por eso las blancas suelen retomar con el caballo. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2"].porQue` | Busca a3 para quedarse con la pareja de alfiles sin peones doblados. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2 d7d5"].porQue` | Si a3, ...Ae7: el caballo de d2 queda menos activo que en c3. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2 b7b6"].porQue` | Si a3, el negro cambia en d2 y juega como en la Nimzoindia con ...Ab7. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d6 f1g2 b8d7 e1g1 e6e5 e2e3 b4d2"].porQue` | Contra 8.e3, el alfil se cambia ya: la amenaza blanca era retirar el alfil de d2 a c1 y dejar al de b4 sin salida. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d6 f1g2 b8d7 e1g1 e6e5 e2e3 b4d2"].porQueNo["e8g8"]` | 8...O-O? 9.Ac1!: el alfil de b4 queda sin retirada y las blancas amenazan atraparlo con a3. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2 e8g8"].porQue` | Para Sielecki, la mejor respuesta a 4.Cbd2: si a3, ...Ae7 y la ruptura ...d5 más adelante. (4...d6 es una alternativa sólida que pide menos teoría.) |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4d2 b1d2"].porQue` | Con el caballo en d2, el plan negro más adecuado es ...d6 con ...e5 o ...c5: el caballo no presiona d5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6 f1g2 b4d2 b1d2"].porQue` | La recaptura que recomienda FCO, que teme 7.Dxd2 Ce4 8.Dc2 Db4+ (aunque para Stockfish 7.Dxd2 también es jugable). Deja al caballo en d2 en vez de c3, y el negro sigue con ...d6 y ...e5, justo el plan en el que ese caballo está peor ubicado. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6 f1g2 b4d2 b1d2 d7d6 e1g1 e8g8 e2e4 e6e5 d4d5 c6b8"].porQue` | Un choque posicional típico: el espacio blanco contra el alfil «bueno» del negro (no está en el color de los peones centrales). El negro abre el juego con ...c6 en el flanco de dama o con ...f5 en el de rey. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6 b1c3"].porQue` | Evita el cambio en d2. Pero tras 6...Axc3 7.Axc3 Ce4 8.Tc1 O-O 9.Ag2 d6, con ...e5 en mente, la posición no es muy distinta. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d5"].porQue` | Tan válido y popular como ...d6 o ...b6: la Bogoindia se adapta al estilo de cada uno. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 c7c5 d2b4 c5b4 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6"].porQue` | Mejor que transponer a la India de Dama con ...b6: el negro prepara ...e5, y el alfil de c8 está más útil en la diagonal h3-c8 que en b7. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2 c7c5"].porQue` | Una respuesta importante: con el caballo en d2, las blancas no pueden contestar d5. Si a3, el negro cambia en d2 y juega ...cxd4 y ...Cc6. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2 c7c5 a2a3 b4d2 d1d2 c5d4 f3d4 b8c6"].porQue` | Las blancas tienen la pareja de alfiles, pero el desarrollo rápido del negro equilibra. Stockfish prefiere 7...d5, para disputar el centro de inmediato. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7"].porQue` | La retirada: el alfil de d2 queda mal ubicado (tapa al caballo de b1 y no puede ir a la gran diagonal), y el negro sigue con ...d5 o ...b6 sin haber cambiado su buen alfil. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7 g2g3 d7d5 f1g2"].porQue` | Un esquema de Catalana: el alfil de d2 está algo fuera de lugar, y el negro puede elegir entre ...c6 y ...dxc4. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d6"].porQue` | Prepara ...e5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d6 f1g2 b8d7"].porQue` | Desarrolla y prepara ...e5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 c7c5 d2b4 c5b4 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6 f1g2 b4d2 b1d2 d7d6"].porQue` | Prepara ...e5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7 g2g3 b8c6 f1g2 b4d2 b1d2 d7d6 e1g1 e8g8 e2e4 e6e5 d4d5 c6b8 f3e1 a7a5 e1d3 b8a6 a2a3"].porQue` | Prepara b4. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d5 f1g2 d5c4 d1c2"].porQue` | La dama va a recuperar el peón. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 d7d5 f1g2 d5c4 d1c2 b4d2 c2d2 c7c6 a2a4"].porQue` | Frena ...b5. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7 g2g3 d7d5 f1g2 c7c6 d1c2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4d2 d1d2 d7d5 b1c3 e8g8 e2e3 d8e7 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7 g2g3 d7d5 f1g2 c7c6 d1c2 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Bogoindia | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1c3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito Budapest | `planesBlancas` | Defender e5 con Af4 y Cf3 el mayor tiempo posible. |
| Gambito Budapest | `planesNegras` | Recuperar e5 con ...Cc6, ...Ab4+ y ...De7. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5"].porQue` | Aceptar es lo más fuerte. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 c1f4 f8b4"].porQueNo["d8e7"]` | Prematura: Cf3 y tras ...Db4+ Dd2 se cambian las damas con un peón de menos. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 e2e4 g4e5 f2f4"].porQue` | Gana espacio y echa al caballo; queda por ver si el centro es fuerte o débil. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 g1f3"].porQue` | Desarrollo simple: el negro recupera el peón con ...Ac5 y ...Cc6, pero no tiene mucho para atacar. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6e4"].porQue` | Gambito Fajarowicz: no busca recuperar el peón sino crear amenazas sobre la diagonal e1-a5. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6e4 a2a3"].porQue` | Lo más fuerte contra el Fajarowicz: le quita b4 al alfil negro, así que el caballo de e4 se queda sin apoyo y sin amenazas. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6e4 g1f3 b8c6 a2a3"].porQue` | La misma idea: impedir ...Ab4 antes de seguir el desarrollo. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 c1f4 b8c6 g1f3 f8b4 b1d2 d8e7 a2a3 g4e5 f3e5 c6e5 e2e3 b4d2 d1d2 d7d6 f1e2 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6e4 a2a3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito Budapest | `notas["d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 g1f3 f8c5 e2e3 b8c6 f1e2 e8g8 b1c3 f8e8 e1g1 g4e5 f3e5 c6e5 b2b3"].porQue` | Prepara Ab2. |
| Defensa Caro-Kann | `planesBlancas` | Avance: aprovechar el espacio que da el peón de e5. En el sistema Short (Cf3, Ae2, O-O) se desarrolla sin apuro y se juega c3 o Ae3 según cómo ataque el negro el centro con ...c5. |
| Defensa Caro-Kann | `planesBlancas` | Avance: el alfil negro de f5 es la pieza que justifica la defensa. Ideas típicas para molestarlo: Ch4 (cuando ya no se lo puede comer la dama), h4-h5, o g4 cuando la dama defiende la casilla (variante Van der Wiel, con Cc3 y Cge2). |
| Defensa Caro-Kann | `planesBlancas` | Avance: si el negro juega ...c5 y cambia en d4, el centro se abre y las piezas blancas más activas pesan; dxc5 seguido de Ae3 o b4 puede ganar casillas en el flanco de dama. |
| Defensa Caro-Kann | `planesBlancas` | Clásica: después de 5.Cg3 Ag6, avanzar h4-h5 para ganar espacio y forzar al alfil a h7, y enrocar largo con una posición más libre. |
| Defensa Caro-Kann | `planesBlancas` | Cambio: desarrollo simple (Ad3, c3, Af4, Cf3) y juego en el flanco de rey; la estructura es la Carlsbad con colores invertidos. |
| Defensa Caro-Kann | `planesNegras` | Sacar el alfil de c8 afuera de la cadena (...Af5 o ...Ag4) antes de jugar ...e6: es la gran diferencia con la Francesa. |
| Defensa Caro-Kann | `planesNegras` | Atacar la base de la cadena blanca con ...c5 (Avance) para que el centro no quede firme; preparar ...Cc6, ...Db6 y presión sobre d4. |
| Defensa Caro-Kann | `rupturas` | ...c5 contra la cadena d4-e5 (Avance), a veces preparada con ...Cd7 y ...Ce7. |
| Defensa Caro-Kann | `notas["e2e4 c7c6"].porQue` | Prepara ...d5 con el apoyo del peón de c6. A diferencia de 1...e6 (Francesa), deja abierta la diagonal del alfil de c8, que va a salir antes de cerrar con ...e6. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4"].porQue` | Ocupa el centro con los dos peones: si el negro no juega ...d5, las blancas quedan con un centro ideal. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5"].porQue` | El alfil sale de la cadena antes de ...e6, que es el objetivo de toda la Caro-Kann. Después vienen ...e6 y ...c5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3"].porQue` | Sistema Short: desarrollo tranquilo, sin debilitar nada. El caballo defiende d4 y prepara Ae2 y el enroque. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6"].porQue` | Con el alfil ya afuera, ...e6 refuerza d5 y abre la diagonal del alfil de f8, que apoya la ruptura ...c5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2"].porQue` | Desarrolla y prepara el enroque. El alfil en e2 no se ofrece para cambiar por el de f5 y, si hace falta, cubre el flanco de rey. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5 c1e3"].porQue` | Defiende d4 y deja el centro como está: si el negro cambia en d4, las blancas retoman con el caballo y quedan bien centralizadas. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 b8d7"].porQue` | Otra forma de jugarlo: primero desarrollo (...Cd7, ...Ce7) y recién después ...c5, para no dar a las blancas un blanco temprano. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 b8d7 e1g1"].porQue` | Las blancas enrocan y quedan listas para c3, Cbd2 o Ch4 según el plan del negro. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 b8d7 e1g1 g8e7"].porQue` | El caballo va a e7 (f6 está controlada) y desde ahí a g6 o f5. Con las piezas fuera, ...c5 llega con más fuerza; jugarlo antes también es posible, pero da a las blancas la opción de abrir con c4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 b1c3 e7e6 g2g4 f5g6 g1e2"].porQue` | El caballo va a e2 (no a f3) para no tapar la dama ni el peón de f, y amenaza Cf4 para atacar el alfil de g6. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3"].porQue` | Variante Clásica (o Principal): defiende e4 desarrollando una pieza. Si el negro cambia en e4, las blancas recuperan con el caballo y quedan con ventaja de desarrollo. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4"].porQue` | El caballo recupera el peón y queda centralizado; ahora el negro elige cómo desarrollarse (...Af5, ...Cd7 o ...Cf6). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5"].porQue` | La línea Clásica: el alfil sale atacando el caballo de e4 y, otra vez, queda afuera antes de ...e6. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6"].porQue` | La única retirada buena: el alfil sigue en la diagonal y, si las blancas lo cambian, el negro retoma con el peón de h y abre la columna h. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6"].porQueNo["e7e6"]` | Tras Cxf5 exf5 el negro queda con peones doblados en la columna f y sin su alfil bueno. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 h2h4"].porQue` | Amenaza h5 para atrapar o echar al alfil. Ganar espacio en el flanco de rey es el plan blanco típico de la línea. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 h2h4 h7h6 g1f3 b8d7 h4h5 g6h7 f1d3 h7d3 d1d3"].porQue` | La dama retoma centralizada. Plan típico: Af4 o Ad2, enroque largo y juego en el centro; el negro, ...e6, ...Cgf6, ...Dc7 y ...O-O-O o ...c5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4"].porQue` | Ataque Panov: ataca d5 como en un Gambito de Dama. Suele quedar un peón aislado blanco en d4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6"].porQue` | Presiona d5 y e4 antes de decidir el resto del desarrollo. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6 b1c3 e7e6"].porQue` | Refuerza d5 y prepara el desarrollo del alfil de f8: se llega a estructuras del Gambito de Dama. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 f1d3 b8c6 c2c3 g8f6 c1f4"].porQue` | Desarrolla el alfil antes de jugar Cf3, para que ...Ag4 deje b7 expuesto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7"].porQue` | Variante Karpov: prepara ...Cgf6 para poder retomar con el otro caballo, y recién después saca el alfil por f5 o g4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6"].porQue` | Lo habitual: cubre f7 y e6 y prepara ...Ad6. El precio es el alfil de c8, que queda encerrado: justo lo que buscaba 5.Cg5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b1c3 d7d5 g1f3"].porQue` | Variante de los Dos Caballos: retrasa d4. Si ...dxe4 Cxe4 Af5, Cg3 Ag6 h4 h6 y Ce5 deja incómodo al negro. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b1c3 d7d5 g1f3 c8g4"].porQue` | La respuesta más popular: clava el caballo antes de que salte a e5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 c2c4"].porQue` | Prepara una versión acelerada del Panov. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 d1e2 d7f6"].porQue` | Contra 5.De2, la respuesta que recomienda McDonald: el otro caballo va a f6, ataca d4 y el blanco ya no puede evitar el cambio de caballos. Además, la dama de e2 le tapa la salida al alfil de f1. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 f1c4 g8f6 e4g5 e7e6 d1e2 d7b6"].porQueNo["h7h6"]` | 7...h6?? 8.Cxf7!: si Rxf7, Dxe6+ y el rey negro queda expuesto, con un ataque ganador. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 a7a6"].porQue` | Una jugada de espera, como en la Eslava: el negro busca un juego cerrado (casi nunca cambia en e4) y quiere sacar el alfil de c8 fuera de la cadena de peones, si puede a g4. Contra rivales que conocen bien las líneas principales es una buena sorpresa (van der Wiel). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 a7a6 g1f3 c8g4"].porQue` | Primer objetivo cumplido: el alfil queda fuera de la cadena de peones antes de ...e6. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 a7a6 g1f3 c8g4 f1e2 e7e6 h2h3 g4f3"].porQue` | El enfoque de Speelman: con casi todos sus peones en casillas blancas, al negro no le molesta dar el alfil por el caballo. Stockfish acepta también 6...Ah5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 a7a6 g1f3 c8g4 f1e2 e7e6 e1g1 g8f6 c1g5 f8e7 e4e5"].porQue` | Lo más exigente: gana espacio y echa al caballo. Con 8.exd5 el blanco no consigue nada: el negro responde 8...Axf3 y 9...cxd5, y queda con una buena estructura para el ataque de minorías (van der Wiel). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 f2f3 d5e4"].porQue` | La respuesta que daba Reca: cambia enseguida para atacar el centro antes de que el blanco se desarrolle. (Hoy también se juega 3...e6.) |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 f2f3 d5e4 f3e4 e7e5 g1f3"].porQueNo["d4e5"]` | ...Dh4+: sin el peón de f, el rey blanco queda expuesto (si g3, Dxe4+). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b1c3 d7d5"].porQue` | Ataca e4, el plan de siempre en la Caro-Kann. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 f1d3 b8c6 c2c3 g8f6 c1f4 c8g4"].porQue` | Desarrolla el alfil antes de jugar ...e6 y clava el caballo si va a f3. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 g1f3"].porQue` | Desarrolla y se guarda la elección entre d4, d3 y Cc3. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b2b4 d7d5"].porQue` | Ataca e4 en lugar de tomar el peón. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 f1d3 g8f6"].porQue` | Según Stockfish es un error: era mejor 3... dxe4 (−0,1 contra −1,5, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 f1d3 g8f6 e4e5 f6d7"].porQue` | El caballo se retira a d7, desde donde va a apoyar ...c5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d3 d7d5 b1d2 g7g6"].porQue` | Prepara el fianchetto del alfil de casillas negras. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d3 d7d5 b1d2 g7g6 g1f3 f8g7 g2g3"].porQue` | Prepara su propio fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d3 d7d5 b1d2 g7g6 g1f3 f8g7 g2g3 e7e5 f1g2 g8e7 e1g1 e8g8"].porQue` | Enroca también. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 g1f3"].porQue` | Según Stockfish es un error: era mejor 3. e5 (+0,3 contra −0,6, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 g2g4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,3 contra −0,6, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 g2g4 d7d5 b1c3"].porQue` | Según Stockfish es un error: era mejor 3. d4 (−0,6 contra −1,6, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 g2g4 d7d5 b1c3 d5e4"].porQue` | Según Stockfish es un error: era mejor 3... d4 (+1,6 contra +0,7, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 c2c3"].porQue` | Refuerza d4 antes de desarrollar. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g5"].porQue` | Ataca f7 y amenaza e6 o h4 para molestar al alfil. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6 d1e2"].porQue` | Presiona e6 y prepara el enroque largo. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 h2h4 h7h6 g1f3 b8d7 h4h5 g6h7 f1d3 h7d3 d1d3 e7e6 c1d2"].porQue` | Desarrolla y prepara el enroque largo. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 h2h4 h7h6 g1f3 b8d7 h4h5 g6h7 f1d3 h7d3 d1d3 e7e6 c1d2 g8f6 e1c1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 h2h4 h7h6 g1f3 b8d7 h4h5 g6h7 f1d3 h7d3 d1d3 g8f6 c1d2"].porQue` | Desarrolla y prepara el enroque largo. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6 b1c3 b8c6 g1f3 e7e6 c4d5 e6d5 f1b5 f8d6"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 c2c3 e7e6 f1e2"].porQue` | Desarrolla de forma tranquila y prepara Cf3 y O-O. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6 b1c3 b8c6 c1g5 d5c4"].porQue` | Toma el peón y abre la diagonal para ...Dxd4 o ...e5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 g7g6"].porQue` | Prepara el fianchetto: es el Sistema Gurgenidze. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 g8f6"].porQue` | Según Stockfish es un error: era mejor 3... dxe4 (−0,4 contra −1,4, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 b7b5"].porQue` | Gana espacio en el flanco de dama y prepara ...b4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1d2 d8b6"].porQue` | Presiona b2 y d4 antes de cambiar en e4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b1c3 d7d5 h2h3"].porQue` | Prepara Cf3 sin permitir la clavada ...Ag4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 c1e3"].porQue` | Según Stockfish es un error: era mejor 3. e5 (+0,3 contra −0,5, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1d2 d5e4 d2e4 h7h6"].porQue` | Impide Cg5 y Ag5 antes de desarrollarse. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b2b3"].porQue` | Prepara Ab2 apuntando a la diagonal larga. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6 d1e2 h7h6 g5e4 f6e4 e2e4 d7f6 e4e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6 d1e2 h7h6 g5e4 f6e4 e2e4 d7f6 e4e2 d8c7 c1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6 d1e2 h7h6 g5e4 f6e4 e2e4 d8c7 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 g8f6 f1d3 e7e6 g1f3 f8d6 d1e2 h7h6 g5e4 f6e4 e2e4 d8c7 e1g1 b7b6 e4g4 e8f8 b2b3"].porQue` | Prepara Ab2. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 d7f6"].porQue` | Lleva el caballo de d7 a f6 y evita las trampas con Ce6. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 b7b5 a2a3"].porQue` | Frena ...b4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 b7b5 a2a3 a7a6"].porQue` | Prepara ...dxe4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 b8a6 b1c3 a6c7 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 g7f6 c2c3 c8f5 g1f3 b8d7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−0,3 contra −3,0, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 g7f6 c2c3 c8f5 g1f3 d8c7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 g7f6 c2c3 c8f5 g1f3 d8c7 g2g3 b8d7 f1g2 e8c8"].porQue` | Según Stockfish es un error: era mejor 9... Ag7 (−0,9 contra −1,9, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 g7f6 c2c3 c8f5 g1f3 e7e6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 g7f6 c2c3 c8f5 g1f3 e7e6 g2g3 d8d5 f1g2 d5c4"].porQue` | La dama se instala en c4 y frena el desarrollo blanco. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4f6 e7f6 c2c3"].porQue` | Sostiene d4 y prepara Ad3. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b1c3 d7d5 g1f3 c8g4 h2h3 g4f3 d1f3 e7e6 d2d3 b8d7 c1d2 g8f6 g2g4 h7h6"].porQue` | Frena g5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 e4g5 h7h6 g5f7"].porQue` | Según Stockfish es un error: era mejor 6. C5f3 (−0,1 contra −2,4, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5 c1e3 d8b6 b1c3 b8c6 e1g1 b6b2 d1e1"].porQue` | La dama defiende c3 y prepara Tb1. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 b1c3 e7e6 g2g4 f5g6 g1e2 c6c5 h2h4 h7h5"].porQue` | Frena h5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 g1f3 d7d5 d2d3 d5e4 d3e4 d8d1 e1d1 g8f6 b1d2 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 c2c4 d7d5 e4d5 c6d5 c4d5 g8f6 b1c3 f6d5 g1f3 b8c6 f1b5 e7e6 e1g1 f8e7 d2d4 e8g8 f1e1 c8d7 b5d3 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1d2 d5e4 d2e4 c8f5 e4g3 f5g6 g1h3"].porQue` | El caballo va a f4 por h3. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 b1d2 d5e4 d2e4 c8f5 e4g5 f5g6 g1f3 h7h6 g5e6"].porQue` | Según Stockfish es un error: era mejor 7. Ch3 (+0,2 contra −1,1, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 c2c4 d7d5 e4d5 c6d5 c4d5 g8f6 d1a4 b8d7 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 c2c4 d7d5 e4d5 c6d5 c4d5 g8f6 d1a4 b8d7 b1c3 g7g6 g1f3 f8g7 f1c4 e8g8 d2d3 a7a6"].porQue` | Prepara ...b5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 c2c4 d7d5 e4d5 c6d5 c4d5 g8f6 d1a4 b8d7 b1c3 g7g6 g1f3 f8g7 f1c4 e8g8 d2d3 a7a6 a4a3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 g2g4"].porQue` | Según Stockfish es un error: era mejor 4. Ad3 (+0,1 contra −0,8, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g2g4 f5e4"].porQue` | El alfil va a e4. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1e2 e7e6 e2g3 f5g6 h2h4 h7h5"].porQue` | Frena h5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 h2h4 h7h5"].porQue` | Frena h5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 h2h4 h7h5 c2c4 e7e6 b1c3 g8e7 g1e2 b8d7 e2g3 f5g6 c1g5 d8b6 a1c1"].porQue` | La torre va a la columna c y deja el peón de b2. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 b2b4 d7d5 b4b5"].porQue` | Según Stockfish es un error: era mejor 3. e5 (−0,1 contra −1,9, para el bando que juega). |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 h2h4 h7h5 f1d3 f5d3 d1d3 d8a5 b1d2 e7e6 g1f3 g8h6"].porQue` | El caballo va a f5. |
| Defensa Caro-Kann | `notas["e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 h2h4 h7h5 f1d3 f5d3 d1d3 d8a5 b1d2 e7e6 g1f3 g8h6 e1g1 h6f5 d2b3 a5a6 d3d1 b7b6"].porQue` | Prepara ...c5. |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 d1e2 g8f6 e4d6"]` | Contra la Variante Karpov, 5.De2 Cgf6?? 6.Cd6 es mate de la coz: el peón de e7 no puede tomar porque está clavado por la dama de e2, y el rey no tiene casillas. Lo correcto es 5...Cdf6. McDonald cuenta que esta celada cayó incontables veces, incluso en una partida de consulta de Keres. |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 e4e5 c8g4 d1g4"]` | Tras 3.e5, el alfil a g4 no está defendido: la diagonal d1-g4 está abierta porque el peón de e2 ya salió. 3...Ag4?? 4.Dxg4 gana una pieza. |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 e4g5 h7h6 g5e6 f7e6 d1h5 g7g6 h5g6"]` | 5.Cg5 h6 6.Ce6! fxe6? 7.Dh5+ g6 8.Dxg6, mate: el ...h6 prematuro debilitó la diagonal e8-h5. Después de 6.Ce6 hay que jugar 6...Da5+ o 6...Db6 y no tomar el caballo. |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7 g1f3 g8f6 e4f6 d7f6 f1c4 c8g4 c4f7 e8f7 f3e5 f7e8 e5g4"]` | Variante Karpov con 5.Cf3 Cgf6 6.Cxf6+ Cxf6 7.Ac4: si 7...Ag4?, 8.Axf7+! Rxf7 9.Ce5+ y Cxg4, y el blanco gana un peón. Stockfish prefiere 7...Af5. |
| Defensa Caro-Kann | `trampas["e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 g8f6 d1d3 e7e5 d4e5 d8a5 c1d2 a5e5 e1c1 f6e4 d3d8 e8d8 d2g5 d8c7 g5d8"]` | Réti–Tartakower (Viena, 1910): 5.Dd3 e5 6.dxe5 Da5+ 7.Ad2 Dxe5 8.O-O-O Cxe4?? 9.Dd8+!! Rxd8 10.Ag5+ (jaque doble) Rc7 11.Ad8#. Si 10...Re8, 11.Td8#. |
| Apertura Catalana | `planesBlancas` | Presionar la diagonal larga con el alfil de g2 y la dama (Dc2, Da4). |
| Apertura Catalana | `planesNegras` | Liberar el alfil de c8 (...b6 y ...Ab7, o ...dxc4 seguido de ...c5 o ...b5 con cuidado). |
| Apertura Catalana | `rupturas` | ...c5 y ...dxc4 del negro. |
| Apertura Catalana | `rupturas` | e4 y Ce5 de las blancas. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3"].porQue` | Prepara el fianchetto del alfil de rey: la idea de la Catalana. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3"].porQue` | Desarrolla y prepara el enroque; el peón se recupera después con Da4+ o Ce5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7 e1g1 e8g8 d1c2 a7a6"].porQue` | Prepara ...b5: si las blancas recuperan el peón, el alfil irá a b7 a neutralizar al de g2. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7 e1g1 e8g8 d1c2 a7a6 c2c4 b7b5 c4c2 c8b7"].porQue` | El alfil de b7 neutraliza al de g2; después ...Cbd7 y ...c5 completan el desarrollo. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7"].porQue` | Catalana Cerrada: desarrolla y prepara ...c6 y ...b6, o la ruptura ...c5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6"].porQue` | Presiona d4 y deja preparado ...Tb8 y ...b5 para sostener el peón de más. Raetsky y Chetverik estudian dos respuestas: 6.Da4, que recupera c4 enseguida, y el enroque seguido de Cc3, donde el blanco juega un tiempo con un peón menos a cambio de desarrollo. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6 d1a4"].porQue` | Ataca c4 y clava el caballo de c6: el blanco recupera el peón sin perder tiempo. Stockfish la prefiere al enroque. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6 e1g1 a8b8"].porQue` | Prepara ...b5 para quedarse con el peón de c4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6 e1g1 a8b8 b1c3"].porQue` | La respuesta que los autores consideran más fuerte: desarrolla y prepara e4 o Ce5 contra el flanco de dama negro, que con ...b5 queda debilitado. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b7b5"].porQue` | Sostiene el peón de c4 de inmediato, a costa de debilitar el flanco de dama. Lo normal es atacar la cadena con a4 antes de que el negro la consolide con ...c6 y ...Ab7. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b7b5 a2a4"].porQue` | Ataca la cadena de peones antes de que se consolide: el negro tiene que gastar un tiempo en sostenerla (...c6), y la columna a puede abrirse a favor del blanco. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 c8d7"].porQue` | Lleva el alfil de dama, que en el Gambito de Dama suele quedar encerrado, a c6, donde se enfrenta al de g2. Contra 6.Ce5 Ac6 7.Cxc6 Cxc6, los autores no ven ventaja blanca con 8.Da4; Stockfish da apenas una pequeña ventaja blanca. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 c8d7 f3e5 d7c6"].porQue` | El alfil llega igual a c6: si Cxc6, el negro recaptura con el caballo y queda bien desarrollado. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 c7c6"].porQue` | Prepara ...b5 para sostener el peón, pero es poco común: según Raetsky y Chetverik, con 6.Ce5 Ab4+ 7.Ad2 el blanco recupera c4 con una ventaja duradera, y Stockfish coincide en que el blanco queda mejor (unos +0,4). |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8b4"].porQue` | Un jaque intermedio que molesta la coordinación blanca y el peón de d4. Lo habitual es 6.Ad2; también se juega 6.Cbd2. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7"].porQue` | Desarrolla y prepara el enroque sin apurarse a defender el peón de c4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7 e1g1"].porQue` | Enroca: el blanco recupera el peón de c4 más adelante con Dc2 o Da4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7 e1g1 e8g8 d1c2"].porQue` | Prepara recuperar el peón de c4 con la dama. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2"].porQue` | Controla e4 y prepara Ab2 o Af4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 f8b4 c1d2 b4e7 f1g2 d7d5 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 c7c6 d1c2"].porQue` | Controla e4 y prepara Cbd2 o Tad1. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6"].porQue` | Frena el peón de d5 y abre el alfil de c8. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1"].porQue` | Enroca: el blanco suele seguir con Cd2 y Cc4, o con e4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2 b7b6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 c7c6 d1c2 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 a7a6 a2a4"].porQue` | Frena ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 c1f4 b7b6 b1d2"].porQue` | Desarrolla y prepara e4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b2b3 b7b6 f1d1"].porQue` | Ocupa la columna d, preparando e4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 c1g5"].porQue` | Clava el caballo de f6 antes de Cc3. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 a7a6"].porQue` | Impide Ab5 y Cb5 y prepara ...d5 o ...b5. |
| Apertura Catalana | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 f1d1 b7b6 c1f4 c8b7 b1c3 d5c4 f3d2"].porQue` | El caballo va a recuperar el peón. |
| Apertura Catalana | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 b1c3 c7c6 d1d3 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Catalana | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 b1c3 c7c6 d1d3 b7b6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Catalana | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 b1c3 c7c6 d1d3 b7b6 b2b3 c8b7 c1b2 a8c8"].porQue` | La torre va a la columna c. |
| Apertura Catalana | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 b1c3 c7c6 d1d3 b7b6 e2e4 c8a6 b2b3 a8c8"].porQue` | La torre va a la columna c. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2 b7b5"].porQue` | Según Stockfish es un error: era mejor 8... b6 (−0,4 contra −1,3, para el bando que juega). |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2 b7b5 c4c5 a7a5"].porQue` | Prepara ...b4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 c7c6 d1c2 b7b6 b1d2 c8b7 e2e4 b8d7 e4e5 f6e8 c4d5 c6d5 f1e1 a8c8"].porQue` | La torre va a la columna c. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 d5c4 d1c2 a7a6 a2a4"].porQue` | Frena ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 f8b4 c1d2 b4e7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 d1c2 b8d7 d2f4 b7b6 b1d2 c8a6 f1d1 a8c8"].porQue` | La torre va a la columna c. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 f8b4 c1d2 b4e7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 d1c2 b8d7 d2f4 b7b6 b1d2 c8a6 f1d1 a8c8 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 a7a6 a2a4 b8d7 f3d2 f8e8 h2h3 a8b8"].porQue` | Prepara ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6 d1a4 f8b4 c1d2 f6d5 d2b4 d5b4 e1g1 a8b8 b1a3"].porQue` | El caballo va a recuperar c4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 b8d7 c1f4 d8e7 h2h3 a7a6"].porQue` | Prepara ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8b4 c1d2 a7a5 d1c2"].porQue` | La dama va a recuperar c4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8b4 c1d2 a7a5 d1c2 b4d2 c2d2 c7c6 a2a4"].porQue` | Frena ...b5. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8b4 c1d2 c7c5 d2b4 c5b4 f3e5"].porQue` | El caballo va a recuperar c4. |
| Apertura Catalana | `notas["d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 d1a4 b8d7 a4c4 a7a6"].porQue` | Prepara ...b5. |
| Defensa Checa (Pribyl) | `planesBlancas` | Ae3, Dd2 y f3 para enrocar largo y avanzar en el flanco de rey. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6"].porQue` | Prepara ...b5 o ...Da5, sin fianchetto. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 g1f3 c8g4 f1e2 e7e6 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 c1e3"].porQue` | Prepara Dd2 y el enroque largo. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 c1e3 b8d7"].porQue` | Prepara ...e5. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 c1e3 b8d7 f2f3 e7e5 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 a2a4"].porQue` | Impide ...b5. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 f2f4 c8g4"].porQue` | Clava el caballo de g1 antes de que salga. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 f2f4 b8d7"].porQue` | Prepara ...e5 con apoyo del caballo. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 g1f3 b8d7"].porQue` | Prepara ...e5. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 c1e3 d8a5"].porQue` | Presiona el caballo de c3 y prepara ...e5. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 f2f4 d8a5 f1d3 e7e5 g1f3 e5d4 f3d4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Checa (Pribyl) | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6 f2f4 d8a5 f1d3 e7e5 g1f3 b8d7 e1g1 f8e7 g1h1 e8g8 d1e1"].porQue` | La dama va a g3 o h4 por e1. |
| Defensa Chigorin | `planesBlancas` | Cf3 y cxd5 para que la dama negra salga temprano y ganar tiempos sobre ella. |
| Defensa Chigorin | `planesNegras` | Presión sobre d4 con ...Ag4 (cambiando el caballo de f3) y ...e5. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 g1f3"].porQue` | Desarrolla y controla e5, la ruptura que busca el negro. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 g1f3"].porQueNo["c1g5"]` | ...h6 y ...g5 echan al alfil con tiempo. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 c4d5 d8d5 e2e3 e7e5"].porQue` | Lo vital contra cxd5: ...e5 enseguida, antes de que Cc3 gane tiempo sobre la dama. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 g1f3 c8g4"].porQue` | El plan típico: cambiar el alfil por el caballo para presionar d4. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 b1c3 g8f6 g1f3 e7e6"].porQue` | Lo más sólido: el negro abre la diagonal del alfil de f8 y no se compromete con el de c8. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 b1c3 g8f6 g1f3 e7e6"].porQueNo["c8g4"]` | 4...Ag4 busca problemas: 5.cxd5 Cxd5 6.e4 Axf3 7.gxf3 Cxc3 8.bxc3 e5 9.Tb1! y la presión sobre b7 y el centro deja al blanco claramente mejor (Ribli, citado por Schandorff). |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 g1f3 c8g4 c4d5 g4f3 g2f3 d8d5 e2e3"].porQueNo["b1d2"]` | 6.Cd2? e5!: el centro blanco se deshace y el negro sigue con ...O-O-O. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 g1f3 c8g4 b1c3 e7e6"].porQue` | Lo más sólido: sostiene d5 y deja el cambio en f3 para después. |
| Defensa Chigorin | `notas["d2d4 d7d5 c2c4 b8c6 c4d5 d8d5 e2e3 e7e5 b1c3 f8b4 c1d2 b4c3 b2c3"].porQue` | Peones doblados, pero el centro blanco se refuerza. Retomar con el alfil también es posible. |
| Defensa Chigorin | `notas["d2d4 b8c6 d4d5"].porQue` | Lo más fuerte: echa al caballo y gana espacio. |
| Defensa Chigorin | `notas["d2d4 b8c6 d4d5 c6e5"].porQue` | La mejor casilla: centralizado. El blanco va a seguir hostigándolo con f4 o e4. |
| Sistema Colle | `planesBlancas` | Preparar e4 con Cbd2, Te1 y Dc2 o De2. |
| Sistema Colle | `planesNegras` | ...c5 y ...Cc6 para presionar d4. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 c7c5 b2b3"].porQue` | Colle-Zukertort: el alfil va a b2. El plan es Ce5 y f4, o c4 para jugar con peones colgantes. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c8f5 c2c4"].porQue` | Con el alfil de c8 afuera, b7 quedó débil: 4.c4, con la idea de Db3, es mejor que seguir con Ad3 (Koltanowski, lección 4). |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c7c5 c2c3"].porQue` | Sostiene d4 sin comprometerse: el alfil irá a d3 y después llegará e4. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c7c5 c2c3 b8d7"].porQue` | Para Koltanowski, la defensa más incómoda contra el Colle: ...Cbd7, ...g6, ...Ag7 y ...e5. El caballo en d7 apoya e5 sin estorbar al alfil, que vigila desde g7. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c7c5 c2c3 b8d7"].porQueNo["c5c4"]` | 4...c4?! saca la presión sobre d4 y permite 5.b3!: si el negro cambia, el blanco abre la columna a; para sostener c4 tiene que jugar ...b5 y después a4 lo debilita (Koltanowski). |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 g7g6 c2c4"].porQue` | Para Stockfish, lo más preciso contra el esquema de India de Rey: pasar a un Gambito de Dama con c4. Con el alfil en g7, la ruptura e4 del Colle pierde algo de fuerza. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 b7b6 e1g1"].porQue` | Contra el fianchetto de dama, el blanco enroca primero y elige después entre Cbd2 con e4 y el esquema Zukertort con b3. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6"].porQue` | Desarrollo simétrico: el alfil de d6 frena un futuro e4 y apunta al flanco de rey blanco. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 e1g1"].porQue` | Enroca antes de decidir entre el Colle clásico (c3 y e4) y el Zukertort (b3 y Ab2). |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 e1g1 e8g8 b2b3"].porQue` | Esquema Zukertort: el alfil de c1 irá a b2, desde donde apunta al enroque negro por la diagonal larga, y el caballo suele saltar a e5. |
| Sistema Colle | `notas["d2d4 g8f6 g1f3 e7e6 e2e3"].porQue` | Sistema Yusupov-Rubinstein: esquema de Colle contra ...e6, a menudo con b3 y Ab2 como en el Colle-Zukertort. |
| Sistema Colle | `notas["d2d4 g8f6 g1f3 g7g6 e2e3 f8g7 f1d3 d7d6"].porQue` | Prepara ...e5 contra el esquema Colle. |
| Sistema Colle | `notas["d2d4 g7g6 g1f3 f8g7 e2e3 c7c5 f1d3 d8a5"].porQue` | Según Stockfish es un error: era mejor 4... d5 (+0,1 contra −0,8, para el bando que juega). |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 b2b3 c7c5 c1b2 b8c6 f1d3 f8d6 b1d2 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 b2b3 c7c5 c1b2 b8c6 f1d3 f8d6 b1d2 e8g8 e1g1 b7b6 a2a3 c8b7 f3e5 a8c8"].porQue` | La torre va a la columna c. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 b2b3 c7c5 c1b2 b8c6 f1d3 f8d6 e1g1 e8g8 a2a3 b7b6"].porQue` | Prepara ...Ab7. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 b7b6 e1g1 c8b7 b2b3"].porQue` | Prepara Ab2. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 b7b6 e1g1 c8b7 b2b3 f8d6 c1b2 e8g8 c2c4 b8d7 b1c3 a7a6 a1c1"].porQue` | La torre va a la columna c. |
| Sistema Colle | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c7c5 c2c3 b8d7 b1d2 g7g6"].porQue` | Prepara el fianchetto. |
| Sistema Colle | `trampas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 b1d2 b8d7 e1g1 e8g8 e3e4 d5e4 d2e4 f6e4 d3e4 e6e5 d4e5 d7e5 f3e5 d6e5 e4h7 g8h7 d1h5 h7g8 h5e5"]` | Si el negro copia las jugadas del blanco (4...Ad6, ...Cbd7, ...0-0) y después de 7.e4 dxe4 8.Cxe4 Cxe4 9.Axe4 busca liberarse con 9...e5?, viene 10.dxe5 Cxe5 11.Cxe5 Axe5 12.Axh7+! Rxh7 13.Dh5+ Rg8 14.Dxe5: el blanco recupera el alfil y gana un peón (Koltanowski). |
| Partida de los cuatro caballos | `planesBlancas` | Española de cuatro caballos: Ab5, enroque y d3, juego tranquilo. |
| Partida de los cuatro caballos | `planesNegras` | Contra Ab5, el contragambito Rubinstein (...Cd4) o la simétrica (...Ab4). |
| Partida de los cuatro caballos | `planesNegras` | Contra d4, tomar y desarrollarse con ...Ab4. |
| Partida de los cuatro caballos | `estructura` | Simétrica al principio; tras d4 y ...exd4 se abre el centro. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3"].porQue` | Desarrolla el otro caballo antes de decidir dónde va el alfil. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6"].porQue` | El negro también desarrolla: los cuatro caballos. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5"].porQueNo["f3e5"]` | El Gambito Halloween: el caballo se entrega por un peón para echar a los caballos negros con d4 y e5. Bien defendido (...Cxe5 d4 Cg6 e5 Cg8), el negro conserva la pieza de más y Stockfish le da ventaja clara. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4"].porQue` | Toma y prepara ...Ab4 contra el caballo de c3. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 b4c3"].porQue` | Elimina el caballo antes de que salte a d5; los peones doblados blancos le quitan juego en el flanco de dama. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 c6d4 b5a4"].porQue` | La retirada habitual en la práctica: mantiene el alfil en la diagonal. Stockfish prefiere simplificar con Cxd4. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 c6d4 b5a4 f8c5"].porQue` | Variante Rubinstein: desarrolla sin preocuparse por e5. Stockfish prefiere ...c6, más sólido. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4 c3d5"].porQue` | Gambito Belgrado: evita la clavada ...Ab4 a costa de complicaciones muy agudas. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 f8c5 f3e5"].porQue` | El truco de la horquilla: si ...Cxe5, d4 recupera la pieza con un centro ideal. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 a2a3"].porQue` | El «truco avanzado» que Pinski recomienda a quien no quiere teoría: una jugada de espera que le quita al negro ...Ab4 y ...Cd4, las armas de la Española de cuatro caballos. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f3e5 c6e5 d2d4 e5g6"].porQue` | La retirada correcta contra el Gambito Halloween: desde g6 el caballo no queda expuesto a d5 ni a f4. Después de 6.e5 Cg8 el negro devuelve tiempo, pero sigue con una pieza de más. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1c4 f6e4"].porQue` | El truco de la horquilla, ya conocido de la Italiana: si 5.Cxe4, ...d5 recupera la pieza con buen juego. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4 c3d5 f8e7"].porQue` | El desarrollo simple: el negro no tiene por qué meterse en las complicaciones de 5...Cxe4. Stockfish prefiere algo más 5...Cb4. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 c6d4 b5e2"].porQue` | Retira el alfil y evita el cambio en b5. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d8e7"].porQue` | Defiende e5 con la dama y prepara ...Cd8 y ...Ce6. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d8e7 c3e2"].porQue` | Evita el cambio en c3 y lleva el caballo hacia g3. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8c5 e1g1 e8g8 f3e5"].porQue` | Toma en e5 aprovechando la horquilla con d4 si el negro retoma. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 a7a6 b5c6 d7c6 f3e5 f6e4 c3e4 d8d4 e1g1 d4e5 f1e1"].porQue` | Pone la torre detrás del caballo de e4: si el caballo se mueve, la torre ataca a la dama. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4 f3d4 f8b4 d4c6 b7c6 f1d3 d7d5 e4d5 e8g8"].porQue` | Enroca antes de recuperar el peón. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 b4c3 b2c3 d8e7"].porQue` | Prepara ...Cd8-e6 para echar al alfil de g5. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 b4c3 b2c3 d8e7 f1e1"].porQue` | Prepara d4 apoyando e4. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 b4c3 b2c3 d8e7 f1e1 c6d8"].porQue` | El caballo va a e6 para echar al alfil de g5: es la maniobra de Metger. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 c6e7 f3h4"].porQue` | Prepara f4 y le quita g6 al caballo negro. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 b4c3 b2c3 d7d6 f1e1"].porQue` | Prepara d4. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g7g6"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,1 contra −1,0, para el bando que juega). |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g7g6 d2d4"].porQue` | Abre el centro antes de que el alfil llegue a g7. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,1 contra −1,5, para el bando que juega). |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 c3d5"].porQue` | Centraliza el caballo y busca cambios. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c3e2 c6e7 c2c3 b4a5 e2g3"].porQue` | El caballo va a g3. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c3e2 c6e7 c2c3 b4a5 e2g3 c7c6 b5a4 e7g6"].porQue` | El caballo va a g6. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 d2d4 e5d4 f3d4 f8b4 d4c6 b7c6 f1d3 d7d5 e4d5 e8g8 e1g1 c6d5 c1g5 c7c6 c3a4"].porQue` | El caballo va a c5. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 b5c6 d7c6 d2d3 f6d7 c3e2"].porQue` | El caballo va a g3. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 b5c6 d7c6 d2d3 f6d7 c3e2 f8e8 e2g3"].porQue` | El caballo va a f5. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f1b5 f8b4 e1g1 e8g8 d2d3 d7d6 c1g5 c8e6"].porQue` | Según Stockfish es un error: era mejor 7... Ce7 (+0,0 contra −0,9, para el bando que juega). |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f3e5 c6e5 d2d4 e5g6 e4e5"].porQue` | Expulsa también al otro caballo. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 a2a3 d7d6"].porQue` | Refuerza e5 y prepara el desarrollo del alfil de c8. |
| Partida de los cuatro caballos | `notas["e2e4 e7e5 g1f3 b8c6 b1c3 g8f6 f3e5"].porQue` | Según Stockfish es un error: era mejor 4. d4 (0,0 contra −1,7, para el bando que juega). |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 d4c3 f1c4 c3b2 c1b2 g8f6"].porQue` | Desarrolla y prepara ...d5 para devolver material. |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 d4c3 f1c4 c3b2 c1b2 d7d5 c4d5 g8f6"].porQueNo["f8b4"]` | 6...Ab4+? 7.Cd2 y la gran diagonal sigue abierta: el negro termina tapando el alfil de b2 con ...f6. |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 d4c3 f1c4 c3b2 c1b2 d7d5 c4d5 g8f6 d5f7"].porQue` | Casi obligado: tras 7...Rxf7 8.Dxd8 Ab4+ el negro recupera la dama y se llega a un final parejo. |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 d7d5 e4d5 d8d5 c3d4 f8b4"].porQue` | Para Stockfish, la más precisa: el alfil sale con jaque antes de ...Cc6 y ...Cf6, y el peón aislado de d4 será un objetivo. |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 g8e7"].porQue` | Desarrolla y prepara ...d5. |
| Gambito Danés | `notas["e2e4 e7e5 d2d4 e5d4 c2c3 d4c3 f1c4 c3b2 c1b2 d8e7"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (+0,6 contra −0,6, para el bando que juega). |
| Defensa de los Dos Caballos | `planesNegras` | Ganar tiempos sobre el alfil y el caballo blancos (...Ca5, ...c6, ...h6, ...e4). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5"].porQueNo["c4e2"]` | ...h6 Cf3 e4 y ...Dxd5: el negro recupera el peón con buen juego. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5 c7c6 d5c6 b7c6 b5e2 h7h6 g5f3"].porQue` | El caballo vuelve al centro; también se juega Ch3 (variante Steinitz). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 f8c5 c4f7"].porQue` | La respuesta que recomienda Alterman como la más fuerte: el alfil toma con jaque, el rey negro pierde el enroque y el ...Axf2+ ya no viene con tanta fuerza. La captura con el caballo (5.Cxf7) lleva a complicaciones mucho mayores, donde el negro tiene sus chances. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 d2d3"].porQue` | El enfoque moderno: en lugar de Cg5, una lucha posicional lenta parecida a la Española con d3. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4"].porQue` | El truco central: si Cxe4, ...d5 recupera la pieza y el negro queda con buen centro. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 d2d4 e5d4 e1g1 f6e4 f1e1 d7d5 c4d5 d8d5 b1c3 d5a5"].porQue` | La dama se aparta y mantiene la defensa del caballo; tras Cxe4 Ae6, el negro está bien. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5"].porQue` | La defensa correcta: el peón tapa la diagonal del alfil hacia f7 y, si exd5, el negro sigue con ...Ca5 y gana tiempos sobre el alfil. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5"].porQueNo["f8c5"]` | El Contraataque Traxler: el negro ignora la amenaza sobre f7 y prepara ...Axf2+. Es un gambito de riesgo: después de 5.Axf7+ las blancas quedan con ventaja clara según Stockfish; 5.Cxf7 lleva a complicaciones enormes. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5 c7c6 d5c6 b7c6 d1f3 c6b5"].porQue` | Contra la variante Bogoljubov (8.Df3), tomar el alfil es lo mejor según Stockfish, aunque Estrin la desaconsejaba; su recomendación, 8...Tb8, también es buena. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6d4"].porQue` | Variante Fritz: el caballo salta al centro amenazando ...b5 y ...Cxd5. Es teoría antigua; según Stockfish, algo inferior a 5...Ca5. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6d4 c2c3"].porQue` | Lo más fuerte: echa al caballo de d4 de inmediato. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6d4 c2c3"].porQueNo["d2d3"]` | 6.d3? b5! y el alfil de c4 se queda sin buena retirada: tras 7.c3 bxc4 8.cxd4 Dxd5 las negras están mejor. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 b7b5 c4f1"].porQue` | La retirada que recomienda Estrin, y la mejor según Stockfish: el alfil no se deja desviar. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c3e4"].porQue` | Lo mejor: recupera la pieza enseguida, aunque después de ...d5 el negro gana tiempo atacando el caballo y el alfil. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c3e4"].porQueNo["c4f7"]` | 5.Axf7+ Rxf7 6.Cxe4 d5: el rey negro pierde el enroque, pero gana el centro y la columna f; Stockfish da ventaja negra. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c3e4 d7d5 c4d3"].porQue` | Lo correcto: el alfil se aparta y defiende el caballo. Después de ...dxe4 Axe4 Ad6 el negro iguala sin problemas. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4"].porQue` | Ataque Lolli: abre el centro antes de sacrificar en f7. Si el negro toma con el peón, 0-0, Te1 y el sacrificio en f7 llegan con mucha fuerza; pero según Stockfish es algo menos fuerte que 6.Cxf7, porque el negro tiene 6...Cxd4. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4 c6d4"].porQue` | Lo mejor según Stockfish: el caballo se instala en d4 y, si c3, ...b5 echa al alfil de la diagonal hacia f7. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4 c6d4"].porQueNo["e5d4"]` | Abre la columna e para el ataque blanco: 7.0-0 y, después de Te1, el sacrificio en f7 es demoledor. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 d2d3 h7h6 g5f3 e5e4 d1e2 a5c4 d3c4 f8e7"].porQue` | Desarrolla y prepara el enroque: el negro tiene juego activo por el peón. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 e1g1 f8c5 d2d4 c5d4 f3d4 c6d4 c1g5"].porQue` | Clava el caballo de f6 y prepara f4. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 d2d4 e5d4 e4e5 d7d5"].porQue` | Contraataca el alfil de c4 en lugar de retirar el caballo. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 g5f7 e8f7 d1f3 f7e6 b1c3 c6b4"].porQue` | Defiende el caballo de d5 y amenaza ...Cxc2+. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 g5f7 e8f7 d1f3 f7e6 b1c3 c6b4 f3e4"].porQue` | Según Stockfish es un error: era mejor 9. O-O (+0,9 contra −0,7, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 f8c5"].porQue` | Según Stockfish es un error: era mejor 4... d5 (−0,1 contra −1,4, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 b7b5 c4f1 h7h6"].porQue` | Según Stockfish es un error: era mejor 6... Cxd5 (−0,5 contra −1,3, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 b7b5 c4f1 h7h6 g5f7"].porQue` | Sacrifica el caballo en lugar de retirarlo. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 d2d4 e5d4 e1g1 f6e4 f1e1 d7d5 c4d5 d8d5 b1c3 d5a5 c3e4 c8e6 c1g5"].porQue` | Según Stockfish es un error: era mejor 10. Ceg5 (+0,3 contra −1,0, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 c6a5 c4b5 c7c6 d5c6 b7c6 b5e2 h7h6 g5f3 e5e4 f3e5 f8d6 d2d4 d8c7 c1d2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c3e4 d7d5 c4b5"].porQue` | Según Stockfish es un error: era mejor 6. Ad3 (−0,1 contra −2,7, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4 e5d4"].porQue` | Según Stockfish es un error: era mejor 6... Cxd4 (−0,5 contra −1,7, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4 e5d4 e1g1 c8e6"].porQue` | Según Stockfish es un error: era mejor 7... Ce5 (−2,0 contra −3,4, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f1c4 f8b4"].porQue` | Da jaque antes de defender. |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c4f7"].porQue` | Según Stockfish es un error: era mejor 5. Cxe4 (−0,1 contra −1,7, para el bando que juega). |
| Defensa de los Dos Caballos | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 f6e4"].porQue` | Según Stockfish es un error: era mejor 4... d5 (−0,1 contra −2,6, para el bando que juega). |
| Defensa de los Dos Caballos | `trampas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 g5f7 e8f7 d1f3 f7e6 b1c3"]` | Fried Liver: tras 5...Cxd5? 6.Cxf7! Rxf7 7.Df3+ Re6 8.Cc3, el rey negro queda en el centro y el caballo de d5 está clavado. |
| Defensa de los Dos Caballos | `trampas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 b1c3 f6e4 c3e4 d7d5 c4b5 d5e4 f3e5 d8g5"]` | 4.Cc3 Cxe4! 5.Cxe4 d5 6.Ab5? dxe4 7.Cxe5 Dg5!: doble amenaza sobre e5 y g2, con el alfil de b5 sin defensa. El negro queda con clara ventaja. |
| Defensa de los Dos Caballos | `trampas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5 f6d5 d2d4 e5d4 e1g1 c8e6 f1e1 d8d7 g5f7"]` | Ataque Lolli: 6.d4 exd4? 7.0-0 Ae6 8.Te1 Dd7 9.Cxf7!!: si 9...Dxf7, 10.Axd5 aprovecha la clavada del alfil de e6; si 9...Rxf7, 10.Df3+ y Txe6, y el negro pierde mucho material. |
| Siciliana Dragón Acelerado | `planesBlancas` | Desarrollo clásico con Cc3, Ae3, Ac4 y enroque. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6"].porQue` | Dragón Acelerado: fianchetto antes de ...d6, para poder jugar ...d5 de una sola vez. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6"].porQueNo["c6d4"]` | Dxd4: la dama ataca la torre de h8 y, si ...Cf6, e5 echa al caballo. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 d8a5 e1g1"].porQue` | Lo correcto: enroca y el negro no tiene tiempo de tomar en e4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 d8a5 e1g1"].porQueNo["d1d2"]` | 8.Dd2? cae en la trampa favorita de Panjwani: 8...Cxe4! 9.Cxc6 Dxc3!! 10.Dxc3 Axc3+ 11.bxc3 bxc6, y el negro gana un peón (si 9.Cxe4, Dxd2+ 10.Axd2 Axd4). |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6"].porQue` | Más fino que cambiar en d4 enseguida: si Ag5, el negro responde ...Ag7 y el caballo de d4 queda sin el apoyo del alfil de e3. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 e8g8 c4b3 a7a6"].porQue` | El sistema propio de Panjwani contra la Antiyugoslava: prepara ...b5 y ...Ca5 para cambiar el alfil de b3, que apunta a f7. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 f8g7 c1e3 f6g4"].porQue` | La variante Breyer, que recomienda Panjwani contra el Maroczy: el caballo cambia al alfil de e3, la pieza blanca que mejor controla las casillas negras. Después de Dxg4 Cxd4 Dd1, ...Ce6 o ...e5 y el negro queda cómodo. Stockfish la considera la mejor. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 d4c6 b7c6 e4e5 f6d5"].porQue` | El negro no le teme a 7.Cxc6 y 8.e5: entrega un peón (9.Cxd5 cxd5 10.Dxd5 Tb8) a cambio de la iniciativa y de las columnas abiertas. Stockfish prefiere 8...Cg8. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 d4c6 b7c6 e4e5 f6g8"].porQue` | La otra forma: el caballo vuelve y el negro ataca e5 con ...f6 (después de 9.f4 f6). |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 d7d6 f2f3 d8b6"].porQue` | Una alternativa de doble filo a enrocar y pasar al Yugoslavo: amenaza ...Dxb2, ...Cxe4 y ...Cg4 a la vez. Muy discutida en los años 60. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 e8g8 c4b3"].porQue` | Si las blancas quieren mantener la opción del Dragón con enroque largo, esta es la jugada: retira el alfil antes de que lo ataquen. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 e8g8 c4b3 a7a5"].porQue` | La versión más popular: si 9.O-O, ...a4 con ...Cxe4; si 9.a4, ...Cg4 es más fuerte que antes; y si 9.f3, aparece el golpe central ...d5. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 c6d4 d1d4 d7d6"].porQue` | Con el caballo blanco ya en c3, el cambio en d4 sí tiene sentido: todas las puertas quedan cerradas y el negro sigue con ...Ag7, enroque y un salto de caballo que ataque a la dama de d4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7"].porQue` | Un punto de partida importante. El negro sigue con ...O-O y, a veces, un salto de caballo que ataca a la dama de d4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 f8g7 c1e3 g8f6 b1c3 f6g4 d1g4 c6d4 g4d1"].porQue` | Lo más preciso: la dama vuelve a casa. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 f8g7 c1e3 g8f6 b1c3 e8g8"].porQue` | El simple enroque: durante mucho tiempo se lo consideró pasivo, pero desde los años ochenta es una alternativa muy popular a 7...Cg4 (FCO). |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 f8g7 c1e3 g8f6 b1c3 e8g8 f1e2 d7d6 e1g1 c6d4"].porQue` | Cambia para llevar después el alfil a c6, desde donde presiona e4. El negro no teme el cambio de alfiles de casillas negras. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3"].porQue` | Defiende el caballo de d4 y prepara Ae2 o Ac4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2"].porQue` | Desarrolla de forma sólida y prepara el enroque corto. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d4b3"].porQue` | Retira el caballo para evitar cambios y prepara f4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 d4b3"].porQue` | Retira el caballo antes de enrocar. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 e8g8"].porQue` | Enroca: contra Ac4, el negro prepara ...d6 o el golpe ...Cxe4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c1e3"].porQue` | Defiende el caballo de d4 antes de decidir dónde va el otro. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c1e3 f8g7 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d4b3 c8e6 f2f4 d8c8"].porQue` | La dama prepara ...Ah3 o ...Ag4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d4b3 a7a5"].porQue` | Amenaza ...a4 contra el caballo. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d4b3 a7a5 a2a4"].porQue` | Frena ...a4. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d4b3 a7a5 a2a4 c8e6 f2f4 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1e2 e8g8 e1g1 d7d6 d1d2 c8d7 a1d1 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 e1g1 d8a5 a1b1 f8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 e1g1 d8a5 a1c1"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 e1g1 d8a5 a1c1 f8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 a1c1"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 a1c1 d8a5 f2f3 f8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 e1g1 d8a5 f1c1"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 e1g1 d8a5 f1c1 f8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 c2c4 g8f6 b1c3 d7d6 f1e2 c6d4 d1d4 f8g7 c1e3 e8g8 d4d2 c8e6 f2f3 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón Acelerado | `trampas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 f1c4 d8a5 d1d2 f6e4 d4c6 a5c3 d2c3 g7c3 b2c3 b7c6"]` | 7...Da5 8.Dd2? Cxe4! 9.Cxc6 Dxc3!! 10.Dxc3 Axc3+ 11.bxc3 bxc6: el negro recupera la pieza y queda con un peón de más y la estructura blanca destrozada. Lo correcto es 8.O-O. |
| Gambito Englund | `planesBlancas` | Quedarse con el peón de e5 y desarrollarse rápido (Cf3, Af4, Cc3). |
| Gambito Englund | `planesBlancas` | Evitar la trampa: tras ...Dxb2, defender con Cc3, no con Ac3. |
| Gambito Englund | `planesNegras` | Recuperar e5 con ...Cc6 y ...De7. |
| Gambito Englund | `planesNegras` | Si las blancas se equivocan, ...Db4+ y ...Dxb2. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7"].porQue` | La línea del gambito: ataca e5 una vez más y prepara ...Db4+. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4"].porQue` | Defiende e5. Hay que conocer la trampa: tras ...Db4+ Ad2 Dxb2, nunca Ac3. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 c1f4 g7g5"].porQue` | Contra 3.Af4, Sepúlveda propone 3...g5!?: echa al alfil y después ...Ag7 y ...De7 recuperan el peón de e5. Stockfish la considera la mejor. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 c1f4 g7g5"].porQueNo["d8e7"]` | 3...De7? en este orden permite 4.Cc3!: después de ...Cxe5 5.Cd5, el caballo ataca la dama y c7, y el negro queda muy mal. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4 d7d6"].porQue` | La clave con la que Sepúlveda revitaliza el gambito: si exd6, ...Df6 ataca a la vez f4 y b2. Stockfish la prefiere a 4...Db4+. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4 e7b4 f4d2"].porQue` | La única buena: si 5...Dxb2, 6.Cc3 lo defiende todo y las blancas quedan con una ventaja decisiva. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 b1c3 c6e5"].porQueNo["d7d6"]` | 4...d6? 5.exd6 Dxd6 6.Dxd6 Axd6 7.Cb5: el caballo ataca el alfil y amenaza Cxc7+. |
| Gambito Englund | `notas["d2d4 e7e5 d4d5 f8c5"].porQue` | Desarrolla apuntando a f2: si el blanco juega e4 sin cuidado, ...Dh4 amenaza mate en f2. |
| Gambito Englund | `notas["d2d4 e7e5 g1f3"].porQue` | Según Stockfish es un error: era mejor 2. dxe5 (+1,4 contra −0,3, para el bando que juega). |
| Gambito Englund | `notas["d2d4 e7e5 d4d5"].porQue` | Según Stockfish es un error: era mejor 2. dxe5 (+1,4 contra −0,3, para el bando que juega). |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 d8h4"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−1,4 contra −3,5, para el bando que juega). |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 g8e7"].porQue` | Prepara ...Cg6 para recuperar e5. |
| Gambito Englund | `notas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 d1d5"].porQue` | Según Stockfish es un error: era mejor 4. Ag5 (+1,9 contra +0,8, para el bando que juega). |
| Gambito Englund | `notas["d2d4 e7e5 e2e3"].porQue` | Según Stockfish es un error: era mejor 2. dxe5 (+1,4 contra +0,2, para el bando que juega). |
| Gambito Englund | `trampas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4 e7b4 f4d2 b4b2 d2c3 f8b4 d1d2 b4c3 d2c3 b2c1"]` | 4.Af4 Db4+ 5.Ad2 Dxb2 6.Ac3?? Ab4! 7.Dd2 Axc3 8.Dxc3 Dc1#. Lo correcto es 6.Cc3. |
| Gambito Englund | `trampas["d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4 e7b4 c2c3 b4f4"]` | 4.Af4 Db4+ 5.c3?? Dxf4: el blanco tapó el jaque pero dejó el alfil sin defensa. Lo correcto es 5.Ad2. |
| Defensa Escandinava | `planesBlancas` | Ganar tiempo atacando a la dama negra (Cc3, Ad2, Cf3-e5) y desarrollar más rápido. |
| Defensa Escandinava | `planesBlancas` | Contra 2...Cf6, intentar conservar el peón con c4 o desarrollar con d4 y Cf3. |
| Defensa Escandinava | `planesNegras` | Estructura c6-e6 sólida y juego con ...Cbd7, ...e6 y ...Ae7 o ...Ab4. |
| Defensa Escandinava | `notas["e2e4 d7d5"].porQue` | Ataca e4 enseguida: obliga a las blancas a decidir antes de completar el centro. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5"].porQueNo["e4e5"]` | ...Af5, d4 y ...e6: una Caro-Kann del Avance con un tiempo de más para el negro, que no gastó ...c6. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5"].porQue` | La casilla más usada: desde a5 la dama clava a veces el caballo de c3 y no queda en el camino de las piezas. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3"].porQue` | Desarrollo natural; el caballo puede ir a e5 más adelante. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c8f5"].porQue` | El alfil sale antes de ...e6 y controla e4. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c8g4"].porQue` | La línea más aguda: clava el caballo. Si h3, ...Ah5 mantiene la clavada. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6"].porQue` | Le da un escape a la dama y deja para después la elección entre ...Ag4 y ...Af5. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 f6d5"].porQue` | Recupera el peón: las blancas pueden ganar espacio con c4 más adelante. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 c8g4"].porQue` | Variante Portuguesa: desarrolla el alfil antes de recuperar el peón, con juego muy activo. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 c8g4 f2f3"].porQue` | La respuesta más directa, y la que prefiere Stockfish: echa al alfil y busca quedarse con el peón de d5. A cambio, como señala Anderson, le quita f3 al caballo y debilita e3, que el negro puede presionar por la columna e. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 c8g4 f2f3 g4f5"].porQue` | El negro sigue con su gambito: ...e6 para abrir líneas y aprovechar su ventaja de desarrollo. Contra 5.c4 e6, Anderson deja abierta la evaluación («quizás»). Stockfish la considera algo inferior a 4...Ad7 y contesta 5.g4. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6"].porQue` | La casilla de Tiviakov: la dama queda en el centro, lejos de las piezas blancas que la persiguen en a5. El principio del sistema es completar el desarrollo rápido: primero el alfil de c8, después el de f8. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6 d2d4 g8f6 g1f3 c7c6"].porQue` | Prepara la salida del alfil de c8 a g4 o f5 con el apoyo de c6. Si el blanco no reacciona, el negro resuelve el problema de ese alfil y se iguala sin dificultad (Tiviakov). |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6 d2d4 g8f6 g1f3 c7c6 f3e5"].porQue` | Controla g4 y deja al alfil de c8 sin su mejor casilla. Tiviakov la considera casi obligatoria; Stockfish acepta también 6.Ad3 o 6.h3. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6 d2d4 g8f6 g1f3 a7a6"].porQue` | La otra respuesta de Tiviakov: quita la casilla b5 al caballo blanco y prepara ...Ag4, ...Cc6 y el enroque largo. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6 d2d4 g8f6 g1f3 a7a6 g2g3"].porQue` | Prepara el fianchetto para presionar la gran diagonal. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 g7g6"].porQue` | Prepara el fianchetto y deja el peón de d5 para después. |
| Defensa Escandinava | `notas["e2e4 d7d5 g1f3"].porQue` | Según Stockfish es un error: era mejor 2. exd5 (+0,6 contra −0,9, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 g1f3 d5e4 f3g5 g8f6 b1c3"].porQue` | Según Stockfish es un error: era mejor 4. Ac4 (−0,3 contra −1,1, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 g1f3 d5e4 f3g5 g8f6 b1c3 c8f5 d1e2"].porQue` | Según Stockfish es un error: era mejor 5. d3 (−1,0 contra −1,9, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 g1f3 d5e4 f3g5 g8f6 b1c3 c8f5 d1e2 d8d4"].porQue` | Según Stockfish es un error: era mejor 5... Cc6 (+1,9 contra −5,9, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 b1c3"].porQue` | Según Stockfish es un error: era mejor 2. exd5 (+0,6 contra −0,5, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c8f5 f3e5"].porQue` | Centraliza el caballo y prepara g4 o Ac4. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 d8d5 b1c3 d5d6 d2d4 g8f6 f1c4 c7c6 g1e2"].porQue` | Desarrolla preparando Af4. |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 f6d5 c2c4 d5b4"].porQue` | Según Stockfish es un error: era mejor 4... Cf6 (−0,7 contra −1,5, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 c7c6 d5c6 e7e5"].porQue` | Según Stockfish es un error: era mejor 3... Cxc6 (−0,8 contra −1,7, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 e4d5 g8f6 d2d4 c7c6 d5c6 e7e5"].porQue` | Según Stockfish es un error: era mejor 4... Cxc6 (−0,8 contra −2,2, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 b2b3"].porQue` | Según Stockfish es un error: era mejor 2. exd5 (+0,6 contra −1,2, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. exd5 (+0,6 contra −2,1, para el bando que juega). |
| Defensa Escandinava | `notas["e2e4 d7d5 b1c3 d5e4 f1c4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe4 (+0,1 contra −0,9, para el bando que juega). |
| Apertura Escocesa | `planesBlancas` | Centralizar el caballo en d4 y desarrollar rápido (Ae3, Cc3, Ad3, enroque). |
| Apertura Escocesa | `planesBlancas` | Contra 4...Cf6, Cxc6 seguido de e5 para ganar espacio y echar al caballo. |
| Apertura Escocesa | `planesNegras` | Atacar e4 o el caballo de d4 para ganar tiempo: ...Cf6 o ...Ac5. |
| Apertura Escocesa | `planesNegras` | Tras Cxc6 bxc6, usar los peones del centro (...d5) y la columna b. |
| Apertura Escocesa | `estructura` | Peón blanco en e4 contra el negro en d7 (o d6): las blancas tienen más espacio en el centro. Tras Cxc6 bxc6, el negro queda con peones en c6 y c7 pero con la columna b y la posibilidad de ...d5. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4"].porQue` | Abre el centro enseguida: las blancas buscan juego libre y espacio en vez de la presión lenta de la Española. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4"].porQueNo["g8f6"]` | d5 y el caballo de c6 tiene que irse; después cae el peón de e5. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3"].porQue` | Defiende d4 desarrollando (también se juegan Cb3 y Cxc6). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3"].porQueNo["d4b5"]` | Amenaza c7, pero Cf6 y el enroque dejan al caballo fuera de juego. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 d4c6"].porQue` | Cambia caballos antes de que el negro presione d4. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 d4c6 d8f6"].porQue` | Amenaza mate en f2 y obliga a las blancas a una jugada incómoda. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8b4"].porQue` | El jaque de Tony Miles: obliga a c3, y después el alfil vuelve a c5. Parece una pérdida de tiempo, pero con el peón en c3 el blanco ya no puede desarrollar el caballo de b1 en su casilla natural. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8b4 c2c3"].porQue` | Lo más sencillo: el negro tiene que retirar el alfil y el blanco busca aprovechar el peón de c3 (por ejemplo, para sostener d4). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 d8f6"].porQue` | Presiona d4 y f2; muchas veces transpone a las líneas con ...Ac5. Emms la sugiere para quien quiera evitar 4...Ac5 5.Cb3. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 c2c3 d7d5"].porQue` | La receta simple, la misma que contra el Danés: devuelve el peón y abre el juego antes de que el blanco se desarrolle. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 c2c3 d4c3 b1c3 f8c5"].porQue` | Lo más preciso para Stockfish: el alfil se desarrolla apuntando a f2 y el negro se prepara para devolver el peón con ...d6 o ...d5 en el momento justo. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 c2c3 g8e7 d1d2"].porQue` | Prepara el enroque largo y refuerza d4. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 c6d4 f3d4 e5d4 d1d4 d7d6 f1d3"].porQue` | Según Stockfish es un error: era mejor 6. Cc3 (+1,3 contra +0,5, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 d8h4 d4b5"].porQue` | Amenaza Cxc7+ y deja el peón de e4. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 c2c3 g8e7 d1d2 d7d5 d4b5 c5e3 d2e3 e8g8 b5c7 a8b8 c7d5"].porQue` | Según Stockfish es un error: era mejor 11. Cd2 (−0,4 contra −1,6, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 c2c3 g8e7 d1d2 d7d5 d4b5 c5e3 d2e3 e8g8 b5c7 a8b8 c7d5 e7d5 e4d5 c6b4"].porQue` | Ataca d5 y amenaza ...Cc2+, que ataca al rey y a la dama. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 d8h4 d4f5"].porQue` | Según Stockfish es un error: era mejor 5. Cc3 (+0,7 contra −0,4, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 d8h4 c1e3"].porQue` | Desarrolla y defiende e4 de forma indirecta: si ...Dxe4, Cb5. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 e4e5"].porQue` | Según Stockfish es un error: era mejor 5. Cxc6 (+0,1 contra −0,8, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 b1d2"].porQue` | Defiende e4 con el caballo en lugar de avanzar e5. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 d4b5"].porQue` | Según Stockfish es un error: era mejor 6. c3 (+0,3 contra −0,7, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f1b5"].porQue` | Clava el caballo y recupera el peón después. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 d4b3 c5b4 c1d2 a7a5"].porQue` | Prepara ...a4 contra el caballo. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f1c4 f8c5 f3g5 g8h6 g5f7 h6f7 c4f7 e8f7 d1h5 g7g6 h5c5 d7d5 e1g1 d5e4 c2c3"].porQue` | Prepara Db3 o Te1. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f1c4 f8c5 f3g5 g8h6 d1h5"].porQue` | Según Stockfish es un error: era mejor 6. Cxf7 (−0,1 contra −1,2, para el bando que juega). |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 c2c3 f6g6 b1d2 g8f6 f2f4"].porQue` | Amenaza f5 contra la dama. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 e4e5 d8e7 d1e2 f6d5 c2c4 c8a6 b2b3 e8c8 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 e4e5 d8e7 d1e2 f6d5 c2c4 c8a6 b2b3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 e4e5 d8e7 d1e2 f6d5 c2c4 d5b6 b1c3 a7a5 e2e4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 e4e5 d8e7 d1e2 f6d5 c2c4 d5b6 b1c3 e7e6 e2e4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f1c4"].porQue` | Es el Gambito Escocés: el blanco desarrolla antes de recuperar el peón y apunta a f7. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 c2c3 d4c3 f1c4"].porQue` | Ofrece también el peón de b2 a cambio de un desarrollo rápido. |
| Apertura Escocesa | `notas["e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 c2c3 d4c3 f1c4 g8f6"].porQue` | Desarrolla y ataca e4 en lugar de tomar el segundo peón. |
| Defensa Eslava | `planesBlancas` | Recuperar el peón de c4 cuando el negro lo toma (a4 para impedir ...b5, después e3 y Axc4) y ganar el centro con e4 si el negro se descuida. |
| Defensa Eslava | `planesBlancas` | Atacar el peón de b7 con Db3 en cuanto el alfil de c8 se va del flanco de dama. |
| Defensa Eslava | `planesBlancas` | En la variante del Cambio, Af4, e3, Cf3 y presión en la columna c. |
| Defensa Eslava | `planesNegras` | Desarrollo simple: ...e6, ...Ab4 o ...Ae7, ...Cbd7, enroque corto. |
| Defensa Eslava | `rupturas` | ...dxc4 seguido de ...b5 solo si el peón de b5 queda defendido (tras a4, ...b5 lo pierde). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6"].porQue` | Sostiene d5 con un peón sin encerrar el alfil de c8 (que es lo que hace 2...e6). Además deja preparado ...dxc4 seguido de ...b5 en algunas líneas. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6"].porQueNo["c8f5"]` | Sacar el alfil ya deja b7 sin defensa: cxd5 y si ...Axb1, Txb1 y Dxd5; las blancas quedan mejor. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6"].porQueNo["c8f5"]` | El error típico de la Eslava: cxd5 cxd5 y Db3 ataca b7. El negro tiene que perder tiempo con ...Db6 o ...Ac8. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3"].porQue` | Presiona d5 con otra pieza. Ahora el negro elige: tomar en c4 (Eslava aceptada), jugar ...e6 (Semieslava) o ...a6 (Chebanenko). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4"].porQue` | Toma el peón para sacar el alfil a f5 con tiempo. Las blancas lo van a recuperar, pero el negro gana un desarrollo cómodo. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4"].porQue` | Impide ...b5, que sostendría el peón de c4. Debilita b4, pero las blancas recuperan el peón con e3 y Axc4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 e2e3"].porQue` | La línea holandesa: prepara Axc4 y el enroque. Es la forma más tranquila de recuperar el peón. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 e2e3 e7e6 f1c4 f8b4"].porQue` | Clava el caballo de c3 y frena e4. Después vienen el enroque y ...Cbd7. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 e2e3 c8f5"].porQue` | Con c4 defendido, el alfil sale igual. Las blancas pueden intentar cxd5 y Db3 contra b7 (Stockfish prefiere Cc3, pero en la práctica aparece): la respuesta es ...Dc7 o ...Dc8, nunca ...e6 (ver las trampas). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5"].porQue` | Variante del Cambio: simplifica y busca un juego tranquilo con la columna c abierta. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5 c6d5"].porQue` | Estructura simétrica: el negro iguala con facilidad si no se apura. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5 c6d5 b1c3"].porQue` | Presiona d5 y prepara Af4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5 c6d5 b1c3 g8f6 c1f4"].porQue` | El alfil sale antes de e3 para no quedar encerrado, y controla c7 y b8. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5 c6d5 b1c3 g8f6 c1f4 b8c6"].porQue` | Presiona d4 y prepara ...Af5 o ...a6, igualando el juego. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 e2e3 e7e6 f1c4 f8b4 e1g1 e8g8 d1e2"].porQue` | Prepara e4 para ganar espacio; a cambio, la casilla b4 quedó en manos del negro. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 e2e3 e7e6 f1c4 f8b4 e1g1 e8g8 f3h4"].porQue` | Busca cambiar el alfil de f5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5"].porQue` | Más ambicioso: prepara f3 y e4 para formar un centro fuerte. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7"].porQue` | Si Cxc4, ...Dc7 y ...e5 golpean el centro. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6"].porQue` | Variante Chebanenko: flexible; prepara ...b5 y deja para después la salida del alfil. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 d1d2"].porQue` | Una jugada rara que neutraliza la idea de 7...Dc7, la ruptura ...e5: la dama apunta a f4 y al alfil de f5. Muchas veces el blanco termina cambiando un caballo por ese alfil y queda con un final algo mejor (Rogozenko). Stockfish prefiere 8.g3. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 d1d2 g7g6"].porQue` | Protege el alfil de f5 y prepara ...e5 en buenas condiciones. |
| Defensa Eslava | `notas["d2d4 g8f6 c2c4 c7c6"].porQue` | Eslava India: el negro prepara ...d5 con apoyo y deja abierta la opción de ...g6. |
| Defensa Eslava | `notas["d2d4 g8f6 c2c4 c7c6 b1c3"].porQue` | Desarrolla. Si ahora ...d5, se llega a la Eslava. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6"].porQue` | La línea más complicada: el negro deja que el blanco arme el centro con f3 y e4 y prepara una respuesta táctica. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3"].porQue` | Prepara e4 para ocupar el centro y dejar afuera al alfil de f5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3"].porQueNo["e5c4"]` | Cxc4? c5: el negro ataca el centro enseguida y, tras dxc5 Dxd1+, iguala sin problemas. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3 f8b4 e2e4 f5e4 f3e4 f6e4 c1d2 d8d4 c3e4 d4e4 d1e2 b4d2 e1d2 e4d5 d2c2 b8a6 e5c4"].porQueNo["e5f3"]` | Cf3? b5: el negro abre líneas contra el rey blanco antes de que se ponga a salvo. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6"].porQue` | Una línea con trampa: el caballo va a b4, desde donde amenaza ...Cc2+. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6 e2e3"].porQue` | Lo correcto en este caso, según Schandorff: muchos juegan f3 por reflejo y ahí el negro tiene buen juego. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6 e2e3"].porQueNo["f2f3"]` | f3? Cd7: tras Cxc4 e5, el negro ataca el centro con ...Dh4+ en el aire (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6 e2e3 a6b4 f1c4 e7e6"].porQue` | Lo normal: completa el desarrollo. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6 e2e3 a6b4 f1c4 e7e6 e1g1"].porQue` | Enroca. El blanco va a seguir con De2, e4 y Td1, con más espacio. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 d5c4"].porQue` | Tomar en c4 antes de ...Cf6 es raro, pero no hay que subestimarlo: el negro intenta sostener el peón con ...b5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 d5c4 e2e3 b7b5 a2a4 e7e6 a4b5 c6b5 b2b3"].porQue` | Recupera el peón: si ...cxb3, Axb5+ (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 c8f5"].porQue` | Prematura, según Schandorff: el cambio en d5 y Db3 atacan b7 enseguida. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8g4"].porQue` | Otra forma de sacar el alfil, pero con un inconveniente: Ce5 lo echa. Stockfish prefiere 5...Af5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8g4 f3e5"].porQueNo["e2e4"]` | e4? e5: el negro ataca el centro y, tras Axc4 Axf3 gxf3 exd4, queda bien. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3 c6c5"].porQue` | La línea que promovió Kramnik: se la consideraba dudosa porque el negro solía seguir con ...cxd4, que es floja. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 e7e6 f2f3 c6c5 e2e4 f5g6 c1e3"].porQue` | Sostiene d4. Tras ...cxd4 Dxd4 Dxd4 Axd4 se llega a un final que se ve bien para el blanco, aunque Kramnik lo empató con facilidad contra Topalov en el Mundial de 2006 (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3"].porQue` | Fianchetto y, a la vez, prepara Af4 contra la dama de c7 (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3"].porQueNo["f2f3"]` | f3? e5: el negro rompe en el centro antes de que el blanco pueda jugar e4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 g7g5"].porQue` | La idea de Morozevich: ataca al alfil de f4 y busca juego activo. Casi desplazó a la clásica 11...f6 (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 g7g5 c4e3"].porQue` | La respuesta de Kasparov cuando se encontró con la novedad: busca una ventaja chica pero estable, atacando el alfil de f5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d7b6"].porQue` | La Variante Sokolov, la interpretación moderna: el caballo echa al de c4 y el negro sigue con ...a5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d7b6 c4e5 a7a5"].porQue` | Impide a5, que echaría al caballo de b6. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 f6d5"].porQue` | Una idea de Morozevich: prepara ...e5 para la próxima jugada. Es, sobre todo, un arma de sorpresa (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 f6d5 f2f3"].porQue` | Prepara e4 para echar al caballo de d5 y ocupar el centro. Stockfish la prefiere a 8.g3, que es la recomendación de Schandorff (él menciona 8.f3 como interesante). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5"].porQue` | Una jugada de principios: cierra la posición, le quita al negro muchas de sus posibilidades dinámicas y deja en evidencia el defecto de ...a6, la casilla b6 debilitada (Schandorff). El negro buscará romper con ...b6 o ...e5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7"].porQue` | La línea principal: el caballo pelea por e5. Si el negro consigue jugar ...e5, está contento. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7 c1f4"].porQue` | Controla e5 y frena la ruptura. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 g7g6 h2h3"].porQue` | Una jugada útil: así el alfil, una vez en f4, tiene la casilla h2 si el negro juega ...Ch5 o ...h5 (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 c8g4"].porQue` | Se ve dudosa, y Stockfish lo confirma: provoca que el caballo salte a una gran casilla ganando tiempo. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 c8g4 f3e5"].porQue` | Gracias: el caballo va a e5 atacando al alfil (Schandorff). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 b1c3 d5c4"].porQue` | Toma en c4 y amenaza sostener el peón con ...b5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 e2e3 c8f5 c4d5 c6d5 d1b3 d8c8 c1d2"].porQue` | Desarrolla y prepara Ab5+ o Tc1. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3"].porQue` | Prepara el fianchetto: es la Eslava con g3, cercana a la Catalana. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3 d5c4 f1g2"].porQue` | Completa el fianchetto y prepara recuperar el peón. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3 d5c4 f1g2 g7g6"].porQue` | Prepara el fianchetto propio y le deja el peón al blanco a cambio de un desarrollo armónico. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 d1c2 e7e6 b1d2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 d1c2 e7e6 b1d2 f8e7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 d1c2 e7e6 b1d2 f8e7 g2g3 b8d7"].porQue` | Desarrolla y prepara ...c5 o ...e5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 d1c2 e7e6 b1d2 f8e7 g2g3 b8d7 f1g2 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7 para desarrollar el alfil de c8. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 e2e3 c8f5 c4d5 c6d5 b1c3 e7e6 f3e5"].porQue` | Centraliza el caballo y prepara Db3 o g4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 e2e3"].porQue` | Recupera el peón con el alfil en lugar de jugar a4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 e7e6"].porQue` | Prepara ...Ab4 y deja el alfil de c8 adentro. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 e2e4"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,3 contra −0,6, para el bando que juega). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 b1c3 g8f6 e2e3 g7g6"].porQue` | Prepara el fianchetto: es el Sistema Schlechter. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d7b6 c4e5 a7a5 f2f3"].porQue` | Prepara e4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 f7f6 e1g1 d7c5 c4e3 f5g6 b2b4 c5e6"].porQue` | El caballo va a e6. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 f7f6 e1g1 e8c8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 f7f6 e1g1 e8c8 a1c1 d7c5"].porQue` | El caballo va a c5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7 g2g3 e7e5 d4e5 d7e5 c1f4 f6d7 f1g2 f7f6 e1g1 e8c8 a1c1 d7c5 d1e1 a7a5"].porQue` | Frena b4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8g4 f3e5 g4h5 f2f3 e7e6"].porQue` | Según Stockfish es un error: era mejor 7... Cd5 (−0,8 contra −1,7, para el bando que juega). |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8g4 f3e5 g4h5 f2f3 f6d7 e5c4 e7e5 c3e4"].porQue` | El caballo va a e4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 e7e6 e2e3"].porQue` | Prepara Axc4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7 c1f4 f6h5 f4d2 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7 c1f4 f6h5 f4d2 h5f6 d1c2 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7 c1f4 f6h5 f4d2 h5f6 d1c2 g7g6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 b8d7 c1f4 f6h5 f4d2 h5f6 d1c2 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 f8e8"].porQue` | La torre prepara ...e5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 a7a6 c4c5 g7g6 h2h3 f8g7 c1f4 e8g8 e2e3 b8d7 f1e2 f6e8 e1g1 e8c7"].porQue` | El caballo va a c7. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1d2 c8f5 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1d2 c8f5 g2g3 e7e6 f1g2 h7h6 e1g1 b8d7 b2b3"].porQue` | Prepara Ab2. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1d2 c8f5 g2g3 e7e6 f1g2 h7h6 e1g1 b8d7 b2b3 f8e7 c1b2 e8g8 f3e5 a7a5 a2a3"].porQue` | Frena ...a4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3h4 e7e6 h4f5 e6f5 e2e3"].porQue` | Prepara Axc4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3h4 e7e6 h4f5 e6f5 e2e3 f8b4 f1c4 e8g8 e1g1 b8d7 d1c2 g7g6 f2f3"].porQue` | Prepara e4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3h4 e7e6 h4f5 e6f5 e2e3 f8b4 f1c4 e8g8 e1g1 b8d7 d1c2 g7g6 f2f3 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 e2e3 e7e6 f1c4 f8b4 e1g1 e8g8 f3h4 b8d7 f2f3"].porQue` | Prepara e4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 e2e3 c8f5 c4d5 c6d5 d1b3 d8c8 c1d2 e7e6 b1a3"].porQue` | El caballo va a b5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3 d5c4 f1g2 g7g6 e1g1 f8g7 a2a4"].porQue` | Frena ...b5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3 d5c4 f1g2 g7g6 e1g1 f8g7 a2a4 f6e4 d1c2 e4d6 e2e4 b8a6"].porQue` | El caballo va a b4. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 g2g3 d5c4 f1g2 g7g6 a2a4"].porQue` | Frena ...b5. |
| Defensa Eslava | `notas["d2d4 d7d5 c2c4 c7c6 c4d5 c6d5 b1c3 g8f6 f2f3"].porQue` | Prepara e4. |
| Defensa Eslava | `trampas["d2d4 d7d5 c2c4 c7c6 g1f3 c8f5 c4d5 c6d5 d1b3"]` | Si el alfil sale a f5 antes de tiempo, cxd5 cxd5 y Db3 ataca b7 y d5 a la vez: el negro pierde un peón o tiene que retroceder el alfil a c8. |
| Defensa Eslava | `trampas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 e2e3 c8f5 c4d5 c6d5 d1b3 e7e6 b3b7"]` | En la variante tranquila, tras cxd5 cxd5 Db3 hay que defender b7 con la dama (...Dc7 o ...Dc8). La natural ...e6 pierde el peón: Dxb7. |
| Defensa Eslava | `trampas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 b7b5 a4b5 c6b5 c3b5"]` | Después de a4, querer sostener el peón de c4 con ...b5 no funciona: axb5 cxb5 Cxb5 y el peón de c4 queda débil igual. |
| Española Cerrada y Ataque Marshall | `planesBlancas` | c3, h3 y d4; maniobra Cbd2-f1-g3. |
| Española Cerrada y Ataque Marshall | `planesNegras` | Marshall: ...d5, ...Ad6, ...Dh4 y piezas contra el enroque blanco. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3"].porQue` | Prepara d4 y deja al alfil la retirada a c2. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3"].porQueNo["h2h3"]` | ...Ca5: el negro cambia el alfil de b3 antes de que tenga refugio. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3"].porQueNo["d2d4"]` | 8.d4?! Cxd4 9.Cxd4 exd4 es prematuro, y si 10.Dxd4?? c5 11.De3 c4, el alfil de b3 queda encerrado por los peones de b5 y c4: la trampa del «Arca de Noé» (Johnsen y Johannessen). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3"].porQue` | Impide ...Ag4, que clavaría el caballo de f3 cuando llegue d4. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7"].porQue` | Zaitsev: presiona e4 y prepara ...Te8 y ...Af8. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8"].porQue` | Enroca antes de ...d6: deja abierta la posibilidad del Ataque Marshall. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 h2h3"].porQue` | Anti-Marshall: prepara d4 sin permitir el gambito con comodidad. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 a2a4"].porQue` | Anti-Marshall: presiona b5 y evita el gambito. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5"].porQue` | Aceptar es lo más fuerte. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6"].porQue` | La línea principal del Marshall: sostiene el caballo de d5 y prepara ...Ad6 y ...Dh4 contra el rey. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 d2d4 b7b5 a4b3 c6d4 f3d4 e5d4 c2c3"].porQue` | Lo correcto: recupera el peón con c3, sin tomar con la dama. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 d2d4 b7b5 a4b3 c6d4 f3d4 e5d4 c2c3"].porQueNo["d1d4"]` | ...c5 y ...c4: la trampa del Arca de Noé atrapa al alfil de b3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7"].porQue` | La jugada clásica: refuerza e5 y prepara la columna c. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7"].porQue` | El caballo llega a d7, desde donde apoya e5. Si las blancas cierran con d5, el negro responde ...c6. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7 d2d4 f8e8"].porQue` | Zaitsev: presiona e4 y prepara ...Af8. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 d2d4 c6d4"].porQueNo["e5d4"]` | 8...exd4? 9.e5: el caballo de f6 tiene que retroceder (9...Ce8) y las blancas quedan con ventaja de espacio y desarrollo. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 h2h3 c8b7"].porQue` | Contra 8.h3, que prepara d4 y quita g4 al alfil, Bologan recomienda primero ...Ab7: el alfil encuentra trabajo en la diagonal larga y la ruptura ...d5 sigue disponible. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4 e7d6 e5e2 c8g4 f2f3 g4f5"].porQue` | La idea de Nikolic contra 13.Te2: tras f3, el alfil se instala en f5, en la diagonal b1-h7 que apunta al enroque blanco. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4 e7d6 e5e2 c8g4 f2f3 g4f5 c3c4"].porQue` | Lo mejor según Stockfish: ataca el caballo de d5 en vez de pelear por la diagonal. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 f6d5 f3e5 c6e5 e1e5 c7c6 d2d4 e7d6 e5e2 c8g4 f2f3 g4f5 c3c4"].porQueNo["b3c2"]` | 15.Ac2? Axc2 16.Dxc2: sin su alfil de casillas blancas, el enroque blanco queda débil y las negras toman la iniciativa (Stockfish sigue con 16...Te8 y la torre entra en juego por la columna e). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 d4d5"].porQue` | El Sistema Petrosian: el blanco cierra el centro y le quita al caballo de a5 su retirada natural a c6. Marin dedica su primer capítulo a este problema: el caballo queda fuera de juego en a5 o b7, y si el blanco frena su regreso por c5 con b4 (o b3), el negro puede quedar con una desventaja duradera. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 d4d5 a5c4"].porQue` | Lo más activo y la preferida de Stockfish: el caballo salta a c4 antes de que b3 le quite la casilla, en lugar de retirarse a b7, donde quedaría encerrado. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 a8b8"].porQue` | La idea de Gajewski: saca la torre de la diagonal del alfil de b3 y refuerza el centro. Así el negro puede jugar ...exd4 y ...d5 sin que e5 y Axd5 le cuesten la torre de a8. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7 d2d4 f8e8 b1d2 e7f8"].porQue` | El alfil vuelve a f8 para defender el enroque y dejar libre la columna e para la torre: el esquema típico de la Zaitsev, con ...h6, ...exd4 y ...Cb4 más adelante (Johnsen y Johannessen). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7 d2d4 f8e8 f3g5 e8f8"].porQue` | La torre vuelve a defender f7. Si 12.Cf3 Te8, el blanco puede repetir jugadas: por eso muchos jugadores de blancas evitan la Zaitsev con 10.d3 o 10.a4 (Johnsen y Johannessen). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c8b7 d2d4 f8e8 b1d2 e7f8 a2a3"].porQue` | Frena ...b4 y prepara Ac2: es la Zaitsev. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 c6a5"].porQue` | Ataca el alfil de b3 antes de enrocar. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4"].porQue` | Arma el centro: contra la Breyer, el caballo negro va a d7. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 d8c7 b1d2 a5c6 d4c5"].porQue` | Según Stockfish es un error: era mejor 13. d5 (+1,0 contra +0,1, para el bando que juega). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c6"].porQue` | Prepara ...Dc7 y ...c5 o ...b4. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 d2d4"].porQue` | Ocupa el centro sin preparar h3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 d2d4 c6d4 f3d4 e5d4 d1d4"].porQue` | Según Stockfish es un error: era mejor 10. c3 (−0,5 contra −5,1, para el bando que juega). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 d2d4 c6d4 f3d4 e5d4 d1d4 c7c5"].porQue` | Gana tiempo contra la dama y amenaza ...c4, que encierra al alfil de b3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 f6d7 b1d2 c5d4 c3d4 a5c6 d2b3 a6a5"].porQue` | Amenaza ...a4 para echar al caballo de b3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6a5 b3c2 c7c5 d2d4 a5c6 d4d5 c6a5 b1d2 g7g6"].porQue` | Prepara ...Ch5 y ...f5. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 e8g8 c2c3 d7d5 e4d5 e5e4"].porQue` | Según Stockfish es un error: era mejor 9... Cxd5 (−0,2 contra −1,1, para el bando que juega). |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 c8b7 c2c3"].porQue` | Prepara d4. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 c8b7 c2c3 e8g8 d2d4 d7d6 b1d2 f8e8 d2f1"].porQue` | El caballo va a g3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 f6d7 d2d4 d7b6"].porQue` | El caballo va a b6. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 f6d7 d2d4 d7b6 b1d2 e7f6 d2f1"].porQue` | El caballo va a g3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 h7h6 d2d4 f8e8 b1d2 e7f8 d2f1"].porQue` | El caballo va a g3. |
| Española Cerrada y Ataque Marshall | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 a2a3"].porQue` | Prepara Aa2 y frena ...b4. |
| Apertura Española (Ruy López) | `planesBlancas` | Presión sostenida sobre e5 (el alfil de b5 amenaza cambiar el defensor), enroque, Te1, c3 y d4; maniobra típica del caballo Cbd2-f1-g3. |
| Apertura Española (Ruy López) | `planesNegras` | Mantener el punto e5 bien defendido: cada vez que deja de estarlo, Axc6 seguido de Cxe5 aparece. |
| Apertura Española (Ruy López) | `planesNegras` | ...a6 y ...b5 para echar al alfil, ...Ae7, ...d6, enroque; después ...Ca5 y ...c5 para ganar espacio en el flanco de dama. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6"].porQueNo["d7d5"]` | 2...d5?!, el Gambito Elefante: después de 3.exd5 el negro no recupera el peón con comodidad (si 3...Dxd5 4.Cc3 con tiempo) y lo más jugado, 3...e4 4.De2, deja al blanco con un peón de más. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5"].porQue` | Española: ataca al caballo que defiende e5. No amenaza ganar el peón enseguida (todavía hay que cuidar e4), pero la presión dura toda la apertura. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6"].porQue` | Defensa Morphy: pregunta al alfil antes de seguir. Si las blancas cambian en c6, el negro queda con la pareja de alfiles. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6"].porQueNo["d7d5"]` | Igual que antes: abrir el centro con el rey en e8 y e5 sin defensa pierde un peón tras Cxe5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1"].porQue` | Enroca dejando e4 'colgado': si ...Cxe4, Te1 lo recupera (es la variante Abierta). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7"].porQue` | Española cerrada: desarrolla y prepara el enroque sin abrir el juego. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1"].porQue` | Defiende e4 con la torre. Ahora sí amenaza Axc6 y Cxe5, porque e4 ya no queda colgado después. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5"].porQue` | Echa al alfil y corta la amenaza sobre c6: con el alfil en b3, Axc6 ya no existe. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1"].porQue` | Enroca y recién después amenaza Cxe5: hoy el peón está defendido indirectamente. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1"].porQue` | Enroca: si ...Cxe4, Te1 recupera el peón. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4"].porQueNo["a7a6"]` | Ahora es tarde: Axc6 dxc6 y Cxe5 gana un peón, porque e4 está protegido por la amenaza de Te1. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4"].porQue` | Variante Abierta: toma e4. Las blancas lo recuperan, pero el negro obtiene juego activo con ...b5, ...d5 y ...Ae6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4"].porQue` | Lo más incisivo: abre el centro para aprovechar la posición avanzada del caballo de e4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5"].porQue` | Primero echa al alfil de la diagonal a4-e8; recién después ...d5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4"].porQue` | Más combativa que ...f6: el alfil clava el caballo que amenaza e5. Si 6.h3, el negro tiene preparado ...h5, el Gambito Héctor. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5"].porQue` | El Gambito Héctor, y la mejor jugada según Stockfish: el negro deja el alfil en g4 porque, si las blancas lo toman, la columna h se abre contra su rey. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3"].porQue` | Lo prudente: no tomar el alfil y defender e4. El negro sigue con ...Df6 y ...Ce7, y la partida queda igualada. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3"].porQueNo["h3g4"]` | Tomar el alfil abre la columna h: tras ...hxg4, si el caballo se va o toma e5, ...Dh4 llega con un ataque de mate. Lo mejor allí es devolver material con d3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3"].porQueNo["b1c3"]` | 9.Cc3? Cxc3 10.bxc3 Ce7: peones doblados y el alfil de b3 sin juego; Larsen lo da como la refutación, y Stockfish coincide. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5"].porQue` | La «variante italiana»: el alfil apunta a f2. Es más activo que ...Ae7, aunque no ayuda a defender el enroque y estorba el avance ...c5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 e4c5"].porQue` | La «variante Berlín»: el caballo vuelve sin que lo ataquen, para echar al alfil de b3 a c2 y después presionar e5 con ...Ag4 o preparar ...d4. Stockfish la considera algo inferior a ...Ac5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 e4c5 b3c2"].porQue` | La retirada que Larsen pronosticaba que se iba a imponer; Stockfish también la prefiere. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 e4c5 b3c2"].porQueNo["f3d4"]` | 10.Cd4!?, entregando el peón de e5, fue durante mucho tiempo lo más jugado; tras 10...Cxd4 11.cxd4 Cb3 las negras cambian el alfil de b3 y están bien. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8c5 b1d2 e8g8 b3c2 e4f2"].porQue` | El Ataque Dilworth: las negras dan sus dos piezas menores por la torre de f1 y un peón, y abren la columna f contra el rey blanco. Larsen dudaba de que fuera correcto, aunque nadie había mostrado cómo refutarlo; Stockfish la considera la mejor jugada de la posición. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2"].porQue` | La idea es Td1, con la torre frente a la dama negra en la columna d. Tras las victorias de Smyslov y Keres con esta jugada en el Torneo de Candidatos de 1948, muchos abandonaron la Abierta. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 f1d1 e8g8"].porQue` | El enroque natural, que durante años se tuvo por un error; para Larsen (y para Stockfish) es lo mejor. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 f1d1 e8g8"].porQueNo["e4c5"]` | 10...Cc5, la alternativa complicada que se analizaba antes, se encuentra con 11.Axd5! Axd5 12.Cc3 y las negras pasan apuros. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 f1d1 e8g8 c2c4 b5c4 b3c4 d8d7 b1c3"].porQue` | Lo más fuerte, según Larsen y según Stockfish. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 d1e2 f8e7 f1d1 e8g8 c2c4 b5c4 b3c4 d8d7 b1c3"].porQueNo["a2a3"]` | 13.a3? f6! y la iniciativa pasa a las negras. (En Svensson-Ekström, por correspondencia, 1964, las negras también quedaron mejor con 13...Ca5.) |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 b1d2 e4c5 c2c3 d5d4"].porQue` | El contragolpe por el que 9.Cbd2 se dejó de lado después de la Primera Guerra Mundial: el peón avanza atacando c3 y abre la diagonal del alfil de e6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d4 e5d4 e4e5"].porQue` | Lo correcto: echa al caballo de f6 antes de recuperar el peón. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d4 e5d4 e4e5"].porQueNo["f3d4"]` | 7.Cxd4? Cxd4 8.Dxd4 c5 y ...b5 con ...c4: el alfil de a4 queda encerrado, como en el Arca de Noé. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 b7b5 a4b3 f8e7 a2a4 b5b4 d2d4 d7d5"].porQue` | El contragolpe central, lo mejor según Stockfish. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d2d3 f8c5 a4c6 d7c6 b1d2"].porQueNo["f3e5"]` | 7.Cxe5? Dd4: la dama ataca el caballo de e5 y amenaza mate en f2 con el alfil de c5; las blancas pierden una pieza. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d2d3 f8e7 a4c6 d7c6 f3e5"].porQue` | Con el alfil negro en e7 (y no en c5), la captura sí gana un peón: ...Dd4 ya no viene con amenaza en f2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 f8c5"].porQue` | La elección de Bologan: el alfil activo en c5. Si el blanco cambia en c6 y toma e5, el negro no se apura en recuperar el peón: enroca y presiona por la columna e, donde está la dama blanca. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 a4c6 d7c6"].porQue` | Retoma hacia el centro y abre líneas para los alfiles; a cambio, el peón de e5 necesita defensa, que suele llegar con ...Cd7. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 c8b7"].porQue` | La Variante Arcángel: el negro pone sus dos alfiles activos (b7 contra e4 y la diagonal larga; después ...Ac5 o ...Ae7) y busca contrajuego, a cambio de cierta inseguridad de su rey. Panczyk destaca que su teoría es independiente: el negro no necesita conocer la Española cerrada. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 f8c5"].porQue` | La Neo-Arcángel (o «Arcángel moderna»): el alfil va a c5 antes que el de dama a b7. Emms le dedica un capítulo; Stockfish la considera la mejor jugada del negro en la posición. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 c8b7 d2d4"].porQue` | El intento más enérgico de refutar el sistema, y el negro no puede evitarlo; Panczyk muestra que alcanza el contrajuego. Stockfish la considera algo inferior a 7.d3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 f8c5 c2c3"].porQue` | Lo crítico contra el alfil en c5: prepara d4 con tiempo sobre el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 f8c5 c2c3 d7d6"].porQue` | El negro se conforma con un centro chico: después de 7.d4 exd4 8.cxd4 el alfil se retira a b6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 g8f6 e1g1"].porQueNo["f3g5"]` | 6.Cg5?! d5 7.exd5 Cd4! y el negro está bien: el caballo desaloja al alfil y amenaza ...Cxd5 en buenas condiciones. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 g8f6 f3g5 d7d5 e4d5 c6d4"].porQue` | La respuesta correcta: el caballo amenaza ...Cxb3 y vuelve a apuntar a d5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 f8e7 d2d4"].porQue` | Contra 5...Ae7 el golpe central es lo más fuerte: el negro todavía no jugó ...Cf6 y su centro queda flojo (Johnsen y Johannessen). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d6"].porQue` | La Defensa Steinitz: sostiene e5 y prepara ...Ad7 para romper la clavada. Es sólida pero deja al blanco desarrollarse sin molestias; por eso hoy se prefiere la Steinitz Diferida (3...a6 4.Aa4 d6). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d6 d2d4 e5d4"].porQue` | Lo más simple: cambia en el centro y lleva al medio juego típico de la Steinitz. La jugada histórica 4...Ad7 también es jugable. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8e7"].porQue` | Defensa Cozio: el caballo irá a g6 por e7, sin tapar el peón de f. Es pasiva: el blanco suele jugar c3 y d4 con ventaja de espacio. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8e7 e1g1"].porQue` | Enroca primero y prepara c3 y d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8e7 e1g1"].porQueNo["c2c4"]` | c4 no ayuda al centro y debilita d4: ...Cg6 y ...Ab4+ con juego cómodo para el negro. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 b7b5"].porQue` | Echa al alfil de a4 y gana espacio en el flanco de dama; el alfil va a ir a b3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d2d3"].porQue` | Defiende e4 con un peón y deja la lucha central para más adelante: es una línea tranquila de la Española. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 d2d4"].porQue` | Abre el centro para cambiar damas: el blanco busca un final donde pese su mayoría de peones en el flanco de rey. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 d2d4 e5d4 d1d4 d8d4 f3d4 f8d6"].porQue` | Desarrolla y controla e5: el negro se prepara para enrocar largo y hacer valer sus alfiles. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 b1c3"].porQue` | Desarrolla y deja d4 para más adelante. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5"].porQue` | Echa al alfil antes de desarrollar el caballo de rey. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 c2c3"].porQue` | Prepara d4 para armar un centro de peones. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 f7f5 e4f5"].porQue` | Según Stockfish es un error: era mejor 5. d4 (+1,0 contra −0,3, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f8c5 c2c3"].porQue` | Prepara d4 para ganar tiempo contra el alfil de c5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d6 d2d4 c8d7 b1c3 g8f6 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d6 d2d4 e5d4 e1g1"].porQue` | Enroca antes de recuperar el peón: el negro no puede sostener d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f8c5 c2c3"].porQue` | Prepara d4 para ganar tiempo contra el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g7g6"].porQue` | Prepara el fianchetto del alfil de casillas negras. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g7g6 c2c3"].porQue` | Prepara d4 para golpear el centro antes de que el negro complete el fianchetto. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d5"].porQue` | Según Stockfish es un error: era mejor 3... a6 (−0,4 contra −1,7, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d5 f3e5 d8g5 e1g1"].porQue` | Según Stockfish es un error: era mejor 5. Cf3 (+2,1 contra +0,1, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f8b4 c2c3"].porQue` | Ataca el alfil con tiempo y prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 c6d4 f3d4 e5d4 e1g1"].porQue` | Enroca y prepara d3, c3 o f4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 d2d4"].porQue` | Según Stockfish es un error: era mejor 8. c3 (+0,4 contra −0,5, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d4 e5d4 e4e5 f6e4"].porQue` | Centraliza el caballo en lugar de retirarlo. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 b7b5 a4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2"].porQue` | Defiende e4 y prepara Td1: es el Ataque Worrall. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2 b7b5 a4b3 e8g8"].porQue` | Enroca y prepara ...d5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2 b7b5 a4b3 e8g8 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d1e2 b7b5 a4b3 f8e7 a2a4 b5b4"].porQue` | Avanza el peón en lugar de cambiar. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 f8e7 f1e1 b7b5"].porQue` | Echa al alfil antes de retirar el caballo. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5"].porQue` | Echa al alfil antes de desarrollar el de f8. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 c2c3 f7f5 e4f5 c8f5 e1g1"].porQue` | Enroca y prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 e1g1 f6e4 d2d4 f8e7"].porQue` | Desarrolla y prepara ...Cd6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 c6a5 b3f7"].porQue` | Toma el peón de f7 con jaque antes de que cambien el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 d7d6 d2d4 c6d4"].porQue` | Toma el peón. Ojo: tras Cxd4 exd4 Dxd4, las jugadas ...c5 y ...c4 amenazan encerrar al alfil de b3 (la trampa del Arca de Noé). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 d7d6 d2d4 c6d4 f3d4 e5d4 d1d4"].porQue` | Según Stockfish es un error: era mejor 8. c3 (+0,0 contra −4,4, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d7d5 f3e5 d8g5 e5c6"].porQue` | Según Stockfish es un error: era mejor 5. Cf3 (+2,1 contra −0,6, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 f1e1 e8g8 f3d4"].porQue` | Centraliza el caballo y amenaza cambiar el alfil de e6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 f1e1 e8g8 f3d4 d8d7"].porQue` | Según Stockfish es un error: era mejor 11... Cxe5 (+0,2 contra −6,0, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3 f8e7 f1e1 e8g8 f3d4 d8d7 d4e6 f7e6 e1e4"].porQue` | Toma el caballo: si ...dxe4, Dxd7 gana la dama. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 f8e7 f1e1 b7b5 a4b3 d7d5 d4e5 c8e6 c2c3"].porQue` | Le da una casilla al alfil de b3 y prepara Cbd2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 d2d4 e5d4 d1d4 d8d4 f3d4 c8d7"].porQue` | Desarrolla y prepara el enroque largo. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 g7g6"].porQue` | Según Stockfish es un error: era mejor 5... b5 (−0,4 contra −1,3, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 d7d5"].porQue` | Según Stockfish es un error: era mejor 5... b5 (−0,4 contra −2,6, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f6"].porQue` | Según Stockfish es un error: era mejor 3... a6 (−0,4 contra −1,3, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 d8e7"].porQue` | Según Stockfish es un error: era mejor 3... a6 (−0,4 contra −1,3, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a5"].porQue` | Prepara ...Ca7 o ...Cb8 sin perder el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g7g5"].porQue` | Según Stockfish es un error: era mejor 3... a6 (−0,4 contra −2,0, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8f6 f3e5"].porQue` | Según Stockfish es un error: era mejor 4. O-O (+0,3 contra −3,7, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 d7d6 c2c3"].porQue` | Prepara d4 y una casilla de retirada para el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 d7d6 c2c3 e8g8 h2h3"].porQue` | Le quita g4 al alfil negro y prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 g8f6 e1g1 c8b7 d2d3"].porQue` | Juego tranquilo: sostiene e4 y evita las líneas de la Arcángel. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 d7d6 c2c3 c8g4 d2d3 e8g8 b1d2 f6d7 h2h3 g4h5 d2f1"].porQue` | El caballo va a g3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 g8f6 e1g1 f8c5 a2a4 a8b8 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f6e4 d2d4 e5d4"].porQue` | Según Stockfish es un error: era mejor 6... b5 (−0,3 contra −1,5, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 c8b7 d2d4 c6d4 f3d4 e5d4 e4e5 f6e4"].porQue` | El caballo va a e4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 b7b5 a4b3 g8f6 e1g1 f8c5 a2a4 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 c2c3 c8d7 d2d4 g8e7"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 c2c3 c8d7 d2d4 g8e7 c1e3 e7g6"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 d7d6 c2c3 c8d7 d2d4 g8e7 c1e3 e7g6 h2h4"].porQue` | Amenaza h5 contra el caballo. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8e7"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8e7 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8c5 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8e7 c2c3 e7g6"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g7g6 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8e7 c2c3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 b7b5 a4b3 f8e7 a2a4 c8b7 d2d3 e8g8 f1e1 d7d6 b1d2 c6a5 b3a2 c7c5 d2f1"].porQue` | El caballo va a g3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 f8c5 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 f8c5 c2c3 g8e7 e1g1 c5a7 d2d4 e7g6"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 f8c5 c2c3 g8e7 e1g1 c5a7 d2d4 e7g6 c1g5 f7f6 g5e3 e8g8 b1d2 d7d6 f1e1 g8h8"].porQue` | Pone el rey a salvo antes de abrir el juego. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g7g6 c2c3 a7a6 b5a4 d7d6 d2d4 c8d7 e1g1 f8g7 f1e1 g8f6 h2h3 e8g8 a4c2 f6h5"].porQue` | El caballo va a h5, rumbo a f4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 f8c5 c2c3 g8e7 e1g1 e7g6"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f8c5 c2c3 d8e7"].porQue` | Según Stockfish es un error: era mejor 4... Cf6 (−0,7 contra −1,6, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 g8e7 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f8c5 c2c3 d7d5"].porQue` | Según Stockfish es un error: era mejor 4... Cf6 (−0,7 contra −2,2, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 c6b8"].porQue` | Según Stockfish es un error: era mejor 3... a6 (−0,4 contra −1,3, para el bando que juega). |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2 b7b5 a4b3 e8g8 c2c3 d7d5 d2d3 c8b7 b1d2 f8e8 a2a3"].porQue` | Le quita b4 a las piezas negras y prepara Aa2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3 d8f6"].porQue` | La dama apoya al alfil de g4: si hxg4, hxg4 abre la columna h. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3 d8f6 b1d2 g8e7"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2 b7b5 a4b3 e8g8 c2c3 d7d5 d2d3 c8b7 b1d2 f8e8 f1d1 e7f8 d2f1"].porQue` | El caballo va a g3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 d2d3 d7d6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3 d8f6 c1e3 g4f3 d1f3 f6f3 g2f3 f8d6 b1d2 g8e7"].porQue` | El caballo va a g6. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 e1g1 c8g4 h2h3 h7h5 d2d3 d8f6 c1e3 g4f3 d1f3 f6f3 g2f3 f8d6 b1d2 g8e7 f1b1"].porQue` | Prepara b4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d1e2 b7b5 a4b3 e8g8 c2c3 d7d5 d2d3 c8b7 b1d2 f8e8 f1e1 e7f8 a2a3"].porQue` | Prepara b4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 a4c6 d7c6 d1e1 f6d7 b2b3"].porQue` | Prepara Ab2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 a4c6 d7c6 d2d3 f6d7 b1d2 e8g8 d2c4 f7f6 f3h4"].porQue` | El caballo va a f5. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 a4c6 d7c6 d2d3 f6d7 b2b3"].porQue` | Prepara Ab2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d3 b7b5 a4b3 d7d6 a2a4 c8d7 c2c3"].porQue` | Prepara una retirada para el alfil. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 a4c6 d7c6 d2d3 f8d6 b1d2 c8e6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d3 b7b5 a4b3 d7d6 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 d2d3 b7b5 a4b3 d7d6 c2c3 e8g8 f1e1 c6a5 b3c2 c7c5 b1d2 a5c6 d2f1"].porQue` | El caballo va a g3. |
| Apertura Española (Ruy López) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 c2c3"].porQue` | Prepara d4. |
| Apertura Española (Ruy López) | `trampas["e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5c6 d7c6 f3e5 d8d4"]` | En la variante del Cambio de la Española, el peón de e5 parece regalado, pero tras Cxe5? la dama negra contesta Dd4: ataca el caballo y el peón de e4, y recupera el material con buena posición. |
| Gambito Evans | `planesBlancas` | Abrir líneas: Db3 contra f7, alfil a a3, enroque rápido. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4"].porQue` | Aceptar es lo más directo: el negro se queda con el peón y obliga a demostrar la compensación. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3"].porQue` | Ataca el alfil con tiempo y prepara d4. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 d7d6 d1b3"].porQue` | El espíritu del gambito: presiona f7 en lugar de recuperar el peón. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4e7 d2d4 c6a5"].porQue` | Busca cambiar el alfil de c4. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 e5d4 e1g1"].porQue` | Una de las líneas principales del siglo XIX: con el alfil en a5 el negro no necesita tomar en d4, pero si lo hace, las blancas siguen jugando por el desarrollo. Stockfish prefiere 7.Db3. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 e5d4 d1b3"].porQue` | El curso más agresivo y la primera de Stockfish: la dama apunta a f7 junto con el alfil de c4, antes de recuperar nada en el centro. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5"].porQue` | El caballo va a a5 y ataca el alfil de c4. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5 f3e5"].porQue` | Toma el peón de e5 y amenaza f7. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5 f3e5 d8g5 d1f3"].porQue` | Según Stockfish es un error: era mejor 7. Axf7+ (+0,3 contra −1,7, para el bando que juega). |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5 f3e5 g8h6 d2d4"].porQue` | Según Stockfish es un error: era mejor 7. Ae2 (−0,2 contra −1,9, para el bando que juega). |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5 f3e5 g8h6 d2d4 d7d6 c1h6 d6e5 h6g7 h8g8 c4f7 e8f7 g7e5 d8g5"].porQue` | Según Stockfish es un error: era mejor 11... Cc4 (+1,7 contra +0,5, para el bando que juega). |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 b4b5 c6a5 f3e5 g8h6 d2d4 d7d6 c1h6 d6e5 h6g7 h8g8 c4f7 e8f7 g7e5 d8g5 b1d2"].porQue` | Desarrolla y prepara Cf3 para defender g2. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b6 a2a4"].porQue` | Amenaza a5 para atrapar al alfil. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 d7d6 d1b3 d8d7 d4e5 d6e5 e1g1 a5b6 c1a3"].porQue` | Impide el enroque corto del negro. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4c5 d2d4 e5d4 e1g1 d7d6 c3d4 c5b6 b1c3 c8g4 d1a4"].porQue` | Clava el caballo de c6 y amenaza d5. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4c5 d2d4 e5d4 e1g1 d7d6 c3d4 c5b6 b1c3 c8g4 d1a4 g4d7 a4b3 c6a5 c4f7"].porQue` | Toma con jaque antes de perder el alfil. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 e5d4 e1g1 g8e7"].porQue` | Desarrolla el caballo sin tapar el peón de f y prepara ...d5. |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 g8f6"].porQue` | Según Stockfish es un error: era mejor 6... d6 (−0,0 contra −2,0, para el bando que juega). |
| Gambito Evans | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 b7b5"].porQue` | Según Stockfish es un error: era mejor 4... Axb4 (+0,1 contra −1,8, para el bando que juega). |
| Francesa Clásica y Steinitz | `planesNegras` | Juego en el flanco de dama con ...Cc6 y ...Db6. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5"].porQueNo["b8c6"]` | Cf3 y Ae3: las blancas consolidan antes de que llegue ...c5. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6d7 h2h4"].porQue` | Ataque Alekhine-Chatard: si ...Axg5, hxg5 abre la columna h. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6d7 g5e7"].porQue` | Lo clásico: cambia alfiles y sigue con f4. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 g1f3 b8c6 c1e3 c5d4 f3d4 f8c5"].porQue` | Cambia en d4 y opone el alfil al de e3: prepara ...Db6. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8b4"].porQue` | McCutcheon: contraataca en lugar de defenderse del avance e5. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6d7 g5e7 d8e7 f2f4"].porQue` | Sostiene e5. Con los alfiles de casillas negras cambiados, el negro tiene más libertad y rompe con ...c5 y ...f6. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 g1f3 b8c6 c1e3 f8e7"].porQue` | La idea paradójica de McDonald: en vez del habitual ...cxd4 y ...Ac5, el alfil va a e7 y el negro mantiene la tensión. Así el blanco no puede seguir con su plan normal (Cxd4, Dd2 y enroque largo), y si enroca largo de todos modos, ...Da5 y el avance de los peones del flanco de dama llegan rápido al rey. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7"].porQue` | El caballo se retira y prepara ...c5: es la variante Steinitz. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 d4c5 b8c6"].porQue` | Desarrolla y prepara recuperar el peón. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6d7 g5e7 d8e7 f2f4 e8g8 g1f3 c7c5 d1d2"].porQue` | Prepara el enroque largo. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 d4c5 b8c6 a2a3 f8c5 d1g4 e8g8 g1f3 f7f6"].porQue` | Según Stockfish es un error: era mejor 9... Db6 (+0,3 contra −1,1, para el bando que juega). |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8b4 e4e5 h7h6 g5d2 b4c3 b2c3 f6e4 d1g4 e8f8 d2c1"].porQue` | Retira el alfil para no cambiarlo por el caballo: después de ...Cxd2 habría que retomar con el rey. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 g1f3 b8c6 c1e3 c5d4 f3d4 f8c5 d1d2"].porQue` | Prepara el enroque largo. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 f2f4 c7c5 g1f3 b8c6 c1e3 c5d4 f3d4 f8c5 d1d2 e8g8 e1c1 a7a6"].porQue` | Prepara ...b5. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 c3e2"].porQue` | El caballo va a e2 para sostener d4 con c3. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 c3e2 c7c5 c2c3 b8c6 f2f4 d8b6 g1f3 f7f6 a2a3"].porQue` | Prepara b4. |
| Francesa Clásica y Steinitz | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 e4e5 f6d7 c3e2 c7c5 c2c3 b8c6 g1f3 f8e7 a2a3"].porQue` | Prepara b4. |
| Francesa Tarrasch | `planesBlancas` | Contra ...Cf6, centro c3-d4-e5 sostenido con f4. |
| Francesa Tarrasch | `planesNegras` | Presión sobre d4 con ...Cc6 y ...Db6. |
| Francesa Tarrasch | `estructura` | Peón aislado negro en d5 tras ...c5 y exd5 exd5, o cadena d4-e5 tras ...Cf6 y e5. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5"].porQue` | Abre el juego: si ...exd5, el negro queda con un peón aislado. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 g1f3"].porQueNo["f2f4"]` | ...Cc6 y ...Db6: el peón de d4 sufre. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 f1d3"].porQue` | Desarrollo; después c3, Ce2 y f4, con un centro muy firme. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 c2c3"].porQue` | Sostiene d4 antes de que llegue ...c5. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4"].porQue` | Gana tiempo sobre la dama y recupera d4 después, con el desarrollo en marcha. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 f1d3 c7c5 c2c3 b8c6 g1e2"].porQue` | El caballo va a e2 para sostener d4 sin tapar el peón de f. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 f1d3 c7c5 c2c3 b8c6 g1e2 c5d4 c3d4 f7f6"].porQue` | Ataca la cadena por la cabeza: tras exf6 Cxf6 el negro tiene juego de piezas, aunque e6 queda retrasado. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 f8e7"].porQue` | Una jugada de espera: el negro desarrolla y deja que el blanco se comprometa antes de elegir entre ...c5 y ...Cf6. Si 4.e5, recién entonces ...c5. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 f8e7 e4e5 c7c5"].porQue` | Contraataque inmediato contra la base de la cadena. Si 5.Dg4, Watson estudia 5...g6 y 5...Rf8. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 f8e7 e4e5 c7c5 d1g4 e8f8"].porQue` | El rey se aparta antes que debilitar el flanco con ...g6; Stockfish la prefiere. Watson considera que 5...g6 también es jugable, porque sus debilidades no son fáciles de explotar. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 a7a6"].porQue` | Una jugada de espera que Pedersen estudia con los temas del peón aislado: si el blanco sigue con Cgf3, ...c5 lleva a estructuras de peón aislado en las que la casilla b5 ya está controlada. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 a7a6"].porQueNo["c7c6"]` | 3...c6 es demasiado lenta: muchas veces el negro termina jugando ...c5 igual, con un tiempo de menos. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6"].porQue` | La Variante Guimard: bloquea el peón de c, pero presiona d4 y prepara ...Cf6 sin temer la clavada. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3"].porQue` | Desarrollo natural: si 4...Cf6, 5.e5 Cd7 y el blanco tiene una buena ventaja de espacio. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7 d2b3"].porQue` | Refuerza d4 contra ...f6 y ...c5; 6.Ab5 y 6.c3 son igual de buenas. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 d4c5 d6c5 e1g1 g8e7 d2b3"].porQue` | El plan clásico contra el peón aislado: el caballo va a d4, la casilla de bloqueo, con tiempo sobre el alfil de c5. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3"].porQue` | Desarrolla y prepara Ac4 con tiempo contra la dama. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4"].porQue` | Cambia en d4 antes de que el blanco gane tiempo con Ac4. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4 d5d6 e1g1"].porQue` | Enroca antes de recuperar el peón de d4. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3"].porQue` | Desarrolla y presiona d4: el negro va a quedar con un peón aislado. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6"].porQue` | Desarrolla y prepara ...Ce7. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 d4c5 d6c5 e1g1 g8e7"].porQue` | Desarrolla el caballo por e7 para poder romper la clavada con ...Ad7 o ...a6. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 d4c5 d6c5 e1g1 g8e7 c2c3"].porQue` | Controla d4 y prepara Cb3 y Cbd4 para bloquear el peón aislado. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7"].porQue` | El caballo se retira y prepara ...f6. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4 d5d6 e1g1 g8f6 d2b3 b8c6 b3d4 c6d4 f3d4 a7a6"].porQue` | Impide Ab5 y Cb5, y prepara ...b5. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4 d5d6 e1g1 g8f6 d2b3 b8c6 b3d4 c6d4 f3d4 a7a6 f1e1 d6c7 c4f1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4 d5d6 e1g1 g8f6 d2b3 b8c6 b3d4 c6d4 f3d4 a7a6 c4b3 d6c7"].porQue` | Vigila h2 y prepara ...Ad6. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 g1f3 c5d4"].porQue` | Cambia en d4 antes de que el blanco pueda sostenerlo con c3. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 d8d5 g1f3 c5d4 f1c4 d5d6 e1g1 g8f6 d2b3 b8c6 b3d4 c6d4 f3d4 a7a6 f1e1 d6c7 d1e2"].porQue` | La dama va a e2 y apunta a la columna e. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 g1f3 c5d4 f3d4 b8c6 f1b5 c8d7 d4c6 b7c6 b5d3 f8d6 d1e2"].porQue` | Apoya e4 y prepara el enroque. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 d4c5 d6c5 e1g1 g8e7 c2c3 e8g8 d2b3"].porQue` | El caballo va a d4. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 f1d3 c7c5 c2c3 b8c6 g1e2 c5d4 c3d4 d7b6"].porQue` | Según Stockfish es un error: era mejor 8... f6 (−0,3 contra −1,3, para el bando que juega). |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 c7c5 e4d5 g8f6"].porQue` | Según Stockfish es un error: era mejor 4... exd5 (−0,1 contra −1,1, para el bando que juega). |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 g8f6 e4e5 f6d7 f1d3 c7c5 c2c3 b7b6"].porQue` | Prepara ...Aa6. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7 d2b3 f8e7 f1b5 a7a5 a2a4"].porQue` | Frena ...a4. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7 d2b3 f8e7 f1b5 a7a5 a2a4 c6a7 b5d3 b7b6"].porQue` | Prepara ...Aa6. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7 d2b3 a7a5 a2a4"].porQue` | Frena ...a4. |
| Francesa Tarrasch | `notas["e2e4 e7e6 d2d4 d7d5 b1d2 b8c6 g1f3 g8f6 e4e5 f6d7 d2b3 a7a5 a2a4 b7b6"].porQue` | Prepara ...Aa6. |
| Francesa Winawer | `planesBlancas` | Dg4 contra g7 y ataque en el flanco de rey. |
| Francesa Winawer | `planesNegras` | Presión sobre c3 y d4: ...Dc7, ...cxd4, ...Cbc6. |
| Francesa Winawer | `planesNegras` | Si Dxg7, ...Tg8 y juego por la columna g. |
| Francesa Winawer | `rupturas` | a4 y Aa3 de las blancas. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7"].porQue` | El caballo va a f5 o c6 y le deja libre la casilla c7 a la dama. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7"].porQue` | Contraataca c3 y e5: si Dxg7, ...Tg8 y ...cxd4 con juego. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4a5"].porQue` | Mantiene la clavada; si b4, lo consecuente es ...cxd4. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 g1f3"].porQue` | El enfoque posicional: desarrollo y a4 más adelante, sin la salida de la dama. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 d8a5"].porQue` | Los «caprichos de la dama negra» (Moskalenko): la dama ataca c3 y, después de Ad2, puede ir a a4 para frenar el juego blanco en el flanco de dama. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4a5 b2b4 c5d4 d1g4 g8e7 b4a5 d4c3 g4g7 h8g8 g7h7 b8c6"].porQue` | Un paraíso para tácticos de los dos colores: ninguno de los dos bandos tiene estructura sana. Las blancas buscarán cazar el peón de c3 y avanzar el peón de h; el negro, atacar al rey blanco con ...d4, ...Cf5 y ...Ad7-c6. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 c5d4 a3b4 d4c3 d1g4"].porQue` | Por esto 5...cxd4 perdió el favor: las blancas pueden permitirse entregar el peón de c3 y jugar por la iniciativa. FCO nombra 7.Cf3 y 7.Dg4; Stockfish prefiere 7.Dg4, que ataca g7 enseguida. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 f1d3"].porQue` | La jugada principal desde hace años: ataca h7 para provocar una jugada comprometedora en el flanco de rey, y después seguir con el desarrollo normal (Watson). |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 f1d3 b8c6"].porQue` | La solución que prefiere Watson: sana y con buenas chances. El caballo presiona d4 y puede ir a g6 para tapar el ataque. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 f1d3 b8c6 g1f3"].porQue` | Desarrolla. Si ...f5, se transpone a la línea con 8.Cf3. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 f1d3 f7f5"].porQue` | La otra solución: el peón tapa la diagonal hacia h7, y si el blanco toma al paso, el negro gana la columna f. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 f1d3 f7f5 e5f6"].porQue` | Lo más fuerte según Stockfish: abre el juego para los alfiles antes de que el negro consolide. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 g4g7 h8g8 g7h7 c5d4"].porQue` | El contrajuego negro: abre el centro y amenaza ...Dxe5+ y ...dxc3. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 g4g7 h8g8 g7h7 c5d4 g1e2"].porQue` | Cubre c3 y prepara f4 para sostener e5. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 g4g7 h8g8 g7h7 c5d4 g1e2 b8c6 f2f4 c8d7"].porQue` | Desarrolla y prepara el enroque largo. ...dxc3 es igual de buena. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 g1f3 b7b6"].porQue` | Prepara ...Aa6 para cambiar el alfil malo del negro por el bueno del blanco, el de casillas blancas. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 g1f3 b8c6 a3a4"].porQue` | El plan posicional: a4 y Aa3; el alfil se ubica en la diagonal a3-f8, que quedó sin defensor tras el cambio en c3. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 g1f3 b8c6 f1d3 f7f5 e5f6 f8f6 c1g5 e6e5 d3h7"].porQue` | La dama está atacada por el alfil de c8: antes de moverla, toma en h7 con jaque. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8g8 g1f3 b8c6 f1d3 f7f5 e5f6 f8f6 c1g5 e6e5 g4g3"].porQue` | Según Stockfish es un error: era mejor 12. Dh4 (+0,2 contra −0,6, para el bando que juega). |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 a3a4 b8c6 g1f3 d8a5 c1d2 c8d7 f1e2"].porQue` | Desarrollo sencillo: el alfil va a e2 y el blanco prepara el enroque corto. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 g4g7 h8g8 g7h7 c5d4 e1d1"].porQue` | Una jugada rara: el rey se corre a d1 en lugar de desarrollar. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 f1d3"].porQue` | En lugar de tomar en g7, desarrolla el alfil. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 d8c7 f1d3 c5c4 d3e2 e7f5"].porQue` | El caballo va a f5, donde defiende g7 y presiona d4. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 a3a4 b8c6 g1f3 d8a5 c1d2 c8d7 f1e2 f7f6 e5f6"].porQue` | Cambia en f6 en lugar de sostener e5. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 a3a4 b8c6 g1f3 d8a5 d1d2 c8d7 f1d3 f7f6 e5f6"].porQue` | Cambia en f6 en lugar de sostener e5. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 a3a4 b8c6 g1f3 d8a5 d1d2 c8d7 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 g1f3 b7b6"].porQue` | Prepara ...Aa6 para cambiar el alfil malo. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 g1f3 b7b6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 g1f3 b7b6 h4h5 h7h6"].porQue` | Frena el peón: si llega a h6, abre al rey negro. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 h4h5 h7h6"].porQue` | Frena el avance del peón. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 h4h5 h7h6 a1b1"].porQue` | La torre va a la columna b semiabierta. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 h4h5 h7h6 g1f3 b7b6"].porQue` | Prepara ...Aa6 para cambiar el alfil malo. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 g1f3 b7b6 h4h5 h7h6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Francesa Winawer | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 h4h5 h7h6 g1f3 b7b6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 g1f3 d8c7 h2h4 b7b6 h4h5 h7h6 a3a4"].porQue` | Prepara Aa3 para cambiar el alfil de casillas negras. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 g1f3 d8c7 h2h4 b7b6 h4h5 h7h6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 g1f3 b7b6 h4h5 h7h6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Francesa Winawer | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 h2h4 d8c7 h4h5 h7h6 g1f3 b7b6 f1b5"].porQue` | Da jaque para desviar el alfil negro antes de ...Aa6. |
| Defensa Francesa | `planesBlancas` | Avance: sostener la cadena d4-e5 con c3 y Cf3, desarrollar y aprovechar el espacio en el flanco de rey (ataque con f4-f5, Dg4 o el sacrificio en h7 si el caballo negro de f6 desaparece). |
| Defensa Francesa | `planesBlancas` | Con Cc3 o Cd2: mantener la tensión en el centro y elegir el momento de e5. |
| Defensa Francesa | `planesNegras` | Presionar d4 con ...Cc6, ...Db6 y el caballo de g8 por e7 hacia f5. |
| Defensa Francesa | `notas["e2e4 e7e6"].porQue` | Prepara ...d5 apoyado por el peón de e6. A cambio, el alfil de c8 queda encerrado detrás de e6: es el precio de la solidez. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5"].porQue` | La ruptura típica: ataca d4 enseguida, antes de que las blancas consoliden. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3"].porQue` | Sostiene d4 con otro peón: si el negro cambia, las blancas retoman con el peón y mantienen el centro. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3"].porQue` | Tercera pieza que defiende d4. Si cae d4, la cadena entera pierde su base. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3"].porQue` | Desarrolla y apunta al enroque negro. Ojo: deja d4 con una defensa menos, y por eso hay que conocer la trampa de Ab5+ (y el gambito Milner-Barry si el negro toma con la dama tras Cxd4). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4"].porQue` | Cambia ya: después de cxd4 las blancas no tienen el peón de c3 para sostener d4 y el negro puede presionar en la columna c. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 c3d4 c8d7"].porQue` | La única jugada buena: cubre b5 antes de pensar en ganar d4. Con el alfil en d7, Ab5+ ya no existe y el negro amenaza ...Cxd4 de verdad. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 c3d4 c8d7"].porQueNo["g8e7"]` | Natural, pero deja b5 sin cubrir y no amenaza nada todavía: Cc3 y las blancas quedan cómodas. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3"].porQue` | Defiende e4 desarrollando. Ahora el negro elige entre la Winawer (...Ab4), la Clásica (...Cf6) o la Rubinstein (...dxe4). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4"].porQue` | Winawer: clava el caballo que defiende e4 y amenaza con cambiarlo para doblar los peones blancos. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4"].porQueNo["c7c5"]` | Antes de desarrollarse: exd5 exd5 Ab5+ y el negro queda con un peón aislado y el desarrollo atrasado. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5"].porQueNo["a2a3"]` | 4.a3 Axc3+ 5.bxc3 dxe4 obliga al blanco a jugar un gambito: con 6.f3, el Gambito Winckelmann-Riemer que estudia Watson, el negro contesta ...c5 y queda mejor según Stockfish. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5"].porQueNo["d1g4"]` | 4.Dg4 ataca g7 antes de tiempo: ...Cf6 y, si Dxg7, ...Tg8 con desarrollo rápido para el negro. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4d5 e6d5"].porQue` | Estructura simétrica: la Francesa pierde su problema del alfil malo, pero también sus planes de contraataque. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3"].porQue` | El plan más ambicioso: b4 para ganar espacio en el flanco de dama y darle una casilla al alfil de c1. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 c5c4"].porQue` | Cierra el flanco de dama e impide b4 sin perder material; el negro apunta a b3 con ...Ca5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 d8b6 g1f3 c8d7"].porQue` | Prepara ...Ab5 para cambiar el alfil malo de la Francesa. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4d5 e6d5 g1f3"].porQue` | Desarrollo flexible: según lo que haga el negro, c4 puede abrir el juego. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4"].porQue` | Variante Rubinstein: cede el centro, pero no deja debilidades. El plan es ...Cd7, ...Cgf6 y ...c5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 b8d7"].porQue` | Prepara ...Cgf6: si Cxf6+, el negro retoma con el otro caballo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 c8d7"].porQue` | La otra idea: ...Ac6 para activar el alfil de c8 antes que nada. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6"].porQue` | El plan de Nimzowitsch: ...Aa6 para cambiar el alfil malo de la Francesa. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d3"].porQue` | Prepara el Ataque Indio de Rey (Cd2, Cf3, g3 y Ag2) y evita la lucha central inmediata. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 g8h6"].porQue` | La alternativa dinámica que estudia Moskalenko: el caballo va a f5 para presionar d4 junto con la dama desde b6. El blanco puede cambiarlo con Axh6, a costa de dejarle al negro la pareja de alfiles y la columna g. Stockfish la considera algo inferior a 5...Db6 o 5...Ad7. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3 d7d5 e4e5 c7c5 b2b4"].porQue` | Gambito del flanco: el blanco entrega el peón de b para desviar al de c5 y quedarse con el centro. Stockfish lo considera algo inferior a 4.c3. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3 d7d5 e4e5 c7c5 b2b4 d5d4"].porQue` | El «tornillo de Kortchnoi» que adopta Moskalenko: en lugar de aceptar el gambito, el negro clava un peón en d4 y gana espacio en el centro. Stockfish prefiere tomar (...cxb4), pero ...d4 también es jugable. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2"].porQue` | Anti-Winawer (la variante de los dos caballos): si el negro cambia en c3, el caballo de e2 retoma sin que se doblen los peones. A cambio, el caballo tapa al alfil de f1. Stockfish prefiere el avance 4.e5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 c1d2 d5e4 d1g4 g8f6 g4g7 h8g8 g7h6 d8d4"].porQue` | La respuesta que recomienda Watson: la dama toma el peón central, que el blanco dejó sin defensa al salir a cazar el peón de g7. Stockfish la considera la mejor. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 c8d7"].porQue` | El plan de Bosch: ...a6 y ...Ab5 para cambiar el alfil «malo» de la Francesa. La dama se queda en d8, así el blanco no consigue el avance d5 con ganancia de tiempo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 c8d7 g1f3 a7a6"].porQue` | Prepara ...Ab5. Si el blanco cambia en b5, el negro retoma con el peón de a: queda con peones doblados, pero con la columna a abierta para la torre y un peón en b5 que controla casillas blancas. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 c8d7 g1f3 a7a6 f1e2 c5d4"].porQue` | Primero se cambia en d4, y recién después ...Ab5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 b7b6"].porQue` | Una idea poco común pero lógica en el Avance: preparar ...Aa6 para cambiar el alfil «malo» de la Francesa (McDonald). Stockfish prefiere el habitual 3...c5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 b7b6 c2c3 d8d7"].porQue` | Impide Da4+ y deja todo listo para ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 d8b6 g1f3 c8d7 f1d3 c5d4"].porQue` | Primero se cambia en d4. Si 6...Ab5 enseguida, 7.dxc5! Axc5 8.b4 incomoda al alfil: después de 8...Axf2+? 9.Re2 el alfil queda encerrado y se pierde (McDonald). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 c2c4 d5c4"].porQue` | Hay que reaccionar contra el ataque al peón de d5: después de ...dxc4 el negro conserva un juego activo con la pareja de alfiles. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 c8d7 g1f3 d7c6 e4g5 f8d6"].porQue` | El antídoto contra 6.Cg5 en la Fort Knox: tapa la diagonal y prepara ...h6 sin permitir sacrificios en f7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 a7a6"].porQue` | La Defensa San Jorge con ...e6: prepara ...b5 y ...Ab7 en vez de ...d5. Es jugable, pero le da al blanco libertad en el centro. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 a7a6 g1f3 d7d5"].porQue` | Lo más sólido según Stockfish: vuelve a una Francesa con ...a6 ya jugado. |
| Defensa Francesa | `notas["e2e4 e7e6 b1c3 d7d5"].porQue` | Ataca e4: el plan de siempre en la Francesa. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1"].porQue` | Enroca: el blanco prepara e5 y un ataque en el flanco de rey. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1 a8b8"].porQue` | Prepara ...b5 para atacar en el flanco de dama, donde el negro tiene más espacio. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 d1g4"].porQue` | Según Stockfish es un error: era mejor 4. c3 (+0,3 contra −1,0, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 b1c3 d7d5 d2d4 f8b4 c1d2 d5e4 d1g4 d8d4"].porQue` | Toma el peón central en lugar de defender g7. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3"].porQue` | Desarrolla y se guarda la elección entre d4, d3 y e5. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3 d7d5 e4e5 c7c5"].porQue` | Ataca la cadena de peones por su base antes de que el blanco la sostenga con d4. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 g1f3 c5d4"].porQue` | Cambia en d4 antes de que el blanco lo sostenga con c3. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 g1f3"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,4 contra −0,9, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,4 contra −1,1, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 a2a3"].porQue` | Pregunta al alfil antes de decidir el centro. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 c2c4"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,4 contra −0,8, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 b2b3"].porQue` | Prepara el fianchetto de dama para presionar la gran diagonal. |
| Defensa Francesa | `notas["e2e4 e7e6 f2f4"].porQue` | Gana espacio en el flanco de rey y prepara Cf3. |
| Defensa Francesa | `notas["e2e4 e7e6 f2f4 d7d5 g1f3"].porQue` | Según Stockfish es un error: era mejor 3. d3 (−0,1 contra −1,3, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 d1e2"].porQue` | Defiende e4 con la dama y prepara el desarrollo del flanco de rey. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 d1e2 e6e5"].porQue` | Según Stockfish es un error: era mejor 3... dxe4 (+0,2 contra −1,5, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 d1e2 e6e5 f2f4"].porQue` | Según Stockfish es un error: era mejor 4. exd5 (+1,5 contra −1,4, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 d1e2 e6e5 f2f4 e5f4"].porQue` | Según Stockfish es un error: era mejor 4... exd4 (+1,4 contra −0,5, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 c8d7 g1f3 d7c6 e4g5"].porQue` | Evita el cambio y apunta a e6 y f7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 a7a6"].porQue` | Prepara ...dxe4 y ...b5, y evita Cb5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 a7a6 g1f3 g8f6 e4e5 f6d7"].porQue` | El caballo se retira y prepara ...c5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 a7a6 g1f3 g8f6 e4e5 f6d7 a2a3"].porQue` | Evita ...Ab4 y prepara b4. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−0,4 contra −1,9, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 c5d4"].porQue` | Cambia en d4 en lugar de retirar el alfil. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 c1d2"].porQue` | Rompe la clavada y deja que el negro decida si cambia en c3. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 c1d2 g8e7"].porQue` | Desarrolla y prepara ...Cbc6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 a3a4"].porQue` | Prepara Aa3 para activar el alfil de casillas negras. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1 a8b8 e4e5 f6d7"].porQue` | El caballo se retira y prepara ...b5 y ...f6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 e1g1 c8d7"].porQue` | Desarrolla en lugar de tomar en e5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 a7a6 g1f3 g8f6 e4e5 f6d7 c3e2"].porQue` | Prepara c3 para sostener d4. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3 d7d5 b1c3"].porQue` | Desarrolla los dos caballos y deja d4 para después. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2"].porQue` | Prepara f4 o Cf3 y defiende e4 desde atrás. |
| Defensa Francesa | `notas["e2e4 e7e6 g2g3"].porQue` | Prepara el fianchetto: esquema de Ataque Indio de Rey. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 c7c5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,5 contra −1,5, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1e3"].porQue` | Según Stockfish es un error: era mejor 4. e5 (+0,3 contra −0,9, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2 d5e4 a2a3 b4c3 e2c3 b8c6 f1b5 g8e7"].porQue` | Desarrolla y sostiene c6, para no quedar con peones doblados después de Axc6+. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2 d5e4 a2a3 b4c3 e2c3 b8c6 f1b5 g8e7 c1g5 f7f6 g5e3"].porQue` | Retira el alfil a una casilla segura desde donde también sostiene d4. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2 d5e4 a2a3 b4c3 e2c3 b8c6 f1b5 g8e7 c1g5 f7f6 g5e3 e8g8"].porQue` | Enroca: el rey sale del centro antes de que se abra el juego. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2 d5e4 a2a3 b4c3 e2c3 b8c6 f1b5 g8e7 c1g5 f7f6 g5e3 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 g1e2 d5e4 a2a3 b4c3 e2c3 b8c6 f1b5 g8e7 c1g5 f7f6 g5e3 e8g8 d1d2 f6f5 e1c1 a7a6 b5c6"].porQue` | Cambia el alfil por el caballo en lugar de retroceder. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 e1g1 c8d7 f1e1 g8e7 h2h4"].porQue` | Gana espacio y amenaza h5 contra el caballo que vaya a g6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 c3d4 c8d7 e1g1 c6d4 f3g5"].porQue` | Salta a g5 buscando ataque sobre f7 y h7 en lugar de recuperar el peón. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 c1e3"].porQue` | Defiende d4 con el alfil en lugar de con Cf3. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 c1e3 d8b6 d1d2 c8d7"].porQue` | Desarrolla y prepara ...Tc8. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 d1g4 c5d4 g1f3"].porQue` | Desarrolla en lugar de recuperar el peón. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 c2c4 d5c4 d4d5 a7a6"].porQue` | Ataca el alfil antes de mover el caballo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 a2a3 b4c3 b2c3 d5e4 f2f3 c7c5"].porQue` | Golpea d4 en lugar de defender e4. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 a2a3 b4c3 b2c3 d5e4 f2f3 c7c5 a1b1"].porQue` | La torre va a la columna b. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 g8h6 b2b4 c5d4 c3d4 h6f5 c1b2 c8d7"].porQue` | Desarrolla y prepara ...Tc8. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 g8h6 b2b4 c5d4 c3d4 h6f5 c1b2 c8d7 g2g4 f5e7 b1c3 c6a5 d1c2"].porQue` | Saca la dama y prepara el enroque largo. |
| Defensa Francesa | `notas["e2e4 e7e6 g1f3 d7d5 b1c3 g8f6 e4e5 f6d7"].porQue` | Retira el caballo y prepara ...c5. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 c2c3"].porQue` | Prepara d4. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 c2c3 g7g6"].porQue` | Prepara el fianchetto propio. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 g8h6 f1d3 c5d4 e1g1"].porQue` | Enroca y deja la recaptura en d4 para después. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 g8h6 f1d3 c5d4 e1g1 c8d7"].porQue` | Desarrolla y prepara ...Tc8. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 a2a3 g8h6 f1d3 c5d4 e1g1 c8d7 b2b4 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 f1d3 d5e4 d3e4 g8f6 e4f3 c7c5 g1e2 b8c6 c1e3 c5d4 e2d4 c6e5 b1c3 a7a6 d1e2"].porQue` | Prepara el enroque largo. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 f1g2 g7g6"].porQue` | Prepara el fianchetto propio. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 f1g2 g7g6 g1f3 f8g7 e1g1 g8e7 c2c3"].porQue` | Prepara d4. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 f1g2 g7g6 g1f3 f8g7 e1g1 g8e7 c2c3 e8g8 d2d3 d7d6 b1a3"].porQue` | El caballo va a c2 para apoyar d4 o b4. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g1f3 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g1f3 b8c6 g2g3 g7g6"].porQue` | Prepara el fianchetto propio. |
| Defensa Francesa | `notas["e2e4 e7e6 b2b3 d7d5 c1b2 d5e4 b1c3 g8f6 d1e2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 b2b4"].porQue` | Según Stockfish es un error: era mejor 4. c3 (+0,3 contra −1,3, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d1e2 c7c5 g2g3 b8c6 g1f3 g7g6"].porQue` | Prepara el fianchetto propio. |
| Defensa Francesa | `notas["e2e4 e7e6 b2b3 d7d5 c1b2 d5e4 b1c3 g8f6 g2g4"].porQue` | Según Stockfish es un error: era mejor 5. De2 (+0,1 contra −0,8, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 b2b3 d7d5 c1b2 d5e4 b1c3 g8f6 g2g4 c8d7"].porQue` | Desarrolla y prepara ...Ac6 contra la diagonal larga. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 g1h3"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,4 contra −0,7, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 b2b4 f8b4 e4e5"].porQue` | Gana espacio después de entregar el peón de b. |
| Defensa Francesa | `notas["e2e4 e7e6 f1b5"].porQue` | Una rareza: el alfil se expone a ...c6 o ...a6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 g1f3 c5d4 f1d3"].porQue` | Desarrolla en lugar de recuperar el peón: el blanco juega un gambito. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 g1f3 c5d4 f1d3 b8c6 e1g1 g8e7 c1f4 e7g6 f4g3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 b8c6 g1f3 d8a5 c1d2 g8e7 a3a4"].porQue` | Prepara Aa3 o Ab5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 d8c7 d1g4 f7f5"].porQue` | Según Stockfish es un error: era mejor 7... Ce7 (−0,5 contra −1,5, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4c3 b2c3 d8d7"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6g8 g5e3 b7b6"].porQue` | Prepara ...c5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8f8 c1d2 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 d8c7 d1g4 f7f5 g4g3 c5d4 c3d4 g8e7 c1d2 e8g8 f1d3 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 d8a5 c1d2 a5a4 d1g4 e8f8 g4d1 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4c3 b2c3 g8e7 d1g4 e7g6"].porQue` | El caballo va a g6 y defiende el flanco de rey. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4c3 b2c3 g8e7 d1g4 e7g6 h2h4"].porQue` | Amenaza h5 contra el caballo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4c3 b2c3 g8e7 d1g4 e7g6 h2h4 h7h5"].porQue` | Frena el peón. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4c3 b2c3 g8e7 d1g4 e7g6 h2h4 h7h5 g4d1 c8a6 f1a6 b8a6 c1g5 d8d7 g1e2 d7c6"].porQue` | Según Stockfish es un error: era mejor 12... Da4 (−0,9 contra −2,1, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4f8 g1f3 d8d7"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 d8d7"].porQue` | Prepara ...b6 y ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 d8d7 a2a3 b4c3 b2c3 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 e7f6 g1f3 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 e7f6 g1f3 e8g8 d1d2 b8d7 e1c1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 c7c5 a2a3 b4c3 b2c3 g8e7 d1g4 e8f8 c1d2 d8c7 f1d3 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 b7b6 a2a3 b4f8 g1f3 g8e7 h2h4 h7h6"].porQue` | Frena el peón. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 f8b4 e4e5 d8d7 a2a3 b4f8 g1f3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 e7f6 g1f3 e8g8 d1d2 b8d7 e1c1 f6e7 f1d3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 e7f6 g1f3 e8g8 d1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 a7a6"].porQue` | Prepara ...b5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 a7a6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 a7a6 g2g3 b7b5 f1g2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 d8d5 e4c3 f8b4 g1f3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 b8c6 g1f3 g8f6 e4e5 f6e4"].porQue` | El caballo va a e4. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 d5e4 c3e4 e6e5"].porQue` | Según Stockfish es un error: era mejor 4... Cd7 (−0,5 contra −1,5, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−0,4 contra −1,9, para el bando que juega). |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 f6f5 e4c3 a7a6"].porQue` | Prepara ...b5. |
| Defensa Francesa | `notas["e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 d5e4 c3e4 f8e7 g5f6 g7f6 g1f3 f6f5 e4c3 a7a6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Francesa | `trampas["e2e4 e7e6 d2d4 d7d5 e4e5 c7c5 c2c3 b8c6 g1f3 d8b6 f1d3 c5d4 c3d4 c6d4 f3d4 b6d4 d3b5"]` | La trampa más conocida del Avance: el peón de d4 parece colgado, pero tras ...Cxd4 Cxd4 Dxd4, Ab5+ descubre la dama de d1 contra la dama negra y la gana. |
| Defensa Francesa | `trampas["e2e4 e7e6 d2d4 d7d5 e4e5 b7b6 c2c3 c8a6 f1a6 b8a6 d1a4"]` | 3...b6 4.c3 Aa6?? 5.Axa6 Cxa6 6.Da4+: el jaque ataca también el caballo de a6. Lo correcto es 4...Dd7 antes de ...Aa6. |
| Defensa Francesa | `trampas["e2e4 e7e6 d2d4 d7d5 e4d5 e6d5 g1f3 b8c6 f1b5 f8d6 c2c4 g8e7 c4c5"]` | En el Cambio, 6.c4 Cge7?? 7.c5: el alfil de d6 no tiene retirada. Lo correcto es 6...dxc4. |
| Gambito de Dama | `planesBlancas` | Presión sobre d5 con Cc3, Ag5 (clavando el caballo de f6) y la columna c. |
| Gambito de Dama | `planesBlancas` | En el Gambito aceptado, recuperar el peón con e3 (o e4) y Axc4 con un centro fuerte. |
| Gambito de Dama | `planesNegras` | Sostener d5 con ...e6 y ...Cf6, desarrollar y enrocar. |
| Gambito de Dama | `planesNegras` | Resolver el problema del alfil de c8: ...b6 y ...Ab7, o cambiarlo, o abrirle la diagonal con ...dxc4 y ...e5. |
| Gambito de Dama | `estructura` | En el Gambito de Dama rehusado, peones negros en d5 y e6 contra d4 y c4. Tras cxd5 exd5 aparece la estructura Carlsbad: las blancas juegan en el flanco de dama (ataque de minorías) y el negro en el de rey o en el centro. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7"].porQue` | Rompe la clavada y prepara el enroque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8"].porQue` | El negro enroca y prepara ...Cbd7, ...c6 o ...h6 según el plan. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7"].porQue` | Desarrolla y prepara ...c6; deja armada la trampa del elefante. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e3 g8f6"].porQue` | Desarrolla sin aferrarse al peón: después vienen ...e6 y ...c5 contra el centro. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3"].porQue` | Lo más flexible: desarrolla sin apurarse a recuperar el peón y no ofrece blancos al contraataque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6"].porQue` | La línea principal: prepara ...b5 y ...Ab7, y espera un mejor momento para cambiar en d4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4"].porQue` | Toma el centro con los dos peones; el negro lo ataca con ...e5, ...c5 o ...Cf6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e3 e7e5 f1c4"].porQue` | Lo correcto: tras ...exd4 exd4, el peón aislado de d4 está bien apoyado por las piezas blancas. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c8f5 b1c3"].porQue` | El plan de Schandorff contra 2...Af5: Cc3, e6, Cf3 c6 y Db3 contra b7. Stockfish prefiere el cambio inmediato 3.cxd5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c5 c4d5"].porQue` | Contra 2...c5, que Schandorff considera «ingenua», el cambio en d5 aprovecha la ventaja de desarrollo del blanco. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3"].porQue` | Desarrolla y defiende d4 indirectamente: después de 4...exd4 5.Axc4 el juego queda parejo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3"].porQueNo["f1c4"]` | 4.Axc4? Dxd4: la dama negra toma el peón central y, tras el cambio de damas, el negro queda con un peón de más. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 a7a6"].porQue` | La Variante Alekhine del Gambito de Dama Aceptado: prepara ...b5 y ...Ab7 si el blanco se demora en recuperar el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 a7a6 e2e3"].porQue` | Lo más simple: Axc4 recupera el peón, y si 4...b5, a4 ataca la cadena. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6"].porQue` | La Defensa Triangular: el negro se reserva ...dxc4 (la Noteboom) o ...f5 (un Stonewall), pero permite el Gambito Marshall. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 e2e4"].porQue` | El Gambito Marshall: para Stockfish lo más fuerte, abre el juego antes de que el negro complete el desarrollo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 e2e4 d5e4 c3e4 f8b4 c1d2"].porQue` | La línea principal: tras 6...Dxd4 7.Axb4 Dxe4+, el blanco entrega el peón de d4 a cambio de la pareja de alfiles y el dominio de las casillas negras. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4"].porQue` | La Noteboom: el negro toma el peón y lo sostendrá con ...b5 y ...Ab4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4 a2a4 f8b4 e2e3 b7b5 c1d2"].porQue` | Rompe la clavada: el blanco prepara axb5 y b3 para recuperar el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 c1g5 h7h6"].porQue` | Le pregunta al alfil enseguida. Con el caballo en f3, retirarse a h4 permite ...dxc4 con juego cómodo, así que Stockfish prefiere el cambio en f6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 c1g5 h7h6 g5f6"].porQueNo["g5h4"]` | Ah4 dxc4: el blanco tiene que recuperar el peón y el negro se desarrolla sin problemas, por ejemplo Cc3 Ab4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c5 c4d5"].porQue` | Abre el juego antes de que el negro termine de desarrollarse. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c5 c4d5 c5d4"].porQue` | Lo más preciso: cambia en d4 antes de retomar en d5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 d1a4 b8c6"].porQue` | Tapa el jaque desarrollando una pieza. La dama blanca que recupere en c4 va a quedar expuesta a los ataques de las piezas menores negras. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4"].porQue` | Para Schandorff, la esencia de la estrategia blanca es desarrollarse rápido: el peón de d4 se recupera más tarde, y si no, el negro tendrá que tomar medidas extremas. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 b8c6 e1g1"].porQue` | Lo normal: completa el desarrollo del flanco de rey lo antes posible. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 b8c6 e1g1 c8e6"].porQue` | La línea principal, y la más aguda: el negro ofrece el cambio del alfil de c4 y busca un desequilibrio en vez de jugar seguro (Schandorff). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 b8c6 e1g1 c8e6 c4b5"].porQue` | Una alternativa aguda: clava el caballo que defiende d4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 b8c6 e1g1 c8e6 c4b5 f8c5 b2b4"].porQue` | Muy enérgico, según Schandorff: gana tiempo sobre el alfil y prepara Ab2 contra d4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 b8c6 e1g1 g8f6"].porQue` | Desarrolla, pero deja a b7 y f7 sin cuidar. Schandorff la considera una línea secundaria. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 f8b4"].porQue` | Un jaque que molesta el desarrollo blanco antes de decidir dónde va el caballo de b8. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 e5d4 f1c4 f8b4 b1d2"].porQue` | Lo más complicado, según Schandorff. Ad2 también es jugable. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 e7e5 g1f3 f8b4"].porQue` | Un jaque tentador, según Schandorff. La línea principal sigue siendo 4...exd4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 b7b5 a2a4"].porQueNo["b2b3"]` | b3?! e5: el negro contraataca el centro antes de que el blanco recupere el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 b7b5 a2a4 c7c6"].porQue` | Sostiene b5. Tras axb5 cxb5 Cc3, el negro tiene que proteger b5 con jugadas incómodas como ...Ad7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 c7c5"].porQue` | Ataca el centro con un peón. Schandorff la considera algo liviana: las líneas agudas y las tranquilas son mejores para el blanco. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 c7c5 d4d5 e7e6"].porQue` | Ataca d5 enseguida, antes de que el blanco consolide el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 c7c5 d4d5 e7e6 f1c4"].porQue` | Recupera el peón. Si ...exd5, Axd5 y el alfil queda en una gran casilla central. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 c7c5 d4d5 g8f6 b1c3"].porQue` | Defiende e4 y prepara Axc4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 c7c5 d4d5 g8f6 b1c3 e7e6"].porQue` | Ataca el centro. La alternativa aguda, ...b5, fue puesta fuera de servicio por las ideas de Peter Heine Nielsen, según Schandorff. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 b8c6"].porQue` | Ataca el centro con piezas: recuerda a la Chigorin. El negro busca complicaciones tácticas, aunque en el fondo quiere una posición sana. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 b8c6 g1f3 c8g4 d4d5"].porQue` | La línea más controlada: gana espacio con tiempo (Schandorff también analiza 5.Axc4, más agudo). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 g8f6"].porQue` | Una jugada profunda, según Schandorff: invita al peón de e a avanzar para llevar el caballo a d5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 g8f6 e4e5"].porQue` | Hay que aceptar el desafío: el blanco gana espacio, y eso va a marcar el juego por mucho tiempo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 g8f6 e4e5 f6d5"].porQue` | El caballo va a la casilla que el avance dejó libre. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 a2a4"].porQue` | Impide ...b5, la expansión normal del negro. A cambio, no ayuda al desarrollo y debilita la casilla b4 (Buckley). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 a2a4 b8c6 d1e2"].porQue` | Prepara Td1 y la ruptura e4. La tensión central se resuelve después con d5 o con dxc5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 d1e2"].porQue` | Prepara Td1 y e4 sin gastar un tiempo en a4. A cambio, deja jugar ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 d1e2 b7b5"].porQue` | Gana espacio con tiempo y prepara ...Ab7: los alfiles negros de b7 y c5 apuntan al enroque blanco (Buckley). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 d1e2 b7b5 c4b3 c8b7"].porQue` | El alfil a la gran diagonal: controla e4 y, a veces, puede tomar en f3 para doblarle los peones al blanco delante del rey. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 c4b3"].porQue` | Una forma más aguda: si el negro juega ...Cc6 y el blanco Cc3, los cambios en d4 dejan posiciones de peón aislado más peligrosas para el negro (Schandorff). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3"].porQue` | Desarrolla y controla e5: el blanco completa el planteo clásico antes de decidir dónde poner el alfil de f1. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 b8d7"].porQue` | Desarrolla y prepara ...c6 y ...dxc4 con ...e5 o ...c5 más adelante. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 b8d7 g1f3 e8g8 a1c1"].porQue` | Pone la torre en la columna c, que se va a abrir cuando alguien cambie en c4 o en d5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 h7h6"].porQue` | Pregunta al alfil: el negro decide si lo cambia o si se retira a h4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 h7h6 g5h4 e8g8"].porQue` | Enroca antes de liberarse con ...Ce4 o ...b6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6"].porQue` | Refuerza d5 y deja abierta la posibilidad de ...dxc4 seguido de ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 f8e7 e2e3 b8d7"].porQue` | Desarrolla y prepara ...dxc4 con ...Cd5 para cambiar piezas. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 f8e7 e2e3 b8d7 a1c1"].porQue` | Pone la torre en la columna c antes de mover el alfil de f1: si el negro toma en c4, el alfil lo recupera de una sola vez. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4 a2a4"].porQue` | Impide ...b5, que sostendría el peón de c4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4 a2a4 f8b4 e2e3"].porQue` | Prepara Axc4 para recuperar el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 f8e7"].porQue` | Desarrolla el alfil primero para evitar la variante del Cambio con Ag5: si cxd5 exd5, el alfil de c1 ya no tiene g5 tan cómoda. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1"].porQue` | Enroca antes de decidir qué hacer con el peón de d4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 f8e7 e2e3 d5c4"].porQue` | Toma en c4 antes de que el blanco juegue Tc1, para que el alfil recupere el peón perdiendo un tiempo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 b8d7"].porQue` | Desarrolla y prepara ...Da5: es la Defensa Cambridge Springs si el blanco sigue con e3. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7"].porQue` | Desarrolla de forma sólida y prepara el enroque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7 e1g1 e8g8"].porQue` | Enroca también. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7 e1g1 e8g8 b1c3"].porQue` | Desarrolla y prepara e4 para ocupar el centro. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 e7e6 e2e3"].porQue` | Prepara Axc4 para recuperar el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 g7g6"].porQue` | Prepara el fianchetto: es la Eslava-Schlechter, con ideas de Grünfeld. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 a7a6"].porQue` | Prepara ...b5 para ganar espacio en el flanco de dama con tiempo sobre el alfil. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 a7a6 b1c3"].porQue` | Desarrolla y prepara e4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 a7a6 e2e3 c8g4 f1c4 e7e6"].porQue` | Abre el alfil de f8 y prepara ...Cf6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 c8f5 c4d5"].porQue` | Cambia en d5: con el alfil negro afuera, el blanco busca presionar b7 con Db3. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c8f5"].porQue` | Desarrolla el alfil antes de cerrarlo con ...e6: es la Defensa Báltica. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c8f5 c4d5 f5b1 d1a4"].porQue` | Jaque intermedio: antes de retomar el alfil de b1, el blanco gana un tiempo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c8f5 c4d5 f5b1 d1a4 c7c6 d5c6"].porQue` | Toma el peón y amenaza cxb7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 b8c6 b1c3 g8f6 g1f3 c8g4"].porQue` | Clava el caballo de f3 y presiona d4: es el plan típico de la Chigorin. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 g8f6 c4d5"].porQue` | Cambia en d5: el caballo que retome va a quedar expuesto a e4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4 a2a4 f8b4 e2e3 b4c3"].porQue` | Según Stockfish es un error: era mejor 6... b5 (−0,4 contra −1,2, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 d5c4 a2a4 f8b4 e2e3 b4c3 b2c3 b7b5 a4b5"].porQue` | Según Stockfish es un error: era mejor 8. Ce5 (+1,3 contra +0,2, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7"].porQue` | Desarrolla y prepara ...c6, ...h6 o ...b6 según cómo siga el blanco. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3"].porQue` | Desarrolla y se guarda la elección entre Cc3 y g3. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 e8g8"].porQue` | Enroca: contra el alfil en f4, el negro suele seguir con ...c5 o ...b6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6"].porQue` | Refuerza d5 y prepara ...Cbd7 y ...Ad6: es la Semieslava. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 e2e3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1d2 b8d7"].porQue` | Desarrolla y prepara ...c5 o ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3"].porQue` | Prepara el fianchetto: es la Catalana. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4"].porQue` | Jaque para desviar al alfil de c1 antes de desarrollarse. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6"].porQue` | Refuerza d5 y prepara ...dxc4 con ...Cd5 para cambiar piezas. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 a7a6"].porQue` | Prepara ...dxc4 y ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 a7a6 c4c5"].porQue` | Cierra el flanco de dama y frena ...b5 y ...c5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 a7a6 c4c5 c7c6"].porQue` | Refuerza d5 y prepara ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d8c7"].porQue` | Prepara ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 d1e2 b7b5 c4b3 c8b7 b1c3"].porQue` | Desarrolla y prepara Td1 y e4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6"].porQue` | Refuerza d5 y prepara ...Da5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8d7 e5c4 d7b6 c4e5"].porQue` | Evita el cambio y vuelve a centralizar el caballo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7 e1g1 e8g8 b1c3 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7 e1g1 e8g8 b1c3 a7a6 a2a4"].porQue` | Frena ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5 f3e5 b8a6 e2e3 a6b4"].porQue` | El caballo va a b4, una buena casilla que dejó a4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 b8c6 b1c3 g8f6 g1f3 c8g4 c4d5 f6d5 e2e4 g4f3"].porQue` | Cambia el alfil por el caballo antes de mover el suyo. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 c4d5 e6d5 g2g3"].porQue` | Prepara el fianchetto contra el peón de d5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 d1c2 a7a6"].porQue` | Prepara ...dxc4 y ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 d1c2 a7a6 c4d5"].porQue` | Cambia en d5 antes de que el negro tome en c4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 a2a3 a7a6"].porQue` | Prepara ...dxc4 y ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a1d1 a7a6"].porQue` | Prepara ...dxc4 y ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 f1d3 c7c6"].porQue` | Refuerza d5 y prepara ...dxc4 con ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 e2e3 e8g8 b2b3"].porQue` | Prepara Ab2 y protege c4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 e2e3 e8g8 b2b3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7"].porQue` | Desarrolla y prepara ...b6 o ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 d2f4 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d2f4 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 d1c2"].porQue` | Controla e4 antes de enrocar. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 d5c4 d3c4 f6d5 g5e7 d8e7 e1g1 d5c3 c1c3 e6e5 d1b1"].porQue` | Aparta la dama de la columna d antes de que se abra. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 a7a6 e3e4 c6c5 e4e5 c5d4 c3b5"].porQue` | Toma en b5 y amenaza Cd6+. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 f8d6"].porQue` | Desarrolla y prepara ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 c8b7 e3e4 b5b4 c3a4"].porQue` | El caballo va al borde, pero frena ...c5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a2a3"].porQue` | Prepara b4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 b1c3"].porQue` | Desarrolla y prepara e4 para recuperar el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 b1c3 a7a6"].porQue` | Prepara ...b5 para sostener el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 c8g4"].porQue` | Desarrolla el alfil afuera antes de ...e6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 b8d7"].porQue` | Prepara ...Cb6 para sostener el peón. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 e2e4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... b5 (−0,3 contra −1,3, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 d7d5 c1g5 f8b4"].porQue` | Clava el caballo de c3 antes de que salga: es la Variante Viena. |
| Gambito de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 d7d5 b1c3 d5c4"].porQue` | Toma en c4 antes de que el alfil salga. |
| Gambito de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 d7d5 b1c3 f8e7 c1g5 e8g8 d1c2"].porQue` | Prepara el enroque largo y controla e4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 a7a6"].porQue` | Prepara ...dxc4 y ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 g1f3 c7c6 a1c1 d8a5"].porQue` | Según Stockfish es un error: era mejor 6... dxc4 (+0,8 contra −0,1, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 d7d5 c4d5 e6d5 c1g5 f8e7 e2e3 e8g8 f1d3 c8b7 f3e5"].porQue` | Centraliza el caballo y prepara f4: es el Ataque Pillsbury. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1d2 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 d5c4 d3c4 b7b5 c4d3 a7a6"].porQue` | Prepara ...c5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 h7h6 g5h4 d5c4 d3c4 b7b5 c4d3 a7a6"].porQue` | Prepara ...c5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 a7a6 c4c5 c7c6 f1d3 b7b6"].porQue` | Prepara ...e5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 d5c4 d3c4 b7b5 c4d3 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 h7h6 g5h4 b7b6 c4d5 e6d5 f1d3 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 h7h6 g5h4 b7b6 c4d5 e6d5 f1d3 c8b7 e1g1 b8d7 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 f3d2 d5c4 g5f6 d7f6 d2c4 a5c7 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 f3d2 d5c4 g5f6 d7f6 d2c4 a5c7 a1c1 f8e7 g2g3"].porQue` | Prepara el fianchetto. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 f3d2 d5c4 g5f6 d7f6 d2c4 a5c7 a1c1 f8e7 g2g3 e8g8 f1g2 f8d8"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 h7h6 g5h4 c7c5 c4d5 f6d5 h4e7 d5e7 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 h7h6 g5h4 c7c5 c4d5 f6d5 h4e7 d5e7 f1e2 b7b6 e1g1 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 a7a6 d1e2 b7b5 c4b3 c8b7 b1c3 b8d7 f1d1"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 b8c6 d1e2 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 b8c6 d1e2 a7a6 f1d1"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c5 c4d5 d8b6"].porQue` | Según Stockfish es un error: era mejor 5... cxd4 (−0,2 contra −1,1, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 b8c6 d1e2 c5d4 f1d1"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 b8c6 d1e2 c5d4 f1d1 f8e7 e3d4 e8g8 b1c3 c6a5 c4d3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 c7c5 e1g1 c5d4 e3d4 b8c6 b1c3 f8e7 a2a3 e8g8 f1e1 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 h7h6 g5f6 d8f6 d1b3 d5c4 b3c4 b8d7 a1d1 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 f6d5"].porQue` | Según Stockfish es un error: era mejor 9... hxg5 (−0,6 contra −1,8, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 c7c6 g1f3 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 f6d5 g5f7 d8h4 f7h8 f8b4 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 g8f6 e2e3 e7e6 f1c4 f8e7 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 c7c5 e2e3"].porQue` | Prepara Axc4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 c7c5 e2e3 e7e6 f1c4 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 d5c4 g1f3 c7c5 e2e3 e7e6 f1c4 a7a6 e1g1 g8f6 d4c5 f8c5 d1d8 e8d8 c4e2 d8e7 b1d2 c8d7 b2b3"].porQue` | Prepara Ab2. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... e6 (−0,2 contra −1,4, para el bando que juega). |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 d5c4 d3c4 f6d5 g5e7 d8e7 c3e4"].porQue` | El caballo evita el cambio y apunta a d6 y f6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 d1c2 a7a6 c4d5 e6d5 f1d3 f8e8 e1g1 d7f8"].porQue` | El caballo va a f8 y después a g6 o e6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a1d1 a7a6 a2a3"].porQue` | Prepara b4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 a1c1 h7h6 g5h4 b7b6"].porQue` | Prepara ...Ab7: la defensa Tartakower. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a2a3"].porQue` | Prepara b4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 f1d3 c7c6 e1g1 d5c4 d3c4 f6d5 g5e7 d8e7 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 g1f3 e8g8 d1c2 b8d7 e2e3 c7c5 a1d1"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a1d1 d8a5 a2a3"].porQue` | Prepara b4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 d2f4 b7b6 b1d2 c8a6 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 d1c2 a7a6 c4d5 e6d5 f1d3 f8e8 e1g1 d7f8 h2h3 g7g6"].porQue` | Prepara ...Ce6 o ...Cg6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a2a3 h7h6 g5h4 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a2a3 h7h6 g5h4 b7b6 c4d5 c6d5 f1d3 c8b7 e1g1 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 g1f3 e8g8 d1c2 b8d7 a1d1"].porQue` | La torre va a la columna d. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a2a3 d8a5 e1c1 c5e7 c1b1 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 e2e3 e8g8 b2b3 b7b6 c4d5 e6d5 c1b2 c8b7 f1d3 b8d7 e1g1 a7a6"].porQue` | Prepara ...c5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 e2e3 e8g8 b2b3 b7b6 c4d5 e6d5 c1b2 c8b7 f1d3 b8d7 e1g1 a7a6 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 d2f4 b7b6 b1d2 c8a6 f1d1 f6h5 f4e3 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 f1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 f1c1 a7a5 a2a4"].porQue` | Frena ...a4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d2f4 b7b6 b1c3 c8b7 a1c1"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1f4 f8e7 e2e3 e8g8 a2a3 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 f1c1 a7a5 a2a3"].porQue` | Frena ...a4. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 f1c1 a7a5 a2a3 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 b2b3 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1c3 b8d7 d1c2 f8d6 g2g4 h7h6"].porQue` | Frena g5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1d2 b8d7 f1d3 c6c5 e1g1 f8e7 b2b3"].porQue` | Prepara Ab2. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a2a3 d8a5 e1c1 c5e7 h2h4 a7a6"].porQue` | Prepara ...b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 g2g3 f8b4 c1d2 b4e7 f1g2 e8g8 e1g1 c7c6 d1c2 b8d7 b2b3 b7b6 f1d1 c8a6 d2f4 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1c3 b8d7 b2b3 f8d6 c1b2 e8g8 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1d2 b8d7 f1d3 c6c5 b2b3"].porQue` | Prepara Ab2. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 c1g5 h7h6 g5f6 d8f6 b1c3 c7c6 e2e3 b8d7 f1e2 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 c1g5 h7h6 g5f6 d8f6 b1c3 c7c6 e2e3 b8d7 f1e2 g7g6 e1g1 f8g7 c4d5 e6d5 b2b4 a7a6"].porQue` | Frena b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 c1g5 h7h6 g5f6 d8f6 b1c3 c7c6 e2e3 b8d7 f1e2 g7g6 e1g1 f8g7 c4d5 e6d5 b2b4 a7a6 a2a4"].porQue` | Prepara b5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1c3 b8d7 d1c2 f8d6 g2g4 h7h6 h2h3"].porQue` | Prepara g5. |
| Gambito de Dama | `notas["d2d4 d7d5 c2c4 e7e6 g1f3 g8f6 e2e3 c7c6 b1c3 b8d7 b2b3 f8d6 c1b2 e8g8 f1e2 b7b6 e1g1 c8b7 e2d3 f8e8 f1e1 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama | `trampas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 c4d5 e6d5 c3d5 f6d5 g5d8 f8b4 d1d2 b4d2 e1d2 e8d8"]` | Trampa del elefante: el peón de d5 parece colgado porque el caballo de f6 está clavado, pero tras Cxd5?? Cxd5! Axd8 Ab4+ y la dama blanca cae; el negro termina con una pieza de más. |
| Gambito de Dama | `trampas["d2d4 d7d5 c2c4 d5c4 e2e3 b7b5 a2a4 c7c6 a4b5 c6b5 d1f3"]` | En el Gambito aceptado, sostener el peón con ...b5 y ...c6 deja la diagonal larga abierta: Df3 ataca la torre de a8. |
| Gambito de Dama | `trampas["d2d4 d7d5 c2c4 d5c4 e2e4 b8c6 d4d5 c6e5 d1d4 e5g6 g1f3 e7e5 f3e5 f8b4 c1d2 c7c5"]` | 3.e4 Cc6 4.d5 Ce5 5.Dd4 Cg6 6.Cf3 e5 7.Cxe5? Ab4+! 8.Ad2 c5: la dama queda atacada y ya no puede sostener al caballo de e5; las blancas pierden una pieza. Lo correcto era 7.Dxc4. Shaw lo usa para un consejo general: cuando el rival "regala" un peón, desconfiá y calculá. |
| Gambito de Rey | `planesNegras` | Rehusar con ...Ac5, que impide el enroque blanco por un tiempo. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3"].porQue` | Impide ...Dh4+ y prepara d4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5"].porQue` | Sostiene el peón de f4 y, si las blancas no hacen nada, sigue con ...g4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5"].porQue` | Gambito rehusado clásico: el alfil en c5 impide que las blancas enroquen corto por un tiempo y deja una trampa sobre e5. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5 g1f3"].porQue` | Desarrolla y defiende contra ...Dh4+; recién después se puede pensar en fxe5. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4"].porQue` | Ataca la cadena de peones antes de que el negro la refuerce con ...h6. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5"].porQueNo["f3g5"]` | 5.Cg5, el Gambito Allgaier: tras 5...h6 6.Cxf7 Rxf7 el blanco entrega una pieza para sacar al rey negro, y Stockfish no lo considera correcto. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4"].porQue` | Prepara el Gambito Muzio (si ...g4, enroque y entrega del caballo). Muy agudo; Stockfish prefiere d4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6"].porQue` | Defensa Fischer: prepara ...g5 sin permitir Ce5. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1c4"].porQue` | Gambito de Alfil: si ...Dh4+, el rey va a f1 y el negro perdió tiempo con la dama. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5 g1f3 d7d6 c2c3"].porQue` | Prepara d4 para cerrar la diagonal del alfil y poder enrocar. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5"].porQueNo["f4e5"]` | Pierde enseguida: ...Dh4+ y, tras g3, la dama entra en e4 con jaque y gana la torre de h1. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4"].porQue` | La idea original de Falkbeer (1851): el peón de e5 avanza como una cuña que corta en dos la posición blanca y deja débiles las casillas detrás de f4. Fue muy temida en el siglo XIX, pero hoy Stockfish prefiere 3...exf4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4"].porQueNo["d8d5"]` | Retomar con la dama es lo que se jugaba antes de Falkbeer, y es débil: 4.Cc3 la ataca con ganancia de tiempo. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 g8f6 f1c4"].porQue` | La continuación que recomienda Shaw: desarrolla apuntando a f7 y, si ...d5, el blanco toma y sigue con d4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 g8f6 f1c4 d7d5 e4d5 f8d6 d2d4"].porQue` | Lo correcto: apoya el caballo de e5 y mantiene el centro. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 g8f6 f1c4 d7d5 e4d5 f8d6 d2d4"].porQueNo["e1g1"]` | 8.0-0?! es el Gambito Rice: el blanco entrega el caballo de e5 por iniciativa. Shaw dice que hay que dejarlo en el siglo XIX, y Stockfish confirma que el negro queda mejor. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6 f1c4 h7h6 b2b3"].porQue` | Un camino con poca teoría (Johansson): no intenta recuperar f4 y prepara Ab2, Cc3, una jugada de dama y el enroque largo, para abrir después el flanco de rey. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 f8e7 f1c4 g8f6"].porQue` | Contra la Defensa Cunningham con 4.Ac4, Shaw considera que esta es la respuesta correcta: ataca e4 y desarrolla. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g8f6 e4e5 f6h5"].porQueNo["d8e7"]` | 4...De7?! deja a la dama estorbando y al caballo sin buenas casillas: el blanco sigue con De2 y d4 (Shaw). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g8f6 e4e5 f6d5 b1c3"].porQueNo["f1c4"]` | 5.Ac4 Cb6 deja al blanco sin nada: el caballo vuelve con tiempo sobre el alfil (Stockfish). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1c4 b8c6"].porQue` | Para Shaw, la clave contra el Gambito de Alfil: una jugada flexible. Si 4.d4, el negro contraataca en el centro con ...Cf6 y ...d5, y tras 5.Cc3 Ab4 juega cómodo; ahí se ve el problema de haber sacado tan pronto el alfil a c4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4 d2d3 g8f6 d3e4 f6e4 g1f3"].porQue` | Shaw la prefiere a 6.Ae3: desarrolla y prepara De2 contra el caballo de e4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4 d2d3 g8f6 d3e4 f6e4 g1f3 f8c5 d1e2"].porQue` | Clava el caballo de e4 contra el rey: según Shaw, la teoría y la práctica muestran que el blanco queda mejor en todas las variantes. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 d2d3"].porQue` | Lo más preciso para Stockfish: sostiene e4 y abre el camino al alfil de c1 para tomar en f4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 d2d3"].porQueNo["e4e5"]` | 7.e5, el Doble Muzio (7...Dxe5 8.Axf7+): espectacular, pero para Stockfish no alcanza. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 d2d3"].porQueNo["b1c3"]` | 7.Cc3? Dd4+ 8.Rh1 Dxc4: el negro gana también el alfil. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 d2d4"].porQue` | Tan fuerte como 4.h4 para Stockfish: primero el centro. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 d2d4 g5g4 f3e5"].porQueNo["c1f4"]` | 5.Axf4, el Gambito Rosentreter: entrega el caballo, pero tras 5...gxf3 6.Dxf3 Cc6 el negro debería imponerse. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 f3e5"].porQue` | Gambito Salvio: el caballo amenaza f7 en lugar de entregarse con O-O. Stockfish prefiere el Muzio (5.O-O): tras el Salvio, ...Dh4+ deja al rey blanco sin enroque. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 f3e5 d8h4"].porQue` | El jaque obliga al rey blanco a ir a f1 y lo deja sin enroque; por eso el Salvio se considera dudoso. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5 g1f3 d7d6 f4e5"].porQue` | Lo más directo según Stockfish: abre la columna f para la torre. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5 g1f3 d7d6 f4e5 d6e5 f1c4"].porQueNo["f3e5"]` | Cxe5?? Dh4+: si g3, Dxe4+ ataca el rey y la torre de h1 a la vez. Es la trampa clásica de esta línea. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4"].porQue` | Ataca el caballo de f3: el negro gana tiempo y obliga al blanco a decidir si lo sacrifica. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1c4 d8h4 e1f1 g7g5"].porQue` | Defiende el peón de f4 y prepara ...Ag7. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 c4f7"].porQue` | Según Stockfish es un error: era mejor 5. O-O (−1,2 contra −3,0, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3g5"].porQue` | Según Stockfish es un error: era mejor 5. Ce5 (−0,7 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1e2 f7f5 e4f5 d7d6"].porQue` | Según Stockfish es un error: era mejor 4... Dh4+ (+1,1 contra −0,5, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6 f1c4 h7h6"].porQue` | Prepara ...g5 para sostener el peón de f4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 b8c6 b1c3"].porQue` | Según Stockfish es un error: era mejor 4. d4 (+0,2 contra −0,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 b8c6 b1c3 g7g5 h2h4"].porQue` | Ataca la cadena de peones antes de que el negro la consolide. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 b8c6 b1c3 g7g5 h2h4 g5g4 f3g5"].porQue` | El caballo va a g5, donde amenaza f7. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... exf4 (+0,4 contra −1,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f5 e4f5 e5f4"].porQue` | Según Stockfish es un error: era mejor 3... De7 (−1,1 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f5 e4f5 e5f4 d1h5 g7g6 f5g6"].porQue` | Toma el peón y amenaza gxh7. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f5 e4f5 e5f4 d1h5 g7g6 f5g6 d8e7 e1d1"].porQue` | Según Stockfish es un error: era mejor 6. Ae2 (+2,4 contra +1,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 f8e7"].porQue` | Prepara ...Ah4+ para molestar al rey blanco: es el Gambito Cunningham. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 f8e7 f1c4 e7h4 g2g3"].porQue` | Según Stockfish es un error: era mejor 5. Rf1 (−0,0 contra −0,9, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g8f6 e4e5 f6h5 g2g4"].porQue` | Según Stockfish es un error: era mejor 5. d4 (−0,3 contra −1,4, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 b8c6"].porQue` | Desarrolla en lugar de tomar el peón. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 b8c6 g1f3 g7g5"].porQue` | Según Stockfish es un error: era mejor 3... exf4 (−0,3 contra −1,6, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d5 e4d5 g8f6"].porQue` | Desarrolla y prepara recuperar el peón de d5. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d8f6"].porQue` | Según Stockfish es un error: era mejor 2... exf4 (+0,4 contra −0,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d8f6 b1c3 f6f4 g1f3 f8b4"].porQue` | Según Stockfish es un error: era mejor 4... d6 (−1,3 contra −2,6, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 h7h6"].porQue` | Prepara ...g5 para sostener f4: es el Gambito Becker. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d8h4"].porQue` | Según Stockfish es un error: era mejor 2... exf4 (+0,4 contra −0,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f6"].porQue` | Según Stockfish es un error: era mejor 2... exf4 (+0,4 contra −1,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f6 f4e5"].porQue` | Toma en e5: si ...fxe5, Dh5+ aprovecha la diagonal abierta. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 b1c3"].porQue` | Según Stockfish es un error: era mejor 7. d3 (−1,2 contra −2,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 f3e5 d8h4 e1f1 g8h6"].porQue` | Según Stockfish es un error: era mejor 6... Cc6 (+1,4 contra +0,2, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 c4f7"].porQue` | Según Stockfish es un error: era mejor 7. d3 (−1,2 contra −6,0, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 c4f7 e8f7"].porQue` | Según Stockfish es un error: era mejor 7... Dxf7 (+6,0 contra +2,9, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 c4f7 e8f7 d2d4 f6d4"].porQue` | Según Stockfish es un error: era mejor 8... Ah6 (+2,6 contra +1,5, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 g8f6 f1c4 d7d5 e4d5 f8d6 e1g1"].porQue` | Según Stockfish es un error: era mejor 8. d4 (−0,8 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 c4f7 e8f7 e1g1 g4f3 d1f3 d8f6"].porQue` | Según Stockfish es un error: era mejor 7... d6 (+4,1 contra +2,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 b8c6 f1c4"].porQue` | Según Stockfish es un error: era mejor 4. d4 (+0,2 contra −0,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6 f1c4 h7h6 d2d4 g7g5 h2h4 f8g7 b1c3 c7c6"].porQue` | Según Stockfish es un error: era mejor 7... Ag4 (+0,5 contra −0,5, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 d7d6 f1c4 h7h6 d2d4 g7g5 h2h4 f8g7 b1c3 c7c6 h4g5 h6g5 h1h8 g7h8 f3e5"].porQue` | Según Stockfish es un error: era mejor 10. Dd3 (+0,3 contra −2,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4 d2d3 g8f6 d3e4 f6e4 g1f3 f8c5 d1e2 c8f5 g2g4"].porQue` | Según Stockfish es un error: era mejor 8. Cc3 (+0,7 contra −0,4, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 d7d5"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (+0,7 contra −0,2, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 d7d5 d2d4 g8f6 c1f4 f6e4"].porQue` | Según Stockfish es un error: era mejor 7... Ch5 (0,0 contra −1,0, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4 d2d3 g8f6 d3e4 f6e4 g1f3 f8c5 d1e2 c5f2"].porQue` | Según Stockfish es un error: era mejor 7... Af5 (−0,7 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 h7h5"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (+0,7 contra −0,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 d8e7 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 6... d6 (+0,4 contra −1,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 g8f6 f1c4 d7d5 e4d5 f8d6 d2d4 f6h5 c1f4"].porQue` | Según Stockfish es un error: era mejor 9. O-O (−0,8 contra −4,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 e5e4 d2d3 g8f6 d3e4 f6e4 g1f3 f8c5 d1e2 c5f2 e1d1 d8d5"].porQue` | Según Stockfish es un error: era mejor 8... f5 (−1,9 contra −4,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 d8f6 e4e5 f6e5 d2d3 f8h6 b1c3 g8e7 c1d2"].porQue` | Desarrolla y prepara Tae1. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 f8g7 e1g1"].porQue` | Enroca y prepara d4 y g3: es el Gambito Hanstein. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 h2h4"].porQue` | Según Stockfish es un error: era mejor 5. O-O (−1,2 contra −4,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g8e7"].porQue` | Prepara ...d5 y ...Cg6 para defender f4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 h7h5"].porQue` | Según Stockfish es un error: era mejor 3... g5 (+0,5 contra −1,0, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 b1c3"].porQue` | Desarrolla y deja abierta la diagonal d1-h5. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 d1e2"].porQue` | Prepara recuperar f4 y defiende e4. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 d1h5"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1b5"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −2,0, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1e2"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −2,6, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 g8f6"].porQue` | Contraataca e4 en lugar de tomar. |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f8c5 g1f3 g7g5"].porQue` | Según Stockfish es un error: era mejor 3... d6 (−0,2 contra −2,4, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3g5 h7h6 g5f7 e8f7 d2d4 d7d5 c1f4 d5e4 f1c4 f7g7 f4e5"].porQue` | Según Stockfish es un error: era mejor 10. Cc3 (−1,6 contra −2,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 d2d4 g4f3 c1f4"].porQue` | Según Stockfish es un error: era mejor 6. O-O (−1,5 contra −3,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 d1g4"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −1,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1h3"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −1,3, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g2g3"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −2,1, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 b2b3"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −2,5, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 f1d3"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −1,6, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 h2h4"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −1,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 e1f2"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (−0,4 contra −3,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 c7c6 d5c6 f8c5"].porQue` | Según Stockfish es un error: era mejor 4... Cxc6 (+0,4 contra −0,6, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 d7d6 e5g4 g8f6 g4f6 d8f6 b1c3 c7c6"].porQue` | Según Stockfish es un error: era mejor 8... Cc6 (+0,0 contra −0,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 d7d5 e4d5 f8c5"].porQue` | Según Stockfish es un error: era mejor 3... exf4 (+0,2 contra −0,7, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 f7f5 e4f5 f8c5"].porQue` | Según Stockfish es un error: era mejor 3... De7 (−1,1 contra −2,9, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 f8e7"].porQue` | Según Stockfish es un error: era mejor 5... Cf6 (+0,7 contra −0,8, para el bando que juega). |
| Gambito de Rey | `notas["e2e4 e7e5 f2f4 g7g5"].porQue` | Según Stockfish es un error: era mejor 2... exf4 (+0,4 contra −2,8, para el bando que juega). |
| Gambito Vaganian | `planesBlancas` | 5.Cb5 para presionar d6 y controlar d5. |
| Gambito Vaganian | `planesBlancas` | Cc3, Ag5 y Cd5 para ocupar el hueco. |
| Gambito Vaganian | `planesNegras` | ...Cc6 y ...Ab4 para controlar e4 y d5 antes del ...d5. |
| Gambito Vaganian | `rupturas` | Cd5 y e4 de las blancas. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5"].porQueNo["d4c2"]` | Permite ...d5 enseguida: tras cxd5 Dxd5 el negro ya igualó y se desarrolla sin problemas. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5"].porQueNo["d4f3"]` | ...Cc6, ...Ab4 y ...d5: el negro se libera y el blanco no sacó nada. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 d7d5 c4d5 f8c5"].porQue` | La jugada de Vaganian (1977): el alfil apunta a f2 y el rey blanco está a tres jugadas del enroque. Aparecen enseguida temas como ...Axf2+ y ...Ce4. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 d7d5 c4d5 f8c5 b5c3 e8g8"].porQue` | Primero el rey; después ...e4, ...Af5 o ...Te8, con mucha actividad por el peón. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 a7a6 b5d6"].porQue` | Lo más fuerte: el caballo da jaque y se cambia por el alfil de f8, y el blanco queda con la pareja de alfiles. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 d7d5 c4d5 f8c5 b5c3 e8g8 e2e3 e5e4 a2a3 a7a5"].porQue` | Frena b4. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 d7d5 c4d5 f8c5 b5c3 e8g8 g2g3"].porQue` | Prepara el fianchetto. |
| Gambito Vaganian | `notas["d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e5 d4b5 d7d5 c4d5 f8c5 b5c3 e8g8 g2g3 d8b6 e2e3 c8g4 f1e2 g4e2 d1e2 e5e4 a2a3"].porQue` | Prepara b4. |
| Gambito Vienés (con 2...Cc6) | `planesBlancas` | Abrir la columna f y atacar f7 con Ac4, O-O y la dama. |
| Gambito Vienés (con 2...Cc6) | `planesBlancas` | Ocupar el centro con d4 y recuperar el peón de f4 con Axf4. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3"].porQue` | Desarrolla e impide ...Dh4+. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3g5 d7d6"].porQue` | Desarrolla y abre el alfil de c8 antes de tomar el caballo. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 g7g5 f1c4 g5g4 e1g1 g4f3 d1f3 c6e5"].porQue` | Según Stockfish es un error: era mejor 7... Ac5+ (+1,7 contra +0,6, para el bando que juega). |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 g7g5 d2d4 g5g4 f1c4 g4f3 e1g1 d7d5"].porQue` | Según Stockfish es un error: era mejor 7... Ag7 (+1,9 contra 0,0, para el bando que juega). |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 g7g5 d2d4 g5g4 f1c4 g4f3 e1g1 d7d5 e4d5 c8g4 d5c6"].porQue` | Según Stockfish es un error: era mejor 9. Te1+ (−0,2 contra −3,3, para el bando que juega). |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 f8e7"].porQue` | Prepara ...Ah4+ para molestar al rey. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 d2d4 d8h4 e1e2"].porQue` | El rey sale; la dama negra va a quedar expuesta a las piezas blancas. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 d2d4 d8h4 e1e2 b7b6"].porQue` | Prepara ...Aa6+ contra el rey. |
| Gambito Vienés (con 2...Cc6) | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 g8f6"].porQue` | Desarrolla y ataca e4 en lugar de sostener f4. |
| Gambito de Dama Rehusado: Variante del Cambio | `planesNegras` | Juego en el flanco de rey con ...Ce4, ...f5 o maniobras de piezas. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3"].porQue` | Desarrollo; el plan es el ataque de minorías: Tb1, b4 y b5. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1f3 f8e8 e1g1"].porQue` | Enroque corto: el plan es el ataque de minorías (Tab1, b4 y b5) para dejar un peón débil en c6 o en d5. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8b4 c4d5"].porQue` | Fija la estructura antes de que el negro gane actividad. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 c4d5 f6d5"].porQue` | Según Panczyk e Ilczuk, la única que justifica 6...Da5: el negro cede el centro pero aumenta la presión sobre c3 y amenaza ...Ab4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 c4d5 f6d5 d1d2"].porQue` | La mejor según los autores (y según Stockfish): sostiene c3. Contra 8.Db3, el negro iguala de muchas maneras. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6"].porQue` | Sostiene d5 y prepara ...Af5, para sacar al alfil de c8, el gran problema del Gambito de Dama Rehusado. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2"].porQue` | Impide ...Af5: el alfil de c8 se queda sin su mejor casilla (Schandorff). Con 6.e3, el negro puede jugar ...Af5 y llegar a finales que Nigel Short defendió muchas veces. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 b8a6"].porQue` | La única forma de aprovechar Dc2, según Schandorff: el caballo va a b4 para echar a la dama y habilitar ...Af5. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 b8a6 e2e3 a6b4 c2b1"].porQue` | La recomendación de Schandorff: la dama se aparta y sigue vigilando f5. Para Stockfish, Db3 es todavía un poco más precisa. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 b8a6 e2e3 a6b4 c2b1"].porQueNo["c2e2"]` | De2? Af5 Axf6 Dxf6 y la amenaza ...Cc2+ le complica la vida al blanco. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7"].porQue` | El desarrollo normal: ...Cbd7, ...O-O y la maniobra ...Te8 con ...Cf8. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 f6h5"].porQue` | La alternativa más importante, según Schandorff: cambia los alfiles de casillas negras y alivia la presión. El precio es que el alfil que le queda al blanco es mejor que el del negro. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 f6h5 g5e7 d8e7 g1e2"].porQue` | El esquema de siempre. Con ...Ch5 jugada, el enroque largo y el ataque en el flanco de rey son especialmente fuertes (Kasparov-Andersson, 1988). |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 e8g8"].porQue` | Pone el rey a salvo. El negro va a reagrupar con ...Te8 y ...Cf8. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 e8g8 g1e2 f8e8 e1g1 d7f8 f2f3"].porQue` | La idea de Botvinnik: preparar e4. El peón de f3 cubre e4 y le quita al negro la liberadora ...Ce4. A cambio, debilita e3, y eso a veces habilita ...c5. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 b8d7 e2e3"].porQue` | Lo correcto, según Schandorff: el juego suele transponer a la línea principal. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7"].porQue` | Desarrolla y prepara ...Ch5 o ...Cf8. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 b8a6 e2e3"].porQue` | Sostiene d4: el caballo de a6 va a ir a c7 o b4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 e8g8 f1d3 b8d7 d1c2 f8e8 g1e2 d7f8"].porQue` | El caballo va a f8, desde donde defiende h7. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 e2e3 f8e7 f1d3 b8d7 g1e2 e8g8 e1g1"].porQue` | Enroca: con el caballo en e2 prepara f3 y e4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 e8g8 g1e2 f8e8 e1g1 d7f8 f2f3 g7g6 g5h4 f8e6"].porQue` | El caballo va a e6. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 b8d7 f1d3 e8g8 g1e2 f8e8 e1g1 d7f8 f2f3 g7g6 a1d1 f8e6"].porQue` | El caballo va a e6. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 e2e3 f8e7 f1d3 b8d7 g1e2 e8g8 e1g1 f8e8 d1c2 d7f8 f2f3 c8e6 a1d1 a8c8 g1h1 f8g6"].porQue` | El caballo va a g6. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 c7c6 e2e3 f8e7 f1d3 b8d7 g1e2 e8g8 e1g1 f8e8 d1c2 d7f8 f2f3 c8e6 a1e1 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c4d5 e6d5 c1g5 c7c6 d1c2 f8e7 e2e3 e8g8 f1d3 h7h6 g5h4 f8e8 g1e2 b8d7 f2f3"].porQue` | Prepara e4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c4d5 e6d5 c1g5 c7c6 e2e3 f8e7 f1d3 b8d7 g1e2 e8g8 e1g1 f8e8 d1c2 d7f8 f2f3 c8e6 a1d1 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c4d5 e6d5 c1g5 c7c6 e2e3 f8e7 f1d3 b8d7 g1e2 e8g8 e1g1 f8e8 d1c2 d7f8 f2f3 c8e6 a1e1 a8c8"].porQue` | La torre va a la columna c. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1f3 f8e8 e1g1 d7f8 h2h3 c8e6 a1b1"].porQue` | La torre prepara b4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1f3 f8e8 e1g1 d7f8 h2h3 c8e6 a1b1 a7a5"].porQue` | Frena b4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1f3 f8e8 e1g1 d7f8 h2h3 c8e6 a1b1 a7a5 a2a3"].porQue` | Prepara b4. |
| Gambito de Dama Rehusado: Variante del Cambio | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c4d5 e6d5 c1g5 f8e7 e2e3 c7c6 f1d3 b8d7 d1c2 e8g8 g1f3 f8e8 e1g1 d7f8 h2h3 g7g6 a1b1"].porQue` | La torre prepara b4. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `planesNegras` | En la Cambridge Springs: ...Da5 y presión sobre c3 y d4. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `planesNegras` | En la Lasker: cambiar piezas con ...Ce4 para aliviar la falta de espacio. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5"].porQue` | Cambridge Springs: la dama clava el caballo de c3 y amenaza ...Ce4 o ...dxc4. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 b8d7 e2e3 c7c6 g1f3 d8a5 f3d2"].porQue` | Defiende c4 y prepara Db3 o Dc2 para romper la clavada. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 h7h6 g5h4 f6e4"].porQue` | Defensa Lasker: busca cambios de piezas menores para aliviar la posición. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 a1c1 c7c6 f1d3 d5c4 d3c4 f6d5"].porQue` | Liberación de Capablanca: cambia piezas y prepara ...e5. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8b4"].porQue` | Ragozin: clava el caballo, como en la Nimzoindia, y busca ...c5, ...Ce4 o ...dxc4. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4"].porQue` | Con el alfil en f4 no hay clavada que aliviar con ...h6 o ...Ce4. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 a7a6"].porQue` | Una alternativa al enroque: prepara ...dxc4 y ...b5. Según el cuaderno de EDAMI, ese avance es la verdadera idea de la jugada: el negro gana espacio en el flanco de dama y lleva el alfil a b7. |
| Gambito de Dama Rehusado: Clásico (Cambridge Springs y Lasker) | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 g1f3 f8e7 c1f4 a7a6 e2e3 d5c4 f1c4 b7b5"].porQue` | El avance que justifica 5...a6: gana tiempo sobre el alfil de c4 y abre la diagonal a8-h1 para ...Ab7. |
| Siciliana Grand Prix (ataque con f4) | `planesBlancas` | f4-f5 y ataque en el flanco de rey con Cf3, Ac4 o Ab5. |
| Siciliana Grand Prix (ataque con f4) | `planesNegras` | Desarrollarse con ...Cc6, ...g6 y ...Ag7, y contragolpear con ...d5. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 e7e6"].porQue` | Prepara ...d5 para golpear el centro. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6"].porQue` | La formación que Rogozenko considera más prometedora contra el Gran Prix: fianchetto, sin apurar ...d6, para tener ...d5 a mano. Contra Ac4, ...e6 y ...d5; contra Ab5, ...Cd4. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1b5 c6d4"].porQue` | El salto típico contra Ab5: si el blanco cambia en d4, el peón negro que retoma ataca al caballo de c3. Así el negro evita que le doblen los peones con Axc6. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1c4 e7e6"].porQue` | Tapa la diagonal del alfil hacia f7 y prepara ...Cge7 y ...d5, que le quita al alfil de c4 su objetivo. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1c4 e7e6 e1g1 g8e7 d2d3 d7d5"].porQue` | El negro consigue ...d5 y el alfil de c4 queda sin juego: el plan con f5 llega tarde. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1c4 e7e6 e1g1"].porQue` | Enroca y deja para después la decisión entre d3 y e5. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1c4 e7e6 e1g1"].porQueNo["f4f5"]` | 6.f5, el gambito típico de este esquema que estudia Plaskett, no alcanza según Stockfish: después de 6...gxf5 el negro queda mejor. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 d7d6 b1c3 b8c6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 d7d6 b1c3 b8c6 g1f3 g7g6 d2d4 c5d4 f3d4 f8g7 c1e3 g8f6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Grand Prix (ataque con f4) | `notas["e2e4 c7c5 f2f4 b8c6 b1c3 g7g6 g1f3 f8g7 f1c4 e7e6 e1g1 g8e7 d2d3 d7d5 c4b3 e8g8 d1e1"].porQue` | La dama va a h4 por e1. |
| Apertura Grob (1.g4) | `planesBlancas` | Ag2 contra d5 y b7; si el negro toma en g4, c4 y Db3 para abrir la diagonal larga. |
| Apertura Grob (1.g4) | `planesNegras` | ...d5 y, después de Ag2, ...Axg4: tomar el peón con el alfil. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5"].porQue` | La respuesta más fuerte: ocupa el centro y el alfil de c8 ya apunta a g4. Para Stockfish, el negro queda más de un peón mejor. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5 f1g2"].porQue` | El Gambito Grob: si ...Axg4, c4 ataca d5 y el alfil de g2 apunta a b7 por la diagonal larga. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5 f1g2 c8g4 c2c4 c7c6"].porQue` | Lo más sólido: sostiene d5 y cierra la diagonal larga. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5 f1g2 c7c6"].porQue` | Sostiene d5 antes de tomar: el negro rechaza el gambito y se queda con un centro sólido. Stockfish prefiere ...Axg4 o ...Cc6, que sacan más provecho de g4. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5 h2h3"].porQue` | Sostiene el peón de g4 en lugar de entregarlo, a costa de otro avance en el flanco de rey. |
| Apertura Grob (1.g4) | `notas["g2g4 e7e5"].porQue` | Ocupa el centro y abre la diagonal de la dama hacia h4. Stockfish prefiere 1...d5, que ataca g4 con el alfil. |
| Apertura Grob (1.g4) | `notas["g2g4 d7d5 f1g2 c7c6 c2c4 d5c4 b2b3"].porQue` | Según Stockfish es un error: era mejor 4. Ca3 (−1,2 contra −2,2, para el bando que juega). |
| Apertura Grob (1.g4) | `notas["g2g4 e7e5 f1g2 d7d5 d2d4 e5d4 c2c3"].porQue` | Según Stockfish es un error: era mejor 4. Dxd4 (−0,6 contra −2,3, para el bando que juega). |
| Apertura Grob (1.g4) | `notas["g2g4 g7g5"].porQue` | Según Stockfish es un error: era mejor 1... d5 (+1,3 contra −0,2, para el bando que juega). |
| Apertura Grob (1.g4) | `notas["g2g4 g7g5 f2f4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,2 contra −1,9, para el bando que juega). |
| Apertura Grob (1.g4) | `notas["g2g4 f7f5"].porQue` | Según Stockfish es un error: era mejor 1... d5 (+1,3 contra −0,7, para el bando que juega). |
| Grünfeld con fianchetto (Neo-Grünfeld) | `planesBlancas` | Jugar Cf3 y el enroque, y presionar d5 (Db3) o el flanco de dama. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `planesNegras` | Ceder el centro con ...dxc4 y buscar actividad de piezas. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 c4d5"].porQue` | La variante del cambio con fianchetto: el blanco toma en d5 y prepara e4 para echar al caballo con tiempo. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 c4d5 f6d5 e2e4 d5b6"].porQue` | Lo habitual: desde b6 el caballo deja libre la diagonal del alfil de g7 y puede presionar c4 o d5. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 c4d5 f6d5 e2e4 d5b6 g1e2"].porQue` | El caballo va a e2 sin tapar al alfil; el negro presionará d4 con ...c5 o ...Cc6, y el blanco responde con d5 o defendiendo con Ae3. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6"].porQue` | La variante sólida: ...c6 sostiene d5 al máximo, con una estructura parecida a la Eslava. Stockfish la considera la mejor del negro en esta posición. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 c4d5 f6d5 e2e4 d5b6 g1e2 c7c5 d4d5 e8g8"].porQue` | Primero el rey a salvo; después ...e6 para atacar el peón de d5. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 c4d5 f6d5 e2e4 d5b4 d4d5"].porQue` | Le quita al caballo la casilla d5 y amenaza a3: el caballo de b4 se queda sin buen destino. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 c4d5 c6d5 b1c3"].porQue` | Una estructura simétrica, tranquila y pareja: el blanco intentará aprovechar su tiempo de más con Ce5 o Af4. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 d5c4 b1a3"].porQue` | Lo más preciso: el caballo recupera el peón de c4 sin que la dama salga temprano. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c5 d4c5"].porQue` | Para Stockfish, la más fuerte: el negro tendrá que dedicar tiempo a recuperar el peón. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 c4d5 f6d5 e1g1 d5b6"].porQue` | El cambio diferido: con los dos reyes enrocados, el caballo se retira a b6 y el negro presiona d4 con ...Cc6 o ...c5. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 c4d5 c6d5 f3e5 b8c6 b1c3 c8f5 e5c6 b7c6 c1f4 f6d7 a1c1"].porQue` | La torre va a la columna c. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 d5c4 b1a3 b8c6 a3c4 c8e6 b2b3"].porQue` | Prepara Ab2. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 d5c4 b1a3 b8c6 a3c4 c8e6 b2b3 e6d5 c1b2 a7a5 a1c1"].porQue` | La torre va a la columna c. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c5 d4c5 b8a6"].porQue` | El caballo va a recuperar el peón. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 c4d5 c6d5 f3e5 e7e6 b1c3 f6d7 e5f3 b8c6 c1f4 d7f6 a1c1"].porQue` | La torre va a la columna c. |
| Grünfeld con fianchetto (Neo-Grünfeld) | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5 g1f3 e8g8 e1g1 c7c6 c4d5 c6d5 b1c3 b8c6 c1f4 f6e4 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `planesBlancas` | Variante del Cambio: centro e4-d4 sostenido por c3, desarrollo con Ac4 o Ae3 y Tb1; a veces ataque en el flanco de rey. |
| Defensa Grünfeld | `planesBlancas` | Sistema ruso (Cf3 y Db3): presionar d5 y obligar a ...dxc4. |
| Defensa Grünfeld | `planesNegras` | Tras el cambio en c3, ...Ag7, ...c5, ...Cc6 y ...Ag4 contra d4. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5"].porQue` | Recupera el peón con el caballo; el plan es cambiarlo después en c3. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3"].porQue` | Cambia caballos: el peón de c3 va a quedar como blanco del alfil de g7. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7"].porQue` | El alfil apunta a c3 y d4: después vienen ...c5 y ...Cc6. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 f1c4"].porQue` | El alfil apunta a f7 y prepara Ce2, para que el peón de f quede libre. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 g1f3 c7c5 a1b1"].porQue` | Tb1: si ...Cc6, d5 llega con tiempo; además, el peón de b7 queda atacado. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 g1f3 c7c5 c1e3"].porQue` | Refuerza d4 y prepara Tc1. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 f1c4 c7c5 g1e2"].porQue` | El caballo en e2 evita la clavada ...Ag4 y cubre c3. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c1g5"].porQue` | Amenaza Axf6 para debilitar d5. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4"].porQue` | El centro ideal: e4 y d4. El negro lo va a atacar aprovechando que la dama está expuesta en c4. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 a7a6"].porQue` | Variante Húngara: ...b5 para echar a la dama y después ...c5. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 b8a6"].porQue` | Variante Prins: prepara ...c5. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 c7c6"].porQue` | Contra el fianchetto, ...c6 y ...d5 retomando con el peón de c: una Grünfeld sólida. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c1g5 f6e4 h2h4"].porQue` | La idea del australiano Goldsmith: no retira el alfil. Si 5...Cxg5 6.hxg5, la columna h queda abierta para la torre y la posición se parece más a un Gambito de Dama que a una Grünfeld; si 5...Cxc3 6.bxc3, el blanco ahorró el tiempo de mover el alfil (Rogers). |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 f1c4 c7c5"].porQue` | Golpea en d4, el plan de siempre contra el centro de la variante del Cambio. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7"].porQue` | Completa el fianchetto: el alfil va a presionar d4. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8"].porQue` | Enroca y deja que el blanco arme el centro con e4, para atacarlo después. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c1f4 f8g7 e2e3 e8g8 a1c1"].porQue` | Pone la torre en la columna c, que se va a abrir. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c1f4 f8g7 a1c1"].porQue` | Pone la torre en la columna c antes de jugar e3. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c1g5 f6e4 c3e4 d5e4 d1d2"].porQue` | Desarrolla y prepara el enroque largo. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 f2f3"].porQue` | Prepara e4 con apoyo. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 e2e3 f8g7 d1b3 d5c4 f1c4 e8g8 g1f3 b8d7"].porQue` | Desarrolla y prepara ...c5 o ...Cb6 con tiempo contra el alfil. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 c8g4 c1e3 f6d7"].porQue` | Abre la diagonal del alfil de g7 y prepara ...Cb6 con tiempo contra la dama. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 c8g4 c1e3 f6d7 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 c4d5 f6d5 e2e4 d5c3 b2c3 c7c5 a1b1 e8g8 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g2g4"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (+0,3 contra −0,8, para el bando que juega). |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 d7d5"].porQue` | Golpea el centro antes de que llegue e4. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 a7a6 f1e2 b7b5 c4b3 c7c5 d4c5 c8e6 b3c2 b8d7 c1e3 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 c7c6"].porQue` | Prepara ...b5. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 d1b3 d5c4 b3c4 e8g8 e2e4 b7b6"].porQue` | Según Stockfish es un error: era mejor 7... a6 (−0,2 contra −1,8, para el bando que juega). |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 d1b3 e7e6 c1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 d1b3 e7e6 c1d2 b7b6 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 d1b3 e7e6 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 b2b4 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 c1d2 c7c5 d4c5 b8a6"].porQue` | El caballo va a recuperar el peón. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 e2e3 e8g8 c1d2 c7c5 d4c5 b8a6 c4d5 a6c5 f1c4 a7a6 a2a4"].porQue` | Frena ...b5. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 c1f4 e8g8 e2e3 c7c5 d4c5 d8a5 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 g1f3 c7c5 c1e3 d8a5 d1d2 b8c6 a1b1 a7a6 b1c1"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7 g1f3 c7c5 c1e3 d8a5 d1d2 b8c6 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 g1f3 f8g7 c1g5 f6e4 g5h4 e4c3 b2c3 d5c4 d1a4 d8d7 a4c4 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Grünfeld | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 d1b3 d5c4 b3c4 f8g7 e2e4 e8g8 f1e2 a7a6"].porQue` | Prepara ...b5. |
| Defensa Hipopótamo | `planesBlancas` | Desarrollo natural (Cf3, Ad3, O-O, Ae3, Dd2) con el centro de dos peones. |
| Defensa Hipopótamo | `planesNegras` | Completar el esquema: ...d6, ...Cd7, ...g6, ...Ag7, ...Ce7, ...h6 y ...a6. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3"].porQue` | Impide la clavada ...Ab4, que con el caballo en c3 sería molesta. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 f2f4 f8b4"].porQue` | Contra un Austriaco temprano, lo más fuerte: clava el caballo y presiona e4. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6"].porQue` | Controla e5 y prepara el desarrollo de los caballos por d7 y e7. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f2f4 g8f6 f1d3 c7c5"].porQue` | El contraataque típico de la versión con ...b6: mientras el peón de g2 esté en la diagonal del alfil de b7 (y detrás, la torre de h1), e5 no es una amenaza seria. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7"].porQue` | Desarrollo del Hipopótamo: el caballo en d7 deja libre la diagonal del alfil de b7 y apoya ...c5 o ...e5. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 f2f4 d8h4"].porQue` | Contra el último intento de Ataque Austriaco, la idea de De Santis: el jaque obliga a g3 y la posición se complica. Stockfish prefiere el golpe central 6...c5. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 g1f3 g7g6 e1g1 f8g7 c1e3 g8e7 d1d2 h7h6"].porQue` | El esquema casi completo: ...h6 le quita g5 a las piezas blancas y prepara ...g5 si hace falta. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 g1f3 g7g6 e1g1 f8g7 c1e3 g8e7"].porQue` | Desarrolla el caballo detrás de los peones, como pide el esquema del Hipopótamo. |
| Defensa Hipopótamo | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 g1f3 g7g6 e1g1 f8g7 c1e3 g8e7 d1d2 h7h6 a1e1"].porQue` | Lleva la torre al centro, preparando la ruptura e5 o d5. |
| Defensa Hipopótamo | `notas["e2e4 g8h6"].porQue` | Según Stockfish es un error: era mejor 1... e5 (−0,3 contra −1,2, para el bando que juega). |
| Defensa Holandesa | `planesBlancas` | Fianchetto (g3, Ag2) para presionar e4 y la diagonal larga. |
| Defensa Holandesa | `planesNegras` | Ataque en el flanco de rey con ...De8-h5 o ...g5 en algunos sistemas. |
| Defensa Holandesa | `notas["d2d4 f7f5"].porQue` | Controla e4 desde el costado y prepara juego en el flanco de rey. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3"].porQue` | Prepara el fianchetto: el alfil en g2 presiona e4, la casilla que el negro quiere controlar. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 e7e6"].porQue` | Prepara ...d5 (Stonewall) o ...d6 (Clásica) y abre el alfil de f8. |
| Defensa Holandesa | `notas["d2d4 f7f5 e2e4 f5e4"].porQue` | Aceptar es lo más fuerte: las blancas tienen que demostrar la compensación. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8"].porQue` | La dama apoya ...e5 y puede ir a h5 o f7 según convenga. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 e7e6 g1f3 f8e7 e1g1 e8g8 c2c4 d7d6"].porQue` | Holandesa Clásica: estructura flexible; el negro prepara ...De8-h5 o ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 b1c3"].porQue` | Prepara e4 y obliga al negro a mostrar su plan. |
| Defensa Holandesa | `notas["d2d4 f7f5 c1g5"].porQue` | Para Stockfish, la respuesta más fuerte a la Holandesa: el alfil sale antes de e3, molesta el desarrollo natural con ...Cf6 y deja abiertas las ideas Cd2 y e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c1g5 h7h6"].porQue` | La respuesta radical que propone McDonald: echar al alfil y seguir con ...g5, moviendo primero los peones del flanco de rey y recién después las piezas. Parece suicida, pero mientras el negro evite un par de mates de principiante, su rey no corre peligro. |
| Defensa Holandesa | `notas["d2d4 f7f5 c1g5 h7h6 g5h4 g7g5 e2e3"].porQue` | Lo más sólido: el blanco no se apura, deja que el alfil vuelva a g3 y prepara el desarrollo. |
| Defensa Holandesa | `notas["d2d4 f7f5 b1c3 g8f6"].porQue` | Lo más importante contra 2.Cc3 es impedir e4, y el caballo lo hace de inmediato (McDonald). |
| Defensa Holandesa | `notas["d2d4 f7f5 b1c3 g8f6"].porQueNo["d7d6"]` | Permite e4: tras ...fxe4 Cxe4 queda una especie de Siciliana al revés, pero con el rey negro más débil y la dama y el alfil de f8 todavía encerrados. |
| Defensa Holandesa | `notas["d2d4 f7f5 b1c3 g8f6"].porQueNo["g7g6"]` | h4! y el peón de h avanza contra el enroque antes de que el negro termine de desarrollarse. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8b4"].porQue` | Una forma de desarrollar el alfil en la Holandesa Clásica: jaque y cambio en d2, como en la «inmortal» de Alekhine contra Bogoljubow (Hastings, 1922), que Williams analiza en su introducción. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8b4 c1d2 b4d2 b1d2 b8c6 g1f3 e8g8 e1g1 d7d6 d1b3 g8h8 b3c3 e6e5"].porQue` | Para Williams, una jugada clave: gana espacio en el centro y prepara el ataque en el flanco de rey. Stockfish la considera la mejor. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8b4 c1d2 b4d2 b1d2 b8c6 g1f3 e8g8 e1g1 d7d6 d1b3 g8h8 b3c3 e6e5 e2e3 a7a5 b2b3 d8e8"].porQue` | Otro plan típico de la Holandesa Clásica: la dama va a h5, y el negro amenaza ...f4, ...Ah3 y ...Cg4 contra el enroque blanco. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 d7d5 g1f3 c7c6 e1g1 f8d6 f3e5"].porQue` | El caballo ocupa el agujero de e5, la casilla débil del Stonewall; después el blanco puede apoyarlo con f3 o Cd3-f4. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 d4d5"].porQue` | Una de las dos líneas principales, junto con 8.b3: gana espacio, prepara b4 y evita la molesta ruptura ...e5 (Beim). |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 d4d5 b8a6"].porQue` | La jugada característica de la Leningrado: el caballo va a c5, o a c7 cuando el negro juega ...c6 o ...c5. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 d4d5 b8a6 a1b1"].porQue` | Prepara b4 para ganar espacio en el flanco de dama: con el centro cerrado, el blanco juega allí y el negro en el flanco de rey. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 b2b3"].porQue` | La otra línea principal: prepara Ab2 o Aa3 sin cerrar el centro. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 b2b3 b8a6"].porQue` | ...c6 y ...Ca6 casi siempre van juntas, según Beim: el caballo apunta a c7 o b4 y apoya una futura ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 f1e1"].porQue` | Prepara e4: la torre apoya la ruptura central. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 f1e1 e8f7"].porQue` | La jugada principal según Beim: la dama ataca c4 y vigila la columna f. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 f1e1 e8f7 e2e4"].porQue` | Lo más directo: el blanco hace la ruptura que preparó con Te1. Beim da como principal 9.b3, que para Stockfish es igual de buena. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 c3d5"].porQue` | Busca cambiar el caballo de f6. Stockfish prefiere 8.d5 o 8.Te1. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 c7c6 d4d5 e7e5 d5e6 c8e6"].porQueNo["b8a6"]` | ...Ca6? Af4: el blanco ataca d6 antes de que el negro recupere e6. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3"].porQue` | Prepara el fianchetto para disputar e4 y la gran diagonal. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 b1c3"].porQue` | Desarrolla y prepara e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 b1c3 d7d6"].porQue` | Prepara ...e5 para ocupar el centro. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 b1c3 d7d6 g1f3 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 g7g6"].porQue` | Prepara ...Ag7 para devolver el peón con buen juego. |
| Defensa Holandesa | `notas["d2d4 f7f5 d1d3"].porQue` | Prepara e4 para atacar el peón de f5. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g4 e7e5"].porQue` | Contraataca en el centro en lugar de tomar en g4. |
| Defensa Holandesa | `notas["d2d4 f7f5 h2h3"].porQue` | Prepara g4 para atacar el peón de f5. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 g7g6"].porQue` | Prepara el fianchetto: es la Holandesa Leningrado. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 g7g6 f1g2 f8g7 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 e7e6"].porQue` | Abre el alfil de f8 y prepara ...Cf6. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 e7e6 e2e4"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,6 contra −0,6, para el bando que juega). |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 d7d6"].porQue` | Prepara ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 d7d6 f1g2 c7c6"].porQue` | Prepara ...e5 con apoyo. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g7g6"].porQue` | Prepara el fianchetto antes de desarrollar el caballo. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g7g6 b1c3"].porQue` | Desarrolla y prepara e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3"].porQue` | Desarrolla y prepara e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 d8e8"].porQue` | Prepara ...Dh5 o ...Dg6 para atacar en el flanco de rey: es la Holandesa Ilyin-Zhenevsky. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 d8e8 f1e1"].porQue` | Prepara e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d5 b1c3 c7c6 d1c2"].porQue` | Controla e4 y prepara Af4 o Ce5. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8b4 c1d2 b4d2 b1d2 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6"].porQue` | Prepara ...e5: es la Holandesa Leningrado. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d5 b1c3 c7c6 d1c2 d8e8"].porQue` | La dama va a h5 para atacar. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8b4 c1d2 b4d2 b1d2 b8c6 g1f3 e8g8 e1g1 d7d6"].porQue` | Prepara ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 d7d6 f1g2 c7c6 b1c3 d8c7"].porQue` | Prepara ...e5. |
| Defensa Holandesa | `notas["d2d4 f7f5 g1f3 g8f6 c2c3"].porQue` | Prepara Ag5 o Cbd2 y e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 g2g3 g8f6 f1g2 e7e6 g1h3"].porQue` | El caballo va a f4 para presionar e6. |
| Defensa Holandesa | `notas["d2d4 f7f5 g1f3 e7e5"].porQue` | Según Stockfish es un error: era mejor 2... e6 (−0,5 contra −2,8, para el bando que juega). |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 a7a5 b2b3"].porQue` | Prepara Ab2. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 a7a5 b2b3 d8e8 c1b2 b8a6"].porQue` | El caballo va a b4 o c5. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 a7a5 b2b3 d8e8 c1b2 b8a6 f1e1"].porQue` | La torre prepara e4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 f6e4 d1c2 e4c3 c2c3 a7a5 b2b3"].porQue` | Prepara Ab2. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 e7e6 b1c3 g8f6 g1f3 f8b4 d1b3 d8e7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1h3"].porQue` | El caballo va a f4. |
| Defensa Holandesa | `notas["d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1h3 e8g8 e1g1 d7d6 b2b3"].porQue` | Prepara Ab2. |
| Defensa Holandesa | `notas["d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 g7g6 h2h4"].porQue` | Prepara h5 contra el enroque. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `planesBlancas` | Defender e4 con piezas (Ad3, Cc3, f3) frente a la presión del alfil de b7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `planesNegras` | ...b6 y ...Ab7 contra e4, con ...Ab4+ y ...f5 para minar el centro. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `planesNegras` | ...Ab4+ para cambiar el alfil malo o transponer a la Bogoindia. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6"].porQue` | Una jugada flexible: el negro espera para elegir entre ...d5, ...f5, ...Ab4+ o ...b6. Contra 2.e4 se llega a la Francesa. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4"].porQue` | Lo más ambicioso: si el negro no juega ...d5, el blanco se queda con el centro. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 b7b6"].porQue` | Defensa Inglesa: el alfil irá a b7 para presionar e4 antes de que el blanco lo ocupe. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 b7b6 e2e4 c8b7"].porQue` | Ataca e4 de inmediato. ...Ab4+, para cambiar el alfil antes, también es buena. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 b7b6"].porQue` | Defensa Inglesa con 1...b6: el alfil irá a b7 contra e4. Stockfish la considera algo floja, porque el blanco ocupa el centro sin oposición. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 b7b6 e2e4"].porQue` | Ocupa el centro: e4 va a quedar presionado por el alfil de b7, pero el blanco tiene tiempo para cuidarlo. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 b7b5 e2e4"].porQue` | Contra la Defensa Polaca, ocupar el centro y amenazar Axb5 es lo más simple. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 b7b5 e2e4 a7a6"].porQue` | Sostiene b5. ...Ab7, que ataca e4, también es jugable. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 b8d7 g1f3 c7c6"].porQue` | Refuerza d5 y prepara ...Da5 o ...dxc4. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 e2e4 d7d6"].porQue` | Evita la Francesa y prepara ...Cf6 y ...g6. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g1f3 d7d5 e2e3 c7c5 c4d5 e6d5 b1c3 a7a6"].porQue` | Prepara ...c4 sin que el blanco juegue Ab5. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g1f3 d7d5 e2e3 c7c5 c4d5 e6d5 b1c3 a7a6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 f1d1 b7b6"].porQue` | Prepara ...Ab7 o ...Aa6. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b2b3"].porQue` | Protege c4 y prepara Ab2. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b2b3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g1f3 d7d5 g2g3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 a2a3 b4c3 b2c3 e8g8 g1e2 b7b6"].porQue` | Prepara ...Aa6 contra c4. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 g8f6 b2b3"].porQue` | Prepara Ab2. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 g8f6 b1c3 d7d5 d1d3"].porQue` | Prepara e4. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 d7d5 f2f4"].porQue` | Según Stockfish es un error: era mejor 2. c4 (+0,2 contra −0,6, para el bando que juega). |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 d7d5 e2e3 g8f6 f1d3"].porQue` | Prepara f4: es el Ataque Stonewall. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 b8d7 g1f3 h7h6 g5h4 d5c4 e2e3"].porQue` | Prepara Axc4. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 f8b4 b1c3 c7c5 e2e3 g8f6 f1d3 b8c6 g1f3 b4c3 b2c3 d7d6 e1g1 e6e5 f3d2 e8g8 a1b1"].porQue` | La torre va a la columna b. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 f8b4 b1c3 c7c5 e2e3 g8f6 f1d3 b8c6 g1f3 b4c3 b2c3 d7d6 e1g1 e6e5 f3d2 e8g8 a1b1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 e6e5"].porQue` | Según Stockfish es un error: era mejor 2... Cf6 (−0,2 contra −1,3, para el bando que juega). |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 f8e7 e2e3 e8g8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 f8e7 e2e3 e8g8 a1c1 h7h6 g5h4 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a2a3 h7h6 g5h4 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 d1c2 c7c6 a2a3 h7h6 g5h4 b7b6 c4d5 c6d5 f1d3 c8b7 e1g1 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1g5 f8e7 e2e3 e8g8 g1f3 b8d7 f1d3 c7c6 e1g1 d5c4 d3c4 f6d5 g5e7 d8e7 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 g1f3 d7d5 e2e3 c7c5 c4d5 e6d5 b1c3 a7a6 f1e2 b8c6 e1g1 f8d6 d4c5 d6c5 b2b3"].porQue` | Prepara Ab2. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a2a3 d8a5 e1c1 c5e7 c1b1 a7a6"].porQue` | Prepara ...b5. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 g1f3 f8e7 e2e3 e8g8 b2b3 b7b6 c4d5 e6d5 c1b2 c8b7 f1d3 b8d7 e1g1 a7a6 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 c1f4 f8e7 e2e3 e8g8 a2a3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Horwitz (1.d4 e6): Inglesa y Canguro | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 d7d5 g1f3 f8e7 c1f4 e8g8 e2e3 c7c5 d4c5 e7c5 d1c2 b8c6 a2a3 d8a5 e1c1 c5e7 h2h4 a7a6"].porQue` | Prepara ...b5. |
| Defensa India Antigua | `planesBlancas` | e4, Ae2 y enroque; d5 en el momento justo para ganar espacio. |
| Defensa India Antigua | `planesBlancas` | Con Ag5, impedir que el negro pase a la India de Rey. |
| Defensa India Antigua | `planesNegras` | ...Ae7, ...O-O, ...c6 y ...a6 para preparar ...b5. |
| Defensa India Antigua | `rupturas` | ...exd4 y ...b5 del negro. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6"].porQue` | Prepara ...e5 sin comprometer el alfil de rey. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7"].porQue` | El plan clásico: sostiene e5 con el caballo. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 d4e5 d6e5 d1d8 e8d8"].porQue` | La alternativa principal a 4.Cf3: un final temprano en el que las blancas esperan aprovechar el rey negro algo inseguro en d8. Para Stockfish, la posición es pareja. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6"].porQue` | El plan tradicional: ...a6 y ...b5 en el flanco de dama. La posición negra es muy sólida, y la principal arma blanca es avanzar d5 en algún momento. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 c1g5"].porQue` | Cambia la situación: impide que el negro pase a la India de Rey con ...g6. Stockfish prefiere el natural 5.e4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 c1g5 f8e7"].porQue` | El desarrollo normal. Las blancas pueden seguir agresivamente con e3, Dc2, el enroque largo y g4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 c8f5"].porQue` | Una variante más aguda, de moda desde 1985: parece no tener sentido impedir e4 si las blancas pueden jugar f3, pero tiene su punto. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 c8f5 g2g3"].porQue` | La otra forma crítica de enfrentar 3...Af5: preparar e4 con Ag2. Es la preferida de Stockfish. |
| Defensa India Antigua | `notas["d2d4 d7d6"].porQue` | Defensa Rata: prepara ...e5 sin haber jugado ...Cf6. Contra 2.e4 se llega a la Pirc; contra 2.c4, ...e5 lleva a la Rata Inglesa. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7"].porQue` | Prepara ...e5 con el caballo detrás. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2 f8g7 e1g1 e8g8 f1e1"].porQue` | Refuerza e4 y prepara Af1. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2 f8g7 e1g1 e8g8 f1e1 c7c6"].porQue` | Prepara ...Da5 o ...b5 y controla d5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 g1f3 c7c6"].porQue` | Controla d5 y prepara ...Ag4 o ...e5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 g2g4"].porQue` | Según Stockfish es un error: era mejor 3. Cf3 (+0,6 contra −1,5, para el bando que juega). |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6 f1e1 f8e8 e2f1 a7a6"].porQue` | Prepara ...b5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 c7c6 d4d5 c6c5 f3e1 f6e8"].porQue` | Prepara ...f5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 c7c6 d4d5 c6c5 f3e1 f6e8 e1d3"].porQue` | El caballo va a d3. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2 f8g7 e1g1 e8g8 f1e1 c7c6 e2f1 a7a5 a1b1"].porQue` | Prepara b4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6 f1e1 f8e8 e2f1 d8c7 a1b1"].porQue` | Prepara b4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2 f8g7 e1g1 e8g8 f1e1 c7c6 e2f1 a7a5 a1b1 f8e8 d4d5 d7c5 b2b3"].porQue` | Prepara a3 y b4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6 f1e1 a7a6 a1b1"].porQue` | Prepara b4. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6 c1e3 a7a6"].porQue` | Prepara ...b5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3 b8d7 e2e4 f8e7 f1e2 e8g8 e1g1 c7c6 d1c2 a7a6"].porQue` | Prepara ...b5. |
| Defensa India Antigua | `notas["d2d4 g8f6 c2c4 d7d6 g1f3 c7c6 b1c3 b8d7 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa India de Dama | `planesBlancas` | Fianchetto propio (g3, Ag2) para disputar la diagonal larga. |
| Defensa India de Dama | `planesBlancas` | Ganar el centro con Cc3 y e4 si el negro descuida e4. |
| Defensa India de Dama | `planesNegras` | Controlar e4 con el alfil de b7, el caballo de f6 y a veces ...Ce4. |
| Defensa India de Dama | `planesNegras` | Presionar c4 con ...Aa6 y liberar el juego con ...c5 o ...d5. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3"].porQue` | Desarrolla y evita la clavada de la Nimzoindia (no hay caballo en c3 para clavar). |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6"].porQue` | Prepara el fianchetto del alfil de dama para controlar e4. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3"].porQue` | Fianchetto propio: el alfil de g2 va a disputar la diagonal larga. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4"].porQue` | Jaque que obliga a Ad2: después el alfil vuelve a e7 y las blancas quedaron con el alfil en d2, menos activo. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4"].porQue` | Ocupa e4 antes de que las blancas lo controlen con Dc2 o Dd3. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 c1d2"].porQue` | Más ambicioso: prepara d5 aunque ceda la pareja de alfiles. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4 c1d2 b4e7 f1g2 c7c6"].porQue` | Prepara ...d5 para poder retomar con el peón de c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3"].porQue` | Sistema Petrosian: impide ...Ab4 para poder jugar Cc3 sin la clavada. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5"].porQue` | Pelea por el centro: tras cxd5 el negro elige entre ...exd5, sólido, y ...Cxd5, más dinámico. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 f8b4 c1g5"].porQue` | Mezcla de India de Dama y Nimzoindia: muy agudo si el negro rompe la clavada con ...h6 y ...g5. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 d1c2"].porQue` | La forma más prudente: tras ...Cxc3 Dxc3, el negro puede jugar ...c5 sin temer d5, o armarse con ...f5, ...Af6, ...d6 y ...Cd7. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 d7d5"].porQue` | El ataque frontal al centro: el negro prepara ...c5 y guarda ...Ce4 en reserva. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 d7d5 f3e5 b8a6"].porQue` | Más preciso que el obvio ...Cbd7: contra 9.Da4 (que amenaza Cc6), el negro tiene ...De8. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 a7a5"].porQue` | La idea moderna: si Axb4 axb4, el negro gana la columna a y el control del centro. Las blancas lo evitan. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 a7a5 e1g1 e8g8 d2f4"].porQue` | Una línea crítica: amenaza c5 y a3 para atrapar el alfil de b4, que tiene que volver a e7. Después empieza la lucha por e4 con Cc3 y Dc2. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b1d2 a6b7 f1g2 c7c5 e2e4"].porQue` | El atrevido e4!: si 7...Cxe4, 8.Ce5 y el negro tiene que jugar con mucha precisión. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b1d2 a6b7 f1g2 c7c5 e2e4 c5d4"].porQue` | Lo correcto: tras 8.e5 Ce4 se mantiene un equilibrio dinámico. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b1d2 a6b7 f1g2 c7c5 e2e4 c5d4"].porQueNo["f6e4"]` | 7...Cxe4? 8.Ce5: si 8...Cc3?, 9.Dh5! g6 10.Ah3 y el negro pierde una pieza. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 d7d5"].porQue` | Lo más directo: si 6.Ag2, ...dxc4, y si entonces 7.Ce5, ...Ab4+ obliga al blanco a perder el enroque. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 b6b5"].porQue` | Una idea poco ortodoxa y puramente estratégica: elimina el peón de c4, debilita el centro blanco y prepara ...d5 y ...c5. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 g7g6"].porQue` | Más sutil: si 6.d5, el alfil irá a g7 y pelea contra el centro blanco desde la gran diagonal. Stockfish prefiere el directo 5...d5. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 f8b4 c1g5 c8b7 e2e3 h7h6 g5h4 b4c3 b2c3 d7d6"].porQue` | Más lenta pero mucho más sólida que 7...g5: el blanco arma su centro con Cd2, f3 y e4, y el negro responde con ...e5. |
| Defensa India de Dama | `notas["d2d4 g8f6 g1f3 b7b6"].porQue` | Pseudo India de Dama: el negro fianchetta el alfil de dama antes de que el blanco juegue c4. Si el blanco no lo juega, el alfil de b7 domina e4. |
| Defensa India de Dama | `notas["d2d4 g8f6 g1f3 b7b6 g2g3"].porQue` | Fianchetto propio: el alfil de g2 se va a oponer al de b7 en la diagonal larga. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 b7b6 b1c3"].porQue` | Prepara e4, que el alfil de b7 todavía no alcanza a impedir. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7"].porQue` | Desarrolla de forma sólida y prepara el enroque. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3"].porQue` | Desarrolla y prepara e4 para ganar el centro. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 b1c3"].porQue` | Desarrolla y prepara e4. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 c8b7 a2a3"].porQue` | Evita la clavada ...Ab4 y prepara e4. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 e2e3 c8b7 f1d3 c7c5 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 e2e3 c8b7 f1d3 c7c5 b1c3 c5d4 e3d4 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5 d4d5 e6d5 f3g5"].porQue` | Prepara recuperar el peón con Cxd5 y apunta a f7. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 b4d2 d1d2 e8g8 b1c3"].porQue` | Desarrolla y prepara e4. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 e2e3 c8b7 f1d3 c7c5 e1g1 f8e7 b2b3"].porQue` | Prepara el fianchetto del alfil de dama. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b2b3"].porQue` | Refuerza c4 y prepara Ab2. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 d1c2 e4c3 c2c3 c7c5 f1d1 d7d6 b2b3"].porQue` | Prepara Ab2. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 c1d2 f7f5 d4d5 e7f6 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 c1d2 f7f5 d4d5 e7f6 a1c1 b8a6 a2a3"].porQue` | Prepara b4. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b2b3 d7d5 c4d5 e6d5 b1c3 b8d7 c1b2 f8e8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 b1c3 f6e4 c1d2 e7f6 e1g1 e8g8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 c8b7 a2a3 d7d5 c4d5 f6d5 c1d2 b8d7 c3d5 e6d5 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 d7d5 f3e5 b8a6 c4d5 e6d5 c1f4 c7c5 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4 c1d2 b4e7 f1g2 c7c6 d2c3 d7d5 f3e5 f6d7 e5d7 b8d7 b1d2 e8g8 e1g1 a8c8"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 b4e7 e1g1 e8g8 b1c3 d7d5 c4d5 e6d5 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5 d4d5 e6d5 f3h4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 d7d5 f1g2 f8b4 c1d2 b4e7 c4d5 e6d5 e1g1 e8g8 b1c3 f8e8 f3e5 a6b7 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Dama | `notas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 d7d5 f1g2 d5c4 f3e5"].porQue` | El caballo va a recuperar el peón. |
| Defensa India de Dama | `trampas["d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 c1g5 c8b7 e2e3 h7h6 g5h4 f8b4 b1d2 g7g5 h4g3 g5g4"]` | Tarrasch–Bogoljubow (1920): con 4.Ag5 Ab7 5.e3 h6 6.Ah4 Ab4+, tapar con 7.Cbd2? es un error: 7...g5 8.Ag3 g4 y el caballo de f3 no tiene buena retirada (si 9.Ce5, ...Ce4). El blanco tiene que devolver material con 9.a3 gxf3 10.axb4 y queda peor. Lo correcto es 7.Cc3. |
| Defensa India de Rey | `planesBlancas` | Frenar el ataque negro en el flanco de rey (Ce1-d3, f3, g4 en algunos casos). |
| Defensa India de Rey | `planesNegras` | Si las blancas no cierran, presionar d4 con ...Cc6 y el alfil de g7. |
| Defensa India de Rey | `notas["d2d4 g8f6"].porQue` | Controla e4 sin comprometer todavía la estructura de peones: el negro decide después entre India de Rey, Nimzoindia u otras. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4"].porQue` | Suma espacio en el centro y prepara Cc3 y e4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6"].porQue` | Prepara el fianchetto del alfil de casillas negras: la India de Rey deja el centro a las blancas para atacarlo después. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3"].porQue` | Prepara e4 para armar el centro completo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6"].porQue` | Impide e5, que echaría al caballo de f6, y prepara ...e5 o ...c5 más adelante. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3"].porQue` | Desarrollo clásico: el caballo defiende d4 y prepara Ae2 y el enroque. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8"].porQue` | Primero el rey a salvo: recién después ...e5 abre el centro. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1"].porQue` | Libera el peón de f y prepara Cd3 para apoyar el avance c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5"].porQue` | Libera el peón de f y amenaza llevar el caballo a f4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2"].porQue` | Prepara b4 y c5; el caballo irá a c4 para presionar d6. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4e5"].porQue` | Variante del Cambio: busca un medio juego sin damas. Ojo: Cxe5 no gana un peón, por ...Cxe4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4e5 d6e5 d1d8 f8d8 c1g5 c7c6"].porQue` | Impide Cd5 y prepara ...Te8 y ...Ca6-c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5"].porQue` | Sistema Petrosian: cierra el centro antes de enrocar, para poder reaccionar en el flanco de rey si el negro juega ...f5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 a7a5 c1g5"].porQue` | Clava el caballo para frenar ...Ch5 y ...f5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 c1e3 f6g4 e3g5 f7f6 g5h4"].porQue` | El alfil se mantiene en la diagonal; el plan del negro es parecido al de la Clásica, pero las blancas no enrocaron. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3"].porQue` | Sämisch: sostiene e4 y prepara Ae3, Dd2 y, muchas veces, enroque largo con avance de peones en el flanco de rey. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5"].porQue` | La respuesta clásica: tras d5, el negro elige entre ...Ch5 con ...f5 y ...c6 para abrir la columna c. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b8c6"].porQue` | El plan agresivo: ...a6, ...Tb8 y ...b5, o ...e5 con ...Cd4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 c7c5"].porQue` | Ataca d4 enseguida; aunque se pierda un peón tras dxc5, la presión sobre la diagonal larga compensa. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4"].porQue` | Ataque de los Cuatro Peones: ocupa el centro al máximo. El negro tiene que golpear rápido con ...c5 o ...e5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 b8a6"].porQue` | Prepara ...e5: si las blancas toman, ...Cc5 aumenta la presión. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5"].porQue` | Averbakh: el alfil en g5 frena ...e5 y deja f3 libre para el caballo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 b8a6"].porQue` | Prepara ...e5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8d7"].porQue` | Prepara ...e5, el plan más clásico. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8c6"].porQue` | Prepara ...e5 o la variante Panno (...a6, ...Tb8 y ...b5). |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8c6 e1g1 a7a6"].porQue` | Variante Panno: ...Tb8 y ...b5 para abrir juego en el flanco de dama. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3"].porQue` | El sistema Makogonov: h3 le quita g4 a las piezas negras (ni ...Cg4 contra un alfil en e3 ni ...Ag4 contra el caballo de f3) y prepara g4 para ganar espacio en el flanco de rey. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5 d4d5"].porQue` | Cierra el centro. El plan blanco es g4 (y a veces g5); si el negro busca juego con ...f5, abre su propio enroque. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5 d4d5 a7a5 g2g4"].porQue` | El avance típico del Makogonov: controla f5 y h5 (frena ...Ch5 y ...f5) y prepara g5 para echar al caballo de f6. En una partida modelo del esquema, Anand-Ponomariov (Bilbao, 2014, con el caballo blanco en f3), las blancas siguieron con g5 y h4 y enrocaron largo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 d4d5"].porQue` | La Anti-Grünfeld: impide ...d5 y gana espacio. El negro no tiene problemas: ...Ag7, ...b5 o ...Ca6 dan una posición pareja. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 e8g8 e2e3"].porQue` | Modesto: renuncia a e4 por ahora. El negro iguala con ...d5 o con ...d6 y ...e5. Stockfish prefiere el ambicioso 5.e4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1g5"].porQue` | La Variante Steiner del Sämisch: el alfil en g5 frena ...e5 y prepara Dd2, con la idea del enroque largo y el ataque. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 e8g8 e2e3 d7d6"].porQue` | La estructura habitual de la India de Rey: después vienen ...e5 o ...c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8"].porQue` | Enroca antes de decidir el golpe central: contra la Sämisch, el negro elige después entre ...e5, ...c5 o ...c6 con ...a6 y ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6"].porQue` | Prepara ...e5 y le deja al blanco el centro, para atacarlo después. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3"].porQue` | Fianchetto: el blanco evita la lucha de la variante clásica y apunta a la gran diagonal. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g1f3"].porQue` | Desarrolla y deja abierta la elección entre Cc3 y el fianchetto. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6"].porQue` | Prepara ...e5 o ...c5 para disputar el centro. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6"].porQue` | Presiona d4 y prepara ...a6 con ...Tb8 y ...b5: es el sistema Panno. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g2g3"].porQue` | Fianchetto inmediato, antes de decidir dónde van los caballos. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6"].porQue` | Prepara ...e5 o ...c5: se llega a la variante del Fianchetto. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8"].porQue` | Enroca: contra los Cuatro Peones, el negro se prepara para golpear el centro con ...c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3"].porQue` | Prepara e4 con apoyo, antes de desarrollar el caballo de b1. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 f2f4 c7c5"].porQue` | Golpea en d4 antes de que el blanco complete el desarrollo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 f1e2"].porQue` | Desarrolla y deja que el negro decida si toma en d4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8"].porQue` | Enroca: contra el sistema Makogonov, el negro prepara ...e5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5"].porQue` | Golpea en el centro, que es el plan normal de la India de Rey. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7"].porQue` | Libera f6 para jugar ...f5: es el plan de ataque de la Mar del Plata. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 a7a5"].porQue` | Frena b4 y le asegura c5 al caballo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3"].porQue` | Desarrolla y prepara Dd2 y el enroque largo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 d4d5 c6a5"].porQue` | El caballo va a a5, desde donde presiona c4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 d4d5 c6a5 f3d2 c7c5"].porQue` | Refuerza el caballo de a5 y gana espacio: se juega ...Tb8 y ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 a7a6 d4d5 c6a5 f3d2 c7c5 d1c2"].porQue` | Prepara b3 para encerrar al caballo de a5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1g5 c7c5 d4d5 e7e6 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 h2h3 a8b8"].porQue` | Prepara ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 g1e2 c7c5 d4d5 e7e6 e2g3"].porQue` | El caballo va a g3, desde donde refuerza e4 y f5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 f2f4 c7c5 d4d5 e7e6 d5e6 f7e6 g2g4"].porQue` | Según Stockfish es un error: era mejor 9. h4 (0,0 contra −0,9, para el bando que juega). |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5 d4d5 a7a5"].porQue` | Frena b4 y le asegura c5 a los caballos. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5"].porQue` | Ataca d4 antes de que las blancas completen el centro. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5 d4d5 d7d6"].porQue` | Frena el avance e5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5 d4d5 d7d6 e2e4 f8g7 b1c3 e7e6 c1e3 e8g8 d1d2"].porQue` | Prepara el enroque largo y Ah6. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 b8d7"].porQue` | Prepara ...e5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 c1e3 f7f5 f2f3 f5f4 e3f2 g6g5 a1c1"].porQue` | Prepara c5 para atacar en el flanco de dama. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 c1g5"].porQue` | Clava el caballo antes de Cf3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2"].porQue` | Desarrolla y prepara f3 o Cg3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 b8a6"].porQue` | Prepara ...e5 con el caballo apoyando c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 d1c2"].porQue` | Controla e4 y prepara e4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 f2f3 f7f5 g2g4"].porQue` | Golpea el peón de f5 y frena el ataque negro en el flanco de rey. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 c1e3 f6g4 e3g5 f7f6 g5h4 g6g5 h4g3 g4h6"].porQue` | El caballo va a f7. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 d4d5 c6a5 f3d2 c7c5 d1c2 e7e5 a2a3"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 f2f3 f7f5 g2g4 g8h8 c1e3 e7g8 e1g2"].porQue` | El caballo va a g2 para defender el flanco de rey. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 f2f3 f7f5 g2g4 g8h8 e1d3"].porQue` | El caballo va a d3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 e1d3 f7f5 f2f3 f5f4"].porQue` | Gana espacio y prepara ...g5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5 f1e1 f7f5 f3g5 h5f6 f2f3 g8h8 a1b1"].porQue` | La torre va a la columna b. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5 f1e1 f7f5 a2a4 a7a5"].porQue` | Frena a5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 c1d2 f6h5"].porQue` | El caballo va a h5 para apoyar ...f5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 c1d2 f6h5 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 d4d5 c6a5 f3d2 c7c5 d1c2 e7e5 b2b3"].porQue` | Prepara Ab2. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3 e8g8 f1g2 b8c6 e1g1 a7a6 h2h3 a8b8 c1e3 b7b5 f3d2 c8d7 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 e1d3 f7f5 f2f3 f5f4 c1d2 g6g5 a1c1"].porQue` | La torre va a la columna c. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 e1d3 f7f5 f2f3 f5f4 c1d2 g6g5 a1c1 e7g6"].porQue` | El caballo va a g6. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2 a7a5"].porQue` | Frena b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2 a7a5 a1b1"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2 a7a5 a1b1 f6d7 a2a3"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 a7a5 c1g5 h7h6 g5h4 b8a6"].porQue` | El caballo va a c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 a7a5 c1g5 h7h6 g5h4 b8a6 f3d2 d8e8 e1g1 f6h7 a2a3"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 g1e2 c7c5 d4d5 e7e6 e2g3 e6d5 c4d5 a7a6"].porQue` | Prepara ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 g1e2 c7c5 d4d5 e7e6 e2g3 e6d5 c4d5 a7a6 a2a4"].porQue` | Frena ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2 e6d5 e4e5"].porQue` | Según Stockfish es un error: era mejor 9. cxd5 (+0,3 contra −0,6, para el bando que juega). |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2 e6d5 e4e5 f6e4"].porQue` | El caballo va a e4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5 d4d5 d7d6 e2e4 f8g7 b1c3 e7e6 c1e3 e8g8 d1d2 e6d5 c4d5 a7a6"].porQue` | Prepara ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5 d4d5 d7d6 e2e4 f8g7 b1c3 e7e6 c1e3 e8g8 d1d2 e6d5 c4d5 a7a6 a2a4"].porQue` | Frena ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2 a7a5 a2a3"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2 a7a5 a2a3 f6d7 a1b1"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1e3 e7e5 d4d5 b8a6"].porQue` | El caballo va a c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1e3 e7e5 d4d5 b8a6 g2g4 a6c5 f2f3 a7a5 h2h4 h7h5"].porQue` | Frena h5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1e3 e7e5 d4d5 b8a6 g2g4 a6c5 f2f3 a7a5 h2h4 h7h5 g4g5 f6d7 g1h3"].porQue` | El caballo va a f2. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5 d4d5 a7a5 g2g4 b8a6"].porQue` | El caballo va a c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3 e8g8 c1e3 e7e5 d4d5 a7a5 g2g4 b8a6 g1e2 c7c6 e2g3"].porQue` | El caballo va a g3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 f2f3 c7c5 d4d5 d7d6 e2e4 f8g7 b1c3 e7e6 c1e3 e8g8 d1d2 e6d5 c4d5 a7a6 a2a4 f8e8 g1e2 b8d7 e2g3"].porQue` | El caballo va a g3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 c1g5 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2 e8g8 e2g3"].porQue` | El caballo va a g3. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2 e8g8 e2g3 e7e5 d4d5 a7a5"].porQue` | Frena b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2 e8g8 e2g3 e7e5 d4d5 a7a5 f1e2 b8a6"].porQue` | El caballo va a c5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2 e8g8 e2g3 e7e5 d4d5 a7a5 f1e2 b8a6 h2h4 h7h5"].porQue` | Frena h5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8d7 f1e1 c7c6 e2f1 a7a5 a1b1"].porQue` | Prepara b4. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8a6 c1e3 c7c6 d4d5 f6g4 e3g5 f7f6 g5h4 c6c5 f3e1 g4h6"].porQue` | El caballo va a f7. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 c7c6"].porQue` | Sostiene d5 y prepara ...b5. |
| Defensa India de Rey | `notas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 c7c6 d4d5 b8a6"].porQue` | El caballo va a c5. |
| Defensa India de Rey | `trampas["d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e7e5 d4e5 d6e5 d1d8 e8d8 f3e5"]` | ...e5 antes de enrocar: dxe5 dxe5 Dxd8+ y el rey negro tiene que retomar, perdiendo el enroque, y después Cxe5 gana el peón. |
| Apertura Inglesa | `planesBlancas` | Controlar d5 con Cc3, el peón de c4 y el alfil de g2. |
| Apertura Inglesa | `planesBlancas` | Expandirse en el flanco de dama con Tb1, b4 y b5. |
| Apertura Inglesa | `planesNegras` | Contra el fianchetto, ...d5 tras cxd5 Cxd5 da un juego activo, como una Siciliana del Dragón invertida. |
| Apertura Inglesa | `estructura` | Muy variable. Contra 1...e5, peones blancos en c4 y d3 contra e5 y d6 (o un centro abierto tras ...d5 y cxd5). En la Simétrica, peones c4 contra c5 con juego en el flanco de dama. |
| Apertura Inglesa | `notas["c2c4"].porQue` | Controla d5 desde el flanco y deja abiertas varias estructuras: el negro no sabe todavía si va a enfrentar una d4 o una e4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6"].porQue` | Desarrolla y prepara ...d5 o ...Ab4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g2g3"].porQue` | Prepara el fianchetto: el alfil en g2 suma presión sobre d5 y sobre todo el flanco de dama. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g2g3 d7d5"].porQue` | El negro ocupa el centro antes de que el alfil llegue a g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 e7e6"].porQue` | Prepara ...d5 o ...Ab4 contra el caballo de c3. |
| Apertura Inglesa | `notas["c2c4 c7c5"].porQue` | Variante Simétrica: el negro copia la idea y también controla d4 desde el flanco. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g7g6 g2g3 f8g7 f1g2 b8c6 a2a3"].porQue` | Ataca en el flanco antes de terminar el desarrollo: Tb1 y b4. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g7g6 g2g3 f8g7 f1g2 b8c6 e2e4"].porQue` | Sistema Botvinnik: descarta ...d5 y prepara la expansión en los dos flancos (b4 o f4). |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7"].porQue` | Variante Rubinstein: refuerza d4 y prepara ...e5, una Maroczy con colores invertidos. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 d7d6"].porQue` | Variante Smyslov: prepara ...e5 con más apoyo y se adelanta a d4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 f8b4"].porQue` | Si Cd5, el alfil se retira y ...c6 expulsa al caballo. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5b6"].porQue` | Impide d4 y consolida el centro; el negro planea ...Ae7, ...O-O y ...f5. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g2g3 c7c6"].porQue` | El sistema Keres: prepara ...d5 para armar un centro fuerte. Kosten explica que es especialmente eficaz contra el orden con 2.Cc3: tras 4.d4 exd4 5.Dxd4 d5 6.cxd5 cxd5 7.Cf3 Cc6 8.Da4 d4!, el caballo de c3 queda mal ubicado y el negro toma la iniciativa (Stockfish: casi +1,5 para el negro). |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 f7f5"].porQue` | Un Gran Prix con colores invertidos: el negro apoya e5 con el peón de f y prepara juego en el flanco de rey. Kosten le dedica un capítulo; Stockfish prefiere el fianchetto (...g6), pero ...f5 es perfectamente jugable. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 d2d4 c5d4 d1d4 d7d6"].porQue` | La estructura del Erizo: peones en a6, b6, d6 y e6, con las piezas detrás. Parece pasiva, pero Suba la describe como una defensa dinámica: el negro espera con paciencia y golpea con las rupturas ...b5 o ...d5 en el momento en que el blanco se sobreextiende. |
| Apertura Inglesa | `notas["c2c4 d7d5 c4d5"].porQue` | Lo más fuerte: el negro tiene que recuperar el peón con la dama o con el caballo, y el blanco gana tiempo. |
| Apertura Inglesa | `notas["c2c4 d7d5 c4d5 g8f6 g1f3"].porQue` | Desarrollo antes de echar al caballo de d5: el blanco sigue con Cc3 y e4 o d4 cuando le convenga. |
| Apertura Inglesa | `notas["c2c4 e7e6 b1c3 g8f6 e2e4"].porQue` | El Ataque Mikenas-Carls: ocupa el centro antes de que el negro juegue ...d5. |
| Apertura Inglesa | `notas["c2c4 e7e6 b1c3 g8f6 e2e4 d7d5"].porQue` | Lo mejor: contraataca el centro enseguida; tras 4.e5 el negro juega ...d4 o ...Cfd7. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5"].porQue` | Anglo-Grünfeld: el negro juega ...d5 y, tras el cambio en d5, sigue con un esquema de Grünfeld. A diferencia de la Grünfeld, el blanco todavía no se comprometió con d4. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5"].porQue` | Hay que cambiar ya: si no, ...d4 echa al caballo de c3 y el negro gana espacio con tiempo. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5"].porQueNo["g2g3"]` | g3? d4 Ca4: el caballo queda en el borde y el negro sigue con ...e5. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g2g3"].porQue` | Fianchetto: el alfil de g2 va a presionar el caballo de d5 y toda la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g2g3 g7g6 f1g2 d5c3"].porQue` | Cambia antes de tener que retirarse. El blanco queda con peones doblados en c, pero gana la columna b semiabierta. |
| Apertura Inglesa | `notas["c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g2g3 g7g6 f1g2 d5c3"].porQueNo["f8g7"]` | ...Ag7?? Axd5: el caballo de d5 se pierde, porque si ...Dxd5, Cxd5. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3"].porQue` | Desarrolla y controla e5. Más adelante el blanco puede elegir entre d4, que transpone a la Holandesa, o seguir sin d4. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 g8f6 g2g3"].porQue` | El fianchetto es lo más natural: la diagonal larga apunta al flanco de rey, que ...f5 dejó debilitado. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 g8f6 g2g3 g7g6"].porQue` | El esquema Leningrado: ...Ag7, ...O-O y ...d6, con la ruptura ...e5 más adelante. |
| Apertura Inglesa | `notas["c2c4 g8f6 b2b4"].porQue` | El Orangután inglés: el peón de b gana espacio y prepara Ab2, una mezcla de Inglesa y Polaca. |
| Apertura Inglesa | `notas["c2c4 g8f6 b2b4 e7e5"].porQue` | Lo mejor: ocupa el centro y abre el alfil de f8, que ya amenaza ...Axb4. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7 g1f3"].porQue` | Desarrollo normal: el blanco va a enrocar y buscar d4 o b4 según cómo se arme el negro. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7 g1f3 b8c6 e1g1 e7e5"].porQue` | El esquema Rubinstein completo: los peones de c5 y e5 y los caballos de c6 y c7 controlan d4. El negro movió tres veces el caballo y cedió desarrollo a cambio del dominio central (Watson). |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7 d1b3"].porQue` | Ataca b7 y prepara Axc6+ para destrozar la estructura negra. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7 d2d3 e7e5"].porQue` | El esquema típico: ...e5 y ...Cc6 contra d4. Si el blanco quiere abrir, tendrá que jugar b4 o f4. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4"].porQue` | Abre el centro: tras ...cxd4 Cxd4 se llega a una especie de Siciliana abierta con c4 ya jugado; si el blanco suma e4, se forma la estructura Maroczy. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4 c5d4 f3d4 e7e6"].porQue` | Lo más flexible: prepara ...d5 o ...Ab4+ y deja abiertas varias estructuras. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4 c5d4 f3d4 e7e6 g2g3"].porQue` | El fianchetto: el alfil de g2 presiona la gran diagonal, y el caballo de b1 todavía no va a c3, donde ...Ab4 lo clavaría. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4 c5d4 f3d4 e7e6 g2g3 f8b4"].porQue` | Un jaque para desordenar el desarrollo blanco antes de decidir dónde va cada pieza. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4 c5d4 f3d4 e7e6 g2g3 f8b4 c1d2 d8b6"].porQue` | La línea principal según Watson: la dama ataca d4 y b2 al mismo tiempo. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 d2d4 c5d4 f3d4 b8c6 b1c3"].porQue` | Desarrolla y controla d5 y e4. Ahora el negro elige entre ...e6, ...d5, ...Db6 o ...g6. |
| Apertura Inglesa | `notas["c2c4 g8f6 d2d4"].porQue` | Ocupa el centro con el peón de dama: es 1.d4 Cf6 2.c4 por otro orden, y el negro pasa a elegir entre las defensas indias. |
| Apertura Inglesa | `notas["c2c4 e7e6"].porQue` | Prepara ...d5 sin encerrar el alfil de casillas negras. Es flexible: puede llevar a un Gambito de Dama rehusado, a una Nimzoindia o a una Holandesa. |
| Apertura Inglesa | `notas["c2c4 g8f6 d2d4 e7e6 b1c3 c7c5"].porQue` | Ataca el centro blanco desde el flanco en lugar de ocuparlo: lleva a la Semi-Tarrasch o, si el blanco avanza d5, a estructuras de Benoni. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3"].porQue` | Desarrolla y prepara d4 para abrir el centro: contra la Simétrica es la jugada más flexible. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3"].porQue` | Refuerza el control de d5. Si el negro sigue con ...Cc6 y ...g6, se llega a la Simétrica con los dos fianchettos. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 g2g3"].porQue` | Prepara el fianchetto: el alfil en g2 apunta a d5 y a la gran diagonal. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 g2g3 g7g6"].porQue` | El negro copia el plan con su propio fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c6"].porQue` | Prepara ...d5 apoyado por otro peón: el negro busca una estructura de Eslava o de Caro-Kann según cómo siga el blanco. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6"].porQue` | Desarrolla y defiende e5: el negro se guarda ...g6 y ...Ag7 (Inglesa cerrada) o ...Cf6. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 g7g6"].porQue` | El negro también hace el fianchetto: es la Inglesa cerrada, una Siciliana cerrada con los colores invertidos. |
| Apertura Inglesa | `notas["c2c4 d7d5"].porQue` | Desafía de inmediato al peón de c4: tras cxd5 el negro recupera el peón, pero tiene que decidir con qué pieza. |
| Apertura Inglesa | `notas["c2c4 g7g6"].porQue` | Prepara el fianchetto del alfil de casillas negras y deja la estructura central para después. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3"].porQue` | Desarrolla sin comprometer el peón de dama: el blanco se guarda d4 para más adelante y sigue en la Inglesa. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6"].porQue` | Prepara ...d5 o ...b6 y deja libre el alfil de f8. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5"].porQue` | Ocupa el centro con un peón en d5, justo enfrente del alfil que va a llegar a g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7"].porQue` | Desarrolla y prepara el enroque: el negro mantiene el centro con calma. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1"].porQue` | Pone el rey a salvo. Después el blanco suele elegir entre b3 con Ab2 o pasar a una Catalana con d4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6"].porQue` | Prepara ...Ab7 para disputarle la gran diagonal al alfil de g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6 e1g1"].porQue` | Enroca antes de decidir qué hacer en el centro. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 a7a6"].porQue` | Prepara ...b5 para atacar el peón de c4 y ganar espacio en el flanco de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 a7a6 f1g2"].porQue` | Completa el fianchetto antes de reaccionar en el flanco de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6"].porQue` | Prepara ...Ab7 para controlar e4 y disputar la gran diagonal: es la Anglo-India. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5"].porQue` | Responde de forma simétrica: el negro también controla d4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5"].porQue` | Golpea en el centro antes de que el alfil llegue a g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 d7d5 c4d5 f6d5 e2e3"].porQue` | Prepara d4 con un centro sólido y abre la diagonal del alfil de f1. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6"].porQue` | Prepara el fianchetto de rey: el negro puede ir a una India de Rey o a una Simétrica con doble fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3"].porQue` | El blanco también hace el fianchetto, sin comprometer todavía el peón de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8"].porQue` | Enroca antes de definir el centro. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1"].porQue` | Enroca también: el blanco se guarda la elección entre d4 y un plan de flanco. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 c7c5 b1c3 b8c6 b2b3"].porQue` | Prepara Ab2 para oponerse al alfil de g7 en la gran diagonal. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c6"].porQue` | Prepara ...d5 con apoyo de peón: una estructura de Eslava. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c6 b2b3"].porQue` | Prepara el fianchetto de dama sin comprometerse en el centro. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c6 b2b3 d7d5 c1b2 c8g4"].porQue` | Desarrolla el alfil antes de encerrarlo con ...e6 y clava el caballo de f3. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5"].porQue` | Ocupa el centro: el negro busca una estructura de Gambito de Dama. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3"].porQue` | Fianchetto: el alfil en g2 presiona d5, y el blanco se guarda d4 para más adelante. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 c7c5 b1c3 b8c6 d2d3"].porQue` | Abre el alfil de c1 y prepara a3, Tb1 y b4 para avanzar en el flanco de dama. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 b7b6"].porQue` | Prepara ...Ab7 para disputar la gran diagonal. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 b7b6 f1g2"].porQue` | Completa el fianchetto: los dos alfiles se van a enfrentar en la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 c7c5"].porQue` | Controla d4 y prepara ...Cc6 y ...Cf6. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 c7c6 b2b3"].porQue` | Prepara Ab2 y protege c4 si el negro toma con ...dxc4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 b7b6"].porQue` | Prepara el doble fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c6 b2b3 d7d5 c1b2 c8f5"].porQue` | Desarrolla el alfil afuera de la cadena de peones antes de jugar ...e6. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 c7c5 b1c3 g8f6 d2d4 b8c6"].porQue` | Según Stockfish es un error: era mejor 4... cxd4 (−0,1 contra −1,5, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 c7c5 b1c3 g8f6 d2d4 b8c6 g2g3"].porQue` | Según Stockfish es un error: era mejor 5. d5 (+1,5 contra +0,2, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 a7a6"].porQue` | Prepara ...b5 para atacar el peón de c4. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 a7a6 b1c3 c7c5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g7g6"].porQue` | Prepara el fianchetto del alfil de casillas negras. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 e5e4 f3g5"].porQue` | El caballo va a g5, desde donde ataca el peón de e4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e2e3"].porQue` | Prepara Cge2, para no tapar el alfil de g2 con el caballo. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3"].porQue` | Protege c4 y prepara el doble fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 c7c5 b2b3"].porQue` | Protege c4 y prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 e7e6"].porQue` | Prepara ...d5 o ...b6. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 g2g3 b7b6"].porQue` | Prepara ...Ab7 para controlar e4 y la gran diagonal. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque: es el Erizo. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 d7d6"].porQue` | Prepara ...e5 y controla e5. |
| Apertura Inglesa | `notas["c2c4 d7d5 c4d5 g8f6"].porQue` | Desarrolla y prepara recuperar el peón con el caballo. |
| Apertura Inglesa | `notas["c2c4 g7g5"].porQue` | Según Stockfish es un error: era mejor 1... e5 (−0,2 contra −1,4, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 e7e6 d2d4 b7b6 b1c3 c8b7 e2e4 f7f5 e4f5 g8f6"].porQue` | Según Stockfish es un error: era mejor 5... exf5 (−1,2 contra −2,1, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b2b3"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3"].porQue` | Protege c4 y prepara Ab2 para el doble fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3"].porQue` | Controla d4 y prepara Ab2 y Cc3. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 c7c5"].porQue` | Golpea en d4 antes de enrocar. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 c7c6 b2b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1"].porQue` | Enroca: el blanco va a buscar juego en el flanco de dama con a3, Tb1 y b4. |
| Apertura Inglesa | `notas["c2c4 e7e6 d2d4 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6"].porQue` | Prepara el fianchetto: es una Benoni. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 c7c5 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 d2d4 c5d4 d1d4 d7d6 f1d1 a7a6"].porQue` | Prepara ...b5: es la estructura del Erizo. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 f8b4 g2g4"].porQue` | Amenaza g5 para echar al caballo de f6. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 b7b6"].porQue` | Prepara el fianchetto del alfil de dama. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 e2e3"].porQue` | Prepara d4. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 e2e3 e7e6"].porQue` | Prepara ...d5. |
| Apertura Inglesa | `notas["c2c4 c7c5 b1c3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 g2g3 g7g6"].porQue` | Prepara su propio fianchetto: Inglesa simétrica. |
| Apertura Inglesa | `notas["c2c4 c7c5 e2e4 b8c6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 e2e4 b8c6 b1c3 g7g6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c5 g2g3 g7g6 f1g2 f8g7 b1c3 b8c6 e2e3"].porQue` | Prepara Cge2 y d4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 a1b1"].porQue` | Prepara b4 y b5. |
| Apertura Inglesa | `notas["c2c4 e7e6 b1c3 g8f6 e2e4 c7c5"].porQue` | Controla d4 y frena e5. |
| Apertura Inglesa | `notas["c2c4 c7c5 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −0,8, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 g8f6 e2e4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,2 contra −1,0, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6"].porQue` | Prepara el fianchetto propio con ...Ab7 o ...Aa6. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6 b1c3 c8a6 d2d3 a8c8"].porQue` | La torre va a la columna c, donde se puede abrir el juego. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6 b1c3 c8b7"].porQue` | El alfil va a la diagonal larga, frente al de g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 d5d4 e3d4 c5d4 d2d3 b8c6 f1e1 f6d7 b1a3"].porQue` | El caballo va a c2 para presionar d4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 b8d7"].porQue` | Desarrolla sin apuro: la estructura ...c6/...d5 es muy sólida. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 b8d7 d2d3 a7a5"].porQue` | Gana espacio en el flanco de dama y prepara ...a4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 b8d7 d2d3 a7a5 a2a3"].porQue` | Frena ...a4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 a7a6 f1g2 b7b5 b2b3 c8b7"].porQue` | El alfil va a la diagonal larga, frente al de g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 a7a6 f1g2 b7b5 b2b3 c8b7 e1g1 c7c5 b1c3 d8b6 e2e3"].porQue` | Prepara d4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5 d2d4 e7e6 c4d5 f6d5 f1g2 c5d4 f3d4 d5c3 b2c3 c6d4 d1d4 d8d4 c3d4 f8d6 e1g1 a8b8"].porQue` | La torre va a b8 para sostener el peón de b7. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 c7c5 d2d4 d7d5 e2e3 b8c6 c4d5 e6d5 f1e2 c5d4 f3d4 f8d6 e1g1 e8g8 b2b3"].porQue` | Prepara el fianchetto de dama para presionar d5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6 b1c3 d5c4 b3c4 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6 b1c3 d5c4 b3c4 c8b7 d1e2 d8c7 f1d1"].porQue` | La torre va a la columna d. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c5 e2e3 b8c6 c1b2 b7b6 b1c3 d5c4 b3c4 c8b7 d1e2 d8c7 f1d1 a7a6"].porQue` | Prepara ...b5 o ...Tfd8. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 a7a5 b1c3 b7b6"].porQue` | Prepara ...Aa6 o ...Ab7. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 c7c6 b2b3 f8e7 c1b2 e8g8 e1g1 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 c7c6 b2b3 f8e7 c1b2 e8g8 e1g1 b7b6 d2d3 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 a7a6 f1g2 b7b5 b2b3 c7c5 e1g1 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7"].porQue` | El alfil va a la diagonal larga, frente al de g2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 c7c5 b1c3 f8e7 d2d4 c5d4 d1d4 d7d6 f1d1 a7a6 b2b3"].porQue` | Sostiene c4 y prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 c7c5 b1c3 f8e7 d2d4 c5d4 d1d4 d7d6 f1d1 a7a6 b2b3 b8d7 e2e4 d8c8"].porQue` | Prepara ...Tc8 y vigila la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5 d2d4 e7e6 c4d5 e6d5"].porQue` | Recaptura con el peón: si después se cambia en d4, queda un peón aislado. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5 d2d4 c5d4 f3d4 d5c4 d4c6 d8d1 c3d1 b7c6 f1g2 f6d5"].porQue` | El caballo va a d5, una casilla central. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5 d2d4 c5d4 f3d4 d5c4 d4c6 d8d1 c3d1 b7c6 f1g2 f6d5 d1e3"].porQue` | El caballo va a recuperar c4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d6 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d6 a2a3 a7a6"].porQue` | También prepara ...b5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 d7d5 c4d5 f6d5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 c7c5 d2d4 d7d5 e2e3 b8c6 c4d5 e6d5 f1e2 f8e7 e1g1 e8g8 d4c5 e7c5 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 c7c5 d2d4 d7d5 e2e3 b8c6 c4d5 e6d5 f1e2 f8e7 e1g1 e8g8 d4c5 e7c5 b2b3 a7a6"].porQue` | Prepara ...Aa7. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 c7c5 d2d4 c5d4 f3d4 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 b8d7 d2d3 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2 b8d7 d2d3 b7b6 b1d2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6 e1g1 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6 e1g1 c8b7 c4d5 e6d5 d2d4 f8e7 b1c3 e8g8 c1f4 b8a6"].porQue` | El caballo va a c7 o b4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6 e1g1 c8b7 c4d5 e6d5 d2d4 f8e7 b1c3 e8g8 c1f4 b8a6 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 d7d5 f1g2 b7b6 e1g1 c8b7 c4d5 e6d5 d2d4 f8e7 b1c3 e8g8 c1f4 b8a6 a1c1 c7c5 d4c5"].porQue` | Toma en c5: si el negro recaptura con el peón, queda con peones colgantes en c5 y d5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 b1c3 e8g8 f1e1"].porQue` | La torre prepara e4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 b1c3 e8g8 f1e1 d7d5"].porQue` | Ocupa el centro antes de que llegue e4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 b1c3 e8g8 f1e1 d7d5 c4d5 e6d5 d2d4 b8d7 c1f4 c7c5 d4c5 d7c5 a1c1"].porQue` | La torre va a la columna c, frente al caballo. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 d7d5 d2d4 c5d4 f3d4 e7e5 d4c6 b7c6 f1g2 a8b8"].porQue` | La torre va a la columna b semiabierta. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d6 a2a3 c8d7"].porQue` | Desarrolla y prepara ...Tb8 o ...a5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d6 a2a3 c8d7 a1b1 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d6 a2a3 c8d7 a1b1 a7a5 c1d2 f6e8"].porQue` | El caballo se reubica para jugar ...f5 o ...Cc7. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d5 c4d5 f6d5 c1d2 d5c7 d1c1"].porQue` | Prepara Ah6 para cambiar el alfil de g7. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 e7e6"].porQue` | Prepara ...d5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 e7e6 f1g2 d7d5 c4d5 e6d5 d2d4"].porQue` | Golpea el centro: si se cambia en d4, el negro queda con un peón aislado. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 e7e5"].porQue` | Según Stockfish es un error: era mejor 3... e6 (−0,2 contra −1,5, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 b7b6 f1g2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 b7b6 f1g2 c8b7 e1g1 f8g7 d2d4 e8g8 d4d5 b8a6"].porQue` | El caballo va a c5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 b7b6 f1g2 c8b7 e1g1 f8g7 d2d4 e8g8 d4d5 b8a6 b1c3 a6c5 f3d4"].porQue` | El caballo va a d4, una gran casilla. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c6 b2b3 d7d5 c1b2 c8g4 e2e3 b8d7 f1e2 e7e6 e1g1 f8d6 d2d4 e8g8 b1d2 d8e7"].porQue` | Desarrolla la dama y prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 f8b4 g2g4 h7h6"].porQue` | Frena g5. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 g8f6 b1c3 f8b4 g2g4 h7h6 h1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 a7a6"].porQue` | Prepara ...b5 con ganancia de tiempo. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 a7a6 c4c2 c7c5 b1c3 d8c7 e1g1 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 a7a6 c4c2 c7c5 b1c3 d8c7 e1g1 b7b6 d2d4 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 a7a6"].porQue` | Prepara ...Aa7, para que el alfil no quede expuesto. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 a7a6 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 g7g6 g2g3 c7c6"].porQue` | Prepara ...d5. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 c7c5 e1g1 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 c7c5 e1g1 b7b6 d2d4 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 b8d7 a4c4 c7c5 e1g1 b7b6 d2d4 c8b7 b1c3 a8c8"].porQue` | La torre va a la columna c. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 c7c6"].porQue` | Tapa el jaque y prepara ...b5. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 c7c6 a4c4 b7b5 c4c2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 f8d6 e1g1 e8g8 d2d4 b8c6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 c7c6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 h7h6 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 h7h6 a2a3 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 h7h6 a2a3 a7a5 e2e3 c5b6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 d2d4 c5d4 f3d4 a7a6"].porQue` | Prepara ...Dc7 y ...b5 o ...b6. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 d2d4 c5d4 f3d4 a7a6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 c7c5 b1c3 b8c6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 d2d4 c5d4 f3d4 a7a6 b2b3 d8c7 c1b2 d7d6 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d5 c4d5 f6d5 d2d4 g7g6"].porQue` | Prepara el fianchetto, al estilo de la Grünfeld. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6"].porQue` | Prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 b8d7"].porQue` | Prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 b8d7 b1c3 c7c6"].porQue` | Prepara ...e5 y ...Da5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 b8d7 b1c3 c7c6 e2e4 e7e5 f1e2 f8e7 e1g1 e8g8 f1e1 a7a6"].porQue` | Prepara ...b5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 b8d7 b1c3 c7c6 e2e4 e7e5 f1e2 f8e7 e1g1 e8g8 f1e1 a7a6 e2f1 b7b5 a2a3"].porQue` | Prepara b4 y frena ...b4. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 d5c4 d1a4 c8d7 a4c4 c7c5 f3e5 d8c8 c4d3 b8c6 e5d7 f6d7 b1c3 f8e7 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 c7c5 f1g2 g8f6 e1g1 b8c6 c4d5 e6d5 d2d4"].porQue` | Golpea el centro: si se cambia en d4, el negro queda con un peón aislado. |
| Apertura Inglesa | `notas["c2c4 c7c5 g1f3 g7g6 d2d4 f8g7 e2e4 d8b6 d4c5 b6c5 f1e2 d7d6 e1g1 b8c6 a2a3"].porQue` | Prepara b4 con ganancia de tiempo sobre la dama. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 a7a6 a2a3 h7h6 b2b4 c5a7 c1b2 c8e6 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 e8g8 e1g1 h7h6 a2a3 a7a6"].porQue` | Prepara ...Aa7. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 h7h6 e1g1 a7a6"].porQue` | Prepara ...Aa7. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 h7h6 e1g1 a7a6 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 f8c5 d2d3 d7d6 f1g2 a7a6"].porQue` | Prepara ...Aa7. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 d7d5 c4d5 f6d5 f1g2 f8c5 e1g1 e8g8 d2d3 h7h6 c3d5 d8d5 c1d2 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 d7d5 c4d5 f6d5 f1g2 f8c5 e1g1 e8g8 d2d3 h7h6 c3d5 d8d5 c1d2 a7a5 d2c3 d5e6 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 d7d5 c4d5 f6d5 f1g2 d5b6 e1g1 f8e7 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 e5e4 f3g5 c7c6"].porQue` | Prepara ...d5. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e2e3 d7d6 g1e2 g8h6"].porQue` | El caballo va a f5, sin tapar el peón de f. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 d7d6 f1g2 c8e6 d2d3 d8d7"].porQue` | Prepara ...Ah3 para cambiar el alfil de g2. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 b8c6 g2g3 d7d6 f1g2 c8e6 d2d3 d8d7 a1b1 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8f5 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 h7h6 b1d2 e8g8 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8f5 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 h7h6 b1d2 e8g8 a2a3 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8f5 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 h7h6 b1d2 e8g8 a2a3 a7a5 d1c2"].porQue` | Desarrolla la dama y prepara e4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8f5 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 h7h6 b1d2 e8g8 a2a3 a7a5 d1c2 f5h7 b2c3"].porQue` | El alfil frena ...a4 y mira e5. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8g4 f1g2 e7e6 c1b2 b8d7 e1g1 f8d6 d2d3 e8g8 b1d2 d8e7"].porQue` | Prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8g4 f1g2 e7e6 c1b2 b8d7 e1g1 f8d6 d2d3 e8g8 b1d2 d8e7 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8g4 f1g2 e7e6 c1b2 b8d7 e1g1 f8d6 d2d3 e8g8 b1d2 d8e7 a2a3 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 g8f6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 b1c3 d7d6"].porQue` | Prepara ...e5. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 g8f6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 b1c3 d7d6 d2d4 c7c6 d4d5 e7e5 d5e6 c8e6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 f7f5 g1f3 g8f6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 b1c3 d7d6 d2d4 c7c6 d4d5 e7e5 d5e6 c8e6 b2b3 b8a6"].porQue` | El caballo va a c7 o c5. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 g7g6 b1c3 c8f5"].porQue` | Desarrolla el alfil antes de que e4 lo encierre. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 b7b6"].porQue` | Prepara el fianchetto de dama. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 b7b6 g2g3"].porQue` | Prepara el fianchetto propio. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 b7b6 g2g3 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 g8f6 f1g2 f8d6 e1g1 e8g8 d2d4 h7h6 b1c3 b8c6 b2b3"].porQue` | Sostiene c4 y prepara Ab2. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 c7c5 f1g2 g8f6 e1g1 d5d4 e2e3 b8c6 e3d4 c5d4 d2d3 f8d6 c1g5 h7h6 g5f6 d8f6 b1d2 f6e7 a2a3"].porQue` | Prepara b4. |
| Apertura Inglesa | `notas["c2c4 e7e6 g1f3 d7d5 g2g3 c7c5 f1g2 g8f6 e1g1 d5d4 e2e3 b8c6 e3d4 c5d4 d2d3 f8d6 c1g5 h7h6 g5f6 d8f6 b1d2 f6e7 a2a3 a7a5"].porQue` | Frena b4. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 g8f6 g1f3 e5e4 f3g5 f6g4"].porQue` | Según Stockfish es un error: era mejor 4... c6 (−0,5 contra −3,1, para el bando que juega). |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 f8b4 c3d5 a7a5 g1f3 d7d6 a2a3 b4c5 e2e3"].porQue` | Prepara d4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8g4 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 e8g8 b1d2 a7a5 a2a3"].porQue` | Frena ...a4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 c8g4 f1g2 e7e6 c1b2 b8d7 e1g1 f8e7 d2d3 e8g8 b1d2 a7a5 a2a3 f8e8 d1c2"].porQue` | Desarrolla la dama y prepara e4. |
| Apertura Inglesa | `notas["c2c4 c7c6 g1f3 d7d5 g2g3 g8f6 b2b3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 d7d6 d2d4 g7g6 b1c3 f8g7 e2e4 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5 f1e1"].porQue` | Prepara Af1, para que el alfil no quede expuesto a ...Cf4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 b7b6 g2g3 c7c5 f1g2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Apertura Inglesa | `notas["c2c4 e7e5 b1c3 f8b4 c3d5 b4c5 g1f3 c7c6 d5c3 d7d6 e2e3"].porQue` | Prepara d4. |
| Apertura Inglesa | `notas["c2c4 g7g6 e2e4 e7e5 d2d4 g8f6 g1f3 e5d4 e4e5 f6e4"].porQue` | El caballo va a e4. |
| Apertura Inglesa | `notas["c2c4 g8f6 g1f3 b7b6 g2g3 c8b7 f1g2 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 b8c6 b1c3 e7e5 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 e2e4"].porQue` | Ocupa el centro: esquema de Botvinnik. |
| Apertura Inglesa | `notas["c2c4 b8c6 b1c3 e7e5 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 e2e4 g8e7 g1e2 e8g8 e1g1 c8e6 c3d5 d8d7 c1e3 f7f5 d1d2 f8f7 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Inglesa | `notas["c2c4 b8c6 b1c3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 b8c6 b1c3 g8f6 g2g3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Inglesa | `notas["c2c4 e7e5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Italiana (Giuoco Piano) | `planesNegras` | Desarrollo armónico (...Ac5, ...Cf6, ...d6) y la ruptura ...d5 en el momento justo. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6"].porQueNo["d7d5"]` | 2...d5?!, el Gambito Elefante: después de 3.exd5 el negro no recupera el peón con comodidad (si 3...Dxd5 4.Cc3 con tiempo) y lo más jugado, 3...e4 4.De2, deja al blanco con un peón de más. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3"].porQue` | Prepara d4 para ganar el centro con tiempo sobre el alfil de c5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6"].porQue` | Contraataca e4: si las blancas juegan d4 enseguida, el negro tiene recursos con ...exd4 y ...Cxe4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3"].porQue` | Giuoco Pianissimo: defiende e4 y deja d4 para más adelante. Juego lento y de maniobras. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5"].porQueNo["f8c5"]` | Ignorar la amenaza no funciona: Axf7+ y el rey negro pierde el enroque. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 f3g5 d7d5 e4d5"].porQue` | Las blancas toman y amenazan otra vez f7. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 c1d2"].porQue` | La línea moderna: cambia alfiles. La clásica 7.Cc3 entrega peones y está muy analizada. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 c1d2 b4d2 b1d2 d7d5"].porQue` | Golpea el centro: tras exd5 Cxd5, el negro iguala. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8e7"].porQue` | Defensa Húngara: sólida y con poca teoría; prepara ...d6. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 d2d3"].porQue` | El Giuoco Pianissimo («juego muy tranquilo»): sólido, posterga la lucha. Con c3, O-O, Te1 y a veces a4 se volvió una de las líneas principales de 1.e4 e5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 d2d3 g8f6"].porQue` | Lo más natural: ataca e4 y obliga al blanco a sostenerlo. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 d2d3 g8f6 e1g1 d7d6 c2c3"].porQue` | El plan moderno: c3 prepara d4 y le deja al alfil la retirada a c2 si lo atacan con ...Ca5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b1c3 g8f6 d2d3 d7d6 c1g5"].porQue` | La versión antigua con Cc3: amenaza Cd5, que suma presión sobre el caballo clavado de f6. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b1c3 g8f6 d2d3 d7d6 c1g5 h7h6"].porQue` | Pregunta al alfil antes de que llegue Cd5: si 7.Ah4, el negro romperá la clavada con ...g5 cuando le convenga. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b1c3 g8f6 d2d3 d7d6 c1g5 h7h6 g5f6 d8f6 c3d5 f6d8"].porQue` | La dama vuelve: el negro cubre c7 y después echa al caballo con ...Ce7 o ...c6. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1"].porQue` | Pone el rey a salvo y se guarda c3 y d4 para después. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1 g8f6 d2d3"].porQue` | Defiende e4 con calma: es la Italiana lenta, con maniobras antes de abrir el centro. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1 g8f6 d2d3 d7d6 c2c3 a7a6"].porQue` | Prepara una retirada para el alfil en a7, donde no lo molestan b4 ni d4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1 g8f6 d2d4 e5d4"].porQue` | Toma el peón: si el blanco sigue con e5, el negro contraataca en el centro con ...d5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 e1g1"].porQue` | Enroca antes de jugar d4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 c1d2 f6e4 d2b4 c6b4 c4f7 e8f7 d1b3 d7d5 f3e5 f7f6"].porQue` | Según Stockfish es un error: era mejor 11... Re6 (−0,1 contra −1,0, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b2b4 c5b4 c2c3 b4a5 d2d4 e5d4 e1g1 b7b5"].porQue` | Según Stockfish es un error: era mejor 7... Cf6 (+0,3 contra −1,3, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 d7d6 c2c3"].porQue` | Prepara d4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,1 contra −1,2, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 h7h6"].porQue` | Evita Cg5, pero pierde tiempo. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 c6d4"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,1 contra −1,3, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c4f7"].porQue` | Según Stockfish es un error: era mejor 4. O-O (+0,2 contra −3,6, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 g8f6 d2d4 d7d6"].porQue` | Defiende e5 en lugar de tomar. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 b1c3 f6e4 e1g1 b4c3 d4d5 c3f6 f1e1 c6e7 e1e4 d7d6 g2g4"].porQue` | Avance de flanco: el blanco busca ataque. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 b1c3 f6e4 e1g1 b4c3 b2c3 d7d5 c1a3"].porQue` | Según Stockfish es un error: era mejor 10. Ad3 (−0,4 contra −2,3, para el bando que juega). |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 e1g1 a7a6 f1e1 c5a7 b1d2 e8g8 c4b3 f6g4 e1e2 g8h8"].porQue` | Prepara ...f5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 e1g1 a7a6 f1e1 c5a7 b1d2 e8g8 c4b3 f6g4 e1e2 g8h8 h2h3 g4h6 d2f1"].porQue` | El caballo va a g3. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 c3d4 c5b4 e1f1"].porQue` | El rey se corre en lugar de tapar el jaque. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d4 e5d4 b2b4 c5b6 e4e5 d7d5 e5f6 d5c4 d1e2"].porQue` | Da jaque para seguir con fxg7. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 e1g1 a7a6 f1e1 c5a7 b1d2 e8g8 d2f1"].porQue` | El caballo va a g3. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b1d2 e8g8 e1g1 a7a5"].porQue` | Gana espacio y prepara ...a4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 b2b4 c5b6 d2d3 d7d6 a2a4"].porQue` | Amenaza a5 contra el alfil. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 b2b4 c5b6 d2d3 d7d6 a2a4 a7a5"].porQue` | Frena a5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 b2b4 c5b6 d2d3 d7d6 a2a4 a7a5 b4b5 c6e7 e1g1 e8g8 b1d2 e7g6"].porQue` | El caballo va a g6. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 b1c3 g8f6 d2d3 d7d6 c1g5 h7h6 g5f6 d8f6 c3d5 f6d8 c2c3"].porQue` | Prepara d4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 e1g1 a7a6 f1e1 c5a7 c4b3 e8g8 h2h3 h7h6 b1d2 f6h5"].porQue` | El caballo va a f4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 e1g1 a7a6 f1e1 c5a7 c4b3 e8g8 h2h3 h7h6 b1d2 f6h5 d2f1"].porQue` | El caballo va a g3. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b1d2 e8g8 e1g1 a7a5 f1e1 c8e6 c4b5 d8b8 d2f1"].porQue` | El caballo va a g3. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b1d2 e8g8 e1g1 a7a5 h2h3 h7h6 f1e1 c8e6 c4b5 d8b8 d2f1"].porQue` | El caballo va a g3. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b2b4 c5b6 e1g1 e8g8 a2a4"].porQue` | Amenaza a5 contra el alfil. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b2b4 c5b6 e1g1 e8g8 a2a4 a7a5"].porQue` | Frena a5. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6 b2b4 c5b6 e1g1 e8g8 b1d2 c6e7"].porQue` | El caballo va a g6. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1 g8f6 b1c3 e8g8 d2d3 h7h6 a2a3"].porQue` | Prepara b4. |
| Apertura Italiana (Giuoco Piano) | `notas["e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 e1g1 g8f6 c2c3"].porQue` | Prepara d4. |
| Apertura Italiana (Giuoco Piano) | `trampas["e2e4 e7e5 g1f3 b8c6 f1c4 c6d4 f3e5 d8g5"]` | La trampa de Blackburne contra la Italiana: si el blanco toma el peón con Cxe5?, Dg5 ataca el caballo y g2 a la vez. Contra 3...Cd4, lo correcto es Cxd4. |
| Sistema Rapport-Jobava | `planesBlancas` | Cb5 contra c7, apoyado por el alfil de f4. |
| Sistema Rapport-Jobava | `planesBlancas` | e3, Cf3 o f3, y según el caso enroque largo con h4 y g4. |
| Sistema Rapport-Jobava | `planesNegras` | ...e6 y cubrir c7 a tiempo (...Ca6 o ...Ab4+ con ...Aa5) antes de desarrollarse. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4"].porQue` | El alfil sale antes de e3, como en el Londres, pero con el caballo en c3: ahora Cb5 contra c7 es una amenaza. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c7c5 e2e3"].porQue` | Sostiene d4: si ...cxd4 exd4, el blanco queda con una estructura sólida y la columna e semiabierta. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 e7e6"].porQue` | Sólido, pero hay que vigilar c7: ahora Cb5 viene con amenaza. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 e7e6 c3b5"].porQue` | La idea típica del Jobava: el caballo, apoyado por el alfil de f4, amenaza Cxc7+. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c8f5 e2e3"].porQue` | Desarrollo normal: si ...e6, Cb5 vuelve a ser la idea. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3"].porQue` | Contra el fianchetto, el esquema sigue igual: e3, Cf3 y, a veces, h4 o Dd2 con Ah6 para cambiar el alfil de g7. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 a7a6 e2e3"].porQue` | Con ...a6 el negro le quita b5 al caballo; el blanco sigue con su esquema. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 e7e6 c1f4"].porQue` | El Jobava contra ...e6: Cb5 contra c7 sigue siendo una amenaza. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 e7e6 c1f4 g8f6"].porQue` | Lo más natural: transpone a la línea principal del Jobava con ...e6. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c7c5 e2e3 c5d4"].porQue` | Lo más simple: cambia en d4 y deja al blanco con un peón en d4 que hay que vigilar. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c7c5 e2e3 c5d4 e3d4 c8g4"].porQue` | Clava al caballo que viene a f3 y presiona d4. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c7c5 e2e3 c5d4 e3d4 c8g4"].porQueNo["g7g6"]` | ...g6? Cb5: la amenaza sobre c7 vuelve a aparecer y el negro tiene que cubrirla con ...Ca6. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 e7e6 c3b5 b8a6 e2e3 f8e7"].porQue` | Desarrollo normal. Después, ...c6 echa al caballo de b5. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 c8f5 e2e3 e7e6"].porQue` | El esquema del Londres con colores parejos: ...Ad6 cambiaría el alfil de f4. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3 f8g7"].porQue` | El fianchetto: el negro se enroca y busca ...c5. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3 f8g7 h2h4"].porQue` | Lo más agresivo, típico del Jobava: el peón de h avanza contra el enroque fianchettado. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 e7e6 c3b5 f8b4"].porQue` | Da jaque para ganar tiempo frente a la amenaza Cxc7+. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6"].porQue` | Prepara el fianchetto. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 a7a6"].porQue` | Impide Cb5. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 e7e6 c3b5 b8a6 e2e3 f8e7 g1f3 e8g8 h2h4 c7c6 b5c3 d8b6 a2a3"].porQue` | Prepara b4. |
| Sistema Rapport-Jobava | `notas["b1c3 d7d5 d2d4 g8f6 c1f4 e7e6 c3b5 b8a6 e2e3 f8e7 g1f3 e8g8 h2h4 c7c6 b5c3 d8b6 a2a3"].porQue` | Prepara b4. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3 f8g7 h2h4 c7c6 f1e2 h7h5"].porQue` | Frena h5. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3 f8g7 h2h4 c7c6 f1e2 h7h6"].porQue` | Frena h5. |
| Sistema Rapport-Jobava | `notas["d2d4 d7d5 b1c3 g8f6 c1f4 g7g6 e2e3 f8g7 h2h4 h7h5"].porQue` | Frena h5. |
| Apertura Larsen | `planesBlancas` | Desarrollo flexible: e3, Cf3, c4 o f4 según lo que haga el negro. |
| Apertura Larsen | `notas["b2b3"].porQue` | Prepara el fianchetto del alfil de dama, que desde b2 controla e5 y la diagonal larga. |
| Apertura Larsen | `notas["b2b3 e7e5"].porQue` | Ocupa el centro y tapa la diagonal del alfil que va a b2. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 e2e3"].porQue` | Modesta en apariencia pero valiente: permite ...d5 para después atacar ese centro. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 d7d6"].porQue` | Esquema de India de Rey: el negro renuncia a ...d5. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 e2e3 d7d5 f1b5"].porQue` | La mejor según Stockfish: presiona el caballo que defiende e5. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 e2e3 d7d5 f1b5 f8d6 f2f4"].porQue` | Lo más agudo e intransigente: ataca el centro negro de frente. Los libros no se ponen de acuerdo en si el negro debe contestar con ...De7 o intercalar antes ...Dh4+. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 e2e3 g8f6 f1b5 d7d6"].porQue` | El negro sigue el mismo plan que con 2...d6. Las blancas atacan e5 con Ce2 y después d4 o f4. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 c2c4 g8f6 e2e3 d7d5 c4d5 f6d5"].porQue` | La línea crítica de 3.c4: el negro tiene el centro y las blancas buscan presionarlo con a3, Cf3 y Dc2. |
| Apertura Larsen | `notas["b2b3 g8f6 c1b2 g7g6 c2c4"].porQue` | Contra el esquema de India de Rey, el blanco toma espacio con c4 y lleva la partida a terreno de la Inglesa. |
| Apertura Larsen | `notas["b2b3 d7d5 c1b2 g8f6 e2e3"].porQue` | Si sigue f4, es una Bird; con Cf3, una Réti con b3. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 c2c4 g8f6 e2e3"].porQue` | Prepara el desarrollo del alfil y sostiene d4. |
| Apertura Larsen | `notas["b2b3 g8f6 c1b2 g7g6"].porQue` | Prepara su propio fianchetto para neutralizar el alfil de b2. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 c2c4 g8f6 e2e3 d7d5 c4d5 f6d5 a2a3"].porQue` | Prepara b4 y frena ...Ab4. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 b8c6 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. e3 (−0,2 contra −2,4, para el bando que juega). |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 d7d6 e2e3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Larsen | `notas["b2b3 g8f6 c1b2 g7g6 c2c4 f8g7 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Larsen | `notas["b2b3 e7e5 c1b2 d7d6 e2e3 g8f6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Larsen | `notas["b2b3 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Larsen | `notas["b2b3 c7c5 c1b2 b8c6 e2e3 g8f6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa León | `planesNegras` | Llegar a ...e5, ...Ae7, ...c6 y ...O-O, la estructura Philidor. |
| Defensa León | `planesNegras` | Golpear con ...exd4 y ...Te8 cuando el blanco presiona e5. |
| Defensa León | `rupturas` | ...exd4 o ...d5 del negro. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7"].porQue` | Prepara ...e5 sin ceder el centro. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 e7e5 g1f3 e5d4 d1d4 c7c6"].porQue` | Prepara ...d5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 e7e5 g1f3 e5d4 d1d4 c7c6 f1c4"].porQue` | Según Stockfish es un error: era mejor 7. Ae3 (+0,7 contra −0,1, para el bando que juega). |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g2g4 h7h6"].porQue` | Prepara responder a g5 con ...hxg5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6"].porQue` | Prepara ...b5 o ...d5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4"].porQue` | Impide ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1e2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1e2 f8e7 e1g1 c7c6"].porQue` | Prepara ...b5 o ...Dc7. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 f3g5 e8g8 c4f7"].porQue` | Sacrifica en f7 para seguir con Ce6. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 c7c6"].porQue` | Prepara ...e5 o ...b5 sin comprometerse. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 c1e3"].porQue` | Prepara Dd2 y el enroque largo. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 a7a5"].porQue` | Frena el avance del peón de a. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 b7b6 b2b3 a7a6"].porQue` | Prepara ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1e2 f8e7 e1g1 c7c6 a2a4 e8g8 a4a5"].porQue` | Frena ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 b7b6 c4a2 a7a6"].porQue` | Prepara ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 b7b6 c4a2 a7a6 c1g5 a8b8"].porQue` | Prepara ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1e2 f8e7 e1g1 c7c6 a2a4 e8g8 f1e1 a7a5"].porQue` | Frena a5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 e1g1 e8g8 f1e1 c7c6 a2a4 b7b6 c4a2 a7a6 h2h3 a8b8"].porQue` | Prepara ...b5. |
| Defensa León | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 g1f3 e7e5 f1c4 f8e7 c4f7"].porQue` | Según Stockfish es un error: era mejor 6. O-O (+0,4 contra −2,1, para el bando que juega). |
| Gambito Letón | `planesBlancas` | Cxe5 y Dh5+ aprovechando el rey debilitado. |
| Gambito Letón | `planesNegras` | ...Df6 para sostener f5 y atacar el caballo. |
| Gambito Letón | `rupturas` | ...fxe4 del negro. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5"].porQue` | Lo mejor: toma e5 y amenaza Dh5+. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5"].porQueNo["d2d3"]` | Pasivo: el negro sigue con ...Cc6 y ...d6. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 d2d4 d7d6"].porQueNo["f5e4"]` | Ac4: amenaza Af7+ y el negro queda muy mal. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 e4f5 e5e4 f3e5 g8f6 f1e2"].porQue` | Tomar el peón también es peligroso para el negro: su peón de e4 queda muy expuesto. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 d2d4 d7d6 e5c4 f5e4 b1c3 f6g6 f2f3"].porQue` | La recomendación de Aguilera: abre la columna f y ataca el peón de e4 antes de que el negro termine de desarrollarse. Con ...exf3 Dxf3 el blanco completa el desarrollo con ventaja clara (Stockfish: unos +1,7). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f1c4 f5e4 f3e5 d7d5"].porQue` | La Variante Svedenborg, que Kosten estudia en el cap. 8: el peón corta la diagonal del alfil hacia g8 y lo ataca. Es la preferida de Stockfish; después de 5.Dh5+ g6 6.Cxg6 hay que defender con precisión, pero la posición queda equilibrada. La alternativa más tajante, 4...Dg5 (cap. 7), es más arriesgada. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 b8c6 d1h5"].porQue` | Lo más fuerte: el jaque obliga a ...g6, y entonces el caballo toma en g6. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 b8c6 d1h5 g7g6 e5g6 g8f6"].porQue` | La mejor defensa: ataca la dama antes de recuperar nada. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 d2d4 d7d6 e5c4 f5e4 d1h5"].porQue` | Según Stockfish es un error: era mejor 6. Cc3 (+1,4 contra −0,0, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f1c4 f5e4 f3e5 d8g5 e5f7"].porQue` | Según Stockfish es un error: era mejor 5. d4 (+0,6 contra −0,5, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f1c4 f5e4 f3e5 d8g5 e5f7 g5g2 h1f1 d7d5 f7h8 g8f6"].porQue` | Desarrolla con tiempo y prepara el ataque contra el rey blanco, que quedó en el centro. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 d2d4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+1,5 contra +0,5, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8e7"].porQue` | Según Stockfish es un error: era mejor 3... Df6 (−1,6 contra −2,9, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 e5c4 f5e4 d2d3"].porQue` | Según Stockfish es un error: era mejor 5. Ce3 (+1,4 contra +0,5, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 d2d4 d7d6 e5c4 f5e4 c4e3"].porQue` | El caballo va a e3 para presionar d5 y g4. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 c2c4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+1,5 contra +0,0, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 g2g4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+1,5 contra −2,3, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 b2b4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+1,5 contra −1,1, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,3 contra −1,5, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 b8c6"].porQue` | Según Stockfish es un error: era mejor 3... Df6 (−1,6 contra −3,0, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 b8c6 d1h5 g7g6 e5g6"].porQue` | Toma el peón: si ...hxg6, Dxg6+ con ataque. |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 g8f6 f1c4 f5e4"].porQue` | Según Stockfish es un error: era mejor 4... De7 (−1,9 contra −4,0, para el bando que juega). |
| Gambito Letón | `notas["e2e4 e7e5 g1f3 f7f5 f3e5 d8f6 d2d4 d7d6 e5c4 f5e4 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Londres contra la India de Rey | `planesBlancas` | Mantener el alfil de f4 con h3 y responder a ...e5 con dxe5 o Ah2. |
| Londres contra la India de Rey | `planesBlancas` | Desarrollo tranquilo: e3, Ae2, O-O, c3 y Cbd2. |
| Londres contra la India de Rey | `planesNegras` | Preparar ...e5 con ...d6 y ...Cbd7. |
| Londres contra la India de Rey | `planesNegras` | Atacar d4 con ...c5 y presionar b2 con ...Db6. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4"].porQue` | Desarrolla el alfil antes de jugar e3. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 d7d6"].porQue` | Prepara ...e5. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 d7d6 f1e2 e8g8 e1g1 b8d7"].porQue` | Prepara ...e5. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 d7d6 f1d3 b8d7"].porQue` | Prepara ...e5. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 e8g8 f1e2 c7c5 c2c3 b7b6"].porQue` | Prepara ...Ab7. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 e8g8 f1e2 c7c5 c2c3 d7d6 h2h3 b7b6"].porQue` | Prepara ...Ab7. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 e8g8 f1e2 d7d6 h2h3 b8d7 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Londres contra la India de Rey | `notas["d2d4 g8f6 g1f3 g7g6 c1f4 f8g7 e2e3 e8g8 f1e2 d7d6 h2h3 b8d7 e1g1 b7b6 a2a4 a7a5"].porQue` | Frena a5. |
| Sistema Londres | `planesBlancas` | Ataque en el flanco de rey con Dh5, Tf3 o g4 en algunas líneas. |
| Sistema Londres | `planesBlancas` | Si el negro juega ...Db6, defender b2 sin perder estructura (Db3, Dc2 o b3). |
| Sistema Londres | `planesNegras` | ...c5 enseguida para atacar d4 antes de que c3 llegue cómodo, y ...Cc6 con ...Db6 contra b2. |
| Sistema Londres | `planesNegras` | Cambiar el alfil de f4 con ...Ad6 o ...Ch5. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4"].porQue` | Saca el alfil antes de e3 para que no quede encerrado: es la idea básica del Londres. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 g8f6 e2e3 c7c5"].porQue` | La respuesta más incómoda: ataca d4 y prepara ...Cc6 y ...Db6 contra b2. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 g8f6 e2e3 c7c5 c2c3 b8c6"].porQue` | Presiona d4 y prepara ...Db6. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 c7c5 e2e3 b8c6"].porQue` | Presiona d4 y prepara ...Db6 con el caballo ya en juego. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 c7c5 e2e3 b8c6"].porQueNo["d8b6"]` | Antes de ...Cc6, la dama en b6 da a las blancas Cc3 y Cb5 con amenazas sobre c7. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 c7c5 e2e3 b8c6 c2c3 d8b6 d1b3"].porQue` | Defiende b2 ofreciendo el cambio de damas (también sirven Dc2 o b3). |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 c7c5 e2e3 b8c6 c2c3 d8b6 d1b3"].porQueNo["f1e2"]` | Desarrollar como si nada: Dxb2 y el negro gana un peón. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4"].porQue` | El Londres también se juega contra 1...Cf6: misma idea, el alfil afuera antes de e3. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 d7d5"].porQue` | Ocupa el centro y lleva al esquema principal. |
| Sistema Londres | `notas["d2d4 d7d5 g1f3 g8f6 c1f4"].porQue` | Sistema Londres por la vía de Cf3: el esquema (Af4, e3, c3, Ad3, Cbd2 y Ce5) sirve contra casi cualquier defensa. |
| Sistema Londres | `notas["d2d4 d7d5 g1f3 g8f6 c1f4 c8f5"].porQue` | Contra el Londres, sacar el alfil antes de ...e6 le da al negro un juego cómodo. |
| Sistema Londres | `notas["d2d4 g8f6 g1f3 e7e6 c1f4 c7c5 c2c3 c5d4 c3d4 b7b5"].porQue` | La idea que Cox toma de la ECO y de Andrew Martin: el negro gana espacio en el flanco de dama y se asegura buenas casillas para todas sus piezas (...Ab7, ...Ae7, ...0-0). |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 g7g6"].porQue` | Esquema de India de Rey contra el Londres: el alfil irá a g7, a la misma diagonal que b2, y el negro prepara ...d6 con ...e5 o ...c5. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 g7g6 g1f3"].porQue` | El orden más flexible según Stockfish: el caballo controla e5 antes de que el negro pueda jugar ...d6 y ...e5. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 g7g6 g1f3 f8g7 e2e3 e8g8 f1e2 d7d6 h2h3"].porQue` | La jugada clave contra este esquema: le da al alfil la casilla h2, a salvo de ...Ch5, y evita ...Ag4. Cuando el negro rompa con ...e5, el alfil sigue vivo. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 c7c5"].porQue` | La respuesta más directa: ataca d4 y amenaza ...Db6 contra b2, que quedó sin el alfil. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 c7c5 d4d5"].porQue` | Lo más fuerte según Stockfish: gana espacio y lleva a una estructura de Benoni donde el alfil de f4 ya está activo. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 c7c5 d4d5 d7d6"].porQue` | Lo más sólido: el negro arma la estructura de Benoni con ...g6, ...Ag7 y la ruptura ...e6 o ...b5. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 e7e6 e2e3"].porQue` | El esquema de siempre: e3, Cf3, c3, Cbd2 y Ad3. Contra ...e6, el alfil ya salió de c1 antes de que e3 lo encierre. |
| Sistema Londres | `notas["d2d4 g8f6 c1f4 e7e6 e2e3 c7c5 c2c3"].porQue` | Sostiene d4 con un peón. Si llega ...Db6, la dama blanca puede cubrir b2 desde b3 o c2. |
| Sistema Londres | `notas["d2d4 g8f6 g1f3 g7g6 b1c3 d7d5 c1f4"].porQue` | Ataque Barry: con el caballo en c3 (en el Londres ahí va un peón), el blanco busca un juego agresivo con e3, Ce5, Dd2 y a veces Ah6 y h4. |
| Sistema Londres | `notas["d2d4 g8f6 g1f3 g7g6 b1c3 d7d5 c1f4 f8g7 e2e3 e8g8"].porQue` | Enroca primero: el negro espera a ver el plan del blanco antes de decidir entre ...c5 y ...Ch5. |
| Sistema Londres | `notas["d2d4 d7d5 d1d3"].porQue` | Ataque Amazonas: la dama sale temprano para preparar e4. |
| Sistema Londres | `notas["d2d4 d7d5 d1d3 c7c5"].porQue` | Lo más directo: ataca d4, y la dama de d3 va a ser blanco de las piezas menores negras. |
| Sistema Londres | `notas["d2d4 d7d5 c1g5"].porQue` | Desarrolla atacando e7 y preparando Axf6 o e3. |
| Sistema Londres | `notas["d2d4 d7d5 c1f4 g8f6 e2e3 c7c5 c2c3 b8c6 b1d2 c8f5 g1f3 d8b6 f3h4 f5d7 d1b3 c5c4 b3c2 f6h5 f4g3 h5g3 h2g3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Mexicana (Tango) | `planesBlancas` | Mantener el centro con Cf3 y Cc3 y aprovechar que el caballo de c6 tapa el peón de c negro. |
| Defensa Mexicana (Tango) | `planesNegras` | ...e6 y ...Ab4, pasando a una Nimzoindia o a un esquema propio. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6"].porQue` | Desarrollo provocador: presiona d4 y prepara ...e5. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3"].porQue` | Impide ...e5. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6"].porQue` | Lo más sólido: prepara ...Ab4 y ...d5 o ...d6. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 b1c3 e7e5"].porQue` | El "centro de casillas negras" de Palliser: ...e5 pelea por d4 y abre el alfil de f8, que va a c5 o b4 fuera de la cadena de peones. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 d4d5 c6e5"].porQue` | Contra "la embestida" 3.d5, el caballo va al centro y ataca c4: el negro sigue con ...e6 para minar d5. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 b1c3 f8b4"].porQue` | Una Nimzoindia con el caballo ya en c6: clava el caballo de c3 y prepara ...d5 o ...d6. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 a2a3"].porQue` | La preferida de Stockfish: evita la clavada con ...Ab4 antes de desarrollar el caballo de b1. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 a2a3 d7d5"].porQue` | El negro ocupa el centro: una estructura de Gambito de Dama en la que el caballo de c6 ya no puede apoyar la ruptura ...c5, pero sí ...e5 más adelante. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 b1c3 e7e5 g1f3 e5e4"].porQue` | Contra 4.Cf3 (bastante menos fuerte que 4.d5), lo mejor según Stockfish: gana espacio echando al caballo. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 b1c3 e7e5 g1f3"].porQue` | Según Stockfish es un error: era mejor 4. d5 (+0,9 contra −0,1, para el bando que juega). |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 d4d5 c6e5 f2f4"].porQue` | Según Stockfish es un error: era mejor 4. e4 (+0,5 contra −0,6, para el bando que juega). |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 b1c3 f8b4 d1c2 d7d6 a2a3 b4c3 c2c3 a7a5"].porQue` | Frena b4. |
| Defensa Mexicana (Tango) | `notas["d2d4 g8f6 c2c4 b8c6 g1f3 e7e6 b1c3 f8b4 d1c2 d7d6 a2a3 b4c3 c2c3 a7a5 b2b3"].porQue` | Prepara Ab2. |
| Defensa Mikenas (1.d4 Cc6) | `notas["d2d4 b8c6"].porQue` | Prepara ...e5 con el caballo. |
| Defensa Mikenas (1.d4 Cc6) | `notas["d2d4 b8c6 c2c4 e7e5 d4d5 c6e7 e2e4 e7g6"].porQue` | Prepara ...Ac5 o ...f5. |
| Defensa Mikenas (1.d4 Cc6) | `notas["d2d4 b8c6 g1f3"].porQue` | Desarrolla e impide ...e5. |
| Defensa Mikenas (1.d4 Cc6) | `notas["d2d4 b8c6 g1f3 d7d6"].porQue` | Prepara ...e5. |
| Defensa Mikenas (1.d4 Cc6) | `notas["d2d4 b8c6 g1f3 d7d6 c2c4 e7e5 b1c3 e5d4 f3d4 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Moderna | `planesBlancas` | Armar el centro con e4, d4 y Cc3 y desarrollarse con Ae3, Dd2 y a veces el enroque largo. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6"].porQue` | Sostiene e5 y prepara ...Cf6 (transponiendo a la Pirc) o ...c6 y ...b5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6"].porQue` | Parece lenta pero es venenosa: prepara ...d5 o ...b5 según lo que haga el blanco. Soltis la convierte en un sistema: en vez de pelear por las casillas oscuras con ...d6 y ...e5, como en la India de Rey, el negro ataca e4 con ...d5, al estilo de la Caro-Kann. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f2f4 d7d5"].porQue` | Contra el avance de f4, ...d5: si e5, el negro frena los peones del flanco de rey con ...h5 y después juega ...c5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c3"].porQue` | Un esquema sólido que la Pirc no permite: c3, Cf3, Ad3 y enroque. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 g1f3 d7d5"].porQue` | La idea del sistema: el peón de d ataca e4 y, junto con el alfil de g7, también presiona d4. Las blancas tienen que decidir cómo sostener el centro. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f1c4 d7d6"].porQue` | Contra el alfil en c4, Soltis prefiere ...d6: el negro sigue con ...e6 y ...e5 sin dejar f7 desprotegido. Para Stockfish, el ...d5 directo también es bueno. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f1c4 d7d6 d1f3 e7e6"].porQue` | Obligada: la dama y el alfil apuntan a f7. Después el negro sigue con ...De7, ...Cd7 y ...e5, y la dama blanca en f3 termina mal ubicada. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f1c4 d7d6 d1f3 e7e6"].porQueNo["a7a6"]` | Ignorar la amenaza pierde enseguida: Dxf7+ y la dama llega a g7. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f2f4 d7d5 e4e5 h7h5"].porQue` | La jugada del sistema Gurgenidze, que sorprende a cualquiera: con el centro cerrado hay tiempo para ella, y frena el avance g4 con el que las blancas quieren ganar espacio en el flanco de rey. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f2f4 d7d5 e4e5 h7h5 g1f3 c8g4 h2h3 g4f3 d1f3 e7e6"].porQue` | La mejor según Stockfish. El negro cambió su alfil y, como explica Soltis, tiene que impedir f5, que liberaría a los alfiles blancos: ...e6 lo frena y completa la cadena de peones en casillas blancas. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5"].porQue` | El "Sniper" de Storey: el alfil de g7 y el peón de c5 atacan d4 a la vez, con aire de Siciliana Dragón. Stockfish la considera tan buena como ...d6. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 d4c5 g7c3"].porQue` | El "sacrificio del francotirador": el negro entrega su alfil para doblar los peones blancos y después recupera el peón de c5 con ...Da5. Es la mejor jugada según Stockfish. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 g1f3 c7c5 d4c5 d8a5"].porQue` | Jaque que recupera el peón de c5: el negro no tiene por qué apurarse, pero esta es la forma más directa y la mejor según Stockfish. |
| Defensa Moderna | `notas["e2e4 g7g6 f2f4 d7d5"].porQue` | El golpe central que recomienda Davies contra 2.f4: si e5, el negro ataca la cadena con ...c5; si exd5, ...Cf6 recupera el peón o deja al negro con buen juego por la debilidad que dejó f4. |
| Defensa Moderna | `notas["e2e4 g7g6 f2f4 d7d5"].porQueNo["f8g7"]` | 2...Ag7 deja al blanco armar d4 y e5 con un centro grande; Stockfish prefiere golpear enseguida con ...d5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f2f4 c7c5"].porQue` | Contra el Ataque de los Tres Peones (sin Cc3, el blanco puede sostener d4 con c3), Davies prefiere atacar d4 enseguida, con ...c5 o ...d6, en lugar de bloquear las casillas blancas con ...d5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 f2f4 e7e6"].porQue` | El esquema de Davies y Krasenkow contra el Ataque Austríaco: ...Ce7, ...Cd7, ...b6, ...Ab7 y recién después ...Cf6. Frena el avance f5 (que encierra al alfil de c1 detrás de f4) y presiona e4, preparando el contraataque con ...c5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 c1e3 a7a6"].porQue` | La Moderna con ...a6 de Persson, con la misma idea que 5...a6 en la Najdorf: ...b5, ...Ab7 contra e4, ...Cd7 y ...c5. El caballo de g8 sale recién cuando el peón de d4 se movió, así e5 no lo echa. Es una estructura desequilibrada, con pocas posibilidades de que el blanco simplifique hacia tablas. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 c1e3 a7a6 d1d2 b7b5"].porQue` | Gana espacio en el flanco de dama y prepara ...Ab7, que se suma a la presión sobre e4. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 a7a6"].porQue` | El mismo esquema contra el sistema clásico (Cf3, Ae2 y 0-0): ...b5, ...Ab7, ...Cd7 y ...c5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 a7a6 f1e2 b7b5 e1g1 c8b7"].porQue` | El alfil va a b7 antes de ...c5: Persson insiste en que el orden de jugadas es lo más importante en esta línea. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 a7a6 f1e2 b7b5 e1g1 c8b7"].porQueNo["c7c5"]` | 6...c5? 7.dxc5! y el peón de d6 cae: si ...dxc5, el cambio de damas deja al negro sin el enroque y con el peón de c5 débil. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 f2f4 a7a6"].porQue` | También contra el Ataque Austríaco Persson juega ...a6, con ...b5, ...Ab7 y ...Cd7: el negro deja que el blanco ocupe el centro y lo ataca desde los flancos. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f1c4"].porQue` | El Ataque del Alfil: apunta a f7 y prepara Df3 o Cf3. El negro responde con calma. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f1c4 d7d6"].porQue` | Lo más sólido: tapa la diagonal del alfil de g7 sobre d4 pero prepara ...Cf6 y ...e6 para neutralizar al alfil de c4. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 d4d5"].porQue` | Lo más fuerte según Stockfish: gana espacio y bloquea la diagonal del alfil de g7. El negro termina en una Benoni con un tiempo de menos. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 g1f3"].porQue` | Desarrolla, pero le deja al negro elegir entre ...cxd4, que lleva a un Dragón Acelerado, y el Pterodáctilo ...Da5. Stockfish prefiere 4.d5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 g1f3 c5d4"].porQueNo["d8a5"]` | El Pterodáctilo, 4...Da5?!: el blanco juega 5.d5 y gana espacio con ventaja clara (para Stockfish, más de un peón). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 g1f3 d8a5"].porQue` | Según Stockfish es un error: era mejor 4... cxd4 (−0,3 contra −1,2, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c4 c7c5"].porQue` | Golpea en d4 antes de que el blanco complete el desarrollo. |
| Defensa Moderna | `notas["e2e4 g7g6 g1f3"].porQue` | Desarrolla y se guarda la elección entre d4 y c3. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c5 d4d5 g7c3"].porQue` | Según Stockfish es un error: era mejor 4... d6 (−0,7 contra −1,7, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c4 c7c5 g1f3 d7d6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c4 c7c5 b1c3"].porQue` | Según Stockfish es un error: era mejor 4. d5 (+0,7 contra −0,9, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c4 c7c5 b1c3 d7d6"].porQue` | Según Stockfish es un error: era mejor 4... Axd4 (+0,9 contra −0,4, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f2f4 c7c5 g1f3 d8a5"].porQue` | Según Stockfish es un error: era mejor 4... cxd4 (+0,1 contra −0,7, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f2f4 c7c5 c2c3 d8a5"].porQue` | Presiona el flanco de dama y prepara ...cxd4. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c2c4 c7c5 b1c3 d7d6 d4c5 d8a5"].porQue` | Según Stockfish es un error: era mejor 5... Axc3+ (−0,4 contra −2,3, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 g2g3"].porQue` | Prepara el fianchetto para defender e4 y vigilar la gran diagonal. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f2f4"].porQue` | Gana espacio y prepara e5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 g8h6"].porQue` | Según Stockfish es un error: era mejor 2... d6 (−0,7 contra −1,5, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 a7a6 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 g8f6 e4e5 f6h5"].porQue` | El caballo va a h5, una casilla poco activa. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 c7c6"].porQue` | Prepara ...b5 o ...Db6. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 d7d6"].porQue` | Prepara ...Cf6 y ...Ag7. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 d7d6 g1f3 c7c6 c1g5 d8b6 d1d2"].porQue` | Defiende b2 y prepara el enroque largo. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 b7b6"].porQue` | Prepara el fianchetto doble. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 c1d2"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,7 contra −0,4, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 f1d3"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,7 contra −0,7, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f8g7 b1c3 c7c6 f1c4 d7d6 d1e2"].porQue` | Prepara e5 con apoyo de la dama. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 d7d6 b1c3 c7c6"].porQue` | Prepara ...b5 o ...d5. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 g8h6 b1c3 f7f5 c1h6 f8h6 e4f5 e8g8"].porQue` | Según Stockfish es un error: era mejor 5... d5 (−1,6 contra −2,9, para el bando que juega). |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 d7d6 b1c3 c7c6 c1e3 f8g7 d1d2"].porQue` | Prepara Ah6 y el enroque largo. |
| Defensa Moderna | `notas["e2e4 g7g6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... d6 (−0,7 contra −2,6, para el bando que juega). |
| Defensa Nimzoindia | `planesBlancas` | Evitar los peones doblados recapturando con la dama (4.Dc2) o desarrollar con calma (4.e3) y aceptar el cambio en condiciones favorables. |
| Defensa Nimzoindia | `planesNegras` | Controlar e4 (con el alfil en b4, el caballo de f6 y a veces ...Ab7) para que las blancas no armen el centro. |
| Defensa Nimzoindia | `planesNegras` | Tras el cambio en c3, cerrar el juego para restarles fuerza a los alfiles blancos (...d6, ...e5, ...c5) y atacar el peón de c4 con ...b6, ...Aa6 y ...Cc6-a5. |
| Defensa Nimzoindia | `rupturas` | e4 de las blancas, preparado con f3 o Dc2, para liberar sus alfiles. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6"].porQue` | Prepara ...Ab4 o ...d5 y deja abierta la diagonal del alfil de f8. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3"].porQue` | Prepara e4, que echaría al caballo de f6 y daría a las blancas el centro completo. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4"].porQue` | Clava el caballo que prepara e4: mientras la clavada exista, e4 no se puede jugar sin perder un peón. Es la idea central de la Nimzoindia. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4"].porQueNo["d7d6"]` | Tampoco frena e4: las blancas toman el centro y el negro queda sin espacio. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2"].porQue` | Variante Clásica: si el negro cambia en c3, la dama retoma y no hay peones doblados. Además controla e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 e8g8"].porQue` | Enroca y espera: el negro decide después entre ...d5, ...c5 o ...b6 según cómo sigan las blancas. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3"].porQue` | Variante Rubinstein: desarrollo sólido, preparando Ad3 y Ce2 (para retomar en c3 con el caballo). |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8"].porQue` | El negro enroca y se reserva ...d5, ...c5 o ...b6. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3"].porQue` | Variante Sämisch: obliga al negro a decidir ya. Las blancas aceptan los peones doblados a cambio de la pareja de alfiles y de un centro más fuerte. Stockfish prefiere 4.e3: la Sämisch gasta un tiempo con a3, pero es una línea seria y muy jugada. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 b7b6"].porQue` | Prepara ...Aa6 para atacar el peón débil de c4 y ...Ab7 para controlar e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 c4d5 d8d5"].porQue` | Retoma con la dama: con ...Df5 o ...c5 el negro se desarrolla con comodidad. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 b8c6"].porQue` | Prepara ...d6 y ...e5, un plan simple contra la Clásica. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 e8g8 a2a3 b4c3 c2c3 b7b6"].porQue` | Fianchetto de dama: ...Ab7 y ...Ce4 pelean por e4 y compensan la pareja de alfiles. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 c7c5"].porQue` | Ataca el centro y prepara ...Cc6; si f3, ...d5 frena e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 b7b6 f2f3 c8a6 e2e4 b8c6"].porQue` | Suma presión sobre c4: ...Ca5 viene después. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 g1f3 b4c3 b2c3 d7d6"].porQue` | Variante Hübner: cambia en c3 sin esperar a3, prepara ...e5 y juega contra los peones doblados. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 c1g5 h7h6 g5h4 c7c5"].porQue` | La reacción necesaria: ataca d4 antes de que las blancas aprovechen la clavada. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3"].porQue` | Prepara e4 sin más: un primo de la Sämisch. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6 g1e2 f6e4"].porQue` | Mantiene la presión sobre c3: la amenaza de doblar peones sigue en pie. Con el caballo blanco en e2 y no en f3, ...Dh4 pasa a ser una idea. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6 g1e2 f6e4 d1c2"].porQueNo["a2a3"]` | ...Dh4!: tras g3 Df6, f4 es forzado y la estructura blanca queda desarmada. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6 g1e2 c8a6"].porQue` | Busca cambiar los alfiles de casillas blancas y dejar al blanco con el alfil de casillas negras, que choca con sus propios peones. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8"].porQue` | Contra 5.Ce2 (la idea de Reshevsky: a3 y retomar en c3 con el caballo), el negro prepara ...Af8 para no entregar el alfil: la torre en e8 apoya ...e5 o ...d5 más adelante. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8 a2a3 b4f8"].porQue` | El alfil vuelve a f8 en vez de cambiarse: si cambiara en c3, las blancas retomarían con el caballo, sin peones doblados, y se quedarían con la pareja de alfiles. El esquema ...Te8 y ...Af8 se adapta a casi cualquier estructura de peones. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 c7c5"].porQue` | Contra 4.f3, ataca d4 de inmediato. Tras 5.d5 O-O 6.e4 d6 se llega a una estructura Benoni cómoda, con poca teoría. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3 c7c5 g2g3 b8c6 f1g2 f6e4 c1d2"].porQue` | Lo más sólido contra la presión sobre c3. Con 7.Dd3, en cambio, el negro cambia en d4 y queda con mejor estructura de peones sin entregar la pareja de alfiles. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3"].porQue` | Variante Spielmann: la dama ataca al alfil de b4 y evita el doblaje de peones, pero sale temprano y queda expuesta a ganancias de tiempo. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b4c5"].porQue` | La recaptura que prefiere Karpov, una de varias que igualan (también ...Cc6). El alfil apunta a f2. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b4c5 g1f3"].porQueNo["c1g5"]` | ...Axf2+! 7.Rxf2 Cg4+ y ...Dxg5: el negro recupera la pieza con un peón de más. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b4c5 g1f3 b7b6 c1g5 c8b7 a1d1"].porQue` | La única forma de crear problemas, según Khalifman: presión en la columna d. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b4c5 g1f3 b7b6 c1g5 c8b7 a1d1 e8g8 e2e3"].porQueNo["e2e4"]` | ...h6!: si 10.Ah4 g5 11.Ag3, ...Cxe4 gana un peón; si 10.Axf6, el blanco entrega su alfil activo. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g2g3"].porQue` | Variante Romanishin: el blanco se desarrolla como en la Catalana. Si el negro toma en c3, la pareja de alfiles y la diagonal larga compensan los peones doblados. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g2g3 e8g8"].porQue` | Lo más simple: enroca y espera a ver el plan del blanco antes de elegir entre ...d5 y ...c5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5"].porQue` | Ocupa el centro y frena el avance e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3 d7d5 c1d2 b8c6"].porQue` | Desarrolla y prepara ...dxc4 y ...e5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 c4d5 d8d5 g1f3 d5f5 c2d1"].porQue` | Evita el cambio de damas. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 b7b6 f2f3"].porQue` | Prepara e4 para armar un centro grande en la variante Sämisch. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b8c6"].porQue` | Desarrolla y prepara ...dxc4 y ...e5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 c7c5 g1f3 b7b6"].porQue` | Prepara ...Ab7 para controlar e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 c7c5 g1f3 b7b6 e1g1 c8b7 c3a4"].porQue` | Evita el cambio en c3 y presiona c5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 g1f3 b4c3 b2c3 d7d6 e1g1"].porQue` | Enroca: el blanco va a buscar abrir el juego para sus alfiles. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 f6e4 d1c2 f7f5 g1f3 b7b6"].porQue` | Prepara ...Ab7 para reforzar e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 c7c5 g1f3 b7b6 e1g1 c8b7 c3a4 c5d4 a2a3"].porQue` | Pregunta al alfil antes de retomar. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8c6 a2a3 d5c4"].porQue` | Toma en c4 antes de cambiar en c3. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 a2a3 b4c3 b2c3 d5c4 d3c4 c7c5 g1f3 b8c6 e1g1 d8c7"].porQue` | Prepara ...e5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 d7d5 a2a3 b4c3 b2c3 c7c5 c4d5 f6d5 d4c5 f7f5"].porQue` | Frena el avance e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8c6 a2a3 b4c3 b2c3 d5c4 d3c4 d8c7 d1c2"].porQue` | Prepara e4. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1d3"].porQue` | Defiende c3 y prepara a3 sin doblar peones. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e4"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (+0,2 contra −0,8, para el bando que juega). |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b8c6 e1g1 d5c4"].porQue` | Toma en c4 para ganar un tiempo con ...Ad6 o ...e5. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 b8d7 d1e2 c5d4 e3d4 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 b8d7 d1e2 a7a6"].porQue` | Prepara ...b5. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 c5d4 e3d4 b7b6 c1g5 c8b7 d1e2 b8d7 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b7b6"].porQue` | Prepara ...Aa6. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 b8d7 d1e2 c5d4 e3d4 d7b6"].porQue` | El caballo va a b6. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 b8d7 d1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b7b6 e1g1 c8b7 c4d5 e6d5 a2a3 b4d6 b2b4 a7a6"].porQue` | Frena b5. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b7b6 e1g1 c8b7 c4d5 e6d5 a2a3 b4d6 b2b4 a7a6 d1b3 d8e7 a1b1"].porQue` | La torre va a la columna b. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b8c6 e1g1 d5c4 d3c4 a7a6"].porQue` | Prepara ...b5. |
| Defensa Nimzoindia | `notas["d2d4 e7e6 c2c4 g8f6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 a2a3 b4c3 b2c3 e8g8 g1e2 b7b6 e3e4 f6e8 e1g1 c8a6 f2f4 f7f5"].porQue` | Frena f5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8 a2a3 b4f8 d4d5 a7a5 e2g3 b8a6"].porQue` | El caballo va a c5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8 a2a3 b4f8 d4d5 a7a5 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8 a2a3 b4f8 d4d5 a7a5 g2g3 b8a6"].porQue` | El caballo va a c5. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 f8e8 a2a3 b4f8 e2g3 d7d5 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 a2a3 b4c3 b2c3 c7c5 f1d3 b8c6 g1e2 b7b6 e3e4 f6e8 e1g1 c8a6 f2f4 f7f5"].porQue` | Frena el avance del peón de f. |
| Defensa Nimzoindia | `notas["d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3 d7d5 a2a3 b4c3 b2c3 c7c5 f1d3 d5c4 d3c4 d8c7 c4e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Nimzowitsch | `planesNegras` | Presionar d4 con ...d5, ...Af5 o ...Ag4 y ...e6. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 e7e5"].porQue` | La alternativa: discute el centro con el peón de e. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 e4e5"].porQueNo["f2f3"]` | ...e6 y ...Dh4+: el rey blanco queda debilitado. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 d7d6"].porQue` | Fiel al espíritu de 1...Cc6: contra d4, ...Cf6, Cc3 y ...Ag4. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 e7e5 d4d5 c6e7"].porQueNo["c6b4"]` | En b4 el caballo queda sin futuro: las blancas siguen con Cc3 y f4, y lo echan con a3 o c3 cuando quieran. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 d7d6 d2d4 g8f6 b1c3 c8g4 c1e3"].porQue` | Para Stockfish, la más precisa: refuerza d4 y deja abierta la opción del avance d5, que con el caballo en c6 es todavía más atractivo que en posiciones parecidas. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 e4e5 c8f5"].porQue` | El alfil sale antes de cerrar la cadena con ...e6, como en la Caro-Kann del Avance. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 b1c3 d5e4 d4d5 c6b8"].porQue` | Lo más sólido: el caballo vuelve y el negro se queda con el peón de e4, que las blancas recuperarán más tarde. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 b1c3 d5e4 d4d5 c6e5 c1f4"].porQue` | Desarrolla atacando el caballo: tras ...Cg6, el alfil vuelve y las blancas recuperan el peón de e4 con ventaja de espacio. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 g8f6 e4e5 f6g4"].porQue` | El caballo va a g4 y presiona e5. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 b1c3 e7e6"].porQue` | Prepara ...d5. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 e7e6"].porQue` | Prepara ...d5 con estructura francesa. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... e5 (−0,3 contra −1,3, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d6"].porQue` | Prepara ...e5 o ...Cf6. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 c1e3"].porQue` | Según Stockfish es un error: era mejor 3. e5 (+0,5 contra −0,4, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 a7a6"].porQue` | Prepara ...b5 o ...e5 sin Ab5. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 f7f6"].porQue` | Según Stockfish es un error: era mejor 2... d5 (−0,6 contra −1,8, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d6 b1c3 g8f6 g1f3 c8g4 c1e3 e7e6 h2h3 g4h5"].porQue` | Según Stockfish es un error: era mejor 6... Axf3 (−0,8 contra −2,0, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 e7e5 d4e5 f7f6"].porQue` | Según Stockfish es un error: era mejor 3... Cxe5 (−0,5 contra −1,7, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d6 b1c3 g8f6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d6 b1c3 g8f6 g1f3 g7g6 h2h3 f8g7 c1e3 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 d7d5 b1c3 g7g6"].porQue` | Según Stockfish es un error: era mejor 3... dxe4 (−0,3 contra −2,0, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 d2d4 e7e5 d4e5 d8h4"].porQue` | Según Stockfish es un error: era mejor 3... Cxe5 (−0,5 contra −1,7, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 g1f3 d7d6 d2d4 g8f6 b1c3 c8g4 c1e3 e7e6 f1e2 f8e7 e1g1"].porQue` | Según Stockfish es un error: era mejor 7. d5 (+1,3 contra +0,4, para el bando que juega). |
| Defensa Nimzowitsch | `notas["e2e4 b8c6 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,6 contra −0,4, para el bando que juega). |
| Defensa Owen | `planesBlancas` | Centro con d4 y e4, defendido por Ad3, Cc3 o Cd2. |
| Defensa Owen | `planesNegras` | Presión sobre e4 con ...Ab7, ...e6 y ...Cf6 o ...Ab4. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 e7e6"].porQue` | Desarrollo sólido: prepara ...c5 o ...Cf6. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g8f6"].porQue` | La especialidad de Blatny que menciona Bauer como alternativa a 3...e6: ataca e4 enseguida. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g8f6 d1e2"].porQue` | La respuesta principal: defiende e4 sin cambiar la estructura. Según Bauer, cualquier otra cuarta jugada obliga al blanco a alguna concesión. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g8f6 d1e2"].porQueNo["e4e5"]` | 4.e5? Axg2: el alfil de b7 toma el peón de g2 y ataca la torre de h1; después de exf6 Axh1 el negro queda con ventaja. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 g1f3 f8b4 f1d3 g8f6"].porQue` | La otra línea principal según Bauer: el negro clava el caballo de c3 y presiona e4. Bauer reconoce que es delicada para el negro y que no asegura la igualdad; Stockfish le da al blanco algo más de medio peón. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 e7e6 g1f3 c7c5 c2c3 g8f6 d1e2"].porQueNo["c1g5"]` | ...h6 y ...cxd4: la clavada no defiende e4 y las blancas pierden el centro. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6"].porQue` | Lo más flexible: prepara ...Ab4 para clavar el caballo que defiende e4. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g8f6 d1e2 e7e6 g1f3"].porQue` | Desarrollo natural: el negro sigue con ...c5 o ...Ae7 y las blancas enrocan con un buen centro. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g7g6 f2f4 f7f5"].porQue` | La respuesta de De Santis al Ataque Austriaco: frena f5 y ataca e4; el blanco no puede tomar en f5 por la diagonal abierta hacia g2. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 f1d3 g7g6 f2f4 f7f5 b1d2"].porQue` | Lo mejor para Stockfish: sostiene e4 con una pieza y mantiene la tensión. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 f2f4"].porQue` | Según Stockfish es un error: era mejor 4. Ad3 (+0,8 contra 0,0, para el bando que juega). |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 g1f3 g7g6"].porQue` | Prepara el fianchetto: es la estructura del Hipopótamo. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 b1c3 e7e6 a2a3 d7d6 f1d3 b8d7 f2f4"].porQue` | Gana espacio y prepara Cf3. |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 g1f3"].porQue` | Según Stockfish es un error: era mejor 3. Ad3 (+0,9 contra −0,6, para el bando que juega). |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8b7 c1g5"].porQue` | Según Stockfish es un error: era mejor 3. Ad3 (+0,9 contra −0,1, para el bando que juega). |
| Defensa Owen | `notas["e2e4 b7b6 d2d4 c8a6"].porQue` | Según Stockfish es un error: era mejor 2... e6 (−0,9 contra −1,8, para el bando que juega). |
| Defensa Owen | `trampas["e2e4 b7b6 d2d4 c8b7 f1d3 f7f5 e4f5 b7g2 d1h5 g7g6 f5g6 g2f1 g6h7"]` | 3...f5? 4.exf5 Axg2 5.Dh5+ g6 6.fxg6: la amenaza de jaque descubierto es demoledora. Por ejemplo, 6...Af1? 7.gxh7 es mate. |
| Peón dama con 2.Cf3 | `planesBlancas` | Contra 2...Cf6: el Sistema Colle (e3, Ad3, Cbd2, 0-0 y el avance e4 en el momento justo), o c4 y un Gambito de Dama. |
| Peón dama con 2.Cf3 | `planesBlancas` | Contra 2...Ag4 o 2...Af5: 3.c4 y Db3, apuntando a b7. |
| Peón dama con 2.Cf3 | `planesNegras` | ...Cf6 y ...e6 o ...c5, con un desarrollo sólido. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3"].porQue` | Desarrolla, impide ...e5 y no se compromete todavía entre c4 y e3. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 c2c4"].porQue` | El alfil de c8 salió antes de ...e6 y b7 quedó sin defensa: 3.c4 abre la diagonal de la dama hacia b7. Si 3...Axf3, el negro entrega sin necesidad su alfil por un caballo (Koltanowski). |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 c2c4 e7e6 d1b3 b8c6"].porQue` | Defiende indirectamente: si 5.Dxb7, el caballo salta a b4 con la amenaza Cc2+. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 c2c4 e7e6 d1b3 b8c6"].porQueNo["b7b6"]` | 4...b6? 5.Ce5!: el caballo ataca el alfil de g4 y la dama amenaza entrar con jaque por a4; el negro queda claramente peor (Koltanowski). |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 c2c4"].porQue` | Contra 2...c5 también conviene c4: si 3...e6, se llega a una Tarrasch en la que el blanco todavía no jugó Cc3, y el negro puede quedarse con el peón aislado de d5. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 b8c6 c1f4"].porQue` | 2...Cc6 tapa el peón c y ...c5 ya no es posible. Koltanowski desarrolla con Af4, e3 y Ad3 y prepara e4; Stockfish prefiere apenas 3.c4. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 f3e5"].porQue` | La respuesta más incisiva al «Ataque Chigorin»: el caballo ataca el alfil y el blanco puede seguir con c4 o con h3 y g4. Las jugadas tranquilas (e3, Cbd2) le dejan al negro resolver sin problemas el desarrollo de su alfil (Bosch). |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 f3e5 g4f5"].porQue` | La retirada más cómoda: el alfil queda activo y lejos de los peones blancos. Después de 3...Ah5, en cambio, 4.g4 Ag6 5.h4 acosa al alfil y el blanco gana espacio con tiempo. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8g4 f3e5 g4e6"].porQue` | La idea sorprendente de Gurgenidze y Tseitlin: en e6 el alfil no ofrece blanco y ...Cd7 busca cambiar el caballo de e5. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8f5 c2c4 e7e6 d1b3 b8c6"].porQue` | Defiende b7 de forma indirecta: si 5.Dxb7, ...Cb4 con amenazas sobre c2. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8f5 c2c4 e7e6 d1b3 b8c6 a2a3"].porQue` | Le quita b4 al caballo: ahora sí amenaza Dxb7. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c8f5 c2c4 c7c6 c4d5"].porQue` | Lo mejor: tras ...cxd5, Db3 ataca b7 y d5 a la vez. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 c2c4 c5d4 c4d5"].porQue` | Lo más preciso: el blanco recupera el peón con Dxd4 o Cxd4 y queda mejor desarrollado. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5"].porQue` | El Ataque Torre contra ...d5: clava el caballo y prepara e3, Cbd2 y c3, un esquema parecido al Colle pero con el alfil afuera de la cadena. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5 e7e6 e2e3 c7c5"].porQue` | El plan más activo: presiona d4 enseguida, antes de que el blanco complete c3 y Cbd2. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 e1g1 e8g8 b2b3 b8d7"].porQue` | Desarrolla y prepara ...e5 o ...c5. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 c8f5"].porQue` | Desarrolla el alfil antes de jugar ...e6. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 b7b6"].porQue` | Prepara ...Ab7 para controlar e4. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 g7g6"].porQue` | Prepara el fianchetto. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c6"].porQue` | Refuerza d5 y deja abiertas las dos diagonales del alfil de c8. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c2c4 b7b5"].porQue` | Según Stockfish es un error: era mejor 3... e6 (−0,2 contra −1,3, para el bando que juega). |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 e1g1 e8g8 b2b3 b8d7 c1b2 c7c6"].porQue` | Refuerza d5 y prepara ...e5 para liberar la posición. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 b2b3"].porQue` | Prepara Ab2 para controlar e5: es el sistema Colle-Zukertort. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5 e7e6"].porQue` | Abre el alfil de f8 y prepara ...Ae7 para romper la clavada. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5 e7e6 e2e3 c7c5 c2c3 b8d7"].porQue` | Desarrolla y prepara ...Db6 o ...Ae7. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5 e7e6 b1d2 f8e7 c2c3"].porQue` | Sostiene d4 y prepara e4. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1g5 e7e6 b1d2 f8e7 c2c3 b8d7"].porQue` | Desarrolla y prepara ...c5. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 c1f4 c7c5 e2e3 b8c6 b1d2"].porQue` | Desarrolla y prepara c3. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 g2g3"].porQue` | Prepara el fianchetto: es una Catalana sin c4. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 g2g3 c7c6"].porQue` | Refuerza d5 y prepara ...Af5 o ...Ag4. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 g8f6 e2e3 e7e6 f1d3 f8d6 e1g1 e8g8 b2b3 b8d7 c1b2 c7c6 b1d2"].porQue` | Desarrolla y prepara Ce5 o e4. |
| Peón dama con 2.Cf3 | `notas["d2d4 g8f6 g1f3 c7c6"].porQue` | Prepara ...d5 o ...Ag4. |
| Peón dama con 2.Cf3 | `notas["d2d4 g8f6 g1f3 d7d6"].porQue` | Prepara ...Cbd7 y ...e5. |
| Peón dama con 2.Cf3 | `notas["d2d4 g8f6 g1f3 g7g6 g2g3"].porQue` | Prepara el fianchetto. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 c2c4 c5d4 c4d5 d8d5 b1c3 d5a5 f3d4 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 e2e3 g8f6 b1d2 e7e6 b2b3"].porQue` | Prepara Ab2. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 c7c5 g2g3"].porQue` | Prepara el fianchetto. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 e7e6 c1f4 g8f6 e2e3 c7c5 c2c3 b8c6 b1d2 f8d6 f4g3 e8g8 f1d3 b7b6"].porQue` | Prepara ...Ab7. |
| Peón dama con 2.Cf3 | `notas["d2d4 d7d5 g1f3 b8c6 c1f4 c8g4 e2e3 e7e6 c2c4 f8b4 b1c3 g8f6 a1c1"].porQue` | La torre va a la columna c. |
| Peón dama con 2.Cf3 | `notas["g1f3 d7d5 d2d4 g8f6 c1g5 e7e6 e2e3 c7c5 b1d2 b8c6 c2c3 f8e7 f1d3 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Peón dama con 2.Cf3 | `notas["g1f3 d7d5 d2d4 g8f6 c1g5 e7e6 b1d2 f8e7 c2c3 b8d7 e2e3 c7c5 f1d3 b7b6"].porQue` | Prepara ...Ab7. |
| Peón dama con 2.Cf3 | `notas["g1f3 d7d5 d2d4 g8f6 c1f4 c7c5 e2e3 b8c6 b1d2 e7e6 c2c3 f8d6 f4g3 e8g8 f1b5 c6e7 b5d3 b7b6"].porQue` | Prepara ...Ab7. |
| Peón dama con 2.Cf3 | `trampas["d2d4 d7d5 g1f3 c8g4 c2c4 e7e6 d1b3 b7b6 f3e5 g8f6 e2e3 f8e7 c4d5 e6d5 f1b5 g4d7 e5d7 b8d7 b5c6"]` | 2...Ag4 3.c4 e6 4.Db3 b6? 5.Ce5! Cf6 6.e3 Ae7 7.cxd5 exd5 8.Ab5+ Ad7? 9.Cxd7 Cbxd7 10.Ac6: la torre de a8 queda atacada y el negro pierde material. Es una partida de las simultáneas de Koltanowski; incluso con 8...Rf8 el negro queda bastante peor. |
| Defensa Petrov | `planesBlancas` | Aprovechar el tiempo de más: d4, Ad3, enroque y c4 para presionar el centro negro. |
| Defensa Petrov | `planesBlancas` | Buscar pequeñas ventajas en posiciones simétricas, o el enroque largo con Cc3 en las líneas más agudas. |
| Defensa Petrov | `planesNegras` | Caballo fuerte en e4 apoyado por ...d5; desarrollo con ...Ad6 o ...Ae7 y enroque. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6"].porQue` | Primero echa al caballo: así, cuando tome en e4, no va a haber descubiertos por la columna e. Es la forma más segura (3...Cxe4 también se juega, pero tras 4.De2 hay que conocer las trampas). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3"].porQueNo["e5f7"]` | 4.Cxf7, el Gambito Cochrane: el blanco entrega el caballo por dos peones y el enroque negro. Stockfish no lo considera correcto (el negro queda con ventaja). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4"].porQue` | Ocupa el centro; después vienen Ad3 y el enroque. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 f6e4 f1d3 d7d5 f3e5 b8d7"].porQue` | Provocador pero sólido: tras Cxd7 Axd7 el negro se desarrolla rápido. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 f6e4 d1e2 d8e7"].porQue` | La única defensa: la dama se pone delante del rey. El negro termina con una posición pasiva, por eso lo correcto es 3...d6 antes de tomar en e4. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 b1c3 f8b4"].porQue` | Más en el espíritu de la Petrov que 3...Cc6 (que lleva a los Cuatro Caballos): si 4.Cxe5, el negro enroca y recupera el peón más tarde. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 b1c3 e4c3 d2c3"].porQue` | Peones doblados, pero a cambio la columna d abierta para las torres y un desarrollo muy rápido: las blancas suelen seguir con Ae3, Dd2 y el enroque largo. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8e7 e1g1 b8c6"].porQue` | Más activo que 7...O-O: el caballo presiona d4 y prepara la respuesta ...Ag4 contra el natural Te1. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8e7 e1g1 b8c6 f1e1 c8g4"].porQue` | La clavada sostiene el caballo de e4 de forma indirecta: si 9.Axe4 dxe4 10.Txe4 Axf3 11.Dxf3 Cxd4, el negro recupera el peón y no hay ventaja blanca. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8e7 e1g1 b8c6 c2c4 c6b4 d3e2 e8g8"].porQue` | La posición tipo de la línea principal: las blancas suelen quedarse con un peón aislado en d4 y el juego pide paciencia y sentido posicional, no táctica. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8d6"].porQue` | La otra gran opción: si las blancas juegan c4 para socavar e4, el negro sostiene d5 con ...c6. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8d6 e1g1 e8g8 c2c4 c7c6 c4d5 c6d5 b1c3 e4c3 b2c3 c8g4"].porQue` | Clavar el caballo es lo más prudente: sin el caballo de e4, el flanco de rey negro queda expuesto, y 11...Cc6 12.Cg5 ya es peligroso. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 e5d4"].porQue` | Hasta 1970 se la consideraba tan buena como 3...Cxe4; hoy la eligen quienes quieren evitar las líneas más analizadas. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 e5d4 e4e5 f6e4 d1d4 d7d5 e5d6 e4d6"].porQue` | Cuidado con el negro: las blancas tienen una pequeña ventaja de desarrollo (por ejemplo 7.Cc3 Cc6 8.Df4) que no hay que dejar crecer. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 f6e4 f1d3 b8c6"].porQue` | El hallazgo de Murei (1993): devuelve el peón de e5 para desarrollar rápido. Si 5.Axe4, 5...d5 recupera la pieza. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 f6e4 f1d3 d7d5 f3e5 f8d6"].porQue` | Una de las dos principales: si 6.O-O O-O 7.c4, la más crítica es 7...Axe5 8.dxe5 Cc6, con complicaciones que llegan hasta un final muy analizado. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d2d4 f6e4 f1d3 d7d5 f3e5 b8d7 e5d7 c8d7 e1g1 f8d6"].porQue` | Lo más popular hoy. Implica entregar un peón (8.c4 c6 9.cxd5 cxd5 10.Dh5 O-O 11.Dxd5 Ac6) a cambio de un desarrollo armonioso; y si 8.Te1, jaque perpetuo con 8...Axh2+ 9.Rxh2 Dh4+ 10.Rg1 Dxf2+. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f7"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (+0,5 contra −0,7, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f1c4"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+0,5 contra −0,5, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 d1e2"].porQue` | Según Stockfish es un error: era mejor 3. Cxe5 (+0,5 contra −0,4, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 b8c6"].porQue` | Según Stockfish es un error: era mejor 3... d6 (−0,5 contra −2,0, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 f6e4 d1e2"].porQue` | Ataca el caballo de e4: si se retira, Cc6+ descubierto gana la dama. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 f8d6 e1g1 e8g8 c2c4 c8g4 c4d5 f7f5 f1e1"].porQue` | Según Stockfish es un error: era mejor 10. Cc3 (+1,0 contra −0,5, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 c2c4"].porQue` | Gana espacio y frena ...d5. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d1e2"].porQue` | Clava el caballo por la columna e y busca cambiar damas. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 f1d3 e4f6 e1g1 f8e7 c2c3"].porQue` | Prepara d4. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5c4 f6e4 d1e2 d8e7 c4e3 c7c6 b2b3"].porQue` | Prepara Ab2. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 f1d3 e4f6 e1g1 f8e7 h2h3 e8g8 c2c3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f7 e8f7 f1c4"].porQue` | Según Stockfish es un error: era mejor 5. Cc3 (−0,8 contra −1,8, para el bando que juega). |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 b1c3 b8c6 f1b5 f8b4 e1g1"].porQue` | Enroca: en la variante simétrica, el blanco suele seguir con d3 y Ag5. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 b1c3 b8c6 f1b5 f8c5 e1g1"].porQue` | Enroca y deja para después el golpe Cxe5. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 b8c6 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Petrov | `notas["e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Petrov | `trampas["e2e4 e7e5 g1f3 g8f6 f3e5 f6e4 d1e2 e4f6 e5c6"]` | 3...Cxe4? 4.De2 Cf6?? 5.Cc6+: jaque descubierto, y el caballo ataca a la dama. Si el negro toma en e4 sin echar antes al caballo, De2 lo pone en apuros; por eso en la Petrov primero se juega 3...d6. |
| Defensa Philidor | `planesBlancas` | Presionar f7 con Ac4 cuando el negro mantiene la tensión en e5. |
| Defensa Philidor | `planesBlancas` | Contra ...exd4, centralizar el caballo en d4 y desarrollarse con naturalidad. |
| Defensa Philidor | `planesNegras` | Mantener e5 con ...Cd7 y ...c6 (Hanham), o cambiar en d4 y desarrollarse con ...Cf6, ...Ae7 y enroque. |
| Defensa Philidor | `rupturas` | dxe5 de las blancas cuando el negro no puede retomar bien. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6"].porQue` | Defiende e5 con un peón: sólido, pero tapa el alfil de f8 y le da a las blancas más espacio. Stockfish prefiere 2...Cc6 (la diferencia es chica): la Philidor se elige por su solidez y porque evita la teoría de la Española y la Italiana. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4"].porQue` | Desafía e5 enseguida: el negro tiene que decidir si mantiene el punto o cambia. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4"].porQue` | La forma más simple: cambia en el centro y busca un desarrollo cómodo. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4"].porQueNo["f7f5"]` | El Contragambito Philidor, 3...f5?!: 4.Ac4 o 4.exf5 y el blanco queda claramente mejor, porque el flanco de rey negro se abre antes de que el negro se desarrolle. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 b8d7 f1c4 c7c6"].porQue` | Prepara ...b5 o ...d5 y deja b6 para el caballo; recién después ...Ae7 y ...Cgf6. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 d4e5 f6e4"].porQue` | Lo correcto si el blanco cambia en e5: el caballo toma el peón de e4. Según el cuaderno de Sistac, tras 5.Dd5 Cc5 6.Ag5 Ae7 el blanco conserva algo de iniciativa, pero sin nada concluyente. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 d4e5 f6e4"].porQueNo["d6e5"]` | 4...dxe5? 5.Dxd8+ Rxd8 6.Cxe5: el blanco gana un peón y además amenaza Cxf7+. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7 e1g1"].porQue` | Lo más sólido: el blanco enroca y deja que el negro complete su esquema (...0-0, ...c6). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7 e1g1"].porQueNo["f3g5"]` | 6.Cg5 apunta a f7, pero tras 6...0-0 7.Axf7+ Txf7 8.Ce6 De8 9.Cxc7 Dd8 10.Cxa8 b5! el negro recupera el juego con su desarrollo; Stockfish da la posición equilibrada. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g8f6 b1c3 f8e7 f1e2 e8g8 e1g1 f8e8 f2f4 e7f8 e2f3 c7c5"].porQue` | La ruptura que el cuaderno marca con «!»: el negro deja de defenderse y activa sus piezas con ...Cc6, aunque le quede un peón atrasado en d6. Stockfish la considera la mejor. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 b8d7 f1c4 c7c6 e1g1"].porQue` | Lo más sencillo: el rey a salvo antes de abrir el centro. Cc3 y Cg5 (que apunta a f7) son igual de fuertes. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7"].porQue` | Desarrolla y prepara el enroque, manteniendo el peón en e5. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7 e1g1 e8g8 d1e2"].porQue` | Prepara Td1 para presionar la columna d. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7 e1g1 e8g8 d1e2 c7c6"].porQue` | Prepara ...b5 y ...Dc7, y le da una casilla al alfil. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 g8f6 b1c3 b8d7 f1c4 f8e7 e1g1 e8g8 d1e2 c7c6 a2a4"].porQue` | Frena ...b5. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 b8d7 f1c4 c7c6 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g8f6 b1c3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 d1d4 c8d7"].porQue` | Desarrolla y prepara ...Cc6 para ganar tiempo contra la dama. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 f1c4 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g7g6"].porQue` | Prepara el fianchetto: es la Variante Larsen. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 f1c4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Ae7 (−0,4 contra −2,0, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 f1c4 f7f5 d2d3"].porQue` | Según Stockfish es un error: era mejor 4. d4 (+2,0 contra +1,1, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 f1c4 f8e7 c2c3"].porQue` | Prepara d4. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 c8d7"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,5 contra −1,7, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g8f6 b1c3 f8e7 f1e2 e8g8 e1g1 f8e8 f2f4 e7f8 e2f3 c7c5 d4b3 b8c6 f1e1 a7a5"].porQue` | Amenaza ...a4 contra el caballo de b3. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 g7g6 b1c3 f8g7 c1e3 g8f6 d1d2 e8g8 e1c1 f8e8 f2f3 b8c6 g2g4 c6e5"].porQue` | Según Stockfish es un error: era mejor 10... Cxd4 (−1,1 contra −2,2, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,5 contra −1,8, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 f7f5 d4e5 f5e4 f3g5 d6d5 e5e6"].porQue` | Avanza el peón a e6, que molesta mucho al negro y amenaza Cf7. |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 e5d4 f3d4 d6d5"].porQue` | Según Stockfish es un error: era mejor 4... Ae7 (−0,6 contra −1,4, para el bando que juega). |
| Defensa Philidor | `notas["e2e4 e7e5 g1f3 d7d6 d2d4 f7f5 d4e5 f5e4 f3g5 d6d5 e5e6 f8c5 b1c3"].porQue` | Según Stockfish es un error: era mejor 7. Cxe4 (+1,8 contra +0,8, para el bando que juega). |
| Defensa Philidor | `trampas["e2e4 e7e5 g1f3 d7d6 f1c4 c8g4 b1c3 g7g6 f3e5 g4d1 c4f7 e8e7 c3d5"]` | Mate de Légal: con el alfil en g4 y 4...g6?, 5.Cxe5! entrega la dama: si 5...Axd1??, 6.Axf7+ Re7 7.Cd5#. Y si 5...dxe5, 6.Dxg4 y el blanco ganó un peón. Es el mismo mate que se dio en Légal–Saint Brie (París, 1750), con otro orden de jugadas (2.Ac4 d6 3.Cf3). |
| Defensa Pirc | `planesBlancas` | Sistema 150 (Ae3, Dd2, Ah6): cambiar el alfil de g7 y atacar con h4-h5. |
| Defensa Pirc | `planesBlancas` | Variante Clásica (Cf3, Ae2, O-O): ventaja de espacio sin riesgos. |
| Defensa Pirc | `planesNegras` | Contra el Austriaco, ...c5 enseguida o ...O-O y ...c5. |
| Defensa Pirc | `notas["e2e4 d7d6"].porQue` | Prepara ...Cf6 sin que e5 lo eche y deja el centro para atacarlo después. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6"].porQue` | Prepara el fianchetto: la Pirc propiamente dicha. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4"].porQue` | Ataque Austriaco: prepara e5 para echar al caballo de f6 y ganar espacio. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7"].porQue` | Completa el fianchetto y prepara el enroque y ...c5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 e7e5"].porQue` | Busca la Philidor (si Cf3) aunque permite dxe5 y el cambio de damas, con el rey negro en el centro. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 c7c6"].porQue` | Variante Checa: contra f4 prepara ...Da5 y ...e5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3"].porQue` | El sistema 4.Ae3, la línea principal moderna: deja abiertos Dd2 con Ah6, el enroque a cualquier lado y el avance f3 o f4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 c8g4"].porQue` | Amenaza tomar en f3 para debilitar el control blanco de d4 y e5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 c7c6"].porQue` | Tranquila: prepara ...Cbd7, ...Dc7 o ...Da5 y, con eso, la ruptura ...e5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5"].porQue` | Contra el Ataque Austríaco, ataca el centro de inmediato y busca un juego de tipo siciliano. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 e8g8"].porQue` | Completa el enroque primero; según lo que haga el blanco, después ...c5 o ...Ca6. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5 f1b5"].porQue` | El jaque intermedio, antes de avanzar e5: obliga a ...Ad7 y después el peón de e5 llega con más fuerza. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5 f1b5"].porQueNo["e4e5"]` | 6.e5 de inmediato: tras 6...Cfd7 las negras atacan el centro con ...cxd4 y ...dxe5, y están bien. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5 f1b5 c8d7 e4e5 f6g4"].porQue` | El caballo salta a g4: desde ahí presiona e5 y, si las blancas no se apuran, las negras cambian en d4 y e5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5 f1b5 c8d7 e4e5 f6g4 e5e6 f7e6"].porQue` | Lo normal: aceptar el peón. Vigus considera que las negras están sanas en esta línea. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 e8g8 f1d3 b8c6"].porQue` | El plan clásico: el caballo presiona d4 y prepara ...e5. (6...Ca6, seguido de ...c5, es hoy la alternativa más jugada.) |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 e8g8 f1d3 b8c6 e1g1 e7e5"].porQue` | La ruptura central: si 8.fxe5 dxe5 9.d5, la idea de Petrosian 9...Cd4 alcanza para igualar, según Vigus. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6"].porQue` | Contra el esquema Ae3 y Dd2 (el «Ataque 150»), el negro prepara ...b5 para contraatacar en el flanco de dama. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 d1d2 b7b5"].porQue` | Lo más activo: gana espacio y amenaza ...b4 para echar al caballo que defiende e4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 b8d7"].porQue` | Prepara ...e5 sin tapar el peón de f: si dxe5, el caballo retoma. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7"].porQue` | Defensa León: el negro prepara ...e5 con el caballo en d7, como en la Variante Hanham de la Philidor, y así evita el cambio de damas tras dxe5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4"].porQue` | Lo más agresivo: amenaza e5, que echaría al caballo de f6. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 e7e5"].porQue` | La idea de la defensa: ...e5 de todas formas, antes de que el blanco juegue e5. |
| Defensa Pirc | `notas["e2e4 d7d6 f2f4 d6d5 e4d5 g8f6"].porQue` | Desarrolla y prepara recuperar el peón. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 d1d2"].porQue` | Prepara el enroque largo y Ah6. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 d1d2 c8g4"].porQue` | Según Stockfish es un error: era mejor 5... b5 (−0,6 contra −1,8, para el bando que juega). |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2"].porQue` | Desarrolla y prepara el enroque: es la variante Clásica. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 b8d7 f2f4 e7e5 g1f3 e5d4 d1d4 c7c6 f1c4"].porQue` | Según Stockfish es un error: era mejor 7. Ae3 (+0,7 contra −0,1, para el bando que juega). |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1g5"].porQue` | Desarrolla y prepara Dd2 con Ah6: es la Variante Byrne. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g2g3"].porQue` | Prepara el fianchetto: esquema tranquilo. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 g1f3"].porQue` | Según Stockfish es un error: era mejor 3. Cc3 (+0,5 contra −0,7, para el bando que juega). |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3"].porQue` | Sostiene e4: esquema de India de Rey con f3. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 c7c5 d4d5 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 c7c5 d4d5 g7g6 c2c4 f8g7 b1c3 e8g8 c1g5 e7e6 d1d2 e6d5 c4d5 a7a6"].porQue` | Prepara ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 c7c5 d4d5 g7g6 c2c4 f8g7 b1c3 e8g8 c1g5 e7e6 d1d2 e6d5 c4d5 a7a6 a2a4"].porQue` | Frena ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 c7c5 d4d5 g7g6 c2c4 f8g7 b1c3 e8g8 c1g5 e7e6 d1d2 e6d5 c4d5 a7a6 a2a4 f8e8 g1e2 b8d7 e2g3"].porQue` | El caballo va a g3. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 g7g6 c2c4 f8g7 b1c3 e8g8 c1e3 c7c5 g1e2 b8c6 d4d5 c6e5 e2g3"].porQue` | El caballo va a g3. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 g7g6 c2c4 f8g7 b1c3 e8g8 c1e3 c7c5 g1e2 b8c6 d4d5 c6e5 e2g3 e7e6 f1e2 e6d5 c4d5 a7a6"].porQue` | Prepara ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 f2f3 g7g6 c2c4 f8g7 b1c3 e8g8 c1e3 c7c5 g1e2 b8c6 d4d5 c6e5 e2g3 e7e6 f1e2 e6d5 c4d5 a7a6 a2a4"].porQue` | Frena ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 b8d7 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 e7e5 d4e5 c8d7"].porQue` | Según Stockfish es un error: era mejor 3... dxe5 (−0,4 contra −1,7, para el bando que juega). |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f2f4 f8g7 g1f3 c7c5 f1b5 c8d7 e4e5 f6g4 e5e6 f7e6 f3g5 d7b5 c3b5"].porQue` | Recaptura y amenaza Cc7+. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 c7c6 a2a4 b8d7 a4a5 d8c7 c1e3 a8b8"].porQue` | Prepara ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 h2h3 e8g8 c1e3 c7c6"].porQue` | Prepara ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 h2h3 e8g8 c1e3 c7c6 a2a4"].porQue` | Frena ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 c7c6 a2a4 b8d7 h2h3 e7e5 d4e5 d6e5 c1e3 d8e7 d1d3 f6h5"].porQue` | El caballo va a f4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 c7c6 f1e1 b8d7 c1f4 d8a5 f3d2"].porQue` | Prepara Cb3 o Cc4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 h2h3 e8g8 c1e3 c7c6 d1d2"].porQue` | Prepara Ah6. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 d1d2 b7b5 f2f3"].porQue` | Sostiene e4 y prepara g4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 d1d2 b7b5 f2f3 b8d7 g2g4 d7b6 h2h4 h7h5"].porQue` | Frena el avance de los peones. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 h2h3 b8d7 f2f4 b7b5 a2a3"].porQue` | Frena ...b4. |
| Defensa Pirc | `notas["e2e4 d7d6 g2g4"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,5 contra −0,9, para el bando que juega). |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 h2h3 b8d7 g1f3 d8c7 a2a4"].porQue` | Frena ...b5. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 h2h3 b8d7 g1f3 d8c7 a2a4 f8g7 f1e2 e8g8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 h2h3 b8d7 g1f3 d8c7 a2a4 f8g7 f1e2 e8g8 e1g1 b7b6 d1d2"].porQue` | Prepara Ah6. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1e3 c7c6 h2h3 b8d7 g1f3 d8c7 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 f1c4 f8g7 d1e2 b8c6 e4e5 f6g4"].porQue` | El caballo va a g4. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1g5 f8g7 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 c1g5 f8g7 f2f4 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Pirc | `notas["e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g2g3 f8g7 f1g2 e8g8 g1e2 e7e5 h2h3 b8c6 c1e3 e5d4 e2d4 c8d7 e1g1 f8e8 f1e1 a7a6 a2a4"].porQue` | Frena ...b5. |
| Apertura Polaca | `planesBlancas` | Ab2 contra e5 y la diagonal larga. |
| Apertura Polaca | `planesNegras` | ...e5 y ...Axb4 aprovechando el peón suelto. |
| Apertura Polaca | `notas["b2b4"].porQue` | Gana espacio en el flanco de dama y prepara Ab2 contra e5. |
| Apertura Polaca | `notas["b2b4 e7e5 c1b2"].porQue` | Ataca e5: el negro tiene que decidir entre defenderlo y tomar en b4. |
| Apertura Polaca | `notas["b2b4 e7e5 c1b2 f8b4 b2e5 g8f6 c2c3"].porQue` | Para Stockfish, lo más preciso: echa al alfil de b4 con tiempo y prepara d4 o Cf3. |
| Apertura Polaca | `notas["b2b4 c7c6"].porQue` | Prepara ...Db6 o ...a5 para atacar el peón de b4, que no tiene apoyo. |
| Apertura Polaca | `notas["b2b4 c7c6 c1b2 d8b6 a2a3"].porQueNo["b2c3"]` | El alfil abandona la gran diagonal y queda expuesto: ...Cf6, ...Cd5 y el negro lo cambia. |
| Apertura Polaca | `notas["b2b4 d7d5 c1b2"].porQue` | El mismo plan contra cualquier respuesta: el alfil en la gran diagonal, y después e3, Cf3 y a veces b5. |
| Apertura Polaca | `notas["b2b4 c7c6 c1b2 a7a5 b4b5"].porQue` | Avanza el peón en lugar de defenderlo. |
| Apertura Polaca | `notas["b2b4 d7d5 c1b2 c7c6"].porQue` | Refuerza d5 y prepara ...Db6 contra b4. |
| Apertura Polaca | `notas["b2b4 g8f6 c1b2 g7g6"].porQue` | Prepara el fianchetto para oponerse al alfil de b2. |
| Apertura Polaca | `notas["b2b4 g8f6 c1b2 g7g6 e2e4"].porQue` | Ocupa el centro: si ...Cxe4, Axh8 gana la torre por la diagonal que abrió ...g6. |
| Apertura Polaca | `notas["b2b4 e7e6 c1b2 g8f6 b4b5 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Ponziani | `planesBlancas` | Da4 o Ab5 para presionar el caballo de c6. |
| Apertura Ponziani | `planesNegras` | Contraatacar e4 con ...Cf6. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3"].porQue` | Prepara d4 para armar un centro de peones; a cambio le quita c3 al caballo. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 d7d5"].porQue` | La respuesta más enérgica: abre el centro antes de que llegue d4. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 g8f6 d2d4"].porQue` | Lo coherente: completa el plan del centro. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 g8f6 d2d4 f6e4"].porQue` | También bueno: toma el peón central y el juego se abre enseguida. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 d7d5 d1a4"].porQue` | La respuesta crítica, la que preocupa a los que juegan 1...e5: la dama clava el caballo de c6 y amenaza Cxe5. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 f7f5 d2d4 d7d6"].porQue` | Según Stockfish es un error: era mejor 4... fxe4 (−0,1 contra −1,0, para el bando que juega). |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 f8e7"].porQue` | Según Stockfish es un error: era mejor 3... d5 (+0,2 contra −0,7, para el bando que juega). |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 g8e7"].porQue` | Prepara ...d5 con apoyo del caballo. |
| Apertura Ponziani | `notas["e2e4 e7e5 g1f3 b8c6 c2c3 g8f6 d2d3 d7d5 b1d2 a7a5 f1e2 f8c5 e1g1 e8g8 b2b3"].porQue` | Prepara Ab2. |
| Apertura Réti | `planesBlancas` | c4 contra d5, fianchetto con g3 y Ag2, a veces b3 y Ab2. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 e2e3"].porQueNo["e2e4"]` | Encierra a las blancas: ...Cc6 y ...e5 dejan al negro con espacio. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 g2g3"].porQue` | La forma más flexible contra la Benoni invertida: alfil a g2 y elegir después entre e3 y b4. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 c7c6 b2b3"].porQue` | Lo más simple: protege c4 de antemano, porque Da4+ y Dxc4 ya no es tan fácil. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 c7c6 b2b3 g8f6 g2g3 c8f5"].porQue` | Variante Lasker (o Nueva York): esquema sólido y sin debilidades, de mucha maniobra. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5c4"].porQue` | Al estilo del Gambito de Dama Aceptado: no busca quedarse con el peón sino adaptarse a cómo lo recupera el blanco. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3"].porQue` | Más flexible que 2.c4: deja abiertos c4, d4 y el Ataque Indio de Rey (d3 y e4). |
| Apertura Réti | `notas["g1f3 d7d5 b2b3"].porQue` | El esquema de Nimzowitsch: un solo plan de desarrollo, flanco puro. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5c4 e2e3"].porQue` | Lo más preciso: el alfil recupera el peón de c4 y el blanco se queda con el centro. 3.e4 y 3.Ca3 también son buenas. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6"].porQue` | Un esquema sólido: ...Ag4 o ...Af5 antes de ...e6, sin que el alfil de dama quede encerrado. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 c8g4 f1g2"].porQue` | Sigue con el fianchetto: el alfil de g4 no es una molestia seria y el blanco elige después entre c4, d4 o el Ataque Indio de Rey. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 e2e3 b8c6 e3d4"].porQue` | Abre la columna e y obliga al negro a decidir cómo retomar; 4.Cxd4 también es igual de bueno para Stockfish. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1"].porQue` | Enroca antes de decidir el plan central: c4, d3 con e4, o d4. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8f5"].porQue` | El alfil sale antes de ...e6, como en la Eslava, así no queda encerrado. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8f5 d2d3"].porQue` | Prepara Cbd2 y e4: el avance va a llegar ganando tiempo sobre el alfil de f5. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8g4 h2h3"].porQue` | Le pregunta al alfil: si toma en f3, el blanco se queda con la pareja de alfiles. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8g4 h2h3 g4h5"].porQue` | Mantiene la clavada. ...Axf3 también es jugable. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 c7c5"].porQue` | Ocupa espacio en el centro: el negro arma el centro clásico con ...Cc6 y ...e5. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 c7c5 f1g2"].porQue` | Completa el fianchetto antes de decidir el plan central. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 c7c5 f1g2 b8c6"].porQue` | Desarrolla y prepara ...e5. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 c7c5 f1g2 b8c6 d2d4"].porQue` | Grünfeld invertida: el blanco ataca el centro con un tiempo de más. Si ...cxd4, Cxd4 y el alfil de g2 presiona d5 y c6. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 e7e6"].porQue` | Esquema sólido de Gambito de Dama: ...Ae7 y ...O-O, sin comprometer todavía el alfil de c8. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 e7e6 e1g1"].porQue` | Enroca y espera: más adelante elige entre c4, d3 con e4, o d4. |
| Apertura Réti | `notas["g1f3 d7d5 d2d4 g8f6 e2e3 e7e6 b2b3"].porQue` | Prepara Ab2 para controlar e5. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 e7e6 b2b3"].porQue` | Prepara el fianchetto de dama y protege c4. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3"].porQue` | Planteo flexible: prepara c4 o b3 sin comprometer el peón de dama. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 b1c3 b8d7"].porQue` | Desarrolla y prepara ...e5. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 b1c3 b8d7 b2b3"].porQue` | Prepara Ab2 y protege c4. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 e7e6 g2g3 g8f6 f1g2 b7b6 e1g1 c8b7 d2d4 f8e7 b1c3 e8g8 f3e5 b8a6 c4d5 e6d5 c1f4 c7c5 a1c1"].porQue` | La torre va a la columna c. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 e7e6 g2g3 g8f6 f1g2 b7b6 e1g1 c8b7 b2b3"].porQue` | Prepara Ab2. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8f5 d2d3 e7e6 b1d2 h7h6 d1e1 f8e7 e2e4 f5h7 e1e2 e8g8 b2b3"].porQue` | Prepara Ab2. |
| Apertura Réti | `notas["g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8f5 d2d3 e7e6 b1d2 h7h6 d1e1 f8e7 e2e4 f5h7 e1e2 e8g8 b2b3 a7a5 a2a4"].porQue` | Frena ...a4. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 b1c3 b8d7 d1c2 e7e6 d2d4 f8d6 b2b3 e8g8 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 b1c3 b8d7 d1c2 e7e6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 b1c3 b8d7 d1c2 e7e6 b2b3 f8d6 c1b2 e8g8 f1e2 f8e8 e1g1 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 d1c2 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 e2e3 g8f6 c2c4 c7c6 d1c2 g7g6 b2b3"].porQue` | Prepara Ab2. |
| Apertura Réti | `notas["g1f3 d7d5 b2b3 c7c5 c2c4 d5c4 b1c3"].porQue` | Según Stockfish es un error: era mejor 4. bxc4 (+0,2 contra −0,7, para el bando que juega). |
| Apertura Réti | `notas["g1f3 d7d5 d2d3 g8f6 b1d2 c7c5 e2e4 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 d2d3 g8f6 b1d2 c7c5 e2e4 b8c6 g2g3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 d2d3 g8f6 b1d2 c7c5 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 d2d3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 h1g1"].porQue` | Según Stockfish es un error: era mejor 2. d4 (+0,2 contra −0,8, para el bando que juega). |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 b2b4 c7c5 e2e3 g8f6 b4b5 d8c7 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5d4 b2b4 c7c5 e2e3 d4e3 f2e3 c5b4 d2d4 g8f6 f1d3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 d5c4 e2e3 c8e6 b1a3"].porQue` | El caballo va a recuperar el peón. |
| Apertura Réti | `notas["g1f3 d7d5 c2c4 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... d4 (+0,1 contra −1,7, para el bando que juega). |
| Defensa San Jorge | `planesNegras` | ...Ab7, ...e6 y ...c5 para atacar el centro blanco desde los costados. |
| Defensa San Jorge | `notas["e2e4 a7a6"].porQue` | El primer paso del sistema: ...a6 prepara ...b5 y el fianchetto del alfil de dama. Stockfish la considera jugable. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5"].porQue` | La idea de la San Jorge: ganar espacio en el flanco de dama y sacar el alfil a b7. Stockfish le da a las blancas algo más de ventaja que con 2...e6. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 a2a4"].porQue` | Para Stockfish, lo más fuerte: ataca b5 enseguida y obliga al negro a decidir antes de completar su esquema. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 g1f3 c8b7 f1d3 e7e6"].porQue` | Completa la fortaleza de peones en d7, e6 y f7. Miles jugó primero ...Cf6, que también es bueno. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 g1f3 c8b7 f1d3 g8f6 d1e2 e7e6 a2a4 c7c5"].porQue` | La jugada de Miles contra Karpov y la mejor según Stockfish: en lugar de defender b5, el negro ataca el centro. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 a2a4 c8b7 b1d2"].porQue` | La mejor para Stockfish: defiende e4 sin tapar el peón de c. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 g1f3 c8b7 f1d3 e7e6 e1g1"].porQue` | Lo más sencillo: el rey a salvo antes de decidir en el centro; De2 y c3 también son buenos. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 c2c4 c8b7 d1c2"].porQue` | Sostiene e4 con la dama y mantiene los tres peones centrales: para Stockfish, la más precisa. |
| Defensa San Jorge | `notas["e2e4 g7g5 d2d4 h7h6"].porQue` | Sostiene g5. Para Stockfish el negro ya está unos dos peones abajo: el fianchetto con ...Ag7 no compensa el flanco de rey debilitado. |
| Defensa San Jorge | `notas["e2e4 a7a6 d2d4 b7b5 g1f3 c8b7 f1d3 d7d6 e1g1 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Schliemann (Gambito Jaenisch) | `planesBlancas` | 4.Cc3 y, tras 4...fxe4 5.Cxe4 d5, devolver la pieza con 6.Cxe5 para atacar al rey negro. |
| Defensa Schliemann (Gambito Jaenisch) | `planesNegras` | Contra 4.d3, ...Cf6 y ...Ac5 apuntando a f2, aunque cueste el peón de e5. |
| Defensa Schliemann (Gambito Jaenisch) | `rupturas` | ...fxe4 y ...d5 del negro. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 d7d5 f3e5"].porQue` | El único intento de refutar el Schliemann: el blanco devuelve la pieza enseguida y busca al rey negro. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 d7d5 f3e5 d5e4 e5c6"].porQue` | Lo único bueno: el caballo se lleva el de c6 y amenaza la dama por la descubierta. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 d7d5 f3e5 d5e4 e5c6 d8g5 d1e2 g8f6 c6a7"].porQue` | El caballo escapa tomando un peón con jaque: lo más fuerte para Stockfish. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 g8f6"].porQue` | Más prudente que 5...d5: tras 6.De2 d5 7.Cxf6+ gxf6 8.d4, la lucha es menos complicada. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 b1c3 f5e4 c3e4 g8f6 d1e2"].porQue` | Clava el peón de e5 por la columna y prepara el cambio en f6. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 d2d4 f5e4 f3e5 c6e5 d4e5 c7c6"].porQue` | El punto de la defensa contra 4.d4: el alfil de b5 está atacado y, si se retira, ...Da5+ suele recuperar el peón de e5 con un juego cómodo. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 d2d4 f5e4 f3e5 c6e5 d4e5 c7c6 b1c3"].porQue` | Lo más preciso para Stockfish: desarrolla en lugar de retirar el alfil, y el negro tiene que decidir si lo toma. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 d2d3 f5e4 d3e4 g8f6 e1g1 f8c5"].porQue` | La principal hoy, más agresiva que 6...d6: si 7.Axc6 bxc6 8.Cxe5 O-O, el desarrollo negro compensa el peón. |
| Defensa Schliemann (Gambito Jaenisch) | `notas["e2e4 e7e5 g1f3 b8c6 f1b5 f7f5 e4f5"].porQue` | Según Stockfish es un error: era mejor 4. Cc3 (+0,6 contra −0,4, para el bando que juega). |
| Defensa Semieslava | `planesBlancas` | Con e3 y Ad3: ganar el tiempo que pierde el negro al tomar en c4 y buscar e4. |
| Defensa Semieslava | `planesBlancas` | Con Ag5: clavar el caballo y entrar en líneas tácticas. |
| Defensa Semieslava | `planesNegras` | Merano: ...dxc4 cuando el alfil ya está en d3, ...b5 y ...Ab7 con juego en el flanco de dama. |
| Defensa Semieslava | `estructura` | Peones negros en c6, d5 y e6 (el "triángulo"); tras ...dxc4 y ...b5 el negro gana espacio en el flanco de dama. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6"].porQue` | Sostiene d5 con los dos peones y abre el alfil de f8. Amenaza ...dxc4 y ...b5 para quedarse con el peón. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3"].porQueNo["e2e4"]` | Prematuro: ...dxe4 y el negro rompe con ...c5; el centro blanco se desarma. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5"].porQue` | Clava el caballo: lleva a las variantes Moscú (...h6) y Botvinnik (...dxc4), muy tácticas. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7"].porQue` | Desarrolla y prepara ...dxc4 con ...b5, o la ruptura ...e5. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7"].porQueNo["d5c4"]` | Prematuro: el alfil de f1 toma en c4 de una sola vez, sin perder el tiempo que pierde en la Merano (Ad3 y después Axc4). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4"].porQue` | Merano: el alfil tiene que volver a mover para tomar, y el negro sigue con ...b5 ganando espacio con tiempo. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 a7a6"].porQue` | Prepara ...c5, la ruptura clave para atacar d4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 c8b7"].porQue` | También bueno: presiona e4 y la diagonal larga antes de jugar ...c5. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 h6g5 h4g5 b8d7"].porQue` | La posición básica de la Botvinnik: con ...Ab7, ...Db6, enroque largo y ...c5, el juego negro cobra vida de golpe. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 h7h6"].porQue` | Variante Moscú: pregunta al alfil antes de decidir. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 d1c2"].porQue` | La alternativa más aceptada a 6.Ad3, para evitar la Merano. Ahora ...dxc4 no conviene: tras Axc4 las blancas tendrían la Dc2 de regalo respecto de la línea principal. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 d1c2 f8d6"].porQue` | Lo normal: tras 7.Ad3 O-O 8.O-O, el negro puede elegir entre ...dxc4 con ...b5 o ...e5, o una jugada de espera como ...De7. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 a7a6 e3e4 c6c5 e4e5 c5d4"].porQue` | La respuesta fuerte a 10.e5: abre una verdadera jungla de variantes. Tras 11.Cxb5, el negro elige entre ...Cg4, ...axb5 y ...Cxe5. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 a7a6 e3e4 c6c5 d4d5 c5c4"].porQue` | Considerada la mejor respuesta a 10.d5: si 11.Ac2, el negro cierra con ...e5 en buenas condiciones; lo crítico es 11.dxe6. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 b5b4 c3e4 f8e7"].porQue` | Parece poca cosa, pero después de O-O O-O, Cxf6+ Cxf6 y e4, el negro juega ...Ab7 y el avance ...c5 es imparable. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 c8b7 e3e4 b5b4 c3a4 c6c5 e4e5 f6d5"].porQue` | Perfectamente jugable: si 12.Cxc5 Cxc5 13.dxc5 Axc5 14.Ab5+ Re7, perder el enroque no es un problema, y con otras jugadas el caballo de a4 queda aislado. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 h7h6 g5f6 d8f6 e2e3"].porQue` | Lo prudente: una lucha posicional en la que el negro tiene la pareja de alfiles. FCO considera apresurado 7.e4 por 7...dxe4 8.Cxe4 Ab4+, aunque para Stockfish la diferencia es chica. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 f8d6"].porQue` | La Variante Chigorin: el alfil va a d6 sin cambiar antes en c4, para preparar ...e5. Stockfish prefiere la Merano con 6...dxc4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 f8d6 e3e4"].porQue` | Lo más fuerte: abre el centro antes de que el negro juegue ...e5; si ...dxe4 Cxe4, el caballo gana tiempo contra el alfil de d6. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4"].porQue` | Lo natural: ocupa el centro, amenaza recuperar c4 y aprovechar la clavada con e5 (Schandorff). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5"].porQueNo["e5f6"]` | exf6 gxh4: una línea secundaria que, según Schandorff, suele ser peligrosa para el que la elige. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 h6g5 h4g5 b8d7 g2g3"].porQue` | Un momento importante: el blanco prepara Ag2 para la gran diagonal antes de tomar en f6. Tomar enseguida con exf6 suele transponer. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 h6g5 h4g5 b8d7 g2g3 c8b7 f1g2 d8b6"].porQue` | La jugada normal: la dama sale del alcance del alfil y prepara el enroque largo. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 h6g5 h4g5 b8d7 g2g3 c8b7 f1g2 d8b6 e5f6 e8c8"].porQue` | El rey negro busca refugio en el flanco de dama, detrás de los peones avanzados. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 f3g5 h6g5 h4g5 b8d7 g2g3 c8b7 f1g2 d8b6 e5f6 e8c8 e1g1 c6c5"].porQueNo["e6e5"]` | ...e5? dxe5 Txd1 Tfxd1: un sacrificio posicional de dama tras el cual el blanco domina el tablero (Schandorff). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 h7h6 g5h4 d5c4 e2e4 g7g5 h4g3 b7b5 f1e2 c8b7"].porQue` | La mejor según Schandorff: las demás, sobre todo las codiciosas, llevan rápido a problemas. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 h7h6 g5h4 d5c4 e2e4 g7g5 h4g3 b7b5 f1e2 c8b7 h2h4"].porQue` | La más directa y molesta: el negro va a pagar por haber avanzado los peones del flanco de rey (Schandorff). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 f1d3 f8d6 d1c2"].porQue` | Controla e4 y prepara e4 o O-O. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 a7a6"].porQue` | Prepara ...dxc4 y ...b5 en un orden distinto al del Merano. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 a7a6 f1d3 d5c4 d3c4 b7b5 c4d3 c6c5 e1g1 c8b7 d1e2"].porQue` | Prepara Td1 y e4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 f8d6 f1d3 d5c4 d3c4 b7b5 c4d3 b8d7"].porQue` | Desarrolla y prepara ...e5 o ...c5. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 f8d6 f1d3 d5c4 d3c4 b7b5 c4d3 b8d7 e1g1 e8g8 d1c2"].porQue` | Prepara e4 y apunta a h7. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 f8d6 f1d3 d5c4 d3c4 b7b5 c4d3 b8d7 e1g1 c8b7 a2a3"].porQue` | Frena ...b4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 f8d6 f1d3 d5c4 d3c4 b7b5 c4d3 b8d7 e1g1 c8b7 a2a3 e8g8 d1c2"].porQue` | Prepara e4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 d1c2 f8d6 b2b3"].porQue` | Prepara Ab2 y protege c4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 d1c2 f8d6 b2b3 e8g8 c1b2 f8e8"].porQue` | Prepara ...e5 con la torre detrás. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 b2b3"].porQue` | Prepara Ab2 y protege c4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 e5f6"].porQue` | Según Stockfish es un error: era mejor 9. Cxg5 (+0,7 contra −0,5, para el bando que juega). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f3e5"].porQue` | Centraliza el caballo y prepara f4. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 e2e4 d5e4 f2f3"].porQue` | Según Stockfish es un error: era mejor 5. Cxe4 (+0,4 contra −0,5, para el bando que juega). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 f8d6 e1g1 c8b7 a2a3 e8g8 d1c2 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 f8d6 e1g1 c8b7 a2a3 e8g8 d1c2 a8c8 f1d1"].porQue` | La torre va a la columna d. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 f8d6 d1c2 d5c4 d3c4 b7b5 c4e2 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 f8e7 e1g1 e8g8 b2b3"].porQue` | Prepara Ab2. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 f8e7 e1g1 e8g8 b2b3 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 a7a6 f1d3 d5c4 d3c4 b7b5 c4d3 c6c5 e1g1 c8b7 d1e2 b8d7 f1d1"].porQue` | La torre va a la columna d. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c6 g1f3 g8f6 e2e3 b8d7 f1d3 d5c4 d3c4 b7b5 c4d3 b5b4 c3e4 f6e4 d3e4 c8b7"].porQue` | El alfil va a la diagonal larga. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 b2b3 f8d6 c1b2 e8g8 f1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 b2b3 f8d6 c1b2 e8g8 f1e2 b7b6 e1g1 c8b7 e2d3 f8e8"].porQue` | La torre prepara ...e5. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 b2b3 f8d6 c1b2 e8g8 f1e2 b7b6 e1g1 c8b7 e2d3 f8e8 f1e1 a8c8"].porQue` | La torre va a la columna c. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 e5f6 g5h4 f3e5 d8f6 f1e2"].porQue` | Según Stockfish es un error: era mejor 11. a4 (−0,5 contra −1,4, para el bando que juega). |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 c1g5 d5c4 e2e4 b7b5 e4e5 h7h6 g5h4 g7g5 e5f6 g5h4 f3e5 d8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Semieslava | `notas["d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 e7e6 e2e3 b8d7 d1c2 f8d6 g2g4 h7h6 h2h3"].porQue` | Prepara g5. |
| Siciliana Alapin (2.c3) | `planesBlancas` | Desarrollo tranquilo: Cf3, Ad3 o Ac4, enroque. |
| Siciliana Alapin (2.c3) | `planesNegras` | Atacar el centro enseguida con ...Cf6 o ...d5. |
| Siciliana Alapin (2.c3) | `planesNegras` | Con ...cxd4, dejar a las blancas con un peón aislado si retoman con el peón de c. |
| Siciliana Alapin (2.c3) | `estructura` | A menudo peón aislado blanco en d4 tras cxd4 y exd5. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5"].porQueNo["f1c4"]` | 3.Ac4? Cxe4!: si 4.Axf7+ Rxf7 5.Dh5+, el blanco recupera la pieza pero el negro sigue con ...d5 y queda con el centro. Stockfish da al negro clara ventaja. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5"].porQue` | Lo más fuerte. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g8f6"].porQue` | Desarrolla y mantiene la tensión: conviene cambiar en d4 recién cuando las blancas hayan puesto alguna pieza en una casilla menos activa. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3"].porQue` | Retrasa cxd4: si ...Cc6, Ac4 presiona el caballo de d5 y f7. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 g2g3 d7d6 e5d6 e7e6"].porQue` | El pequeño truco que muestra Rogozenko: en lugar de retomar con la dama, ...e6 para tomar en d6 con el alfil, que así se desarrolla con tiempo. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3 e7e6"].porQue` | Defiende el caballo de d5, así que ahora amenaza ...dxc3. A cambio, el alfil de c8 queda encerrado detrás de e6. Algunos especialistas la consideran inferior, pero Collins no ve motivo para eso, y Stockfish la da como jugable. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3 e7e6 c3d4 d7d6 f1c4"].porQue` | Alfil agresivo, que presiona al caballo de d5 y prepara el enroque. La gran alternativa es 7.a3, para llevar el alfil a d3 sin permitir la molesta ...Cb4. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3 b8c6"].porQue` | Mantiene las opciones abiertas: el alfil de c8 todavía puede ir a g4, o el negro puede pasar a las líneas con ...e6. Es la preferida de Stockfish. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5"].porQue` | Se llega a una Francesa del Avance con c3 ya jugado: para Stockfish, lo más fuerte. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d6 d2d4 g8f6"].porQue` | Ataca e4 de inmediato: las blancas tienen que defenderlo con Ad3 o f3 antes de seguir. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 b8c6 d2d4 d7d5 d4c5"].porQue` | Lo más preciso para Stockfish: el blanco gana un peón de forma momentánea y el negro tiene que recuperarlo. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 c5d4 c3d4"].porQue` | Retoma con el peón: el blanco va a jugar con el peón de d4 aislado y actividad. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 e7e6"].porQue` | Prepara ...d5 para atacar el centro antes de que se consolide. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 c5d4 c3d4 b8c6 g1f3 e7e5 b1c3 f8b4 f1e2"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d6"].porQue` | Prepara ...Cf6 sin dejar que e5 eche al caballo. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g7g6"].porQue` | Prepara el fianchetto para presionar d4. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g7g6"].porQue` | Prepara el fianchetto para presionar d4. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g7g6 g1f3 f8g7 b1a3"].porQue` | El caballo va a c4 o b5. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 c5d4 c3d4 b8c6 g1f3 e7e5 b1c3 f8b4 f1e2 e5e4"].porQue` | Según Stockfish es un error: era mejor 8... exd4 (−0,2 contra −1,4, para el bando que juega). |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3 e7e6 c3d4 d7d6 f1c4 f8e7 e1g1 e8g8 d1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g7g6 d2d4 c5d4 c3d4 d7d5 e4e5 b8c6 b1c3 f8g7 f1b5 g8h6"].porQue` | El caballo va a f5. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d6 d2d4 g8f6 f1d3 b8c6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d6 d2d4 g8f6 f1d3 c5d4 c3d4 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 d7d6 d2d4 g8f6 f1d3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 g7g6 d2d4 c5d4 c3d4 d7d5 e4e5 b8c6 b1c3 g8h6"].porQue` | El caballo va a f5. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3 c8d7 f1e2 g8e7"].porQue` | El caballo va a f5. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3 c8d7 f1e2 g8e7 b1a3"].porQue` | El caballo va a c2. |
| Siciliana Alapin (2.c3) | `notas["e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3 d8b6 a2a3 c5c4 b1d2 c6a5 f1e2 c8d7 e1g1 g8e7 a1b1"].porQue` | Prepara b4. |
| Siciliana Cerrada | `planesNegras` | ...Tb8, ...b5-b4 en el flanco de dama. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3"].porQue` | Siciliana Cerrada: sin d4; se prepara g3, Ag2, d3 y f4. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f2f4"].porQue` | Grand Prix: f4 prepara Cf3 y ataque en el flanco de rey. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6"].porQue` | La estructura típica: después vienen ...e6, ...Cge7 y ...Tb8 con ...b5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4"].porQue` | El plan de Spassky: f4 concentra las fuerzas en el flanco de rey. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e6"].porQue` | Lo más sólido: si g4, ...f5 frena el avance blanco. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g1e2"].porQue` | Un orden de jugadas tramposo: según lo que haga el negro, el blanco elige la Cerrada (g3) o pasa a una Siciliana abierta con d4. Rogozenko aconseja contestar con la jugada que encaje en la abierta que uno juega (...g6, ...e6 o ...d6 sirven también contra la Cerrada). |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g1e2 c6d4"].porQue` | La respuesta más directa, que es la preferida de Stockfish: si Cxd4 cxd4, el peón ataca al caballo de c3 y el blanco no consigue la abierta que buscaba. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e5 g1f3 g8e7"].porQue` | El caballo va a e7: desde ahí apoya ...f5 o ...d5 y no queda expuesto al avance f5 del blanco. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e5 g1f3 g8e7 e1g1 e8g8"].porQue` | El enroque natural; Stockfish prefiere aliviar la tensión con 8...exf4. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5"].porQue` | Una idea moderna del Gran Prix: el alfil sale a b5 antes de f4, para cambiarlo por el caballo de c6 si hace falta y dañar la estructura negra. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4"].porQue` | La respuesta más común: el caballo se instala en d4 y amenaza cambiar el alfil. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4"].porQue` | Jones prefiere volver a c4, donde el alfil apunta a f7: parece que se pierde un tiempo, pero el caballo de d4 también se movió dos veces y el blanco puede usarlo para acelerar el desarrollo (Cf3, 0-0, Cxd4). |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6"].porQue` | Cierra la diagonal del alfil de c4. La alternativa 4...g6 casi desapareció de la elite después de partidas como Svidler-Leko (Dortmund 2004). |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 e7e6"].porQue` | Prepara ...Cge7 y controla d5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 d7d6"].porQue` | Controla e5 y prepara ...Cf6. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 e7e6"].porQue` | Prepara ...d5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 e7e6 g2g3"].porQue` | Prepara el fianchetto para frenar ...d5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e5 g1f3 g8e7 e1g1 e8g8 c1e3 c6d4 d1d2 c8g4 f3h4"].porQue` | El caballo va a h4. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 g1e2 e7e5 e1g1 g8e7 c1e3 e8g8 d1d2"].porQue` | Prepara Ah6. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 c1e3 a8b8 d1d2"].porQue` | Prepara Ah6. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g1e2 c6d4 d2d3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6 g1e2 g8f6 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6 g1e2 g8f6 e1g1 a7a6 a2a4"].porQue` | Frena ...b5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6 g1e2 g8f6 e1g1 a7a6 a2a4 d7d5 e4d5 e6d5 c4a2 f8d6 d2d3 d4e6 e2g3"].porQue` | El caballo va a g3. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6 g1f3 g8f6 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 f1b5 c6d4 b5c4 e7e6 g1f3 g8f6 e1g1 a7a6 d2d3 b7b5 c4b3 d4b3 a2b3 c8b7 e4e5 f6d5"].porQue` | El caballo va a d5. |
| Siciliana Cerrada | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 e7e6 c1e3 c6d4 c3e2 g8e7 c2c3 d4e2 g1e2 b7b6"].porQue` | Prepara ...Ab7. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `planesBlancas` | Richter-Rauzer: Ag5, Dd2, O-O-O y f4, presionando d6; si Axf6 gxf6, atacar la estructura con f4-f5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `planesBlancas` | Sozin: Ac4-b3, f4-f5 contra e6 o e5; Velimirovic: De2, O-O-O y g4-g5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `planesNegras` | ...e6, ...a6, ...Ad7 y ...b5 en el flanco de dama. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `planesNegras` | Con la pareja de alfiles tras ...gxf6, preparar ...d5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2"].porQue` | La línea antigua: sana pero poco exigente. El negro elige su sistema: ...e6, ...g6 o ...e5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 e7e5"].porQue` | Variante Boleslavsky: acepta el hueco en d5 a cambio de juego activo y la ruptura ...d5 más adelante. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6"].porQue` | Lo más común contra el Rauzer: prepara ...Ae7 para romper la clavada. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6"].porQue` | Evita Cdb5 y prepara ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7 d1e2"].porQue` | El Ataque Velimirovic: De2 evita ...Cg4 y prepara el enroque largo y el avance g4-g5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 e7e5 d4b3 f8e7 e1g1 e8g8 c1e3 c8e6"].porQue` | El plan de Boleslavsky en acción: con el alfil en e6 y las piezas listas, el negro amenaza ...d5 y deja de tener un hueco en d5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 e7e5 d4b3 f8e7 e1g1 e8g8 f2f4 a7a5"].porQue` | Si las blancas impiden ...d5 con f4, el negro cambia de frente: ...a5-a4 y ...Cb4 en el flanco de dama. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 h7h6"].porQue` | Ahora sí tiene sentido: si Axf6, el negro recaptura con la dama y no se rompen sus peones; y 9.Ah4 Cxe4! no les conviene a las blancas. Las principales son 9.Ae3 y 9.Af4. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 h7h6 g5f4 c8d7"].porQue` | Ataca d6 con el alfil y obliga a una defensa ingeniosa: tras 10.Cxc6 Axc6 el peón de e4 queda atacado, y 11.f3 se contesta con ...d5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 d4b5 d8a5"].porQue` | La refutación del ataque directo contra d6: después de 10.Axf6 Axf6 11.Cxd6 Td8, el alfil de f6 y la clavada en la columna d valen más que el peón. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 d4b3 d8b6"].porQue` | Una versión más sutil de Cdb5 prepara Axf6, f3 y g4. La dama en b6 cubre d6 a la distancia; si 10.Axf6 Axf6 11.Dxd6, el negro recupera con ...Dxf2. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 f2f4 h7h6"].porQue` | La versión más fina del contragolpe ...e5: después de 10.Ah4 e5 11.Cf5 Axf5 12.exf5 exf4 el alfil de h4 ya no puede retomar en f4. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c4b3"].porQue` | La Sozin propiamente dicha: el alfil se retira antes de que lo ataquen ...Ca5 o ...b5, y sigue mirando a e6 y f7, el punto de rotura de f4-f5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 f2f4"].porQue` | Prepara e5 para abrir el centro contra el rey negro. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 f2f4 c6d4"].porQue` | Cambia caballos para aliviar la presión antes de ...Da5 o ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3"].porQue` | Desarrolla y prepara De2 con enroque largo (Velimirovic). |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7 c4b3"].porQue` | Retira el alfil antes de que lo ataquen con ...Ca5 o ...d5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7 c4b3 e8g8 e1g1 c6a5"].porQue` | Va a cambiar el alfil de b3, que apunta a e6. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7 c4b3 e8g8 e1g1 c6a5 f2f4"].porQue` | Prepara f5 o e5 para atacar. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c1e3 f8e7 c4b3 e8g8 e1g1 c6a5 f2f4 b7b6"].porQue` | Prepara ...Ab7 para presionar e4. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 e7e5 d4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 e7e6 c4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 c6d4 d2d4 a7a6"].porQue` | Controla b5 y prepara ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 c6d4 d2d4 a7a6 f2f4"].porQue` | Prepara el avance e5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 c8d7 f2f4 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6 f1c4 g7g6 d4c6 b7c6 e4e5"].porQue` | Ataca el caballo de f6 y busca ganar material. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 c8d7 f2f4 f8e7 d4f3 b7b5 g5f6 g7f6 c1b1 b5b4 c3e2 h7h5"].porQue` | Frena g4. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 c8d7 d1d2 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 c8d7 f2f4 f8e7 d4f3 b7b5 g5f6 g7f6 c1b1 d8b6 f4f5 e8c8 g2g3"].porQue` | Prepara Ah3. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 d8b6 d4b3 a7a6 e1c1 f8e7 f2f3 e8g8 h2h4 f8d8"].porQue` | La torre va a la columna d. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 d8b6 d4b3 f8e7 e1c1 e8g8 f2f3 f8d8"].porQue` | La torre va a la columna d. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 e7e6 d1d2 f8e7 e1c1 e8g8 d4b3 d8b6 f2f3 f8d8 c1b1 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 e7e5 d4b3 f8e7 e1g1 e8g8 f2f4 a7a5 a2a4"].porQue` | Frena ...a4. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 g2g3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 g2g3 g7g6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8"].porQue` | Prepara ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 g2g3 g7g6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8 a2a4"].porQue` | Frena ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 g2g3 g7g6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8 a2a4 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Clásica (Richter-Rauzer y Sozin) | `trampas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1c4 g7g6 d4c6 b7c6 e4e5 d6e5 c4f7 e8f7 d1d8"]` | Contra la Sozin, 6...g6?! permite 7.Cxc6 bxc6 8.e5!, y si 8...dxe5?? 9.Axf7+ Rxf7 10.Dxd8: el alfil de c4 y la dama en la columna d hacen el resto. (Después de 8.e5, lo mejor es 8...Cg4, con una posición algo peor pero jugable.) |
| Siciliana de los Cuatro Caballos | `planesBlancas` | Aprovechar d6: Cdb5 y Af4, o Cd6+ si el negro se descuida. |
| Siciliana de los Cuatro Caballos | `planesBlancas` | 6.Cxc6 bxc6 7.e5 Cd5 8.Ce4, con c4 para echar al caballo del centro. |
| Siciliana de los Cuatro Caballos | `planesNegras` | ...Ab4 para clavar el caballo de c3 y presionar e4. |
| Siciliana de los Cuatro Caballos | `estructura` | Peones negros en e6 y d7 con la casilla d6 sin cubrir por peones; tras 6.Cxc6 bxc6, el negro tiene un centro de peones (c6, d7, e6) a cambio de la estructura del flanco de dama. |
| Siciliana de los Cuatro Caballos | `rupturas` | e5 y c4 del blanco en la línea 6.Cxc6. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4c6"].porQue` | Para Stockfish la más fuerte, y una alternativa importante a 6.Cdb5 desde los años 70: tras 6...bxc6 7.e5! Cd5 8.Ce4, el negro tiene que actuar antes de que llegue c4. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4c6 b7c6 e4e5 f6d5 c3e4 d8c7"].porQue` | La opción más popular: ataca e5. Tras 9.f4 Db6 10.c4, ...Ab4+ o ...Ce3 llevan a un juego muy agudo. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4b5"].porQue` | La primera idea que viene a la cabeza: el caballo apunta a d6, la debilidad del negro. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4b5 f8b4 a2a3 b4c3 b5c3 d7d5"].porQue` | El negro aprovecha el cambio para avanzar en el centro: tras 9.exd5 exd5 10.Ad3 O-O 11.O-O d4, el peón de d4 domina. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4b5 f8b4 a2a3 b4c3 b5c3 d7d5"].porQueNo["d8a5"]` | 8...Da5? 9.Ad3 y la ruptura ...d5 llega tarde. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4b5 d7d6"].porQue` | Otra forma de cubrir d6: es el camino al Sveshnikov que evita la Rossolimo y la línea 7.Cd5. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 a2a3"].porQue` | Prudente: quita b4 al alfil, pero 6...Dc7 o 6...d6 llevan a líneas inofensivas de la Taimanov o la Scheveningen. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4c6 b7c6 e4e5 f6d5 c3e4 d8c7 f2f4 c7b6"].porQue` | La dama ataca b2 y vigila g1: impide que el blanco desarrolle tranquilo. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4b5 f8b4 c1f4 f6e4 d1f3 d7d5 b5c7 e8f8"].porQue` | Sale del jaque; el caballo de c7 amenaza la torre, pero el rey blanco queda en el centro. |
| Siciliana de los Cuatro Caballos | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 f1e2 f8b4 e1g1 b4c3 b2c3 f6e4 e2d3 d7d5 c1a3"].porQue` | El alfil impide el enroque. |
| Siciliana Dragón | `planesBlancas` | Ataque Yugoslavo: Ae3, f3, Dd2, enroque largo, h4-h5 y Ah6. |
| Siciliana Dragón | `planesBlancas` | Ac4 para impedir ...d5 y apuntar a f7. |
| Siciliana Dragón | `planesNegras` | Columna c: ...Tc8, ...Ce5-c4 y el sacrificio ...Txc3. |
| Siciliana Dragón | `rupturas` | ...d5, ...b5 y ...Txc3 del negro. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3"].porQue` | Prepara Dd2, f3 y enroque largo: el Ataque Yugoslavo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3"].porQueNo["f2f4"]` | Prematuro: el negro se desarrolla con ...Cc6 y ...Ag7 y el peón de e4 queda flojo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3"].porQue` | Sostiene e4 e impide ...Cg4, que molestaría al alfil de e3. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8"].porQue` | Enroca: el contraataque del negro va a ir por la columna c. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8"].porQueNo["d6d5"]` | e5 echa al caballo antes de que el negro esté preparado. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2"].porQue` | Prepara Ah6 para cambiar el alfil del Dragón y el enroque largo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6"].porQueNo["c8e6"]` | Enroque largo y Cxe6: tras ...fxe6 el peón de e6 queda débil. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4"].porQue` | Ataque Yugoslavo con Ac4: impide ...d5 y apunta a f7. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 e1c1"].porQue` | Enroque largo inmediato: si ...d5, el juego se abre enseguida. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 e1c1 d6d5"].porQue` | El contragolpe típico contra el enroque largo inmediato: si las blancas ganan el peón de d5, el negro obtiene las columnas b y c y la diagonal larga. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f2f4 b8c6"].porQue` | Una de las armas más viejas contra el Dragón castiga el descuido del centro: 6...Ag7 7.e5. Con 6...Cc6 el negro le enfría el entusiasmo a las blancas. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3 b8c6 f1g2 c6d4 d1d4 f8g7 e1g1 e8g8"].porQue` | Contra el fianchetto, la idea es cambiar en d4 y seguir con ...Ae6, que amenaza ...Cd5 y obliga a la dama a retirarse. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3 b8c6 d4e2"].porQue` | Si las blancas no quieren el cambio en d4, retiran el caballo. El negro sigue con ...Ag7, enroque, ...Tb8 y ...b5-b4. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1c4 f8g7 e1g1 b8c6 c1e3 e8g8 c4b3"].porQue` | La retirada habitual, antes de jugar f4. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1c4 f8g7 e1g1 b8c6 c1e3 e8g8 c4b3"].porQueNo["f2f4"]` | 9.f4 Db6: tres amenazas a la vez (...Dxb2, ...Cxe4 y ...Cg4), y las blancas no pueden cubrir todo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 e1c1 d6d5 e4d5 f6d5 d4c6 b7c6 e3d4"].porQue` | Lo más prudente: en vez de tomar el peón, las blancas buscan cambiar el alfil del Dragón. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 e1c1 c6d4 e3d4 c8e6"].porQue` | La alternativa a 9...d5: cambio en d4 y ...Ae6, el comienzo de otra familia de variantes muy agudas. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 e1c1 a8c8 c4b3 c6e5 h2h4"].porQue` | La línea principal del Yugoslavo con 9.Ac4: las blancas abren la columna h y el negro tiene que elegir entre ...h5 y ...Cc4 con el sacrificio de calidad en c3 en el horizonte. Stockfish prefiere primero 12.Rb1, que saca al rey de la diagonal antes de atacar. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 e1c1 a8c8 c4b3 c6e5 h2h4 h7h5"].porQue` | Frena el avance h5 y cierra el flanco de rey, a costa de dejar g5 como blanco para las piezas blancas. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 e1c1 a8c8 c4b3 c6d4 e3d4 b7b5"].porQue` | El plan simple que se puso de moda: cambio en d4 y ...b5 para abrir líneas contra el rey blanco cuanto antes. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 e1c1 d8a5"].porQue` | La dama a a5 para sumar fuego con ...Tfc8 en el flanco de dama. Es una línea analizada hasta el último detalle, con sacrificios en c3 y en h5 por ambos lados. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f1e2 b8c6 d1d2"].porQue` | Prepara el enroque largo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3"].porQue` | Prepara el fianchetto para defender e4. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f2f4"].porQue` | Gana espacio y prepara e5: es el Ataque Levenfish. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7"].porQue` | Desarrolla y prepara ...Tc8 para presionar la columna c. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 b8c6 d4b3 c8e6 f2f4"].porQue` | Gana espacio y prepara f5. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 b8c6 d4b3 c8e6 f2f4 c6a5 f4f5 e6c4"].porQue` | El alfil se va a c4 para cambiarse por el de e2. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 b8c6 d4b3 c8e6 f2f4 c6a5 f4f5 e6c4 e2d3"].porQue` | Evita el cambio de alfiles y defiende e4. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 h2h4 d8a5"].porQue` | Activa la dama en el flanco de dama, donde va a atacar. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 c8d7"].porQue` | Desarrolla y prepara ...Cc6. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 b8c6 f2f3 h7h5"].porQue` | Frena g4 y el avance de los peones blancos. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 b8c6 f2f3 h7h5 f1c4 c8d7 d1d2"].porQue` | Prepara el enroque largo. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c6d4 e3d4 c8e6 c4b3 d8a5 e1c1 f8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 a7a5"].porQue` | Amenaza ...a4 contra el alfil. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 f1e2 f8g7 e1g1 e8g8 c1e3 b8c6 d1d2 c8d7 a1d1 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3 b8c6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8"].porQue` | Prepara ...b5. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3 b8c6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8 a2a4"].porQue` | Frena ...b5. |
| Siciliana Dragón | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 g2g3 b8c6 d4e2 f8g7 f1g2 e8g8 e1g1 a8b8 a2a4 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Kan (Paulsen) | `planesBlancas` | Ad3, O-O y c4 para una estructura Maroczy contra el erizo. |
| Siciliana Kan (Paulsen) | `planesBlancas` | Con Cc3, desarrollo normal; el negro puede pasar a la Taimanov o a la Scheveningen. |
| Siciliana Kan (Paulsen) | `planesNegras` | ...Dc7, ...b5 y ...Ab7 contra e4; ...b4 para echar al caballo de c3. |
| Siciliana Kan (Paulsen) | `planesNegras` | Atacar el caballo de d4 con ...Ac5 o ...Cc6 cuando el alfil blanco está en d3. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3"].porQue` | La prueba principal: protege e4 y deja abierta la posibilidad de c4. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3"].porQueNo["f2f3"]` | Pasivo: ...Cf6 y ...d5 y el negro iguala sin problemas. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 f8c5"].porQue` | Aprovecha que nadie protege al caballo de d4: lo ataca y después decide dónde dejar el alfil. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8f6 e1g1 d8c7"].porQue` | El esquema más moderno: deja abierta la diagonal a3-f8 y sigue amenazando ...Cc6 o ...Ac5. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 b8c6 d4c6"].porQue` | La prueba crítica contra 5...Cc6: si ...bxc6, O-O y c4 contra el centro negro. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3"].porQue` | Desarrollo sano; el negro puede pasar a la Taimanov (...Cc6) o a la Scheveningen (...d6). |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3 b7b5"].porQue` | El plan más directo: ...Ab7 y ...b4 contra el peón de e4. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 c2c4"].porQue` | Estructura Maroczy: más espacio, aunque contra la Kan no se considera tan peligrosa como parece. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 c2c4 g8f6 b1c3 d8c7"].porQue` | Impide e5 y deja al rival adivinando: el alfil irá a b4 contra Ae2, a c5 contra Ad3, o se queda esperando mientras el negro juega ...b6 y ...Ab7. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3 d8c7 f1e2 b7b5"].porQue` | Con el alfil en e2, el peón de e4 está más flojo que con Ad3: ...b5, ...Ab7 y ...b4 lo atacan con más fuerza. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3 b7b5 f1d3 d8b6 c1e3 f8c5 d1g4"].porQue` | El hallazgo increíble de alrededor de 2000: 8...Axd4 9.e5! y si 9...Axe3 10.Dxg7 Axf2+ 11.Rf1, el negro tiene dos piezas de más pero su posición está a punto de derrumbarse. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 b8c6 d4c6 d7c6"].porQue` | A diferencia de la Taimanov con 5.Cc3 a6 6.Cxc6, acá no hay cambio de damas en d8 que incomode al rey negro. Sigue ...e5, con una estructura simétrica que pide comprensión posicional a los dos. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 f8c5 d4b3 c5e7"].porQue` | Lo más jugado hoy: el negro se conforma con haber echado al caballo y deja que las blancas elijan entre un erizo con c4 o una especie de Scheveningen con Cc3. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 f8c5 d4b3 c5a7"].porQue` | La versión antigua: el plan blanco típico es cambiar el alfil de a7 con De2, Ae3 y Axa7. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8e7"].porQue` | Más flexible de lo que parece: según lo que haga el blanco, el negro juega ...Cbc6 (y retoma en c6 con el otro caballo) o ...Cec6 y el otro caballo a d7. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g7g6"].porQue` | Todos los peones en casillas claras: la favorita de los estetas, pero también fuerte. El alfil va a g7 contra el caballo de d4 y el negro prepara ...Cge7 y ...d5. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3 b7b5 g2g3"].porQue` | Prepara el fianchetto. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 b8c6 d4c6 d7c6 b1d2 e6e5 d2c4"].porQue` | El caballo va a c4. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 f8c5 d4b3 c5e7 d1g4 g7g6 g4e2 d7d6 e1g1 b8d7 b1c3 d8c7 c1d2 b7b6"].porQue` | Prepara ...Ab7. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8f6 e1g1 d7d6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8f6 e1g1 d7d6 c2c4 g7g6 b1c3 f8g7 c1e3 e8g8 a1c1"].porQue` | La torre va a la columna c. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8f6 e1g1 d8c7 d1e2 d7d6 c2c4 f8e7 b1c3 e8g8 f2f4 b8d7 g1h1 b7b6"].porQue` | Prepara ...Ab7. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8e7 e1g1 b8c6 d4b3 e7g6"].porQue` | El caballo va a g6. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8f6 e1g1 d8c7 d1e2 d7d6 c2c4 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8e7 e1g1 b8c6 d4b3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 f1d3 g8e7 e1g1 e7c6"].porQue` | El caballo va a c6. |
| Siciliana Kan (Paulsen) | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6 b1c3 b7b5 g2g3 c8b7 f1g2 g8f6 a2a3"].porQue` | Frena ...b4. |
| Siciliana Moscú (3.Ab5+) | `planesNegras` | Igualar con ...Axd7, ...Cf6 y ...g6 o ...e6. |
| Siciliana Moscú (3.Ab5+) | `planesNegras` | Con ...Cd7, conservar los alfiles. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5"].porQue` | Jaque que evita las líneas abiertas de la Najdorf y el Dragón. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7"].porQue` | Lo más sólido: ofrece cambiar alfiles. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7"].porQue` | Cambia alfiles. Después las blancas eligen entre c4 (estructura Maroczy) y c3 con d4. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8d7 d2d4 g8f6 e1g1"].porQue` | La idea del repertorio de Jones: enroca y deja el peón de e4 en el aire. Si el negro lo toma, la columna e se abre contra su rey sin enrocar. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 b8c6 c2c3 g8f6 d2d4"].porQue` | La forma aguda: si 7...Cxe4, 8.d5 y Te1, y las blancas tienen una ventaja de desarrollo considerable por el peón. La forma prudente es 7.De2 o 7.Te1, preparando d4. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 g8f6 d1e2 b8c6 f1d1"].porQue` | La idea sutil que recomienda Jones: esperar a que el negro se defina. Si juega ...e6, las blancas arman el Maroczy con c4 y presionan d6; si juega ...g6, rompen con c3 y d4. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8d7 d2d4 g8f6 b1c3"].porQue` | El desarrollo simple que propone FCO: si 5...cxd4 6.Dxd4, las blancas siguen desarrollándose. El negro esperaba ganar la pareja de alfiles con ...a6, pero eso no es una ventaja por sí solo. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8c6 b5c6"].porQue` | La Variante Híbrida: el cambio en c6 (lo jugó Rublevsky y lo recomienda Jones) deja al negro con la pareja de alfiles y desarrollo rápido, pero con los peones doblados. Stockfish prefiere algo más 4.O-O, la jugada principal. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8c6 b5c6 b7c6 e1g1"].porQue` | Primero el rey a salvo; después c3 y d4, o Te1 y e5 según lo que haga el negro. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8c6 e1g1 c8d7 d1e2"].porQue` | Prepara c3 y d4. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8c6 e1g1 c8d7 d1e2 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 b8c6 c2c3 g8f6 d2d4 f6e4 d4d5 c6e5"].porQue` | El caballo va a e5. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 c2c4 b8c6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 c2c4 b8c6 b1c3 g7g6 d2d4 c5d4 f3d4 f8g7 c1e3 g8f6 f2f3 e8g8 e1g1 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 c2c4 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 b8c6 c2c3 g8f6 d2d4 c5d4 c3d4 d6d5 e4e5 f6e4 f3e1"].porQue` | Prepara f3 para echar al caballo. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 g8f6 d1e2 b8c6 f1d1 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 b8d7 e1g1 g8f6 d1e2 e7e6 b2b3"].porQue` | Prepara Ab2. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 b8d7 e1g1 g8f6 d1e2 e7e6 b2b3 f8e7 c1b2 e8g8 c2c4 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Moscú (3.Ab5+) | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 b8d7 d2d4 g8f6 e1g1 c5d4 d1d4 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `planesBlancas` | Ataque Inglés: Ae3, f3, Dd2, enroque largo y avance g4-g5. |
| Siciliana Najdorf | `planesBlancas` | Con Ag5 y f4: presión central y ataque rápido. |
| Siciliana Najdorf | `planesBlancas` | Con Ae2 y enroque corto: dominar d5 si el negro juega ...e5. |
| Siciliana Najdorf | `planesNegras` | Expansión en el flanco de dama con ...b5, ...Ab7 y la columna c. |
| Siciliana Najdorf | `planesNegras` | Con ...e5: ganar espacio y vigilar d5 con ...Ae6. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5"].porQue` | La línea más aguda: clava el caballo y prepara f4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1e3 e7e5 d4b3 c8e6 f2f3"].porQue` | Sostiene e4 y prepara Dd2, enroque largo y g4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1e3 e7e5 d4b3 c8e6 f2f3 f8e7"].porQue` | Desarrolla y prepara el enroque; después vendrá ...b5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4"].porQue` | Prepara e5 y el ataque contra el rey. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 d8b6"].porQue` | El Peón Envenenado: ataca b2 y d4. Si Dd2 Dxb2, el juego es muy agudo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1e3 f6g4"].porQue` | Ataca al alfil antes de que las blancas jueguen f3. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 a2a3"].porQue` | Un eco de 5...a6, con una idea: cubre b4 contra ...b5-b4 y, si el negro juega la típica ...e5, el blanco pelea por d5 con Ac4 y Ag5 sin haber gastado un tiempo en Ae2 o Ae3. La jugaron Short y Dvoiris (Bosch). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 d8c7 e1c1 b8d7 g2g4"].porQue` | La línea principal contra la defensa clásica: si 10...b5, las blancas atacan el puesto central de e6 con Axf6, g5 y f5, y no les importa entregar el peón de g5 si así abren la columna g. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 h7h6 g5h4 g7g5"].porQue` | La Variante de Gotemburgo: el negro abre él mismo el flanco de rey, rompe la clavada y, después de 10.fxg5 Cfd7, busca la casilla e5. Arriesgadísima, pero hasta hoy no refutada. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8d7 d1f3 d8c7"].porQue` | Ahorra ...Ae7 para llegar antes con ...b5 y desactivar los planes más peligrosos de las blancas. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8d7 d1f3 d8c7"].porQueNo["b7b5"]` | Antes de tiempo: 9.e5! abre el centro con el rey negro todavía en e8. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b7b5"].porQue` | La Variante Polugaevsky: ...b5 de inmediato, sin ninguna preparación. Tan complicada que hay muchísimo análisis y muy pocas partidas; el propio Polugaevsky la estudió medio año antes de jugarla. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b7b5 e4e5 d6e5 f4e5 d8c7"].porQue` | El punto de la Polugaevsky: si 10.exf6, la dama recupera la pieza con jaque en e5. El milagro es que el negro aguanta pese a su enorme atraso en el desarrollo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 d8b6 d1d2 b6b2"].porQue` | El Peón Envenenado aceptado: el negro come y las blancas tienen una gran ventaja en desarrollo (siguen 9.Tb1 o 9.Cb3, con la amenaza a3 y Ta2 para encerrar a la dama). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3"].porQue` | Prepara el enroque largo y presiona el flanco de rey. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b7b5 e4e5 d6e5 f4e5 d8c7 d1e2"].porQue` | Defiende e5 y prepara el enroque largo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 b8d7"].porQue` | Refuerza el caballo de f6 y prepara ...e6 o ...Da5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 b8d7 f1c4 d8a5 d1d2"].porQue` | Defiende el caballo de c3 y prepara el enroque largo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 b8d7 f1c4 d8a5 d1d2 e7e6 e1c1 b7b5 c4b3 c8b7 h1e1"].porQue` | Pone la torre en la columna e para preparar un sacrificio en e6 o d5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 b8d7 f1c4 d8a5 d1d2 e7e6 e1c1 b7b5 c4b3 c8b7 h1e1 d7c5 e4e5"].porQue` | Según Stockfish es un error: era mejor 12. Axf6 (+0,9 contra −0,4, para el bando que juega). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8d7"].porQue` | Refuerza el caballo de f6 y prepara ...Dc7. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8d7 d1f3"].porQue` | Prepara el enroque largo y presiona f6. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1e2 e7e5 d4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1c4 e7e6 c4b3"].porQue` | Retira el alfil antes de que ...b5 lo eche. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f2f4"].porQue` | Gana espacio y prepara e5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 h7h6 g5h4 d8c7 e1c1 b8d7 f1e2 a8b8 f3g3 h8g8"].porQue` | Según Stockfish es un error: era mejor 12... O-O (−1,1 contra −2,0, para el bando que juega). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 d8c7 e1c1 b8d7 g2g4 h7h6"].porQue` | Frena g5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 d8c7 e1c1 b8d7 g2g4 h7h6 g5f6 e7f6 h2h4"].porQue` | Prepara g5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 f8e7 d1f3 d8c7 e1c1 b8d7 g2g4 h7h6 g5f6 e7f6 h2h4 d7b6"].porQue` | El caballo va a c4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b7b5 e4e5 d6e5 f4e5 d8c7 d1e2 f6d7 e1c1 c8b7 e2g4 c7e5"].porQue` | Según Stockfish es un error: era mejor 12... Db6 (−0,6 contra −2,3, para el bando que juega). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 d8b6 d1d2 b6b2 a1b1 b2a3 e4e5 d6e5 f4e5 f6d7 c3e4"].porQue` | El caballo va a e4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 f8e7 f2f3 c8e6 d1d2"].porQue` | Prepara el enroque largo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8c6"].porQue` | Según Stockfish es un error: era mejor 7... Db6 (−0,1 contra −1,2, para el bando que juega). |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8c6 d4c6 b7c6 e4e5 h7h6 g5h4 g7g5 f4g5 f6d5"].porQue` | El caballo va a d5. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1g5 e7e6 f2f4 b8c6 d4c6 b7c6 e4e5 h7h6 g5h4 g7g5 f4g5 f6d5 c3e4"].porQue` | El caballo va a e4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 f8e7 f2f3 c8e6 d1d2 h7h5"].porQue` | Frena g4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 c8e6 f2f3 h7h5"].porQue` | Frena g4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 c8e6 f2f3 h7h5 c3d5 e6d5 e4d5 b8d7 d1d2"].porQue` | Prepara el enroque largo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 c8e6 f2f3 h7h5 c3d5 e6d5 e4d5 b8d7 d1d2 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 c1e3 e7e5 d4b3 c8e6 h2h3 f8e7 d1f3 e8g8 g2g4 a6a5 f1b5 b8a6"].porQue` | El caballo va a c7. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1e2 e7e5 d4b3 f8e7 e1g1 c8e6 f2f4 d8c7 f4f5 e6c4"].porQue` | El alfil va a c4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1e2 e7e5 d4b3 f8e7 e1g1 c8e6 c1e3 e8g8 d1d2 b8d7 a2a4 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f2f4 e7e6 f1e2 d8c7 e1g1 b8c6 c1e3 f8e7 a2a4 e8g8 g1h1 f8e8 e2f3 a8b8"].porQue` | La torre va a b8. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f2f4 e7e6 f1e2 d8c7 e1g1 b8c6 c1e3 f8e7 g1h1 e8g8 d1e1"].porQue` | La dama va a g3 por e1. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1c4 e7e6 c4b3 b7b5 c1g5 f8e7 d1f3"].porQue` | Prepara el enroque largo. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 h2h3 e7e5 d4e2 h7h5"].porQue` | Frena g4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 h2h3 e7e5 d4e2 h7h5 c1g5 c8e6 g5f6 d8f6 c3d5 f6d8 d1d3 b8d7 e1c1 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 g2g3"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 g2g3 e7e5 d4b3 f8e7 f1g2 e8g8 e1g1 c8e6 a2a4 b8d7 f1e1 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 h2h3 e7e5 d4e2 h7h5 g2g3"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 h1g1"].porQue` | Prepara g4. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1d3 e7e5 d4e2 f8e7 e1g1 e8g8 e2g3"].porQue` | El caballo va a g3. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 f1d3 e7e5 d4e2 f8e7 e1g1 e8g8 e2g3 c8e6 c3d5 e6d5 e4d5 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Najdorf | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6 g2g4"].porQue` | Según Stockfish es un error: era mejor 6. Ae3 (+0,3 contra −0,8, para el bando que juega). |
| Siciliana Rossolimo | `planesBlancas` | Axc6 para doblar peones y jugar contra ellos. |
| Siciliana Rossolimo | `planesBlancas` | Enroque, Te1, c3 y d4. |
| Siciliana Rossolimo | `planesNegras` | Fianchetto con ...g6 y ...Ag7. |
| Siciliana Rossolimo | `estructura` | Si Axc6, peones negros doblados en c; el negro gana la pareja de alfiles. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5"].porQue` | Rossolimo: amenaza cambiar en c6 para doblarle peones al negro y evita las líneas abiertas. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6"].porQue` | Fianchetto: el alfil de g7 compensa si las blancas cambian en c6. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6"].porQue` | La alternativa: prepara ...Cge7 para retomar en c6 con pieza. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 e1g1"].porQue` | Enroca antes de decidir si cambia en c6. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 b7c6"].porQue` | También bueno: retoma hacia el centro y prepara ...d5. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 e1g1 f8g7 f1e1"].porQue` | Sostiene e4 y prepara c3 y d4. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6 e1g1 g8e7"].porQue` | Prepara ...a6 y poder retomar en c6 con el caballo. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 b7c6 e1g1"].porQue` | Enroca y prepara Te1 y e5: la idea es abrir el centro antes de que el negro aproveche la pareja de alfiles. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 b7c6 e1g1 f8g7 f1e1 d7d6 e4e5"].porQue` | Jones lo marca como el plan correcto: después de ...dxe5 Cxe5, los peones de c doblados del negro quedan aislados y las blancas tienen una ventaja estructural duradera. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 b7c6 e1g1 f8g7 f1e1 e7e5 b2b4"].porQue` | El sacrificio posicional de Fischer: si ...cxb4, a3 abre la columna a y el alfil de c1 gana la gran diagonal, con las casillas oscuras del centro (d6) a su alcance. Stockfish lo considera tan bueno como el normal c3. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6 e1g1 g8e7 f1e1 a7a6 b5f1"].porQue` | Conserva el alfil y prepara c3 y d4. La otra opción es cambiar en c6 y abrir el centro con d4, apostando a la ventaja de desarrollo. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6 b5c6 b7c6 d2d3 g8e7"].porQue` | El caballo va a g6 para controlar e5 y f4, la casilla del avance blanco. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 d7d6 e1g1 c8d7 f1e1 g8f6 c2c3 a7a6 b5f1"].porQue` | La retirada restringida: conserva el alfil. El negro suele responder ...Ag4 para frenar d4. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 e1g1 f8g7 c2c3"].porQue` | La forma clásica: prepara d4. 5.Te1 es más flexible. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6 e1g1"].porQue` | Enroca y prepara Te1 y c3. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 e7e6 e1g1 g8e7 f1e1"].porQue` | Prepara d4 o c3 y d4. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 c6a5"].porQue` | Evita el cambio en c6 y amenaza ...a6 y ...b5. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 c6a5 b2b4"].porQue` | Según Stockfish es un error: era mejor 4. O-O (+0,9 contra +0,1, para el bando que juega). |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 d7d6"].porQue` | Prepara ...Ad7 para no doblar los peones. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 d7d6 e1g1 c8d7 f1e1"].porQue` | Prepara c3 y d4. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 d7d6 e1g1 c8d7 f1e1 g8f6 c2c3"].porQue` | Prepara d4. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 e1g1 f8g7 f1e1 e7e5"].porQue` | Controla d4 y frena el avance e5. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 d7c6 d2d3 f8g7 h2h3 g8f6 b1c3 e8g8 c1e3 b7b6"].porQue` | Prepara ...Aa6. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 d7c6 d2d3 f8g7 h2h3 g8f6 b1c3 e8g8 c1e3 b7b6 d1d2"].porQue` | Prepara Ah6. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 g7g6 b5c6 d7c6 d2d3 f8g7 h2h3 g8f6 b1c3 f6d7 c1e3 e7e5 d1d2 h7h6 e1g1 d8e7 f3h2 d7f8"].porQue` | El caballo va a e6. |
| Siciliana Rossolimo | `notas["e2e4 c7c5 g1f3 b8c6 f1b5 d7d6 e1g1 c8d7 f1e1 g8f6 c2c3 a7a6 b5f1 d7g4 h2h3 g4f3 d1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Siciliana Scheveningen | `planesBlancas` | Clásica: Ae2, O-O, f4, Ae3 y Rh1, con paciencia; o f4 con Df3 y g4. |
| Siciliana Scheveningen | `planesNegras` | ...a6, ...Dc7, ...b5 y ...Ab7 en el flanco de dama. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4"].porQue` | El Ataque Keres: gana espacio y amenaza g5 para echar al caballo que defiende el centro. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6"].porQue` | La respuesta más común: frena g5 por ahora. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 c1e3"].porQue` | Desarrollo flexible: puede seguir con f3, Dd2 y g4 (al estilo del Ataque Inglés). |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f3"].porQue` | Prepara g4 y Ae3: el mismo plan que el Ataque Inglés. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f1e2"].porQue` | La Scheveningen Clásica: desarrollo sin pretensiones (Ae2, enroque corto, f4, Rh1) y ataque recién cuando todo está en su lugar. Es el terreno de las finezas de orden de jugadas. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f1e2 b8c6 e1g1 f8e7 g1h1 e8g8 f2f4 d8c7 d4b3 a7a6 a2a4"].porQue` | El plan con el que Maróczy le ganó a Euwe en Scheveningen, 1923: a4 frena ...b5, el contrajuego natural del negro en el flanco de dama, y el alfil de c1 se queda en casa para no ofrecer un blanco a ...Ca5 o ...Ce5-c4. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6 h2h4"].porQue` | La línea principal moderna contra 6...h6: las blancas preparan Tg1 y recién después g5, para abrir la columna h sin romper su cadena de peones. Si llegan a g5 y g6, el enroque corto deja de ser una opción para el negro. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6 h2h4 b8c6 h1g1"].porQue` | Prepara g5 con la torre ya en la columna g. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6 h2h4 b8c6 h1g1 h6h5"].porQue` | La más jugada en la práctica: si 9.g5, el caballo no se repliega a d7 sino que salta a g4. Stockfish la ve algo inferior a 8...d5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6 g4g5 h6g5 c1g5"].porQue` | La vieja línea principal: el alfil queda clavado en g5, como en el Richter-Rauzer, pero la cadena de peones blancos del flanco de rey quedó rota. Por eso el negro puede hasta enrocar largo y buscar luego la ruptura ...d5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 b8c6 g4g5 f6d7 c1e3 f8e7 h2h4 e8g8"].porQue` | Enrocar «hacia el ataque» parece temerario, pero el rey tampoco estaba seguro en e8, y así el negro completa el desarrollo con armonía y busca su juego con ...a6, ...Cxd4 y ...b5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f4"].porQue` | Hasta la llegada del Keres era la forma más directa de atacar la Scheveningen: Df3, Ae3, enroque largo y luego e5, f5 o g4-g5 como ariete. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f4 b8c6 c1e3 e6e5"].porQue` | La versión más reciente del contragolpe central ...e5: el negro lo juega cuanto antes, antes de que las blancas completen Df3 y el enroque largo. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f4 a7a6 d1f3 d8c7"].porQue` | Prepara ...b5: con la dama en c7, el avance e5 no llega con tanta fuerza. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f4 a7a6 d1f3 d8c7"].porQueNo["b7b5"]` | Antes de tiempo: 8.e5! ataca la torre de a8 a través de la gran diagonal y el caballo de f6 no tiene buena casilla. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g3 b8c6 f1g2 c8d7"].porQue` | Contra el fianchetto, un esquema tranquilo: ...Ad7 evita la idea Cxc6 seguida de bxc6 y e5, que dejaría al negro con el caballo de f6 sin casilla. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 c1g5 f8e7 d1d2"].porQue` | La jugada del Richter-Rauzer, pero acá sin el caballo en c6 las blancas no tienen los recursos típicos contra d6 (Cdb5 o Cxc6 con Axf6), y el negro juega ...a6 y ...b5 en mejores condiciones. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 h7h6 h2h4 b8c6 h1g1 d6d5"].porQue` | La reacción central que FCO considera crítica y la primera de Stockfish: contra un ataque de flanco, abrir el centro. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f2f4 b8c6 c1e3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f1e2 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g3"].porQue` | Prepara el fianchetto para defender e4. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 b8c6 g4g5 f6d7 c1e3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 b8c6 g4g5 f6d7 c1e3 f8e7 h2h4 e8g8 d1d2"].porQue` | Prepara el enroque largo. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 b8c6 g4g5 f6d7 c1e3 f8e7 h2h4 e8g8 d1d2 a7a6"].porQue` | Prepara ...b5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 a7a6 g4g5 f6d7 c1e3 b7b5 a2a3"].porQue` | Frena ...b4. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 a7a6 g4g5 f6d7 c1e3 b7b5 a2a3 c8b7 h2h4 d7b6"].porQue` | El caballo va a b6. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 a7a6 g4g5 f6d7 c1e3 b7b5 a2a3 d7b6"].porQue` | El caballo va a b6. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 f1e2 f8e7 e1g1 e8g8 f2f4 b8c6 c1e3 c8d7 d4b3 a7a6 a2a4"].porQue` | Frena ...b5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 c1g5 f8e7 d1d2 a7a6 e1c1 b7b5 a2a3"].porQue` | Frena ...b4. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 c1e3 a7a6 f2f3 b7b5 d1d2 b8d7 g2g4 h7h6"].porQue` | Frena g5. |
| Siciliana Scheveningen | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 c1e3 a7a6 f2f3 b7b5 g2g4 h7h6"].porQue` | Frena g5. |
| Siciliana Sveshnikov | `planesBlancas` | Dominar d5 con un caballo (Ag5xf6 y Cd5). |
| Siciliana Sveshnikov | `estructura` | Peones negros en d6 y e5: d5 es un agujero, d6 un peón retrasado. A menudo ...gxf6 tras Axf6. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5"].porQue` | El caballo va a b5 con la amenaza de Cd6+. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 b7b5"].porQueNo["d6d5"]` | Cxd5: la ruptura llega antes de tiempo. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 b7b5 c3d5"].porQue` | La alternativa tranquila: ocupa d5 sin cambiar en f6. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 b7b5 c3d5 f8e7"].porQue` | Prepara cambiar el alfil de g5; tras Axf6 Axf6, el alfil negro llega a la diagonal c1-h6. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 a2a4"].porQue` | Un intento de desactivar el Sveshnikov: tras ...a6 Ca3, el avance ...b5 ya no es posible y el caballo irá por c4 a e3 para dominar d5. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 a2a4 a7a6 b5a3 c8e6"].porQue` | El negro se desarrolla con comodidad: sigue ...Tc8 y quizás ...Cd4. El plan blanco no crea peligros inmediatos. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5"].porQue` | El caballo va a b5 apuntando a d6. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 c8e6 a3c4 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 c8e6 a3c4 a8c8 g5f6 g7f6 c4e3"].porQue` | El caballo va a e3. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 c1g5 a7a6 b5a3 c8e6 a3c4 a8b8"].porQue` | La torre va a b8. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 a2a4 a7a6 b5a3 c8e6 c1g5 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Sveshnikov | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e5 d4b5 d7d6 a2a4 a7a6 b5a3 c8e6 f1c4 a8c8"].porQue` | La torre va a la columna c. |
| Siciliana Taimanov | `planesBlancas` | Desarrollo clásico (Ae2, O-O, Ae3, f4) o Ataque Inglés (Ae3, Dd2, O-O-O, f3, g4). |
| Siciliana Taimanov | `planesBlancas` | Con Cb5 y c4, armar una estructura de tipo erizo con ventaja de espacio. |
| Siciliana Taimanov | `planesNegras` | ...Dc7, ...a6, ...Cf6 y, según convenga, ...Ab4, ...Ac5 o ...d6 (Scheveningen). |
| Siciliana Taimanov | `planesNegras` | Cambiar en d4 con ...Cxd4 y jugar ...b5 en el flanco de dama. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7"].porQueNo["b7b6"]` | Cdb5: amenaza Cd6+ y el negro no llega a cubrirse bien. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 c1e3"].porQue` | Desarrollo flexible: puede seguir con Dd2 y enroque largo o con Ad3 y enroque corto. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 c1e3"].porQueNo["d4e2"]` | ...a6 y ...b5: retirada pasiva que le cede la iniciativa al negro. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 c1e3 a7a6 f1d3"].porQue` | Protege e4 y prepara el enroque corto: posición común a la Taimanov y a la Kan. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2"].porQue` | El método clásico: Ae2, O-O, Ae3 y f4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5"].porQue` | Prepara c4 cuando el negro juegue ...d6: estructura de tipo erizo con ventaja de espacio. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5 d7d6 c2c4"].porQue` | La estructura Maroczy: más espacio para las blancas; el negro buscará ...b5 o ...d5 más adelante. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 a7a6"].porQue` | Prepara ...b5 y, sobre todo, la maniobra delicada ...Cge7, ...Cxd4 y ...Cc6: el caballo de rey llega a c6 después de cambiar el de d4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 a7a6 f1e2 g8e7 c1e3 c6d4 d1d4 b7b5"].porQue` | Cambiado el caballo de d4, el negro alivió la presión y tiene un plan claro en el flanco de dama: ...Ab7, ...Cc6, ...Tc8 y a veces ...Ca5-c4. El blanco, a cambio, se desarrolla con libertad y puede apuntar a d6. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 a7a6 d4c6 b7c6 f1d3"].porQue` | La forma directa de mostrar la contra de 5...a6: después del cambio en c6, la jugada ...a6 resulta casi inútil, y las blancas siguen con O-O, f4 o c4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3"].porQue` | La preparación lógica de f4. Después de 8...Ae7 9.f4 d6 se llega a la Scheveningen; 8...Ab4 es mucho más agudo. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8b4"].porQue` | Mucho más agudo que pasar a la Scheveningen: ataca e4 a través de la clavada. Las blancas suelen responder Ca4, con la idea de Cxc6 y Cb6. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 g2g3 a7a6 f1g2 g8f6 e1g1 c6d4 d1d4 f8c5"].porQue` | La respuesta típica de la Taimanov contra el fianchetto: cambio en d4 y el alfil sale a c5 con tiempo sobre la dama. Después vienen ...d6 y quizás ...e5. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5 d7d6 c2c4 g8f6 b1c3 a7a6 b5a3 f8e7 f1e2 e8g8 e1g1 b7b6"].porQue` | La estructura de erizo: peones negros en a6, b6, d6 y e6 detrás de los cuales las piezas esperan su momento (...Ab7, ...Cd7, ...Tc8). El blanco tiene más espacio, pero gastó tiempo con Cb5-a3. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6"].porQue` | Le quita b5 a los caballos blancos y prepara ...b5. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8e7 f2f4"].porQue` | Gana espacio en el flanco de rey y prepara e5 o Df3. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8e7 f2f4 d7d6 d1e1"].porQue` | Prepara Dg3 para atacar en el flanco de rey. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 g1h1"].porQue` | Saca al rey de la diagonal g1-a7 antes de jugar f4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 g1h1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5 d7d6 c2c4 g8f6 b1c3 a7a6 b5a3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5 d7d6 c2c4 g8f6 b1c3 a7a6 b5a3 f8e7 f1e2 e8g8"].porQue` | Enroca: el negro espera el momento para ...b5 o ...d5. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 g2g3"].porQue` | Prepara el fianchetto para defender e4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8e7 f2f4 d7d6 d1e1 e8g8 e1g3 c8d7 g1h1 b7b5 a2a3"].porQue` | Frena ...b4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 f1e2 a7a6 e1g1 g8f6 c1e3 f8e7 f2f4 d7d6 d1e1 e8g8 e1g3 c6d4 e3d4 b7b5 a2a3"].porQue` | Frena ...b4. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 g8f6 d4b5 f8c5 c1f4 e8g8 f4c7 d8e7 c7d6"].porQue` | El alfil va a d6. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 d4b5 d7d6 c2c4 g8f6 b1c3 a7a6 b5a3 f8e7 f1e2 e8g8 e1g1 b7b6 c1e3 c8b7 a1c1"].porQue` | La torre va a la columna c. |
| Siciliana Taimanov | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6 b1c3 d8c7 d4b5 c7b8 c1e3 a7a6 e3b6"].porQue` | Amenaza Cc7+. |
| Defensa Siciliana | `planesBlancas` | Siciliana abierta (Cf3 y d4): desarrollo rápido, centralizar el caballo en d4 y atacar en el flanco de rey (f4, g4, a veces enroque largo). |
| Defensa Siciliana | `planesBlancas` | Usar la casilla d5 (Cd5) y los ataques al peón de d6. |
| Defensa Siciliana | `planesNegras` | Contrajuego en el flanco de dama: ...a6, ...b5, ...Dc7 y la columna c. |
| Defensa Siciliana | `planesNegras` | Elegir la estructura según el segundo movimiento: 2...d6 (Najdorf, Dragón), 2...Cc6 (Clásica, Sveshnikov) o 2...e6 (Taimanov, Kan, Scheveningen). |
| Defensa Siciliana | `estructura` | Tras ...cxd4 y Cxd4, el negro tiene peones en d6 y e6 (o e5) y la columna c abierta; las blancas, el peón de e4 y la columna d. Las estructuras dependen de la variante: Najdorf (...a6), Dragón (...g6), Scheveningen (...e6 y ...d6). |
| Defensa Siciliana | `notas["e2e4 c7c5"].porQue` | Controla d4 desde el costado y prepara cambiar un peón de flanco por uno central. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3"].porQue` | Prepara d4: es el camino a la Siciliana abierta. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6"].porQue` | Prepara ...Cf6 sin que e5 lo eche, y abre la diagonal del alfil de c8. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6"].porQueNo["d7d5"]` | Abrir el centro tan temprano no funciona: exd5 y, tras ...Cf6, Ab5+ complica el desarrollo negro. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4"].porQueNo["e7e6"]` | Si el negro no toma, dxc5 y queda con el peón de d6 aislado y el desarrollo atrasado. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3"].porQue` | Defiende e4. Ahora el negro elige su sistema: Najdorf (...a6), Dragón (...g6), Clásica (...Cc6) o Scheveningen (...e6). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6"].porQue` | Najdorf: quita b5 a los caballos y al alfil blancos y prepara ...e5 o ...b5. Es la jugada más flexible. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6"].porQueNo["d8b6"]` | Ae3 defiende b2 con tiempo y Cdb5 o Ce6 amenazan: la dama queda mal parada. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6"].porQue` | Prepara ...d5 y deja libre el alfil de f8: lleva a la Paulsen o la Taimanov. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 a7a6"].porQueNo["d8c7"]` | Sin ...a6, la dama en c7 queda expuesta: Cb5 la ataca y amenaza Cd6+. |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c3"].porQue` | Alapin: prepara d4 apoyado por un peón, para que el negro no pueda cambiar con ganancia. |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c3 g8f6"].porQue` | Ataca e4 enseguida: si e5, el caballo salta a d5 y el negro juega contra el centro avanzado. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6 c1g5"].porQue` | Ataque Richter-Rauzer: clava el caballo y prepara Dd2 y enroque largo, con presión sobre d6. Contra ...e5, Axf6 y Cd5 dejan a las blancas dominando d5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6 c1g5 e7e6"].porQue` | Lo habitual: con ...Ae7 el negro neutraliza la clavada. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6 f1c4"].porQue` | Ataque Sozin: el alfil apunta a d5 y f7. Si el negro juega ...e5, el alfil queda idealmente ubicado sobre d5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 b8c6"].porQue` | Taimanov: deja libre la diagonal a3-f8 para el alfil (...Ab4 o ...Ac5) y no se apura con ...d6, que siempre queda disponible. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6"].porQue` | Scheveningen: peones en e6 y d6. Parece pasivo pero es muy sólido, y el negro tiene ...a6, ...Dc7 y ...Cc6 para atacar en el flanco de dama. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 d7d6 g2g4"].porQue` | Ataque Keres: amenaza g5 para echar al caballo de f6 y gana espacio en el flanco de rey. |
| Defensa Siciliana | `notas["e2e4 c7c5 a2a3"].porQue` | Antisiciliana poco común: prepara b4 para desviar el peón de c5, como el Gambito del Ala, pero sin entregar el peón enseguida (si ...cxb4, axb4 recupera la columna a abierta). Stockfish la considera algo inferior a 2.Cf3. |
| Defensa Siciliana | `notas["e2e4 c7c5 a2a3 g8f6 e4e5"].porQue` | Como en la Alapin, el peón echa al caballo y gana espacio; la diferencia es que a3 ya prepara b4. |
| Defensa Siciliana | `notas["e2e4 c7c5 a2a3 b8c6 b2b4"].porQue` | El gambito para el que se jugó a3: si ...cxb4 axb4 Cxb4, las blancas siguen con d4 o Da4 y juegan por el centro y por la columna a abierta. Stockfish lo considera aceptable. |
| Defensa Siciliana | `notas["e2e4 c7c5 a2a3 d7d5 e4d5"].porQue` | La mejor: tras ...Dxd5, Cc3 gana tiempo atacando la dama. |
| Defensa Siciliana | `notas["e2e4 c7c5 f2f4"].porQue` | El Ataque Gran Prix con f4 de entrada, sin Cc3. Rogozenko explica por qué casi no se juega así: permite el golpe central 2...d5, y por eso el blanco que busca el Gran Prix suele empezar con 2.Cc3. |
| Defensa Siciliana | `notas["e2e4 c7c5 f2f4 d7d5"].porQue` | El golpe central que desactiva el plan del blanco: si e5, el negro jugó ...c5 y ...d5 sin perder tiempo y queda cómodo (Rogozenko da 3.e5 como dudosa); si exd5, sigue ...Cf6. |
| Defensa Siciliana | `notas["e2e4 c7c5 f2f4 d7d5 e4d5 g8f6"].porQue` | Mejor que retomar con la dama: amenaza ...Cxd5, y con el caballo en d5 el peón de f4 solo debilitaría al blanco. El blanco tiene que defender d5 (Ab5+ o c4) y el negro gana desarrollo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g7g6"].porQue` | Dragón Hiperacelerado: el caballo de b8 todavía no sale, así se evita la Rossolimo (2...Cc6 3.Ab5). Si 3.d4, el negro puede demorar el cambio en d4 para no permitir el Maroczy (Donaldson y Silman). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g7g6 d2d4 f8g7"].porQue` | No cambia en d4: si 4.c4, el negro no queda frente a un Maroczy sino que ataca d4 con ...Da5+, ...Db6 o ...d6 y ...Da5, posiciones mucho más desequilibradas. Stockfish prefiere el cambio 3...cxd4, apenas mejor. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g7g6 d2d4 f8g7 c2c4 d8a5"].porQue` | Jaque y presión sobre c5 y d4: la respuesta más directa a 4.c4 (también se juegan 4...Db6 y 4...d6). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g7g6 h2h4"].porQue` | 3.h4!?: un ataque directo con el peón de torre contra el enroque fianchettado que todavía no existe; lo jugaron Spassky y Velimirovic. Stockfish lo ve algo peor que 3.c3 o 3.d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 c1g5"].porQue` | El «Ataque Aussie», inventado por jugadores australianos: en vez de retomar en d4, el alfil ataca la dama. Es pura sorpresa; con juego correcto no da ventaja y Stockfish prefiere el normal 4.Cxd4 (Bosch). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 f8b4"].porQue` | La Variante de la Clavada: contraataca e4 antes de que el blanco se acomode. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 f8b4 e4e5"].porQue` | Lo más fuerte para Stockfish: echa al caballo con tiempo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 f8b4 e4e5 f6d5 c1d2 d5c3"].porQue` | Lo mejor: cambia antes de que la clavada se vuelva en su contra. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 a7a6"].porQue` | La O'Kelly: una jugada en apariencia inútil que desalienta 3.d4, porque tras 3...cxd4 4.Cxd4 Cf6 5.Cc3 e5 se llega a una «Najdorf mejorada». |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 a7a6 c2c4"].porQue` | Lo más fuerte: con el Maroczy armado, la jugada ...a6 pierde casi todo su sentido. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6"].porQue` | La Variante Nimzowitsch: provoca e5 como en la Alekhine, pero el peón de c5 impide que el blanco arme un gran centro. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 e4e5 f6d5 b1c3"].porQue` | Muestra el defecto: si 4...Cxc3 5.dxc3, el blanco está mejor que en la línea análoga de la Alekhine, porque el peón de c5 hace menos atractiva la liberación con ...d6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 e4e5 f6d5 b1c3 e7e6"].porQue` | Lo mejor: tras 5.Cxd5 exd5 6.d4 se llega a la posición básica de la variante. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 e4e5 f6d5 b1c3 e7e6 c3d5 e6d5 d2d4 b8c6"].porQue` | Entrega un peón por un desarrollo rápido: si 7.dxc5 Axc5 8.Dxd5, ...Db6 ataca f2. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 e4e5 f6d5 b1c3 e7e6 c3d5 e6d5 d2d4 b8c6 d4c5"].porQue` | Lo más fuerte: el blanco acepta el peón y, contra ...Db6, tiene la peligrosa 9.Ac4!. |
| Defensa Siciliana | `notas["e2e4 c7c5 b2b4"].porQue` | El Gambito del Flanco: desvía el peón de c para ganar el centro con d4. Stockfish no lo considera del todo correcto. |
| Defensa Siciliana | `notas["e2e4 c7c5 b2b4 c5b4 a2a3"].porQue` | Ofrece seguir con el gambito; si 3...d5, el negro devuelve el peón y se desarrolla con comodidad. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 c2c3"].porQue` | Una Alapin con ...e6 ya jugado: el negro responde con ...d5 o ...Cf6, como en las líneas de 2.c3 e6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7"].porQue` | Retoma con la dama, que deja libre d7 para el caballo y apoya ...Cc6 y ...Cf6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1"].porQue` | Enroca y prepara c3 y d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 f1b5 c8d7 b5d7 d8d7 e1g1 b8c6 c2c3"].porQue` | Prepara d4 para armar el centro. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7"].porQue` | Pone la dama en la columna c, frente a la torre que el blanco va a llevar a c1. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 c2c3"].porQue` | Prepara d4 para retomar con un peón y armar un centro. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 c2c3 g8f6 f1e2"].porQue` | Defiende e4 en forma indirecta: si ...Cxe4, Da4+ gana el caballo. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 f1c4 e7e6"].porQue` | Cierra la diagonal hacia f7 y prepara ...Cf6 o ...Cge7. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 f1c4 e7e6 g1f3"].porQue` | Desarrolla: el blanco va a seguir con 0-0, De2 y Td1. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 g1f3"].porQue` | Desarrolla antes de recuperar el peón de d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7"].porQue` | El negro también completa el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 g2g3"].porQue` | Prepara el fianchetto del alfil de f1. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 g2g3 b7b5"].porQue` | Según Stockfish es un error: era mejor 3... Cf6 (−0,2 contra −1,7, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 g2g3"].porQue` | Prepara el fianchetto, con la dama libre para defender e5. |
| Defensa Siciliana | `notas["e2e4 c7c5 b2b4 c5b4 a2a3 d7d5"].porQue` | Devuelve el golpe en el centro en lugar de defender el peón de b4. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 d2d3"].porQue` | Defiende e4 con un peón y prepara g3 o f4. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 d2d3 g7g6"].porQue` | Prepara el fianchetto para controlar d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 b2b3"].porQue` | Prepara el fianchetto de dama para presionar la gran diagonal. |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c4 d7d6"].porQue` | Controla e5 y prepara el desarrollo. |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c4 d7d6 b1c3 b8c6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 c2c4 d7d6 b1c3 b8c6 g2g3 h7h5"].porQue` | Amenaza ...h4 para abrir la columna h contra el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1a3 b8c6 d2d4"].porQue` | Según Stockfish es un error: era mejor 3. Ab5 (+0,0 contra −1,4, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d3 b8c6 c2c3"].porQue` | Prepara d4 con apoyo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 g8f6"].porQue` | Desarrolla y ataca e4 en lugar de cambiar en d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 g8f6 d4c5"].porQue` | Toma en c5 con tiempo: si ...Cxe4, cxd6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5"].porQue` | El caballo va a b5, desde donde amenaza d6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6"].porQue` | Controla e5 y prepara el desarrollo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 f7f5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,4 contra −1,9, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 e7e5 f1b5"].porQue` | Jaque que obliga al negro a tapar antes de que el caballo se retire. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 b8c6 d1d2"].porQue` | Prepara el enroque largo: es el Ataque Yugoslavo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 b8c6 f2f3"].porQue` | Refuerza e4 y prepara Dd2 y el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 c8d7"].porQue` | Desarrolla y prepara ...Tc8 o ...Db6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 c1g5 c8d7 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 b8c6 d4c6 b7c6 e4e5 f6d5 c3e4"].porQue` | Evita cambiar caballos y ocupa e4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 a7a6"].porQue` | Prepara ...b5 y le quita b5 al caballo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 e7e6 g2g4 a7a6 g4g5 f6d7 c1e3"].porQue` | Desarrolla y prepara Dd2 y el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 g7g6 c1e3 f8g7 f2f3 b8c6 d1d2 e8g8"].porQue` | Enroca: el blanco va a enrocar largo y atacar con g4 y h4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e5 d4b3 f8e7 f2f3"].porQue` | Refuerza e4 y prepara Dd2 y el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 a7a6 c1e3 e7e6 g2g4 e6e5 d4f5"].porQue` | El caballo va a f5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g8f6 b1c3 d7d6 d2d4 c5d4 f3d4 b8c6 c1g5 e7e6 d1d2 a7a6 e1c1 c8d7 f2f4"].porQue` | Gana espacio y prepara e5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 f2f3"].porQue` | Defiende e4 con un peón y prepara c4. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 f1c4 e7e6 g1f3 d7d6 e1g1 a7a6"].porQue` | Le quita b5 al caballo blanco y prepara ...b5. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 f1c4 e7e6 g1f3 d7d6 e1g1 a7a6 d1e2"].porQue` | Prepara Td1 para presionar d6. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 f1c4 e7e6 g1f3 d7d6 e1g1 a7a6 d1e2 b7b5 c4b3 a8a7"].porQue` | Según Stockfish es un error: era mejor 9... Cge7 (−0,3 contra −1,4, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3"].porQue` | Defiende e4 y prepara f4: es la Siciliana Cerrada. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e5"].porQue` | Frena el avance f5 y controla d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 f2f4 e7e5 g1h3"].porQue` | El caballo va a h3 para no tapar el peón f. |
| Defensa Siciliana | `notas["e2e4 c7c5 b1c3 b8c6 f2f4 g7g6 g1f3 f8g7 f1c4 e7e6 e1g1 g8e7"].porQue` | Desarrolla el caballo por e7 para contestar f5 con ...d5 o ...exf5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 g7g6 c1e3 f8g7 f2f3 e8g8 d1d2 b8c6 f1c4 c8d7 h2h4 d8a5 e1c1 f8c8 c4b3 h7h5"].porQue` | Frena el avance g4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 d7d5"].porQue` | Contragolpea en el centro; después de exd5 suele quedar con un peón aislado. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 a7a6"].porQue` | Prepara ...b5 o ...d5 antes de cambiar en d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 d8c7"].porQue` | Controla e5 y prepara ...e6. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 e7e6"].porQue` | Según Stockfish es un error: era mejor 3... cxd4 (−0,3 contra −2,5, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 f1c4 e7e6"].porQue` | Tapa la diagonal del alfil y prepara ...d5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g2g3"].porQue` | Prepara el fianchetto: un esquema cerrado. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1e2"].porQue` | Prepara Cbc3 y g3, o d4 con el caballo listo para retomar. |
| Defensa Siciliana | `notas["e2e4 c7c5 a2a4"].porQue` | Gana espacio en el flanco de dama y frena ...b5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d8a5"].porQue` | Saca la dama temprano: frena d4 por la clavada. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b7b6"].porQue` | Prepara el fianchetto del alfil de dama. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 h7h6"].porQue` | Impide Cg5 y Ag5, pero pierde tiempo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,4 contra −2,1, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 f1d3"].porQue` | Defiende e4 y prepara c3 y d4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g7g6"].porQue` | Prepara el fianchetto: estructura de Dragón. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 b8c6 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g7g6 b1c3 f8g7 c1e3 b8c6 d1d2 g8f6 f2f3"].porQue` | Sostiene e4 y frena ...Cg4: Ataque Yugoslavo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 c8d7 c1g5 e7e6 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 c8d7 c1g5 e7e6 d1d2 a7a6"].porQue` | Prepara ...b5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 c8e6 a3c4"].porQue` | El caballo va a c4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 c8e6 a3c4 a8b8 c4e3"].porQue` | El caballo va a e3. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 c8e6 a3c4 a8b8 c4e3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 f8e7 a3c4"].porQue` | El caballo va a c4. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 f8e7 a3c4 b7b5 c4e3"].porQue` | El caballo va a e3. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 e7e5 d4b5 d7d6 b1c3 a7a6 b5a3 f8e7 a3c4 b7b5 c4e3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 f8b4 e4e5 f6d5 c1d2 d5c3 b2c3 b4e7 d1g4 e8g8"].porQue` | Según Stockfish es un error: era mejor 9... Rf8 (−0,9 contra −1,7, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 e7e6 d2d4 c5d4 f3d4 g8f6 b1c3 f8b4 e4e5 f6d5 c1d2 d5c3 b2c3 b4a5"].porQue` | Según Stockfish es un error: era mejor 8... Af8 (−0,6 contra −1,6, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4 d8c7 b1c3 e7e6 c1e3 a7a6 d1d2 g8f6 e1c1 f8b4 f2f3 c6e5"].porQue` | El caballo va a e5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 g7g6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... cxd4 (−0,3 contra −3,0, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b7b6 d2d4 c5d4 f3d4 c8b7 b1c3 a7a6 c1e3 e7e6 d1d2"].porQue` | Prepara el enroque largo. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 b7b5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,4 contra −2,0, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 c2c3 g8f6 f1e2 b8c6 d2d4 c5d4 c3d4 f6e4 d4d5 d8a5 b1c3 e4c3 b2c3 c6e5"].porQue` | El caballo va a e5. |
| Defensa Siciliana | `notas["e2e4 c7c5 d2d4 c5d4 d1d4 b8c6 d4d1 g8f6 f1c4"].porQue` | Según Stockfish es un error: era mejor 5. Cc3 (−0,0 contra −1,1, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g1f3 d7d6 b2b4 c5b4 d2d4 g8f6 f1d3 g7g6"].porQue` | Prepara el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 b2b4 c5b4 c2c4"].porQue` | Según Stockfish es un error: era mejor 3. a3 (−0,2 contra −1,3, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 f1c4 e7e6 b1c3 b8c6 g1f3 a7a6"].porQue` | Prepara ...b5. |
| Defensa Siciliana | `notas["e2e4 c7c5 g1e2 b8c6 b1c3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Defensa Siciliana | `notas["e2e4 c7c5 d1g4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −0,8, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 g2g4"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −1,0, para el bando que juega). |
| Defensa Siciliana | `notas["e2e4 c7c5 e1e2"].porQue` | Según Stockfish es un error: era mejor 2. Cf3 (+0,3 contra −0,9, para el bando que juega). |
| Gambito Smith-Morra | `planesBlancas` | Presión sobre d6 y f7; Cd5 o e5 en el momento justo. |
| Gambito Smith-Morra | `planesNegras` | Desarrollo prudente: ...e6, ...a6, ...Cge7 o ...Cf6. |
| Gambito Smith-Morra | `rupturas` | e5 y Cd5 de las blancas. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3"].porQue` | Sigue el plan: Ac4, enroque, De2 y torres a c1 y d1. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6"].porQue` | Cierra la diagonal del alfil sobre f7 antes de que llegue a c4. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 a7a6"].porQue` | Prepara ...b5 y ...Dc7 sin que Cb5 moleste. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7 e1g1 g8f6 d1e2 f6g4 f1d1"].porQue` | Lo correcto: la torre se va de f1 y presiona por la columna d. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7 e1g1 g8f6 d1e2 f6g4 f1d1"].porQueNo["h2h3"]` | ...Cd4!: ataca la dama y amenaza ...Dh2#. Es la trampa siberiana. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 d7d6 f1c4"].porQue` | El alfil apunta a f7: si el negro se descuida, Cg5 o e5 aparecen enseguida. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 d7d6 f1c4 e7e6 e1g1 g8f6 d1e2"].porQue` | El esquema típico del gambito: dama a e2, torres a d1 y c1, y la ruptura e5 en el momento justo. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d7d5"].porQue` | Otra forma de rehusar: devuelve el peón para abrir el centro. Stockfish prefiere aceptar con 3...dxc3. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d7d5 e4d5"].porQue` | Lo mejor: tras ...Dxd5 y cxd4 se llega a una posición de la Alapin. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4d3"].porQue` | Devuelve el peón para que el caballo blanco no llegue a c3 con tiempo. Stockfish prefiere aceptar con 3...dxc3. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7 d1e2"].porQue` | Prepara Td1 para presionar la columna d y la debilidad de d6. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 a7a6 e1g1"].porQue` | Enroca: el blanco sigue con De2 y Td1. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 d7d6 f1c4 a7a6"].porQue` | Prepara ...b5 y le quita b5 al caballo blanco. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 e7e6 g1f3 d7d6 f1c4 a7a6 e1g1 f8e7"].porQue` | Desarrolla y prepara el enroque. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 e7e6 g1f3 d7d6 f1c4 a7a6 e1g1 f8e7 d1e2"].porQue` | Prepara Td1 para presionar d6. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7 e1g1 g8f6 d1e2"].porQue` | Prepara Td1 y el avance e5. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 g8f6 e4e5 f6d5 g1f3 e7e6 c3d4 b7b6"].porQue` | Prepara ...Ab7. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 d7d6 f1c4 e7e6 e1g1 g8f6 d1e2 f8e7 f1d1 e6e5 c1e3 e8g8 a1c1"].porQue` | La torre va a la columna c. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 d7d6 f1c4 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 e7e6 g1f3 a7a6 f1c4 b8c6 e1g1 g8e7 c1g5 f7f6 g5e3 b7b5 c4b3 e7g6"].porQue` | Según Stockfish es un error: era mejor 10... Ab7 (+0,1 contra −0,7, para el bando que juega). |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 d7d6 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Smith-Morra | `notas["e2e4 c7c5 d2d4 c5d4 c2c3 d4d3 c3c4 g7g6"].porQue` | Prepara el fianchetto. |
| Gambito Smith-Morra | `trampas["e2e4 c7c5 d2d4 c5d4 c2c3 d4c3 b1c3 b8c6 g1f3 e7e6 f1c4 d8c7 e1g1 g8f6 d1e2 f6g4 h2h3 c6d4"]` | Trampa siberiana: 8.De2 Cg4 9.h3?? Cd4! La dama de e2 está atacada, y si 10.Cxd4, ...Dh2#. |
| Defensa Tarrasch | `estructura` | Peón aislado negro en d5 tras cxd5 exd5 y el cambio en c5 o d4. |
| Defensa Tarrasch | `rupturas` | dxc5 de las blancas para aislar el peón. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5"].porQue` | Lo más incisivo: obliga al negro a definir la estructura. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5"].porQueNo["e2e4"]` | ...cxd4 Dxd4 Cc6 y ...d4: el centro blanco se desarma ganándole tiempos a la dama. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3"].porQue` | Desarrollo; el plan clásico sigue con g3 y Ag2 contra d5. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3"].porQue` | El fianchetto presiona d5 desde g2: el plan más peligroso contra el peón aislado. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 d4c5"].porQue` | Una de las dos líneas principales: el alfil negro va a c5 y las blancas siguen con Ag5, para atacar al caballo que defiende d5. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 c5d4 d1d4 b8c6 d4d1 e6d5 d1d5 c8d7"].porQue` | El precio del gambito: el negro ya no tiene el peón, pero sí varias jugadas de desarrollo de ventaja. Sigue ...Cf6, ...Ac5 y el enroque. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5d4 f3d4 h7h6 g5e3 f8e8"].porQue` | Una jugada sana y profunda, según Schandorff: prepara el contrajuego por la columna e, por ejemplo con ...Af8. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5c4 f3e5"].porQue` | Muy molesto: si ...Cxe5, dxe5 y el negro pierde el peón de d5 (Schandorff). El blanco ataca el centro negro, que ...c4 dejó sin tensión. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5c4 f3e5 c8e6 b2b3"].porQue` | Sigue con la estrategia agresiva y no le da tiempo al negro para consolidar la cadena. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c8e6 d4c5"].porQue` | Según Schandorff, así el blanco fuerza un final superior, con buenas chances de ganar y casi sin riesgo. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c8e6 d4c5 e7c5 g5f6 d8f6 c3d5 f6b2"].porQue` | Restablece el material: se viene una transición instructiva a un final. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 d4c5 d5d4 c3a4 b7b5"].porQue` | Según Stockfish es un error: era mejor 7... Axc5 (−0,4 contra −1,3, para el bando que juega). |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 e2e3 g8f6 g1f3 b8c6 c4d5 e6d5"].porQue` | Retoma con el peón: queda una estructura de peón aislado si se cambia en d4. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 e2e3 g8f6 g1f3 b8c6 a2a3"].porQue` | Prepara dxc5 y b4 para ganar espacio en el flanco de dama. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 e2e3 g8f6 g1f3 b8c6 f1d3 f8d6 e1g1 e8g8 d1e2"].porQue` | Prepara Td1, apuntando a d5. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 c8g4"].porQue` | Desarrolla el alfil de dama antes de cerrarlo. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5d4 f3d4 f8e8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5c4 f3e5 c8e6 b2b3 d8a5 e5c6 b7c6 c3a4 f8d8"].porQue` | La torre va a la columna d. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c8e6 a1c1 b7b6"].porQue` | Prepara ...c4 o ...Tc8. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c1g5 c5d4 f3d4 h7h6 g5e3 f8e8 d1a4 c8d7 a1d1 c6b4 a4b3 a7a5 a2a4"].porQue` | Frena ...a4. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 c4d5 e6d5 g1f3 b8c6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 d4c5 e7c5 c3a4 c5e7 c1e3 f8e8 a1c1"].porQue` | La torre va a la columna c. |
| Defensa Tarrasch | `notas["d2d4 d7d5 c2c4 e7e6 b1c3 c7c5 e2e3 g8f6 g1f3 b8c6 c4d5 e6d5 f1b5 c5d4 f3d4 c8d7 e1g1 f8d6 d4f3 d7e6 b2b3"].porQue` | Prepara Ab2. |
| Ataque Trompowsky | `planesBlancas` | Contra ...Ce4, Af4 y f3 para echar al caballo y armar el centro. |
| Ataque Trompowsky | `planesNegras` | Atacar el alfil con ...Ce4 o ...h6, o prepararse para retomar con la dama. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5"].porQue` | Amenaza Axf6 para doblar los peones negros y evita la teoría habitual. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 d7d5"].porQue` | Ocupa el centro y acepta que, si las blancas cambian en f6, el negro retome con el peón. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5f4"].porQue` | El alfil se retira a una buena diagonal; después f3 echa al caballo. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 e7e6"].porQue` | Si el alfil cambia en f6, la dama retoma y no hay peones doblados. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 e7e6 e2e4 h7h6"].porQue` | Pregunta al alfil antes de que e5 se vuelva una amenaza. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 c7c5"].porQue` | La respuesta que recomienda Dembo: ataca d4 enseguida y acelera el juego, sin esperar a ver si el alfil cambia en f6. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 c7c5 d4d5"].porQue` | Lo mejor según Stockfish: gana espacio. La reacción típica del negro es ...Ce4 y ...Db6, contra b2. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 c7c5 b1c3 d7d5"].porQue` | Contra 3.Cc3, la jugada más exigente según Dembo, el negro ocupa el centro: si 4.Axf6 gxf6, queda con la pareja de alfiles. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 d7d5 g5f6 e7f6 e2e3 f8d6"].porQue` | Lo habitual: el alfil a su mejor diagonal y el enroque enseguida. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5f4 d7d5 e2e3 c8f5"].porQue` | Si las blancas no juegan f3, la partida va por carriles tranquilos: Ad3, e6, Cd2 y el cambio de caballos. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5f4 c7c5 d4d5 d8b6"].porQue` | La respuesta aguda a 4.d5: las blancas tienen que elegir entre defender b2 de forma pasiva y entregar el peón con 5.Cd2. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5h4 c7c5 f2f3 g7g5 f3e4"].porQue` | Casi obligado: después de 5...gxh4 los dos bandos tienen los peones dañados. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 g7g6 g5f6 e7f6 e2e3"].porQue` | Lo mismo que contra 2...d5: los alfiles negros contra la estructura sana y el centro blanco (por ejemplo 4...f5 5.c4 Ag7 6.Cc3). |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5f4 c7c5 f2f3 d8a5 c2c3 e4f6 d4d5 a5b6 b2b3"].porQue` | Cubrir b2 con calma (o incluso con la extraña 7.Ac1) es la forma de mantener la ventaja: el negro movió mucho la dama y el caballo. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5f4 d7d5 f2f3"].porQue` | Echa al caballo de e4 y prepara e4. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 g7g6"].porQue` | Prepara el fianchetto. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 f6e4 g5h4 c7c5 f2f3 g7g5 f3e4 g5h4 e2e3 f8h6 e1f2"].porQue` | Según Stockfish es un error: era mejor 7. Dd3 (−0,3 contra −1,2, para el bando que juega). |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 e7e6 e2e4 h7h6 g5f6 d8f6 b1c3 d7d6 d1d2 g7g5 e1c1 f8g7 g2g3"].porQue` | Prepara Ag2. |
| Ataque Trompowsky | `notas["d2d4 g8f6 c1g5 g7g6 g5f6 e7f6 e2e3 f8g7 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Van Geet (1.Cc3) | `planesBlancas` | d4 y Ag5 o Af4: transponer a sistemas conocidos con el caballo ya en c3. |
| Apertura Van Geet (1.Cc3) | `planesBlancas` | e4, Cf3 y d4 para llegar a aperturas abiertas. |
| Apertura Van Geet (1.Cc3) | `planesNegras` | ...e5 con ...Cc6: una Nimzowitsch con colores invertidos. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3"].porQue` | El caballo sale antes que los peones: controla d5 y e4 y deja abierta la elección entre e4 y d4. Tapa el peón de c, así que no habrá c4 como en el Gambito de Dama. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 d2d4"].porQue` | Lo más sólido: el blanco ocupa el centro y se llega a esquemas del Veresov (Ag5) o del Jobava (Af4). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 d2d4"].porQueNo["g2g3"]` | g3?! d4: el caballo pierde tiempo, por ejemplo Cb1 c5 y el negro tiene el centro. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 e2e4"].porQue` | Transpone a la Escandinava con 2.Cc3. Stockfish la considera algo floja por la respuesta 2...d4. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 e2e4 d5d4"].porQue` | Lo más fuerte: el peón echa al caballo de c3 y el negro gana espacio. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 g1f3"].porQue` | Desarrolla atacando e5. Si ...Cc6, d4 o e4 llevan a posiciones conocidas. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 f2f4"].porQue` | Controla e5 y prepara Cf3, en un planteo parecido a la Bird. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 f2f4 d5d4 c3e4 e7e5 g1f3"].porQue` | Según Stockfish es un error: era mejor 4. fxe5 (0,0 contra −1,2, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 f2f4 d5d4 c3e4 f7f5 e4f2 g8f6 g1f3 c7c5 b2b4"].porQue` | Según Stockfish es un error: era mejor 6. e3 (+0,6 contra −0,3, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 e2e3"].porQue` | Prepara d4 o f4 con un centro flexible. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 e2e3 g8f6 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. d4 (+0,1 contra −1,2, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 e2e3 g8f6 f2f4 e5f4 g1f3"].porQue` | Desarrolla antes de recuperar el peón con exf4. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 c7c5 b2b4"].porQue` | Según Stockfish es un error: era mejor 2. e4 (+0,2 contra −1,7, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 e2e3 b8c6 f2f4"].porQue` | Según Stockfish es un error: era mejor 3. d4 (+0,2 contra −0,8, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 e2e3 b8c6 f2f4 e5f4 g1f3"].porQue` | Desarrolla antes de recuperar el peón. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d6"].porQue` | Prepara ...e5 o ...Cf6 sin comprometer el centro. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 e2e3"].porQue` | Abre el alfil de f1 y prepara d4 o f4. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 d2d3"].porQue` | Prepara e4 con apoyo. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 c7c5 d2d4 c5d4 d1d4 b8c6 d4h4"].porQue` | Según Stockfish es un error: era mejor 4. Dd3 (+0,1 contra −0,8, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 e2e4 d5d4 c3e2 e7e5 e2g3"].porQue` | El caballo va a g3. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 d2d3 g8f6 g2g3"].porQue` | Prepara el fianchetto. |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 d7d5 f2f4 g7g5"].porQue` | Según Stockfish es un error: era mejor 2... d4 (+0,3 contra −0,5, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 e7e5 g1f3 f8c5"].porQue` | Según Stockfish es un error: era mejor 2... Cc6 (−0,2 contra −1,6, para el bando que juega). |
| Apertura Van Geet (1.Cc3) | `notas["b1c3 b7b5"].porQue` | Según Stockfish es un error: era mejor 1... d5 (0,0 contra −1,0, para el bando que juega). |
| Apertura Veresov | `planesBlancas` | Jugar e4, preparado con Cf3, e3 y Ad3 o con f3. |
| Apertura Veresov | `planesBlancas` | Si el negro juega pasivo, Axf6 para dañarle la estructura. |
| Apertura Veresov | `planesNegras` | Impedir e4 con ...Af5 o ...Cbd7 y ...c6. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 b8d7 g1f3"].porQue` | El plan moderno: prepara e4 sin el viejo f3, que estorba el desarrollo. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c8f5"].porQue` | Impide e4 directamente. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 h7h6"].porQue` | Le pregunta enseguida al alfil. Bellin la considera decisiva para juzgar la Veresov, cuya idea recurrente es doblarle los peones al negro con Axf6; para Stockfish es la mejor respuesta. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 h7h6 g5f6"].porQue` | Para Bellin, la mejor: a diferencia de la Española (de la que la Veresov es una imagen invertida), el blanco no está listo para enrocar y le cuesta jugar e4, así que la retirada a h4 no le sirve. Stockfish también la prefiere. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 h7h6 g5f6 e7f6 e2e3"].porQue` | La estrategia que recomienda Bellin: mantener el centro cerrado y estable, enrocar largo y, más adelante, lanzar los peones del flanco de rey. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c7c6 d1d2"].porQue` | Prepara f3 y e4 sin permitir la molesta ...Db6: como el alfil de g5 dejó el flanco de dama sin protección, con 4.f3 Db6 el peón de b2 queda colgando. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c7c6 f2f3 d8b6"].porQue` | Aprovecha que el alfil salió del flanco de dama y ataca b2. Bellin la presenta como un fuerte argumento contra 4.f3, y Stockfish la considera la mejor. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 b8d7 e2e3 e7e6"].porQue` | La mejor manera de aprovechar el orden de jugadas con 4.e3, según Bellin: el blanco ya no puede jugar e4 rápido, y sin e4 le cuesta conseguir algo contra esta formación sólida. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c8f5 e2e3"].porQue` | Lo más simple: refuerza d4 y prepara Ad3 para discutir la diagonal del alfil negro. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c8f5 f2f3"].porQue` | Insiste con el plan de e4, aunque el negro puede frenarlo con ...c6 y ...Cbd7. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c7c6"].porQue` | Prepara ...Db6 contra b2. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 c7c5 g5f6 g7f6 e2e4 d5e4 d4d5"].porQue` | Según Stockfish es un error: era mejor 6. dxc5 (−0,3 contra −1,4, para el bando que juega). |
| Apertura Veresov | `notas["b1c3 d7d5 d2d4 g8f6 c1g5 b8d7 d1d3"].porQue` | Prepara el enroque largo. |
| Apertura Veresov | `notas["b1c3 d7d5 d2d4 g8f6 c1g5 b8d7 f2f3"].porQue` | Prepara e4. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 b8d7 g1f3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 b8d7 g1f3 g7g6 e2e3 f8g7 f1d3 e8g8 e1g1 c7c5 f1e1 b7b6"].porQue` | Prepara ...Ab7. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 h7h6 g5f6 e7f6 e2e3 c7c6 f1d3 g7g6"].porQue` | Prepara el fianchetto. |
| Apertura Veresov | `notas["d2d4 g8f6 b1c3 d7d5 c1g5 e7e6 e2e4 f8e7 e4e5 f6d7 g5e7 d8e7 f2f4 a7a6 g1f3 c7c5 d4c5 b8c6 d1d2 e7c5 e1c1 b7b5 c3e2"].porQue` | El caballo va a d4. |
| Partida Vienesa | `planesBlancas` | Con Ac4, presión sobre f7 y juego tranquilo con d3. |
| Partida Vienesa | `planesNegras` | Contra Ac4, la línea aguda ...Cxe4 o el desarrollo sólido con ...Ac5 o ...Cc6. |
| Partida Vienesa | `estructura` | Muy abierta en las líneas del gambito; con Ac4 y d3, estructura de Italiana tranquila. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4"].porQue` | Gambito vienés: abre la columna f y busca echar al caballo de f6 con e5. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 d7d5"].porQue` | La respuesta correcta: contraataca en el centro antes de que el gambito tome fuerza. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f1c4 f6e4"].porQue` | Golpe táctico: el caballo toma e4 aprovechando que, si 4.Cxe4, ...d5 ataca alfil y caballo a la vez y recupera la pieza. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f1c4 f6e4 d1h5"].porQue` | La respuesta más fuerte: la dama amenaza mate en f7 y ataca el caballo de e4 al mismo tiempo. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 g2g3"].porQue` | El plan moderno: fianchetto y, más adelante, f4. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f1c4 f6e4 d1h5 e4d6 c4b3 f8e7"].porQueNo["b8c6"]` | El Gambito Frankenstein-Drácula: tras 6.Cb5 g6 7.Df3 f5 8.Dd5 De7 9.Cxc7+ Rd8 10.Cxa8 b6 el negro entrega una torre para encerrar al caballo de a8 y atacar. Alterman lo defiende, pero Stockfish lo considera bueno para las blancas. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 d7d5 f4e5 f6e4 g1f3"].porQue` | Para Lane, la continuación más segura: evita las complicaciones tácticas y busca una iniciativa posicional apoyada en el peón de e5. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 d7d5 f4e5 f6e4 g1f3 f8e7"].porQue` | La respuesta más segura según Lane: el negro enroca corto y después ataca el peón de e5 con ...f6. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 d7d5 f4e5 f6e4 d2d3"].porQue` | La Variante Oxford: el blanco echa al caballo de e4 enseguida e invita a complicaciones. Stockfish la considera algo inferior a 5.Cf3. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 d7d5 f4e5 f6e4 d2d3 e4c3"].porQue` | Lo más sensato según Lane: cambiar caballos y llevar el juego a un medio juego posicional. La alternativa 5...Dh4+ 6.g3 entra en complicaciones enormes, en las que según Lane varios jugadores con negras sufrieron. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f2f4 e5f4 e4e5"].porQue` | Lo mejor contra la aceptación: echa al caballo antes de que el negro golpee con ...d5. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 g2g3 d7d5 e4d5 f6d5 f1g2 d5c3"].porQue` | Cambiar el caballo antes de que el alfil de g2 lo presione: las blancas retoman con el peón de b y quedan con el centro algo más sólido. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f1c4 g8f6"].porQue` | El desarrollo natural: ataca e4 y deja abierta la elección entre ...Ab4 y ...Ac5. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 g2g3"].porQue` | La Variante Paulsen: fianchetto y, más adelante, f4 cuando el rey esté a salvo. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f2f4"].porQue` | El Gambito Vienés con ...Cc6 ya jugado. Es más dudoso que contra 2...Cf6: después de ...exf4 d4 Dh4+, el rey blanco tiene que caminar. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 d2d4"].porQue` | El Gambito Steinitz: el blanco toma el centro y acepta que el rey quede en e2 tras ...Dh4+. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 d2d4 d8h4"].porQue` | Lo más fuerte: el jaque saca al rey blanco de su casilla y le quita el enroque. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f1c4 f6e4 d1h5 e4d6 c4b3 b8c6"].porQue` | Según Stockfish es un error: era mejor 5... Ae7 (−0,0 contra −2,5, para el bando que juega). |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f1c4 g8f6 f2f4"].porQue` | Según Stockfish es un error: era mejor 4. Cf3 (−0,0 contra −1,4, para el bando que juega). |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3 f8e7"].porQue` | Prepara ...Ah4+ para molestar al rey. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 a2a3"].porQue` | Prepara b4 o impide ...Ab4. |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 g8f6 f1c4 f6e4 d1h5 e4d6 c4b3 b8c6 d2d4"].porQue` | Según Stockfish es un error: era mejor 6. Cb5 (+2,5 contra −0,8, para el bando que juega). |
| Partida Vienesa | `notas["e2e4 e7e5 b1c3 b8c6 d2d4 f7f5"].porQue` | Según Stockfish es un error: era mejor 3... Cxd4 (+0,6 contra −1,9, para el bando que juega). |
