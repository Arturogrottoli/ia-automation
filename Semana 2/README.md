# Semana 2 — Módulo 2: Introducción a las automatizaciones y n8n

Fuente: `program-summary.pdf` (Módulo 2). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_2_AI_Automation.pptx` | Las filminas del módulo (39). |
| `Semana 2.docx` | El material de lectura del módulo, con el cuestionario de 6 preguntas. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase, para casa y la consigna completa de la pre-entrega con su rúbrica. Se comparte con los alumnos. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, el paso a paso de las demos de n8n en vivo y la pre-entrega resuelta con el caso de la agencia de viajes. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿Lineal o cognitiva? | 2 min |
| En clase | 2 · Calculá el ROI (con break-even) | 3 min |
| En clase | 3 · Desafío de priorización | 3 min |
| En clase | 4 · Tu primer flujo en n8n (y romperlo) | 8 min |
| Casa | 5 · ¿Trigger o acción? | 5 min |
| Casa | 6 · Explorá un template | 15 min |
| Casa | 7 · Tu proceso en JSON | 10 min |
| Casa | 8 · Si no llegaste en clase: tu instancia y tu primer flujo | 20 min |
| Casa | Pre-entrega (con el ejemplo resuelto como guía) | 60–90 min |

## Evaluación

- **Pre-entrega: De la idea al prompt.** Proceso, ROI, boceto del flujo en n8n, prompt del nodo de IA y reflexión sobre riesgos. Un único PDF. 100 pts, se aprueba con 70.

## A tener en cuenta

- **El número de la pre-entrega no coincide:** las filminas (3, 31 y 32) dicen "Pre-entrega 2"; el `program-summary.pdf` la llama "Preentrega 1: De la idea al prompt". Conviene unificarlo antes de la clase.
- **La filmina 26 tiene dos actividades:** el desafío de priorización (adelantado a la sección de ROI) y un flujo mínimo en n8n que se rompe a propósito. El bloque de n8n en vivo la amplía con un recorrido por la interfaz y un template real.
- **Los alumnos necesitan su instancia de n8n** creada antes de la clase (fue tarea de la Semana 1). Conviene recordarlo el día anterior.
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
| 35–50 | **03 · n8n: qué es y para qué sirve** (ejemplos, instancia, JSON, tipos de nodos, el nodo de IA, workflow, templates) | 17–23 | |
| 50–60 | Break | 24 | |
| 60–100 | **04 · n8n en vivo: cómo se usa** | 25–26 | Ej. 4 (8 min) |
| 100–108 | Los 5 pasos de la pre-entrega, con el ejemplo resuelto | 27–31 | |
| 108–115 | **05 · Pre-entrega** y cómo sigue | 32–37 | |
| 115–120 | Preguntas y cierre | 38–39 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden: la tabla de n8n frente a Zapier y Make y el workflow exportado (se mencionan, no se muestran), el Ejercicio 3 (priorización), la parte del template en
vivo (se muestra solo la biblioteca), el Ejercicio 4 en clase (los alumnos arman el flujo mínimo en casa, con el Ejercicio 8)
y los pasos 3 a 5 de la pre-entrega (se lee la consigna y listo).

---

### Preparación (antes de la clase)

- [ ] **Tu instancia de n8n abierta** (Cloud o local) y ya logueada. Probá antes todo lo de la sección 04.
- [ ] **Un template elegido** en n8n.io/workflows para importar en vivo: uno chico (4 a 6 nodos) que use IA. Importalo una vez antes, para saber qué credenciales pide.
- [ ] **Una cuenta de Gmail de prueba** (no la personal) para crear la credencial en vivo, y una clave de API de un modelo de IA cargada como credencial, para mostrar el nodo de IA.
- [ ] `ejercicios-alumnos.md` listo para compartir: tiene el paso a paso del flujo mínimo que replican los alumnos.
- [ ] **El día anterior**, recordarles que traigan su instancia de n8n creada (fue tarea de la Semana 1). Quien no la tenga, sigue la demo en pantalla y la crea en casa.
- [ ] **Definí el número de la pre-entrega:** las filminas dicen "Pre-entrega 2", el programa dice "Preentrega 1: De la idea al prompt".
- [ ] Avisar que la clase queda grabada.

---

### 0–10 · Apertura y repaso de la Semana 1

**Filmina 1 · Portada** (1 min) — Módulo 2.

<p style="color:#1a7f37">Bienvenidos al Módulo 2. Hoy conocemos n8n, la herramienta con la que vamos a automatizar durante todo el curso.</p>

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy van a aprender qué es una automatización, cómo saber si vale la pena, y sobre todo qué es n8n, para qué sirve y cómo se usa.</p>

Para explicar cada objetivo:
- **Distinguir una automatización lineal de una cognitiva y explicar qué es orquestar sistemas.** Es la base para saber cuándo hace falta IA en un flujo y cuándo no. Poner IA donde no hace falta encarece el flujo y lo vuelve menos predecible; no ponerla donde hace falta deja a una persona leyendo mensajes a mano. Saber distinguir los dos tipos es lo que permite diseñar bien desde el principio.
  - *Ejemplo:* Lineal: cada inscripción del formulario se copia en una planilla. Cognitiva: cada mail se lee, se entiende si es reclamo o consulta, y se deriva. Orquestar: que el pago en Mercado Pago, la planilla y el WhatsApp al cliente se actualicen juntos.
- **Evaluar si un proceso vale la pena automatizar usando ROI, frecuencia y costo de oportunidad.** No todo lo que se puede automatizar conviene automatizarlo: armar y mantener un flujo cuesta. Hoy vamos a aprender a hacer esa cuenta antes de abrir n8n, con tres preguntas simples. Es lo que separa a quien automatiza "porque se puede" de quien automatiza lo que le cambia el día a un negocio.
  - *Ejemplo:* Automatizar el pedido semanal a un proveedor (una vez por semana, 10 minutos) probablemente no conviene. Automatizar la carga de 50 pedidos diarios, sí.
- **Reconocer las piezas de n8n: instancia, workflow, nodos y el JSON que viaja entre ellos.** El vocabulario que vamos a usar el resto del curso. Son cuatro palabras que van a aparecer en todas las clases que siguen: dónde corre n8n, cómo se arma un flujo, qué hace cada bloque y en qué formato se pasan los datos. Si hoy quedan claras, el resto del curso se entiende mucho mejor.
  - *Ejemplo:* Instancia: tu n8n en n8n Cloud. Workflow: "Consultas mail → planilla". Nodos: Gmail Trigger, nodo de IA y Google Sheets. JSON: `{"nombre": "Martín", "destino": "Bariloche"}`, viajando del nodo de IA a Sheets.
- **Traducir un proceso manual a un boceto de flujo con un paso de IA.** Es la pre-entrega de esta semana. Antes de construir, se diseña: qué dispara el flujo, qué pasos tiene, dónde entra la IA y dónde termina el dato. Un buen boceto ahorra horas de prueba y error en n8n.
  - *Ejemplo:* Proceso manual: "leo cada reseña de Google y la anoto como positiva o negativa". Boceto: "llega una reseña nueva → la IA la clasifica → se agrega a la planilla → si es negativa, aviso por mail".
- **Importar y adaptar un template en lugar de construir desde cero.** En la práctica real, casi nadie arranca de una hoja en blanco. Hay miles de flujos armados por la comunidad para casos muy comunes. Saber encontrarlos, leerlos y adaptarlos es una habilidad tan importante como saber armar uno desde cero.
  - *Ejemplo:* En vez de armar de cero "resumir mails con IA y mandarlos a Slack", se busca ese template, se importa y se cambian la cuenta de Gmail y el canal de Slack. Diez minutos en lugar de dos horas.

**Filmina 3 · Agenda** (1 min) — teoría hasta el break; después, n8n con las manos.

<p style="color:#1a7f37">Primero teoría: automatizaciones, ROI y qué es n8n. Después del break, n8n en vivo y la pre-entrega.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 1** (3 min, sin filmina) — antes de pasar a la filmina 5.

<p style="color:#1a7f37">Antes de arrancar, repasemos rápido lo que vimos la semana pasada, porque hoy lo vamos a usar.</p>

<p style="color:#1a7f37">Primero: la IA no piensa, predice. Un LLM, como ChatGPT o Claude, fue entrenado con muchísimo texto y lo único que hace es calcular cuál es el pedacito de texto más probable que sigue. Por eso suena seguro aunque esté equivocado.</p>

<p style="color:#1a7f37">Segundo: el modelo lee en tokens, que son pedacitos de palabras. Se paga por token y tiene una ventana de contexto, un límite de cuánto texto puede tener en mente a la vez. Lo que queda afuera, no lo ve.</p>

<p style="color:#1a7f37">Tercero: cuando le falta información, el modelo alucina, inventa con total seguridad. En una automatización eso es grave, porque nadie revisa y el dato falso llega a destino.</p>

<p style="color:#1a7f37">Cuarto: para evitarlo, prompt engineering. Un buen prompt tiene cuatro partes: quién es la IA, el contexto, la tarea y el formato de salida. Separamos el texto a procesar con delimitadores como ###, le damos ejemplos con few-shot, le pedimos que revise paso a paso y que si falta un dato ponga "no_disponible".</p>

<p style="color:#1a7f37">Y quinto: lo armamos en cinco pasos hasta llegar a la plantilla maestra, un prompt que toma un mail desordenado y devuelve un JSON limpio, con llaves fijas y sin texto alrededor. Ese JSON es justamente el idioma de n8n, la herramienta que vemos hoy.</p>

Para explicar:
- **La IA predice, no piensa.** Si alguien pregunta "¿entonces no sirve?": sirve muchísimo, pero hay que darle buen contexto y no confiar a ciegas en lo que devuelve. Es como un empleado nuevo muy rápido y muy capaz: hace un trabajo excelente si le explicás bien, y conviene revisar lo que entrega, sobre todo al principio.
  - *Ejemplo:* "¿Cuál es el horario del local?", sin decírselo: responde "de 9 a 18", lo más común. Con el horario en el prompt, acierta.
- **Tokens y ventana de contexto.** Lo vamos a sentir en n8n: cada llamada al nodo de IA consume tokens, y mandarle textos enormes es más caro y más lento. Y cada llamada empieza de cero: el modelo no se acuerda de la corrida anterior del flujo. Todo lo que necesite saber tiene que ir en esa llamada.
  - *Ejemplo:* Un flujo que le manda a la IA cada mail con todo el hilo anterior (unos 3.000 tokens) gasta diez veces más que uno que manda solo el último mensaje (unos 300).
- **Alucinaciones.** La defensa está en el prompt ("usá solo lo que dice el texto", "no_disponible") y, desde hoy, también en el flujo: validar el JSON antes de guardarlo. Con n8n podemos agregar controles alrededor de la IA: por ejemplo, si un dato viene como `no_disponible`, mandar la fila a revisión en vez de guardarla como si estuviera completa.
  - *Ejemplo:* Un mail sin teléfono → la IA devuelve `"telefono": "no_disponible"` → el flujo ve ese valor y marca la fila "a revisar" en lugar de guardarla como completa.
- **Las cuatro partes del prompt y las técnicas.** Rol, contexto, tarea y formato; zero-shot, few-shot y chain of thought. Si alguien no se acuerda, que mire su desafío del Módulo 1. Hoy no vamos a escribir prompts nuevos desde cero: vamos a usar el que ya tienen y ver dónde se ubica dentro de un flujo.
  - *Ejemplo:* Zero-shot: "Clasificá este mail". Few-shot: el mismo pedido con dos mails de ejemplo ya clasificados. Chain of thought: "antes de clasificar, decí qué pide el cliente y cuántos días pasaron desde la compra".
- **La plantilla maestra en JSON.** Es la pieza que hoy pasa de "copiar y pegar a mano" a "un nodo dentro de un flujo que corre solo". Ese es el puente con la filmina 5. El JSON que la semana pasada validaban en el formatter es exactamente lo que un nodo de n8n le pasa al siguiente.
  - *Ejemplo:* La semana pasada: copiar el mail, pegarlo en el chat con la plantilla, copiar el JSON, pegarlo en la planilla. Hoy: el mismo prompt va dentro de un nodo y los tres "copiar y pegar" desaparecen.

**Filmina 5 · ¿Dónde quedamos? Del prompt suelto al flujo que corre solo** (3 min)

<p style="color:#1a7f37">La semana pasada armaron un prompt que devuelve JSON. El problema es que lo siguen pegando a mano. Hoy conocemos la herramienta que hace eso sola.</p>

Para explicar:
- **"En el módulo 1: armaste una plantilla de prompt que toma un texto desordenado y devuelve JSON válido."** Recordá el ejemplo de la agencia de viajes: un mail desordenado entra, un JSON con nombre, destino y fechas sale. Ese prompt ya hace la parte "inteligente" del trabajo: leer, entender y ordenar. Lo que falta es todo lo que pasa alrededor.
  - *Ejemplo:* Entrada: "hola, somos 4, queremos ir a bariloche del 15 al 22 de julio, Martín". Salida: `{"nombre": "Martín", "destino": "Bariloche", "pasajeros": 4, ...}`.
- **"El problema que quedó: vos seguís copiando y pegando el texto a mano cada vez."** Con diez mails por día, eso no escala: la IA hace su parte, pero una persona sigue siendo el "cable" que lleva el dato de un lado al otro. Abrir el mail, copiar, pegar en el chat, copiar el JSON, pegarlo en la planilla: cinco pasos manuales por cada mensaje. Si un día llegan cien, alguien pasa la tarde haciendo eso, y además puede equivocarse al copiar.
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
- **"Cómo rompe esa linealidad: un servidor procesando 100 webhooks por minuto cuesta y tarda lo mismo que procesando 10.000."** Un **webhook** es un aviso automático que una aplicación le manda a otra cuando pasa algo: "entró un pedido", "llegó un pago". Para una computadora, procesar uno o mil de esos avisos es prácticamente lo mismo. El costo crece muchísimo menos que el volumen. Es como la diferencia entre escribir cada invitación a mano y mandar un mail a una lista: escribir el mail lleva el mismo tiempo para diez personas que para mil.
  - *Ejemplo:* Black Friday: la tienda pasa de 50 a 2.000 pedidos en un día. El flujo que carga cada pedido en la planilla tarda lo mismo por pedido y no se cansa; a mano sería imposible.
- **"El resultado: el trabajo operativo se vuelve un costo fijo. Escalás las ventas sin colapsar la logística."** Matiz para el grupo: no es fijo del todo (si cada paso usa una IA paga, cada llamada cuesta centavos), pero crece mucho más despacio que contratar gente. Y libera a las personas para lo que una máquina no hace bien: atender un caso delicado, negociar, pensar cómo mejorar el negocio.
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
- **"Lineales: cada paso se ejecuta en un orden fijo y predecible. 'Si pasa A, hacé B y después C', sin ambigüedad ni interpretación."** Ejemplo: cada vez que alguien completa un formulario, se agrega una fila a la planilla y se le manda un mail de confirmación. Son **deterministas**: con la misma entrada, siempre hacen lo mismo. Son baratas y confiables, pero no pueden "leer" un texto libre. Funcionan perfecto cuando los datos ya llegan ordenados (un formulario con campos fijos, una venta con monto y producto). Cuando el dato llega como texto libre, escrito por una persona, se traban.
  - *Ejemplo:* Regla de Gmail: "si el remitente es facturas@proveedor.com, mover a la carpeta Facturas". Siempre hace lo mismo y nunca se equivoca; pero si el proveedor cambia de dirección, deja de funcionar.
- **"Cognitivas: en uno o varios pasos se delega la interpretación, el razonamiento o la generación a un modelo de IA."** Ejemplo: llega un mail, la IA decide si es una consulta, un reclamo o spam, y según eso el flujo hace cosas distintas. El prompt que armaron en la Semana 1 es exactamente ese paso. Tres cosas que puede hacer la IA en un flujo: interpretar (entender qué quiere el cliente), razonar (decidir qué categoría corresponde) y generar (escribir una respuesta o un resumen).
  - *Ejemplo:* Mail: "el pedido llegó pero la torta estaba aplastada". La IA devuelve `{"tipo": "reclamo", "motivo": "producto dañado"}` y el flujo le avisa a la dueña.
- **"La diferencia clave: el sistema deja de seguir solo instrucciones deterministas. En algún punto entiende el contenido y decide con cierto criterio."** Eso le da flexibilidad, pero trae lo que vimos la semana pasada: la IA puede equivocarse o inventar. Por eso los flujos cognitivos casi siempre son pasos lineales alrededor de un paso de IA bien controlado. La regla práctica: usar reglas fijas para todo lo que se pueda resolver con reglas, y dejar la IA solo para el paso que de verdad necesita interpretar. Así el flujo es más barato, más rápido y más fácil de controlar.
  - *Ejemplo:* Un paso lineal controla a la IA: si devolvió una de las categorías permitidas (consulta, reclamo, otro), sigue; si devolvió cualquier otra cosa, el mail va a revisión manual.
- **"Hacia dónde vamos: el proyecto final del curso es un agente autónomo. Cognitivo de punta a punta."** Un asistente de WhatsApp que entiende, decide y responde. La diferencia con un flujo cognitivo común es que el agente no sigue un camino fijo con un paso de IA: la IA decide qué hacer en cada momento (consultar un dato, responder, pedir más información). Lo vamos a construir de a poco, a partir de las piezas que vemos hoy.
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

<p style="color:#1a7f37">El ROI mide cuánto vuelve por lo que invertimos: beneficio neto sobre costo, por cien. El costo es armarlo y mantenerlo; el beneficio, las horas ahorradas, más ventas y menos errores.</p>

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
- **"Costo de inversión: horas de desarrollo del flujo, licencias de software, hosting, mantenimiento."** Lo que más se olvida es el mantenimiento: las aplicaciones cambian, las credenciales vencen, los prompts hay que ajustarlos. Un flujo no se arma y se olvida. También entran en el costo las llamadas a la IA (que se pagan por token) y el tiempo de probar el flujo antes de dejarlo andando solo.
  - *Ejemplo:* Armado: 10 horas. n8n: el plan mensual (o el servidor, si es self-hosted). IA: unos centavos por mail. Mantenimiento: una hora por mes, cuando Google cambia algo o hay que ajustar el prompt.
- **"Beneficio neto: ahorro de horas manuales, más ventas por responder rápido, menos costos por errores evitados."** Un cliente que recibe respuesta en un minuto en vez de en un día compra más; un pedido cargado sin errores de tipeo no se envía a la dirección equivocada. El ahorro de horas es el más fácil de medir; los otros dos son más difíciles de calcular, pero muchas veces son los que más pesan.
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

#### Filmina 13 · Umbrales: cuándo es rentable (2 min)

<p style="color:#1a7f37">Tres ideas: el break-even es cuando el ahorro alcanza lo que costó; conviene automatizar lo frecuente y que no requiere criterio humano; y siempre preguntarse qué haría esa persona con el tiempo libre.</p>

Para explicar:
- **"Break-even: el punto de equilibrio. El momento exacto en que el ahorro acumulado iguala el costo de implementación."** Antes de ese punto, la automatización todavía "debe" plata; después, todo es ganancia. En el ejercicio, cae a principios del segundo mes. Es un número muy útil para convencer a alguien (un jefe, un cliente, el dueño del negocio): "en cinco semanas se paga sola" se entiende mejor que cualquier porcentaje.
  - *Ejemplo:* Costo: 20 horas. Ahorro: 10 horas por mes. Break-even a los 2 meses; desde el tercero, cada mes son 10 horas de ganancia.
- **"Regla 80/20: el 80 % de los resultados sale del 20 % de los flujos. Automatizá alta frecuencia y bajo juicio humano."** Unos pocos flujos bien elegidos dan casi todo el beneficio. Alta frecuencia: pasa muchas veces (cada día, cada hora). Bajo juicio humano: no necesita que una persona decida algo delicado. Copiar pedidos a una planilla cumple las dos; negociar con un proveedor, ninguna. La regla sirve para no dispersarse: antes de automatizar diez cosas chicas, conviene encontrar las dos o tres que se comen la mayor parte del tiempo.
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

### 35–50 · Sección 03 · n8n: qué es

**Filmina 17 · Separador "03"** — pasarla.

<p style="color:#1a7f37">Ahora sí: n8n.</p>

#### Filmina 18 · ¿Qué es n8n? Low-code, open source y basado en nodos (3 min)

<p style="color:#1a7f37">n8n conecta aplicaciones para que trabajen juntas solas, sin programar. Cada nodo es un bloque ya hecho que configurás; y si hace falta, se puede escribir código.</p>

Para explicar:
- **"Qué hace: conecta aplicaciones y servicios entre sí para automatizar tareas sin necesidad de escribir código."** Tiene cientos de integraciones listas: Gmail, Google Sheets, Slack, WhatsApp, Telegram, bases de datos y modelos de IA. Ejemplos de para qué sirve: cada mail de consulta se carga en una planilla; cada pedido nuevo avisa por WhatsApp; cada lunes a las 9 llega un reporte; cada mensaje de un cliente lo responde un asistente con IA. El nombre viene de *nodemation* (automatización con nodos). Se trabaja en una pantalla tipo pizarrón (el lienzo o *canvas*): se ponen bloques y se unen con flechas, y el dato va pasando de un bloque al siguiente en el orden de las flechas.
  - *Ejemplo:* Cada respuesta de un formulario → una fila en Sheets y un mail de bienvenida. Cada lunes a las 9 → el resumen de ventas al WhatsApp del dueño.
- **"No-code: todo se resuelve con configuraciones visuales sobre bloques prearmados. Si el bloque no llega a lo que necesitás, quedás trabado."** Herramientas como Zapier o Make son muy fáciles, pero si necesitás algo que el bloque no trae, no hay salida. No-code es ideal para empezar rápido y para casos comunes. El problema aparece con los casos particulares, que en un negocio real siempre aparecen: un formato de fecha raro, un cálculo propio, un sistema que no tiene bloque.
  - *Ejemplo:* En una herramienta no-code, si el bloque para formatear fechas no tiene "día de la semana en español", no hay forma de agregarlo.
- **"Low-code: la misma interfaz visual, pero podés escribir código cuando hace falta. Eso elimina la barrera."** n8n tiene un nodo de código (JavaScript o Python) para esos casos. En el curso casi no lo vamos a usar, pero está. La idea es que el 90 % se resuelva con bloques y configuraciones, y que el código quede como salida para ese 10 % que los bloques no cubren. Además, hoy una IA puede ayudarnos a escribir esas pocas líneas de código si algún día hacen falta.
  - *Ejemplo:* Un nodo Code de tres líneas que le suma el IVA a cada precio:

    ```js
    return $input.all().map(item => ({
      json: { ...item.json, total: item.json.precio * 1.21 }
    }));
    ```
- **"La idea central: cada nodo es código ya escrito y empaquetado. Vos configurás parámetros, y programás solo si el caso lo pide."** El nodo "Gmail" ya sabe cómo hablar con Gmail; nosotros le decimos qué mail mandar y a quién. Alguien ya resolvió la parte difícil (cómo conectarse, cómo pedir permiso, cómo mandar los datos) y la dejó lista en un bloque. Configurar un nodo se parece más a completar un formulario que a programar.
  - *Ejemplo:* El nodo Google Sheets, en la acción "Append row", pide qué planilla, qué hoja y qué dato va en cada columna. Completás tres campos y listo: no escribís cómo conectarse con Google.
- Un matiz sobre "open source": n8n se define como *fair-code*. El código es público y se puede instalar gratis en una máquina propia, con algunas restricciones comerciales (por ejemplo, revenderlo como servicio). Para lo que vamos a hacer en el curso, e incluso para usarlo dentro de una empresa, esas restricciones no afectan. Que el código sea público también hace que haya una comunidad grande que comparte flujos, nodos y soluciones a problemas comunes.
  - *Ejemplo:* Podés instalar n8n gratis en el servidor de tu empresa y usarlo para todos tus flujos. Lo que no podés es armar "MiAutomatizador.com" y vender n8n como si fuera tuyo.

**Ejemplos: para qué sirve n8n, nodo por nodo**

<p style="color:#1a7f37">Para que se vea para qué sirve, cuatro flujos reales. Fíjense que todos tienen la misma forma: algo los dispara, pasan cosas en el medio y el dato termina en algún lado.</p>

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
| Instalarlo en tu máquina | No | No | Sí, gratis (self-hosted) |
| Cómo cobra la versión en la nube | Por cada tarea que hace cada paso | Por operaciones o créditos | Por ejecución del workflow entero |
| IA y agentes | Sí | Sí | Sí, con nodos de AI Agent muy completos |

Para explicar: las tres sirven para automatizar y la lógica es la misma (trigger, pasos, dato que termina en
algún lado). Elegimos n8n porque se puede instalar gratis, porque cuando un caso se complica se puede escribir
código, y porque cobra por ejecución: un flujo de diez pasos que corre una vez cuenta como una ejecución, no
como diez. Lo que aprendan acá les sirve para cualquiera de las otras.

*Ejemplo:* Un flujo de 10 pasos que corre 1.000 veces por mes: en n8n son 1.000 ejecuciones; en una herramienta que cobra por paso, son 10.000 tareas.

#### Filmina 19 · Tu instancia: dónde corre n8n (3 min)

<p style="color:#1a7f37">Una instancia es tu n8n funcionando en algún lado: en la nube de n8n, desde el navegador, o instalado en tu máquina o tu servidor, gratis pero a tu cargo.</p>

Para explicar:
- **"Qué es una instancia: una copia de n8n en ejecución corriendo en algún lado. Es el despliegue de la herramienta."** n8n es un programa: para usarlo, tiene que estar corriendo en una computadora. "Tu instancia" es tu copia de ese programa, con tus workflows y tus credenciales. Cada alumno va a tener la suya, separada de la de los demás. Es como tener tu propia cuenta de Gmail: el programa es el mismo para todos, pero lo que hay adentro es tuyo.
  - *Ejemplo:* Arturo tiene su instancia y Romina la suya. Si Arturo crea un workflow, no aparece en la de Romina, salvo que lo exporte y ella lo importe.
- **"n8n Cloud: la versión hospedada y gestionada por el equipo de n8n. Es SaaS: entrás desde el navegador y no administrás infraestructura."** SaaS (*Software as a Service*) es como Gmail: no instalás nada, entrás con usuario y contraseña. Es lo más fácil para empezar; es pago después de la prueba gratuita y tiene límites de ejecuciones según el plan. La ventaja grande es que está siempre prendida y accesible desde internet, así que los flujos corren aunque tu computadora esté apagada, y las actualizaciones las hace n8n.
  - *Ejemplo:* Te registrás en n8n.io con tu mail y en un minuto tenés una dirección del tipo `tunombre.app.n8n.cloud` con n8n funcionando.
- **"Self-hosted: la infraestructura es tuya, y la responsabilidad también. Pide saber de redes, bases de datos y Docker."** Lo instalás en tu computadora o en un servidor. Es gratis y sin límite de ejecuciones, y los datos no salen de tu máquina; a cambio, si se cae o hay que actualizarlo, es tu problema. Para que lo usen otras personas o reciba avisos desde internet, tiene que estar en un servidor accesible. Si está instalado en tu notebook, los flujos solo corren mientras la notebook está prendida y con n8n abierto. Para practicar alcanza; para un negocio real, se usa un servidor.
  - *Ejemplo:* Una clínica que no quiere que los datos de los pacientes salgan de su servidor instala n8n ahí. Si el servidor se apaga, los flujos se frenan hasta que alguien lo vuelva a levantar.
- **"Cómo se instala: en el caso self-hosted, con Node o con Docker."** Node es el entorno que ejecuta JavaScript; con Node instalado, `npx n8n` lo levanta en la computadora. Docker es una herramienta que empaqueta programas con todo lo que necesitan para correr. Contá cuál usan ustedes en el curso. Con Docker, n8n viene en una especie de "caja" que trae todo lo necesario y funciona igual en cualquier computadora; por eso es la forma más usada en servidores. La elección no cambia cómo se usa n8n: la pantalla y los nodos son los mismos en todas las versiones.
  - *Ejemplo:* ```bash
    # Con Node instalado:
    npx n8n
    # Con Docker:
    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
    ```

    En los dos casos, n8n queda abierto en el navegador en `http://localhost:5678`.

**Docker: cómo usar n8n gratis, sin pagar el plan de n8n Cloud**

<p style="color:#1a7f37">n8n Cloud es lo más cómodo, pero después de la prueba gratuita se paga por mes. La alternativa es instalar n8n en nuestra propia computadora, gratis y sin límite de ejecuciones. Para eso usamos Docker, una herramienta que nos baja n8n listo para usar, con todo lo que necesita para funcionar, y lo levanta con un solo comando.</p>

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
| Recibir avisos desde internet (webhooks, WhatsApp) | Sí, ya tiene una dirección pública | Hace falta una dirección pública (un túnel o un servidor); lo vemos cuando lo necesitemos |
| Actualizaciones y backups | Las hace n8n | Las hacés vos |

Para explicar: para aprender y practicar, Docker en la computadora alcanza y no cuesta nada. Para un negocio
real, donde el flujo tiene que estar prendido las 24 horas, se usa n8n Cloud o el mismo Docker instalado en un
servidor alquilado. La pantalla de n8n y los nodos son los mismos en las dos versiones: lo que aprendan en una
sirve para la otra.

**Paso a paso para instalarlo**

1. **Instalar Docker Desktop** desde docker.com. En Windows, el instalador puede pedir activar *WSL 2* (un
   componente de Windows que Docker necesita) y reiniciar la computadora. Docker Desktop es gratis para uso
   personal, educativo y para empresas chicas.
2. **Abrir Docker Desktop** y esperar a que diga que está funcionando (*Engine running*).
3. **Abrir una terminal** (en Windows, PowerShell; en Mac, Terminal) y crear el volumen donde se van a guardar
   los datos:

   ```bash
   docker volume create n8n_data
   ```

4. **Levantar n8n:**

   ```bash
   docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
   ```

   La primera vez tarda unos minutos porque descarga la imagen. Cuando en la terminal aparece que el editor está
   disponible en `http://localhost:5678`, está listo.
5. **Entrar desde el navegador** a `http://localhost:5678`. La primera vez pide crear la cuenta de dueño de la
   instancia (mail y contraseña). Esa cuenta es local: vive en tu computadora, no en la nube de n8n.

**Qué quiere decir cada parte del comando**

| Parte | Qué hace |
|---|---|
| `docker run` | Crea un contenedor a partir de una imagen y lo prende. |
| `-it` | Muestra lo que pasa en la terminal, para ver si arrancó bien. |
| `--rm` | Cuando se apaga, borra el contenedor (los datos no se pierden: están en el volumen). |
| `--name n8n` | Le pone nombre al contenedor, para poder referirse a él. |
| `-p 5678:5678` | Conecta el puerto 5678 de tu computadora con el del contenedor: por eso se entra por `localhost:5678`. |
| `-v n8n_data:/home/node/.n8n` | Guarda los datos de n8n en el volumen `n8n_data`. Sin esto, al apagar se pierde todo. |
| `docker.n8n.io/n8nio/n8n` | La imagen oficial de n8n. |

**El día a día**

- **Apagarlo:** en la terminal donde está corriendo, `Ctrl + C`.
- **Volver a prenderlo:** abrir Docker Desktop y correr el mismo comando del paso 4. Los workflows siguen ahí,
  porque están en el volumen.
- **Actualizar n8n:** bajar la imagen nueva con `docker pull docker.n8n.io/n8nio/n8n` y volver a correr el
  comando del paso 4.

**Errores comunes**

- *Ejemplo:* `docker: command not found` o "no se reconoce el comando". Docker no está instalado o Docker Desktop
  no está abierto.
- *Ejemplo:* "port is already allocated". Ya hay algo usando el puerto 5678, casi siempre otro n8n que quedó
  prendido. Se cierra la otra terminal o se apaga el contenedor desde Docker Desktop.
- *Ejemplo:* "Se me borraron los workflows". Seguramente se corrió el comando sin `-v n8n_data:/home/node/.n8n`.
  Siempre usar el comando completo.
- *Ejemplo:* la computadora se pone lenta. Docker Desktop consume memoria; cuando no se usa n8n, se puede cerrar.

Para la clase: si la mayoría va a usar Docker, la instalación puede llevar 10 a 15 minutos y conviene dejarla
como tarea con esta guía (está en el Ejercicio 8 de `ejercicios-alumnos.md`), o mostrarla en vivo en lugar del
template si es lo que más necesita el grupo.

#### Filmina 20 · JSON: el idioma de los datos dentro de n8n (3 min)

<p style="color:#1a7f37">Los nodos se pasan los datos en JSON: llave y valor. Por eso la semana pasada el prompt devolvía JSON: es el idioma de n8n.</p>

Para explicar:
- **"Qué es: un formato estándar para enviar información entre sistemas."** Es texto, se puede leer a ojo, y casi todas las aplicaciones lo entienden. JSON quiere decir *JavaScript Object Notation*, pero no hace falta saber JavaScript para usarlo: es solo una forma ordenada de escribir datos. Cuando una aplicación le manda información a otra por internet, casi siempre lo hace en JSON.
  - *Ejemplo:* Lo que devuelve un servicio del clima cuando se le pregunta por una ciudad: `{"ciudad": "Rosario", "temperatura": 18, "lluvia": false}`.
- **"Cómo se arma: entre llaves, con pares de 'Llave': 'Valor'. La llave dice qué es, el valor dice cuál."** Mostrá el ejemplo del material: `{"nombre": "Juan", "apellido": "Perez", "id_cliente": 10}`. Los valores pueden ser texto (entre comillas), números o verdadero/falso (`true`/`false`). Los pares se separan con comas, y las llaves siempre van entre comillas. Un valor también puede ser una lista (entre corchetes) u otro JSON adentro, por ejemplo una dirección con calle, número y ciudad. Una coma de más o una comilla que falta y el JSON deja de ser válido, como vieron en el formatter.
  - *Ejemplo:* `{"producto": "Torta de chocolate", "precio": 24000, "sin_tacc": false, "sabores": ["chocolate", "dulce de leche"]}`: un texto, un número, un verdadero/falso y una lista.
- **"La analogía: un pedido a domicilio. Para: Fulano. Contenido: pizzas."** El repartidor no necesita entender la pizza: necesita saber dónde está cada dato. Lo mismo un nodo de n8n: no necesita entender el mail del cliente, necesita encontrar el nombre en la llave `nombre` y el destino en la llave `destino`. Mientras las etiquetas estén siempre en el mismo lugar, el paquete llega.
  - *Ejemplo:* `{"para": "Fulano", "direccion": "Av. Siempreviva 742", "contenido": "2 pizzas"}`. El repartidor (el nodo) busca `direccion` y no necesita leer el resto.
- **"Por qué importa acá: cada nodo recibe y envía datos en JSON. Es el medio de comunicación entre nodos."** Un detalle útil: en n8n los datos viajan como una lista de "items"; si un nodo recibe cinco mails, recibe cinco items y procesa cada uno. Conectá con la Semana 1: por eso el prompt devolvía JSON, es lo que n8n le puede pasar al nodo siguiente. Si la IA devuelve un párrafo, el nodo siguiente no sabe dónde buscar cada dato; si devuelve JSON con llaves fijas, lo usa directo. Cuando abramos n8n en vivo, van a ver ese JSON en la salida de cada nodo.
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
  - *Ejemplo:* Gmail Trigger (llega un mail), Schedule Trigger (todos los días a las 8), Form Trigger (alguien completa un formulario de n8n), Webhook (la tienda online avisa una venta).
- **"Define qué: acciones hay que realizar, cómo se conectan entre sí y qué decisiones se toman durante la ejecución."** Las acciones son los nodos que hacen cosas; las conexiones son las flechas; las decisiones son nodos que eligen un camino u otro (los vemos en el Módulo 3). Por ejemplo: si la IA dice que el mail es un reclamo, se avisa al responsable; si es una consulta, se carga en la planilla. Con esas tres cosas (acciones, conexiones y decisiones) se arma cualquier automatización.
  - *Ejemplo:* Acción: "agregar una fila en Sheets". Conexión: la flecha que va del nodo de IA a Sheets. Decisión: "si el tipo es reclamo, mandar al WhatsApp del encargado; si no, a la planilla".
- **"Cómo se guarda: en un archivo JSON estandarizado con la definición completa del flujo. Por eso se puede exportar y compartir."** Un workflow entero es un archivo de texto: se manda por mail, se sube a un repositorio o se importa en otra instancia. Lo que no viaja en ese archivo son las contraseñas y las credenciales: quien lo importa tiene que conectar sus propias cuentas. Por eso se puede compartir un flujo sin compartir el acceso a tus aplicaciones.
  - *Ejemplo:* Exportás "Consultas mail → planilla" como `consultas.json` y se lo mandás a un compañero. Lo importa y le aparece el mismo flujo; solo tiene que conectar su Gmail y su planilla.

**Qué es un nodo y qué tipos hay**

<p style="color:#1a7f37">Cada cuadradito del lienzo es un nodo, y cada nodo hace una sola cosa. Hay cinco tipos: los que arrancan el flujo, los que hacen acciones, los que deciden caminos, los de IA y los de código.</p>

| Tipo | Qué hace | Ejemplos |
|---|---|---|
| **Trigger** (disparador) | Arranca el flujo cuando pasa algo. Siempre es el primero. | Gmail Trigger, Schedule Trigger (horario), Webhook, Form Trigger, Manual Trigger (botón para probar) |
| **Acción** | Hace algo en una aplicación: leer, escribir, mandar. | Gmail (mandar mail), Google Sheets (agregar fila), WhatsApp, Telegram, HTTP Request |
| **Transformación** | Cambia o arma los datos sin salir de n8n. | Edit Fields (Set), Filter, Sort, Aggregate |
| **Lógica** | Elige un camino o junta caminos. Se ven en el Módulo 3. | IF, Switch, Merge, Wait |
| **IA** | Le pasa el dato a un modelo de lenguaje con un prompt. | Basic LLM Chain, AI Agent, Information Extractor, Text Classifier |
| **Código** | Para lo que ningún nodo resuelve. | Code (JavaScript o Python) |

Para explicar: un nodo es como una estación de una línea de montaje. Recibe el dato (en JSON), hace su parte
y lo pasa al siguiente. Cada nodo tiene una **entrada** (lo que le llega del nodo anterior), sus
**parámetros** (lo que configuramos) y una **salida** (lo que le pasa al siguiente). Armar un workflow es
elegir qué estaciones hacen falta y en qué orden.

*Ejemplo:* El flujo de la agencia como línea de montaje: el Gmail Trigger recibe el mail (entrada: nada; salida: el mail), el nodo de IA lo convierte (entrada: el mail; salida: el JSON) y Google Sheets lo guarda (entrada: el JSON; salida: la fila creada).

**El nodo de IA: dónde va el prompt de la Semana 1**

<p style="color:#1a7f37">Acá se juntan las dos semanas. El prompt que armaron la semana pasada va adentro de un nodo de IA. La única diferencia es que el mail ya no lo pegan ustedes: n8n lo pone solo con una expresión.</p>

Un nodo de IA en n8n tiene tres partes:

1. **El modelo** que usa: se conecta como un "sub-nodo" abajo del nodo de IA (OpenAI, Anthropic, Google
   Gemini o un modelo local con Ollama, que vemos en el Módulo 7). Pide una credencial con la clave de API.
2. **El prompt**: acá va la plantilla maestra. Donde la semana pasada pegaban el mail a mano, ahora va una
   **expresión** que trae el texto del nodo anterior.
3. **El formato de salida**: se puede activar que la respuesta tenga una estructura fija (*Require Specific
   Output Format* con un *Structured Output Parser*). Así n8n controla que el JSON tenga las llaves que
   pedimos, además de pedirlo en el prompt.

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
- **"Qué es: un workflow completo, con nodos, conexiones y configuración, que alguien armó para un caso de uso concreto."** Ejemplos: mandar un mail cuando entra un lead, resumir noticias con IA, publicar en redes. "Template" quiere decir plantilla. Es como usar el modelo de un documento en vez de arrancar con la hoja en blanco: la estructura ya está, se cambian los datos. Muchos los arma el propio equipo de n8n y otros, la comunidad.
  - *Ejemplo:* El template "resumir mails nuevos con IA y mandarlos a Telegram" ya trae conectados el Gmail Trigger, un nodo de IA con su prompt y el nodo de Telegram.
- **"Dónde están: en la biblioteca pública de n8n, desde la app o en n8n.io/workflows."** Se busca por caso de uso o por integración. Por ejemplo, buscar "Gmail" muestra todos los templates que usan Gmail, y buscar "lead" o "customer support" muestra los que resuelven ese problema. Cada template tiene una descripción, una imagen del flujo y la lista de aplicaciones que usa.
  - *Ejemplo:* En n8n.io/workflows, buscar "Google Sheets" junto con "OpenAI" muestra los templates que usan las dos; buscar "invoice" muestra los que procesan facturas.
- **"Cómo se importa: con un clic desde la sección Templates, o cargando un archivo .json con Import from File o Import from URL."** Como vimos en la filmina anterior, un workflow es un archivo JSON. Importarlo es abrir ese archivo en tu instancia: aparecen los mismos nodos y flechas, listos para adaptar. Así también se comparten flujos entre compañeros o se usan los que vamos a pasar en el curso.
  - *Ejemplo:* Desde el lienzo: menú ⋯ → *Import from File* → elegís `consultas.json`. O *Import from URL* con el link del template.
- **"Reutilizar es: conectar tus propias credenciales, ajustar condiciones y campos, y guardarlo como plantilla interna."** Un cuidado: los templates de la comunidad los arma cualquiera; antes de conectarles tus cuentas, mirá qué hace cada nodo y adónde manda los datos. Un template casi nunca funciona tal cual: hay que conectar tus cuentas, cambiar el nombre de la planilla, ajustar los campos a tu caso y, si tiene IA, adaptar el prompt. Lo bueno es que la lógica ya está pensada y probada.
  - *Ejemplo:* El template usa la planilla "Leads" con la columna "Name"; vos tenés "Consultas" con la columna "nombre". Se cambia la planilla y se mapea "nombre" en lugar de "Name".
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

*Ejemplo:* El nodo de Google Sheets queda en rojo con un mensaje del tipo "no se encontró el recurso". Traducido: no encuentra la planilla. Causa típica: le cambiaron el nombre a la planilla, o la credencial es de otra cuenta de Google.

---

### 50–60 · Break

**Filmina 24 · Break**

<p style="color:#1a7f37">Diez minutos de break. Cuando volvemos, abrimos n8n.</p>

---

### 60–100 · Sección 04 · n8n en vivo: cómo se usa

**Filmina 25 · Separador "04"** — pasarla y quedate con la **filmina 26** de fondo mientras compartís tu
instancia.

<p style="color:#1a7f37">Ahora n8n en vivo: les muestro cómo se usa.</p>

**Filmina 26 · Ejemplo en vivo.** Dice: *"Desafío de priorización. El profe pone tres casos en pantalla y el
grupo vota (ya lo hicimos en la sección de ROI). Después construimos juntos un flujo mínimo en n8n y lo
rompemos a propósito para leer el error."* Este bloque lo amplía con un recorrido por la interfaz y un
template real.

<p style="color:#1a7f37">Vamos a recorrer la interfaz, mirar un template real, armar un flujo desde cero y romperlo a propósito para leer el error. Después lo hacen ustedes.</p>

> Pasos detallados de cada demo en `ejercicios-docente.md`, sección "n8n en vivo".

#### 60–70 · Recorrido por la interfaz (10 min)

| Qué mostrar | Para explicar |
|---|---|
| La pantalla de inicio con la lista de workflows | Acá vive todo lo que armen. Cada workflow se puede exportar como `.json`. Conviene ponerles nombres claros desde el primer día ("Consultas mail → planilla"): cuando tengan diez, se agradece. |
| Dónde están las **credenciales** | Son las llaves para que n8n entre a Gmail, Sheets o una IA en tu nombre. Se cargan una vez y se reutilizan en todos los workflows. Las vemos a fondo en el Módulo 4. Son información sensible: no se comparten ni se muestran en pantalla, y no viajan cuando se exporta un workflow. |
| Un workflow nuevo y el **buscador de nodos** | Hay **triggers** (lo que arranca el flujo) y **acciones** (lo que hace). Todo workflow que corre solo necesita al menos un trigger. Mostrá que se puede buscar por nombre de aplicación ("Gmail") o por lo que se quiere hacer, y que cada aplicación trae varias acciones (mandar un mail, leer mails, marcar como leído). |
| Un nodo abierto | Parámetros por un lado; entrada y salida por el otro. La salida tiene vista **Table** y vista **JSON**: es el JSON de la filmina 20. Mostrá que se puede ver qué datos entraron al nodo y qué datos salieron: es la herramienta principal para entender qué está pasando en un flujo. |
| Guardar, ejecutar y el interruptor para activarlo | Ejecutar a mano sirve para probar. Para que corra solo hace falta un trigger real y activarlo. Mientras se arma, se prueba con el botón; cuando funciona, se activa y desde ahí corre solo cada vez que pasa el evento del trigger. |
| **Executions** | El historial de cada corrida, con su estado. Es lo primero que se mira cuando algo falla. Muestra cuándo corrió, si terminó bien o con error, y en qué nodo se cortó. Permite abrir una corrida vieja y ver los datos exactos que pasaron por cada nodo. |

**Credenciales: un ejemplo con Gmail** (incluido en estos 10 minutos)

<p style="color:#1a7f37">Para que n8n pueda leer tus mails o escribir en tu planilla, primero le tenés que dar permiso. Eso es una credencial: se crea una vez y la usan todos tus workflows.</p>

1. Abrí un nodo de **Gmail** y en *Credential to connect with* elegí *Create new credential*.
2. En n8n Cloud aparece un botón *Sign in with Google*: se abre la ventana de Google que pregunta "n8n quiere
   acceder a tu cuenta". Al aceptar, la credencial queda guardada. (En self-hosted hace falta crear antes
   una app en Google Cloud; lo vemos en el Módulo 4.)
3. Mostrá que la credencial aparece en la sección **Credentials** y que cualquier otro nodo de Gmail la puede
   usar sin volver a pedirla.

Para explicar: una credencial es como darle a alguien una llave de tu casa. Conviene darle solo las puertas
que necesita (por ejemplo, solo leer mails y no borrarlos), no compartirla y no mostrarla en pantalla. Si un
día la llave deja de andar (cambiaste la contraseña, venció el permiso), el nodo queda en rojo con un error
de autorización: no es que el flujo esté mal, hay que reconectar la credencial. Para los modelos de IA es
parecido, pero en vez de "iniciar sesión" se pega una **clave de API** que da el proveedor (OpenAI, Anthropic,
Google).

*Ejemplo:* Si una credencial de Gmail tiene permiso para leer y mandar mails, un template mal hecho podría mandar mails en tu nombre. Por eso, antes de conectar un template de la comunidad, se mira qué hace cada nodo.

**Ejecutar a mano vs. flujo activo, y los items**

<p style="color:#1a7f37">Mientras armamos, probamos con el botón. Cuando funciona, lo activamos y corre solo. Y si llegan cinco mails, n8n los procesa uno por uno: cada uno es un item.</p>

| | Ejecutar a mano (*Execute workflow*) | Flujo activo (*Active*) |
|---|---|---|
| Cuándo corre | Cuando apretás el botón | Cada vez que pasa el evento del trigger |
| Para qué sirve | Probar y ver los datos de cada nodo | Que trabaje solo, 24/7 |
| Qué ves | Los datos en pantalla en cada nodo | El historial en **Executions** |

Ejemplo de **items**: si el Gmail Trigger trae 5 mails nuevos, la salida tiene 5 items (en la vista Table
son 5 filas). El nodo de IA corre 5 veces, una por mail, y Google Sheets agrega 5 filas. No hace falta armar
ninguna repetición: n8n la hace solo. Para explicar: por eso el prompt se escribe pensando en *un* mail; n8n
se encarga de aplicarlo a todos los que lleguen. Ojo con el costo: 5 items son 5 llamadas a la IA, y se paga
cada una.

#### 70–80 · Para qué sirve: un template real (10 min)

1. Entrá a **n8n.io/workflows** y mostrá cómo se busca por caso de uso o por integración.
2. **Importá el template** que elegiste.
3. **Leelo en voz alta, nodo por nodo:** ¿cuál es el trigger? ¿dónde está la IA? ¿dónde termina el dato?
4. Mostrá lo que habría que adaptar: los avisos de **credenciales** faltantes y los campos que dependen del caso.
- *"Esto es para lo que sirve n8n. Al final del curso ustedes arman uno así desde cero."*
- Para explicar: leer un flujo ajeno es como leer un mapa. Primero se busca dónde empieza (el trigger), después se sigue el camino de las flechas y, por último, se mira dónde termina el dato. Si el template tiene un nodo de IA, abrilo y mostrá el prompt: van a reconocer las partes de la Semana 1 (rol, tarea, formato). Esas tres preguntas (¿qué lo dispara?, ¿dónde decide la IA?, ¿dónde termina?) son las mismas que van a responder en el boceto de la pre-entrega.
  - *Ejemplo:* Lectura en voz alta: "Este flujo arranca cuando llega un mail (Gmail Trigger). El nodo de IA lo resume en tres líneas. El último nodo manda ese resumen a Telegram. Para usarlo, conecto mi Gmail, mi clave de IA y mi Telegram".

#### 80–88 · El flujo mínimo, construido desde cero (8 min)

1. Workflow nuevo → **Manual Trigger**: un trigger que se dispara con un botón, para probar.
2. **Edit Fields (Set)** con dos campos: `nombre` = "Martín Gómez" y `destino` = "Bariloche". Ejecutalo y mostrá la salida: es un JSON con esas dos llaves.
3. Otro **Edit Fields** con `saludo`: escribí "Hola " y **arrastrá** el campo `nombre` desde la entrada. Mostrá que n8n escribe solo la expresión `{{ $json.nombre }}`: quiere decir "el campo nombre del JSON que llega". Eso es **mapear** un dato de un nodo al siguiente.
4. Ejecutalo: sale "Hola Martín Gómez".
- Para explicar: el Manual Trigger reemplaza, mientras probamos, al trigger real (un mail, un formulario). El primer Edit Fields hace de "dato que llega": en un flujo real, esos datos los traería el mail o los devolvería la IA. Lo importante es el paso 3: las llaves dobles `{{ }}` le dicen a n8n "acá no va un texto fijo, va un dato que viene del nodo anterior". Con eso, el mismo flujo saluda a Martín, a Lucía o a quien llegue, sin cambiar nada. Mapear es la habilidad que más van a usar en todo el curso.
  - *Ejemplo:* Si el primer nodo trae "Lucía Fernández" en lugar de "Martín Gómez", el saludo sale "Hola Lucía Fernández" sin tocar el segundo nodo.

#### 88–92 · Romperlo y leer el error (4 min)

- Cambiá la expresión de `saludo` por un campo que no existe: `{{ $json.email.toUpperCase() }}`. El nodo queda en rojo.
- **Leé el error en voz alta:** dice que no encuentra el dato que pediste. Después mirá la corrida fallida en **Executions**.
  - *Ejemplo:* El mensaje suele decir algo como `Cannot read properties of undefined (reading 'toUpperCase')`. Traducido: "quisiste pasar a mayúsculas algo que no existe" (el campo `email`).
- *"Un nodo en rojo no es un problema de n8n: es n8n diciéndote qué arreglar."*
- Para explicar: lo rompemos a propósito para perderle el miedo al rojo. El flujo pide el campo `email`, pero el nodo anterior solo manda `nombre` y `destino`: el dato no existe y n8n avisa. Es el error más común de todos, y en un flujo real pasa cuando un mail llega sin un dato o cuando la IA devuelve una llave con otro nombre. Por eso la semana pasada insistimos tanto en que las llaves del JSON sean siempre las mismas.
  - *Ejemplo:* Un caso real del mismo error: la IA devuelve la llave `"Nombre"` con mayúscula y el nodo de Sheets busca `nombre`. El dato está, pero con otro nombre, y n8n no lo encuentra.

#### 92–100 · Ejercicio 4 · Los alumnos lo replican (8 min)

- Cada uno arma el flujo mínimo en su instancia con el paso a paso de `ejercicios-alumnos.md` y lo rompe.
- Recorré el chat: las trabas más comunes son no encontrar el nodo Edit Fields y no poder arrastrar el campo (hay que ejecutar antes el nodo anterior).
- Quien no tenga instancia, lo hace en casa (Ejercicio 8).

---

### 100–108 · Los 5 pasos de la pre-entrega

Mostrá cada paso con el **ejemplo resuelto de la agencia de viajes** (en `ejercicios-docente.md`). Los
alumnos lo hacen en casa con su propio proceso.

#### Filmina 27 · Paso 1: el proceso (1,5 min)

<p style="color:#1a7f37">Paso 1 de la pre-entrega: elijan una tarea repetitiva, que pase seguido y no requiera criterio. Descarten lo que pasa una vez al año.</p>

Para explicar:
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

#### Filmina 28 · Paso 2: el ROI (1,5 min)

<p style="color:#1a7f37">Paso 2: el ROI. Cuánto tarda, cada cuánto pasa, qué harían con ese tiempo y si escala. Y una razón para no automatizarlo.</p>

Para explicar:
- **"Estimar cuánto tiempo te lleva hoy hacerlo a mano y con qué frecuencia se repite."** En el ejemplo: 40 consultas por semana × 5 minutos = unas 13 horas por mes. No hace falta exactitud: alcanza con una estimación honesta. Si no saben cuánto tarda, que lo midan una vez con el reloj del celular.
  - *Ejemplo:* 30 pedidos por día × 3 minutos = 90 minutos por día: unas 30 horas por mes.
- **"Preguntarte qué harías con ese tiempo: ese es el costo de oportunidad."** En el ejemplo de la agencia: con 13 horas por mes, el vendedor puede responder antes las consultas y cerrar más ventas. Es la parte del ROI que no sale en la cuenta, pero que convence.
  - *Ejemplo:* Con esas 30 horas, la encargada podría armar las promociones de Instagram que nunca tiene tiempo de hacer.
- **"Chequear si sigue teniendo sentido cuando el volumen se multiplique por diez."** Si con diez veces más trabajo sin automatizar haría falta otra persona, la automatización escala. Con 400 consultas por semana, cargarlas a mano serían más de 130 horas por mes, casi un sueldo entero; el flujo, en cambio, las procesa igual.
  - *Ejemplo:* Con 300 pedidos por día serían 15 horas diarias de carga: dos personas. El flujo procesa 300 igual que 30.
- **"Resultado esperado: dos o tres líneas que argumentan por qué automatizarlo, y por qué no."** El "por qué no" es importante: muestra que se pensó. Por ejemplo: "si las consultas son muy pocas, o si cada una necesita una respuesta muy personalizada, quizás no convenga". No hay que convencer a nadie de que todo es perfecto: hay que mostrar que se evaluaron los dos lados.
  - *Ejemplo:* "Por qué no: los pedidos con indicaciones raras ('sin azúcar pero que sea bien dulce') la IA los puede interpretar mal; esos conviene que los revise una persona."

**Ejemplo: ROI mal y bien argumentado**

❌ Mal: *"Ahorra mucho tiempo y es más eficiente."* No tiene números ni dice qué se hace con el tiempo.

✅ Bien: *"Hoy lleva 5 minutos por consulta y llegan 40 por semana: unas 13 horas por mes. Con ese tiempo, el
vendedor puede responder antes y cerrar más ventas. Si las consultas se multiplican por diez, a mano haría
falta otra persona; el flujo las procesa igual. Por qué no: si cada consulta necesitara una respuesta muy
personalizada, la IA ayudaría poco."*

#### Filmina 29 · Paso 3: el boceto (2 min)

<p style="color:#1a7f37">Paso 3: el boceto. Qué lo dispara, los pasos del medio, dónde entra la IA y dónde termina el dato.</p>

Para explicar:
- **"Definir el disparador: ¿arranca por un evento o por horario?"** Evento: llega un mail, se completa un formulario. Horario: todos los lunes a las 9. Es el trigger que vimos en la filmina 21. La pregunta para elegir es: ¿la tarea tiene que pasar en el momento en que llega algo, o puede esperar a una hora fija?
  - *Ejemplo:* Evento: "cada vez que llega un mensaje de WhatsApp". Horario: "todos los días a las 20, revisar los pedidos del día y mandar un resumen".
- **"Listar los pasos intermedios y marcar en cuál entra el nodo de IA."** Cada paso, una acción concreta: "leer el mail", "extraer los datos con IA", "guardar en la planilla". Marcar el paso de IA ayuda a ver que casi todo el flujo es lineal y que la IA aparece en un solo lugar, el que necesita interpretar.
  - *Ejemplo:* ```text
    1. Leer el mensaje de WhatsApp
    2. IA: extraer producto, cantidad, fecha y cliente      ← acá entra la IA
    3. Guardar en la planilla "Pedidos"
    4. Confirmarle al cliente por WhatsApp
    ```
- **"Definir el output final: dónde termina el dato y en qué formato."** Una planilla, un mensaje de WhatsApp, un mail, una base de datos. Si termina en una planilla, conviene anotar qué columnas tiene: van a coincidir con las llaves del JSON que devuelve la IA.
  - *Ejemplo:* Una fila nueva en la planilla "Pedidos" (columnas producto, cantidad, fecha y cliente), más un mensaje de confirmación al cliente.
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

#### Filmina 30 · Paso 4: el prompt (1,5 min)

<p style="color:#1a7f37">Paso 4: el prompt del nodo de IA, con la anatomía de la semana pasada y las llaves del JSON.</p>

Para explicar:
- **"Aplicar la anatomía del módulo 1: persona, contexto, tarea y formato."** Es la plantilla que armaron en el desafío de la Semana 1, adaptada al proceso que eligieron. Si el desafío ya era sobre el mismo caso, gran parte del trabajo está hecho.
  - *Ejemplo:* Persona: "Sos el asistente de pedidos de una pastelería". Contexto: "Los pedidos se toman con 48 horas de anticipación". Tarea: "Extraé producto, cantidad, fecha y nombre del cliente". Formato: el JSON con esas llaves.
- **"Declarar las llaves exactas del JSON que el nodo tiene que devolver."** Las llaves tienen que coincidir con lo que espera el paso siguiente del boceto: si el dato termina en una planilla con las columnas nombre, destino y fecha, el JSON tiene que tener esas mismas llaves. Así se conectan el prompt y el boceto.
  - *Ejemplo:* Columnas de la planilla: producto · cantidad · fecha · cliente. Llaves del JSON: `producto`, `cantidad`, `fecha`, `cliente`. Los mismos nombres.
- **"Descartar cualquier versión vaga tipo 'resumime esto': eso no alcanza."** Un prompt así devuelve cada vez algo distinto y ningún nodo lo puede usar. Si el prompt de la pre-entrega no tiene rol, contexto, tarea concreta y formato, no está listo para ir dentro de un flujo.
  - *Ejemplo:* "Resumime este pedido" → "La clienta quiere una torta para el sábado". ¿Qué va en cada columna? No se sabe.
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

#### Filmina 31 · Paso 5: los riesgos (1,5 min)

<p style="color:#1a7f37">Paso 5: un riesgo, como una alucinación o un dato ambiguo, y cómo lo evitan desde el prompt o desde el flujo.</p>

Para explicar:
- **"Elegir un riesgo del módulo 1: alucinación, límite de contexto o ambigüedad."** Ambigüedad: el mensaje se puede entender de dos formas (por ejemplo, "el 12" sin decir de qué mes). Alucinación: que la IA complete un dato que no estaba, como un teléfono o un año. Límite de contexto: que el texto a procesar sea tan largo (un hilo de mails entero, un documento) que no entre completo o que la IA pierda partes.
  - *Ejemplo:* Alucinación: inventa la fecha. Límite de contexto: un pedido con un hilo de 50 mensajes no entra entero. Ambigüedad: "la quiero para el viernes", ¿este o el próximo?
- **"Escribir cómo lo mitigás desde el prompt o desde el diseño del flujo."** Desde el prompt: prohibir inventar, `no_disponible`. Desde el flujo: si un dato clave falta, la fila se marca "a revisar" para que la vea una persona. Lo mejor es combinar las dos cosas: el prompt reduce el error y el flujo lo atrapa si igual pasa. Mitigar no quiere decir eliminar el riesgo, sino tener un plan para cuando aparezca.
  - *Ejemplo:* Riesgo: "el viernes" es ambiguo. En el prompt: "si la fecha no es exacta, poné no_disponible". En el flujo: si la fecha es no_disponible, se le pregunta al cliente por WhatsApp "¿para qué fecha exacta?".
- **"Juntar las cinco partes en un solo documento."** Proceso, ROI, boceto, prompt y riesgo, en ese orden, en un solo PDF. Ese orden cuenta una historia: qué problema hay, por qué conviene resolverlo, cómo sería el flujo, qué hace la IA adentro y qué puede salir mal.
  - *Ejemplo:* 1. Proceso · 2. ROI · 3. Boceto · 4. Prompt · 5. Riesgos → un PDF de dos o tres páginas.

**Ejemplo: riesgo genérico y riesgo concreto**

❌ Mal: *"La IA se puede equivocar, así que hay que tener cuidado."* Es cierto para cualquier flujo y no dice
qué hacer.

✅ Bien: *"Riesgo: ambigüedad. Si el cliente escribe 'salgo el 12', la IA no sabe de qué mes y puede
inventarlo. Mitigación en el prompt: solo usar fechas que estén completas en el mail, si no, no_disponible.
Mitigación en el flujo: si fecha_salida es no_disponible, la fila se marca 'a revisar' y el vendedor le
pregunta al cliente."*

---

### 108–115 · Sección 05 · Pre-entrega

**Filmina 32 · Separador "05"** — pasarla.

<p style="color:#1a7f37">Esto que acabamos de ver es la pre-entrega.</p>

#### Filmina 33 · ¿De qué se trata? Diseñar, todavía no construir (1 min)

<p style="color:#1a7f37">La pre-entrega es diseñar, no construir: una automatización con un paso de IA, por qué vale la pena y el prompt que la hace funcionar.</p>

Para explicar: **"El objetivo: diseñar una automatización simple que use un paso de IA. No hace falta que
funcione todavía. Lo que sí hace falta: justificar por qué vale la pena y cómo sería el prompt."** Las cinco
partes (proceso, ROI, boceto, prompt y reflexión) **son exactamente los cinco pasos que acabamos de ver**.
Que no se asusten si todavía no saben armarlo en n8n: es a propósito. Primero se aprende a pensar la
automatización y después a construirla. En las próximas semanas van a ir sumando las piezas (decisiones,
APIs, credenciales) para que este diseño se convierta en un flujo que corre de verdad.

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

Para explicar: cada parte responde una pregunta. El proceso: ¿qué tarea se automatiza? El ROI: ¿por qué
vale la pena? El boceto: ¿cómo sería el flujo? El prompt: ¿qué hace la IA adentro? Los riesgos: ¿qué puede
salir mal y cómo se evita? Si cada parte responde su pregunta, la entrega está completa.

*Ejemplo:* Las cinco, en una línea cada una. Proceso: cargar los pedidos de WhatsApp. ROI: 30 horas por mes. Boceto: WhatsApp → IA → Sheets → confirmación. Prompt: la plantilla con producto, cantidad, fecha y cliente. Riesgo: fechas ambiguas, con no_disponible y repregunta.

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

Mostrá también los pesos de la rúbrica del programa (en `ejercicios-alumnos.md`): **el boceto del flujo vale
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

### 115–120 · Preguntas y cierre

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
- [ ] Vieron un template real leído nodo por nodo.
- [ ] Armaron (o vieron armar) un flujo mínimo, lo rompieron y leyeron el error.
- [ ] Tienen la consigna de la pre-entrega y un ejemplo resuelto.
