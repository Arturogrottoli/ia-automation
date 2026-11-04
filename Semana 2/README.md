# Semana 2 — Módulo 2: Introducción a las automatizaciones y n8n

Fuente: `program-summary.pdf` (Módulo 2). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_2_AI_Automation.pptx` | Las filminas del módulo (39). |
| `Semana 2.docx` | El material de lectura del módulo, con el cuestionario de 6 preguntas. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase, para casa y la consigna completa de la pre-entrega con su rúbrica. Se comparte con los alumnos. |
| [instalar-n8n-local.md](instalar-n8n-local.md) | Guía paso a paso para instalar n8n gratis en la computadora con Docker (WSL, Docker Desktop, bajar n8n, crear el usuario). Se comparte con los alumnos. |
| [n8n/](n8n/) | Tres workflows listos para importar en n8n (el flujo mínimo, el flujo roto y el de la agencia con IA). |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, el paso a paso de las demos de n8n en vivo y la pre-entrega resuelta con el caso de la agencia de viajes. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿Lineal o cognitiva? | 2 min |
| En clase | 2 · Calculá el ROI (con break-even) | 3 min |
| En clase | 3 · Desafío de priorización | 3 min |
| En clase | 4 · Tu primer flujo en n8n (y romperlo) | 7 min |
| Casa | 5 · ¿Trigger o acción? | 5 min |
| Casa | 6 · Explorá un template | 15 min |
| Casa | 7 · Tu proceso en JSON | 10 min |
| Casa | 8 · Si no llegaste en clase: tu instancia y tu primer flujo | 20 min |
| Casa | Pre-entrega (con el ejemplo resuelto como guía) | 60–90 min |

## Evaluación

- **Pre-entrega: De la idea al prompt.** Proceso, ROI, boceto del flujo en n8n, prompt del nodo de IA y reflexión sobre riesgos. Un único PDF. 100 pts, se aprueba con 70.

## A tener en cuenta

- **El número de la pre-entrega no coincide:** las filminas (3, 31 y 32) dicen "Pre-entrega 2"; el `program-summary.pdf` la llama "Preentrega 1: De la idea al prompt". Conviene unificarlo antes de la clase.
- **La filmina 26 tiene dos actividades:** el desafío de priorización (adelantado a la sección de ROI) y un flujo mínimo en n8n que se rompe a propósito. El bloque de n8n en vivo la amplía con un recorrido por la interfaz y el flujo de la agencia funcionando (workflow 03 de la carpeta `n8n/`).
- **La instalación de n8n se hace en clase**, en la Sección 03, cada uno en su computadora (Docker, gratis). En la Semana 1 no se pide nada. En Windows hay que reiniciar la computadora: por eso la instalación está partida en dos, antes y después del break, y el reinicio cae en el break.
- **Las filminas 33 a 36** resumen la pre-entrega; los pesos exactos de la rúbrica están en el programa y en `ejercicios-alumnos.md`.
- **El Módulo 3 menciona nodos** (IF, Switch, Merge, Wait) en la filmina 37: es el adelanto de la semana que viene.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–10 | Apertura y repaso de la Semana 1 | 1–5 | |
| 10–22 | **01 · Qué es una automatización** | 6–10 | Ej. 1 (2 min) |
| 22–35 | **02 · ROI: cuándo vale la pena** | 11–16 | Ej. 2 y Ej. 3 (3 min c/u) |
| 35–48 | **03 · n8n: qué es y para qué sirve** (ejemplos, instancia, JSON, tipos de nodos, el nodo de IA, workflow, templates) | 17–23 | |
| 48–55 | **03 · Instalación en vivo, parte 1:** WSL y Docker Desktop (y qué es Docker, mientras se instala) | sin filmina | Cada uno en su computadora |
| 55–65 | Break (en Windows, reinician acá) | 24 | |
| 65–78 | **03 · Instalación en vivo, parte 2:** bajar n8n, prenderlo y crear el usuario | sin filmina | Cada uno en su computadora |
| 78–105 | **04 · n8n en vivo: cómo se usa** | 25–26 | Ej. 4 (7 min) |
| 105–110 | Los 5 pasos de la pre-entrega, con el ejemplo resuelto | 27–31 | |
| 110–116 | **05 · Pre-entrega** y cómo sigue | 32–37 | |
| 116–120 | Preguntas y cierre | 38–39 | Tarea |

**Si el tiempo se aprieta** (la instalación es lo que más se puede estirar), recortá en este orden: la tabla de n8n frente a Zapier y Make y el workflow exportado (se mencionan, no se muestran), el Ejercicio 3 (priorización), la lectura nodo por nodo del
flujo 03 (se ejecuta y se muestra solo el prompt y el resultado), el Ejercicio 4 en clase (los alumnos arman el flujo mínimo en casa, con el Ejercicio 8)
y los pasos 3 a 5 de la pre-entrega (se lee la consigna y listo).

---

### Preparación (antes de la clase)

- [ ] **Tu instancia de n8n abierta** (Cloud o local) y ya logueada. Probá antes todo lo de la sección 04.
- [ ] **Los workflows listos para importar** (carpeta [n8n/](n8n/)), probados en n8n 2.46. Se abren con el menú
  **…** del lienzo → **Import from File**:
  - `01-mi-primer-flujo.json`: el flujo mínimo del Paso D, terminado. Es el plan B si algo no sale en vivo.
  - `02-mi-primer-flujo-roto.json`: los dos errores del Paso E, el silencioso y el rojo, uno abajo del otro.
  - `03-agencia-consultas-con-ia.json`: el flujo de la agencia con la plantilla de la Semana 1 adentro de un nodo
    de IA. Simula la llegada de dos mails (Martín y Lucía) y arma la fila de la planilla, con la columna *estado*
    en "a revisar" si falta un dato. No necesita Gmail ni Google Sheets, solo una clave de API de Gemini
    (gratis en aistudio.google.com → *Get API key*). Es el flujo que mostrás en el Paso C de la Sección 04.
  Cómo se usa cada uno en clase está en "Antes de la clase", al principio de la Sección 04.
- [ ] **Una clave de API de Gemini** (aistudio.google.com → *Get API key*), cargada como credencial en el flujo 03.
- [ ] **Una cuenta de Gmail de prueba** (no la personal) para crear la credencial en vivo en el recorrido.
- [ ] `ejercicios-alumnos.md` listo para compartir: tiene el paso a paso del flujo mínimo que replican los alumnos.
- [ ] **El día anterior**, avisales que en esta clase instalamos n8n: que se conecten desde una computadora (no desde el celular), con unos 10 GB libres y con permiso para instalar programas (si es una compu del trabajo, que lo consulten antes). No tienen que instalar nada antes.
- [ ] **La guía [instalar-n8n-local.md](instalar-n8n-local.md)** lista para compartir durante la instalación.
- [ ] **Definí el número de la pre-entrega:** las filminas dicen "Pre-entrega 2", el programa dice "Preentrega 1: De la idea al prompt".
- [ ] Avisar que la clase queda grabada.

---

### 0–10 · Apertura y repaso de la Semana 1

**Filmina 1 · Portada** (1 min) — Módulo 2.

<p style="color:#1a7f37">Bienvenidos al Módulo 2. Hoy conocemos n8n, la herramienta con la que vamos a automatizar durante todo el curso. n8n es un programa que conecta las aplicaciones que ya usamos todos los días, como Gmail, WhatsApp o una planilla de Google, para que hagan solas las tareas que hoy hacemos a mano.</p>

Para explicar:
- **Qué es n8n.** Es un programa que funciona desde el navegador, como Gmail o Google Drive. Adentro se arman "recetas" del tipo "cada vez que pase esto, hacé aquello": cada vez que llega un mail, copiá los datos en la planilla; todos los lunes a las 9, mandame el resumen de ventas. Una vez armada, la receta se repite sola, sin que nadie tenga que estar mirando. No hace falta saber programar: se arma con bloques que se unen con flechas, como un dibujo.
  - *Ejemplo:* Una pastelería recibe pedidos por mail. Con n8n, cada pedido que llega se anota solo en la planilla de pedidos y la dueña recibe un aviso en el celular. Ella no copia nada.
- **De dónde viene el nombre.** Se pronuncia "ene-ocho-ene". Es una abreviatura de *nodemation*, una palabra inventada que junta *node* (nodo, cada bloque del dibujo) y *automation* (automatización): "automatización con bloques". Se escribe n8n porque es la n del principio, la n del final y, en el medio, el número de letras que se saltean: ocho. Es como cuando en un mensaje escribimos "xq" en vez de "porque": una forma corta de escribir una palabra larga.
  - *Ejemplo:* n·odematio·n → n + 8 letras + n → n8n.
- **Por qué esta herramienta.** Es gratis si se instala en la propia computadora, tiene bloques listos para cientos de aplicaciones y permite meter inteligencia artificial en el medio de un proceso. Es la que vamos a usar en todas las clases que quedan.
  - *Ejemplo:* Gmail, WhatsApp, Google Sheets, Google Calendar, Telegram, ChatGPT: todas tienen su bloque en n8n.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy van a aprender qué es una automatización, cómo saber si vale la pena, y sobre todo qué es n8n, para qué sirve y cómo se usa.</p>

Para explicar cada objetivo:
- **Distinguir una automatización lineal de una cognitiva y explicar qué es orquestar sistemas.** Tres palabras nuevas. Una **automatización** es una tarea que la computadora hace sola, siempre de la misma forma, sin que nadie la toque. Es **lineal** cuando sigue reglas fijas, como una receta ("si llega un formulario, copialo en la planilla"); es **cognitiva** cuando en algún paso tiene que leer y entender algo, y para eso usa IA ("leé este mail y decime si es un reclamo"). **Orquestar** es hacer que varias aplicaciones trabajen coordinadas, como los músicos de una orquesta. Es la base para saber cuándo hace falta IA en un flujo y cuándo no. Poner IA donde no hace falta encarece el flujo y lo vuelve menos predecible; no ponerla donde hace falta deja a una persona leyendo mensajes a mano. Saber distinguir los dos tipos es lo que permite diseñar bien desde el principio.
  - *Ejemplo:* Lineal: cada inscripción del formulario se copia en una planilla. Cognitiva: cada mail se lee, se entiende si es reclamo o consulta, y se deriva. Orquestar: que el pago en Mercado Pago, la planilla y el WhatsApp al cliente se actualicen juntos.
- **Evaluar si un proceso vale la pena automatizar usando ROI, frecuencia y costo de oportunidad.** No todo lo que se puede automatizar conviene automatizarlo: armar y mantener un flujo cuesta. Hoy vamos a aprender a hacer esa cuenta antes de abrir n8n, con tres preguntas simples. Es lo que separa a quien automatiza "porque se puede" de quien automatiza lo que le cambia el día a un negocio. Las tres palabras, en criollo:
  - **ROI** son las siglas en inglés de *Return on Investment*, "retorno de la inversión". Responde una pregunta muy simple: por lo que pongo (plata o tiempo), ¿cuánto me vuelve? Si pongo 10 horas en armar algo y me ahorra 40, me conviene. Lo vemos en detalle en la Sección 02.
  - **Frecuencia** es cada cuánto pasa la tarea: todos los días, una vez por semana, una vez por año. Cuanto más seguido pasa, más conviene automatizarla.
  - **Costo de oportunidad** es lo que dejás de hacer mientras hacés la tarea a mano. Si la dueña de una pastelería pasa una hora por día anotando pedidos, el costo no es solo esa hora: son las tortas que no hizo en ese rato.
  - *Ejemplo:* Automatizar el pedido semanal a un proveedor (una vez por semana, 10 minutos) probablemente no conviene. Automatizar la carga de 50 pedidos diarios, sí.
- **Reconocer las piezas de n8n: instancia, workflow, nodos y el JSON que viaja entre ellos.** El vocabulario que vamos a usar el resto del curso. Son cuatro palabras que van a aparecer en todas las clases que siguen. Si hoy quedan claras, el resto del curso se entiende mucho mejor:
  - **Instancia:** tu n8n, el tuyo, funcionando en algún lado (en internet o en tu computadora). Como tu cuenta de Gmail: el programa es el mismo para todos, pero lo que hay adentro es tuyo.
  - **Workflow:** en inglés, "flujo de trabajo". Es una automatización completa, de punta a punta: "cada vez que llega un mail, copiá los datos en la planilla". En clase vamos a decir "workflow" o "flujo", es lo mismo.
  - **Nodo:** cada bloque del flujo. Cada nodo hace una sola cosa: uno recibe el mail, otro lo lee con IA, otro escribe en la planilla. Se unen con flechas.
  - **JSON:** la forma en que los nodos se pasan los datos. Es la "ficha con casilleros" de la semana pasada: un casillero "nombre" con Martín, un casillero "destino" con Bariloche.
  - *Ejemplo:* Instancia: tu n8n, en internet. Workflow: "Consultas por mail a planilla". Nodos: el que recibe el mail (Gmail), el que lo lee con IA y el que escribe en la planilla (Google Sheets). JSON: `{"nombre": "Martín", "destino": "Bariloche"}`, la ficha que viaja del nodo de IA al de la planilla.
- **Traducir un proceso manual a un boceto de flujo con un paso de IA.** Un **boceto** es un borrador, un dibujo simple del flujo antes de armarlo: una lista de pasos o unas cajitas con flechas en un papel. Es la pre-entrega de esta semana. Antes de construir, se diseña: qué hace arrancar el flujo, qué pasos tiene, en cuál entra la IA y dónde termina el dato. Un buen boceto ahorra horas de prueba y error en n8n.
  - *Ejemplo:* Proceso manual: "leo cada reseña de Google y la anoto como positiva o negativa". Boceto: "llega una reseña nueva → la IA la clasifica → se agrega a la planilla → si es negativa, aviso por mail".
- **Importar y adaptar un template en lugar de construir desde cero.** **Template** quiere decir plantilla: un flujo que ya armó otra persona y que se puede copiar. **Importar** es traerlo a tu n8n, como cuando descargás un modelo de currículum y le cambiás los datos. En la práctica real, casi nadie arranca de una hoja en blanco. Hay miles de flujos armados por la comunidad para casos muy comunes. Saber encontrarlos, leerlos y adaptarlos es una habilidad tan importante como saber armar uno desde cero.
  - *Ejemplo:* En vez de armar de cero "resumir mails con IA y mandarlos a Slack" (Slack es un chat para equipos de trabajo, parecido a WhatsApp), se busca ese template, se importa y se cambian la cuenta de Gmail y el canal de Slack. Diez minutos en lugar de dos horas.

**Filmina 3 · Agenda** (1 min) — teoría hasta el break; después, n8n con las manos.

<p style="color:#1a7f37">Primero teoría: automatizaciones, ROI y qué es n8n. Después del break, n8n en vivo y la pre-entrega.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 1** (3 min, sin filmina) — antes de pasar a la filmina 5.

<p style="color:#1a7f37">Antes de arrancar, repasemos rápido lo que vimos la semana pasada, porque hoy lo vamos a usar.</p>

<p style="color:#1a7f37">Primero: la IA no piensa, predice. Un LLM, que quiere decir "modelo de lenguaje grande" y es el tipo de IA que hay detrás de ChatGPT, Claude o Gemini, fue entrenado con muchísimo texto y lo único que hace es calcular cuál es el pedacito de texto más probable que sigue. Por eso suena seguro aunque esté equivocado.</p>

<p style="color:#1a7f37">Segundo: el modelo lee en tokens, que son pedacitos de palabras. Se paga por token y tiene una ventana de contexto, un límite de cuánto texto puede tener en mente a la vez. Lo que queda afuera, no lo ve.</p>

<p style="color:#1a7f37">Tercero: cuando le falta información, el modelo alucina, inventa con total seguridad. En una automatización eso es grave, porque nadie revisa y el dato falso llega a destino.</p>

<p style="color:#1a7f37">Cuarto: para evitarlo, aprendimos a escribir buenos prompts, es decir, buenas instrucciones para la IA. Un buen prompt tiene cuatro partes: quién es la IA, el contexto, la tarea y el formato en que tiene que responder. Encerramos el texto a procesar entre marcas como ###, para que la IA sepa dónde empieza y dónde termina; le damos ejemplos de cómo queremos la respuesta; le pedimos que revise paso a paso y que, si falta un dato, ponga "no_disponible" en vez de inventarlo.</p>

<p style="color:#1a7f37">Y quinto: lo armamos en cinco pasos hasta llegar a la plantilla maestra, un prompt que toma un mail desordenado y devuelve un JSON limpio: la ficha con casilleros, siempre con los mismos nombres de casilleros y sin texto alrededor. Ese JSON es justamente el idioma de n8n, la herramienta que vemos hoy.</p>

Para explicar:
- **La IA predice, no piensa.** Si alguien pregunta "¿entonces no sirve?": sirve muchísimo, pero hay que darle buen contexto y no confiar a ciegas en lo que devuelve. Es como un empleado nuevo muy rápido y muy capaz: hace un trabajo excelente si le explicás bien, y conviene revisar lo que entrega, sobre todo al principio.
  - *Ejemplo:* "¿Cuál es el horario del local?", sin decírselo: responde "de 9 a 18", lo más común. Con el horario en el prompt, acierta.
- **Tokens y ventana de contexto.** Un **token** es un pedacito de palabra (más o menos, tres o cuatro letras): es la unidad con la que la IA lee y con la que se cobra. Lo vamos a sentir en n8n: cada vez que el flujo le pide algo a la IA (a eso se le dice "una llamada") se consumen tokens, y mandarle textos enormes es más caro y más lento. Y cada llamada empieza de cero: el modelo no se acuerda de la corrida anterior del flujo. Todo lo que necesite saber tiene que ir en esa llamada.
  - *Ejemplo:* Un flujo que le manda a la IA cada mail con todo el hilo anterior (unos 3.000 tokens) gasta diez veces más que uno que manda solo el último mensaje (unos 300).
- **Alucinaciones.** Alucinar es cuando la IA inventa un dato y lo dice con total seguridad, como si fuera cierto. La defensa está en el prompt ("usá solo lo que dice el texto", "no_disponible") y, desde hoy, también en el flujo: revisar el JSON antes de guardarlo. Con n8n podemos agregar controles alrededor de la IA: por ejemplo, si un dato viene como `no_disponible`, mandar la fila a revisión en vez de guardarla como si estuviera completa.
  - *Ejemplo:* Un mail sin teléfono → la IA devuelve `"telefono": "no_disponible"` → el flujo ve ese valor y marca la fila "a revisar" en lugar de guardarla como completa.
- **Las cuatro partes del prompt y las técnicas.** Rol, contexto, tarea y formato. Y las tres técnicas, con sus nombres en inglés: *zero-shot* ("cero ejemplos": se pide directo), *few-shot* ("pocos ejemplos": se le muestran dos o tres respuestas modelo) y *chain of thought* ("cadena de pensamiento": se le pide que razone paso a paso antes de responder). Si alguien no se acuerda, que mire su desafío del Módulo 1. Hoy no vamos a escribir prompts nuevos desde cero: vamos a usar el que ya tienen y ver dónde se ubica dentro de un flujo.
  - *Ejemplo:* Zero-shot: "Clasificá este mail". Few-shot: el mismo pedido con dos mails de ejemplo ya clasificados. Chain of thought: "antes de clasificar, decí qué pide el cliente y cuántos días pasaron desde la compra".
- **La plantilla maestra en JSON.** Es la pieza que hoy pasa de "copiar y pegar a mano" a "un nodo dentro de un flujo que corre solo". Ese es el puente con la filmina 5. El JSON que la semana pasada revisaban en jsonlint.com (la página que dice si un JSON está bien escrito) es exactamente lo que un nodo de n8n le pasa al siguiente.
  - *Ejemplo:* La semana pasada: copiar el mail, pegarlo en el chat con la plantilla, copiar el JSON, pegarlo en la planilla. Hoy: el mismo prompt va dentro de un nodo y los tres "copiar y pegar" desaparecen.

**Filmina 5 · ¿Dónde quedamos? Del prompt suelto al flujo que corre solo** (3 min)

<p style="color:#1a7f37">La semana pasada armaron un prompt que devuelve JSON. El problema es que lo siguen pegando a mano. Hoy conocemos la herramienta que hace eso sola.</p>

Para explicar:
- **"En el módulo 1: armaste una plantilla de prompt que toma un texto desordenado y devuelve JSON válido."** Recordá el ejemplo de la agencia de viajes: un mail desordenado entra, un JSON con nombre, destino y fechas sale. Ese prompt ya hace la parte "inteligente" del trabajo: leer, entender y ordenar. Lo que falta es todo lo que pasa alrededor.
  - *Ejemplo:* Entrada: "hola, somos 4, queremos ir a bariloche del 15 al 22 de julio, Martín". Salida: `{"nombre": "Martín", "destino": "Bariloche", "pasajeros": 4, ...}`.
- **"El problema que quedó: vos seguís copiando y pegando el texto a mano cada vez."** Con diez mails por día, eso no escala (que algo "escale" quiere decir que sigue funcionando igual de bien cuando el volumen crece mucho): la IA hace su parte, pero una persona sigue siendo el "cable" que lleva el dato de un lado al otro. Abrir el mail, copiar, pegar en el chat, copiar el JSON, pegarlo en la planilla: cinco pasos manuales por cada mensaje. Si un día llegan cien, alguien pasa la tarde haciendo eso, y además puede equivocarse al copiar.
  - *Ejemplo:* 10 mails por día × 2 minutos de copiar y pegar = 20 minutos diarios: unas 7 horas por mes solo haciendo de "cable".
- **"Hoy: conocemos la herramienta que hace ese trabajo sola y aprendemos a decidir qué vale la pena automatizar."** La herramienta es n8n: va a buscar el mail, se lo pasa a la IA con nuestro prompt y guarda el resultado, sin que nadie toque nada. Y antes de armar nada, vamos a ver cómo decidir si un proceso vale el esfuerzo de automatizarlo.
  - *Ejemplo:* El mismo trabajo en n8n: Gmail Trigger → nodo de IA con la plantilla → Google Sheets. Nadie toca nada.
- **"Al final de la clase: vas a tener diseñada tu primera automatización con un paso de IA adentro."** Diseñada, todavía no construida: ese es el objetivo de la pre-entrega. Van a salir con un proceso elegido, la justificación de por qué conviene, el boceto del flujo y el prompt que va adentro.
  - *Ejemplo:* Por ejemplo: "cada reseña nueva de Google se clasifica con IA en positiva, negativa o neutra y se guarda en una planilla; las negativas avisan por mail". Diseñada en papel, con su ROI y su prompt.

Que uno o dos cuenten su desafío del Módulo 1 en una línea.

---

### 10–22 · Sección 01 · Qué es una automatización

**Filmina 6 · Separador "01"** — pasarla.

<p style="color:#1a7f37">Empecemos por lo básico: qué es automatizar.</p>

#### Filmina 7 · ¿Qué es automatizar? Un asistente digital que no duerme (3 min)

<p style="color:#1a7f37">Automatizar es que la tecnología haga sola las tareas repetitivas, moviendo datos de un lado a otro según reglas. La ventaja: si el volumen se multiplica, el trabajo no se multiplica con él.</p>

Para explicar:
- **"La definición: usar tecnología para realizar tareas repetitivas sin intervención humana, moviendo datos de un lugar a otro según reglas predefinidas."** La mayor parte del trabajo administrativo es mover datos: del mail a la planilla, de la planilla a la factura, de la factura al mail del cliente. Automatizar es que eso pase solo, siguiendo reglas que definimos una vez. Como un asistente que trabaja 24/7 y no se olvida ni se cansa. Las tres palabras clave de la definición: "repetitivas" (si se hace una sola vez, no hay nada que automatizar), "sin intervención humana" (nadie tiene que apretar un botón) y "reglas predefinidas" (alguien pensó antes qué tiene que pasar en cada caso).
  - *Ejemplo:* Cada vez que alguien compra en la tienda online, se genera la factura, se descuenta el stock en la planilla y se le manda al cliente el mail con el número de seguimiento. Sin que nadie toque nada, aunque sea domingo a las 3 de la mañana.
- **"El dilema que resuelve: en un negocio tradicional, si los pedidos se duplican, la carga administrativa se duplica y hay que contratar más gente."** Si cargar un pedido lleva 5 minutos, 100 pedidos llevan más de 8 horas: una persona entera. Con 200, dos personas. Es lo que se llama crecimiento lineal: el trabajo crece al mismo ritmo que las ventas. Muchos negocios chicos se traban justo ahí: venden más, pero el tiempo que les come la administración no los deja crecer.
  - *Ejemplo:* Un local de ropa: 30 pedidos por día × 5 minutos = 2,5 horas diarias. Si pasa a 120 pedidos, son 10 horas: hace falta otra persona solo para cargar pedidos.
- **"Cómo rompe esa linealidad: un servidor procesando 100 webhooks por minuto cuesta y tarda lo mismo que procesando 10.000."** Un **servidor** es una computadora que está prendida todo el tiempo y conectada a internet, para que los programas que tiene adentro funcionen las 24 horas (las páginas web, las apps y n8n viven en servidores). Un **webhook** es un aviso automático que una aplicación le manda a otra cuando pasa algo: "entró un pedido", "llegó un pago". Para una computadora, procesar uno o mil de esos avisos es prácticamente lo mismo. El costo crece muchísimo menos que el volumen. Es como la diferencia entre escribir cada invitación a mano y mandar un mail a una lista: escribir el mail lleva el mismo tiempo para diez personas que para mil.
  - *Ejemplo:* Black Friday: la tienda pasa de 50 a 2.000 pedidos en un día. El flujo que carga cada pedido en la planilla tarda lo mismo por pedido y no se cansa; a mano sería imposible.
- **"El resultado: el trabajo operativo se vuelve un costo fijo. Escalás las ventas sin colapsar la logística."** El **trabajo operativo** es el del día a día: cargar, copiar, avisar, ordenar. Un **costo fijo** es el que se paga igual, vendas poco o mucho, como el alquiler del local. Y la **logística** es todo lo que hay que hacer para que el pedido llegue: anotarlo, prepararlo, enviarlo. Matiz para el grupo: no es fijo del todo (si cada paso usa una IA paga, cada llamada cuesta centavos), pero crece mucho más despacio que contratar gente. Y libera a las personas para lo que una máquina no hace bien: atender un caso delicado, negociar, pensar cómo mejorar el negocio.
  - *Ejemplo:* Con el flujo, pasar de 100 a 1.000 pedidos por mes casi no cambia el costo: el plan de n8n es el mismo y la IA suma unos centavos por pedido. A mano, ese salto es pasar de unas horas a un sueldo entero.

#### Filmina 8 · Orquestación: automatizar no es solo ahorrar tiempo (2 min)

<p style="color:#1a7f37">Automatizar no es solo ahorrar tiempo: es orquestar. Gmail, WhatsApp, una planilla y un medio de pago son los músicos; n8n es el director que los hace sonar juntos.</p>

Para explicar:
- **"La metáfora: en una orquesta cada músico es excelente por su cuenta. Si cada uno toca una partitura distinta, el resultado es ruido."** Pasa lo mismo en cualquier negocio: tiene buenas herramientas, pero cada una vive en su mundo. El problema no es que las herramientas sean malas, sino que nadie las coordina.
  - *Ejemplo:* Gmail manda mails perfecto, Sheets guarda datos perfecto, WhatsApp manda mensajes perfecto. Pero si entra un pago y nadie actualiza la planilla, se vende algo que no hay en stock: cada uno tocó bien, pero desafinados.
- **"El director: no toca ningún instrumento. Da las entradas, marca los tiempos y hace que todos suenen como una sola canción."** El director no reemplaza a los músicos: los hace funcionar juntos. Decide quién entra cuándo y qué tiene que pasar después. Ese es el papel de n8n: no reemplaza a Gmail ni a la planilla, les dice qué hacer y en qué orden.
  - *Ejemplo:* n8n no manda los mails ni guarda los datos: le dice a Gmail "mandá este mail ahora" y a Sheets "agregá esta fila", en el orden correcto.
- **"En tecnología: los músicos son WhatsApp, Google Sheets, Gmail, un procesador de pagos."** Cada una es buenísima en lo suyo, pero no se hablan entre sí: el pago entra en Mercado Pago, el pedido en WhatsApp y el stock en una planilla. Hoy, en la mayoría de los negocios, el que conecta esas herramientas es una persona que mira una, copia y pega en la otra. Esa persona es el "director" manual.
  - *Ejemplo:* Una pastelería: el pedido llega por WhatsApp, el pago por Mercado Pago, la agenda de producción está en Google Calendar y las ventas en una planilla. Hoy, la dueña mira las cuatro y copia de una a otra.
- **"Orquestar es: coordinar esas herramientas independientes para que funcionen como un solo mecanismo fluido."** Cuando entra el pago, se actualiza la planilla y se le avisa al cliente por WhatsApp. **n8n es el director de orquesta.** Por eso decimos que automatizar no es solo ahorrar tiempo: también es que todo pase en el orden correcto, sin olvidos, y que la información esté actualizada en todos lados al mismo tiempo.
  - *Ejemplo:* ```text
    Entra el pago (Mercado Pago)
      → n8n anota la venta (Google Sheets)
      → agenda la producción (Google Calendar)
      → le confirma al cliente (WhatsApp)
    ```

#### Filmina 9 · Lineales y cognitivas: dos formas de armar un flujo (4 min)

<p style="color:#1a7f37">Hay dos tipos: las lineales siguen reglas fijas, 'si pasa A, hacé B'. Las cognitivas tienen un paso donde decide una IA, como el prompt que hicieron la semana pasada.</p>

Para explicar:
- **"Lineales: cada paso se ejecuta en un orden fijo y predecible. 'Si pasa A, hacé B y después C', sin ambigüedad ni interpretación."** "Se ejecuta" quiere decir "se hace", "corre". Ejemplo: cada vez que alguien completa un formulario, se agrega una fila a la planilla y se le manda un mail de confirmación. Son **deterministas**: con la misma entrada, siempre hacen lo mismo. Son baratas y confiables, pero no pueden "leer" un texto libre. Funcionan perfecto cuando los datos ya llegan ordenados (un formulario con campos fijos, una venta con monto y producto). Cuando el dato llega como texto libre, escrito por una persona, se traban.
  - *Ejemplo:* Regla de Gmail: "si el remitente es facturas@proveedor.com, mover a la carpeta Facturas". Siempre hace lo mismo y nunca se equivoca; pero si el proveedor cambia de dirección, deja de funcionar.
- **"Cognitivas: en uno o varios pasos se delega la interpretación, el razonamiento o la generación a un modelo de IA."** Ejemplo: llega un mail, la IA decide si es una consulta, un reclamo o spam, y según eso el flujo hace cosas distintas. El prompt que armaron en la Semana 1 es exactamente ese paso. "Delegar" es pasarle la tarea a otro: en este caso, a la IA. Tres cosas que puede hacer la IA en un flujo: interpretar (entender qué quiere el cliente), razonar (decidir qué categoría corresponde) y generar (escribir una respuesta o un resumen).
  - *Ejemplo:* Mail: "el pedido llegó pero la torta estaba aplastada". La IA devuelve `{"tipo": "reclamo", "motivo": "producto dañado"}` y el flujo le avisa a la dueña.
- **"La diferencia clave: el sistema deja de seguir solo instrucciones deterministas. En algún punto entiende el contenido y decide con cierto criterio."** Eso le da flexibilidad, pero trae lo que vimos la semana pasada: la IA puede equivocarse o inventar. Por eso los flujos cognitivos casi siempre son pasos lineales alrededor de un paso de IA bien controlado. La regla práctica: usar reglas fijas para todo lo que se pueda resolver con reglas, y dejar la IA solo para el paso que de verdad necesita interpretar. Así el flujo es más barato, más rápido y más fácil de controlar.
  - *Ejemplo:* Un paso lineal controla a la IA: si devolvió una de las categorías permitidas (consulta, reclamo, otro), sigue; si devolvió cualquier otra cosa, el mail va a revisión manual.
- **"Hacia dónde vamos: el proyecto final del curso es un agente autónomo. Cognitivo de punta a punta."** Un **agente** es una IA que no solo responde, sino que también hace cosas (busca un dato, anota un pedido, manda un mensaje); "autónomo" quiere decir que decide sola qué hacer. Un asistente de WhatsApp que entiende, decide y responde. La diferencia con un flujo cognitivo común es que el agente no sigue un camino fijo con un paso de IA: la IA decide qué hacer en cada momento (consultar un dato, responder, pedir más información). Lo vamos a construir de a poco, a partir de las piezas que vemos hoy.
  - *Ejemplo:* Cliente: "¿tienen torta sin TACC para el viernes?". El agente busca en la planilla de productos, ve que no hay y responde: "Sin TACC no hacemos, pero tenemos una opción sin lactosa. ¿Te interesa?".

**Ejemplo: el mismo negocio, un flujo lineal y uno cognitivo**

Lineal (sin IA): los datos ya llegan ordenados, alcanza con reglas fijas.

```text
Se completa el formulario de inscripción (nombre, email, curso)
  → se agrega una fila en Google Sheets
  → se manda un mail de confirmación con el nombre del curso
```

Cognitivo (con un paso de IA): el dato llega como texto libre y alguien tiene que interpretarlo.

```text
Llega un mail: "Hola, quería saber si todavía hay lugar en el de los sábados y cuánto sale"
  → la IA lo lee y devuelve {"tipo": "consulta", "curso": "sábados", "pregunta": "cupo y precio"}
  → si es consulta: se responde con el precio y el cupo
  → si es reclamo: se avisa al responsable
```

Notá que en el cognitivo todo es lineal salvo un paso: el que lee el mail.

#### Filmina 10 · Actividad: una tarea que te aburre (2 min)

<p style="color:#1a7f37">Piensen en una tarea que hacen todas las semanas: ¿qué parte es mecánica y qué parte necesita leer o decidir? Esa segunda parte es la que pide IA.</p>

Para explicar: **"Pensá en una tarea que hacés todas las semanas y te aburre. ¿Qué pasos son puro 'si pasa A,
hacé B'? ¿Y en cuál necesitás leer, interpretar o decidir? Ese segundo grupo es el que pide IA."** Que la
escriban en el chat. Es el primer paso para elegir el proceso de la pre-entrega. Dales un ejemplo para
arrancar: responder las consultas de un local por Instagram. Mecánico: copiar el nombre y el producto en
una planilla, mandar el link de pago. Necesita interpretar: entender qué está preguntando el cliente, que
puede escribirlo de mil formas. Que el aburrimiento sea la pista: casi siempre, lo que aburre es lo que
se repite, y lo que se repite es lo que conviene automatizar.

*Ejemplo:* Otro caso, el de un contador: cada mes descarga los resúmenes del banco (mecánico), los renombra y los guarda en carpetas (mecánico) y revisa qué gastos son deducibles (hay que interpretar: ahí entra la IA).

**Ejercicio 1 · ¿Lineal o cognitiva?** (2 min) — seis casos, respuestas en el chat.

---

### 22–35 · Sección 02 · ROI: cuándo vale la pena

**Filmina 11 · Separador "02"** — pasarla.

<p style="color:#1a7f37">Ahora, la pregunta clave: ¿vale la pena automatizarlo?</p>

#### Filmina 12 · ¿Qué es el ROI? La métrica que decide qué automatizás (2 min)

<p style="color:#1a7f37">ROI quiere decir retorno de la inversión: mide cuánto nos vuelve por lo que pusimos. La cuenta es beneficio neto sobre costo, por cien. El costo es armarlo y mantenerlo; el beneficio, las horas ahorradas, más ventas y menos errores.</p>

Para explicar:
- **"La definición: evalúa la rentabilidad de una inversión en relación con su costo. En automatización no se mide solo en plata, también en tiempo recuperado."** ROI es *Return on Investment*, retorno de la inversión. Responde: por cada peso (o cada hora) que pongo, ¿cuánto me vuelve? En automatización muchas veces conviene hacer la cuenta en horas: cuántas horas me lleva armar el flujo contra cuántas horas me ahorra por mes. Después, si hace falta, esas horas se pasan a plata con lo que cuesta la hora de la persona que hacía la tarea.
  - *Ejemplo:* Un flujo que lleva 10 horas armar y ahorra 4 horas por semana: en el primer mes ya devolvió 16 horas por las 10 invertidas.
- **"La fórmula: ROI = (Beneficio neto / Costo de la inversión) × 100."** Beneficio neto es lo que se ganó o ahorró menos lo que costó. Si da positivo, la inversión rindió; si da negativo, todavía no se recuperó. Un ejemplo simple: si armar un flujo cuesta 100 y en tres meses ahorra 250, el beneficio neto es 150 y el ROI es 150 %. Por cada peso invertido, volvió el peso y un peso y medio más.
  - *Ejemplo:* ```text
    Costo (armado):            $100.000
    Ahorro en 3 meses:         $250.000
    Beneficio neto:            250.000 − 100.000 = $150.000
    ROI:                       150.000 / 100.000 × 100 = 150 %
    ```
- **"Costo de inversión: horas de desarrollo del flujo, licencias de software, hosting, mantenimiento."** Las palabras, una por una: **desarrollo** es el tiempo de armar el flujo; una **licencia de software** es lo que se paga por usar un programa (como el abono mensual de Netflix, pero de una herramienta de trabajo); **hosting** es el alquiler de la computadora en internet donde corre el programa (el servidor); **mantenimiento** es el tiempo de arreglarlo y ajustarlo después. Lo que más se olvida es el mantenimiento: las aplicaciones cambian, los permisos para entrar a las cuentas vencen, los prompts hay que ajustarlos. Un flujo no se arma y se olvida. También entran en el costo las llamadas a la IA (que se pagan por token) y el tiempo de probar el flujo antes de dejarlo andando solo.
  - *Ejemplo:* Armado: 10 horas. n8n: el plan mensual (o, si lo instalás vos, la computadora donde corre). IA: unos centavos por mail. Mantenimiento: una hora por mes, cuando Google cambia algo o hay que ajustar el prompt.
- **"Beneficio neto: ahorro de horas manuales, más ventas por responder rápido, menos costos por errores evitados."** "Neto" quiere decir lo que queda después de restar lo que se gastó. Un cliente que recibe respuesta en un minuto en vez de en un día compra más; un pedido cargado sin errores de tipeo no se envía a la dirección equivocada. El ahorro de horas es el más fácil de medir; los otros dos son más difíciles de calcular, pero muchas veces son los que más pesan.
  - *Ejemplo:* Una inmobiliaria que responde una consulta en 1 minuto en lugar de 4 horas consigue más visitas: el cliente todavía no le escribió a la competencia.

**Ejercicio 2 · Calculá el ROI** (3 min) — resolvelo en voz alta con los números de `ejercicios-alumnos.md`: el
primer mes da −20 %, a principios del segundo se recupera la inversión y al tercero rinde 140 %.

**Ejemplo de cuenta (distinto del Ejercicio 2)**

```text
Tarea:       cargar a mano las consultas que llegan por mail
Ahorro:      40 consultas por semana × 5 minutos ≈ 13 horas por mes
Costo:       20 horas para armar el flujo + 1 hora por mes de mantenimiento
Mes 1:       ahorro 13 h − costo 21 h = −8 h  → todavía no se pagó
Mes 2:       ahorro 26 h − costo 22 h = +4 h  → ya se pagó
Break-even:  a los 1,7 meses, más o menos (13 × meses = 20 + 1 × meses)
```

*Break-even* es el momento en que lo ahorrado alcanza lo que se invirtió: desde ahí, todo es ganancia. Lo vemos en la filmina que sigue.

#### Filmina 13 · Umbrales: cuándo es rentable (2 min)

<p style="color:#1a7f37">Tres ideas: el break-even, que en castellano es el punto de equilibrio, es cuando el ahorro alcanza lo que costó; conviene automatizar lo frecuente y que no requiere criterio humano; y siempre preguntarse qué haría esa persona con el tiempo libre.</p>

Para explicar:
- **"Break-even: el punto de equilibrio. El momento exacto en que el ahorro acumulado iguala el costo de implementación."** Antes de ese punto, la automatización todavía "debe" plata; después, todo es ganancia. En el ejercicio, cae a principios del segundo mes. Es un número muy útil para convencer a alguien (un jefe, un cliente, el dueño del negocio): "en cinco semanas se paga sola" se entiende mejor que cualquier porcentaje.
  - *Ejemplo:* Costo: 20 horas. Ahorro: 10 horas por mes. Break-even a los 2 meses; desde el tercero, cada mes son 10 horas de ganancia.
- **"Regla 80/20: el 80 % de los resultados sale del 20 % de los flujos. Automatizá alta frecuencia y bajo juicio humano."** "Juicio humano" es cuando hace falta que una persona piense y decida, con su criterio. Unos pocos flujos bien elegidos dan casi todo el beneficio. Alta frecuencia: pasa muchas veces (cada día, cada hora). Bajo juicio humano: no necesita que una persona decida algo delicado. Copiar pedidos a una planilla cumple las dos; negociar con un proveedor, ninguna. La regla sirve para no dispersarse: antes de automatizar diez cosas chicas, conviene encontrar las dos o tres que se comen la mayor parte del tiempo.
  - *Ejemplo:* Una tienda tiene 10 tareas repetitivas. Dos (cargar pedidos y responder "¿cuándo llega mi pedido?") se llevan el 80 % del tiempo. Se automatizan esas dos primero.
- **"Costo de oportunidad: ¿qué estaría haciendo esa persona si no estuviera copiando datos en Excel?"** Si es un vendedor que pasa dos horas por día copiando datos, la empresa pierde las ventas que podría haber cerrado en ese tiempo. El costo de una tarea manual no es solo el sueldo de las horas que lleva: es todo lo que esa persona no hizo mientras tanto. Por eso dos tareas que llevan el mismo tiempo pueden tener ROI muy distintos según quién las haga.
  - *Ejemplo:* La dueña de una pastelería pasa una hora por día anotando pedidos. En esa hora podría hacer dos tortas más: el costo de oportunidad son esas dos tortas por día.

#### Filmina 14 · El ROI oculto: cuando empatar igual conviene (1 min)

<p style="color:#1a7f37">A veces un flujo no deja plata directa, pero libera al dueño para vender más. Y lo que pasa una vez al año casi nunca conviene automatizarlo.</p>

Para explicar:
- **"El caso: un workflow que apenas empata en términos monetarios. Lo que sí genera: libera al dueño del negocio para dedicarse a cerrar ventas o a mejorar la calidad del producto."** En un negocio chico, el tiempo del dueño es lo más caro que hay, aunque no figure en ninguna planilla. Si la cuenta da cero en plata pero el dueño recupera una hora por día para atender clientes, el flujo se paga igual, solo que el beneficio no aparece en la fórmula. También cuentan cosas como menos estrés, menos errores y responder más rápido.
  - *Ejemplo:* Un flujo que manda el resumen de ventas del día: ahorra 15 minutos y cuesta más o menos lo mismo. Pero el dueño deja de abrir la planilla a la noche y usa ese rato para planificar las compras.
- **"El otro lado: si automatizás algo que se hace una vez al año, el ROI siempre va a ser negativo por el costo de mantenimiento."** Para cuando se vuelve a usar, probablemente algo cambió y hay que arreglarlo. Ejemplos: el cierre del balance anual, la inscripción a un evento que se hace una vez. Armar el flujo lleva más tiempo que hacer la tarea a mano, y cuando llega el momento de usarlo, una credencial venció o una aplicación cambió y no funciona. Para esas tareas, una lista de pasos bien escrita suele rendir más que una automatización.
  - *Ejemplo:* El inventario de fin de año: armar el flujo lleva 8 horas; hacerlo a mano, 4. Y al año siguiente, la planilla cambió de formato y el flujo no anda.

**Ejercicio 3 · Desafío de priorización** (3 min) — es la actividad de la filmina 26, adelantada. Tres casos;
votan en el chat cuál automatizarían con solo dos horas. Usá la votación para repasar frecuencia, juicio
humano y costo de oportunidad.

#### Filminas 15 y 16 · Para recordar y Coder Tips (1 min)

<p style="color:#1a7f37">El ROI no es solo lo que ahorrás: también es lo que dejás de ganar por hacer tareas manuales. Antes de abrir n8n, tres preguntas: cuánto tarda hoy, cuántas veces pasa por semana y qué harías con ese tiempo.</p>

Para explicar:
- **"El ROI no es solo lo que ahorrás. Es también lo que dejás de ganar por hacer tareas manuales."** Es la idea del costo de oportunidad dicha en una frase. Cuando presenten una automatización, conviene contar las dos partes: las horas que se ahorran y lo que se puede hacer con esas horas.
  - *Ejemplo:* Un vendedor que pasa 2 horas por día cargando datos no "cuesta" solo 2 horas de sueldo: son 2 horas por día sin llamar a clientes.
- **"Buscá la fruta madura: procesos de alta frecuencia y bajo juicio humano. Antes de abrir n8n respondete tres cosas: cuánto tarda hoy, cuántas veces por semana pasa, y qué haría esa persona con ese tiempo."** Son exactamente las tres preguntas del ROI de la pre-entrega. "Fruta madura" quiere decir lo más fácil de alcanzar y que más rinde: el proceso que se repite todo el tiempo y que no necesita que nadie piense. Con las dos primeras respuestas se calcula el tiempo ahorrado (minutos × veces); la tercera le da sentido a ese número.
  - *Ejemplo:* ```text
    ¿Cuánto tarda hoy?             3 minutos por pedido
    ¿Cuántas veces por semana?     200
    ¿Qué haría con ese tiempo?     atender el local
    → 10 horas por semana libres: fruta madura
    ```

---

### 35–48 · Sección 03 · n8n: qué es

**Filmina 17 · Separador "03"** — pasarla.

<p style="color:#1a7f37">Ahora sí: n8n.</p>

#### Filmina 18 · ¿Qué es n8n? Low-code, open source y basado en nodos (3 min)

<p style="color:#1a7f37">n8n conecta aplicaciones para que trabajen juntas solas, sin programar. Cada nodo es un bloque ya hecho que configurás; y si hace falta, se puede escribir código.</p>

Para explicar:
- **Las tres palabras del título.** Antes de entrar en cada frase, traducí el título de la filmina. **Código** son las instrucciones escritas que forman un programa; programar es escribir esas instrucciones. **Low-code** quiere decir "poco código": casi todo se hace con clics y solo de vez en cuando se escribe alguna línea. **Open source** quiere decir "código abierto": las instrucciones del programa están publicadas en internet y cualquiera las puede ver, revisar y usar. **Basado en nodos** quiere decir que todo se arma con bloques que se unen con flechas.
  - *Ejemplo:* Una receta de cocina publicada en internet es "open source": cualquiera la ve y la puede hacer en su casa. La receta secreta de una marca de gaseosa es lo contrario: nadie sabe qué tiene adentro.
- **"Qué hace: conecta aplicaciones y servicios entre sí para automatizar tareas sin necesidad de escribir código."** Una **integración** es un bloque listo para hablar con una aplicación en particular: la integración de Gmail sabe leer y mandar mails; la de Google Sheets sabe escribir en planillas. Tiene cientos de integraciones listas: Gmail, Google Sheets, Slack, WhatsApp, Telegram, bases de datos (programas que guardan mucha información ordenada, como una planilla gigante) y modelos de IA. Ejemplos de para qué sirve: cada mail de consulta se carga en una planilla; cada pedido nuevo avisa por WhatsApp; cada lunes a las 9 llega un reporte; cada mensaje de un cliente lo responde un asistente con IA. Se trabaja en una pantalla tipo pizarrón (el lienzo o *canvas*): se ponen bloques y se unen con flechas, y el dato va pasando de un bloque al siguiente en el orden de las flechas.
  - *Ejemplo:* Cada respuesta de un formulario → una fila en Sheets y un mail de bienvenida. Cada lunes a las 9 → el resumen de ventas al WhatsApp del dueño.
- **"No-code: todo se resuelve con configuraciones visuales sobre bloques prearmados. Si el bloque no llega a lo que necesitás, quedás trabado."** **No-code** quiere decir "sin código": todo con clics, nunca se escribe nada. Zapier y Make son otras dos herramientas que hacen lo mismo que n8n (conectar aplicaciones); son muy fáciles, pero si necesitás algo que el bloque no trae, no hay salida. No-code es ideal para empezar rápido y para casos comunes. El problema aparece con los casos particulares, que en un negocio real siempre aparecen: un formato de fecha raro, un cálculo propio, un sistema que no tiene bloque.
  - *Ejemplo:* En una herramienta no-code, si el bloque para formatear fechas no tiene "día de la semana en español", no hay forma de agregarlo.
- **"Low-code: la misma interfaz visual, pero podés escribir código cuando hace falta. Eso elimina la barrera."** n8n tiene un nodo de código para esos casos, donde se escribe en JavaScript o en Python (son dos lenguajes de programación, dos "idiomas" en los que se le dan órdenes a una computadora). En el curso casi no lo vamos a usar, pero está. La idea es que el 90 % se resuelva con bloques y configuraciones, y que el código quede como salida para ese 10 % que los bloques no cubren. Además, hoy una IA puede ayudarnos a escribir esas pocas líneas de código si algún día hacen falta.
  - *Ejemplo:* Un nodo Code de tres líneas que le suma el IVA a cada precio (no hace falta entenderlo: es para que vean que son pocas líneas):

    ```js
    return $input.all().map(item => ({
      json: { ...item.json, total: item.json.precio * 1.21 }
    }));
    ```
- **"La idea central: cada nodo es código ya escrito y empaquetado. Vos configurás parámetros, y programás solo si el caso lo pide."** Los **parámetros** son los datos que le completás a un nodo para decirle qué hacer, como los campos de un formulario: a quién, qué, dónde. "Configurar" es justamente completar esos datos. El nodo "Gmail" ya sabe cómo hablar con Gmail; nosotros le decimos qué mail mandar y a quién. Alguien ya resolvió la parte difícil (cómo conectarse, cómo pedir permiso, cómo mandar los datos) y la dejó lista en un bloque. Configurar un nodo se parece más a completar un formulario que a programar.
  - *Ejemplo:* El nodo Google Sheets, en la acción "Append row" ("agregar fila"), pide qué planilla, qué hoja y qué dato va en cada columna. Completás tres campos y listo: no escribís cómo conectarse con Google.
- Un matiz sobre "open source": n8n se define como *fair-code* ("código justo"). El código es público y se puede instalar gratis en una máquina propia, con algunas restricciones comerciales (por ejemplo, revenderlo como servicio). Para lo que vamos a hacer en el curso, e incluso para usarlo dentro de una empresa, esas restricciones no afectan. Que el código sea público también hace que haya una comunidad grande que comparte flujos, nodos y soluciones a problemas comunes.
  - *Ejemplo:* Podés instalar n8n gratis en el servidor de tu empresa y usarlo para todos tus flujos. Lo que no podés es armar "MiAutomatizador.com" y vender n8n como si fuera tuyo.

**Ejemplos: para qué sirve n8n, nodo por nodo**

<p style="color:#1a7f37">Para que se vea para qué sirve, cuatro flujos reales. Fíjense que todos tienen la misma forma: algo los dispara, pasan cosas en el medio y el dato termina en algún lado.</p>

Antes de leerlos, dos palabras que se repiten. **Trigger** quiere decir "disparador": es el primer nodo, el que hace arrancar el flujo cuando pasa algo (llega un mail, es lunes a las 9). Y los nombres de los nodos están en inglés porque n8n está en inglés: *Schedule* es "horario", *Edit Fields* es "editar campos", *AI Agent* es "agente de IA". Un **webhook**, como vimos en la filmina 7, es un aviso automático que una aplicación le manda a otra.

1. **Consultas por mail a una planilla** (el caso de la agencia de viajes).

   ```text
   Gmail Trigger        → cada vez que llega un mail a consultas@agencia.com
   Nodo de IA           → lee el mail y devuelve un JSON con nombre, destino, fechas y pasajeros
   Google Sheets        → agrega una fila con esos datos
   ```

   Antes: una persona leía cada mail y copiaba los datos. Ahora la planilla se llena sola.

2. **Aviso de pedido nuevo por WhatsApp.**

   ```text
   Webhook              → la tienda online avisa "entró un pedido" (con producto, cliente y monto)
   Edit Fields          → arma el texto: "Nuevo pedido de Ana: 2 tortas, $24.000"
   WhatsApp             → se lo manda al celular del dueño
   ```

   Es un flujo lineal: no hace falta IA, los datos ya llegan ordenados.

3. **Reporte de ventas que llega solo todos los lunes.**

   ```text
   Schedule Trigger     → todos los lunes a las 9
   Google Sheets        → lee las ventas de la semana
   Nodo de IA           → escribe un resumen de tres líneas: total, producto más vendido, comparación con la semana anterior
   Gmail                → se lo manda al dueño
   ```

   El disparador no es un evento sino un horario. La IA no extrae datos: genera un texto.

4. **Asistente que responde consultas** (hacia donde va el curso).

   ```text
   WhatsApp Trigger     → llega un mensaje de un cliente
   AI Agent             → entiende la pregunta, consulta la planilla de precios y escribe la respuesta
   WhatsApp             → le responde al cliente
   ```

   Es lo que van a construir en la Entrega Final.

**n8n frente a Zapier y Make** (para cuando pregunten por qué usamos n8n):

| | Zapier | Make | n8n |
|---|---|---|---|
| Tipo | No-code | No-code visual | Low-code visual |
| Facilidad para empezar | La más fácil | Fácil | Fácil, con algo más de curva |
| Si el bloque no alcanza | Muy limitado | Algunas funciones avanzadas | Nodo de código (JavaScript o Python) |
| Instalarlo en tu máquina | No | No | Sí, gratis (a eso se le dice *self-hosted*, "alojado por vos") |
| Cómo cobra la versión en internet | Por cada tarea que hace cada paso | Por cada paso que corre (lo llama "operaciones" o "créditos") | Por cada vez que corre el workflow entero (una "ejecución") |
| IA y agentes | Sí | Sí | Sí, con nodos de agente de IA (*AI Agent*) muy completos |

Para explicar: las tres sirven para automatizar y la lógica es la misma (trigger, pasos, dato que termina en
algún lado). Elegimos n8n porque se puede instalar gratis, porque cuando un caso se complica se puede escribir
código, y porque cobra por ejecución: un flujo de diez pasos que corre una vez cuenta como una ejecución, no
como diez. Lo que aprendan acá les sirve para cualquiera de las otras.

*Ejemplo:* Un flujo de 10 pasos que corre 1.000 veces por mes: en n8n son 1.000 ejecuciones; en una herramienta que cobra por paso, son 10.000 tareas.

#### Filmina 19 · Tu instancia: dónde corre n8n (3 min)

<p style="color:#1a7f37">Una instancia es tu n8n funcionando en algún lado. Puede estar en la nube de n8n, es decir, en las computadoras de la empresa n8n, y lo usás desde el navegador; o instalado en tu computadora, gratis pero a tu cargo.</p>

Para explicar:
- **"Qué es una instancia: una copia de n8n en ejecución corriendo en algún lado. Es el despliegue de la herramienta."** "En ejecución" quiere decir prendido, funcionando. "Despliegue" es la palabra técnica para "dejar un programa instalado y andando". n8n es un programa: para usarlo, tiene que estar corriendo en una computadora. "Tu instancia" es tu copia de ese programa, con tus workflows y tus credenciales (los permisos para entrar a tus cuentas, que vemos más adelante). Cada alumno va a tener la suya, separada de la de los demás. Es como tener tu propia cuenta de Gmail: el programa es el mismo para todos, pero lo que hay adentro es tuyo.
  - *Ejemplo:* Arturo tiene su instancia y Romina la suya. Si Arturo crea un workflow, no aparece en la de Romina, salvo que lo exporte y ella lo importe.
- **"n8n Cloud: la versión hospedada y gestionada por el equipo de n8n. Es SaaS: entrás desde el navegador y no administrás infraestructura."** **La nube** son computadoras de otra empresa, conectadas a internet, que usás a distancia: tus fotos de Google Fotos están "en la nube". "Hospedada y gestionada por n8n" quiere decir que n8n corre en las computadoras de ellos y ellos se ocupan de que ande. **Infraestructura** son las computadoras, los cables y los programas de base que hacen falta para que algo funcione. SaaS (*Software as a Service*, "programa como servicio") es como Gmail: no instalás nada, entrás con usuario y contraseña. Es lo más fácil para empezar; es pago después de la prueba gratuita y tiene límites de ejecuciones según el plan. La ventaja grande es que está siempre prendida y accesible desde internet, así que los flujos corren aunque tu computadora esté apagada, y las actualizaciones las hace n8n.
  - *Ejemplo:* Te registrás en n8n.io con tu mail y en un minuto tenés una dirección del tipo `tunombre.app.n8n.cloud` con n8n funcionando.
- **"Self-hosted: la infraestructura es tuya, y la responsabilidad también. Pide saber de redes, bases de datos y Docker."** *Self-hosted* quiere decir "alojado por vos": n8n corre en una computadora tuya. **Redes** es cómo se conectan las computadoras entre sí y con internet; Docker lo explicamos en un rato. Lo instalás en tu computadora o en un servidor. Es gratis y sin límite de ejecuciones, y los datos no salen de tu máquina; a cambio, si se cae o hay que actualizarlo, es tu problema. Para que lo usen otras personas o reciba avisos desde internet, tiene que estar en un servidor accesible. Si está instalado en tu notebook, los flujos solo corren mientras la notebook está prendida y con n8n abierto. Para practicar alcanza; para un negocio real, se usa un servidor.
  - *Ejemplo:* Una clínica que no quiere que los datos de los pacientes salgan de su servidor instala n8n ahí. Si el servidor se apaga, los flujos se frenan hasta que alguien lo vuelva a levantar.
- **"Cómo se instala: en el caso self-hosted, con Node o con Docker."** Node es un programa que hace funcionar a otros programas escritos en JavaScript, y n8n es uno de ellos; con Node instalado, escribiendo la orden `npx n8n` se prende n8n en la computadora ("levantar" un programa es prenderlo). Docker es una herramienta que empaqueta programas con todo lo que necesitan para correr. En el curso usamos Docker: el paso a paso completo está más abajo, después de explicar qué es. Con Docker, n8n viene en una especie de "caja" que trae todo lo necesario y funciona igual en cualquier computadora; por eso es la forma más usada en servidores. La elección no cambia cómo se usa n8n: la pantalla y los nodos son los mismos en todas las versiones.
  - *Ejemplo:* ```bash
    # Con Node instalado:
    npx n8n
    # Con Docker:
    docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
    ```

    En los dos casos, n8n queda abierto en el navegador en `http://localhost:5678`. *Localhost* quiere decir "esta misma computadora": es una dirección que no sale a internet, apunta a tu propia máquina.

#### Filmina 20 · JSON: el idioma de los datos dentro de n8n (3 min)

<p style="color:#1a7f37">Los nodos se pasan los datos en JSON: llave y valor. Por eso la semana pasada el prompt devolvía JSON: es el idioma de n8n.</p>

Para explicar:
- **"Qué es: un formato estándar para enviar información entre sistemas."** Es texto, se puede leer a ojo, y casi todas las aplicaciones lo entienden. JSON quiere decir *JavaScript Object Notation*, pero no hace falta saber JavaScript para usarlo: es solo una forma ordenada de escribir datos. Cuando una aplicación le manda información a otra por internet, casi siempre lo hace en JSON.
  - *Ejemplo:* Lo que devuelve un servicio del clima cuando se le pregunta por una ciudad: `{"ciudad": "Rosario", "temperatura": 18, "lluvia": false}`.
- **"Cómo se arma: entre llaves, con pares de 'Llave': 'Valor'. La llave dice qué es, el valor dice cuál."** Mostrá el ejemplo del material: `{"nombre": "Juan", "apellido": "Perez", "id_cliente": 10}`. Los valores pueden ser texto (entre comillas), números o verdadero/falso (`true`/`false`). Los pares se separan con comas, y las llaves siempre van entre comillas. Un valor también puede ser una lista (entre corchetes) u otro JSON adentro, por ejemplo una dirección con calle, número y ciudad. Una coma de más o una comilla que falta y el JSON deja de ser válido (es decir, está mal escrito y los programas no lo pueden leer), como vieron la semana pasada en jsonlint.com.
  - *Ejemplo:* `{"producto": "Torta de chocolate", "precio": 24000, "sin_tacc": false, "sabores": ["chocolate", "dulce de leche"]}`: un texto, un número, un verdadero/falso y una lista.
- **"La analogía: un pedido a domicilio. Para: Fulano. Contenido: pizzas."** El repartidor no necesita entender la pizza: necesita saber dónde está cada dato. Lo mismo un nodo de n8n: no necesita entender el mail del cliente, necesita encontrar el nombre en la llave `nombre` y el destino en la llave `destino`. Mientras las etiquetas estén siempre en el mismo lugar, el paquete llega.
  - *Ejemplo:* `{"para": "Fulano", "direccion": "Av. Siempreviva 742", "contenido": "2 pizzas"}`. El repartidor (el nodo) busca `direccion` y no necesita leer el resto.
- **"Por qué importa acá: cada nodo recibe y envía datos en JSON. Es el medio de comunicación entre nodos."** Un detalle útil: en n8n los datos viajan como una lista de "items". Un **item** es cada dato suelto que pasa por el flujo, una ficha: un mail, un pedido, una fila de la planilla. Si un nodo recibe cinco mails, recibe cinco items y procesa cada uno. Conectá con la Semana 1: por eso el prompt devolvía JSON, es lo que n8n le puede pasar al nodo siguiente. Si la IA devuelve un párrafo, el nodo siguiente no sabe dónde buscar cada dato; si devuelve JSON con llaves fijas, lo usa directo. Cuando abramos n8n en vivo, van a ver ese JSON en la salida de cada nodo.
  - *Ejemplo:* Dos items que salen de un nodo:

    ```json
    [
      {"nombre": "Martín", "destino": "Bariloche"},
      {"nombre": "Lucía", "destino": "Cancún"}
    ]
    ```

    El nodo siguiente corre dos veces, una por cada uno.

**Ejemplo: JSON válido e inválido**

❌ Inválido: llaves sin comillas, comillas simples y una coma de más al final.

```text
{nombre: 'Juan', "edad": 30,}
```

✅ Válido:

```json
{"nombre": "Juan", "edad": 30, "cliente_activo": true}
```

✅ Un poco más completo, con un JSON adentro de otro y una lista:

```json
{
  "nombre": "Lucía Fernández",
  "destino": "Cancún",
  "pasajeros": 2,
  "contacto": {"email": "lucia@mail.com", "telefono": "no_disponible"},
  "intereses": ["playa", "all inclusive"]
}
```

Así se ve en la salida de un nodo de n8n, en la vista JSON.

#### Filmina 21 · El workflow: el mapa completo de una automatización (2 min)

<p style="color:#1a7f37">Un workflow es el mapa completo de la automatización: cuándo arranca, qué hace y en qué orden. Se guarda como un archivo JSON, así que se puede compartir.</p>

Para explicar:
- **"Qué es: una secuencia organizada de pasos que se ejecutan automáticamente para cumplir un objetivo."** "Workflow" quiere decir flujo de trabajo. En n8n es lo que se ve en el lienzo: los nodos y las flechas que los unen. Cada workflow tiene un objetivo concreto, por ejemplo "cargar cada consulta nueva en la planilla". Conviene que cada uno haga una sola cosa bien, y no armar un flujo gigante que haga todo.
  - *Ejemplo:* "Responder consultas de turnos" es un workflow; "mandar el recordatorio el día anterior" es otro. Separados, cada uno es más fácil de probar y de arreglar.
- **"Define cuándo: comienza el proceso y qué lo dispara."** Ese primer nodo es el **trigger**: puede ser un horario, un mail que llega, un formulario que se completa o un mensaje de WhatsApp. "Trigger" quiere decir disparador. Sin trigger, el flujo solo corre si alguien lo ejecuta a mano. Con trigger, corre solo cada vez que pasa el evento. Es la diferencia entre una herramienta que hay que usar y una automatización de verdad.
  - *Ejemplo:* Gmail Trigger (llega un mail), Schedule Trigger (*schedule* es "horario": todos los días a las 8), Form Trigger (*form* es "formulario": alguien completa un formulario de n8n), Webhook (la tienda online avisa una venta).
- **"Define qué: acciones hay que realizar, cómo se conectan entre sí y qué decisiones se toman durante la ejecución."** Las acciones son los nodos que hacen cosas; las conexiones son las flechas; las decisiones son nodos que eligen un camino u otro (los vemos en el Módulo 3). Por ejemplo: si la IA dice que el mail es un reclamo, se avisa al responsable; si es una consulta, se carga en la planilla. Con esas tres cosas (acciones, conexiones y decisiones) se arma cualquier automatización.
  - *Ejemplo:* Acción: "agregar una fila en Sheets". Conexión: la flecha que va del nodo de IA a Sheets. Decisión: "si el tipo es reclamo, mandar al WhatsApp del encargado; si no, a la planilla".
- **"Cómo se guarda: en un archivo JSON estandarizado con la definición completa del flujo. Por eso se puede exportar y compartir."** Un workflow entero es un archivo de texto: se manda por mail, se guarda en una carpeta compartida o se abre en el n8n de otra persona. **Exportar** es sacar el flujo de tu n8n como archivo; **importar** es abrir ese archivo en otro n8n. Lo que no viaja en ese archivo son las contraseñas y las **credenciales**: los permisos que le diste a n8n para entrar a tus cuentas (tu Gmail, tu planilla). Quien lo importa tiene que conectar sus propias cuentas. Por eso se puede compartir un flujo sin compartir el acceso a tus aplicaciones.
  - *Ejemplo:* Exportás "Consultas mail → planilla" como `consultas.json` y se lo mandás a un compañero. Lo importa y le aparece el mismo flujo; solo tiene que conectar su Gmail y su planilla.

**Qué es un nodo y qué tipos hay**

<p style="color:#1a7f37">Cada cuadradito del lienzo es un nodo, y cada nodo hace una sola cosa. Hay cinco tipos: los que arrancan el flujo, los que hacen acciones, los que deciden caminos, los de IA y los de código.</p>

| Tipo | Qué hace | Ejemplos |
|---|---|---|
| **Trigger** (disparador) | Arranca el flujo cuando pasa algo. Siempre es el primero. | Gmail Trigger (llega un mail), Schedule Trigger (a un horario), Webhook (avisa otra aplicación), Form Trigger (se completa un formulario), Manual Trigger (un botón, para probar) |
| **Acción** | Hace algo en una aplicación: leer, escribir, mandar. | Gmail (mandar mail), Google Sheets (agregar fila), WhatsApp, Telegram, HTTP Request (pedirle o mandarle datos a cualquier página o servicio de internet) |
| **Transformación** | Cambia o arma los datos sin salir de n8n. | Edit Fields (editar campos), Filter (filtrar), Sort (ordenar), Aggregate (juntar varios en uno) |
| **Lógica** | Elige un camino o junta caminos. Se ven en el Módulo 3. | IF ("si": si pasa esto, por acá; si no, por allá), Switch (varios caminos según el caso), Merge (juntar dos caminos), Wait (esperar) |
| **IA** | Le pasa el dato a un modelo de IA (un LLM, como el de ChatGPT) con un prompt. | Basic LLM Chain (el más simple: un prompt y una respuesta), AI Agent (agente de IA), Information Extractor (extractor de datos), Text Classifier (clasificador de textos) |
| **Código** | Para lo que ningún nodo resuelve. | Code (se escribe en JavaScript o Python) |

Para explicar: un nodo es como una estación de una línea de montaje. Recibe el dato (en JSON), hace su parte
y lo pasa al siguiente. Cada nodo tiene una **entrada** (lo que le llega del nodo anterior), sus
**parámetros** (lo que configuramos) y una **salida** (lo que le pasa al siguiente). Armar un workflow es
elegir qué estaciones hacen falta y en qué orden.

*Ejemplo:* El flujo de la agencia como línea de montaje: el Gmail Trigger recibe el mail (entrada: nada; salida: el mail), el nodo de IA lo convierte (entrada: el mail; salida: el JSON) y Google Sheets lo guarda (entrada: el JSON; salida: la fila creada).

**El nodo de IA: dónde va el prompt de la Semana 1**

<p style="color:#1a7f37">Acá se juntan las dos semanas. El prompt que armaron la semana pasada va adentro de un nodo de IA. La única diferencia es que el mail ya no lo pegan ustedes: n8n lo pone solo con una expresión.</p>

Un nodo de IA en n8n tiene tres partes:

1. **El modelo** que usa, es decir, qué IA: se conecta como un "sub-nodo", un nodo chiquito que se engancha abajo
   del nodo de IA. Puede ser OpenAI (la empresa de ChatGPT), Anthropic (la de Claude), Google Gemini o un modelo
   que corre en tu propia computadora con un programa llamado Ollama, que vemos en el Módulo 7. Pide una
   credencial con la **clave de API**. Una **API** es la puerta por la que un programa le habla a otro: n8n no
   abre ChatGPT como lo abrimos nosotros, le manda el pedido directo por esa puerta. La **clave de API** es la
   contraseña de esa puerta: te la da la empresa de IA cuando te registrás, y con ella te cobra lo que uses.
2. **El prompt**: acá va la plantilla maestra. Donde la semana pasada pegaban el mail a mano, ahora va una
   **expresión**: un pedacito entre llaves dobles, `{{ }}`, que le dice a n8n "acá poné el dato que llega del
   nodo anterior".
3. **El formato de salida**: se puede activar que la respuesta tenga una estructura fija (*Require Specific
   Output Format*, "exigir un formato de salida", con un *Structured Output Parser*, "lector de salida
   ordenada"). Así n8n controla que el JSON tenga las llaves que pedimos, además de pedirlo en el prompt.

Ejemplo, con la plantilla de la agencia adentro de un nodo **Basic LLM Chain**:

```text
Sos un asistente de ventas de una agencia de viajes que carga consultas en una planilla.
Extraé los datos del mail del cliente que está entre ###.
Usá solo la información del mail. Si un dato no aparece, escribí "no_disponible". No inventes.
Devolvé únicamente un JSON con estas llaves, sin texto antes ni después:
{"nombre": "", "email": "", "destino": "", "fecha_salida": "", "fecha_regreso": "", "pasajeros": ""}

###
{{ $json.text }}
###
```

`{{ $json.text }}` quiere decir "el campo `text` del JSON que llega del nodo anterior", en este caso, el
cuerpo del mail que trajo el Gmail Trigger. El nombre exacto del campo se ve en la salida del trigger: se
arrastra desde ahí y n8n escribe la expresión solo, igual que en la demo del flujo mínimo.

❌ Lo que **no** hay que hacer: escribir el mail de ejemplo adentro del prompt. Funciona en la prueba y
después procesa siempre el mismo mail, llegue el que llegue.

✅ Lo que sí: el prompt fijo y el dato variable con una expresión. El prompt es el mismo para todos los mails;
lo único que cambia en cada ejecución es lo que hay entre ###.

**Cómo se ve un workflow exportado**

Un workflow es un archivo JSON. Recortado, el de la agencia se ve más o menos así:

```json
{
  "name": "Consultas mail → planilla",
  "nodes": [
    { "name": "Gmail Trigger", "type": "n8n-nodes-base.gmailTrigger", "parameters": { "...": "..." } },
    { "name": "Extraer datos", "type": "@n8n/n8n-nodes-langchain.chainLlm", "parameters": { "...": "..." } },
    { "name": "Guardar en planilla", "type": "n8n-nodes-base.googleSheets", "parameters": { "...": "..." } }
  ],
  "connections": {
    "Gmail Trigger": { "main": [[{ "node": "Extraer datos", "type": "main", "index": 0 }]] },
    "Extraer datos": { "main": [[{ "node": "Guardar en planilla", "type": "main", "index": 0 }]] }
  }
}
```

Para explicar: `nodes` es la lista de nodos con su configuración, y `connections` son las flechas: quién le
pasa el dato a quién. No hace falta leerlo ni escribirlo a mano; alcanza con saber que es esto lo que se
comparte cuando se exporta o se importa un template. Las contraseñas no están: las credenciales se guardan
aparte, en la instancia.

#### Filmina 22 · Templates: no reinventes la lógica cada vez (2 min)

<p style="color:#1a7f37">No hace falta arrancar de cero: hay miles de templates armados por otros. Se importan, se les conectan tus cuentas y se adaptan.</p>

Para explicar:
- **"Qué es: un workflow completo, con nodos, conexiones y configuración, que alguien armó para un caso de uso concreto."** Ejemplos: mandar un mail cuando entra un lead (un posible cliente que dejó sus datos, por ejemplo en un formulario), resumir noticias con IA, publicar en redes. Un "caso de uso" es simplemente para qué se usa: "responder consultas", "cargar facturas". "Template" quiere decir plantilla. Es como usar el modelo de un documento en vez de arrancar con la hoja en blanco: la estructura ya está, se cambian los datos. Muchos los arma el propio equipo de n8n y otros, la comunidad.
  - *Ejemplo:* El template "resumir mails nuevos con IA y mandarlos a Telegram" ya trae conectados el Gmail Trigger, un nodo de IA con su prompt y el nodo de Telegram.
- **"Dónde están: en la biblioteca pública de n8n, desde la app o en n8n.io/workflows."** Se busca por caso de uso o por integración. Por ejemplo, buscar "Gmail" muestra todos los templates que usan Gmail, y buscar "lead" o "customer support" ("atención al cliente") muestra los que resuelven ese problema. La biblioteca está en inglés, así que conviene buscar con palabras en inglés. Cada template tiene una descripción, una imagen del flujo y la lista de aplicaciones que usa.
  - *Ejemplo:* En n8n.io/workflows, buscar "Google Sheets" junto con "OpenAI" muestra los templates que usan las dos; buscar "invoice" ("factura") muestra los que procesan facturas.
- **"Cómo se importa: con un clic desde la sección Templates, o cargando un archivo .json con Import from File o Import from URL."** *Import from File* es "importar desde un archivo" de tu computadora; *Import from URL* es "importar desde una dirección de internet" (URL es la dirección de una página, lo que se escribe arriba en el navegador). Como vimos en la filmina anterior, un workflow es un archivo JSON. Importarlo es abrir ese archivo en tu instancia: aparecen los mismos nodos y flechas, listos para adaptar. Así también se comparten flujos entre compañeros o se usan los que vamos a pasar en el curso.
  - *Ejemplo:* Desde el lienzo: menú ⋯ → *Import from File* → elegís `consultas.json`. O *Import from URL* con el link del template.
- **"Reutilizar es: conectar tus propias credenciales, ajustar condiciones y campos, y guardarlo como plantilla interna."** Un cuidado: los templates de la comunidad los arma cualquiera; antes de conectarles tus cuentas, mirá qué hace cada nodo y adónde manda los datos. Un template casi nunca funciona tal cual: hay que conectar tus cuentas, cambiar el nombre de la planilla, ajustar los campos a tu caso y, si tiene IA, adaptar el prompt. Lo bueno es que la lógica ya está pensada y probada.
  - *Ejemplo:* El template usa la planilla "Leads" con la columna "Name"; vos tenés "Consultas" con la columna "nombre". Se cambia la planilla y se mapea "nombre" en lugar de "Name" (**mapear** es decirle a un nodo de qué casillero tiene que sacar cada dato; lo hacemos en vivo después del break).
- *Lo vemos en vivo después del break.*

#### Filmina 23 · Para recordar: un nodo en rojo (1 min)

<p style="color:#1a7f37">Un nodo en rojo no es que n8n se rompió: es n8n diciéndote qué dato falta. Leer el error es parte del trabajo.</p>

Para explicar: **"Un nodo en rojo no significa que n8n esté roto. El error es información: te está diciendo
qué dato falta o qué campo no encontró. Leerlo es parte del trabajo."** Los errores más comunes al empezar:
un campo que no existe, un dato que llega vacío, una credencial que no tiene permiso. El mensaje casi siempre
dice cuál de los tres es. Al principio frustra, y es normal: quien automatiza pasa buena parte del tiempo
leyendo errores y corrigiendo. La buena noticia es que n8n muestra en qué nodo se cortó, qué datos le
llegaron y qué esperaba. Un truco: si el mensaje está en inglés y no se entiende, se puede copiar y pegar
en un chat de IA para que lo explique.

*Ejemplo:* El nodo de Google Sheets queda en rojo con un mensaje del tipo "no se encontró el recurso" (en inglés, *resource not found*; "recurso" es la cosa que buscaba: una planilla, un archivo, un mail). Traducido: no encuentra la planilla. Causa típica: le cambiaron el nombre a la planilla, o la credencial es de otra cuenta de Google.

---

### 48–55 · Sección 03 · Instalación en vivo, parte 1: WSL y Docker Desktop

Sin filmina: compartís pantalla con la página de Docker. Cada alumno lo hace en su computadora al mismo tiempo. El
objetivo es que el instalador de Docker termine justo antes del break, para que en Windows el **reinicio** caiga en
el break y nadie se pierda la clase. Vos ya tenés Docker instalado, así que en esta parte mostrás la página de
descarga y vas leyendo los pasos; las pantallas del instalador las ven ellos en su computadora.

<p style="color:#1a7f37">Ahora vamos a instalar n8n en nuestra computadora, gratis. Son cuatro etapas. Primero, en Windows, activamos WSL, una pieza que Docker necesita. Segundo, instalamos Docker, el programa que maneja las cajas. Tercero, bajamos la caja de n8n y la prendemos. Y cuarto, entramos a n8n desde el navegador y nos creamos el usuario. Las dos primeras las hacemos ahora; en Windows, la computadora se va a reiniciar justo en el break. Las otras dos, cuando volvemos. Si están en la videollamada desde la misma computadora, al reiniciar se van a desconectar: vuelven a entrar después del break.</p>

Los nombres de los botones de Docker Desktop pueden cambiar un poco entre versiones; los de esta guía están en
inglés, que es como viene instalado.

**Antes de empezar: qué hace falta**

| Qué | Por qué | Cómo te fijás |
|---|---|---|
| Windows 10 u 11 de 64 bits, o una Mac | Docker Desktop no funciona en Windows más viejos ni de 32 bits | Windows: Inicio → Configuración → Sistema → Información. Tiene que decir "Tipo de sistema: 64 bits". |
| 8 GB de memoria RAM (con 4 anda, pero lento) | Docker y n8n usan memoria mientras están prendidos | En la misma pantalla, "RAM instalada". |
| Unos 10 GB libres en el disco | Docker, WSL y la caja de n8n ocupan lugar | Explorador de archivos → Este equipo. |
| Poder instalar programas (permiso de administrador) | El instalador cambia cosas de Windows | En tu computadora personal, lo tenés. En una del trabajo, quizás haya que pedírselo al área de sistemas. |
| Internet | Se descargan varios cientos de MB | — |

Preguntás en el chat: *"¿Quién está en Windows y quién en Mac?"*. Los de Mac se saltean la etapa 1 y no reinician.
Después pegás en el chat de la videollamada (y compartís el archivo [instalar-n8n-local.md](instalar-n8n-local.md)):

```text
INSTALAR N8N · Parte 1 (antes del break)
Guía completa, por si te perdés: instalar-n8n-local.md

WINDOWS
1. Inicio → escribí PowerShell → clic derecho → Ejecutar como administrador → Sí
2. Pegá esto y apretá Enter:
   wsl --install --no-distribution
3. NO reinicies todavía.
4. Entrá a docker.com/products/docker-desktop → Download Docker Desktop → Download for Windows – AMD64
5. Abrí el archivo descargado → Sí → dejá tildado "Use WSL 2 instead of Hyper-V" → OK
6. Cuando diga "Close and restart": ESPERÁ. Lo apretamos al empezar el break.

MAC
1. Menú  → Acerca de esta Mac: ¿dice "Chip Apple M…" o "Intel"?
2. docker.com/products/docker-desktop → Download Docker Desktop → Apple Silicon o Intel chip
3. Abrí Docker.dmg → arrastrá la ballena a Aplicaciones → abrila desde Aplicaciones
```

**Etapa 1 · WSL (solo Windows; en Mac se saltea)**

<p style="color:#1a7f37">Las cajas de Docker están hechas para Linux, que es otro sistema operativo, como Windows o el de las Mac. Es el que usan casi todos los servidores del mundo. WSL quiere decir "Subsistema de Windows para Linux": es una pieza oficial de Microsoft que deja correr Linux adentro de Windows. Docker la usa por debajo; ustedes no la van a ver ni tocar nunca. Es como un adaptador de enchufe: el enchufe de Docker es de otro país, y WSL hace que entre en la pared de Windows.</p>

1. Hacés clic en **Inicio**, escribís `PowerShell`, hacés **clic derecho** sobre *Windows PowerShell* y elegís
   **Ejecutar como administrador**. Windows pregunta "¿Quieres permitir que esta aplicación haga cambios?": **Sí**.
   Se abre una ventana azul o negra: es la terminal.
2. Escribís (o pegás) este comando y apretás **Enter**:

```bash
wsl --install --no-distribution
```

Instala WSL solo, sin instalar además un Linux completo, que no hace falta. Si dice que WSL ya está instalado,
mejor: escribís `wsl --update` para actualizarlo y pasás a la etapa 2. Si dice que la opción `--no-distribution`
no existe (pasa en Windows desactualizados), escribís solo `wsl --install`; en ese caso, después de reiniciar
se abre una ventana de Ubuntu que pide un usuario y una contraseña: inventá cualquiera (en minúsculas y sin
espacios), anotala y cerrá esa ventana.

3. **No reinicies todavía.** El instalador de Docker (etapa 2) también pide reiniciar, así que se hace una sola
   vez, al final de la etapa 2.

**Etapa 2 · Descargar e instalar Docker Desktop**

<p style="color:#1a7f37">Docker Desktop es el programa con ventanas para usar Docker. Desde ahí vamos a prender y apagar n8n con un botón, como un reproductor de música. Es gratis para uso personal, para estudiar y para empresas chicas.</p>

4. Entrás a **docker.com/products/docker-desktop** y apretás **Download Docker Desktop**. Elegís tu versión:
   - **Windows:** *Download for Windows – AMD64*. Es la de casi todas las computadoras. La *ARM64* es solo para
     las pocas que tienen procesador ARM (algunas Surface): lo dice en Configuración → Sistema → Información →
     "Procesador".
   - **Mac:** menú  → **Acerca de esta Mac**. Si dice "Chip Apple M1" (o M2, M3, M4…), elegís *Apple Silicon*;
     si dice "Procesador Intel", elegís *Intel chip*.
5. **Windows:** abrís el archivo que se descargó (*Docker Desktop Installer.exe*) y a la pregunta de Windows le
   decís **Sí**. Aparece la pantalla *Configuration*: dejás tildada la opción **Use WSL 2 instead of Hyper-V
   (recommended)** ("usar WSL 2", lo de la etapa 1) y apretás **OK**. Tarda unos minutos. Al final aparece
   **Close and restart** (o *Close and log out*). **En clase, no lo aprietes todavía:** se aprieta al empezar el
   break, y la computadora se reinicia mientras tanto.
   **Mac:** abrís el archivo *Docker.dmg*, arrastrás la ballena a la carpeta **Aplicaciones** y la abrís desde ahí.
   Te pide la contraseña de la Mac: es para terminar de instalarse.

**Mientras se descarga y se instala** (tarda unos minutos), explicás qué es Docker. Es teoría que se entiende mejor
justo cuando lo están instalando:

**Docker: cómo usar n8n gratis, sin pagar el plan de n8n Cloud**

<p style="color:#1a7f37">n8n Cloud es lo más cómodo, pero después de la prueba gratuita se paga por mes. La alternativa es instalar n8n en nuestra propia computadora, gratis y sin límite de ejecuciones. Para eso usamos Docker, una herramienta que nos baja n8n listo para usar, con todo lo que necesita para funcionar, y lo prende con un solo comando, es decir, con una sola orden escrita.</p>

**Qué es Docker, explicado desde cero**

<p style="color:#1a7f37">Antes de instalar nada, entendamos qué es Docker, porque lo van a escuchar mucho. Docker es una herramienta para que un programa funcione igual en cualquier computadora, sin tener que instalarle a mano todo lo que necesita. Lo usan casi todas las empresas de software del mundo.</p>

**1. Un programa necesita "ingredientes" para funcionar.** Ningún programa funciona solo: necesita otras
piezas instaladas en la computadora, en una versión determinada. En programación a eso se le llama
**dependencias**.

- *Ejemplo:* una receta de torta no alcanza con leerla: necesitás harina, huevos, un horno que llegue a 180
  grados y un molde de cierto tamaño. Si te falta algo, o tu horno no calienta bien, la torta sale mal aunque
  la receta sea perfecta. n8n es igual: necesita un programa llamado Node, en una versión concreta, y otras
  piezas más.
- *Ejemplo:* ¿alguna vez instalaron un juego en la computadora y les salió un error del tipo "falta tal
  archivo" o "se necesita una versión más nueva de Windows"? Eso es un problema de dependencias.

**2. El problema clásico: "en mi computadora funciona".** Un programador arma un programa en su
computadora, donde anda perfecto. Se lo pasa a un compañero o lo sube a un servidor, y ahí no anda, porque esa
otra computadora tiene otra versión de algo, o le falta una pieza. Es una de las frases más famosas (y más
odiadas) de la programación.

- *Ejemplo:* es como mandarle a alguien la receta de la torta y que te diga "a mí me salió cruda". No es que
  la receta esté mal: su horno es distinto.

**3. La solución de Docker: mandar todo junto, en una caja.** En vez de mandar solo el programa y esperar
que la otra computadora tenga todo lo necesario, Docker empaqueta el programa **con todos sus ingredientes**
en una caja cerrada, llamada **contenedor**. Esa caja funciona igual en cualquier computadora que tenga
Docker instalado.

- *Ejemplo:* en vez de mandar la receta, mandás la torta ya hecha, en un táper. El que la recibe no necesita
  horno ni ingredientes: abre el táper y listo.
- *Ejemplo:* el nombre viene de los **contenedores de los barcos**. Antes, cada carga se subía al barco de
  otra forma (bolsas, cajones, barriles) y era un caos. Con los contenedores, todo viaja en cajas del mismo
  tamaño: a la grúa le da igual si adentro hay zapatillas o celulares, los mueve igual. Docker hace lo mismo
  con los programas: a Docker le da igual si adentro hay n8n, una base de datos o una página web, los corre
  igual.

**4. Para qué se usa en programación.**

| Para qué | Ejemplo |
|---|---|
| Que un programa funcione igual en todas las computadoras | Todo el curso usa la misma imagen de n8n: a todos les anda igual, tengan Windows o Mac. |
| Instalar herramientas sin "ensuciar" la computadora | Un programador necesita probar una base de datos un rato. La levanta con Docker, la usa y la borra: la computadora queda como estaba. |
| Subir programas a internet (servidores) | Una empresa arma su sistema en contenedores y los sube a un servidor alquilado. Si necesita atender a más usuarios, prende más contenedores iguales. |
| Que todo un equipo trabaje con lo mismo | Diez programadores usan exactamente el mismo contenedor, así nadie dice "en mi computadora funciona". |
| Tener varias versiones a la vez | Probar la versión nueva de n8n en un contenedor sin tocar la que ya usás en otro. |

**5. Para qué lo usamos nosotros.** Para tener n8n instalado en nuestra computadora **sin pagar el plan de
n8n Cloud** y sin pelearnos con la instalación de Node y sus dependencias. El equipo de n8n ya armó la caja
oficial con n8n adentro; nosotros solo la bajamos y la abrimos con un comando.

**Tres palabras de Docker que van a escuchar:**

| Palabra | Qué es | En nuestro caso |
|---|---|---|
| **Imagen** | La "receta" o el paquete listo para usar, que se descarga una vez. | `docker.n8n.io/n8nio/n8n`, la imagen oficial de n8n. |
| **Contenedor** | Una imagen funcionando. Se puede prender, apagar y borrar. | El n8n que está corriendo en tu computadora. |
| **Volumen** | Una carpeta que guarda datos fuera del contenedor, para que no se pierdan. | `n8n_data`: ahí quedan tus workflows y credenciales aunque borres el contenedor. |

**Cloud o Docker: cuál conviene**

| | n8n Cloud | n8n con Docker (self-hosted) |
|---|---|---|
| Costo | Prueba gratuita; después, plan mensual | Gratis |
| Ejecuciones | Limitadas según el plan | Sin límite |
| Instalación | Ninguna: te registrás y entrás | Instalar Docker y correr un comando |
| Cuándo corren los flujos | Siempre, aunque tu computadora esté apagada | Solo mientras tu computadora está prendida y Docker corriendo |
| Recibir avisos desde internet (webhooks, WhatsApp) | Sí, ya tiene una dirección pública (una dirección de internet a la que cualquiera puede llegar) | Hace falta una dirección pública: un servidor, o un "túnel", un servicio que le da a tu computadora una dirección de internet. Lo vemos cuando lo necesitemos |
| Actualizaciones y copias de seguridad (*backups*) | Las hace n8n | Las hacés vos |

Para explicar: para aprender y practicar, Docker en la computadora alcanza y no cuesta nada. Para un negocio
real, donde el flujo tiene que estar prendido las 24 horas, se usa n8n Cloud o el mismo Docker instalado en un
servidor alquilado. La pantalla de n8n y los nodos son los mismos en las dos versiones: lo que aprendan en una
sirve para la otra.

**A los 55 minutos**, aunque alguno no haya terminado, decís:

<p style="color:#1a7f37">Los que están en Windows y ya les apareció "Close and restart": apriétenlo ahora. La computadora se reinicia durante el break. Los que todavía no terminaron, déjenlo instalando y reinicien cuando termine. Los de Mac, abran Docker Desktop. Diez minutos de break; cuando vuelvan, entren de nuevo a la videollamada y abran Docker Desktop desde Inicio.</p>

---

### 55–65 · Break

**Filmina 24 · Break**

<p style="color:#1a7f37">Diez minutos de break. Los de Windows: reinicien ahora. Cuando vuelvan, entren de nuevo a la videollamada y abran Docker Desktop.</p>

---

### 65–78 · Sección 03 · Instalación en vivo, parte 2: n8n funcionando

<p style="color:#1a7f37">Bienvenidos de vuelta. Abran Docker Desktop, que es el ícono de la ballena. Ahora le pedimos a Docker que baje n8n, lo prendemos y nos creamos el usuario. Les paso los pasos por el chat.</p>

Pegás en el chat de la videollamada:

```text
INSTALAR N8N · Parte 2
1. Abrí Docker Desktop → Accept → Skip (no hace falta cuenta) → Skip
2. Esperá a que abajo a la izquierda diga "Engine running"
3. Abrí PowerShell común (en Mac, Terminal) y pegá estos 3 comandos, UNO POR VEZ, con Enter:
   docker pull docker.n8n.io/n8nio/n8n
   docker volume create n8n_data
   docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
4. Abrí el navegador en:  http://localhost:5678
5. Set up owner account: mail, nombre, apellido y contraseña
   (8 caracteres o más, con un número y una mayúscula). ANOTÁ LA CONTRASEÑA.
6. Encuesta: Get started. Listo.
```

Si querés mostrar los comandos en vivo: como tu n8n ya usa el nombre y el puerto 5678, en tu demostración cambiá el
nombre, el puerto y el volumen, para no pisar el tuyo. Después lo borrás desde Docker Desktop (■ y el tacho).

```bash
docker run -d --name n8n_demo -p 5679:5678 -v n8n_demo:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Y entrás a `http://localhost:5679`: te muestra la pantalla de *Set up owner account* desde cero, igual que a ellos.

**Etapa 2 (sigue) · Abrir Docker Desktop por primera vez**

6. Abrís **Docker Desktop** (en Windows, desde Inicio; queda un ícono de una ballena). La primera vez aparecen tres
   pantallas:
   - el contrato de uso (*Docker Subscription Service Agreement*): **Accept** ("aceptar");
   - una invitación a crear una cuenta de Docker o iniciar sesión: **no hace falta**. Apretás **Skip** o *Continue
     without signing in* ("seguir sin iniciar sesión");
   - una encuesta sobre para qué lo vas a usar: **Skip**.
7. Esperás a que abajo a la izquierda aparezca, en verde, **Engine running** ("motor funcionando"). Docker ya
   está listo.

<p style="color:#1a7f37">La ballena es el logo de Docker: carga contenedores en el lomo, como un barco. Cuando dice Engine running, Docker está prendido y listo para recibir cajas. Ojo con una cosa: Docker Desktop tiene que estar abierto cada vez que quieran usar n8n. Si lo cierran, n8n se apaga.</p>

**Etapa 3 · Bajar n8n y prenderlo**

<p style="color:#1a7f37">Ahora le pedimos a Docker la caja de n8n. Son tres comandos que se copian y se pegan, uno por vez. No hace falta entenderlos de memoria; abajo está qué hace cada parte.</p>

8. Abrís una terminal **común** (esta vez no hace falta administrador): Inicio → `PowerShell` → Enter. En Mac,
   abrís **Terminal** (Aplicaciones → Utilidades). Recordá: en la terminal, en vez de hacer clic, se escriben
   órdenes; se pega el comando y se aprieta **Enter**.
9. **Bajar n8n.** Pegás esto y apretás Enter:

```bash
docker pull docker.n8n.io/n8nio/n8n
```

Vas a ver varias barras de descarga que avanzan. Tarda unos minutos, según tu internet. Termina cuando dice
algo como `Status: Downloaded newer image for docker.n8n.io/n8nio/n8n:latest` ("se descargó la imagen").

10. **Crear la carpeta donde se guardan tus datos** (el volumen):

```bash
docker volume create n8n_data
```

Responde solamente `n8n_data`. Ahí van a quedar tus workflows y credenciales, aunque apagues o borres n8n.

11. **Prender n8n:**

```bash
docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Responde con un código largo de letras y números, que es el número de identificación del contenedor. Si aparece
eso, n8n arrancó. Ya podés cerrar la terminal: n8n sigue prendido adentro de Docker.

12. **Comprobarlo.** En Docker Desktop, a la izquierda, entrás en **Containers** ("contenedores"). Aparece **n8n**
    con un punto verde (prendido) y, al lado, `5678:5678`. Si hacés clic en el nombre se abre la pestaña **Logs**
    (el registro de lo que va haciendo n8n). Al final tiene que decir:

```text
Editor is now accessible via:
http://localhost:5678
```

("El editor ya está disponible en http://localhost:5678.") La primera vez puede tardar un minuto en aparecer.

**Qué quiere decir cada parte del comando del paso 11**

| Parte | Qué hace |
|---|---|
| `docker run` | Crea un contenedor a partir de una imagen y lo prende. |
| `-d` | Lo deja corriendo "por detrás" (*detached*, "desenganchado"), así se puede cerrar la terminal. |
| `--name n8n` | Le pone nombre al contenedor: así aparece en Docker Desktop. |
| `-p 5678:5678` | Conecta el puerto 5678 de tu computadora con el del contenedor: por eso se entra por `localhost:5678`. Un **puerto** es como el número de departamento en un edificio: la computadora es el edificio, y cada programa atiende en su número. n8n atiende en el 5678. |
| `-v n8n_data:/home/node/.n8n` | Guarda los datos de n8n en el volumen `n8n_data`. Sin esto, al borrar el contenedor se pierde todo. |
| `docker.n8n.io/n8nio/n8n` | La imagen oficial de n8n, la que bajamos en el paso 9. |

**Etapa 4 · Entrar a n8n y crear tu usuario**

13. Abrís el navegador (Chrome, Edge, Firefox) y escribís arriba, donde van las direcciones:
    **`http://localhost:5678`**. También podés hacer clic en `5678:5678` en Docker Desktop.
14. Aparece **Set up owner account** ("crear la cuenta de dueño"). Completás:
    - *Email*: tu mail;
    - *First Name* y *Last Name*: nombre y apellido;
    - *Password*: una contraseña de al menos 8 caracteres, con un número y una mayúscula.

    Apretás **Next** ("siguiente").

<p style="color:#1a7f37">Esta cuenta no es de internet: es la del dueño de su n8n, y vive en su computadora. No es una cuenta de n8n.io ni de Docker. Anoten la contraseña, porque n8n local no les puede mandar un mail para recuperarla.</p>

15. Aparece una encuesta, *Customize n8n to you* ("personalizá n8n"): la completás o la salteás con **Get started**
    ("empezar").
16. Puede aparecer un ofrecimiento de funciones extra gratis a cambio de tu mail (*Get paid features for free*). Es
    opcional: si lo aceptás, te llega un mail con una clave de licencia y un botón para activarla. Para el curso no
    hace falta.
17. Llegás a la **pantalla de inicio** de n8n, con la lista de workflows vacía. Listo: esta es tu instancia.

<p style="color:#1a7f37">Esto que ven es su n8n, el mismo que el de la nube, pero corriendo en su computadora. Todo lo que hagamos en el curso funciona igual acá. La única diferencia: los flujos corren solo mientras la computadora y Docker Desktop estén prendidos.</p>

**El día a día**

- **Prenderlo:** abrís Docker Desktop, esperás *Engine running*, vas a **Containers** y apretás ▶ (*Start*) en la
  fila de n8n. Después, `http://localhost:5678` en el navegador. **No** se vuelve a correr el comando del paso 11:
  el contenedor ya existe.
- **Apagarlo:** ■ (*Stop*) en la fila de n8n, o cerrás Docker Desktop del todo (clic derecho en la ballena, abajo a
  la derecha → *Quit Docker Desktop*).
- **Tus workflows no se pierden** al apagar: están en el volumen `n8n_data`.
- **Actualizar n8n** (más o menos una vez por mes): ■ *Stop*, después el tacho (*Delete*) en la fila de n8n; eso
  borra la caja, no tus datos, que están en el volumen. Después corrés en la terminal el comando del paso 9 (baja la
  versión nueva) y el del paso 11.

**Si algo sale mal**

| Lo que aparece | Qué quiere decir | Qué hacer |
|---|---|---|
| Docker Desktop dice *WSL update failed* o *WSL needs updating* | WSL está desactualizado | PowerShell como administrador → `wsl --update` → reiniciar. |
| *Virtualization support not detected* o algo con *virtualization* | La **virtualización** (una función del procesador que permite correr una computadora adentro de otra) está apagada | Fijate en el Administrador de tareas (Ctrl + Shift + Esc) → Rendimiento → CPU → "Virtualización". Si dice "Deshabilitado", hay que activarla en la BIOS: el menú que aparece al prender la computadora (con F2, F10 o Supr, según la marca), en una opción llamada *Virtualization*, *Intel VT-x* o *SVM*. Si no te animás, pedí ayuda y mientras tanto usá n8n Cloud. |
| `docker: command not found` o "no se reconoce el término docker" | La terminal no encuentra Docker | Abrí Docker Desktop; cerrá la terminal y abrí una nueva (si estaba abierta desde antes de instalar Docker, no lo ve). |
| *Cannot connect to the Docker daemon* o *error during connect* | Docker Desktop todavía no terminó de arrancar | Esperá a que diga *Engine running* y repetí el comando. |
| *The container name "/n8n" is already in use* | Ya creaste el contenedor antes | No hace falta el paso 11: prendelo con ▶ en Containers. |
| *port is already allocated* ("el puerto ya está ocupado") | Hay otro n8n (u otro programa) usando el 5678 | En Containers, apagá el otro con ■. |
| `localhost:5678` dice "No se puede acceder a este sitio" | n8n está apagado o todavía arrancando | Fijate en Containers que tenga el punto verde y esperá a que los Logs digan *Editor is now accessible*. |
| "Se me borraron los workflows" | El contenedor se creó sin la parte `-v n8n_data:...` | Usar siempre el comando completo del paso 11. |
| La computadora anda lenta | Docker usa memoria | Cuando no uses n8n, cerrá Docker Desktop. |

**A los 78 minutos**, aunque a alguien no le haya funcionado, seguís con la Sección 04. Decís:

<p style="color:#1a7f37">Si a alguno no le anduvo, no se preocupen: es normal, cada computadora es un mundo. Hoy sigan la clase en mi pantalla, o creen una cuenta de prueba gratis en n8n.io para practicar. Escríbanme en el canal del curso qué mensaje les aparece y lo terminamos de resolver; la guía completa está en el archivo que les pasé.</p>

---

### 78–105 · Sección 04 · n8n en vivo: cómo se usa

Todo lo que sigue está en el orden en que lo hacés. Cada bloque gris es algo que copiás, pegás o escribís tal
cual. El texto en verde es lo que decís. Los nombres de algunos botones cambian entre versiones de n8n (por
ejemplo, *Execute step* en las nuevas y *Test step* en las anteriores); cuando pasa, están los dos.

#### Antes de la clase (una sola vez, 20 minutos)

- Abrí tu instancia de n8n (Cloud o la de Docker en `localhost:5678`) y dejala logueada.
- **Importá los tres workflows** de la carpeta [n8n/](n8n/). Para cada uno: en la pantalla de inicio,
   **Create Workflow** → menú **…** (arriba a la derecha) → **Import from File** → elegís el archivo → **Save**.
   Quedan en tu lista como *01 · Mi primer flujo*, *02 · Mi primer flujo (roto a propósito)* y *03 · Agencia:
   consultas por mail con IA*.
- **Dejá andando el 03**, que es el único que pide credencial:
   - abrís el nodo **Modelo: Google Gemini** → *Credential to connect with* → **Create new credential**;
   - en *API Key* pegás tu clave de Google AI Studio y apretás **Save**;
   - cerrás el nodo y apretás **Execute workflow**. Tienen que quedar todos los nodos en verde, y el último,
     *Fila para la planilla*, con dos filas.
   Si el nodo de Gemini da un error del tipo *model not found* ("no se encontró el modelo"), el modelo que trae el
   archivo ya no existe: en el nodo, en *Model*, elegí otro de la lista (uno que diga *flash*) y volvé a ejecutar.
- Hacé una vez el flujo mínimo de los pasos 26 a 46 de esta sección, para ver cómo se ven los botones en tu
   versión. El 01 y el 02 te sirven para comparar: es lo que te tiene que quedar.
- Tené a mano la cuenta de Gmail de prueba (no la personal), para crear la credencial en vivo.
- Tené este README en otra pantalla o en el celular. No lo compartas.

#### Paso A · La consigna (filminas 25 y 26)

6. Pasás la **filmina 25** (separador "04") y la **26** (Ejemplo en vivo), y la dejás de fondo. Decís:

<p style="color:#1a7f37">Hasta acá vimos qué es n8n. Ahora lo vamos a usar. Primero les muestro la pantalla: dónde está cada cosa. Después abrimos un flujo real que armó otra persona, para ver para qué sirve. Y al final armamos uno chiquito desde cero, lo rompemos a propósito para aprender a leer los errores, y lo arman ustedes en su instancia.</p>

7. Preguntás en el chat de la videollamada: *"¿A quién le quedó n8n funcionando?"*. Decís:

<p style="color:#1a7f37">Abran su n8n en localhost:5678, el que acabamos de instalar, pero por ahora solo miren: les aviso cuando les toque. Si la instalación no les anduvo, sigan en mi pantalla y lo terminan en casa con la guía.</p>

8. **Compartís pantalla** (la ventana del navegador con n8n).

#### Paso B · Recorrido por la pantalla (78–83)

9. Mostrás la **pantalla de inicio**, con la lista de workflows. Decís:

<p style="color:#1a7f37">Esta es la pantalla de inicio. Acá van a vivir todos los flujos que armen. Pónganles nombres claros desde el primer día, por ejemplo "Consultas por mail a planilla": cuando tengan diez, lo van a agradecer.</p>

10. Hacés clic en **Credentials** (en las versiones nuevas es una pestaña de la pantalla de inicio, al lado de
    *Workflows*). Decís:

<p style="color:#1a7f37">Esto son las credenciales: los permisos para que n8n entre a su Gmail, a su planilla o a una IA en su nombre. Se cargan una vez y las usan todos los flujos. Son como las llaves de su casa: no se muestran en pantalla y no se comparten.</p>

11. Creás un workflow nuevo: botón **Create Workflow** (o **+**, arriba a la izquierda). Aparece el lienzo vacío.
12. Hacés clic en **Add first step** (el **+** del medio). Se abre el **buscador de nodos**. Escribís `gmail` y
    mostrás la lista: algunas opciones dicen *On message received* (son **triggers**, arrancan el flujo) y otras
    *Send a message*, *Get many messages* (son **acciones**, hacen algo). Decís:

<p style="color:#1a7f37">Esto es el buscador de nodos. Fíjense que Gmail aparece de dos formas. Los triggers son los que arrancan el flujo: "cuando llega un mail". Las acciones son las que hacen algo: "mandá un mail". Todo flujo que corre solo arranca con un trigger.</p>

13. Elegís **On message received** ("cuando llega un mensaje", el Gmail Trigger). Se abre el nodo. Mostrás:
    - arriba, *Credential to connect with* ("credencial para conectarse": con qué cuenta entra);
    - el resto, los **parámetros** del nodo (los campos que se completan para decirle qué hacer).

<p style="color:#1a7f37">Casi todo en n8n está en inglés, pero no se asusten: son siempre las mismas pocas palabras y las vamos traduciendo a medida que aparecen. Acá arriba dice "credencial para conectarse", o sea, con qué cuenta de Gmail entra. Y abajo están los parámetros, que son los campos que le completamos al nodo para decirle qué hacer, como un formulario.</p>

14. **La credencial de Gmail en vivo:** en *Credential to connect with*, elegís **Create new credential**. En n8n Cloud
    aparece **Sign in with Google** ("iniciar sesión con Google"): lo apretás, elegís la cuenta de prueba y aceptás
    los permisos. Queda guardada. (En la instancia de Docker este botón necesita configurar antes un permiso
    especial en Google Cloud, la consola de Google para desarrolladores; si usás Docker, mostrá solo hasta esta
    pantalla y decí que se ve en el Módulo 4.) Decís:

<p style="color:#1a7f37">Acabo de darle permiso a n8n para leer los mails de esta cuenta. Lo hice una vez; de ahora en adelante, cualquier nodo de Gmail usa esta credencial sin volver a pedirla. Si un día cambio la contraseña, el nodo se pone en rojo con un error de autorización, que quiere decir "no tengo permiso para entrar". No es que el flujo esté mal: hay que volver a conectar la credencial.</p>

15. Cerrás el nodo y mostrás la sección **Credentials**: ahí aparece la credencial nueva.
16. Mostrás, arriba del lienzo, el botón **Save** y el interruptor **Active** (en las versiones más nuevas puede
    decir **Publish**). Y abajo del lienzo, el botón **Execute workflow** (o **Test workflow**). Decís:

<p style="color:#1a7f37">Tres botones para traducir: Save es guardar, Execute workflow es "ejecutar el flujo", o sea, hacerlo correr, y Active es activarlo. Dos formas de correr un flujo. Mientras lo armamos, lo probamos a mano con este botón de abajo: corre una vez y vemos qué pasó en cada nodo. Cuando funciona, lo activamos con este interruptor de arriba, y desde ahí corre solo cada vez que pasa lo del trigger, aunque yo cierre la computadora (en Cloud).</p>

17. Mostrás arriba, en el centro, la pestaña **Executions** (al lado de *Editor*). Decís:

<p style="color:#1a7f37">Executions quiere decir "ejecuciones", y es el historial: cada vez que el flujo corrió, si terminó bien o con error, y en qué nodo se cortó. Cuando algo falla, esto es lo primero que se mira.</p>

18. Explicás los **items** con este ejemplo, sin hacer nada en pantalla:

<p style="color:#1a7f37">Un detalle importante: si llegan cinco mails juntos, el trigger los entrega como cinco "items", cinco filas. Y cada nodo que sigue trabaja con los cinco, uno por uno: la IA corre cinco veces y la planilla recibe cinco filas. No hay que programar ninguna repetición. Por eso el prompt se escribe pensando en un solo mail. Ojo con el costo: cinco items son cinco llamadas a la IA, y se paga cada una.</p>

19. Borrás el nodo de Gmail (lo seleccionás y apretás **Delete**). Ya no lo usamos.

#### Paso C · Para qué sirve: el flujo de la agencia, funcionando (83–89)

20. Abrís otra pestaña en **n8n.io/workflows** y mostrás el buscador un minuto: escribís un caso de uso (por
    ejemplo `email summary` o `gmail ai`). Decís:

<p style="color:#1a7f37">Esta es la biblioteca de templates, o sea, de plantillas: miles de flujos que armaron otras personas que usan n8n. Antes de armar algo desde cero, conviene buscar acá: muchas veces alguien ya resolvió algo parecido. Se importan con el botón Use for free. Hoy no vamos a importar uno de estos, porque casi todos piden conectar Gmail, Telegram o una planilla. En cambio, les muestro uno que armé para el curso y que hace exactamente el trabajo de la semana pasada.</p>

21. Volvés a tu n8n y abrís **03 · Agencia: consultas por mail con IA** (lo importaste antes de la clase). Decís:

<p style="color:#1a7f37">Este flujo hace lo que la semana pasada hacíamos a mano: agarra un mail desordenado, se lo pasa a la IA con nuestra plantilla y arma la fila para la planilla. Los cuadros amarillos son notas: no hacen nada, son para explicar. Leámoslo como un mapa, de izquierda a derecha.</p>

22. Hacés clic en cada nodo, de izquierda a derecha, y decís lo de cada uno:
- **Arrancar a mano** (el trigger):

<p style="color:#1a7f37">El primero arranca el flujo con un botón, para probar. En el flujo de verdad, acá iría el Gmail Trigger: cada vez que llega un mail a consultas de la agencia.</p>

- **Mails que llegan (simulados)**: lo abrís y mostrás los dos mails en el código.

<p style="color:#1a7f37">Este nodo hace de bandeja de entrada: inventa dos mails, como si hubieran llegado juntos. Son los de la semana pasada: el desordenado de Martín, que va a Bariloche, y el prolijo de Lucía, que va a Cancún. Es un nodo de código, pero no hace falta entenderlo: solo tiene los dos textos adentro. Dos mails son dos items, y el resto del flujo va a correr dos veces, una por cada uno.</p>

- **Extraer datos con IA**: lo abrís y mostrás el prompt. Señalás el `{{ $json.text }}` del final, entre los ###.

<p style="color:#1a7f37">Acá está la plantilla maestra de la semana pasada, tal cual: el rol, las reglas, el ejemplo de Ana y el formato JSON. La única diferencia está abajo, entre los numerales: donde antes pegábamos el mail a mano, ahora dice llaves dobles, json punto text. Quiere decir "acá va el texto del mail que llega del nodo anterior". El prompt es siempre el mismo; lo que cambia en cada vuelta es el mail.</p>

- **Modelo: Google Gemini** (el cuadrito de abajo, enganchado al de IA):

<p style="color:#1a7f37">Este cuadrito de abajo es el modelo, la IA que hace el trabajo: en este caso Gemini, de Google. Se le podría enchufar ChatGPT o Claude en su lugar, y el resto del flujo queda igual. Para usarlo le cargué una credencial con mi clave de API, la contraseña que da Google para que n8n le hable a Gemini.</p>

- **Pasar a JSON**:

<p style="color:#1a7f37">La IA responde con texto que tiene forma de JSON. Este nodo lo convierte en una ficha de verdad, con casilleros, para que el nodo siguiente pueda leer cada dato por separado. También es código, y tampoco hace falta entenderlo: es un traductor.</p>

- **Fila para la planilla**:

<p style="color:#1a7f37">Y el último arma la fila: un casillero por cada columna de la planilla. En el flujo de verdad, acá iría el nodo de Google Sheets que la agrega. Y fíjense en la última columna, estado: si algún dato vino como no_disponible, dice "a revisar". Es el control de riesgos que van a escribir en el paso 5 de la pre-entrega, armado en un nodo.</p>

23. Apretás **Execute workflow** (abajo del lienzo). Mientras corre, mostrás que el nodo de IA se pone en naranja
    (trabajando) y después en verde, con un **2** al lado: corrió dos veces. Abrís **Fila para la planilla** y
    mostrás la vista **Table**: dos filas, una de Martín y una de Lucía. Va a salir algo así (la IA puede redactar
    distinto algún valor):

```text
nombre           telefono       email                      destino    fecha_salida              estado
Martín Gómez     341 555-0192   no_disponible              Bariloche  14 de julio (aproximado)  a revisar
Lucía Fernández  no_disponible  lucia.fernandez@mail.com   Cancún     3 de marzo de 2027        a revisar
```

24. Decís:

<p style="color:#1a7f37">Dos mails, uno desordenado y uno prolijo, y nadie copió ni pegó nada. Los dos quedaron a revisar, y está bien: a Martín le falta el mail, y a Lucía, el teléfono y el presupuesto. Una persona los mira antes de responder. Y fíjense que la IA no inventó ningún dato. Esto que ven es una pre-entrega construida: el proceso es cargar consultas, el boceto es mail, IA y planilla, el prompt es la plantilla y el riesgo se controla con la columna estado. Lo que ustedes entregan esta semana es este mismo diseño, en papel.</p>

25. Cerrás el workflow (sin guardar cambios). Decís:

<p style="color:#1a7f37">Esto es para lo que sirve n8n. Al final del curso ustedes van a armar uno así, con el mail y la planilla de verdad. Ahora vamos a lo más chiquito posible, para entender cómo pasan los datos de un nodo a otro.</p>

Si el nodo de IA se pone en rojo en vivo (sin internet, clave vencida, límite de uso de Gemini), no lo arregles
delante de todos: mostrá el resultado de la corrida que hiciste antes de la clase en **Executions** (la pestaña de
arriba): ahí quedan guardados los datos de cada nodo.

#### Paso D · El flujo mínimo, construido desde cero (89–95)

26. Decís qué vamos a armar. (Plan B: si algo no te sale en vivo, abrí **01 · Mi primer flujo**, que es este mismo
    flujo terminado, y explicalo nodo por nodo desde ahí.)

<p style="color:#1a7f37">Vamos a armar un flujo de tres nodos. El primero lo arranca con un botón. El segundo inventa un dato, como si hubiera llegado un mail de Martín, el de la clase pasada. Y el tercero usa ese dato para armar un saludo. Lo que quiero que vean es cómo un nodo le pasa el dato al siguiente.</p>

27. Workflow nuevo: **Create Workflow**. Le ponés nombre arriba a la izquierda: `Mi primer flujo`.
28. **Add first step** ("agregar el primer paso") → escribís `manual` → elegís **Trigger manually** ("arrancar a mano") (también aparece como *Manual Trigger* o
    *When clicking 'Execute workflow'*). Decís:

<p style="color:#1a7f37">Este trigger arranca el flujo cuando aprieto un botón. Es para probar: en un flujo real, en su lugar iría "cuando llega un mail" o "cuando se completa un formulario".</p>

29. Hacés clic en el **+** que aparece a la derecha del trigger → escribís `edit` → elegís **Edit Fields (Set)**
    ("editar campos").
30. Dentro del nodo, en *Fields to Set* ("campos a completar"), hacés clic en **Add Field** ("agregar campo") dos
    veces y completás:

```text
Campo 1 →  name: nombre    type: String    value: Martín Gómez
Campo 2 →  name: destino   type: String    value: Bariloche
```

<p style="color:#1a7f37">Cada campo tiene tres cosas: name es el nombre del casillero, value es lo que va adentro, y type es el tipo de dato. String, en el idioma de la programación, quiere decir texto. Si fuera un número, elegiríamos Number.</p>

31. Apretás **Execute step** (o **Test step**: "ejecutar este paso", hacer correr solo este nodo), arriba a la
    derecha del nodo. A la derecha aparece la salida (*Output*, lo que el nodo devuelve). Mostrás las dos vistas:
    **Table** (tabla: una fila con dos columnas) y **JSON**:

```json
[
  {
    "nombre": "Martín Gómez",
    "destino": "Bariloche"
  }
]
```

32. Decís:

<p style="color:#1a7f37">Esto que sale es un JSON, la ficha con casilleros de la semana pasada: el casillero "nombre" con Martín Gómez y el casillero "destino" con Bariloche. En un flujo real, este JSON lo devolvería la IA después de leer el mail. Así es como se pasan los datos todos los nodos de n8n.</p>

33. Cerrás el nodo. En el lienzo, **+** a la derecha del Edit Fields → otro **Edit Fields (Set)**.
34. Al abrirlo, a la izquierda vas a ver el panel **Input** ("entrada") con los datos que llegan del nodo anterior
    (`nombre` y `destino`). Si no aparecen, apretá **Execute previous nodes** ("ejecutar los nodos anteriores") en
    ese panel. Decís:

<p style="color:#1a7f37">A la izquierda está lo que le llega a este nodo: los datos del nodo anterior. Para que aparezcan, el nodo anterior tiene que haberse ejecutado al menos una vez.</p>

35. **Add Field** → name: `saludo`, type: String. En *value* escribís `Hola ` (con un espacio al final).
36. **Arrastrás** el campo `nombre` desde el panel Input de la izquierda hasta el cuadro *value*, después de
    "Hola ". El cuadro cambia a modo expresión (pasa de *Fixed*, "texto fijo", a *Expression*, "expresión": un
    texto que trae datos de otro nodo) y queda así:

```text
Hola {{ $json.nombre }}
```

37. Decís:

<p style="color:#1a7f37">Miren lo que escribió n8n solo cuando arrastré: llaves dobles, $json.nombre. Quiere decir "acá no va un texto fijo; va el casillero nombre del JSON que llega del nodo anterior". Las llaves dobles avisan "esto no es texto, es un dato que hay que ir a buscar"; $json quiere decir "la ficha que llegó"; y nombre es el casillero. Esto se llama mapear un dato, que es decirle al nodo de qué casillero sacar cada cosa, y es lo que más van a hacer en todo el curso.</p>

38. **Execute step**. Mostrás la salida:

```json
[
  {
    "saludo": "Hola Martín Gómez"
  }
]
```

39. Volvés al primer Edit Fields, cambiás `Martín Gómez` por `Lucía Fernández` y apretás **Execute workflow** abajo
    del lienzo. Abrís el último nodo: dice `Hola Lucía Fernández`. Decís:

<p style="color:#1a7f37">Cambié el dato de entrada y no toqué el nodo del saludo. Saluda a Lucía solo. Eso es lo que hace un flujo: el mismo proceso, con cualquier dato que llegue.</p>

40. **Save** (o **Ctrl + S**).

#### Paso E · Romperlo y leer el error (95–98)

41. Decís lo de abajo. (Atajo: si preferís no editar en vivo, abrí **02 · Mi primer flujo (roto a propósito)**.
    Tiene los dos errores ya armados, uno arriba del otro: apretás **Execute workflow**, el de arriba queda verde
    pero con el saludo vacío y el de abajo se pone en rojo. Abrís cada uno y seguís desde el paso 43.)

<p style="color:#1a7f37">Ahora lo vamos a romper a propósito. Los errores van a aparecer siempre, y lo importante es perderles el miedo y saber leerlos.</p>

42. **El error que avisa.** Abrís el último Edit Fields (el del saludo) y, en el campo `saludo`, cambiás el tipo de
    **String** a **Number** (el desplegable que está al lado del nombre del campo). El valor lo dejás como está:
    `Hola {{ $json.nombre }}`. Decís:

<p style="color:#1a7f37">Le acabo de decir a n8n que en el casillero saludo va un número. Pero lo que le llega es un texto: "Hola Martín Gómez". Veamos qué pasa.</p>

43. **Execute step**. El nodo se pone en **rojo** y aparece este mensaje (probado en n8n 2.46):

```text
'saludo' expects a number but we got 'Hola Martín Gómez' [item 0]
```

Abajo, n8n agrega una sugerencia: *To fix the error try to change the type for the field "saludo"* ("para
arreglarlo, probá cambiar el tipo del campo saludo").

44. Lo leés en voz alta y lo traducís:

<p style="color:#1a7f37">Palabra por palabra: "saludo esperaba un número, pero recibimos 'Hola Martín Gómez'". Item 0 quiere decir "en la primera ficha": n8n empieza a contar desde cero. Y fíjense que abajo hasta nos dice cómo arreglarlo: cambiar el tipo. Este error pasa mucho en la vida real: la planilla espera un número en la columna adultos y la IA devuelve "dos", escrito con letras. Un nodo en rojo no es que n8n se rompió: es n8n diciéndonos exactamente qué dato no le cierra.</p>

45. Cerrás el nodo, apretás **Execute workflow** y vas a la pestaña **Executions**. Abrís la última corrida: aparece
    marcada como error, y adentro se ve en qué nodo se cortó. Decís:

<p style="color:#1a7f37">Y en Executions queda registrado: cuándo pasó, en qué nodo y con qué datos. Cuando un flujo activo falle a las tres de la mañana, esto es lo primero que van a mirar.</p>

46. **El error que no avisa.** Volvés a poner el tipo en **String** y ejecutás: vuelve a verde. Ahora cambiás el
    valor por `Hola {{ $json.email }}` (pidiendo un casillero que no existe) y apretás **Execute step**. El nodo
    queda **verde**, pero la salida dice `"saludo": "Hola "`, sin nada después. Decís:

<p style="color:#1a7f37">Miren esto, que es todavía más importante. Le pedí el casillero email, que no existe: el nodo anterior solo manda nombre y destino. Y n8n no se queja: queda en verde y escribe "Hola " con un vacío. Este es el error más peligroso de todos, porque nadie se entera. En un flujo real, si la IA devuelve "Nombre" con mayúscula en vez de "nombre", la planilla se llena de filas con el nombre vacío, y el flujo sigue en verde. Por eso la semana pasada insistimos tanto en que las llaves sean siempre las mismas, y por eso siempre hay que mirar la salida, no solo el color.</p>

Lo arreglás: volvés a poner `Hola {{ $json.nombre }}` y ejecutás. Sale `Hola Martín Gómez`.

#### Paso F · Ejercicio 4: lo arman los alumnos (98–105)

47. Decís:

<p style="color:#1a7f37">Ahora ustedes. Les paso los pasos por el chat. Armen el mismo flujo, ejecútenlo, y después rómpanlo y busquen el error en Executions. Tienen siete minutos. Si se traban, escriban en el chat en qué paso.</p>

48. Pegás en el chat de la videollamada:

```text
EJERCICIO 4 · Tu primer flujo en n8n (7 min)

1. Workflow nuevo. Add first step → buscá "manual" → Trigger manually.
2. + → buscá "edit" → Edit Fields (Set). Add Field dos veces:
   nombre = Martín Gómez
   destino = Bariloche
   Apretá Execute step y mirá la salida en Table y en JSON.
3. + → otro Edit Fields. Add Field: saludo. En el valor escribí "Hola " y ARRASTRÁ el campo nombre desde la izquierda.
   Execute step: tiene que salir "Hola Martín Gómez".
4. Rompelo: en el campo saludo, cambiá el tipo de String a Number y ejecutá. Leé el error rojo.
5. Andá a la pestaña Executions y buscá la corrida con error.
6. Volvé el tipo a String y cambiá el valor por: Hola {{ $json.email }}
   Ejecutá: ¿se pone en rojo? ¿Qué sale en el saludo?
```

49. Mientras trabajan, mirás el chat. Las trabas más comunes y qué les decís:

| Lo que escriben | Qué les respondés |
|---|---|
| "No encuentro Edit Fields" | Que busquen `set` o `edit`; en algunas versiones se llama solo **Set**. |
| "No me aparece nada a la izquierda para arrastrar" | Que ejecuten antes el nodo anterior (**Execute previous nodes** en el panel Input). |
| "Me sale el texto `{{ nombre }}` tal cual" | Lo escribieron a mano. Que lo borren y arrastren el campo: n8n escribe `{{ $json.nombre }}` solo. |
| "Me sale Hola sin el nombre" | El cuadro quedó en modo *Fixed* (texto fijo). Que lo pasen a *Expression* (arriba del cuadro) o vuelvan a arrastrar. |
| "No me da error, sale verde" | Si es el paso 6, está bien: es el error silencioso. Si es el paso 4, que revisen que el tipo diga **Number** y no String. |
| "No me anduvo la instalación" | Que miren tu pantalla, y lo terminen en casa con la guía de instalación y el Ejercicio 8. Que te escriban en el canal qué error les aparece. |

50. A los 7 minutos preguntás: *"¿A quién le salió el saludo? ¿Y el error? ¿Qué decía el suyo?"* y pasás a la
    filmina 27.

#### Si algo sale distinto de lo esperado

| Lo que pasa | Qué hacés |
|---|---|
| Los botones tienen otro nombre | Es por la versión de n8n. Buscá el equivalente: *Test* ↔ *Execute*, *Active* ↔ *Publish*. Decilo en voz alta para que los alumnos no se pierdan. |
| El flujo 03 da error en el nodo de IA | Mostrá la corrida buena de antes de la clase en **Executions**. Si el error dice *model not found*, elegí otro modelo en el nodo de Gemini. |
| La credencial de Gmail no se conecta | Saltealo y decí que se ve a fondo en el Módulo 4. No es necesario para el flujo mínimo. |
| El error dice otra cosa | Leé lo que diga. Lo importante es la idea: el nodo recibió un dato que no es el que esperaba. |
| Algo no te sale en vivo | Importá el workflow ya armado de la carpeta `n8n/` (ver "Los workflows listos para importar", en Preparación) y seguí desde ahí. |
| Se va el tiempo | En el Paso C, ejecutá el 03 sin leer cada nodo (solo el prompt y el resultado), y dejá el Ejercicio 4 para casa (Ejercicio 8). |

#### Para ampliar: qué explicar de cada parte de la pantalla

Si te preguntan, o para profundizar mientras los alumnos trabajan.

| Qué mostrar | Para explicar |
|---|---|
| La pantalla de inicio con la lista de workflows | Acá vive todo lo que armen. Cada workflow se puede exportar como `.json`. Conviene ponerles nombres claros desde el primer día ("Consultas mail → planilla"): cuando tengan diez, se agradece. |
| Dónde están las **credenciales** | Son las llaves para que n8n entre a Gmail, Sheets o una IA en tu nombre. Se cargan una vez y se reutilizan en todos los workflows. Las vemos a fondo en el Módulo 4. Son información sensible: no se comparten ni se muestran en pantalla, y no viajan cuando se exporta un workflow. |
| Un workflow nuevo y el **buscador de nodos** | Hay **triggers** (lo que arranca el flujo) y **acciones** (lo que hace). Todo workflow que corre solo necesita al menos un trigger. Se puede buscar por nombre de aplicación ("Gmail") o por lo que se quiere hacer, y cada aplicación trae varias acciones (mandar un mail, leer mails, marcar como leído). |
| Un nodo abierto | Parámetros por un lado; entrada y salida por el otro. La salida tiene vista **Table** y vista **JSON**: es el JSON de la filmina 20. Se puede ver qué datos entraron al nodo y qué datos salieron: es la herramienta principal para entender qué está pasando en un flujo. |
| Guardar, ejecutar y el interruptor para activarlo | Ejecutar a mano sirve para probar. Para que corra solo hace falta un trigger real y activarlo. Mientras se arma, se prueba con el botón; cuando funciona, se activa y desde ahí corre solo cada vez que pasa el evento del trigger. |
| **Executions** | El historial de cada corrida, con su estado. Muestra cuándo corrió, si terminó bien o con error, y en qué nodo se cortó. Permite abrir una corrida vieja y ver los datos exactos que pasaron por cada nodo. |

| | Ejecutar a mano (*Execute workflow*) | Flujo activo (*Active*) |
|---|---|---|
| Cuándo corre | Cuando apretás el botón | Cada vez que pasa el evento del trigger |
| Para qué sirve | Probar y ver los datos de cada nodo | Que trabaje solo, 24/7 |
| Qué ves | Los datos en pantalla en cada nodo | El historial en **Executions** |

**Credenciales, más a fondo:** una credencial es como darle a alguien una llave de tu casa. Conviene darle solo las
puertas que necesita (por ejemplo, solo leer mails y no borrarlos), no compartirla y no mostrarla en pantalla. Para
los modelos de IA es parecido, pero en vez de "iniciar sesión" se pega una **clave de API** que da el proveedor
(OpenAI, Anthropic, Google).

*Ejemplo:* Si una credencial de Gmail tiene permiso para leer y mandar mails, un template mal hecho podría mandar
mails en tu nombre. Por eso, antes de conectar un template de la comunidad, se mira qué hace cada nodo.

**Mapear, más a fondo:** el Manual Trigger reemplaza, mientras probamos, al trigger real (un mail, un formulario). El
primer Edit Fields hace de "dato que llega": en un flujo real, esos datos los traería el mail o los devolvería la
IA. Las llaves dobles `{{ }}` le dicen a n8n "acá no va un texto fijo, va un dato que viene del nodo anterior".

*Ejemplo:* Un caso real del error silencioso del paso E: la IA devuelve la llave `"Nombre"` con mayúscula y el nodo
de Sheets busca `nombre`. El dato está, pero con otro nombre: n8n no lo encuentra, deja la columna vacía y no avisa.

---

### 105–110 · Los 5 pasos de la pre-entrega

Mostrá cada paso con el **ejemplo resuelto de la agencia de viajes** (en `ejercicios-docente.md`). Los
alumnos lo hacen en casa con su propio proceso.

#### Filmina 27 · Paso 1: el proceso (1 min)

<p style="color:#1a7f37">Paso 1 de la pre-entrega: elijan una tarea repetitiva, que pase seguido y no requiera criterio. Descarten lo que pasa una vez al año.</p>

Para explicar:
- **"Objetivo: elegir un candidato que valga la pena."** No cualquier tarea manual merece un flujo. Un buen candidato pasa seguido, se hace siempre más o menos igual y le come tiempo a alguien que podría hacer algo más valioso. Elegir bien acá ahorra trabajo en todos los pasos que siguen: con un mal candidato, el ROI no cierra y el boceto se complica.
  - *Ejemplo:* Buen candidato: "cargar los pedidos de WhatsApp en la planilla", 30 veces por día. Mal candidato: "decidir el menú del mes", una vez por mes y con mucho criterio.
- **"Listar tres tareas manuales y repetitivas de tu trabajo, tu estudio o tu vida diaria."** Tres, para poder comparar y elegir. Si piensan en una sola, se quedan con la primera que se les ocurre, que no siempre es la mejor. Pueden ser de cualquier ámbito: el trabajo, un emprendimiento, el club, la facultad.
  - *Ejemplo:* Cargar en una planilla los pedidos que llegan por WhatsApp; mandar recordatorios de turnos; responder "¿cuánto sale el envío?".
- **"Descartar las de baja frecuencia: si pasa una vez al año, el ROI va a ser negativo."** Es lo que vimos en la filmina 14: armar y mantener el flujo cuesta más que hacer la tarea a mano. Si la tarea pasa una vez por mes o menos, probablemente no conviene.
  - *Ejemplo:* La declaración anual de impuestos, la fiesta de fin de año, la mudanza de oficina: se descartan.
- **"Quedarnos con la de alta frecuencia y bajo juicio humano."** Ejemplo: cargar las consultas que llegan por mail. Pasa todos los días y no requiere decidir nada delicado: hay que leer el mail y pasar los datos. Y tiene un paso donde la IA aporta: entender un mail escrito de cualquier forma.
  - *Ejemplo:* De las tres del primer punto, "cargar los pedidos de WhatsApp" pasa 30 veces por día y no requiere decidir nada: es la elegida.
- **"Resultado esperado: un proceso elegido y descrito en dos o tres líneas."** Qué es la tarea, quién la hace hoy y cómo. Por ejemplo: "Todos los días llegan consultas por mail; una persona las lee y carga nombre, destino y fechas en una planilla". Si no se puede describir en dos o tres líneas, probablemente es demasiado grande para un primer flujo.
  - *Ejemplo:* "Todos los días llegan unos 30 pedidos por WhatsApp. La encargada los lee y anota producto, cantidad, fecha y cliente en una planilla."

**Ejemplo: proceso mal elegido y bien elegido**

❌ Mal: *"Organizar la fiesta de fin de año de la empresa."* Pasa una vez al año y requiere muchas decisiones
humanas (lugar, presupuesto, menú).

✅ Bien: *"Todos los días llegan entre 5 y 10 consultas por mail. Una persona las lee y carga nombre, destino,
fechas y cantidad de pasajeros en una planilla."* Pasa todos los días, se describe en dos líneas y tiene un
paso donde la IA ayuda: entender el mail.

#### Filmina 28 · Paso 2: el ROI (1 min)

<p style="color:#1a7f37">Paso 2: el ROI. Cuánto tarda, cada cuánto pasa, qué harían con ese tiempo y si escala. Y una razón para no automatizarlo.</p>

Para explicar:
- **"Objetivo: justificar con criterio por qué conviene automatizarlo."** Con criterio quiere decir con números y con argumentos, no con "me parece". Es lo que le mostrarían a un jefe o a un cliente para que apruebe el proyecto: cuánto tiempo se ahorra, qué se hace con ese tiempo y qué pasa si el negocio crece.
  - *Ejemplo:* "Me ahorra mucho" no convence a nadie. "Me ahorra 13 horas por mes, que hoy el vendedor gasta cargando datos en vez de vender" sí.
- **"Estimar cuánto tiempo te lleva hoy hacerlo a mano y con qué frecuencia se repite."** En el ejemplo: 40 consultas por semana × 5 minutos = unas 13 horas por mes. No hace falta exactitud: alcanza con una estimación honesta. Si no saben cuánto tarda, que lo midan una vez con el reloj del celular.
  - *Ejemplo:* 30 pedidos por día × 3 minutos = 90 minutos por día: unas 30 horas por mes.
- **"Preguntarte qué harías con ese tiempo: ese es el costo de oportunidad."** En el ejemplo de la agencia: con 13 horas por mes, el vendedor puede responder antes las consultas y cerrar más ventas. Es la parte del ROI que no sale en la cuenta, pero que convence.
  - *Ejemplo:* Con esas 30 horas, la encargada podría armar las promociones de Instagram que nunca tiene tiempo de hacer.
- **"Chequear si sigue teniendo sentido cuando el volumen se multiplique por diez."** Es la pregunta de si "escala": si sigue funcionando igual de bien cuando el trabajo crece mucho. Si con diez veces más trabajo sin automatizar haría falta otra persona, la automatización escala. Con 400 consultas por semana, cargarlas a mano serían más de 130 horas por mes, casi un sueldo entero; el flujo, en cambio, las procesa igual.
  - *Ejemplo:* Con 300 pedidos por día serían 15 horas diarias de carga: dos personas. El flujo procesa 300 igual que 30.
- **"Resultado esperado: dos o tres líneas que argumentan por qué automatizarlo, y por qué no."** El "por qué no" es importante: muestra que se pensó. Por ejemplo: "si las consultas son muy pocas, o si cada una necesita una respuesta muy personalizada, quizás no convenga". No hay que convencer a nadie de que todo es perfecto: hay que mostrar que se evaluaron los dos lados.
  - *Ejemplo:* "Por qué no: los pedidos con indicaciones raras ('sin azúcar pero que sea bien dulce') la IA los puede interpretar mal; esos conviene que los revise una persona."

**Ejemplo: ROI mal y bien argumentado**

❌ Mal: *"Ahorra mucho tiempo y es más eficiente."* No tiene números ni dice qué se hace con el tiempo.

✅ Bien: *"Hoy lleva 5 minutos por consulta y llegan 40 por semana: unas 13 horas por mes. Con ese tiempo, el
vendedor puede responder antes y cerrar más ventas. Si las consultas se multiplican por diez, a mano haría
falta otra persona; el flujo las procesa igual. Por qué no: si cada consulta necesitara una respuesta muy
personalizada, la IA ayudaría poco."*

#### Filmina 29 · Paso 3: el boceto (1 min)

<p style="color:#1a7f37">Paso 3: el boceto. Qué lo dispara, los pasos del medio, dónde entra la IA y dónde termina el dato.</p>

Para explicar:
- **"Objetivo: traducir el proceso a pasos de n8n."** Pasar de la descripción en palabras ("cargo las consultas en la planilla") a una lista de pasos que después van a ser nodos: qué lo arranca, qué pasa en el medio y dónde termina. Es el plano del flujo antes de construirlo.
  - *Ejemplo:* En palabras: "leo los mails y anoto los datos". En pasos de n8n: Gmail Trigger → nodo de IA → Google Sheets.
- **"Definir el disparador: ¿arranca por un evento o por horario?"** Evento: llega un mail, se completa un formulario. Horario: todos los lunes a las 9. Es el trigger que vimos en la filmina 21. La pregunta para elegir es: ¿la tarea tiene que pasar en el momento en que llega algo, o puede esperar a una hora fija?
  - *Ejemplo:* Evento: "cada vez que llega un mensaje de WhatsApp". Horario: "todos los días a las 20, revisar los pedidos del día y mandar un resumen".
- **"Listar los pasos intermedios y marcar en cuál entra el nodo de IA."** Cada paso, una acción concreta: "leer el mail", "extraer los datos con IA", "guardar en la planilla". Marcar el paso de IA ayuda a ver que casi todo el flujo es lineal y que la IA aparece en un solo lugar, el que necesita interpretar.
  - *Ejemplo:* ```text
    1. Leer el mensaje de WhatsApp
    2. IA: extraer producto, cantidad, fecha y cliente      ← acá entra la IA
    3. Guardar en la planilla "Pedidos"
    4. Confirmarle al cliente por WhatsApp
    ```
- **"Definir el output final: dónde termina el dato y en qué formato."** *Output* quiere decir "salida": el resultado, lo que queda al final. Una planilla, un mensaje de WhatsApp, un mail, una base de datos. Si termina en una planilla, conviene anotar qué columnas tiene: van a coincidir con las llaves del JSON que devuelve la IA.
  - *Ejemplo:* Una fila nueva en la planilla "Pedidos" (columnas producto, cantidad, fecha y cliente), más un mensaje de confirmación al cliente.
- **"Resultado esperado: una lista de pasos, o un diagrama simple, del flujo completo."** Alcanza con una lista numerada o con cajitas y flechas en un papel. Lo que se evalúa es que se entienda el camino del dato de punta a punta, no el dibujo.
  - *Ejemplo:* Una lista de cuatro líneas, como el ✅ de abajo, alcanza.
- En el ejemplo: Gmail Trigger → nodo de IA → Google Sheets. *"Eso es un workflow como el del template que acabamos de ver."* El boceto se puede hacer en papel, en una diapositiva o con flechas en un documento: no hace falta armarlo en n8n todavía. Lo que importa es que se entienda el camino del dato de punta a punta.

**Ejemplo: boceto vago y boceto claro**

❌ Mal:

```text
Llega un mail y la IA lo procesa y lo guarda.
```

No dice qué mail, qué hace la IA ni dónde se guarda.

✅ Bien:

```text
1. Disparador: Gmail Trigger, cada vez que llega un mail a consultas@agencia.com
2. Nodo de IA: extrae nombre, email, destino, fechas y pasajeros → devuelve JSON
3. Google Sheets: agrega una fila en la planilla "Consultas" (una columna por llave del JSON)
4. Si algún dato vino como "no_disponible", la fila se marca "a revisar"
```

#### Filmina 30 · Paso 4: el prompt (1 min)

<p style="color:#1a7f37">Paso 4: el prompt del nodo de IA, con la anatomía de la semana pasada y las llaves del JSON.</p>

Para explicar:
- **"Objetivo: escribir la instrucción que va adentro del nodo de IA."** Es el único paso del flujo que "piensa", y lo que piensa depende de este prompt. El resto del flujo mueve datos; este nodo los entiende. Por eso es la parte donde se usa todo lo que vimos en la Semana 1.
  - *Ejemplo:* En el boceto Gmail → IA → Sheets, este prompt es lo que va en la flecha del medio: recibe el mail y devuelve el JSON con las columnas de la planilla.
- **"Aplicar la anatomía del módulo 1: persona, contexto, tarea y formato."** Es la plantilla que armaron en el desafío de la Semana 1, adaptada al proceso que eligieron. Si el desafío ya era sobre el mismo caso, gran parte del trabajo está hecho.
  - *Ejemplo:* Persona: "Sos el asistente de pedidos de una pastelería". Contexto: "Los pedidos se toman con 48 horas de anticipación". Tarea: "Extraé producto, cantidad, fecha y nombre del cliente". Formato: el JSON con esas llaves.
- **"Declarar las llaves exactas del JSON que el nodo tiene que devolver."** Las llaves tienen que coincidir con lo que espera el paso siguiente del boceto: si el dato termina en una planilla con las columnas nombre, destino y fecha, el JSON tiene que tener esas mismas llaves. Así se conectan el prompt y el boceto.
  - *Ejemplo:* Columnas de la planilla: producto · cantidad · fecha · cliente. Llaves del JSON: `producto`, `cantidad`, `fecha`, `cliente`. Los mismos nombres.
- **"Descartar cualquier versión vaga tipo 'resumime esto': eso no alcanza."** Un prompt así devuelve cada vez algo distinto y ningún nodo lo puede usar. Si el prompt de la pre-entrega no tiene rol, contexto, tarea concreta y formato, no está listo para ir dentro de un flujo.
  - *Ejemplo:* "Resumime este pedido" → "La clienta quiere una torta para el sábado". ¿Qué va en cada columna? No se sabe.
- **"Resultado esperado: el prompt completo del nodo de IA, listo para pegar."** Completo quiere decir que, si se pega tal cual en el nodo, funciona: con rol, contexto, tarea, reglas, formato y el lugar donde va el texto que llega.
  - *Ejemplo:* Si para usarlo hay que "completar algunas cosas", no está listo. El ✅ de abajo se puede pegar directo en n8n.
- En el ejemplo: la plantilla de la Semana 1, tal cual. Es la prueba de que lo que hicieron la semana pasada no era un ejercicio suelto: es la pieza que va adentro del nodo de IA.

**Ejemplo: el prompt del nodo de IA**

❌ Mal:

```text
Resumime este mail.
```

Cada vez devuelve un párrafo distinto y el nodo de Google Sheets no sabe qué poner en cada columna.

✅ Bien: la plantilla de la Semana 1, con las llaves que coinciden con las columnas de la planilla.

```text
Sos un asistente de ventas de una agencia de viajes que carga consultas en una planilla.
Tu tarea es extraer los datos del mail del cliente que está entre ###.
Usá solo la información del mail. Si un dato no aparece, escribí "no_disponible". No inventes.
Devolvé únicamente un JSON con estas llaves, sin ningún texto antes ni después:
{"nombre": "", "email": "", "destino": "", "fecha_salida": "", "fecha_regreso": "", "pasajeros": ""}

###
{{ el texto del mail, que n8n completa solo }}
###
```

#### Filmina 31 · Paso 5: los riesgos (1 min)

<p style="color:#1a7f37">Paso 5: un riesgo, como una alucinación o un dato ambiguo, y cómo lo evitan desde el prompt o desde el flujo.</p>

Para explicar:
- **"Objetivo: anticipar dónde se rompe antes de que se rompa."** Todo flujo falla alguna vez: llega un mensaje raro, falta un dato, la IA interpreta mal. Pensarlo antes permite diseñar la red de contención, en vez de enterarse cuando el cliente se queja.
  - *Ejemplo:* Pregunta para hacerse: "¿qué pasa si llega un mail que solo dice 'hola, info'?". Si la respuesta es "la IA inventa los datos", hay que diseñar qué hacer en ese caso.
- **"Elegir un riesgo del módulo 1: alucinación, límite de contexto o ambigüedad."** Los tres, en criollo. Ambigüedad: el mensaje se puede entender de dos formas (por ejemplo, "el 12" sin decir de qué mes). Alucinación: que la IA complete un dato que no estaba, como un teléfono o un año. Límite de contexto: que el texto a procesar sea tan largo (un hilo de mails entero, un documento) que no entre completo o que la IA pierda partes.
  - *Ejemplo:* Alucinación: inventa la fecha. Límite de contexto: un pedido con un hilo de 50 mensajes no entra entero. Ambigüedad: "la quiero para el viernes", ¿este o el próximo?
- **"Escribir cómo lo mitigás desde el prompt o desde el diseño del flujo."** Mitigar es achicar un riesgo, hacer que pase menos o que haga menos daño. Desde el prompt: prohibir inventar, `no_disponible`. Desde el flujo: si un dato clave falta, la fila se marca "a revisar" para que la vea una persona. Lo mejor es combinar las dos cosas: el prompt reduce el error y el flujo lo atrapa si igual pasa. Mitigar no quiere decir eliminar el riesgo, sino tener un plan para cuando aparezca.
  - *Ejemplo:* Riesgo: "el viernes" es ambiguo. En el prompt: "si la fecha no es exacta, poné no_disponible". En el flujo: si la fecha es no_disponible, se le pregunta al cliente por WhatsApp "¿para qué fecha exacta?".
- **"Juntar las cinco partes en un solo documento."** Proceso, ROI, boceto, prompt y riesgo, en ese orden, en un solo PDF. Ese orden cuenta una historia: qué problema hay, por qué conviene resolverlo, cómo sería el flujo, qué hace la IA adentro y qué puede salir mal.
  - *Ejemplo:* 1. Proceso · 2. ROI · 3. Boceto · 4. Prompt · 5. Riesgos → un PDF de dos o tres páginas.
- **"Resultado esperado: tu pre-entrega terminada."** Con este paso se completan las cinco partes. Antes de entregar, conviene leerlas seguidas para ver si cuentan la misma historia.
  - *Ejemplo:* Control final: ¿el riesgo del paso 5 es de este proceso? ¿Las llaves del prompt coinciden con el boceto? ¿El ROI habla de la misma tarea?

**Ejemplo: riesgo genérico y riesgo concreto**

❌ Mal: *"La IA se puede equivocar, así que hay que tener cuidado."* Es cierto para cualquier flujo y no dice
qué hacer.

✅ Bien: *"Riesgo: ambigüedad. Si el cliente escribe 'salgo el 12', la IA no sabe de qué mes y puede
inventarlo. Mitigación en el prompt: solo usar fechas que estén completas en el mail, si no, no_disponible.
Mitigación en el flujo: si fecha_salida es no_disponible, la fila se marca 'a revisar' y el vendedor le
pregunta al cliente."*

---

### 110–116 · Sección 05 · Pre-entrega

**Filmina 32 · Separador "05"** — pasarla.

<p style="color:#1a7f37">Esto que acabamos de ver es la pre-entrega.</p>

#### Filmina 33 · ¿De qué se trata? Diseñar, todavía no construir (1 min)

<p style="color:#1a7f37">La pre-entrega es diseñar, no construir: una automatización con un paso de IA, por qué vale la pena y el prompt que la hace funcionar.</p>

Para explicar: **"El objetivo: diseñar una automatización simple que use un paso de IA. No hace falta que
funcione todavía. Lo que sí hace falta: justificar por qué vale la pena y cómo sería el prompt."** Las cinco
partes (proceso, ROI, boceto, prompt y reflexión) **son exactamente los cinco pasos que acabamos de ver**.
Que no se asusten si todavía no saben armarlo en n8n: es a propósito. Primero se aprende a pensar la
automatización y después a construirla. En las próximas semanas van a ir sumando las piezas (nodos que deciden caminos,
conexiones con otras aplicaciones por su API, credenciales) para que este diseño se convierta en un flujo que corre de verdad.

*Ejemplo:* No hace falta tener Gmail conectado ni la planilla creada. Alcanza con escribir "Gmail Trigger → IA → Sheets" y el prompt completo.

#### Filmina 34 · Tu misión (1 min)

<p style="color:#1a7f37">Les lleva entre 60 y 90 minutos. Un documento corto: no importa el diseño, importa que el proceso, el ROI y el prompt cuenten la misma historia.</p>

Para explicar: **"Duración estimada: entre 60 y 90 minutos. Un documento corto con las cinco partes. No se
evalúa la prolijidad del diseño. Sí la coherencia entre el proceso que elegiste, el ROI que argumentás y el
prompt que proponés."** Coherencia quiere decir que cuenten la misma historia: si el proceso es "clasificar
reseñas", el prompt tiene que clasificar reseñas y el ROI tiene que hablar de cuántas reseñas llegan. El
error más común es elegir un proceso, calcular el ROI de otro y escribir un prompt genérico. Un buen
control antes de entregar: leer las cinco partes seguidas y ver si alguien de afuera entendería qué se
automatiza, por qué y cómo.

*Ejemplo:* Incoherente: el proceso es "pedidos de WhatsApp", el ROI se calculó con "mails de consulta" y el prompt "resume reseñas". Cada parte está bien sola, pero no son la misma automatización.

#### Filmina 35 · Los pasos (1 min) — las cinco partes de la entrega, en orden.

<p style="color:#1a7f37">Son cinco partes: proceso, ROI, boceto, prompt y riesgos. Los mismos cinco pasos de recién.</p>

Para explicar:
- **"Elegí un proceso manual y repetitivo de tu trabajo, estudio o vida diaria."** Es el paso 1. Tiene que ser propio, porque lo van a seguir construyendo en las próximas semanas. Responde la pregunta: ¿qué tarea se automatiza?
  - *Ejemplo:* "Cargar en la planilla los pedidos que llegan por WhatsApp a la pastelería."
- **"Justificá el ROI en dos o tres líneas: tiempo, frecuencia y escalabilidad."** Es el paso 2. Escalabilidad es lo mismo que "escalar": que siga funcionando cuando el volumen crece. Tres datos: cuánto tarda cada vez, cada cuánto pasa y qué pasaría si se multiplicara por diez. Responde: ¿por qué vale la pena? Y una razón para no hacerlo.
  - *Ejemplo:* "3 minutos × 30 pedidos por día ≈ 30 horas por mes. Con diez veces más pedidos haría falta otra persona. Por qué no: los pedidos con indicaciones raras los tiene que ver alguien."
- **"Bocetá el flujo: qué lo dispara, pasos intermedios, dónde entra la IA y cuál es el output final."** Es el paso 3, y el que más pesa en la nota. Responde: ¿cómo sería el flujo? Una lista numerada alcanza.
  - *Ejemplo:* "1. Llega un WhatsApp → 2. IA: extrae producto, cantidad, fecha y cliente → 3. Fila nueva en Sheets → 4. Confirmación al cliente."
- **"Escribí el prompt del nodo de IA con contexto claro, instrucción específica y formato de salida."** Es el paso 4: la plantilla de la Semana 1 adaptada al caso. Responde: ¿qué hace la IA adentro?
  - *Ejemplo:* Rol de asistente de pedidos, reglas (no inventar, no_disponible), tarea de extraer y un JSON con producto, cantidad, fecha y cliente.
- **"Reflexioná en tres o cuatro líneas sobre qué podría salir mal y cómo lo mitigarías."** Es el paso 5. Un riesgo concreto de su caso y qué harían: desde el prompt, desde el flujo o desde los dos. Responde: ¿qué puede salir mal y cómo se evita?
  - *Ejemplo:* "Si el cliente dice 'para el viernes', no se sabe cuál. El prompt pone no_disponible si la fecha no es exacta, y el flujo le pregunta al cliente."

Si cada parte responde su pregunta, la entrega está completa.

#### Filmina 36 · ¿Cómo se evalúa? (2 min)

<p style="color:#1a7f37">Se evalúa la coherencia, el ROI con tiempo y frecuencia, un boceto claro, un prompt completo y un riesgo bien pensado. El boceto es lo que más pesa.</p>

Para explicar cada criterio:
- **Coherencia:** proceso, ROI y prompt cuentan la misma historia. Todas las partes hablan del mismo proceso, con los mismos datos. Si el boceto dice que el dato termina en una planilla, el prompt devuelve las llaves de esa planilla.
  - *Ejemplo:* Coherente: proceso "pedidos de WhatsApp", ROI con "pedidos por día" y un prompt que extrae "producto y cantidad". Incoherente: el mismo proceso con un prompt que extrae "nombre y destino" de un viaje.
- **Justificación del ROI:** tiempo, frecuencia y escalabilidad, y una razón para no automatizarlo. Con números estimados, aunque sean aproximados: "5 minutos × 40 veces por semana" vale más que "ahorra mucho tiempo".
  - *Ejemplo:* Bien: "3 minutos × 30 por día ≈ 30 horas por mes; con diez veces más volumen haría falta otra persona; por qué no: los pedidos con cambios raros". Mal: "ahorra tiempo".
- **El boceto:** se entiende qué dispara el flujo, dónde entra la IA y dónde termina el dato. Es lo que más pesa porque es lo más cercano a lo que van a construir en n8n. Un boceto claro se puede pasar a nodos casi directo.
  - *Ejemplo:* Bien: "WhatsApp Trigger → IA (JSON) → Google Sheets → confirmación". Mal: "el mensaje entra y se procesa".
- **El prompt:** contexto claro, instrucción específica y formato de salida. Las cuatro partes de la Semana 1 y las llaves del JSON declaradas. Si tiene ejemplos y regla para datos ausentes, mejor.
  - *Ejemplo:* Bien: con rol, reglas, tarea y un JSON con sus llaves. Mal: "Analizá este mensaje y decime los datos".
- **La reflexión:** un riesgo real de cómo procesa texto un LLM y su mitigación. Un riesgo concreto de su caso, no uno genérico. "La IA puede equivocarse" no alcanza; "si el cliente no dice el mes, la IA puede inventarlo, por eso pedimos no_disponible y marcamos la fila" sí.
  - *Ejemplo:* Bien: "la IA puede inventar el año de la fecha; lo evito con no_disponible y marcando la fila". Mal: "la IA a veces falla".

Mostrá también los pesos de la rúbrica del programa (la rúbrica es la grilla de corrección: qué se mira y cuántos puntos vale cada parte) (en `ejercicios-alumnos.md`): **el boceto del flujo vale
40 %** y el prompt 30 %.

#### Filmina 37 · ¿Cómo sigue? Del boceto al flujo que corre (2 min)

<p style="color:#1a7f37">La semana que viene vemos los nodos que deciden caminos y juntan datos. Lo que hoy escribieron como lista se va a convertir en nodos reales.</p>

Para explicar:
- **"Lo que ya tenés: una automatización diseñada, con su justificación y el prompt del nodo de IA escrito."** En dos semanas pasaron de usar la IA en un chat a diseñar un proceso automático completo con un paso de IA adentro. Lo que falta es construirlo, y para eso son las próximas semanas.
  - *Ejemplo:* En dos semanas: de pegar un mail en ChatGPT a tener el plano de "WhatsApp → IA → planilla", con su ROI y su prompt.
- **"Módulo 3: conceptos básicos. La anatomía de un workflow y los nodos principales: IF, Switch, Merge, Wait."** IF y Switch eligen un camino según una condición; Merge junta datos que vienen de dos caminos; Wait pausa el flujo un tiempo. Por ejemplo, con IF: si el JSON trae algún `no_disponible`, la fila va a revisión; si no, se guarda directo. Es el control de riesgos del paso 5, convertido en un nodo.
  - *Ejemplo:* IF: si `pasajeros` es mayor que 10, avisar al área de grupos. Switch: según el `tipo` (consulta, reclamo u otro), tres caminos distintos. Merge: juntar los datos del cliente que están en la planilla con su pedido nuevo. Wait: esperar 24 horas y mandar un recordatorio.
- **"La conexión: los pasos intermedios que hoy escribiste en una lista se van a convertir en nodos reales."** Cada flecha del boceto va a ser una conexión en el lienzo, y cada paso, un nodo. Conviene que tengan el boceto a mano la semana que viene.
  - *Ejemplo:* En el boceto: "4. Si algún dato es no_disponible, marcar la fila a revisar". En el Módulo 3: un nodo IF con la condición "algún campo es igual a no_disponible".
- **"Para llevar: el boceto de hoy es el plano. El módulo 3 te entrega las piezas."** Como en una obra: primero el plano, después los ladrillos. Cuanto más claro el plano, más fácil la construcción.
  - *Ejemplo:* Plano: "WhatsApp → IA → IF → Sheets o aviso". Piezas: los nodos WhatsApp Trigger, Basic LLM Chain, IF y Google Sheets.

---

### 116–120 · Preguntas y cierre

**Filmina 38 · ¿Preguntas?** (3 min) — las tres de la filmina: el mapeo de datos entre un nodo y el siguiente,
si su proceso pasa el filtro de alta frecuencia y bajo juicio humano, y algún error rojo que no sepan leer.

<p style="color:#1a7f37">¿Dudas con n8n, con el ROI o con algún error rojo? Micrófono o chat.</p>

**Filmina 39 · ¡Gracias!** (1 min)

<p style="color:#1a7f37">Gracias. Para la semana que viene: la pre-entrega, los ejercicios para casa y el material de lectura.</p>

- **Para la Semana 3:**
  1. La **pre-entrega** (un solo PDF).
  2. Los **ejercicios para casa** (5 a 8).
  3. Leer `Semana 2.docx` y hacer el cuestionario del módulo en la plataforma.

---

### Checklist de salida

- [ ] Saben qué es n8n, para qué sirve y qué es una instancia.
- [ ] Recorrieron la interfaz: lienzo, nodos, salida en JSON y Executions.
- [ ] Vieron el flujo de la agencia (03) funcionando, leído nodo por nodo, y la biblioteca de templates.
- [ ] Armaron (o vieron armar) un flujo mínimo, lo rompieron y leyeron el error.
- [ ] Tienen la consigna de la pre-entrega y un ejemplo resuelto.

---

### Glosario de la clase

Todas las palabras técnicas de hoy, en criollo. Sirve para responder un "¿qué era eso?" sin perder el hilo, y se
puede pegar en el chat al final de la clase.

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **n8n** | Se pronuncia "ene-ocho-ene". Un programa que conecta aplicaciones para que hagan tareas solas. Viene de *nodemation*: n + 8 letras + n. | "Cada mail que llega, copialo en la planilla." |
| **Automatización** | Una tarea que la computadora hace sola, siempre igual, sin que nadie la toque. | La factura se genera sola cuando entra una compra. |
| **Lineal** | Automatización con reglas fijas: "si pasa A, hacé B". No usa IA. | Formulario → fila en la planilla. |
| **Cognitiva** | Automatización con un paso donde la IA lee y entiende. | La IA lee el mail y decide si es reclamo o consulta. |
| **Orquestar** | Hacer que varias aplicaciones trabajen coordinadas. | Entra el pago → se anota → se avisa al cliente. |
| **ROI** | *Return on Investment*, retorno de la inversión: cuánto te vuelve por lo que ponés. | Pongo 10 horas, me ahorra 40: conviene. |
| **Frecuencia** | Cada cuánto pasa una tarea. | 30 pedidos por día: frecuencia alta. |
| **Costo de oportunidad** | Lo que dejás de hacer mientras hacés la tarea a mano. | La hora de anotar pedidos son dos tortas que no se hicieron. |
| **Break-even** | Punto de equilibrio: cuando lo ahorrado alcanza lo invertido. | "En cinco semanas se paga sola." |
| **Escalar** | Seguir funcionando igual de bien cuando el volumen crece mucho. | El flujo procesa 300 pedidos igual que 30. |
| **Juicio humano** | Cuando hace falta que una persona piense y decida. | Negociar un precio con un proveedor. |
| **Servidor** | Una computadora prendida todo el tiempo y conectada a internet. | Donde viven las páginas web y n8n Cloud. |
| **La nube** | Computadoras de otra empresa que usás por internet. | Tus fotos en Google Fotos. |
| **Hosting** | El alquiler de una computadora en internet donde corre un programa. | Pagar un servidor para tener n8n prendido. |
| **SaaS** | Un programa que se usa desde el navegador, sin instalar nada. | Gmail, n8n Cloud. |
| **Self-hosted** | "Alojado por vos": el programa corre en una computadora tuya. | n8n con Docker en tu notebook. |
| **Instancia** | Tu n8n, el tuyo, funcionando en algún lado. | `tunombre.app.n8n.cloud` o `localhost:5678`. |
| **Docker** | Una herramienta que baja un programa listo para usar, en una "caja" con todo lo que necesita. | La imagen oficial de n8n. |
| **WSL** | "Subsistema de Windows para Linux": una pieza de Windows que deja correr Linux adentro, y que Docker necesita. | `wsl --install --no-distribution` |
| **Imagen / contenedor / volumen** | La caja cerrada que se descarga / esa caja abierta y funcionando / la carpeta donde quedan tus datos. | `docker.n8n.io/n8nio/n8n` / el n8n prendido / `n8n_data` |
| **Terminal / comando** | Una ventana donde se le escriben órdenes a la computadora; cada orden es un comando. | `docker volume create n8n_data` |
| **Localhost** | "Esta misma computadora". | `http://localhost:5678` |
| **Puerto** | El "número de departamento" donde atiende cada programa en la computadora. | n8n atiende en el 5678. |
| **Código / programar** | Las instrucciones escritas de un programa / escribirlas. | El nodo Code. |
| **No-code / low-code** | Sin código (todo con clics) / poco código (casi todo con clics, a veces una línea). | Zapier es no-code; n8n es low-code. |
| **Open source** | Código abierto: las instrucciones del programa son públicas. | Cualquiera puede instalar n8n gratis. |
| **Integración** | Un bloque listo para hablar con una aplicación en particular. | La integración de Gmail. |
| **Workflow / flujo** | Una automatización completa, de punta a punta. | "Consultas por mail a planilla." |
| **Nodo** | Cada bloque del flujo. Hace una sola cosa. | El nodo de Google Sheets. |
| **Lienzo** | La pantalla tipo pizarrón donde se ponen los nodos. | Donde se arrastran y se unen con flechas. |
| **Trigger** | Disparador: el primer nodo, el que hace arrancar el flujo. | "Cuando llega un mail." |
| **Acción** | Un nodo que hace algo en una aplicación. | "Mandá un mail", "agregá una fila". |
| **Parámetros** | Los campos que se le completan a un nodo para decirle qué hacer. | Qué planilla, qué hoja, qué columnas. |
| **Webhook** | Un aviso automático que una aplicación le manda a otra cuando pasa algo. | La tienda avisa "entró un pedido". |
| **JSON** | La ficha con casilleros con la que los nodos se pasan los datos. | `{"nombre": "Martín", "destino": "Bariloche"}` |
| **Item** | Cada dato suelto que pasa por el flujo. | Cinco mails son cinco items. |
| **Expresión / mapear** | Las llaves dobles `{{ }}` que traen un dato de otro nodo / decirle al nodo de qué casillero sacar cada cosa. | `Hola {{ $json.nombre }}` |
| **String** | En programación, "texto". | `Martín Gómez` es un String. |
| **Number** | En programación, "número". | `2` es un Number; `"dos"` es un String. |
| **Ejecutar / ejecución** | Hacer correr el flujo / cada vez que corrió. | La pestaña *Executions*. |
| **Credencial** | El permiso que le das a n8n para entrar a una cuenta tuya. | Tu Gmail conectado a n8n. |
| **API / clave de API** | La puerta por la que un programa le habla a otro / la contraseña de esa puerta. | n8n le habla a ChatGPT por su API. |
| **LLM** | Modelo de lenguaje grande: el tipo de IA de ChatGPT, Claude o Gemini. | El modelo dentro del nodo de IA. |
| **Token** | Un pedacito de palabra; la unidad con la que la IA lee y cobra. | Una palabra larga puede ser dos o tres tokens. |
| **Alucinar** | Cuando la IA inventa un dato con total seguridad. | Inventa el año de una fecha. |
| **Template** | Plantilla: un flujo armado por otro que se puede copiar. | "Resumir mails y mandarlos a Telegram." |
| **Importar / exportar** | Traer un flujo a tu n8n / sacarlo como archivo. | `consultas.json` |
| **Lead** | Un posible cliente que dejó sus datos. | Alguien que completó el formulario de consulta. |
| **Output** | Salida: el resultado final. | La fila nueva en la planilla. |
| **Boceto** | Un borrador del flujo, en lista o con flechas, antes de armarlo. | Gmail → IA → Sheets. |
| **Mitigar** | Achicar un riesgo. | Pedir no_disponible para que la IA no invente. |
| **Rúbrica** | La grilla de corrección. | El boceto vale 40 %. |
