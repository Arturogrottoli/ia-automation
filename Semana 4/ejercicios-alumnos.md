# Semana 4 · Ejercicios

**Módulo 4: Conceptos técnicos**

### Palabras que vas a ver en estos ejercicios

| Palabra | Qué quiere decir |
|---|---|
| **API** | La puerta por la que un programa le habla a otro. |
| **Endpoint** | Cada dirección de una API que acepta pedidos: `/v1/dolares/oficial`. |
| **HTTP** | El idioma de los pedidos por internet (el `http://` de las direcciones). |
| **Método** | Qué querés hacer: GET (leer), POST (crear), PUT (reemplazar), PATCH (cambiar una parte), DELETE (borrar). |
| **Headers** | Datos sobre el pedido; ahí va la credencial. El "sobre" de la carta. |
| **Body** | El contenido del pedido o de la respuesta. La "carta". |
| **Status code** | El número que dice cómo salió: 200 bien, 4xx error tuyo, 5xx error del servidor. |
| **API Key** | Una clave fija que te da un servicio para identificarte. |
| **OAuth2** | "Iniciar sesión con Google" para n8n: un permiso sin dar tu contraseña. |
| **Credencial** | La clave o el permiso guardado en n8n, para usarlo en todos tus flujos. |
| **HTTP Request** | El nodo de n8n que le habla a cualquier API. |
| **Webhook** | Una dirección de n8n que espera que le manden algo y arranca el flujo. |
| **Polling** | Preguntar cada tanto si hay algo nuevo. |

---

## En clase

### Ejercicio 1 · ¿De dónde saca los datos tu app? (2 min)

Pensá en una app que usás todos los días. Cuando te muestra el clima, el saldo o los mensajes nuevos, ¿de dónde saca
esos datos? Escribí en el chat la app y de dónde creés que los saca.

### Ejercicio 2 · ¿Qué método usarías? (3 min)

Respondé con el número y el método (GET, POST, PUT, PATCH o DELETE).

1. Traer la lista de pedidos de hoy
2. Registrar un turno nuevo
3. Cambiar solo el estado de un pedido a "enviado"
4. Borrar un contacto duplicado
5. Consultar el clima de Bariloche
6. Mandar los datos de un formulario a un webhook
7. Reemplazar la ficha completa de un producto con la versión nueva

### Ejercicio 3 · Detective de errores (6 min)

El profe ejecuta cinco pedidos que dan error. Para cada uno, respondé en el chat: ¿qué número es? ¿Es culpa nuestra
(4xx) o del servidor (5xx)? ¿Qué harías para arreglarlo?

### Ejercicio 4 · Tu primera integración real (lo armamos a la par)

Lo armás en tu n8n mientras el profe lo arma en pantalla. Si te perdés, acá están todos los pasos.

**Paso 1 · El primer GET**

1. Workflow nuevo. Nombre: `Integración real`. **Add first step** → **Trigger manually**.
2. **+** → **HTTP Request**. *Method*: **GET**. *URL*: `https://dolarapi.com/v1/dolares/oficial`.
3. **Add option** → **Response** → activá **Include Response Headers and Status**. Renombralo: `Cotización del
   dólar`. **Execute step**: mirá `statusCode`, `headers` y `body`.
4. **+** → **Edit Fields** con tres campos: `dolar_venta` (Number, arrastrá `venta`), `actualizado` (String,
   arrastrá `fechaActualizacion`) y `estado_http` (Number, arrastrá `statusCode`). Renombralo: `Quedarme con lo que
   sirve`.

**Paso 2 · La credencial**

5. Creá una cuenta gratis en **newsapi.org** → *Get API Key* y copiá tu clave.
6. En n8n: **Credentials** → **Create credential** → **Header Auth** → *Name*: `X-Api-Key`, *Value*: tu clave.
   Nombre de la credencial: `NewsAPI` → **Save**.
7. En el flujo, otro **HTTP Request**: *URL* `https://newsapi.org/v2/everything` → *Authentication*: **Generic
   Credential Type** → **Header Auth** → `NewsAPI`.
8. Activá **Send Query Parameters**: `q` = `Bariloche`, `language` = `es`, `sortBy` = `publishedAt`, `pageSize` =
   `3`. Renombralo: `Noticias de Bariloche`. **Execute step**: tres noticias.
9. **Rompela:** cambiale una letra a la clave en la credencial, guardá y ejecutá. Leé el 401. Después arreglala.

**Paso 3 · OAuth2 con Google:** lo muestra el profe. Vos lo hacés en casa con el Ejercicio 8.

**Paso 4 · El webhook**

10. Workflow nuevo: `Consulta por webhook`. **Add first step** → **Webhook**. *HTTP Method*: **POST**. *Path*:
    `consulta`. *Respond*: **When Last Node Finishes**. Renombralo: `Recibir consulta`.
11. Apretá **Listen for test event**.
12. Mandale una consulta. En Windows, en PowerShell:

```text
Invoke-RestMethod -Method Post -Uri "http://localhost:5678/webhook-test/consulta" -ContentType "application/json" -Body '{"nombre":"Lucia Fernandez","destino":"Mendoza","monto_usd":800}'
```

En Mac, en Terminal:

```text
curl -X POST "http://localhost:5678/webhook-test/consulta" -H "Content-Type: application/json" -d '{"nombre":"Lucia Fernandez","destino":"Mendoza","monto_usd":800}'
```

13. Mirá la salida del webhook: lo que mandaste está adentro de `body`.

**Paso 5 · Todo junto**

14. Después del webhook: un **HTTP Request** al dólar (`Cotización del dólar`) y otro a NewsAPI con **la misma
    credencial** (`Noticias del destino`), con `language` = `es`, `pageSize` = `3` y `q` = el `destino` arrastrado
    desde *Recibir consulta*.
15. Un **Edit Fields** `Armar respuesta` con estos campos (pegá cada valor; elegí el tipo en el desplegable):

```text
nombre        (String)  {{ $('Recibir consulta').item.json.body.nombre }}
destino       (String)  {{ $('Recibir consulta').item.json.body.destino }}
monto_usd     (Number)  {{ $('Recibir consulta').item.json.body.monto_usd }}
dolar_oficial (Number)  {{ $('Cotización del dólar').item.json.venta }}
monto_pesos   (Number)  {{ $('Recibir consulta').item.json.body.monto_usd * $('Cotización del dólar').item.json.venta }}
noticias      (Array)   {{ $json.articles.map(a => a.title) }}
```

16. **Execute workflow** y mandá otra vez el comando del paso 12: la terminal te muestra la respuesta, con el monto
    en pesos y las noticias.
17. **Ctrl + S** → menú **…** → **Download**. Guardá el `.json`.

---

## Para casa (antes de la Semana 5)

### Ejercicio 5 · Repetilo con otra API (20 min)

1. Hacé un GET a **Open-Meteo**, una API del clima que no pide clave. Para Bariloche:

```text
https://api.open-meteo.com/v1/forecast?latitude=-41.13&longitude=-71.31&current=temperature_2m
```

2. Encontrá en la respuesta la temperatura actual. ¿En qué casillero está? ¿Adentro de cuál?
3. Cambiá la ciudad: buscá en internet la latitud y la longitud de tu ciudad y cambiá los parámetros.
4. **Opcional:** elegí otra API que te interese (películas, fútbol, criptomonedas), leé su documentación y hacé un
   GET con su API Key, guardada como credencial.

### Ejercicio 6 · Leé una respuesta: objetos y listas (10 min)

Esta es una respuesta (recortada) de NewsAPI:

```json
{
  "status": "ok",
  "totalResults": 31,
  "articles": [
    {
      "source": { "id": null, "name": "Diario Río Negro" },
      "title": "Bariloche espera una temporada récord",
      "url": "https://...",
      "publishedAt": "2026-11-05T10:00:00Z"
    },
    {
      "source": { "id": null, "name": "El Cordillerano" },
      "title": "Nuevos vuelos a Bariloche desde Córdoba",
      "url": "https://...",
      "publishedAt": "2026-11-04T18:30:00Z"
    }
  ]
}
```

1. ¿Qué es `articles`: un objeto `{ }` o una lista `[ ]`? ¿Cuántos elementos tiene?
2. ¿Qué es `source`: un objeto o una lista?
3. Escribí la expresión para traer el título de la **primera** noticia.
4. Escribí la expresión para traer el **nombre del diario** de la **segunda** noticia.
5. ¿Para qué te sirve `totalResults` en un flujo?

### Ejercicio 7 · ¿Webhook o polling? (10 min)

Para cada caso, decí si usarías un **webhook** o **polling** (un Schedule Trigger que pregunta cada tanto), y por
qué.

1. Cada vez que alguien completa un formulario de Typeform, guardarlo en una planilla.
2. Revisar cada mañana si bajó el precio de un vuelo.
3. Cada vez que entra un pago en Mercado Pago, avisar por WhatsApp.
4. Traer las ventas del día de un sistema viejo que no sabe mandar avisos.
5. Cada mensaje nuevo en un bot de Telegram.

### Ejercicio 8 · OAuth2 con Google, con calma (30 min)

El Paso 3 que mostró el profe, en tu cuenta. Los nombres de los botones de Google Cloud cambian seguido: si no
encontrás uno, buscá el parecido.

1. **Crear el proyecto.** Entrá a **console.cloud.google.com** con tu Gmail. Arriba, el selector de proyectos →
   **New project** ("proyecto nuevo") → nombre `n8n curso` → **Create**. Fijate que quede seleccionado.
2. **Habilitar la API.** Menú ☰ → **APIs & Services** → **Library** ("biblioteca") → buscá **Google Sheets API** →
   **Enable** ("habilitar"). Repetí con **Google Drive API** (n8n la usa para listar tus planillas).
3. **La pantalla de consentimiento.** Menú ☰ → **Google Auth Platform** (puede aparecer como *OAuth consent
   screen*) → **Get started**:
   - *App name*: `n8n curso` · *User support email*: tu Gmail → **Next**;
   - *Audience*: **External** → **Next**;
   - *Contact information*: tu Gmail → **Next** → aceptá → **Create**.
4. **Agregarte como usuario de prueba.** En **Audience** → **Test users** → **Add users** → tu Gmail → **Save**.
   (Sin esto, Google te va a bloquear con *Access blocked*.)
5. **Copiar la dirección de regreso desde n8n.** En n8n: **Credentials** → **Create credential** → **Google Sheets
   OAuth2 API**. Copiá el campo **OAuth Redirect URL**: `http://localhost:5678/rest/oauth2-credential/callback`.
   Dejá esa pestaña abierta.
6. **Crear el cliente.** En Google: **Google Auth Platform** → **Clients** → **Create client** → *Application
   type*: **Web application** → nombre `n8n local` → **Authorized redirect URIs** → **Add URI** → pegá la dirección
   de n8n → **Create**.
7. **Copiar el Client ID y el Client Secret** que aparecen. El secret, en ese momento: después Google no lo vuelve a
   mostrar completo (si lo perdés, creás otro).
8. **Conectar.** En n8n, pegá los dos → **Sign in with Google** → elegí tu cuenta → *Google hasn't verified this
   app* → **Continue** → tildá los permisos → **Continue**. Tiene que decir **Account connected**. **Save**.
9. **Probarlo.** Creá una planilla de Google con dos o tres filas. En un flujo, un nodo **Google Sheets** → *Get
   row(s) in sheet* → tu credencial → tu planilla → **Execute step**.

| Si te aparece… | Qué pasó | Qué hacés |
|---|---|---|
| *Error 400: redirect_uri_mismatch* | La dirección de regreso de Google no es idéntica a la de n8n | Copiala de nuevo desde n8n, pegala en el cliente de Google, guardá y esperá unos minutos. Fijate: http (no https), localhost, 5678, sin barra al final. |
| *Access blocked* o *Error 403: access_denied* | Tu Gmail no está como usuario de prueba | Paso 4. |
| *Google hasn't verified this app* | Es normal: la app es tuya | **Continue**. |
| A la semana deja de andar | En modo de prueba, Google vence el permiso a los 7 días | En la credencial, **Reconnect** (o *Sign in with Google* de nuevo). |

**Además:** leé `Semana 4.docx` y hacé el cuestionario del módulo en la plataforma.

---

## Pre-entrega 2 · Infraestructura de integración técnica

> La filmina 32 la llama "pre-entrega 4"; el programa del curso, "Preentrega 2". Es la misma entrega.

**Qué es:** construir un workflow funcional en n8n que reciba o consulte datos de una fuente externa (vía API o
webhook), los procese con al menos algunos de los nodos lógicos vistos y entregue un resultado estructurado.

**Duración estimada:** entre 90 y 120 minutos.

### Consigna

1. **Elegí un disparador (trigger).** Puede ser un **Webhook** (alguien o algo le manda datos a tu workflow) o un
   nodo que consuma una **API pública** con un HTTP Request (clima, noticias, tipo de cambio, cualquier endpoint
   público que no pida credenciales complejas). No hace falta OAuth2 si la API no lo pide: con una API Key simple
   alcanza para cumplir con la "autenticación".
2. **Procesá los datos con lógica de control y transformación.** ¿Hay que filtrar según una condición? ¿Derivar
   según distintos casos? ¿Juntar información de más de una fuente? ¿Limpiar o renombrar campos? ¿Esperar algo?
   Elegí los nodos que mejor lo resuelvan (Wait, Merge, Aggregate, Switch, If, Edit Fields u otros) y usalos donde
   aporten valor, **no para completar una cuota**.
3. **Mapeá la anatomía del workflow.** Un diagrama simple o una lista de pasos: trigger → nodos intermedios →
   output, que muestre qué entra y qué sale de cada nodo.
4. **Entregá un output final claro.** Una respuesta HTTP (si usaste webhook), un archivo, o el JSON final visible en
   la última ejecución. Que se entienda qué transformación sufrieron los datos.
5. **Reflexión corta (3–4 líneas).** ¿Qué pasaría si la API que consultaste se cae o devuelve un error? ¿Dónde
   pondrías un manejo de error o un nodo If para chequear el status code? No hace falta implementarlo: solo decir
   dónde iría y por qué.

### Formato de entrega

**Un único archivo PDF**, claro y prolijo, con:
- captura(s) del workflow completo en n8n (el canvas con todos los nodos conectados);
- captura del output final (el JSON o el resultado visible);
- el diagrama de la consigna 3 (podés usar Excalidraw, draw.io o una lista) y la reflexión de la consigna 5.

### Criterios de aceptación

- El PDF incluye una captura legible del workflow completo.
- El flujo usa al menos un nodo **HTTP Request** o **Webhook**.
- Se usan al menos **dos nodos de lógica o transformación** (If, Merge, Edit Fields, etc.).
- El diagrama refleja correctamente los nodos implementados.
- La reflexión identifica un punto de falla coherente con el flujo.

### Rúbrica (según el programa)

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Diseño del flujo e integración de la fuente de datos | Un caso de uso realista y el recorrido del dato bien definido, del origen al destino | **10 %** |
| Implementación técnica en n8n | Un trigger, al menos dos nodos de control o transformación y expresiones para mapear datos entre nodos | **50 %** |
| Manejo de errores y reflexión técnica | Dónde iría un If o un *Error Trigger* para manejar fallos de la API, y por qué mejora el flujo | **25 %** |
| Documentación visual del PDF | Diagrama, capturas del canvas, captura del JSON final y presentación general | **10 %** |
| Claridad técnica en la transformación de datos | Datos renombrados, filtrados o combinados de forma comprensible; una salida útil y bien explicada | **5 %** |

**Total: 100 pts · Aprobación: 70 pts**
