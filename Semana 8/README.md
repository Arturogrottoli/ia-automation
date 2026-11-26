# Semana 8 — Módulo 8: WhatsApp Business

Fuente: `program-summary.pdf` (Módulo 8). **Una clase de 2 horas. Es la última clase del curso:** la Semana 9 es solo
la Entrega Final, sin clase.

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_8_AI_Automation.pptx` | Las filminas del módulo (33). |
| `Semana 8.docx` | El material de lectura: RAG y Supabase (bases vectoriales, embeddings, chunks), el cuestionario de 6 preguntas, el podcast, la consigna de la Pre-entrega 4 y el guion sugerido de la clase. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Los ejercicios, **todos para casa** (en clase no hay ejercicios): rehacer los ejemplos, la Pre-entrega 4 paso a paso y, para la Entrega Final, pasar a un canal de verdad. Se comparte con los alumnos. |
| [n8n/](n8n/) | Once workflows. **Los de la clase** (se arman en vivo; el `.json` es el respaldo, con los nombres de nodo que pone n8n): **03** el asistente simulado y **04** el celular de mentira (Ejemplo 1), **05** RAG (Ejemplo 2), **06** fuera de horario (Ejemplo 3), **07** pasar a una persona (Ejemplo 4), **08** con las herramientas de la Semana 6 (Ejemplo 5). **Los del anexo**, para la Entrega Final con n8n Cloud o túnel: **01** eco y **02** asistente por WhatsApp real, **09** asistente y **10** eco por Telegram, **11** eco por Slack. |
| [entrega-final.md](entrega-final.md) | **La Entrega Final explicada para los alumnos:** los 7 requisitos en criollo, qué quiere decir "desplegado", cómo subirlo a GitHub paso a paso, un modelo de README, el checklist y la rúbrica. Se comparte al final de la clase. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, las salidas reales de los flujos, las trabas y cómo corregir la Pre-entrega 4. **No se comparte.** |

## La clase y la tarea

**En clase no hay ejercicios, y WhatsApp no se conecta en vivo.** Con n8n en la computadora, Meta no puede mandarle
mensajes (hace falta una dirección pública), y la aprobación de Meta puede tardar semanas. Por eso WhatsApp se explica
con las filminas, y lo que se arma en vivo es el **mismo asistente con un simulador**, que anda en local:

| Ejemplo | Flujo | Dónde va | Qué muestra |
|---|---|---|---|
| 1 · El asistente de WhatsApp, simulado | `03` y `04` | Filminas 19 a 24, un paso por filmina | El canal, el cerebro, la memoria, la voz y los bordes |
| 2 · RAG: Ana con las preguntas frecuentes | `05` | Después de la 24 (es el material de lectura) | Responder buscando en un documento |
| 3 · Fuera de horario | `06` | Después de la 24 | Un IF con la hora, antes de la IA |
| 4 · Pasar la conversación a una persona | `07` | Después de la 24 | Una herramienta que le manda un mail al vendedor |
| 5 · Ana con las herramientas de la Semana 6 | `08` | Después de la 24, antes de la 25 | La forma de la Entrega Final |

**Para casa** ([ejercicios-alumnos.md](ejercicios-alumnos.md)):

| Ejercicio | Duración |
|---|---|
| 1 · ¿Qué WhatsApp necesita? (la cacería de funciones) | 5 min |
| 2 · El humano detrás de la IA (reescribir una respuesta de robot) | 5 min |
| 3 · Rehacé el asistente simulado (Ejemplo 1) | 40 min |
| 4 · La Pre-entrega 4, paso a paso | 2 a 3 h |
| 5 · Para la Entrega Final: pasar a un canal de verdad (WhatsApp, Telegram) | 45 min |
| 6 · RAG: rehacé el Ejemplo 2 con tu propio documento | 40 min |
| 0 y 0-B · Tu app de Meta / tu bot de Telegram (opcionales, para el Ejercicio 5) | 30 / 5 min |

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
- **WhatsApp no se conecta en vivo: se arma con un simulador.** Con n8n en Docker, Meta (y Telegram, y Slack) no
  pueden mandarle mensajes: la dirección es `localhost`, y desde internet no existe. Hace falta n8n Cloud o un túnel,
  y además la cuenta de Meta aprobada, que puede tardar semanas. Así que la clase **explica** WhatsApp con las filminas
  (con capturas de Meta) y **arma** el asistente con el simulador (flujos 03 y 04), que manda el mismo paquete que
  Meta. Pasar a un canal de verdad queda en el **anexo** del guion y en el Ejercicio 5, para la Entrega Final.
- **Telegram y Slack, en el anexo.** Tienen el mismo problema que WhatsApp: también le **mandan** los mensajes a n8n,
  así que necesitan la dirección pública. Telegram es lo más corto (el bot se crea en 5 minutos con @BotFather, sin
  cuenta de empresa y con un token que no vence): flujos **09** y **10**. Slack (flujo **11**) pide crear una app con
  permisos y eventos. Están en el anexo, para la Entrega Final.
- **La Entrega Final no obliga a WhatsApp.** El título del programa dice "asistente de WhatsApp", pero el requisito 6
  dice *"si usás WhatsApp Business"* y acepta otras salidas (un mail, una fila en Sheets, un evento en Calendar). En
  [entrega-final.md](entrega-final.md) dice que Telegram vale, contando en el README por qué se eligió. **Confirmalo
  con Romina** antes de la clase.
- **La Pre-entrega 4 dice dos cosas distintas.** El programa (`program-summary.pdf`, la fuente oficial) pide caso de
  uso, decisión local o nube, el plan de la conexión con WhatsApp, el system prompt y la reflexión. **La versión de la
  plataforma** (`Semana 8.docx`) agrega dos puntos de **RAG**: cargar un documento en una base vectorial y conectar
  el agente para que responda solo con eso, y dice "Supabase, como viste en el módulo anterior", cuando Supabase no
  se vio. En el guion, **el RAG se explica y se arma en vivo** (Ejemplo 2, con la base en la memoria de n8n en vez de
  Supabase), así el que lee la plataforma tiene con qué hacerlo. **Conviene que decidas con Romina cuál vale** y lo
  digas en clase.
- **Para un canal de verdad, n8n Cloud es lo más fácil** (anexo y Ejercicio 5). Meta solo manda los mensajes a una dirección **https pública**. n8n Cloud
  ya la tiene. Con n8n en Docker (la mayoría, desde la Semana 2), la dirección es `localhost` y Meta no la ve: hace
  falta un **túnel** (`cloudflared` o `ngrok`) y reiniciar n8n con la variable `WEBHOOK_URL`. Está en el Ejercicio 5.
  **El túnel no se pudo probar** al armar la clase.
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
  - **el simulador en n8n local, con Gemini** (26/11/2026, la versión anterior del flujo, con un nodo *Code* que ya no
    está): la pregunta de Juan por el sur volvió en 9,6 segundos, con solo los destinos del sur, la negrita de WhatsApp,
    un emoji y una pregunta al final. **La versión de esta clase (sin el *Code*, con los nombres de n8n) no se ejecutó:
    ensayala**;
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
  - **el RAG del Ejemplo 2:** con el modelo de embeddings `nomic-embed-text`, la búsqueda **falló en castellano**
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

| Min | Tramo | Filminas | En n8n |
|---|---|---|---|
| 0–16 | Apertura y **repaso de la Semana 7** (8 min) | 1–5 | — |
| 16–36 | **01 · La plataforma de Meta** (se explica con capturas; no se conecta) | 6–10 | — |
| 36–61 | **02 · El asistente con IA** | 11–16 | — |
| 61–71 | Break | 17 | — |
| 71–111 | **03 · Ejemplo 1:** el asistente de WhatsApp, simulado, en cinco pasos | 18–24 | **Ejemplo 1** |
| 111–154 | **03 · Cuatro ejemplos más:** RAG, fuera de horario, pasar a una persona, las herramientas de la Semana 6 | — | **Ejemplos 2 a 5** |
| 154–167 | **04 · El cierre del curso** y la **Entrega Final completa** | 25–30 | — |
| 167–172 | Preguntas y despedida | 31–33 | — |

**Ojo con el tiempo: así completa, son unos 2 h 52 min, no 2 horas.** Armar cinco ejemplos en vivo lleva más que las
filminas solas. Para que entre en 120 minutos, recortá en este orden:
1. El **Ejemplo 4** (pasar a una persona) pasa a la tarea (−10 min).
2. El **Ejemplo 3** (fuera de horario) pasa a la tarea (−8 min).
3. El **Ejemplo 5** (las herramientas): se muestra el flujo 08 terminado y se prueba una pregunta (−7 min).
4. En el **Ejemplo 2** (RAG), la teoría y la consulta; la carga, ya hecha antes de la clase (−6 min).
5. Los casos de uso (**filmina 9**): se leen (−3 min).
6. En el **Paso 5** del Ejemplo 1, solo la foto (−2 min).
7. El **repaso** en 4 minutos (−4 min). Y **la filmina 13** sin la reescritura de ejemplo (−3 min).

Lo último que se recorta es la **Sección 04** (el cierre y la Entrega Final) y los **Pasos 1 a 4** del Ejemplo 1.

---

### Mapa de la clase: el PowerPoint y lo que se arma en n8n, en orden

| Min | Filminas | Tramo | En n8n |
|---|---|---|---|
| 0–16 | 1–5 | Apertura y repaso | Nada |
| 16–36 | 6–10 | 01 · La plataforma de Meta | Nada (capturas de Meta) |
| 36–61 | 11–16 | 02 · El asistente con IA | Nada |
| 61–71 | 17 | Break | — |
| 71–85 | 18–20 | Paso 1 · El canal | `Asistente simulado` (Webhook + Edit Fields), publicado; `Celular de mentira` |
| 85–93 | 21 | Paso 2 · El cerebro | AI Agent + Gemini + la respuesta |
| 93–100 | 22 | Paso 3 · La memoria | Simple Memory |
| 100–106 | 23 | Paso 4 · La voz | System Message |
| 106–111 | 24 | Paso 5 · Los bordes | Filter, If y la respuesta fija |
| 111–126 | — | Ejemplo 2 · RAG | Workflow nuevo, `RAG preguntas frecuentes` |
| 126–134 | — | Ejemplo 3 · Fuera de horario | Copia de `Asistente simulado` |
| 134–144 | — | Ejemplo 4 · Pasar a una persona | Copia de `Asistente simulado` |
| 144–154 | — | Ejemplo 5 · Con herramientas | Copia de `Asistente simulado` |
| 154–167 | 25–30 | 04 · El cierre y la Entrega Final | Nada |
| 167–172 | 31–33 | Preguntas y despedida | — |

---

### Preparación (antes de la clase)

- [ ] **Los cinco ejemplos ensayados, armándolos** (en clase no se importa nada). Lo que necesitan:
  - la credencial de **Gemini** (todos);
  - **Ollama** con `embeddinggemma` (`ollama pull embeddinggemma`, 622 MB) y la credencial **Ollama local** (Ejemplo 2);
  - la credencial de **Google Sheets** (vence a los 7 días en modo Testing: revisala el día anterior), la planilla
    `Paquetes Rumbo Sur` (Ejemplo 5) y una planilla nueva **`Pendientes`** con `fecha`, `nombre`, `telefono`,
    `mensaje` en la fila 1 (Ejemplo 3);
  - la credencial de **Gmail** (Ejemplo 4) y el workflow **`Agente en vivo`** de la Semana 6 (de ahí se copian las
    herramientas del Ejemplo 5).
  - Los `.json` de [n8n/](n8n/) son el respaldo: si en el ensayo un ejemplo no sale, importalo y comparalo.
- [ ] **Capturas de Meta** para la Sección 01 (la app, *API Setup* con el número de prueba, la pantalla de
  *Configuration* del webhook), o el sitio developers.facebook.com abierto en otra pestaña para mostrarlo.
- [ ] **Si en el ensayo cargaste la base del Ejemplo 2 y después reiniciaste n8n**, se borró: se carga en clase.
- [ ] **El día anterior**, avisales a los alumnos que traigan pensado **el negocio de su pre-entrega** y que entren
  con n8n prendido (si quieren seguir a la par; si no, miran: en clase no hay ejercicios).
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) y [entrega-final.md](entrega-final.md) listos para compartir.
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

### 16–36 · Sección 01 · La plataforma de Meta

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
    en clase no se conecta: se muestra con capturas.

**En Meta, paso a paso** (lo mostrás con capturas o en otra pestaña, 2 min; no se hace en vivo: es el Ejercicio 0, opcional, para la Entrega Final):

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

**¿Qué WhatsApp necesita?** (3 min, lo respondés vos; la "cacería de funciones" del material de lectura queda como
Ejercicio 1 de la tarea). Cinco casos, en voz alta:

```text
1. A una pastelería le preguntan 30 veces por día "¿cómo se paga?"
2. Una inmobiliaria quiere que un agente responda consultas a las 3 de la mañana
3. Un dentista quiere que a la noche le respondan "estamos cerrados, abrimos a las 9"
4. Una tienda online quiere avisar "tu pedido salió" a cada comprador
5. Un vivero quiere mostrar sus plantas con foto y precio adentro del chat
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

### 36–61 · Sección 02 · El asistente con IA

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

#### Filmina 13 · El prompt de WhatsApp: reglas para el formato móvil (6 min)

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

**El humano detrás de la IA** (3 min, lo mostrás vos; reescribirla queda como Ejercicio 2 de la tarea):

```text
Un cliente escribe por WhatsApp:
"hace 3 dias que espero que me manden el voucher del hotel y nadie me contesta"

El bot respondió:
"Estimado cliente: Le informamos que su solicitud ha sido recibida y será procesada según el orden de llegada.
Agradecemos su paciencia. Atentamente, el equipo de Rumbo Sur."
```

Cómo se reescribe, dicho por vos: pedir disculpas sin vueltas, decir qué va a pasar ("te paso con
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
  - *Ejemplo:* En el nodo *Simple Memory*: *Session ID* → *Define below* → `{{ $('Edit Fields').item.json.telefono }}`.
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
Session ID: Define below → Key: {{ $('Edit Fields').item.json.telefono }}
→ una conversación por número. Juan y María no se mezclan.
```

**En n8n, paso a paso** (1 min; se arma en el Paso 3 del Ejemplo 1):

```text
EN N8N · La memoria por teléfono
1. Abajo del AI Agent, en Memory: + → Simple Memory
2. Session ID: Define below
3. Key: arrastrá "telefono" desde Edit Fields (queda {{ $('Edit Fields').item.json.telefono }})
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
  - *Ejemplo:* El AI Agent de Ana: Gemini, la memoria por teléfono y (en la versión completa) las herramientas de la
    Semana 6.
- **"Respuesta: el nodo nativo de WhatsApp Business toma el texto final del agente y lo dispara de vuelta al
  dispositivo del usuario."** El agente deja su respuesta en el campo `output`. **Dispositivo** es el celular.
  - *Ejemplo:* Nodo *WhatsApp Business Cloud* → *Send* → destinatario: el teléfono de *Edit Fields* → texto:
    `{{ $json.output }}`.

**El flujo de la práctica** (el dibujo; se arma en el Ejemplo 1, con el Webhook del simulador en lugar del trigger):

```text
WhatsApp Trigger → Edit Fields → Filter → If ──sí──→ AI Agent → Send message
(en clase: Webhook)                         │     (Gemini + memoria por teléfono)   (en clase: Edit Fields1)
                                            └──no──→ la respuesta fija
```

<p style="color:#1a7f37">Las tres fases están, con dos porteros en el medio. El Filter descarta los avisos de entregado y leído, que también llegan. El If separa las fotos y los audios. Los vamos a necesitar en el Paso 5.</p>

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
### 61–71 · Break

**Filmina 17 · Break** (10 min)

<p style="color:#1a7f37">Diez minutos de break. A la vuelta, lo armamos en n8n: el asistente completo, con un simulador de WhatsApp.</p>

---

### 71–154 · Sección 03 · En vivo: el asistente, simulado, y cuatro ejemplos más

**Filmina 18 · Separador "03: Práctica en vivo"**

<p style="color:#1a7f37">Ahora lo armamos. Pero no con WhatsApp de verdad, y les cuento por qué. Para que Meta le mande los mensajes a n8n, n8n tiene que tener una dirección pública en internet, y el nuestro está en nuestra computadora. Y además, Meta tarda en aprobar las cuentas. Así que vamos a usar un simulador: un flujo que manda exactamente el mismo paquete que manda Meta. El asistente no se entera de la diferencia. Y cuando quieran pasarlo a WhatsApp de verdad, cambian solo la entrada y la salida: todo lo del medio queda igual.</p>

Para explicar:
- **Por qué no WhatsApp en vivo.** Meta **manda** los mensajes a n8n: tiene que poder **entrar** a tu n8n. Con n8n en
  Docker, la dirección es `localhost`, y desde internet no existe (la regla de las dos direcciones). Hace falta n8n
  Cloud o un túnel, y además la cuenta de Meta aprobada, que puede tardar semanas.
  - *Ejemplo:* Pedirle a Gemini una respuesta anda en local: n8n **sale** hacia Google. Que Meta te mande un mensaje,
    no: Meta tendría que **entrar**.
- **El simulador es honesto.** El paquete que recibe el asistente es el mismo, campo por campo, que el de Meta. Todo
  lo que arman hoy (el agente, la memoria por teléfono, el prompt, los porteros) es lo que va a ir en el WhatsApp real.
  - *Ejemplo:* Es como un simulador de vuelo: los comandos son los de verdad; lo que cambia es que no despegás.
- **Cómo se pasa a WhatsApp de verdad** está en el anexo, al final ("Con canales de verdad"), para la Entrega Final.

**Cómo leer esta sección.** La clase va y viene entre el PowerPoint y n8n. Cada cambio de pantalla está marcado:

| Marca | Qué quiere decir |
|---|---|
| ▶ **Dónde arranca** / ■ **Dónde termina** | Al principio de cada ejemplo: desde dónde venís, y adónde vas al terminar |
| 🖥️ **PowerPoint · filmina N** | Compartís el PowerPoint, en esa filmina, y decís el texto verde que sigue |
| 🛠️ **Pasás a n8n** | Cambiás a la pestaña de n8n y armás los micro-pasos que siguen |
| ↩️ **Volvés al PowerPoint · filmina N** | Terminó esa parte: volvés al PowerPoint, a esa filmina |

**El orden de la sección:**

| Min | Qué | Filminas | Dónde se arma |
|---|---|---|---|
| 71–111 | **Ejemplo 1 · El asistente de WhatsApp, simulado**, en cinco pasos | 19 a 24, una por paso | Dos workflows nuevos: `Asistente simulado` y `Celular de mentira` |
| 111–126 | **Ejemplo 2 · RAG: Ana con las preguntas frecuentes** | — (es el material de lectura) | Workflow nuevo, `RAG preguntas frecuentes` |
| 126–134 | **Ejemplo 3 · Fuera de horario** | — | Copia de `Asistente simulado` |
| 134–144 | **Ejemplo 4 · Pasar la conversación a una persona** | — | Copia de `Asistente simulado` |
| 144–154 | **Ejemplo 5 · Ana con las herramientas de la Semana 6** | — | Copia de `Asistente simulado` |
| 154 | Volvés al PowerPoint | **25** | — |

**Los alumnos miran.** No hay ejercicios en clase: armás despacio, explicando cada clic, sin esperar a que todos
lleguen. Todo queda en [ejercicios-alumnos.md](ejercicios-alumnos.md) para que lo repitan en casa.

**Los nodos no se renombran:** quedan con el nombre que les pone n8n (*Webhook*, *Edit Fields*, *AI Agent*…), así lo
que ven en tu pantalla es lo mismo que les aparece en su casa. Si agregás dos iguales, n8n numera el segundo (*Edit
Fields1*). La única excepción son las **herramientas** del agente: su nombre lo lee el modelo para decidir cuál usar.

#### Ejemplo 1 en n8n · El asistente de WhatsApp, simulado (flujos `03` y `04`), en los cinco pasos de las filminas 20 a 24 (40 min)

> **En pocas palabras.** Es el asistente de WhatsApp de la clase, completo, pero los mensajes no vienen de un
> celular: vienen de otro flujo, el "celular de mentira", que manda el mismo paquete que manda Meta.
>
> ```text
> Celular de mentira  ──manda el mensaje──►  Asistente simulado  ──responde──►  vuelve al celular de mentira
> (Manual → Edit Fields → HTTP Request)      (Webhook → Edit Fields → porteros → AI Agent → respuesta)
> ```
>
> Le "escribís" *"Hola! Me llamo Juan. Qué paquetes tienen para el sur?"* y Ana contesta corto, con la negrita de
> WhatsApp y una pregunta al final.
>
> **La idea para los alumnos:** las tres fases de la filmina 15 (entrada, procesamiento, respuesta), armadas de
> verdad. Lo único simulado es el celular.

> ▶ **Dónde arranca.** Terminó el break: estás en la **filmina 18**. Avanzás a la **19** y después a la **20** (Paso 1).
> Desde la 20 hasta la 24, cada filmina es un paso, y en cada paso se agrega una pieza en n8n.
>
> ■ **Dónde termina.** Después del Paso 5, con el asistente completo y probado. No volvés al PowerPoint: seguís en
> n8n con el Ejemplo 2.

> **¿Anda en local (Docker)?** ✅ Sí, sin nada extra. El celular de mentira y el asistente están en el mismo n8n:
> el pedido va de n8n a n8n, adentro de tu computadora (`http://localhost:5678` desde adentro del contenedor es el
> mismo n8n). Lo único que sale es el pedido a Gemini.

**Qué va a hacer este flujo (y qué no).**
- **Lo que sí hace:** recibe un mensaje con el formato de WhatsApp, saca el teléfono, el nombre y el texto, frena lo
  que no es texto, responde con Ana (Gemini, con memoria por teléfono y el prompt de WhatsApp) y devuelve la
  respuesta.
- **Lo que no hace:** no manda nada a un celular real. La respuesta vuelve al celular de mentira, y se lee en n8n.

**Cómo se mueve la clase en este ejemplo.** En cada paso, siempre el mismo orden: **1)** mostrás la filmina y decís
el texto verde; **2)** pasás a n8n y armás esa pieza; **3)** la probás con el celular de mentira; **4)** volvés al
PowerPoint, a la filmina siguiente.

| Paso | Filmina | Qué se hace en n8n | Micro-pasos | Min |
|---|---|---|---|---|
| 1 · El canal | 20 | El `Asistente simulado` (Webhook + Edit Fields), publicado, y el `Celular de mentira` | P1-1 a P1-6 | 14 |
| 2 · El cerebro | 21 | El AI Agent con Gemini y el nodo de la respuesta | P2-1 a P2-4 | 8 |
| 3 · La memoria | 22 | La Simple Memory, con el teléfono como Session ID | P3-1 a P3-3 | 7 |
| 4 · La voz | 23 | El System Message | P4-1 a P4-2 | 6 |
| 5 · Los bordes | 24 | Los porteros: Filter e If | P5-1 a P5-4 | 5 |

#### Filmina 19 · Ejemplo en vivo y Debug Challenge (1 min)

🖥️ **PowerPoint · filmina 19.**

<p style="color:#1a7f37">Lo armamos en cinco pasos, uno por filmina. Y en el medio, un flujo que no responde: les voy a mostrar cómo se encuentra el problema.</p>

- La filmina habla de mandar un "Hola" desde el celular. Lo hacemos con el celular de mentira; el Debug Challenge va
  al final del Paso 1, y lo resolvés vos en voz alta (en clase no hay consignas en el chat).

#### Paso 1 · El canal (filmina 20, 14 min)

🖥️ **PowerPoint · filmina 20.**

<p style="color:#1a7f37">Paso uno: que el mensaje llegue a n8n. La filmina habla de Meta: revisar la app, pegar la dirección de n8n, el Verify Token. Eso es lo que harían con WhatsApp de verdad, y lo tienen en el anexo. Nosotros hacemos lo mismo con el simulador: una dirección en n8n que recibe el mensaje, y un flujo que se lo manda.</p>

Para explicar (lo de la filmina, en una frase cada uno):
- **"Revisar la jerarquía en Meta for Developers: app creada, número de prueba activo, token vigente."** Con WhatsApp
  real, son las tres cosas que tienen que estar antes de empezar (filmina 8).
- **"Pegar la URL del webhook de n8n en el panel de Meta y responder el Verify Token."** El *WhatsApp Trigger* de n8n
  lo hace solo al publicarse. En el simulador, la "URL del webhook" es la del nodo **Webhook** que vamos a poner.
- **"Mandar un Hola desde el celular y confirmar que el nodo se activa."** Acá, el celular es el otro flujo.

🛠️ **Pasás a n8n.**

**P1-1 · El asistente: el workflow y la entrada** (*Webhook*)

```text
Overview → Create workflow → arriba a la izquierda, el nombre:  Asistente simulado → Enter
Add first step → escribí  webhook  → Webhook   (el del rayito: On webhook call)
```

- **Cuándo se coloca:** primero. Es el disparador: hace de "WhatsApp Trigger". Es el webhook de la Semana 4: una
  dirección que, cuando alguien le manda algo, despierta el flujo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *HTTP Method* | **POST** | Meta manda los mensajes por POST (con un paquete adentro). El celular de mentira, igual |
| *Path* | `whatsapp-simulado` | El final de la dirección. Arriba del panel, en *Webhook URLs*, se ve la dirección completa |
| *Authentication* | **None** | Es de prueba, en tu computadora |
| *Respond* | **When Last Node Finishes** | Que conteste cuando termina el flujo, con lo que salga del último nodo: así la respuesta de Ana vuelve al celular de mentira |
| *Response Data* | **First Entry JSON** (viene así) | Devuelve el resultado del último nodo |

<p style="color:#1a7f37">El Webhook es el timbre del asistente. Tiene una dirección; cuando alguien la toca con un mensaje, el flujo arranca. Con WhatsApp de verdad, en este lugar va el WhatsApp Trigger, y la dirección se la da n8n a Meta.</p>

- **Test URL y Production URL:** la de prueba (`/webhook-test/…`) escucha una sola vez, mientras apretás *Listen for
  test event*. La de producción (`/webhook/…`) escucha siempre, cuando el flujo está **publicado**. Usamos la de
  producción.

**P1-2 · Sacar los datos del paquete** (*Edit Fields*)

```text
+ a la derecha del Webhook → escribí  edit  → Edit Fields (Set)
```

- **Cuándo se coloca:** enseguida de la entrada. El paquete de Meta es largo, con cajas adentro de cajas; sacamos una
  vez lo que importa, y todos los nodos que siguen usan nombres cortos.

| Campo (*Mode: Manual Mapping* → **Add Field**, cuatro veces, todos **String**) | Valor | Qué es |
|---|---|---|
| `telefono` | `{{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from }}` | Quién escribió: a quién se le contesta, y la etiqueta de la memoria |
| `nombre` | `{{ $json.body.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name }}` | El nombre del perfil de WhatsApp |
| `tipo` | `{{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.type }}` | `text`, `image`, `audio`… (lo usa el portero del Paso 5) |
| `texto` | `{{ $json.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body }}` | Lo que escribió |

<p style="color:#1a7f37">Este es el paquete que manda Meta, y miren el camino: body, entry, changes, value, y recién ahí, messages. Cajas adentro de cajas, el JSON de la Semana 1. Una vez saco el teléfono, el nombre, el tipo y el texto, y me olvido del resto.</p>

- **Los `?.`** quieren decir "si existe". Si el paquete no trae `messages` (un aviso de "leído", por ejemplo), el
  campo queda vacío en vez de dar error.
- **`[0]`** es "el primero de la lista": Meta manda los mensajes en una lista, aunque casi siempre venga uno.
- **Con WhatsApp de verdad las expresiones son más cortas:** el *WhatsApp Trigger* ya entrega la parte `value`, así
  que es `{{ $json.messages?.[0]?.from }}`. Está en el anexo.
- **Todavía no se ve nada a la izquierda (*INPUT*):** no llegó ningún mensaje. Por eso las expresiones se pegan; en
  el paso siguiente, con un mensaje de verdad, se ven los valores.

**P1-3 · Publicar el asistente**

```text
Save (Ctrl + S) → arriba a la derecha: Publish → aparece "Workflow published"
```

El aviso dice: *"You can now make calls to your production webhook URL. These executions will not show up
immediately in the editor, but you can see them in the execution list…"*.

<p style="color:#1a7f37">Publicar es dejar el flujo atendiendo, aunque yo no esté mirando. Ahora tiene una dirección fija, como un número de teléfono, y cada vez que le llega un mensaje, se ejecuta solo. Y lo que haga no se ve en el lienzo: se ve en la pestaña Executions.</p>

- **En el asistente no se aprieta *Execute workflow*.** No arranca solo: espera que le llegue un mensaje.
- **Cada cambio, Save y Publish otra vez.** *Save* guarda el borrador; lo que atiende es la versión publicada.

**P1-4 · El celular de mentira: el workflow y el mensaje** (*Trigger manually* + *Edit Fields*)

```text
Overview → Create workflow → nombre:  Celular de mentira
Add first step → manual → Trigger manually
+ → edit → Edit Fields (Set)
```

| Campo (*Edit Fields*, cuatro **String**) | Valor | Para qué |
|---|---|---|
| `telefono` | `5491155550001` | El número de "Juan". Cambiándolo, es otro cliente |
| `nombre` | `Juan` | El nombre del perfil |
| `tipo` | `text` | Cambiándolo a `image` o `audio`, simula una foto o un audio |
| `texto` | `Hola! Me llamo Juan. Qué paquetes tienen para el sur?` | Lo que "escribe" el cliente |

<p style="color:#1a7f37">El celular de mentira tiene tres nodos. El botón, el mensaje que escribe el cliente, y el que lo manda. Para mandar otro mensaje, cambio el texto acá.</p>

**P1-5 · Mandarle el mensaje al asistente** (*HTTP Request*)

```text
+ a la derecha de Edit Fields → escribí  http  → HTTP Request
```

- **Cuándo se coloca:** al final del celular de mentira. Es el que "toca el timbre": hace el POST a la dirección del
  Webhook, como Meta.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Method* | **POST** | Como Meta |
| *URL* | `http://localhost:5678/webhook/whatsapp-simulado` | La *Production URL* del Webhook. Con n8n Cloud: copiala del Webhook del asistente |
| *Send Body* | Prendido | Hay que mandar el paquete |
| *Body Content Type* | **JSON** | El formato de Meta |
| *Specify Body* | **Using JSON** | Para escribir el paquete entero |
| *JSON* | El bloque de abajo (en **Expression**) | Arma el paquete de Meta con los datos de *Edit Fields* |
| *Options* → **Add option** → *Timeout* | `600000` | 10 minutos de espera. Con Gemini sobra; con Ollama, la primera respuesta puede tardar minutos |

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

<p style="color:#1a7f37">Esto parece mucho, pero no lo escribo de memoria: es el molde del paquete de Meta, copiado de su documentación, con nuestros cuatro datos metidos adentro. Fíjense dónde va cada uno: el nombre en contacts, el teléfono en from, el texto en text, body. Es justo el camino que el asistente desarma del otro lado.</p>

- **No hace falta entenderlo línea por línea.** Lo que importa: arma el mismo paquete que manda Meta, con los datos
  del nodo anterior.
- **La última línea** arma un mensaje de texto si `tipo` es `text`, y una "foto" o un "audio" sin texto si no.

**P1-6 · Probar el canal**

```text
En "Celular de mentira": Execute workflow → los tres nodos en verde
→ doble clic en HTTP Request → OUTPUT: telefono, nombre, tipo, texto
En "Asistente simulado": pestaña Executions → la última → el recorrido, nodo por nodo
```

<p style="color:#1a7f37">Ahí está: lo que "escribió" el celular, adentro de n8n, y de vuelta. Por ahora el asistente solo saca los datos y los devuelve. Es el eco: el canal anda.</p>

**Debug Challenge (filmina 19, 2 min, lo resolvés vos).** En el asistente: menú de **Publish** → **Unpublish**. En el
celular de mentira: **Execute workflow**. El *HTTP Request* se pone en rojo, con un error **404** que dice que el
webhook **no está registrado** (en el ensayo, anotá el texto exacto). Decís:

<p style="color:#1a7f37">Mandé el mensaje y nadie atendió. ¿Qué reviso primero? No el prompt, no Gemini: si el que recibe está escuchando. Un 404 es "a esta dirección no hay nadie". Publico de nuevo, y llega. Con WhatsApp real es igual: primero, ¿está publicado? Después, ¿la dirección es pública? Después, las credenciales.</p>

Volvés a publicar el asistente. Mandás de nuevo: llega.

↩️ **Volvés al PowerPoint · filmina 21.**

#### Paso 2 · El cerebro (filmina 21, 8 min)

🖥️ **PowerPoint · filmina 21.**

<p style="color:#1a7f37">Paso dos: que el agente conteste algo, aunque sea feo. Sumamos el AI Agent con su modelo, le pasamos el texto del mensaje, y devolvemos la respuesta. Resultado: el primer ida y vuelta completo.</p>

Para explicar:
- **"Mapear el campo text.body del webhook como entrada del agente."** Es nuestro `texto`, que ya sacamos en el Paso 1.
- **"Conectar el nodo de WhatsApp Business para devolver la respuesta."** Con WhatsApp real es el nodo *Send message*
  (en el anexo). En el simulador, la respuesta la devuelve el Webhook al celular de mentira.

🛠️ **Pasás a n8n** (al `Asistente simulado`).

**P2-1 · El agente** (*AI Agent*)

```text
+ a la derecha de Edit Fields → escribí  agent  → AI Agent
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt (User Message)* | **Define below** | *Connected Chat Trigger Node* espera el chat de prueba de n8n; el mensaje viene del Webhook |
| *Prompt (User Message)* | Arrastrás `texto` desde *INPUT* → `{{ $json.texto }}` | Lo que escribió el cliente |
| *Require Specific Output Format* · *Enable Fallback Model* | Apagados | Respuesta en texto libre, un solo modelo |
| *Options* | Nada, por ahora | El *System Message* va en el Paso 4 |

- **Por qué un agente y no una chain:** necesita memoria (Paso 3) y, en los Ejemplos 4 y 5, herramientas.

**P2-2 · El cerebro** (*Google Gemini Chat Model*)

```text
Abajo del AI Agent, conector "Chat Model" → + → escribí  gemini  → Google Gemini Chat Model
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La de Gemini (por ejemplo, *Google Gemini(PaLM) Api account*) | |
| *Model* | El **flash** (`models/gemini-3-flash-preview`) | Rápido: en un chat la respuesta tiene que llegar en segundos |
| *Options* → *Sampling Temperature* | **0.3** | Respuestas parecidas cada vez, con algo de naturalidad |

**P2-3 · La respuesta** (*Edit Fields*)

```text
+ a la derecha del AI Agent → edit → Edit Fields (Set)     → n8n lo llama  Edit Fields1
```

| Campo | Tipo | Valor | Por qué |
|---|---|---|---|
| `para` | String | Arrastrás `telefono` desde *Edit Fields* → `{{ $('Edit Fields').item.json.telefono }}` | A quién se le contesta. Se busca "atrás": el agente solo devuelve `output` |
| `texto` | String | `{{ $json.output }}` | La respuesta del agente |

<p style="color:#1a7f37">Con WhatsApp real, acá va el nodo de WhatsApp que manda el mensaje: a quién, el teléfono; qué, el output del agente. En el simulador, armo eso mismo, y como es el último nodo, el Webhook se lo devuelve al celular de mentira.</p>

**P2-4 · Probar.** **Save** → **Publish**. En el celular de mentira: **Execute workflow** → *HTTP Request* → *OUTPUT*:
`para` y `texto` con la respuesta de Ana.

Sin system prompt, no sabe que es una agencia: contesta como un asistente general. Con `llama3.2`, al armar la
clase, ofreció hablar de "Historia, Ciencia, Tecnología…". Con Gemini, anotá en el ensayo qué contesta.

<p style="color:#1a7f37">Contestó. Quizás largo, quizás sin saber qué vendemos, pero contestó. El tubo está conectado de punta a punta. Primero que entre y salga; después, se pule.</p>

↩️ **Volvés al PowerPoint · filmina 22.**

#### Paso 3 · La memoria (filmina 22, 7 min)

🖥️ **PowerPoint · filmina 22.**

<p style="color:#1a7f37">Paso tres: que no se olvide con quién está hablando. Conectamos la memoria con el teléfono como Session ID, probamos el clásico de "me llamo Juan", y le escribimos desde otro número para ver que no se mezclan.</p>

🛠️ **Pasás a n8n.**

**P3-1 · Primero, sin memoria.** En el celular de mentira, *Edit Fields* → `texto`: `Me llamo Juan` → **Execute
workflow**. Después `texto`: `¿Cómo me llamo?` → **Execute workflow**. No sabe.

<p style="color:#1a7f37">No sabe. Es el FindTheBug de la filmina 16: cada mensaje es una ejecución nueva, y la API no se acuerda de nada.</p>

**P3-2 · La memoria** (*Simple Memory*)

```text
Abajo del AI Agent, conector "Memory" → + → escribí  simple  → Simple Memory
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Session ID* | **Define below** | *Connected Chat Trigger Node* busca el número de sesión del chat de prueba, y WhatsApp no lo manda: da *No session ID found* |
| *Key* | Arrastrás `telefono` desde *Edit Fields* → `{{ $('Edit Fields').item.json.telefono }}` | Una conversación por teléfono. Si ponés un texto fijo, todos los clientes comparten la memoria |
| *Context Window Length* | **10** | Recuerda los últimos 10 mensajes |

**P3-3 · Probar.** **Save** → **Publish**. Otra vez *Me llamo Juan* → *¿Cómo me llamo?*: ahora sí. Después, en el
celular de mentira, `telefono`: `5491155550002` → *¿Cómo me llamo?*: no sabe.

<p style="color:#1a7f37">Dos teléfonos, dos conversaciones. La etiqueta de cada charla es el número. Esa es la regla de oro de la filmina 14.</p>

- **El error a propósito** (si hay tiempo, 1 min): *Session ID* en *Connected Chat Trigger Node* → Publish → mandar.
  Sale *Error in sub-node 'Simple Memory'* con *No session ID found*. Lo volvés a *Define below*.
- **Ojo:** desde el Paso 4 Ana sabe el nombre por el perfil (va en el prompt). Después de eso, "¿cómo me llamo?" ya no
  prueba la memoria: se prueba con otro dato ("viajo con mi hija, se llama Sofía").

↩️ **Volvés al PowerPoint · filmina 23.**

#### Paso 4 · La voz (filmina 23, 6 min)

🖥️ **PowerPoint · filmina 23.**

<p style="color:#1a7f37">Paso cuatro: que deje de responder como un robot aburrido. Escribimos el system prompt con el rol, el negocio, el tono y lo prohibido; forzamos el formato de WhatsApp; y exigimos el micro-cierre.</p>

🛠️ **Pasás a n8n.**

**P4-1 · El System Message**

```text
Doble clic en el AI Agent → abajo, Options → Add Option → System Message → aparece una caja con un texto de ejemplo
→ lo borrás → arriba a la derecha de la caja: Expression (por las {{ }}) → pegás:
```

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

Para explicar mientras lo pegás:
- **Los paquetes van en el prompt** porque son seis y casi no cambian. Si fueran 300 que cambian todos los días, haría
  falta la planilla (Ejemplo 5) o RAG (Ejemplo 2).
- **Cada regla de la filmina tiene su línea:** rol, concisión, estilo (un asterisco, guiones, un emoji), micro-cierre
  y límites con derivación a una persona.
- **El nombre del cliente** viene del perfil: `$('Edit Fields').item.json.nombre`. Ana saluda por el nombre sin
  preguntarlo.

**P4-2 · Probar.** **Save** → **Publish**. En el celular de mentira, `telefono` otra vez `5491155550001` y `texto`:
`Hola! Me llamo Juan. Qué paquetes tienen para el sur?`. Lo que contestó en el ensayo (real, Gemini, 26/11/2026,
9,6 segundos):

```text
Hola Juan! Qué bueno saludarte. En Rumbo Sur tenemos estas opciones para que conozcas el sur:

- *Bariloche Clásico*: 5 días, USD 950. Incluye aéreo, hotel con desayuno y excursión.
- *Fin del Mundo*: 5 días, USD 1320. Incluye aéreo, hotel con media pensión y navegación.

¿Te gustaría que te cuente más detalles de alguno de estos destinos? 🏔️
```

<p style="color:#1a7f37">El mismo agente, otra voz. Solo los destinos del sur, negrita de WhatsApp, un emoji, y termina con una pregunta. El prompt es el código fuente del comportamiento.</p>

- En el *OUTPUT* los saltos de línea se ven como `\n`: en el celular son renglones.
- Con `llama3.2` (Semana 7), la misma pregunta trajo Salta y Cataratas como "el sur", y seis emojis.

↩️ **Volvés al PowerPoint · filmina 24.**

#### Paso 5 · Los bordes (filmina 24, 5 min)

🖥️ **PowerPoint · filmina 24.**

<p style="color:#1a7f37">Último paso: qué pasa cuando el usuario no colabora. Una foto, un audio, algo fuera de tema. Y al final, documentamos y exportamos.</p>

🛠️ **Pasás a n8n.**

**P5-1 · La foto, sin porteros.** En el celular de mentira, `tipo`: `image` → **Execute workflow**. El agente recibe
`texto` vacío: en *Executions* del asistente se ve el error, o una respuesta sin sentido.

<p style="color:#1a7f37">Una foto no tiene texto. En WhatsApp la gente manda fotos, audios, stickers. Hay que preverlo.</p>

**P5-2 · El primer portero** (*Filter*)

```text
Pasá el mouse sobre la flecha entre Edit Fields y AI Agent → aparece un + en el medio → clic → filter → Filter
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | `{{ $json.telefono }}` | Sin teléfono no es un mensaje: con WhatsApp real, son los avisos de "entregado" y "leído" |
| *Conditions* · el del medio | **String** → **is not empty** | "Que tenga algo". No lleva valor a la derecha |

- Un *Filter* deja pasar o frena: no tiene rama "falso".

**P5-3 · El segundo portero** (*If*) **y la respuesta fija**

```text
+ en el medio de la flecha entre Filter y AI Agent → if → If
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | `{{ $json.tipo }}` | El tipo de mensaje |
| *Conditions* · el del medio | **String** → **is equal to** | |
| *Conditions* · derecha | `text` | En minúscula, como lo manda Meta |

La salida **true** queda conectada al agente. En la salida **false**: **+** → **Edit Fields (Set)** → n8n lo llama
**Edit Fields2**:

| Campo | Tipo | Valor |
|---|---|---|
| `para` | String | `{{ $('Edit Fields').item.json.telefono }}` |
| `texto` | String | `Por ahora solo puedo leer mensajes de texto 🙏 ¿Me lo escribís?` |

- **A diferencia del Filter**, con lo que no pasa sí queremos hacer algo: contestar fijo, sin IA.

**P5-4 · Probar y documentar.** **Save** → **Publish**. `tipo`: `image` → la respuesta fija, en 0 segundos (no pasa
por la IA). `tipo`: `text` y `texto`: `me recomendás un buen abogado?` → Ana lo desvía a los viajes. Después:
**Shift + S** (nota adhesiva) con las tres fases, y menú **…** → **Download**: el `.json` para la pre-entrega.

<p style="color:#1a7f37">La foto no rompe nada, lo que no le toca lo desvía, y lo que no sabe no lo inventa. Esto es lo que dice la filmina 30: probar los bordes antes de entregar.</p>

■ **Termina el Ejemplo 1.** No volvés al PowerPoint: seguís en n8n con el Ejemplo 2.

#### Ejemplo 2 en n8n · RAG: Ana con las preguntas frecuentes (flujo `05`) (15 min)

> **En pocas palabras.** Ana contesta preguntas sobre las reglas de la agencia (cancelaciones, equipaje, mascotas)
> **leyendo un documento**, no de memoria. Antes de responder, busca en el documento el pedazo que habla de lo que le
> preguntaron.
>
> ```text
> Carga (una vez):  el documento → cortarlo en pedazos → convertir cada pedazo en números → guardarlos
> Consulta:         chat → AI Agent ─ herramienta preguntas_frecuentes: busca los 3 pedazos más parecidos → responde con eso
> ```
>
> **La idea para los alumnos:** RAG es un examen a libro abierto. Sirve cuando la información es mucha o cambia
> seguido, y no entra (o no conviene) en el system prompt.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 1. Seguís en n8n. ■ **Dónde termina:** con cuatro preguntas probadas.
> Seguís con el Ejemplo 3.

> **¿Anda en local (Docker)?** ✅ Sí. Los embeddings los hace Ollama en tu computadora (`embeddinggemma`), la base
> vive en la memoria de n8n, y el chat es el de *Open chat*. Lo único que sale es el pedido a Gemini. Antes, en la
> terminal: `ollama pull embeddinggemma` (622 MB).

**Qué va a hacer este flujo (y qué no).** Tiene dos partes en el mismo workflow: arriba la **carga** (se ejecuta una
vez, con el botón) y abajo la **consulta** (el chat). No inventa: si la respuesta no está en el documento, lo dice.
No guarda nada para siempre: la base vive en la memoria y **se borra si se reinicia n8n**.

**RAG en criollo (3 min, antes de armar).** Es lo que explica el material de lectura (`Semana 8.docx`), contado
simple:

<p style="color:#1a7f37">Imaginen que la agencia tiene un manual de veinte páginas: cancelaciones, equipaje, mascotas. ¿Lo pegamos entero en el system prompt? Si son dos páginas, sí. Si son veinte, o si cambia todas las semanas, no. RAG es otra forma: el manual se guarda aparte, cortado en pedazos, y cuando el cliente pregunta algo, Ana busca solo el pedazo que habla de eso, y responde con ese pedazo adelante. Un examen a libro abierto.</p>

- **RAG** (*Retrieval-Augmented Generation*, "generación aumentada con búsqueda"): primero **buscar** en tus
  documentos, después **responder** con lo que se encontró.
  - *Ejemplo:* "¿Si cancelo 20 días antes me devuelven la plata?" → busca el párrafo de cancelaciones → "te devolvemos
    el 50 %".
- **Chunk (pedazo):** el documento se corta en pedazos chicos, para buscar solo lo necesario.
  - *Ejemplo:* Pedazos de 600 caracteres, más o menos un párrafo, con 100 caracteres que se repiten entre uno y el
    siguiente, para no cortar una idea por la mitad.
- **Embedding:** un pedazo de texto convertido en una lista de números que representa **su significado**. Textos que
  dicen lo mismo con otras palabras quedan con números parecidos.
  - *Ejemplo:* "si me arrepiento" y "si cancelás" quedan cerca, aunque no compartan ninguna palabra.
- **Base vectorial:** donde se guardan esos números, y que sabe encontrar los más parecidos a una pregunta. Hoy usamos
  una que vive en la memoria de n8n (*Simple Vector Store*). El material de lectura usa **Supabase**, que guarda todo
  en una base de datos de verdad, y no se borra.
- **Dos momentos, el mismo modelo de embeddings:** en la carga se convierten los pedazos; en la consulta, la pregunta.
  Tienen que ser el mismo modelo, si no, los números no se pueden comparar.
- **El modelo de embeddings tiene que entender castellano.** Probado al armar la clase: con `nomic-embed-text`
  (pensado para inglés), "si me arrepiento" no encontró el párrafo de cancelaciones, ni "mi perro" el de mascotas. Con
  `embeddinggemma`, los encontró.
- **¿RAG, system prompt o herramienta?** Poco y estable → system prompt (los 6 paquetes). Una tabla con datos que
  cambian → herramienta de planilla (Ejemplo 5). Mucho texto, reglas, manuales → RAG.

🛠️ **Pasás a n8n.**

**R-1 · La carga: el disparador y el documento** (*Trigger manually* + *Edit Fields*)

```text
Overview → Create workflow → nombre:  RAG preguntas frecuentes
Add first step → manual → Trigger manually
+ → edit → Edit Fields (Set) → Add Field:  texto (String) → valor: el documento de abajo
```

- **Cuándo se coloca:** el *Edit Fields* hace de "documento". En la vida real, sería un *Google Drive* que lee un
  archivo, o un PDF.

```text
PREGUNTAS FRECUENTES DE RUMBO SUR (vigentes desde marzo de 2026)

Cancelaciones y devoluciones. Si cancelás con más de 30 días de anticipación a la salida, te devolvemos el 100% de lo pagado menos un 10% de gastos administrativos. Entre 30 y 15 días antes de la salida, devolvemos el 50%. Con menos de 15 días, la reserva no es reembolsable, salvo por fuerza mayor con certificado (enfermedad, fallecimiento de un familiar directo).

Cambios de fecha. Podés cambiar la fecha de salida una vez sin cargo, hasta 20 días antes del viaje. Los cambios posteriores tienen un costo de USD 50 por persona, sujeto a disponibilidad.

Formas de pago. Para reservar se paga una seña del 30%. El saldo se paga hasta 15 días antes de la salida. Aceptamos transferencia bancaria y tarjeta de crédito en hasta 6 cuotas sin interés. No aceptamos pagos en efectivo en las oficinas.

Documentación. Para los viajes dentro de Argentina alcanza con el DNI vigente; no se acepta la constancia de DNI en trámite. Los menores de edad que viajan con uno solo de sus padres necesitan una autorización del otro progenitor firmada ante escribano.

Equipaje. Todos los paquetes incluyen una valija de hasta 15 kg en bodega y un bolso de mano de hasta 8 kg. El equipo de esquí o snowboard se despacha aparte, con un recargo de USD 60 por tramo.

Alimentación especial. Los hoteles de todos los paquetes ofrecen opciones sin TACC para personas celíacas y menús vegetarianos, siempre que se avise al momento de reservar. Sin aviso previo no podemos garantizarlo.

Mascotas. Los paquetes no incluyen el traslado de mascotas. Algunos hoteles de Mendoza y Salta aceptan perros chicos con un recargo; consultá con un vendedor antes de reservar.

Seguro de viaje. Todos los paquetes incluyen una asistencia al viajero básica, con cobertura médica de hasta USD 10.000. Se puede ampliar a USD 40.000 por USD 35 por persona.

Horario de atención. Las oficinas atienden de lunes a viernes de 9 a 18 y los sábados de 9 a 13. El asistente de WhatsApp responde las 24 horas, y los pedidos fuera de horario los retoma un vendedor el siguiente día hábil.
```

**R-2 · Guardar en la base** (*Simple Vector Store*, modo carga)

```text
+ a la derecha de Edit Fields → escribí  vector store  → Simple Vector Store → Add documents to vector store
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Operation Mode* | **Insert Documents** | Cargar |
| *Memory Key* | `faq_rumbo_sur` | El nombre de la "caja" donde se guarda. La consulta va a buscar en la misma caja |
| *Clear Store* | **Prendido** | Si cargás dos veces, borra lo anterior: no quedan pedazos repetidos |

Abajo le quedan dos conectores con asterisco: **Embedding** y **Document**.

**R-3 · Los dos sub-nodos de la carga** (*Embeddings Ollama* y *Default Data Loader* con su *Text Splitter*)

```text
Conector "Embedding" → + → ollama → Embeddings Ollama
Conector "Document"  → + → default → Default Data Loader
   Abajo del Default Data Loader, conector "Text Splitter" → + → Recursive Character Text Splitter
```

| Nodo | Campo | Qué ponés | Por qué |
|---|---|---|---|
| *Embeddings Ollama* | *Credential* · *Model* | **Ollama local** · `embeddinggemma:latest` | El que convierte texto en números, y entiende castellano |
| *Default Data Loader* | *Type of Data* | **JSON** | El texto viene de un nodo, no de un archivo |
| | *Mode* | **Load Specific Data** | Le decimos qué campo leer |
| | *Data* | `{{ $json.texto }}` | El documento |
| | *Text Splitting* | **Custom** | Para elegir cómo se corta |
| *Recursive Character Text Splitter* | *Chunk Size* · *Chunk Overlap* | `600` · `100` | Pedazos de un párrafo, que se pisan un poco entre sí |

**Execute workflow** (con el botón de *Trigger manually*). En el *Simple Vector Store*, *OUTPUT*: un item por pedazo
(anotá cuántos en el ensayo).

<p style="color:#1a7f37">La carga: el documento se corta en pedazos, cada pedazo se convierte en números con un modelo de Ollama, y se guarda en la caja faq_rumbo_sur. Esto se hace una vez. Si el manual cambia, se carga de nuevo.</p>

**R-4 · La consulta: el chat y Ana** (*Chat Trigger* + *AI Agent*)

```text
En un lugar vacío del lienzo, más abajo: clic derecho → Add node (o el + de arriba a la derecha) → chat → On chat message
+ a la derecha → agent → AI Agent
   Chat Model → + → Google Gemini Chat Model (tu credencial, el flash, temperatura 0.2)
   Memory     → + → Simple Memory (Session ID: Connected Chat Trigger Node, Context Window Length: 10)
```

- **Dos disparadores en el mismo workflow** se puede: el de la carga y el del chat. Cada uno arranca su parte.
- **Acá la memoria sí va en *Connected Chat Trigger Node*:** el mensaje viene del chat de prueba, que manda su propio
  número de sesión.

En el AI Agent, *Options* → *System Message*:

```text
Sos Ana, la asesora de la agencia de viajes "Rumbo Sur", y atendés por WhatsApp.

Para cualquier pregunta sobre políticas de la agencia (cancelaciones, cambios, pagos, documentación, equipaje, comidas especiales, mascotas, seguro u horarios), usá SIEMPRE la herramienta de preguntas frecuentes antes de responder.

Respondé solo con lo que diga la herramienta. Si la información no está, decí que no la tenés y que lo consultás con un vendedor. No inventes porcentajes, montos ni plazos.

Formato de WhatsApp: 2 o 3 líneas, negritas con un solo asterisco (*así*), como mucho un emoji, y terminá con una pregunta o el próximo paso.
```

**R-5 · La herramienta que busca** (*Simple Vector Store*, modo herramienta)

```text
Abajo del AI Agent, conector "Tool" → + → vector store → Simple Vector Store
→ renombralo:  preguntas_frecuentes   (la única excepción: el nombre de una herramienta lo lee el modelo)
   Conector "Embedding" → + → Embeddings Ollama (n8n lo llama Embeddings Ollama1)
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Operation Mode* | **Retrieve Documents (As Tool for AI Agent)** | Buscar, como herramienta del agente |
| *Description* | `Busca en las preguntas frecuentes de la agencia: cancelaciones y devoluciones, cambios de fecha, formas de pago, documentación, equipaje, comidas especiales (celíacos, vegetarianos), mascotas, seguro de viaje y horarios de atención.` | Con esto Ana decide cuándo usarla |
| *Memory Key* | `faq_rumbo_sur` | La misma caja de la carga |
| *Limit* | `3` | Trae los 3 pedazos más parecidos |
| *Embeddings Ollama1* → *Model* | `embeddinggemma:latest` | **El mismo** modelo de la carga: si no, los números no se comparan |

<p style="color:#1a7f37">La herramienta busca en la misma caja, con el mismo modelo. Convierte la pregunta en números, encuentra los tres pedazos más parecidos, y se los pasa a Ana. Ana responde con eso adelante.</p>

**R-6 · Probar.** **Save** → **Open chat** → de a una:

```text
si me arrepiento 20 días antes, me devuelven la plata?   → el documento: entre 30 y 15 días antes, 50 %
mi hijo es celíaco, hay problema con la comida?          → hay opciones sin TACC, avisando al reservar
cuántos kilos puedo llevar?                              → valija de 15 kg y bolso de mano de 8 kg
tienen descuento para jubilados?                         → no está en el documento: tiene que decir que lo consulta
```

En *Logs*, antes de cada respuesta tiene que aparecer **preguntas_frecuentes**. Mirá qué pedazos trajo: el de
cancelaciones para la primera, aunque diga "me arrepiento" y no "cancelás". Las respuestas con Gemini no se probaron
al armar la clase: anotalas en el ensayo.

<p style="color:#1a7f37">"Me arrepiento" y el documento dice "cancelás": no hay ni una palabra en común, y la encontró. Eso es buscar por significado. Y la de jubilados no está: si Ana dice "lo consulto con un vendedor" en vez de inventar un descuento, el manual está funcionando.</p>

- **Si reiniciás n8n** (o Docker), la base se borra: ejecutá la carga otra vez.
- **Si la herramienta no encuentra nada:** ¿ejecutaste la carga? ¿la *Memory Key* es la misma en los dos? ¿el mismo
  modelo de embeddings?

■ **Termina el Ejemplo 2.** Seguís en n8n con el Ejemplo 3.

#### Ejemplo 3 en n8n · Fuera de horario (flujo `06`) (8 min)

> **En pocas palabras.** El asistente del Ejemplo 1, con horario: fuera de horario no contesta Ana, sino un mensaje
> fijo, y el mensaje queda anotado en una planilla para que un vendedor llame al día siguiente.
>
> **La idea para los alumnos:** no todo pasa por la IA. Un IF con la hora decide antes.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 2. Seguís en n8n. ■ **Dónde termina:** con la respuesta fija y la fila
> en "Pendientes". Seguís con el Ejemplo 4.

> **¿Anda en local (Docker)?** ✅ Sí, igual que el Ejemplo 1: el celular de mentira le manda el mensaje a la copia,
> cambiando el final de la URL del *HTTP Request* por el *Path* nuevo. Google Sheets es un pedido que sale de n8n (credencial de la Semana 4).

```text
… → Filter → If1 ─ true  → If → AI Agent → Edit Fields1   (como siempre)
                       (IF: día y hora)     └ false → Append row in sheet → Edit Fields3
                                                      (Sheets · Append)
```

Lo que tiene que pasar: un mensaje un sábado, o a las 23, recibe *"¡Hola Juan! Ahora estamos fuera de horario
(atendemos de lunes a viernes, de 9 a 18). Ya anotamos tu mensaje: mañana a primera hora te escribe un vendedor."*, y
queda una fila en la planilla "Pendientes".

<p style="color:#1a7f37">Ana puede contestar a cualquier hora, pero a veces el negocio no quiere: si el cliente pide algo que necesita un vendedor, a las 11 de la noche no hay nadie. Este ejemplo le pone horario: fuera de horario, una respuesta fija, y el mensaje queda anotado para mañana.</p>

**E3-1 · Partir del asistente de la clase**

```text
Abrí "Asistente simulado" (el del Ejemplo 1) → arriba, menú … → Duplicate → nombre:  Asistente con horario
En la copia, doble clic en el Webhook
```

| Campo (*Webhook*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-horario` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real** (anexo): duplicás el flujo de WhatsApp, y no hay *Path* que cambiar. Un solo WhatsApp
  Trigger publicado por app de Meta.

<p style="color:#1a7f37">No arrancamos de cero: duplicamos el de la clase. Le cambio el Path, para que no choque con el original.</p>

**E3-2 · La planilla de pendientes** (en Google, no en n8n)

```text
sheets.new → arriba a la izquierda, nombre:  Pendientes
Fila 1:   A1 fecha   B1 nombre   C1 telefono   D1 mensaje
```

- Los títulos de la fila 1 son los casilleros que va a llenar n8n: en minúscula y sin tildes, igual que en el nodo.

**E3-3 · If1** (*If* con tres condiciones)

```text
Pasá el mouse sobre la flecha entre "Filter" y "If" → + en el medio → if → If     → n8n lo llama  If1 (ya hay un If)
```

- **Cuándo se coloca:** después de saber que es un mensaje y **antes** de todo lo demás. Fuera de horario no hace
  falta ver si es texto ni llamar a la IA.

| Campo | Qué ponés | Por qué |
|---|---|---|
| Condición 1 | `{{ $now.weekday }}` · **Number** → **is less than or equal to** · `5` | `weekday` va de 1 (lunes) a 7 (domingo): hasta 5 es de lunes a viernes |
| **Add condition** → Condición 2 | `{{ $now.hour }}` · **Number** → **is greater than or equal to** · `9` | Desde las 9 |
| **Add condition** → Condición 3 | `{{ $now.hour }}` · **Number** → **is less than** · `18` | Hasta las 17:59 |
| Entre las condiciones | **AND** (viene así) | Se tienen que cumplir las tres. Con *OR*, alcanzaría una |

Las salidas: **true** ya va a *If* (quedó conectada al insertarlo en la flecha). **false**, por ahora libre.

<p style="color:#1a7f37">El IF con tres preguntas a la vez: ¿es día de semana? ¿son las 9 o más? ¿son menos de las 18? Con AND, tienen que cumplirse las tres. Number, porque son números: compararlos como texto daría resultados raros.</p>

- **`$now` usa la zona horaria del flujo.** Menú **…** del flujo → **Settings** → *Timezone*:
  **America/Argentina/Buenos_Aires** → **Save**. Si queda en otra, "las 9" son las 9 de otro país.

**E3-4 · Fuera de horario: anotar** (*Google Sheets*)

```text
+ en la salida "false" de "If1" → sheets → Google Sheets → Actions: Append row in sheet
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La de Google Sheets | |
| *Resource* · *Operation* | **Sheet Within Document** · **Append Row** | Una fila nueva abajo de todo |
| *Document* · *Sheet* | **From list** → **Pendientes** · **From list** → **Hoja 1** | |
| *Mapping Column Mode* | **Map Each Column Manually** | Los datos no tienen los nombres de las columnas: los ponemos a mano, columna por columna |
| *fecha* | `{{ $now.format('dd/MM/yyyy HH:mm') }}` | Cuándo escribió |
| *nombre* | Arrastrás `nombre` desde *Edit Fields* | |
| *telefono* | Arrastrás `telefono` desde *Edit Fields* | Para que el vendedor lo llame |
| *mensaje* | Arrastrás `texto` desde *Edit Fields* | Qué pidió |

- **Por qué "a mano" y no *Map Automatically*:** lo que llega a este nodo es lo que salió del IF, con los nombres de
  *Edit Fields* (`texto`, no `mensaje`), y no queremos guardar `tipo` ni `phoneNumberId`.

**E3-5 · Fuera de horario: avisar** (*Edit Fields*)

```text
+ a la derecha de "Append row in sheet" → edit → Edit Fields (Set)     → n8n lo llama  Edit Fields3
```

| Campo | Tipo | Valor | Por qué |
|---|---|---|---|
| `para` | String | `{{ $('Edit Fields').item.json.telefono }}` | A quién (en el simulador, se ve; en WhatsApp real, este nodo es un *Send message*) |
| `texto` | String | `¡Hola {{ $('Edit Fields').item.json.nombre }}! Ahora estamos fuera de horario (atendemos de lunes a viernes, de 9 a 18). Ya anotamos tu mensaje: mañana a primera hora te escribe un vendedor.` | Un mensaje fijo: no hace falta IA |

**Save** → **Publish**.

<p style="color:#1a7f37">Fuera de horario, dos cosas: anotar el mensaje en la planilla, para que mañana alguien lo llame, y contestarle al cliente con un mensaje fijo. No hace falta IA: siempre es el mismo mensaje.</p>

**E3-6 · Probar sin esperar a la noche**

```text
En "If1", cambiá el 18 por la hora de ahora (por ejemplo, 10) → Save → Publish
Celular de mentira → nodo HTTP Request → URL terminada en  /webhook/whatsapp-horario
→ Execute workflow → la respuesta fija, y una fila en "Pendientes"
Volvé a poner el 18 → Save → Publish
```

<p style="color:#1a7f37">Para probar el "fuera de horario" sin quedarme hasta la noche, hago trampa: cambio el 18 por la hora de ahora. Y llega la respuesta fija, y la fila en la planilla.</p>

#### Ejemplo 4 en n8n · Pasar la conversación a una persona (flujo `07`) (10 min)

> **En pocas palabras.** Ana recibe una herramienta nueva: mandarle un mail a un vendedor. La usa cuando el cliente
> quiere reservar, está enojado o pide una persona.
>
> **La idea para los alumnos:** el *human in the loop* de la Semana 6, en el asistente. Ana resuelve lo repetitivo y
> deriva lo que tiene que hacer una persona.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 3. Seguís en n8n. ■ **Dónde termina:** con los cuatro casos probados.
> Seguís con el Ejemplo 5.

> **¿Anda en local (Docker)?** ✅ Sí, igual que el Ejemplo 1: el celular de mentira le manda el mensaje a la copia,
> cambiando el final de la URL del *HTTP Request* por el *Path* nuevo. Gmail es un pedido que sale de n8n.

```text
… → AI Agent → Respuesta
      ├─ Cerebro: Gemini
      ├─ Memoria por teléfono
      └─ avisar_vendedor   (Gmail Tool: mail al vendedor con nombre, teléfono y un resumen)
```

Lo que tiene que pasar: *"Quiero reservar el Bariloche Clásico para el 15 de julio"* → al vendedor le llega un mail
*"WhatsApp: Juan necesita un vendedor"* con el teléfono y el resumen, y Juan recibe *"Listo, ya le pasé tu consulta
a un vendedor: te escribe por acá en menos de una hora."*

<p style="color:#1a7f37">¿Se acuerdan del human in the loop de la Semana 6? Ana resuelve lo repetitivo, pero hay cosas que tiene que hacer una persona: reservar, cobrar, calmar a alguien enojado. Este ejemplo le da a Ana una herramienta para eso: avisarle a un vendedor.</p>

**E4-1 · Partir del asistente de la clase**

```text
Abrí "Asistente simulado" (el del Ejemplo 1) → arriba, menú … → Duplicate → nombre:  Asistente con vendedor
En la copia, doble clic en el Webhook
```

| Campo (*Webhook*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-humano` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real** (anexo): duplicás el flujo de WhatsApp, y no hay *Path* que cambiar. Un solo WhatsApp
  Trigger publicado por app de Meta.

**E4-2 · La herramienta: un mail al vendedor** (*Gmail Tool*)

```text
Abajo de "AI Agent", conector "Tool" → + → escribí  gmail  → Gmail Tool → renombralo:  avisar_vendedor   (excepción: el nombre de una herramienta lo lee el modelo)
```

- **Cuándo se coloca:** colgada del agente, como en la Semana 6. No va en la fila: la usa Ana **solo cuando
  decide** que hace falta.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | Tu cuenta de Gmail (**Sign in with Google**) | Desde qué casilla sale el mail |
| *Tool Description* | **Set Manually** → `Le manda un mail al vendedor de turno para que tome la conversación. Usala cuando el cliente quiere reservar o pagar, está enojado o pide hablar con una persona. Una sola vez por conversación.` | Es lo que lee Ana para decidir **cuándo** usarla |
| *Resource* · *Operation* | **Message** · **Send** | Mandar un mail |
| *To* | El mail del vendedor (el tuyo, para probar) | Fijo: no lo elige el modelo |
| *Subject* | `WhatsApp: ` + arrastrás `nombre` desde *Edit Fields* + ` necesita un vendedor` | El asunto, con el nombre puesto por n8n, no por el modelo |
| *Email Type* | **Text** | Texto común |
| *Message* | El bloque de abajo (en **Expression**) | Los datos fijos los pone n8n; el resumen, el modelo |
| *Options* → **Add option** → *Append n8n Attribution* | **Apagado** | Si no, el mail termina con una propaganda de n8n |

```text
Cliente: {{ $('Edit Fields').item.json.nombre }}
Teléfono: {{ $('Edit Fields').item.json.telefono }}

Qué necesita: {{ $fromAI('resumen', 'Un resumen corto de lo que quiere el cliente y por qué hay que pasarlo a una persona', 'string') }}
```

<p style="color:#1a7f37">La herramienta es un Gmail. El nombre y el teléfono los pongo yo, arrastrados: no quiero que el modelo los escriba, porque se puede equivocar. Lo único que completa el modelo es el resumen, con fromAI, como en la Semana 6. Y en la descripción, cuándo usarla.</p>

- **Lo que se puede arrastrar, se arrastra; el modelo completa solo lo que no se sabe de antes.**
- El `$fromAI` se escribe a mano, entero, como en la Semana 6 (el ✨ no le pone descripción).

**E4-3 · El manual: cuándo pasar a una persona** (el *System Message*)

```text
Doble clic en "AI Agent" → Options → System Message → al final del texto, agregá:
   PASAR A UNA PERSONA: si el cliente quiere reservar o pagar, está enojado, o pide hablar con una persona, usá
   avisar_vendedor UNA sola vez, con un resumen de lo que quiere. Después decile: "Listo, ya le pasé tu consulta
   a un vendedor: te escribe por acá en menos de una hora." No inventes horarios ni nombres de vendedores.
→ Save → Publish
```

<p style="color:#1a7f37">Y en el manual, la regla: en qué casos pasar a una persona, una sola vez, y qué decirle al cliente. Lo de "no inventes nombres" es porque, si no, el modelo dice "te va a escribir Martín", y Martín no existe.</p>

**E4-4 · Probar los cuatro casos**

```text
Celular de mentira → URL terminada en  /webhook/whatsapp-humano → cambiás el texto y ejecutás cada vez:
   "¿Cuánto sale Mendoza?"                              → contesta Ana, sin avisar a nadie
   "Quiero reservar el Bariloche Clásico"               → mail al vendedor + "ya le pasé tu consulta…"
   "Hace dos días que nadie me contesta, ¡un desastre!" → mail al vendedor (cliente enojado)
   "¿Me pasás con una persona?"                         → mail al vendedor
```

En la copia, pestaña **Executions** → la última: en los tres últimos aparece **avisar_vendedor** entre Gemini y la respuesta.

<p style="color:#1a7f37">Una pregunta de precio la contesta Ana sola. Reservar, un cliente enojado o pedir una persona: le llega el mail al vendedor. Así el vendedor solo atiende lo que vale la pena, y nadie queda sin respuesta.</p>

#### Ejemplo 5 en n8n · Ana con las herramientas de la Semana 6 (flujo `08`) (10 min)

> **En pocas palabras.** Los paquetes dejan de estar escritos en el prompt: Ana los busca en la planilla, consulta el
> dólar y hace la cuenta, como en la Semana 6, pero contestando con el formato de WhatsApp.
>
> **La idea para los alumnos:** es la forma de la Entrega Final. Si cambia un precio, se cambia en la planilla, y
> nadie toca el flujo.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 4. Seguís en n8n. ■ **Dónde termina:** con el precio en pesos y el cambio
> en la planilla. **Volvés al PowerPoint, a la filmina 25.**

> **¿Anda en local (Docker)?** ✅ Sí, igual que el Ejemplo 1: el celular de mentira le manda el mensaje a la copia,
> cambiando el final de la URL del *HTTP Request* por el *Path* nuevo. La planilla y el dólar son pedidos que salen de n8n.

```text
… → AI Agent → Respuesta
      ├─ Cerebro: Gemini · Memoria por teléfono
      ├─ consultar_paquetes   (la planilla "Paquetes Rumbo Sur")
      ├─ cotizacion_dolar     (dolarapi)
      └─ calculadora
```

Lo que tiene que pasar: *"¿Cuánto sale Bariloche para dos en pesos?"* → Ana usa la planilla, el dólar y la
calculadora, y contesta por WhatsApp con el precio en pesos de hoy.

<p style="color:#1a7f37">En la clase, los paquetes estaban escritos en el system prompt. Funciona, pero si cambia un precio, hay que tocar el flujo. Este ejemplo junta las dos semanas: el WhatsApp de hoy con las manos de la Semana 6. Los precios salen de la planilla, y si cambian, se cambian ahí. Esta es la forma que tiene el proyecto final.</p>

**E5-1 · Partir del asistente de la clase**

```text
Abrí "Asistente simulado" (el del Ejemplo 1) → arriba, menú … → Duplicate → nombre:  Asistente completo
En la copia, doble clic en el Webhook
```

| Campo (*Webhook*) | Qué ponés | Por qué |
|---|---|---|
| *Path* | `whatsapp-completo` | Cada flujo publicado necesita su propia dirección. Si dos tienen el mismo *Path*, el segundo no se puede publicar |
| *HTTP Method* · *Respond* | No se tocan (**POST** · **When Last Node Finishes**) | El celular de mentira manda por POST y espera la respuesta de Ana |

- **Por qué duplicar:** el asistente ya anda (trigger, datos, porteros, Ana, memoria, respuesta). El ejemplo le suma
  **una** cosa; todo lo demás queda igual.
- **Con WhatsApp real** (anexo): duplicás el flujo de WhatsApp, y no hay *Path* que cambiar. Un solo WhatsApp
  Trigger publicado por app de Meta.

**E5-2 · Traer las tres herramientas de la Semana 6** (copiar y pegar)

```text
Abrí el flujo de Ana de la Semana 6 ("Agente en vivo") → clic en consultar_paquetes → Shift + clic en
cotizacion_dolar y en calculadora → Ctrl + C
Volvé a "Asistente completo" → clic en un lugar vacío → Ctrl + V
→ arrastrá desde el rombito de arriba de cada herramienta hasta el conector "Tool" de "AI Agent"
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

**E5-3 · Cambiar el manual: de la lista a las herramientas** (el *System Message*)

```text
Doble clic en "AI Agent" → Options → System Message → borrá la parte "QUÉ PODÉS HACER" con la lista de los
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

**E5-4 · Probar**

```text
Celular de mentira → URL terminada en  /webhook/whatsapp-completo:
   "¿Cuánto sale Bariloche para dos en pesos?"   → planilla + dólar + calculadora → precio en pesos de hoy
   "¿Y el de nieve?"                              → planilla (memoria: sabe que es Bariloche) → sin cupos
Cambiá un precio en la planilla → preguntá de nuevo → Ana ya dice el precio nuevo
```

<p style="color:#1a7f37">Pregunto por Bariloche en pesos, y miren el log: planilla, dólar, calculadora. Y ahora cambio un precio en la planilla, pregunto de nuevo, y Ana ya lo sabe. Nadie tocó el flujo. Esto es un asistente que el dueño del negocio puede mantener solo, desde una planilla. Y es exactamente lo que piden para la Entrega Final.</p>

↩️ **Volvés al PowerPoint · filmina 25.**

#### Las trabas más comunes (Sección 03)

| Lo que pasa | Qué hacés |
|---|---|
| El *HTTP Request* del celular de mentira da **404** (webhook no registrado) | El asistente no está publicado, o el *Path* no coincide con el final de la URL. **Publish**, y revisá las dos puntas |
| El *HTTP Request* dice *Error in workflow* | El que falló es el asistente. Abrí su pestaña **Executions** → la última: ahí está el error de verdad (casi siempre, la credencial de Gemini) |
| *The connection was aborted* | El asistente tardó más de lo que espera el celular. Con Ollama en frío pasa: *Timeout* en `600000` |
| "Cambié el prompt y responde igual" | No volviste a publicar. *Save* guarda el borrador; *Publish* actualiza lo que atiende |
| "Apreté *Execute workflow* en el asistente y se quedó esperando" | En el asistente no se ejecuta: está escuchando la dirección de prueba. Paralo y mandá desde el celular de mentira |
| *No session ID found* en la memoria | Quedó en *Connected Chat Trigger Node*. Cambiá a *Define below* con el teléfono (en el Ejemplo 2 sí va *Connected*) |
| "Se acuerda de lo que dijo otro" | La *Key* de la memoria es un texto fijo. Tiene que ser el teléfono |
| Los campos de *Edit Fields* salen vacíos | Las expresiones no siguen el camino del paquete (`body.entry[0].changes[0].value`). Copialas de la tabla |
| La respuesta llega con `**` | El modelo usó la negrita de Markdown. Reforzá: "un asterisco de cada lado, nunca `**`" |
| RAG: la herramienta no encuentra nada | ¿Ejecutaste la carga? ¿Misma *Memory Key* y mismo modelo de embeddings en la carga y en la consulta? ¿Reiniciaste n8n? (la base se borra) |
| RAG: *model "embeddinggemma" not found* | Falta `ollama pull embeddinggemma` |

---

### 154–167 · Sección 04 · El cierre del curso y la Entrega Final

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
  - *Ejemplo:* El portero de las fotos de hoy es un IF. El que saca los datos del paquete, un Edit Fields.
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
  - *Ejemplo:* La app de Meta del Ejercicio 0 (opcional) es la del proyecto. Si Meta los traba, el bot de Telegram del
    Ejercicio 0-B. Los dos, con n8n Cloud o túnel (anexo).
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
   Las capturas pueden ser del simulador (el programa lo acepta).
2. El cuestionario del módulo en la plataforma (6 preguntas).
3. Ejercicio 3: rehacé el asistente simulado. Ejercicio 6: RAG con tu propio documento.
4. Para la Entrega Final: Ejercicio 5, pasar a un canal de verdad (n8n Cloud o túnel; WhatsApp o Telegram).
5. Entrega Final: leé entrega-final.md y elegí tu caso esta semana. Arrancá por el caso, no por la herramienta.
   Canal: WhatsApp o, si Meta te traba, Telegram (Ejercicio 0-B). Se entrega el link a tu repo de GitHub.
```

---

### 167–172 · Preguntas y despedida

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

### Anexo · Con canales de verdad (para la Entrega Final: n8n Cloud o túnel)

**En clase no se hace.** Es para el que quiere pasar el asistente a un canal real en la Entrega Final. Todo lo de
este anexo necesita que **Meta, Telegram o Slack puedan entrar a tu n8n**: una dirección **https pública** (n8n Cloud,
o n8n en Docker con un túnel y la variable `WEBHOOK_URL`, en el Ejercicio 5). Y para WhatsApp, además, la app de Meta
aprobada, que puede tardar.

#### A-1 · El asistente, por WhatsApp de verdad (flujos `01` y `02`)

Es el `Asistente simulado` del Ejemplo 1 con **dos cambios**: la entrada y la salida. Todo lo del medio (porteros,
AI Agent, memoria, prompt) queda igual.

**La entrada: el *WhatsApp Trigger*** (en lugar del *Webhook*)

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

**Edit Fields, con WhatsApp de verdad:** el *WhatsApp Trigger* ya entrega la parte `value` del paquete, así que las
expresiones son las cortas:

```text
telefono       {{ $json.messages?.[0]?.from }}
nombre         {{ $json.contacts?.[0]?.profile?.name }}
tipo           {{ $json.messages?.[0]?.type }}
texto          {{ $json.messages?.[0]?.text?.body }}
phoneNumberId  {{ $json.metadata?.phone_number_id }}     (desde qué número de la empresa se responde)
```

**La salida: *WhatsApp Business Cloud* → *Send message*** (en lugar de *Edit Fields1*)

```text
+ a la derecha de "Ana por WhatsApp" → escribí  whatsapp  → WhatsApp Business Cloud → en "Actions": Send message
```

- **Cuándo se coloca:** al final, después del agente. Es la tercera fase: la salida.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | **Create new credential** → **WhatsApp API** → *Access Token*: el token · *Business Account ID*: el de API Setup → **Save** | Es **otra** credencial que la del trigger: esta es para **mandar** |
| *Resource* | **Message** | |
| *Operation* | **Send** (viene en *Send Template*: cambialo) | *Send Template* manda una plantilla aprobada. Para contestar con texto libre dentro de las 24 horas, *Send* |
| *Sender Phone Number (or ID)* | El número de prueba, de la lista | Desde qué número de la empresa sale |
| *Recipient's Phone Number* | Arrastrás `telefono` desde *Edit Fields* → `{{ $('Edit Fields').item.json.telefono }}` | A quién: al que escribió. Se busca "atrás" porque el agente solo devuelve `output` |
| *Message Type* | **Text** | |
| *Text Body* | `{{ $json.output }}` | La respuesta del agente |

**Si no llega nada**, en este orden (de lo más probable a lo menos):

1. **¿El flujo está publicado o escuchando?** Sin eso, nadie atiende.
2. **¿La dirección es pública y con https?** Con n8n en Docker: ¿el túnel está abierto? ¿la `WEBHOOK_URL` es la del
   túnel de hoy (cambia cada vez)?
3. **¿La credencial del trigger está bien?** Con el *App Secret* mal, n8n descarta los mensajes **sin avisar**.
4. **¿Hay otro flujo con un WhatsApp Trigger de la misma app?** Solo puede haber uno.
5. **El token** no afecta la entrada: afecta la **respuesta**. Si el mensaje llega y la respuesta no sale, ahí sí es
   el token.


**Las trabas de WhatsApp real** (de la versión anterior de la práctica):


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
#### A-2 · El mismo asistente, por Telegram (flujo `09`)

▶ **Cuándo:** el mensaje de WhatsApp no llega (o la respuesta no sale) y en 2 minutos no lo resolviste. No te quedes
peleando con Meta delante de la clase.

<p style="color:#1a7f37">Meta hoy no colabora. Esto en la vida real pasa, y por eso siempre conviene tener un plan B. Vamos a hacer exactamente el mismo asistente, pero por Telegram. Fíjense que lo único que cambia es por dónde entra el mensaje y por dónde sale: el cerebro, la memoria y el prompt son los mismos. Eso es lo bueno de la arquitectura de tres fases.</p>

**1. El bot (lo tenés de la preparación).** Mostrás en el celular el chat con **@BotFather** y tu bot. Decís:

<p style="color:#1a7f37">En Telegram, los bots se crean hablando con otro bot, BotFather. Le escribo barra newbot, le doy un nombre, un usuario que termine en bot, y me da un token. Ese token es la llave del bot: no se comparte. Sin cuenta de empresa, sin verificar nada.</p>

**2. La entrada.** En el mismo workflow, **borrás** el *WhatsApp Trigger* (o hacés un workflow nuevo: *Asistente de
Telegram*). **Cada campo, con su porqué, está en las tablas del Ejemplo T** ("El eco por otros canales", T-2, T-4 y
T-5): es el mismo trigger, el mismo *Edit Fields* y el mismo nodo de respuesta. Pegás en el chat:

```text
PLAN B · Telegram, la entrada
1. + → buscá "Telegram" → Telegram Trigger → On message
2. Credential → Create new → Telegram API → Access Token: el token de BotFather → Save
3. Trigger On: Message
4. Edit Fields (Edit Fields) → cambiá los campos por estos tres:
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
| 3 · La memoria | *Key:* el `telefono` | *Key:* `{{ $('Edit Fields').item.json.chatId }}` |
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

#### A-3 · El eco por otros canales: Telegram y Slack

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

##### Ejemplo T · El eco por Telegram (flujo 10) (5 min)

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

**T-4 · Edit Fields.** **+** a la derecha del trigger → buscás `edit` → **Edit Fields (Set)** → lo renombrás
**Edit Fields** (doble clic en el título). *Add Field*, tres veces; en cada uno, a la izquierda el nombre y a la
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

**T-5 · La respuesta.** **+** a la derecha de *Edit Fields* → buscás `telegram` → en **Actions**, **Send a text
message**.

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

##### Ejemplo S · El eco por Slack (flujo 11) (15 min)

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
renombrás **Filter**. Dos condiciones (**Add condition**), con *AND*:

```text
{{ $json.bot_id }}   → String → is empty
{{ $json.subtype }}  → String → is empty
```

<p style="color:#1a7f37">Este nodo es el más importante del ejemplo. El bot contesta en el canal. Su respuesta es un mensaje nuevo en el canal. Slack se lo manda a n8n. n8n contesta otra vez. Y así para siempre. Los mensajes de un bot traen un bot id; los de una persona, no. Y subtype aparece cuando un mensaje se edita o se borra. Dejo pasar solo los que no tienen ninguno de los dos: los que escribió una persona.</p>

- Es lo mismo que **Receive Message Status Updates** en WhatsApp: no todo lo que llega es un mensaje para contestar.

**S-5 · Edit Fields.** **+** → **Edit Fields (Set)** → **Edit Fields**, tres campos:

```text
canal    → {{ $json.channel }}
usuario  → {{ $json.user }}
texto    → {{ $json.text }}
```

- En Slack no llega el nombre: llega el **ID** del usuario (algo como `U07ABC123`). Para nombrarlo, Slack tiene un
  truco: escribir `<@U07ABC123>` en el mensaje lo muestra como una mención (*@Arturo*).

**S-6 · La respuesta.** **+** → `slack` → **Actions** → **Send a message** → **Send a message**.

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

---

### Checklist de salida

- [ ] Todos saben cuál de los tres WhatsApp se conecta con n8n, y por qué la app Business no.
- [ ] Saben qué es cada pieza de Meta (portfolio, WABA, app, número) y por qué hoy no se conectó en vivo.
- [ ] Vieron el asistente completo andando con el simulador: el canal, el cerebro, la memoria por teléfono, la voz y
  los porteros.
- [ ] Saben qué revisar cuando "no llega" (¿publicado?, ¿la dirección?) y cuando "no sale" (credenciales).
- [ ] Entienden qué es RAG (pedazos, embeddings, base vectorial, búsqueda por significado) y cuándo conviene.
- [ ] Vieron tres cosas que le suman al asistente: horario, pasar a una persona y herramientas.
- [ ] Saben qué entregan en la Pre-entrega 4 y qué pide la Entrega Final (los 7 requisitos, el repo, la rúbrica).
- [ ] Tienen [entrega-final.md](entrega-final.md) y saben que pasar a un canal real está en el Ejercicio 5 y el anexo.

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
| **RAG** | Que el modelo busque en tus documentos antes de responder. Un examen a libro abierto. | Ejemplo 2. |
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
