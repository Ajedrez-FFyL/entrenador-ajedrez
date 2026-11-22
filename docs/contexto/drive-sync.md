# Respaldo automático a Google Drive — estado

Cada jugador conecta su propia cuenta de Google desde Ajustes. El respaldo (el mismo JSON de
`crearRespaldo()`) se guarda en la carpeta privada de la app dentro de **su** Drive (scope
`drive.appdata`: la app no ve el resto del Drive de nadie, y nadie ve el Drive de otro). Al abrir
la app, si ya está conectado, sincroniza en silencio; si hace falta interacción (token vencido sin
sesión activa), no insiste y queda un botón "Sincronizar ahora" en Ajustes.

Código: `src/lib/drive/drive.ts` (auth con Google Identity Services + llamadas REST a la API de
Drive v3), tipos mínimos del cliente GIS en `src/lib/drive/gis.d.ts`, UI en `src/pantallas/Ajustes.svelte`.

## Pendiente: crear el OAuth Client ID (acción de Mati)

1. Entrar a **https://console.cloud.google.com/**
2. Crear un proyecto nuevo (arriba a la izquierda, "Seleccionar proyecto" → "Proyecto nuevo"). Nombre sugerido: "Entrenador de ajedrez".
3. **APIs y servicios → Pantalla de consentimiento de OAuth**:
   - Tipo de usuario: **Externo**
   - Nombre de la app: "Entrenador de ajedrez" (o el nombre que prefieras)
   - Mail de soporte y de contacto: el tuyo
   - En "Público" / "Publishing status": dejarla en **modo de prueba (Testing)** alcanza para un grupo chico; si da error de "app no verificada" al conectar, hay que agregar como "Usuarios de prueba" los mails de Google de cada jugador que la vaya a usar (hasta 100).
4. **APIs y servicios → Biblioteca**: buscar "Google Drive API" → Habilitar.
5. **APIs y servicios → Credenciales → Crear credenciales → ID de cliente de OAuth**:
   - Tipo de aplicación: **Aplicación web**
   - Nombre: lo que quieras
   - **Orígenes autorizados de JavaScript**: agregar `https://ajedrez-ffyl.github.io` (sin la parte `/entrenador-ajedrez/`: el origen es solo protocolo+dominio; el repo se transfirió a esta organización el 07/11/2026, así que el origen viejo `https://matduer.github.io` ya no sirve y se puede sacar una vez confirmado que todo funciona).
   - No hace falta "URI de redireccionamiento": el flujo que usa la app (Google Identity Services, token client) no redirige.
6. Copiar el **Client ID** (termina en `.apps.googleusercontent.com`) y pasármelo para completar `CLIENT_ID` en `src/lib/drive/drive.ts`.

## Estado

- Código y UI listos, a la espera del Client ID.
- Nota para cuando se transfiera el repo a una organización de GitHub (al final del plan): agregar el nuevo origen `https://<org>.github.io` a la pantalla de consentimiento y volver a probar.

## Drive solo para invitados (A6, 22/11/2026)

La app de Google está en modo Prueba y **el respaldo en Drive está oculto por defecto**: nadie ve el
bloque de Ajustes ni la ayuda de Drive. Se habilita por navegador con un link especial
(`driveHabilitado()` lee `localStorage['ffyl-drive'] === '1'`; `src/main.ts` lo guarda al arrancar si la
URL trae `?drive=1` y limpia el parámetro de la barra; `?drive=0` lo borra).

Procedimiento para sumar a una persona:

1. Agregar su mail en Google Cloud Console → APIs y servicios → Pantalla de consentimiento OAuth → Usuarios de prueba (máx. 100).
2. Mandarle el link `https://ajedrez-ffyl.github.io/entrenador-ajedrez/?drive=1` (abrirlo una vez alcanza; queda habilitado en ese navegador).
3. Avisarle que Google le pedirá reconectar cada 7 días (limitación del modo Prueba).

Si alguien con el link especial intenta conectar y Google lo rechaza (no está en la lista), la app dice:
«Tu cuenta no está habilitada para el respaldo en Drive. Pedíselo a quien te pasó la app, o usá el respaldo con archivo.»
La sincronización silenciosa al abrir la app solo corre si el link especial fue usado y ya había una cuenta conectada.
