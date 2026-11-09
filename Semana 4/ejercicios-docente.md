# Semana 4 · Ejercicios — versión docente

Respuestas esperadas de `ejercicios-alumnos.md`, qué pasa en cada flujo de la carpeta `n8n/` y la pre-entrega
resuelta. **No compartir con los alumnos.** Lo de n8n está probado en la versión 2.46, con las APIs reales, el 6 de
noviembre de 2026.

---

## En clase

### Ejercicio 1 · ¿De dónde saca los datos tu app?

Respuesta abierta. Lo que hay que remarcar: cada vez que una app muestra algo que no es suyo, hay una API atrás.
Ejemplos para tirar si nadie arranca: la app del clima (un servicio meteorológico), el seguimiento de Mercado Libre
(la API del correo), el mapa de Uber (Google Maps), la cotización en la app del banco.

### Ejercicio 2 · ¿Qué método usarías?

| # | Caso | Método |
|---|---|---|
| 1 | Traer los pedidos de hoy | **GET** |
| 2 | Registrar un turno nuevo | **POST** |
| 3 | Cambiar solo el estado de un pedido | **PATCH** (PUT si la API no tiene PATCH, mandando la ficha completa) |
| 4 | Borrar un contacto duplicado | **DELETE** |
| 5 | Consultar el clima | **GET** |
| 6 | Mandar un formulario a un webhook | **POST** |
| 7 | Reemplazar la ficha completa de un producto | **PUT** |

### Ejercicio 3 · Detective de errores

Flujo `03-detective-de-errores.json`. Cada nodo le pide a `https://httpbin.org/status/(código)` y recibe ese error.
Mensajes que muestra n8n 2.46 (probados):

| Nodo | Código | Mensaje de n8n | Causa | Solución |
|---|---|---|---|---|
| Error A | 401 | *Authorization failed - please check your credentials* | No se identificó o la credencial está mal | Revisar o renovar la credencial |
| Error B | 403 | *Forbidden - perhaps check your credentials?* | La credencial está bien pero no tiene permiso | Más permisos, otra cuenta u otro plan. Cambiar la clave no alcanza |
| Error C | 404 | *The resource you are requesting could not be found* | La URL o el dato no existe | Revisar la URL o el identificador |
| Error D | 429 | *The service is receiving too many requests from you* (sugiere *batching* en *Options*) | Demasiados pedidos seguidos | Espaciar: *Options* → *Batching*, o un Wait |
| Error E | 500 | *The service was not able to process your request* | Falló el servidor | Reintentar más tarde (*Settings* → *Retry On Fail*) |

**Lo que hay que remarcar:** la diferencia entre 401 y 403 (el material de la plataforma la llama
*Unauthenticated* contra *Unauthorized*). Y que n8n traduce el número a una frase: el número aparece en los
detalles del error.

### Ejercicio 4 · Tu primera integración real

Resultados esperados (probados):

| Paso | Qué sale |
|---|---|
| 1 · Cotización del dólar | `statusCode: 200`, `headers` (con `content-type: application/json`) y `body` con `compra`, `venta`, `casa`, `fechaActualizacion`. El 6/11/2026: compra 1520, venta 1570 |
| 1 · Quedarme con lo que sirve | `{"dolar_venta": 1570, "actualizado": "2026-11-05T11:00:00.000Z", "estado_http": 200}` |
| 2 · Noticias de Bariloche | `status: "ok"`, `totalResults` y `articles` (3) |
| 2 · Con la clave rota | Rojo: *Authorization failed - please check your credentials*; abajo, el mensaje de NewsAPI: *Your API key is invalid or incorrect...* (HTTP 401). Sin clave: *Your API key is missing* (también 401) |
| 4 · Recibir consulta | `headers`, `params`, `query`, `body` (lo que se mandó), `webhookUrl`, `executionMode: "test"` |
| 5 · La respuesta | `{"nombre": "Lucia Fernandez", "destino": "Mendoza", "monto_usd": 800, "dolar_oficial": 1570, "monto_pesos": 1256000, "noticias": [...]}` |

- **El webhook probado de punta a punta:** publicado, con un POST a `/webhook/consulta`, respondió HTTP 200 con el
  JSON de arriba (sin el nodo de noticias, porque en la prueba no había una clave válida).
- **La Test URL sin apretar *Listen*:** responde 404 con *The requested webhook "consulta" is not registered* y la
  pista *Click the 'Execute workflow' button on the canvas, then try again. (In test mode, the webhook only works
  for one call after you click this button)*.
- **NewsAPI acepta la clave de dos formas:** en el header `X-Api-Key` o como `Authorization: Bearer (clave)`.
  Probado: con una clave inválida, las dos dan 401 *apiKeyInvalid*.

## Los flujos de la carpeta `n8n/`

| Archivo | Para qué | Qué hay que hacer al importarlo |
|---|---|---|
| `01-primer-get-dolar.json` | Paso 1 terminado | Nada: no pide credencial |
| `02-api-key-noticias.json` | Paso 2 terminado | Elegir la credencial Header Auth de NewsAPI en el nodo |
| `03-detective-de-errores.json` | Ejercicio 3 | Nada. Ejecutar cada nodo por separado |
| `04-webhook-consulta.json` | Pasos 4 y 5 terminados | Elegir la credencial en *Noticias del destino*. Para probar: *Execute workflow* y mandar la consulta |
| `05-simulador-formulario.json` | Le manda una consulta al webhook del 04 | Primero *Execute workflow* en el 04; después en este. La salida es la respuesta del 04 |

Los archivos no traen credenciales (al exportar un flujo, n8n no exporta las claves): cada uno elige la suya.

## Paso 3 · OAuth2 con Google: el paso a paso completo

Para dejarlo listo antes de la clase (pasos 1 a 4) y para responder dudas del Ejercicio 8. La consola de Google
cambia los nombres seguido; estos son los de noviembre de 2026.

1. **console.cloud.google.com** → selector de proyectos → **New project** → `n8n curso` → **Create**.
2. **APIs & Services** → **Library** → **Google Sheets API** → **Enable**. Lo mismo con **Google Drive API** (n8n la
   usa para listar las planillas en el desplegable).
3. **Google Auth Platform** (o *OAuth consent screen*) → **Get started** → nombre de la app, mail de soporte →
   *Audience*: **External** → mail de contacto → aceptar → **Create**.
4. **Audience** → **Test users** → **Add users** → tu Gmail. La app queda en estado *Testing*: solo los usuarios de
   prueba pueden conectarse, y el permiso **vence a los 7 días** (hay que reconectar la credencial).
5. **En n8n:** *Credentials* → *Create credential* → **Google Sheets OAuth2 API** → copiar **OAuth Redirect URL**
   (`http://localhost:5678/rest/oauth2-credential/callback`).
6. **En Google:** **Clients** → **Create client** → **Web application** → *Authorized redirect URIs* → pegar →
   **Create**. Copiar **Client ID** y **Client Secret** (el secret se ve completo solo al crearlo).
7. **En n8n:** pegar los dos → **Sign in with Google** → cuenta → *Google hasn't verified this app* → **Continue** →
   permisos → **Continue** → **Account connected** → **Save**.

**Errores y causas:**

| Error | Causa | Solución |
|---|---|---|
| *Error 400: redirect_uri_mismatch* | La URI de Google no es idéntica a la de n8n: http/https, `localhost`/`127.0.0.1`, otro puerto, barra final | Copiar de nuevo desde n8n, pegar, guardar. Los cambios en Google pueden tardar unos minutos |
| *Access blocked: ... has not completed the Google verification process* / *Error 403: access_denied* | El Gmail no está en *Test users* | Agregarlo (paso 4) |
| *invalid_client* | Client ID o Secret mal copiados (un espacio de más) | Copiarlos de nuevo |
| Andaba y a la semana no | Vencimiento de 7 días del modo *Testing* | *Reconnect* en la credencial |
| El desplegable de planillas no muestra nada | Falta habilitar la Google Drive API | Habilitarla (paso 2) |

---

## Para casa

### Ejercicio 5 · Repetilo con otras APIs

- La URL de Open-Meteo devuelve (probado) algo como
  `{"latitude": -41.16, "longitude": -71.33, ..., "current_units": {"temperature_2m": "°C"}, "current": {"time": "2026-11-06T14:00", "interval": 900, "temperature_2m": 10.4}}`.
- La temperatura está en `current.temperature_2m`: el casillero `temperature_2m` adentro del objeto `current`. En
  n8n: `{{ $json.current.temperature_2m }}`.
- Ojo: `current_units` también tiene un `temperature_2m`, pero es la unidad (`°C`), no el valor. Es un buen ejemplo
  de "identificar el campo que realmente sirve".
- **PokeAPI** (probado con curl en noviembre 2026; la expresión no se corrió en n8n): Pikachu tiene `id` 25 y
  `{{ $json.types[0].type.name }}` da `electric`. `types` es una lista de objetos, y el nombre está dos niveles
  adentro (`type.name`). Si eligen un Pokémon de dos tipos (Charizard: fuego y volador), `types[1]` trae el segundo.
  `pikachuu` da **404** (`{"status":404,"message":"Not Found"}`): empieza con 4, el error es del pedido. En n8n el
  nodo se pone rojo.
- **Rick and Morty:** con `name=rick&status=alive`, `info.count` es **29**; sin `status`, **107** (los números pueden
  crecer si la API suma personajes). Cambió porque cada parámetro es un filtro: sacar uno trae más resultados. El
  primero de la lista: `{{ $json.results[0].name }}` → `Rick Sanchez`.

### Ejercicio 6 · Leé una respuesta

1. `articles` es una **lista** (`[ ]`), con 2 elementos (cada uno es un objeto).
2. `source` es un **objeto** (`{ }`).
3. `{{ $json.articles[0].title }}` → "Bariloche espera una temporada récord". Las listas se cuentan desde 0.
4. `{{ $json.articles[1].source.name }}` → "El Cordillerano".
5. Para saber si hay resultados antes de seguir: un IF con `totalResults` *is greater than* `0`. Si es 0, el flujo
   puede avisar "no hay noticias" en lugar de mandar un mensaje vacío.

### Ejercicio 7 · ¿Webhook o polling?

| # | Caso | Respuesta | Por qué |
|---|---|---|---|
| 1 | Formulario de Typeform | **Webhook** | Typeform sabe avisar; es instantáneo |
| 2 | Precio de un vuelo cada mañana | **Polling** (Schedule diario) | Nadie te avisa: vos preguntás |
| 3 | Pago en Mercado Pago | **Webhook** | Mercado Pago manda notificaciones; un pago no puede esperar 5 minutos |
| 4 | Sistema viejo sin avisos | **Polling** | No sabe mandar webhooks |
| 5 | Mensajes de Telegram | **Webhook** | El trigger de Telegram de n8n funciona con webhook |

Matiz para marcar: con n8n en la computadora, los webhooks de servicios de internet no llegan (n8n no es accesible
desde afuera). Para practicar, la terminal o el flujo 05; para producción, un servidor o un túnel.

### Ejercicio 8 · OAuth2 con Google

Ver "Paso 3 · OAuth2 con Google: el paso a paso completo" más arriba. Lo que más traba: no agregarse como usuario
de prueba, y el *redirect_uri_mismatch*. Pediles una captura de la credencial con **Account connected** y del nodo
de Sheets leyendo filas: la van a necesitar en el Módulo 5.

---

## Pre-entrega 2 · Ejemplo resuelto (agencia de viajes)

Para mostrar si preguntan "¿cómo tiene que quedar?". Sigue el caso de la agencia de las semanas anteriores. Los
alumnos lo hacen con su propio caso.

**Caso:** cuando llega una consulta desde el formulario de la web, responder en el momento con el precio del paquete
en pesos y derivarla al área que corresponde.

**El flujo (consigna 1, 2 y 4):**

```text
1. Recibir consulta (Webhook, POST)        → entra: {"nombre", "destino", "monto_usd", "categoria"}
2. Cotización del dólar (HTTP Request GET, dolarapi.com, con "Include Response Headers and Status")
                                           → sale: statusCode, body.venta
3. ¿La cotización llegó bien? (IF: statusCode = 200)
   ├─ true  → 4. Calcular precio (Edit Fields: monto_pesos = monto_usd × venta, redondeado)
   │          5. ¿A qué área va? (Switch por categoria: paquete / vuelo / hotel / Otra)
   │          6. Edit Fields por rama: area = "..."
   │          7. Juntar ramas (Merge, Append)
   │          8. Armar respuesta (Edit Fields: nombre, destino, monto_pesos, area, mensaje)
   └─ false → 9. Respuesta de respaldo (Edit Fields: mensaje = "No pudimos calcular el precio, te escribimos en un rato")
Salida: la respuesta del webhook, en JSON.
```

**La anatomía (consigna 3):** el diagrama de arriba, con qué entra y qué sale de cada nodo. Por ejemplo:

| Nodo | Entra | Sale |
|---|---|---|
| Recibir consulta | El POST del formulario | `body` con los 4 datos |
| Cotización del dólar | (nada: es un GET) | `statusCode` y `body.venta` |
| Calcular precio | La consulta y la cotización | `monto_pesos` |
| ¿A qué área va? | La consulta con el precio | La misma, por una de 4 salidas |
| Armar respuesta | La consulta con área y precio | `{"nombre", "destino", "monto_pesos", "area", "mensaje"}` |

**La reflexión (consigna 5):**

> Si dolarapi.com se cae o responde un error, el HTTP Request devolvería un status code distinto de 200 (o fallaría
> el nodo). Por eso, después de pedir la cotización, puse un IF que mira el status code: si no es 200, en vez de
> calcular un precio con un dólar vacío (que daría 0 pesos, un error silencioso), el cliente recibe un mensaje de
> respaldo. Además activaría *Retry On Fail* en el HTTP Request para reintentar dos veces, y un *Error Trigger* que
> me mande un mail si el flujo falla por otra causa.

Para que el IF pueda ver el status code cuando la API da error, el HTTP Request necesita en *Options* → *Response*:
**Include Response Headers and Status** y **Never Error** ("nunca dar error"); si no, el nodo se pone rojo y el
flujo se corta antes del IF. Es un buen detalle para quien quiera implementarlo.

**Cómo lo mira la rúbrica:** implementación (50 %): trigger, dos nodos de lógica de verdad (IF y Switch), y
expresiones para mapear; manejo de errores (25 %): un punto de falla concreto (la API del dólar) y por qué la
solución mejora el flujo (evita el precio en 0).
