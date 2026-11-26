# Semana 8 · Ejercicios — WhatsApp Business

Es la última clase del curso. **En clase no hay ejercicios:** el profe arma en vivo el asistente de WhatsApp con un
**simulador** (anda en n8n local: Meta no puede mandarle mensajes a un n8n que está en tu computadora, y la aprobación
de Meta puede tardar), un RAG y tres ejemplos más. **Todos estos ejercicios son para casa.** El 4 es la Pre-entrega 4.

Los flujos están en la carpeta `n8n/` de la semana, con los nombres de nodo que pone n8n. Para importar uno (si te
trabás armándolo): workflow nuevo → menú **…** → **Import from File** → **Save**.

| Flujo | Qué hace | ¿Anda en local? |
|---|---|---|
| `03-asistente-simulado.json` | El asistente (Ejemplo 1): recibe los mensajes del celular de mentira | ✅ |
| `04-mandar-mensaje-simulado.json` | El celular de mentira: le manda mensajes al 03 | ✅ |
| `05-rag-preguntas-frecuentes.json` | RAG (Ejemplo 2): Ana responde con las preguntas frecuentes | ✅ (con `ollama pull embeddinggemma`) |
| `06-fuera-de-horario.json` | Ejemplo 3: fuera de horario, respuesta fija y fila en una planilla | ✅ |
| `07-pasar-a-una-persona.json` | Ejemplo 4: Ana le manda un mail al vendedor | ✅ |
| `08-whatsapp-con-herramientas.json` | Ejemplo 5: Ana con la planilla, el dólar y la calculadora | ✅ |
| `01-eco-whatsapp.json` · `02-asistente-whatsapp.json` | Lo mismo, por WhatsApp de verdad | ❌ necesita n8n Cloud o túnel (Ejercicio 5) |
| `09-asistente-telegram.json` · `10-eco-telegram.json` | Por Telegram | ❌ necesita n8n Cloud o túnel |
| `11-eco-slack.json` | Un eco por Slack | ❌ necesita n8n Cloud o túnel |

**La regla:** si n8n **sale** a pedir algo (a Gemini, a Sheets, a Gmail, a Ollama), anda en local. Si alguien de
afuera tiene que **entrar** a tu n8n (Meta, Telegram, Slack), hace falta una dirección pública.

---

## Para casa

### Ejercicio 1 · ¿Qué WhatsApp necesita? (casa, 5 min)

Para cada caso: ¿alcanza con la **app WhatsApp Business** o hace falta la **Business Platform**? ¿Con qué herramienta?

1. A una pastelería le preguntan 30 veces por día "¿cómo se paga?".
2. Una inmobiliaria quiere que un agente responda consultas a las 3 de la mañana.
3. Un dentista quiere que a la noche le respondan "estamos cerrados, abrimos a las 9".
4. Una tienda online quiere avisar "tu pedido salió" a cada comprador.
5. Un vivero quiere mostrar sus plantas con foto y precio adentro del chat.

Herramientas de la app, para elegir: **respuestas rápidas**, **etiquetas**, **catálogo**, **mensaje de ausencia**.

### Ejercicio 2 · El humano detrás de la IA (casa, 5 min)

Un cliente escribe por WhatsApp:

> hace 3 dias que espero que me manden el voucher del hotel y nadie me contesta

El bot respondió:

> Estimado cliente: Le informamos que su solicitud ha sido recibida y será procesada según el orden de llegada.
> Agradecemos su paciencia. Atentamente, el equipo de Rumbo Sur.

1. Reescribí la respuesta para WhatsApp: empática, de 2 o 3 líneas, con un micro-cierre (una pregunta o el próximo
   paso).
2. Escribí **una regla** para el system prompt que haga que el bot responda así.

Pista: ¿el bot puede mandar el voucher? Si no puede, no lo prometa.

### Ejercicio 3 · Rehacé el asistente simulado (Ejemplo 1) (40 min)

El asistente de la clase, en tu n8n. Anda en local: no necesita Meta ni túnel. Si te trabás, importá
`03-asistente-simulado.json` y `04-mandar-mensaje-simulado.json` y comparalos con los tuyos. **No les cambies el
nombre a los nodos:** las expresiones usan los que pone n8n.

**1 · El asistente: la entrada**

```text
Workflow nuevo → nombre: Asistente simulado
Add first step → webhook → Webhook
   HTTP Method: POST · Path: whatsapp-simulado · Respond: When Last Node Finishes
+ → edit → Edit Fields (Set) → Add Field, cuatro veces (String):
   telefono  {{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from }}
   nombre    {{ $json.body.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name }}
   tipo      {{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.type }}
   texto     {{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body }}
Save → Publish
```

**2 · El celular de mentira**

```text
Workflow nuevo → nombre: Celular de mentira
Add first step → manual → Trigger manually
+ → Edit Fields (Set): telefono 5491155550001 · nombre Juan · tipo text · texto Hola! Me llamo Juan. Qué paquetes tienen para el sur?
+ → http → HTTP Request
   Method: POST · URL: http://localhost:5678/webhook/whatsapp-simulado
   Send Body: prendido · Body Content Type: JSON · Specify Body: Using JSON · JSON: el bloque de abajo (en Expression)
   Options → Timeout: 600000
Execute workflow → en el HTTP Request, OUTPUT: tus cuatro datos de vuelta (el canal anda)
```

```text
{{ JSON.stringify({
  object: 'whatsapp_business_account',
  entry: [{
    id: '000000000000000',
    changes: [{
      field: 'messages',
      value: {
        messaging_product: 'whatsapp',
        metadata: { display_phone_number: '15550000000', phone_number_id: '000000000000000' },
        contacts: [{ profile: { name: $json.nombre }, wa_id: $json.telefono }],
        messages: [{
          from: $json.telefono,
          id: 'wamid.prueba' + Date.now(),
          timestamp: String(Math.floor(Date.now() / 1000)),
          type: $json.tipo,
          ...($json.tipo === 'text' ? { text: { body: $json.texto } } : { [$json.tipo]: { id: 'archivo-de-prueba' } })
        }]
      }
    }]
  }]
}) }}
```

- **Publish** deja el asistente escuchando todo el tiempo: aparece el aviso *"Workflow published"*, y está bien.
- **En el asistente no apretes *Execute workflow*:** lo dispara el celular de mentira. Lo que hizo se ve en su
  pestaña **Executions**.
- **Cada cambio en el asistente: Save y Publish otra vez.**

**3 · El cerebro y la respuesta** (en el asistente)

```text
+ después de Edit Fields → agent → AI Agent
   Source for Prompt: Define below · Prompt: {{ $json.texto }}
   Chat Model → + → Google Gemini Chat Model (tu credencial, el flash, temperatura 0.3)
+ después del AI Agent → Edit Fields (Set) (n8n lo llama Edit Fields1):
   para  {{ $('Edit Fields').item.json.telefono }}
   texto {{ $json.output }}
Save → Publish → en el celular de mentira: Execute workflow → OUTPUT del HTTP Request: la respuesta de Ana
```

**4 · La memoria**

```text
Abajo del AI Agent, Memory → + → Simple Memory
   Session ID: Define below · Key: {{ $('Edit Fields').item.json.telefono }} · Context Window Length: 10
Save → Publish
Probá: texto "Me llamo Juan" → texto "¿Cómo me llamo?" → después cambiá el telefono y preguntá lo mismo
```

**5 · La voz:** en el AI Agent → **Options** → **Add Option** → **System Message** → **Expression** → pegá (y adaptalo
a tu negocio):

```text
Sos Ana, la asesora de la agencia de viajes "Rumbo Sur", y atendés por WhatsApp. Hoy es {{ $now.format('dd/MM/yyyy') }}. El cliente se llama {{ $('Edit Fields').item.json.nombre }}.

QUÉ PODÉS HACER: contar qué paquetes hay, qué incluyen, cuántos días son y cuánto cuestan. Estos son los únicos paquetes (precio en dólares, por persona):
- Bariloche Clásico: 5 días, USD 950. Aéreo, hotel 3 estrellas con desayuno y excursión al Circuito Chico.
- Bariloche Nieve: 7 días, USD 1450. Hoy NO tiene cupos.
- Caminos del Vino (Mendoza): 4 días, USD 780. Aéreo, hotel boutique y dos visitas a bodegas con degustación.
- Norte Mágico (Salta): 6 días, USD 890. Aéreo, hotel con desayuno y excursiones a Cafayate y Purmamarca.
- Fin del Mundo (Ushuaia): 5 días, USD 1320. Aéreo, hotel con media pensión y navegación por el Canal Beagle.
- Cataratas Express: 3 días, USD 640. Aéreo, hotel con desayuno y entrada al lado argentino de las Cataratas.

FORMATO (es WhatsApp: se lee en el celular):
- Mensajes cortos: párrafos de 2 o 3 líneas, como mucho 2 párrafos.
- Negritas con UN asterisco de cada lado, así: *Bariloche Clásico*. Nunca uses ** ni #.
- Si listás opciones, una por línea, empezando con guion.
- Como mucho un emoji por mensaje.
- Terminá SIEMPRE con una pregunta o con el próximo paso.

LÍMITES (aunque el cliente insista):
- No confirmes reservas ni tomes pagos. Para reservar, pedí nombre completo, destino y fechas, y avisá que un vendedor lo contacta por este mismo chat.
- No pases precios a pesos ni inventes promociones, fechas de salida ni datos que no estén arriba. Si no sabés algo, decí que lo consultás con un vendedor.
- Si el tema no tiene que ver con los viajes de la agencia, decilo con amabilidad y volvé a los paquetes.
- Si el cliente está enojado o pide hablar con una persona, decile que lo pasás con un vendedor del equipo.
```

**6 · Los bordes**

```text
En la flecha entre Edit Fields y AI Agent: + → Filter → {{ $json.telefono }} · String → is not empty
En la flecha entre Filter y AI Agent: + → If → {{ $json.tipo }} · String → is equal to · text
   false → + → Edit Fields (Set) (Edit Fields2): para = el telefono · texto = Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?
Save → Publish → probá tipo: image, y "me recomendás un buen abogado?"
Shift + S (una nota que explique el flujo) → menú … → Download (el .json para la pre-entrega)
```

✅ Sale bien si: Ana contesta corto, con `*negrita*` de un asterisco y una pregunta al final; se acuerda de lo que le
dijiste con el mismo teléfono y no con otro; y la foto recibe la respuesta fija.

---

### Ejercicio 4 · La Pre-entrega 4, paso a paso (2 a 3 h)

**Qué se entrega:** un único PDF con seis partes. Usá este molde (copialo a un documento y completalo):

```text
PRE-ENTREGA 4 · Asistente de WhatsApp · (tu nombre)

1. EL CASO DE USO (2-3 líneas)
   Negocio: ...
   Qué resuelve el asistente: ...
   Qué mensajes va a recibir (ejemplos reales, como los escribiría un cliente): ...

2. ¿MODELO LOCAL O EN LA NUBE?
   Elijo: ...
   Argumento 1 (privacidad: ¿hay datos sensibles?): ...
   Argumento 2 (costo: ¿cuántos mensajes por día?): ...
   Argumento 3 (latencia/independencia: ¿cuánto puede esperar el cliente? ¿qué pasa si el proveedor se cae?): ...
   Si es local: qué modelo de Ollama y por qué alcanza.

3. EL FLUJO (diagrama o lista de pasos)
   Cómo entra el mensaje (webhook / WhatsApp Trigger) → qué nodos lo preparan → el AI Agent (con qué modelo,
   memoria con Session ID = teléfono, qué herramientas) → cómo sale la respuesta (nodo de WhatsApp).

4. EL SYSTEM PROMPT (completo, copiado de n8n)

5. SI EL VOLUMEN SE MULTIPLICA POR 10 (3-4 líneas)
   ¿Se sostiene la decisión del punto 2? ¿Qué cambiarías (costo, hardware, memoria, tiempos)?

6. CAPTURAS
   - El flujo completo en n8n (que se vean todos los nodos y la nota adhesiva)
   - Una ejecución exitosa con un mensaje de prueba (pestaña Executions, abierta)
   - Si es con WhatsApp real: una captura del chat en el celular
```

**Lo que se evalúa** (rúbrica del programa):

| Criterio | Peso | Qué mirar |
|---|---|---|
| El caso de uso | 20 % | Negocio concreto, función clara, ejemplos de mensajes reales |
| Local o nube | 20 % | Al menos dos argumentos técnicos (privacidad, costo, latencia), coherentes con el caso |
| El flujo | 25 % | Del webhook a la respuesta, con el AI Agent y la **memoria por teléfono** |
| El system prompt | 20 % | Rol, brevedad, tono de WhatsApp, objetivo, y **qué hace cuando no sabe** (derivar) |
| Escalabilidad | 15 % | Qué pasa con 10 veces más mensajes: costo o hardware |

**Se aprueba con 70 sobre 100.**

**Consejos:**
- El caso: elegí uno que conozcas. "Un asistente para todo" es difícil de defender; "las consultas de precios de una
  agencia" se defiende solo.
- Local o nube: usá datos de la Semana 7. Si probaste a Ana con Ollama y tardó minutos, decilo: es un argumento.
- Si **no tenés WhatsApp real**, está permitido: el programa acepta capturas "con webhook simulando WhatsApp". Usá
  los flujos 03 y 04, adaptados a tu caso.
- **No pagues nada.** Todo se puede hacer gratis: n8n en Docker, Gemini con el plan gratis u Ollama, y el número de
  prueba de Meta.

**Si en la plataforma tu consigna pide RAG** (cargar un documento en una base vectorial): es el Ejercicio 6. Preguntá
en el canal del curso si en tu comisión vale esa versión.

✅ Sale bien si: alguien que no conoce tu negocio lee el PDF y entiende qué hace el bot, por qué elegiste ese cerebro
y qué hace cuando no sabe algo.

### Ejercicio 6 · RAG: rehacé el Ejemplo 2 con tu propio documento (40 min)

El material de lectura de la semana explica **RAG**: que el modelo busque en tus documentos antes de responder, como
un examen a libro abierto. Este flujo lo hace con las preguntas frecuentes de la agencia (cancelaciones, equipaje,
pagos, mascotas...), todo gratis y en tu computadora.

**Lo que necesitás:** Ollama de la Semana 7, tu credencial de Gemini, y un modelo de embeddings que entienda castellano (621 MB):

```text
ollama pull embeddinggemma
```

```text
1. Importá 05-rag-preguntas-frecuentes.json
2. Credencial de Ollama (la de la Semana 7) en Embeddings Ollama y Embeddings Ollama1; la de Gemini en Google Gemini Chat Model
3. Flujo A · la carga: abrí el Edit Fields de la carga y leelo (es el "manual" de la agencia)
   → Execute workflow (con el botón del Trigger manually)
   → abrí el Simple Vector Store de la carga: ¿en cuántos pedazos lo cortó?
4. Flujo B · la consulta: Open chat → preguntale:
   - "si me arrepiento 20 días antes, me devuelven la plata?"   (el documento dice "cancelás", no "arrepentís")
   - "mi hijo es celíaco, hay problema con la comida?"
   - "cuántos kilos puedo llevar?"
   - "tienen descuento para jubilados?"                          (no está en el documento)
5. Para cada respuesta: ¿es lo que dice el documento? ¿inventó algo?
```

Para pensar:
- La primera pregunta usa "me arrepiento" y el documento dice "cancelás". ¿La encontró igual? Eso es la **búsqueda
  por significado**: compara el sentido, no las palabras.
- La de jubilados no está. ¿Dijo "no sé" o inventó? Si inventó, ¿qué cambiarías en el system prompt?
- **El modelo de embeddings tiene que entender tu idioma.** Al armar este ejercicio se probó primero con
  `nomic-embed-text` (pensado para inglés): "me arrepiento" no encontró el párrafo de cancelaciones, y "mi perro", el de
  mascotas. Con `embeddinggemma`, los encontró. Si querés verlo, cambiá el modelo en los dos nodos de *Embeddings*,
  volvé a cargar el documento y preguntá lo mismo.
- Si reiniciás n8n, la base se borra (*Simple Vector Store* vive en la memoria). Para un proyecto de verdad: Supabase,
  Pinecone o Qdrant, con el mismo modelo de embeddings en la carga y en la consulta.
- ¿Te conviene RAG para tu proyecto? La regla del material: ¿la información es **mucha**? ¿**cambia seguido**? Si las
  dos son no, va en el system prompt.

**Después, con tu negocio:** cambiá el texto del *Edit Fields* de la carga por las preguntas frecuentes de tu
caso (o un reglamento, una lista de precios), volvé a cargar y preguntale.

✅ Sale bien si: las tres primeras respuestas coinciden con el documento, y la de jubilados no inventa un descuento.

---

---

## Para la Entrega Final (opcional): un canal de verdad

Para que tu asistente atienda por WhatsApp o Telegram de verdad, tu n8n necesita una dirección pública (n8n Cloud, o
el túnel del Ejercicio 5). Si no, la Entrega Final se puede presentar con el simulador y un canal de salida real (un
mail, una fila en una planilla): mirá [entrega-final.md](entrega-final.md).

### Ejercicio 0 · Tu app de Meta y el número de prueba (opcional, 30 min)

Conectar WhatsApp la primera vez lleva un rato: Meta pide crear cuentas y verificar el celular. Hacelo antes, así en
clase solo lo conectás.

**Lo que necesitás:** una cuenta de Facebook, y el celular con WhatsApp a mano.

```text
1. Entrá a developers.facebook.com con tu cuenta de Facebook
   → si es la primera vez: "Comenzar" y registrate como desarrollador (te pide confirmar el celular o el mail)
2. Mis apps → Crear app
   → nombre: Asistente (el nombre de tu negocio)
   → caso de uso: "Connect with customers through WhatsApp" (conectarte con clientes a través de WhatsApp)
   → portfolio comercial: elegí uno o creá uno nuevo (con tu nombre alcanza)
   → Crear app
3. En el menú de la izquierda: WhatsApp → API Setup (Configuración de la API)
4. "Generate access token" → copialo y guardalo en un bloc de notas
   (es TEMPORAL: dura 24 horas. El día de la clase vas a generar otro)
5. En esa misma pantalla, anotá:
   → el Phone number ID (del número de prueba, "From")
   → el WhatsApp Business Account ID
6. En "To": agregá TU celular → te llega un código por WhatsApp → confirmalo
7. "Send message" → te llega un mensaje "hello_world" de un número de Meta
8. RESPONDELE cualquier cosa desde el celular (eso abre la ventana de 24 horas)
9. Menú: Configuración de la app → Básica (App settings → Basic)
   → anotá el App ID y el App Secret (botón "Mostrar")
```

Al final tenés que tener anotados **cinco datos**: el token, el Phone number ID, el WhatsApp Business Account ID, el
App ID y el App Secret. **No los compartas con nadie** (ni en el chat de la clase): son las llaves de tu WhatsApp.

**Ojo:** Meta puede pedir verificación y tardar en aprobarte. Si te traba, el Ejercicio 0-B (Telegram).

### Ejercicio 0-B · Tu bot de Telegram (opcional, 5 min)

Si Meta no te deja avanzar (te pide verificar la empresa, no te llega el código, el número da error), el mismo
asistente anda por **Telegram**. Crear un bot ahí lleva cinco minutos y no pide cuentas de empresa.

**Lo que necesitás:** Telegram instalado en el celular (o Telegram Web, en la computadora) con tu cuenta.

```text
1. En Telegram, buscá  @BotFather  (el que tiene la tilde azul de verificado) → Iniciar (o escribí /start)
2. Escribile:  /newbot
3. Te pide el NOMBRE del bot (el que se ve en el chat): Ana de Rumbo Sur (o el de tu negocio)
4. Te pide el USUARIO (con el que lo encuentran): tiene que terminar en "bot" y no puede estar usado
   → por ejemplo: rumbosur_tunombre_bot
5. BotFather te contesta con un link (t.me/rumbosur_tunombre_bot) y un TOKEN, algo así:
   123456789:AAH...  → copialo y guardalo en un bloc de notas
6. Abrí el link → Iniciar: ese es el chat con tu bot (todavía no contesta: falta n8n)
```

Al final tenés **un dato**: el token del bot. **No lo compartas** (ni en el chat de la clase): con el token, cualquiera
maneja tu bot. Si se te escapa, en BotFather: `/revoke` te da uno nuevo.

**Lo mismo que WhatsApp:** para recibir mensajes, tu n8n necesita una dirección https pública (n8n Cloud, o Docker con
túnel: Ejercicio 5). **Lo distinto:** no hay lista de números permitidos ni token de 24 horas; cualquiera que tenga
el link puede escribirle, y el token no vence.

#### Cómo se arma el asistente por Telegram

Lo terminado está en `09-asistente-telegram.json`. Para armarlo vos, cambian tres cosas; el resto es igual:

```text
PASO 1 · La entrada (en lugar del WhatsApp Trigger)
1. Workflow nuevo → nombre: Asistente de Telegram
2. Add first step → buscá "Telegram" → Telegram Trigger → On message
3. Credential → Create new → Telegram API → Access Token: el token de BotFather → Save
4. Trigger On: Message
5. + → Edit Fields (Set) → Edit Fields → Add Field, tres veces:
   chatId  → {{ $json.message?.chat?.id }}
   nombre  → {{ $json.message?.from?.first_name }}
   texto   → {{ $json.message?.text }}
6. Execute workflow → escribile "Hola" a tu bot en Telegram

PASO 2 · La respuesta (en lugar de WhatsApp Business Cloud)
+ después del agente → buscá "Telegram" → Send a text message
   Credential: la misma Telegram API
   Chat ID: arrastrá "chatId" de Edit Fields
   Text: {{ $json.output }}
   Add Field → Append n8n Attribution → apagado (si no, cada respuesta termina con una propaganda de n8n)

PASO 3 · La memoria: Key = {{ $('Edit Fields').item.json.chatId }}   (el chat, en vez del teléfono)

PASO 4 · La voz: el mismo system prompt, cambiando "atendés por WhatsApp" por "atendés por Telegram" y la regla
de la negrita por: "Texto plano: no uses asteriscos, ni #, ni guiones bajos para resaltar."

PASO 5 · Los bordes: no hace falta el Filter "¿Es un mensaje?" (Telegram no manda avisos de leído).
   ¿Es texto? → Condición: {{ $json.texto }} → is not empty   (una foto llega sin texto)
```

**Ojo:** cuando el flujo ya está publicado, probá escribiéndole al bot y mirando **Executions**. Si apretás *Execute
workflow*, n8n le cambia la dirección al bot para la prueba y, al terminar, el bot deja de llegar al flujo publicado:
despublicá y volvé a publicar.

---

---

### Ejercicio 5 · Del simulador a un canal de verdad (45 min)

Para el proyecto final, el asistente tiene que estar **desplegado**: atendiendo mensajes reales. Si en clase usaste
el simulador, este es el paso que falta.

**Parte A · Una dirección pública para tu n8n**

Meta solo manda mensajes a una dirección **https pública**. Según dónde tengas n8n:

- **n8n Cloud:** ya la tiene. Pasá a la Parte B.
- **n8n en Docker** (Semana 2): tu n8n está en `localhost`, que Meta no ve. Hace falta un **túnel**: un programa que
  le da una dirección pública a tu n8n.

```text
1. Instalá cloudflared:
   Windows (PowerShell):  winget install --id Cloudflare.cloudflared
   Mac:                   brew install cloudflared
2. Abrí el túnel (dejá esa ventana abierta):
   cloudflared tunnel --url http://localhost:5678
   → busca una línea con una dirección https://algo-algo-algo.trycloudflare.com y copiala
3. Volvé a crear tu contenedor de n8n, ahora con esa dirección (tus flujos no se pierden: están en la carpeta):
   docker rm -f n8n
   docker run -d --name n8n -p 5678:5678 -e WEBHOOK_URL=https://algo-algo-algo.trycloudflare.com/ -v "C:\Users\TuNombre\Desktop\n8n:/home/node/.n8n" n8nio/n8n
4. Abrí n8n (http://localhost:5678) → abrí un WhatsApp Trigger → la "Production URL" tiene que empezar con
   https://algo-algo-algo.trycloudflare.com
```

⚠️ La dirección de `trycloudflare.com` **cambia cada vez que abrís el túnel**: hay que repetir el paso 3. Para algo
que quede andando siempre (el proyecto final), conviene n8n Cloud, o `ngrok` con su dominio gratis fijo.

**Parte B · Conectar**

```text
1. Importá 01-eco-whatsapp.json → credenciales: WhatsApp OAuth API en el trigger, WhatsApp API en la respuesta
2. Publish → mandá "Hola" al número de prueba → te tiene que volver "Hola (tu nombre), recibí tu mensaje: ..."
3. Si anda: Unpublish del 01 (un solo WhatsApp Trigger por app de Meta)
4. Importá 02-asistente-whatsapp.json → las tres credenciales (las dos de WhatsApp y Gemini) → Publish
5. Repetí las pruebas del Paso 3 y del Paso 5 desde tu celular
```

**Parte C · Un token que no vence**

El token de API Setup dura 24 horas. Para el proyecto final:

```text
1. business.facebook.com → Configuración (Business settings) → Usuarios → Usuarios del sistema → Agregar
   → nombre: n8n · rol: Administrador
2. Asignar activos → tu app (control total) y tu cuenta de WhatsApp (control total)
3. Generar token → elegí tu app → permisos: whatsapp_business_messaging y whatsapp_business_management
   → vencimiento: Nunca
4. Pegalo en tu credencial WhatsApp API (Access Token) → Save
```

✅ Sale bien si: le escribís al número de prueba desde tu celular, al otro día, y Ana te responde.

**Si no llega nada**, la lista del Debug Challenge: ¿publicado? ¿túnel abierto y `WEBHOOK_URL` de hoy? ¿App Secret
bien? ¿hay otro flujo con un WhatsApp Trigger de la misma app? Y si llega pero la respuesta no sale: el token, o tu
número no está en la lista **To** (con celulares argentinos, probá con y sin el 9 después del 54).

### La Entrega Final

La consigna completa, explicada punto por punto, con el modelo de README y cómo subirlo a GitHub, está en
[entrega-final.md](entrega-final.md). El canal puede ser WhatsApp o Telegram (plan B del Ejercicio 3).

---

## Para repasar

- **Los tres WhatsApp:** la app personal, la app Business (manual) y la **Business Platform** (la que se conecta a
  n8n).
- **La jerarquía de Meta:** portfolio comercial → cuenta de WhatsApp (WABA) → número. Aparte, la app de desarrollador
  da las claves.
- **Dos credenciales:** *WhatsApp OAuth API* (App ID y App Secret) para escuchar; *WhatsApp API* (token y WABA ID)
  para responder.
- **La regla de las 24 horas:** responder dentro de la ventana es gratis y con texto libre; para escribir primero,
  plantilla.
- **La regla de oro:** el Session ID de la memoria es el **teléfono** del remitente.
- **El prompt de WhatsApp:** rol y límites, 2 o 3 líneas, `*negrita*` con un asterisco, micro-cierre.
- **Las tres fases:** trigger → agente (modelo + memoria + herramientas) → respuesta.
- **Cuando "no pasa nada":** publicado, dirección https pública, App Secret, un trigger por app. **Cuando "no
  sale":** token, destinatario.
