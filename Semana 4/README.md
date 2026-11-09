# Semana 4 — Módulo 4: Conceptos técnicos

Fuente: `program-summary.pdf` (Módulo 4). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_4_AI_Automation.pptx` | Las filminas del módulo (35). |
| `Semana 4.docx` | El material de lectura: APIs, HTTP, credenciales, el cuestionario de 5 preguntas, el podcast y la Pre-entrega 2. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase y para casa, el paso a paso de la práctica y la consigna completa de la Pre-entrega 2 con su rúbrica. Se comparte con los alumnos. |
| [n8n/](n8n/) | Cinco workflows listos para importar: el primer GET, la API Key, el detective de errores, el webhook completo y un simulador que le manda consultas al webhook. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, qué pasa en cada flujo, el paso a paso de OAuth2 con Google y la pre-entrega resuelta con el caso de la agencia. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿De dónde saca los datos tu app? | 2 min |
| En clase | 2 · ¿Qué método usarías? | 3 min |
| En clase | 3 · Detective de errores HTTP | 6 min |
| En clase | 4 · Tu primera integración real (lo arman a la par del profe) | 37 min |
| Casa | 5 · Repetilo con otras APIs (clima, Pokémon, Rick and Morty) | 35 min |
| Casa | 6 · Leé una respuesta: objetos y listas | 10 min |
| Casa | 7 · ¿Webhook o polling? | 10 min |
| Casa | 8 · OAuth2 con Google, con calma | 30 min |
| Casa | Pre-entrega 2 (con el ejemplo resuelto como guía) | 90–120 min |

## Evaluación

- **Pre-entrega 2: Infraestructura de integración técnica.** Un workflow que recibe o consulta datos de afuera
  (webhook o API), los procesa con al menos dos nodos de lógica o transformación y entrega un resultado claro. Un
  único PDF con capturas, diagrama y una reflexión sobre qué pasa si la API falla. 100 pts, se aprueba con 70.

## A tener en cuenta

- **En la teoría hay bloques "En n8n, paso a paso"**: al presentar cada nodo, los clics para agregarlo y configurarlo con un ejemplo de la clase. Están pensados para mostrarlos en tu n8n en un minuto mientras lo contás. Si vas corto de tiempo, pegá el bloque en el chat y seguí: en la práctica lo hacen completo.
- **El número de la pre-entrega no coincide otra vez:** la filmina 32 dice "pre-entrega 4"; el
  `program-summary.pdf` y el material de lectura dicen **"Preentrega 2: Infraestructura de integración técnica"**,
  que es la que corresponde al Módulo 4. En el guion se dice "Pre-entrega 2".
- **Las APIs de la práctica son reales y están probadas** (el 6 de noviembre de 2026, desde n8n 2.46):
  - **dolarapi.com** (cotización del dólar, sin clave) para el primer GET;
  - **NewsAPI** (noticias, gratis con registro) para la API Key: sin clave o con la clave mal devuelve **401**;
  - **httpbin.org** devuelve a pedido los errores 401, 403, 404, 429 y 500, para el detective de errores.
  Si alguna está caída el día de la clase, los flujos 01 y 02 se cambian por Open-Meteo (el clima, sin clave), que
  está en el Ejercicio 5.
- **OAuth2 con Google (Paso 3) es largo:** crear el proyecto en Google Cloud, la pantalla de consentimiento, el
  cliente y la credencial lleva 15 minutos la primera vez. En clase lo hacés vos en pantalla (9 minutos, con lo
  previo ya armado) y los alumnos lo repiten en casa con el Ejercicio 8, que tiene el paso a paso completo.
- **En n8n 2.x, "activar" un flujo se llama "Publish"** ("publicar"). La URL de producción de un webhook solo
  funciona con el flujo publicado; la de prueba, solo después de apretar *Execute workflow*.
- **El material de lectura menciona el modelo cliente-servidor, los endpoints, la idempotencia y arrays contra
  objetos**, que las filminas no tienen. Están en los "Para explicar" y en el Ejercicio 6.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–13 | Apertura y repaso de la Semana 3 | 1–5 | Mini cuestionario (2 min) |
| 13–25 | **01 · Qué es una API** | 6–10 | Ej. 1 (2 min) |
| 25–45 | **02 · El protocolo HTTP** | 11–17 | Ej. 2 (3 min) |
| 45–60 | **03 · Credenciales y HTTP Request** | 18–23 | |
| 60–70 | Break | 24 | |
| 70–76 | **04 · Detective de errores** | 25–26 | Ej. 3 (6 min) |
| 76–113 | **04 · Práctica en vivo:** GET, API Key, OAuth2, webhook y todo junto | 27–31 | Ej. 4: lo arman a la par |
| 113–117 | Para practicar, Pre-entrega 2 y cómo sigue | 32–33 | |
| 117–120 | Preguntas y cierre | 34–35 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden: el mini cuestionario del repaso (se dicen las respuestas), el Ejercicio 2 (se dice la respuesta), el Basic Auth y la
idempotencia (se mencionan), el Paso 3 de OAuth2 (se muestra la credencial ya conectada y se deja todo para el
Ejercicio 8), el Paso 5 (se muestra el flujo 04 ya armado, mandándole una consulta con el 05). Lo último que se
recorta es el Paso 2 (la API Key y el 401) y el Paso 4 (el webhook): son los que pide la pre-entrega.

---

### Preparación (antes de la clase)

- [ ] **Tu n8n prendido y logueado.** Probá antes la práctica entera.
- [ ] **Los workflows importados** (carpeta [n8n/](n8n/), probados en n8n 2.46). Workflow nuevo → menú **…** →
  **Import from File** → **Save**:
  - `01-primer-get-dolar.json`: el Paso 1 terminado. Ejecutalo: tiene que dar `estado_http: 200` y la cotización.
  - `02-api-key-noticias.json`: el Paso 2 terminado. Al importarlo no tiene credencial: elegí la tuya de NewsAPI.
  - `03-detective-de-errores.json`: el Ejercicio 3. Cinco nodos, cada uno da un error real.
  - `04-webhook-consulta.json`: los Pasos 4 y 5 terminados (webhook → dólar → noticias → respuesta). Elegí tu
    credencial de NewsAPI en el nodo de noticias.
  - `05-simulador-formulario.json`: le manda una consulta al webhook del 04, como si fuera un formulario.
- [ ] **Tu cuenta de NewsAPI** (newsapi.org → *Get API Key*, gratis) y la credencial **Header Auth** ya creada en
  n8n con el nombre `NewsAPI`. En clase creás otra en vivo; esta es por si algo falla.
- [ ] **Google Cloud preparado para el Paso 3:** un proyecto creado, la API de Google Sheets habilitada y la
  pantalla de consentimiento configurada (con tu Gmail como usuario de prueba). En vivo mostrás solo la creación
  del cliente y el *handshake*. El paso a paso completo está en `ejercicios-docente.md`.
- [ ] **Una planilla de Google** de prueba, con dos o tres filas (para comprobar que OAuth2 funcionó).
- [ ] **Una pestaña de PowerShell** abierta (o Terminal en Mac) para mandarle datos al webhook en el Paso 4.
- [ ] **El día anterior**, avisales a los alumnos: que entren con la computadora, que prendan n8n antes de la clase
  (Docker Desktop → Containers → ▶) y, si pueden, que se creen una cuenta gratis en **newsapi.org** (un minuto:
  mail y contraseña) y tengan a mano la clave. Al que no llegue, se la crea en clase.
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) listo para compartir.
- [ ] Avisar que la clase queda grabada.

---

### 0–13 · Apertura y repaso de la Semana 3

**Filmina 1 · Portada** (1 min) — Módulo 4: Conceptos técnicos.

<p style="color:#1a7f37">Bienvenidos al Módulo 4. Hasta ahora, todo lo que pasaba en n8n se quedaba adentro de n8n. Hoy n8n sale al mundo: le pide datos a otros sistemas, se identifica, y recibe avisos de afuera.</p>

Para explicar:
- **"Conceptos técnicos".** El nombre asusta, pero la idea es simple: cómo se hablan dos programas por internet. Es
  lo que hay debajo de cada nodo de Gmail, de Sheets o de WhatsApp que usemos de acá al final. Hoy abrimos el capó
  y miramos el motor. No hace falta ser mecánico para manejar, pero cuando el auto hace un ruido raro, saber qué
  hay adentro te ahorra mucho tiempo. En automatización, ese "ruido raro" es un error 401 o un 404, y hoy vamos a
  aprender a leerlos.
  - *Ejemplo:* Hasta la semana pasada, las consultas de la agencia las inventábamos nosotros. Desde hoy, el flujo
    puede preguntarle a internet cuánto está el dólar o recibir la consulta de un formulario real.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a entender qué es una API, armar pedidos HTTP, leer los errores por su número, configurar credenciales, y conectar n8n con servicios de afuera, pidiendo y recibiendo.</p>

Para explicar cada objetivo:
- **"Explicar qué es una API y qué información viaja en cada pedido y cada respuesta."** Una **API** es la puerta por
  la que un programa le habla a otro. Cada vez que un programa le pide algo a otro, viaja un "pedido" con
  instrucciones y vuelve una "respuesta" con el resultado. Saber qué va en cada uno es saber qué completar en el
  nodo y qué mirar cuando algo falla.
  - *Ejemplo:* n8n le pide a un servicio "dame la cotización del dólar" y le vuelve `{"venta": 1570}`.
- **"Armar una petición HTTP eligiendo el método correcto y leer lo que devuelve."** **HTTP** es el idioma de esos
  pedidos. **Petición** es lo mismo que pedido (en inglés, *request*). El **método** dice qué queremos hacer:
  leer, crear, cambiar o borrar. Elegir mal el método es como pedirle al mozo "traeme la cuenta" cuando querías
  pedir un postre.
  - *Ejemplo:* Para leer la lista de clientes, GET. Para crear uno nuevo, POST.
- **"Diagnosticar un fallo a partir del status code, distinguiendo un 401 de un 403."** **Diagnosticar** es
  descubrir qué pasó, como un médico. El **status code** ("código de estado") es un número de tres cifras que
  viene en cada respuesta y dice cómo salió todo. 401 y 403 son dos errores de permisos que se confunden mucho, y
  se arreglan distinto.
  - *Ejemplo:* 401: "no sé quién sos" (falta la clave). 403: "sé quién sos, pero no podés entrar acá".
- **"Configurar credenciales en n8n: API Key, Bearer Token y OAuth2 con Google."** Las **credenciales** son la forma
  de demostrarle a otro sistema quiénes somos. Hay varias, de la más simple (una clave) a la más segura (OAuth2,
  que es "iniciar sesión con Google"). Las vamos a configurar en n8n una vez y reutilizarlas.
  - *Ejemplo:* La clave de NewsAPI es una API Key. "Conectar con Google" para leer tus planillas es OAuth2.
- **"Conectar n8n con un servicio externo usando HTTP Request y un Webhook."** Dos direcciones: con **HTTP
  Request**, n8n **pide** ("dame el dólar"); con un **Webhook**, n8n **recibe** ("acá te llega una consulta del
  formulario"). Entre las dos se arma casi cualquier integración. **Integración** es conectar dos sistemas para
  que trabajen juntos.
  - *Ejemplo:* Un formulario manda la consulta a n8n (webhook) y n8n le pregunta al banco el dólar (HTTP Request)
    para responder el precio en pesos.

**Filmina 3 · Agenda** (1 min)

<p style="color:#1a7f37">Primero, qué es una API. Después, HTTP: los métodos, las respuestas y los errores. Después, las credenciales y el nodo HTTP Request. Break. Y la práctica: nuestra primera integración real.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 3** (6 min, sin filmina) — antes de pasar a la filmina 5.

Abrís en tu n8n el flujo terminado de la semana pasada, **02 · Consultas con lógica (completo)** (`02-consultas-con-logica.json`) de la carpeta
[../Semana 3/n8n/](../Semana%203/n8n/), y lo ejecutás una vez para que se vean los números de items en las flechas. El
repaso se hace señalando ese flujo, nodo por nodo:

```text
Arrancar a mano → Consultas de prueba → Separar en items → ¿Qué tipo de consulta? (Switch)
   ├─ Paquetes → Para área de paquetes ──┐
   ├─ Vuelos   → Para área de vuelos   ──┤
   ├─ Hoteles  → Para área de hoteles  ──┼→ Juntar las ramas (Merge) → Todas en una lista (Aggregate)
   └─ Otra     → Para revisar a mano   ──┘        → Esperar 5 segundos (Wait) → Mail de resumen (simulado)
```

<p style="color:#1a7f37">Antes de arrancar, repasemos la semana pasada con el flujo que armamos. Un workflow es una secuencia de nodos conectados, y lo que viaja por las flechas son items: cada consulta es un item. Fíjense en los números arriba de cada flecha: cinco consultas entran, se reparten por las ramas, y al final sale uno solo.</p>

<p style="color:#1a7f37">Había tres tipos de nodos. El trigger arranca el flujo. Las acciones hacen algo en otra aplicación. Y los de transformación trabajan con los datos adentro de n8n, como el Edit Fields, que arma los datos con la forma que queremos.</p>

<p style="color:#1a7f37">Para decidir: IF cuando hay dos caminos, Switch cuando hay tres o más, siempre con una salida para lo que no encaja. Después, Merge vuelve a juntar las ramas, Aggregate pasa de muchos items a uno, y Wait espera sin perder los datos.</p>

<p style="color:#1a7f37">Y la regla para cuando algo falla: primero se mira el canvas, los colores y los números de items, y después la entrada del nodo. El problema casi nunca está en el nodo rojo, sino en lo que le llegó.</p>

Para explicar (señalando cada nodo del flujo):
- **Workflow e items.** Un **item** es cada "paquete" de datos que viaja por las flechas. Casi todos los nodos se
  ejecutan una vez por cada item que les llega.
  - *Ejemplo:* *Separar en items* convierte la lista de cinco consultas en cinco items. Por eso el Switch decide
    cinco veces, una por consulta.
- **Los tres tipos de nodos: trigger, acción y transformación.** Hoy vamos a conocer dos nodos nuevos, y conviene
  ubicarlos ya: el **HTTP Request** es una acción (habla con algo de afuera), y el **Webhook** es un trigger (arranca
  el flujo cuando llega algo de afuera).
  - *Ejemplo:* *Arrancar a mano* es un trigger; *Consultas de prueba* (Edit Fields) es de transformación. Webhook =
    trigger, como el Gmail Trigger. HTTP Request = acción, como el nodo de Sheets.
- **IF y Switch.** El IF tiene dos salidas: *true* y *false*. El Switch tiene una por regla, y la salida por defecto
  (*Fallback Output*) atrapa lo que no encaja en ninguna.
  - *Ejemplo:* La consulta de categoría "crucero" no es paquete, vuelo ni hotel: sin la salida *Otra* se perdía en
    silencio; con ella, va a *Para revisar a mano*.
- **Merge, Aggregate y Wait.** El **Merge** junta ramas: para volver a juntar lo que separó un IF o un Switch, modo
  *Append*. El **Aggregate** pasa de muchos items a uno (una lista). El **Wait** pausa y después sigue con los mismos
  datos.
  - *Ejemplo:* El desafío del flujo congelado: el Merge en modo *Combine* no devolvía nada porque una rama del IF
    llegó vacía. Con *Append*, siguió con lo que había.
- **Diagnosticar mirando lo que llega.** Primero el canvas (qué está verde, qué gris, cuántos items en cada flecha),
  después la pestaña de entrada del nodo que falla. Hoy esto se vuelve más importante: lo que llega viene de afuera y
  no lo controlamos nosotros, así que hay que leer la respuesta con atención para encontrar el casillero que sirve.
  - *Ejemplo:* La respuesta de una API de noticias tiene 20 casilleros; nos sirve uno, el título.

**Mini cuestionario** (2 min). Pegás en el chat:

```text
REPASO · Semana 3. Respondé en el chat con el número y la letra (ej: 1a, 2c...)
1. Quiero mandar las consultas de más de 10.000 dólares al gerente y el resto a ventas. ¿Qué nodo?
   a) IF   b) Switch   c) Merge
2. Las consultas pueden ser de paquete, vuelo, hotel o crucero. ¿Qué nodo?
   a) IF   b) Switch   c) Aggregate
3. Tengo 5 items y quiero UN solo mail con las 5 consultas. ¿Qué nodo?
   a) Merge   b) Wait   c) Aggregate
4. Después de un IF, el Merge no devuelve nada, sin error. ¿Qué miro primero?
   a) Si una rama llegó vacía   b) La contraseña   c) Reinstalar n8n
5. El Edit Fields (Set), ¿qué tipo de nodo es?
   a) Trigger   b) Acción   c) Transformación
```

Respuestas: **1a, 2b, 3c, 4a, 5c**. Leés en voz alta cuántos acertaron cada una. Si alguna anda floja (suele ser la
4), la volvés a explicar con el desafío del flujo congelado, en un minuto.

<p style="color:#1a7f37">Bien. Todo eso sigue valiendo hoy. Lo único que cambia es de dónde vienen los datos: hasta ahora, del nodo Consultas de prueba, que inventamos nosotros. Desde hoy, de afuera.</p>

**Filmina 5 · ¿Dónde quedamos? Del canvas al mundo exterior** (3 min)

<p style="color:#1a7f37">La semana pasada armaron un flujo que decide solo. La trampa: los datos los inventamos nosotros, el flujo nunca habló con nadie. Hoy aprendemos cómo se hablan dos sistemas, y al final de la clase van a tener un flujo que recibe datos de afuera y le pide cosas a una API con clave.</p>

Para explicar:
- **"En el módulo 3: armaste un workflow con lógica de control que corre de punta a punta y decide solo."** El
  flujo de consultas: Switch por categoría, Merge, Aggregate y un resumen. Funciona, decide, resume.
  - *Ejemplo:* Cinco consultas entraron, cada una fue a su área, y salió un solo mensaje.
- **"La trampa: los datos los inventaste vos con un Edit Field. El flujo nunca habló con nadie."** Era un flujo de
  laboratorio. Un flujo útil de verdad recibe datos de afuera (un formulario, un mail, una tienda) y deja el
  resultado afuera (una planilla, un mensaje).
  - *Ejemplo:* Es como practicar el discurso frente al espejo: sirve, pero el público todavía no lo escuchó.
- **"Hoy: aprendemos cómo se hablan dos sistemas y conectamos n8n con un servicio real."** **Servicio** es cualquier
  programa en internet que ofrece algo: una cotización, noticias, el clima, tus planillas de Google.
  - *Ejemplo:* dolarapi.com es un servicio que da la cotización del dólar. Hoy n8n le va a preguntar.
- **"Al final de la clase: vas a tener un flujo que recibe datos de afuera y le pide cosas a una API
  autenticada."** **Autenticada** quiere decir "con identificación": la API nos pide una clave antes de
  responder.
  - *Ejemplo:* Llega una consulta ("Lucía, Mendoza, 800 dólares") → n8n pregunta el dólar → n8n busca noticias de
    Mendoza con su clave → responde "son 1.256.000 pesos, y estas son las noticias de Mendoza".

---

### 13–25 · Sección 01 · Qué es una API

**Filmina 6 · Separador "01"** — pasarla.

<p style="color:#1a7f37">Empecemos por la palabra que más vamos a escuchar de acá al final del curso: API.</p>

#### Filmina 7 · ¿Qué es una API? La forma en que dos programas se hablan (4 min)

<p style="color:#1a7f37">API es la forma en que dos programas se hablan. Una persona toca botones; un programa no puede, y necesita otra vía. Es como el mozo de un restaurante: no entrás a la cocina, le pedís al mozo, y él te trae la respuesta.</p>

Para explicar:
- **"La sigla: Application Programming Interface. En criollo, la forma en la que dos programas se hablan entre
  sí."** *Application* es aplicación, *Programming* es programación, *Interface* es interfaz: el lugar donde dos
  cosas se tocan, como el enchufe entre el cable y la pared. Una API es el "enchufe" que un programa deja para que
  otros se conecten con él. Se pronuncia "a-pe-í" o, como en inglés, "ei-pi-ái".
  - *Ejemplo:* Mercado Pago tiene una API: una tienda online la usa para cobrar sin que el cliente salga de la
    tienda.
- **"El problema que resuelve: una persona toca botones y ve pantallas. Un programa no puede tocar botones, necesita
  otra vía."** La pantalla de Instagram está hecha para ojos y dedos. Un programa no tiene ni una cosa ni la otra:
  necesita una forma de pedir las cosas por escrito, con reglas fijas, y recibir la respuesta también por escrito.
  Esa forma es la API.
  - *Ejemplo:* Para publicar una foto, vos abrís la app y tocás "+". Un programa que publica fotos solo le manda
    a la API de Instagram un pedido escrito: "publicá esta foto con este texto".
- **"La analogía del mozo: vos no entrás a la cocina a cocinar. Le pedís al mozo, el mozo lleva el pedido y te trae
  la respuesta."** El cliente (vos) no sabe cómo se hace el plato ni necesita saberlo. El mozo tiene una carta:
  solo podés pedir lo que está en la carta, y de la forma en que se pide. La cocina es el sistema por dentro.
  - *Ejemplo:* Pedís "una milanesa con papas". No le decís al cocinero a cuántos grados poner el aceite. Si pedís
    algo que no está en la carta, el mozo te dice "eso no tenemos".
- **"Qué es entonces: un intermediario con reglas claras de cómo pedir, que responde sin que sepas cómo funciona la
  cocina."** **Intermediario** es el que está en el medio. Las "reglas claras" están escritas en la
  **documentación** de cada API: el manual que dice qué se puede pedir y cómo. El podcast del material lo llama
  "un contrato": si pedís como dice el contrato, te responden.
  - *Ejemplo:* La documentación de dolarapi.com dice: "si pedís `/v1/dolares/oficial`, te devuelvo la cotización
    del oficial". Esa es la carta.

**El modelo cliente-servidor** (del material de lectura). En toda comunicación por API hay dos roles. El
**cliente** es el que pide (n8n, tu celular, tu navegador). El **servidor** es el que responde (el sistema de
Google, el de Mercado Pago). El servidor está siempre esperando pedidos; nunca habla primero.

- *Ejemplo:* Cuando n8n pide el dólar, n8n es el cliente y dolarapi.com es el servidor. Cuando un formulario le
  manda datos a n8n por un webhook, los roles se invierten: el formulario es el cliente y n8n es el servidor.

**Ejemplo: cómo se le pide algo a otro programa**

❌ Mal: como si fuera una persona.

```text
"Hola, ¿me pasás cuánto está el dólar hoy? Gracias."
```

✅ Bien: con las reglas de la API (la "carta").

```text
GET https://dolarapi.com/v1/dolares/oficial
→ {"compra": 1520, "venta": 1570, "fechaActualizacion": "2026-11-05T11:00:00.000Z"}
```

Por qué: la API no entiende frases; entiende pedidos con la forma exacta que dice su documentación.

#### Filmina 8 · La API en n8n: lo que hay detrás de cada nodo (3 min)

<p style="color:#1a7f37">Cuando usan el nodo de Gmail o de Sheets, ese nodo por dentro le habla a la API de Google. n8n le pone botones a algo que en el fondo es pedirle cosas a una API. Y si un servicio no tiene nodo, igual se puede usar con el nodo HTTP Request.</p>

Para explicar:
- **"Los nodos de marca: cuando usás el nodo de Gmail, Slack o Google Sheets, ese nodo por dentro está usando la API
  de ese servicio."** "De marca" quiere decir que tienen el nombre y el logo de un servicio. Por dentro, cada uno
  arma un pedido a la API de ese servicio con lo que completamos en sus campos.
  - *Ejemplo:* En el nodo de Sheets elegís "agregar fila" y completás las columnas. El nodo arma un pedido a la API
    de Google Sheets: "en esta planilla, agregá esta fila".
- **"Qué hace n8n: le pone interfaz visual a algo que en el fondo es pedirle cosas a una API."** **Interfaz visual**
  es la parte que se ve: campos, desplegables, botones. Nos ahorra escribir el pedido a mano.
  - *Ejemplo:* Es como la app del banco: vos tocás "transferir", y la app arma el pedido al sistema del banco. Vos
    no ves el pedido, ves el botón.
- **"Si el servicio no tiene nodo: igual lo podés usar, con el nodo genérico HTTP Request, hablándole directo a su
  API."** **Genérico** quiere decir "que sirve para cualquiera", no para uno en particular. n8n tiene más de 400
  nodos de marca, pero en internet hay miles de servicios. Para el resto, está el HTTP Request.
  - *Ejemplo:* dolarapi.com no tiene nodo en n8n. Con el HTTP Request le pedimos el dólar igual.
- **"Por eso importa: entender qué es una API es la base para conectar cualquier cosa, tenga o no un nodo
  dedicado."** El que entiende APIs no depende de que exista un nodo.
  - *Ejemplo:* Un sistema de turnos de una clínica, hecho a medida, no va a tener nunca un nodo en n8n. Si tiene
    API, se conecta igual.

#### Filmina 9 · Qué viaja en un pedido: ida y vuelta entre dos sistemas (4 min)

<p style="color:#1a7f37">En cada pedido viajan cuatro cosas: qué queremos hacer, a dónde, con qué datos y quiénes somos. Y la API responde si funcionó o no, con los datos pedidos o un mensaje de error.</p>

Para explicar:
- **"Qué queremos hacer: leer datos, crear algo nuevo, borrar algo."** Es la acción. En HTTP se llama **método**
  (lo vemos en la filmina 14).
  - *Ejemplo:* "Leer" la lista de turnos, "crear" un turno nuevo, "borrar" un turno cancelado.
- **"A dónde: una dirección específica, parecida a la URL de una página web."** Una **URL** es una dirección de
  internet, como `https://dolarapi.com/v1/dolares/oficial`. A cada dirección de una API que acepta pedidos se le
  dice **endpoint** ("punto final"): es cada plato de la carta. Una API tiene muchos endpoints, uno para cada cosa.
  - *Ejemplo:* `/v1/dolares/oficial` da el oficial; `/v1/dolares/blue`, el blue. Mismo servicio, dos endpoints.
  - *Ejemplo:* En la **PokeAPI** (una API gratis con los datos de todos los Pokémon), `/api/v2/pokemon/pikachu`
    trae la ficha de Pikachu y `/api/v2/pokemon/charmander`, la de Charmander: mismo plato, cambia el nombre del
    final. En la **API de Rick and Morty**, `/api/character/1` trae a un personaje y `/api/location/1`, un planeta:
    otro endpoint, otro plato de la carta.
- **"Con qué datos: si querés crear un contacto nuevo, le mandás nombre y email."** Para leer, casi nunca hace falta
  mandar datos. Para crear o cambiar algo, sí: los datos van en el pedido, en formato JSON.
  - *Ejemplo:* Crear un contacto: `{"nombre": "Martín Gómez", "email": "martin@mail.com"}`.
- **"Quiénes somos: para que el servicio sepa que tenemos permiso. Eso es la autenticación."** **Autenticación** es
  demostrar quién sos, como mostrar el documento en la entrada. Algunas APIs no la piden (el dólar es público);
  otras sí (tus mails no los puede leer cualquiera).
  - *Ejemplo:* Para el dólar, nadie te pregunta quién sos. Para leer tus planillas de Google, sí.
- **"Y la API responde: si funcionó o no, y los datos pedidos o un mensaje de error explicando qué salió mal."**
  Siempre vuelve algo: un número que dice cómo salió (200 si todo bien, 404 si no existe…) y el contenido.
  - *Ejemplo:* Bien: `200` y `{"venta": 1570}`. Mal: `401` y `{"message": "Your API key is invalid"}` ("tu clave
    no es válida").

#### Filmina 10 · Para pensar: ¿de dónde saca los datos tu app? (2 min) — Ejercicio 1

<p style="color:#1a7f37">Piensen en una app que usan todos los días. Cuando les muestra el clima, el saldo o los mensajes nuevos, ¿de dónde saca esos datos? Escriban en el chat una app y de dónde creen que saca la información.</p>

Esperás respuestas (1 minuto) y cerrás:

<p style="color:#1a7f37">Casi siempre, de la API de otro sistema. La app del clima no tiene satélites: le pregunta a un servicio meteorológico. Mercado Libre muestra el seguimiento del correo preguntándole a la API del correo. Cada vez que una app muestra algo que no es suyo, hay una API atrás.</p>

- *Ejemplo:* Uber muestra el mapa con la API de Google Maps. La app del banco muestra la cotización preguntándole a
  otro sistema. Rappi muestra el estado del pedido preguntándole al sistema del local.

---

### 25–45 · Sección 02 · El protocolo HTTP

**Filmina 11 · Separador "02"** — pasarla.

<p style="color:#1a7f37">Ya sabemos qué es una API. Ahora, el idioma en que se le habla: HTTP.</p>

#### Filmina 12 · ¿Qué es HTTP? El protocolo que hablan las APIs (3 min + 2 min de demo)

<p style="color:#1a7f37">HTTP es el idioma que usan casi todas las APIs y también los navegadores. Define cómo se arma un pedido y cómo se arma una respuesta. En el navegador, la respuesta es una página; con una API, son datos, casi siempre en JSON.</p>

Para explicar:
- **"La sigla: HyperText Transfer Protocol. Es el idioma que usan la mayoría de las APIs, y también los
  navegadores."** "Protocolo de transferencia de hipertexto". **Protocolo** es un conjunto de reglas para
  comunicarse, como el protocolo de una ceremonia: quién habla primero, qué se dice. **Hipertexto** es texto con
  links, el de las páginas web. Es el `http://` (o `https://`, la versión segura, con la información cifrada) que
  aparece en las direcciones.
  - *Ejemplo:* `https://www.google.com`: la `s` de https dice que la conversación va cifrada, para que nadie en el
    medio la pueda leer.
- **"Qué define: cómo se arma un pedido y cómo se arma una respuesta, para que dos sistemas se entiendan sin
  importar en qué lenguaje estén hechos."** Un sistema puede estar hecho en un lenguaje de programación y el otro en
  otro: no importa, porque los dos hablan HTTP. Es como el inglés en un aeropuerto: el piloto y la torre pueden ser
  de países distintos, pero se hablan en el mismo idioma con frases fijas.
  - *Ejemplo:* n8n está hecho en JavaScript; dolarapi.com puede estar hecho en otro lenguaje. Se entienden igual.
- **"En el navegador: pedís una página y el servidor devuelve el contenido que después ves lindo en pantalla."**
  Cada vez que escribís una dirección en el navegador, el navegador hace un pedido HTTP. Lo que vuelve es HTML (el
  código de una página) que el navegador dibuja con colores y botones.
  - *Ejemplo:* Escribís `clarin.com`: el navegador pide, el servidor manda la página, y vos ves las noticias.
- **"Con una API: pasa exactamente lo mismo, pero en vez de una página devuelve datos crudos, generalmente en
  JSON."** **Crudos** quiere decir sin diseño: solo los datos, en la ficha con casilleros que ya conocemos.
  - *Ejemplo:* Pegá `https://dolarapi.com/v1/dolares/oficial` en el navegador: en vez de una página linda, ves el
    JSON con la cotización. Mostralo en vivo: es la forma más rápida de que lo vean.

**Demo en vivo: dos APIs para jugar (2 min, en el navegador).** Después del dólar, dos APIs gratis, sin clave y
sin cuenta, que sirven para que vean que pedirle algo a una API es escribir una dirección. Las dos están probadas
(noviembre 2026). Son buenas para practicar porque se puede pedir cualquier cosa sin miedo a romper nada.

<p style="color:#1a7f37">El dólar es serio. Probemos con algo más divertido, que funciona exactamente igual. Hay una API con los datos de todos los personajes de Rick and Morty, y otra con todos los Pokémon. Escribimos una dirección, y vuelve una ficha.</p>

```text
DEMO · Dos APIs en el navegador (sin clave)
1. https://rickandmortyapi.com/api/character/1
   → la ficha de Rick Sanchez: name, status ("Alive"), species ("Human"), origin, location...
   → cambiá el 1 por un 2: aparece Morty. Mismo endpoint, otro dato.
   → el casillero "image" es otra URL: abrila y aparece la foto del personaje.
2. https://pokeapi.co/api/v2/pokemon/pikachu
   → la ficha de Pikachu: id 25, height 4, weight 60, types, abilities...
   → cambiá pikachu por charmander (en minúscula).
```

Para explicar:
- **Es lo mismo que el dólar, con otros datos.** Un pedido GET, una dirección, y vuelve JSON. No hay nada especial
  en que sea un juego: así le habla n8n a cualquier sistema.
  - *Ejemplo:* `dolarapi.com/v1/dolares/oficial` y `pokeapi.co/api/v2/pokemon/pikachu` tienen la misma forma:
    servicio, endpoint, y lo que pedís al final.
- **Cambiar la dirección es cambiar el pedido.** No hay botones: lo que pedís está escrito en la URL.
  - *Ejemplo:* `/character/1` es Rick, `/character/2` es Morty. `/pokemon/pikachu` es Pikachu, `/pokemon/mew` es
    Mew. Que prueben su personaje favorito y peguen en el chat lo que les vino.
- **Los datos vienen crudos: para entenderlos, está la documentación.** La API no explica sus números; el manual sí.
  - *Ejemplo:* Pikachu tiene `"height": 4` y `"weight": 60`. ¿Mide 4 metros? No: la documentación de la PokeAPI dice
    que la altura va en decímetros y el peso en hectogramos. Pikachu mide 40 cm y pesa 6 kg.
- **A veces el JSON es enorme, y no pasa nada.** La ficha de Pikachu trae la lista de todos sus movimientos: más de
  300 KB de texto. Uno no lee todo; busca el casillero que necesita.
  - *Ejemplo:* En Chrome, tildá **Dar formato** ("Pretty print") arriba de la respuesta para verla ordenada; en
    Firefox se ve ordenada sola. Buscá `"name"` y `"types"` y listo.

Si en clase hay poco tiempo, mostrá solo Rick (la ficha es corta) y dejá Pikachu para casa: está en el
Ejercicio 5 de [ejercicios-alumnos.md](ejercicios-alumnos.md), ya con n8n.

#### Filmina 13 · Request y Response: las dos mitades de toda comunicación (4 min)

<p style="color:#1a7f37">Toda comunicación HTTP tiene dos mitades. El request, lo que mandamos: la URL, el método, los headers y, a veces, el body. Y el response, lo que vuelve: un status code, sus headers y el body con los datos.</p>

Para explicar:
- **"Request · URL: la dirección exacta a la que le hablás."** *Request* es "pedido". La URL tiene partes: el
  servicio (`https://dolarapi.com`), el endpoint (`/v1/dolares/oficial`) y, a veces, **parámetros** después de un
  `?`: datos extra para el pedido, separados con `&`.
  - *Ejemplo:* `https://newsapi.org/v2/everything?q=Bariloche&language=es`: el endpoint es `/v2/everything` y los
    parámetros dicen "buscá Bariloche, en español".
  - *Ejemplo:* `https://rickandmortyapi.com/api/character/?name=rick&status=alive`: los parámetros dicen "personajes
    que se llamen Rick y estén vivos". La respuesta empieza con `"count": 29` (hay 29) y después la lista. Sacás
    `&status=alive` y son más: cada parámetro es un filtro.
- **"Request · Método: qué acción querés hacer."** GET, POST, PUT, PATCH o DELETE (filmina 14).
  - *Ejemplo:* GET para pedir el dólar; POST para mandarle una consulta al webhook.
- **"Request · Headers: información adicional sobre el pedido, como el formato de los datos o las
  credenciales."** *Headers* son "encabezados": datos sobre el pedido, no el pedido en sí. Como lo que va escrito en
  el sobre de una carta (remitente, sello), no adentro. Van de a pares: un nombre y un valor.
  - *Ejemplo:* `Content-Type: application/json` ("te mando JSON"). `X-Api-Key: abc123` ("esta es mi clave").
- **"Request · Body: los datos que mandás, cuando aplica. Por ejemplo, al crear un cliente nuevo."** *Body* es
  "cuerpo": el contenido de la carta. En un GET casi nunca hay body; en un POST, casi siempre.
  - *Ejemplo:* Crear un cliente: el body es `{"nombre": "Lucía", "email": "lucia@mail.com"}`.
- **"Response: un status code que indica qué pasó, sus propios headers, y el body con los datos, casi siempre en
  JSON."** *Response* es "respuesta". En n8n, el nodo HTTP Request muestra solo el body por defecto; para ver
  también el status code y los headers, hay que activar una opción (lo hacemos en el Paso 1).
  - *Ejemplo:* La respuesta del dólar: status `200`, headers con `content-type: application/json`, y body con la
    cotización.

**Ejemplo: un pedido completo, parte por parte**

```text
REQUEST
  Método:   GET
  URL:      https://newsapi.org/v2/everything?q=Bariloche&language=es
  Headers:  X-Api-Key: (tu clave)
  Body:     (vacío: es un GET)

RESPONSE
  Status:   200 OK
  Headers:  content-type: application/json
  Body:     {"status": "ok", "totalResults": 31, "articles": [ ... ]}
```

#### Filmina 14 · Los métodos: qué acción querés hacer (4 min)

<p style="color:#1a7f37">Cinco métodos. GET lee sin cambiar nada. POST crea algo nuevo. PUT reemplaza todo un registro. PATCH cambia solo una parte. Y DELETE borra.</p>

Para explicar:
- **"GET: pedir o leer información, sin modificar nada. Traer la lista de clientes."** *Get* es "obtener". Es el más
  común y el más seguro: no cambia nada del otro lado, se puede repetir mil veces. Es el que hace el navegador cada
  vez que abrís una página.
  - *Ejemplo:* Pedir el dólar, las noticias, el clima, la lista de pedidos de hoy.
- **"POST: crear algo nuevo. Crear un cliente nuevo."** *Post* es "enviar", como mandar una carta. Lleva los datos
  en el body. Cuidado: si se repite, crea dos veces lo mismo.
  - *Ejemplo:* Un formulario que se envía, un turno que se reserva, un pago que se registra. El webhook de hoy
    recibe un POST.
- **"PUT: reemplazar o actualizar un recurso completo. Actualizar todos los datos de un cliente."** *Put* es
  "poner". **Recurso** es cada cosa que guarda la API: un cliente, un pedido, un turno. PUT manda la ficha entera y
  reemplaza la que había. Si te olvidás un campo, ese campo queda vacío.
  - *Ejemplo:* Mandás el cliente completo con el teléfono nuevo. Si no mandás el email, se borra el email.
- **"PATCH: actualizar parcialmente. Cambiar sólo el teléfono de un cliente."** *Patch* es "parche": cambia solo lo
  que mandás, el resto queda igual.
  - *Ejemplo:* Mandás `{"telefono": "1145678901"}` y solo cambia el teléfono.
- **"DELETE: eliminar algo. Borrar un cliente."** *Delete* es "borrar". El más peligroso: en muchas APIs no tiene
  vuelta atrás.
  - *Ejemplo:* Borrar un turno cancelado.

**Por qué importa repetir un pedido** (del material de lectura: la **idempotencia**). Una palabra difícil para una
idea simple: un pedido es *idempotente* si hacerlo dos veces deja todo igual que hacerlo una. GET, PUT y DELETE lo
son (pedir dos veces el dólar no cambia nada; borrar dos veces el mismo turno no borra otro). **POST no**: mandarlo
dos veces crea dos cosas. En automatización importa porque los flujos a veces reintentan un pedido cuando falla, y
un POST reintentado puede duplicar un pedido o un cobro.

- *Ejemplo:* Un flujo crea la factura con POST, se corta internet antes de recibir la respuesta, y reintenta: el
  cliente tiene dos facturas.

**Ejercicio 2 · ¿Qué método usarías?** (3 min). Pegás en el chat:

```text
EJERCICIO 2 · ¿Qué método? Respondé con el número y el método (GET, POST, PUT, PATCH o DELETE).
1. Traer la lista de pedidos de hoy
2. Registrar un turno nuevo
3. Cambiar solo el estado de un pedido a "enviado"
4. Borrar un contacto duplicado
5. Consultar el clima de Bariloche
6. Mandar los datos de un formulario a un webhook
7. Reemplazar la ficha completa de un producto con la versión nueva
```

Respuestas: 1 GET, 2 POST, 3 PATCH, 4 DELETE, 5 GET, 6 POST, 7 PUT. La que más se discute es la 3 (PATCH): si
alguien dice PUT, no está mal del todo, pero PUT reemplaza la ficha entera.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Elegir el método y mandar datos con POST
1. + → buscá "http" → HTTP Request
2. Method, el primer desplegable: GET, POST, PUT, PATCH, DELETE… (viene en GET)
3. Method: POST · URL: https://httpbin.org/post
4. Activá Send Body → Body Content Type: JSON → Specify Body: Using Fields Below
   Agregá dos (Name → Value): nombre → Lucía Fernández · destino → Mendoza
5. Execute step
```

Lo que se ve: httpbin.org es una API de prueba que devuelve lo que le mandaste. En la salida, dentro de
`json`, aparece `{"nombre": "Lucía Fernández", "destino": "Mendoza"}`: los datos viajaron en el body, como
pide un POST.

**Ejemplo: el método equivocado**

❌ Mal: pedirle el dólar con POST.

```text
Method: POST · URL: https://dolarapi.com/v1/dolares/oficial
→ el nodo se pone rojo: 405 ("método no permitido")
```

✅ Bien: para leer, GET.

```text
Method: GET · URL: https://dolarapi.com/v1/dolares/oficial
→ 200 y {"compra": 1520, "venta": 1570, ...}
```

Por qué: la dirección está bien, pero esa API solo acepta que le pidan, no que le manden. El **405** (*Method Not
Allowed*) es la forma de decir "existe, pero no para eso". Si ven un 405, lo primero que se revisa es el
desplegable *Method*. (Probado en n8n 2.46.)

#### Filmina 15 · Los status codes: el número que te dice qué pasó (4 min)

<p style="color:#1a7f37">Cada respuesta trae un número de tres cifras. Los 200 son éxito. Los 300, redirección, poco frecuente. Los 400 son error del cliente: pedimos algo mal. Los 500, error del servidor. La regla: si empieza con 4, revisá tu pedido; si empieza con 5, no es tu culpa.</p>

Para explicar:
- **"200-299 · Éxito: 200 OK, 201 Created."** 200 es "todo bien". 201 es "creado": la respuesta típica a un POST que
  creó algo.
  - *Ejemplo:* Pedir el dólar: 200. Crear un cliente: 201.
- **"300-399 · Redirección: poco frecuente en el uso diario."** "Eso se mudó, andá a esta otra dirección". n8n sigue
  la redirección solo, así que casi nunca lo van a ver.
  - *Ejemplo:* Una página que pasó de `http` a `https` redirige con un 301.
- **"400-499 · Error del cliente: pediste algo mal. 400 Bad Request, 401 Unauthorized, 404 Not Found."** El
  **cliente** somos nosotros (n8n). 400: el pedido está mal armado (falta un dato, el JSON está roto). 401: falta la
  credencial o está mal. 404: la dirección no existe (un endpoint mal escrito, un cliente que ya no está).
  - *Ejemplo:* Escribir `/v1/dolar/oficial` en vez de `/v1/dolares/oficial`: 404. El famoso "página no encontrada"
    de internet es lo mismo.
  - *Ejemplo:* Pedí `https://pokeapi.co/api/v2/pokemon/pikachuu` (con una u de más): vuelve 404 y
    `{"status":404,"message":"Not Found"}`. Pedí `https://rickandmortyapi.com/api/character/99999`: 404 y
    `{"error":"Character not found"}` ("personaje no encontrado"). El error es nuestro: pedimos algo que no está en
    la carta.
- **"500-599 · Error del servidor: falló el sistema al que le pediste. 500 Internal Server Error."** Algo se rompió
  del otro lado. No hay nada que cambiar en nuestro pedido: esperar y reintentar, o avisar.
  - *Ejemplo:* La API del banco está en mantenimiento a las 3 de la mañana y responde 503 ("servicio no
    disponible").
- **"La regla mental: si empieza con 4, revisá tu pedido. Si empieza con 5, no es tu culpa."** Es lo primero que
  hay que mirar cuando un HTTP Request se pone rojo: el número dice dónde buscar.
  - *Ejemplo:* 404 → revisá la URL. 401 → revisá la credencial. 500 → no toques nada, reintentá más tarde.

**Ejemplo: leer un error**

❌ Mal: ver el nodo rojo y empezar a cambiar todo.

```text
"Falló el HTTP Request. Cambio el método, la URL y la credencial a ver si anda."
```

✅ Bien: leer el número primero.

```text
"Dice 401 Authorization failed. Empieza con 4: es mío. Y 401 es credencial.
 Reviso la clave, y nada más."
```

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Ver el status code en n8n
1. HTTP Request → URL: https://httpbin.org/status/404 → Execute step
2. El nodo se pone rojo. En el error, buscá el número: 404
3. Para ver el código también cuando sale bien: Add option → Response
   → activá Include Response Headers and Status → aparece "statusCode": 200
4. Para que un error no corte el flujo: pestaña Settings del nodo → On Error → Continue
   (el error sale como dato y el flujo sigue; útil para un IF "si falló, avisame")
```

Lo que se ve: con un 400 o un 500, el HTTP Request se pone rojo y el flujo se corta ahí. El número es lo
primero que hay que leer: dice si el problema es nuestro (4) o del otro sistema (5). Para que httpbin.org devuelva
otro código, se cambia el número del final de la URL (`/status/401`, `/status/500`…): es lo que usa el detective
de errores de la práctica.

#### Filmina 16 · El cliente pide, el servidor responde (1 min)

<p style="color:#1a7f37">El cliente pide, el servidor responde. Todo lo demás es detalle. En los headers va el pasaporte; en el body, la maleta.</p>

Para explicar:
- **"En los headers va el pasaporte. En el body, la maleta."** La credencial (quién sos) va en los headers, como el
  pasaporte que se muestra en migraciones. Los datos (lo que llevás) van en el body, como la valija.
  - *Ejemplo:* Crear un cliente en un CRM: header `Authorization: Bearer abc123` (pasaporte), body `{"nombre":
    "Lucía"}` (maleta).

#### Filmina 17 · Para recordar: 401, 403 y 429 (2 min)

<p style="color:#1a7f37">401 y 403 se parecen pero no son lo mismo. 401 es "no sé quién sos": falta la credencial o está mal. 403 es "sé quién sos, pero no tenés permiso para esto". Y 429, que pediste demasiado rápido.</p>

Para explicar:
- **"401 es 'no sé quién sos': falta la credencial o está mal."** Aunque en inglés se llame *Unauthorized* ("no
  autorizado"), en la práctica quiere decir "no autenticado". Se arregla con la credencial: ponerla, corregirla o
  renovarla si venció.
  - *Ejemplo:* Una clave de NewsAPI con una letra de menos: 401.
- **"403 es 'sé quién sos, pero no tenés permiso para esto'."** *Forbidden*, "prohibido". La credencial está bien,
  pero no alcanza. Cambiar la clave no arregla nada: hay que pedir más permisos o usar otra cuenta.
  - *Ejemplo:* Conectaste tu Google con permiso de "solo leer" planillas y el flujo intenta escribir: 403. O el
    plan gratis no incluye esa función.
- **"Y un 429 significa que pediste demasiado rápido."** *Too Many Requests*, "demasiados pedidos". Las APIs ponen
  un límite (*rate limit*, "límite de frecuencia") para que nadie las sature. Se arregla espaciando los pedidos (con
  un Wait, o con la opción *Batching* del HTTP Request).
  - *Ejemplo:* El plan gratis de NewsAPI permite 100 pedidos por día; el 101 da 429. Un flujo que manda 500
    WhatsApp de golpe recibe 429 a la mitad.

| Código | En criollo | Qué hacés |
|---|---|---|
| 401 | "No sé quién sos." | Revisás la credencial. |
| 403 | "Sé quién sos, pero no podés." | Pedís más permisos o usás otra cuenta. |
| 404 | "Eso no existe." | Revisás la URL o el dato que buscás. |
| 429 | "Pará un poco." | Espaciás los pedidos. |
| 500 | "Se me rompió algo." | Reintentás más tarde; no es tuyo. |

**Ejemplo: leer el error antes de culpar a la API**

❌ Mal: ver el nodo rojo y concluir "NewsAPI está caída".

```text
401 - {"status":"error","code":"apiKeyInvalid",
       "message":"Your API key is invalid or incorrect. ..."}
→ "Debe estar caída, pruebo más tarde."
```

✅ Bien: leer el número y el mensaje.

```text
401 → empieza con 4: el problema está en MI pedido.
"apiKeyInvalid" → la clave está mal. Reviso la credencial: ¿un espacio de más? ¿una letra cambiada?
```

Por qué: si la API estuviera caída, respondería con un 500 o directamente no respondería. Un 401 dice "no sé quién
sos": es la credencial. (El mensaje es el real de NewsAPI con una clave falsa, probado en n8n 2.46.)

---

### 45–60 · Sección 03 · Credenciales y HTTP Request

**Filmina 18 · Separador "03"** — pasarla.

<p style="color:#1a7f37">Ya sabemos cómo se arma un pedido. Ahora, cómo se demuestra quiénes somos, y el nodo con el que se arma cualquier pedido en n8n.</p>

#### Filmina 19 · La autenticación: ¿quién sos y tenés permiso? (3 min)

<p style="color:#1a7f37">Si cualquiera pudiera pedirle datos a cualquier API sin identificarse, podría leer o cambiar información ajena. Por eso toda API pregunta antes: ¿quién sos y tenés permiso? Cada servicio elige cómo.</p>

Para explicar:
- **"Por qué existe: si cualquiera pudiera pedirle datos a cualquier API sin identificarse, podría leer o modificar
  información ajena."** Sin autenticación, cualquiera podría leer tus mails o borrar tus planillas. Además, las APIs
  necesitan saber quién pide para cobrar o para poner límites.
  - *Ejemplo:* Si la API de un banco no pidiera identificación, cualquiera podría pedir "transferí de la cuenta de
    Martín a la mía".
- **"Qué responde: la pregunta que toda API hace antes de darte nada. ¿Quién sos vos y tenés permiso para hacer
  esto?"** Son dos preguntas: **quién sos** (autenticación, el 401 si falla) y **qué podés hacer** (autorización,
  el 403 si falla).
  - *Ejemplo:* En un edificio: el portero te pide el documento (quién sos) y después se fija si estás en la lista
    del piso 5 (qué podés hacer).
- **"No todas piden lo mismo: cada servicio elige su mecanismo, y el nodo te va a pedir el que corresponda."** La
  documentación de cada API dice qué tipo usa. El podcast del material lo dice así: "sin leer el manual, estamos
  intentando abrir una puerta con la llave equivocada".
  - *Ejemplo:* NewsAPI pide una clave en el header `X-Api-Key`. Google pide OAuth2. dolarapi.com no pide nada.
- **"Basic Auth: usuario y contraseña codificados de forma estándar. De las más simples y antiguas, poco usada hoy
  en servicios modernos."** *Basic* es "básica". Se manda el usuario y la contraseña en un header, apenas
  disfrazados (**codificados** no es lo mismo que cifrados: cualquiera que los vea los puede leer). Se usa en
  sistemas viejos o internos.
  - *Ejemplo:* El panel de administración de un router o un sistema interno de una empresa.

#### Filmina 20 · Credenciales: las más usadas (4 min)

<p style="color:#1a7f37">Tres formas. La API Key es un código fijo: quien lo tiene, entra, como una tarjeta de acceso. El Bearer Token es parecido pero vence, como la pulserita de un evento. Y OAuth2, el más seguro: iniciás sesión con tu cuenta real y te da un permiso temporal y renovable.</p>

Para explicar:
- **"API Key: un código único que la plataforma te da al crear tu cuenta. Va en los headers o en la URL. Como una
  tarjeta de acceso: quien la tiene, entra."** *Key* es "llave". Es una contraseña larga que te da el servicio. El
  riesgo: si alguien la copia, entra como vos. Por eso **no se comparte, no se muestra en pantalla y no se pega en
  la URL** si se puede evitar (las URL quedan guardadas en historiales).
  - *Ejemplo:* La clave de NewsAPI: `3f9a...` (32 letras y números). La clave de Gemini de la Semana 2 también es
    una API Key.
- **"Bearer Token: parecido a una API Key, pero temporal: puede expirar. Va en el header Authorization. Como la
  pulserita de un evento."** *Bearer* es "portador": el que la porta, entra. *Token* es "ficha". Va siempre en el
  header `Authorization: Bearer (el token)`. Suele **expirar** (vencer) en horas o días, y hay que pedir otro.
  - *Ejemplo:* La pulserita de un recital: sirve esa noche, al otro día no. Muchas APIs (OpenAI, Mercado Pago)
    usan este formato. NewsAPI acepta su clave de las dos formas: como `X-Api-Key` o como Bearer.
- **"OAuth2: el más robusto y el que usan las plataformas grandes. Iniciás sesión con tu cuenta real y te da un
  permiso temporal y renovable."** **Robusto** es "resistente, difícil de romper". Es el "Iniciar sesión con Google"
  de muchas páginas. Vos le das permiso a n8n para hacer **ciertas cosas** con tu cuenta, **sin darle tu
  contraseña**. El permiso se puede revocar (sacar) cuando quieras desde tu cuenta de Google.
  - *Ejemplo:* El podcast lo compara con un pase de invitado en un edificio: te deja entrar a la sala de reuniones,
    no a la caja fuerte. n8n puede leer tus planillas, pero no ver tus fotos ni cambiar tu contraseña.

**Ejemplo: la misma clave, en el lugar equivocado y en el correcto**

❌ Mal: la clave pegada en la URL, a la vista.

```text
GET https://newsapi.org/v2/everything?q=Bariloche&apiKey=3f9a1c...
```

✅ Bien: la clave en una credencial de n8n, que la manda en el header.

```text
GET https://newsapi.org/v2/everything?q=Bariloche
Header (lo pone la credencial):  X-Api-Key: ••••••••
```

Por qué: la URL queda en el historial de ejecuciones, en capturas de pantalla y en lo que exportás. El header
cargado desde la credencial no se exporta con el flujo.

#### Filmina 21 · Credenciales en n8n: se configuran una vez y se reutilizan (3 min)

<p style="color:#1a7f37">En n8n, las credenciales van en su propia sección, no adentro de cada flujo. Se guardan encriptadas, se reutilizan en todos los flujos que quieran, y cada nodo pide el tipo que necesita.</p>

Para explicar:
- **"Dónde van: en la sección Credentials, no adentro de cada workflow."** En la pantalla de inicio de n8n, pestaña
  **Credentials** ("credenciales"). También se pueden crear desde un nodo (el desplegable *Credential* → *Create
  new credential*), pero quedan guardadas en el mismo lugar.
  - *Ejemplo:* Abrís Credentials y ves: "NewsAPI", "Google Sheets de la agencia", "Gemini". Cada una, una vez.
- **"Cómo se guardan: encriptadas en la base de datos de n8n. No se ven en texto plano."** **Encriptar** (o cifrar)
  es convertir algo en un código que solo se puede leer con una llave. **Texto plano** es texto normal, legible. Es
  lo que vimos en la Semana 2: la base de datos está en `database.sqlite` y la llave para leerla, en el archivo
  `config`, en la carpeta n8n del escritorio.
  - *Ejemplo:* Si alguien abre `database.sqlite` sin la llave, en lugar de tu clave ve algo como `U2FsdGVkX1...`.
- **"Se reutilizan: una misma credencial sirve para varios workflows y varios nodos."** Si la clave cambia, se
  cambia en un solo lugar y todos los flujos la toman. Y al **exportar** un flujo, la credencial **no** viaja con
  él: el archivo dice "acá va la credencial NewsAPI", pero no la clave.
  - *Ejemplo:* Los archivos de la carpeta `n8n/` que les paso no tienen mi clave: cuando los importan, eligen la
    suya.
- **"Cada nodo pide lo suyo: Gmail, Slack o HTTP Request van a pedir el tipo de credencial que ese servicio
  requiera."** El nodo de Gmail pide una credencial de tipo "Gmail OAuth2". El HTTP Request, como es genérico,
  deja elegir: **Header Auth** (para una API Key en un header), **Bearer Auth**, **Basic Auth**, **OAuth2**…
  - *Ejemplo:* Para NewsAPI, en el HTTP Request: *Authentication* → *Generic Credential Type* → **Header Auth**.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Crear una credencial y usarla en un nodo
1. Pantalla de inicio → pestaña Credentials → Create credential (o el + del menú de la izquierda → Credential)
2. Buscá el tipo: Header Auth (para una API Key que va en un header)
3. Name: X-Api-Key · Value: (tu clave) → arriba, nombre de la credencial: NewsAPI → Save
4. En el HTTP Request: Authentication → Generic Credential Type
   → Generic Auth Type: Header Auth → elegí NewsAPI
5. En cualquier otro flujo, el mismo desplegable ya te ofrece NewsAPI: no se carga de nuevo
```

Lo que se ve: en la pestaña Credentials aparece "NewsAPI" una sola vez, aunque la usen diez flujos. Lo hacemos
completo en el Paso 2 de la práctica.

**Ejemplo: dónde va la clave**

❌ Mal: pegar la clave en la URL (o en *Send Headers*) del nodo.

```text
URL: https://newsapi.org/v2/everything?q=Bariloche&apiKey=a1b2c3d4e5...
```

✅ Bien: la clave en una credencial, y el nodo que la elige.

```text
URL: https://newsapi.org/v2/everything?q=Bariloche
Authentication: Generic Credential Type → Header Auth → NewsAPI
```

Por qué: en el primero, la clave queda escrita en el flujo. Se ve en pantalla cuando compartís, viaja adentro del
`.json` cuando lo exportás o se lo pasás a alguien, y si cambia hay que buscarla flujo por flujo. En el segundo,
está guardada encriptada en un solo lugar y el `.json` exportado no la lleva.

#### Filmina 22 · El nodo HTTP Request: la maquinaria que los otros esconden (3 min)

<p style="color:#1a7f37">HTTP Request es un nodo genérico: armás a mano el pedido completo, método, URL, headers, body y credencial. Se usa cuando el servicio no tiene nodo, cuando el nodo no hace lo que necesitás, o para probar una API por primera vez.</p>

Mientras hablás, abrís un HTTP Request vacío en tu n8n y señalás cada campo.

Para explicar:
- **"Qué es: un nodo genérico, no atado a ningún servicio. Armás a mano la petición completa: método, URL, headers,
  body y autenticación."** Cada parte de la filmina 13 es un campo del nodo: *Method*, *URL*, *Authentication*,
  *Send Query Parameters* (los parámetros después del `?`), *Send Headers*, *Send Body*. Y un truco: el botón
  **Import cURL** ("importar cURL") arma el nodo solo, pegando un comando que muchas documentaciones traen de
  ejemplo (**cURL** es un programa para hacer pedidos HTTP desde la terminal).
  - *Ejemplo:* La documentación de una API dice `curl https://api.ejemplo.com/clientes -H "X-Api-Key: TU_CLAVE"`.
    Lo pegás en *Import cURL* y el nodo queda armado.
- **"Cuándo usarlo: cuando el servicio que querés usar no tiene nodo propio en n8n."** La mayoría de los servicios
  chicos o locales.
  - *Ejemplo:* dolarapi.com, el sistema de turnos de una clínica, la API de un correo argentino.
- **"También: cuando el nodo nativo existe pero no cubre una funcionalidad específica que la API sí ofrece."**
  **Nativo** es "de marca", el que trae n8n. A veces trae las funciones más comunes y no todas.
  - *Ejemplo:* El nodo de una plataforma permite crear contactos pero no etiquetarlos; la API sí. Para etiquetar,
    HTTP Request con la misma credencial.
- **"Y además: cuando estás probando o explorando una API por primera vez, antes de automatizar algo más
  grande."** Hacer un GET simple y mirar qué devuelve es la mejor forma de conocer una API.
  - *Ejemplo:* Antes de armar el flujo de noticias, un GET suelto para ver cómo se llaman los casilleros.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · Armar un HTTP Request desde la documentación
1. + → buscá "http" → HTTP Request
2. Arriba del nodo, botón Import cURL
3. Pegá: curl "https://dolarapi.com/v1/dolares/blue" → Import
4. El nodo queda con Method: GET y la URL completa → Execute step
```

Lo que se ve: el nodo se llenó solo. Con una API que pide clave, el cURL de la documentación suele traer la
clave en un header: después de importarlo, hay que borrar ese header y elegir la credencial (el ejemplo de la
filmina anterior).

**Ejemplo: los datos después del `?`**

❌ Mal: escribir los parámetros a mano en la URL.

```text
URL: https://httpbin.org/get?q=vino & bodegas&language=es
→ la API recibe  q = "vino "  y un parámetro raro " bodegas" vacío
```

✅ Bien: activar *Send Query Parameters* y cargarlos de a uno.

```text
URL: https://httpbin.org/get
Send Query Parameters: q → vino & bodegas · language → es
→ la API recibe  q = "vino & bodegas"  y  language = "es"
```

Por qué: en una URL, el `&` separa un parámetro del siguiente. Si el dato trae un `&` (o espacios, acentos, una
`ñ`), escrito a mano se rompe sin dar error. Con *Send Query Parameters*, n8n lo prepara solo para que llegue
entero. (Probado en n8n 2.46 contra httpbin.org.)

#### Filmina 23 · Coder Tips: los nodos de marca son pedidos HTTP armados (1 min)

<p style="color:#1a7f37">Todos los nodos de marca, Gmail, Slack, Notion, son pedidos HTTP armados de antemano por los desarrolladores de n8n. El HTTP Request les muestra la maquinaria que esos nodos esconden.</p>

Para explicar:
- **La maquinaria.** Si entienden el HTTP Request, entienden todos los nodos. Y cuando un nodo de marca da error, el
  mensaje es un error HTTP: 401, 403, 404, 429. Lo de hoy sirve para leer los errores de cualquier nodo.
  - *Ejemplo:* El nodo de Google Sheets se pone rojo con *Forbidden*: es un 403. Le falta permiso a la cuenta, no
    hay nada mal en el nodo.

**Antes del break:**

<p style="color:#1a7f37">Después del break hacemos todo esto en n8n. Durante el break, prendan n8n, y si no tienen cuenta en newsapi.org, créense una: es gratis, un minuto, y les da una clave.</p>

---

### 60–70 · Break

**Filmina 24 · Break**

<p style="color:#1a7f37">Diez minutos. Prendan n8n y, si pueden, créense la cuenta en newsapi.org: Get API Key, mail y contraseña, y les muestra la clave.</p>

---
### 70–113 · Sección 04 · Práctica en vivo

#### Antes de la clase (una sola vez, 30 minutos)

- Importá los cinco flujos y ejecutá el 01 (tiene que dar `estado_http: 200`) y el 02 con tu credencial (tiene que
  traer tres titulares).
- En el 03, ejecutá cada nodo por separado y fijate que cada uno dé su error (ver la tabla del Ejercicio 3).
- Probá el 04 con el 05: en el 04, **Execute workflow** (queda escuchando); en el 05, **Execute workflow**. La
  salida del 05 tiene que traer el monto en pesos y las noticias.
- Dejá Google Cloud listo hasta antes de crear el cliente (ver "Preparación").
- Hacé la práctica completa una vez en un workflow nuevo.

#### Detective de errores (70–76) — Ejercicio 3

1. **Filmina 25 · Separador "04"**. Decís:

<p style="color:#1a7f37">Bienvenidos de vuelta. Antes de construir, un desafío: les voy a mostrar cinco errores reales de APIs, y ustedes me dicen qué pasó.</p>

2. **Filmina 26 · Ejemplo en vivo.** Abrís el flujo **03 · Detective de errores HTTP**. Pegás en el chat:

```text
EJERCICIO 3 · Detective de errores
Voy a ejecutar 5 pedidos. Para cada uno, respondé en el chat:
¿Qué número es? ¿Es culpa nuestra (4xx) o del servidor (5xx)? ¿Qué harías para arreglarlo?
```

3. Abrís el nodo **Error A** y apretás **Execute step**. Se pone rojo. Leés el mensaje en voz alta, esperás 30
   segundos de respuestas en el chat, y revelás. Repetís con B, C, D y E. Lo que aparece (probado en n8n 2.46):

| Nodo | Mensaje de n8n | Código | Qué pasó | Qué hacés |
|---|---|---|---|---|
| Error A | *Authorization failed - please check your credentials* | **401** | Falta la credencial o está mal: "no sé quién sos". | Revisás la clave. |
| Error B | *Forbidden - perhaps check your credentials?* | **403** | Te reconoce, pero no tenés permiso. | Pedís más permisos u otra cuenta. Cambiar la clave no alcanza. |
| Error C | *The resource you are requesting could not be found* | **404** | La dirección o el dato no existe. | Revisás la URL. |
| Error D | *The service is receiving too many requests from you* | **429** | Pediste demasiado rápido. | Espaciás los pedidos: *Options* → *Batching*, o un Wait. |
| Error E | *The service was not able to process your request* | **500** | Se rompió el servidor. | No tocás nada: reintentás más tarde. |

4. Al terminar, decís:

<p style="color:#1a7f37">Fíjense que n8n traduce el número a una frase, y abajo, en los detalles, muestra el número. Y la diferencia que más importa: el 401 se arregla con la clave; el 403, no. Si les dice Forbidden y cambian la clave diez veces, van a seguir igual: el problema es el permiso.</p>

(Estos cinco errores los da a propósito **httpbin.org**, un servicio de prueba que devuelve el código que le pidas:
`https://httpbin.org/status/401`. Si alguien pregunta, mostrá la URL de cada nodo.)

#### Paso 1 · El primer GET (76–83)

5. **Filmina 27.** Decís:

<p style="color:#1a7f37">Paso uno: nuestro primer pedido a una API de verdad, sin clave. Le vamos a preguntar a dolarapi.com cuánto está el dólar oficial.</p>

6. Antes de n8n, lo mostrás en el navegador: pegás `https://dolarapi.com/v1/dolares/oficial` en una pestaña nueva.
   Aparece el JSON. Decís:

<p style="color:#1a7f37">Esto es un GET: el navegador le pidió algo a la API y la API le devolvió datos crudos, en JSON. Ahora lo mismo, pero desde n8n.</p>

7. Pegás en el chat:

```text
PRÁCTICA · Paso 1: el primer GET
1. Workflow nuevo → nombre: Integración real
2. Add first step → Trigger manually
3. + → buscá "http" → HTTP Request
4. Method: GET · URL: https://dolarapi.com/v1/dolares/oficial
5. Abajo, Add option → Response → activá "Include Response Headers and Status"
6. Renombralo: Cotización del dólar → Execute step
```

8. Lo hacés a la par. En la salida aparecen tres casilleros: `body`, `headers` y `statusCode`. Mostrás la vista
   **JSON**:

```json
{
  "body": { "moneda": "USD", "casa": "oficial", "nombre": "Oficial", "compra": 1520, "venta": 1570, "fechaActualizacion": "2026-11-05T11:00:00.000Z" },
  "headers": { "content-type": "application/json", "date": "...", "...": "..." },
  "statusCode": 200
}
```

(Los números van a ser los del día de la clase.) Decís:

<p style="color:#1a7f37">Acá está la respuesta entera, las tres partes de la filmina 13. statusCode 200: salió todo bien. Los headers, con datos sobre la respuesta; por ejemplo, content-type dice que viene en JSON. Y el body, con lo que pedimos. Normalmente, n8n muestra solo el body; esta opción la activamos para verlo todo, y para poder preguntar después por el status code.</p>

9. **Identificar el campo que sirve.** Preguntás en el chat: *"Si queremos pasar dólares a pesos para un cliente,
   ¿cuál de todos estos casilleros nos sirve?"*. Respuesta: `venta` (es el precio al que el banco vende el dólar,
   el que paga un cliente). Pegás en el chat:

```text
7. + → Edit Fields (Set) → Add Field ×3:
   dolar_venta  (Number)  → arrastrá "venta" desde body
   actualizado  (String)  → arrastrá "fechaActualizacion" desde body
   estado_http  (Number)  → arrastrá "statusCode"
8. Renombralo: Quedarme con lo que sirve → Execute step
```

10. Lo hacés a la par. Sale `{"dolar_venta": 1570, "actualizado": "...", "estado_http": 200}`. Decís:

<p style="color:#1a7f37">De todo lo que devolvió la API, nos quedamos con lo que sirve. Es lo que más van a hacer con cualquier API: pedir, leer la respuesta, y quedarse con dos o tres casilleros. Y ese 200 que guardamos, en la pre-entrega les va a servir para un IF: "si no es 200, avisame".</p>

**Plan B:** el flujo **01 · Primer GET: la cotización del dólar** es este mismo paso, terminado.

#### Paso 2 · La credencial (83–91)

11. **Filmina 28.** Decís:

<p style="color:#1a7f37">Paso dos: una API que pide clave. NewsAPI da noticias de todo el mundo, y para usarla hay que registrarse y usar una API Key. La vamos a guardar como credencial en n8n, y después la vamos a romper a propósito.</p>

12. Pegás en el chat:

```text
PRÁCTICA · Paso 2: la credencial
1. Si no tenés cuenta: newsapi.org → Get API Key → completá el registro → copiá la clave que te muestra
2. En n8n, pantalla de inicio → pestaña Credentials → Create credential (o el botón + → Credential)
3. Buscá "Header Auth" → completá:
   Name:  X-Api-Key
   Value: (tu clave de NewsAPI)
4. Arriba, ponele nombre a la credencial: NewsAPI → Save
```

13. Lo hacés a la par (con tu cuenta; **no muestres tu clave**: tapala o escribila con la pantalla pausada).
    Decís:

<p style="color:#1a7f37">La credencial dice: "en cada pedido, agregá un header que se llama X-Api-Key con este valor". Es el pasaporte de la filmina 16. Y queda guardada encriptada, en un solo lugar: si mañana la clave cambia, la cambio acá y todos los flujos la toman.</p>

14. Pegás en el chat:

```text
5. En el flujo, + al lado del trigger → otro HTTP Request
   URL: https://newsapi.org/v2/everything
   Authentication: Generic Credential Type → Generic Auth Type: Header Auth → elegí NewsAPI
6. Activá "Send Query Parameters" y agregá 4 (Name → Value):
   q        → Bariloche
   language → es
   sortBy   → publishedAt
   pageSize → 3
7. Renombralo: Noticias de Bariloche → Execute step
```

15. Lo hacés a la par. La salida trae `status: "ok"`, `totalResults` y `articles`, una lista con tres noticias
    (cada una con `title`, `description`, `url`, `publishedAt`…). Decís:

<p style="color:#1a7f37">Funcionó: 200 y tres noticias. Fíjense que la clave no aparece en ningún lado del nodo: la pone la credencial. Y miren los query parameters: son lo que va después del signo de pregunta en la URL. q es "qué buscar", language el idioma, pageSize cuántas.</p>

16. **Romperla a propósito.** Vas a la credencial **NewsAPI**, le cambiás una letra a la clave, **Save**. Volvés al
    nodo y apretás **Execute step**. Se pone rojo:

```text
Authorization failed - please check your credentials
Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key.
```

Decís:

<p style="color:#1a7f37">401. Arriba, la frase de n8n: "falló la autorización, revisá tus credenciales". Abajo, lo que dice la API misma: "tu clave es inválida o incorrecta". Es el "no sé quién sos" de la filmina 17. Empieza con 4: el problema es nuestro, y es la credencial.</p>

17. Volvés a poner la clave bien, **Save**, y ejecutás: vuelve el 200.

18. (Si sobra un minuto) **El Bearer Token.** NewsAPI acepta la misma clave como Bearer. Mostrás que en
    *Authentication* también existe **Bearer Auth**: una credencial con un solo campo, el token, que n8n manda como
    `Authorization: Bearer (el token)`. Mismo resultado, otro formato.

**Plan B:** el flujo **02 · API Key: noticias con NewsAPI** es este paso terminado (elegí tu credencial en el nodo).

#### Paso 3 · OAuth2 con Google (91–100)

19. **Filmina 29.** Decís:

<p style="color:#1a7f37">Paso tres: el laberinto de OAuth2. Es el "iniciar sesión con Google" pero para n8n: le vamos a dar permiso para leer nuestras planillas, sin darle nuestra contraseña. Tiene más pasos, así que lo hago yo en pantalla y ustedes lo repiten en casa con el Ejercicio 8, que tiene todo el paso a paso.</p>

20. **En n8n:** **Credentials** → **Create credential** → buscás **Google Sheets OAuth2 API**. Mostrás el campo
    **OAuth Redirect URL**: `http://localhost:5678/rest/oauth2-credential/callback`. Lo copiás. Decís:

<p style="color:#1a7f37">Esta es la Redirect URI, la dirección de regreso. Cuando Google termine de preguntarnos si damos permiso, nos va a mandar de vuelta a esta dirección, que es n8n. Fíjense que termina en rest, oauth2-credential, callback. Google la tiene que tener anotada exactamente igual, letra por letra.</p>

21. **En Google Cloud Console** (console.cloud.google.com), con el proyecto ya creado: **Google Auth Platform** →
    **Clients** → **Create client** → *Application type*: **Web application** → nombre `n8n local` → en
    **Authorized redirect URIs**, **Add URI** → pegás la dirección de n8n → **Create**. Aparecen el **Client ID** y
    el **Client Secret**: los copiás (el secret, en ese momento: después Google no lo vuelve a mostrar completo).
    Decís:

<p style="color:#1a7f37">El Client ID es el nombre de nuestra aplicación ante Google, y el Client Secret es su contraseña. No son mi usuario de Google: son la identificación de "n8n de Arturo" como aplicación. Mi contraseña de Google no la va a ver nunca nadie.</p>

22. **De vuelta en n8n:** pegás el Client ID y el Client Secret → **Sign in with Google** → elegís tu cuenta →
    aparece **"Google hasn't verified this app"** ("Google no verificó esta aplicación") → **Continue** → tildás los
    permisos → **Continue**. La credencial dice **Account connected** ("cuenta conectada"). **Save**. Decís:

<p style="color:#1a7f37">Ese aviso de "app no verificada" es normal: la aplicación la creamos nosotros, para nosotros, y Google no la revisó. Y esto que acaba de pasar, ir a Google, decir que sí y volver, es el handshake, el apretón de manos. Ahora n8n tiene un permiso temporal y renovable para leer mis planillas, y yo lo puedo revocar cuando quiera desde mi cuenta de Google.</p>

23. **Comprobarlo:** en el flujo, un nodo **Google Sheets** → *Get row(s) in sheet* → credencial recién creada →
    elegís tu planilla de prueba → **Execute step**: aparecen las filas.
24. **El error más común, "redirect_uri_mismatch".** Lo mostrás o lo contás:

<p style="color:#1a7f37">Si Google les dice "Error 400: redirect_uri_mismatch", quiere decir que la dirección de regreso que manda n8n no coincide con la que anotaron en Google. Casi siempre es una diferencia mínima: http contra https, localhost contra 127.0.0.1, otro puerto, una barra de más al final. Se copia otra vez desde n8n, se pega en Google, se guarda, y se esperan unos minutos.</p>

**Si se va el tiempo:** mostrás la credencial ya conectada, el nodo de Sheets leyendo la planilla, y contás el
mismatch. El paso a paso completo queda para el Ejercicio 8.

#### Paso 4 · El webhook (100–108)

25. **Filmina 30.** Decís:

<p style="color:#1a7f37">Hasta ahora, n8n pedía. Ahora, que reciba. Un webhook es una dirección de n8n que queda esperando: cuando otro sistema le manda algo, el flujo arranca solo. Es como dejar la puerta abierta esperando una visita.</p>

26. Pegás en el chat:

```text
PRÁCTICA · Paso 4: el webhook
1. Workflow nuevo → nombre: Consulta por webhook
2. Add first step → buscá "webhook" → Webhook
3. HTTP Method: POST · Path: consulta
4. Respond: When Last Node Finishes
5. Renombralo: Recibir consulta
6. Arriba del nodo, copiá la Test URL (http://localhost:5678/webhook-test/consulta)
7. Apretá "Listen for test event" (queda esperando)
```

27. Lo hacés a la par. El nodo queda "escuchando". Decís:

<p style="color:#1a7f37">Ahora n8n está esperando. Vamos a hacer de servicio externo: le mandamos una consulta como si viniera de un formulario. Desde la terminal, con un comando.</p>

28. En PowerShell (no hace falta administrador), pegás y le das Enter. Lo pegás también en el chat:

```text
WINDOWS (PowerShell):
Invoke-RestMethod -Method Post -Uri "http://localhost:5678/webhook-test/consulta" -ContentType "application/json" -Body '{"nombre":"Lucia Fernandez","destino":"Mendoza","monto_usd":800}'

MAC (Terminal):
curl -X POST "http://localhost:5678/webhook-test/consulta" -H "Content-Type: application/json" -d '{"nombre":"Lucia Fernandez","destino":"Mendoza","monto_usd":800}'

¿Sin terminal? Importá el flujo 05-simulador-formulario.json y apretá Execute workflow.
```

(Sin tildes a propósito: PowerShell de Windows a veces las rompe al mandarlas.)

29. En n8n, el webhook se pone verde y muestra la salida. Mostrás la vista **JSON**:

```json
{
  "headers": { "content-type": "application/json", "...": "..." },
  "params": {},
  "query": {},
  "body": { "nombre": "Lucia Fernandez", "destino": "Mendoza", "monto_usd": 800 },
  "webhookUrl": "http://localhost:5678/webhook-test/consulta",
  "executionMode": "test"
}
```

Decís:

<p style="color:#1a7f37">Llegó. Y miren dónde está lo que mandamos: adentro de body, la maleta. Arriba, los headers, el pasaporte. Para usar el nombre en el nodo siguiente, va a ser $json.body.nombre. Esa es la estructura que tenemos que capturar: dónde está cada dato.</p>

30. **Test URL y Production URL.** Mostrás las dos pestañas arriba del nodo. Decís:

<p style="color:#1a7f37">Hay dos direcciones. La de prueba, con webhook-test, funciona una sola vez cada vez que aprietan Listen o Execute workflow: es para armar el flujo. La de producción, solo webhook, funciona siempre, pero solo si el flujo está publicado, con el botón Publish de arriba. Al formulario real se le da la de producción.</p>

Si alguien manda el comando sin haber apretado *Listen*, recibe este error (probado): *The requested webhook
"consulta" is not registered* ("el webhook no está registrado"), con la pista *Click the 'Execute workflow' button
on the canvas, then try again*.

#### Paso 5 · Todo junto (108–113)

31. **Filmina 31.** Decís:

<p style="color:#1a7f37">Último paso: cerramos el circuito. Llega la consulta por el webhook, n8n pregunta el dólar, busca noticias del destino con nuestra credencial, y le responde al que preguntó con el monto en pesos y las noticias.</p>

32. Pegás en el chat:

```text
PRÁCTICA · Paso 5: todo junto
1. + a la derecha de "Recibir consulta" → HTTP Request
   GET https://dolarapi.com/v1/dolares/oficial → renombralo: Cotización del dólar
2. + → HTTP Request → URL: https://newsapi.org/v2/everything
   Authentication: Generic Credential Type → Header Auth → elegí la MISMA credencial NewsAPI (no crees otra)
   Send Query Parameters: language → es · pageSize → 3
   y q → arrastrá "destino" desde Recibir consulta (en el panel de la izquierda, elegí ese nodo arriba)
   Renombralo: Noticias del destino
3. + → Edit Fields → Add Field ×6 (pegá cada valor; quedan en Expression).
   Ojo con el tipo de cada campo (el desplegable al lado del nombre):
   nombre        (String)  {{ $('Recibir consulta').item.json.body.nombre }}
   destino       (String)  {{ $('Recibir consulta').item.json.body.destino }}
   monto_usd     (Number)  {{ $('Recibir consulta').item.json.body.monto_usd }}
   dolar_oficial (Number)  {{ $('Cotización del dólar').item.json.venta }}
   monto_pesos   (Number)  {{ $('Recibir consulta').item.json.body.monto_usd * $('Cotización del dólar').item.json.venta }}
   noticias      (Array)   {{ $json.articles.map(a => a.title) }}
   Renombralo: Armar respuesta
4. Execute workflow (queda escuchando) → mandá otra vez el comando del Paso 4
```

33. Lo hacés a la par. En PowerShell aparece la respuesta del flujo (probado con el dólar a $1.570):

```text
nombre        : Lucia Fernandez
destino       : Mendoza
monto_usd     : 800
dolar_oficial : 1570
monto_pesos   : 1256000
noticias      : {..., ..., ...}
```

Decís:

<p style="color:#1a7f37">Le mandamos una consulta y nos respondió en un segundo: 800 dólares son un millón doscientos cincuenta y seis mil pesos al oficial de hoy, y estas son las noticias de Mendoza. Un webhook que recibe, dos APIs que consultamos, una con clave y otra sin, y una respuesta armada. Esta es nuestra primera integración real.</p>

<p style="color:#1a7f37">Y fíjense que la credencial la elegimos de la lista, no la creamos de nuevo. Configurada una vez, sirve para todo lo que viene.</p>

34. **¿Webhook o polling?** (lo pide la filmina). Decís:

<p style="color:#1a7f37">Hay dos formas de enterarse de que pasó algo afuera. Webhook: el otro sistema nos avisa en el momento, como el timbre. Polling: nosotros preguntamos cada tanto si hay algo nuevo, como abrir la puerta cada cinco minutos a ver si llegó alguien. En n8n, el polling es un Schedule Trigger con un HTTP Request. Webhook es instantáneo y no gasta pedidos; polling sirve cuando el otro sistema no sabe avisar.</p>

| | Webhook | Polling |
|---|---|---|
| Quién avisa | El otro sistema, en el momento | Nosotros preguntamos cada X minutos |
| Rapidez | Instantáneo | Hasta X minutos de demora |
| Pedidos gastados | Solo cuando pasa algo | Uno cada X minutos, aunque no haya nada |
| Necesita | Que el otro sistema sepa mandar webhooks y que n8n sea accesible desde afuera | Que el otro sistema tenga una API para consultar |
| Ejemplo | Un formulario de Typeform avisa cada respuesta | Revisar cada 5 minutos si hay pedidos nuevos en una planilla |

**Ojo con n8n en la computadora:** para que un formulario de internet le mande un webhook a tu n8n local, n8n
tiene que ser accesible desde afuera (un servidor o un túnel, como dijimos en la Semana 2). En clase funciona
porque el "formulario" es tu propia terminal, en la misma computadora.

35. **Exportarlo:** **Ctrl + S** → menú **…** → **Download**. Pegás en el chat:

```text
Guardá el flujo: Ctrl + S → menú … → Download. Es la base de la Pre-entrega 2.
```

**Plan B:** los flujos **04 · Webhook: consulta con dólar y noticias** (elegí tu credencial en *Noticias del
destino*) y **05 · Simulador** son este paso terminado.

#### Las trabas más comunes durante la práctica

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "No veo statusCode ni headers" | Falta *Add option* → *Response* → **Include Response Headers and Status** en el HTTP Request. |
| "Me da 401 con NewsAPI" | La clave tiene un espacio o una letra de más o de menos. Que la copien de nuevo desde newsapi.org (sección *Account*). Y que el *Name* sea `X-Api-Key`. |
| "Me da 429" | Se pasaron de los 100 pedidos por día del plan gratis de NewsAPI (o ejecutaron muchas veces seguidas). Mañana vuelve a andar; mientras, el Plan B. |
| "Me trae 0 noticias" | Buscaron algo muy raro, o el filtro de idioma no encuentra nada. Que prueben `q` = `Argentina`. |
| "*The requested webhook is not registered*" | No apretaron **Listen for test event** (o *Execute workflow*) antes de mandar el comando, o ya usaron esa vez. Que lo aprieten y manden de nuevo. |
| "PowerShell dice *no se puede conectar*" | n8n está apagado, o la URL está mal (`webhook-test`, con guion). |
| "El webhook recibe pero el nombre sale vacío" | Usaron `$json.nombre` en vez de `$json.body.nombre`: los datos están adentro de `body`. |
| "En PowerShell aparecen letras raras" | Mandaron tildes. Que las saquen del comando. |
| "Google: *Error 400: redirect_uri_mismatch*" | La Redirect URI de Google no es idéntica a la de n8n. Copiar de nuevo desde n8n, pegar, guardar y esperar unos minutos. |
| "Google: *Access blocked* o *Error 403: access_denied*" | Su Gmail no está como usuario de prueba (*Audience* → *Test users*). |

---

### 113–117 · Para practicar, Pre-entrega 2 y cómo sigue

#### Filmina 32 · Para practicar: antes de la pre-entrega (2 min)

<p style="color:#1a7f37">Hoy construyeron un flujo que recibe datos por webhook y consulta una API con clave. Repítanlo con otra API, guarden las credenciales, y con esto hacen la pre-entrega.</p>

Para explicar:
- **"Lo que construiste hoy: un flujo que recibe datos por webhook y consulta una API autenticada."**
  - *Ejemplo:* Recibir consulta → Cotización del dólar → Noticias del destino → Armar respuesta.
- **"Repetilo con otra API: elegí un servicio que uses y hacele un GET simple con su API Key."** Es el Ejercicio 5.
  La mejor forma de perderle el miedo a las APIs es leer la documentación de una que no vimos y hacer el primer GET
  solos.
  - *Ejemplo:* Open-Meteo (el clima, sin clave), la PokeAPI o la de Rick and Morty (sin clave, las de la demo),
    OpenWeatherMap (con clave), la API de películas TMDB.
- **"Guardá las credenciales: configuradas una vez, te sirven para todo lo que viene."** La de Google la vamos a
  usar mucho en el Módulo 5.
  - *Ejemplo:* La credencial de Google Sheets de hoy es la que usa el flujo de la clase que viene.
- **"Lo que sigue: la pre-entrega aplica exactamente esto: infraestructura de integración técnica."** La filmina
  dice "pre-entrega 4", pero es la **Pre-entrega 2**: la del programa para el Módulo 4.

#### Pre-entrega 2 · Infraestructura de integración técnica (2 min, sin filmina)

<p style="color:#1a7f37">La Pre-entrega 2: un flujo que recibe o consulta datos de afuera, por webhook o por API, los procesa con al menos dos nodos de lógica o transformación, y entrega un resultado claro. Todo en un PDF, con capturas, un diagrama y una reflexión: qué pasa si la API se cae. La consigna completa y la rúbrica están en el archivo de ejercicios.</p>

Para explicar (los cinco puntos de la consigna):
1. **Un disparador:** un Webhook o un HTTP Request a una API pública. No hace falta OAuth2; con una API Key alcanza.
2. **Lógica y transformación:** al menos dos nodos de los de la Semana 3 (IF, Switch, Merge, Aggregate, Edit
   Fields, Wait), **donde aporten valor**, no para cumplir.
3. **La anatomía del flujo:** un diagrama simple, trigger → nodos → output, con qué entra y qué sale de cada uno.
4. **Un output claro:** que se entienda qué le pasó al dato desde que entró hasta que salió.
5. **Reflexión (3–4 líneas):** ¿qué pasa si la API se cae o da error? ¿Dónde pondrías un IF que mire el status code
   o un *Error Trigger*? No hace falta construirlo.

- *Ejemplo:* El flujo de hoy, con un IF después de *Cotización del dólar* que pregunta "¿el statusCode es 200?" y, si
  no, responde "no pudimos calcular el precio, te escribimos en un rato". El ejemplo resuelto completo está en
  `ejercicios-docente.md`.
- **Lo que más pesa en la rúbrica:** la implementación en n8n (50 %) y la reflexión sobre errores (25 %).

#### Filmina 33 · ¿Cómo sigue? De la pieza técnica al flujo completo (1 min)

<p style="color:#1a7f37">Ya tienen n8n hablando con el mundo: autenticado y recibiendo avisos. En el Módulo 5 conectamos servicios reales de punta a punta. Y para llevarse: toda integración que parezca mágica es, por dentro, un método, una URL, unos headers y un body.</p>

Para explicar:
- **"Módulo 5: creando workflows con aplicaciones y servicios externos."** Planificar un flujo antes de armarlo y
  construir uno completo con los servicios de Google (Gmail, Sheets, Calendar), usando la credencial de hoy.
  - *Ejemplo:* Una consulta llega por Gmail, se guarda en Sheets y se agenda una llamada en Calendar.
- **"Para llevar: toda integración que parezca mágica es, por dentro, un método, una URL, unos headers y un
  body."**
  - *Ejemplo:* "El formulario se guarda solo en la planilla" = un POST a un webhook + un pedido a la API de Sheets
    con un header de autorización y la fila en el body.

---

### 117–120 · Preguntas y cierre

**Filmina 34 · ¿Preguntas?** (2 min) — las tres de la filmina: la diferencia entre 401 y 403, si la Redirect URI de
Google les tiró *mismatch*, y si algún HTTP Request les da problemas de formato JSON.

<p style="color:#1a7f37">¿Quedó clara la diferencia entre un 401 y un 403? ¿A alguno Google le tiró mismatch? ¿Algún HTTP Request que les dé problemas? Compartan pantalla.</p>

**Filmina 35 · ¡Gracias!** (1 min)

<p style="color:#1a7f37">Gracias. Para la semana que viene: la Pre-entrega 2, los ejercicios para casa, leer el material y el cuestionario.</p>

- **Para la Semana 5:**
  1. La **Pre-entrega 2** (un solo PDF).
  2. Los **ejercicios para casa** (5 a 8), sobre todo el 8 (OAuth2 con Google: la clase que viene lo usamos).
  3. Leer `Semana 4.docx` y hacer el cuestionario del módulo en la plataforma.

---

### Checklist de salida

- [ ] Saben qué es una API, qué es un endpoint y qué viaja en un pedido y en una respuesta.
- [ ] Distinguen GET, POST, PUT, PATCH y DELETE.
- [ ] Leen un status code: 2xx, 4xx (revisá tu pedido) y 5xx (no es tuyo), y distinguen 401 de 403.
- [ ] Crearon una credencial Header Auth, la usaron en un HTTP Request y vieron el 401 al romperla.
- [ ] Vieron OAuth2 con Google y saben qué es la Redirect URI.
- [ ] Armaron (o vieron armar) un webhook que recibe datos y responde.
- [ ] Tienen la consigna de la Pre-entrega 2.

---

### Glosario de la clase

Todas las palabras técnicas de hoy, en criollo. Se puede pegar en el chat al final de la clase.

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **API** | La puerta por la que un programa le habla a otro. | La API de dolarapi.com. |
| **Cliente / servidor** | El que pide / el que responde. | n8n pide el dólar (cliente); dolarapi.com responde (servidor). |
| **Endpoint** | Cada dirección de una API que acepta pedidos: un plato de la carta. | `/v1/dolares/oficial` |
| **Documentación** | El manual de una API: qué se puede pedir y cómo. | La página de NewsAPI que explica `/v2/everything`. |
| **Integración** | Conectar dos sistemas para que trabajen juntos. | Formulario → n8n → planilla. |
| **HTTP / HTTPS** | El idioma de los pedidos por internet / la versión cifrada. | El `https://` de las direcciones. |
| **Protocolo** | Un conjunto de reglas para comunicarse. | HTTP es un protocolo. |
| **Request / response** | El pedido / la respuesta. | Pido el dólar / me devuelve 1570. |
| **URL** | Una dirección de internet. | `https://dolarapi.com/v1/dolares/oficial` |
| **Parámetros (query)** | Datos extra en la URL, después del `?`. | `?q=Bariloche&language=es` |
| **Método** | Qué acción querés hacer. | GET, POST, PUT, PATCH, DELETE. |
| **Headers** | Datos sobre el pedido: el "sobre" de la carta. Ahí va la credencial. | `X-Api-Key: ••••` |
| **Body** | El contenido del pedido o de la respuesta: la "carta". | `{"nombre": "Lucía"}` |
| **Status code** | El número de tres cifras que dice cómo salió. | 200, 401, 404, 500. |
| **Idempotente** | Que hacerlo dos veces deja todo igual que hacerlo una. | GET sí; POST no (crea dos). |
| **Autenticación / autorización** | Demostrar quién sos / qué podés hacer. | 401 / 403. |
| **Credencial** | La forma guardada de demostrarle a un servicio quién sos. | La credencial "NewsAPI" en n8n. |
| **API Key** | Una clave fija que te da el servicio. | La clave de NewsAPI. |
| **Bearer Token** | Una clave que suele vencer, en el header `Authorization`. | `Authorization: Bearer abc123` |
| **Basic Auth** | Usuario y contraseña en un header. Vieja y simple. | El panel de un router. |
| **OAuth2** | "Iniciar sesión con…": un permiso temporal sin dar la contraseña. | Conectar tu Google a n8n. |
| **Client ID / Client Secret** | El nombre y la contraseña de tu aplicación ante Google. | Los que se crean en Google Cloud. |
| **Redirect URI** | La dirección a la que Google vuelve después de dar el permiso. | `http://localhost:5678/rest/oauth2-credential/callback` |
| **Handshake** | "Apretón de manos": ir a Google, decir que sí y volver. | El *Sign in with Google* de la credencial. |
| **Encriptar** | Convertir algo en un código que solo se lee con una llave. | Las credenciales en `database.sqlite`. |
| **HTTP Request** | El nodo genérico para hablarle a cualquier API. | El que pide el dólar. |
| **Webhook** | Una dirección de n8n que espera que le manden algo y arranca el flujo. | `/webhook/consulta` |
| **Test URL / Production URL** | La dirección de prueba (una vez por clic) / la de verdad (con el flujo publicado). | `webhook-test/...` / `webhook/...` |
| **Publish** | Publicar (activar) un flujo para que funcione solo. | El botón de arriba a la derecha. |
| **Polling** | Preguntar cada tanto si hay algo nuevo. | Schedule cada 5 minutos + HTTP Request. |
| **Rate limit** | El límite de pedidos que acepta una API. | 100 por día en NewsAPI gratis; el 101 da 429. |
| **cURL** | Un programa para hacer pedidos HTTP desde la terminal. | *Import cURL* en el HTTP Request. |
