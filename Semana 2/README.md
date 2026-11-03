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
| 35–50 | **03 · n8n: qué es** (instancia, JSON, workflow, templates) | 17–23 | |
| 50–60 | Break | 24 | |
| 60–100 | **04 · n8n en vivo: cómo se usa** | 25–26 | Ej. 4 (8 min) |
| 100–108 | Los 5 pasos de la pre-entrega, con el ejemplo resuelto | 27–31 | |
| 108–115 | **05 · Pre-entrega** y cómo sigue | 32–37 | |
| 115–120 | Preguntas y cierre | 38–39 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden: el Ejercicio 3 (priorización), la parte del template en
vivo (se muestra solo la biblioteca) y los pasos 3 a 5 de la pre-entrega (se lee la consigna y listo).
**No recortes los 40 minutos de n8n.**

---

### Preparación (antes de la clase)

- [ ] **Tu instancia de n8n abierta** (Cloud o local) y ya logueada. Probá antes todo lo de la sección 04.
- [ ] **Un template elegido** en n8n.io/workflows para importar en vivo: uno chico (4 a 6 nodos) que use IA. Importalo una vez antes, para saber qué credenciales pide.
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
- **Evaluar si un proceso vale la pena automatizar usando ROI, frecuencia y costo de oportunidad.** No todo lo que se puede automatizar conviene automatizarlo: armar y mantener un flujo cuesta. Hoy vamos a aprender a hacer esa cuenta antes de abrir n8n, con tres preguntas simples. Es lo que separa a quien automatiza "porque se puede" de quien automatiza lo que le cambia el día a un negocio.
- **Reconocer las piezas de n8n: instancia, workflow, nodos y el JSON que viaja entre ellos.** El vocabulario que vamos a usar el resto del curso. Son cuatro palabras que van a aparecer en todas las clases que siguen: dónde corre n8n, cómo se arma un flujo, qué hace cada bloque y en qué formato se pasan los datos. Si hoy quedan claras, el resto del curso se entiende mucho mejor.
- **Traducir un proceso manual a un boceto de flujo con un paso de IA.** Es la pre-entrega de esta semana. Antes de construir, se diseña: qué dispara el flujo, qué pasos tiene, dónde entra la IA y dónde termina el dato. Un buen boceto ahorra horas de prueba y error en n8n.
- **Importar y adaptar un template en lugar de construir desde cero.** En la práctica real, casi nadie arranca de una hoja en blanco. Hay miles de flujos armados por la comunidad para casos muy comunes. Saber encontrarlos, leerlos y adaptarlos es una habilidad tan importante como saber armar uno desde cero.

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
- **Tokens y ventana de contexto.** Lo vamos a sentir en n8n: cada llamada al nodo de IA consume tokens, y mandarle textos enormes es más caro y más lento. Y cada llamada empieza de cero: el modelo no se acuerda de la corrida anterior del flujo. Todo lo que necesite saber tiene que ir en esa llamada.
- **Alucinaciones.** La defensa está en el prompt ("usá solo lo que dice el texto", "no_disponible") y, desde hoy, también en el flujo: validar el JSON antes de guardarlo. Con n8n podemos agregar controles alrededor de la IA: por ejemplo, si un dato viene como `no_disponible`, mandar la fila a revisión en vez de guardarla como si estuviera completa.
- **Las cuatro partes del prompt y las técnicas.** Rol, contexto, tarea y formato; zero-shot, few-shot y chain of thought. Si alguien no se acuerda, que mire su desafío del Módulo 1. Hoy no vamos a escribir prompts nuevos desde cero: vamos a usar el que ya tienen y ver dónde se ubica dentro de un flujo.
- **La plantilla maestra en JSON.** Es la pieza que hoy pasa de "copiar y pegar a mano" a "un nodo dentro de un flujo que corre solo". Ese es el puente con la filmina 5. El JSON que la semana pasada validaban en el formatter es exactamente lo que un nodo de n8n le pasa al siguiente.

**Filmina 5 · ¿Dónde quedamos? Del prompt suelto al flujo que corre solo** (3 min)

<p style="color:#1a7f37">La semana pasada armaron un prompt que devuelve JSON. El problema es que lo siguen pegando a mano. Hoy conocemos la herramienta que hace eso sola.</p>

Para explicar:
- **"En el módulo 1: armaste una plantilla de prompt que toma un texto desordenado y devuelve JSON válido."** Recordá el ejemplo de la agencia de viajes: un mail desordenado entra, un JSON con nombre, destino y fechas sale. Ese prompt ya hace la parte "inteligente" del trabajo: leer, entender y ordenar. Lo que falta es todo lo que pasa alrededor.
- **"El problema que quedó: vos seguís copiando y pegando el texto a mano cada vez."** Con diez mails por día, eso no escala: la IA hace su parte, pero una persona sigue siendo el "cable" que lleva el dato de un lado al otro. Abrir el mail, copiar, pegar en el chat, copiar el JSON, pegarlo en la planilla: cinco pasos manuales por cada mensaje. Si un día llegan cien, alguien pasa la tarde haciendo eso, y además puede equivocarse al copiar.
- **"Hoy: conocemos la herramienta que hace ese trabajo sola y aprendemos a decidir qué vale la pena automatizar."** La herramienta es n8n: va a buscar el mail, se lo pasa a la IA con nuestro prompt y guarda el resultado, sin que nadie toque nada. Y antes de armar nada, vamos a ver cómo decidir si un proceso vale el esfuerzo de automatizarlo.
- **"Al final de la clase: vas a tener diseñada tu primera automatización con un paso de IA adentro."** Diseñada, todavía no construida: ese es el objetivo de la pre-entrega. Van a salir con un proceso elegido, la justificación de por qué conviene, el boceto del flujo y el prompt que va adentro.

Que uno o dos cuenten su desafío del Módulo 1 en una línea.

---

### 10–22 · Sección 01 · Qué es una automatización

**Filmina 6 · Separador "01"** — pasarla.

<p style="color:#1a7f37">Empecemos por lo básico: qué es automatizar.</p>

#### Filmina 7 · ¿Qué es automatizar? Un asistente digital que no duerme (3 min)

<p style="color:#1a7f37">Automatizar es que la tecnología haga sola las tareas repetitivas, moviendo datos de un lado a otro según reglas. La ventaja: si el volumen se multiplica, el trabajo no se multiplica con él.</p>

Para explicar:
- **"La definición: usar tecnología para realizar tareas repetitivas sin intervención humana, moviendo datos de un lugar a otro según reglas predefinidas."** La mayor parte del trabajo administrativo es mover datos: del mail a la planilla, de la planilla a la factura, de la factura al mail del cliente. Automatizar es que eso pase solo, siguiendo reglas que definimos una vez. Como un asistente que trabaja 24/7 y no se olvida ni se cansa. Las tres palabras clave de la definición: "repetitivas" (si se hace una sola vez, no hay nada que automatizar), "sin intervención humana" (nadie tiene que apretar un botón) y "reglas predefinidas" (alguien pensó antes qué tiene que pasar en cada caso).
- **"El dilema que resuelve: en un negocio tradicional, si los pedidos se duplican, la carga administrativa se duplica y hay que contratar más gente."** Si cargar un pedido lleva 5 minutos, 100 pedidos llevan más de 8 horas: una persona entera. Con 200, dos personas. Es lo que se llama crecimiento lineal: el trabajo crece al mismo ritmo que las ventas. Muchos negocios chicos se traban justo ahí: venden más, pero el tiempo que les come la administración no los deja crecer.
- **"Cómo rompe esa linealidad: un servidor procesando 100 webhooks por minuto cuesta y tarda lo mismo que procesando 10.000."** Un **webhook** es un aviso automático que una aplicación le manda a otra cuando pasa algo: "entró un pedido", "llegó un pago". Para una computadora, procesar uno o mil de esos avisos es prácticamente lo mismo. El costo crece muchísimo menos que el volumen. Es como la diferencia entre escribir cada invitación a mano y mandar un mail a una lista: escribir el mail lleva el mismo tiempo para diez personas que para mil.
- **"El resultado: el trabajo operativo se vuelve un costo fijo. Escalás las ventas sin colapsar la logística."** Matiz para el grupo: no es fijo del todo (si cada paso usa una IA paga, cada llamada cuesta centavos), pero crece mucho más despacio que contratar gente. Y libera a las personas para lo que una máquina no hace bien: atender un caso delicado, negociar, pensar cómo mejorar el negocio.

#### Filmina 8 · Orquestación: automatizar no es solo ahorrar tiempo (2 min)

<p style="color:#1a7f37">Automatizar no es solo ahorrar tiempo: es orquestar. Gmail, WhatsApp, una planilla y un medio de pago son los músicos; n8n es el director que los hace sonar juntos.</p>

Para explicar:
- **"La metáfora: en una orquesta cada músico es excelente por su cuenta. Si cada uno toca una partitura distinta, el resultado es ruido."** Pasa lo mismo en cualquier negocio: tiene buenas herramientas, pero cada una vive en su mundo. El problema no es que las herramientas sean malas, sino que nadie las coordina.
- **"El director: no toca ningún instrumento. Da las entradas, marca los tiempos y hace que todos suenen como una sola canción."** El director no reemplaza a los músicos: los hace funcionar juntos. Decide quién entra cuándo y qué tiene que pasar después. Ese es el papel de n8n: no reemplaza a Gmail ni a la planilla, les dice qué hacer y en qué orden.
- **"En tecnología: los músicos son WhatsApp, Google Sheets, Gmail, un procesador de pagos."** Cada una es buenísima en lo suyo, pero no se hablan entre sí: el pago entra en Mercado Pago, el pedido en WhatsApp y el stock en una planilla. Hoy, en la mayoría de los negocios, el que conecta esas herramientas es una persona que mira una, copia y pega en la otra. Esa persona es el "director" manual.
- **"Orquestar es: coordinar esas herramientas independientes para que funcionen como un solo mecanismo fluido."** Cuando entra el pago, se actualiza la planilla y se le avisa al cliente por WhatsApp. **n8n es el director de orquesta.** Por eso decimos que automatizar no es solo ahorrar tiempo: también es que todo pase en el orden correcto, sin olvidos, y que la información esté actualizada en todos lados al mismo tiempo.

#### Filmina 9 · Lineales y cognitivas: dos formas de armar un flujo (4 min)

<p style="color:#1a7f37">Hay dos tipos: las lineales siguen reglas fijas, 'si pasa A, hacé B'. Las cognitivas tienen un paso donde decide una IA, como el prompt que hicieron la semana pasada.</p>

Para explicar:
- **"Lineales: cada paso se ejecuta en un orden fijo y predecible. 'Si pasa A, hacé B y después C', sin ambigüedad ni interpretación."** Ejemplo: cada vez que alguien completa un formulario, se agrega una fila a la planilla y se le manda un mail de confirmación. Son **deterministas**: con la misma entrada, siempre hacen lo mismo. Son baratas y confiables, pero no pueden "leer" un texto libre. Funcionan perfecto cuando los datos ya llegan ordenados (un formulario con campos fijos, una venta con monto y producto). Cuando el dato llega como texto libre, escrito por una persona, se traban.
- **"Cognitivas: en uno o varios pasos se delega la interpretación, el razonamiento o la generación a un modelo de IA."** Ejemplo: llega un mail, la IA decide si es una consulta, un reclamo o spam, y según eso el flujo hace cosas distintas. El prompt que armaron en la Semana 1 es exactamente ese paso. Tres cosas que puede hacer la IA en un flujo: interpretar (entender qué quiere el cliente), razonar (decidir qué categoría corresponde) y generar (escribir una respuesta o un resumen).
- **"La diferencia clave: el sistema deja de seguir solo instrucciones deterministas. En algún punto entiende el contenido y decide con cierto criterio."** Eso le da flexibilidad, pero trae lo que vimos la semana pasada: la IA puede equivocarse o inventar. Por eso los flujos cognitivos casi siempre son pasos lineales alrededor de un paso de IA bien controlado. La regla práctica: usar reglas fijas para todo lo que se pueda resolver con reglas, y dejar la IA solo para el paso que de verdad necesita interpretar. Así el flujo es más barato, más rápido y más fácil de controlar.
- **"Hacia dónde vamos: el proyecto final del curso es un agente autónomo. Cognitivo de punta a punta."** Un asistente de WhatsApp que entiende, decide y responde. La diferencia con un flujo cognitivo común es que el agente no sigue un camino fijo con un paso de IA: la IA decide qué hacer en cada momento (consultar un dato, responder, pedir más información). Lo vamos a construir de a poco, a partir de las piezas que vemos hoy.

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

**Ejercicio 1 · ¿Lineal o cognitiva?** (2 min) — seis casos, respuestas en el chat.

---

### 22–35 · Sección 02 · ROI: cuándo vale la pena

**Filmina 11 · Separador "02"** — pasarla.

<p style="color:#1a7f37">Ahora, la pregunta clave: ¿vale la pena automatizarlo?</p>

#### Filmina 12 · ¿Qué es el ROI? La métrica que decide qué automatizás (2 min)

<p style="color:#1a7f37">El ROI mide cuánto vuelve por lo que invertimos: beneficio neto sobre costo, por cien. El costo es armarlo y mantenerlo; el beneficio, las horas ahorradas, más ventas y menos errores.</p>

Para explicar:
- **"La definición: evalúa la rentabilidad de una inversión en relación con su costo. En automatización no se mide solo en plata, también en tiempo recuperado."** ROI es *Return on Investment*, retorno de la inversión. Responde: por cada peso (o cada hora) que pongo, ¿cuánto me vuelve? En automatización muchas veces conviene hacer la cuenta en horas: cuántas horas me lleva armar el flujo contra cuántas horas me ahorra por mes. Después, si hace falta, esas horas se pasan a plata con lo que cuesta la hora de la persona que hacía la tarea.
- **"La fórmula: ROI = (Beneficio neto / Costo de la inversión) × 100."** Beneficio neto es lo que se ganó o ahorró menos lo que costó. Si da positivo, la inversión rindió; si da negativo, todavía no se recuperó. Un ejemplo simple: si armar un flujo cuesta 100 y en tres meses ahorra 250, el beneficio neto es 150 y el ROI es 150 %. Por cada peso invertido, volvió el peso y un peso y medio más.
- **"Costo de inversión: horas de desarrollo del flujo, licencias de software, hosting, mantenimiento."** Lo que más se olvida es el mantenimiento: las aplicaciones cambian, las credenciales vencen, los prompts hay que ajustarlos. Un flujo no se arma y se olvida. También entran en el costo las llamadas a la IA (que se pagan por token) y el tiempo de probar el flujo antes de dejarlo andando solo.
- **"Beneficio neto: ahorro de horas manuales, más ventas por responder rápido, menos costos por errores evitados."** Un cliente que recibe respuesta en un minuto en vez de en un día compra más; un pedido cargado sin errores de tipeo no se envía a la dirección equivocada. El ahorro de horas es el más fácil de medir; los otros dos son más difíciles de calcular, pero muchas veces son los que más pesan.

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
- **"Regla 80/20: el 80 % de los resultados sale del 20 % de los flujos. Automatizá alta frecuencia y bajo juicio humano."** Unos pocos flujos bien elegidos dan casi todo el beneficio. Alta frecuencia: pasa muchas veces (cada día, cada hora). Bajo juicio humano: no necesita que una persona decida algo delicado. Copiar pedidos a una planilla cumple las dos; negociar con un proveedor, ninguna. La regla sirve para no dispersarse: antes de automatizar diez cosas chicas, conviene encontrar las dos o tres que se comen la mayor parte del tiempo.
- **"Costo de oportunidad: ¿qué estaría haciendo esa persona si no estuviera copiando datos en Excel?"** Si es un vendedor que pasa dos horas por día copiando datos, la empresa pierde las ventas que podría haber cerrado en ese tiempo. El costo de una tarea manual no es solo el sueldo de las horas que lleva: es todo lo que esa persona no hizo mientras tanto. Por eso dos tareas que llevan el mismo tiempo pueden tener ROI muy distintos según quién las haga.

#### Filmina 14 · El ROI oculto: cuando empatar igual conviene (1 min)

<p style="color:#1a7f37">A veces un flujo no deja plata directa, pero libera al dueño para vender más. Y lo que pasa una vez al año casi nunca conviene automatizarlo.</p>

Para explicar:
- **"El caso: un workflow que apenas empata en términos monetarios. Lo que sí genera: libera al dueño del negocio para dedicarse a cerrar ventas o a mejorar la calidad del producto."** En un negocio chico, el tiempo del dueño es lo más caro que hay, aunque no figure en ninguna planilla. Si la cuenta da cero en plata pero el dueño recupera una hora por día para atender clientes, el flujo se paga igual, solo que el beneficio no aparece en la fórmula. También cuentan cosas como menos estrés, menos errores y responder más rápido.
- **"El otro lado: si automatizás algo que se hace una vez al año, el ROI siempre va a ser negativo por el costo de mantenimiento."** Para cuando se vuelve a usar, probablemente algo cambió y hay que arreglarlo. Ejemplos: el cierre del balance anual, la inscripción a un evento que se hace una vez. Armar el flujo lleva más tiempo que hacer la tarea a mano, y cuando llega el momento de usarlo, una credencial venció o una aplicación cambió y no funciona. Para esas tareas, una lista de pasos bien escrita suele rendir más que una automatización.

**Ejercicio 3 · Desafío de priorización** (3 min) — es la actividad de la filmina 26, adelantada. Tres casos;
votan en el chat cuál automatizarían con solo dos horas. Usá la votación para repasar frecuencia, juicio
humano y costo de oportunidad.

#### Filminas 15 y 16 · Para recordar y Coder Tips (1 min)

<p style="color:#1a7f37">El ROI no es solo lo que ahorrás: también es lo que dejás de ganar por hacer tareas manuales. Antes de abrir n8n, tres preguntas: cuánto tarda hoy, cuántas veces pasa por semana y qué harías con ese tiempo.</p>

Para explicar:
- **"El ROI no es solo lo que ahorrás. Es también lo que dejás de ganar por hacer tareas manuales."** Es la idea del costo de oportunidad dicha en una frase. Cuando presenten una automatización, conviene contar las dos partes: las horas que se ahorran y lo que se puede hacer con esas horas.
- **"Buscá la fruta madura: procesos de alta frecuencia y bajo juicio humano. Antes de abrir n8n respondete tres cosas: cuánto tarda hoy, cuántas veces por semana pasa, y qué haría esa persona con ese tiempo."** Son exactamente las tres preguntas del ROI de la pre-entrega. "Fruta madura" quiere decir lo más fácil de alcanzar y que más rinde: el proceso que se repite todo el tiempo y que no necesita que nadie piense. Con las dos primeras respuestas se calcula el tiempo ahorrado (minutos × veces); la tercera le da sentido a ese número.

---

### 35–50 · Sección 03 · n8n: qué es

**Filmina 17 · Separador "03"** — pasarla.

<p style="color:#1a7f37">Ahora sí: n8n.</p>

#### Filmina 18 · ¿Qué es n8n? Low-code, open source y basado en nodos (3 min)

<p style="color:#1a7f37">n8n conecta aplicaciones para que trabajen juntas solas, sin programar. Cada nodo es un bloque ya hecho que configurás; y si hace falta, se puede escribir código.</p>

Para explicar:
- **"Qué hace: conecta aplicaciones y servicios entre sí para automatizar tareas sin necesidad de escribir código."** Tiene cientos de integraciones listas: Gmail, Google Sheets, Slack, WhatsApp, Telegram, bases de datos y modelos de IA. Ejemplos de para qué sirve: cada mail de consulta se carga en una planilla; cada pedido nuevo avisa por WhatsApp; cada lunes a las 9 llega un reporte; cada mensaje de un cliente lo responde un asistente con IA. El nombre viene de *nodemation* (automatización con nodos). Se trabaja en una pantalla tipo pizarrón (el lienzo o *canvas*): se ponen bloques y se unen con flechas, y el dato va pasando de un bloque al siguiente en el orden de las flechas.
- **"No-code: todo se resuelve con configuraciones visuales sobre bloques prearmados. Si el bloque no llega a lo que necesitás, quedás trabado."** Herramientas como Zapier o Make son muy fáciles, pero si necesitás algo que el bloque no trae, no hay salida. No-code es ideal para empezar rápido y para casos comunes. El problema aparece con los casos particulares, que en un negocio real siempre aparecen: un formato de fecha raro, un cálculo propio, un sistema que no tiene bloque.
- **"Low-code: la misma interfaz visual, pero podés escribir código cuando hace falta. Eso elimina la barrera."** n8n tiene un nodo de código (JavaScript o Python) para esos casos. En el curso casi no lo vamos a usar, pero está. La idea es que el 90 % se resuelva con bloques y configuraciones, y que el código quede como salida para ese 10 % que los bloques no cubren. Además, hoy una IA puede ayudarnos a escribir esas pocas líneas de código si algún día hacen falta.
- **"La idea central: cada nodo es código ya escrito y empaquetado. Vos configurás parámetros, y programás solo si el caso lo pide."** El nodo "Gmail" ya sabe cómo hablar con Gmail; nosotros le decimos qué mail mandar y a quién. Alguien ya resolvió la parte difícil (cómo conectarse, cómo pedir permiso, cómo mandar los datos) y la dejó lista en un bloque. Configurar un nodo se parece más a completar un formulario que a programar.
- Un matiz sobre "open source": n8n se define como *fair-code*. El código es público y se puede instalar gratis en una máquina propia, con algunas restricciones comerciales (por ejemplo, revenderlo como servicio). Para lo que vamos a hacer en el curso, e incluso para usarlo dentro de una empresa, esas restricciones no afectan. Que el código sea público también hace que haya una comunidad grande que comparte flujos, nodos y soluciones a problemas comunes.

#### Filmina 19 · Tu instancia: dónde corre n8n (3 min)

<p style="color:#1a7f37">Una instancia es tu n8n funcionando en algún lado: en la nube de n8n, desde el navegador, o instalado en tu máquina o tu servidor, gratis pero a tu cargo.</p>

Para explicar:
- **"Qué es una instancia: una copia de n8n en ejecución corriendo en algún lado. Es el despliegue de la herramienta."** n8n es un programa: para usarlo, tiene que estar corriendo en una computadora. "Tu instancia" es tu copia de ese programa, con tus workflows y tus credenciales. Cada alumno va a tener la suya, separada de la de los demás. Es como tener tu propia cuenta de Gmail: el programa es el mismo para todos, pero lo que hay adentro es tuyo.
- **"n8n Cloud: la versión hospedada y gestionada por el equipo de n8n. Es SaaS: entrás desde el navegador y no administrás infraestructura."** SaaS (*Software as a Service*) es como Gmail: no instalás nada, entrás con usuario y contraseña. Es lo más fácil para empezar; es pago después de la prueba gratuita y tiene límites de ejecuciones según el plan. La ventaja grande es que está siempre prendida y accesible desde internet, así que los flujos corren aunque tu computadora esté apagada, y las actualizaciones las hace n8n.
- **"Self-hosted: la infraestructura es tuya, y la responsabilidad también. Pide saber de redes, bases de datos y Docker."** Lo instalás en tu computadora o en un servidor. Es gratis y sin límite de ejecuciones, y los datos no salen de tu máquina; a cambio, si se cae o hay que actualizarlo, es tu problema. Para que lo usen otras personas o reciba avisos desde internet, tiene que estar en un servidor accesible. Si está instalado en tu notebook, los flujos solo corren mientras la notebook está prendida y con n8n abierto. Para practicar alcanza; para un negocio real, se usa un servidor.
- **"Cómo se instala: en el caso self-hosted, con Node o con Docker."** Node es el entorno que ejecuta JavaScript; con Node instalado, `npx n8n` lo levanta en la computadora. Docker es una herramienta que empaqueta programas con todo lo que necesitan para correr. Contá cuál usan ustedes en el curso. Con Docker, n8n viene en una especie de "caja" que trae todo lo necesario y funciona igual en cualquier computadora; por eso es la forma más usada en servidores. La elección no cambia cómo se usa n8n: la pantalla y los nodos son los mismos en todas las versiones.

#### Filmina 20 · JSON: el idioma de los datos dentro de n8n (3 min)

<p style="color:#1a7f37">Los nodos se pasan los datos en JSON: llave y valor. Por eso la semana pasada el prompt devolvía JSON: es el idioma de n8n.</p>

Para explicar:
- **"Qué es: un formato estándar para enviar información entre sistemas."** Es texto, se puede leer a ojo, y casi todas las aplicaciones lo entienden. JSON quiere decir *JavaScript Object Notation*, pero no hace falta saber JavaScript para usarlo: es solo una forma ordenada de escribir datos. Cuando una aplicación le manda información a otra por internet, casi siempre lo hace en JSON.
- **"Cómo se arma: entre llaves, con pares de 'Llave': 'Valor'. La llave dice qué es, el valor dice cuál."** Mostrá el ejemplo del material: `{"nombre": "Juan", "apellido": "Perez", "id_cliente": 10}`. Los valores pueden ser texto (entre comillas), números o verdadero/falso (`true`/`false`). Los pares se separan con comas, y las llaves siempre van entre comillas. Un valor también puede ser una lista (entre corchetes) u otro JSON adentro, por ejemplo una dirección con calle, número y ciudad. Una coma de más o una comilla que falta y el JSON deja de ser válido, como vieron en el formatter.
- **"La analogía: un pedido a domicilio. Para: Fulano. Contenido: pizzas."** El repartidor no necesita entender la pizza: necesita saber dónde está cada dato. Lo mismo un nodo de n8n: no necesita entender el mail del cliente, necesita encontrar el nombre en la llave `nombre` y el destino en la llave `destino`. Mientras las etiquetas estén siempre en el mismo lugar, el paquete llega.
- **"Por qué importa acá: cada nodo recibe y envía datos en JSON. Es el medio de comunicación entre nodos."** Un detalle útil: en n8n los datos viajan como una lista de "items"; si un nodo recibe cinco mails, recibe cinco items y procesa cada uno. Conectá con la Semana 1: por eso el prompt devolvía JSON, es lo que n8n le puede pasar al nodo siguiente. Si la IA devuelve un párrafo, el nodo siguiente no sabe dónde buscar cada dato; si devuelve JSON con llaves fijas, lo usa directo. Cuando abramos n8n en vivo, van a ver ese JSON en la salida de cada nodo.

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
- **"Define cuándo: comienza el proceso y qué lo dispara."** Ese primer nodo es el **trigger**: puede ser un horario, un mail que llega, un formulario que se completa o un mensaje de WhatsApp. "Trigger" quiere decir disparador. Sin trigger, el flujo solo corre si alguien lo ejecuta a mano. Con trigger, corre solo cada vez que pasa el evento. Es la diferencia entre una herramienta que hay que usar y una automatización de verdad.
- **"Define qué: acciones hay que realizar, cómo se conectan entre sí y qué decisiones se toman durante la ejecución."** Las acciones son los nodos que hacen cosas; las conexiones son las flechas; las decisiones son nodos que eligen un camino u otro (los vemos en el Módulo 3). Por ejemplo: si la IA dice que el mail es un reclamo, se avisa al responsable; si es una consulta, se carga en la planilla. Con esas tres cosas (acciones, conexiones y decisiones) se arma cualquier automatización.
- **"Cómo se guarda: en un archivo JSON estandarizado con la definición completa del flujo. Por eso se puede exportar y compartir."** Un workflow entero es un archivo de texto: se manda por mail, se sube a un repositorio o se importa en otra instancia. Lo que no viaja en ese archivo son las contraseñas y las credenciales: quien lo importa tiene que conectar sus propias cuentas. Por eso se puede compartir un flujo sin compartir el acceso a tus aplicaciones.

#### Filmina 22 · Templates: no reinventes la lógica cada vez (2 min)

<p style="color:#1a7f37">No hace falta arrancar de cero: hay miles de templates armados por otros. Se importan, se les conectan tus cuentas y se adaptan.</p>

Para explicar:
- **"Qué es: un workflow completo, con nodos, conexiones y configuración, que alguien armó para un caso de uso concreto."** Ejemplos: mandar un mail cuando entra un lead, resumir noticias con IA, publicar en redes. "Template" quiere decir plantilla. Es como usar el modelo de un documento en vez de arrancar con la hoja en blanco: la estructura ya está, se cambian los datos. Muchos los arma el propio equipo de n8n y otros, la comunidad.
- **"Dónde están: en la biblioteca pública de n8n, desde la app o en n8n.io/workflows."** Se busca por caso de uso o por integración. Por ejemplo, buscar "Gmail" muestra todos los templates que usan Gmail, y buscar "lead" o "customer support" muestra los que resuelven ese problema. Cada template tiene una descripción, una imagen del flujo y la lista de aplicaciones que usa.
- **"Cómo se importa: con un clic desde la sección Templates, o cargando un archivo .json con Import from File o Import from URL."** Como vimos en la filmina anterior, un workflow es un archivo JSON. Importarlo es abrir ese archivo en tu instancia: aparecen los mismos nodos y flechas, listos para adaptar. Así también se comparten flujos entre compañeros o se usan los que vamos a pasar en el curso.
- **"Reutilizar es: conectar tus propias credenciales, ajustar condiciones y campos, y guardarlo como plantilla interna."** Un cuidado: los templates de la comunidad los arma cualquiera; antes de conectarles tus cuentas, mirá qué hace cada nodo y adónde manda los datos. Un template casi nunca funciona tal cual: hay que conectar tus cuentas, cambiar el nombre de la planilla, ajustar los campos a tu caso y, si tiene IA, adaptar el prompt. Lo bueno es que la lógica ya está pensada y probada.
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

#### 70–80 · Para qué sirve: un template real (10 min)

1. Entrá a **n8n.io/workflows** y mostrá cómo se busca por caso de uso o por integración.
2. **Importá el template** que elegiste.
3. **Leelo en voz alta, nodo por nodo:** ¿cuál es el trigger? ¿dónde está la IA? ¿dónde termina el dato?
4. Mostrá lo que habría que adaptar: los avisos de **credenciales** faltantes y los campos que dependen del caso.
- *"Esto es para lo que sirve n8n. Al final del curso ustedes arman uno así desde cero."*
- Para explicar: leer un flujo ajeno es como leer un mapa. Primero se busca dónde empieza (el trigger), después se sigue el camino de las flechas y, por último, se mira dónde termina el dato. Si el template tiene un nodo de IA, abrilo y mostrá el prompt: van a reconocer las partes de la Semana 1 (rol, tarea, formato). Esas tres preguntas (¿qué lo dispara?, ¿dónde decide la IA?, ¿dónde termina?) son las mismas que van a responder en el boceto de la pre-entrega.

#### 80–88 · El flujo mínimo, construido desde cero (8 min)

1. Workflow nuevo → **Manual Trigger**: un trigger que se dispara con un botón, para probar.
2. **Edit Fields (Set)** con dos campos: `nombre` = "Martín Gómez" y `destino` = "Bariloche". Ejecutalo y mostrá la salida: es un JSON con esas dos llaves.
3. Otro **Edit Fields** con `saludo`: escribí "Hola " y **arrastrá** el campo `nombre` desde la entrada. Mostrá que n8n escribe solo la expresión `{{ $json.nombre }}`: quiere decir "el campo nombre del JSON que llega". Eso es **mapear** un dato de un nodo al siguiente.
4. Ejecutalo: sale "Hola Martín Gómez".
- Para explicar: el Manual Trigger reemplaza, mientras probamos, al trigger real (un mail, un formulario). El primer Edit Fields hace de "dato que llega": en un flujo real, esos datos los traería el mail o los devolvería la IA. Lo importante es el paso 3: las llaves dobles `{{ }}` le dicen a n8n "acá no va un texto fijo, va un dato que viene del nodo anterior". Con eso, el mismo flujo saluda a Martín, a Lucía o a quien llegue, sin cambiar nada. Mapear es la habilidad que más van a usar en todo el curso.

#### 88–92 · Romperlo y leer el error (4 min)

- Cambiá la expresión de `saludo` por un campo que no existe: `{{ $json.email.toUpperCase() }}`. El nodo queda en rojo.
- **Leé el error en voz alta:** dice que no encuentra el dato que pediste. Después mirá la corrida fallida en **Executions**.
- *"Un nodo en rojo no es un problema de n8n: es n8n diciéndote qué arreglar."*
- Para explicar: lo rompemos a propósito para perderle el miedo al rojo. El flujo pide el campo `email`, pero el nodo anterior solo manda `nombre` y `destino`: el dato no existe y n8n avisa. Es el error más común de todos, y en un flujo real pasa cuando un mail llega sin un dato o cuando la IA devuelve una llave con otro nombre. Por eso la semana pasada insistimos tanto en que las llaves del JSON sean siempre las mismas.

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
- **"Descartar las de baja frecuencia: si pasa una vez al año, el ROI va a ser negativo."** Es lo que vimos en la filmina 14: armar y mantener el flujo cuesta más que hacer la tarea a mano. Si la tarea pasa una vez por mes o menos, probablemente no conviene.
- **"Quedarnos con la de alta frecuencia y bajo juicio humano."** Ejemplo: cargar las consultas que llegan por mail. Pasa todos los días y no requiere decidir nada delicado: hay que leer el mail y pasar los datos. Y tiene un paso donde la IA aporta: entender un mail escrito de cualquier forma.
- **"Resultado esperado: un proceso elegido y descrito en dos o tres líneas."** Qué es la tarea, quién la hace hoy y cómo. Por ejemplo: "Todos los días llegan consultas por mail; una persona las lee y carga nombre, destino y fechas en una planilla". Si no se puede describir en dos o tres líneas, probablemente es demasiado grande para un primer flujo.

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
- **"Preguntarte qué harías con ese tiempo: ese es el costo de oportunidad."** En el ejemplo de la agencia: con 13 horas por mes, el vendedor puede responder antes las consultas y cerrar más ventas. Es la parte del ROI que no sale en la cuenta, pero que convence.
- **"Chequear si sigue teniendo sentido cuando el volumen se multiplique por diez."** Si con diez veces más trabajo sin automatizar haría falta otra persona, la automatización escala. Con 400 consultas por semana, cargarlas a mano serían más de 130 horas por mes, casi un sueldo entero; el flujo, en cambio, las procesa igual.
- **"Resultado esperado: dos o tres líneas que argumentan por qué automatizarlo, y por qué no."** El "por qué no" es importante: muestra que se pensó. Por ejemplo: "si las consultas son muy pocas, o si cada una necesita una respuesta muy personalizada, quizás no convenga". No hay que convencer a nadie de que todo es perfecto: hay que mostrar que se evaluaron los dos lados.

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
- **"Listar los pasos intermedios y marcar en cuál entra el nodo de IA."** Cada paso, una acción concreta: "leer el mail", "extraer los datos con IA", "guardar en la planilla". Marcar el paso de IA ayuda a ver que casi todo el flujo es lineal y que la IA aparece en un solo lugar, el que necesita interpretar.
- **"Definir el output final: dónde termina el dato y en qué formato."** Una planilla, un mensaje de WhatsApp, un mail, una base de datos. Si termina en una planilla, conviene anotar qué columnas tiene: van a coincidir con las llaves del JSON que devuelve la IA.
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
- **"Declarar las llaves exactas del JSON que el nodo tiene que devolver."** Las llaves tienen que coincidir con lo que espera el paso siguiente del boceto: si el dato termina en una planilla con las columnas nombre, destino y fecha, el JSON tiene que tener esas mismas llaves. Así se conectan el prompt y el boceto.
- **"Descartar cualquier versión vaga tipo 'resumime esto': eso no alcanza."** Un prompt así devuelve cada vez algo distinto y ningún nodo lo puede usar. Si el prompt de la pre-entrega no tiene rol, contexto, tarea concreta y formato, no está listo para ir dentro de un flujo.
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
- **"Escribir cómo lo mitigás desde el prompt o desde el diseño del flujo."** Desde el prompt: prohibir inventar, `no_disponible`. Desde el flujo: si un dato clave falta, la fila se marca "a revisar" para que la vea una persona. Lo mejor es combinar las dos cosas: el prompt reduce el error y el flujo lo atrapa si igual pasa. Mitigar no quiere decir eliminar el riesgo, sino tener un plan para cuando aparezca.
- **"Juntar las cinco partes en un solo documento."** Proceso, ROI, boceto, prompt y riesgo, en ese orden, en un solo PDF. Ese orden cuenta una historia: qué problema hay, por qué conviene resolverlo, cómo sería el flujo, qué hace la IA adentro y qué puede salir mal.

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

#### Filmina 34 · Tu misión (1 min)

<p style="color:#1a7f37">Les lleva entre 60 y 90 minutos. Un documento corto: no importa el diseño, importa que el proceso, el ROI y el prompt cuenten la misma historia.</p>

Para explicar: **"Duración estimada: entre 60 y 90 minutos. Un documento corto con las cinco partes. No se
evalúa la prolijidad del diseño. Sí la coherencia entre el proceso que elegiste, el ROI que argumentás y el
prompt que proponés."** Coherencia quiere decir que cuenten la misma historia: si el proceso es "clasificar
reseñas", el prompt tiene que clasificar reseñas y el ROI tiene que hablar de cuántas reseñas llegan. El
error más común es elegir un proceso, calcular el ROI de otro y escribir un prompt genérico. Un buen
control antes de entregar: leer las cinco partes seguidas y ver si alguien de afuera entendería qué se
automatiza, por qué y cómo.

#### Filmina 35 · Los pasos (1 min) — las cinco partes de la entrega, en orden.

<p style="color:#1a7f37">Son cinco partes: proceso, ROI, boceto, prompt y riesgos. Los mismos cinco pasos de recién.</p>

Para explicar: cada parte responde una pregunta. El proceso: ¿qué tarea se automatiza? El ROI: ¿por qué
vale la pena? El boceto: ¿cómo sería el flujo? El prompt: ¿qué hace la IA adentro? Los riesgos: ¿qué puede
salir mal y cómo se evita? Si cada parte responde su pregunta, la entrega está completa.

#### Filmina 36 · ¿Cómo se evalúa? (2 min)

<p style="color:#1a7f37">Se evalúa la coherencia, el ROI con tiempo y frecuencia, un boceto claro, un prompt completo y un riesgo bien pensado. El boceto es lo que más pesa.</p>

Para explicar cada criterio:
- **Coherencia:** proceso, ROI y prompt cuentan la misma historia. Todas las partes hablan del mismo proceso, con los mismos datos. Si el boceto dice que el dato termina en una planilla, el prompt devuelve las llaves de esa planilla.
- **Justificación del ROI:** tiempo, frecuencia y escalabilidad, y una razón para no automatizarlo. Con números estimados, aunque sean aproximados: "5 minutos × 40 veces por semana" vale más que "ahorra mucho tiempo".
- **El boceto:** se entiende qué dispara el flujo, dónde entra la IA y dónde termina el dato. Es lo que más pesa porque es lo más cercano a lo que van a construir en n8n. Un boceto claro se puede pasar a nodos casi directo.
- **El prompt:** contexto claro, instrucción específica y formato de salida. Las cuatro partes de la Semana 1 y las llaves del JSON declaradas. Si tiene ejemplos y regla para datos ausentes, mejor.
- **La reflexión:** un riesgo real de cómo procesa texto un LLM y su mitigación. Un riesgo concreto de su caso, no uno genérico. "La IA puede equivocarse" no alcanza; "si el cliente no dice el mes, la IA puede inventarlo, por eso pedimos no_disponible y marcamos la fila" sí.

Mostrá también los pesos de la rúbrica del programa (en `ejercicios-alumnos.md`): **el boceto del flujo vale
40 %** y el prompt 30 %.

#### Filmina 37 · ¿Cómo sigue? Del boceto al flujo que corre (2 min)

<p style="color:#1a7f37">La semana que viene vemos los nodos que deciden caminos y juntan datos. Lo que hoy escribieron como lista se va a convertir en nodos reales.</p>

Para explicar:
- **"Lo que ya tenés: una automatización diseñada, con su justificación y el prompt del nodo de IA escrito."** En dos semanas pasaron de usar la IA en un chat a diseñar un proceso automático completo con un paso de IA adentro. Lo que falta es construirlo, y para eso son las próximas semanas.
- **"Módulo 3: conceptos básicos. La anatomía de un workflow y los nodos principales: IF, Switch, Merge, Wait."** IF y Switch eligen un camino según una condición; Merge junta datos que vienen de dos caminos; Wait pausa el flujo un tiempo. Por ejemplo, con IF: si el JSON trae algún `no_disponible`, la fila va a revisión; si no, se guarda directo. Es el control de riesgos del paso 5, convertido en un nodo.
- **"La conexión: los pasos intermedios que hoy escribiste en una lista se van a convertir en nodos reales."** Cada flecha del boceto va a ser una conexión en el lienzo, y cada paso, un nodo. Conviene que tengan el boceto a mano la semana que viene.
- **"Para llevar: el boceto de hoy es el plano. El módulo 3 te entrega las piezas."** Como en una obra: primero el plano, después los ladrillos. Cuanto más claro el plano, más fácil la construcción.

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
