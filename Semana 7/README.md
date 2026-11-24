# Semana 7 — Módulo 7: Instalando IA local con Ollama

Fuente: `program-summary.pdf` (Módulo 7). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_7_AI_Automation.pptx` | Las filminas del módulo (30). |
| `Semana 7.docx` | El material de lectura: por qué correr un modelo local, qué es Ollama, cómo elegir el modelo según el hardware, el cuestionario de 4 preguntas, el podcast y el guion sugerido de la clase. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Los ejercicios, **todos para casa** (en clase no hay ejercicios), con el paso a paso de la instalación. Se comparte con los alumnos. |
| [n8n/](n8n/) | Siete workflows, **uno por cada ejemplo de la clase y con el mismo número**: 01 el "hola mundo" con Ollama, 02 local contra nube, 03 las quejas con datos de tarjeta, 04 Ana con el cerebro en Ollama, 05 la IA local lee las encuestas, 06 de un mensaje escrito como sea a la planilla, 07 el router de privacidad. **En clase no se importan: se arman en vivo.** El `.json` queda de respaldo. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, las salidas reales de los flujos y las trabas más comunes. **No se comparte.** |

## La clase y la tarea

**En clase no hay ejercicios.** Se da la teoría de las filminas y se arman en vivo, cada uno en su lugar, los siete
ejemplos de la carpeta [n8n/](n8n/):

| Ejemplo | Flujo | Dónde va | Qué muestra |
|---|---|---|---|
| 1 · Hola Ollama | `01` | Filmina 26 (el puente) | n8n le pregunta a un modelo que corre en tu computadora |
| 2 · Local contra nube | `02` | Filmina 27 (comparar) | El mismo prompt a Ollama y a Gemini, lado a lado |
| 3 · Quejas privadas | `03` | Después de la 27 (es la filmina 12, en vivo) | Datos de tarjeta que no salen de la máquina |
| 4 · Ana con cerebro local | `04` | Después de la 27 (es la filmina 11, en vivo) | El agente de la Semana 6 con Ollama: dónde no alcanza |
| 5 · La IA local lee las encuestas | `05` | Después de la 27 | Clasificar texto privado y decidir con un IF |
| 6 · De un mensaje a la planilla | `06` | Después de la 27 | Pedirle un JSON al modelo y guardarlo en Sheets |
| 7 · El router de privacidad | `07` | Después de la 27, antes de la 28 | Lo sensible al local; lo demás, a la nube |

**Para casa** ([ejercicios-alumnos.md](ejercicios-alumnos.md)):

| Ejercicio | Duración |
|---|---|
| 1 · ¿Local o nube? | 5 min |
| 2 · ¿Qué modelo te entra? | 2 min |
| 3 · Instalá Ollama y rehacé los Ejemplos 1 y 2 | 40 min |
| 4 · Dos tamaños, la misma pregunta | 20 min |
| 5 · Quejas privadas: mejorá la clasificación | 20 min |
| 6 · Tapar los datos antes de la IA | 15 min |
| 7 · Ana con cerebro local, con tus preguntas | 30 min |

## Evaluación

- Esta semana **no tiene pre-entrega**.
- El cuestionario del módulo en la plataforma: 4 preguntas, se aprueba con 70 %, 3 intentos.
- La semana que viene llega la **Pre-entrega 4** (el asistente de WhatsApp). Usa el agente de la Semana 6, con el
  cerebro que cada uno elija: nube o local.

## A tener en cuenta

- **La descarga es el cuello de botella.** El material de lectura propone bajar un modelo de unos 4 GB en vivo. Con
  30 personas en la misma clase y conexiones distintas, no da. Por eso:
  - el día anterior les pedís que **instalen Ollama y descarguen `llama3.2`** (2 GB) en casa. El paso a paso está en
    el Ejercicio 3 de [ejercicios-alumnos.md](ejercicios-alumnos.md);
  - en clase vos mostrás la descarga del chico, `llama3.2:1b` (1,3 GB), para que vean cómo es;
  - el que llega sin nada, sigue en tu pantalla y lo hace en casa.
- **Los modelos de la clase son `llama3.2` (3B) y `llama3.2:1b`.** `llama3.2` es el que el nodo de n8n trae por
  defecto, habla castellano aceptable y sabe usar herramientas (lo necesita la Ana del Ejemplo 4). El de 1B es para
  las máquinas con poca memoria.
- **Qué está probado** (7 de noviembre de 2026, Ollama 0.40 y n8n 2.46, en Docker con 4 núcleos y 4 GB de memoria, sin
  placa de video, algo parecido a una notebook común):
  - los dos modelos responden en castellano. `llama3.2` tardó **167 segundos** la primera vez (cargar el modelo en
    memoria) y **9 segundos** la segunda. El de 1B, **80 segundos** la primera vez, con una respuesta floja (le
    recomendó a un cliente llevar "un casco ligero" a Bariloche): es el ejemplo perfecto de la filmina 11;
  - con los dos modelos cargados a la vez, el de 3B se cortó con `signal: killed`: **no alcanzó la memoria**. Es una
    traba que les va a pasar;
  - Ana (el agente de la Semana 6) con `llama3.2` tardó **más de 5 minutos** en responder una pregunta, usó la
    calculadora pero no consultó el dólar, e **inventó el precio en pesos**. Es la razón para no usar un modelo de 3B
    como cerebro de un agente con varias herramientas (Ejemplo 4);
  - los errores de la práctica son los reales: `localhost` desde Docker da **`fetch failed`**, y un nombre de modelo
    equivocado, **`model 'llama3' not found`**;
  - los cuatro flujos de la carpeta [n8n/](n8n/) se ejecutaron contra ese Ollama. La rama de Gemini del flujo 02 no
    (hace falta una clave): se probó con Ollama en las dos ramas.
  Los tiempos de cada alumno van a ser muy distintos: con una placa de video, mucho más rápido; con 8 GB de memoria y
  el navegador lleno de pestañas, más lento.
- **La dirección de Ollama depende de dónde está n8n** (filmina 19). La mayoría instaló n8n en **Docker Desktop** en la
  Semana 2: para ellos es `http://host.docker.internal:11434`. Los que usan **n8n Cloud** no pueden conectarse a su
  Ollama: hacen los Pasos 1 a 3 y el 4 lo miran en tu pantalla (o instalan n8n en Docker con la guía de la Semana 2).
- **Ollama se instala directo en la computadora, no en Docker.** Así usa la placa de video si la hay, sin
  configuración extra. n8n sigue en Docker, y se hablan a través de `host.docker.internal`.
- **Dos detalles de las filminas:**
  - la filmina 16 dice "Llama 3.1/3.2 8B": el de 8B es **Llama 3.1**; Llama 3.2 viene en 1B y 3B. En el guion se dice
    así;
  - la filmina 11 nombra GPT-4o como modelo de punta: en 2026 ya hay modelos más nuevos. Se dice "los grandes de la
    nube: los de OpenAI, Claude, Gemini".
- **En clase no hay ejercicios: los alumnos miran.** Vos mostrás la terminal y armás los siete ejemplos en vivo,
  despacio y explicando cada clic, sin esperar a que todos lleguen. El que quiere seguir a la par, sigue; el que
  tiene un problema puntual, lo plantea al final. Los ejercicios son la tarea.
- **Esta clase no tiene filmina de "Para practicar".** La tarea va al final, con la filmina 28.
- **En la teoría hay bloques "En la terminal, paso a paso" y "En n8n, paso a paso"**, con los comandos y los clics.
  Están para mostrarlos en un minuto mientras lo contás; los flujos completos se arman en la Sección 03.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En n8n |
|---|---|---|---|
| 0–15 | Apertura y **repaso de la Semana 6** (8 min: qué es un agente, sus piezas, las tools, el manual, lo que cuesta) | 1–5 | — |
| 15–40 | **01 · Por qué correr IA local** | 6–12 | — (la 11 y la 12 se ven en vivo en los Ejemplos 3 y 4) |
| 40–65 | **02 · Ollama y los modelos** | 13–19 | — |
| 65–75 | Break | 20 | — |
| 75–90 | **03 · En la terminal:** el motor, el modelo y sin internet | 21–25 | — (terminal) |
| 90–112 | **03 · En n8n:** el puente y comparar | 26–27 | **Ejemplo 1** (filmina 26) y **Ejemplo 2** (filmina 27) |
| 112–155 | **03 · Cinco ejemplos más con IA local** | — | **Ejemplos 3 a 7** |
| 155–159 | Cómo sigue y la tarea | 28 | — |
| 159–162 | Preguntas y cierre | 29–30 | — |

**Ojo con el tiempo: así completa, son unos 2 h 42 min, no 2 horas.** Armar siete ejemplos en vivo, y con un modelo
local que tarda, lleva más que las filminas solas. Para que entre en 120 minutos, recortá en este orden:
1. El **Ejemplo 7** (el router) pasa a la tarea (−10 min).
2. El **Ejemplo 6** (mensaje a planilla) pasa a la tarea (−10 min).
3. El **Ejemplo 5** (las encuestas) pasa a la tarea (−8 min).
4. El **Paso 3** (sin internet): lo hacés vos solo, en un minuto (−4 min).
5. Los cinco detalles (**filmina 17**): se leen (−2 min).
6. En la **filmina 12**, solo la respuesta en una línea, sin las tres preguntas del material (−2 min).
7. En el **Ejemplo 4**, mandás una sola pregunta y, mientras Ana piensa, seguís hablando (−3 min).

Lo último que se recorta son los Ejemplos 1 y 2 (el puente y la comparación) y el 3 (las quejas): son los que conectan
el módulo con el resto del curso.

---

### Mapa de la clase: el PowerPoint, la terminal y n8n, en orden

Para seguir la clase con las pantallas: qué filmina va (`Modulo_7_AI_Automation.pptx`) y qué se hace en la terminal o
en n8n en cada momento. **No se importa ningún flujo:** todo se arma en vivo.

| Min | Filminas | Tramo | En la terminal o en n8n |
|---|---|---|---|
| 0–15 | 1–5 | Apertura y repaso | Nada |
| 15–40 | 6–12 | 01 · Por qué correr IA local | Nada |
| 40–65 | 13–19 | 02 · Ollama y los modelos | A lo sumo, `ollama list` en la filmina 18 |
| 65–75 | 20 | Break | Dejás abiertos la terminal, el monitor de memoria y n8n |
| 75–80 | 21–23 | Paso 1 · El motor | Terminal: `ollama --version`, `localhost:11434` |
| 80–86 | 24 | Paso 2 · El modelo | Terminal: `ollama pull`, `ollama run`, `ollama ps` |
| 86–90 | 25 | Paso 3 · Sin internet | Terminal, con el WiFi apagado |
| 90–102 | 26 | Paso 4 · El puente | **Ejemplo 1:** workflow nuevo, `Hola Ollama` |
| 102–112 | 27 | Paso 5 · Comparar | **Ejemplo 2:** workflow nuevo, `Local vs nube` |
| 112–120 | — | Las quejas | **Ejemplo 3:** workflow nuevo, `Quejas privadas` |
| 120–127 | — | Ana local | **Ejemplo 4:** copia de `Agente en vivo` (Semana 6), `Ana local` |
| 127–135 | — | Las encuestas | **Ejemplo 5:** workflow nuevo, `Encuestas con IA local` |
| 135–145 | — | Mensaje a planilla | **Ejemplo 6:** workflow nuevo, `De mensaje a planilla` |
| 145–155 | — | El router | **Ejemplo 7:** workflow nuevo, `Router de privacidad` |
| 155–159 | 28 | Cómo sigue y la tarea | Nada |
| 159–162 | 29–30 | Preguntas y cierre | — |

---

### Preparación (antes de la clase)

- [ ] **Ollama instalado en tu computadora** (en PowerShell: `irm https://ollama.com/install.ps1 | iex`, o
  ollama.com → *Download*) y `llama3.2` descargado (`ollama pull llama3.2`). Probá antes la práctica entera. Si algo
  falla, el recuadro "Antes del primer ejemplo", antes del Paso 1.
- [ ] **`llama3.2:1b` sin descargar**, para mostrar la descarga en vivo en el Paso 2 (1,3 GB). Si ya lo tenés,
  borralo antes con `ollama rm llama3.2:1b`.
- [ ] **Tu n8n en Docker prendido**, con la credencial de Gemini (la de las Semanas 2 y 6).
- [ ] **Los siete ejemplos ensayados, armándolos** (no importándolos: en clase se arman en vivo). Lo que necesitan:
  - la credencial **Ollama** con la *Base URL* `http://host.docker.internal:11434` (Ejemplo 1; después se reusa);
  - la credencial de **Gemini** (Ejemplos 2 y 7);
  - el workflow **`Agente en vivo`** de la Semana 6, con Ana completa, y la planilla `Paquetes Rumbo Sur` (Ejemplo 4).
    La credencial de Google Sheets vence a los 7 días: revisala el día anterior;
  - la planilla **`Consultas de la agencia`** de la Semana 4, con `fecha`, `nombre`, `destino`, `personas` en la fila 1
    (Ejemplo 6).
  - Los `.json` de [n8n/](n8n/) son el respaldo: si un ejemplo no te sale en el ensayo, importalo y comparalo con el tuyo.
- [ ] **El Administrador de tareas** a mano: **Ctrl + Shift + Esc** → pestaña **Rendimiento** → **Memoria**. En Mac,
  **Monitor de Actividad** → pestaña **Memoria**.
- [ ] **Una terminal abierta** (PowerShell en Windows, Terminal en Mac) con letra grande: **Ctrl + rueda del mouse**.
- [ ] **El WiFi a mano para apagarlo** en el Paso 3. Si estás por cable, desenchufalo o desactivá el adaptador. Ojo:
  **la clase de Zoom también se corta**. Avisalo antes, y que Romina sostenga el chat esos 30 segundos. Si no querés
  arriesgar, mostrá la prueba grabada en un video corto.
- [ ] **El día anterior**, avisales a los alumnos:
  - que, si quieren seguir a la par, instalen Ollama y descarguen `llama3.2` en casa, con el paso a paso del
    Ejercicio 3 (Pasos 1 y 2). Si no, miran: en clase no hay ejercicios;
  - que se fijen cuánta memoria RAM tiene su computadora: **Configuración → Sistema → Información** en Windows,
    ** → Acerca de esta Mac** en Mac;
  - que entren con n8n prendido.
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) listo para compartir.
- [ ] Avisar que la clase queda grabada.

---

### 0–15 · Apertura y repaso de la Semana 6

**Filmina 1 · Portada** (1 min) — Módulo 7: Instalando IA local con Ollama.

<p style="color:#1a7f37">Bienvenidos al Módulo 7. Hasta hoy, cada vez que usamos IA, el modelo estaba en la computadora de otro: de Google, de OpenAI. Hoy lo bajamos a la nuestra.</p>

Para explicar:
- **"IA local".** **Local** quiere decir "acá, en mi máquina", lo contrario de "en la nube". **La nube** son las
  computadoras de una empresa, en algún lugar del mundo, a las que nos conectamos por internet.
  - *Ejemplo:* Cuando el agente de la semana pasada le preguntaba algo a Gemini, el mensaje viajaba a un centro de
    datos de Google y volvía. Hoy el mensaje no sale de la computadora.
- **"Ollama".** Es el programa que vamos a instalar hoy. El nombre viene de *llama*, el animal, porque el primer modelo
  famoso que se podía bajar se llamaba LLaMA.
  - *Ejemplo:* Instalamos Ollama, le decimos "bajate este modelo", y queda andando en nuestra máquina.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a entender las tres razones para correr un modelo local, qué se gana y qué se pierde, la diferencia entre Ollama y un modelo, qué modelo aguanta cada computadora, y vamos a conectar n8n con nuestro Ollama.</p>

Para explicar cada objetivo:
- **"Explicar las tres razones para correr un modelo local: costo, privacidad e independencia."** Son los tres
  argumentos que van a usar cuando alguien les pregunte "¿y por qué no usás ChatGPT?".
  - *Ejemplo:* Una clínica: privacidad. Una empresa que procesa miles de textos por día: costo. Un pueblo con
    internet que se corta: independencia.
- **"Reconocer el trade-off entre capacidad del modelo y control sobre los datos."** Un **trade-off** es un "toma y
  daca": para ganar algo, se resigna otra cosa.
  - *Ejemplo:* Ganás que los datos no salgan de tu máquina; perdés algo de inteligencia, porque el modelo que te
    entra es más chico.
- **"Distinguir qué hace Ollama de qué es un modelo."** Es la confusión número uno del módulo. Ollama es el programa;
  el modelo es el archivo con lo que la IA aprendió.
  - *Ejemplo:* Instalar Ollama es como instalar Spotify: tenés la aplicación, pero sin canciones no suena nada.
- **"Elegir el tamaño de modelo que tu hardware puede sostener."** **Hardware** es la parte física de la
  computadora: el procesador, la memoria, el disco, la placa de video.
  - *Ejemplo:* Con 8 GB de memoria, un modelo de 3B. Con 32 GB y una buena placa de video, uno de 14B.
- **"Conectar n8n con una instancia local de Ollama."** Una **instancia** es una copia funcionando de un programa,
  como en la Semana 2 con n8n.
  - *Ejemplo:* Al final de la clase, un flujo de n8n le pregunta algo a la IA y la respuesta sale de tu
    computadora, no de Google.

**Filmina 3 · Agenda** (1 min)

<p style="color:#1a7f37">Primero, dónde quedamos. Después, por qué correr un modelo local. Después, qué es Ollama y cómo elegir el modelo. Break. Y la práctica: lo instalamos, lo probamos sin internet y lo conectamos con n8n.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 6** (8 min, sin filmina) — antes de pasar a la filmina 5.

Hoy se cambia **una sola pieza** del agente de la semana pasada: el cerebro. Para que se entienda qué cambia y qué
no, el repaso recorre el agente pieza por pieza. Si alguien no se acuerda de algo, el detalle está en
[el guion de la Semana 6](../Semana%206/README.md).

<p style="color:#1a7f37">Antes de arrancar, repasemos la clase pasada, porque hoy le cambiamos el cerebro a ese mismo agente. Cinco temas, rapidito.</p>

**Repaso 1 · Qué es un agente (2 min)**

```text
Flujo fijo:  nosotros decidimos los pasos al armarlo        → siempre el mismo camino
Chain:       un solo paso con IA, siempre igual              → resumir, clasificar, traducir
Agente:      el modelo decide qué herramientas usar          → razona, actúa, observa, repite
```

<p style="color:#1a7f37">Uno. Un agente es un sistema que recibe un pedido, decide qué hacer y lo hace, usando herramientas. La diferencia con un flujo fijo es quién decide: en el flujo, nosotros; en el agente, el modelo, mientras corre. Y lo que repite es un ciclo: razona, actúa, mira el resultado, y vuelve a empezar hasta tener la respuesta.</p>

- **Chain o agente:** si la tarea es una sola y siempre igual, chain. Si hay que decidir, usar herramientas o
  conversar, agente.
  - *Ejemplo:* Clasificar una queja: chain. Contestar "¿cuánto sale Bariloche en pesos?" buscando en la planilla:
    agente.

**Repaso 2 · Las piezas: cerebro, diario, manos y manual (2 min)**

```text
                 ┌──────────────────┐
Mensaje del chat │     AI Agent     │   ← manual: el system prompt
                 └──┬──────┬─────┬──┘
           cerebro  │ diario│ manos│
                    ▼      ▼     ▼
                 Gemini  Memoria  consultar_paquetes · cotizacion_dolar · calculadora
                   ↑
          HOY SE CAMBIA ESTA PIEZA (y solo esta)
```

<p style="color:#1a7f37">Dos. El agente tiene tres piezas enchufadas abajo, y un manual adentro. El cerebro, que era Gemini. El diario, la memoria, para que se acuerde de la charla. Las manos, las herramientas: la planilla, el dólar y la calculadora. Y el manual, el system prompt. Hoy vamos a desenchufar el cerebro y enchufar otro, que corre en nuestra computadora. Todo lo demás queda igual.</p>

- **El cerebro es un sub-nodo: se cambia sin tocar lo demás.** Las herramientas, la memoria y el manual no saben
  qué cerebro tienen enchufado.

**Repaso 3 · Las herramientas: lo que el modelo lee de ellas (1 min)**

<p style="color:#1a7f37">Tres. El modelo no ve cómo está armada una herramienta por dentro: solo lee su nombre y su descripción. Si la descripción es mala, la elige mal. Y los datos que necesita, como el destino, los completa él, con fromAI. Esto hoy importa mucho: elegir bien la herramienta es una habilidad del modelo, y los modelos chicos la tienen menos.</p>

- **Lo vamos a ver hoy:** Ana con un modelo chico usa peor las herramientas que con Gemini. Por eso, en local, conviene
  usar la IA para tareas cortas y de un solo paso.

**Repaso 4 · El manual: el system prompt (1 min)**

```text
ROL · ALCANCE · HERRAMIENTAS (cuándo usar cada una) · TONO · FORMATO · LÍMITES (guardrails)
```

<p style="color:#1a7f37">Cuatro. El system prompt es el manual de operaciones: quién es, de qué puede hablar, cuándo usar cada herramienta, cómo contesta, y qué no puede hacer nunca. Por ejemplo: "nunca confirmes una reserva". Ese manual sirve igual con cualquier cerebro; pero un cerebro chico respeta menos reglas, así que hoy el manual tiene que ser más corto y más claro.</p>

**Repaso 5 · Lo que cuesta un agente (1 min)**

<p style="color:#1a7f37">Cinco. Cada vuelta del ciclo es un pedido al modelo. "¿Cuánto sale Bariloche en pesos?" son cuatro vueltas: la planilla, el dólar, la calculadora y la respuesta. Cuatro pedidos. En la nube, cada pedido se paga, o choca con el límite del plan gratis: el error 429. En local no se paga, pero cada pedido lo hace nuestra máquina, y eso hoy lo vamos a sentir: tarda.</p>

- **Y la pregunta de hoy:** cada uno de esos cuatro pedidos viaja a los servidores de Google, con lo que escribió el
  cliente. ¿Está bien eso? Depende de qué datos son. De eso se trata la clase.

**Pregunta rápida para el chat (1 min)** — la pegás, contestan mientras pasás a la filmina 5, no esperás a todos:

```text
REPASO · Contestá con el número y la respuesta
1. ¿Quién decide qué herramienta usar: nosotros o el modelo?
2. ¿Cómo se llama la pieza que hace que el agente se acuerde de lo que le dijiste antes?
3. ¿Qué lee el modelo de una herramienta para decidir si usarla?
4. "Nunca confirmes una reserva": ¿en qué pieza va?
5. Si un agente da 429 con Gemini gratis, ¿qué pasó?
```

Respuestas: **1** El modelo. **2** La memoria (el diario). **3** Su nombre y su descripción. **4** En el system prompt
(es un límite, un *guardrail*). **5** Se pasó del límite de pedidos por minuto: hay que esperar.

<p style="color:#1a7f37">Hoy le cambiamos el cerebro a ese agente. Y la pregunta es: ¿dónde corre ese cerebro, y qué datos le mandamos? Vamos.</p>

**Filmina 5 · ¿Dónde quedamos? Dónde corre tu modelo** (3 min)

<p style="color:#1a7f37">En el Módulo 6 diseñaron un agente con cerebro, memoria, herramientas y límites. La pregunta que quedó es: ese cerebro, ¿dónde corre? Hasta ahora, en la API de otra empresa. Eso implica que pagan por token, que dependen de que el proveedor esté funcionando y que sus datos salen de su máquina. Hoy bajamos el modelo a su propia computadora y lo enchufamos a n8n.</p>

Para explicar:
- **"En el módulo 6: diseñaste un agente con cerebro, memoria, herramientas y límites."**
  - *Ejemplo:* Ana: cerebro Gemini, memoria de 10 mensajes, tres herramientas y un system prompt con sus límites.
- **"La pregunta que quedó: ese cerebro, ¿dónde corre? Hasta ahora, en la API de un tercero."** **Correr** un
  programa es tenerlo funcionando. Un **tercero** es otra empresa, que no somos ni nosotros ni el cliente. Lo de la
  API lo vimos en la Semana 4: el nodo de Gemini le manda un pedido HTTP a Google.
  - *Ejemplo:* Cada mensaje a Ana viaja a `generativelanguage.googleapis.com`, una dirección de Google, y vuelve con
    la respuesta.
- **"Lo que eso implica: pagás por token, dependés de que el proveedor esté arriba, y tus datos salen de tu
  infraestructura."** Tres cosas, que son las tres razones de la Sección 01:
  - un **token** es un pedacito de texto, más o menos tres cuartos de una palabra; las APIs cobran por cantidad de
    tokens;
  - **estar arriba** es estar funcionando (lo contrario de "estar caído");
  - **infraestructura** son las máquinas y sistemas propios.
  - *Ejemplo:* Si Google tiene un problema, Ana deja de responder. Y cada consulta de un cliente, con su nombre y su
    teléfono, pasa por los servidores de Google.
- **"Hoy: bajamos el modelo a tu propia máquina y lo enchufamos a n8n."**
  - *Ejemplo:* El mismo nodo Basic LLM Chain de la semana pasada, con un Ollama Chat Model abajo en vez de Gemini.

---

### 15–40 · Sección 01 · Por qué correr IA local

**Filmina 6 · Separador "01: Por qué correr IA local"**

<p style="color:#1a7f37">Empecemos por el por qué. Si no tienen claro para qué sirve, instalar un modelo es solo un experimento.</p>

#### Filmina 7 · Tres razones para bajarlo: costo, privacidad e independencia (3 min)

<p style="color:#1a7f37">Tres razones. Costo: las APIs cobran por token, y un modelo local no cobra por pedido; el único costo es la máquina. Privacidad: los datos nunca salen de tu computadora. E independencia: no dependés de que otra empresa esté funcionando, de sus precios ni de sus límites, y podés trabajar sin internet.</p>

Para explicar:
- **"Costo: las APIs cobran por token, de entrada y de salida. Un modelo local no tiene costo por request: el único
  costo es el hardware."** **Entrada** es lo que le mandamos (el prompt, el system prompt, la memoria); **salida** es
  lo que responde. Un **request** es un pedido, como en la Semana 4.
  - *Ejemplo:* Resumir mil mails por día en la nube se paga mil veces. En local, la computadora trabaja mil veces,
    pero no llega ninguna factura.
  - *Otro ejemplo:* Una inmobiliaria quiere que la IA escriba la descripción de sus 400 propiedades, y rehacerla cada
    vez que cambia un precio. En la nube, cada versión se paga. En local, la pueden rehacer 20 veces hasta que les
    guste.
- **"Privacidad: los datos nunca salen de tu infraestructura. Crítico si el flujo procesa información sensible."**
  **Información sensible** es la que puede hacer daño si se filtra: salud, plata, documentos, datos personales.
  - *Ejemplo:* Un mail con el número de tarjeta de un cliente. Con Gemini, viaja a Google. Con Ollama, no sale de tu
    computadora.
  - *Otro ejemplo:* Un estudio de abogados quiere resumir los mails con sus clientes. El secreto profesional le impide
    mandárselos a otra empresa; con un modelo local, no se los manda a nadie.
- **"Independencia: no dependés de un proveedor externo, ni de su disponibilidad, sus precios o sus límites. Y podés
  operar sin internet."** **Proveedor** es la empresa que da el servicio.
  - *Ejemplo:* Los proveedores anuncian fechas en las que un modelo deja de funcionar, y los flujos que lo usan hay
    que cambiarlos. Un modelo descargado, en cambio, no se lo pueden apagar a nadie.
  - *Otro ejemplo:* Google ya anunció que el modelo gemini-3.1-flash-lite se deja de ofrecer el 7 de mayo de 2027:
    cada flujo que lo use va a haber que cambiarlo. El archivo de llama3.2 que bajaron hoy va a seguir andando igual
    dentro de cinco años.

**Las tres razones, en una tabla** (para decirlo una vez):

| | En la nube (Gemini, ChatGPT, Claude) | Local (Ollama) |
|---|---|---|
| Costo | Por cada pedido, según los tokens | Cero por pedido; se paga la máquina y la luz |
| Privacidad | Los datos viajan al proveedor | Los datos no salen de tu computadora |
| Independencia | Si el proveedor se cae o cambia, te afecta | Funciona aunque no haya internet |
| Inteligencia | Modelos enormes, los mejores | Modelos chicos, más limitados |

La última fila es la contrapartida de la filmina 11.

#### Filmina 8 · El costo: por token, o una sola vez (4 min)

<p style="color:#1a7f37">Las APIs cobran por token, sumando entrada y salida. En flujos que procesan mucho texto, el costo crece en línea recta con el uso: el doble de textos, el doble de plata. Un modelo local no cobra por pedido: una vez descargado, preguntar es gratis. El único costo es la máquina. Y donde más se nota es al probar: pueden ejecutar un flujo cien veces sin gastar un peso.</p>

Para explicar:
- **"Cómo cobran las APIs: por token, sumando entrada y salida."** La entrada no es solo la pregunta del usuario:
  también va el system prompt entero y la memoria, en **cada** pedido.
  - *Ejemplo:* El system prompt de Ana tiene unas 300 palabras. Viaja (y se cobra) en cada vuelta del ciclo, aunque el
    cliente solo haya escrito "hola".
  - *Otro ejemplo:* Con memoria, en el décimo mensaje de una conversación viajan otra vez los nueve anteriores: la
    entrada crece en cada vuelta. En local, da lo mismo que sean 10 o 100.
- **"En workflows que procesan grandes volúmenes de texto, el costo escala linealmente con el uso."** **Escala
  linealmente** quiere decir que crece en la misma proporción: el doble de uso, el doble de costo. No hay descuento
  por cantidad.
  - *Ejemplo:* Si resumir 100 contratos por mes cuesta X, resumir 1.000 cuesta 10 veces X.
  - *Otro ejemplo:* Una tienda que resume 50 reseñas por día casi no paga nada. Si crece a 5.000 por día, la cuenta de
    la nube se multiplica por 100; la computadora con Ollama es la misma.
- **"El modelo local: no tiene costo por request. Una vez descargado, las inferencias son gratuitas."** **Inferencia**
  es cada vez que el modelo genera una respuesta. Es la palabra técnica para "usar el modelo" (lo contrario de
  **entrenarlo**, que es cuando aprende).
  - *Ejemplo:* Le preguntás 500 veces a `llama3.2` en tu máquina. No hay ninguna cuenta que crezca.
  - *Otro ejemplo:* En la tarea, con las quejas del Ejemplo 3, cada uno va a ejecutar el flujo 10 o 20 veces ajustando el
    prompt. Con Ollama no gastan nada ni chocan con ningún límite.
- **"El único costo: el hardware."** Y la luz. Y si el modelo es grande, una computadora más cara.
  - *Ejemplo:* Una notebook con 16 GB de RAM ya corre un modelo de 7B u 8B. Una placa de video potente cuesta como
    muchos meses de API: conviene si se va a usar mucho.
  - *Otro ejemplo:* Para esta clase, la máquina ya la tenían: la misma notebook. El costo real fueron 2 GB de disco y
    la paciencia de esperar la respuesta.
- **"Dónde más brilla: en prototipado y testing. Podés iterar un workflow cientos de veces sin gastar un centavo en
  tokens."** **Prototipar** es armar una primera versión para probar la idea. **Iterar** es repetir: probar, ajustar,
  volver a probar.
  - *Ejemplo:* Mientras arman la pre-entrega, prueban el flujo 50 veces con Ollama. Cuando funciona, si quieren, le
    cambian el cerebro a uno de la nube.
  - *Otro ejemplo:* Es lo que hacemos con Ana: el flujo es el mismo y se cambia solo el sub-nodo del cerebro. Se
    prueba gratis con Ollama y se publica con el que mejor responde.

**Ejemplo: ¿cuándo pesa el costo?**

❌ Mal: "lo local siempre es más barato".

```text
Un flujo que se ejecuta 3 veces por semana para resumir un mail.
→ En la nube cuesta centavos por mes (o nada, con el plan gratis).
→ Comprar una computadora más potente para eso no tiene sentido.
```

✅ Bien: pesa cuando el volumen es grande o hay que probar mucho.

```text
Un flujo que clasifica 5.000 mensajes por día, o un prototipo que se ejecuta 200 veces mientras se arma.
→ En la nube, la cuenta crece todos los días.
→ En local, la máquina ya está: cada pedido es gratis.
```

#### Filmina 9 · La privacidad: los datos no salen de tu red (4 min)

<p style="color:#1a7f37">Con un modelo local, los datos nunca salen de tu infraestructura. Es crítico con historias clínicas, contratos, datos de clientes o código propio. Permite cumplir con las leyes de protección de datos sin depender de lo que diga el contrato de otra empresa. Y es la opción natural donde no hay internet o donde la empresa tiene reglas estrictas sobre la información.</p>

Para explicar:
- **"Qué garantiza: con un modelo local, los datos nunca salen de tu infraestructura."** Ni el prompt, ni el texto que
  se analiza, ni la respuesta. Todo pasa adentro de la memoria de tu computadora.
  - *Ejemplo:* Le pedís a Ollama "resumí este contrato". El contrato va de n8n a Ollama, los dos en tu máquina. Nada
    cruza internet.
  - *Otro ejemplo:* Lo van a ver en el Paso 3: apagamos el WiFi y el modelo sigue contestando. Si no hay internet, no
    hay por dónde salir.
- **"Cuándo es crítico: historias clínicas, contratos, datos de clientes, código propietario."** **Código
  propietario** es el código de una empresa, que no es público y vale plata.
  - *Ejemplo:* Una historia clínica dice qué enfermedades tiene alguien. Si se filtra, el daño no se arregla.
  - *Otro ejemplo:* Una consultora de recursos humanos analiza CVs y notas de entrevistas: hay datos de salud, de
    familia y de sueldo.
- **"Lo que habilita: cumplir con regulaciones de protección de datos sin depender de los términos de servicio de un
  tercero."** **Regulaciones** son leyes y normas. En la Argentina rige la **Ley 25.326 de Protección de Datos
  Personales**, y los datos de salud son "sensibles": tienen más protección. Los **términos de servicio** son el
  contrato que aceptamos al usar un servicio (el "Acepto" que nadie lee).
  - *Ejemplo:* Una clínica que manda historias clínicas a una IA en la nube depende de lo que esa empresa haga con
    ellas. Con un modelo local, la pregunta ni se plantea.
  - *Otro ejemplo:* Un estudio contable lee los recibos de sueldo de sus clientes (CUIL, sueldo, embargos). Con
    Ollama, la IA los ordena sin que salgan del estudio.
- **"El escenario natural: entornos sin conexión a internet, o corporativos con políticas estrictas de manejo de
  información."** **Corporativo** es de una empresa grande. **Políticas** son las reglas internas.
  - *Ejemplo:* Muchos bancos prohíben pegar datos de clientes en ChatGPT. Con un modelo en un servidor del propio
    banco, se puede usar IA sin romper la regla.
  - *Otro ejemplo:* Un programador en una empresa que no deja subir su código a la nube usa un modelo local para que
    le explique una función o le encuentre un error.

**Ejemplo: privacidad de verdad**

❌ Mal: creer que alcanza con pedirle a la IA de la nube que no guarde nada.

```text
Prompt a un modelo en la nube:
"No guardes estos datos. Resumí la historia clínica de Juan Pérez, DNI 30.123.456: diabetes tipo 2, ..."
→ Los datos ya viajaron. Lo que pase con ellos depende del proveedor, no del prompt.
```

✅ Bien: que los datos no viajen.

```text
El mismo prompt a llama3.2 en Ollama, en la computadora de la clínica.
→ La historia clínica no sale de la máquina. No hay nada que pedir.
```

#### Filmina 10 · La independencia: que nadie te apague el flujo (3 min)

<p style="color:#1a7f37">Con un modelo local, te independizás de que otra empresa esté funcionando. Dejan de afectarte las caídas, los cambios de precio, los modelos que se dejan de ofrecer y los límites de pedidos por minuto. Podés trabajar sin internet. En resumen: pasás de usar la IA de otro a ser dueño de tu propia IA.</p>

Para explicar:
- **"De qué te independizás: de la disponibilidad de un proveedor externo."** **Disponibilidad** es estar
  funcionando cuando lo necesitás.
  - *Ejemplo:* Si la API de Google se cae un viernes a la noche, Ana deja de atender. Con un modelo local, sigue,
    mientras tu computadora esté prendida.
  - *Otro ejemplo:* Cuando un servicio de IA de la nube tiene un corte (pasa varias veces por año), todos los flujos
    que lo usan dan error al mismo tiempo. Los locales ni se enteran.
- **"Qué deja de afectarte: caídas de servicio, cambios de precio, deprecación de modelos, límites de rate."**
  **Deprecación** es cuando una empresa anuncia que un modelo se deja de ofrecer. **Límites de rate** ("de ritmo")
  son los topes de pedidos por minuto: el **429** de la Semana 4.
  - *Ejemplo:* En la Semana 6, con el plan gratis de Gemini, un agente podía dar 429 por hacer muchos pedidos
    seguidos. Ollama no tiene ese límite: el único límite es la velocidad de tu máquina.
  - *Otro ejemplo:* Clasificar 3.000 facturas de golpe con el plan gratis de la nube choca con el límite por minuto.
    Con Ollama tarda, pero no se corta.
- **"Podés operar sin internet: valioso para demos, entornos de desarrollo aislados o lugares con conectividad
  limitada."** Una **demo** es una demostración. Un **entorno aislado** es una computadora que, a propósito, no está
  conectada a internet. **Conectividad limitada** es internet que anda mal o se corta.
  - *Ejemplo:* Mostrarle tu automatización a un cliente en un lugar sin WiFi. O un campo en el interior, con internet
    que va y viene.
  - *Otro ejemplo:* Un guía de turismo: un asistente en la notebook, en la montaña, sin señal.
- **"El resumen: pasás de consumidor de APIs a dueño de tu propia infraestructura de IA."**
  - *Ejemplo:* Es la diferencia entre alquilar y tener la casa propia: más control, pero el mantenimiento es tuyo.
  - *Otro ejemplo:* Si mañana sale un modelo local mejor, lo bajan con `ollama pull` y cambian el nombre en el nodo.
    Nadie se lo impone ni se lo saca.

#### Filmina 11 · La contrapartida: nada de esto es gratis (3 min)

<p style="color:#1a7f37">Ahora la contra. Los modelos que entran en una computadora común son más chicos. Y en tareas de razonamiento complejo rinden menos que los grandes de la nube, los de OpenAI, Claude o Gemini. Es un toma y daca: costo y privacidad de un lado, inteligencia del otro. Depende del caso, no hay una respuesta única.</p>

Para explicar:
- **"El límite del hardware de consumo: los modelos que corren ahí suelen ser más pequeños."** **Hardware de
  consumo** es el que compra cualquier persona: una notebook, una PC de escritorio. Lo contrario son los servidores
  de las empresas de IA, con placas de video que cuestan miles de dólares cada una.
  - *Ejemplo:* En una notebook de 8 GB entra un modelo de 3B. Los de la nube se estiman en cientos de miles de
    millones de parámetros: cien veces más grandes, o más.
  - *Otro ejemplo:* Probado para esta clase (Paso 5): a la familia que quería ir a Salta, llama3.2 le recomendó un
    "Lago Milicia" que no existe y "ropa fresca" para julio, que allá es invierno. En otra prueba ubicó el Teatro
    Colón en Salta. (Cuando ensayes el Paso 5, anotá acá qué contestó Gemini con la misma pregunta.)
- **"Dónde se nota: en tareas de razonamiento complejo tienden a rendir por debajo de los modelos de punta en la
  nube."** **Razonamiento complejo** es lo que necesita varios pasos: resolver un problema, planificar, usar bien
  varias herramientas. **De punta** es "lo mejor que hay hoy".
  - *Ejemplo:* Probado para esta clase: le pedimos a `llama3.2:1b` qué llevar a Bariloche en invierno, y recomendó
    "un casco ligero" y "un reloj suave y resistente al frío". El de 3B respondió bien: ropa abrigada, botas de nieve.
  - *Otro ejemplo:* Probado el 24/11/2026: Ana con el cerebro en Ollama (flujo 04) tardó más de 5 minutos, no consultó
    el dólar e inventó "$ 1.900.000". La misma Ana con Gemini, en la Semana 6, usó la planilla, el dólar y la
    calculadora, y dio $ 3.011.500 en segundos.
- **"Los de punta: GPT-4o, Claude, Gemini."** Son ejemplos de modelos grandes de la nube. (La filmina nombra GPT-4o,
  que ya tiene versiones más nuevas: lo importante es la idea.)
- **"El trade-off: costo y privacidad de un lado, capacidad bruta del modelo del otro. Depende del caso, no hay una
  respuesta única."** **Capacidad bruta** es la inteligencia pura del modelo.
  - *Ejemplo:* Clasificar mails en "urgente" o "no urgente": un modelo local alcanza. Analizar un contrato de 40
    páginas y detectar cláusulas peligrosas: conviene uno grande, si la privacidad lo permite.
  - *Otro ejemplo:* Probado el 24/11/2026 con las quejas del Ejemplo 3: llama3.2 no repitió ningún número de tarjeta
    (la privacidad, bien), pero clasificó las tres quejas como "Cobro", incluso la compra en Miami que el cliente no
    hizo, que es un fraude (entender, mal).

**Ejemplo: elegir según la tarea**

❌ Mal: elegir siempre lo mismo.

```text
"Todo con Ollama, porque es gratis."     → el agente con 5 herramientas se equivoca seguido.
"Todo con la nube, porque es mejor."     → las historias clínicas viajan a otra empresa.
```

✅ Bien: elegir por paso.

```text
Paso con datos sensibles y tarea simple (clasificar, resumir corto)  → local.
Paso sin datos sensibles y tarea difícil (razonar, varias herramientas) → nube.
```

Por qué: en un mismo flujo puede haber pasos de los dos tipos. Es el criterio que arman en el Paso 5 de la práctica.

**¿Qué tan buena es la IA local? Lo que pasó al armar esta clase** (para mostrarlo en pantalla, 2 min)

Todo con `llama3.2` (3B) en una computadora común, sin placa de video, contra Gemini flash en la nube. **La columna
de Gemini se completa con tu ensayo:** al armar la clase solo se probó Gemini con Ana (Semana 6).

| Tarea | Local (Ollama, `llama3.2`) | Nube (Gemini) | ¿Alcanza lo local? |
|---|---|---|---|
| Qué llevar a Bariloche en invierno (flujo 01) | Bien: ropa abrigada, botas, guantes. 45 a 71 segundos la primera vez | (tu ensayo) | ✅ Sí |
| Lo mismo, con el modelo de 1B | "Un casco ligero" y "un reloj resistente al frío" | — | ❌ No: demasiado chico |
| Recomendar Salta a una familia (Paso 5) | 26 segundos. Inventó un lago, "ropa fresca" en invierno, y se olvidó del nene | (tu ensayo del Paso 5) | ❌ No, para recomendar lugares |
| Clasificar quejas con tarjetas (flujo 03) | No repitió ninguna tarjeta, pero puso las tres en "Cobro" | No se probó (los datos irían a Google) | ⚠️ A medias: mejor prompt o un modelo más grande |
| Ana, con 3 herramientas (flujo 04) | Más de 5 minutos, no usó el dólar, precio inventado | Las tres herramientas y $ 3.011.500, bien calculado (ensayo de la Semana 6) | ❌ No |

<p style="color:#1a7f37">Miren la tabla. Donde la tarea es corta y cerrada, una respuesta simple, lo local anda. Donde hay que saber cosas del mundo o encadenar herramientas, se cae: inventa, tarda, se saltea pasos. No es que la IA local sea mala: es que es chica. Un modelo de 3 mil millones de parámetros contra uno cien veces más grande.</p>

- **La regla que sale de la tabla:** local para tareas **cortas, cerradas y privadas** (clasificar, extraer datos,
  resumir corto); nube para **razonar, saber del mundo o usar varias herramientas**.
- **Con una máquina mejor, la tabla cambia.** Con 16 GB de RAM entra un modelo de 7B u 8B (`qwen2.5:7b`,
  `llama3.1:8b`), y con una placa de video, uno de 14B o más: ahí lo local se acerca bastante a la nube en tareas
  medianas, y responde en segundos. Lo de la tabla es lo peor posible: el modelo más chico útil, sin placa.
  - *Ejemplo:* Una empresa que pone un servidor con placa de video y un modelo de 70B tiene IA privada de muy buen
    nivel. Cuesta lo que muchos meses de API: conviene si la usa mucho.


#### Filmina 12 · Para pensar: el banco y la clínica (3 min)

<p style="color:#1a7f37">Trabajás para un banco y tenés que resumir quejas de clientes que incluyen números de tarjeta. O para una clínica que tiene prohibido por ley subir historias clínicas a la nube. ¿Por qué usarías Ollama y no un modelo en la nube? Piénsenlo un segundo... En los dos casos, la respuesta es la misma: los datos no pueden salir. Si la ley prohíbe subirlos, la única forma de usar IA es que el modelo esté adentro.</p>

Para explicar:
- **La dinámica.** Una pregunta que planteás y respondés vos (en clase no hay ejercicios). El material de lectura
  propone hacerlo en grupos de 3 durante 20 minutos: queda como Ejercicio 1 de la tarea.
- **El caso del banco lo armamos en n8n** en el Ejemplo 3, después de la práctica: tres quejas con números de
  tarjeta, que un modelo local clasifica sin que salgan de la computadora. Decilo: "esto lo vamos a ver andando".
  - *La respuesta, en una línea:* "La clínica: si la ley prohíbe subir los datos, la única forma de usar IA es que el
    modelo esté adentro de la clínica."
- **Las tres preguntas del material de lectura** (si sobra un minuto, las tirás en voz alta):
  - ¿Qué tamaño de modelo elegirían? → Para resumir, alcanza con uno de 7B u 8B; mejor que el de 3B si hay plata para
    la máquina.
  - ¿Qué hardware mínimo necesitarían? → Una computadora con 16 GB de RAM, o mejor, una placa de video de 8 GB o
    más.
  - ¿Cómo garantizarían que n8n no mande datos afuera? → Que n8n también esté en una máquina de la clínica, que el
    único modelo conectado sea el de Ollama, y que no haya nodos que manden los datos a otro servicio (Gmail, Slack).
  - *Ejemplo:* Un flujo con Ollama que, al final, manda el resumen por Gmail, saca los datos igual. La privacidad es
    de todo el flujo, no solo del modelo.

<p style="color:#1a7f37">Y una trampa: que el modelo sea local no alcanza si el flujo, después, manda el resumen por mail a una cuenta de Gmail. La privacidad es del flujo entero, no de un nodo.</p>

---

### 40–65 · Sección 02 · Ollama y los modelos

**Filmina 13 · Separador "02: Ollama y los modelos"**

<p style="color:#1a7f37">Ya sabemos por qué. Ahora, con qué: Ollama, los modelos y cómo elegir uno que nuestra computadora aguante.</p>

#### Filmina 14 · ¿Qué es Ollama? El reproductor, no la canción (3 min)

<p style="color:#1a7f37">Un modelo de lenguaje es un archivo gigante con lo que la IA aprendió. Para usarlo hace falta algo que lo cargue en la memoria y te deje preguntarle. Eso es Ollama: un programa que descarga, guarda y hace funcionar modelos de IA en tu propia computadora, sin depender de internet ni de una empresa. El modelo es la canción; Ollama es el reproductor.</p>

Para explicar:
- **"El problema: un modelo de lenguaje es un archivo gigante con conocimiento entrenado. Para usarlo hace falta algo
  que lo cargue en memoria y te deje preguntarle."** **Cargar en memoria** es pasar el archivo del disco a la
  **memoria RAM**, la memoria rápida de la computadora, la que se usa mientras algo está abierto. Un modelo no se
  puede usar desde el disco: es demasiado lento.
  - *Ejemplo:* Es como un libro: guardado en la biblioteca (el disco) no sirve; para leerlo, hay que tenerlo abierto
    sobre la mesa (la RAM). Y un libro gigante necesita una mesa grande.
- **"Eso es Ollama: un programa que descarga, guarda y hace funcionar modelos de IA en tu propia computadora."** Tres
  verbos: **descarga** (los baja de internet), **guarda** (los deja en el disco, listos) y **hace funcionar** (los
  carga y responde las preguntas).
  - *Ejemplo:* `ollama pull llama3.2` lo descarga y lo guarda; `ollama run llama3.2` lo hace funcionar.
- **"Sin depender de: internet ni de una empresa externa."** Internet hace falta una sola vez, para la descarga.
  - *Ejemplo:* Es como un mapa del GPS descargado: hace falta internet para bajarlo, pero después anda en el medio de
    la ruta sin señal.
- **"La analogía: el modelo es la canción, el archivo. Ollama es el reproductor que la hace sonar."**
  - *Ejemplo:* Con Spotify instalado pero sin canciones, no suena nada. Con Ollama instalado pero sin modelos, no
    responde nada: es el error de la pregunta 4 del cuestionario.

#### Filmina 15 · ¿Qué es un modelo? Un archivo pesado con lo aprendido (3 min)

<p style="color:#1a7f37">El modelo contiene todo lo que la IA aprendió en su entrenamiento. Pesa varios gigas. Su tamaño se mide en parámetros: cuantos más, más capaz, pero más pesado de correr. Y hay de distintas especialidades: generalistas, para programar, para conversar.</p>

Para explicar:
- **"Qué contiene: todo lo que la IA aprendió durante su entrenamiento."** El **entrenamiento** es el proceso en el
  que la empresa le mostró al modelo enormes cantidades de texto. Lo que "aprendió" quedó guardado como números.
  - *Ejemplo:* El modelo no tiene adentro una copia de Wikipedia. Tiene millones de números que, combinados, le
    permiten escribir sobre lo que leyó.
- **"Cuánto pesa: varios GB. No es poco."** Un **GB** (gigabyte) es una unidad de tamaño de archivos: una película
  en buena calidad pesa unos 2 GB.
  - *Ejemplo:* `llama3.2` pesa 2 GB; `llama3.2:1b`, 1,3 GB. Uno de 70B pesa más de 40 GB.
- **"Su tamaño: se mide en parámetros. Cuanto más grande, más capaz, pero más pesado de correr."** Los **parámetros**
  son esos números internos. Se cuentan en miles de millones: la **B** viene de *billion*, que en inglés son mil
  millones.
  - *Ejemplo:* `llama3.2` tiene 3B: 3.200 millones de parámetros. Le podés preguntar a Ollama con `ollama show
    llama3.2` y te lo dice: *parameters 3.2B*.
- **"Su especialidad: hay generalistas, otros optimizados para código, otros para conversación."** **Optimizado** es
  "ajustado para hacer algo mejor".
  - *Ejemplo:* `llama3.2` es generalista. `qwen2.5-coder` está entrenado para programar. Hay modelos que también
    entienden imágenes.

#### Filmina 16 · Elegir por hardware: el límite es la memoria, no el saber (5 min)

<p style="color:#1a7f37">Esta es la tabla para elegir. De 1 a 3B, entre 4 y 8 GB de memoria: una notebook común. De 7 a 8B, entre 8 y 16 GB: una notebook con 16 de RAM. De 13 a 14B, entre 16 y 24: una PC con buena placa de video. Y de ahí para arriba, equipos de gama alta o servidores. El límite no es cuánto sabe el modelo, es cuánta memoria tenés.</p>

Para explicar:
- **La tabla, fila por fila** (la de la filmina, con un ejemplo de qué se puede hacer con cada una):

| Tamaño | Memoria | Equipo típico | Modelos | Qué se puede hacer |
|---|---|---|---|---|
| 1 a 3B | 4 a 8 GB | Notebook sin placa de video | `llama3.2`, `llama3.2:1b`, Qwen2.5 1.5B, Phi-3 mini, Gemma2 2B | Clasificar, resumir corto, extraer datos simples |
| 7 a 8B | 8 a 16 GB | Notebook de 16 GB, placa de video común | Llama 3.1 8B, Mistral 7B, Qwen2.5 7B | Redactar bien, resumir textos largos, herramientas simples |
| 13 a 14B | 16 a 24 GB | PC con placa tipo RTX 4070 o 4080 | Qwen2.5 14B | Razonar mejor, agentes con varias herramientas |
| 32 a 34B | 24 a 40 GB | Placa de gama alta, o varias | Qwen2.5 32B, Mixtral | Cerca de los modelos de la nube en muchas tareas |
| 70B o más | 48 GB o más | Servidor con placas de datacenter | Llama 3.3 70B | Para empresas |

- **La memoria que importa es la RAM o la VRAM.** La **VRAM** es la memoria de la **placa de video** (o **GPU**, la
  parte de la computadora pensada para gráficos, que resulta muy buena para la IA). Si el modelo entra en la VRAM,
  vuela. Si no hay placa, Ollama usa el **procesador** (la **CPU**) y la RAM: funciona, pero más lento.
  - *Ejemplo:* Probado para esta clase, sin placa de video: `llama3.2` ocupó **2,6 GB** de memoria y respondió una
    pregunta corta en 9 segundos.
- **La memoria de la tabla es de la máquina entera.** El modelo no está solo: también están Windows, el navegador,
  Docker con n8n y el Zoom.
  - *Ejemplo:* En una notebook de 8 GB, Windows y el navegador ya usan 4 o 5. Quedan 3: entra justo `llama3.2`.
- **Corrección de la filmina:** dice "Llama 3.1/3.2 8B". El de 8B es **Llama 3.1**; Llama 3.2 viene en 1B y 3B (son
  los que usamos hoy).
- **Por qué entran: los modelos vienen comprimidos.** A eso se le dice **cuantizar** (en inglés, *quantized*):
  guardar cada número con menos precisión para que ocupe menos, como una foto en JPG en vez del original. Se pierde
  un poco de calidad, casi nada.
  - *Ejemplo:* `ollama show llama3.2` dice *quantization Q4_K_M*: cada número guardado en unos 4 bits en vez de 16.
    Sin comprimir pesaría más de 6 GB; comprimido, 2 GB.

**Para que cada uno lo ubique en casa** (sin pregunta al chat: es el Ejercicio 2 de la tarea)

<p style="color:#1a7f37">En casa, fíjense cuánta RAM tiene su computadora: en Windows, Configuración, Sistema, Información; en Mac, el menú de la manzanita, Acerca de esta Mac. Y buscan su tramo en esta tabla.</p>

Los casos típicos: "8 GB → 1 a 3B, `llama3.2`"; "16 GB → hasta 7 u 8B, pero hoy usamos el de 3B para que ande
rápido"; "4 GB → el de 1B, y cerrando todo lo demás".

#### Filmina 17 · Cinco detalles: lo que conviene tener claro (3 min)

<p style="color:#1a7f37">Cinco detalles. Ollama es el motor, no un modelo. Los modelos se descargan aparte. El tamaño importa: más grande, mejores respuestas, pero más memoria. Ollama queda escuchando para que otras aplicaciones, como n8n, le pidan respuestas. Y una vez descargado el modelo, no hace falta internet.</p>

Para explicar:
- **"Ollama es el motor: no es un modelo en sí mismo."** Un **motor** es lo que hace andar algo, pero no es el auto
  entero.
  - *Ejemplo:* Instalar Ollama y escribir `ollama run` sin haber bajado nada: no responde, porque falta el modelo.
- **"Los modelos se descargan aparte: cada uno con sus propias características."** Se eligen de la biblioteca de
  ollama.com (sección *Models*).
  - *Ejemplo:* `ollama pull llama3.2`, `ollama pull mistral`, `ollama pull gemma2:2b`. Cada uno, una descarga.
- **"El tamaño importa: más grande da mejores respuestas, pero pide más memoria y potencia."**
  - *Ejemplo:* El de 1B tarda menos y ocupa menos, pero recomendó un casco para ir a Bariloche. El de 3B, no.
- **"Ollama queda escuchando: en tu computadora, para que otras apps como n8n le puedan pedir respuestas."**
  **Escuchar** es quedar atento a pedidos, como el webhook de la Semana 4. Ollama escucha en el **puerto 11434** (un
  **puerto** es como el número de departamento de un edificio: la computadora es el edificio, y cada programa atiende
  en su número). Ollama tiene una **API**, como la de dolarapi.com, pero adentro de tu máquina.
  - *Ejemplo:* Abrís `http://localhost:11434` en el navegador y aparece **Ollama is running** ("Ollama está
    funcionando").
- **"No hace falta internet: una vez que el modelo ya está descargado."**
  - *Ejemplo:* Lo comprobamos en el Paso 3, apagando el WiFi.

**En la terminal, paso a paso** (lo mostrás en tu terminal mientras lo contás, 1 min):

```text
EN LA TERMINAL · Los comandos de Ollama
ollama --version          → qué versión está instalada (si responde, Ollama está)
ollama pull llama3.2      → descargar un modelo (sin usarlo)
ollama run llama3.2       → usarlo: abre un chat; para salir, escribí /bye
ollama list               → qué modelos tengo descargados y cuánto pesa cada uno
ollama ps                 → qué modelos están cargados en memoria ahora
ollama stop llama3.2      → sacarlo de la memoria (sigue descargado)
ollama rm llama3.2        → borrarlo del disco
```

Lo que se ve: `ollama list` muestra una tabla con `NAME`, `SIZE` y la fecha; `ollama ps` muestra el modelo cargado,
cuánta memoria usa y si corre en la CPU o en la GPU (`100% CPU`). Después de 5 minutos sin uso, Ollama lo saca solo
de la memoria.

#### Filmina 18 · Ollama es el Spotify de la IA (1 min)

<p style="color:#1a7f37">No es la canción: es el reproductor que la hace sonar. Ollama es el Spotify de la IA.</p>

Para explicar:
- **La frase para llevarse.** Si se acuerdan de una sola cosa de la teoría, que sea esta.
  - *Ejemplo:* Spotify: la app, la biblioteca de canciones, bajar las que querés para escucharlas sin internet.
    Ollama: el programa, la biblioteca de modelos, bajar los que querés para usarlos sin internet.

**Ejemplo: la confusión número uno**

❌ Mal: "instalé Ollama, ya tengo la IA".

```text
PS> ollama run llama3.2
pulling manifest ...      ← recién ahí empieza a bajar 2 GB, porque no estaba
(sin internet: Error: pull model manifest ...)
```

✅ Bien: instalar el motor y después bajar el modelo.

```text
PS> ollama pull llama3.2     ← una vez, con internet
PS> ollama list               ← confirmar que está
NAME               SIZE
llama3.2:latest    2.0 GB
PS> ollama run llama3.2      ← ahora sí, con o sin internet
```

#### Filmina 19 · Coder Tips: localhost adentro de Docker (3 min)

<p style="color:#1a7f37">Atención con esto, que es el error más común de hoy. Si n8n corre en Docker y Ollama en tu sistema, localhost no funciona: adentro del contenedor, localhost apunta al contenedor mismo. Hay que poner host.docker.internal, dos puntos, 11434. Y si n8n está en la nube, directamente no puede ver tu Ollama.</p>

Para explicar:
- **Qué es localhost, otra vez.** En la Semana 2 dijimos: **localhost** es "esta misma computadora". El problema es
  quién dice "esta". Un contenedor de Docker es como una computadora aparte, adentro de la tuya (la caja de la Semana
  2). Si n8n, adentro de su caja, dice "localhost", se refiere a la caja, no a tu computadora. Y Ollama no está en la
  caja.
  - *Ejemplo:* Es como estar en un departamento y decir "tocá el timbre de esta casa": tocás el del departamento, no
    el del edificio.
- **`host.docker.internal`** es el nombre que Docker Desktop le da a tu computadora, vista desde adentro de la caja.
  **Host** es "anfitrión": la máquina que hospeda a los contenedores.
  - *Ejemplo:* n8n en Docker: `http://host.docker.internal:11434`. n8n instalado sin Docker: `http://localhost:11434`.
- **n8n en la nube no ve tu Ollama.** n8n Cloud está en una computadora de la empresa n8n; tu Ollama está en tu casa.
  No hay forma directa de que se encuentren.
  - *Ejemplo:* Los que usan n8n Cloud hoy hacen la instalación y las pruebas en la terminal, y el puente lo miran en
    mi pantalla. Si quieren hacerlo, instalan n8n en Docker con la guía de la Semana 2.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · La credencial de Ollama
1. Pantalla de inicio → pestaña Credentials → Create credential
2. Buscá "Ollama" → elegí Ollama
3. Base URL:
   n8n en Docker            → http://host.docker.internal:11434
   n8n instalado sin Docker → http://localhost:11434
4. API Key: dejala vacía (Ollama en tu máquina no pide clave)
5. Save → tiene que aparecer "Connection tested successfully"
```

Lo que se ve: si la *Base URL* está mal, en vez del mensaje verde aparece un error de conexión. Lo vamos a ver en la
práctica.

**Ejemplo: la Base URL**

❌ Mal: n8n en Docker con `localhost`.

```text
Base URL: http://localhost:11434
→ la credencial no conecta, y el nodo falla con "fetch failed": n8n busca a Ollama adentro de su propio
  contenedor, y ahí no hay nadie.
```

✅ Bien: n8n en Docker con `host.docker.internal`.

```text
Base URL: http://host.docker.internal:11434
→ Connection tested successfully
```

---

### 65–75 · Break

**Filmina 20 · Break** (10 min)

<p style="color:#1a7f37">Diez minutos de break. Los que todavía no instalaron Ollama: empiecen ahora la descarga, ollama.com, Download. Y los que ya lo tienen, abran una terminal y dejen n8n prendido.</p>

---

### 75–155 · Sección 03 · En vivo: la terminal y siete ejemplos en n8n

**Filmina 21 · Separador "03: Práctica en vivo"**

#### Filmina 22 · Ejemplo en vivo: instalación y primer prompt local (1 min)

<p style="color:#1a7f37">Ahora lo vemos andando. Primero en la terminal: Ollama, la pregunta, cuánto sube la memoria, y el WiFi apagado. Después, n8n hablándole a Ollama, y cinco ejemplos más de para qué sirve una IA local. Ustedes miren: no hace falta que lo hagan a la par. Todo lo que hago queda en el material, para que lo repitan en casa.</p>

**Cómo leer esta sección.** La clase va y viene entre el PowerPoint, la terminal y n8n. Cada cambio de pantalla está
marcado:

| Marca | Qué quiere decir |
|---|---|
| ▶ **Dónde arranca** / ■ **Dónde termina** | Al principio de cada ejemplo: desde dónde venís, y adónde vas al terminar |
| 🖥️ **PowerPoint · filmina N** | Compartís el PowerPoint, en esa filmina, y decís el texto verde que sigue |
| 💻 **Pasás a la terminal** | Cambiás a PowerShell (o Terminal) y escribís los comandos que siguen |
| 🛠️ **Pasás a n8n** | Cambiás a la pestaña de n8n y armás los micro-pasos que siguen |
| ↩️ **Volvés al PowerPoint · filmina N** | Terminó esa parte: volvés al PowerPoint, a esa filmina |

**El orden de la sección:**

| Min | Qué | Filminas | Dónde |
|---|---|---|---|
| 75–90 | Pasos 1 a 3: el motor, el modelo, sin internet | 23, 24, 25 | Terminal |
| 90–102 | **Ejemplo 1 · Hola Ollama** (Paso 4, el puente) | 26 | n8n, workflow nuevo `Hola Ollama` |
| 102–112 | **Ejemplo 2 · Local contra nube** (Paso 5, comparar) | 27 | n8n, workflow nuevo `Local vs nube` |
| 112–120 | **Ejemplo 3 · Quejas privadas** | — (la 27 queda atrás) | n8n, workflow nuevo |
| 120–127 | **Ejemplo 4 · Ana con cerebro local** | — | n8n, copia de `Agente en vivo` |
| 127–135 | **Ejemplo 5 · La IA local lee las encuestas** | — | n8n, workflow nuevo |
| 135–145 | **Ejemplo 6 · De un mensaje a la planilla** | — | n8n, workflow nuevo |
| 145–155 | **Ejemplo 7 · El router de privacidad** | — | n8n, workflow nuevo |
| 155 | Volvés al PowerPoint | **28** | — |

#### Antes del primer ejemplo: Ollama listo, paso a paso (por si las dudas)

Si al ejecutar un flujo de esta semana aparece **"Error in sub-node 'Cerebro local: Ollama'"** o **"Node does not
have any credentials set"**, casi siempre falta una de estas cosas. Es el camino completo, probado el 24/11/2026 en
Windows con n8n 2.46 en Docker (Ollama 0.40.18):

```text
1. INSTALAR OLLAMA · en PowerShell (también la terminal de VS Code, sin importar la carpeta):
      irm https://ollama.com/install.ps1 | iex
   → termina con "Install complete. Run 'ollama' from the command line."
   (o ollama.com → Download → Windows, el instalador común)

2. ABRIR UNA TERMINAL NUEVA. Si dice "ollama no se reconoce como nombre de un cmdlet":
   → en PowerShell suelta: cerrarla y abrir otra
   → en VS Code: cerrar VS Code ENTERO y volver a abrirlo (una terminal nueva no alcanza)
   → o, sin cerrar nada, usar la dirección completa:
      & "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" pull llama3.2

3. BAJAR EL MODELO (2 GB, unos minutos):
      ollama pull llama3.2
      ollama list            → tiene que aparecer  llama3.2:latest   2.0 GB

4. EN n8n · doble clic en el nodo "Cerebro local: Ollama"
   → Credential: botón "Connect to Ollama" (si no hay ninguna) o "Create new credential"
   → Base URL:  http://host.docker.internal:11434   (n8n en Docker; NO localhost)
   → API Key: VACÍA (es para un Ollama ajeno con contraseña; el tuyo no pide)
   → Save → "Connection tested successfully"
   → Model: llama3.2:latest (el nombre exacto de ollama list)

5. Execute workflow → la primera vez tarda (en la prueba, 45 segundos: el modelo arranca en frío)
   → todos los nodos en verde. La respuesta: Logs → "Preguntarle al modelo local" → Output
```

<p style="color:#1a7f37">Si a alguien le da error el cerebro local, son estas cinco cosas en orden: Ollama instalado, la terminal que se entere, el modelo bajado, la credencial con host.docker.internal, y el nombre exacto del modelo.</p>

- **Cómo saber si Ollama está prendido:** la llamita al lado del reloj, o `http://localhost:11434` en el navegador
  dice *Ollama is running*. Si no, abrilo desde el menú Inicio (**Ollama**).
- **Por qué la API Key va vacía:** Ollama en tu computadora no tiene usuario ni contraseña. El campo existe para
  cuando Ollama corre en un servidor de otro que lo protege.

#### Paso 1 · El motor (75–80) · en la terminal

> ▶ **Dónde arranca.** Filmina 22 → avanzás a la **23**. ■ **Dónde termina:** en la filmina 25, con el WiFi prendido otra vez.

2. 🖥️ **PowerPoint · filmina 23.** Decís:

<p style="color:#1a7f37">Paso uno: tener Ollama corriendo. Se descarga del sitio oficial, se instala como cualquier programa y queda escuchando en la computadora.</p>

💻 **Pasás a la terminal** (y al navegador).

3. Mostrás **ollama.com** → **Download**: las tres opciones (Windows, Mac, Linux). No instalás de nuevo: ya lo tenés.
   Mostrás el ícono de la llama al lado del reloj. Decís:

<p style="color:#1a7f37">El instalador es como el de cualquier programa: siguiente, siguiente. No pide ser administrador. Cuando termina, aparece esta llamita al lado del reloj: eso quiere decir que Ollama está funcionando de fondo, esperando pedidos. Las versiones nuevas abren también una ventanita de chat; la pueden cerrar, Ollama sigue andando.</p>

4. **Verificar que escucha.** En PowerShell, con letra grande:

```text
PS> ollama --version
ollama version is 0.40.15
```

Y en el navegador, `http://localhost:11434`: aparece **Ollama is running**. Decís:

<p style="color:#1a7f37">Dos pruebas. La terminal responde con la versión: el programa está instalado. Y el navegador, en el puerto 11434, dice "Ollama is running": está escuchando. Es la misma idea que n8n en el puerto 5678. Ese número, 11434, lo vamos a necesitar en el Paso 4.</p>

5. **El monitor de recursos.** **Ctrl + Shift + Esc** → **Rendimiento** → **Memoria**. Lo dejás en un costado de la
   pantalla. Pegás en el chat, para que lo repitan en casa:

```text
PARA CASA · Paso 1: el motor
1. ollama.com → Download → instalalo
2. En PowerShell (o Terminal):  ollama --version
3. En el navegador:  http://localhost:11434  → "Ollama is running"
4. Abrí el monitor de memoria y dejalo a la vista:
   Windows: Ctrl + Shift + Esc → Rendimiento → Memoria
   Mac: Monitor de Actividad → Memoria
```

<p style="color:#1a7f37">Miren cuánta memoria estoy usando ahora, antes de cargar ningún modelo. Fíjense el número: después comparamos.</p>

**Plan B:** si `ollama --version` dice *no se reconoce como nombre de un cmdlet*, cerrá PowerShell y abrí otra: la
terminal que estaba abierta no se enteró de la instalación. **En la terminal de VS Code no alcanza con abrir otra:**
hay que cerrar VS Code entero, o usar `& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" --version`.

#### Paso 2 · El modelo (80–86) · en la terminal

↩️ **Volvés al PowerPoint · filmina 24.**

6. 🖥️ **PowerPoint · filmina 24.** Decís:

<p style="color:#1a7f37">Paso dos: elegir y bajar el modelo que su equipo aguanta. Con la tabla de la filmina 16: 8 gigas, llama3.2; 4 gigas, el de 1B.</p>

💻 **Pasás a la terminal.**

7. **La descarga en vivo**, con el modelo chico (el grande ya lo tenés):

```text
PS> ollama pull llama3.2:1b
pulling manifest
pulling 74701a8c35f6: 100% ▕████████████████▏ 1.3 GB
...
success
```

<p style="color:#1a7f37">Esto es lo único que necesita internet: bajar el archivo. 1,3 gigas. Con buena conexión, dos o tres minutos. Mientras baja, sigamos.</p>

8. **La primera pregunta**, con el que ya tenés, mirando el monitor de memoria:

```text
PS> ollama run llama3.2 "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
```

Mientras piensa, señalás la memoria subiendo. Decís:

<p style="color:#1a7f37">Miren la memoria: subió unos dos gigas y medio. Es el modelo, que pasó del disco a la memoria. Y tarda, sobre todo la primera vez: no es un error, es la computadora haciendo todo el trabajo que antes hacía Google.</p>

Respuesta real (Ollama 0.40, sin placa de video; tardó casi 3 minutos la primera vez):

```text
Para visitar Bariloche en invierno, te recomiendo llevar:
* Ropa cálida y acogedora, como chaquetas, guantes y gorras para protegerte del viento y la lluvia.
* Un par de botas de nieve o senderismo para navegar por los senderos nevados ...
* Un kit de primeros auxilios básico y un cargador portátil ...
```

9. **La segunda pregunta**, ya cargado:

```text
PS> ollama run llama3.2 "¿Cuál es la capital de Mendoza? Una línea."
La capital de Mendoza es Mendoza.
```

<p style="color:#1a7f37">Nueve segundos. La segunda vez no tiene que cargar nada: el modelo ya estaba en memoria. Por eso la primera respuesta siempre tarda más.</p>

10. **`ollama ps`**:

```text
PS> ollama ps
NAME               SIZE      PROCESSOR    CONTEXT    UNTIL
llama3.2:latest    2.6 GB    100% CPU     4096       4 minutes from now
```

<p style="color:#1a7f37">Esto dice qué modelo está cargado: llama3.2, ocupando 2,6 gigas, corriendo cien por ciento en el procesador, porque esta máquina no tiene placa de video. Y "4 minutes from now": si nadie le pregunta nada en cinco minutos, Ollama lo saca de la memoria solo.</p>

11. Pegás en el chat, para que lo repitan en casa:

```text
PARA CASA · Paso 2: el modelo
1. Bajá tu modelo:  ollama pull llama3.2     (4 GB de RAM: ollama pull llama3.2:1b)
2. Comprobá:  ollama list
3. Preguntá (mirando la memoria):
   ollama run llama3.2 "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
4. Preguntá otra cosa y compará el tiempo
5. ollama ps  → ¿cuánta memoria usa? ¿CPU o GPU?
Anotá cuánto tardó la primera y cuánto la segunda.
```

12. Decís:

<p style="color:#1a7f37">En sus máquinas va a tardar distinto. Es la tabla de la filmina 16: el mismo modelo, en máquinas distintas, tarda distinto. Con una placa de video, vuela. Sin placa, anda, pero con paciencia.</p>

**Si a alguien le sale `signal: killed` o `model requires more system memory`:** no le alcanza la memoria. Que cierre
pestañas y programas, que haga `ollama stop` del modelo que no usa, o que baje el de 1B. Al probar esta clase pasó
exactamente eso: con el de 1B todavía cargado, el de 3B se cortó con `signal: killed`.

#### Paso 3 · Sin internet (86–90) · en la terminal

↩️ **Volvés al PowerPoint · filmina 25.**

13. 🖥️ **PowerPoint · filmina 25.** Decís:

<p style="color:#1a7f37">Paso tres: comprobar que la autonomía es real y no un discurso. Voy a apagar el WiFi. Ojo: el Zoom también se corta, así que me van a perder unos segundos. Romina sigue con ustedes.</p>

💻 **Pasás a la terminal.**

14. Apagás el WiFi. Preguntás:

```text
PS> ollama run llama3.2 "Escribí un saludo de bienvenida para un cliente que llega a Salta. Dos líneas."
```

Responde. Lo mostrás (si el Zoom se reconectó) o lo contás al volver. Prendés el WiFi.

<p style="color:#1a7f37">Respondió sin internet. El modelo está en el disco, el motor en la computadora: no hay nadie más en el medio. Es el GPS con el mapa descargado.</p>

15. Pegás en el chat, para que lo repitan en casa:

```text
PARA CASA · Paso 3: sin internet
1. Apagá el WiFi
2. ollama run llama3.2 "Escribí un saludo de bienvenida para un cliente que llega a Salta. Dos líneas."
3. ¿Respondió? ¿Cuánto tardó?
4. Prendé el WiFi de nuevo
```

<p style="color:#1a7f37">Y fíjense en el tiempo. La latencia, el tiempo que tarda en responder, es el precio de la autonomía. No es un error: es procesamiento.</p>

**Plan B:** si no querés cortar tu Zoom, mostrá un video corto grabado antes con la prueba, o pedile a un alumno que
lo haga y cuente el resultado por el chat cuando vuelva.

#### Paso 4 · El puente = Ejemplo 1 en n8n · Hola Ollama (flujo `01`) (90–102)

> **En pocas palabras.** El "hola mundo" de la IA local: n8n le hace una pregunta a un modelo que corre en tu
> computadora, y no en Google.
>
> ```text
> Arrancar a mano  →  La pregunta  →  Basic LLM Chain  →  Ollama (llama3.2)
> ```
>
> Le preguntás qué llevar a Bariloche en invierno, y contesta `llama3.2` desde tu máquina.
>
> **La idea para los alumnos:** es la misma chain de la Semana 6; lo único que cambia es el cerebro enchufado abajo.

> ▶ **Dónde arranca.** Terminaste el Paso 3 en la terminal (filmina 25). Avanzás a la **filmina 26**.
>
> ■ **Dónde termina.** Con la respuesta de `llama3.2` en la salida de la chain. Volvés al PowerPoint, a la filmina 27.

> **¿Anda en local (Docker)?** ✅ Sí: es justamente la idea. Ollama corre en tu computadora y n8n le habla por
> `http://host.docker.internal:11434`. No hace falta dirección pública ni túnel.

**Qué va a hacer este flujo (y qué no).** Hace un único recorrido: una pregunta fija, una respuesta. No tiene chat,
ni memoria, ni herramientas. Sirve para ver que el puente n8n ↔ Ollama anda; todos los demás ejemplos lo reusan.

16. 🖥️ **PowerPoint · filmina 26.** Decís:

<p style="color:#1a7f37">Paso cuatro, el más importante: que n8n le hable a nuestro Ollama. Es la misma Basic LLM Chain de la semana pasada, pero con el cerebro de Ollama.</p>

**Si alguien no instaló Ollama** (pasa siempre). Es la primera vez que n8n usa Ollama: sin Ollama instalado y el
modelo bajado, el nodo da *Error in sub-node 'Cerebro local: Ollama'*. Pegás esto en el chat; el que no lo tiene lo hace
mientras vos seguís (no esperás: lo termina en casa si no llega).

```text
SI NO INSTALASTE OLLAMA · paso a paso
WINDOWS
1. Abrí PowerShell (tecla Windows → escribí powershell → Enter). Sirve también la terminal de VS Code,
   en cualquier carpeta
2. Pegá:   irm https://ollama.com/install.ps1 | iex
   → termina con "Install complete. Run 'ollama' from the command line."
   (otra forma: ollama.com → Download → Windows → instalador común: siguiente, siguiente)
3. Cerrá esa terminal y abrí una NUEVA. En VS Code: cerrá VS Code entero y volvé a abrirlo
4. ollama pull llama3.2        (2 GB: unos minutos)
5. ollama list                 → tiene que aparecer  llama3.2:latest
MAC
1. ollama.com → Download → macOS → abrí el archivo que bajó → arrastrá Ollama a Aplicaciones → abrilo
   → aparece la llamita arriba, en la barra
2. Abrí Terminal (Cmd + Espacio → terminal) → ollama pull llama3.2 → ollama list
LAS DOS
6. En el navegador: http://localhost:11434 → "Ollama is running"
7. En n8n: Connect to Ollama → Base URL: http://host.docker.internal:11434 · API Key: vacía → Save
```

Para explicar (mientras lo pegás):
- **¿Hace falta una carpeta especial?** No. Ollama se instala solo en su lugar, y los modelos se guardan aparte.
- **"ollama no se reconoce como nombre de un cmdlet"**: la terminal se abrió antes de instalar y no se enteró. Con
  una terminal nueva se arregla; en VS Code hay que cerrarlo entero. Mientras tanto, anda con la dirección completa:
  `& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" pull llama3.2`.
- **¿Está prendido?** La llamita al lado del reloj (Windows) o arriba en la barra (Mac). Si no está, se abre
  **Ollama** desde el menú Inicio o desde Aplicaciones.
- **La API Key va vacía:** es para un Ollama en un servidor ajeno con contraseña. El tuyo no pide.

<p style="color:#1a7f37">Si alguno no llegó a instalarlo, no pasa nada: les dejo el paso a paso en el chat. Son dos comandos y una espera. Lo hacen mientras sigo; si no llegan, lo terminan en casa con esto.</p>

🛠️ **Pasás a n8n.**

17. **La credencial.** Pegás en el chat, para que lo tengan:

```text
PARA CASA · Paso 4: la credencial
1. n8n → Credentials → Create credential → buscá "Ollama" → Ollama
2. Base URL:
   n8n en Docker            → http://host.docker.internal:11434
   n8n instalado sin Docker → http://localhost:11434
3. API Key: vacía · nombre: Ollama local → Save
4. Tiene que decir "Connection tested successfully"
```

18. **Primero, a propósito, con `http://localhost:11434`**: aparece el error de conexión. Decís:

<p style="color:#1a7f37">Lo hice mal a propósito. Mi n8n está en Docker, y puse localhost. Adentro de la caja de Docker, localhost es la caja misma, y ahí no hay ningún Ollama. Es el Coder Tip de antes. Lo cambio por host.docker.internal...</p>

Lo cambiás → **Save** → *Connection tested successfully*.

<p style="color:#1a7f37">...y ahora sí. host.docker.internal es la forma de decir, desde adentro de la caja, "la computadora de afuera".</p>

19. **El flujo, nodo por nodo.** Primero pegás en el chat el resumen, para que lo tengan:

```text
PARA CASA · Paso 4: el flujo (4 nodos)
Arrancar a mano → La pregunta → Preguntarle al modelo local
                                      └ abajo, en Model: Cerebro local: Ollama
```

Y lo armás despacio, nodo por nodo:

**P4-a · El workflow y el disparador** (*Trigger manually*)

```text
Overview → Create workflow → arriba a la izquierda, clic en "My workflow" → escribí  Hola Ollama → Enter
En el centro: Add first step → se abre el buscador a la derecha → escribí  manual  → Trigger manually
```

- **Cuándo se coloca:** siempre primero. Es el "botón de arranque": sin disparador, el flujo no corre.
- **Por dentro:** no tiene nada que configurar. Se cierra con la cruz.
- En el lienzo aparece como *When clicking 'Execute workflow'*. Doble clic en el título → **Arrancar a mano**.

<p style="color:#1a7f37">Todo flujo empieza con un disparador. Hoy uso el más simple: arranca cuando aprieto el botón. Más adelante, el disparador va a ser un mensaje de WhatsApp.</p>

**P4-b · La pregunta** (*Edit Fields*)

```text
Pasá el mouse sobre "Arrancar a mano" → clic en el + de su derecha → escribí  edit  → Edit Fields (Set)
```

- **Cuándo se coloca:** después del disparador. Es donde escribimos el dato que le vamos a mandar al modelo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Mode* | **Manual Mapping** (viene así) | Escribimos los campos uno por uno. *JSON* es para pegar una ficha entera (lo usamos en los ejemplos B y C) |
| *Fields to Set* → **Add Field** | Nombre: `pregunta` · Tipo: **String** · Valor: `Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno.` | Un casillero con la pregunta. *String* = texto |
| *Include Other Input Fields* | Apagado (viene así) | El disparador no trae nada que valga la pena pasar |

Cerrás → renombrás **La pregunta** → clic derecho → **Execute step** (o el botón dentro del nodo): en *OUTPUT* aparece
`pregunta` con el texto.

<p style="color:#1a7f37">Un Edit Fields con un solo casillero: la pregunta. Lo separo del modelo a propósito: si mañana quiero preguntar otra cosa, cambio este nodo y no toco el resto.</p>

**P4-c · El que le pregunta al modelo** (*Basic LLM Chain*)

```text
+ a la derecha de "La pregunta" → escribí  basic llm  → Basic LLM Chain
(si buscás "AI" aparecen muchos: el que va es Basic LLM Chain, no AI Agent)
```

- **Cuándo se coloca:** cuando ya tenemos el texto que queremos preguntar. Es el mismo nodo de la Semana 6.
- **Por qué no un AI Agent:** acá no hay herramientas ni memoria. Una pregunta, una respuesta: con la chain alcanza.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt (User Message)* | **Define below** | *Connected Chat Trigger Node* es para cuando el mensaje viene del chat de prueba. Acá viene de *La pregunta* |
| *Prompt (User Message)* | Arrastrás `pregunta` desde *INPUT* (a la izquierda) → queda `{{ $json.pregunta }}` | Lo que le preguntamos al modelo: el casillero del nodo anterior |
| *Require Specific Output Format* | Apagado (viene así) | Queremos texto libre, no una ficha |
| *Chat Messages* | Nada | Sirve para instrucciones fijas. No hacen falta |

Cerrás → renombrás **Preguntarle al modelo local**. Abajo del nodo quedó un conector que dice **Model** con un
asterisco rojo: la chain todavía no tiene cerebro.

<p style="color:#1a7f37">La chain es la que arma el pedido y se lo manda a un modelo. Pero fíjense abajo: Model, con un asterisco. Le falta el cerebro. Eso es lo de hoy: en vez de Gemini, le pongo Ollama.</p>

**P4-d · El cerebro** (*Ollama Chat Model*)

```text
Abajo de la chain, en el conector "Model", clic en el + → se abre la lista de modelos → escribí  ollama
→ Ollama Chat Model   (no "Ollama Model", que es para otros nodos)
```

- **Cuándo se coloca:** colgado de la chain. Es un **sub-nodo**: no va en la fila principal, va abajo, enchufado.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential to connect with* | **Ollama local** (la de recién). Si no hay ninguna: botón **Connect to Ollama** → *Base URL* `http://host.docker.internal:11434` → *API Key* vacía → **Save** | Le dice a n8n dónde está Ollama. Con n8n en Docker, `localhost` no anda |
| *Model* | **llama3.2:latest** (de la lista) | La lista la trae n8n preguntándole a tu Ollama. Si está vacía, Ollama está apagado o la credencial está mal |
| *Options* → **Add Option** → *Sampling Temperature* | **0.3** | Un poco de variedad, no mucha. Más alto, más "creativo" (y más inventos) |

Cerrás → renombrás **Cerebro local: Ollama**. El asterisco rojo desapareció. **Save** → **Execute workflow**.

<p style="color:#1a7f37">El mismo enchufe de la semana pasada, otro cerebro. Elijo la credencial, que es la dirección de Ollama, y el modelo, que aparece en la lista porque n8n le preguntó a mi Ollama qué tiene. Si la lista sale vacía, ya saben: Ollama apagado o la dirección mal.</p>

20. Mientras corre, mostrás dos cosas:
    - el **Administrador de tareas**: la memoria sube;
    - el **registro de Ollama**: clic derecho en el ícono de la llama → **View logs** → abrís `server.log` (en Mac,
      `~/.ollama/logs/server.log`). Al final aparece una línea por cada pedido de n8n:

```text
[GIN] 2026/11/07 - 13:36:57 | 200 |  1m0s |  172.18.0.3 | POST "/api/chat"
```

<p style="color:#1a7f37">Esta línea es n8n hablándole a Ollama. POST, como en la Semana 4: n8n le manda un pedido a la API de Ollama, en la dirección /api/chat. El 200 es "salió bien". El minuto es lo que tardó. Y esa dirección, 172.18 punto algo, es el contenedor de n8n. Todo pasa adentro de mi computadora.</p>

21. La salida del flujo (real, del flujo de la carpeta `n8n/`, 71 segundos la primera vez):

```json
{
  "text": "Excelente elección! Para disfrutar de Bariloche en invierno, te recomiendo llevar:\n\n* Ropa cálida y acogedora, como chaquetas, gorras, guantes y calcetines de lana ...\n* Un buen par de botas impermeables ... para caminar en la nieve y en la ladera de Cerro Campanario.\n* Un kit de primeros auxilios y un teléfono con batería extra ..."
}
```

<p style="color:#1a7f37">Ahí está: el hola mundo de n8n con un modelo local. El mismo nodo de la semana pasada, el mismo casillero text en la salida. Lo único que cambió es el cerebro de abajo. Y ninguna palabra salió de mi computadora.</p>

**Si algo no anda:** la tabla de trabas, al final de la sección (casi siempre es la *Base URL* o el nombre del
modelo). El `01-hola-ollama.json` es este mismo flujo terminado: sirve para comparar en el ensayo, no para importarlo
en clase.

↩️ **Volvés al PowerPoint · filmina 27.**

#### Paso 5 · Comparar = Ejemplo 2 en n8n · Local contra nube (flujo `02`) (102–112)

> **En pocas palabras.** El mismo prompt va, al mismo tiempo, a Ollama y a Gemini, y se ven las dos respuestas
> juntas.
>
> ```text
> Arrancar a mano  →  El mismo prompt  ─┬─  Chain + Ollama  ─┐
>                                       └─  Chain + Gemini  ─┴─  Juntar las dos
> ```
>
> Una familia quiere ir 5 días a Salta en julio. El modelo local tarda más e inventa lugares; Gemini, no.
>
> **La idea para los alumnos:** no se trata de "cuál es mejor", sino de cuál conviene para cada paso.

> ▶ **Dónde arranca.** Filmina **27**, con el Ejemplo 1 terminado (de ahí se copia la rama local).
>
> ■ **Dónde termina.** Con el criterio de "local o nube" en pantalla. **No volvés al PowerPoint:** seguís en n8n
> con los Ejemplos 3 a 7.

> **¿Anda en local (Docker)?** ✅ Sí. La rama de Ollama queda en tu computadora; la de Gemini es un pedido que sale
> hacia Google (hace falta internet y la credencial de Gemini). Si Gemini da **429**, esperá un minuto.

22. 🖥️ **PowerPoint · filmina 27.** Decís:

<p style="color:#1a7f37">Último paso: entender qué ganamos y qué perdemos. El mismo prompt al modelo local y a Gemini, y comparamos calidad, tiempo y costo. Y cada uno decide, para su caso, cuál conviene.</p>

🛠️ **Pasás a n8n.**

23. **Lo armás en vivo** (son 6 nodos, y dos los copiás del flujo anterior). Pegás el resumen en el chat:

```text
PARA CASA · Paso 5: comparar
Arrancar a mano → El mismo prompt ─┬→ Responder (local) ─┐
                                   │   └ Cerebro local: Ollama   ├→ Juntar las dos
                                   └→ Responder (nube)  ─┘
                                       └ Cerebro nube: Gemini
```

**P5-a · El disparador y el prompt**

```text
Overview → Create workflow → nombre:  Local vs nube
Add first step → manual → Trigger manually → renombralo:  Arrancar a mano
+ → edit → Edit Fields (Set) → renombralo:  El mismo prompt
```

| Campo (*El mismo prompt*) | Qué ponés | Por qué |
|---|---|---|
| *Mode* | **Manual Mapping** | Un solo casillero |
| **Add Field** | Nombre: `prompt` · Tipo: **String** · Valor: `Un cliente escribe: "Hola, somos 2 adultos y un nene de 8 años. Queremos ir 5 días a Salta en julio, ¿qué nos recomendás?". Respondé como asesora de una agencia de viajes argentina, en español rioplatense, en no más de 5 líneas.` | El **mismo** texto va a ir a los dos modelos: así la comparación es justa |

<p style="color:#1a7f37">Para comparar en serio, los dos modelos tienen que recibir exactamente lo mismo. Por eso el prompt va en un solo nodo, y de ahí sale para los dos lados.</p>

**P5-b · La rama local: copiarla del flujo anterior**

```text
Abrí "Hola Ollama" (en otra pestaña) → clic en "Preguntarle al modelo local" → Ctrl + clic en "Cerebro local: Ollama"
→ Ctrl + C → volvé a "Local vs nube" → clic en un lugar vacío → Ctrl + V
→ arrastrá desde el puntito de salida de "El mismo prompt" hasta la entrada de la chain
```

| Campo (la chain) | Qué cambiás | Por qué |
|---|---|---|
| *Prompt (User Message)* | Borrás lo que hay y arrastrás `prompt` → `{{ $json.prompt }}` | En este flujo el casillero se llama `prompt`, no `pregunta`. Si lo dejás, la chain recibe vacío |
| Nombre del nodo | **Responder (local)** | Para saber cuál es cuál en los resultados |

El *Cerebro local: Ollama* no se toca: copiado, trae su credencial y su modelo.

<p style="color:#1a7f37">No lo armo de nuevo: lo copio. Los nodos se copian como texto, con Control C y Control V, de un flujo a otro, y vienen con su configuración. Lo único que cambio es el nombre del casillero: acá se llama prompt.</p>

- **Para unir dos nodos a mano:** se arrastra desde el circulito de la derecha de uno hasta el de la izquierda del
  otro.

**P5-c · La rama de la nube: una segunda salida del mismo nodo**

```text
Desde el puntito de salida de "El mismo prompt", arrastrá hacia abajo, a un lugar VACÍO → se abre el buscador
→ basic llm → Basic LLM Chain → renombralo:  Responder (nube)
```

- **Cuándo se coloca:** al mismo tiempo que la local. Una salida puede ir a dos nodos: el mismo item viaja a los dos.
- **Por qué arrastrando:** el **+** solo aparece cuando la salida está libre. Como ya va a la rama local, la segunda
  conexión se hace arrastrando.

| Campo (*Responder (nube)*) | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt* | **Define below** | Igual que la local |
| *Prompt (User Message)* | `{{ $json.prompt }}` | El mismo prompt |

Abajo, en **Model** → **+** → `gemini` → **Google Gemini Chat Model** → renombralo **Cerebro nube: Gemini**:

| Campo (*Cerebro nube: Gemini*) | Qué ponés | Por qué |
|---|---|---|
| *Credential* | La de Gemini (Semanas 2 y 6) | La clave de Google |
| *Model* | El **flash** de la lista (el mismo de la Semana 6) | Rápido y con plan gratis |
| *Options* → *Sampling Temperature* | **0.3** | La misma que el local: si no, no es una comparación justa |

<p style="color:#1a7f37">Abajo, la misma chain con otro cerebro: Gemini. Misma temperatura que el local. Lo único distinto entre las dos ramas es dónde está el modelo.</p>

**P5-d · Juntar las dos respuestas** (*Merge*)

```text
+ a la derecha de "Responder (local)" → escribí  merge  → Merge → renombralo:  Juntar las dos
Después: arrastrá desde la salida de "Responder (nube)" hasta la entrada de abajo del Merge (Input 2)
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Mode* | **Append** (viene así) | Pone las respuestas una debajo de la otra: dos items. Es el Merge de la Semana 3 |
| *Number of Inputs* | **2** | Dos ramas, dos entradas |

- **Cuándo se coloca:** al final, cuando hay dos ramas que queremos ver juntas. El Merge **espera** a que lleguen las
  dos: Gemini termina primero y espera al local.

<p style="color:#1a7f37">El Merge de la Semana 3: junta las dos ramas. Modo Append, una debajo de la otra. Y espera: Gemini va a terminar mucho antes, pero el Merge no sigue hasta que llega la del local.</p>

**Save** → **Execute workflow** (dos veces: la primera, el local carga el modelo).

> El flujo `02-local-vs-nube.json` de la carpeta tiene, además, nodos que calculan los segundos y anotan el costo.
> Armándolo en vivo no hacen falta: **los segundos se leen en *Logs***, al lado de cada nodo (*Success in 26.3s*).

24. **Los resultados.** Abrís *Juntar las dos* → *OUTPUT*: dos items, cada uno con su `text`; el primero es el del
    modelo local y el segundo, el de Gemini. En *Logs*, el tiempo de cada uno. Leés en voz alta la del modelo local. La de la prueba (llama3.2, 26 segundos):

```text
Hola! Salta en julio es una excelente elección. Recomiendo visitar el Cerro del Comandante, el Mercado de Artesanías
y el Lago Milicia. No olvides llevar ropa fresca y protector solar, ya que el sol es intenso en esa época. ...
```

Preguntás en voz alta *"¿ven algo raro?"* y lo señalás vos:
- el "Lago Milicia" **no existe**: el modelo lo inventó. Y el cerro famoso de la ciudad es el **San Bernardo**, no
  "del Comandante";
- "ropa fresca" en **julio**, que en Salta es invierno, con noches frías;
- no dice nada del nene ni arma un plan de 5 días.

(En otra prueba, el mismo modelo ubicó el **Teatro Colón en Salta**.) Después leés la de Gemini, que va a ser más
precisa y más completa.

<p style="color:#1a7f37">Esto es la contrapartida de la filmina 11, en vivo. El modelo chico escribe lindo y con seguridad, pero inventa. Para recomendar lugares a un cliente, no alcanza. Para clasificar un mail en tres categorías, quizás sí. Por eso la pregunta no es "¿cuál es mejor?", sino "¿cuál conviene para este paso?".</p>

25. **El criterio.** Lo mostrás en pantalla (y lo pegás en el chat, para que lo tengan):

```text
EL CRITERIO · ¿local o nube para este paso?
¿Hay datos sensibles (salud, tarjetas, documentos)?      → sí: local (o tapar los datos antes)
¿La tarea es simple (clasificar, extraer, resumir corto)? → sí: local alcanza
¿Tiene que saber cosas del mundo o razonar varios pasos?  → sí: nube
¿Tiene que responder rápido (un chat, WhatsApp)?          → sí: nube, o una máquina potente
¿Se ejecuta miles de veces o hay que probar mucho?        → sí: local ahorra plata

Para tu flujo de la pre-entrega: ¿local o nube? ¿Por qué? (tarea, Ejercicio 1)
```

26. Lo aplicás a dos casos de la clase: las quejas con tarjeta → local; Ana por WhatsApp → nube.

<p style="color:#1a7f37">No hay una respuesta única: depende del paso. Y en un mismo flujo pueden convivir los dos. Lo importante es que lo decidan ustedes, con argumentos, y no por costumbre.</p>

**Si Gemini da 429** (el límite del plan gratis): ejecutalo de nuevo en un minuto, o mostrá solo la rama local y leé
la respuesta de Gemini que guardaste en el ensayo.

■ **Termina el Ejemplo 2.** Seguís en n8n: workflow nuevo para el Ejemplo 3.

#### Ejemplo 3 en n8n · Quejas privadas: el banco de la filmina 12, andando (flujo `03`) (8 min)

> **En pocas palabras.** Tres quejas de clientes, dos con el número de tarjeta. Un modelo local las clasifica
> (Fraude, Cobro o Atención) y las resume, sin que ningún dato salga de la computadora.
>
> ```text
> Arrancar a mano  →  Quejas de prueba  →  Una por una  →  Chain + Ollama  →  Para el equipo
> ```
>
> **La idea para los alumnos:** lo local resuelve la privacidad, pero no la inteligencia: el modelo chico cumple la
> regla fácil (no repetir la tarjeta) y se equivoca en la difícil (entender qué tipo de queja es).

> ▶ **Dónde arranca.** Terminaste el Ejemplo 2. Seguís en n8n, sin volver al PowerPoint.
>
> ■ **Dónde termina.** Con las tres quejas clasificadas y la mejora del prompt. Seguís con el Ejemplo 4.

> **¿Anda en local (Docker)?** ✅ Sí: es justamente la idea. Ollama corre en tu computadora y n8n le habla por
> `http://host.docker.internal:11434`. No hace falta dirección pública ni túnel.

<p style="color:#1a7f37">¿Se acuerdan del banco de la filmina 12? Quejas con números de tarjeta, que no pueden viajar a otra empresa. Bueno, armémoslo. Tres quejas, un modelo local, y miramos dos cosas: si protege la tarjeta y si entiende la queja.</p>

**Qué va a hacer este flujo (y qué no).** Lee tres quejas escritas a mano (no de un mail real), le pide al modelo una
categoría y un resumen por cada una, y junta el resultado con el nombre del cliente. No manda nada a nadie: el
resultado queda en la salida del último nodo.

**E3-1 · El disparador y las quejas** (*Trigger manually* + *Edit Fields* en modo JSON)

```text
Overview → Create workflow → nombre:  Quejas privadas
Add first step → manual → Trigger manually → renombralo:  Arrancar a mano
+ → edit → Edit Fields (Set) → renombralo:  Quejas de prueba
```

| Campo (*Quejas de prueba*) | Qué ponés | Por qué |
|---|---|---|
| *Mode* | **JSON** | Para pegar la lista entera de una vez |
| *JSON* | El bloque de abajo | Tres quejas: dos con tarjeta, una sin |

```json
{
  "quejas": [
    { "cliente": "Marta Suárez", "queja": "Me cobraron dos veces el mismo pasaje en la tarjeta 4517 6601 2345 9087. Necesito que me devuelvan uno de los cobros ya." },
    { "cliente": "Jorge Benítez", "queja": "Aparece una compra en Miami que yo no hice, con mi tarjeta 5299 1120 8834 0012. ¡Yo nunca viajé a Miami!" },
    { "cliente": "Lucía Fernández", "queja": "Llamé tres veces al número de atención y nadie me atendió. Quiero cambiar la fecha de mi viaje a Mendoza." }
  ]
}
```

**E3-2 · Una por una** (*Split Out*)

```text
+ a la derecha de "Quejas de prueba" → split → Split Out → renombralo:  Una por una
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Fields To Split Out* | `quejas` | El nombre de la lista. Así salen 3 items y el modelo lee una queja por vez |
| *Include* | **No Other Fields** | No hay nada más que conservar |

**E3-3 · Clasificar y resumir** (*Basic LLM Chain* + *Ollama Chat Model*)

```text
+ a la derecha de "Una por una" → basic llm → Basic LLM Chain → renombralo:  Clasificar y resumir (local)
Abajo, Model → + → ollama → Ollama Chat Model → renombralo:  Cerebro local: Ollama
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt* | **Define below** | |
| *Prompt (User Message)* | El texto de abajo; al final, arrastrás `queja` | Formato fijo de dos líneas, y la regla de privacidad |
| *Cerebro local: Ollama* → *Credential* · *Model* | **Ollama local** · `llama3.2:latest` | El de los ejemplos anteriores |
| *Cerebro local: Ollama* → *Options* → *Sampling Temperature* | **0.1** | Clasificar no necesita creatividad |

```text
Sos un asistente interno de una agencia de viajes. Leé esta queja de un cliente y respondé SOLO con dos líneas, sin nada más:
Categoría: (una sola palabra: Fraude, Cobro o Atención)
Resumen: (una oración corta)

Regla: en el resumen NUNCA escribas números de tarjeta.

Queja: {{ $json.queja }}
```

<p style="color:#1a7f37">El prompt pide dos cosas: una categoría de tres posibles, y un resumen. Y una regla: nunca escribir el número de tarjeta. El modelo es local, así que la tarjeta no sale de acá. Pero el resumen lo va a leer el equipo: tampoco tiene por qué verla.</p>

**E3-4 · Para el equipo** (*Edit Fields*)

```text
+ a la derecha de la chain → edit → Edit Fields (Set) → renombralo:  Para el equipo
```

| Campo | Tipo | Valor | Por qué |
|---|---|---|---|
| `cliente` | String | `{{ $('Una por una').item.json.cliente }}` | El nombre quedó antes de la chain: se busca atrás |
| `clasificacion` | String | `{{ $json.text }}` | Lo que contestó el modelo |

**E3-5 · Probar.** **Save** → **Execute workflow** → abrís *Para el equipo*. Lo que salió en el ensayo (24/11/2026,
`llama3.2`):

```text
Marta Suárez     → "Categoría: Cobro  · Me cobraron dos veces el mismo pasaje en una tarjeta."
Jorge Benítez    → "Categoría: Cobro  · Resumen: Aparece una compra en Miami con tarjeta que no pertenece al cliente."
Lucía Fernández  → "Categoría: Cobro  · Resumen: Quiero cambiar la fecha de mi viaje a Mendoza."
```

Preguntás en voz alta *"¿ven algo raro?"* y lo señalás vos:
- **Lo bueno:** ningún resumen tiene el número de tarjeta. La privacidad, bien.
- **Lo malo:** **las tres dicen "Cobro"**. Jorge (una compra que no hizo) es **Fraude**; Lucía (no la atienden) es
  **Atención**. Además, a Marta le faltó "Resumen:" y dos resúmenes están en primera persona: copió en vez de resumir.

<p style="color:#1a7f37">Esto es la filmina 11 en vivo. Cumplió la regla fácil, no repetir la tarjeta. Pero en lo que hay que entender, falló: el fraude de Jorge, en un banco, iría a la fila de cobros y se atendería tarde. Lo local resolvió la privacidad; no resolvió la inteligencia.</p>

**E3-6 · Mejorarlo con el prompt** (si hay tiempo, 2 min). En la chain, debajo de la línea de "Categoría", agregás:

```text
Fraude: el cliente dice que NO hizo una compra o que le usaron la tarjeta.
Cobro: le cobraron mal, de más o dos veces algo que sí compró.
Atención: no le contestan, no lo atienden o quiere cambiar algo de su viaje.
```

**Execute workflow** otra vez. (Esta versión no se probó al armar la clase: anotá en el ensayo qué cambia.)

- **Definir cada categoría** es lo primero que se prueba con un modelo chico. Si igual falla, el paso siguiente es
  un modelo más grande (7B u 8B) en una máquina con más memoria.

#### Ejemplo 4 en n8n · Ana con cerebro local: la filmina 11, andando (flujo `04`) (7 min)

> **En pocas palabras.** Ana, la asesora de la Semana 6, con un solo cambio: el cerebro es Ollama en vez de Gemini.
> Mismas herramientas, misma memoria, mismo manual.
>
> ```text
> Chat  →  Ana  ─┬─ Ollama (antes: Gemini)
>                ├─ memoria
>                └─ consultar_paquetes · cotizacion_dolar · calculadora
> ```
>
> **La idea para los alumnos:** un modelo de 3B no es buen cerebro para un agente con varias herramientas: tarda
> minutos, se saltea herramientas e inventa. Para eso, la nube (o un modelo local mucho más grande).

> ▶ **Dónde arranca.** Terminaste el Ejemplo 3. Seguís en n8n.
>
> ■ **Dónde termina.** Con la respuesta de Ana local comparada con la de la Semana 6. Seguís con el Ejemplo 5.

> **¿Anda en local (Docker)?** ✅ Sí. El cerebro queda en tu computadora; la planilla y el dólar son pedidos que salen
> de n8n (hace falta internet y la credencial de Google Sheets de la Semana 6).

<p style="color:#1a7f37">Y ahora la pregunta que se estarán haciendo: ¿y si a Ana, la de la semana pasada, le pongo el cerebro local? Gratis y privado. Probémoslo. Es un solo cambio: el sub-nodo del cerebro.</p>

**E4-1 · Copiar a Ana**

```text
Overview → abrí "Agente en vivo" (la Ana de la Semana 6) → arriba, menú … → Duplicate → nombre:  Ana local
```

- **Por qué duplicar:** la Ana de Gemini queda intacta, para comparar.

**E4-2 · Sacar el cerebro de la nube**

```text
Clic en el sub-nodo "Cerebro: Gemini" (abajo del agente) → tecla Supr
```

El agente queda con el conector **Chat Model** vacío y un asterisco rojo.

**E4-3 · Poner el cerebro local** (*Ollama Chat Model*)

```text
Conector "Chat Model" → + → ollama → Ollama Chat Model → renombralo:  Cerebro: Ollama (local)
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | **Ollama local** | La del Ejemplo 1 |
| *Model* | `llama3.2:latest` | Es el que sabe usar herramientas (el de 1B, no) |
| *Options* → *Sampling Temperature* | **0.2** | La misma que tenía con Gemini: así la comparación es justa |

- **Lo demás no se toca:** la memoria, las tres herramientas y el System Message siguen iguales. Revisá solo que
  *consultar_paquetes* tenga su credencial de Sheets y **ningún filtro** (como quedó en la Semana 6).

**E4-4 · Probar.** **Save** → **Open chat** → mandás:

```text
Hola! Quiero ir a Bariloche 5 días con mi pareja, ¿cuánto sale en pesos?
```

La primera respuesta tarda **minutos**: mientras tanto, abrís *Logs* y vas mostrando qué hace. Lo que pasó en el
ensayo, con la misma cuenta (USD 950 × 2 en pesos):

```text
Tardó más de 5 minutos.
Usó la calculadora: 950 × 2 = 1900.  Bien.
NO consultó el dólar.
Respondió: "El paquete cuesta $ 1.900.000."   ← inventado (la Ana de Gemini dio $ 3.011.500, con el dólar del día)
```

<p style="color:#1a7f37">Más de cinco minutos, y un precio inventado. Rompió dos reglas de su manual: usar el dólar para pasar a pesos, y no inventar. Con Gemini, la semana pasada: planilla, dólar, calculadora, y el precio exacto en segundos. No es que la IA local sea mala: tres mil millones de parámetros no alcanzan para coordinar tres herramientas. Para WhatsApp, la semana que viene, esto pesa: nadie espera cinco minutos una respuesta.</p>

- **Si sobra tiempo,** las otras dos preguntas de la Semana 6: *"¿Y el de nieve tiene lugar?"* (memoria y planilla) y
  *"¿Cuánto está el dólar blue?"* (el `$fromAI` del dólar).
- **Lo que la mejora:** temperatura 0; una regla más explícita ("para pasar a pesos, SIEMPRE primero
  cotizacion_dolar, después calculadora"); o un modelo más grande (`qwen2.5:7b`, `llama3.1:8b`) con 16 GB.

> **Para vos (Ejemplos 5, 6 y 7):** los flujos se armaron con los mismos nodos y versiones que los de hoy, pero **no se
> ejecutaron** contra Ollama ni contra Gemini (las respuestas del modelo pueden variar). Lo que sí se probó: la
> expresión regular del 7 detecta la tarjeta y el DNI de los ejemplos, y no marca "Somos 4 y vamos 15 días en 2026";
> y la limpieza del JSON del 6 funciona aunque el modelo lo encierre entre ```` ``` ````. Ensayalos antes.

#### Ejemplo 5 en n8n · La IA local lee las encuestas (flujo `05`) (8 min)

> **En pocas palabras.** Un formulario de "¿cómo estuvo tu viaje?". El modelo local dice si el comentario es
> Positivo, Negativo o Neutro, y un IF decide: si es negativo, aviso urgente; si no, se guarda como reseña.
>
> **La idea para los alumnos:** una tarea corta y cerrada (una palabra de tres posibles) es justo para lo que un
> modelo chico anda bien.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 4. Seguís en n8n. ■ **Dónde termina:** con los tres comentarios
> probados. Seguís con el Ejemplo 6.

> **¿Anda en local (Docker)?** ✅ Sí: es justamente la idea. Ollama corre en tu computadora y n8n le habla por
> `http://host.docker.internal:11434`. No hace falta dirección pública ni túnel. El formulario se abre con la *Test URL*, en tu navegador: también anda en local.

```text
Encuesta de viaje → Clasificar (local) → Limpiar la respuesta → ¿Es negativo? ─ true  → Aviso urgente al equipo
(n8n Form)          (Basic LLM Chain                             (IF)           └ false → Guardar como reseña
                     + Ollama)
```

Lo que tiene que pasar: *"El hotel estaba sucio y nadie nos fue a buscar al aeropuerto"* → `Negativo` → *"URGENTE:
Ana volvió de Salta disconforme… Llamarlo hoy."*

<p style="color:#1a7f37">La agencia manda una encuesta al volver del viaje. Los comentarios son de clientes: no hace falta mandarlos a Google para saber si alguien volvió enojado. Un modelo chico, en nuestra computadora, alcanza para eso.</p>

**E5-1 · La encuesta** (*n8n Form*)

```text
Overview → Create workflow → nombre:  Encuestas con IA local
Add first step → escribí  form  → n8n Form → en la lista, debajo de "Triggers": On new n8n Form event
```

- **Cuándo se coloca:** primero. Es el disparador: el flujo arranca cada vez que alguien manda la encuesta.
- Es el formulario de la Semana 4: un webhook con una página de preguntas.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Authentication* | **None** | Cualquier cliente con el link la puede completar |
| *Form Title* | `¿Cómo estuvo tu viaje?` | Lo que ve el cliente arriba, en grande |
| *Form Description* | `Contanos en pocas palabras. Nos ayuda a mejorar.` | El textito de abajo del título |
| *Form Elements* (la primera ya viene) | *Field Name* `Nombre` · *Element Type* **Text** · *Required Field* prendido | Cada pregunta llega a n8n como un casillero con ese mismo nombre |
| **Add Form Element** | `Destino` · **Text** · obligatoria | |
| **Add Form Element** | `Comentario` · **Textarea** · obligatoria | *Textarea* es una caja grande, para escribir varias líneas |
| *Respond When* | **Form Is Submitted** (viene así) | Le muestra "gracias" al cliente apenas manda, sin esperar a la IA |
| *Options* → **Add option** → *Form Path* | `encuesta-de-viaje` | El final de la dirección del formulario: una palabra que se entienda |

Cerrás → renombrás **Encuesta de viaje** → **Execute workflow** → se abre el formulario → completás *Ana · Salta ·
"El hotel estaba sucio y nadie nos fue a buscar"* → **Submit**. En *OUTPUT*: `Nombre`, `Destino`, `Comentario`.

<p style="color:#1a7f37">El formulario, como en la Semana 4: nombre, destino y un comentario libre, en una caja grande. Lo completo una vez, con una queja, así tengo datos para armar lo que sigue.</p>

**E5-2 · Clasificar con el modelo local** (*Basic LLM Chain* + *Ollama Chat Model*)

```text
+ a la derecha de "Encuesta de viaje" → escribí  basic llm  → Basic LLM Chain
```

- **Cuándo se coloca:** apenas llega el comentario. Es la única parte que necesita IA: entender si el cliente está
  contento o no.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt (User Message)* | **Define below** | El texto viene del formulario, no de un chat |
| *Prompt (User Message)* | `Leé el comentario de un cliente sobre su viaje y respondé SOLO una palabra, sin punto: Positivo, Negativo o Neutro.` + Enter dos veces + `Comentario: ` y arrastrás `Comentario` desde *INPUT* | Una consigna cerrada: una palabra, de tres posibles |
| *Require Specific Output Format* | Apagado | Es una palabra: no hace falta una ficha |

Cerrás → renombrás **Clasificar (local)**. Abajo, en **Model** → **+** → `ollama` → **Ollama Chat Model** → renombrás
**Cerebro local: Ollama**:

| Campo (*Cerebro local: Ollama*) | Qué ponés | Por qué |
|---|---|---|
| *Credential* | **Ollama local** (la de la práctica) | La dirección de tu Ollama: `http://host.docker.internal:11434` |
| *Model* | **llama3.2:latest** | El modelo que bajaste |
| *Options* → **Add Option** → *Sampling Temperature* | **0.1** | Lo más "quieto" posible: queremos siempre la misma respuesta, no creatividad |

<p style="color:#1a7f37">Una chain, con el cerebro de hoy. El prompt, bien cerrado: una sola palabra de tres posibles. Y la temperatura en 0,1: acá no queremos que se ponga creativo, queremos que diga siempre lo mismo para el mismo comentario.</p>

- **Una tarea, una palabra.** Para un modelo de 3B, cuanto más cerrada la consigna, mejor. "Analizá el comentario"
  daría un párrafo; "una palabra de esta lista", da una palabra.

**E5-3 · Limpiar la respuesta** (*Edit Fields*)

```text
Execute step en "Clasificar (local)" → OUTPUT:  text: Negativo
+ a la derecha → edit → Edit Fields (Set) → renombralo:  Limpiar la respuesta
```

- **Cuándo se coloca:** después de la IA y antes de decidir. El IF compara textos exactos: "Negativo." con punto no
  es igual a "Negativo".

| Campo (**Add Field**, cuatro veces) | Tipo | Valor | Por qué |
|---|---|---|---|
| `sentimiento` | String | `{{ $json.text.trim().replace('.', '') }}` | `trim()` saca los espacios de los costados; `replace('.', '')`, el punto si lo puso |
| `nombre` | String | Arrastrás `Nombre` desde *Encuesta de viaje* (en *INPUT*, desplegás ese nodo) → `{{ $('Encuesta de viaje').item.json.Nombre }}` | Los datos del formulario no llegan solos después de la IA: la chain solo devuelve `text`. Se buscan "atrás" |
| `destino` | String | Igual, con `Destino` | |
| `comentario` | String | Igual, con `Comentario` | |

<p style="color:#1a7f37">Los modelos chicos a veces agregan un punto o un espacio, aunque les digamos que no. Lo limpio. Y de paso traigo los datos del formulario: después de la chain solo queda el text, así que los busco en el nodo de la encuesta.</p>

**E5-4 · Decidir** (*If*) **y las dos salidas** (*Edit Fields*)

```text
+ a la derecha de "Limpiar la respuesta" → escribí  if  → If → renombralo:  ¿Es negativo?
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | Arrastrás `sentimiento` → `{{ $json.sentimiento }}` | Lo que miramos |
| *Conditions* · el del medio | **String** → **is equal to** | Comparar textos |
| *Conditions* · derecha | `Negativo` | Con mayúscula, como lo pide el prompt |

El IF tiene dos salidas: **true** (arriba) y **false** (abajo).

```text
+ en la salida "true"  → Edit Fields (Set) → renombralo:  Aviso urgente al equipo
+ en la salida "false" → Edit Fields (Set) → renombralo:  Guardar como reseña
```

| Nodo | Campo | Valor (Expression) |
|---|---|---|
| *Aviso urgente al equipo* | `aviso` (String) | `URGENTE: {{ $json.nombre }} volvió de {{ $json.destino }} disconforme: "{{ $json.comentario }}". Llamarlo hoy.` |
| *Guardar como reseña* | `resena` (String) | `{{ $json.sentimiento }} · {{ $json.nombre }} ({{ $json.destino }}): {{ $json.comentario }}` |

**Save**.

<p style="color:#1a7f37">El IF de siempre: si es negativo, aviso urgente; si no, reseña. Acá son dos Edit Fields para que se vea el resultado; en la vida real, el aviso sería un mail o un WhatsApp, y la reseña una fila en una planilla.</p>

**E5-5 · Probar con tres comentarios**

Para cada uno: **Execute workflow** → completás el formulario → mirás por qué rama salió.

```text
"El hotel estaba sucio y nadie nos fue a buscar"           → Negativo → Aviso urgente
"¡Todo espectacular! Volvemos el año que viene"             → Positivo → Reseña
"Estuvo bien, el vuelo se atrasó un poco"                   → Neutro (o Negativo: el modelo chico duda) → Reseña
```

<p style="color:#1a7f37">Los claros, los acierta. El del medio, "estuvo bien pero se atrasó", puede dudar. Eso es lo que hay que saber de un modelo chico: en lo obvio anda; en lo fino, se equivoca más que uno grande.</p>

#### Ejemplo 6 en n8n · De un mensaje escrito como sea, a la planilla (flujo `06`) (10 min)

> **En pocas palabras.** Tres mensajes escritos como escribe la gente ("somos 6 amigos y queremos conocer Ushuaia").
> El modelo local saca nombre, destino y personas en un JSON, y cada mensaje queda como una fila en la planilla.
>
> **La idea para los alumnos:** pedirle al modelo una forma fija (un JSON) y convertirla en casilleros.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 5. Seguís en n8n. ■ **Dónde termina:** con tres filas nuevas en
> "Consultas de la agencia". Seguís con el Ejemplo 7.

> **¿Anda en local (Docker)?** ✅ Sí. El modelo queda en tu computadora; Google Sheets es un pedido que sale de n8n
> (la credencial de la Semana 4).

```text
Arrancar a mano → Mensajes de prueba → Uno por uno → Sacar los datos (local) → Armar la fila → Guardar en la planilla
                  (3 mensajes)          (Split Out)   (Chain + Ollama, JSON)    (JSON.parse)     (Sheets · Append)
```

Lo que tiene que pasar: *"Hola! soy Carla Gómez, queremos ir a Salta con mi marido y mis dos hijos en julio"* → una
fila `13/11/2026 10:30 | Carla Gómez | Salta | 4` en "Consultas de la agencia" (la planilla de la Semana 4).

<p style="color:#1a7f37">La gente no escribe como un formulario. Escribe "somos 6 amigos y queremos conocer Ushuaia". Este ejemplo saca de ese texto los tres datos que necesitamos, nombre, destino y personas, y los anota en la planilla. Con el modelo local, el mensaje del cliente no sale de nuestra computadora.</p>

**E6-1 · El disparador y los mensajes de prueba** (*Trigger manually* + *Edit Fields* en modo JSON)

```text
Overview → Create workflow → nombre:  De mensaje a planilla
Add first step → manual → Trigger manually → renombralo:  Arrancar a mano
+ → edit → Edit Fields (Set) → renombralo:  Mensajes de prueba
```

- **Cuándo se coloca:** el *Edit Fields* va después del disparador y hace de "bandeja de entrada": en lugar de
  esperar mensajes de verdad, escribimos tres. La semana que viene, ese lugar lo ocupa WhatsApp.

| Campo (*Mensajes de prueba*) | Qué ponés | Por qué |
|---|---|---|
| *Mode* | **JSON** | Para pegar una lista entera de una vez, en vez de campo por campo |
| *JSON* | El bloque de abajo | Tres mensajes escritos como escribe la gente |

```json
{
  "mensajes": [
    { "texto": "Hola! soy Carla Gómez, queremos ir a Salta con mi marido y mis dos hijos en julio" },
    { "texto": "buenas, me llamo Pedro. Somos 6 amigos y queremos conocer Ushuaia" },
    { "texto": "Hola, quisiera info de Mendoza para mí sola. Gracias! Lucía" }
  ]
}
```

**E6-2 · Uno por uno** (*Split Out*)

```text
+ a la derecha de "Mensajes de prueba" → escribí  split  → Split Out → renombralo:  Uno por uno
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Fields To Split Out* | `mensajes` | El nombre de la lista. Si está mal escrito, sale 1 item en vez de 3 |
| *Include* | **No Other Fields** (viene así) | No hay otros datos que conservar |

- **Cuándo se coloca:** después de la lista y antes de la IA. Separa la lista en items, uno por mensaje, y así cada
  nodo siguiente corre **una vez por mensaje** (Semana 3).

<p style="color:#1a7f37">Tres mensajes de prueba, escritos como escribe la gente, sin orden. El Split Out los separa: tres items, uno por mensaje. Desde acá, todo lo que sigue corre tres veces.</p>

**E6-3 · Pedirle un JSON al modelo** (*Basic LLM Chain* + *Ollama Chat Model*)

```text
+ a la derecha de "Uno por uno" → basic llm → Basic LLM Chain → renombralo:  Sacar los datos (local)
```

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt* | **Define below** | |
| *Prompt (User Message)* | El texto de abajo; al final, arrastrás `texto` | Le mostramos el molde exacto de la respuesta |
| *Require Specific Output Format* | Apagado | El formato lo pedimos en el prompt y en el modelo |

```text
Del mensaje de un cliente, sacá tres datos y respondé SOLO con un JSON, sin texto antes ni después, así:
{"nombre": "...", "destino": "...", "personas": 0}

Reglas: personas es un número (contá a la persona que escribe). Si un dato no está, poné "".

Mensaje: {{ $json.texto }}
```

Abajo, **Model** → **+** → **Ollama Chat Model** → **Cerebro local: Ollama**:

| Campo (*Cerebro local: Ollama*) | Qué ponés | Por qué |
|---|---|---|
| *Credential* | **Ollama local** (la de la práctica) | La dirección de tu Ollama: `http://host.docker.internal:11434` |
| *Model* | **llama3.2:latest** | El modelo que bajaste |
| *Options* → **Add Option** → *Sampling Temperature* | **0.1** | Lo más "quieto" posible: queremos siempre la misma respuesta, no creatividad |
| *Options* → **Add Option** → *Format* (o *Output Format*) | **JSON** | Obliga a Ollama a contestar solo con un JSON. Si tu versión no lo muestra, alcanza con el prompt |

**Execute step** → *OUTPUT*: `text: {"nombre": "Carla Gómez", "destino": "Salta", "personas": 4}` (tres veces, una por
mensaje).

<p style="color:#1a7f37">Le pido una respuesta con forma fija: un JSON, la ficha con llaves de la Semana 4. Le muestro el molde, y le pongo una regla para lo difícil: contar personas. Y en el modelo, la opción Format JSON, que lo obliga a contestar solo con la ficha.</p>

- **Mostrar el molde es la mitad del trabajo.** El modelo copia la forma que ve.
- **Contar personas es lo más difícil.** "Con mi marido y mis dos hijos" son 4: el modelo chico a veces dice 3.

**E6-4 · Convertir el texto en casilleros** (*Edit Fields*)

```text
+ a la derecha de "Sacar los datos (local)" → edit → Edit Fields (Set) → renombralo:  Armar la fila
```

- **Cuándo se coloca:** entre la IA y la planilla. La chain devuelve **un texto** (`text`) que parece una ficha; la
  planilla necesita **casilleros**. Este nodo lo convierte.

| Campo (**Add Field**) | Tipo | Valor | Por qué |
|---|---|---|---|
| `fecha` | String | `{{ $now.format('dd/MM/yyyy HH:mm') }}` | Cuándo llegó |
| `nombre` | String | `{{ JSON.parse($json.text.replace(/```json\|```/g, '').trim()).nombre }}` | Lee el texto como ficha y saca `nombre` |
| `destino` | String | Igual, terminando en `.destino` | |
| `personas` | **Number** | Igual, terminando en `.personas` | Número, para poder sumar después |

Los nombres `fecha`, `nombre`, `destino`, `personas` son **los mismos de la fila 1 de la planilla**: eso hace que el
paso siguiente funcione solo.

<p style="color:#1a7f37">El modelo devuelve la ficha como texto, todo junto. JSON punto parse lo lee como una ficha de verdad, y de ahí saco cada dato. El replace es un seguro: a veces el modelo encierra el JSON entre tres comillas invertidas, y eso lo saca.</p>

- **`JSON.parse(texto)` = "leé este texto como una ficha".**
- **Si da error *Unexpected token*:** el modelo agregó texto antes o después del JSON. Mirá su `text` en la chain y
  ajustá el prompt.

**E6-5 · Guardar en la planilla** (*Google Sheets*)

```text
+ a la derecha de "Armar la fila" → escribí  sheets  → Google Sheets → en "Actions": Append row in sheet
```

- **Cuándo se coloca:** al final: es la salida, adonde queda el resultado.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Credential* | Tu credencial de Google Sheets (la de las Semanas 4 y 6) | Si dice *needs to be reconnected*, es el vencimiento de 7 días de la Semana 6 |
| *Resource* | **Sheet Within Document** | Trabajamos con una hoja de la planilla |
| *Operation* | **Append Row** | Agregar una fila abajo de todo |
| *Document* | **From list** → **Consultas de la agencia** | La planilla de la Semana 4 (títulos `fecha`, `nombre`, `destino`, `personas`). *From list* es lo que mejor anduvo |
| *Sheet* | **From list** → **Hoja 1** | La pestaña de adentro |
| *Mapping Column Mode* | **Map Automatically** | Cada casillero va a la columna que se llama igual |

Cerrás → renombrás **Guardar en la planilla** → **Save** → **Execute workflow** → en la planilla, tres filas nuevas:
*Carla Gómez | Salta | 4 · Pedro | Ushuaia | 6 · Lucía | Mendoza | 1*.

<p style="color:#1a7f37">Y lo de la Semana 4: agregar fila, con Map Automatically. Tres mensajes escritos como sea, tres filas ordenadas. Conectado al WhatsApp de la semana que viene, esto anota solo cada consulta que llega.</p>

#### Ejemplo 7 en n8n · El router de privacidad: lo sensible, al local; lo demás, a la nube (flujo `07`) (10 min)

> **En pocas palabras.** Tres mensajes de clientes. Un IF mira si el texto tiene algo con forma de tarjeta o de DNI:
> si tiene, contesta Ollama; si no, Gemini.
>
> **La idea para los alumnos:** "local o nube" no se elige una vez para siempre: se puede decidir mensaje por
> mensaje. Junta todo lo de hoy.

> ▶ **Dónde arranca.** Terminaste el Ejemplo 6. Seguís en n8n. ■ **Dónde termina:** con los tres mensajes
> repartidos. **Volvés al PowerPoint, a la filmina 28.**

> **¿Anda en local (Docker)?** ✅ Sí. La rama de Ollama queda en tu computadora; la de Gemini sale hacia Google.

```text
Arrancar a mano → Mensajes de prueba → Uno por uno → ¿Tiene datos sensibles? ─ true  → Responder (local) → Respuesta local
                                                       (IF, expresión regular)  │        (Ollama)
                                                                                └ false → Responder (nube)  → Respuesta nube
                                                                                         (Gemini)
```

Lo que tiene que pasar: el mensaje con la tarjeta y el del DNI van al **modelo local**; el de "¿qué llevo a
Ushuaia?" va a **Gemini**.

<p style="color:#1a7f37">Este junta todo lo de hoy. ¿Local o nube? No hace falta elegir uno para siempre: se puede decidir mensaje por mensaje. Si el mensaje trae un dato sensible, una tarjeta o un DNI, lo responde el modelo de nuestra computadora. Si no, Gemini, que es más rápido y contesta mejor. Y lo decide el flujo, con una regla fija, no el modelo.</p>

**E7-1 · El disparador, los mensajes y uno por uno**

```text
Overview → Create workflow → nombre:  Router de privacidad
Add first step → manual → Trigger manually → renombralo:  Arrancar a mano
+ → edit → Edit Fields (Set) → renombralo:  Mensajes de prueba   (Mode: JSON, el bloque de abajo)
+ → split → Split Out → renombralo:  Uno por uno   (Fields To Split Out: mensajes)
```

Son los mismos tres primeros nodos del Ejemplo 6 (mirá ahí la tabla de cada uno), con otros mensajes:

```json
{
  "mensajes": [
    { "cliente": "Marta", "texto": "Quiero pagar la seña con la tarjeta 4517 6601 2345 9087, ¿cómo hago?" },
    { "cliente": "Jorge", "texto": "Para el seguro de viaje necesitan mi DNI? es 30.123.456" },
    { "cliente": "Sofía", "texto": "¿Qué conviene llevar para Ushuaia en julio?" }
  ]
}
```

<p style="color:#1a7f37">Tres mensajes: uno con un número de tarjeta, uno con un DNI, y uno común. Los mismos tres nodos de antes: disparador, la lista, y el Split Out que los separa.</p>

**E7-2 · ¿Tiene datos sensibles?** (*If* con una expresión regular)

```text
+ a la derecha de "Uno por uno" → if → If → renombralo:  ¿Tiene datos sensibles?
```

- **Cuándo se coloca:** **antes** de cualquier IA. La decisión de adónde va el mensaje se toma sin mandárselo a
  ningún modelo.

| Campo | Qué ponés | Por qué |
|---|---|---|
| *Conditions* · izquierda | Arrastrás `texto` → `{{ $json.texto }}` | El mensaje del cliente |
| *Conditions* · el del medio | **String** → **matches regex** | "¿Tiene esta forma?", no "¿es igual a?" |
| *Conditions* · derecha | `(\d{4}[ -]?){3}\d{4}\|\d{1,2}\.?\d{3}\.?\d{3}` | La forma de una tarjeta **o** de un DNI |

<p style="color:#1a7f37">El IF pregunta: ¿el texto tiene algo con forma de tarjeta o de DNI? Para eso uso una expresión regular: un molde que describe una forma. Parece jeroglífico, pero dice algo simple: cuatro grupos de cuatro números, o un número de siete u ocho cifras, con puntos o sin puntos.</p>

- **Expresión regular (*regex*) = un molde de búsqueda.** `\d` es "un número"; `{4}`, "cuatro veces"; `|`, "o".
  No hace falta aprenderlo: se copia, y se prueba.
  - *Ejemplo:* "4517 6601 2345 9087" y "30.123.456" encajan; "somos 4 y vamos 15 días" no.

**E7-3 · Dos chains, dos cerebros**

```text
+ en la salida "true"  → basic llm → Basic LLM Chain → renombralo:  Responder (local)
   abajo, Model → + → Ollama Chat Model → Cerebro local: Ollama
+ en la salida "false" → basic llm → Basic LLM Chain → renombralo:  Responder (nube)
   abajo, Model → + → Google Gemini Chat Model → Cerebro nube: Gemini
```

| Campo (en **las dos** chains) | Qué ponés | Por qué |
|---|---|---|
| *Source for Prompt* | **Define below** | |
| *Prompt (User Message)* | El texto de abajo (el mismo en las dos) | Mismo pedido; lo único distinto es el cerebro |

```text
Sos la asesora de la agencia de viajes "Rumbo Sur". Respondé este mensaje en 3 líneas como mucho, en español rioplatense. Nunca repitas números de tarjeta ni de documento.

Mensaje: {{ $json.texto }}
```

| Sub-nodo | Campo | Qué ponés | Por qué |
|---|---|---|---|
| *Cerebro local: Ollama* | *Credential* · *Model* · *Temperature* | Ollama local · `llama3.2:latest` · **0.1** | Lo sensible se queda en tu computadora |
| *Cerebro nube: Gemini* | *Credential* · *Model* · *Temperature* | La de Gemini · el **flash** · **0.3** | Lo común va al modelo más rápido y mejor |

- **"Nunca repitas números de tarjeta ni de documento"** va en los dos: aunque el local no los manda afuera, la
  respuesta igual no tiene por qué repetirlos.

**E7-4 · Anotar qué cerebro respondió** (*Edit Fields*, uno en cada rama)

```text
+ a la derecha de "Responder (local)" → Edit Fields (Set) → renombralo:  Respuesta local
+ a la derecha de "Responder (nube)"  → Edit Fields (Set) → renombralo:  Respuesta nube
```

| Campo | Tipo | *Respuesta local* | *Respuesta nube* | Por qué |
|---|---|---|---|---|
| `cliente` | String | `{{ $('Uno por uno').item.json.cliente }}` | igual | El nombre quedó "atrás", antes de la chain |
| `cerebro` | String | `Ollama (local): tenía datos sensibles` | `Gemini (nube)` | Para ver, en el resultado, quién contestó |
| `respuesta` | String | `{{ $json.text }}` | igual | Lo que escribió el modelo |

<p style="color:#1a7f37">Dos chains con el mismo prompt y cerebros distintos. Arriba, Ollama. Abajo, Gemini. Y al final de cada una, anoto quién respondió, para verlo.</p>

**E7-5 · Probar**

```text
Save → Execute workflow →
   Marta (tarjeta)  → Respuesta local · Ollama
   Jorge (DNI)      → Respuesta local · Ollama
   Sofía (Ushuaia)  → Respuesta nube  · Gemini
```

<p style="color:#1a7f37">La tarjeta de Marta y el DNI de Jorge nunca salieron de esta computadora. La pregunta de Sofía, que no tiene nada privado, la contestó Gemini, rápido y bien. Lo mejor de los dos mundos. Y es lo que pregunta la Pre-entrega 4: la decisión local o nube. Esta es una tercera respuesta posible: las dos, según el mensaje.</p>

- **El que decide es el flujo, no el modelo.** Si se lo preguntáramos al modelo ("¿esto es sensible?"), ya le
  estaríamos mandando el dato. Por eso, una regla fija.
- **La regex no es perfecta.** Un CBU, una dirección o un diagnóstico no los detecta. Para datos muy delicados, todo
  local.

↩️ **Volvés al PowerPoint · filmina 28.**

#### Las trabas más comunes (Sección 03)

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "*ollama* no se reconoce como nombre de un cmdlet" | Cerrá PowerShell y abrí otra. Si sigue, Ollama no se instaló: volvé a correr el instalador. |
| "`http://localhost:11434` no carga" | Ollama no está corriendo. Buscá "Ollama" en el menú Inicio y abrilo: aparece la llama al lado del reloj. |
| "Se queda girando y no responde" | Es la primera carga: puede tardar varios minutos en una máquina sin placa de video. Mirá el monitor: si la memoria está al 100 %, cerrá programas. |
| "`signal: killed`" o "*model requires more system memory*" | No alcanza la memoria. Cerrá pestañas, `ollama stop` de otro modelo cargado, o usá `llama3.2:1b`. |
| "`ollama run` se puso a descargar" | El modelo no estaba descargado: `run` lo baja solo. Es el "instalé Ollama, ya tengo la IA" de la filmina 18. |
| La credencial da error de conexión, o el nodo dice **`fetch failed`** | n8n en Docker con `localhost`. Cambiá la *Base URL* por `http://host.docker.internal:11434`. |
| "Uso n8n Cloud y no conecta" | n8n Cloud no puede ver tu computadora. Hacé los Pasos 1 a 3 y el 4 miralo; en casa, n8n en Docker con la guía de la Semana 2. |
| "En *Model* no aparece ningún modelo" | La credencial no conecta, o no bajaste ninguno. Probá `ollama list`. |
| **`model 'llama3' not found`** (en n8n o en la terminal) | El nombre tiene que ser exacto, el de `ollama list`: `llama3.2:latest`, no `llama3`. |
| La respuesta está en inglés o es rara | Es un modelo chico. Pedí "respondé en español" en el prompt, y no esperes la calidad de Gemini. |
---

### 155–159 · Cómo sigue y la tarea

#### Filmina 28 · ¿Cómo sigue? Del laboratorio al canal real (2 min)

<p style="color:#1a7f37">Lo que ya tienen: un agente que puede correr con un modelo en la nube o en su propia máquina. Lo que le falta: un canal por donde la gente le hable de verdad. El Módulo 8 es WhatsApp Business, con la API de Meta y n8n. El mismo agente, pero atendiendo mensajes reales de personas reales.</p>

Para explicar:
- **"Lo que ya tenés: un agente que puede correr con un modelo en la nube o en tu propia máquina."** El cerebro es
  una pieza que se cambia: hoy lo vimos con una chain (Ejemplo 1) y con Ana (Ejemplo 4).
  - *Ejemplo:* Ana con Gemini, o Ana con `llama3.2`. Mismas herramientas, mismo system prompt.
- **"Lo que le falta: un canal por donde la gente le hable de verdad."** Un **canal** es el medio por donde llegan
  los mensajes: el chat de prueba de n8n, un formulario, WhatsApp.
  - *Ejemplo:* Hasta ahora, a Ana le escribimos solo nosotros, desde el botón *Open chat* de n8n.
- **"Módulo 8: WhatsApp Business, con Meta Cloud API y n8n."** **Meta** es la empresa dueña de WhatsApp. La **Meta
  Cloud API** es su API para que un programa mande y reciba mensajes de WhatsApp.
  - *Ejemplo:* Un cliente escribe al WhatsApp de la agencia, n8n recibe el mensaje, Ana responde.
- **"La conexión: el mismo agente, pero atendiendo mensajes reales de personas reales."** Y ahí aparece una decisión
  de hoy: para responder rápido por WhatsApp, ¿alcanza un modelo local?
  - *Ejemplo:* Al preparar esta clase, la Ana local (`llama3.2`, sin placa de video) tardó más de 5 minutos en
    responder y, además, inventó el precio en pesos. Para WhatsApp, eso no sirve: conviene la nube, o un modelo
    local más grande en una máquina potente.

**La tarea** (2 min, sin filmina). Pegás en el chat:

```text
TAREA · Semana 7 (no hay pre-entrega) · ejercicios-alumnos.md
1. Ejercicio 3: instalá Ollama, bajá llama3.2 y rehacé los Ejemplos 1 y 2 en tu n8n.
2. Ejercicios 1 y 2: ¿local o nube? y ¿qué modelo te entra?
3. Ejercicio 4: dos tamaños, la misma pregunta.
4. Ejercicios 5 y 6: mejorá la clasificación de las quejas, y tapá los datos antes de la IA.
5. Ejercicio 7: Ana con cerebro local, con tus preguntas. Te sirve para elegir el cerebro de la Pre-entrega 4.
6. El cuestionario del módulo en la plataforma (4 preguntas).
```

<p style="color:#1a7f37">Esta semana no hay pre-entrega, pero la que viene es la cuarta: el asistente de WhatsApp. Con el Ejercicio 7 dejan el agente listo con los dos cerebros, para elegir con datos y no a ojo.</p>

---

### 159–162 · Preguntas y cierre

**Filmina 29 · Abrimos micrófonos y chat** (2 min)

<p style="color:#1a7f37">¿Cuánta RAM libre tienen y qué tramo de modelo les entra? ¿A alguien le dio error de conexión entre n8n y Ollama? Puede ser Docker. ¿Tienen algún caso donde la privacidad sea el argumento decisivo? Abrimos micrófonos y chat.</p>

Para explicar:
- **Si alguien quedó con el puente sin andar**, que pegue en el chat su *Base URL* y dónde corre su n8n. Nueve de
  cada diez veces es `localhost` con n8n en Docker.
- **Si alguien tiene un caso de privacidad**, es material para la pre-entrega: el paso con datos sensibles va local,
  y el resto puede ir a la nube.

**Filmina 30 · Gracias** (1 min)

<p style="color:#1a7f37">Gracias por estudiar con nosotros. Nos vemos la semana que viene con WhatsApp.</p>

---

---

### Checklist de salida

- [ ] Todos saben la diferencia entre Ollama (el motor) y un modelo (el archivo).
- [ ] Saben cómo elegir el tamaño de modelo según su RAM (filmina 16).
- [ ] Vieron en tu pantalla la pregunta en la terminal, la memoria subiendo y el modelo respondiendo sin internet.
- [ ] Vieron n8n conectado con Ollama (Ejemplo 1) y saben qué revisar si no conecta (Base URL, n8n Cloud, memoria).
- [ ] Vieron la comparación local contra nube (Ejemplo 2) y saben que la elección es por paso, no para todo el flujo.
- [ ] Vieron dónde alcanza lo local (quejas, encuestas, mensaje a planilla) y dónde no (Ana con herramientas).
- [ ] Tienen la tarea: los ejercicios de [ejercicios-alumnos.md](ejercicios-alumnos.md).
- [ ] Saben que la semana que viene es WhatsApp y la Pre-entrega 4.

---

### Glosario de la clase

| Término | En criollo | Ejemplo |
|---|---|---|
| **IA local** | Un modelo de IA que funciona en tu propia computadora, no en la de una empresa. | `llama3.2` en Ollama. |
| **La nube** | Las computadoras de una empresa, a las que nos conectamos por internet. | Gemini, en los servidores de Google. |
| **Ollama** | El programa que descarga, guarda y hace funcionar modelos de IA en tu computadora. El reproductor. | `ollama run llama3.2` |
| **Modelo** | El archivo con lo que la IA aprendió. La canción. | `llama3.2`, 2 GB. |
| **Parámetros** | Los números internos del modelo. Más parámetros, más capaz y más pesado. | 3B = 3.000 millones. |
| **B** | *Billion*: mil millones, en inglés. | `llama3.2:1b`: mil millones de parámetros. |
| **Inferencia** | Cada vez que el modelo genera una respuesta. | Cada ejecución de la Basic LLM Chain. |
| **Entrenamiento** | Cuando la empresa le enseña al modelo con muchísimo texto. Nosotros no lo hacemos. | — |
| **Token** | Un pedacito de texto, como tres cuartos de una palabra. Las APIs cobran por token. | "Bariloche" son 2 o 3 tokens. |
| **Trade-off** | Un toma y daca: ganar algo resignando otra cosa. | Privacidad a cambio de inteligencia. |
| **Hardware** | La parte física de la computadora. | Procesador, memoria, disco, placa de video. |
| **RAM** | La memoria rápida, la que se usa mientras algo está abierto. El modelo tiene que entrar ahí. | 8 GB, 16 GB. |
| **CPU** | El procesador. Puede correr el modelo, pero más lento. | `100% CPU` en `ollama ps`. |
| **GPU** / **placa de video** | La parte pensada para gráficos; es muy rápida para la IA. | Una NVIDIA RTX 4070. |
| **VRAM** | La memoria de la placa de video. Si el modelo entra ahí, vuela. | 8 GB de VRAM. |
| **Cuantizar** (*quantized*) | Comprimir el modelo guardando sus números con menos precisión, para que ocupe menos. | `Q4_K_M`: 2 GB en vez de 6. |
| **Latencia** | El tiempo que tarda en llegar la respuesta. | 9 segundos. |
| **Puerto** | El "número de departamento" en el que atiende un programa dentro de la computadora. | Ollama: 11434. n8n: 5678. |
| **Localhost** | "Esta misma computadora". Adentro de un contenedor, es el contenedor. | `http://localhost:11434` |
| **host.docker.internal** | El nombre de tu computadora visto desde adentro de un contenedor de Docker. | `http://host.docker.internal:11434` |
| **Base URL** | La dirección base de una API: a partir de ella se arman todos los pedidos. | La de la credencial de Ollama. |
| **Terminal** | La ventana donde se escriben comandos. | PowerShell, Terminal de Mac. |
| **Comando** | Una orden escrita en la terminal. | `ollama list` |
| **Deprecación** | Cuando un proveedor anuncia que un modelo deja de ofrecerse. | "Este modelo deja de funcionar en tal fecha." |
| **Límite de rate** | El tope de pedidos por minuto de una API. Si lo pasás: 429. | El plan gratis de Gemini. |
| **Datos sensibles** | Los que pueden hacer daño si se filtran. La ley los protege más. | Salud, tarjetas, documentos. |
| **Canal** | El medio por donde llegan los mensajes al agente. | WhatsApp, el chat de n8n. |
