# Semana 8 · Ejercicios — WhatsApp Business

Es la última clase del curso. Hoy el agente que venís armando empieza a atender gente por WhatsApp.

Hay **un ejercicio para hacer antes de la clase** (el 0), tres en clase y tres para casa. El 4 es la Pre-entrega 4.

Los flujos están en la carpeta `n8n/` de la semana. Para importar cada uno: workflow nuevo → menú **…** → **Import
from File** → **Save**.

| Flujo | Qué hace |
|---|---|
| `01-eco-whatsapp.json` | Lo que entra por WhatsApp, vuelve. Para probar que el canal funciona. |
| `02-asistente-whatsapp.json` | El asistente completo: Ana por WhatsApp, con memoria por teléfono. |
| `03-asistente-simulado.json` | El mismo asistente, pero recibe los mensajes de un simulador en vez de Meta. |
| `04-mandar-mensaje-simulado.json` | El "celular de mentira": le manda mensajes al 03. |
| `05-rag-preguntas-frecuentes.json` | El desafío: Ana responde con las preguntas frecuentes de la agencia (RAG). |

---

## Antes de la clase

### Ejercicio 0 · Tu app de Meta y el número de prueba (30 min)

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

**Si algo no anda**, no te trabes: en clase hay un camino con un simulador, sin Meta.

**Y además, para la clase:**
- importá los flujos `03` y `04` (el simulador) y poné tu credencial de Gemini en *Cerebro: Gemini* del 03;
- pensá el negocio de tu pre-entrega (una agencia, un consultorio, una tienda: real o inventado).

---

## En clase

### Ejercicio 1 · ¿Qué WhatsApp necesita? (5 min)

Para cada caso: ¿alcanza con la **app WhatsApp Business** o hace falta la **Business Platform**? ¿Con qué herramienta?

1. A una pastelería le preguntan 30 veces por día "¿cómo se paga?".
2. Una inmobiliaria quiere que un agente responda consultas a las 3 de la mañana.
3. Un dentista quiere que a la noche le respondan "estamos cerrados, abrimos a las 9".
4. Una tienda online quiere avisar "tu pedido salió" a cada comprador.
5. Un vivero quiere mostrar sus plantas con foto y precio adentro del chat.

Herramientas de la app, para elegir: **respuestas rápidas**, **etiquetas**, **catálogo**, **mensaje de ausencia**.

### Ejercicio 2 · El humano detrás de la IA (5 min)

Un cliente escribe por WhatsApp:

> hace 3 dias que espero que me manden el voucher del hotel y nadie me contesta

El bot respondió:

> Estimado cliente: Le informamos que su solicitud ha sido recibida y será procesada según el orden de llegada.
> Agradecemos su paciencia. Atentamente, el equipo de Rumbo Sur.

1. Reescribí la respuesta para WhatsApp: empática, de 2 o 3 líneas, con un micro-cierre (una pregunta o el próximo
   paso).
2. Escribí **una regla** para el system prompt que haga que el bot responda así.

Pista: ¿el bot puede mandar el voucher? Si no puede, no lo prometa.

### Ejercicio 3 · La práctica: tu bot en el celular (40 min)

Lo hacemos a la par, en cinco pasos. Hay dos caminos:

- **Real:** hiciste el Ejercicio 0 y tu n8n tiene una dirección https pública (n8n Cloud, o Docker con túnel: ver
  Ejercicio 5).
- **Simulador:** todos los demás. Usás los flujos 03 (el asistente) y 04 (el celular de mentira).

Del Paso 2 en adelante, los dos caminos son iguales.

**Para el simulador, una vez:**

```text
1. Importá 03-asistente-simulado.json y 04-mandar-mensaje-simulado.json
2. En el 03: credencial de Gemini en "Cerebro: Gemini" → Save → Publish
3. En el 04: Execute workflow → abrí "Mandar al simulador" → ahí está la respuesta de Ana
4. Para cambiar el mensaje: en el 04, nodo "Mensaje de prueba" → cambiá texto, telefono, nombre o tipo
```

Si usás **n8n Cloud**: en el 04, nodo *Mandar al simulador*, cambiá la URL por la *Production URL* del nodo
*Simulador: entra el mensaje* del 03.

#### Paso 1 · El canal

Camino real:

```text
1. Workflow nuevo → nombre: Asistente de WhatsApp
2. Add first step → buscá "WhatsApp" → WhatsApp Trigger → On messages
3. Credential → Create new → WhatsApp OAuth API
   Client ID = App ID · Client Secret = App Secret (del Ejercicio 0)
4. Trigger On: Messages
5. Add option → Receive Message Status Updates → sacá "All" (que no quede nada elegido)
6. + → Edit Fields (Set) → renombralo: Datos del mensaje → Add Field, cinco veces:
   telefono      → {{ $json.messages?.[0]?.from }}
   nombre        → {{ $json.contacts?.[0]?.profile?.name }}
   tipo          → {{ $json.messages?.[0]?.type }}
   texto         → {{ $json.messages?.[0]?.text?.body }}
   phoneNumberId → {{ $json.metadata?.phone_number_id }}
7. Execute workflow → mandá "Hola" desde tu celular al número de prueba
```

✅ Sale bien si: el trigger se enciende y *Datos del mensaje* muestra tu teléfono, tu nombre y "Hola".

Camino simulador: en tu 03, pestaña **Executions** → abrí la última → mirá la salida de *Como lo entrega el WhatsApp
Trigger*: es el mismo paquete que manda Meta.

**¿Por qué el paso 5?** Meta también avisa cuando un mensaje se envió, se entregó y se leyó. Sin sacar "All", cada
respuesta del bot dispara tres ejecuciones más, sin mensaje adentro.

#### Paso 2 · El cerebro

```text
1. + después de Datos del mensaje → AI Agent → renombralo: Ana por WhatsApp
   Source for Prompt (User Message): Define below
   Prompt (User Message): arrastrá "texto" → {{ $json.texto }}
2. Abajo, Chat Model: + → Google Gemini Chat Model → tu credencial
3. + después del agente → WhatsApp Business Cloud → Send message
   Operation: Send (OJO: viene en "Send Template")
   Credential → Create new → WhatsApp API
      Access Token = el token · Business Account ID = el WhatsApp Business Account ID
   Sender Phone Number (or ID): el número de prueba
   Recipient's Phone Number: arrastrá "telefono" de Datos del mensaje
   MessageType: Text · Text Body: {{ $json.output }}
4. Save → Publish
5. Mandá "Hola, qué paquetes tienen?" desde tu celular
```

✅ Sale bien si: la respuesta de Ana te llega al celular (aunque sea larga y fea: eso se arregla en el Paso 4).

**Publish:** con *Execute workflow*, n8n escucha una sola vez. Para que escuche siempre, *Publish*. Y cada vez que
cambiás algo, **Publish de nuevo**.

#### Paso 3 · La memoria

```text
1. Primero, sin memoria: "Me llamo (tu nombre)" → "¿Cómo me llamo?" → no sabe
2. Abajo de Ana, Memory: + → Simple Memory → renombralo: Memoria por teléfono
   Session ID: Define below
   Key: {{ $('Datos del mensaje').item.json.telefono }}
   Context Window Length: 10
3. Save → Publish → de nuevo: "Me llamo ..." → "¿Cómo me llamo?" → ahora sabe
4. Desde OTRO número: "¿Cómo me llamo?" → no sabe el tuyo
```

✅ Sale bien si: recuerda tu nombre, y desde otro número no lo sabe.

**Con el simulador** (o después del Paso 4), esa prueba no sirve: el 03 ya tiene el system prompt, y ahí va el nombre
del perfil de WhatsApp, así que Ana "sabe" cómo te llamás aunque no tenga memoria. Probá con otro dato: en el 04,
texto "Viajo con mi hija, se llama Sofía" → ejecutar → texto "¿Cómo se llama mi hija?" → ejecutar. Después cambiá el
`telefono` y preguntá lo mismo: no tiene que saberlo.

#### Paso 4 · La voz

En **Ana por WhatsApp** → **Add Option** → **System Message**, pegá (y adaptalo a tu negocio):

```text
Sos Ana, la asesora de la agencia de viajes "Rumbo Sur", y atendés por WhatsApp. Hoy es {{ $now.format('dd/MM/yyyy') }}. El cliente se llama {{ $('Datos del mensaje').item.json.nombre }}.

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

Save → Publish → mandá la misma pregunta del Paso 2.

✅ Sale bien si: la respuesta es corta, usa `*negrita*` con un asterisco y termina con una pregunta.

#### Paso 5 · Los bordes

```text
1. Entre "Datos del mensaje" y el agente: + → Filter → renombralo: ¿Es un mensaje?
   Condición: {{ $json.telefono }} → is not empty
2. + → If → renombralo: ¿Es texto?
   Condición: {{ $json.tipo }} → is equal to → text
   true → Ana por WhatsApp
   false → + → WhatsApp Business Cloud (Send) → renombralo: Responder: solo texto
           mismo número de origen y destinatario que el otro
           Text Body: Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?
3. Save → Publish
4. Probá: una foto, un audio, "me recomendás un buen abogado?", "quiero reservar ya, te paso la tarjeta"
   Simulador: en el 04 cambiá tipo a image o audio
5. Una nota adhesiva (Shift + S) que explique el flujo → menú … → Download (guardá el .json)
```

✅ Sale bien si: la foto recibe la respuesta fija, lo de abogado lo desvía, y la reserva la deriva a un vendedor sin
pedir la tarjeta.

---

## Para casa

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

### Ejercicio 5 · Del simulador al WhatsApp de verdad (45 min)

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

### Ejercicio 6 · Desafío: RAG, Ana con las preguntas frecuentes (40 min)

El material de lectura de la semana explica **RAG**: que el modelo busque en tus documentos antes de responder, como
un examen a libro abierto. Este flujo lo hace con las preguntas frecuentes de la agencia (cancelaciones, equipaje,
pagos, mascotas...), todo gratis y en tu computadora.

**Lo que necesitás:** Ollama de la Semana 7, tu credencial de Gemini, y un modelo de embeddings que entienda castellano (621 MB):

```text
ollama pull embeddinggemma
```

```text
1. Importá 05-rag-preguntas-frecuentes.json
2. Credencial de Ollama (la de la Semana 7) en Embeddings (carga) y Embeddings (consulta); la de Gemini en Cerebro: Gemini
3. Flujo A · la carga: abrí "Documento: preguntas frecuentes" y leelo (es el "manual" de la agencia)
   → Execute workflow (con el botón de "Cargar el documento")
   → abrí "Guardar en la base vectorial": ¿en cuántos pedazos lo cortó?
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

✅ Sale bien si: las tres primeras respuestas coinciden con el documento, y la de jubilados no inventa un descuento.

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
