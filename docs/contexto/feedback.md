# Feedback del equipo — Apps Script + Sheet

Pensado para que cualquiera del equipo mande feedback (bug, opinión o sugerencia) desde el botón flotante de la app, sin loguearse. Llega como fila nueva a una Google Sheet privada de Mati.

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

- Pendiente: Mati crea el Apps Script en la Sheet de arriba y despliega, y pasa la URL `/exec`.
- Una vez con la URL, se completa `URL_FEEDBACK` en el código y se prueba un envío de punta a punta.
