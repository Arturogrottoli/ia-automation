# Semana 8 — Módulo 8: WhatsApp Business

Fuente: `program-summary.pdf` (Módulo 8). **Una clase de 2 horas. Es la última clase del curso:** la Semana 9 es solo
la Entrega Final, sin clase.

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_8_AI_Automation.pptx` | Las filminas del módulo (33). |
| `Semana 8.docx` | El material de lectura: RAG y Supabase (bases vectoriales, embeddings, chunks), el cuestionario de 6 preguntas, el podcast, la consigna de la Pre-entrega 4 y el guion sugerido de la clase. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Lo que hay que hacer **antes de la clase** (la app de Meta), los ejercicios en clase y los de casa, con la Pre-entrega 4 paso a paso. Se comparte con los alumnos. |
| [n8n/](n8n/) | Once workflows: el eco por WhatsApp, el asistente completo, el mismo asistente con WhatsApp simulado, el "celular de mentira" que le manda mensajes, un RAG con las preguntas frecuentes de la agencia, tres ejemplos extra sobre el asistente (06 fuera de horario, 07 pasar a una persona, 08 Ana con las herramientas de la Semana 6) el **09, el mismo asistente por Telegram** (plan B si WhatsApp falla), y los ejemplos más sencillos en otros canales: **10, el eco por Telegram** y **11, el eco por Slack**. |
| [entrega-final.md](entrega-final.md) | **La Entrega Final explicada para los alumnos:** los 7 requisitos en criollo, qué quiere decir "desplegado", cómo subirlo a GitHub paso a paso, un modelo de README, el checklist y la rúbrica. Se comparte al final de la clase. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, las salidas reales de los flujos, las trabas y cómo corregir la Pre-entrega 4. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| Antes de la clase | 0 · Tu app de Meta y el número de prueba | 30 min |
| Antes de la clase | 0-B · Plan B: tu bot de Telegram | 5 min |
| En clase | 1 · ¿Qué WhatsApp necesita? (la cacería de funciones) | 5 min |
| En clase | 2 · El humano detrás de la IA (reescribir una respuesta de robot) | 5 min |
| En clase | 3 · La práctica: el canal, el cerebro, la memoria, la voz y los bordes | 40 min |
| Casa | 4 · La Pre-entrega 4, paso a paso | 2 a 3 h |
| Casa | 5 · Del simulador al WhatsApp de verdad | 45 min |
| Casa (desafío) | 6 · RAG: Ana con las preguntas frecuentes | 40 min |

## Evaluación

- **Pre-Entrega 4: Ensamblaje del asistente de WhatsApp e IA.** Se presenta esta semana: un PDF con el caso de uso,
  la decisión local o nube, el diagrama del flujo, el system prompt, la reflexión de escalabilidad y capturas del
  flujo en n8n con una ejecución. El programa acepta capturas **"con webhook simulando WhatsApp si no hay integración
  real disponible"**: para eso están los flujos 03 y 04. La rúbrica está en `ejercicios-docente.md`.
- El cuestionario del módulo en la plataforma: 6 preguntas, se aprueba con 70 %, 15 minutos, 3 intentos.
- **La Entrega Final** (se entrega en la Semana 9, sin clase): el asistente autónomo desplegado. **Se explica entera
  en esta clase**, en la Sección 04 (filminas 28 a 30 y la consigna completa: los 7 requisitos, cómo se entrega en un
  repositorio y cómo se corrige). Para los alumnos: [entrega-final.md](entrega-final.md).

## A tener en cuenta

- **Es la última clase.** La Sección 04 (filminas 25 a 33) es el cierre del curso y la presentación de la Entrega
  Final. No la recortes: es lo último que escuchan antes de entregar.
- **Si WhatsApp falla, plan B: Telegram.** Meta puede trabar la clase (la cuenta pide verificación, el número da
  error 131030, el token venció). El mismo asistente anda por **Telegram**: el bot se crea en 5 minutos con
  @BotFather, sin cuenta de empresa, sin lista de números permitidos y con un token que no vence. Cambian solo la
  entrada (*Telegram Trigger*) y la respuesta (*Telegram · Send a text message*); el agente, la memoria, el prompt y
  los porteros son los mismos. Está armado en el flujo **09** y explicado en la práctica ("Plan B: Telegram", después
  del Paso 1). **Ojo: Telegram también necesita la dirección https pública** (n8n Cloud o el túnel): si lo que falla
  es el túnel, el plan B es el simulador, no Telegram. **Slack** también se puede, pero no lo armamos: hay que crear
  una app de Slack con permisos, suscribir eventos e instalarla en un espacio de trabajo (unos 15 minutos y una
  cuenta de Slack para cada alumno). Para un plan B en vivo, Telegram es lo más corto.
- **La Entrega Final no obliga a WhatsApp.** El título del programa dice "asistente de WhatsApp", pero el requisito 6
  dice *"si usás WhatsApp Business"* y acepta otras salidas (un mail, una fila en Sheets, un evento en Calendar). En
  [entrega-final.md](entrega-final.md) dice que Telegram vale, contando en el README por qué se eligió. **Confirmalo
  con Romina** antes de la clase.
- **La Pre-entrega 4 dice dos cosas distintas.** El programa (`program-summary.pdf`, la fuente oficial) pide caso de
  uso, decisión local o nube, el plan de la conexión con WhatsApp, el system prompt y la reflexión. **La versión de la
  plataforma** (`Semana 8.docx`) agrega dos puntos de **RAG**: cargar un documento en una base vectorial y conectar
  el agente para que responda solo con eso, y dice "Supabase, como viste en el módulo anterior", cuando Supabase no
  se vio. En el guion se sigue el programa, y el RAG va como desafío (Ejercicio 6, con un flujo probado), así el que lee
  la plataforma tiene con qué hacerlo. **Conviene que decidas con Romina cuál vale** y lo digas en clase.
- **La conexión con Meta no se hace en clase desde cero.** Crear la cuenta de desarrollador, la app y verificar el
  celular lleva media hora y a veces Meta pide datos o tarda. Por eso:
  - el día anterior les pedís el **Ejercicio 0** (la app de Meta, el número de prueba y el mensaje `hello_world` en su
    celular);
  - en clase, **vos hacés la versión real** con tu celular, y ellos siguen a la par con la real (si llegaron con el
    Ejercicio 0 y tienen n8n con dirección pública) o con el **simulador** (flujos 03 y 04);
  - los Pasos 2 a 5 son iguales en los dos caminos: el agente, la memoria, el prompt y los bordes no saben si el
    mensaje vino de Meta o del simulador.
- **Esta vez n8n Cloud es lo más fácil.** Meta solo manda los mensajes a una dirección **https pública**. n8n Cloud
  ya la tiene. Con n8n en Docker (la mayoría, desde la Semana 2), la dirección es `localhost` y Meta no la ve: hace
  falta un **túnel** (`cloudflared` o `ngrok`) y reiniciar n8n con la variable `WEBHOOK_URL`. Está en el Ejercicio 5
  y en tu preparación. **El túnel no se pudo probar** al armar la clase: probalo vos antes.
- **El Verify Token lo resuelve n8n solo.** La filmina 10 (#FindTheBug) y el Paso 1 hablan de "responder el Verify
  Token" a mano. Con el nodo **WhatsApp Trigger** no hace falta: al activarse, n8n registra la dirección en Meta y usa
  como Verify Token el identificador del propio nodo (está en el código del nodo). Se cuenta igual, porque explica
  por qué "no pasa nada" cuando la dirección no es pública o el flujo no está publicado.
- **Lo que hay en el código de los nodos de WhatsApp** (n8n 2.46) y conviene saber:
  - **una sola app de Meta admite un solo WhatsApp Trigger.** El nodo lo avisa: *"you can use just one WhatsApp
    trigger for each Facebook App"*. Si dos flujos usan la misma app, el segundo da error;
  - **el nodo de respuesta arranca en *Send Template***, no en *Send*. Hay que cambiarlo;
  - **los avisos de "enviado", "entregado" y "leído" también disparan el flujo**, salvo que en *Options* →
    *Receive Message Status Updates* no quede nada elegido. Sin eso, cada respuesta del bot genera tres ejecuciones
    más, sin mensaje;
  - **el trigger descarta en silencio** lo que no viene firmado con el *App Secret*. Si el *Client Secret* de la
    credencial está mal, no hay error: simplemente no llega nada.
- **Qué está probado** (7 de noviembre de 2026, n8n 2.46 y Ollama 0.40, en Docker, sin placa de video):
  - **el canal, con un simulador.** No hay cuenta de Meta para probar: los mensajes entraron por un webhook con el
    mismo paquete que manda Meta (flujos 03 y 04). El resto del flujo es idéntico al real;
  - **el cerebro fue `llama3.2`** (no había clave de Gemini). Sirvió para probar que el flujo anda, y dejó ejemplos
    reales de lo que hace un modelo chico. Con Gemini, las respuestas van a ser mejores y llegar en segundos; con
    `llama3.2` sin placa de video tardaron entre 9 segundos y 8 minutos (la primera, en frío);
  - **sin system prompt**, Ana se ofreció a hablar de "Historia, Ciencia, Tecnología…": no sabía que era una agencia.
    Con el prompt, usó la negrita de WhatsApp y cerró con una pregunta, pero listó los seis paquetes con seis emojis
    (el modelo chico no respeta todas las reglas);
  - **la memoria por teléfono funciona en n8n:** en la ejecución del segundo mensaje de Juan se ve su mensaje
    anterior, y en la de María no. Pero `llama3.2` a veces no aprovecha el historial (Juan dijo "viajo con mi hija,
    se llama Sofía" y a "¿cómo se llama mi hija?" le repitió lo de Bariloche). **Ojo con la prueba clásica:** desde
    el Paso 4, Ana sabe el nombre del cliente por el perfil de WhatsApp (va en el system prompt), así que "¿cómo me
    llamo?" ya no prueba la memoria. Después del Paso 4, se prueba con otro dato;
  - **los bordes:** la foto y el audio recibieron la respuesta fija; lo de "un buen abogado" lo desvió; la reserva
    con tarjeta no la confirmó y pidió los datos; el cliente enojado recibió una disculpa, pero con una excusa
    inventada ("es posible que el vendedor esté ocupado");
  - **los errores son los reales:** el nodo de WhatsApp con un token inventado (contra la API de Meta de verdad) da
    *"Authorization failed - please check your credentials"*, con el detalle *"Malformed access token"*. La memoria
    en *Connected Chat Trigger Node* da *"Error in sub-node Memoria por teléfono"*, con el detalle *"No session ID
    found"*;
  - **el "celular de mentira" (flujo 04)** tardó 304 segundos en traer la primera respuesta de `llama3.2`: en otra
    prueba, el HTTP Request se cansó de esperar a los 5 minutos, más o menos, y cortó con *"The connection was
    aborted"*.
    Por eso el nodo trae el tiempo de espera en 10 minutos;
  - **el RAG del Ejercicio 6:** con el modelo de embeddings `nomic-embed-text`, la búsqueda **falló en castellano**
    ("si me arrepiento" no encontró el párrafo de cancelaciones; "mi perro", el de mascotas). Con `embeddinggemma`
    (multilingüe), encontró las tres. Y `llama3.2` como cerebro respondió mal incluso con el pedazo correcto (dijo que
    no había peso máximo para la valija, y el documento dice 15 kg) y tardó hasta 20 minutos. Por eso el flujo 05
    usa embeddings locales (`embeddinggemma`) y **Gemini** como cerebro (Gemini no se pudo probar ahí);
  - **los cinco flujos de la carpeta se importan sin errores** en n8n 2.46;
  - **no se probó:** el WhatsApp Trigger recibiendo de Meta, el túnel `cloudflared` (el entorno de prueba no permitía
    abrir túneles públicos), el error 131030 con números argentinos, ni Gemini;
  - **el flujo 09 (Telegram) tampoco se ejecutó:** es el 02 con la entrada y la respuesta cambiadas, armado con los
    parámetros de los nodos de Telegram de n8n. **Probalo vos con tu bot** el día anterior (con el túnel abierto).
- **El cuestionario pregunta cosas que las filminas no dicen:** las herramientas de la app WhatsApp Business
  (respuestas rápidas, etiquetas, catálogo, mensaje de ausencia), las plantillas y los límites de mensajería. Van
  explicadas en la filmina 7 y en el Ejercicio 1.
- **Las filminas 10, 16 y 19 son de "Momentos de la clase"** con un texto de #FindTheBug o Debug Challenge. Se usan
  como cierre de cada sección.
- **En la teoría hay bloques "En Meta, paso a paso" y "En n8n, paso a paso"**, con los clics. Están para mostrarlos
  en un minuto mientras lo contás; en la práctica lo hacen completo.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–16 | Apertura y **repaso de la Semana 7** (8 min: por qué local, Ollama, el puente, local contra nube, la decisión para WhatsApp) | 1–5 | Pregunta rápida en el chat |
| 10–30 | **01 · La plataforma de Meta** | 6–10 | Ej. 1 (5 min) |
| 30–55 | **02 · El asistente con IA** | 11–16 | Ej. 2 (5 min) |
| 55–65 | Break | 17 | |
| 65–102 | **03 · Práctica en vivo:** el canal, el cerebro, la memoria, la voz y los bordes (plan B: Telegram) | 18–24 | Ej. 3 |
| 102–115 | **04 · El cierre del curso** y la **Entrega Final completa** (requisitos, entrega, corrección) | 25–30 | |
| 115–120 | Preguntas y despedida | 31–33 | |

**Al final hay tres ejemplos extra** para el asistente (fuera de horario, pasar a una persona, Ana con las
herramientas de la Semana 6): casi seguro no entran en esta clase, que cierra el curso; quedan para casa y para la
Entrega Final. Mencionalos en la tarea.

**El repaso dura 8 minutos** (antes eran 2): los 6 de más salen de hacer **de entrada** los recortes 1 y 2 de
abajo. Los minutos de las secciones siguientes quedan corridos 6 minutos. La Sección 04 (el cierre del curso) no
se toca.

**Si el tiempo se aprieta**, recortá en este orden:
1. Los casos de uso (filmina 9): se leen.
2. El Ejercicio 1: se responde en voz alta con dos escenarios.
3. El Debug Challenge (filmina 19): lo contás en un minuto, sin que adivinen.

**El Paso 5 ya va corto de entrada** (los porteros y la foto; el abogado, la reserva y el enojado quedan para casa):
esos 3 minutos pasan a la Sección 04, para explicar la Entrega Final completa.

Lo último que se recorta es la Sección 04: es el cierre del curso y la Entrega Final.

---

### Preparación (antes de la clase)

- [ ] **Tu app de Meta lista** (el Ejercicio 0, hecho por vos): app con el caso de uso de WhatsApp, número de prueba,
  **tu celular** en la lista de destinatarios y el `hello_world` recibido. **Respondele algo** desde el celular: eso
  abre la ventana de 24 horas para que el bot pueda contestar con texto libre.
- [ ] **Un n8n con dirección https pública:**
  - con **n8n Cloud**, ya está;
  - con **n8n en Docker**: instalá `cloudflared` (`winget install --id Cloudflare.cloudflared`), corré
    `cloudflared tunnel --url http://localhost:5678`, copiá la dirección `https://…trycloudflare.com` y volvé a crear
    el contenedor de n8n con `-e WEBHOOK_URL=https://…trycloudflare.com/` (el comando está en el Ejercicio 5). Esa
    dirección cambia cada vez que se reinicia el túnel: **dejalo abierto toda la clase**.
- [ ] **El plan B de Telegram listo** (5 min, Ejercicio 0-B): en Telegram, @BotFather → `/newbot` → nombre y
  usuario terminado en `bot` → copiás el token → en n8n, credencial **Telegram API** con ese token. Importá
  `09-asistente-telegram.json`, poné la credencial en los tres nodos de Telegram y Gemini en el cerebro, **publicalo**
  (con el túnel abierto) y escribile "Hola" al bot desde el celular. Si contesta, **despublicalo** hasta que lo
  necesites: así, si Meta falla en la clase, lo publicás y seguís.
- [ ] **Si vas a mostrar el eco por Slack** (opcional, 15 min): la app de Slack armada y probada con el flujo 11
  (los pasos están en "El eco por Slack", antes de los ejemplos extra).
- [ ] **Las dos credenciales de WhatsApp en n8n** (ver el bloque de la filmina 8):
  - *WhatsApp OAuth API* (para el trigger): App ID y App Secret;
  - *WhatsApp API* (para responder): el token y el WhatsApp Business Account ID.

  El token temporal **vence a las 24 horas**: generalo el mismo día de la clase, o armá uno permanente (usuario del
  sistema, en el Ejercicio 5).
- [ ] **Los workflows importados** (carpeta [n8n/](n8n/)): workflow nuevo → menú **…** → **Import from File** →
  **Save**.
  - `01-eco-whatsapp.json` y `02-asistente-whatsapp.json`: tus credenciales de WhatsApp y Gemini. **No los publiques
    los dos a la vez**: un solo trigger por app. En la clase armás el 02 en vivo; el importado es el plan B.
  - `03-asistente-simulado.json`: publicalo (botón **Publish**). `04-mandar-mensaje-simulado.json`: probá que el 04
    le llega al 03.
  - `05-rag-preguntas-frecuentes.json`: para mostrar el desafío si alguien pregunta por RAG. Necesita
    `ollama pull embeddinggemma`, y la credencial de Gemini en el cerebro.
- [ ] **Probá la práctica entera desde tu celular**, con el mismo celular que vas a usar en clase: "Hola", el clásico
  de "me llamo…", una foto. Anotá cuánto tarda en responder.
- [ ] **Un segundo celular** (el de Romina sirve) agregado como destinatario, para la prueba de los dos chats del Paso
  3. Si no hay, se muestra con el simulador.
- [ ] **El celular en la pantalla compartida**: WhatsApp Web en otra pestaña (o la app de escritorio) con el chat del
  número de prueba abierto. Así la clase ve el mensaje llegar.
- [ ] **El día anterior**, avisales a los alumnos:
  - que hagan el **Ejercicio 0** (la app de Meta y el `hello_world`);
  - que lleguen con n8n prendido y los flujos 03 y 04 importados (el simulador);
  - que traigan pensado **el negocio de su pre-entrega** (el material de lectura lo pide: "traer un caso de uso real").
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) listo para compartir.
- [ ] Avisar que la clase queda grabada.

---

### 0–16 · Apertura y repaso de la Semana 7

**Filmina 1 · Portada** (1 min) — Módulo 8: WhatsApp Business · última clase.

<p style="color:#1a7f37">Bienvenidos al Módulo 8, la última clase del curso. Hoy el agente que vienen armando deja de hablar solo con nosotros y empieza a atender gente de verdad, por WhatsApp.</p>

Para explicar:
- **"WhatsApp Business".** Es el nombre que Meta usa para todo lo de WhatsApp pensado para empresas. Ojo: bajo ese
  nombre hay dos cosas muy distintas (una app y una plataforma), y la primera parte de la clase es separarlas.
  - *Ejemplo:* La panadería del barrio que tiene "Cuenta de empresa" en el celular usa la app. Un banco que te
    responde con un bot a las 3 de la mañana usa la plataforma.
- **"Última clase".** La semana que viene no hay clase: es la Entrega Final. Hoy, además de WhatsApp, cerramos el
  recorrido y vemos cómo encarar el proyecto.
  - *Ejemplo:* Al final de la clase dejamos 15 minutos para el cierre y las preguntas del proyecto final.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a distinguir los tres WhatsApp que se confunden, entender la jerarquía de cuentas de Meta, escribir un system prompt pensado para el celular, aislar la memoria por número de teléfono y armar el asistente en tres fases: trigger, agente y respuesta.</p>

Para explicar cada objetivo:
- **"Distinguir la app de WhatsApp, WhatsApp Business y la Business Platform."** Tres productos con nombre parecido.
  Solo uno se conecta con n8n.
  - *Ejemplo:* Si un cliente les dice "tengo WhatsApp Business, ¿me lo conectás?", lo primero es preguntarle cuál de
    los tres tiene.
- **"Reconocer la jerarquía de cuentas de Meta que exige la Cloud API."** Una **jerarquía** es un orden de cosas que
  contienen a otras, como carpetas adentro de carpetas. La **Cloud API** es la API de WhatsApp que Meta tiene en sus
  servidores (**cloud** es "nube").
  - *Ejemplo:* Empresa → cuenta de WhatsApp → número de teléfono. Y aparte, la app de desarrollador que da las
    claves.
- **"Escribir un system prompt adaptado al formato de mensajería móvil."** El **system prompt** es el manual del
  agente, el de la Semana 6. **Móvil** es el celular.
  - *Ejemplo:* Una respuesta de 15 líneas en la pantalla de un celular es una pared de texto. En WhatsApp, dos o tres
    líneas.
- **"Aislar la memoria por número de teléfono usando el Session ID."** **Aislar** es separar: que cada cliente tenga
  su propia conversación. El **Session ID** es la etiqueta que identifica cada conversación en la memoria.
  - *Ejemplo:* Si Juan y María le escriben al mismo tiempo, Ana no tiene que contarle a María lo que habló con Juan.
- **"Armar la arquitectura de tres fases: trigger, agente y respuesta."** **Arquitectura** es cómo están organizadas
  las piezas. **Trigger** es el nodo que arranca el flujo, como en la Semana 2.
  - *Ejemplo:* Llega el mensaje (trigger), Ana piensa (agente), sale la respuesta al celular (respuesta).

**Filmina 3 · Agenda** (1 min)

<p style="color:#1a7f37">Primero, dónde quedamos. Después, la plataforma de Meta. Después, cómo se arma el asistente: agente, prompt y memoria. Break. La práctica: su bot en el celular. Y al final, el recorrido del curso y el proyecto final.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 7** (8 min, sin filmina) — antes de pasar a la filmina 5.

Es la última clase: hoy se arma el asistente de WhatsApp, que junta todo el curso. El repaso va por la Semana 7
(dónde corre el cerebro), pero termina en la decisión que piden la Pre-entrega 4 y la Entrega Final: **local o
nube**. Si alguien no se acuerda de algo, el detalle está en [el guion de la Semana 7](../Semana%207/README.md).

<p style="color:#1a7f37">Antes de arrancar, repasemos la clase pasada, porque hoy tienen que tomar una decisión con lo que vimos: qué cerebro va a tener su asistente de WhatsApp. Cinco temas, rapidito.</p>

**Repaso 1 · Por qué correr IA local (2 min)**

| Razón | Qué quiere decir | Ejemplo |
|---|---|---|
| **Costo** | En la nube se paga por cada pedido; en local, se paga una vez (la computadora) | Miles de mensajes por día: en local no suma la cuenta |
| **Privacidad** | Los datos no salen de tu computadora ni de tu red | Una clínica, un banco: datos que no pueden ir a otra empresa |
| **Independencia** | Nadie te cambia el modelo, ni te sube el precio, ni te lo apaga | Un modelo que se discontinúa no te rompe el flujo |
| **La contrapartida** | Más lento, menos capaz, y necesita una máquina con memoria | Ana con `llama3.2` tardó más de 5 minutos e inventó un precio |

<p style="color:#1a7f37">Uno. Hay tres razones para correr la IA en nuestra computadora: el costo, porque no se paga por cada pedido; la privacidad, porque los datos no salen; y la independencia, porque nadie nos apaga el modelo. Pero tiene un precio: es más lento, sabe menos, y necesita memoria en la máquina.</p>

**Repaso 2 · Ollama y los modelos (2 min)**

```text
ollama pull llama3.2     ← bajar un modelo (como descargar una canción)
ollama run llama3.2      ← charlar con él en la terminal
ollama list              ← qué modelos tengo
ollama ps                ← cuáles están cargados en memoria ahora
```

<p style="color:#1a7f37">Dos. Ollama es el reproductor; el modelo es la canción. Ollama se instala una vez, y después se bajan modelos: llama3.2, el de 3 mil millones de parámetros, o el chico, el de 1. Y el límite para elegir no es lo que sabe el modelo: es la memoria de nuestra computadora. Si no entra, se corta.</p>

- **Más grande = más capaz, pero más pesado y más lento.** El de 1B le recomendó a un cliente llevar "un casco
  ligero" a Bariloche.
- **Si no alcanza la memoria:** el modelo se corta (*signal: killed*). Se usa uno más chico o se cierran programas.

**Repaso 3 · El puente con n8n (1 min)**

```text
n8n en Docker  ──►  http://host.docker.internal:11434  ──►  Ollama (instalado en la computadora)
   (con localhost, desde adentro de Docker:  fetch failed)
```

<p style="color:#1a7f37">Tres. Para que n8n, que está en Docker, hable con Ollama, que está en la computadora, la dirección es host.docker.internal, puerto 11434. Con localhost no anda: adentro de Docker, localhost es la caja de Docker, no nuestra computadora. Y en el agente, el cerebro se cambia por el sub-nodo Ollama Chat Model. Lo demás, igual.</p>

**Repaso 4 · Lo que aprendimos comparando (1 min)**

<p style="color:#1a7f37">Cuatro. Comparamos la misma pregunta en local y en la nube. El modelo local anda bien para tareas cortas y de un paso: clasificar una queja, resumir, sacar un dato. Como cerebro de un agente con varias herramientas, se queda corto: tarda mucho y se equivoca más. Y en la tarea quedó un truco: tapar los datos sensibles antes de mandarlos a la nube.</p>

**Repaso 5 · La decisión de hoy: ¿local o nube para WhatsApp? (1 min)**

<p style="color:#1a7f37">Y cinco, lo que hoy importa. En WhatsApp, el cliente espera la respuesta en segundos. Un asistente que tarda cinco minutos es un cliente que se fue. Por eso, para la práctica de hoy usamos Gemini. Pero la Pre-entrega 4 les pide decidir y justificar: ¿su caso necesita privacidad por encima de todo, o velocidad? No hay una respuesta correcta: hay una respuesta justificada.</p>

- **Las tres respuestas posibles:** nube (rápido y capaz), local (privado), o las dos según el mensaje (el router de
  privacidad, ejemplo C de la Semana 7).
  - *Ejemplo:* Una agencia de viajes: nube. Un consultorio que recibe síntomas por WhatsApp: local, o tapar los
    datos antes.

**Pregunta rápida para el chat (1 min)** — la pegás, contestan mientras pasás a la filmina 5, no esperás a todos:

```text
REPASO · Contestá con el número y la respuesta
1. Nombrá una razón para correr la IA en tu computadora.
2. ¿Qué comando baja un modelo con Ollama?
3. Desde n8n en Docker, ¿qué dirección uso para llegar a Ollama?
4. ¿Para qué anda bien un modelo chico local: para una tarea corta o para un agente con muchas herramientas?
5. Para tu asistente de WhatsApp: ¿local o nube? ¿Por qué? (una línea)
```

Respuestas: **1** Costo, privacidad o independencia. **2** `ollama pull llama3.2`. **3**
`http://host.docker.internal:11434`. **4** Para una tarea corta. **5** No hay una correcta: leé un par en voz alta y
decí "esto es lo que piden justificar en la Pre-entrega 4".

<p style="color:#1a7f37">Ya tenemos un agente con cerebro, diario, manos y manual, y sabemos dónde puede correr. Lo que le falta es gente: que le escriban clientes de verdad. Para eso, WhatsApp. Vamos.</p>

**Filmina 5 · ¿Dónde quedamos? El agente ya existe, le falta gente** (3 min)

<p style="color:#1a7f37">En el Módulo 6 diseñaron un agente con cerebro, memoria, herramientas y límites. En el 7 lo hicieron correr en su propia máquina. Lo que le faltaba es un canal: alguien del otro lado que le escriba de verdad. Hoy cerramos el círculo: el agente atendiendo mensajes reales en WhatsApp.</p>

Para explicar:
- **"En el módulo 6: diseñaste un agente con cerebro, memoria, herramientas y límites."**
  - *Ejemplo:* Ana, la asesora de "Rumbo Sur": Gemini, memoria de 10 mensajes, la planilla, el dólar y la calculadora.
- **"En el módulo 7: lo hiciste correr en tu propia máquina, sin depender de la nube."**
  - *Ejemplo:* La misma Ana, con `llama3.2` en Ollama.
- **"Lo que le faltaba: un canal."** Un **canal** es el medio por donde llegan los mensajes. Hasta hoy, el único canal
  era el botón *Open chat* de n8n, que solo usamos nosotros.
  - *Ejemplo:* Ana es una vendedora excelente encerrada en una oficina sin puerta. Hoy le abrimos la puerta.
- **"Hoy cerramos el círculo: el agente atendiendo mensajes reales en WhatsApp."** WhatsApp es el canal que usa todo
  el mundo en Argentina; para un negocio, es donde están los clientes.
  - *Ejemplo:* Al final de la práctica, le escribo desde mi celular al número de la agencia y me contesta Ana.

---

### 10–30 · Sección 01 · La plataforma de Meta

**Filmina 6 · Separador "01: La plataforma de Meta"**

<p style="color:#1a7f37">Primero, entender con quién estamos hablando. WhatsApp es de Meta, la misma empresa de Facebook e Instagram, y para conectarlo hay que pasar por su sistema de cuentas.</p>

#### Filmina 7 · Tres WhatsApp que se confunden (5 min)

<p style="color:#1a7f37">Tres productos con nombre parecido. WhatsApp, la app de siempre, personal, sin API. WhatsApp Business, la app para pequeños negocios: catálogo, respuestas automáticas básicas y etiquetas, pero manual, sin forma oficial de conectarla a n8n. Y la Business Platform, que antes se llamaba WhatsApp Business API: la solución de Meta para mandar y recibir mensajes desde un programa. Esa es la que se conecta con n8n.</p>

Para explicar:
- **"WhatsApp: la app de mensajería personal. Sin API, pensada para uso individual."** Sin **API** quiere decir que no
  hay una puerta oficial para que un programa la use (la API es la ventanilla de la Semana 4).
  - *Ejemplo:* Tu WhatsApp de todos los días. Hay programas "no oficiales" que lo conectan escaneando el código QR,
    pero violan las reglas de WhatsApp y el número puede quedar bloqueado. No los usamos.
- **"WhatsApp Business: la app para pequeños negocios: catálogo, respuestas automáticas básicas y etiquetas."** Es
  gratis, se baja de la tienda del celular y se usa a mano. Sus herramientas (el cuestionario pregunta por ellas):
  - **perfil de empresa:** dirección, horario, web;
  - **catálogo:** una vidriera con fotos y precios adentro del chat;
  - **respuestas rápidas:** textos guardados que se mandan con un atajo, como `/pagos`;
  - **etiquetas:** colores para ordenar los chats ("nuevo cliente", "pago pendiente");
  - **mensaje de bienvenida** y **mensaje de ausencia:** respuestas automáticas fijas, por ejemplo fuera de horario.
  - *Ejemplo:* La verdulería que contesta "Hola! Estamos cerrados, abrimos a las 9" a las 11 de la noche. Eso es un
    **mensaje de ausencia**: un texto fijo, no un agente. No entiende lo que le escribiste.
- **"Sigue siendo manual, sin forma oficial de conectarla a n8n."** Todas esas herramientas las maneja una persona con
  el celular en la mano.
  - *Ejemplo:* Si llegan 200 consultas por día, alguien tiene que contestarlas una por una, aunque use respuestas
    rápidas.
- **"Business Platform: antes 'WhatsApp Business API'. La solución de Meta para enviar y recibir mensajes de forma
  programática."** **Programática** quiere decir "desde un programa", sin una persona tocando el celular. Es la que
  usan los bancos, las aerolíneas y los e-commerce.
  - *Ejemplo:* "Tu pedido fue despachado, llega mañana", que te manda una tienda online: nadie lo escribió a mano.
- **"Esta es la que se conecta con n8n."** Cuando decimos "WhatsApp en n8n", es siempre esta.
  - *Ejemplo:* Los nodos *WhatsApp Trigger* y *WhatsApp Business Cloud* de n8n hablan con la Business Platform.

**Los tres, en una tabla** (para decirlo una vez):

| | WhatsApp | WhatsApp Business (app) | Business Platform (Cloud API) |
|---|---|---|---|
| Para quién | Personas | Negocios chicos | Empresas, o cualquiera que automatice |
| Quién contesta | Vos | Vos, con ayudas | Un programa (n8n, un agente) |
| Se conecta a n8n | No | No | Sí |
| Cuesta | Nada | Nada | Responder dentro de las 24 h es gratis; los mensajes que inicia la empresa se pagan |

**Ejemplo: ¿qué necesita el cliente?**

❌ Mal: "tengo WhatsApp Business en el celu, conectalo a la IA".

```text
→ La app WhatsApp Business no tiene API oficial. No se puede conectar a n8n.
→ Y si se registra ese mismo número en la Platform, deja de funcionar en la app.
```

✅ Bien: separar el número.

```text
→ Un número nuevo (o el de prueba de Meta) en la Business Platform, conectado a n8n.
→ El celular del dueño sigue con su app para hablar con proveedores y amigos.
```

#### Filmina 8 · El ecosistema Meta: la jerarquía detrás de la API (5 min)

<p style="color:#1a7f37">Para usar la Cloud API, la cuenta no se conecta directo. Hay una jerarquía: la cuenta de empresa de Meta, el Business Manager; adentro, la cuenta de WhatsApp Business, con sus números; aparte, la app de Meta for Developers, donde se sacan las claves para n8n; y el número verificado, que deja de poder usarse en la app normal. Por eso conectar WhatsApp no es tan directo como conectar un formulario: hay configuración y aprobación de por medio.</p>

Para explicar:
- **"Meta Business Account: el Business Manager. Agrupa los activos de una empresa: páginas, cuentas de Instagram,
  cuentas de WhatsApp."** Hoy Meta lo llama **portfolio comercial** (*business portfolio*). Los **activos** son todo lo
  que la empresa tiene en Meta.
  - *Ejemplo:* "Rumbo Sur" tiene un portfolio con su página de Facebook, su Instagram y su WhatsApp.
- **"WhatsApp Business Account: la cuenta específica de WhatsApp dentro de ese Business Manager, asociada a uno o más
  números."** Se abrevia **WABA**. En la pantalla de Meta aparece su número de identificación, el *WhatsApp Business
  Account ID*, que n8n pide.
  - *Ejemplo:* La WABA de Rumbo Sur tiene dos números: ventas y postventa.
- **"App de Meta for Developers: donde se generan las credenciales técnicas, tokens e IDs, que después n8n usa para
  autenticarse."** **Meta for Developers** (developers.facebook.com) es el sitio de Meta para programadores. Una
  **app** ahí no es una aplicación de celular: es un "permiso" registrado para que un programa use las APIs. Un
  **token** es una clave larga, como la API Key de la Semana 4.
  - *Ejemplo:* La app "Asistente Rumbo Sur" da el token con el que n8n manda los mensajes, y el *App ID* y *App
    Secret* con los que n8n se suscribe para recibirlos.
- **"Número verificado: habilitado para enviar y recibir por API. Ojo: ese número deja de poder usarse en la app
  normal de WhatsApp."** Un número vive en un solo lugar: o en la app, o en la API.
  - *Ejemplo:* Para practicar, Meta regala un **número de prueba**: puede mandar mensajes a hasta 5 celulares que
    vos registres. No hace falta usar un número propio.
- **"Por qué importa: hay una capa de configuración y aprobación de por medio. Meta puede pedir verificación del
  negocio."** **Verificar el negocio** es mandarle a Meta documentación de la empresa. Para el número de prueba no
  hace falta; para un número real con muchos clientes, sí.
  - *Ejemplo:* Un formulario de Google se conecta en dos minutos. WhatsApp, la primera vez, media hora. Por eso
    hicieron el Ejercicio 0 en casa.

**En Meta, paso a paso** (lo mostrás en tu pantalla mientras lo contás, 2 min; es el Ejercicio 0):

```text
EN META · La app y el número de prueba
1. developers.facebook.com → Mis apps → Crear app
2. Caso de uso: "Connect with customers through WhatsApp" (conectarte con clientes a través de WhatsApp)
3. Elegí o creá un portfolio comercial → Crear app
4. En el menú: WhatsApp → API Setup (Configuración de la API)
   → ahí están: el número de prueba (From), su Phone number ID y el WhatsApp Business Account ID
5. Generate access token → copialo (el temporal dura 24 horas)
6. To → agregá tu celular → te llega un código por WhatsApp → confirmalo
7. Send message → te llega el "hello_world" al celular. Respondele cualquier cosa.
```

**En n8n, paso a paso** (las dos credenciales, 1 min):

```text
EN N8N · Las dos credenciales de WhatsApp
Para RESPONDER (nodo WhatsApp Business Cloud):
1. Credentials → Create credential → buscá "WhatsApp" → WhatsApp API
2. Access Token: el token de API Setup
3. Business Account ID: el "WhatsApp Business Account ID" de API Setup → Save

Para ESCUCHAR (nodo WhatsApp Trigger):
4. Create credential → WhatsApp OAuth API
5. En Meta: Configuración de la app → Básica (App settings → Basic)
   Client ID = App ID (identificador de la app) · Client Secret = App Secret (clave secreta, botón Mostrar)
6. Save
```

Lo que se ve: son **dos credenciales distintas** porque hacen dos cosas distintas. Una es la llave para mandar
mensajes (el token). La otra es la llave de la app, que n8n usa para avisarle a Meta "mandame los mensajes a esta
dirección".

#### Filmina 9 · Casos de uso: qué se resuelve con esto en n8n (4 min)

<p style="color:#1a7f37">Qué se puede resolver. Atención al cliente: recibir consultas, clasificarlas y responder o derivar a un humano. Notificaciones: confirmaciones de pedido, recordatorios de turno, avisos de envío, con plantillas aprobadas. Captura de leads: un mensaje entrante crea un contacto en el CRM. Chatbots con el agente del módulo 6 y memoria. Y encuestas: el workflow espera la respuesta del usuario.</p>

Para explicar:
- **"Atención al cliente: recibir consultas, clasificarlas con o sin IA, y responder o derivar a un humano."**
  **Derivar** es pasarle la conversación a una persona.
  - *Ejemplo:* La clasificación de la Semana 3 (IF y Switch), pero con mensajes de WhatsApp en vez de mails.
- **"Notificaciones transaccionales: confirmaciones de pedido, recordatorios de turno, avisos de envío, con plantillas
  aprobadas."** **Transaccional** es un aviso sobre algo que el cliente hizo (compró, reservó). Una **plantilla**
  (*template*) es un mensaje que Meta aprueba antes. Es **la única forma de escribirle primero a alguien**, o de
  escribirle después de 24 horas de su último mensaje. Meta las clasifica en tres categorías: **marketing**
  (promociones), **utilidad** (avisos de pedidos, turnos) y **autenticación** (códigos de verificación).
  - *Ejemplo:* "Hola Juan, te recordamos tu turno de mañana a las 10. Respondé 1 para confirmar." El `hello_world`
    que recibieron en el Ejercicio 0 es una plantilla.
- **"Captura de leads: un mensaje entrante dispara la creación de un contacto en el CRM."** Un **lead** es un
  posible cliente. Un **CRM** es el sistema donde una empresa guarda sus clientes y sus ventas.
  - *Ejemplo:* Alguien escribe "quiero info de Salta" → n8n agrega una fila en la planilla de interesados, con su
    número.
- **"Chatbots conversacionales: el trigger de WhatsApp más el AI Agent del módulo 6, con memoria de contexto."** Es lo
  que armamos hoy.
  - *Ejemplo:* Ana respondiendo por WhatsApp, acordándose de lo que el cliente dijo dos mensajes antes.
- **"Encuestas y confirmaciones: la operación de esperar respuesta pausa el workflow hasta que el usuario conteste."**
  El nodo de WhatsApp de n8n tiene una operación ***Send and Wait for Response***: manda un mensaje y el flujo queda en
  pausa, como el nodo *Wait* de la Semana 3, hasta que la persona contesta.
  - *Ejemplo:* "¿Confirmás la reserva? Sí / No" → el flujo sigue por una rama u otra según la respuesta.

**La regla de las 24 horas** (para decirlo una vez, porque es la base de los costos y la filmina 31 lo pregunta):

```text
El cliente escribe → se abre una "ventana" de 24 horas.
   Dentro de la ventana: el negocio responde lo que quiera, con texto libre. Gratis.
   Fuera de la ventana (o para escribir primero): solo con una plantilla aprobada. Se paga por mensaje.
```

Desde julio de 2025, Meta cobra **por mensaje de plantilla entregado**, con precios según la categoría y el país.
Las respuestas dentro de la ventana no se cobran. Un asistente que solo responde (como el de hoy) prácticamente no
paga nada a Meta; paga el modelo de IA. Los precios cambian: antes de presupuestar, se miran en la página de precios
de Meta.

**Ejercicio 1 · ¿Qué WhatsApp necesita?** (5 min) — la "cacería de funciones" del material de lectura. Pegás en el
chat:

```text
EJERCICIO 1 · Para cada caso: ¿app Business o Platform? ¿Con qué herramienta?
1. A una pastelería le preguntan 30 veces por día "¿cómo se paga?"
2. Una inmobiliaria quiere que un agente responda consultas a las 3 de la mañana
3. Un dentista quiere que a la noche le respondan "estamos cerrados, abrimos a las 9"
4. Una tienda online quiere avisar "tu pedido salió" a cada comprador
5. Un vivero quiere mostrar sus plantas con foto y precio adentro del chat
Respondé en el chat: 1 → ..., 2 → ...
```

Respuestas (en [ejercicios-docente.md](ejercicios-docente.md)): 1 app, respuestas rápidas · 2 Platform + agente · 3
app, mensaje de ausencia · 4 Platform, plantilla de utilidad · 5 app, catálogo. La idea a llevarse: **la app alcanza
mientras una persona pueda contestar**. Cuando hace falta que conteste un programa, es la Platform.

#### Filmina 10 · #FindTheBug: el Verify Token (2 min)

<p style="color:#1a7f37">Un bug clásico. Antes de mandarte mensajes, Meta le hace una pregunta a tu webhook: le manda un desafío, el hub.challenge, para confirmar que la dirección es tuya. Si no le devolvés lo que espera, no hay conexión y no llega un solo mensaje. Ese Verify Token es lo primero que se revisa cuando no pasa nada.</p>

Para explicar:
- **El apretón de manos.** Un **webhook** es la dirección donde n8n espera que le avisen algo (Semana 4). Antes de
  mandar mensajes a esa dirección, Meta la prueba: le manda un número al azar (el `hub.challenge`) y una contraseña
  (el **Verify Token**). Si la dirección contesta el mismo número, Meta confía.
  - *Ejemplo:* Es como cuando el banco te manda un código por SMS para confirmar que el celular es tuyo.
- **Con el WhatsApp Trigger de n8n, el apretón lo hace n8n solo.** Cuando el flujo se activa, n8n le pide a Meta que
  se suscriba, inventa el Verify Token (usa el identificador del nodo) y contesta el desafío. No hay que copiar nada
  a mano.
  - *Ejemplo:* Si alguien arma el webhook con el nodo *Webhook* común en vez del *WhatsApp Trigger*, ahí sí tiene que
    contestar el desafío a mano. Por eso usamos el trigger.
- **Entonces, ¿por qué "no pasa nada"?** Porque el apretón falla igual si Meta no puede llegar a la dirección. Las
  tres causas más comunes:
  - la dirección no es pública (n8n en Docker sin túnel: `localhost` no existe para Meta);
  - el flujo no está publicado ni escuchando;
  - la credencial del trigger tiene mal el *App Secret*: n8n descarta en silencio los mensajes que no vienen firmados
    con esa clave.
  - *Ejemplo:* Es exactamente el Debug Challenge de la práctica.

---

### 30–55 · Sección 02 · El asistente con IA

**Filmina 11 · Separador "02: El asistente con IA"**

<p style="color:#1a7f37">Ya sabemos por dónde entran los mensajes. Ahora, quién los contesta y cómo.</p>

#### Filmina 12 · El motor de decisión: por qué un agente y no un flujo lineal (4 min)

<p style="color:#1a7f37">¿Por qué un agente? Porque es un orquestador dinámico: entiende el contexto, a diferencia de un flujo lineal. Recibe el mensaje y decide qué hacer según el razonamiento del modelo. Si es una pregunta general, responde; si le piden consultar un pedido o agendar, primero usa una herramienta. Y tolera la ambigüedad: en WhatsApp llegan mensajes cortos, con errores, audios transcritos, y el agente entiende la intención sin palabras clave exactas.</p>

Para explicar:
- **"Es un orquestador dinámico: comprende el contexto, a diferencia de una automatización lineal tradicional."**
  **Orquestador** es el que coordina las piezas (Semana 5). **Lineal** es un flujo que siempre hace los mismos pasos
  en el mismo orden.
  - *Ejemplo:* Un flujo lineal con un Switch que busca la palabra "precio". Un agente entiende "cuánto me sale" y
    "está muy caro?" como preguntas de precio.
- **"Autonomía y enrutamiento: recibe el mensaje por WhatsApp y decide qué acción tomar según el razonamiento del
  modelo."** **Enrutar** es elegir el camino. Lo vimos en la Semana 6: el ciclo de razonar, actuar y observar.
  - *Ejemplo:* "Hola" → saluda. "¿Hay lugar en Ushuaia?" → consulta la planilla. "Quiero hablar con alguien" → deriva.
- **"Tool calling: si es una pregunta general, responde. Si le piden consultar un pedido, revisar stock o agendar,
  primero invoca una herramienta."** **Tool calling** es "llamar a una herramienta", las manos del agente.
  - *Ejemplo:* La Ana de la Semana 6 con `consultar_paquetes`, `cotizacion_dolar` y `calculadora`.
- **"Tolerancia a la ambigüedad: en WhatsApp llegan mensajes cortos, con errores de tipeo o audios transcritos. El
  agente infiere la intención sin palabras clave exactas."** **Ambiguo** es lo que puede entenderse de más de una
  manera. **Transcribir** un audio es pasarlo a texto.
  - *Ejemplo:* "ola cuanto el d bariloxe x 2" → el agente entiende "¿cuánto sale Bariloche para dos personas?". Un IF
    que busca "Bariloche" no lo encuentra.

**Ejemplo: flujo lineal contra agente**

❌ Un flujo lineal con palabras clave:

```text
Si el mensaje contiene "precio" → mandar la lista de precios.
"cuánto sale salta?"  → no contiene "precio" → no responde nada útil.
```

✅ Un agente:

```text
"cuánto sale salta?" → entiende que es una pregunta de precio, de un destino puntual
→ responde: "*Norte Mágico* (Salta): 6 días, USD 890 por persona. ¿Para cuántas personas sería?"
```

#### Filmina 13 · El prompt de WhatsApp: reglas para el formato móvil (6 min) — Ejercicio 2

<p style="color:#1a7f37">El system prompt para WhatsApp tiene cuatro reglas. Rol y restricciones: quién es, a qué negocio representa y qué tiene prohibido. Concisión: párrafos de dos o tres líneas como máximo. Estilo visual: el formato de WhatsApp, asteriscos para negritas, guiones para listas, algún emoji sin saturar. Y micro-cierres: cada mensaje termina con una pregunta o el próximo paso.</p>

Para explicar:
- **"Rol y restricciones: quién es el asistente, a qué negocio representa, y qué tiene prohibido hacer o debe
  desviar."** Es lo mismo de la Semana 6. **Desviar** un tema es no contestarlo y volver a lo del negocio.
  - *Ejemplo:* "Sos Ana, de Rumbo Sur. No confirmás reservas ni tomás pagos. Si te preguntan algo que no es de viajes,
    volvé a los paquetes."
- **"Concisión: párrafos de dos o tres líneas como máximo. Los bloques densos arruinan la lectura en el teléfono."**
  **Conciso** es breve, sin relleno. Lo que en la computadora son 5 líneas, en el celular son 15.
  - *Ejemplo:* Una lista de los seis paquetes con todo lo que incluyen ocupa dos pantallas. Mejor: "Tenemos 6
    destinos. ¿Te interesa más playa, montaña o vino?".
- **"Estilo visual: el formato nativo de WhatsApp. Asteriscos para negritas, guiones para listas, emojis estratégicos
  sin saturar."** **Nativo** es el propio de WhatsApp. Ojo con un detalle: en WhatsApp la negrita es **un** asterisco
  de cada lado (`*así*`). Los modelos, por costumbre, escriben dos (`**así**`), que en WhatsApp se ven como
  asteriscos sueltos. Hay que decírselo en el prompt.
  - *Ejemplo:* `*Bariloche Clásico*` se ve en negrita. `**Bariloche Clásico**` se ve con los asteriscos.
- **"Micro-cierres: cada mensaje termina con una pregunta clara o indicando el siguiente paso."** En inglés se le dice
  **CTA**, *call to action*: una invitación a hacer algo. Sin cierre, la conversación muere.
  - *Ejemplo:* "...USD 950 por persona." (y el cliente no sabe qué hacer) contra "...USD 950 por persona. ¿Querés que
    te cuente qué incluye?".

**Ejemplo: la misma respuesta, para la computadora y para el celular**

❌ Mal: una respuesta típica sin reglas de formato.

```text
¡Hola! ¡Muchas gracias por comunicarte con Rumbo Sur! 😊✈️🌎 Con mucho gusto te ayudo. **Bariloche** es un destino
maravilloso que ofrece paisajes increíbles durante todo el año. Contamos con dos opciones: **Bariloche Clásico**, de 5
días, que incluye aéreo, hotel 3 estrellas con desayuno y la excursión al Circuito Chico, a un precio de USD 950 por
persona, y **Bariloche Nieve**, de 7 días, que incluye aéreo, hotel 4 estrellas y pases al Cerro Catedral...
```

✅ Bien: con las cuatro reglas.

```text
Tenemos *Bariloche Clásico*: 5 días, USD 950 por persona, con aéreo, hotel y excursión al Circuito Chico 🏔️
El de nieve no tiene cupos por ahora.
¿Para qué fechas lo estás pensando?
```

**Ejercicio 2 · El humano detrás de la IA** (5 min) — el "desafío de escritura" del material de lectura. Pegás en el
chat:

```text
EJERCICIO 2 · Un cliente escribe por WhatsApp:
"hace 3 dias que espero que me manden el voucher del hotel y nadie me contesta"

El bot respondió:
"Estimado cliente: Le informamos que su solicitud ha sido recibida y será procesada según el orden de llegada.
Agradecemos su paciencia. Atentamente, el equipo de Rumbo Sur."

Reescribí la respuesta para WhatsApp: empática, de 2 o 3 líneas, con un micro-cierre.
Y escribí UNA regla para el system prompt que haga que el bot responda así.
```

Leés tres respuestas. Lo que tiene que aparecer: pedir disculpas sin vueltas, decir qué va a pasar ("te paso con
alguien del equipo ahora") y no prometer lo que el bot no puede cumplir ("te lo mando ya"). Una respuesta posible está
en la versión docente.

<p style="color:#1a7f37">Fíjense que la mejor respuesta no es la más larga. En WhatsApp, menos es más. Y el bot no puede mandar el voucher: lo correcto es derivar a una persona, no prometer.</p>

#### Filmina 14 · El Session ID: la regla de oro para WhatsApp (5 min)

<p style="color:#1a7f37">La regla de oro. Si la memoria no está aislada, el agente mezcla los chats de distintos clientes. El Session ID que se pone en el nodo de memoria tiene que ser siempre el número de teléfono del remitente. Sale del campo wa_id o from que llega del webhook de WhatsApp. Y sirve para que n8n reinyecte el historial correcto en cada ejecución y la conversación se sienta como un chat real.</p>

Para explicar:
- **"El problema: si la memoria no está aislada, el agente mezcla los chats de distintos clientes."** La memoria de la
  Semana 6 guarda la conversación con una etiqueta. Si todos los mensajes van con la misma etiqueta, para Ana es una
  sola conversación con todo el mundo.
  - *Ejemplo:* Juan escribe "me llamo Juan". Después María pregunta "¿cómo me llamo?" y Ana le responde "Juan".
- **"La regla: el Session ID que se mapea en el nodo de memoria tiene que ser siempre el número de teléfono del
  remitente."** **Mapear** es completar un campo con un dato que viene de otro nodo, arrastrándolo. El **remitente**
  es el que manda el mensaje.
  - *Ejemplo:* En el nodo *Simple Memory*: *Session ID* → *Define below* → `{{ $('Datos del mensaje').item.json.telefono }}`.
- **"De dónde sale: del valor wa_id o from que llega en el webhook de WhatsApp."** Cuando alguien escribe, Meta manda
  a n8n un paquete (un JSON, Semana 1) con los datos. El teléfono aparece dos veces: en `contacts[0].wa_id` (el ID de
  WhatsApp del contacto) y en `messages[0].from` ("de"). Son el mismo número.
  - *Ejemplo:* Un mensaje desde un celular de Buenos Aires llega con `"from": "5491155550001"`: 54 (Argentina), 9
    (celular), 11 (Buenos Aires) y el número.
- **"Para qué: para que n8n reinyecte el historial correcto en cada ejecución y la conversación se sienta como un chat
  real."** Cada mensaje de WhatsApp es **una ejecución nueva** del flujo. **Reinyectar** es volver a meterle al modelo
  los mensajes anteriores de esa persona, antes del nuevo.
  - *Ejemplo:* Juan escribe "¿y para dos?". Sin memoria, Ana no sabe de qué destino habla. Con memoria, sabe que antes
    preguntó por Salta.

**Ejemplo: la clave de la memoria**

❌ Mal: un texto fijo, o la opción del chat de prueba.

```text
Session ID: Define below → Key: "cliente"
→ todos los clientes comparten una sola conversación.
Session ID: Connected Chat Trigger Node
→ busca un "sessionId" que solo manda el chat de prueba de n8n: con WhatsApp no existe, y da error.
```

✅ Bien: el teléfono de quien escribe.

```text
Session ID: Define below → Key: {{ $('Datos del mensaje').item.json.telefono }}
→ una conversación por número. Juan y María no se mezclan.
```

**En n8n, paso a paso** (1 min, lo hacen en el Paso 3):

```text
EN N8N · La memoria por teléfono
1. Abajo del AI Agent, en Memory: + → Simple Memory
2. Session ID: Define below
3. Key: arrastrá "telefono" desde Datos del mensaje (queda {{ $('Datos del mensaje').item.json.telefono }})
4. Context Window Length: 10 (los últimos 10 mensajes de esa persona)
```

Lo que se ve: el nodo *Simple Memory* avisa que guarda la memoria **adentro de n8n**: si n8n se reinicia, se borra.
Para la práctica alcanza; para el proyecto final, conviene una memoria en una base de datos (*Postgres Chat Memory*,
por ejemplo).

#### Filmina 15 · La arquitectura: tres fases dentro del canvas (4 min)

<p style="color:#1a7f37">La arquitectura, en tres fases. El trigger, que escucha los eventos de WhatsApp y del que sacamos el campo text.body. El procesamiento: el AI Agent con sus tres sub-nodos, el modelo, la memoria aislada por teléfono y las herramientas. Y la respuesta: el nodo de WhatsApp Business que toma el texto final del agente y lo manda de vuelta al celular.</p>

Para explicar:
- **"Trigger: el nodo que escucha los eventos entrantes de la API de WhatsApp, extrayendo el campo text.body."** Un
  **evento** es algo que pasó: llegó un mensaje, se entregó un mensaje, se leyó. El texto que escribió la persona
  viene en `messages[0].text.body` (**body** es "cuerpo").
  - *Ejemplo:* Atrás del trigger ponemos un *Edit Fields* que saca lo que importa: teléfono, nombre, tipo y texto.
    Así los demás nodos no tienen que buscar adentro del paquete de Meta.
- **"Procesamiento: el nodo AI Agent, alimentado por sus tres sub-nodos: el LLM, la memoria aislada por número de
  teléfono y las tools permitidas."** **LLM** es el modelo de lenguaje: el cerebro. **Sub-nodo** es un nodo que se
  enchufa abajo de otro (Semana 6).
  - *Ejemplo:* Ana por WhatsApp: Gemini, la memoria por teléfono y (en la versión completa) las herramientas de la
    Semana 6.
- **"Respuesta: el nodo nativo de WhatsApp Business toma el texto final del agente y lo dispara de vuelta al
  dispositivo del usuario."** El agente deja su respuesta en el campo `output`. **Dispositivo** es el celular.
  - *Ejemplo:* Nodo *WhatsApp Business Cloud* → *Send* → destinatario: el teléfono de *Datos del mensaje* → texto:
    `{{ $json.output }}`.

**El flujo de la práctica** (lo mostrás en tu n8n, el 02 importado):

```text
WhatsApp Trigger → Datos del mensaje → ¿Es un mensaje? → ¿Es texto? ──sí──→ Ana por WhatsApp → Responder por WhatsApp
                                                                    │          (Gemini + memoria por teléfono)
                                                                    └──no──→ Responder: solo texto
```

<p style="color:#1a7f37">Las tres fases están, con dos porteros en el medio. ¿Es un mensaje? descarta los avisos de entregado y leído, que también llegan. ¿Es texto? separa las fotos y los audios. Los vamos a necesitar en el Paso 5.</p>

#### Filmina 16 · #FindTheBug: la API no se acuerda de nada (3 min)

<p style="color:#1a7f37">Otro bug clásico. La API de WhatsApp no recuerda nada: es stateless, sin estado. Toda la memoria la manejás vos, del lado del agente en n8n. Si no configurás el nodo de memoria, cada mensaje llega como si fuera el primero.</p>

Para explicar:
- **"Stateless".** **Sin estado**: cada pedido es independiente, el servidor no guarda nada de los anteriores. Lo
  vimos con las APIs de la Semana 4: cada GET es nuevo.
  - *Ejemplo:* Meta le pasa a n8n "Juan escribió: ¿y para dos?". No le dice qué habló Juan antes: eso no lo sabe nadie,
    salvo la memoria de n8n.
- **El síntoma:** el bot saluda en cada mensaje, pregunta lo mismo dos veces, no entiende "¿y el otro?".
  - *Ejemplo:* "Hola! Soy Ana, ¿en qué te ayudo?" como respuesta a "dale, el de 5 días".
- **Y el bug al revés:** la memoria está, pero con la misma clave para todos (filmina 14). Las dos cosas se prueban
  en el Paso 3.

---
### 55–65 · Break

**Filmina 17 · Break** (10 min)

<p style="color:#1a7f37">Diez minutos de break. A la vuelta, la práctica. Los que hicieron el Ejercicio 0, tengan a mano el celular y la pantalla de API Setup de Meta. Los demás, importen los flujos 03 y 04 de la carpeta de la semana: van a usar el simulador.</p>

---

### 65–102 · Sección 03 · Práctica en vivo

**Filmina 18 · Separador "03: Práctica en vivo"**

#### Filmina 19 · Ejemplo en vivo y Debug Challenge (1 min)

<p style="color:#1a7f37">Ahora lo armamos. Yo lo hago con mi celular de verdad, y ustedes a la par. A mitad de camino les voy a mostrar un flujo que no responde: mando un hola y no pasa nada. Ustedes me dicen por el chat qué revisar primero.</p>

El Debug Challenge va al final del Paso 1, cuando el canal ya funcionó una vez.

#### La práctica: qué vamos a armar (para decirlo una vez)

<p style="color:#1a7f37">Cinco pasos. Uno: el canal, que Meta y n8n se den la mano. Dos: el cerebro, que el agente conteste algo, aunque sea feo. Tres: la memoria, que no se olvide con quién habla. Cuatro: la voz, que suene bien en el celular. Y cinco: los bordes, qué pasa cuando el usuario no colabora.</p>

<p style="color:#1a7f37">Hay dos caminos. El real, con WhatsApp de verdad, para los que hicieron el Ejercicio 0 y tienen n8n con dirección pública. Y el simulador, para todos los demás: un webhook que recibe exactamente el mismo paquete que manda Meta. Del Paso 2 en adelante, los dos caminos son iguales.</p>

1. Compartís [ejercicios-alumnos.md](ejercicios-alumnos.md). Pegás en el chat:

```text
PRÁCTICA · Semana 8 (Ejercicio 3 de ejercicios-alumnos.md)
Camino REAL: hiciste el Ejercicio 0 y tu n8n tiene dirección https pública
   (n8n Cloud, o Docker con túnel) → armás el flujo a la par mío.
Camino SIMULADOR: todos los demás →
   1. Importá 03-asistente-simulado.json y 04-mandar-mensaje-simulado.json
   2. En el 03: credencial de Gemini en "Cerebro: Gemini" → Save → Publish
   3. En el 04: Execute workflow → abrí "Mandar al simulador": ahí está la respuesta de Ana
   En cada paso, abrís el nodo que yo armo y lo mirás (o lo cambiás) en tu 03.
Camino TELEGRAM (plan B): si WhatsApp no te anda pero tenés dirección pública y el bot del Ejercicio 0-B
   → "Plan B: Telegram" al final del Ejercicio 3. Cambian la entrada y la respuesta; lo demás es igual.
```

**Para el camino simulador, una vez** (lo mostrás en tu pantalla, 1 min): el flujo 04 hace de celular. Arma el mismo
paquete que manda Meta y se lo manda al 03 por HTTP, como en la Semana 4. La respuesta de Ana vuelve en la misma
llamada.

```text
04 · Mandar un mensaje simulado:
Arrancar a mano → Mensaje de prueba (telefono, nombre, tipo, texto) → Mandar al simulador (POST al webhook del 03)

03 · Asistente con WhatsApp simulado:
Simulador: entra el mensaje → Como lo entrega el WhatsApp Trigger → (lo mismo que el flujo real) → Respuesta
```

Lo que se ve, la primera vez (real, del simulador con `llama3.2`; con Gemini va a ser más rápido y mejor escrito):

```text
Mensaje: "Hola! Me llamo Juan. Qué paquetes tienen para el sur?"   (tardó 5 minutos: el modelo arrancaba en frío)

*Fin del Mundo* 🌟: 5 días, USD 1320. Aéreo, hotel con media pensión y navegación por el Canal Beagle.
*Bariloche Clásico*: 5 días, USD 950. Aéreo, hotel 3 estrellas con desayuno y excursión al Circuito Chico.
*Bariloche Nieve*: 7 días, USD 1450. (Sin cupos actuales)
*Norte Mágico*: 6 días, USD 890. Aéreo, hotel con desayuno y excursiones a Cafayate y Purmamarca.
*Cataratas Express*: 3 días, USD 640. Aéreo, hotel con desayuno y entrada al lado argentino de las Cataratas.
¿Cuál es tu destino favorito en el sur?
```

(Salta y Cataratas no son "el sur": es el modelo chico. Sirve para preguntarle a la clase "¿ven algo raro?".)

#### Paso 1 · El canal (65–77)

2. **Filmina 20.** Decís:

<p style="color:#1a7f37">Paso uno: que Meta y n8n se den la mano. Revisamos que la app de Meta esté lista, ponemos el WhatsApp Trigger, y mandamos un hola desde el celular. El resultado esperado: el mensaje del teléfono apareciendo en el canvas de n8n.</p>

3. **Revisar Meta.** Mostrás **developers.facebook.com** → tu app → **WhatsApp** → **API Setup**: el número de prueba,
   tu celular en la lista **To**, y el token. Decís:

<p style="color:#1a7f37">Tres cosas para revisar: el número de prueba está, mi celular está en la lista de destinatarios, y el token está vigente. El token temporal dura 24 horas: si lo generaron ayer, ya venció.</p>

4. **El trigger.** Workflow nuevo → nombre: *Asistente de WhatsApp*. Pegás en el chat:

```text
PRÁCTICA · Paso 1: el canal (camino REAL)
1. Workflow nuevo → nombre: Asistente de WhatsApp
2. Add first step → buscá "WhatsApp" → WhatsApp Trigger → On messages
3. Credential: WhatsApp OAuth API (App ID y App Secret)
4. Trigger On: Messages
5. Add option → Receive Message Status Updates → sacá "All" (que no quede nada elegido)
6. + → Edit Fields (Set) → renombralo: Datos del mensaje → Add Field, cinco veces:
   telefono      → {{ $json.messages?.[0]?.from }}
   nombre        → {{ $json.contacts?.[0]?.profile?.name }}
   tipo          → {{ $json.messages?.[0]?.type }}
   texto         → {{ $json.messages?.[0]?.text?.body }}
   phoneNumberId → {{ $json.metadata?.phone_number_id }}
7. Execute workflow → queda "Waiting for trigger event" → mandá "Hola" desde tu celular
```

**Nodo por nodo, en tu pantalla:**

**P1-a · El que escucha a WhatsApp** (*WhatsApp Trigger*)

```text
Overview → Create workflow → nombre:  Asistente de WhatsApp
Add first step → escribí  whatsapp  → WhatsApp Trigger   (el del rayito: es un trigger)
→ si muestra una lista de eventos: On messages
```

- **Cuándo se coloca:** primero. Es el disparador: el flujo arranca cada vez que Meta avisa que llegó algo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential to connect with* | **Create new credential** → **WhatsApp OAuth API** → *Client ID* = el **App ID** · *Client Secret* = el **App Secret** (del Ejercicio 0) → **Save** | Con estos datos n8n se anota en tu app de Meta para recibir los mensajes. Si el *App Secret* está mal, los mensajes llegan y n8n los tira sin avisar |
| *Trigger On* | **Messages** | Solo lo que tiene que ver con mensajes. Hay otros eventos (cambios en la cuenta, plantillas) que no nos importan |
| *Options* → **Add option** → *Receive Message Status Updates* | Sacás **All**: que no quede nada elegido | Si no, los avisos de "enviado", "entregado" y "leído" también disparan el flujo: tres ejecuciones vacías por cada respuesta |

<p style="color:#1a7f37">El trigger de WhatsApp. La credencial es la de la app de Meta: el App ID y el App Secret. Elijo solo los mensajes, y saco los avisos de leído: si no, cada vez que el cliente lee una respuesta, se dispara el flujo.</p>

**P1-b · Ordenar los datos** (*Edit Fields*)

```text
+ a la derecha de "WhatsApp Trigger" → escribí  edit  → Edit Fields (Set) → renombralo:  Datos del mensaje
```

- **Cuándo se coloca:** enseguida del trigger, antes que cualquier otra cosa. Todos los nodos que siguen van a usar
  estos cinco casilleros.

| Campo (*Mode: Manual Mapping* → **Add Field**, cinco veces, todos **String**) | Valor | De dónde sale |
|---|---|---|
| `telefono` | `{{ $json.messages?.[0]?.from }}` | Quién escribió. Es a quién le contestamos y la etiqueta de la memoria |
| `nombre` | `{{ $json.contacts?.[0]?.profile?.name }}` | El nombre del perfil de WhatsApp |
| `tipo` | `{{ $json.messages?.[0]?.type }}` | `text`, `image`, `audio`… Lo usa el portero del Paso 5 |
| `texto` | `{{ $json.messages?.[0]?.text?.body }}` | Lo que escribió. Es la entrada del agente |
| `phoneNumberId` | `{{ $json.metadata?.phone_number_id }}` | Desde qué número de la empresa se responde |

*Include Other Input Fields*: apagado. Lo que no está en esta lista no se usa.


Para explicar mientras lo hacés:
- **El paso 5 es el de los avisos.** Meta no solo avisa cuando llega un mensaje: también cuando uno que mandamos se
  envió, se entregó y se leyó. Sin sacar "All", cada respuesta del bot dispara tres ejecuciones más, sin mensaje.
- **Los signos de pregunta `?.`** quieren decir "si existe". Si el paquete no trae `messages` (un aviso, por ejemplo),
  el campo queda vacío en vez de dar error.
- **Por qué *Datos del mensaje*.** El paquete de Meta es largo y anidado. Sacamos una vez lo que importa, y los demás
  nodos usan nombres cortos: `telefono`, `texto`. Es el *Edit Fields* de la Semana 3.

5. **Mandás "Hola" desde tu celular** (en la pantalla compartida). Se enciende el trigger. Abrís la salida del
   *WhatsApp Trigger*:

```json
{
  "messaging_product": "whatsapp",
  "metadata": { "display_phone_number": "15551234567", "phone_number_id": "123456789012345" },
  "contacts": [ { "profile": { "name": "Arturo" }, "wa_id": "5491155550001" } ],
  "messages": [
    { "from": "5491155550001", "id": "wamid.HBgN...", "timestamp": "1794067200", "type": "text",
      "text": { "body": "Hola" } }
  ],
  "field": "messages"
}
```

(Los números son de ejemplo: en tu pantalla van a estar los tuyos.) Y la de *Datos del mensaje*:

```json
{ "telefono": "5491155550001", "nombre": "Arturo", "tipo": "text", "texto": "Hola", "phoneNumberId": "123456789012345" }
```

<p style="color:#1a7f37">Ahí está: lo que escribí en el celular, adentro de n8n. Fíjense dónde está cada cosa: el teléfono en messages, from; el texto en text, body; el nombre del perfil de WhatsApp en contacts. Es el JSON de la Semana 1, con cajas adentro de cajas.</p>

**Camino simulador:** abren su 03, la ejecución del 04 que hicieron recién (pestaña **Executions** del 03) y miran la
salida de *Como lo entrega el WhatsApp Trigger*: es el mismo paquete.

6. **Escuchar en serio: publicar.** Decís:

<p style="color:#1a7f37">Con Execute workflow, n8n escucha una sola vez, para probar. Para que escuche siempre, hay que publicar el flujo: botón Publish. Ojo: cada vez que cambien algo, publican de nuevo. Si no, sigue andando la versión anterior.</p>

**Debug Challenge (filmina 19, 3 min).** Despublicás el flujo (o cerrás el túnel) sin decir nada. Mandás "Hola" desde
el celular. No pasa nada. Pegás en el chat:

```text
DEBUG CHALLENGE · Mandé "Hola" y no pasa nada. ¿Qué reviso primero? Escribí en el chat.
```

Lo que tiene que aparecer, en este orden (de lo más probable a lo menos):
1. **¿El flujo está publicado o escuchando?** Sin eso, nadie atiende.
2. **¿La dirección es pública y con https?** Con n8n en Docker: ¿el túnel está abierto? ¿la `WEBHOOK_URL` es la del
   túnel de hoy (cambia cada vez)?
3. **¿La credencial del trigger está bien?** Con el *App Secret* mal, n8n descarta los mensajes **sin avisar**.
4. **¿Hay otro flujo con un WhatsApp Trigger de la misma app?** Solo puede haber uno.
5. **El token** no afecta la entrada: afecta la **respuesta**. Si el mensaje llega y la respuesta no sale, ahí sí es
   el token.

Volvés a publicar. Mandás "Hola". Llega.

<p style="color:#1a7f37">Era que no estaba publicado. Y fíjense que el token no estaba en la lista de lo primero: el token es para mandar, no para recibir. Separar "no llega" de "no sale" es la mitad del diagnóstico.</p>

**Plan B:** si a vos no te llega el mensaje en vivo, **pasás a Telegram** (abajo). Si lo que falla es el túnel
(Telegram tampoco llegaría), seguís con el simulador. En los dos casos lo decís: "Meta hoy no colabora, pero del Paso
2 en adelante es exactamente igual".

#### Plan B: Telegram · si WhatsApp no anda (5 min, solo si hace falta)

▶ **Cuándo:** el mensaje de WhatsApp no llega (o la respuesta no sale) y en 2 minutos no lo resolviste. No te quedes
peleando con Meta delante de la clase.

<p style="color:#1a7f37">Meta hoy no colabora. Esto en la vida real pasa, y por eso siempre conviene tener un plan B. Vamos a hacer exactamente el mismo asistente, pero por Telegram. Fíjense que lo único que cambia es por dónde entra el mensaje y por dónde sale: el cerebro, la memoria y el prompt son los mismos. Eso es lo bueno de la arquitectura de tres fases.</p>

**1. El bot (lo tenés de la preparación).** Mostrás en el celular el chat con **@BotFather** y tu bot. Decís:

<p style="color:#1a7f37">En Telegram, los bots se crean hablando con otro bot, BotFather. Le escribo barra newbot, le doy un nombre, un usuario que termine en bot, y me da un token. Ese token es la llave del bot: no se comparte. Sin cuenta de empresa, sin verificar nada.</p>

**2. La entrada.** En el mismo workflow, **borrás** el *WhatsApp Trigger* (o hacés un workflow nuevo: *Asistente de
Telegram*). **Cada campo, con su porqué, está en las tablas del Ejemplo T** ("El eco por otros canales", T-2, T-4 y
T-5): es el mismo trigger, el mismo *Datos del mensaje* y el mismo nodo de respuesta. Pegás en el chat:

```text
PLAN B · Telegram, la entrada
1. + → buscá "Telegram" → Telegram Trigger → On message
2. Credential → Create new → Telegram API → Access Token: el token de BotFather → Save
3. Trigger On: Message
4. Datos del mensaje (Edit Fields) → cambiá los campos por estos tres:
   chatId  → {{ $json.message?.chat?.id }}
   nombre  → {{ $json.message?.from?.first_name }}
   texto   → {{ $json.message?.text }}
5. Execute workflow → escribile "Hola" al bot
```

Lo que llega al trigger (los números son de ejemplo):

```json
{
  "update_id": 912345678,
  "message": {
    "message_id": 12,
    "from": { "id": 7001234567, "is_bot": false, "first_name": "Arturo", "language_code": "es" },
    "chat": { "id": 7001234567, "first_name": "Arturo", "type": "private" },
    "date": 1795000000,
    "text": "Hola"
  }
}
```

<p style="color:#1a7f37">Es más corto que el de Meta. El texto está en message, text. El nombre, en from, first name. Y lo que en WhatsApp era el teléfono, acá es el chat id: el número de esta conversación. Lo vamos a usar para dos cosas: para saber a quién contestarle y como etiqueta de la memoria.</p>

Para explicar:
- **¿Por qué no hay "tipo"?** En Telegram, una foto o un audio llegan **sin** `text`. Con saber si `texto` está vacío
  alcanza (el portero del Paso 5).
- **¿Por qué no hay "phoneNumberId"?** En WhatsApp hacía falta decir **desde qué número** se responde. En Telegram el
  que responde es el bot, que ya sabe quién es por el token.
- **El primer mensaje es `/start`.** Cuando alguien abre el bot y aprieta *Iniciar*, Telegram manda `/start`. A Ana le
  llega como un saludo y contesta: no hace falta hacer nada.

**3. Lo que cambia en los Pasos 2 a 5** (al llegar a cada uno, lo hacés así en lugar de WhatsApp):

| Paso | Con WhatsApp | Con Telegram |
|---|---|---|
| 2 · La respuesta | *WhatsApp Business Cloud* → *Send*, número de origen y teléfono | **Telegram → Send a text message**. *Chat ID:* arrastrás `chatId`. *Text:* `{{ $json.output }}`. **Add Field → Append n8n Attribution → apagado** |
| 3 · La memoria | *Key:* el `telefono` | *Key:* `{{ $('Datos del mensaje').item.json.chatId }}` |
| 4 · La voz | "atendés por WhatsApp", negrita con un asterisco | "atendés por Telegram" y **texto plano**: "no uses asteriscos, ni #, ni guiones bajos para resaltar" |
| 5 · Los bordes | *¿Es un mensaje?* + *¿Es texto?* (`tipo` = text) | Solo *¿Es texto?*: `{{ $json.texto }}` **is not empty**. Telegram no manda avisos de leído |

Para explicar:
- **Append n8n Attribution:** viene prendido, y agrega al final de cada respuesta *"This message was sent
  automatically with n8n"*. Para un bot de un negocio, se apaga.
- **Por qué texto plano:** Telegram muestra los asteriscos tal cual, salvo que se active un "modo de formato" (*Parse
  Mode*). Ese modo da error si el modelo deja un asterisco sin cerrar. En un plan B, lo más seguro es texto plano.
- **Una ventaja para la clase:** el bot no tiene lista de números permitidos. Pegás el link `t.me/…` en el chat y
  **todos le pueden escribir** desde su celular: es la prueba de los dos chats del Paso 3, con toda la clase.

**4. Publicar.** *Save* → *Publish*. Y avisás:

<p style="color:#1a7f37">Una diferencia con WhatsApp: con el flujo publicado, no aprieten Execute workflow. Para la prueba, n8n le cambia la dirección al bot, y cuando termina, el bot deja de llegar al flujo publicado. Si les pasa, despublican y publican de nuevo.</p>

**Si primero querés ver solo el canal:** el eco por Telegram (flujo 10, "El eco por otros canales", más abajo) es el
Paso 1 por Telegram con una respuesta fija, sin IA.

**Si no querés armarlo en vivo:** el flujo `09-asistente-telegram.json` es la práctica terminada por Telegram.
Solo hay que publicarlo (lo dejaste listo en la preparación).

■ **Vuelve a:** el Paso 2, con la tabla de arriba a mano.

#### Paso 2 · El cerebro (77–85)

7. **Filmina 21.** Decís:

<p style="color:#1a7f37">Paso dos: que el agente conteste algo, aunque sea feo. Sumamos el AI Agent con su modelo, le pasamos el texto del mensaje, y conectamos el nodo de WhatsApp para devolver la respuesta. Resultado: el primer ida y vuelta completo.</p>

8. Pegás en el chat:

```text
PRÁCTICA · Paso 2: el cerebro
1. + después de Datos del mensaje → AI Agent → renombralo: Ana por WhatsApp
   Source for Prompt (User Message): Define below
   Prompt (User Message): arrastrá "texto" desde la izquierda → {{ $json.texto }}
2. Abajo, en Chat Model: + → Google Gemini Chat Model → tu credencial de Gemini
3. + después del agente → WhatsApp Business Cloud → Send message
   OJO: Operation → Send (viene en "Send Template")
   Credential: WhatsApp API (token y Business Account ID)
   Sender Phone Number (or ID): elegí el número de prueba de la lista
   Recipient's Phone Number: arrastrá "telefono" de Datos del mensaje
   MessageType: Text · Text Body: {{ $json.output }}
4. Save → Publish → mandá "Hola, qué paquetes tienen?" desde tu celular
```

**Nodo por nodo, en tu pantalla:**

**P2-a · El agente** (*AI Agent*)

```text
+ a la derecha de "Datos del mensaje" → escribí  agent  → AI Agent → renombralo:  Ana por WhatsApp
```

- **Cuándo se coloca:** después de ordenar los datos. Es el cerebro del asistente, el de la Semana 6.
- **Por qué un agente y no una chain:** necesita memoria (Paso 3) y, más adelante, herramientas.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt (User Message)* | **Define below** | *Connected Chat Trigger Node* espera el chat de prueba de n8n. El mensaje viene de WhatsApp |
| *Prompt (User Message)* | Arrastrás `texto` → `{{ $json.texto }}` | Lo que escribió el cliente |
| *Require Specific Output Format* / *Enable Fallback Model* | Apagados | Respuesta en texto libre, un solo modelo |
| *Options* | Nada, por ahora | El *System Message* va en el Paso 4 |

**P2-b · El cerebro** (*Google Gemini Chat Model*)

```text
Abajo del agente, conector "Chat Model" → + → escribí  gemini  → Google Gemini Chat Model → renombralo:  Cerebro: Gemini
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La de Gemini (Semanas 2 y 6) | |
| *Model* | El **flash** de la lista | Rápido: en WhatsApp la respuesta tiene que llegar en segundos |
| *Options* → *Sampling Temperature* | **0.3** | Respuestas parecidas cada vez, con algo de naturalidad |

**P2-c · La respuesta** (*WhatsApp Business Cloud*)

```text
+ a la derecha de "Ana por WhatsApp" → escribí  whatsapp  → WhatsApp Business Cloud → en "Actions": Send message
→ renombralo:  Responder por WhatsApp
```

- **Cuándo se coloca:** al final, después del agente. Es la tercera fase: la salida.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | **Create new credential** → **WhatsApp API** → *Access Token*: el token · *Business Account ID*: el de API Setup → **Save** | Es **otra** credencial que la del trigger: esta es para **mandar** |
| *Resource* | **Message** | |
| *Operation* | **Send** (viene en *Send Template*: cambialo) | *Send Template* manda una plantilla aprobada. Para contestar con texto libre dentro de las 24 horas, *Send* |
| *Sender Phone Number (or ID)* | El número de prueba, de la lista | Desde qué número de la empresa sale |
| *Recipient's Phone Number* | Arrastrás `telefono` desde *Datos del mensaje* → `{{ $('Datos del mensaje').item.json.telefono }}` | A quién: al que escribió. Se busca "atrás" porque el agente solo devuelve `output` |
| *Message Type* | **Text** | |
| *Text Body* | `{{ $json.output }}` | La respuesta del agente |

**Si vas por Telegram:** el paso 3 es **Telegram → Send a text message** (Chat ID = `chatId`, Text =
`{{ $json.output }}`, *Append n8n Attribution* apagado). Ver la tabla del plan B.

Para explicar mientras lo hacés:
- **`{{ $json.texto }}`**: lo que escribió la persona, que sacamos en *Datos del mensaje*. Es la entrada del agente.
- **`{{ $json.output }}`**: el agente deja su respuesta en el campo `output` (Semana 6). Es lo que sale al celular.
- **El destinatario es el que escribió.** Para eso guardamos el `telefono`. Como el nodo de WhatsApp está después del
  agente, el teléfono se busca "atrás", en *Datos del mensaje*: `{{ $('Datos del mensaje').item.json.telefono }}`.
  Arrastrándolo desde la izquierda, n8n lo escribe solo.
- **Operation: Send.** El nodo arranca en *Send Template* (mandar una plantilla). Para responder con texto libre
  dentro de las 24 horas, es *Send*.

9. Mandás el mensaje. La respuesta llega al celular. Decís:

<p style="color:#1a7f37">Contestó. Fea, larga, quizás con listas llenas de asteriscos, pero contestó. El tubo está conectado de punta a punta. Esto es lo que dice el podcast del módulo: primero que entre y salga; después, se pule.</p>

Lo que se ve sin system prompt (real, con `llama3.2`, la pregunta *"Hola, qué paquetes tienen?"*):

```text
¡Hola! Me alegra que hayas iniciado una conversación conmigo.

Puedo proporcionarte información sobre una amplia variedad de temas, incluyendo:

* Historia
* Ciencia
* Tecnología
...
¿En qué área te gustaría que te ayude? ¿Tienes una pregunta específica o necesitas ayuda con algo en particular?
```

<p style="color:#1a7f37">Fíjense: no sabe que es una agencia de viajes. Nadie se lo dijo. Contesta como un asistente general, largo, con listas de Markdown. Eso lo arregla el Paso 4.</p>

**Si la respuesta no llega al celular**, mirá la ejecución (pestaña **Executions**): si el nodo de WhatsApp está en
rojo, el mensaje de error dice qué pasó. Los dos más comunes:
- el token venció o está mal copiado. Así se ve (real, con un token inventado):

```text
Authorization failed - please check your credentials
Malformed access token          (OAuthException, código 190)
```

Con un token vencido, el código es el mismo (190) y el detalle dice que la sesión expiró.

- el número no está en la lista de destinatarios del número de prueba (error **131030**, *recipient phone number not in
  allowed list*). Con celulares argentinos pasa algo seguido: Meta entrega el número con el 9 (`549…`) y en la lista
  quedó guardado sin el 9 (`54…`), o al revés. Probá poner el destinatario a mano, con y sin el 9, para ver cuál
  acepta. (Esto lo reportan muchos desarrolladores, pero no se pudo probar sin una cuenta real: confirmalo en tu
  preparación.)

#### Paso 3 · La memoria (85–93)

10. **Filmina 22.** Decís:

<p style="color:#1a7f37">Paso tres: que no se olvide con quién está hablando. Conectamos la memoria con el teléfono como Session ID, probamos el clásico de "me llamo Juan", y le escribimos desde otro número para ver que no se mezclan.</p>

11. **Primero, sin memoria.** Desde el celular: *"Me llamo Arturo"* → responde. *"¿Cómo me llamo?"* → no sabe. Decís:

<p style="color:#1a7f37">No sabe. Es el FindTheBug de la filmina 16: la API no se acuerda de nada. Cada mensaje es una ejecución nueva.</p>

12. Pegás en el chat:

```text
PRÁCTICA · Paso 3: la memoria
1. Abajo de "Ana por WhatsApp", en Memory: + → Simple Memory → renombralo: Memoria por teléfono
2. Session ID: Define below
3. Key: {{ $('Datos del mensaje').item.json.telefono }}
4. Context Window Length: 10
5. Save → Publish
6. Probá: "Me llamo ..." → "¿Cómo me llamo?"
   Simulador (ya sabe tu nombre por el perfil): "Viajo con mi hija, se llama Sofía" → "¿Cómo se llama mi hija?"
   (en el 04 cambiá el texto en "Mensaje de prueba" y ejecutalo dos veces)
```

**P3-a · La memoria** (*Simple Memory*), en tu pantalla:

```text
Abajo de "Ana por WhatsApp", conector "Memory" → + → escribí  simple  → Simple Memory → renombralo:  Memoria por teléfono
```

- **Cuándo se coloca:** colgada del agente, como el cerebro. Es un sub-nodo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Session ID* | **Define below** | *Connected Chat Trigger Node* busca el número de sesión del chat de prueba, y WhatsApp no lo manda: da *No session ID found* |
| *Key* | Arrastrás `telefono` desde *Datos del mensaje* → `{{ $('Datos del mensaje').item.json.telefono }}` | Una conversación por teléfono. Si ponés un texto fijo, todos los clientes comparten la memoria |
| *Context Window Length* | **10** | Recuerda los últimos 10 mensajes. Más, gasta más tokens; menos, se olvida rápido |

**Si vas por Telegram:** la *Key* es `{{ $('Datos del mensaje').item.json.chatId }}`. Y el segundo celular sobra:
pegás el link del bot en el chat de la clase y le escriben ellos.

13. Probás el clásico. Ahora sí sabe. Después, **desde el segundo celular** (el de Romina): *"¿Cómo me llamo?"*. No
    sabe el tuyo. Decís:

<p style="color:#1a7f37">Dos personas, dos conversaciones. La etiqueta de cada conversación es el número de teléfono. Esa es la regla de oro.</p>

Lo que pasó al probarlo (real, con el simulador y `llama3.2`; Juan y María desde dos números distintos):

```text
Juan: "Hola! Me llamo Juan. Qué paquetes tienen para el sur?"   → le lista los paquetes
Juan: "y el primero cuanto sale?"                                → "*Bariloche Clásico*: USD 950. ..."  (sabe cuál era "el primero")
Juan: "como me llamo?"                                           → "Me llamas Juan. ¿Quieres saber más sobre el paquete *Bariloche Clásico*...?"
```

Ojo: en esa prueba el system prompt ya tenía el nombre del perfil, así que "¿cómo me llamo?" no demuestra nada. Lo que
sí demuestra la memoria es "y el primero cuánto sale?": sin memoria, no hay "primero". Con un dato que no está en el
perfil, `llama3.2` falló: Juan dijo "viajo con mi hija, se llama Sofía", y a "¿cómo se llama mi hija?" le repitió el
paquete de Bariloche. En la ejecución se ve que la memoria **sí** le pasó el mensaje anterior: el que no lo usó fue el
modelo chico. Desde el número de María, en cambio: *"Lo siento, pero no tengo información sobre tu hija"*. Los chats
no se mezclaron.

**Simulador:** su 03 ya tiene el system prompt, y ahí va el nombre del perfil: "¿cómo me llamo?" lo responde aunque
no haya memoria. Que prueben con otro dato: en el 04, *Mensaje de prueba* → texto "Viajo con mi hija, se llama Sofía"
→ ejecutar → texto "¿Cómo se llama mi hija?" → ejecutar. Después cambian el `telefono` y preguntan lo mismo.

**Ojo, para vos también:** desde el Paso 4, Ana sabe el nombre del cliente por el perfil de WhatsApp. Si repetís la
prueba de "¿cómo me llamo?" después, ya no prueba la memoria.

**Y el error a propósito** (si hay tiempo, 1 min): en *Session ID* elegís **Connected Chat Trigger Node**, publicás y
mandás un mensaje. Así se ve (real):

```text
Error in sub-node Memoria por teléfono
No session ID found
```

<p style="color:#1a7f37">Esa opción es para el chat de prueba de n8n, que manda su propio número de sesión. WhatsApp no lo manda: hay que decirle cuál usar. Lo vuelvo a poner en Define below con el teléfono.</p>

#### Paso 4 · La voz (93–98)

14. **Filmina 23.** Decís:

<p style="color:#1a7f37">Paso cuatro: que deje de responder como un robot aburrido. Escribimos el system prompt con el rol, el negocio, el tono y lo prohibido; forzamos el formato de WhatsApp; y exigimos el micro-cierre.</p>

15. Pegás en el chat el system prompt. **Dónde va:** doble clic en **Ana por WhatsApp** → abajo de todo, *Options* →
    **Add Option** → **System Message** → aparece una caja con un texto de ejemplo → lo borrás → arriba a la derecha
    de la caja, **Expression** (por las `{{ }}` de la fecha y el nombre) → pegás:

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

Para explicar mientras lo pegan:
- **Los paquetes van en el prompt** porque son seis y casi no cambian. Es la regla del material de lectura: si la
  información es corta y estable, va en el System Message. Si fueran 300 productos que cambian todos los días, haría
  falta RAG (el desafío del Ejercicio 6) o la herramienta de la planilla de la Semana 6.
- **Cada regla de las filminas tiene su línea:** rol (Ana, Rumbo Sur), concisión (2 o 3 líneas), estilo (un
  asterisco, guiones, un emoji), micro-cierre (terminá con una pregunta), y los límites con su derivación a una
  persona.
- **El nombre del cliente** viene del perfil de WhatsApp. Ana puede saludar por el nombre sin preguntarlo.

**Si vas por Telegram:** en el prompt, "atendés por Telegram", y la línea de la negrita cambia por *"Texto plano: no
uses asteriscos, ni #, ni guiones bajos para resaltar (Telegram los muestra tal cual)."* Está en el flujo 09.

16. **Save → Publish.** Mandás la misma pregunta del Paso 2. Comparás en voz alta. Decís:

<p style="color:#1a7f37">El mismo agente, otra voz. Corto, con negrita de WhatsApp, y termina con una pregunta. El prompt es el código fuente del comportamiento.</p>

Lo que se ve con el system prompt (real, con `llama3.2`, la misma pregunta):

```text
*Bariloche Clásico*: 5 días, USD 950. Aéreo, hotel 3 estrellas con desayuno y excursión al Circuito Chico. 🏠
*Bariloche Nieve*: 7 días, USD 1450. (Sin cupos hoy)
*Caminos del Vino*: 4 días, USD 780. Aéreo, hotel boutique y dos visitas a bodegas con degustación. 🍷
... (los seis, cada uno con su emoji)
¿Qué paquete te interesa?
```

Mejoró (negrita de WhatsApp, sabe qué vende, cierra con una pregunta), pero no cumple todo: son seis párrafos y seis
emojis. Es un modelo chico. Con Gemini, las reglas se respetan mucho mejor. Si les pasa con el suyo, la solución es la
misma de la Semana 1: ser más explícito ("si te piden la lista, nombrá solo los destinos, sin detalles").

#### Paso 5 · Los bordes (98–102) · versión corta

17. **Filmina 24.** Decís:

<p style="color:#1a7f37">Último paso: probar qué pasa cuando el usuario no colabora. Una foto, un audio, una pregunta fuera de tema. Y al final, documentamos y exportamos.</p>

18. **La foto, sin porteros.** Desde el celular mandás una foto. El agente recibe `texto` vacío. Mostrás el error en
    **Executions**. Decís:

<p style="color:#1a7f37">Una foto no tiene text, body. El agente recibe un mensaje vacío y no sabe qué hacer. En WhatsApp la gente manda fotos, audios, stickers, ubicaciones. Hay que preverlo.</p>

19. Pegás en el chat:

```text
PRÁCTICA · Paso 5: los bordes
1. Entre "Datos del mensaje" y el agente: + → Filter → renombralo: ¿Es un mensaje?
   Condición: {{ $json.telefono }} → is not empty
2. + → If → renombralo: ¿Es texto?
   Condición: {{ $json.tipo }} → is equal to → text
   true → Ana por WhatsApp
   false → + → WhatsApp Business Cloud (Send) → renombralo: Responder: solo texto
           Text Body: Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?
3. Save → Publish → mandá una foto, un audio, y "me recomendás un buen abogado?"
4. Sticky note (Shift + S) explicando el flujo → menú … → Download (el .json para la entrega)
```

**Nodo por nodo, en tu pantalla:**

**P5-a · El primer portero** (*Filter*)

```text
Pasá el mouse sobre la flecha entre "Datos del mensaje" y "Ana por WhatsApp" → aparece un + en el medio → clic
→ escribí  filter  → Filter → renombralo:  ¿Es un mensaje?
```

- **Cuándo se coloca:** entre los datos y el agente. Un *Filter* deja pasar o frena; no tiene rama "falso".

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | `{{ $json.telefono }}` | Si no hay teléfono, no es un mensaje (es un aviso de Meta) |
| *Conditions* · el del medio | **String** → **is not empty** | "Que tenga algo". No lleva valor a la derecha |

**P5-b · El segundo portero** (*If*)

```text
+ en el medio de la flecha entre "¿Es un mensaje?" y "Ana por WhatsApp" → if → If → renombralo:  ¿Es texto?
```

- **Cuándo se coloca:** justo antes del agente. A diferencia del Filter, **sí** queremos hacer algo con lo que no
  pasa: contestar algo fijo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | `{{ $json.tipo }}` | El tipo de mensaje |
| *Conditions* · el del medio | **String** → **is equal to** | |
| *Conditions* · derecha | `text` | En minúscula, como lo manda Meta |

La salida **true** queda conectada al agente. En la salida **false**: **+** → `whatsapp` → **Send message** →
**Responder: solo texto**, con los mismos campos que *Responder por WhatsApp* salvo uno:

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Text Body* | `Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?` | Fijo, sin IA: una foto no necesita un modelo para recibir esta respuesta |


**Si vas por Telegram:** no hay *¿Es un mensaje?*. *¿Es texto?* → `{{ $json.texto }}` → **is not empty**; el
*false* va a **Telegram → Send a text message** con la respuesta fija.

20. Probás **la foto** (respuesta fija) y listo: lo demás (abogado, reserva, enojado) queda para casa, es el Paso 5 del
    Ejercicio 3. Así se liberan 3 minutos para la Entrega Final. Si te sobra tiempo, lo probás. Lo real, con el
    simulador y `llama3.2`:

```text
[una foto]  → "Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?"   (no pasa por la IA: 0 segundos)
[un audio]  → la misma respuesta fija
"me recomendas un buen abogado?"
            → "Lo siento, María, pero eso no está relacionado con los viajes. ... ¿Quieres ver nuestros paquetes de viajes?"
"Quiero reservar Cataratas para 2 ya, te paso la tarjeta"
            → "Lo siento, María, pero no puedo confirmar reservas ni tomar pagos directamente en este chat. Para reservar
               el paquete *Cataratas Express*, necesito que me proporciones tu nombre completo, el destino ... y las
               fechas de tu viaje. ¿Podrías proporcionarme esa información?"
"hace 3 dias que nadie me contesta, es una verguenza"
            → "Lo siento mucho, María. Es posible que el vendedor esté ocupado ... ¿Quieres que te pase a otro vendedor
               del equipo? ..."
```

Lo bueno: la foto no rompió nada, desvió lo de abogado y no tomó la tarjeta. Lo flojo: al enojado le inventó una excusa
("es posible que el vendedor esté ocupado"). Es material para el Ejercicio 2: una regla de "sin excusas".

<p style="color:#1a7f37">Esto es lo que dice la recomendación de la filmina 30: probar los bordes antes de entregar. La foto no rompe nada, lo que no sabe no lo inventa, y lo que no le toca lo deriva.</p>

**Ejemplo: el flujo que anda y el flujo que se entrega**

❌ Mal: anda con "Hola" y nada más.

```text
Trigger → Agente → Respuesta, sin memoria, sin prompt, sin porteros.
→ con una foto da error; con dos clientes, mezcla; si le preguntan cualquier cosa, contesta cualquier cosa.
```

✅ Bien: el flujo 02 de la carpeta.

```text
Trigger → Datos del mensaje → ¿Es un mensaje? → ¿Es texto? → Ana (Gemini + memoria por teléfono + system prompt) → Respuesta
                                                         └→ Responder: solo texto
+ una nota adhesiva que explica cada pieza, y el .json exportado.
```

**Plan B:** el flujo **02 · Asistente de WhatsApp** es la práctica terminada. Solo hay que elegir las credenciales y
publicarlo (y despublicar el que armaste: un solo trigger por app).

#### Las trabas más comunes durante la práctica

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "Mando un mensaje y no pasa nada" | El Debug Challenge, en orden: ¿publicado o escuchando? ¿dirección https pública (túnel abierto, `WEBHOOK_URL` de hoy)? ¿*App Secret* bien en la credencial del trigger? ¿otro flujo con trigger de la misma app? |
| "*The WhatsApp App ID … already has a webhook subscription*" | Hay otro flujo (o una prueba vieja) con un WhatsApp Trigger de la misma app. Despublicalo, o borrá la suscripción en Meta: tu app → WhatsApp → Configuration. |
| "Con n8n en Docker, Meta no acepta la dirección" | `localhost` no existe para Meta. Túnel (`cloudflared tunnel --url http://localhost:5678`) y n8n reiniciado con `WEBHOOK_URL` = la dirección del túnel. Ejercicio 5. Hoy, simulador. |
| "Ayer andaba y hoy no responde" | El token temporal venció (24 horas). Generá otro en API Setup y pegalo en la credencial *WhatsApp API*. Para que no pase más: token de usuario del sistema (Ejercicio 5). |
| El nodo de WhatsApp da error de token | Token vencido o mal copiado (ver el error real en el Paso 2). |
| Error **131030** (*not in allowed list*) | El celular no está en la lista **To** del número de prueba. Con números argentinos, probá con y sin el 9. |
| "El nodo de WhatsApp me pide un template" | Quedó en *Send Template*. Cambiá *Operation* a *Send*. |
| "El flujo se ejecuta tres veces por cada mensaje" | Los avisos de enviado, entregado y leído. En el trigger: *Options* → *Receive Message Status Updates* sin nada elegido. Y el filtro *¿Es un mensaje?*. |
| "Cambié el prompt y responde igual" | No volviste a publicar. *Save* guarda el borrador; *Publish* actualiza la versión que atiende. |
| "Se acuerda de lo que dijo otro" | La *Key* de la memoria es un texto fijo. Tiene que ser el teléfono. |
| "*No session ID found*" (o parecido) en la memoria | Quedó en *Connected Chat Trigger Node*. Cambiá a *Define below* con el teléfono. |
| La respuesta llega con `**` | El modelo usó la negrita de Markdown. Reforzá en el prompt: "un asterisco de cada lado, nunca `**`". |
| "Tarda mucho en contestar" | Si usás Ollama, es esperable (Semana 7). Para WhatsApp, conviene la nube o una máquina con placa de video. |
| "Uso el simulador y el 04 da error de conexión" | El 03 no está publicado, o la URL no es la tuya. n8n Cloud: copiá la *Production URL* del webhook del 03 en el 04. |
| "El 04 dice *Error in workflow*" | El que falló es el 03. Abrí el 03 → pestaña **Executions** → la última: ahí está el error de verdad (credencial de Gemini, por ejemplo). |
| Telegram: "*Bad Request: bad webhook: An HTTPS URL must be provided*" | n8n no tiene dirección pública: es `localhost`. Igual que con WhatsApp: n8n Cloud, o el túnel con `WEBHOOK_URL`. |
| Telegram: "Anduvo una vez y después no llega nada" | Apretaron *Execute workflow* con el flujo publicado: la prueba le cambió la dirección al bot. Despublicar y publicar de nuevo. |
| Telegram: la respuesta termina con "*This message was sent automatically with n8n*" | En *Send a text message* → *Add Field* → *Append n8n Attribution* → apagado. |
| Slack: la *Request URL* no dice "Verified" | El flujo no está publicado, la dirección no es pública, o pegaste la *Test URL* en vez de la *Production URL*. |
| Slack: "Escribo en el canal y no pasa nada" | Falta el evento `message.channels` en *Event Subscriptions*, o el bot no está en el canal (`/invite @tu-bot`), o no reinstalaste la app después de agregar permisos. |
| Slack: el bot se contesta a sí mismo sin parar | Falta el filtro *¿Lo escribió una persona?* (`bot_id` y `subtype` vacíos). **Despublicá ya** y agregalo. |
| Slack: "*missing_scope*" o "*not_in_channel*" | Falta un permiso (*Bot Token Scopes*, y reinstalar) o invitar al bot al canal. |
| Telegram: "*Unauthorized*" en la credencial | El token mal copiado (tiene que incluir el número, los dos puntos y lo que sigue). Si se filtró, en BotFather `/revoke`. |
| "El 04 dice *The connection was aborted*" | El 03 tardó más de lo que el 04 espera. Pasa con Ollama en frío. El 04 de la carpeta espera 10 minutos; si lo armaste vos, *Options* → *Timeout*. |

---
### 102–115 · Sección 04 · El cierre del curso y la Entrega Final

**Filmina 25 · Separador "04: El cierre del curso"**

<p style="color:#1a7f37">Llegamos al final. Antes de hablar del proyecto, miremos para atrás un minuto: todo lo que armaron hoy usa algo de cada semana.</p>

#### Filmina 26 · De dónde venimos: módulos 1 al 4 (1 min)

<p style="color:#1a7f37">Módulo 1: aprendieron a hablarle a un modelo, tokens, alucinaciones y prompts que devuelven JSON. Módulo 2: a decidir qué vale la pena automatizar, y conocieron n8n. Módulo 3: el primer flujo con lógica, IF, Switch, Merge, Aggregate y Wait. Módulo 4: el flujo habló con el mundo, APIs, HTTP y credenciales.</p>

Para explicar (cada módulo, con lo que hoy usamos de él):
- **"Módulo 1: aprendiste a hablarle a un modelo. Tokens, alucinaciones y prompts que devuelven JSON válido."**
  - *Ejemplo:* El system prompt de Ana y el JSON que manda Meta, que hoy leímos caja por caja.
- **"Módulo 2: aprendiste a decidir qué vale la pena automatizar, y conociste n8n."**
  - *Ejemplo:* La pregunta de la pre-entrega: ¿vale la pena un bot para este negocio, o alcanzan las respuestas
    rápidas de la app?
- **"Módulo 3: armaste tu primer flujo con lógica de control: IF, Switch, Merge, Aggregate y Wait."**
  - *Ejemplo:* El *¿Es texto?* de hoy es un IF. El *Datos del mensaje* es un Edit Fields.
- **"Módulo 4: le enseñaste a ese flujo a hablar con el mundo exterior. APIs, HTTP y credenciales."**
  - *Ejemplo:* El WhatsApp Trigger es un webhook; el nodo de respuesta, un POST a la API de Meta con un token.

#### Filmina 27 · Y hasta acá: módulos 5 al 8 (2 min)

<p style="color:#1a7f37">Módulo 5: orquestaron varios servicios en un sistema y aprendieron a planificar antes de construir. Módulo 6: le dieron criterio propio, un agente con cerebro, memoria, herramientas y límites. Módulo 7: lo bajaron a su máquina con Ollama. Y Módulo 8: le dieron un canal. Hoy su agente atiende personas reales.</p>

Para explicar:
- **"Módulo 5: orquestaste varios servicios en un sistema, y aprendiste a planificar antes de construir."**
  - *Ejemplo:* El diagrama de la pre-entrega de hoy es el plan del Módulo 5.
- **"Módulo 6: le diste criterio propio: un agente con cerebro, memoria, herramientas y límites."**
  - *Ejemplo:* Ana, que hoy pasó a WhatsApp.
- **"Módulo 7: lo bajaste a tu propia máquina con Ollama, sin depender de nadie."**
  - *Ejemplo:* La decisión local o nube del punto 2 de la pre-entrega.
- **"Módulo 8: le diste un canal. Hoy tu agente atiende personas reales."**
  - *Ejemplo:* El mensaje que llegó a mi celular hace media hora.

<p style="color:#1a7f37">Empezaron escribiendo un prompt en un chat. Hoy tienen un agente que atiende clientes por WhatsApp. Eso es lo que hicieron en ocho semanas.</p>

#### Filmina 28 · El proyecto final: un asistente autónomo, desplegado (3 min)

<p style="color:#1a7f37">El proyecto final: integrar todo lo del curso en un agente autónomo, funcionando y desplegado. El canal: WhatsApp, con la Cloud API de hoy. El cerebro: el AI Agent del módulo 6, con su prompt, su memoria y sus herramientas. Y la diferencia con una pre-entrega: no alcanza con que corra en su canvas mientras miran. Tiene que estar desplegado y andando.</p>

Para explicar:
- **"Qué es: integrar todos los componentes del curso en un agente autónomo funcional y desplegado."** **Integrar**
  es que las piezas trabajen juntas en un mismo flujo, no por separado. **Desplegar** es dejarlo funcionando para que
  lo use otra gente, sin que vos estés mirando.
  - *Ejemplo:* No es "un flujo con IA, otro con Sheets y otro con WhatsApp": es uno donde el mensaje entra, el agente
    consulta la planilla y responde.
- **"El canal: WhatsApp, con la Cloud API que configuraste hoy."** El título del proyecto es el asistente de
  WhatsApp, pero el requisito 6 dice *"si usás WhatsApp Business"*: acepta otros canales y otras salidas (un mail,
  una fila en Sheets, un evento en Calendar). **Telegram vale**, contando en el README por qué se eligió (confirmalo con Romina antes de decirlo).
  - *Ejemplo:* La app de Meta que armaron en el Ejercicio 0 es la del proyecto. Si Meta los traba, el bot de Telegram
    del Ejercicio 0-B.
- **"El cerebro: el AI Agent del módulo 6, con su system prompt, su memoria y sus tools."** El programa pide que el
  agente **tome una decisión real** (elegir una acción, clasificar, derivar), no solo que escriba texto, y que expliquen
  por qué hace falta un agente y no alcanzaba un nodo de IA simple.
  - *Ejemplo:* Ana decide si consulta la planilla, si calcula, o si deriva a un vendedor.
- **"La diferencia con una pre-entrega: acá no alcanza con que corra en tu canvas mientras mirás. Tiene que estar
  desplegado y andando."** Publicado, con una dirección pública estable y un token que no vence.
  - *Ejemplo:* n8n Cloud, o n8n en Docker con un túnel de dirección fija (ngrok con su dominio gratis) o en un
    servidor. Y el token de usuario del sistema, no el de 24 horas.

#### La consigna completa, punto por punto (sin filmina, 5 min)

Las filminas presentan el proyecto, pero no dicen **qué se entrega ni cómo se corrige**. Esto es lo que más preguntan
después, y no hay otra clase: se explica hoy. Compartís [entrega-final.md](entrega-final.md) (es la consigna de
`program-summary.pdf`, páginas 45 a 48, explicada en criollo) y lo recorrés en pantalla.

<p style="color:#1a7f37">Les comparto el documento de la Entrega Final. Es la consigna oficial, explicada en simple, con un ejemplo para cada punto y un modelo de README para copiar. Lo recorremos rápido, porque no hay otra clase: lo que no pregunten hoy, lo preguntan por los canales de siempre.</p>

**1. Los siete requisitos.** Pegás en el chat:

```text
ENTREGA FINAL · Los 7 requisitos (detalle en entrega-final.md)
1. Caso de negocio con ROI: qué tarea manual automatizás, cuánto cuesta hoy, y hasta dónde conviene
2. Dos fuentes de entrada distintas (el chat + una planilla de Google, o una API por HTTP)
3. Lógica con criterio: cada nodo por una razón, explicada con notas adhesivas
4. Un AI Agent (no un nodo de IA simple): system prompt completo y una decisión real
5. Modelo local o nube, justificado (costo, privacidad, independencia)
6. Una salida a un lugar real: WhatsApp o Telegram, un mail, una fila en Sheets, un evento en Calendar
7. Al menos DOS cosas que pueden salir mal, y cómo las prevé tu flujo
```

<p style="color:#1a7f37">Siete puntos, y casi todos ya los tienen. Dos entradas: el chat y la planilla de la Semana 6. El agente: Ana, que decide si consulta la planilla o si deriva. Local o nube: la decisión de la Pre-entrega 4. La salida: la respuesta en el chat. Y los errores: el portero de las fotos de hoy es uno; el segundo puede ser una regla del prompt, "si la cotización no llega, no inventes".</p>

Para explicar (lo que más se confunde):
- **ROI** (*return on investment*, "retorno de la inversión"): cuánto ahorra comparado con lo que cuesta armarlo y
  mantenerlo. No hace falta un cálculo exacto: una estimación honesta, y **hasta dónde conviene** (con dos consultas
  por semana, no vale la pena).
  - *Ejemplo:* "40 consultas por día × 3 minutos = 2 horas por día de una persona; el bot cuesta unos USD 5 por mes".
- **"Dos fuentes de entrada"** no son dos triggers: es que el flujo **reciba o busque** datos en dos lugares. El
  mensaje del chat y la planilla de precios ya son dos.
  - *Ejemplo:* El flujo 08 (Ana con la planilla y el dólar) ya cumple con tres.
- **"Una decisión real":** que el agente **elija** algo (qué herramienta usar, a quién derivar, cómo clasificar), no
  que solo escriba. Y explicar en el README **por qué un nodo de IA simple no alcanzaba**.
  - *Ejemplo:* Una *Basic LLM Chain* contesta siempre igual; Ana decide si consulta la planilla, si calcula, o si pasa
    la conversación a un vendedor.
- **"Dos cosas que pueden salir mal":** puede ser un IF, un límite en el prompt, o una validación antes de anotar
  algo en una planilla.
  - *Ejemplo:* La foto que hoy rompía el agente, y la API del dólar que no responde.

**2. Cómo se entrega.** Decís:

<p style="color:#1a7f37">No se entrega un PDF: se entrega un repositorio. Un repositorio es una carpeta en internet, en GitHub, con cuatro cosas: el json del flujo, que se descarga desde el menú de los tres puntos; un README que explica el caso, el ROI, el modelo, por qué un agente y los dos errores; el system prompt completo; y las capturas del canvas y de una ejecución que salió bien. En el documento tienen el paso a paso para subirlo desde la página, sin instalar nada, y un README de modelo para copiar.</p>

Para explicar:
- **Repositorio (repo):** una carpeta en internet, en una página como GitHub, que se comparte con un link. Se entrega
  el link.
- **El aviso del programa sobre las claves:** n8n no exporta las credenciales, pero **sí lo que pegaste a mano en un
  campo** (una API Key escrita en un header, por ejemplo). Antes de subir el `.json`, lo abren con el Bloc de notas y
  buscan "key", "token" y "Bearer".
  - *Ejemplo:* La clave de NewsAPI de la Semana 4: guardada en la credencial *Header Auth*, no viaja; pegada a mano
    en un header del HTTP Request, sí.
- **Desplegado:** publicado, con dirección https fija (n8n Cloud, o ngrok con su dominio gratis) y credenciales que no
  vencen (en WhatsApp, el token de usuario del sistema; el de Telegram no vence).

**3. Cómo se corrige.** Mostrás la tabla de [entrega-final.md](entrega-final.md):

| Qué se mira | Peso |
|---|---|
| El flujo en n8n: anda y junta bien las piezas | 50 % |
| El agente y el modelo: system prompt ordenado, elección justificada | 25 % |
| Los errores: qué pasa con fallas, mensajes raros o una API caída | 15 % |
| El caso de negocio: el problema, el ROI, por qué vale la pena | 10 % |

<p style="color:#1a7f37">La mitad de la nota es que el flujo ande. Así que el orden es: primero que entre y salga, como hoy; después las herramientas; y al final, el README. Se aprueba con 70 sobre 100.</p>

#### Filmina 29 · Lo que ya tenés: no arrancás de cero (1 min)

<p style="color:#1a7f37">No arrancan de cero. Del módulo 2, el criterio para elegir un caso. Del 5, el método para planificar y la clínica de errores. Del 6, el diseño del agente y su prompt. Del 8, el canal funcionando y la arquitectura de tres fases. Lo que falta: elegir el caso, ensamblar las piezas y desplegar.</p>

Para explicar:
- **"Del módulo 2: el criterio para elegir un caso que valga la pena automatizar."** Repetitivo, frecuente, con
  reglas claras.
  - *Ejemplo:* Las 30 consultas diarias de "¿cuánto sale?" de una agencia, sí. Una consulta por mes, no.
- **"Del módulo 5: el método para planificar antes de construir, y la clínica de errores."** La **clínica de
  errores** fue la práctica de leer un error y encontrar la causa.
  - *Ejemplo:* El diagrama en papel antes de abrir n8n. Y el "¿qué reviso primero?" del Debug Challenge de hoy.
- **"Del módulo 6: el diseño del agente y su system prompt."**
  - *Ejemplo:* Rol, alcance, herramientas, casos dudosos, formato, límites.
- **"Del módulo 8: el canal funcionando y la arquitectura de tres fases."**
  - *Ejemplo:* Trigger, agente, respuesta.
- **"Lo que falta: elegir tu caso, ensamblar las piezas y desplegar."** **Ensamblar** es juntar piezas que ya
  existen.
  - *Ejemplo:* El asistente de hoy + la herramienta de la planilla de la Semana 6 + un aviso por mail cuando deriva.

#### Filmina 30 · Cómo encararlo: tres recomendaciones para el final (1 min)

<p style="color:#1a7f37">Tres recomendaciones. Empiecen por el caso, no por la herramienta: un negocio concreto y un problema concreto. Reusen lo que construyeron: los workflows de cada módulo son piezas, no ejercicios descartables. Y prueben los bordes antes de entregar: una imagen, un pedido imposible, dos personas escribiendo a la vez.</p>

Para explicar:
- **"Empezá por el caso, no por la herramienta."** La pregunta no es "¿qué puedo hacer con n8n?", sino "¿qué le
  molesta a este negocio?".
  - *Ejemplo:* ❌ "Quiero usar RAG y Ollama". ✅ "Un consultorio pierde 2 horas por día confirmando turnos por
    WhatsApp".
- **"Reusá lo que construiste: los workflows de cada módulo son piezas, no ejercicios descartables."** Se importan,
  se copian nodos de uno a otro (**Ctrl + C** en un flujo, **Ctrl + V** en otro).
  - *Ejemplo:* La herramienta `consultar_paquetes` del flujo de la Semana 6, pegada en el asistente de hoy.
- **"Probá los bordes antes de entregar: qué pasa con una imagen, con un pedido imposible, con dos personas
  escribiendo a la vez."** El Paso 5 de hoy, pero con tu caso.
  - *Ejemplo:* Mandarle una foto, pedirle un descuento que no existe, y escribirle desde dos celulares a la vez.

**La tarea** (sin filmina). Pegás en el chat:

```text
TAREA · Semana 8
1. Pre-Entrega 4: el PDF del Ejercicio 4 (caso, local o nube, diagrama, system prompt, reflexión y capturas).
   Si no tenés WhatsApp real, las capturas pueden ser del simulador (flujos 03 y 04).
2. El cuestionario del módulo en la plataforma (6 preguntas).
3. Si llegaste con el simulador: Ejercicio 5, pasar al WhatsApp de verdad (lo vas a necesitar en el final).
4. Desafío: Ejercicio 6, RAG con las preguntas frecuentes.
5. Entrega Final: leé entrega-final.md y elegí tu caso esta semana. Arrancá por el caso, no por la herramienta.
   Canal: WhatsApp o, si Meta te traba, Telegram (Ejercicio 0-B). Se entrega el link a tu repo de GitHub.
```

---

### 115–120 · Preguntas y despedida

**Filmina 31 · ¿Preguntas? Última sesión: aprovechala** (4 min)

<p style="color:#1a7f37">Es la última sesión en vivo: aprovéchenla. ¿Alguien trabado con el despliegue o con el token de Meta? ¿Dudas sobre los costos de la API? ¿Alguna decisión del proyecto final que quieran validar en voz alta antes de arrancar?</p>

Para explicar (respuestas listas para las tres preguntas de la filmina):
- **El token de Meta:** el temporal dura 24 horas. Para el proyecto final, el de **usuario del sistema** (Ejercicio
  5): Configuración del negocio → Usuarios del sistema → Agregar → asignarle la app y la cuenta de WhatsApp → Generar
  token con los permisos `whatsapp_business_messaging` y `whatsapp_business_management`.
- **Los costos:** responder dentro de las 24 horas de que el cliente escribió no se cobra. Lo que se paga son las
  plantillas (marketing, utilidad fuera de la ventana, autenticación), por mensaje y según el país. Un asistente que
  solo responde, casi no paga a Meta: lo que más cuesta es el modelo de IA. Antes de presupuestar, la página de precios
  de Meta.
- **"¿Puedo hacerlo con Telegram?"** Sí: el requisito 6 acepta otros canales. Es el mismo asistente (flujo 09);
  conviene contar en el README por qué lo eligieron.
- **El despliegue:** n8n Cloud es lo más simple. Con Docker en tu computadora, el túnel tiene que tener una dirección
  fija y la computadora tiene que estar prendida mientras el bot atiende.

**Filmina 32 · Empezaste con un prompt** (1 min)

<p style="color:#1a7f37">Empezaron con un prompt. Terminan con un agente que atiende personas. Gracias por el recorrido.</p>

**Filmina 33 · Gracias** — cierre.

<p style="color:#1a7f37">Gracias por estudiar con nosotros. Mucha suerte con la entrega final: cualquier duda, por los canales de siempre.</p>

---

### Extra · El eco por otros canales: Telegram y Slack (los ejemplos más sencillos)

Son la versión Telegram y la versión Slack del **flujo 01** (el eco por WhatsApp): **lo que entra, vuelve**, sin IA.
Sirven para una sola cosa: ver que el canal anda antes de ponerle el agente. Si WhatsApp falla en la clase, el de
Telegram se puede mostrar en vivo (5 min); el de Slack, si sobra tiempo o para casa.

| Ejemplo | Flujo | Lo que hace | Min |
|---|---|---|---|
| T · El eco por Telegram | `10-eco-telegram.json` | Le escribís al bot "Hola" y te contesta *Hola Arturo, recibí tu mensaje: "Hola"* | 5 |
| S · El eco por Slack | `11-eco-slack.json` | Escribís en un canal de Slack y el bot contesta ahí mismo, mencionándote | 15 |

**¿Andan en local?** ❌ No solos. Igual que WhatsApp, Telegram y Slack **mandan** los mensajes a tu n8n, y para eso
necesitan una dirección **https pública**: n8n Cloud, o n8n en Docker con el túnel y la `WEBHOOK_URL` (Ejercicio 5).
Es la regla de las dos direcciones: n8n puede **salir** a cualquier lado desde `localhost`, pero nadie puede **entrar**.

> **Para vos:** los dos flujos están armados con los parámetros de los nodos de n8n, pero **no se ejecutaron**.
> Probalos con tu bot y tu app de Slack antes de mostrarlos.

#### Ejemplo T · El eco por Telegram (flujo 10) (5 min)

> **En pocas palabras:** un bot de Telegram que repite lo que le escribís. Tres nodos: escuchar, sacar los datos y
> contestar. Es el Paso 1 de la práctica, por Telegram.

▶ **Dónde arranca:** con el bot ya creado (Ejercicio 0-B) y n8n con dirección pública. Workflow vacío.
■ **Dónde termina:** le escribís "Hola" al bot desde el celular y te contesta con tu nombre.

<p style="color:#1a7f37">El ejemplo más chico posible con Telegram: lo que le escribo al bot, vuelve. Sin inteligencia artificial. Si esto anda, el canal anda, y después le ponemos el cerebro.</p>

**T-1 · El bot.** Si no lo tenés: en Telegram, buscás **@BotFather** (el de la tilde azul) → *Iniciar* → `/newbot` →
nombre (*Ana de Rumbo Sur*) → usuario terminado en `bot` (*rumbosur_prueba_bot*) → te da el **token**.

<p style="color:#1a7f37">BotFather es el bot oficial para crear bots. Le pido uno nuevo, le pongo nombre y usuario, y me da un token. El token es la llave del bot: quien lo tiene, lo maneja. No se pega en el chat de la clase.</p>

**T-2 · La entrada.** Workflow nuevo → nombre: *Eco por Telegram*. **Add first step** → buscás `telegram` → en la
lista aparecen las acciones y, arriba o al final, **Triggers** → **On message**.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential to connect with* | **Create new credential** → *Access Token*: el token de BotFather → **Save** | n8n se presenta ante Telegram como tu bot. Si dice *Connection tested successfully*, el token está bien |
| *Trigger On* | **Message** (viene así) | Solo los mensajes nuevos. Hay otras opciones (mensajes editados, botones), que hoy no usamos |
| *Additional Fields* | Nada | Sirve, por ejemplo, para bajar las fotos que llegan. El eco solo usa texto |

<p style="color:#1a7f37">Un trigger, como siempre: lo que despierta al flujo. Este escucha a mi bot. Arriba dice que es un trigger, con el rayito: es el primer nodo.</p>

**T-3 · Probar la entrada.** **Execute workflow** → queda *Waiting for trigger event* → desde el celular, le escribís
**Hola** al bot → el nodo se pone verde. Abrís la salida: el paquete de Telegram (`message.text`, `message.from.first_name`,
`message.chat.id`), el que está en el plan B.

<p style="color:#1a7f37">Llegó. El texto está en message, text. Mi nombre, en from, first name. Y el chat id es el número de esta conversación: ahí le vamos a contestar.</p>

**T-4 · Datos del mensaje.** **+** a la derecha del trigger → buscás `edit` → **Edit Fields (Set)** → lo renombrás
**Datos del mensaje** (doble clic en el título). *Add Field*, tres veces; en cada uno, a la izquierda el nombre y a la
derecha arrastrás el dato desde el panel de la izquierda (o lo pegás):

```text
chatId  → {{ $json.message?.chat?.id }}
nombre  → {{ $json.message?.from?.first_name }}
texto   → {{ $json.message?.text }}
```

- **Por qué este nodo:** el paquete viene con cajas adentro de cajas. Sacamos una vez lo que importa y el nodo
  siguiente usa nombres cortos.
- **El `?.`** quiere decir "si existe": si llega una foto, `text` no existe y el campo queda vacío en vez de dar
  error.
- **Execute step:** a la derecha, en *OUTPUT*, tienen que aparecer los tres campos con tus datos.

**T-5 · La respuesta.** **+** a la derecha de *Datos del mensaje* → buscás `telegram` → en **Actions**, **Send a text
message** → lo renombrás **Responder por Telegram**.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential to connect with* | La misma de T-2 | El que contesta es el mismo bot |
| *Resource* / *Operation* | **Message** / **Send Message** (vienen así al elegir *Send a text message*) | Mandar un mensaje de texto |
| *Chat ID* | Arrastrás `chatId` desde la izquierda → `{{ $json.chatId }}` | A quién: a la misma conversación que escribió |
| *Text* | `Hola {{ $json.nombre }}, recibí tu mensaje: "{{ $json.texto }}"` | El eco: lo mismo que llegó, con el nombre |
| *Additional Fields* | **Add Field** → **Append n8n Attribution** → **apagado** | Si no, cada respuesta termina con *"This message was sent automatically with n8n"* |

<p style="color:#1a7f37">Para contestar hacen falta dos cosas: a quién y qué. A quién, el chat id que guardamos. Qué, el texto con el nombre. Y apago la propaganda de n8n, que viene prendida.</p>

**T-6 · Probar y publicar.** **Execute workflow** → le escribís *Hola* al bot → te llega *Hola Arturo, recibí tu
mensaje: "Hola"*. Después **Save** → **Publish**, y le escribís de nuevo: contesta solo, sin que apretes nada.

- **Ojo con el orden:** con el flujo publicado, no aprietes *Execute workflow*. La prueba le cambia la dirección al
  bot y, al terminar, el publicado deja de recibir. Si pasó: despublicar y publicar.
- **Mandale una foto:** contesta *recibí tu mensaje: ""*. No se rompe, pero no sirve: por eso el asistente tiene el
  portero *¿Es texto?*.

■ **Termina el Ejemplo T.** Si es el plan B en clase, seguís con el Paso 2 por Telegram (la tabla del plan B).

#### Ejemplo S · El eco por Slack (flujo 11) (15 min)

> **En pocas palabras:** lo mismo, en Slack: escribís en un canal y el bot te contesta ahí, mencionándote. Tiene un
> nodo más que Telegram: un filtro para que el bot **no se conteste a sí mismo** para siempre.

**Qué es Slack, para el que no lo usa:** un chat de trabajo. Cada empresa tiene su **espacio de trabajo**
(*workspace*), con **canales** por tema (`#ventas`, `#soporte`). Un bot de Slack es útil para avisos internos: "llegó
una consulta nueva", "el cliente pidió hablar con una persona".

▶ **Dónde arranca:** con una cuenta de Slack y un espacio de trabajo propio (gratis: slack.com → *Crear un espacio de
trabajo*), n8n con dirección pública. Workflow vacío.
■ **Dónde termina:** escribís "Hola" en un canal y el bot contesta en el mismo canal, con tu nombre.

<p style="color:#1a7f37">Slack es el chat de muchas empresas. Un bot ahí sirve para lo interno: que el equipo se entere de algo sin mirar una planilla. Armarlo lleva más pasos que Telegram, porque Slack pide que digamos qué puede hacer el bot. Vamos por partes.</p>

**S-1 · La app de Slack (en api.slack.com).** En Slack, los bots se llaman **apps**.

```text
1. api.slack.com/apps → Create New App → From scratch
   App Name: Eco de Rumbo Sur · Pick a workspace: tu espacio de trabajo → Create App
2. Menú izquierdo: OAuth & Permissions → bajá a "Scopes" → Bot Token Scopes → Add an OAuth Scope:
   chat:write          (escribir mensajes)
   channels:history    (leer los mensajes de los canales públicos donde está el bot)
   channels:read       (ver la lista de canales, para elegirlos en n8n)
3. Arriba en esa misma pantalla: Install to <tu espacio> → Permitir
   → aparece el "Bot User OAuth Token", empieza con xoxb- → copialo
4. Menú izquierdo: Basic Information → App Credentials → Signing Secret → Show → copialo
```

<p style="color:#1a7f37">Los scopes son los permisos del bot: escribir, leer los mensajes de los canales y ver qué canales hay. Nada más. Es la misma idea que los permisos de Google en la Semana 6: se pide solo lo que hace falta. Al instalarla, Slack me da el token del bot, el que empieza con xoxb.</p>

**S-2 · La credencial y el trigger (en n8n).** Workflow nuevo → *Eco por Slack* → **Add first step** → `slack` →
**Triggers** → **On new message posted to channel**.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential to connect with* | **Create new credential** → *Access Token*: el `xoxb-…` · *Signature Secret*: el Signing Secret → **Save** | El token deja que n8n conteste como el bot. El *Signing Secret* le permite a n8n comprobar que el mensaje vino de Slack de verdad |
| *Trigger On* | **New Message Posted to Channel** | Un mensaje nuevo en un canal |
| *Watch Whole Workspace* | **Prendido** | Escucha todos los canales donde esté el bot, sin elegir uno. Apagado, elegís un canal de la lista |
| *Options* | Nada | |

Arriba del panel, en **Webhook URLs**, elegís **Production URL** y la copiás (empieza con tu dirección pública).
**Save** → **Publish**.

<p style="color:#1a7f37">Acá hay una diferencia con Telegram y WhatsApp: n8n no le avisa solo a Slack dónde mandar los mensajes. Hay que copiar esta dirección y pegarla en la app de Slack. Y publico primero, porque Slack la prueba apenas la pego: tiene que haber alguien escuchando.</p>

**S-3 · Decirle a Slack adónde mandar los mensajes (en api.slack.com).**

```text
1. Tu app → menú izquierdo: Event Subscriptions → Enable Events: On
2. Request URL: pegás la Production URL de n8n → tiene que aparecer "Verified" ✔
3. Subscribe to bot events → Add Bot User Event → message.channels → Save Changes
4. Si aparece un cartel amarillo "reinstall your app" → clic → Permitir
5. En Slack, en el canal donde vas a probar (#general sirve): escribí  /invite @Eco de Rumbo Sur
```

- **"Verified"** quiere decir que Slack mandó una prueba (un *challenge*) y n8n le contestó. Si no aparece: el flujo
  no está publicado, la dirección no es pública, o copiaste la *Test URL*.
- **`message.channels`** = "avisame de los mensajes en canales públicos". Sin este evento, Slack no manda nada.
- **El `/invite`:** el bot solo ve los canales donde está, como una persona.

**S-4 · El filtro que evita el eco infinito.** **+** a la derecha del trigger → `filter` → **Filter** → lo
renombrás **¿Lo escribió una persona?**. Dos condiciones (**Add condition**), con *AND*:

```text
{{ $json.bot_id }}   → String → is empty
{{ $json.subtype }}  → String → is empty
```

<p style="color:#1a7f37">Este nodo es el más importante del ejemplo. El bot contesta en el canal. Su respuesta es un mensaje nuevo en el canal. Slack se lo manda a n8n. n8n contesta otra vez. Y así para siempre. Los mensajes de un bot traen un bot id; los de una persona, no. Y subtype aparece cuando un mensaje se edita o se borra. Dejo pasar solo los que no tienen ninguno de los dos: los que escribió una persona.</p>

- Es lo mismo que **Receive Message Status Updates** en WhatsApp: no todo lo que llega es un mensaje para contestar.

**S-5 · Datos del mensaje.** **+** → **Edit Fields (Set)** → **Datos del mensaje**, tres campos:

```text
canal    → {{ $json.channel }}
usuario  → {{ $json.user }}
texto    → {{ $json.text }}
```

- En Slack no llega el nombre: llega el **ID** del usuario (algo como `U07ABC123`). Para nombrarlo, Slack tiene un
  truco: escribir `<@U07ABC123>` en el mensaje lo muestra como una mención (*@Arturo*).

**S-6 · La respuesta.** **+** → `slack` → **Actions** → **Send a message** → **Responder en Slack**.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La misma | |
| *Send Message To* | **Channel** | Contesta en el canal, no por mensaje privado |
| *Channel* | **By ID** → arrastrás `canal` → `{{ $json.canal }}` | El mismo canal donde escribieron. *From list* elegiría siempre uno fijo |
| *Message Type* | **Simple Text Message** | Texto común |
| *Message Text* | `Hola <@{{ $json.usuario }}>, recibí tu mensaje: "{{ $json.texto }}"` | El eco, con la mención |
| *Options* | **Add option** → **Include Link to Workflow** → **apagado** | Si no, cada respuesta lleva *"Automated with this n8n workflow"* |

**S-7 · Probar.** **Save** → **Publish**. En el canal, escribís **Hola**. El bot contesta *Hola @Arturo, recibí tu
mensaje: "Hola"*, **una sola vez**. En **Executions** vas a ver **dos** ejecuciones: la de tu mensaje (verde, de punta
a punta) y la de la respuesta del bot, que **frenó en el filtro**. Esa segunda es la prueba de que el filtro anda.

<p style="color:#1a7f37">Dos ejecuciones: la mía, que llegó hasta el final, y la del bot, que se frenó en el filtro. Sin ese filtro, la segunda habría contestado, y habría una tercera, y una cuarta.</p>

■ **Termina el Ejemplo S.** Para el proyecto final, Slack sirve más como **salida** que como canal del cliente: el
asistente atiende por WhatsApp o Telegram y le avisa al equipo por Slack ("Juan quiere reservar Bariloche para 3").
Es el Ejemplo B (pasar a una persona) con Slack en lugar de mail.

---

### Extra, si sobra tiempo o para casa · Tres ejemplos más para el asistente de WhatsApp

**Si sobra tiempo** (es la última clase y el cierre no se recorta: casi seguro que no), quedan **para casa y para la
Entrega Final**. Los tres parten del **asistente de la clase** (flujo `03`, el simulado) y le suman **una cosa** que
un asistente de verdad necesita. Los flujos están en la carpeta [n8n/](n8n/) (`06`, `07` y `08`).

| Ejemplo | Flujo | Lo que le suma al asistente | Min |
|---|---|---|---|
| A · Fuera de horario | `06-fuera-de-horario.json` | Un IF con la hora: fuera de horario, respuesta fija y se anota para mañana | 8 |
| B · Pasar a una persona | `07-pasar-a-una-persona.json` | Una herramienta que le avisa por mail a un vendedor (*human in the loop*) | 10 |
| C · Ana con las herramientas de la Semana 6 | `08-whatsapp-con-herramientas.json` | Los precios salen de la planilla y del dólar, no del prompt: la forma del proyecto final | 10 |

**¿Andan en local?** ✅ Con el **simulador**, sí, igual que el flujo 03: se publica el flujo y se le mandan mensajes
con el "celular de mentira" (flujo 04), cambiando el final de su URL por el *Path* de cada ejemplo
(`whatsapp-horario`, `whatsapp-humano`, `whatsapp-completo`). Con **WhatsApp real**, hace falta lo mismo que en la
clase: la dirección pública (n8n Cloud o el túnel), y cambiar los dos primeros nodos por el **WhatsApp Trigger** y la
respuesta por **WhatsApp · Send**, como en el flujo 02.

> **Para vos:** los tres flujos son copias del `03` (que sí se probó) con nodos agregados, pero **no se ejecutaron**:
> ni contra Gemini, ni contra Google. Probalos antes de recomendarlos. Ojo con la regla de Meta: **una sola app
> admite un solo WhatsApp Trigger**; para pasarlos a WhatsApp real, de a uno.

#### Ejemplo A · Fuera de horario (flujo 06) (8 min)

```text
… → ¿Es un mensaje? → ¿Estamos atendiendo? ─ true  → ¿Es texto? → Ana por WhatsApp → Respuesta   (como siempre)
                       (IF: día y hora)     └ false → Anotar para mañana → Respuesta: fuera de horario
                                                      (Sheets · Append)
```

Lo que tiene que pasar: un mensaje un sábado, o a las 23, recibe *"¡Hola Juan! Ahora estamos fuera de horario
(atendemos de lunes a viernes, de 9 a 18). Ya anotamos tu mensaje: mañana a primera hora te escribe un vendedor."*, y
queda una fila en la planilla "Pendientes".

<p style="color:#1a7f37">Ana puede contestar a cualquier hora, pero a veces el negocio no quiere: si el cliente pide algo que necesita un vendedor, a las 11 de la noche no hay nadie. Este ejemplo le pone horario: fuera de horario, una respuesta fija, y el mensaje queda anotado para mañana.</p>

**A-1 · Partir del asistente de la clase**

```text
Abrí el flujo de la clase (el 03, el simulado) → arriba, menú … → Duplicate → nombre:  Asistente con horario
En la copia, doble clic en "Simulador: entra el mensaje" (el Webhook)
```

| Campo (*Simulador: entra el mensaje*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-horario` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real:** duplicás el flujo de WhatsApp en lugar del 03, y no hay *Path* que cambiar. Ojo: un solo
  WhatsApp Trigger publicado por app de Meta (despublicá el otro).

<p style="color:#1a7f37">No arrancamos de cero: duplicamos el de la clase. Le cambio el Path, para que no choque con el original.</p>

**A-2 · La planilla de pendientes** (en Google, no en n8n)

```text
sheets.new → arriba a la izquierda, nombre:  Pendientes
Fila 1:   A1 fecha   B1 nombre   C1 telefono   D1 mensaje
```

- Los títulos de la fila 1 son los casilleros que va a llenar n8n: en minúscula y sin tildes, igual que en el nodo.

**A-3 · ¿Estamos atendiendo?** (*If* con tres condiciones)

```text
Pasá el mouse sobre la flecha entre "¿Es un mensaje?" y "¿Es texto?" → + en el medio → if → If
→ renombralo:  ¿Estamos atendiendo?
```

- **Cuándo se coloca:** después de saber que es un mensaje y **antes** de todo lo demás. Fuera de horario no hace
  falta ver si es texto ni llamar a la IA.

| Campo | Qué ponés | Por qué |
|---|---|---|
| Condición 1 | `{{ $now.weekday }}` · **Number** → **is less than or equal to** · `5` | `weekday` va de 1 (lunes) a 7 (domingo): hasta 5 es de lunes a viernes |
| **Add condition** → Condición 2 | `{{ $now.hour }}` · **Number** → **is greater than or equal to** · `9` | Desde las 9 |
| **Add condition** → Condición 3 | `{{ $now.hour }}` · **Number** → **is less than** · `18` | Hasta las 17:59 |
| Entre las condiciones | **AND** (viene así) | Se tienen que cumplir las tres. Con *OR*, alcanzaría una |

Las salidas: **true** ya va a *¿Es texto?* (quedó conectada al insertarlo en la flecha). **false**, por ahora libre.

<p style="color:#1a7f37">El IF con tres preguntas a la vez: ¿es día de semana? ¿son las 9 o más? ¿son menos de las 18? Con AND, tienen que cumplirse las tres. Number, porque son números: compararlos como texto daría resultados raros.</p>

- **`$now` usa la zona horaria del flujo.** Menú **…** del flujo → **Settings** → *Timezone*:
  **America/Argentina/Buenos_Aires** → **Save**. Si queda en otra, "las 9" son las 9 de otro país.

**A-4 · Fuera de horario: anotar** (*Google Sheets*)

```text
+ en la salida "false" de "¿Estamos atendiendo?" → sheets → Google Sheets → Actions: Append row in sheet
→ renombralo:  Anotar para mañana
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La de Google Sheets | |
| *Resource* · *Operation* | **Sheet Within Document** · **Append Row** | Una fila nueva abajo de todo |
| *Document* · *Sheet* | **From list** → **Pendientes** · **From list** → **Hoja 1** | |
| *Mapping Column Mode* | **Map Each Column Manually** | Los datos no tienen los nombres de las columnas: los ponemos a mano, columna por columna |
| *fecha* | `{{ $now.format('dd/MM/yyyy HH:mm') }}` | Cuándo escribió |
| *nombre* | Arrastrás `nombre` desde *Datos del mensaje* | |
| *telefono* | Arrastrás `telefono` desde *Datos del mensaje* | Para que el vendedor lo llame |
| *mensaje* | Arrastrás `texto` desde *Datos del mensaje* | Qué pidió |

- **Por qué "a mano" y no *Map Automatically*:** lo que llega a este nodo es lo que salió del IF, con los nombres de
  *Datos del mensaje* (`texto`, no `mensaje`), y no queremos guardar `tipo` ni `phoneNumberId`.

**A-5 · Fuera de horario: avisar** (*Edit Fields*)

```text
+ a la derecha de "Anotar para mañana" → edit → Edit Fields (Set) → renombralo:  Respuesta: fuera de horario
```

| Campo | Tipo | Valor | Por qué |
|---|---|---|---|
| `para` | String | `{{ $('Datos del mensaje').item.json.telefono }}` | A quién (en el simulador, se ve; en WhatsApp real, este nodo es un *Send message*) |
| `texto` | String | `¡Hola {{ $('Datos del mensaje').item.json.nombre }}! Ahora estamos fuera de horario (atendemos de lunes a viernes, de 9 a 18). Ya anotamos tu mensaje: mañana a primera hora te escribe un vendedor.` | Un mensaje fijo: no hace falta IA |

**Save** → **Publish**.

<p style="color:#1a7f37">Fuera de horario, dos cosas: anotar el mensaje en la planilla, para que mañana alguien lo llame, y contestarle al cliente con un mensaje fijo. No hace falta IA: siempre es el mismo mensaje.</p>

**A-6 · Probar sin esperar a la noche**

```text
En "¿Estamos atendiendo?", cambiá el 18 por la hora de ahora (por ejemplo, 10) → Save → Publish
Flujo 04 (el celular de mentira) → nodo "Mandar al simulador" → URL terminada en  /webhook/whatsapp-horario
→ Execute workflow → la respuesta fija, y una fila en "Pendientes"
Volvé a poner el 18 → Save → Publish
```

<p style="color:#1a7f37">Para probar el "fuera de horario" sin quedarme hasta la noche, hago trampa: cambio el 18 por la hora de ahora. Y llega la respuesta fija, y la fila en la planilla.</p>

#### Ejemplo B · Pasar la conversación a una persona (flujo 07) (10 min)

```text
… → Ana por WhatsApp → Respuesta
      ├─ Cerebro: Gemini
      ├─ Memoria por teléfono
      └─ avisar_vendedor   (Gmail Tool: mail al vendedor con nombre, teléfono y un resumen)
```

Lo que tiene que pasar: *"Quiero reservar el Bariloche Clásico para el 15 de julio"* → al vendedor le llega un mail
*"WhatsApp: Juan necesita un vendedor"* con el teléfono y el resumen, y Juan recibe *"Listo, ya le pasé tu consulta
a un vendedor: te escribe por acá en menos de una hora."*

<p style="color:#1a7f37">¿Se acuerdan del human in the loop de la Semana 6? Ana resuelve lo repetitivo, pero hay cosas que tiene que hacer una persona: reservar, cobrar, calmar a alguien enojado. Este ejemplo le da a Ana una herramienta para eso: avisarle a un vendedor.</p>

**B-1 · Partir del asistente de la clase**

```text
Abrí el flujo de la clase (el 03, el simulado) → arriba, menú … → Duplicate → nombre:  Asistente con vendedor
En la copia, doble clic en "Simulador: entra el mensaje" (el Webhook)
```

| Campo (*Simulador: entra el mensaje*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-humano` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real:** duplicás el flujo de WhatsApp en lugar del 03, y no hay *Path* que cambiar. Ojo: un solo
  WhatsApp Trigger publicado por app de Meta (despublicá el otro).

**B-2 · La herramienta: un mail al vendedor** (*Gmail Tool*)

```text
Abajo de "Ana por WhatsApp", conector "Tool" → + → escribí  gmail  → Gmail Tool → renombralo:  avisar_vendedor
```

- **Cuándo se coloca:** colgada del agente, como en la Semana 6. No va en la fila: la usa Ana **solo cuando
  decide** que hace falta.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | Tu cuenta de Gmail (**Sign in with Google**) | Desde qué casilla sale el mail |
| *Tool Description* | **Set Manually** → `Le manda un mail al vendedor de turno para que tome la conversación. Usala cuando el cliente quiere reservar o pagar, está enojado o pide hablar con una persona. Una sola vez por conversación.` | Es lo que lee Ana para decidir **cuándo** usarla |
| *Resource* · *Operation* | **Message** · **Send** | Mandar un mail |
| *To* | El mail del vendedor (el tuyo, para probar) | Fijo: no lo elige el modelo |
| *Subject* | `WhatsApp: ` + arrastrás `nombre` desde *Datos del mensaje* + ` necesita un vendedor` | El asunto, con el nombre puesto por n8n, no por el modelo |
| *Email Type* | **Text** | Texto común |
| *Message* | El bloque de abajo (en **Expression**) | Los datos fijos los pone n8n; el resumen, el modelo |
| *Options* → **Add option** → *Append n8n Attribution* | **Apagado** | Si no, el mail termina con una propaganda de n8n |

```text
Cliente: {{ $('Datos del mensaje').item.json.nombre }}
Teléfono: {{ $('Datos del mensaje').item.json.telefono }}

Qué necesita: {{ $fromAI('resumen', 'Un resumen corto de lo que quiere el cliente y por qué hay que pasarlo a una persona', 'string') }}
```

<p style="color:#1a7f37">La herramienta es un Gmail. El nombre y el teléfono los pongo yo, arrastrados: no quiero que el modelo los escriba, porque se puede equivocar. Lo único que completa el modelo es el resumen, con fromAI, como en la Semana 6. Y en la descripción, cuándo usarla.</p>

- **Lo que se puede arrastrar, se arrastra; el modelo completa solo lo que no se sabe de antes.**
- El `$fromAI` se escribe a mano, entero, como en la Semana 6 (el ✨ no le pone descripción).

**B-3 · El manual: cuándo pasar a una persona** (el *System Message*)

```text
Doble clic en "Ana por WhatsApp" → Options → System Message → al final del texto, agregá:
   PASAR A UNA PERSONA: si el cliente quiere reservar o pagar, está enojado, o pide hablar con una persona, usá
   avisar_vendedor UNA sola vez, con un resumen de lo que quiere. Después decile: "Listo, ya le pasé tu consulta
   a un vendedor: te escribe por acá en menos de una hora." No inventes horarios ni nombres de vendedores.
→ Save → Publish
```

<p style="color:#1a7f37">Y en el manual, la regla: en qué casos pasar a una persona, una sola vez, y qué decirle al cliente. Lo de "no inventes nombres" es porque, si no, el modelo dice "te va a escribir Martín", y Martín no existe.</p>

**B-4 · Probar los cuatro casos**

```text
Celular de mentira (flujo 04) → URL terminada en  /webhook/whatsapp-humano → cambiás el texto y ejecutás cada vez:
   "¿Cuánto sale Mendoza?"                              → contesta Ana, sin avisar a nadie
   "Quiero reservar el Bariloche Clásico"               → mail al vendedor + "ya le pasé tu consulta…"
   "Hace dos días que nadie me contesta, ¡un desastre!" → mail al vendedor (cliente enojado)
   "¿Me pasás con una persona?"                         → mail al vendedor
```

En la ejecución del 03-copia, *Logs*: en los tres últimos aparece **avisar_vendedor** entre Gemini y la respuesta.

<p style="color:#1a7f37">Una pregunta de precio la contesta Ana sola. Reservar, un cliente enojado o pedir una persona: le llega el mail al vendedor. Así el vendedor solo atiende lo que vale la pena, y nadie queda sin respuesta.</p>

#### Ejemplo C · Ana por WhatsApp, con las herramientas de la Semana 6 (flujo 08) (10 min)

```text
… → Ana por WhatsApp → Respuesta
      ├─ Cerebro: Gemini · Memoria por teléfono
      ├─ consultar_paquetes   (la planilla "Paquetes Rumbo Sur")
      ├─ cotizacion_dolar     (dolarapi)
      └─ calculadora
```

Lo que tiene que pasar: *"¿Cuánto sale Bariloche para dos en pesos?"* → Ana usa la planilla, el dólar y la
calculadora, y contesta por WhatsApp con el precio en pesos de hoy.

<p style="color:#1a7f37">En la clase, los paquetes estaban escritos en el system prompt. Funciona, pero si cambia un precio, hay que tocar el flujo. Este ejemplo junta las dos semanas: el WhatsApp de hoy con las manos de la Semana 6. Los precios salen de la planilla, y si cambian, se cambian ahí. Esta es la forma que tiene el proyecto final.</p>

**C-1 · Partir del asistente de la clase**

```text
Abrí el flujo de la clase (el 03, el simulado) → arriba, menú … → Duplicate → nombre:  Asistente completo
En la copia, doble clic en "Simulador: entra el mensaje" (el Webhook)
```

| Campo (*Simulador: entra el mensaje*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-completo` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real:** duplicás el flujo de WhatsApp en lugar del 03, y no hay *Path* que cambiar. Ojo: un solo
  WhatsApp Trigger publicado por app de Meta (despublicá el otro).

**C-2 · Traer las tres herramientas de la Semana 6** (copiar y pegar)

```text
Abrí el flujo de Ana de la Semana 6 ("Agente en vivo") → clic en consultar_paquetes → Shift + clic en
cotizacion_dolar y en calculadora → Ctrl + C
Volvé a "Asistente completo" → clic en un lugar vacío → Ctrl + V
→ arrastrá desde el rombito de arriba de cada herramienta hasta el conector "Tool" de "Ana por WhatsApp"
```

- **Cuándo se colocan:** colgadas del agente, como la memoria y el cerebro. Son sus "manos".
- **Copiar nodos entre flujos** copia la configuración, pero revisá la credencial en cada uno.

Abrís cada una y revisás que esté así (es la configuración de la Semana 6):

| Herramienta | Campo | Qué tiene que tener | Por qué |
|---|---|---|---|
| *consultar_paquetes* (Google Sheets Tool) | *Credential* | La de Google Sheets (si dice *needs to be reconnected*: la de la Semana 6, 7 días) | |
| | *Tool Description* | `Devuelve TODOS los paquetes de la agencia: destino, nombre del paquete, días, precio en dólares por persona, cupos disponibles y qué incluye. Usala siempre que pregunten por un destino, un precio o los cupos, y buscá en la lista los del destino que pidió el cliente. Destinos: Bariloche, Mendoza, Salta, Ushuaia y Cataratas.` | Le dice a Ana cuándo usarla |
| | *Resource* · *Operation* | **Sheet Within Document** · **Get Row(s)** | Leer filas |
| | *Document* · *Sheet* | **From list** → **Paquetes Rumbo Sur** · **From list** → **Hoja 1** | |
| | *Filters* | **Ninguno** | Trae las 6 filas y Ana elige. Con un filtro `$fromAI`, en la Semana 6 devolvía vacío |
| *cotizacion_dolar* (HTTP Request Tool) | *Description* | `Devuelve la cotización del dólar en Argentina hoy, en pesos. Usá el campo 'venta' para pasar dólares a pesos.` | |
| | *Method* | **GET** | Pedir un dato |
| | *URL* (en **Expression**) | `https://dolarapi.com/v1/dolares/{{ $fromAI('tipo', 'El tipo de dólar: oficial, blue o tarjeta. Si el cliente no dice nada, oficial.', 'string') }}` | El tipo de dólar lo completa Ana |
| *calculadora* (Calculator) | — | No tiene campos | Las cuentas, sin que el modelo las haga "de memoria" |

<p style="color:#1a7f37">No hace falta armarlas de nuevo: las copio del agente de la Semana 6 y las pego acá. Después conecto cada una al enchufe de herramientas. Y reviso la credencial de la planilla, que es la que más falla.</p>

**C-3 · Cambiar el manual: de la lista a las herramientas** (el *System Message*)

```text
Doble clic en "Ana por WhatsApp" → Options → System Message → borrá la parte "QUÉ PODÉS HACER" con la lista de los
seis paquetes y poné:
   QUÉ PODÉS HACER: contar qué paquetes hay para un destino, qué incluyen, cuántos días son, cuánto cuestan en
   dólares y en pesos, y si hay cupos.
   HERRAMIENTAS:
   - consultar_paquetes: usala SIEMPRE que pregunten por un destino, un precio o los cupos. Nunca respondas
     precios de memoria.
   - cotizacion_dolar: cuando pidan el precio en pesos. Usá el campo 'venta'.
   - calculadora: para las cuentas (precio por persona × personas × dólar).
(lo demás, el FORMATO para WhatsApp y los límites, queda igual, salvo un límite: cambiá
 "No pases precios a pesos ni inventes … que no estén arriba" por
 "No inventes promociones, fechas de salida ni datos que no salgan de las herramientas")
→ Save → Publish
```

<p style="color:#1a7f37">En el manual, saco la lista de paquetes y pongo cuándo usar cada herramienta. Y borro la regla de no pasar a pesos: ahora tiene el dólar. Lo de WhatsApp, mensajes cortos, negrita con un asterisco, queda igual.</p>

**C-4 · Probar**

```text
Celular de mentira (flujo 04) → URL terminada en  /webhook/whatsapp-completo:
   "¿Cuánto sale Bariloche para dos en pesos?"   → planilla + dólar + calculadora → precio en pesos de hoy
   "¿Y el de nieve?"                              → planilla (memoria: sabe que es Bariloche) → sin cupos
Cambiá un precio en la planilla → preguntá de nuevo → Ana ya dice el precio nuevo
```

<p style="color:#1a7f37">Pregunto por Bariloche en pesos, y miren el log: planilla, dólar, calculadora. Y ahora cambio un precio en la planilla, pregunto de nuevo, y Ana ya lo sabe. Nadie tocó el flujo. Esto es un asistente que el dueño del negocio puede mantener solo, desde una planilla. Y es exactamente lo que piden para la Entrega Final.</p>

---

### Checklist de salida

- [ ] Todos saben cuál de los tres WhatsApp se conecta con n8n, y por qué la app Business no.
- [ ] Saben qué es cada pieza de Meta: portfolio, cuenta de WhatsApp (WABA), app de desarrollador, número.
- [ ] Vieron un mensaje real llegar desde un celular al canvas (el tuyo, o el suyo).
- [ ] Los del simulador tienen los flujos 03 y 04 funcionando.
- [ ] Probaron el clásico de "me llamo…" y saben que el Session ID es el teléfono.
- [ ] Tienen un system prompt con las cuatro reglas del formato móvil.
- [ ] Saben qué revisar cuando "no pasa nada" (publicado, dirección pública, App Secret, un trigger por app) y cuando
  "no sale" (token, destinatario).
- [ ] Saben qué entregan en la Pre-entrega 4.
- [ ] Saben qué pide la Entrega Final (los 7 requisitos), que se entrega en un repo de GitHub y cómo se corrige.
- [ ] Tienen [entrega-final.md](entrega-final.md) y saben que Telegram es una opción si Meta los traba.

---

### Glosario de la clase

| Término | En criollo | Ejemplo |
|---|---|---|
| **WhatsApp Business (app)** | La app gratis para negocios chicos. Se usa a mano. No se conecta a n8n. | La verdulería con catálogo y mensaje de ausencia. |
| **WhatsApp Business Platform** | La solución de Meta para que un programa mande y reciba mensajes. Antes, "WhatsApp Business API". | El bot del banco. |
| **Cloud API** | La API de la Business Platform, en los servidores de Meta. | La que usan los nodos de WhatsApp de n8n. |
| **Meta** | La empresa dueña de WhatsApp, Facebook e Instagram. | — |
| **Portfolio comercial** (*Business Manager*) | La cuenta que agrupa todo lo que una empresa tiene en Meta. | El de "Rumbo Sur". |
| **WABA** (*WhatsApp Business Account*) | La cuenta de WhatsApp de la empresa, con uno o más números. | Su ID va en la credencial *WhatsApp API*. |
| **Meta for Developers** | El sitio de Meta para programadores, donde se crean las apps y se sacan las claves. | developers.facebook.com |
| **App de Meta** | Un permiso registrado para que un programa use las APIs de Meta. No es una app de celular. | "Asistente Rumbo Sur". |
| **Número de prueba** | Un número que Meta regala para practicar. Le escribe a hasta 5 celulares registrados. | El *From* de API Setup. |
| **Token** | La clave larga para usar la API. El temporal dura 24 horas. | La de la credencial *WhatsApp API*. |
| **App ID / App Secret** | El número y la clave secreta de la app de Meta. | La credencial del WhatsApp Trigger. |
| **Usuario del sistema** | Un "usuario robot" de la empresa, que da un token que no vence. | Para el proyecto final. |
| **Webhook** | La dirección donde n8n espera que le avisen algo. | La del WhatsApp Trigger. |
| **Verify Token** / **hub.challenge** | La contraseña y el desafío con los que Meta comprueba que el webhook es tuyo. | n8n lo resuelve solo. |
| **https** | La versión segura (cifrada) de una dirección web. Meta solo acepta webhooks con https. | `https://…trycloudflare.com` |
| **Túnel** | Un programa que le da una dirección pública a tu n8n local. | `cloudflared`, `ngrok`. |
| **Publicar** (*Publish*) | Dejar un flujo atendiendo siempre, no solo cuando apretás Execute. | Botón *Publish*. |
| **Plantilla** (*template*) | Un mensaje aprobado por Meta. Es la única forma de escribir primero. | El `hello_world`. |
| **Ventana de 24 horas** | El tiempo en que el negocio puede responder con texto libre después de que el cliente escribió. | Gratis. |
| **Evento** | Algo que pasó y Meta avisa: un mensaje, una entrega, una lectura. | `messages`, `statuses`. |
| **wa_id** / **from** | El número de teléfono de quien escribe, como lo manda Meta. | `5491155550001` |
| **text.body** | El texto del mensaje, adentro del paquete de Meta. | `"Hola"` |
| **Session ID** | La etiqueta de cada conversación en la memoria. En WhatsApp, el teléfono. | `{{ $('Datos del mensaje').item.json.telefono }}` |
| **Stateless** | Sin estado: no se acuerda de nada entre un pedido y otro. | La API de WhatsApp. |
| **Micro-cierre** / **CTA** | Terminar cada mensaje con una pregunta o el próximo paso. | "¿Para qué fechas lo pensás?" |
| **Derivar** | Pasarle la conversación a una persona. | "Te paso con un vendedor." |
| **Lead** | Un posible cliente. | El que preguntó por Salta. |
| **CRM** | El sistema donde la empresa guarda sus clientes. | Una planilla, o un programa como HubSpot. |
| **RAG** | Que el modelo busque en tus documentos antes de responder. Un examen a libro abierto. | Ejercicio 6. |
| **Embedding** | Un texto convertido en una lista de números que representa su significado. | Los que arma `embeddinggemma`. |
| **Base vectorial** | Una base de datos que encuentra los textos de significado más parecido. | *Simple Vector Store*, Supabase. |
| **Chunk** | Un pedazo de un documento. Se corta antes de guardarlo. | 600 caracteres. |
| **Desplegar** | Dejar el sistema funcionando para que lo use otra gente, sin que estés mirando. | La Entrega Final. |
| **Telegram** | Una app de mensajería parecida a WhatsApp. Sus bots se crean gratis y en minutos. | El plan B de la práctica (flujo 09). |
| **BotFather** | El bot oficial de Telegram con el que se crean los demás bots. Te da el token. | `/newbot`. |
| **Chat ID** | El número de una conversación de Telegram. Es el "teléfono" del cliente en Telegram. | La *Key* de la memoria en el flujo 09. |
| **Slack** | Un chat de trabajo: cada empresa tiene su espacio, con canales por tema. Sus bots se llaman "apps". | El eco del flujo 11. |
| **Scope** | Un permiso que pide una app (de Slack o de Google): leer, escribir, ver canales. | `chat:write`. |
| **Request URL** | La dirección de n8n que se pega en la app de Slack para que le mande los mensajes. | La *Production URL* del Slack Trigger. |
| **Repositorio (repo)** | Una carpeta en internet (en GitHub) con los archivos de un proyecto. Se comparte con un link. | Así se entrega la Entrega Final. |
| **ROI** | *Return on investment*: cuánto ahorra algo comparado con lo que cuesta. | El requisito 1 de la Entrega Final. |
