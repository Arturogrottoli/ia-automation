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

> **Cómo leer este guion:** para cada filmina, cada frase que aparece en pantalla está desarrollada en
> **"Para explicar"**, con más contexto y ejemplos. La filmina es el resumen; esto es lo que se dice en
> voz alta.
>
> **El foco de la clase es n8n:** que salgan sabiendo qué es, para qué sirve y cómo se usa. Por eso hay
> **40 minutos de n8n en vivo** después del break. La introducción a las automatizaciones y el ROI van
> antes, más cortos. La pre-entrega se muestra resuelta con un ejemplo y los alumnos la hacen en casa.

---

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
- **Distinguir una automatización lineal de una cognitiva y explicar qué es orquestar sistemas.** Es la base para saber cuándo hace falta IA en un flujo y cuándo no.
- **Evaluar si un proceso vale la pena automatizar usando ROI, frecuencia y costo de oportunidad.** No todo lo que se puede automatizar conviene automatizarlo: armar y mantener un flujo cuesta.
- **Reconocer las piezas de n8n: instancia, workflow, nodos y el JSON que viaja entre ellos.** El vocabulario que vamos a usar el resto del curso.
- **Traducir un proceso manual a un boceto de flujo con un paso de IA.** Es la pre-entrega de esta semana.
- **Importar y adaptar un template en lugar de construir desde cero.** En la práctica real, casi nadie arranca de una hoja en blanco.

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
- **La IA predice, no piensa.** Si alguien pregunta "¿entonces no sirve?": sirve muchísimo, pero hay que darle buen contexto y no confiar a ciegas en lo que devuelve.
- **Tokens y ventana de contexto.** Lo vamos a sentir en n8n: cada llamada al nodo de IA consume tokens, y mandarle textos enormes es más caro y más lento.
- **Alucinaciones.** La defensa está en el prompt ("usá solo lo que dice el texto", "no_disponible") y, desde hoy, también en el flujo: validar el JSON antes de guardarlo.
- **Las cuatro partes del prompt y las técnicas.** Rol, contexto, tarea y formato; zero-shot, few-shot y chain of thought. Si alguien no se acuerda, que mire su desafío del Módulo 1.
- **La plantilla maestra en JSON.** Es la pieza que hoy pasa de "copiar y pegar a mano" a "un nodo dentro de un flujo que corre solo". Ese es el puente con la filmina 5.

**Filmina 5 · ¿Dónde quedamos? Del prompt suelto al flujo que corre solo** (3 min)

<p style="color:#1a7f37">La semana pasada armaron un prompt que devuelve JSON. El problema es que lo siguen pegando a mano. Hoy conocemos la herramienta que hace eso sola.</p>

Para explicar:
- **"En el módulo 1: armaste una plantilla de prompt que toma un texto desordenado y devuelve JSON válido."** Recordá el ejemplo de la agencia de viajes: un mail desordenado entra, un JSON con nombre, destino y fechas sale.
- **"El problema que quedó: vos seguís copiando y pegando el texto a mano cada vez."** Con diez mails por día, eso no escala: la IA hace su parte, pero una persona sigue siendo el "cable" que lleva el dato de un lado al otro.
- **"Hoy: conocemos la herramienta que hace ese trabajo sola y aprendemos a decidir qué vale la pena automatizar."**
- **"Al final de la clase: vas a tener diseñada tu primera automatización con un paso de IA adentro."**

Que uno o dos cuenten su desafío del Módulo 1 en una línea.

---

### 10–22 · Sección 01 · Qué es una automatización

**Filmina 6 · Separador "01"** — pasarla.

<p style="color:#1a7f37">Empecemos por lo básico: qué es automatizar.</p>

#### Filmina 7 · ¿Qué es automatizar? Un asistente digital que no duerme (3 min)

<p style="color:#1a7f37">Automatizar es que la tecnología haga sola las tareas repetitivas, moviendo datos de un lado a otro según reglas. La ventaja: si el volumen se multiplica, el trabajo no se multiplica con él.</p>

Para explicar:
- **"La definición: usar tecnología para realizar tareas repetitivas sin intervención humana, moviendo datos de un lugar a otro según reglas predefinidas."** La mayor parte del trabajo administrativo es mover datos: del mail a la planilla, de la planilla a la factura, de la factura al mail del cliente. Automatizar es que eso pase solo, siguiendo reglas que definimos una vez. Como un asistente que trabaja 24/7 y no se olvida ni se cansa.
- **"El dilema que resuelve: en un negocio tradicional, si los pedidos se duplican, la carga administrativa se duplica y hay que contratar más gente."** Si cargar un pedido lleva 5 minutos, 100 pedidos llevan más de 8 horas: una persona entera. Con 200, dos personas.
- **"Cómo rompe esa linealidad: un servidor procesando 100 webhooks por minuto cuesta y tarda lo mismo que procesando 10.000."** Un **webhook** es un aviso automático que una aplicación le manda a otra cuando pasa algo: "entró un pedido", "llegó un pago". Para una computadora, procesar uno o mil de esos avisos es prácticamente lo mismo. El costo crece muchísimo menos que el volumen.
- **"El resultado: el trabajo operativo se vuelve un costo fijo. Escalás las ventas sin colapsar la logística."** Matiz para el grupo: no es fijo del todo (si cada paso usa una IA paga, cada llamada cuesta centavos), pero crece mucho más despacio que contratar gente.

#### Filmina 8 · Orquestación: automatizar no es solo ahorrar tiempo (2 min)

<p style="color:#1a7f37">Automatizar no es solo ahorrar tiempo: es orquestar. Gmail, WhatsApp, una planilla y un medio de pago son los músicos; n8n es el director que los hace sonar juntos.</p>

Para explicar:
- **"La metáfora: en una orquesta cada músico es excelente por su cuenta. Si cada uno toca una partitura distinta, el resultado es ruido."**
- **"El director: no toca ningún instrumento. Da las entradas, marca los tiempos y hace que todos suenen como una sola canción."**
- **"En tecnología: los músicos son WhatsApp, Google Sheets, Gmail, un procesador de pagos."** Cada una es buenísima en lo suyo, pero no se hablan entre sí: el pago entra en Mercado Pago, el pedido en WhatsApp y el stock en una planilla.
- **"Orquestar es: coordinar esas herramientas independientes para que funcionen como un solo mecanismo fluido."** Cuando entra el pago, se actualiza la planilla y se le avisa al cliente por WhatsApp. **n8n es el director de orquesta.**

#### Filmina 9 · Lineales y cognitivas: dos formas de armar un flujo (4 min)

<p style="color:#1a7f37">Hay dos tipos: las lineales siguen reglas fijas, 'si pasa A, hacé B'. Las cognitivas tienen un paso donde decide una IA, como el prompt que hicieron la semana pasada.</p>

Para explicar:
- **"Lineales: cada paso se ejecuta en un orden fijo y predecible. 'Si pasa A, hacé B y después C', sin ambigüedad ni interpretación."** Ejemplo: cada vez que alguien completa un formulario, se agrega una fila a la planilla y se le manda un mail de confirmación. Son **deterministas**: con la misma entrada, siempre hacen lo mismo. Son baratas y confiables, pero no pueden "leer" un texto libre.
- **"Cognitivas: en uno o varios pasos se delega la interpretación, el razonamiento o la generación a un modelo de IA."** Ejemplo: llega un mail, la IA decide si es una consulta, un reclamo o spam, y según eso el flujo hace cosas distintas. El prompt que armaron en la Semana 1 es exactamente ese paso.
- **"La diferencia clave: el sistema deja de seguir solo instrucciones deterministas. En algún punto entiende el contenido y decide con cierto criterio."** Eso le da flexibilidad, pero trae lo que vimos la semana pasada: la IA puede equivocarse o inventar. Por eso los flujos cognitivos casi siempre son pasos lineales alrededor de un paso de IA bien controlado.
- **"Hacia dónde vamos: el proyecto final del curso es un agente autónomo. Cognitivo de punta a punta."** Un asistente de WhatsApp que entiende, decide y responde.

#### Filmina 10 · Actividad: una tarea que te aburre (2 min)

<p style="color:#1a7f37">Piensen en una tarea que hacen todas las semanas: ¿qué parte es mecánica y qué parte necesita leer o decidir? Esa segunda parte es la que pide IA.</p>

Para explicar: **"Pensá en una tarea que hacés todas las semanas y te aburre. ¿Qué pasos son puro 'si pasa A,
hacé B'? ¿Y en cuál necesitás leer, interpretar o decidir? Ese segundo grupo es el que pide IA."** Que la
escriban en el chat. Es el primer paso para elegir el proceso de la pre-entrega.

**Ejercicio 1 · ¿Lineal o cognitiva?** (2 min) — seis casos, respuestas en el chat.

---

### 22–35 · Sección 02 · ROI: cuándo vale la pena

**Filmina 11 · Separador "02"** — pasarla.

<p style="color:#1a7f37">Ahora, la pregunta clave: ¿vale la pena automatizarlo?</p>

#### Filmina 12 · ¿Qué es el ROI? La métrica que decide qué automatizás (2 min)

<p style="color:#1a7f37">El ROI mide cuánto vuelve por lo que invertimos: beneficio neto sobre costo, por cien. El costo es armarlo y mantenerlo; el beneficio, las horas ahorradas, más ventas y menos errores.</p>

Para explicar:
- **"La definición: evalúa la rentabilidad de una inversión en relación con su costo. En automatización no se mide solo en plata, también en tiempo recuperado."** ROI es *Return on Investment*, retorno de la inversión. Responde: por cada peso (o cada hora) que pongo, ¿cuánto me vuelve?
- **"La fórmula: ROI = (Beneficio neto / Costo de la inversión) × 100."** Beneficio neto es lo que se ganó o ahorró menos lo que costó. Si da positivo, la inversión rindió; si da negativo, todavía no se recuperó.
- **"Costo de inversión: horas de desarrollo del flujo, licencias de software, hosting, mantenimiento."** Lo que más se olvida es el mantenimiento: las aplicaciones cambian, las credenciales vencen, los prompts hay que ajustarlos. Un flujo no se arma y se olvida.
- **"Beneficio neto: ahorro de horas manuales, más ventas por responder rápido, menos costos por errores evitados."** Un cliente que recibe respuesta en un minuto en vez de en un día compra más; un pedido cargado sin errores de tipeo no se envía a la dirección equivocada.

**Ejercicio 2 · Calculá el ROI** (3 min) — resolvelo en voz alta con los números de `ejercicios-alumnos.md`: el
primer mes da −20 %, a principios del segundo se recupera la inversión y al tercero rinde 140 %.

#### Filmina 13 · Umbrales: cuándo es rentable (2 min)

<p style="color:#1a7f37">Tres ideas: el break-even es cuando el ahorro alcanza lo que costó; conviene automatizar lo frecuente y que no requiere criterio humano; y siempre preguntarse qué haría esa persona con el tiempo libre.</p>

Para explicar:
- **"Break-even: el punto de equilibrio. El momento exacto en que el ahorro acumulado iguala el costo de implementación."** Antes de ese punto, la automatización todavía "debe" plata; después, todo es ganancia. En el ejercicio, cae a principios del segundo mes.
- **"Regla 80/20: el 80 % de los resultados sale del 20 % de los flujos. Automatizá alta frecuencia y bajo juicio humano."** Unos pocos flujos bien elegidos dan casi todo el beneficio. Alta frecuencia: pasa muchas veces (cada día, cada hora). Bajo juicio humano: no necesita que una persona decida algo delicado. Copiar pedidos a una planilla cumple las dos; negociar con un proveedor, ninguna.
- **"Costo de oportunidad: ¿qué estaría haciendo esa persona si no estuviera copiando datos en Excel?"** Si es un vendedor que pasa dos horas por día copiando datos, la empresa pierde las ventas que podría haber cerrado en ese tiempo.

#### Filmina 14 · El ROI oculto: cuando empatar igual conviene (1 min)

<p style="color:#1a7f37">A veces un flujo no deja plata directa, pero libera al dueño para vender más. Y lo que pasa una vez al año casi nunca conviene automatizarlo.</p>

Para explicar:
- **"El caso: un workflow que apenas empata en términos monetarios. Lo que sí genera: libera al dueño del negocio para dedicarse a cerrar ventas o a mejorar la calidad del producto."** En un negocio chico, el tiempo del dueño es lo más caro que hay, aunque no figure en ninguna planilla.
- **"El otro lado: si automatizás algo que se hace una vez al año, el ROI siempre va a ser negativo por el costo de mantenimiento."** Para cuando se vuelve a usar, probablemente algo cambió y hay que arreglarlo.

**Ejercicio 3 · Desafío de priorización** (3 min) — es la actividad de la filmina 26, adelantada. Tres casos;
votan en el chat cuál automatizarían con solo dos horas. Usá la votación para repasar frecuencia, juicio
humano y costo de oportunidad.

#### Filminas 15 y 16 · Para recordar y Coder Tips (1 min)

<p style="color:#1a7f37">El ROI no es solo lo que ahorrás: también es lo que dejás de ganar por hacer tareas manuales. Antes de abrir n8n, tres preguntas: cuánto tarda hoy, cuántas veces pasa por semana y qué harías con ese tiempo.</p>

Para explicar:
- **"El ROI no es solo lo que ahorrás. Es también lo que dejás de ganar por hacer tareas manuales."**
- **"Buscá la fruta madura: procesos de alta frecuencia y bajo juicio humano. Antes de abrir n8n respondete tres cosas: cuánto tarda hoy, cuántas veces por semana pasa, y qué haría esa persona con ese tiempo."** Son exactamente las tres preguntas del ROI de la pre-entrega.

---

### 35–50 · Sección 03 · n8n: qué es

**Filmina 17 · Separador "03"** — pasarla.

<p style="color:#1a7f37">Ahora sí: n8n.</p>

#### Filmina 18 · ¿Qué es n8n? Low-code, open source y basado en nodos (3 min)

<p style="color:#1a7f37">n8n conecta aplicaciones para que trabajen juntas solas, sin programar. Cada nodo es un bloque ya hecho que configurás; y si hace falta, se puede escribir código.</p>

Para explicar:
- **"Qué hace: conecta aplicaciones y servicios entre sí para automatizar tareas sin necesidad de escribir código."** Tiene cientos de integraciones listas: Gmail, Google Sheets, Slack, WhatsApp, Telegram, bases de datos y modelos de IA. Ejemplos de para qué sirve: cada mail de consulta se carga en una planilla; cada pedido nuevo avisa por WhatsApp; cada lunes a las 9 llega un reporte; cada mensaje de un cliente lo responde un asistente con IA. El nombre viene de *nodemation* (automatización con nodos).
- **"No-code: todo se resuelve con configuraciones visuales sobre bloques prearmados. Si el bloque no llega a lo que necesitás, quedás trabado."** Herramientas como Zapier o Make son muy fáciles, pero si necesitás algo que el bloque no trae, no hay salida.
- **"Low-code: la misma interfaz visual, pero podés escribir código cuando hace falta. Eso elimina la barrera."** n8n tiene un nodo de código (JavaScript o Python) para esos casos. En el curso casi no lo vamos a usar, pero está.
- **"La idea central: cada nodo es código ya escrito y empaquetado. Vos configurás parámetros, y programás solo si el caso lo pide."** El nodo "Gmail" ya sabe cómo hablar con Gmail; nosotros le decimos qué mail mandar y a quién.
- Un matiz sobre "open source": n8n se define como *fair-code*. El código es público y se puede instalar gratis en una máquina propia, con algunas restricciones comerciales (por ejemplo, revenderlo como servicio).

#### Filmina 19 · Tu instancia: dónde corre n8n (3 min)

<p style="color:#1a7f37">Una instancia es tu n8n funcionando en algún lado: en la nube de n8n, desde el navegador, o instalado en tu máquina o tu servidor, gratis pero a tu cargo.</p>

Para explicar:
- **"Qué es una instancia: una copia de n8n en ejecución corriendo en algún lado. Es el despliegue de la herramienta."** n8n es un programa: para usarlo, tiene que estar corriendo en una computadora. "Tu instancia" es tu copia de ese programa, con tus workflows y tus credenciales.
- **"n8n Cloud: la versión hospedada y gestionada por el equipo de n8n. Es SaaS: entrás desde el navegador y no administrás infraestructura."** SaaS (*Software as a Service*) es como Gmail: no instalás nada, entrás con usuario y contraseña. Es lo más fácil para empezar; es pago después de la prueba gratuita y tiene límites de ejecuciones según el plan.
- **"Self-hosted: la infraestructura es tuya, y la responsabilidad también. Pide saber de redes, bases de datos y Docker."** Lo instalás en tu computadora o en un servidor. Es gratis y sin límite de ejecuciones, y los datos no salen de tu máquina; a cambio, si se cae o hay que actualizarlo, es tu problema. Para que lo usen otras personas o reciba avisos desde internet, tiene que estar en un servidor accesible.
- **"Cómo se instala: en el caso self-hosted, con Node o con Docker."** Node es el entorno que ejecuta JavaScript; con Node instalado, `npx n8n` lo levanta en la computadora. Docker es una herramienta que empaqueta programas con todo lo que necesitan para correr. Contá cuál usan ustedes en el curso.

#### Filmina 20 · JSON: el idioma de los datos dentro de n8n (3 min)

<p style="color:#1a7f37">Los nodos se pasan los datos en JSON: llave y valor. Por eso la semana pasada el prompt devolvía JSON: es el idioma de n8n.</p>

Para explicar:
- **"Qué es: un formato estándar para enviar información entre sistemas."** Es texto, se puede leer a ojo, y casi todas las aplicaciones lo entienden.
- **"Cómo se arma: entre llaves, con pares de 'Llave': 'Valor'. La llave dice qué es, el valor dice cuál."** Mostrá el ejemplo del material: `{"nombre": "Juan", "apellido": "Perez", "id_cliente": 10}`. Los valores pueden ser texto (entre comillas), números o verdadero/falso (`true`/`false`).
- **"La analogía: un pedido a domicilio. Para: Fulano. Contenido: pizzas."** El repartidor no necesita entender la pizza: necesita saber dónde está cada dato.
- **"Por qué importa acá: cada nodo recibe y envía datos en JSON. Es el medio de comunicación entre nodos."** Un detalle útil: en n8n los datos viajan como una lista de "items"; si un nodo recibe cinco mails, recibe cinco items y procesa cada uno. Conectá con la Semana 1: por eso el prompt devolvía JSON, es lo que n8n le puede pasar al nodo siguiente.

#### Filmina 21 · El workflow: el mapa completo de una automatización (2 min)

<p style="color:#1a7f37">Un workflow es el mapa completo de la automatización: cuándo arranca, qué hace y en qué orden. Se guarda como un archivo JSON, así que se puede compartir.</p>

Para explicar:
- **"Qué es: una secuencia organizada de pasos que se ejecutan automáticamente para cumplir un objetivo."**
- **"Define cuándo: comienza el proceso y qué lo dispara."** Ese primer nodo es el **trigger**: puede ser un horario, un mail que llega, un formulario que se completa o un mensaje de WhatsApp.
- **"Define qué: acciones hay que realizar, cómo se conectan entre sí y qué decisiones se toman durante la ejecución."** Las acciones son los nodos que hacen cosas; las conexiones son las flechas; las decisiones son nodos que eligen un camino u otro (los vemos en el Módulo 3).
- **"Cómo se guarda: en un archivo JSON estandarizado con la definición completa del flujo. Por eso se puede exportar y compartir."** Un workflow entero es un archivo de texto: se manda por mail, se sube a un repositorio o se importa en otra instancia.

#### Filmina 22 · Templates: no reinventes la lógica cada vez (2 min)

<p style="color:#1a7f37">No hace falta arrancar de cero: hay miles de templates armados por otros. Se importan, se les conectan tus cuentas y se adaptan.</p>

Para explicar:
- **"Qué es: un workflow completo, con nodos, conexiones y configuración, que alguien armó para un caso de uso concreto."** Ejemplos: mandar un mail cuando entra un lead, resumir noticias con IA, publicar en redes.
- **"Dónde están: en la biblioteca pública de n8n, desde la app o en n8n.io/workflows."** Se busca por caso de uso o por integración.
- **"Cómo se importa: con un clic desde la sección Templates, o cargando un archivo .json con Import from File o Import from URL."**
- **"Reutilizar es: conectar tus propias credenciales, ajustar condiciones y campos, y guardarlo como plantilla interna."** Un cuidado: los templates de la comunidad los arma cualquiera; antes de conectarles tus cuentas, mirá qué hace cada nodo y adónde manda los datos.
- *Lo vemos en vivo después del break.*

#### Filmina 23 · Para recordar: un nodo en rojo (1 min)

<p style="color:#1a7f37">Un nodo en rojo no es que n8n se rompió: es n8n diciéndote qué dato falta. Leer el error es parte del trabajo.</p>

Para explicar: **"Un nodo en rojo no significa que n8n esté roto. El error es información: te está diciendo
qué dato falta o qué campo no encontró. Leerlo es parte del trabajo."** Los errores más comunes al empezar:
un campo que no existe, un dato que llega vacío, una credencial que no tiene permiso. El mensaje casi siempre
dice cuál de los tres es.

---

### 50–60 · Break

**Filmina 24 · Break**

<p style="color:#1a7f37">Diez minutos de break. Cuando volvemos, abrimos n8n.</p>

---

### 60–100 · Sección 04 · n8n en vivo: cómo se usa

**Filmina 25 · Separador "04"** — pasarla y quedate con la **filmina 26** de fondo mientras compartís tu

<p style="color:#1a7f37">Ahora n8n en vivo: les muestro cómo se usa.</p>
instancia.

**Filmina 26 · Ejemplo en vivo.** Dice: *"Desafío de priorización. El profe pone tres casos en pantalla y el

<p style="color:#1a7f37">Vamos a recorrer la interfaz, mirar un template real, armar un flujo desde cero y romperlo a propósito para leer el error. Después lo hacen ustedes.</p>
grupo vota (ya lo hicimos en la sección de ROI). Después construimos juntos un flujo mínimo en n8n y lo
rompemos a propósito para leer el error."* Este bloque lo amplía con un recorrido por la interfaz y un
template real.

> Pasos detallados de cada demo en `ejercicios-docente.md`, sección "n8n en vivo".

#### 60–70 · Recorrido por la interfaz (10 min)

| Qué mostrar | Para explicar |
|---|---|
| La pantalla de inicio con la lista de workflows | Acá vive todo lo que armen. Cada workflow se puede exportar como `.json`. |
| Dónde están las **credenciales** | Son las llaves para que n8n entre a Gmail, Sheets o una IA en tu nombre. Se cargan una vez y se reutilizan en todos los workflows. Las vemos a fondo en el Módulo 4. |
| Un workflow nuevo y el **buscador de nodos** | Hay **triggers** (lo que arranca el flujo) y **acciones** (lo que hace). Todo workflow que corre solo necesita al menos un trigger. |
| Un nodo abierto | Parámetros por un lado; entrada y salida por el otro. La salida tiene vista **Table** y vista **JSON**: es el JSON de la filmina 20. |
| Guardar, ejecutar y el interruptor para activarlo | Ejecutar a mano sirve para probar. Para que corra solo hace falta un trigger real y activarlo. |
| **Executions** | El historial de cada corrida, con su estado. Es lo primero que se mira cuando algo falla. |

#### 70–80 · Para qué sirve: un template real (10 min)

1. Entrá a **n8n.io/workflows** y mostrá cómo se busca por caso de uso o por integración.
2. **Importá el template** que elegiste.
3. **Leelo en voz alta, nodo por nodo:** ¿cuál es el trigger? ¿dónde está la IA? ¿dónde termina el dato?
4. Mostrá lo que habría que adaptar: los avisos de **credenciales** faltantes y los campos que dependen del caso.
- *"Esto es para lo que sirve n8n. Al final del curso ustedes arman uno así desde cero."*

#### 80–88 · El flujo mínimo, construido desde cero (8 min)

1. Workflow nuevo → **Manual Trigger**: un trigger que se dispara con un botón, para probar.
2. **Edit Fields (Set)** con dos campos: `nombre` = "Martín Gómez" y `destino` = "Bariloche". Ejecutalo y mostrá la salida: es un JSON con esas dos llaves.
3. Otro **Edit Fields** con `saludo`: escribí "Hola " y **arrastrá** el campo `nombre` desde la entrada. Mostrá que n8n escribe solo la expresión `{{ $json.nombre }}`: quiere decir "el campo nombre del JSON que llega". Eso es **mapear** un dato de un nodo al siguiente.
4. Ejecutalo: sale "Hola Martín Gómez".

#### 88–92 · Romperlo y leer el error (4 min)

- Cambiá la expresión de `saludo` por un campo que no existe: `{{ $json.email.toUpperCase() }}`. El nodo queda en rojo.
- **Leé el error en voz alta:** dice que no encuentra el dato que pediste. Después mirá la corrida fallida en **Executions**.
- *"Un nodo en rojo no es un problema de n8n: es n8n diciéndote qué arreglar."*

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
- **"Listar tres tareas manuales y repetitivas de tu trabajo, tu estudio o tu vida diaria."** Tres, para poder comparar y elegir.
- **"Descartar las de baja frecuencia: si pasa una vez al año, el ROI va a ser negativo."**
- **"Quedarnos con la de alta frecuencia y bajo juicio humano."** Ejemplo: cargar las consultas que llegan por mail.
- **"Resultado esperado: un proceso elegido y descrito en dos o tres líneas."**

#### Filmina 28 · Paso 2: el ROI (1,5 min)

<p style="color:#1a7f37">Paso 2: el ROI. Cuánto tarda, cada cuánto pasa, qué harían con ese tiempo y si escala. Y una razón para no automatizarlo.</p>

Para explicar:
- **"Estimar cuánto tiempo te lleva hoy hacerlo a mano y con qué frecuencia se repite."** En el ejemplo: 40 consultas por semana × 5 minutos = unas 13 horas por mes.
- **"Preguntarte qué harías con ese tiempo: ese es el costo de oportunidad."**
- **"Chequear si sigue teniendo sentido cuando el volumen se multiplique por diez."** Si con diez veces más trabajo sin automatizar haría falta otra persona, la automatización escala.
- **"Resultado esperado: dos o tres líneas que argumentan por qué automatizarlo, y por qué no."** El "por qué no" es importante: muestra que se pensó.

#### Filmina 29 · Paso 3: el boceto (2 min)

<p style="color:#1a7f37">Paso 3: el boceto. Qué lo dispara, los pasos del medio, dónde entra la IA y dónde termina el dato.</p>

Para explicar:
- **"Definir el disparador: ¿arranca por un evento o por horario?"** Evento: llega un mail, se completa un formulario. Horario: todos los lunes a las 9.
- **"Listar los pasos intermedios y marcar en cuál entra el nodo de IA."**
- **"Definir el output final: dónde termina el dato y en qué formato."**
- En el ejemplo: Gmail Trigger → nodo de IA → Google Sheets. *"Eso es un workflow como el del template que acabamos de ver."*

#### Filmina 30 · Paso 4: el prompt (1,5 min)

<p style="color:#1a7f37">Paso 4: el prompt del nodo de IA, con la anatomía de la semana pasada y las llaves del JSON.</p>

Para explicar:
- **"Aplicar la anatomía del módulo 1: persona, contexto, tarea y formato."**
- **"Declarar las llaves exactas del JSON que el nodo tiene que devolver."**
- **"Descartar cualquier versión vaga tipo 'resumime esto': eso no alcanza."**
- En el ejemplo: la plantilla de la Semana 1, tal cual.

#### Filmina 31 · Paso 5: los riesgos (1,5 min)

<p style="color:#1a7f37">Paso 5: un riesgo, como una alucinación o un dato ambiguo, y cómo lo evitan desde el prompt o desde el flujo.</p>

Para explicar:
- **"Elegir un riesgo del módulo 1: alucinación, límite de contexto o ambigüedad."** Ambigüedad: el mensaje se puede entender de dos formas (por ejemplo, "el 12" sin decir de qué mes).
- **"Escribir cómo lo mitigás desde el prompt o desde el diseño del flujo."** Desde el prompt: prohibir inventar, `no_disponible`. Desde el flujo: si un dato clave falta, la fila se marca "a revisar" para que la vea una persona.
- **"Juntar las cinco partes en un solo documento."**

---

### 108–115 · Sección 05 · Pre-entrega

**Filmina 32 · Separador "05"** — pasarla.

<p style="color:#1a7f37">Esto que acabamos de ver es la pre-entrega.</p>

#### Filmina 33 · ¿De qué se trata? Diseñar, todavía no construir (1 min)

<p style="color:#1a7f37">La pre-entrega es diseñar, no construir: una automatización con un paso de IA, por qué vale la pena y el prompt que la hace funcionar.</p>

Para explicar: **"El objetivo: diseñar una automatización simple que use un paso de IA. No hace falta que
funcione todavía. Lo que sí hace falta: justificar por qué vale la pena y cómo sería el prompt."** Las cinco
partes (proceso, ROI, boceto, prompt y reflexión) **son exactamente los cinco pasos que acabamos de ver**.

#### Filmina 34 · Tu misión (1 min)

<p style="color:#1a7f37">Les lleva entre 60 y 90 minutos. Un documento corto: no importa el diseño, importa que el proceso, el ROI y el prompt cuenten la misma historia.</p>

Para explicar: **"Duración estimada: entre 60 y 90 minutos. Un documento corto con las cinco partes. No se
evalúa la prolijidad del diseño. Sí la coherencia entre el proceso que elegiste, el ROI que argumentás y el
prompt que proponés."** Coherencia quiere decir que cuenten la misma historia: si el proceso es "clasificar
reseñas", el prompt tiene que clasificar reseñas y el ROI tiene que hablar de cuántas reseñas llegan.

#### Filmina 35 · Los pasos (1 min) — las cinco partes de la entrega, en orden.

<p style="color:#1a7f37">Son cinco partes: proceso, ROI, boceto, prompt y riesgos. Los mismos cinco pasos de recién.</p>

#### Filmina 36 · ¿Cómo se evalúa? (2 min)

<p style="color:#1a7f37">Se evalúa la coherencia, el ROI con tiempo y frecuencia, un boceto claro, un prompt completo y un riesgo bien pensado. El boceto es lo que más pesa.</p>

Para explicar cada criterio:
- **Coherencia:** proceso, ROI y prompt cuentan la misma historia.
- **Justificación del ROI:** tiempo, frecuencia y escalabilidad, y una razón para no automatizarlo.
- **El boceto:** se entiende qué dispara el flujo, dónde entra la IA y dónde termina el dato.
- **El prompt:** contexto claro, instrucción específica y formato de salida.
- **La reflexión:** un riesgo real de cómo procesa texto un LLM y su mitigación.

Mostrá también los pesos de la rúbrica del programa (en `ejercicios-alumnos.md`): **el boceto del flujo vale
40 %** y el prompt 30 %.

#### Filmina 37 · ¿Cómo sigue? Del boceto al flujo que corre (2 min)

<p style="color:#1a7f37">La semana que viene vemos los nodos que deciden caminos y juntan datos. Lo que hoy escribieron como lista se va a convertir en nodos reales.</p>

Para explicar:
- **"Lo que ya tenés: una automatización diseñada, con su justificación y el prompt del nodo de IA escrito."**
- **"Módulo 3: conceptos básicos. La anatomía de un workflow y los nodos principales: IF, Switch, Merge, Wait."** IF y Switch eligen un camino según una condición; Merge junta datos que vienen de dos caminos; Wait pausa el flujo un tiempo.
- **"La conexión: los pasos intermedios que hoy escribiste en una lista se van a convertir en nodos reales."**
- **"Para llevar: el boceto de hoy es el plano. El módulo 3 te entrega las piezas."**

---

### 115–120 · Preguntas y cierre

**Filmina 38 · ¿Preguntas?** (3 min) — las tres de la filmina: el mapeo de datos entre un nodo y el siguiente,

<p style="color:#1a7f37">¿Dudas con n8n, con el ROI o con algún error rojo? Micrófono o chat.</p>
si su proceso pasa el filtro de alta frecuencia y bajo juicio humano, y algún error rojo que no sepan leer.

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
