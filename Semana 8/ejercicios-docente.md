# Semana 8 · Ejercicios — versión docente

**No se comparte con los alumnos.** Respuestas, las salidas reales de los flujos, cómo corregir la Pre-entrega 4 y
las trabas.

**Cómo se probó** (7 de noviembre de 2026): n8n 2.46.6 y Ollama 0.40 en Docker, sin placa de video. Sin cuenta de
Meta: el canal se probó con el simulador (flujos 03 y 04), que recibe el mismo paquete que manda Meta. El cerebro fue
`llama3.2` en vez de Gemini (no había clave), así que **con Gemini las respuestas van a ser mejores y mucho más
rápidas**. Lo que se probó contra Meta de verdad: el nodo de respuesta con un token inventado (para ver el error real).
Lo que **no** se probó: el WhatsApp Trigger recibiendo de Meta, el túnel `cloudflared` y el error 131030 con números
argentinos.

---

## Ejercicio 0 · Tu app de Meta

No tiene respuesta: o llegan con los cinco datos, o no. Lo que suele trabar:

| Traba | Qué hacer |
|---|---|
| "No me deja registrarme como desarrollador" | Meta pide confirmar el celular o el mail de la cuenta de Facebook. Una cuenta muy nueva o sin datos a veces queda en revisión: que use otra, o el simulador. |
| "No aparece el caso de uso de WhatsApp" | Que busque "WhatsApp" en la lista de casos de uso. Si la cuenta es de una empresa con restricciones, el simulador. |
| "No me llega el código para agregar mi número" | Revisar el código de país. Que pruebe con y sin el 9. |
| "No me llegó el hello_world" | El número no quedó confirmado en la lista **To**, o el token venció. |
| "¿Puedo usar mi número personal?" | No: si lo registra en la API, deja de andar en su WhatsApp. El de prueba alcanza para todo el curso. |

---

## Ejercicio 1 · ¿Qué WhatsApp necesita?

| Caso | Respuesta | Por qué |
|---|---|---|
| 1. Pastelería, "¿cómo se paga?" 30 veces | App · **respuestas rápidas** | Contesta una persona; el atajo `/pagos` le ahorra tipear. |
| 2. Inmobiliaria, a las 3 de la mañana | **Platform** + agente | Nadie está despierto: tiene que contestar un programa que entienda la consulta. |
| 3. Dentista, "estamos cerrados" | App · **mensaje de ausencia** | Es un texto fijo, no hace falta entender nada. |
| 4. Tienda online, "tu pedido salió" | **Platform** · plantilla de **utilidad** | La empresa escribe primero, a cada comprador, desde su sistema: plantilla aprobada. |
| 5. Vivero, plantas con foto y precio | App · **catálogo** | Es la vidriera dentro del chat. |

La idea: **la app alcanza mientras una persona pueda contestar.** Si alguien dice "las etiquetas" para el caso 1, no
está mal para ordenar, pero no responde la pregunta. Si alguien dice "un agente" para el caso 3: funciona, pero es
matar un mosquito con un cañón (es el criterio del Módulo 2).

---

## Ejercicio 2 · El humano detrás de la IA

Una respuesta posible:

```text
Uf, perdón por la espera, tenés toda la razón 🙏
Ya le paso tu caso a alguien del equipo para que te mande el voucher por este chat.
¿Me confirmás tu nombre completo y el destino así lo encuentran rápido?
```

Una regla posible para el system prompt:

```text
Si el cliente está molesto o reclama una demora: pedí disculpas en una frase, sin excusas, decí que lo pasás con
una persona del equipo y pedile el dato que haga falta para encontrar su caso. No prometas plazos ni envíos que no
podés hacer vos.
```

Lo que tiene que aparecer (y lo que no):

| Sí | No |
|---|---|
| Disculpas cortas, en lenguaje de chat | "Estimado cliente", "le informamos", "atentamente" |
| Qué va a pasar (lo deriva) | "Te lo mando ya" (el bot no tiene el voucher) |
| Un micro-cierre útil (pedir el dato) | Tres párrafos de excusas |
| Un emoji como mucho | 😊🙏✈️🌎 |

---

## Ejercicio 3 · La práctica: salidas reales

Todas con el simulador (03 + 04) y `llama3.2` en Ollama, sin placa de video. Los tiempos son los de una
computadora modesta sin GPU: con Gemini, la respuesta llega en 2 a 5 segundos.

**El primer mensaje** (el que manda el flujo 04 tal como viene; 304 segundos, modelo en frío):

```text
Juan: "Hola! Me llamo Juan. Qué paquetes tienen para el sur?"
Ana:  *Fin del Mundo* 🌟: 5 días, USD 1320. ...
      *Bariloche Clásico*: 5 días, USD 950. ...
      *Bariloche Nieve*: 7 días, USD 1450. (Sin cupos actuales)
      *Norte Mágico*: 6 días, USD 890. ...        ← Salta no es "el sur"
      *Cataratas Express*: 3 días, USD 640. ...   ← Cataratas tampoco
      ¿Cuál es tu destino favorito en el sur?
```

**Paso 2, sin system prompt** (407 segundos, en frío): *"¡Hola! Me alegra que hayas iniciado una conversación
conmigo. Puedo proporcionarte información sobre una amplia variedad de temas, incluyendo: * Historia * Ciencia *
Tecnología * Salud ..."*. No sabe que es una agencia.

**Paso 4, con system prompt** (86 segundos): los seis paquetes, cada uno en negrita de WhatsApp (`*así*`, un
asterisco: bien) y con su emoji (seis: mal), y cierra con *"¿Qué paquete te interesa?"* (bien).

**Paso 3, la memoria:**

| Mensaje | Respuesta | Qué muestra |
|---|---|---|
| Juan: "y el primero cuanto sale?" | "*Bariloche Clásico*: USD 950. ..." | Se acordó de la lista anterior: memoria |
| Juan: "como me llamo?" | "Me llamas Juan. ..." | No prueba nada: el nombre va en el prompt |
| Juan: "Viajo con mi hija, se llama Sofía" | Le ofreció Bariloche | Ignoró el dato |
| Juan: "cómo se llama mi hija?" | Le repitió lo de Bariloche | La memoria le pasó el mensaje (se ve en la ejecución), pero el modelo no lo usó |
| María: "cómo se llama mi hija?" | "Lo siento, pero no tengo información sobre tu hija. Soy Sos Ana..." | No se mezcló con Juan |

**Paso 3, la memoria mal configurada** (*Connected Chat Trigger Node*): *"Error in sub-node Memoria por teléfono"* →
*"No session ID found"*.

**Paso 5, los bordes:**

| Mensaje | Respuesta | Tiempo |
|---|---|---|
| Una foto | "Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?" | 0 s (no pasa por la IA) |
| Un audio | La misma | 0 s |
| "me recomendas un buen abogado?" | "Lo siento, María, pero eso no está relacionado con los viajes. ... ¿Quieres ver nuestros paquetes de viajes?" | 14 s |
| "Quiero reservar Cataratas para 2 ya, te paso la tarjeta" | "...no puedo confirmar reservas ni tomar pagos directamente en este chat. Para reservar el paquete *Cataratas Express*, necesito ... tu nombre completo, el destino ... y las fechas" | 23 s |
| "hace 3 dias que nadie me contesta, es una verguenza" | "Lo siento mucho, María. Es posible que el vendedor esté ocupado ... ¿Quieres que te pase a otro vendedor del equipo?" | 20 s |
| Un aviso de "entregado" (sin mensaje) | El simulador no lo deja pasar (como el trigger con *Receive Message Status Updates* vacío). El webhook contesta *"No item to return was found"*: es normal | 0 s |

**El error del token** (nodo de WhatsApp contra la API real de Meta, con un token inventado):
*"Authorization failed - please check your credentials"* → detalle *"Malformed access token"* (`OAuthException`,
código 190).

---

## Ejercicio 4 · Cómo corregir la Pre-entrega 4

La rúbrica del programa, con qué mirar en cada punto:

| Criterio | Peso | Excelente | Flojo |
|---|---|---|---|
| Caso de uso | 20 % | Negocio concreto, función acotada, ejemplos de mensajes como los escribiría un cliente ("hola cuanto sale x 2?") | "Un asistente para responder consultas" sin negocio ni ejemplos |
| Local o nube | 20 % | Dos o más argumentos técnicos ligados al caso: datos sensibles, volumen diario, tiempo de respuesta, qué pasa si el proveedor se cae. Si es local, modelo y RAM | "Elijo la nube porque es mejor" |
| El flujo | 25 % | Webhook o trigger → preparación de datos → AI Agent con **Session ID = teléfono** → nodo de respuesta. Captura con ejecución exitosa | Sin memoria, o con memoria de clave fija; sin captura de ejecución |
| El system prompt | 20 % | Rol, negocio, formato móvil (2-3 líneas, `*negrita*`, micro-cierre), límites y **qué hace cuando no sabe** (deriva a un humano) | Un párrafo genérico ("Sos un asistente amable") |
| Escalabilidad | 15 % | Números: "con 500 mensajes por día, Gemini gratis no alcanza (límite de pedidos); paso al plan pago, unos USD X por mes" o "con Ollama, una sola PC no atiende 10 a la vez: haría falta una GPU o pasar a la nube". Menciona la memoria (Simple Memory se borra al reiniciar) | "Funcionaría igual" |

**Señales de alerta:**
- La captura es del chat de prueba de n8n (*Open chat*), no de WhatsApp ni del simulador: no muestra la entrada por
  webhook. Pedirle la ejecución con el trigger o el simulador.
- El Session ID es `{{ $json.sessionId }}` o "Connected Chat Trigger Node": no funciona con WhatsApp.
- El token aparece en la captura o en el PDF. Avisarle que lo regenere.
- Elige Ollama "porque es gratis" para un bot de WhatsApp con herramientas, sin mencionar los tiempos. Pedirle que lo
  pruebe: Ana local tardó minutos en la Semana 7.

**Si la comisión usa la versión de la plataforma** (con RAG): sumar a "El flujo" que haya una carga del documento
(Flujo A) y un agente que lo consulte (Flujo B), con el mismo modelo de embeddings en los dos. El Ejercicio 6 es la
referencia.

---

## Ejercicio 5 · Del simulador al WhatsApp de verdad

No se pudo probar contra Meta. Lo que sí está verificado en el código de n8n 2.46:
- **El WhatsApp Trigger se suscribe solo.** Al publicar (o al ejecutar para probar), n8n le pide a Meta, con el App ID
  y el App Secret, que mande los mensajes de `whatsapp_business_account` a su dirección. Usa como Verify Token el ID
  del nodo, y contesta el `hub.challenge` solo.
- **Una suscripción por app.** Si ya hay una con otra dirección, el trigger da: *"The WhatsApp App ID … already has a
  webhook subscription. Delete it or use another App before executing the trigger."*
- **Firma.** Cada mensaje de Meta viene firmado con el App Secret (`x-hub-signature-256`). Si no coincide, el trigger
  devuelve vacío: no hay error, no hay ejecución.
- **La dirección del trigger** sale de `WEBHOOK_URL`. Sin esa variable, con n8n en Docker, es
  `http://localhost:5678/...`, y Meta no la acepta.

Lo que **no** está verificado y conviene que pruebes antes de la clase: el comando de `cloudflared`, que la app en
modo **Desarrollo** reciba los mensajes del número de prueba (la documentación de n8n dice que hay que pasar la app a
**Live**, lo que pide una URL de política de privacidad), y el problema del 9 en los números argentinos.

Lo que pasó al activar el flujo 02 con credenciales inventadas: n8n no pudo pedirle a Meta el permiso de la app y
dejó en el registro *"Bad request - please check your parameters"* y *"Could not remove webhook "WhatsApp Trigger" …"*.
No aparece en el canvas: con el *App ID* o el *App Secret* mal, el síntoma para el alumno es que "no pasa nada".

---

## Ejercicio 6 · RAG: salidas reales

**La carga:** el documento (unos 2.700 caracteres) se cortó en **5 pedazos** de hasta 600 caracteres.

**La búsqueda sola** (sin el cerebro: qué 3 pedazos trae para cada pregunta). El pedazo correcto, en negrita:

| Pregunta | `nomic-embed-text` (el primero que se probó) | `embeddinggemma` (el del flujo) |
|---|---|---|
| "cuantos kilos puedo llevar en la valija?" | **Documentación + Equipaje** (1º) | **Documentación + Equipaje** (1º, 0,49) |
| "Si me arrepiento 20 días antes de viajar, me devuelven la plata?" | Documentación, Cambios de fecha, Alimentación: **no trajo Cancelaciones** | **Cancelaciones** (1º, 0,48) |
| "puedo llevar a mi perro?" | Cambios de fecha, Documentación, Cancelaciones: **no trajo Mascotas** | **Alimentación + Mascotas** (1º, 0,36) |
| "tienen descuento para jubilados?" (no está) | puntajes de 0,61 a 0,67, como si hubiera algo | puntajes de 0,23 a 0,28: claramente "nada parecido" |

`bge-m3` (1,2 GB) también encontró las tres. `nomic-embed-text` es un modelo pensado para inglés: es la advertencia
del material de lectura ("el modelo de embeddings debe manejar bien el idioma de los documentos"), en vivo. Es un
buen ejemplo para mostrar si alguien pregunta por RAG.

**Con el agente completo** (`nomic-embed-text` + `llama3.2` como cerebro):

| Pregunta | Respuesta | Tiempo | ¿Bien? |
|---|---|---|---|
| "Si me arrepiento 20 días antes…" | "*No se devuelve la plata en caso de arrepentimiento de viaje.*" | 321 s | ❌ (es el 50 %; la búsqueda no trajo el párrafo) |
| "mi hijo es celiaco, hay problema con la comida?" | "*Alimentación especial: los hoteles ofrecen opciones sin TACC ... siempre que se avise al momento de reservar.*" | 247 s | ✅ |
| "cuantos kilos puedo llevar en la valija?" | "*No se especifica un peso máximo para la valija en la información disponible.* ¿Quieres consultar con un vendedor?" | 1.232 s | ❌ (la búsqueda trajo el párrafo de 15 kg; el modelo no lo vio) |

Por eso el flujo 05 quedó con `embeddinggemma` para los embeddings (local, gratis, entiende castellano) y **Gemini**
como cerebro. **Con Gemini no se pudo probar**: hacelo antes de mostrarlo. Las respuestas esperadas: 50 % de
devolución (cancela entre 30 y 15 días antes); sin TACC avisando al reservar; 15 kg en bodega y 8 kg de mano; perros
chicos solo en algunos hoteles de Mendoza y Salta, consultando; y para jubilados, "no tengo esa información, lo
consulto con un vendedor".

---

## El cuestionario del módulo (6 preguntas)

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | Diferencia entre la App y la Platform | **B** · la API permite automatizar a escala; la App es manual |
| 2 | Qué son los *Messaging Limits* | **B** · cuántas conversaciones nuevas puede iniciar la empresa en 24 horas |
| 3 | Herramienta para la misma pregunta de pagos | **B** · respuestas rápidas |
| 4 | Categorías de plantillas (múltiple) | **A, B y C** · marketing, utilidad y autenticación |
| 5 | Para qué sirve el catálogo | **B** · mostrar productos con foto adentro del chat |
| 6 | Qué es un mensaje de ausencia | **A** · una respuesta automática fija por falta de disponibilidad |

Ojo con la 2: la explicación de la plataforma habla de "conversaciones" y de un límite inicial de 250. Meta cambió la
forma de cobrar en julio de 2025 (ahora es por mensaje de plantilla), y los límites se fueron ajustando. Para el
cuestionario vale la B; para un presupuesto real, la página de Meta.

---

## Las trabas de la clase (resumen)

| Síntoma | Causa | Arreglo |
|---|---|---|
| No llega nada | Flujo sin publicar, dirección no pública, App Secret mal, otro trigger de la misma app | En ese orden |
| Llega pero no sale | Token vencido o mal, destinatario fuera de la lista, *Send Template* | Token nuevo, lista **To**, *Operation: Send* |
| Tres ejecuciones por mensaje | Avisos de estado | *Receive Message Status Updates* vacío + filtro *¿Es un mensaje?* |
| Mezcla clientes | Clave de memoria fija | Teléfono |
| Error de sesión en la memoria | *Connected Chat Trigger Node* | *Define below* + teléfono |
| Cambios que no se aplican | No volvió a publicar | *Publish* |
| `**negrita**` | Costumbre del modelo | Regla explícita en el prompt |
| Una foto rompe el flujo | `texto` vacío al agente | *¿Es texto?* con respuesta fija |
