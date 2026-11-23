# Opiniones y reportes del equipo — Apps Script + Sheet

Pensado para que cualquiera del equipo mande su opinión o un reporte (bug, opinión o sugerencia)
desde el botón flotante 💬 de la app, sin loguearse. Llega como fila nueva a una Google Sheet
privada de Mati. En la app y en este documento se llama "Opiniones y reportes"; en el código, los
nombres de archivo y la URL siguen diciendo "feedback" (no hace falta cambiarlos).

## Sheet

https://docs.google.com/spreadsheets/d/1DSBIzeWNl3ELSZHyHnQvGY_dl_wPmIdUNca3SGjvk_Y/edit?gid=0#gid=0

Encabezados esperados en la fila 1 de la hoja `Hoja 1` (o la que sea la primera hoja): `Fecha | Nombre | Tipo | Pestaña | Texto`.

## Script (Apps Script)

En la Sheet: Extensiones → Apps Script, pegar esto reemplazando el contenido de `Código.gs`, guardar:

```javascript
function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  var datos = JSON.parse(e.postData.contents)
  hoja.appendRow([datos.fecha, datos.nombre, datos.tipo, datos.pestana, datos.texto])
  return ContentService.createTextOutput('ok')
}
```

Desplegar: Implementar → Nueva implementación → tipo "Aplicación web" → Ejecutar como "Yo" → Quién tiene acceso "Cualquier usuario". Copiar la URL que da (termina en `/exec`) y pasármela para completar `URL_FEEDBACK` en `src/lib/feedback/feedback.ts`.

Si se vuelve a desplegar (p. ej. tras cambiar el script), hay que usar "Gestionar implementaciones" → editar → nueva versión, para que la URL siga siendo la misma; si se crea una implementación nueva, la URL cambia y hay que actualizarla en el código.

## Estado

Ya desplegado y configurado (`URL_FEEDBACK` en `src/lib/feedback/feedback.ts` tiene la URL real):
el envío de punta a punta funciona con los 5 campos de arriba.

**Pendiente de la Fase C6 (2026-11-23): 5 campos nuevos que la app ya manda pero que todavía no
tienen columna en la Sheet.** Mientras no se actualice el Apps Script, esos datos se pierden (el
`doPost` de arriba solo lee `fecha/nombre/tipo/pestana/texto`; los campos que no reconoce los
ignora sin romper nada, así que no hay apuro, pero tampoco se ven en la planilla).

1. En la Sheet, agregar columnas a la fila 1, en este orden, después de "Texto": `Versión | Navegador | Curso | Campo | FEN`.
2. Reemplazar `Código.gs` por esto (agrega los 5 campos nuevos; usa `|| ''` porque no todos los envíos los traen):
   ```javascript
   function doPost(e) {
     var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
     var datos = JSON.parse(e.postData.contents)
     hoja.appendRow([
       datos.fecha, datos.nombre, datos.tipo, datos.pestana, datos.texto,
       datos.appVersion || '', datos.navegador || '', datos.curso || '', datos.campo || '', datos.fen || '',
     ])
     return ContentService.createTextOutput('ok')
   }
   ```
3. Volver a desplegar con "Gestionar implementaciones" → editar → nueva versión (no crear una implementación nueva: la URL cambiaría).

Qué es cada campo nuevo:
- **Versión**: hash corto del commit publicado (para saber si el reporte es de la versión actual).
- **Navegador**: `navigator.userAgent` del dispositivo que mandó el reporte.
- **Curso, Campo, FEN**: solo quedan completos cuando el reporte sale del botón "Reportar un error
  en este texto" de una explicación de aperturas (Explorador por ahora; Lección y Práctica
  quedaron pendientes, ver el PR de la Fase C5/C6). Dicen qué apertura, qué parte de la explicación
  (p. ej. "Por qué no Cf6") y la posición exacta.

No hace falta tocar nada del lado de la app para este cambio: ya manda los 5 campos en cada envío.
