# Semana 3 — Módulo 3: Conceptos básicos

Fuente: `program-summary.pdf` (Módulo 3). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_3_AI_Automation.pptx` | Las filminas del módulo (33). |
| `Semana 3.docx` | El material de lectura del módulo, con el cuestionario de 5 preguntas, el podcast y las actividades sugeridas. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase y para casa, con el paso a paso de la práctica en vivo. Se comparte con los alumnos. |
| [n8n/](n8n/) | Cuatro workflows listos para importar: el IF del paso 2, el flujo completo de la práctica, el desafío del Merge congelado y el "detective de datos". |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, qué pasa en cada flujo y las trabas comunes. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿Trigger, action o transform? | 3 min |
| En clase | 2 · Detective de datos | 5 min |
| En clase | 3 · ¿Dos IF o un Switch? | 4 min |
| En clase | 4 · Tu primer flujo con lógica (lo arman a la par del profe) | 35 min |
| Casa | 5 · Rearmalo desde cero, sin mirar la grabación | 30 min |
| Casa | 6 · Desafío: una cuarta ruta y la salida por defecto | 15 min |
| Casa | 7 · Taller de diseño: el formulario por país | 15 min |
| Casa | 8 · Predicción: ¿qué sale de cada nodo? | 10 min |

## Evaluación

- **Esta semana no hay pre-entrega.** Es un módulo de fundamentos. Lo que sí: guardar el `.json` del flujo de
  hoy, porque en el Módulo 4 le vamos a conectar datos reales.
- Cuestionario del módulo en la plataforma (5 preguntas, 15 minutos, se aprueba con 70 %).

## A tener en cuenta

- **En la teoría hay bloques "En n8n, paso a paso"**: al presentar cada nodo, los clics para agregarlo y configurarlo con un ejemplo de la clase. Están pensados para mostrarlos en tu n8n en un minuto mientras lo contás. Si vas corto de tiempo, pegá el bloque en el chat y seguí: en la práctica lo hacen completo.
- **"Un Edit Field que simule cinco consultas" (filmina 25) no alcanza solo.** En n8n 2.46, Edit Fields devuelve un
  item por cada item que le llega: con el trigger manual, uno solo. Por eso la práctica usa dos nodos: un Edit
  Fields en modo JSON con la lista de las cinco consultas, y un **Split Out** ("separar") que la parte en cinco
  items. Está probado y explicado en el Paso 1.
- **El "flujo congelado en el Merge" (filminas 21, 24 y 28) depende del modo del Merge.** Lo probé en n8n 2.46:
  - en modo **Append** (el que viene por defecto), si una rama llega vacía el Merge sigue con lo que tiene: **no se
    congela**;
  - en modo **Combine** (por posición o por campos), si una rama llega vacía devuelve **cero items**, y los nodos
    que siguen no se ejecutan. No hay error: el flujo "termina" y el mail nunca se arma. Esto es lo que se ve como
    "congelado";
  - en modo **Choose Branch**, el Merge espera las dos ramas y, si una no llega, ni siquiera se ejecuta.
  El workflow `03` reproduce el caso con Combine. En el guion se explica así, que es lo que van a ver en pantalla.
- **Las filminas usan dos clasificaciones de nodos.** La 8 los divide en *trigger, action y transform* (y pone IF y
  Switch dentro de transform); la 20 habla de nodos "de acción" y "de control". No se contradicen: el guion lo
  aclara en la filmina 20. En el panel de n8n, IF, Switch, Merge y Wait aparecen en la categoría **Flow** ("flujo")
  y Edit Fields, Aggregate y Split Out en **Data transformation** ("transformar datos").
- **El material de lectura nombra el nodo Filter**, que las filminas no tienen. Va como "Para ampliar" en la
  Sección 02.
- **Las actividades del material de lectura** (rompehielo, detective de datos, taller de diseño en grupos de 40
  minutos) están adaptadas al tiempo de la clase: el rompehielo y el detective van en clase, cortos; el taller de
  diseño pasa a casa (Ejercicio 7).
- **Los alumnos tienen que tener n8n prendido** antes de empezar. Los que lo instalaron con Docker la semana pasada:
  Docker Desktop → Containers → ▶ en n8n.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–10 | Apertura, repaso de la Semana 2 y rompehielo | 1–5 | El nodo misterioso (2 min) |
| 10–28 | **01 · Anatomía de un workflow** | 6–11 | Ej. 1 (3 min) y Ej. 2 (5 min) |
| 28–60 | **02 · Los nodos principales** | 12–21 | Ej. 3 (4 min) |
| 60–70 | Break | 22 | |
| 70–75 | **03 · Desafío de diagnóstico:** el flujo que se congela | 23–24 | Votan por el chat |
| 75–110 | **03 · Práctica en vivo:** el flujo de consultas, en cinco pasos | 25–29 | Ej. 4: lo arman a la par |
| 110–116 | Para practicar y cómo sigue | 30–31 | |
| 116–120 | Preguntas y cierre | 32–33 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden: el "Para ampliar" del nodo Filter, el rompehielo, el Ejercicio
1 (se lee la respuesta y listo), las ramas del IF en el Paso 2 (se muestra el IF y se pasa al Switch), el Wait y la
exportación del Paso 5 (pasan a casa, con el Ejercicio 5). Lo último que se recorta es el Switch y el Merge: son el
corazón de la clase.

---

### Preparación (antes de la clase)

- [ ] **Tu n8n prendido y logueado.** Probá antes la práctica entera (Pasos 1 a 5) en un workflow nuevo.
- [ ] **Los workflows importados** (carpeta [n8n/](n8n/), probados en n8n 2.46). Workflow nuevo → menú **…**
  arriba a la derecha → **Import from File** → **Save**:
  - `01-consultas-if.json`: el flujo hasta el Paso 2 (el IF con sus dos ramas). Plan B si algo no sale en vivo.
  - `02-consultas-con-logica.json`: el flujo completo, Pasos 1 a 5. Plan B y lo que se muestra si se va el tiempo.
    Ejecutalo una vez: tiene que terminar en **Mail de resumen (simulado)** con el texto de las cinco consultas.
  - `03-desafio-merge-congelado.json`: el desafío de la filmina 24. Ejecutalo una vez para ver que se corta en el
    Merge.
  - `04-detective-de-datos.json`: el Ejercicio 2. Ejecutalo: los cinco items tienen que ir por *false*.
- [ ] **Una pestaña por flujo**, para pasar de uno a otro rápido: el 04 (Sección 01), el 03 (después del break) y
  un workflow vacío para la práctica.
- [ ] **Los bloques para pegar en el chat** (están en el guion, en cada paso): conviene tenerlos en un bloc de
  notas.
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) listo para compartir.
- [ ] **El día anterior**, avisales: "Mañana armamos un flujo en n8n. Entren con la computadora y, antes de la clase,
  prendan n8n: Docker Desktop → Containers → ▶". Al que no le anduvo la instalación: que mire la Semana 2,
  Ejercicio 8, o que siga la práctica en tu pantalla.
- [ ] Avisar que la clase queda grabada.

---

### 0–10 · Apertura, repaso de la Semana 2 y rompehielo

**Filmina 1 · Portada** (1 min) — Módulo 3: Conceptos básicos.

<p style="color:#1a7f37">Bienvenidos al Módulo 3. La semana pasada conocimos n8n, lo instalamos y armamos un flujo de tres nodos. Hoy conocemos las piezas que hacen que un flujo tome decisiones solo, y al final de la clase van a tener uno funcionando.</p>

Para explicar:
- **"Conceptos básicos".** El nombre suena a poco, pero es la clase más importante para todo lo que viene. Hasta
  ahora, nuestros flujos eran una fila de nodos: el dato entra por un lado, pasa por cada nodo y sale por el otro,
  siempre por el mismo camino. Hoy aprendemos a hacer que el flujo **decida**: que mande cada dato por un camino
  distinto según lo que dice, que los vuelva a juntar y que los resuma. Con eso se arma el 80 % de las
  automatizaciones reales. Los nodos de hoy (IF, Switch, Merge, Aggregate) van a aparecer en todos los flujos que
  armemos de acá al final del curso.
  - *Ejemplo:* La agencia de viajes recibe consultas. Hasta hoy, el flujo hacía lo mismo con todas. Desde hoy, puede
    hacer "si es un paquete, que lo vea el área de paquetes; si es un vuelo, el área de vuelos; y a la mañana, un
    solo mail con el resumen de todo".

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a conocer los tres tipos de nodos, a leer un nodo por dentro, a elegir entre IF y Switch, a juntar datos con Merge y Aggregate, y a armar un flujo completo con lógica.</p>

Para explicar cada objetivo:
- **"Identificar los tres tipos de nodo según su función: trigger, action y transform."** Son tres palabras en
  inglés que vamos a usar todo el tiempo. **Trigger** es "disparador": el nodo que hace arrancar el flujo. **Action**
  es "acción": un nodo que hace algo en otra aplicación, como mandar un mail. **Transform** es "transformar": un
  nodo que trabaja con los datos sin salir de n8n, como ordenarlos o decidir por dónde van. Saber de qué tipo es
  cada nodo ayuda a leer cualquier flujo, incluso uno que armó otra persona.
  - *Ejemplo:* En "llega un mail → la IA lo lee → si es un reclamo, se avisa a soporte", el trigger es "llega un
    mail", la decisión "si es un reclamo" es transform, y "avisar a soporte" es action.
- **"Leer la anatomía visual de un nodo y sus conexiones para seguir el recorrido de los datos."** **Anatomía**
  es una palabra de la medicina: las partes del cuerpo. Acá, las partes de un nodo: el ícono, el nombre, los
  puntitos de entrada y de salida, el color. Saber leerlas es saber, de un vistazo, por dónde pasó el dato y
  dónde se trabó. Es la primera herramienta para encontrar errores.
  - *Ejemplo:* Un flujo con cinco nodos verdes y uno gris: sin abrir nada, ya sabemos que el dato llegó hasta el
    quinto y no pasó al sexto.
- **"Elegir entre IF y Switch según la cantidad de caminos posibles."** Los dos sirven para que el flujo decida.
  **IF** (en inglés, "si") tiene dos caminos: sí o no. **Switch** (en inglés, "interruptor" o "selector", como el
  de una consola que elige el canal) tiene los caminos que haga falta. Elegir bien hace que el flujo se entienda;
  elegir mal hace que se vuelva un enredo.
  - *Ejemplo:* "¿El pago se acreditó?" tiene dos respuestas: IF. "¿De qué provincia es el cliente?" tiene 24:
    Switch.
- **"Consolidar datos con Aggregate y reunir ramas separadas con Merge."** **Consolidar** es juntar muchas cosas
  sueltas en una sola. **Aggregate** ("agrupar") junta muchos datos en un paquete. **Merge** ("unir") junta dos
  caminos que se habían separado. Son los nodos que permiten, por ejemplo, mandar un solo mail con todo en vez
  de veinte mails sueltos.
  - *Ejemplo:* En vez de recibir un mail por cada consulta del día (cuarenta mails), la dueña recibe uno a la mañana
    con las cuarenta en una lista.
- **"Construir un workflow completo con lógica de control y dejarlo documentado."** **Lógica de control** quiere
  decir que el flujo controla por dónde va cada dato: decide, separa, junta, espera. **Documentado** es que
  tenga nombres claros y una nota que explique qué hace, para que cualquiera (incluso vos dentro de tres meses)
  lo entienda sin adivinar. Es lo que armamos en la segunda hora.
  - *Ejemplo:* Un flujo con nodos que se llaman "Edit Fields1", "Edit Fields2" e "If3" no se entiende. El mismo
    flujo con "Consultas de prueba", "¿Más de USD 10.000?" y "Asignar a gerencia" se lee como un cuento.

**Filmina 3 · Agenda** (2 min)

<p style="color:#1a7f37">Les cuento el recorrido de hoy, así saben a dónde vamos. Primero, dónde quedamos: el boceto que hicieron la semana pasada y cómo se convierte en piezas de n8n. Después, la anatomía de un workflow: cómo se lee un flujo y cómo viajan los datos entre los nodos. Después, los nodos que más van a usar: los que preparan los datos, los que deciden, los que juntan y el que espera. Break. Y en la segunda hora, la práctica: cada uno arma en su n8n un flujo que reparte las consultas de una agencia y manda un solo resumen. Cerramos con qué practicar en casa y qué viene la semana que viene.</p>

<p style="color:#1a7f37">La idea es simple: en la primera hora conocemos las piezas, y en la segunda las usamos todas juntas en un mismo flujo.</p>

Para explicar (cada punto, adelantando qué van a hacer en esa parte):
- **"Dónde quedamos: del boceto a las piezas."** Unos minutos para conectar con la pre-entrega: el boceto que
  escribieron ya tenía, sin saberlo, decisiones y resúmenes. Hoy les ponemos nombre de nodo.
  - *Ejemplo:* "Si es urgente, avisar al dueño" del boceto de alguien va a terminar siendo un IF.
- **"Anatomía de un workflow: nodos y conexiones."** Aprendemos a **leer** un flujo antes de armarlo: los tres tipos
  de nodos (el que arranca, el que transforma y el que actúa), las partes de un nodo cuando lo abrís, y qué quieren
  decir los colores y los números sobre las flechas. Acá hacen dos ejercicios cortos: clasificar nodos en trigger,
  action o transform, y hacer de detectives con un IF que manda todas las consultas por el camino equivocado sin dar
  error.
  - *Ejemplo:* Van a ver un flujo con un nodo gris y, sin abrir nada, decir hasta dónde llegaron los datos.
- **"Los nodos que más vas a usar."** Una recorrida por seis nodos, uno por uno, con un ejemplo cada uno: **Edit
  Fields** (preparar los datos), **IF** y **Switch** (decidir), **Merge** y **Aggregate** (juntar) y **Wait**
  (esperar). En el medio, un ejercicio para elegir entre IF y Switch. Y acá aparece la respuesta al nodo misterioso
  del rompehielo.
  - *Ejemplo:* "¿Pago acreditado?" → IF. "¿De qué provincia?" → Switch. "Un solo mail con todo" → Aggregate.
- **"Break."** Diez minutos. A la vuelta, con n8n abierto: el resto de la clase es práctica.
- **"Práctica en vivo: tu primer flujo con lógica."** Arranca con un desafío: un flujo que "se congela" sin dar
  error, y entre todos encontramos por qué. Después cada uno arma, a la par mía y en cinco pasos, el flujo de
  consultas de la agencia: cinco consultas inventadas, un IF, un Switch que manda cada una a su área, un Merge que
  vuelve a juntar, y un Aggregate con un Wait para el resumen final.
  - *Ejemplo:* Entran cinco consultas (paquetes, vuelos, hoteles y una de crucero) y sale un solo mensaje que dice
    cuántas fueron a cada área.
- **"Para practicar y cierre."** Qué ejercicios hacer en casa (esta semana no hay pre-entrega), un adelanto de la
  semana que viene, cuando el flujo deje de usar datos inventados y empiece a hablar con internet, y las preguntas.
  - *Ejemplo:* El mismo flujo de hoy, la semana que viene, va a recibir consultas de un formulario real.

Si vas justo de tiempo, alcanza con decir los dos textos en verde. El resto lo vas retomando al empezar cada parte.

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 2** (3 min, sin filmina) — antes de pasar a la filmina 5.

<p style="color:#1a7f37">Repasemos rápido lo de la semana pasada, porque hoy lo usamos todo.</p>

<p style="color:#1a7f37">Primero: automatizar es que la computadora haga sola las tareas repetitivas. Hay automatizaciones lineales, con reglas fijas, y cognitivas, con un paso donde decide una IA.</p>

<p style="color:#1a7f37">Segundo: no todo conviene automatizarlo. Miramos el ROI, la frecuencia y el costo de oportunidad.</p>

<p style="color:#1a7f37">Tercero: n8n arma las automatizaciones con nodos, que son bloques que hacen una sola cosa, unidos con flechas. Todo el flujo es un workflow, y los nodos se pasan los datos en JSON, la ficha con casilleros.</p>

<p style="color:#1a7f37">Y cuarto: armamos un flujo de tres nodos, aprendimos a mapear un dato con las llaves dobles, y vimos dos errores: el rojo, que avisa, y el silencioso, que no avisa. Hoy vamos a ver otro error silencioso, más difícil de encontrar.</p>

Para explicar:
- **Lineal y cognitiva.** Hoy los flujos van a ser lineales: decisiones con reglas fijas ("si el monto es mayor a
  10.000"). La IA vuelve en los módulos siguientes, y cuando vuelva va a estar en el medio de flujos como los de
  hoy: la IA lee el mail, y después un Switch decide por dónde sigue.
  - *Ejemplo:* La IA clasifica un mail como "reclamo" y un Switch lo manda a soporte. La IA entiende; el Switch
    reparte.
- **Mapear un dato.** Las llaves dobles `{{ $json.nombre }}` quieren decir "andá a buscar el casillero nombre de la
  ficha que llega". Hoy lo vamos a usar en cada IF y en cada Switch: para decidir, el nodo tiene que mirar un
  casillero.
  - *Ejemplo:* Un IF que pregunta "¿el monto es mayor a 10.000?" mira `{{ $json.monto }}`.
- **El error silencioso.** La semana pasada, pedir un casillero que no existía daba un saludo vacío, sin error. Hoy
  vamos a ver lo mismo en un IF: si el casillero no existe, el IF no se queja y manda todo por el "no".
  - *Ejemplo:* `Hola {{ $json.email }}` daba `Hola `, en verde. Hoy, un IF con un casillero mal escrito manda las
    cinco consultas por el mismo camino, en verde.

**Rompehielo: el nodo misterioso** (2 min, sin filmina) — antes de la filmina 5.

<p style="color:#1a7f37">Una pregunta para arrancar, respondan en el chat con un número: entran cinco consultas a un nodo que se llama Aggregate. ¿Cuántas salen?</p>

Esperás las respuestas. Van a aparecer 5, 1 y alguna otra. Elegís dos distintas y preguntás por qué. No decís la
respuesta:

<p style="color:#1a7f37">Guarden su respuesta. A la mitad de la clase lo vemos, y a la hora de la práctica lo comprobamos en n8n.</p>

(La respuesta es 1: Aggregate junta los cinco items en uno solo, con una lista adentro. Se revela en la filmina 17.)

**Filmina 5 · ¿Dónde quedamos? Del boceto a las piezas reales** (3 min)

<p style="color:#1a7f37">La semana pasada bocetaron una automatización: qué la dispara, qué pasos tiene, dónde entra la IA. Era un plano. Hoy conocemos las piezas con las que se construye ese plano, y al final de la clase van a tener un flujo que corre de punta a punta y decide solo.</p>

Para explicar:
- **"En el módulo 2: bocetaste una automatización: qué la dispara, qué pasos tiene y dónde entra la IA."** Es la
  pre-entrega. El boceto era una lista de pasos o un dibujo con cajitas y flechas: "llega un mail → la IA extrae los
  datos → se guarda en la planilla". Ese boceto ya tiene, sin saberlo, los tres tipos de nodos que vemos hoy: algo
  que dispara, algo que transforma y algo que actúa.
  - *Ejemplo:* El boceto de la agencia: "1. Llega un mail. 2. La IA extrae los datos. 3. Se agrega una fila en la
    planilla". El 1 es un trigger, el 2 transforma y el 3 es una acción.
- **"Lo que era: una lista de pasos en un documento. Un plano."** Como el plano de una casa: dice dónde va cada
  cosa, pero todavía no tiene ladrillos. Muchos bocetos tienen frases como "si es urgente, avisar al dueño" o "a
  la mañana, mandar un resumen": son decisiones y resúmenes, y hasta hoy no sabíamos con qué nodo se hacían.
  - *Ejemplo:* En el boceto de una pastelería: "si el pedido es para el mismo día, avisar por WhatsApp; si no,
    anotarlo en la planilla". Esa frase es un IF.
- **"Hoy: conocemos las piezas con las que se construye ese plano y las armamos en el canvas."** **Canvas** es
  "lienzo" en inglés: la pantalla tipo pizarrón de n8n donde se ponen los nodos. Las piezas son los nodos de
  hoy: Edit Fields para preparar los datos, IF y Switch para decidir, Merge y Aggregate para juntar, Wait para
  esperar.
  - *Ejemplo:* La frase "a la mañana, mandar un resumen" se arma con un Aggregate (juntar todo en uno) y una acción
    (mandar el mail).
- **"Al final de la clase: vas a tener un workflow que corre de punta a punta y toma decisiones solo."** "De
  punta a punta" quiere decir desde el trigger hasta el último nodo, sin que nadie toque nada en el medio. Va a
  usar datos inventados (cinco consultas de prueba); en el Módulo 4 le conectamos datos reales.
  - *Ejemplo:* Cinco consultas entran, cada una va a su área según el tipo, y sale un solo mensaje de resumen.

Que uno o dos lean en una línea el boceto de su pre-entrega. Preguntá: *"¿Tiene alguna decisión, algún 'si pasa
esto, hacé aquello'?"*. Casi todos van a tener una: es lo que aprendemos hoy.

---

### 10–28 · Sección 01 · Anatomía de un workflow

**Filmina 6 · Separador "01"** — pasarla.

<p style="color:#1a7f37">Empecemos por cómo está hecho un workflow por dentro.</p>

#### Filmina 7 · El workflow: una secuencia de nodos conectados (3 min)

<p style="color:#1a7f37">Un workflow es una secuencia de pasos automáticos, dibujada como nodos unidos con líneas. Resuelve una tarea concreta. Cada nodo es la pieza más chica: una acción, una condición o un disparador.</p>

Para explicar:
- **"Qué es: la secuencia de pasos automatizados, representada visualmente como un diagrama de nodos
  conectados."** **Secuencia** es un orden: primero esto, después aquello. **Diagrama** es un dibujo que explica
  algo con cajas y líneas, como el de un organigrama. n8n muestra la automatización así, dibujada, en vez de
  escrita como código: se ve de un golpe qué pasa primero y qué después. Por eso se dice que n8n es una
  herramienta **visual**.
  - *Ejemplo:* Una receta escrita ("1. batir los huevos, 2. agregar el azúcar, 3. hornear") es una secuencia. El
    mismo proceso dibujado con tres cajitas y flechas es un diagrama. n8n es el dibujo.
- **"Qué resuelve: una tarea concreta. Desde enviar un email cuando llega un formulario hasta sincronizar datos
  entre dos sistemas."** Un buen workflow hace **una** cosa bien. **Sincronizar** es mantener dos lugares con los
  mismos datos: si cambia uno, cambia el otro. Un **sistema**, en este contexto, es cualquier aplicación que guarda
  datos: una planilla, una tienda online, un CRM. (**CRM** es la sigla en inglés de "gestión de la relación con
  clientes": el programa donde una empresa anota sus clientes y sus ventas.)
  - *Ejemplo:* Simple: "cada formulario de contacto, mandame un mail". Más grande: "cada venta de la tienda online,
    copiala al CRM y actualizá el stock en la planilla".
- **"El nodo: es la unidad mínima de trabajo. Cada uno representa una acción, una condición o un disparador."**
  **Unidad mínima** quiere decir la pieza más chica, la que no se divide. Como un ladrillo en una pared. Cada nodo
  hace una sola cosa, y el trabajo grande se arma juntando muchos nodos chicos. Una **condición** es una pregunta
  que se responde con sí o no: "¿el monto es mayor a 10.000?".
  - *Ejemplo:* "Recibir el formulario" es un nodo (disparador). "¿Es de Buenos Aires?" es otro (condición).
    "Mandar el mail" es otro (acción).
- **"Lo que miramos hoy: qué tipos hay, cómo se lee uno por dentro y cómo se conectan entre sí."** Es la agenda
  de esta sección: los tipos (filmina 8), la anatomía (filmina 9) y las conexiones (filmina 10).
  - *Ejemplo:* Al final de la sección, deberían poder mirar un flujo que no armaron y decir: "esto arranca acá,
    decide acá y termina acá".

**Una regla de oro: un nodo, una tarea.** El material de lectura lo dice así. Si un paso del boceto tiene un "y" en
el medio ("leer el mail **y** guardarlo"), son dos nodos.

**Ejemplo: cómo se describe un workflow**

❌ Mal: todo en un paso, imposible de armar.

```text
1. Que lleguen los pedidos y se ordenen y se le avise a cada uno.
```

✅ Bien: un nodo por paso.

```text
1. Llega un pedido nuevo (trigger).
2. ¿Es para el mismo día? (condición: IF).
3. Sí → avisar por WhatsApp (acción).
4. No → agregar una fila en la planilla (acción).
```

Por qué: el segundo se puede armar en n8n tal cual, nodo por nodo. El primero hay que volver a pensarlo.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Crear un workflow y agregarle nodos
1. Pantalla de inicio → botón Create Workflow (arriba a la derecha)
   (o el + del menú de la izquierda → Workflow)
2. Arriba a la izquierda, clic en el nombre ("My workflow") → escribí: Consultas de la agencia
3. En el medio del lienzo: Add first step → buscá "manual" → Trigger manually
4. Para el nodo siguiente: el + que aparece a la derecha del primero → buscá el nodo → clic
5. Ctrl + S para guardar
```

Lo que se ve: dos cajitas unidas por una línea. Eso es un workflow: nodos (las cajitas) y conexiones (las
líneas). El + de la derecha de cada nodo es la forma más rápida de agregar el siguiente, porque ya lo deja
conectado.

#### Filmina 8 · Tipos según su función: trigger, action, transform (4 min)

<p style="color:#1a7f37">Hay tres tipos de nodos. El trigger arranca el flujo y siempre va primero. Las acciones hacen algo en otra aplicación. Y los de transformación trabajan con los datos adentro de n8n, sin conectarse a nada externo.</p>

Para explicar:
- **"Trigger: inician la ejecución del workflow: un webhook, el evento de una app, una ejecución manual. Siempre
  están al principio."** **Ejecución** es cada vez que el flujo corre. El trigger es lo que la provoca. Puede ser
  un **webhook** (un aviso automático que manda otra aplicación: "entró un pedido"), un **evento de una app**
  ("llegó un mail a Gmail") o una ejecución manual (el botón que apretamos para probar). Hay uno más que
  menciona el podcast del material: el **Schedule** ("horario"), que arranca el flujo a una hora fija. Siempre va
  al principio porque es la respuesta a "¿cuándo arranca esto?". Sin trigger, el flujo no arranca nunca solo.
  - *Ejemplo:* Webhook: la tienda online avisa "entró una compra". Evento de una app: "llegó un mail nuevo a
    Gmail". Schedule: "todos los lunes a las 9". Manual: el botón *Execute workflow*.
- **Cómo elegir el trigger** (del podcast del material): depende de **quién tiene la iniciativa**. Si el flujo
  tiene que arrancar porque pasó algo afuera (alguien llenó un formulario), es un webhook o el evento de una app:
  "dejar la puerta abierta esperando una visita". Si arranca porque vos lo decidiste (todos los lunes), es un
  Schedule: "poner una alarma en el despertador".
  - *Ejemplo:* "Cuando alguien compra, avisame": lo decide el cliente, es un webhook. "Mandame las ventas de la
    semana el lunes": lo decidís vos, es un Schedule.
- **"Action: ejecutan una tarea concreta: crear un registro, enviar un mensaje, actualizar una fila."** Son los
  nodos que **hacen** algo en otra aplicación. Un **registro** es una fila o una ficha guardada en algún lado: un
  cliente en el CRM, un pedido en la planilla. Casi siempre necesitan una **credencial** (el permiso para entrar a
  tu cuenta), porque tocan algo afuera de n8n.
  - *Ejemplo:* "Mandar un mail con Gmail", "agregar una fila en Google Sheets", "crear un contacto en el CRM",
    "mandar un mensaje por Telegram".
- **"Transform: procesan o modifican los datos que pasan por el flujo (Set, Code, Merge, IF, Switch) sin
  conectarse a un servicio externo."** **Procesar** es trabajar con los datos: cambiarlos, ordenarlos, decidir por
  dónde van. "Sin conectarse a un servicio externo" quiere decir que no salen de n8n: no necesitan credenciales ni
  internet. **Set** es el nombre viejo de Edit Fields; **Code** es un nodo donde se escribe código (lo vemos más
  adelante). Son los nodos de hoy.
  - *Ejemplo:* Edit Fields arma el campo "nombre completo" juntando nombre y apellido. IF decide si el pedido es
    grande. Ninguno de los dos se conecta a nada: trabajan con lo que ya tienen.

**Ejemplo: clasificar los nodos de un flujo**

❌ Mal: todo es "un nodo", sin distinguir.

```text
Gmail, IF, Google Sheets, Edit Fields: son todos nodos.
```

✅ Bien: cada uno con su tipo.

```text
Gmail Trigger ("llegó un mail")  → TRIGGER: arranca el flujo
Edit Fields (limpiar los datos)   → TRANSFORM: trabaja adentro de n8n
IF (¿es un reclamo?)              → TRANSFORM: decide por dónde sigue
Google Sheets (agregar fila)      → ACTION: hace algo en otra aplicación
```

Por qué: si algo falla en un ACTION, lo primero que se mira es la credencial o la otra aplicación. Si falla un
TRANSFORM, el problema está en los datos o en la configuración del nodo. Saber el tipo ya dice dónde buscar.

**Ejercicio 1 · ¿Trigger, action o transform?** (3 min). Pegás en el chat de la videollamada:

```text
EJERCICIO 1 · ¿Trigger, action o transform? Respondé en el chat con el número y la letra (T, A o X).
1. Todos los lunes a las 9 (Schedule)
2. Mandar un mensaje por Telegram
3. IF: ¿el monto es mayor a 10.000?
4. Llegó un formulario nuevo (webhook)
5. Edit Fields: juntar nombre y apellido
6. Agregar una fila en Google Sheets
7. Merge: juntar dos ramas
8. El botón "Execute workflow" (Manual Trigger)
```

Respuestas: 1 T, 2 A, 3 X, 4 T, 5 X, 6 A, 7 X, 8 T. La que más se equivoca es la 3: el IF no "hace" nada afuera,
decide adentro de n8n, por eso es transform.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Dónde está cada tipo de nodo
1. Workflow vacío → Add first step: la lista que se abre es SOLO de triggers
   ("What triggers this workflow?", "¿qué dispara este flujo?")
2. Elegí Trigger manually. Ahora apretá el + de su derecha: la lista cambia
   ("What happens next?", "¿qué pasa después?")
3. Action in an app → nodos de acción: Gmail, Google Sheets, Slack…
4. Data transformation → nodos que transforman: Edit Fields, Aggregate, Split Out…
5. Flow → nodos que deciden el camino: If, Switch, Merge, Wait…
```

Lo que se ve: n8n ya separa los nodos por su función. Los triggers solo aparecen al principio; acciones y
transformaciones, después. (Los nombres de las categorías pueden cambiar un poco según la versión de n8n; el
buscador de arriba siempre encuentra el nodo por su nombre.)

#### Filmina 9 · Anatomía de un nodo: qué mirás cuando lo abrís (3 min)

<p style="color:#1a7f37">Cada nodo tiene un cuerpo con ícono y nombre, un puntito de entrada a la izquierda y uno o más de salida a la derecha. Y cambia de color: sin ejecutar, en verde si salió bien, en rojo si falló. Es la primera herramienta para encontrar errores.</p>

Mientras hablás, mostrás en tu n8n el flujo `04` (el detective) ya ejecutado: señalás cada parte en pantalla.

Para explicar:
- **"El cuerpo: ícono y nombre. Te dice de qué servicio o función se trata."** El ícono dice qué tipo de nodo es
  (el sobre rojo de Gmail, la planilla verde de Sheets, las flechitas que se separan del IF). El nombre lo ponemos
  nosotros, y es la parte más importante para que el flujo se entienda: n8n les pone nombres genéricos ("Edit
  Fields", "Edit Fields1", "If") y nuestro trabajo es cambiarlos por algo que diga **qué hace** ese nodo en este
  flujo. Para renombrar: doble clic en el nodo y clic en el título, o seleccionarlo y apretar **F2**.
  - *Ejemplo:* El ícono dice "es un IF". El nombre "¿Más de USD 10.000?" dice qué pregunta hace. Con los dos, se
    entiende sin abrirlo.
- **"Conectores de entrada: a la izquierda. Reciben los datos del nodo anterior."** Es el puntito gris del lado
  izquierdo. Por ahí entra la ficha que manda el nodo de antes. Los triggers no tienen: son los primeros, no
  reciben nada de nadie. El Merge tiene dos o más, porque junta caminos.
  - *Ejemplo:* El nodo "Asignar a ventas" tiene un puntito a la izquierda, conectado a la salida *false* del IF.
- **"Conectores de salida: a la derecha. Envían los datos al siguiente. Algunos nodos tienen varias salidas."** El
  puntito de la derecha. La mayoría tiene uno. El IF tiene dos (*true* y *false*, "verdadero" y "falso"), el Switch
  tiene uno por cada camino. Cada salida es una **rama**: un camino distinto que puede tomar el flujo, como las
  ramas de un árbol que salen del mismo tronco.
  - *Ejemplo:* El IF del detective tiene dos salidas: arriba *true* (va a gerencia), abajo *false* (va a ventas).
- **"El estado visual: no ejecutado, ejecutado con éxito o con error. Es tu primera herramienta para
  debuggear."** **Debuggear** viene del inglés *bug*, "bicho": en programación, un error. Debuggear es buscar y
  arreglar errores. Gris o sin marca: el nodo no corrió. Verde con un ✓: corrió bien. Rojo con un ⚠: falló.
  Además, sobre cada flecha aparece cuántos **items** pasaron (un item es cada dato suelto: cinco consultas son
  cinco items). Mirar los colores y los números, antes de abrir nada, ya dice hasta dónde llegó el dato.
  - *Ejemplo:* En el flujo del detective: todos verdes, pero "Asignar a gerencia" quedó gris y la flecha de *false*
    dice "5 items". Sin abrir nada: las cinco consultas fueron por el mismo lado.

**Ejemplo: leer el estado de un flujo**

❌ Mal: abrir el nodo rojo y empezar a cambiar cosas.

```text
"El nodo de la planilla está en rojo → le cambio la configuración."
```

✅ Bien: mirar primero el lienzo entero.

```text
Trigger ✓ (1 item) → Edit Fields ✓ (1 item) → IF ✓ (0 true / 1 false) → Planilla ⚠
"Llegó un item, el IF lo mandó por false, y la planilla falló con ese item.
 Abro la planilla y miro la entrada: ¿qué le llegó?"
```

Por qué: el rojo dice dónde se notó el problema, no dónde empezó. Es lo de la filmina siguiente.

#### Filmina 10 · Las conexiones: el camino que recorren los datos (3 min)

<p style="color:#1a7f37">Las conexiones son las líneas que unen un nodo con otro. Definen el orden y el camino de los datos. Y ojo: si un dato no llegó, la respuesta casi siempre está en el nodo anterior, no en el que se puso rojo.</p>

Para explicar:
- **"Qué son: las líneas que unen la salida de un nodo con la entrada de otro."** Se hacen arrastrando desde el
  puntito de salida de un nodo hasta el de entrada del otro. Para borrar una, se pasa el mouse por encima y se
  aprieta el tachito. Un nodo que no está conectado a nada no se ejecuta nunca, aunque esté en el lienzo.
  - *Ejemplo:* Si arman un nodo y se olvidan de conectarlo, al ejecutar el flujo queda gris: nadie le mandó nada.
- **"Definen el orden: cuál se ejecuta primero y cuál después."** n8n no mira dónde está dibujado cada nodo para
  saber el orden: sigue las líneas. El que está conectado después, corre después. Cuando un nodo tiene dos ramas,
  n8n termina una y después hace la otra (primero la de arriba).
  - *Ejemplo:* Si "Mandar el mail" está conectado antes que "Revisar si es urgente", el mail sale antes de revisar.
    El dibujo puede estar prolijo, pero el orden es el de las líneas.
- **"Definen el camino: por dónde viajan los datos dentro del flujo."** Lo que sale de un nodo entra en el
  siguiente, tal cual. El podcast del material lo compara con una cocina: los nodos son las estaciones (picar,
  cocinar, emplatar) y el dato es el ingrediente que viaja de una a otra. Si el tomate sale picado de una estación,
  llega picado a la siguiente.
  - *Ejemplo:* Un nodo de Gmail saca el mail con su asunto y su texto. El nodo conectado después recibe exactamente
    eso: asunto y texto. No recibe lo que había en otro nodo que no está conectado.
- **"Por qué importa: si un dato no llegó, la respuesta casi siempre está en la conexión o en el nodo anterior,
  no en el que se puso rojo."** Es la regla más útil para encontrar errores. El nodo que se pone rojo es el que
  **se dio cuenta** del problema, no el que lo **causó**. Casi siempre, lo que pasa es que el nodo anterior le
  mandó algo distinto de lo que esperaba: un casillero con otro nombre, un texto donde iba un número, nada. Por
  eso, antes de tocar el nodo rojo, se abre y se mira su panel **Input** (lo que le llegó), o la salida del nodo
  anterior.
  - *Ejemplo:* La planilla se pone roja porque falta el email. El problema no es la planilla: el nodo anterior (la
    IA) devolvió `"mail"` en vez de `"email"`.

**El "síndrome del objeto perdido"** (del podcast del material): por defecto, un nodo solo ve lo que le mandó el
nodo de justo antes. Si necesita algo de tres nodos atrás, hay que ir a buscarlo con `$('Nombre del nodo')`, como
vimos la semana pasada con el nodo Mensaje. Si no, el dato "se perdió" en el camino.

#### Filmina 11 · #FindTheBug: mirá el canvas antes de tocar nada (1 min) + Ejercicio 2 (5 min)

<p style="color:#1a7f37">Cada nodo te muestra su estado. Antes de tocar nada, miren el canvas: les dice exactamente hasta dónde llegó el dato. Vamos a practicarlo ya mismo.</p>

Para explicar:
- **"Cada nodo te muestra su estado: no ejecutado, ejecutado con éxito o con error. Antes de tocar nada, mirá el
  canvas: te dice exactamente hasta dónde llegó el dato."** *#FindTheBug* es "encontrá el error". El consejo es un
  orden: primero mirar (colores y cantidad de items sobre cada flecha), después abrir el nodo donde el dato dejó de
  ser el que esperábamos, y recién al final cambiar algo. Cambiar cosas a ciegas suele agregar errores nuevos.
  - *Ejemplo:* Un médico no opera antes de mirar la radiografía. El canvas es la radiografía del flujo.

**Ejercicio 2 · Detective de datos** (5 min). Es la actividad "Desafío de predicción" del material de lectura,
con el flujo `04-detective-de-datos.json`.

1. Abrís el flujo 04 y decís:

<p style="color:#1a7f37">Este flujo recibe cinco consultas y pregunta si el monto es mayor a diez mil dólares. Las que sí van a gerencia; las que no, a ventas. Martín pide doce mil y Sofía quince mil: tendrían que ir a gerencia. Miren qué pasa.</p>

2. Apretás **Execute workflow**. Todo queda verde, pero "Asignar a gerencia" queda gris y sobre la flecha de
   *false* dice **5 items**.
3. Pegás en el chat:

```text
EJERCICIO 2 · Detective de datos
Martín (USD 12.000) y Sofía (USD 15.000) deberían ir a gerencia, pero las 5 consultas fueron a ventas.
¿Por qué falla? Votá con la letra:
A) Error de conexión
B) Campo inexistente
C) El nodo está mal configurado
```

4. Esperás los votos (1 minuto). Después, sin decir la respuesta, abrís el nodo **¿Más de USD 10.000?**: la
   condición dice `{{ $json.importe }}` *is greater than* `10000`. Preguntás: *"¿Alguien ve algo raro?"*.
5. Si nadie lo ve, abrís **Separar en items** y mostrás la pestaña **JSON** de la salida: el casillero se llama
   `monto`, no `importe`. Decís:

<p style="color:#1a7f37">Respuesta B: campo inexistente. El IF pregunta por "importe", pero la ficha trae "monto". Como "importe" no existe, el IF no tiene con qué comparar, y en vez de avisar, contesta "no" para todos. Todo en verde, y dos ventas grandes atendidas por quien no correspondía. ¿Ven? El problema no estaba en el nodo que se veía raro, estaba en lo que le llegó.</p>

6. Lo arreglás en vivo: en el IF, borrás `{{ $json.importe }}` y arrastrás `monto` desde el panel **Input**. Queda
   `{{ $json.monto }}`. **Execute workflow**: ahora sale **2 items** por *true* y **3** por *false*.

<p style="color:#1a7f37">Y fíjense que lo arreglé arrastrando, no escribiendo. Arrastrar el casillero desde la entrada es la mejor vacuna contra este error: n8n escribe el nombre exacto.</p>

Si alguien votó C: tiene algo de razón (el nodo está mal configurado), pero la causa precisa es B, y eso es lo que
dice dónde mirar.

---

### 28–60 · Sección 02 · Los nodos principales

**Filmina 12 · Separador "02"** (1 min)

<p style="color:#1a7f37">Ahora los nodos que más van a usar: seis piezas que aparecen en casi todos los flujos. Ya saben leer un flujo; ahora vamos a conocer las piezas con las que se arma.</p>

<p style="color:#1a7f37">Vamos a ir de a uno, siempre con las consultas de la agencia de viajes. Primero el que ordena los datos, Edit Fields. Después los que deciden por dónde va cada consulta: el IF, cuando hay dos caminos, y el Switch, cuando hay más; y ahí les voy a pedir que elijan ustedes entre uno y otro. Después los que juntan: Aggregate, que arma un resumen, y Merge, que vuelve a unir dos caminos. Y al final Wait, que hace esperar al flujo. Con estas seis piezas armamos la práctica de después del break.</p>

**Para explicar:**

- **Seis piezas, tres familias.** Conviene que vean desde el principio que los seis nodos se agrupan por lo que hacen
  con los datos: uno los ordena, dos deciden el camino, dos juntan y uno espera.
  - *Ejemplo:* ordenar → Edit Fields; decidir → IF y Switch; juntar → Aggregate y Merge; esperar → Wait. Si quieren,
    lo escriben así en un papel y lo van completando a medida que avanzamos.
- **Siempre el mismo ejemplo.** Todos los nodos se explican con las consultas de la agencia, para que no tengan que
  entender un caso nuevo con cada nodo. Es el mismo caso que van a armar después del break.
  - *Ejemplo:* llegan cinco consultas (una de ellas por un crucero). Edit Fields les agrega o arregla casilleros, el
    IF separa las de más de USD 10.000, el Switch las reparte por tipo (paquete, vuelo u hotel), Merge vuelve a juntar
    las ramas, Aggregate arma el resumen del día y Wait espera antes de mandarlo.
- **Hay un momento para que piensen ellos.** En el medio de la sección (filmina 16) hay una actividad: decidir si un
  reparto se resuelve con dos IF o con un Switch. Avisarlo ahora hace que presten atención al IF y al Switch.
  - *Ejemplo:* "en un rato les voy a preguntar cuándo conviene un IF y cuándo un Switch, así que miren bien la
    diferencia".
- **Se cierra el misterio del rompehielo.** Cuando lleguemos a Aggregate van a saber cuál era el nodo misterioso del
  arranque de la clase.
  - *Ejemplo:* "¿se acuerdan del flujo donde entraban cinco consultas y salía un solo mail? En un rato les digo qué
    nodo hacía eso".
- **Por ahora miramos; después del break armamos.** En esta sección no tienen que tocar n8n: se trata de entender
  qué hace cada pieza. La práctica de la Sección 03 las usa todas juntas.
  - *Ejemplo:* "no hace falta que lo repliquen ahora; anoten para qué sirve cada uno, que después lo vamos a necesitar".

Si vas justo de tiempo, alcanza con decir los dos textos en verde.

#### Filmina 13 · Edit Fields (Set): el nodo que le da forma a los datos (3 min)

<p style="color:#1a7f37">Edit Fields crea, cambia o borra casilleros en cada item. Sirve para renombrar, calcular algo nuevo o limpiar lo que sobra, y para dejar los datos prolijos antes del nodo siguiente.</p>

Para explicar:
- **"Qué hace: crea, modifica o elimina campos dentro de cada item que pasa por el workflow."** Un **campo** es un
  casillero de la ficha JSON (`nombre`, `monto`). El nodo se llama "Edit Fields" ("editar campos"); en versiones
  viejas de n8n se llamaba "Set" ("establecer"), y por eso a veces aparece "Edit Fields (Set)". Lo usamos la
  semana pasada para inventar a Martín y para armar el saludo. Trabaja **item por item**: si entran cinco
  consultas, hace lo mismo con cada una y salen cinco.
  - *Ejemplo:* Entra `{"nombre": "Martín", "apellido": "Gómez"}`; el nodo agrega `nombre_completo`; sale
    `{"nombre": "Martín", "apellido": "Gómez", "nombre_completo": "Martín Gómez"}`.
- **"Para qué se usa: renombrar campos, calcular valores nuevos, limpiar información innecesaria."** Renombrar:
  cambiar `Nombre` por `nombre` para que coincida con lo que espera la planilla. Calcular: armar un precio con IVA a
  partir del precio. Limpiar: sacar los casilleros que no se van a usar, para que el flujo no arrastre datos de más
  (sobre todo si después van a una IA, que cobra por cada palabra que lee).
  - *Ejemplo:* Un formulario trae 25 campos; a la planilla van 4. Un Edit Fields con esos 4, con la opción de
    incluir los demás apagada, y el resto se descarta.
- **"Cuándo: cuando querés dejar los datos prolijos antes de mandarlos al nodo siguiente."** Es el "acomodar la
  mercadería antes de ponerla en la vidriera". Casi todos los flujos tienen uno antes de la acción final.
  - *Ejemplo:* Antes de guardar en la planilla, un Edit Fields pone el nombre con mayúscula inicial y el teléfono
    sin espacios.
- **"También: cuando armás un campo nuevo combinando otros, o cuando el nodo que sigue espera otra
  estructura."** **Estructura** es la forma de la ficha: qué casilleros tiene y cómo se llaman. Si un nodo devuelve
  `mail` y el siguiente espera `email`, Edit Fields hace de traductor.
  - *Ejemplo:* La IA devuelve `cliente`, la planilla tiene la columna `nombre`. Un Edit Fields con `nombre =
    {{ $json.cliente }}` y listo.

**Un detalle de la semana pasada que hoy importa:** por defecto, Edit Fields devuelve **solo** los campos que
armaste. Si querés que siga pasando el resto, hay que activar **Include Other Input Fields** ("incluir los otros
campos de la entrada"). En la práctica lo vamos a activar en cada rama, para no perder el nombre y el monto.

**Ejemplo: renombrar y limpiar antes de la planilla**

❌ Mal: mandar a la planilla lo que llega, como llega.

```json
{ "Nombre": "martín", "TEL": "11 4567 8901", "origen": "web", "utm": "x93k", "ip": "190.2.3.4" }
```

✅ Bien: un Edit Fields antes, con solo lo que la planilla necesita y con los nombres que espera.

```json
{ "nombre": "Martín", "telefono": "1145678901" }
```

Por qué: la planilla espera `nombre` en minúscula; con `Nombre` deja la columna vacía, sin error (el error
silencioso de la semana pasada).

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un Edit Fields y armar un campo nuevo
1. + a la derecha del nodo anterior → buscá "edit" → Edit Fields (Set)
2. Mode: Manual Mapping (viene así)
3. Add Field → name: saludo · tipo: String
   value: Hola {{ $json.nombre }}, recibimos tu consulta
   (para el {{ }}, arrastrá "nombre" desde el panel INPUT, a la izquierda)
4. Si querés que sigan pasando los otros casilleros: activá Include Other Input Fields
5. F2 → renombralo: Armar saludo → Execute step
```

Lo que se ve: en OUTPUT, cada consulta trae un casillero nuevo, `saludo`, con "Hola Martín Gómez, recibimos tu
consulta". Sin *Include Other Input Fields*, sale solo `saludo`; con la opción activada, sale junto a `nombre`,
`monto` y `categoria`.

#### Filmina 14 · IF: la decisión binaria (4 min)

<p style="color:#1a7f37">El IF evalúa una condición sobre cada item y lo manda por uno de dos caminos: true o false. Cada item se evalúa por separado: en la misma ejecución, unos pueden ir por true y otros por false. Y su límite: solo dos caminos.</p>

Para explicar:
- **"Qué hace: evalúa una condición sobre cada item y lo deriva por una de dos ramas: true o false."** **Evaluar
  una condición** es responder una pregunta de sí o no. **Derivar** es mandar por un camino, como un empleado que
  deriva un llamado a otro sector. *True* es "verdadero" (sí, se cumple) y *false* es "falso" (no se cumple). La
  condición se arma con tres partes: un valor (el casillero que se mira, arrastrado desde la entrada), una
  comparación (mayor que, igual a, contiene…) y otro valor.
  - *Ejemplo:* `{{ $json.monto }}` — *is greater than* ("es mayor que") — `10000`. Si el monto es 12.000: true. Si es
    3.500: false.
- **"Cuándo usarlo: cuando el flujo tiene que tomar un camino distinto según un valor. ¿El monto supera los
  $10.000?"** Cada vez que el boceto dice "si…", hay un IF. Las comparaciones cambian según el tipo de dato: para
  números (mayor, menor, igual), para textos (es igual a, contiene, empieza con), para fechas (antes, después),
  para *booleanos* (verdadero o falso: "¿pagó?", "¿es cliente?").
  - *Ejemplo:* "Si el mail contiene la palabra *urgente*", "si el pedido es para hoy", "si el cliente ya compró
    antes": tres IF distintos.
- **"El detalle importante: cada item se evalúa individualmente. Si entran 5 items, algunos pueden salir por true
  y otros por false en la misma ejecución."** Es lo que más confunde al principio. El IF no decide "todo el lote va
  para acá": mira cada ficha por separado. Por eso, después de ejecutar, sobre la rama true dice "2 items" y sobre
  la false "3 items", al mismo tiempo. Las dos ramas corren en la misma ejecución, cada una con lo suyo.
  - *Ejemplo:* Entran cinco consultas: Martín (12.000), Lucía (3.500), Diego (800), Sofía (15.000), Carla (6.000).
    Por true salen Martín y Sofía; por false, Lucía, Diego y Carla. Una sola ejecución.
- **"Su límite: es lógica binaria. Dos caminos y nada más."** **Binario** quiere decir "de a dos": sí o no, prendido
  o apagado. Si la pregunta tiene tres respuestas o más, el IF no alcanza. Se puede poner un IF adentro de otro
  (eso se llama **anidar**), pero enseguida se vuelve un enredo. Para eso está el Switch.
  - *Ejemplo:* "¿Es urgente?" sí o no: IF. "¿Es urgente, normal o baja?": tres respuestas, ya no es un IF.

**Un error que van a ver en la práctica:** si el monto llega como texto (`"12000"`, con comillas) en vez de número
(`12000`), el IF se pone en rojo: `Wrong type: '12000' is a string but was expecting a number` ("tipo equivocado:
'12000' es un texto, pero se esperaba un número"). Es el error del tipo Number de la semana pasada, del otro lado.
Se arregla escribiendo el número sin comillas, o activando en el IF la opción **Convert types where required**
("convertir los tipos cuando haga falta").

**Ejemplo: armar la condición**

❌ Mal: escribir el casillero a mano, y con otro nombre.

```text
{{ $json.importe }}   is greater than   10000
→ "importe" no existe: las 5 consultas van por false, sin error (el detective de la Sección 01).
```

✅ Bien: arrastrar el casillero desde la entrada.

```text
{{ $json.monto }}   is greater than   10000
→ 2 items por true (Martín y Sofía), 3 por false.
```

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un IF y ver sus dos salidas
1. + a la derecha del nodo anterior → buscá "if" → If
2. En Conditions: arrastrá "monto" desde INPUT al primer cuadro
3. Desplegable del medio: Number → is greater than
4. Segundo cuadro: 10000
5. Execute step → en OUTPUT, arriba, elegí True Branch o False Branch para ver cada salida
6. Cerrá el nodo: tiene dos salidas, "true" y "false", cada una con su +
```

Lo que se ve: en el lienzo, sobre la salida *true* dice "2 items" y sobre la *false*, "3 items". Cada salida
se conecta a un nodo distinto con su propio +. Es exactamente el Paso 2 de la práctica.

#### Filmina 15 · Switch: cuando hay más de dos caminos (3 min)

<p style="color:#1a7f37">El Switch manda cada item por una de varias salidas, según una regla, o por una salida por defecto si no encaja en ninguna. Es el IF cuando hay tres caminos o más, y evita poner un IF adentro de otro.</p>

Para explicar:
- **"Qué hace: evalúa una condición o un valor y deriva el item hacia una de varias salidas, o hacia una salida por
  defecto."** Como el IF, mira cada item por separado. Pero en vez de dos salidas, tiene una por cada **regla**
  que le pongamos (*Routing Rules*, "reglas de ruteo": **rutear** es elegir el camino, como un GPS). La **salida por
  defecto** (en n8n, *Fallback Output*, "salida de respaldo") es para lo que no encaja en ninguna regla: el "otros"
  de un formulario. A cada salida se le puede poner nombre (*Rename Output*), y conviene hacerlo.
  - *Ejemplo:* Reglas: categoría = paquete → salida "Paquetes"; = vuelo → "Vuelos"; = hotel → "Hoteles". Salida
    por defecto: "Otra". Una consulta de crucero sale por "Otra".
- **"Es la evolución del IF: aparece cuando los caminos posibles son tres o más."** Con dos caminos, IF. Con tres
  o más, Switch. Hay una zona gris: con dos categorías y la posibilidad de que aparezca una tercera, el Switch ya
  conviene, porque sumar una salida es agregar una regla.
  - *Ejemplo:* "¿Es cliente nuevo o viejo?": IF. "¿Es cliente nuevo, viejo o mayorista?": Switch.
- **"Cuándo usarlo: país, tipo de cliente, estado de un pedido. Cualquier cosa con varias categorías."** Una
  **categoría** es un grupo con nombre: "pendiente", "pagado", "enviado". Cada vez que un casillero tiene una lista
  cerrada de valores posibles, es candidato a Switch.
  - *Ejemplo:* Estado del pedido: "pendiente" → recordatorio de pago; "pagado" → aviso a depósito; "enviado" →
    mail con el seguimiento; cualquier otro → revisar a mano.
- **"Lo que evita: anidar múltiples IF uno adentro del otro, que es la receta del flujo ilegible."** **Ilegible** es
  "que no se puede leer". Con IF anidados, para saber por qué un item terminó en un lado hay que seguir la cadena:
  "no era paquete, entonces fue al segundo IF, no era vuelo, entonces fue al tercero…". Con un Switch, se abre un
  solo nodo y se ven todas las reglas juntas.
  - *Ejemplo:* Tres categorías con IF son dos IF, uno colgado del false del otro. Cinco categorías son cuatro IF en
    escalera. Con Switch, siempre es un nodo.

**Ejemplo: repartir consultas por tipo**

❌ Mal: IF anidados.

```text
IF ¿es paquete? ──true──→ Área de paquetes
      └─false─→ IF ¿es vuelo? ──true──→ Área de vuelos
                      └─false─→ IF ¿es hotel? ──true──→ Área de hoteles
                                      └─false─→ (¿y el crucero?)
```

✅ Bien: un Switch con salida por defecto.

```text
Switch ¿Qué tipo de consulta?
  ├─ Paquetes → Área de paquetes
  ├─ Vuelos   → Área de vuelos
  ├─ Hoteles  → Área de hoteles
  └─ Otra     → Revisar a mano   (salida por defecto: el crucero)
```

Por qué: el segundo se lee de un vistazo, y sumar "cruceros" mañana es agregar una regla, no otro IF colgando.

**Cuidado con la salida por defecto:** si se deja en *None* ("ninguna"), lo que no encaja en ninguna regla
**desaparece**, sin error. Un cliente que pidió un crucero no le llega a nadie. Siempre conviene activarla.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un Switch con salida por defecto
1. + a la derecha del nodo anterior → buscá "switch" → Switch
2. Mode: Rules. En Routing Rules, regla 1:
   arrastrá "categoria" al primer cuadro → String → is equal to → paquete
   Activá Rename Output → Paquetes
3. Add Routing Rule → lo mismo con: vuelo (Vuelos) y hotel (Hoteles)
4. Abajo: Add option → Fallback Output → Extra Output
5. Execute step → en OUTPUT, arriba, elegí cada salida para ver qué items fueron a cada una
```

Lo que se ve: el nodo tiene cuatro salidas con nombre: Paquetes, Vuelos, Hoteles y Fallback (la de "otros").
Lo armamos completo en el Paso 3 de la práctica.

#### Filmina 16 · Actividad: ¿dos IF anidados o un Switch? (4 min) — Ejercicio 3

<p style="color:#1a7f37">Tienen que repartir consultas según su urgencia: alta, media o baja. ¿Lo resuelven con dos IF anidados o con un Switch? ¿Y qué pasa mañana, cuando aparezca una cuarta categoría? Respondan en el chat.</p>

Pegás en el chat:

```text
EJERCICIO 3 · ¿Dos IF o un Switch?
Hay que repartir consultas según su urgencia: alta, media o baja.
1. ¿Lo resolvés con dos IF anidados o con un Switch? ¿Por qué?
2. Mañana aparece una cuarta categoría: "crítica". ¿Qué tenés que cambiar en cada caso?
3. ¿Qué pasa con una consulta que llega sin urgencia (el campo vacío)?
```

Esperás respuestas (2 minutos) y cerrás:

<p style="color:#1a7f37">Switch. Con IF necesitan dos, uno colgado del otro, y para agregar "crítica" hay que meter un tercero en la escalera. Con Switch se agrega una regla. Y la consulta sin urgencia: con IF anidados, cae por el último false sin que nadie lo decida; con el Switch, sale por la salida por defecto, que podemos mandar a revisar a mano.</p>

Para explicar:
- **La cuarta categoría.** Los procesos cambian: aparece un producto nuevo, un país nuevo, un estado nuevo. Un flujo
  bien armado se adapta tocando un solo lugar. Con IF anidados, cada categoría nueva es un nodo más y una cadena
  más larga para seguir.
  - *Ejemplo:* Una tienda que vendía en tres provincias empieza a vender en una cuarta. Con Switch: una regla nueva.
    Con IF: un IF más en la escalera y revisar que no se rompa nada.
- **El campo vacío.** Es el caso que nadie piensa: el formulario se envió sin elegir urgencia, o la IA devolvió
  `"no_disponible"`. La salida por defecto del Switch lo atrapa y lo podemos mandar a una persona.
  - *Ejemplo:* La IA lee un mail ambiguo y devuelve `"urgencia": "no_disponible"`. Switch → salida por defecto →
    "revisar a mano". Nada se pierde.

#### Filmina 17 · Aggregate: de muchos items a uno solo (3 min)

<p style="color:#1a7f37">Aggregate toma muchos items sueltos y los junta en uno solo, con una lista adentro. Sirve para mandar un resumen: un solo mail con todos los pedidos del día, en vez de un mail por pedido. Y esto responde el rompehielo: entran cinco, sale uno.</p>

Para explicar:
- **"Qué hace: toma varios items separados y los agrupa en uno solo, combinando un campo en una lista o
  consolidando todo en un array."** **Array** es la palabra de programación para "lista": varios valores uno
  detrás de otro, entre corchetes `[ ]`. Aggregate tiene dos modos: juntar **un solo campo** de todos los items
  (*Individual Fields*: por ejemplo, solo los nombres) o juntar **todo** (*All Item Data*: las fichas completas,
  una dentro de la lista).
  - *Ejemplo:* Entran cinco items con nombre y monto. Con *Individual Fields* sobre `nombre`, sale uno:
    `{"nombre": ["Martín", "Lucía", "Diego", "Sofía", "Carla"]}`. Con *All Item Data*, sale uno con las cinco fichas
    completas adentro.
- **"Cuándo usarlo: cuando necesitás mandar un resumen o una lista consolidada a otro sistema."** Todo nodo de
  acción hace su trabajo **una vez por cada item** que le llega. Cinco items a un nodo de Gmail son cinco mails. Si
  queremos uno solo, primero hay que juntar los cinco en uno.
  - *Ejemplo:* Un reporte para el contador con todas las facturas del mes: Aggregate y después un solo mail.
- **"El ejemplo típico: un solo email con todos los pedidos del día, en vez de un email por pedido."** Es la
  diferencia entre una bandeja de entrada ordenada y una inundada. Y en un negocio, la diferencia entre que la
  dueña lea el resumen o lo ignore.
  - *Ejemplo:* 40 consultas por día. Sin Aggregate: 40 mails a la dueña. Con Aggregate: uno, a las 9, con las 40.
- **"También: cuando el paso siguiente necesita todos los datos juntos y no item por item."** Algunos pasos
  necesitan ver todo junto: una IA que resume el día, un total, un promedio, una planilla que se escribe de una vez.
  - *Ejemplo:* "Resumí en tres líneas las consultas de hoy": la IA tiene que leerlas todas juntas, no de a una.

**Ejemplo: avisar los pedidos del día**

❌ Mal: el nodo del mail conectado directo a los pedidos.

```text
5 pedidos → Gmail → 5 mails: "Nuevo pedido: Martín", "Nuevo pedido: Lucía", ...
```

✅ Bien: un Aggregate antes.

```text
5 pedidos → Aggregate → 1 item con la lista → Gmail → 1 mail:
"Hoy entraron 5 pedidos: Martín, Lucía, Diego, Sofía, Carla."
```

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un Aggregate
1. + a la derecha del nodo anterior → buscá "aggregate" → Aggregate
2. Opción A · Aggregate: Individual Fields → Input Field Name: nombre
   → sale 1 item: {"nombre": ["Martín Gómez", "Lucía Fernández", "Diego Ramírez", ...]}
3. Opción B · Aggregate: All Item Data (Into a Single List)
   → sale 1 item con las cinco fichas completas adentro de "data"
4. Execute step → arriba de OUTPUT dice "1 item"
```

Lo que se ve: antes del Aggregate, el contador dice "5 items"; después, "1 item". La opción A sirve cuando
alcanza con un casillero (la lista de nombres); la B, cuando hacen falta todos los datos de cada ficha.

#### Filmina 18 · Merge: el nodo que cierra una bifurcación (3 min)

<p style="color:#1a7f37">Merge junta en una sola salida datos que vienen de dos ramas distintas. Se usa cuando el flujo se separó y hay que volver a reunirlo, o para cruzar datos de dos fuentes. Es un embudo donde llegan dos mangueras.</p>

Para explicar:
- **"Qué hace: combina datos que vienen de dos ramas distintas del workflow en una sola salida."** Una
  **bifurcación** es donde un camino se divide en dos, como una ruta que se abre en una Y. El IF y el Switch
  bifurcan; el Merge cierra la bifurcación. Tiene dos entradas (*Input 1* e *Input 2*), y en el modo *Append* se
  le pueden agregar más (*Number of Inputs*, "cantidad de entradas").
  - *Ejemplo:* Después del Switch, las consultas van por cuatro ramas. Un Merge con cuatro entradas las vuelve a
    juntar para el resumen.
- **"Cuándo usarlo: cuando el flujo se dividió en caminos paralelos y necesitás reunir la información de
  nuevo."** **Paralelo** quiere decir que van al mismo tiempo, por separado. Cada rama hace lo suyo, y después
  hace falta seguir con todo junto: un resumen, una sola planilla, un solo mensaje.
  - *Ejemplo:* Los pedidos grandes llevan un descuento y los chicos no. Después, todos van a la misma planilla:
    Merge antes de la planilla.
- **"También: cuando cruzás datos de dos fuentes distintas, por ejemplo un CRM y una planilla."** Una **fuente**
  es de dónde vienen los datos. Cruzar es buscar la pareja de cada dato en la otra lista, como cuando se busca en
  la lista de precios el precio de cada producto del pedido.
  - *Ejemplo:* De un lado, los pedidos (con el código del producto); del otro, la planilla de precios. El Merge en
    modo *Combine* por el campo `codigo` le pega a cada pedido su precio.
- **"La analogía: un embudo donde llegan dos mangueras."** Lo que entra por las dos mangueras sale por un solo
  caño. Pero el embudo tiene distintas formas de mezclar, y eso es lo que hay que elegir bien. Los modos que
  importan:

| Modo | Qué hace | Si una rama llega vacía (probado en n8n 2.46) |
|---|---|---|
| **Append** ("agregar al final") | Pone los items de una entrada y después los de la otra, en una sola lista. Es el que viene por defecto. | Sigue con lo que llegó. No se traba. |
| **Combine** ("combinar") | Arma parejas: por posición (el 1.º con el 1.º) o por un campo en común (el mismo código). | No tiene con qué armar parejas: sale **vacío** y lo que sigue no se ejecuta. Sin error. |
| **Choose Branch** ("elegir rama") | Espera las dos ramas y deja pasar solo una. | Se queda esperando la que no llegó: el Merge **ni se ejecuta**. |

  - *Ejemplo:* Para volver a juntar ramas de un IF o un Switch, casi siempre se usa **Append**. *Combine* es para
    cruzar dos fuentes que se corresponden.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un Merge para cerrar dos ramas
1. Al final de una de las ramas: + → buscá "merge" → Merge
   (queda conectado a la entrada Input 1)
2. Arrastrá desde el puntito de salida de la otra rama hasta la entrada Input 2
3. Mode: Append (pone los items de una rama abajo de los de la otra)
   ¿Más de dos ramas? Number of Inputs → 3, 4…
4. Para cruzar dos fuentes (el CRM y la planilla): Mode: Combine
   → Combine By: Matching Fields → el casillero en común de cada lado (por ejemplo, email)
5. Execute workflow (no Execute step: el Merge necesita que corran las dos ramas)
```

Lo que se ve: dos líneas que entran al Merge por la izquierda y una sola que sale. Con el IF de 2 y 3 items,
del Merge salen 5.

#### Filmina 19 · Wait: pausar sin perder los datos (3 min)

<p style="color:#1a7f37">Wait frena el flujo un rato, hasta una fecha, o hasta que llegue un aviso de afuera. No toca los datos: después sigue exactamente con lo que tenía. Sirve para espaciar acciones, como un recordatorio 24 horas después.</p>

Para explicar:
- **"Qué hace: pausa la ejecución durante un tiempo determinado, hasta una fecha y hora, o hasta que se cumpla una
  condición externa como recibir un webhook."** Tres formas de esperar, que en el nodo aparecen en *Resume*
  ("reanudar"): *After Time Interval* ("después de un rato": 5 segundos, 2 horas, 3 días), *At Specified Time* ("a
  una fecha y hora") y *On Webhook Call* ("cuando llegue un aviso": por ejemplo, cuando el cliente aprieta un
  botón en un mail).
  - *Ejemplo:* Después de mandar un presupuesto, esperar 3 días; si no respondió, mandar un recordatorio.
- **"Cuándo usarlo: cuando necesitás espaciar acciones en el tiempo. Un recordatorio 24 horas después de un
  evento."** **Espaciar** es dejar tiempo entre una cosa y otra. A veces, también para no "atosigar" a otra
  aplicación: mandar cien mensajes de golpe puede hacer que te bloqueen; con un Wait entre medio, no.
  - *Ejemplo:* Una clínica confirma el turno al reservar, espera hasta 24 horas antes y manda el recordatorio.
- **"También: cuando el flujo depende de una respuesta externa que puede tardar."** **Externa** quiere decir de
  afuera de n8n: una persona, otra aplicación. El flujo queda en pausa (en *Executions* aparece como *Waiting*,
  "esperando") hasta que llega la respuesta.
  - *Ejemplo:* Se le pide a la gerente que apruebe un descuento con un botón en un mail. El flujo espera el clic
    (un webhook) y recién ahí sigue.
- **"Lo que no hace: nada con los datos. Detiene el avance y después continúa exactamente con lo que tenía antes
  de esperar."** Lo que entra sale igual. Es una pausa, no un cambio.
  - *Ejemplo:* Entra el resumen de las consultas, espera 5 segundos y sale el mismo resumen.

**Ojo con n8n en la computadora:** un Wait largo (horas o días) necesita que n8n esté prendido cuando termine la
espera. Con Docker en la notebook, si la apagás, el flujo se retoma cuando vuelvas a prender n8n, no antes. Para
esperas largas en serio, hace falta un servidor (lo vimos en la Semana 2).

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Agregar un Wait
1. + a la derecha del nodo anterior → buscá "wait" → Wait
2. Resume: After Time Interval → Wait Amount: 5 · Wait Unit: Seconds
   (en la vida real, para el recordatorio: 24 · Hours)
3. Las otras opciones de Resume:
   At Specified Time → una fecha y hora
   On Webhook Call   → hasta que llegue un aviso de afuera
4. Execute workflow → el Wait queda "girando" 5 segundos y después sigue
```

Lo que se ve: el nodo siguiente recibe exactamente lo mismo que entró al Wait. Lo comprobás abriendo los dos:
INPUT del Wait y OUTPUT del Wait son iguales.

#### Filmina 20 · Los nodos de acción hacen; los de control deciden (2 min)

<p style="color:#1a7f37">El error común es pedirle decisiones a un nodo de acción. Los nodos de acción hacen. Los de control deciden.</p>

Para explicar:
- **"El error común es pedirle decisiones a un nodo de acción."** Pasa cuando se quiere que un solo nodo haga
  todo: que el nodo de Gmail "mande el mail solo si es urgente", o que el de la planilla "guarde solo los pedidos
  grandes". Los nodos de acción no deciden: hacen su tarea con cada item que les llega. Si no tenía que llegarles,
  la decisión va **antes**, en un IF o un Switch.
  - *Ejemplo:* Se quiere avisar solo los pedidos de más de $100.000. No se configura el nodo de WhatsApp: se pone
    un IF antes y el WhatsApp va solo en la rama true.
- **"Los nodos de acción hacen. Los de control deciden."** **Nodos de control** son los que controlan por dónde va
  el dato: IF, Switch, Merge, Wait (y el Filter, que vemos ahora). En la filmina 8 los llamamos *transform*,
  porque trabajan adentro de n8n; acá se los llama "de control" porque deciden el camino. Son dos formas de
  mirar lo mismo. En el panel de n8n están en la categoría **Flow** ("flujo").
  - *Ejemplo:* Una fábrica: las máquinas hacen (acción); las cintas transportadoras con desvíos deciden a qué
    máquina va cada pieza (control).

**Ejemplo: avisar solo lo urgente**

❌ Mal: buscar en el nodo de Gmail una opción para "mandar solo si…".

```text
Mails → Gmail (mandar aviso)   → avisa todos, urgentes o no
```

✅ Bien: decidir antes, hacer después.

```text
Mails → IF ¿contiene "urgente"? ──true──→ Gmail (mandar aviso)
                                 └─false─→ (nada)
```

#### Filmina 21 · Para recordar y Coder Tips (2 min)

<p style="color:#1a7f37">Dos IF anidados ya son un Switch mal hecho. Y si el Merge les deja el flujo frenado, fíjense si alguna de las ramas quedó sin items: el nodo está esperando algo que nunca va a llegar.</p>

Para explicar:
- **"Dos IF anidados ya son un Switch mal hecho."** Es la regla de la filmina 16 en una frase. Si al armar un IF se
  descubren pensando "y en el false, otro IF", es momento de cambiar a Switch.
  - *Ejemplo:* IF "¿es Buenos Aires?" → false → IF "¿es Córdoba?": ya es un Switch con dos reglas y salida por
    defecto.
- **"Si el Merge te deja el flujo congelado, fijate si alguna de las dos ramas quedó sin items: el nodo está
  esperando algo que nunca va a llegar."** Un IF o un Switch pueden mandar **cero** items por una rama (si ninguna
  consulta cumple la condición, la rama queda vacía y sus nodos ni se ejecutan). Lo que hace el Merge con eso
  depende del modo (la tabla de la filmina 18): en *Append* sigue con lo que hay; en *Combine* sale vacío y lo que
  sigue no corre; en *Choose Branch* se queda esperando. En los dos últimos casos el flujo no da error: parece que
  terminó, pero la acción final nunca pasó. Es otro error silencioso, y lo vamos a ver en vivo después del break.
  - *Ejemplo:* Un día no entra ninguna venta grande. La rama true del IF queda vacía, el Merge en *Combine* no tiene
    con qué combinar, y el mail al gerente nunca sale. Nadie se entera.

#### Para ampliar: Filter, el IF que descarta (2 min)

El material de lectura nombra un nodo más: **Filter** ("filtro"). Es como un IF con una sola salida: los items que
cumplen la condición pasan; los que no, **se descartan**. No hay rama *false*.

<p style="color:#1a7f37">Filter es un colador: deja pasar lo que cumple y tira el resto. El IF separa en dos caminos; el Filter se queda con uno solo. Y el Switch reparte en varios.</p>

| Nodo | Salidas | Qué pasa con lo que no cumple |
|---|---|---|
| **Filter** | 1 | Se descarta. |
| **IF** | 2 (true / false) | Va por la rama false. |
| **Switch** | Una por regla, más la salida por defecto | Va por la salida por defecto (o se pierde, si está en *None*). |

- *Ejemplo:* "Mandar a la planilla VIP solo los pedidos de más de $100" (del material): Filter. No nos importa qué
  pasa con los demás.
- *Ejemplo:* "Los de más de $100 a la planilla VIP; los otros, a la planilla común": IF, porque los dos grupos
  hacen algo.

**Antes del break, si sobra un minuto:** contale el adelanto.

<p style="color:#1a7f37">Después del break vamos a armar todo esto en n8n, cada uno en su computadora. Prendan n8n durante el break: Docker Desktop, Containers, el botón de play.</p>

---

### 60–70 · Break

**Filmina 22 · Break**

<p style="color:#1a7f37">Diez minutos de break. Prendan n8n así arrancamos directo: Docker Desktop, Containers, play, y localhost:5678 en el navegador.</p>

---
### 70–110 · Sección 03 · Práctica en vivo

#### Antes de la clase (una sola vez, 15 minutos)

- Importá los cuatro flujos de la carpeta [n8n/](n8n/) (workflow nuevo → menú **…** → **Import from File** →
  **Save**) y ejecutá cada uno una vez. Lo que tiene que pasar:
  - **02 · Consultas con lógica (completo):** espera 5 segundos y termina en *Mail de resumen (simulado)* con el
    texto de las cinco consultas.
  - **03 · Desafío: se congela en el Merge:** queda verde hasta *Venta común*; *Juntar ventas* devuelve 0 items y
    *Mail al gerente* queda sin ejecutar.
  - **04 · Detective de datos:** los cinco items van por *false*.
- Hacé la práctica completa una vez, en un workflow nuevo, siguiendo los pasos de abajo. Lleva unos 20 minutos la
  primera vez.
- Tené los bloques para el chat en un bloc de notas.

#### Desafío de diagnóstico: el flujo que se congela (70–75)

1. **Filmina 23 · Separador "03"**. Decís:

<p style="color:#1a7f37">Bienvenidos de vuelta. Antes de armar, un desafío. Les voy a mostrar un flujo que debería mandarle un mail al gerente, y no lo manda.</p>

2. **Filmina 24 · Ejemplo en vivo.** Abrís el flujo **03 · Desafío: se congela en el Merge** y lo explicás en una
   pasada, sin abrir nodos:

<p style="color:#1a7f37">Entran las consultas de hoy. El IF pregunta si el monto supera los diez mil dólares: las grandes van por arriba, las comunes por abajo. El Merge las vuelve a juntar, y al final se arma el mail para el gerente.</p>

3. Apretás **Execute workflow**. Queda todo verde hasta **Venta común**; **Juntar ventas** termina sin items y
   **Mail al gerente (simulado)** queda gris. No hay ningún error.
4. Pegás en el chat:

```text
DESAFÍO · ¿Por qué se frena?
El flujo debería terminar en "Mail al gerente", pero se frena en el Merge ("Juntar ventas"). No hay error.
Mirando solo el canvas (colores y cantidad de items en cada flecha): ¿por qué se frena? Respondé en el chat.
```

5. Esperás 2 minutos. Si nadie lo ve, das pistas en este orden: *"¿Cuántos items salen por cada rama del IF?"* (0
   por true, 3 por false) y *"¿Qué hace un Merge que combina de a pares, si de un lado no llega nada?"*.
6. Abrís **Juntar ventas**: el modo dice **Combine** → *Combine By: Position* ("combinar por posición"). Decís:

<p style="color:#1a7f37">Hoy no entró ninguna consulta de más de diez mil dólares, así que la rama de arriba quedó vacía: cero items. Este Merge está en modo Combine: arma parejas, el primero de arriba con el primero de abajo. Si arriba no hay nadie, no hay parejas, y sale vacío. Y como sale vacío, el mail nunca se arma. Sin error, todo verde. Es un error silencioso.</p>

7. Lo arreglás: en **Juntar ventas**, cambiás *Mode* a **Append** y apretás **Execute workflow**. Ahora el Merge
   devuelve 3 items y el mail se arma tres veces. Decís:

<p style="color:#1a7f37">En modo Append, el Merge pone lo que llega de un lado y después lo del otro. Si un lado está vacío, sigue con lo que hay. Para volver a juntar las ramas de un IF o un Switch, casi siempre es el modo que quieren. El Combine es para cruzar dos listas que se corresponden, y ahí sí necesita las dos.</p>

(Si sobra un minuto: en algunas versiones de n8n y con el modo *Choose Branch*, el Merge directamente se queda
esperando la rama que no llegó y ni se ejecuta. Es lo que la filmina llama "congelado". La lección es la misma:
cuando un Merge se frena, mirá si alguna rama llegó vacía.)

#### La práctica: qué vamos a armar (para decirlo una vez)

<p style="color:#1a7f37">Ahora lo armamos nosotros, cada uno en su n8n, en cinco pasos. El caso: la agencia de viajes recibe consultas. Cada una tiene un nombre, un monto en dólares y una categoría: paquete, vuelo u hotel. Queremos que cada consulta vaya a su área y que, al final, salga un solo mensaje con el resumen. Datos inventados por ahora: en el Módulo 4 le conectamos datos reales.</p>

El flujo terminado (el 02 de la carpeta) queda así:

```text
Arrancar a mano → Consultas de prueba → Separar en items → ¿Qué tipo de consulta? (Switch)
   ├─ Paquetes → Para área de paquetes ──┐
   ├─ Vuelos   → Para área de vuelos   ──┤
   ├─ Hoteles  → Para área de hoteles  ──┼→ Juntar las ramas (Merge) → Todas en una lista (Aggregate)
   └─ Otra     → Para revisar a mano   ──┘        → Esperar 5 segundos (Wait) → Mail de resumen (simulado)
```

#### Paso 1 · El terreno (75–81)

8. **Filmina 25.** Decís:

<p style="color:#1a7f37">Paso uno: el terreno. Un trigger manual y cinco consultas inventadas, cada una con nombre, monto y categoría. Y una regla desde el primer nodo: cada nodo con un nombre que diga qué hace.</p>

9. Pegás en el chat:

```text
PRÁCTICA · Paso 1: el terreno
1. Workflow nuevo → arriba a la izquierda, nombre: Consultas con lógica
2. Add first step → buscá "manual" → Trigger manually
3. + → buscá "edit" → Edit Fields (Set)
4. Arriba, donde dice Mode: Manual Mapping → cambialo a JSON
5. En el cuadro JSON, borrá lo que hay y pegá el bloque de abajo
6. Renombrá el nodo: Consultas de prueba → Execute step

{
  "consultas": [
    { "nombre": "Martín Gómez", "monto": 12000, "categoria": "paquete" },
    { "nombre": "Lucía Fernández", "monto": 3500, "categoria": "vuelo" },
    { "nombre": "Diego Ramírez", "monto": 800, "categoria": "hotel" },
    { "nombre": "Sofía Herrera", "monto": 15000, "categoria": "paquete" },
    { "nombre": "Carla Méndez", "monto": 6000, "categoria": "crucero" }
  ]
}
```

10. Lo hacés vos en pantalla, a la par. Al apretar **Execute step**, la salida muestra **1 item**. Decís:

<p style="color:#1a7f37">Fíjense: dice 1 item. Hay cinco consultas, pero están todas adentro de un solo casillero, "consultas", que es una lista. Los corchetes quieren decir lista. Para n8n, esto es una sola ficha con una lista adentro. Y nosotros queremos cinco fichas, una por consulta, para que cada una pueda tomar su camino.</p>

11. Pegás en el chat y lo hacés a la par:

```text
7. + → buscá "split" → Split Out
8. En "Fields To Split Out" escribí: consultas
9. Renombrá el nodo: Separar en items → Execute step → tienen que salir 5 items
```

12. Mostrás la salida en la vista **Table** (cinco filas) y en **JSON** (cinco fichas). Decís:

<p style="color:#1a7f37">Split Out quiere decir "separar": agarra la lista y la parte en una ficha por consulta. Ahora sí: cinco items. Miren la vista Table, cinco filas, y la vista JSON, cinco fichas. A partir de acá, cada nodo va a trabajar con cada una por separado.</p>

Para explicar (si preguntan por qué no se puede con un solo nodo): Edit Fields devuelve un item por cada item que
le llega. El trigger manda uno, así que sale uno. En la vida real esto no pasa: Gmail trae un item por mail, Google
Sheets uno por fila. El Split Out es solo para fabricar datos de prueba (o para cuando una aplicación nos devuelve
una lista adentro de una sola ficha, que pasa seguido).

13. Señalás los nombres de los nodos:

<p style="color:#1a7f37">Y miren los nombres: Consultas de prueba, Separar en items. No Edit Fields, no Split Out. Dentro de un mes, cuando abran este flujo, van a entenderlo sin abrir un solo nodo.</p>

#### Paso 2 · El IF (81–88)

14. **Filmina 26.** Decís:

<p style="color:#1a7f37">Paso dos: la primera decisión. Las consultas de más de diez mil dólares las atiende la gerencia; las demás, el equipo de ventas.</p>

15. Pegás en el chat:

```text
PRÁCTICA · Paso 2: el IF
1. + a la derecha de "Separar en items" → buscá "if" → If
2. En Conditions: arrastrá "monto" desde la izquierda al primer cuadro (queda {{ $json.monto }})
3. En el desplegable del medio: Number → is greater than
4. En el último cuadro: 10000
5. Renombralo: ¿Más de USD 10.000? → Execute step
6. Mirá la salida: True Branch (2 items) y False Branch (3 items)
```

16. Lo hacés a la par. En la salida, mostrás las dos pestañas: **True Branch** con Martín y Sofía, **False Branch**
    con Lucía, Diego y Carla. Decís:

<p style="color:#1a7f37">Una sola ejecución, y el IF separó: dos por true, tres por false. Cada consulta se miró por separado. Es lo de la filmina 14: algunos items van por un lado y otros por el otro, al mismo tiempo.</p>

17. Pegás en el chat:

```text
7. + en la salida "true" → Edit Fields (Set)
   Add Field → name: asignado_a   value: Gerencia
   Activá "Include Other Input Fields" (para no perder nombre, monto y categoría)
   Renombralo: Asignar a gerencia
8. + en la salida "false" → otro Edit Fields igual, con value: Equipo de ventas
   Renombralo: Asignar a ventas
9. Execute workflow (el botón de abajo) y mirá los números sobre las flechas
```

18. Al ejecutar, sobre la flecha de arriba dice **2 items** y sobre la de abajo **3 items**. Abrís **Asignar a
    gerencia**: Martín y Sofía con `asignado_a: Gerencia`. Decís:

<p style="color:#1a7f37">Esto es una acción distinta en cada rama. Acá es un casillero nuevo; en la vida real sería un mail a la gerente o un mensaje al equipo. Y fíjense que activé "incluir los otros campos": si no, el nodo devuelve solo asignado_a y perdemos quién era el cliente.</p>

**Plan B:** si algo no sale, abrí **01 · Consultas: el IF (paso 2)**, que es este mismo flujo terminado, y seguí
desde ahí.

#### Paso 3 · El Switch (88–95)

19. **Filmina 27.** Decís:

<p style="color:#1a7f37">Ahora cambia el pedido: el jefe quiere que cada consulta vaya a su área según el tipo. Paquete, vuelo u hotel. Tres caminos: el IF ya no alcanza. Podríamos colgar un IF de otro, pero ya sabemos que eso es un Switch mal hecho.</p>

20. Sacás el IF: seleccionás **¿Más de USD 10.000?**, **Asignar a gerencia** y **Asignar a ventas** (arrastrando un
    recuadro alrededor de los tres con el mouse) y apretás **Supr**. Decís:

<p style="color:#1a7f37">Lo borro sin miedo: el IF ya cumplió, y está guardado en el archivo 01. Ahora la decisión es otra.</p>

21. Pegás en el chat:

```text
PRÁCTICA · Paso 3: el Switch
(Primero borrá el IF y sus dos Edit Fields: seleccionalos y apretá Supr)
1. + a la derecha de "Separar en items" → buscá "switch" → Switch
2. Mode: Rules. En Routing Rules, regla 1:
   arrastrá "categoria" al primer cuadro → String → is equal to → paquete
   Activá "Rename Output" → nombre: Paquetes
3. Add Routing Rule → igual, con: vuelo  (salida: Vuelos)
4. Add Routing Rule → igual, con: hotel  (salida: Hoteles)
5. Abajo, Add option → Fallback Output → Extra Output
   Add option → Rename Fallback Output → Otra
6. Renombralo: ¿Qué tipo de consulta? → Execute step
```

22. Lo hacés a la par. En la salida aparecen cuatro pestañas: **Paquetes** (2: Martín y Sofía), **Vuelos** (1:
    Lucía), **Hoteles** (1: Diego) y **Otra** (1: Carla). Decís:

<p style="color:#1a7f37">Un solo nodo, cuatro caminos. Y miren a Carla: pidió un crucero, que no es ninguna de nuestras categorías. No se perdió: salió por Otra, la salida por defecto.</p>

23. **Probar qué pasa con lo que no está contemplado** (lo pide la filmina). Abrís el Switch, en *Options* cambiás
    *Fallback Output* a **None** y apretás **Execute step**. Carla no aparece en ninguna salida: son 4 items, no 5.
    Decís:

<p style="color:#1a7f37">Sin la salida por defecto, Carla desaparece. No hay error, no hay aviso: simplemente nadie le contesta. Por eso la salida por defecto se activa siempre.</p>

Lo volvés a poner en **Extra Output**.

24. Pegás en el chat:

```text
7. En cada salida del Switch, un Edit Fields con:
   Add Field → name: area   value: (el que corresponda)
   Activá "Include Other Input Fields"
   Paquetes → value: Área de paquetes   → nombre del nodo: Para área de paquetes
   Vuelos   → value: Área de vuelos     → nombre del nodo: Para área de vuelos
   Hoteles  → value: Área de hoteles    → nombre del nodo: Para área de hoteles
   Otra     → value: Revisar a mano     → nombre del nodo: Para revisar a mano
   Truco: armá el primero, seleccionalo, Ctrl+C y Ctrl+V, y cambiale el valor y el nombre.
8. Execute workflow: 2, 1, 1 y 1 items sobre las flechas.
```

25. Lo hacés a la par (con el truco de copiar y pegar). Decís:

<p style="color:#1a7f37">Copiar y pegar nodos ahorra mucho tiempo: el nodo se copia con toda su configuración y solo hay que cambiarle lo que es distinto. Y ojo: el nodo pegado queda suelto, hay que conectarlo a su salida.</p>

#### Paso 4 · Volver a juntar (95–102)

26. **Filmina 28.** Decís:

<p style="color:#1a7f37">Paso cuatro: tenemos las consultas repartidas en cuatro ramas. Para mandar un solo resumen, primero hay que volver a juntarlas, y después pasar de cinco items a uno.</p>

27. Pegás en el chat:

```text
PRÁCTICA · Paso 4: volver a juntar
1. + a la derecha de "Para área de paquetes" → buscá "merge" → Merge
2. Mode: Append. En "Number of Inputs" elegí 4
3. Conectá cada Edit Fields a una entrada del Merge (arrastrá del puntito derecho al puntito de entrada):
   paquetes → Input 1, vuelos → Input 2, hoteles → Input 3, revisar a mano → Input 4
4. Renombralo: Juntar las ramas → Execute workflow → tiene que salir 5 items
```

28. Lo hacés a la par. Al ejecutar, **Juntar las ramas** devuelve 5 items, primero los dos paquetes, después vuelos,
    hoteles y Carla. Decís:

<p style="color:#1a7f37">El embudo con cuatro mangueras. Entraron dos, uno, uno y uno: salen cinco, todos juntos de nuevo. Y cada uno trae su casillero área.</p>

29. **Reproducir el flujo congelado** (lo pide la filmina). En **Consultas de prueba**, cambiás la categoría de Diego
    de `"hotel"` a `"vuelo"`. **Execute workflow**: la rama **Hoteles** queda con 0 items y su nodo gris. El Merge
    igual devuelve 5. Decís:

<p style="color:#1a7f37">Dejamos la rama de hoteles sin nadie. ¿Se congeló? No: el Merge está en Append, y sigue con lo que llegó. Este es el modo seguro para juntar ramas. En el desafío de recién estaba en Combine, y ahí sí se frenaba. Si alguna vez un Merge los deja colgados, lo primero que miran es el modo y si alguna rama llegó vacía.</p>

Volvés a poner `"hotel"` a Diego.

30. Pegás en el chat:

```text
5. + a la derecha de "Juntar las ramas" → buscá "aggregate" → Aggregate
6. Aggregate: All Item Data (Into a Single List)
7. Put Output in Field: consultas
8. Renombralo: Todas en una lista → Execute step → tiene que salir 1 item
```

31. Lo hacés a la par. La salida es **1 item** con la lista de las cinco consultas adentro. Decís:

<p style="color:#1a7f37">¿Se acuerdan del rompehielo? Entraron cinco, salió uno. Ese uno tiene adentro la lista con las cinco consultas. Ahora, cualquier acción que pongamos después se va a ejecutar una sola vez: un mail, no cinco.</p>

#### Paso 5 · Ordenar (102–110)

32. **Filmina 29.** Decís:

<p style="color:#1a7f37">Último paso: una espera antes de la acción final, el mensaje de resumen, y dejar el flujo prolijo y guardado.</p>

33. Pegás en el chat:

```text
PRÁCTICA · Paso 5: ordenar
1. + a la derecha de "Todas en una lista" → buscá "wait" → Wait
   Resume: After Time Interval · Wait Amount: 5 · Wait Unit: Seconds
   Renombralo: Esperar 5 segundos
2. + → Edit Fields (Set) → Add Field → name: mensaje
   En value pegá esto (si el cuadro queda en Fixed, pasalo a Expression):

Buen día. Hoy entraron {{ $json.consultas.length }} consultas:
{{ $json.consultas.map(c => '- ' + c.nombre + ' (' + c.categoria + ', USD ' + c.monto + '): ' + c.area).join('\n') }}

   Renombralo: Mail de resumen (simulado)
3. Execute workflow: espera 5 segundos y sale el mensaje
```

34. Lo hacés a la par. Al ejecutar, el nodo Wait queda unos segundos "girando" y después sale el mensaje:

```text
Buen día. Hoy entraron 5 consultas:
- Martín Gómez (paquete, USD 12000): Área de paquetes
- Sofía Herrera (paquete, USD 15000): Área de paquetes
- Lucía Fernández (vuelo, USD 3500): Área de vuelos
- Diego Ramírez (hotel, USD 800): Área de hoteles
- Carla Méndez (crucero, USD 6000): Revisar a mano
```

35. Explicás la expresión, sin pretender que la memoricen:

<p style="color:#1a7f37">No hace falta aprenderse esto de memoria. Leámoslo en castellano: consultas punto length es "cuántas consultas hay". Map es "para cada consulta, armá una línea" con guion, nombre, categoría, monto y área. Y join con barra n es "unilas, una abajo de la otra". En la vida real, este texto sería el cuerpo del mail; en el Módulo 4 lo mandamos de verdad.</p>

<p style="color:#1a7f37">Y el Wait: hoy son cinco segundos para verlo. En la vida real, podría ser "esperá hasta las 9 de la mañana", así el resumen le llega a la dueña cuando empieza el día.</p>

36. **Documentarlo.** Revisás en voz alta los nombres de todos los nodos, y agregás una nota: **Shift + S** (o el
    botón de nota a la derecha), doble clic, y pegás:

```text
## Consultas con lógica
Cinco consultas de prueba. El Switch manda cada una a su área según la categoría; lo que no encaja va a revisar a mano. El Merge junta las ramas, el Aggregate las pone en una lista y se arma un solo mensaje de resumen.
```

<p style="color:#1a7f37">Esto es documentar: nombres que dicen qué hace cada nodo y una nota que explica el flujo entero. Es lo que separa un flujo que se puede mantener de uno que hay que tirar y hacer de nuevo.</p>

37. **Exportarlo.** **Ctrl + S** para guardar. Después, menú **…** arriba a la derecha → **Download** ("descargar").
    Se baja un archivo `.json` con el nombre del flujo. Pegás en el chat:

```text
PRÁCTICA · Guardalo
Ctrl + S → menú … (arriba a la derecha) → Download
Guardá el .json en una carpeta del curso: en el Módulo 4 le enchufamos datos reales a este mismo flujo.
```

<p style="color:#1a7f37">Exportar es sacar una copia del flujo como archivo. Sirve de respaldo, para pasárselo a otra persona o para llevarlo a otro n8n. Es el mismo tipo de archivo que yo les pasé para importar.</p>

**Plan B:** si se va el tiempo o algo no sale, abrí **02 · Consultas con lógica (completo)** y recorrélo nodo por
nodo, ejecutándolo.

#### Las trabas más comunes durante la práctica

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "No encuentro dónde poner el JSON" | En Edit Fields, arriba, **Mode** → **JSON**. Por defecto viene en *Manual Mapping*. |
| "Me sale 1 item, no 5" | Les falta el **Split Out** (Paso 1, punto 7), o en *Fields To Split Out* no escribieron `consultas` igual. |
| "El IF se puso rojo: *Wrong type: '12000' is a string*" | Pegaron el monto con comillas (`"12000"`). Que lo saquen, o que activen **Convert types where required** en el IF. |
| "Todo va por false" | El casillero del IF está mal escrito. Que lo borren y lo arrastren desde la entrada (es el detective de la Sección 01). |
| "No me aparece la salida Otra" | Falta *Add option* → **Fallback Output** → *Extra Output* en el Switch. |
| "En el Merge se perdieron el nombre y el monto" | En los Edit Fields de las ramas no activaron **Include Other Input Fields**. |
| "El Merge tiene solo 2 entradas" | *Number of Inputs* → 4. Solo aparece en el modo **Append**. |
| "El mensaje sale con las llaves tal cual" | El cuadro quedó en *Fixed*. Que lo pasen a **Expression**. |
| "El mensaje dice *undefined*" | Falta el casillero `area` en alguna rama, o se llama distinto. Que miren la salida de *Juntar las ramas*. |
| "Pegué el nodo pero no hace nada" | El nodo copiado queda suelto: hay que conectarlo. |
| "No tengo n8n" | Que sigan en tu pantalla y lo armen en casa (Ejercicio 5). |

---

### 110–116 · Para practicar y cómo sigue

#### Filmina 30 · Para practicar: este módulo no tiene pre-entrega (3 min)

<p style="color:#1a7f37">Esta semana no hay entrega. Lo que sí conviene: volver a armar el flujo de hoy desde cero, sin mirar la grabación. Y un desafío: sumarle una cuarta ruta al Switch. Guarden el archivo: en el Módulo 4 le enchufamos datos reales.</p>

Para explicar:
- **"Sin entrega formal: este módulo es de fundamentos. No hay nada que subir."** **Fundamentos** son las bases,
  lo que sostiene todo lo demás. No se evalúa con una entrega, pero todo lo que viene se apoya acá: la próxima
  pre-entrega ya pide un flujo armado.
  - *Ejemplo:* Es como aprender a pasar los cambios antes de salir a la ruta: no hay examen de cambios, pero sin eso
    no se maneja.
- **"Lo que sí conviene: volver a armar el flujo de hoy desde cero, sin mirar la grabación."** Seguir los pasos de
  otro y armarlo solo son dos cosas distintas. Al armarlo solos van a aparecer las dudas reales ("¿dónde estaba la
  salida por defecto?"), y ahí se aprende. Es el Ejercicio 5.
  - *Ejemplo:* Mirar a alguien hacer una receta y hacerla uno: la segunda vez es cuando uno descubre que no sabía
    cuánto batir.
- **"Un desafío extra: sumale una cuarta ruta al Switch y resolvé qué hacer con los items que caen en la salida por
  defecto."** Es el Ejercicio 6: agregar "crucero" como categoría y decidir qué pasa con lo que no encaja (¿se
  manda a una persona? ¿se le responde algo al cliente?).
  - *Ejemplo:* Cuarta regla: categoria = crucero → "Área de cruceros". Carla ahora va ahí, y la salida *Otra*
    queda vacía hasta que llegue algo raro.
- **"Guardá el .json: en el módulo 4 le vamos a enchufar datos reales a este mismo flujo."** El archivo que
  descargaron es el punto de partida de la clase que viene.
  - *Ejemplo:* En el Módulo 4, el nodo *Consultas de prueba* se reemplaza por uno que trae consultas reales desde
    internet, y el resto del flujo queda igual.

#### Filmina 31 · ¿Cómo sigue? Del canvas al mundo exterior (3 min)

<p style="color:#1a7f37">Ya tienen un flujo que decide solo. Lo que le falta es hablar con otros sistemas: hoy los datos los inventamos nosotros. En el Módulo 4 vemos APIs, HTTP y credenciales, y el mismo flujo de hoy va a recibir datos reales.</p>

Para explicar:
- **"Lo que ya tenés: un workflow con lógica de control que corre de punta a punta y decide solo."** Repasá lo
  que armaron: separa, decide, junta, resume y espera.
  - *Ejemplo:* Cinco consultas entraron, cada una fue a su área, y salió un resumen. Sin tocar nada en el medio.
- **"Lo que le falta: hablar con otros sistemas. Hoy los datos los inventaste vos con un Edit Field."** Todo lo de
  hoy pasó adentro de n8n. Un flujo útil de verdad recibe datos de afuera y deja el resultado afuera.
  - *Ejemplo:* Falta que las consultas lleguen de un formulario real y que el resumen llegue al mail de la dueña.
- **"Módulo 4: conceptos técnicos. Qué es una API, cómo funciona HTTP, credenciales y autenticación, y el nodo HTTP
  Request."** Una **API** es la puerta por la que un programa le habla a otro. **HTTP** es el idioma en que se
  hablan las páginas y las aplicaciones por internet (es el `http://` de las direcciones). **Autenticación** es
  demostrar quién sos, como mostrar el documento. **HTTP Request** ("pedido HTTP") es el nodo que habla con
  cualquier aplicación, aunque no tenga un nodo propio en n8n: el podcast del material lo llama "la llave maestra".
  - *Ejemplo:* Con HTTP Request, n8n le puede pedir a un servicio el clima de Bariloche, o la cotización del dólar,
    y usarlo en el flujo.
- **"La conexión: el mismo flujo de hoy, pero con datos reales entrando desde afuera."**
  - *Ejemplo:* *Consultas de prueba* → *consultas que llegan de un formulario web*. El Switch, el Merge y el
    Aggregate no cambian.

---

### 116–120 · Preguntas y cierre

**Filmina 32 · ¿Preguntas?** (3 min) — las tres de la filmina: el nodo que más les costó, cuándo IF y cuándo Switch,
y si tienen algún flujo propio que se congela.

<p style="color:#1a7f37">¿Cuál fue el nodo que más les costó? ¿Quedó claro cuándo un IF y cuándo un Switch? ¿Alguno tiene un flujo que se le queda trabado y no sabe por qué? Micrófono o chat.</p>

**Filmina 33 · ¡Gracias!** (1 min)

<p style="color:#1a7f37">Gracias. Para la semana que viene: rearmar el flujo de hoy desde cero, el desafío de la cuarta ruta, leer el material y hacer el cuestionario. Y traigan el archivo del flujo.</p>

- **Para la Semana 4:**
  1. Los **ejercicios para casa** (5 a 8).
  2. Guardar el `.json` del flujo de hoy.
  3. Leer `Semana 3.docx` y hacer el cuestionario del módulo en la plataforma.

---

### Checklist de salida

- [ ] Distinguen trigger, action y transform, y saben leer el estado de un nodo (colores e items).
- [ ] Saben que un error se busca en la entrada del nodo, no solo en el que se puso rojo.
- [ ] Saben cuándo usar IF, Switch y Filter, y por qué activar la salida por defecto.
- [ ] Entienden qué hacen Merge (y sus modos), Aggregate y Wait.
- [ ] Armaron (o vieron armar) el flujo de consultas y lo exportaron.

---

### Glosario de la clase

Todas las palabras técnicas de hoy, en criollo. Se puede pegar en el chat al final de la clase.

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **Workflow / flujo** | Una automatización completa, de punta a punta. | "Consultas con lógica." |
| **Nodo** | Cada bloque del flujo. Hace una sola cosa. | El nodo Switch. |
| **Canvas / lienzo** | La pantalla tipo pizarrón donde se ponen los nodos. | Donde se arrastran y se conectan. |
| **Trigger** | Disparador: el nodo que arranca el flujo. Siempre va primero. | "Llegó un mail", "todos los lunes a las 9". |
| **Action** | Acción: un nodo que hace algo en otra aplicación. | Mandar un mail, agregar una fila. |
| **Transform** | Transformación: un nodo que trabaja con los datos adentro de n8n. | Edit Fields, IF, Merge. |
| **Nodo de control** | Un nodo que decide por dónde va el dato. | IF, Switch, Merge, Wait, Filter. |
| **Webhook** | Un aviso automático que una aplicación le manda a otra cuando pasa algo. | La tienda avisa "entró un pedido". |
| **Schedule** | Un trigger por horario. | "Todos los días a las 9." |
| **Ejecución** | Cada vez que el flujo corre. | La pestaña *Executions*. |
| **Item** | Cada dato suelto que pasa por el flujo. | Cinco consultas son cinco items. |
| **Campo** | Un casillero de la ficha JSON. | `monto`, `categoria`. |
| **Lista / array** | Varios valores seguidos, entre corchetes. | `["Martín", "Lucía"]` |
| **Conexión** | La línea que une la salida de un nodo con la entrada de otro. | Define el orden y el camino. |
| **Entrada / salida** | El puntito izquierdo (recibe) / el derecho (manda) de un nodo. | El IF tiene dos salidas. |
| **Rama** | Cada camino que sale de un nodo que decide. | La rama *true* del IF. |
| **Bifurcación** | Donde un camino se divide en dos o más. | Un IF bifurca; un Merge cierra la bifurcación. |
| **Condición** | Una pregunta que se responde con sí o no. | ¿El monto es mayor a 10.000? |
| **True / false** | Verdadero / falso: las dos salidas del IF. | 12.000 > 10.000 → true. |
| **Binario** | De a dos: sí o no. | El IF es binario. |
| **Anidar** | Poner un nodo de decisión adentro de otro. | Un IF colgado del false de otro IF. |
| **Regla (Routing Rule)** | Cada condición del Switch, con su salida. | categoria = vuelo → Vuelos. |
| **Salida por defecto (Fallback)** | La salida del Switch para lo que no encaja en ninguna regla. | El crucero va a "Otra". |
| **Consolidar** | Juntar muchas cosas sueltas en una sola. | Aggregate: cinco items → uno. |
| **Append** | Modo del Merge que pone una lista detrás de la otra. | El modo seguro para juntar ramas. |
| **Combine** | Modo del Merge que arma parejas entre las dos entradas. | Pedido + precio por el código. |
| **Debuggear** | Buscar y arreglar errores (de *bug*, "bicho"). | Mirar el canvas, después la entrada del nodo. |
| **Documentar** | Dejar el flujo explicado: nombres claros y una nota. | La *sticky note* con qué hace el flujo. |
| **Exportar** | Bajar el flujo como un archivo `.json`. | Menú … → *Download*. |
| **Expresión** | Lo que va entre llaves dobles: trae o calcula un dato. | `{{ $json.monto }}` |
| **CRM** | El programa donde una empresa anota sus clientes y ventas. | Donde va cada consulta nueva. |
| **API** | La puerta por la que un programa le habla a otro. | Lo vemos en el Módulo 4. |
| **HTTP** | El idioma en que se hablan las aplicaciones por internet. | El `http://` de las direcciones. |
