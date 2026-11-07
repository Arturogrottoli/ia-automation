# Semana 5 — Módulo 5: Creando workflows con aplicaciones y servicios externos

Fuente: `program-summary.pdf` (Módulo 5). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_5_AI_Automation.pptx` | Las filminas del módulo (32). |
| `Semana 5.docx` | El material de lectura: planificar un workflow, el caso de la planilla con Google, el cuestionario de 5 preguntas, el podcast y el guion sugerido de la clase. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase y para casa, la plantilla para planificar un flujo y el paso a paso completo de la práctica. Se comparte con los alumnos. |
| [n8n/](n8n/) | Cuatro workflows listos para importar: el mapeo relámpago, el caso del módulo con Google, el mismo caso sin Google (para ensayar) y la clínica de errores. Además, `planilla-empleados.csv`: la planilla de la práctica, para subir a Google Sheets. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, qué pasa en cada flujo, cómo romper el flujo a propósito para la clínica y el plano resuelto del caso. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿Qué pasa si se ejecuta dos veces? | 3 min |
| En clase | 2 · ¿Cuántos correos salen? | 2 min |
| En clase | 3 · Mapeo relámpago | 6 min |
| En clase | 4 · La planilla que se completa sola (lo arman a la par del profe) | 38 min |
| Casa | 5 · El plano de tu propio flujo | 20 min |
| Casa | 6 · Probá la idempotencia | 15 min |
| Casa | 7 · Clínica de errores | 15 min |
| Casa | 8 · Desafío: el onboarding | 30 min |

## Evaluación

- **Esta semana no tiene pre-entrega.** Está el cuestionario del módulo en la plataforma (5 preguntas, 15 minutos,
  se aprueba con 70 %, 3 intentos).
- La que sigue es la **Pre-entrega 3: Planificá y construí tu primer AI Agent**, en la Semana 6.

## A tener en cuenta

- **La filmina 29 habla de "la pre-entrega 5"**, y no existe: según el `program-summary.pdf`, el Módulo 5 no tiene
  pre-entrega, y la siguiente es la **Pre-entrega 3** (el AI Agent, Semana 6). En el guion se dice "la próxima
  pre-entrega". Lo de "planificar antes de construir" les va a servir directamente para esa: se llama
  *Planificá y construí tu primer AI Agent*.
- **La filmina 30 dice que el Módulo 6 es el AI Agent "con chat model, memoria, tools y system prompt".** Coincide
  con el programa.
- **El material de lectura no dice de qué API salen los datos** de la planilla (Nombre, Edad y Cargo). En la
  práctica se usa **dummyjson.com**, una API de prueba gratis y sin clave, con 208 personas inventadas. Le pedís
  `https://dummyjson.com/users/3` y te devuelve a Sophia Brown, 43 años, *Accountant*. Probada el 6 de noviembre de
  2026: `users/999` da 404 y `users/` sin número devuelve la lista entera (lo usamos en la clínica). Los cargos
  vienen en inglés.
- **La filmina 27 pide "crear la carpeta en Drive y guardar su ID", pero el caso de la filmina 16 no tiene nodo de
  Drive.** Lo unimos así: el flujo crea **una carpeta por empleado** adentro de una carpeta "Legajos" que elegimos
  por su ID, y escribe el link en una quinta columna de la planilla, **Carpeta**. Son ocho nodos en vez de siete. Es
  también el "caso de onboarding" que sugiere el material de lectura.
- **Qué está probado y qué no.** Los flujos 01, 03 y 04 están probados de punta a punta en n8n 2.46. El 02 (con
  Google) se importa bien y n8n acepta todos sus parámetros, pero **no se probó contra Google**, porque hace falta
  una cuenta con credenciales: probalo vos antes de la clase con tu cuenta. Los mensajes de error de Google que
  aparecen en la clínica (403, 404) son los que da Google normalmente, pero tampoco se probaron en este n8n.
- **El paso de los accesos (Paso 2) depende de que hayan hecho el Ejercicio 8 de la Semana 4** (el proyecto en
  Google Cloud y la credencial de Sheets). Al que no lo hizo, no le alcanza el tiempo de la clase para armar todo:
  que siga la lógica con el flujo **03 · Ensayo sin Google**, que hace lo mismo sin credenciales, y que haga lo de
  Google en casa.
- **El material de lectura sugiere herramientas "preferidas" (Zapier, Make, n8n)** y tres actividades de 15, 45 y 30
  minutos. No entran tal cual en 2 horas con 30 filminas: el desafío de mapeo quedó en 6 minutos, el laboratorio es
  la práctica (Pasos 3 y 4) y la "ruleta del error" es el Paso 5 más el Ejercicio 7 para casa. Todo en n8n.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–10 | Apertura y repaso de la Semana 4 | 1–5 | |
| 10–35 | **01 · Planificar antes de construir** | 6–13 | Ej. 1 (3 min) |
| 35–55 | **02 · El caso del módulo** | 14–20 | Ej. 2 (2 min) |
| 55–65 | Break | 21 | |
| 65–72 | **03 · Mapeo relámpago** | 22–23 | Ej. 3 (6 min) |
| 72–110 | **03 · Práctica en vivo:** el plano, los accesos, la entrada, proceso y salida, y la clínica | 24–28 | Ej. 4: lo arman a la par |
| 110–115 | Para practicar y cómo sigue | 29–30 | |
| 115–120 | Preguntas y cierre | 31–32 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden:
1. Logging y mantenimiento (filmina 12): se nombran los cinco puntos.
2. El Ejercicio 2: se dice la respuesta.
3. El Paso 1 (el plano): se muestra el plano ya hecho, del docente.
4. En el Paso 5, la parte de los permisos: se muestra solo el 404.

Lo último que se recorta es el Filter y el Aggregate, en los Pasos 3 y 4: son las dos ideas del módulo.

---

### Preparación (antes de la clase)

- [ ] **Tu n8n prendido y logueado.** Probá antes la práctica entera.
- [ ] **Tus credenciales de Google en n8n**, las tres conectadas y probadas: **Google Sheets OAuth2 API** (la del
  Ejercicio 8 de la Semana 4), **Google Drive OAuth2 API** y **Gmail OAuth2**. Las tres usan el mismo *Client ID* y
  *Client Secret*. En Google Cloud, habilitá además la **Gmail API** (☰ → *APIs & Services* → *Library*). En
  clase creás en vivo la de Gmail. El paso a paso está en `ejercicios-docente.md`.
- [ ] **La planilla de la práctica.** En Google Drive: **Nuevo** → **Hoja de cálculo de Google**. Ponele de nombre
  `Empleados`, y después **Archivo** → **Importar** → **Subir** → `n8n/planilla-empleados.csv` →
  *Reemplazar la hoja actual*. Tienen que quedar cinco filas con ID 1 a 5, y solo la del ID 2 completa.
  - Hacé una **copia** (**Archivo** → **Hacer una copia**) para volver a dejarla vacía después de cada prueba.
- [ ] **La carpeta "Legajos" en Drive**, vacía. Copiá su ID: es lo que aparece en la dirección después de
  `/folders/`, cuando la abrís.
- [ ] **Los workflows importados** (carpeta [n8n/](n8n/)). Para cada uno: workflow nuevo → menú **…** →
  **Import from File** → **Save**.
  - `01-mapeo-relampago.json`: el Ejercicio 3. Ejecutalo: tiene que dar tres personas, y la tercera mal separada.
  - `02-planilla-google.json`: los Pasos 3 y 4 terminados. Al importarlo:
    - elegí tus credenciales en los nodos de Google;
    - pegá el link de tu planilla en *Leer planilla* y en *Completar la fila*;
    - pegá el ID de "Legajos" en *Crear carpeta del empleado*;
    - poné tu correo en *Avisar que terminó*.

    Ejecutalo una vez de punta a punta, y después vaciá la planilla de nuevo.
  - `03-ensayo-sin-google.json`: el mismo flujo con los nodos de Google simulados. Tiene que dar 4 filas y 1
    correo.
  - `04-clinica-de-errores.json`: el Ejercicio 7.
- [ ] **Para la clínica (Paso 5):** pedile a Romina (o a otra cuenta) que te comparta una planilla como **Lector**,
  para mostrar el 403. Si no se puede, mostrás solo el 404.
- [ ] **El boceto del Módulo 2.** Tené a mano el de algún alumno, o uno tuyo, para el Ejercicio 1.
- [ ] **El día anterior**, avisales a los alumnos:
  - que entren con la computadora y con n8n prendido;
  - que tengan hecho el Ejercicio 8 de la Semana 4 (la credencial de Google Sheets);
  - que traigan una planilla de Google con las columnas **ID, Nombre, Edad, Cargo, Carpeta** y los ID 1 a 5, o que
    descarguen `planilla-empleados.csv`.
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) y `planilla-empleados.csv` listos para compartir.
- [ ] Avisar que la clase queda grabada.

---

### 0–10 · Apertura y repaso de la Semana 4

**Filmina 1 · Portada** (1 min) — Módulo 5: Creando workflows con servicios externos.

<p style="color:#1a7f37">Bienvenidos al Módulo 5. La clase pasada aprendimos a hablarle a una API: una pieza. Hoy armamos el sistema completo: una planilla de Google que se completa sola, con una carpeta en Drive por cada persona y un correo que avisa que terminó. Y antes de tocar un nodo, vamos a aprender a planificarlo.</p>

Para explicar:
- **"Servicios externos".** Son los programas que no son n8n y con los que n8n trabaja: Google Sheets (las
  planillas), Google Drive (las carpetas y archivos), Gmail (el correo), y cualquier API. Hasta ahora usábamos uno
  por vez; hoy los usamos juntos, y a eso se le dice **orquestar**: como el director de una orquesta, n8n no toca
  ningún instrumento, pero hace que cada uno entre en el momento justo.
  - *Ejemplo:* Sheets dice qué falta, una API trae los datos, Drive guarda, Gmail avisa. n8n dirige.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a planificar un flujo antes de construirlo, verificar los permisos antes de empezar, diseñar para que reejecutarlo no duplique nada, construir uno de punta a punta con Sheets, Drive y Gmail, y diagnosticar un fallo leyendo el registro de la ejecución.</p>

Para explicar cada objetivo:
- **"Planificar un workflow antes de construirlo: problema, proceso, accesos y errores."** **Planificar** es
  escribir y dibujar el flujo en un papel antes de abrir n8n: qué problema resuelve, qué pasos tiene, qué servicios
  necesita y qué puede salir mal. Es la parte que más tiempo ahorra y la que más se saltea.
  - *Ejemplo:* "Llega una consulta → se guarda en la planilla → si es urgente, aviso por WhatsApp. ¿Qué pasa si la
    planilla no existe?"
- **"Verificar credenciales, permisos y límites de las APIs antes de desarrollar."** Una **credencial** es la
  forma de demostrarle a un servicio quién sos (lo vimos la semana pasada). Un **permiso** es lo que esa
  credencial te deja hacer: leer, escribir, borrar. Los **límites** son cuántos pedidos te acepta un servicio por
  minuto o por día.
  - *Ejemplo:* Tu cuenta puede *ver* la planilla del jefe, pero no *editarla*. Si el flujo tiene que escribir, se
    frena.
- **"Diseñar para idempotencia: que reejecutar el flujo no duplique nada."** **Idempotencia** es una palabra
  difícil para una idea simple: que ejecutar el flujo dos veces con los mismos datos deje todo igual que
  ejecutarlo una. **Reejecutar** es volver a ejecutar: pasa siempre, por un reintento, un error o un clic de más.
  - *Ejemplo:* El ascensor: apretar el botón cinco veces no llama a cinco ascensores. Eso es idempotente.
- **"Construir una integración de punta a punta con Sheets, Drive y Gmail."** **De punta a punta** quiere decir
  completa: desde que arranca hasta que deja el resultado, sin pasos a mano en el medio.
  - *Ejemplo:* La planilla tenía 4 filas vacías → el flujo las completa → crea 4 carpetas → manda 1 correo.
- **"Diagnosticar un fallo leyendo el log de ejecución."** El **log** ("registro") de ejecución es lo que n8n
  guarda de cada vez que corrió un flujo: qué entró y qué salió de cada nodo, y dónde se rompió. Es la "caja negra"
  del avión.
  - *Ejemplo:* El correo no llegó. En *Executions* ves que el flujo se frenó en Drive, con un 404.

**Filmina 3 · Agenda** (1 min)

<p style="color:#1a7f37">Primero, dónde quedamos. Después, planificar antes de construir. Después, el caso del módulo: una planilla que se completa sola. Break. Y la práctica en vivo, con nuestras cuentas de Google, rompiéndolo a propósito al final.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 4** (3 min, sin filmina) — antes de pasar a la filmina 5.

<p style="color:#1a7f37">Repasemos. Primero: todo pedido a una API lleva un método, una URL, headers y, a veces, un body. Y vuelve con un status code: 200 salió bien, 4 algo es error nuestro, 5 algo es del servidor.</p>

<p style="color:#1a7f37">Segundo: 401 es "no sé quién sos", se arregla con la credencial. 403 es "sé quién sos, pero no tenés permiso", y la credencial no lo arregla. Hoy los dos nos van a aparecer con Google.</p>

<p style="color:#1a7f37">Y tercero: las credenciales se configuran una vez y se reutilizan. La de Google Sheets que algunos armaron en casa con OAuth2 es la que vamos a usar hoy.</p>

Para explicar:
- **El 403 y el 404, hoy en Google.** Con Google, el 403 suele ser un permiso: la planilla es de otro y te la
  compartieron para ver, no para editar. El 404 suele ser un ID que ya no existe: la carpeta la borraron.
  - *Ejemplo:* "403 The caller does not have permission" = no podés escribir en esa planilla.
- **OAuth2.** Lo vimos la semana pasada: es el "iniciar sesión con Google" para n8n. Le das permiso a n8n para
  entrar a tus planillas sin darle tu contraseña. Hoy lo repetimos para Drive y Gmail.
  - *Ejemplo:* La pantalla de Google que dice "n8n curso quiere acceder a tu cuenta de Google" → *Continuar*.

**Filmina 5 · ¿Dónde quedamos? De la pieza técnica al sistema** (3 min)

<p style="color:#1a7f37">En el Módulo 4 aprendieron a hablarle a una API: una petición que funciona, una pieza suelta. Hoy orquestamos varios servicios para que trabajen como una sola unidad. Y al final de la clase van a tener un flujo que conecta Sheets, Drive y Gmail, y van a saber qué hacer cuando se rompa.</p>

Para explicar:
- **"En el módulo 4: aprendiste a hablarle a una API: método, URL, headers, body y credenciales."**
  - *Ejemplo:* El GET al dólar y el pedido a NewsAPI con la API Key.
- **"Lo que tenías: piezas sueltas. Una petición que funciona."** Una petición que funciona es como un ladrillo
  bien hecho: sirve, pero no es una casa. Hoy armamos la casa.
  - *Ejemplo:* Saber pedir el dólar no es lo mismo que tener un sistema que cotiza, guarda y avisa solo.
- **"Hoy: orquestamos varios servicios para que trabajen como una sola unidad."** Cada servicio hace una cosa;
  n8n decide el orden y pasa los datos de uno al otro. **Pasar los datos de un servicio a otro** se llama
  **mapear**, y hoy lo vamos a practicar mucho.
  - *Ejemplo:* El ID que sale de la planilla entra a la API; el nombre que sale de la API entra a Drive.
- **"Al final de la clase: vas a tener un flujo que conecta Sheets, Drive y Gmail, y vas a saber qué hacer cuando
  se rompa."** Lo segundo es tan importante como lo primero: todos los flujos que conecten servicios de afuera se
  van a romper alguna vez.
  - *Ejemplo:* Alguien borra la carpeta de Drive un lunes. El flujo falla. Vos sabés dónde mirar en dos minutos.

---

### 10–35 · Sección 01 · Planificar antes de construir

**Filmina 6 · Separador "01: Planificar antes de construir"**

<p style="color:#1a7f37">Primera parte, y la más importante del módulo: qué hacer antes de abrir n8n.</p>

#### Filmina 7 · ¿Por qué planificar? El costo del lienzo en blanco (4 min)

<p style="color:#1a7f37">Lo que hacemos todos: abrir n8n y empezar a arrastrar nodos a ver qué sale. Funciona para flujos chicos, que se ejecutan una vez. Deja de funcionar apenas hay datos reales, sistemas de afuera, o algo que se va a ejecutar más de una vez. Y los síntomas son siempre los mismos: flujos que hay que rehacer de cero, datos duplicados, procesos que fallan sin avisar, y automatizaciones que solo entiende quien las armó.</p>

Para explicar:
- **"Lo que hacemos siempre: arrancar n8n y empezar a arrastrar nodos a ver qué sale."** El **lienzo** (o
  *canvas*) es la pantalla en blanco de n8n donde se ponen los nodos. "Lienzo en blanco" es la tentación de empezar
  por ahí.
  - *Ejemplo:* "Quiero que las consultas lleguen a la planilla." → abro n8n → pongo un Gmail Trigger → "y ahora,
    ¿qué?".
- **"Cuándo funciona: en workflows chicos, que se ejecutan una vez y listo."** Para probar una idea, está perfecto.
  - *Ejemplo:* "Quiero ver qué devuelve la API del dólar." Un trigger y un HTTP Request. No hace falta plano.
- **"Cuándo deja de funcionar: apenas hay datos reales, sistemas externos o algo que se va a ejecutar más de una
  vez."** Los **datos reales** vienen sucios: vacíos, repetidos, mal escritos. Los **sistemas externos** tienen sus
  reglas y sus permisos. Y lo que se ejecuta muchas veces multiplica cada error.
  - *Ejemplo:* Un flujo que manda un correo por cada fila: con 3 filas de prueba, bien. Con 300 filas reales, 300
    correos.
- **"Los síntomas: workflows que hay que reconstruir desde cero, datos duplicados, procesos que fallan en silencio
  y automatizaciones que sólo entiende quien las armó."** **Fallar en silencio** es lo peor: el flujo no da error,
  pero hace mal las cosas, y nadie se entera.
  - *Ejemplo:* El flujo dejó de guardar consultas hace dos semanas porque cambió el nombre de una columna. Nadie
    lo vio hasta que un cliente se quejó.

**Ejemplo: arrancar un flujo**

❌ Mal: directo al lienzo.

```text
"Abro n8n, pongo un Google Sheets, después veo qué le conecto."
```

✅ Bien: primero, una línea y tres cajas en un papel.

```text
Problema: el área de RR.HH. tarda una hora por semana en completar a mano los datos de los empleados nuevos.
Entrada: la planilla (filas con ID y sin nombre).  Proceso: buscar los datos por ID.  Salida: la fila completa y un aviso.
```

#### Filmina 8 · El problema y el proceso: los dos primeros pasos del diseño (4 min)

<p style="color:#1a7f37">Los dos primeros pasos. Uno: entender el problema de negocio, qué proceso manual estamos automatizando y por qué: tiempo, errores, costo o escala. Dos: el resultado esperado, en términos de negocio, no de nodos. Y después, dibujar el flujo real, con todos sus pasos y todas las herramientas que haga falta sumar. Planificar antes de desarrollar da un flujo más ágil y deja anticipar los errores en vez de improvisar.</p>

Para explicar:
- **"Entender el problema de negocio: qué proceso manual se está automatizando y por qué. Tiempo, errores, costo o
  escalabilidad."** El **problema de negocio** es el problema de la persona o la empresa, no el técnico. Las cuatro
  razones típicas para automatizar:
  - **tiempo**: se tarda mucho;
  - **errores**: a mano se equivocan;
  - **costo**: cuesta plata hacerlo;
  - **escalabilidad**: si crece, no da abasto.

  **Escalabilidad** es que funcione igual con 10 que con 10.000.
  - *Ejemplo:* "Completar los datos de 5 empleados nuevos lleva 20 minutos y a veces se copia mal la edad" →
    tiempo y errores.
- **"El resultado esperado: definirlo en términos de negocio, no de nodos."** "Que el Gmail mande un mail" es un
  nodo. "Que RR.HH. se entere sin tener que revisar la planilla" es el resultado de negocio. Si se define bien, se
  sabe cuándo el flujo está terminado.
  - *Ejemplo:* Resultado: "todas las filas con ID quedan completas y con su carpeta, y RR.HH. recibe un solo aviso
    por tanda".
- **"Dibujar el flujo real: con todos sus pasos, y con las herramientas externas que haga falta incorporar."**
  Dibujarlo con flechas, en papel o en una pizarra. Al dibujar aparecen los pasos que uno se olvida: "¿y de dónde
  saco los datos?", "¿y si la fila ya estaba completa?".
  - *Ejemplo:* Planilla → ¿está vacía? → buscar datos → crear carpeta → escribir en la fila → avisar.
- **"Por qué importa: planificar antes de desarrollar da un flujo más dinámico y te deja anticipar errores en lugar
  de improvisar."** **Improvisar** en un flujo es agregar nodos de parche cada vez que algo falla, hasta que nadie
  entiende el flujo.
  - *Ejemplo:* Un flujo con tres IF de parche ("si el nombre viene vacío", "si viene con espacios", "si viene en
    mayúsculas") que se podrían haber previsto en el papel.

#### Filmina 9 · Accesos y permisos: lo que se verifica antes, no después (4 min)

<p style="color:#1a7f37">Tercer paso: qué servicios se conectan. Listar todas las APIs que el flujo va a necesitar, y qué piden: ¿tienen límites? ¿cuotas? ¿piden OAuth? La regla: verificar que tengamos los accesos antes de construir, no a mitad del desarrollo. Porque un permiso que falta no se resuelve con lógica: te frena el proyecto entero.</p>

Para explicar:
- **"Qué servicios se conectan: listar todas las APIs que el flujo va a necesitar."** Una lista simple, con un
  renglón por servicio.
  - *Ejemplo:* Google Sheets, dummyjson.com, Google Drive, Gmail. Cuatro servicios.
- **"Qué piden: ¿tienen límites de rate? ¿cuotas? ¿requieren OAuth?"** El **rate limit** ("límite de
  velocidad") es cuántos pedidos te acepta por minuto. La **cuota** es cuántos te acepta por día o por mes, como
  los datos del celular. Y si piden **OAuth**, hay que pasar por el proyecto de Google Cloud que armamos la semana
  pasada.
  - *Ejemplo:* La API de Google Sheets acepta unos 60 pedidos de escritura por minuto por usuario. Con 5 filas, ni
    se nota; con 5.000 de golpe, sí.
- **"La regla: verificar que tengamos los accesos antes de construir, no a mitad del desarrollo."** **Verificar**
  es probarlo, no suponerlo: entrar al servicio con la cuenta que va a usar el flujo y hacer una prueba mínima.
  - *Ejemplo:* Antes de armar nada: abrir la planilla con esa cuenta y escribir algo en una celda. Si se puede,
    hay permiso de escritura.
- **"Por qué: un permiso que falta no se resuelve con lógica. Te frena el proyecto entero."** Si falta un permiso,
  no hay IF ni Switch que lo arregle: hay que pedírselo a alguien, y ese alguien puede tardar una semana.
  - *Ejemplo:* La planilla es del cliente, y el cliente está de vacaciones. El flujo está listo, pero no puede
    escribir.

**Ejemplo: el inventario de accesos**

❌ Mal: descubrirlo a mitad del desarrollo.

```text
"Ya armé todo. Lo ejecuto... 403. Ah, la planilla es de Marcela y me la compartió para ver."
```

✅ Bien: una tabla antes de empezar.

```text
Servicio        | Qué hace el flujo | Credencial           | Permiso que necesita | ¿Probado?
Google Sheets   | lee y escribe     | OAuth2 (mi cuenta)   | Editor de la planilla | ✅
dummyjson.com   | lee               | ninguna              | —                     | ✅
Google Drive    | crea carpetas     | OAuth2 (mi cuenta)   | Editor de "Legajos"   | ✅
Gmail           | manda un correo   | OAuth2 (mi cuenta)   | enviar correo         | ✅
```

#### Filmina 10 · Para recordar: leer no es escribir (1 min)

<p style="color:#1a7f37">Antes de arrastrar el primer nodo, entren a cada servicio y confirmen que la cuenta que van a usar tiene los accesos que el flujo necesita. Muchas veces alcanza para leer, pero no para escribir, y eso se descubre a mitad del desarrollo.</p>

Para explicar:
- **Leer y escribir son permisos distintos.** En Google, cuando te comparten algo, puede ser como **Lector** (solo
  mirar), **Comentarista** (mirar y comentar) o **Editor** (cambiar). Para que n8n escriba, la cuenta conectada
  tiene que ser Editor, o la dueña del archivo.
  - *Ejemplo:* El flujo lee la planilla perfecto (Lector alcanza), y se rompe recién en el último paso, al escribir.

#### Filmina 11 · Errores e idempotencia: qué pasa cuando algo sale mal (5 min)

<p style="color:#1a7f37">Cuarto paso: pensar qué pasa cuando algo sale mal. Si la API falla o tarda: ¿el flujo se cae, reintenta o avisa? Datos duplicados, vacíos o mal escritos: ¿qué hace con ellos? Casos dudosos: ¿hace falta que los mire una persona? Y la idempotencia: si se ejecuta dos veces con el mismo dato, ¿duplica la fila? ¿manda el mismo correo otra vez?</p>

Para explicar:
- **"Si la API falla o responde lento: ¿el flujo se cae, reintenta o avisa?"** Tres opciones:
  - **se cae**: el flujo se frena con error, que es lo que pasa si no hacemos nada;
  - **reintenta**: vuelve a probar en unos segundos. En n8n, cada nodo tiene *Settings* → **Retry On Fail**;
  - **avisa**: sigue por otro camino y le manda un mensaje a alguien.
  - *Ejemplo:* Si dummyjson tarda, el HTTP Request reintenta 3 veces. Si sigue fallando, se le avisa a RR.HH.
- **"Datos duplicados, vacíos o mal formateados: ¿qué hace el flujo con ellos?"**
  - **Duplicado**: el mismo dato dos veces.
  - **Vacío**: un campo sin nada.
  - **Mal formateado**: escrito distinto de como se espera, como una fecha "5/11" cuando se esperaba "2026-11-05",
    o la edad "treinta".
  - *Ejemplo:* Una fila sin ID. Si el flujo le pregunta a la API por el ID vacío, pasan cosas raras (lo vamos a ver
    en la clínica).
- **"Casos ambiguos: ¿hace falta un canal de revisión humana?"** **Ambiguo** es lo que se puede entender de dos
  maneras. Un **canal de revisión humana** es mandar esos casos a una persona (por correo, a una pestaña de la
  planilla) en vez de que el flujo adivine.
  - *Ejemplo:* "Juan Martín del Potro": ¿el nombre es "Juan Martín" y el apellido "del Potro"? El flujo no lo puede
    saber con seguridad. Lo vamos a ver en el desafío de mapeo.
- **"Idempotencia: si el workflow se ejecuta dos veces con el mismo dato, ¿duplica registros? ¿manda el mismo email
  otra vez?"** Un **registro** es un dato guardado: una fila, un contacto, un pedido. La pregunta se responde antes
  de construir, porque el flujo **se va a ejecutar dos veces**: alguien aprieta el botón dos veces, o falla en el
  medio y se reintenta.
  - *Ejemplo:* Un flujo que agrega una fila por cada consulta del Gmail. Si se ejecuta dos veces sobre los mismos
    correos, quedan las consultas duplicadas. Idempotente sería: "antes de agregar, fijarse si ya está".

**Ejemplo: diseñar para idempotencia**

❌ Mal: el flujo procesa todo lo que encuentra.

```text
Leer planilla → buscar datos de TODAS las filas → crear carpeta → escribir.
Segunda ejecución: 5 carpetas nuevas más, repetidas.
```

✅ Bien: el flujo procesa solo lo que falta.

```text
Leer planilla → ¿la fila ya tiene Nombre? → si ya tiene, no hace nada.
Segunda ejecución: 0 filas para procesar, 0 carpetas nuevas.
```

#### Filmina 12 · Logging y mantenimiento: que el flujo sobreviva sin vos (4 min)

<p style="color:#1a7f37">Quinto paso: qué pasa el día después. ¿Cómo te enterás de que falló, sin que alguien te avise? ¿Dónde quedan los registros, y hay alertas por Slack o correo? ¿Quién lo mantiene si te vas, y está documentado? ¿Cómo guardás las versiones? n8n permite exportar el JSON, que se puede guardar en git. Y si es modular: ¿se pueden reutilizar partes en otros procesos?</p>

Para explicar:
- **"Cómo te enterás: ¿cómo vas a saber que falló en producción sin que alguien te avise?"** **Producción** es
  cuando el flujo ya funciona de verdad, solo, con datos reales (lo opuesto a "probando"). Si nadie mira, un error
  puede durar semanas.
  - *Ejemplo:* Un **Error Trigger** (un flujo aparte que arranca cada vez que otro falla) que te manda un correo:
    "falló el flujo de la planilla en el nodo Drive".
- **"Dónde quedan los logs: de ejecución, y si hay alertas a Slack o email cuando algo se rompe."** En n8n, el
  registro de cada ejecución está en la pestaña **Executions** del flujo. Una **alerta** es un aviso automático.
  - *Ejemplo:* Executions muestra la lista: ✅ 10:00, ✅ 11:00, ❌ 12:00. Hacés clic en la de las 12 y ves en qué
    nodo se rompió.
- **"Quién lo mantiene: si te retirás del proyecto, ¿queda documentado para el que viene?"** **Documentar** es
  dejar escrito qué hace el flujo y cómo. En n8n, lo más simple son los **sticky notes** (las notas amarillas del
  lienzo) y nombres claros para los nodos.
  - *Ejemplo:* "Solo filas incompletas" se entiende; "Filter1", no. Los flujos de la clase tienen una nota que
    explica qué hace cada nodo.
- **"Cómo se versiona: n8n permite exportar el JSON, útil para control de versiones en git."** **Versionar** es
  guardar las versiones anteriores para poder volver atrás. Menú **…** → **Download** baja el flujo como `.json`.
  **Git** es un programa que guarda la historia de cambios de archivos; no hace falta usarlo en el curso, pero
  descargar el JSON antes de un cambio grande es lo mínimo.
  - *Ejemplo:* `planilla-v1.json` (andaba) y `planilla-v2.json` (le agregué Drive). Si la v2 se rompe, importás la v1.
- **"Si es modular: ¿el diseño permite reutilizar partes en otros procesos?"** **Modular** es armado en piezas
  que se pueden usar por separado. En n8n, un flujo puede llamar a otro con el nodo **Execute Workflow**: eso es
  un **sub-workflow** ("subflujo").
  - *Ejemplo:* "Avisar a RR.HH." como subflujo propio: lo usa el flujo de la planilla, el de las vacaciones y el de
    los cumpleaños.

#### Filmina 13 · Actividad: ¿qué pasa si se ejecuta dos veces? (3 min) — Ejercicio 1

<p style="color:#1a7f37">Vuelvan al flujo que bocetaron en el Módulo 2. Si se ejecutara dos veces con el mismo dato, ¿qué pasaría? ¿Duplicaría un registro? ¿Mandaría el mismo mensaje otra vez? Escríbanlo en el chat. Esa pregunta se responde en el diseño, no cuando ya está roto.</p>

Pegás en el chat:

```text
EJERCICIO 1 · ¿Qué pasa si se ejecuta dos veces?
Pensá en el flujo que bocetaste en el Módulo 2 (o en el de tu pre-entrega).
Si se ejecutara DOS veces con el mismo dato:
1. ¿Qué se duplicaría? (una fila, un mensaje, un turno, un pago…)
2. ¿Cómo lo evitarías? (una frase)
```

Esperás 2 minutos y leés tres o cuatro respuestas. Lo que suele aparecer, y qué decís:

| Lo que escriben | Qué les decís |
|---|---|
| "Se duplica la fila en la planilla" | El más común. Solución: antes de agregar, buscar si ya está (por un ID, el mail o el número de pedido). |
| "Le llega dos veces el mensaje al cliente" | El más caro: el cliente lo nota. Solución: marcar en la planilla "avisado: sí" y filtrar por eso. |
| "Se agenda dos veces el turno" | Igual: buscar si ya hay un turno a ese nombre y esa hora antes de crear. |
| "No pasaría nada" | Preguntá: "¿y si el trigger es un correo y se lee dos veces?". Casi siempre algo se duplica. |

<p style="color:#1a7f37">Fíjense que casi todas las soluciones son lo mismo: antes de hacer, preguntar si ya está hecho. Eso, en n8n, es casi siempre un Filter o un IF. Y es exactamente lo que vamos a hacer en la práctica.</p>

---

### 35–55 · Sección 02 · El caso del módulo

**Filmina 14 · Separador "02: El caso del módulo"**

<p style="color:#1a7f37">Ahora, el caso que vamos a construir en la práctica.</p>

#### Filmina 15 · El caso del módulo: completar una planilla con datos externos (3 min)

<p style="color:#1a7f37">El escenario: una planilla de Google con una columna ID siempre completa, y las columnas Nombre, Edad y Cargo vacías. El flujo consulta una fuente de afuera y completa esas columnas. Es simple de entender, pero tiene muchas decisiones de diseño. Y no solo vamos a mirar qué nodo va en cada lugar, sino por qué ese y no otro.</p>

Para explicar:
- **"El escenario: un Google Sheet con una columna ID siempre completa, y las columnas Nombre, Edad y Cargo
  vacías."** Un **ID** ("identificador") es un número o código único para cada cosa: no hay dos iguales. Es lo que
  permite encontrar a alguien sin confundirlo. El DNI es un ID.
  - *Ejemplo:* Lo que se ve en la planilla:

```text
ID | Nombre           | Edad | Cargo              | Carpeta
1  |                  |      |                    |
2  | Michael Williams | 36   | Support Specialist | (ya creada)
3  |                  |      |                    |
```

- **"Lo que hace el flujo: consultar una fuente externa y completar esas columnas."** La **fuente externa** es una
  API. En la práctica usamos **dummyjson.com**, una API de prueba con personas inventadas: le das un ID y te
  devuelve nombre, edad y cargo.
  - *Ejemplo:* `https://dummyjson.com/users/3` → Sophia Brown, 43 años, Accountant.
- **"Por qué este caso: es simple de entender, pero rico en decisiones de diseño."** En cada nodo hay una
  decisión: qué trigger, qué hacer con las filas completas, cuántos correos mandar.
  - *Ejemplo:* En una empresa real, la fuente sería el sistema de sueldos; el caso es el mismo.
- **"Lo que vamos a mirar: no sólo qué nodo va en cada lugar, sino por qué ese nodo y no otro."** El que sabe por
  qué está cada nodo puede adaptar el flujo a otro caso. El que copió los nodos, no.
  - *Ejemplo:* "Puse un Filter porque la clase tenía un Filter" contra "puse un Filter para que reejecutarlo no
    duplique".

#### Filmina 16 · La cadena completa: siete nodos, de punta a punta (4 min)

<p style="color:#1a7f37">Siete nodos. Un Manual Trigger que lo dispara a mano. Google Sheets que lee las filas. Un Filter que deja pasar solo lo que falta completar. Un HTTP Request que le pregunta a la API. Google Sheets otra vez, que escribe el resultado en la fila. Un Aggregate que junta todo en un solo item. Y Gmail, que manda el correo avisando que terminó.</p>

Para explicar:
- **"Manual Trigger: dispara el flujo a mano."** Es el "Trigger manually" que venimos usando: arranca cuando
  apretás *Execute workflow*.
  - *Ejemplo:* RR.HH. carga cinco ID el lunes, y aprieta el botón.
- **"Google Sheets (leer): trae las filas de la planilla."** Cada fila sale como un **item** (los "paquetes" de
  datos de n8n), con un casillero por columna.
  - *Ejemplo:* 5 filas → 5 items: `{"ID": 1, "Nombre": "", ...}`.
- **"Filter: deja pasar sólo lo que falta completar."** El Filter (lo vimos en la Semana 3) deja pasar los items
  que cumplen una condición y descarta los demás. Acá: "el Nombre está vacío".
  - *Ejemplo:* Entran 5, salen 4: la fila del ID 2 ya estaba completa.
- **"HTTP Request: consulta la API que trae los datos."** Uno por item: n8n hace un pedido por cada fila que pasó
  el filtro.
  - *Ejemplo:* 4 items → 4 pedidos a dummyjson.com.
- **"Google Sheets (actualizar): escribe el resultado en la fila."** **Actualizar** (*update*) es cambiar una fila
  que ya existe, buscándola por una columna: acá, el ID.
  - *Ejemplo:* "Buscá la fila con ID 3 y escribí: Sophia Brown, 43, Accountant."
- **"Aggregate: junta todo en un solo item."** Lo vimos en la Semana 3: pasa de muchos items a uno, con una lista
  adentro.
  - *Ejemplo:* 4 items → 1 item con `filas: [4 cosas]`.
- **"Gmail: manda el correo confirmando que terminó."**
  - *Ejemplo:* "Se completaron 4 filas: Emily Johnson, Sophia Brown, James Davis, Emma Miller."
- **En la práctica le sumamos un nodo más: Google Drive**, que crea una carpeta por empleado (la filmina 27 lo
  pide). Va entre el HTTP Request y el Sheets que actualiza, así el link de la carpeta también queda en la fila.

#### Filmina 17 · Decisiones, no casualidades (4 min)

<p style="color:#1a7f37">Tres nodos que parecen casualidad y son decisiones. El Manual Trigger no es el más fácil: es el correcto mientras desarrollamos, para que no se dispare solo mientras probamos. El Filter no es un filtro cualquiera: es la solución a la idempotencia, evita reprocesar lo que ya está completo. Y el Aggregate no es un capricho de orden: resuelve que n8n ejecuta los nodos item por item, y evita que salgan cinco correos en vez de uno.</p>

Para explicar:
- **"Manual Trigger: no es 'el trigger más fácil'. Es el correcto para una fase de desarrollo donde no querés que el
  flujo se dispare solo mientras probás."** Si arrancara con un trigger automático (por ejemplo, el **Google Sheets
  Trigger**, que arranca cada vez que cambia la planilla), cada prueba que hacemos al escribir en la planilla lo
  dispararía. Cuando esté probado, se cambia el trigger.
  - *Ejemplo:* Mientras probás, Manual Trigger. Cuando anda, un **Schedule Trigger** ("todos los días a las 9").
- **"Filter: no es un filtro de datos cualquiera. Es la solución a la idempotencia: evita reprocesar información que
  ya está completa."** **Reprocesar** es volver a hacer algo que ya se hizo. Con el Filter, la segunda ejecución
  encuentra todo completo y no hace nada.
  - *Ejemplo:* Primera ejecución: 4 filas. Segunda: 0 filas, 0 carpetas, 0 correos.
- **"Aggregate: no es un capricho de orden. Resuelve cómo n8n ejecuta los nodos item por item, y evita que se
  disparen cinco correos en vez de uno."** La regla de oro de n8n: **cada nodo se ejecuta una vez por cada item que
  le llega**. Si al Gmail le llegan 4 items, manda 4 correos.
  - *Ejemplo:* Sin Aggregate: 4 correos "terminó". Con Aggregate: 1 correo "terminaron 4".

**Ejemplo: el Aggregate**

❌ Mal: Gmail directo después de escribir la planilla.

```text
Completar la fila (4 items) → Gmail → 4 correos: "Terminó", "Terminó", "Terminó", "Terminó".
```

✅ Bien: Aggregate antes.

```text
Completar la fila (4 items) → Aggregate (1 item, con 4 filas adentro) → Gmail → 1 correo: "Se completaron 4 filas".
```

#### Filmina 18 · Lo que cierra el flujo: HTTP Request, Sheets y Gmail (3 min) — Ejercicio 2

<p style="color:#1a7f37">El HTTP Request trae de la API los datos de cada ID. El Sheets que actualiza escribe la respuesta en la fila que corresponde, no en una nueva. Gmail manda el correo que confirma que todo salió bien. Y el orden importa: si el Aggregate no está antes del Gmail, sale un correo por cada fila.</p>

Para explicar:
- **"HTTP Request: trae de una API los datos que completan los ID pedidos en la planilla."** La URL lleva el ID
  adentro, con una expresión: `https://dummyjson.com/users/{{ $json.ID }}`. Una **expresión** es lo que va entre
  dobles llaves: n8n la reemplaza por el dato de cada item.
  - *Ejemplo:* Item con ID 3 → `https://dummyjson.com/users/3`.
- **"Google Sheets (actualizar): escribe la respuesta en la fila que corresponde, no en una nueva."** Dos
  operaciones parecidas que no hay que confundir: **Append Row** ("agregar fila") agrega una fila nueva abajo de
  todo; **Update Row** ("actualizar fila") busca una fila que ya existe y la cambia. Para buscarla, se elige una
  **columna para hacer coincidir** (*Column to match on*): el ID.
  - *Ejemplo:* Con Append, la planilla terminaría con 9 filas: las 5 de antes (vacías) y 4 nuevas abajo. Con
    Update, quedan 5, completas.
- **"Gmail: manda el correo que confirma que el proceso se completó satisfactoriamente."** Es la salida del flujo:
  alguien se entera sin tener que ir a mirar.
  - *Ejemplo:* Asunto: "Planilla completa: 4 empleados nuevos".
- **"El orden importa: si el Aggregate no está antes del Gmail, sale un correo por cada fila procesada."**

Pegás en el chat:

```text
EJERCICIO 2 · ¿Cuántos correos salen?
La planilla tiene 5 filas: 4 vacías y 1 completa.
a) Con el Filter y SIN Aggregate, ¿cuántos correos salen?
b) Con el Filter y CON Aggregate, ¿cuántos?
c) Si lo ejecutás otra vez (ya está todo completo), ¿cuántos?
```

Respuestas: **a) 4** (un correo por cada item que llega al Gmail). **b) 1.** **c) 0, y ningún correo**: el Filter no
deja pasar nada, y en n8n, cuando a un nodo le llegan 0 items, ese nodo y todos los que siguen no se ejecutan. Decís:

<p style="color:#1a7f37">La c es la trampa: si no hay nada que hacer, el flujo se frena en el Filter, y no llega ningún correo. Si quisieran un correo que diga "hoy no había nada", habría que pensarlo en el diseño. Por eso se planifica antes.</p>

#### Filmina 19 · El error no es el fin del flujo (1 min)

<p style="color:#1a7f37">El error no es el fin del flujo. Es la pista que te dice cómo mejorarlo.</p>

Para explicar:
- **Cada error dice qué faltó planificar.** Un 403 dice "faltó verificar el permiso". Un correo repetido dice "faltó
  pensar la idempotencia". Al final de la práctica vamos a romper el flujo a propósito para aprender a leer esas
  pistas.
  - *Ejemplo:* "404 File not found" en Drive → alguien borró la carpeta → el plano tenía que decir "qué pasa si la
    carpeta no existe".

#### Filmina 20 · Coder Tips: el nombre es la etiqueta; el ID es el pasaporte (2 min)

<p style="color:#1a7f37">En los servicios de Google, casi siempre hace falta el ID interno del archivo o de la carpeta, no el nombre que ven ustedes. El nombre es la etiqueta; el ID es el pasaporte.</p>

Para explicar:
- **Por qué el ID y no el nombre.** El nombre se puede repetir (en Drive puede haber diez carpetas "Legajos") y se
  puede cambiar. El ID es único y no cambia nunca, aunque la carpeta se renombre o se mueva.
  - *Ejemplo:* Si alguien renombra "Legajos" a "Legajos 2026", el flujo que usa el ID sigue funcionando; el que
    usaba el nombre, no.
- **Dónde está el ID.** En la dirección del navegador, al abrir el archivo:
  - de una carpeta, después de `/folders/`;
  - de una planilla, entre `/d/` y `/edit`.

```text
https://drive.google.com/drive/folders/1Tx9WHbA3wBpPB4C_HcoZDH9WZFWYxAMU
                                       └──────────── el ID ─────────────┘
https://docs.google.com/spreadsheets/d/1AbCdEfGh.../edit#gid=0
                                       └── el ID ──┘
```

<p style="color:#1a7f37">Después del break armamos todo esto. Durante el break, prendan n8n y fíjense que tengan la credencial de Google Sheets de la semana pasada. Y suban la planilla: el archivo planilla-empleados.csv, o una propia con las columnas ID, Nombre, Edad, Cargo y Carpeta.</p>

---

### 55–65 · Break

**Filmina 21 · Break**

<p style="color:#1a7f37">Diez minutos. Prendan n8n, fíjense que tengan la credencial de Google Sheets, y suban la planilla a Google Sheets: Nuevo, Hoja de cálculo, Archivo, Importar, Subir, y elijan el CSV.</p>

---

### 65–110 · Sección 03 · Práctica en vivo

#### Antes de la clase (una sola vez, 30 minutos)

- Importá los cuatro flujos.
  - Ejecutá el 01 (tres personas) y el 03 (5 filas → 4 → 1 correo).
  - En el 04, ejecutá cada nodo de error por separado y fijate que dé lo que dice la tabla del Ejercicio 7 en
    `ejercicios-docente.md`.
- Completá el 02 con tus credenciales, tu planilla, tu carpeta y tu correo. Ejecutalo de punta a punta y verificá:
  - la planilla completa;
  - cuatro carpetas en "Legajos";
  - **un** correo.

  Volvé a ejecutarlo: tiene que frenarse en el Filter. Después vaciá la planilla (o usá la copia).
- Hacé la práctica completa una vez en un workflow nuevo, con otra copia de la planilla.
- Borrá las carpetas de prueba de "Legajos".

#### Mapeo relámpago (65–72) — Ejercicio 3

1. **Filmina 22 · Separador "03".** Decís:

<p style="color:#1a7f37">Bienvenidos de vuelta. Antes de construir, un desafío de cinco minutos para calentar: mapear. Mapear es decidir qué dato de un lado va en qué casillero del otro, y a veces, transformarlo en el camino.</p>

2. **Filmina 23 · Desafío de mapeo relámpago.** Abrís el flujo **01 · Mapeo relámpago** y mostrás la salida de
   *Lo que manda el formulario*. Pegás en el chat:

```text
EJERCICIO 3 · Mapeo relámpago
Un formulario manda esto:
  {"Nombre completo": "Lucía Fernández", "Email": "  Lucia.Fernandez@Gmail.com ", "Teléfono": "11 5555-1234"}
El nodo siguiente pide 4 campos: nombre · apellido · email · telefono
Respondé en el chat: ¿qué pondrías en cada uno? ¿Hay que transformar algo?
```

3. Esperás 2 minutos. Lo que tiene que aparecer:
   - **nombre y apellido** salen de cortar el "Nombre completo" por el espacio;
   - el **email** hay que limpiarlo: tiene espacios al principio y al final, y mayúsculas;
   - el **teléfono**, sin espacios ni guiones, solo números.

4. Abrís *Lo que pide el nodo siguiente* y mostrás las cuatro expresiones:

```text
nombre    {{ $json['Nombre completo'].split(' ').slice(0, -1).join(' ') }}   → todo menos la última palabra
apellido  {{ $json['Nombre completo'].split(' ').pop() }}                     → la última palabra
email     {{ $json.Email.trim().toLowerCase() }}                              → sin espacios, en minúscula
telefono  {{ $json['Teléfono'].replace(/\D/g, '') }}                          → solo los números
```

Decís:

<p style="color:#1a7f37">No hace falta saberse esto de memoria: split corta un texto donde hay un espacio, trim le saca los espacios de las puntas, toLowerCase lo pasa a minúscula. Y si no se acuerdan, se lo pueden pedir a una IA: "en n8n, ¿cómo saco la última palabra de un texto?". Lo importante es darse cuenta de que hay que transformarlo.</p>

5. Mostrás la salida de las tres personas que trae el flujo:

| Nombre completo | nombre | apellido | ¿Bien? |
|---|---|---|---|
| Lucía Fernández | Lucía | Fernández | ✅ |
| María Laura Gómez | María Laura | Gómez | ✅ |
| Juan Martín del Potro | Juan Martín del | Potro | ❌ |

Decís:

<p style="color:#1a7f37">Con Juan Martín del Potro se equivoca: el apellido es "del Potro". Ninguna regla simple resuelve todos los nombres. Este es el "caso ambiguo" de la filmina 11, y hay dos salidas buenas. La mejor es cambiar la entrada: que el formulario pida nombre y apellido por separado. Y si no se puede, mandar los nombres de más de tres palabras a que los revise una persona. Eso se decide en el plano, no en el nodo.</p>

#### Paso 1 · El plano (72–76)

6. **Filmina 24.** Decís:

<p style="color:#1a7f37">Paso uno, y todavía sin abrir n8n: el plano. Una línea con el problema de negocio, las tres cajas de entrada, proceso y salida, y la lista de servicios.</p>

7. Pegás en el chat el plano del caso, y lo leés en voz alta:

```text
PRÁCTICA · Paso 1: el plano
PROBLEMA: RR.HH. completa a mano los datos de cada empleado nuevo. Tarda y se equivoca.
RESULTADO: cada fila con ID queda completa, con su carpeta en Drive, y RR.HH. recibe UN aviso.

ENTRADA  → la planilla "Empleados" (filas con ID y sin Nombre). La disparo a mano.
PROCESO  → solo filas incompletas → buscar datos por ID en dummyjson.com → crear carpeta → escribir la fila
SALIDA   → la fila completa + un correo con el resumen

SERVICIOS: Google Sheets (leer y escribir) · dummyjson.com (leer, sin clave) · Google Drive (crear carpetas) · Gmail (enviar)
SI ALGO FALLA: si un ID no existe en la API → ¿?   ·   si se ejecuta dos veces → el Filter no deja pasar nada
```

8. Preguntás en el chat: *"¿Qué haría el flujo si un ID no existe en la API?"*. Escuchás dos o tres respuestas.
   Respuesta: hoy, el HTTP Request se pone rojo y se frena todo el flujo, y las otras filas quedan sin completar
   (lo vemos en la clínica). La mejora sería avisarle a una persona. Decís:

<p style="color:#1a7f37">Fíjense que el plano tiene un signo de pregunta. Está bien: el plano no tiene que tener todas las respuestas, tiene que tener todas las preguntas. Esa la vamos a responder en el Ejercicio 7.</p>

**Si el tiempo se aprieta:** pegás el plano y seguís, sin la pregunta.

#### Paso 2 · Los accesos (76–84)

9. **Filmina 25.** Decís:

<p style="color:#1a7f37">Paso dos: los accesos, antes de que nos frenen. Necesitamos tres credenciales de Google: Sheets, que algunos ya armaron en casa, Drive y Gmail. Las tres usan el mismo Client ID y el mismo Client Secret del proyecto de Google Cloud. Y vamos a confirmar que podemos escribir, no solo leer.</p>

10. Pegás en el chat:

```text
PRÁCTICA · Paso 2: los accesos
1. En Google Cloud (console.cloud.google.com), tu proyecto "n8n curso":
   ☰ → APIs & Services → Library → buscá "Gmail API" → Enable   (y fijate que Drive y Sheets ya estén habilitadas)
2. En n8n: Credentials → Create credential → "Gmail OAuth2 API"
   → pegá el Client ID y el Client Secret (los mismos de la credencial de Sheets)
   → Sign in with Google → elegí tu cuenta → "Google no verificó esta app" → Continuar → tildá todo → Continuar
3. Repetí el 2 con "Google Drive OAuth2 API"
4. Abrí tu planilla "Empleados", escribí una letra en una celda vacía y borrala.  ← eso prueba que podés ESCRIBIR
```

11. Lo hacés a la par, creando en vivo la de Gmail (la de Drive ya la tenés; mostrá que está en la lista). Decís:

<p style="color:#1a7f37">Fíjense en la pantalla de Google: dice exactamente qué le estamos dejando hacer a n8n. Para Gmail, leer y mandar correos. A eso se le dice scopes, los alcances del permiso. Cada servicio pide los suyos, y por eso es una credencial por servicio, aunque sea la misma cuenta.</p>

12. Mientras crean las suyas, explicás de dónde sale el Client Secret si lo perdieron: en Google Cloud → *Google
    Auth Platform* → *Clients* → el cliente → se puede crear un secreto nuevo (*Add secret*). El viejo deja de
    servir para las credenciales nuevas, pero la de Sheets que ya está conectada sigue andando.

13. Al que no hizo el Ejercicio 8 de la Semana 4, le decís en el chat:

```text
Si todavía no tenés el proyecto de Google Cloud: no te frenes acá.
Importá el flujo 03-ensayo-sin-google.json y seguí la clase con ese: es la misma lógica, sin Google.
En casa hacé el Ejercicio 8 de la Semana 4 y después repetí esta práctica con Google.
```

**La prueba mínima de cada credencial** es el primer *Execute step* del nodo que la usa: la de Sheets en el Paso 3,
la de Drive y la de Gmail en el Paso 4. Si alguna falla, se ve ahí, con un solo nodo, y no al final con todo armado.

#### Paso 3 · La entrada (84–91)

14. **Filmina 26.** Decís:

<p style="color:#1a7f37">Paso tres: la entrada. Un Manual Trigger, leer la planilla, mirar el JSON, y un Filter que deje pasar solo las filas incompletas.</p>

15. Pegás en el chat:

```text
PRÁCTICA · Paso 3: la entrada
1. Workflow nuevo → nombre: Planilla completa
2. Add first step → Trigger manually
3. + → buscá "Google Sheets" → "Get row(s) in sheet"
   Credential: tu credencial de Google Sheets
   Document: By URL → pegá el link de tu planilla
   Sheet: From list → Hoja 1
4. Renombralo: Leer planilla → Execute step
```

16. Lo hacés a la par. Salen **5 items**. Mostrás la vista **Table** y después la **JSON**:

```json
[
  { "row_number": 2, "ID": 1, "Nombre": "", "Edad": "", "Cargo": "", "Carpeta": "" },
  { "row_number": 3, "ID": 2, "Nombre": "Michael Williams", "Edad": 36, "Cargo": "Support Specialist", "Carpeta": "(ya creada)" },
  { "row_number": 4, "ID": 3, "Nombre": "", "Edad": "", "Cargo": "", "Carpeta": "" },
  "..."
]
```

Decís:

<p style="color:#1a7f37">Cada fila es un item, y cada columna, un casillero. Las celdas vacías llegan como texto vacío, dos comillas sin nada. Y fíjense en row_number: n8n nos dice en qué fila de la planilla está cada una. La fila 1 son los títulos.</p>

17. Pegás en el chat:

```text
5. + → Filter
   Conditions: arrastrá "Nombre" desde la izquierda → en el desplegable: String → is empty
6. Renombralo: Solo filas incompletas → Execute step
```

18. Lo hacés a la par. A la derecha: **Kept 4 items**, y abajo, en *Discarded*, la fila de Michael Williams.
    Decís:

<p style="color:#1a7f37">Entraron cinco, pasaron cuatro. La fila de Michael ya estaba completa y se quedó afuera. Este Filter es nuestra protección contra duplicar: si mañana alguien ejecuta esto otra vez, solo pasan las filas que falten.</p>

**Plan B:** el flujo **03 · Ensayo sin Google** tiene una *Planilla de mentira* con las mismas cinco filas.

#### Paso 4 · Proceso y salida (91–103)

19. **Filmina 27.** Decís:

<p style="color:#1a7f37">Paso cuatro: el proceso y la salida. Pedimos los datos a la API, creamos una carpeta por empleado en Drive, usando el ID de la carpeta y no su nombre, escribimos la fila, juntamos todo con un Aggregate y mandamos un solo correo.</p>

20. Pegás en el chat:

```text
PRÁCTICA · Paso 4: proceso y salida
7. + → HTTP Request
   URL: pasalo a Expression y pegá →  https://dummyjson.com/users/{{ $json.ID }}
   Send Query Parameters → select = firstName,lastName,age,company
   Renombralo: Buscar datos del empleado → Execute step
```

21. Lo hacés a la par. Salen 4 items, uno por empleado, con `firstName`, `lastName`, `age` y `company` (adentro,
    `title` es el cargo). Decís:

<p style="color:#1a7f37">Cuatro items entraron, cuatro pedidos salieron, uno por fila. La URL es distinta para cada uno: users/1, users/3, users/4, users/5. Y el parámetro select le pide a la API solo los casilleros que nos sirven, para no recibir sesenta. Mapeen con la vista: el cargo está adentro de company, en title.</p>

22. Abrís Drive en otra pestaña, entrás a la carpeta **Legajos** y mostrás la dirección. Decís:

<p style="color:#1a7f37">Esta es la carpeta donde van a ir las carpetas de cada empleado. Su ID es lo que viene después de folders, en la dirección. Cópienlo: ese es el pasaporte de la filmina 20.</p>

23. Pegás en el chat:

```text
8. En Drive: Nuevo → Carpeta → "Legajos" → abrila → copiá de la dirección lo que va después de /folders/
9. En n8n: + → Google Drive → "Create folder"
   Credential: tu credencial de Google Drive
   Folder Name (Expression): {{ $('Solo filas incompletas').item.json.ID }} - {{ $json.firstName }} {{ $json.lastName }}
   Parent Drive: My Drive
   Parent Folder: By ID → pegá el ID de Legajos
   Renombralo: Crear carpeta del empleado → Execute step
```

24. Lo hacés a la par. Salen 4 items, cada uno con un `id` (el de la carpeta nueva) y un `name`. Mostrás Drive:
    aparecen `1 - Emily Johnson`, `3 - Sophia Brown`, `4 - James Davis` y `5 - Emma Miller`. Decís:

<p style="color:#1a7f37">Ahí están las cuatro carpetas. Y fíjense: si aprietan Execute step otra vez, se crean cuatro más, repetidas, porque Drive deja tener dos carpetas con el mismo nombre. Eso es justamente no ser idempotente. No lo aprieten dos veces; y si lo hicieron, borren las repetidas.</p>

25. Pegás en el chat:

```text
10. + → Google Sheets → "Update row in sheet"
    Credential: la de Sheets · Document: By URL → tu planilla · Sheet: Hoja 1
    Mapping Column Mode: Map Each Column Manually
    Column to match on: ID
    Completá los valores (Expression):
      ID       {{ $('Solo filas incompletas').item.json.ID }}
      Nombre   {{ $('Buscar datos del empleado').item.json.firstName }} {{ $('Buscar datos del empleado').item.json.lastName }}
      Edad     {{ $('Buscar datos del empleado').item.json.age }}
      Cargo    {{ $('Buscar datos del empleado').item.json.company.title }}
      Carpeta  https://drive.google.com/drive/folders/{{ $json.id }}
    Renombralo: Completar la fila → Execute step
```

26. Lo hacés a la par, arrastrando cada dato desde la izquierda, que es más fácil que escribirlo. Mostrás la
    planilla: las cuatro filas completas, con el link de la carpeta. Decís:

<p style="color:#1a7f37">Fíjense de dónde sale cada dato. El ID, del Filter. El nombre, la edad y el cargo, de la API. Y el link de la carpeta, de Drive, que es el nodo anterior, por eso es $json. Esto es mapear entre tres servicios. Y como elegimos "Column to match on: ID", escribió en las filas que ya existían, no agregó filas nuevas.</p>

27. Pegás en el chat:

```text
11. + → Aggregate
    Aggregate: All Item Data (Into a Single List) · Put Output in Field: filas
    Renombralo: Juntar en un solo item → Execute step   (entran 4, sale 1)
12. + → Gmail → "Send a message"
    Credential: la de Gmail · To: tu correo · Subject (Expression): Planilla completa: {{ $json.filas.length }} empleados nuevos
    Email Type: Text · Message (Expression):
      Se completaron {{ $json.filas.length }} filas: {{ $json.filas.map(f => f.Nombre).join(', ') }}
    Add option → Append n8n Attribution → apagado
    Renombralo: Avisar que terminó → Execute step
```

28. Lo hacés a la par. Abrís tu correo: llegó **uno**. Decís:

<p style="color:#1a7f37">Un correo, con las cuatro personas. Si no estuviera el Aggregate, habrían llegado cuatro. Ahora, la prueba de fuego de la idempotencia.</p>

29. **La prueba de la idempotencia.** Apretás **Execute workflow** (el flujo entero). Se frena en *Solo filas
    incompletas*, con **0 items**: no se crean carpetas y no llega correo. Decís:

<p style="color:#1a7f37">Lo ejecutamos otra vez y no pasó nada. Y eso es bueno: no duplicó carpetas, no reescribió filas, no mandó otro correo. Ahora borro el nombre de una fila, y lo ejecuto de nuevo.</p>

30. Borrás Nombre, Edad, Cargo y Carpeta de **una** fila de la planilla y apretás **Execute workflow**. Pasa
    **1** item, se crea **1** carpeta, se completa esa fila y llega un correo que dice "1 empleados nuevos". Si
    alguien se ríe del "1 empleados", decís: "otro caso que se resuelve en el plano: una expresión que diga
    *empleado* o *empleados* según el número".

31. Pegás en el chat:

```text
13. Ctrl + S → menú … → Download   (guardás el .json: eso es versionar)
```

**Plan B:** el flujo **02 · Planilla completa** es este paso terminado (con tus credenciales, tu planilla, tu
carpeta y tu correo). El **03 · Ensayo sin Google** hace lo mismo sin credenciales.

#### Paso 5 · La clínica (103–110)

32. **Filmina 28.** Decís:

<p style="color:#1a7f37">Último paso: lo rompemos a propósito. Mejor aprender a leer el error acá, con tiempo, que un lunes a las nueve con el flujo en producción.</p>

33. **El 404: un ID que ya no existe.** Borrás los datos de dos filas de la planilla (para que el Filter deje pasar
    algo). En el nodo *Crear carpeta del empleado*, cambiás **una letra** del ID de la carpeta Legajos. Apretás
    **Execute workflow**. El nodo de Drive se pone rojo. Lo que esperás ver (no probado en este n8n: el mensaje
    exacto puede variar):

```text
The resource you are requesting could not be found
404 · File not found: 1Tx9WHbA3wBpPB4C_HcoZDH9WZFWYxAMV.
```

Decís:

<p style="color:#1a7f37">404: no encuentra la carpeta. Empieza con 4, es nuestro. Y dice qué ID buscó: si lo comparan con la dirección de Legajos, ven la letra cambiada. En la vida real, esto pasa cuando alguien borra la carpeta, o la mueve a una unidad compartida donde la cuenta no entra.</p>

34. **El log de ejecución.** Vas a la pestaña **Executions** (arriba, al lado de *Editor*). Abrís la ejecución
    fallida y hacés clic en cada nodo:
    - *Leer planilla*: 5 items;
    - *Solo filas incompletas*: 2;
    - *Buscar datos del empleado*: 2;
    - *Crear carpeta del empleado*: rojo, con el error.

    Decís:

<p style="color:#1a7f37">Esta es la caja negra. Cada ejecución queda guardada, con qué entró y qué salió de cada nodo. Sin abrir nada más, sé que la planilla se leyó bien, que la API respondió bien, y que el problema es Drive. Y otra cosa: las dos filas quedaron sin completar, porque el flujo se frenó antes de escribir. Como el Filter las va a volver a encontrar, cuando lo arregle y lo ejecute otra vez se completan solas. Eso también es idempotencia.</p>

35. Arreglás el ID y ejecutás: las dos filas se completan.

36. **El 403: puedo leer, pero no escribir** (si preparaste la planilla compartida como Lector). En *Leer planilla*
    y *Completar la fila*, pegás el link de la planilla de Romina. Ejecutás. *Leer planilla* anda; *Completar la
    fila* se pone rojo. Lo que esperás ver (no probado en este n8n):

```text
Forbidden - perhaps check your credentials?
403 · The caller does not have permission
```

Decís:

<p style="color:#1a7f37">Esta es la filmina 10 en vivo: leer anduvo, escribir no. 403: me reconoce, pero no tengo permiso. Si cambio la credencial diez veces, va a seguir igual: hay que pedirle a la dueña que me haga Editor. Un 403 suele ser permisos; un 404 suele ser un ID que ya no existe.</p>

37. **Opcional, si sobra tiempo: revocar el permiso.** La filmina también propone revocar un permiso. Es así:
    - en **myaccount.google.com/permissions**, buscás "n8n curso" y le sacás el acceso;
    - al ejecutar, el primer nodo de Google falla con un error de la credencial. El texto exacto varía; suele
      mencionar el token, o decir *invalid_grant*;
    - se arregla abriendo la credencial y conectándola de nuevo con **Sign in with Google**.

    Es el "refrescar la conexión OAuth" del material de lectura.

#### Las trabas más comunes durante la práctica

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "No me aparece mi planilla en la lista" | Que usen **By URL** y peguen el link. Si tampoco: la credencial es de otra cuenta de Google, o falta habilitar la Google Drive API (n8n la usa para listar archivos). |
| "Google: *Access blocked* / *Error 403: access_denied*" al conectar | Su Gmail no está como usuario de prueba en el proyecto (*Google Auth Platform* → *Audience* → *Test users*). |
| "Google: *redirect_uri_mismatch*" | La Redirect URI del cliente no es idéntica a la de n8n. Igual que en la Semana 4. |
| "Gmail: *Gmail API has not been used in project… or it is disabled*" | Falta habilitar la Gmail API en Google Cloud (☰ → *APIs & Services* → *Library*). Esperar un minuto después de habilitarla. |
| "El Filter deja pasar las 5 filas" o "no deja pasar ninguna" | Arrastraron otra columna, o eligieron *is not empty*. Que miren que diga `{{ $json.Nombre }}` y **is empty**. Si la columna se llama distinto en su planilla (por ejemplo `nombre` en minúscula), tiene que coincidir exacto. |
| "El HTTP Request trae una lista de 30 personas" | La URL quedó `users/` sin número: el ID no llegó. Escribieron `$json.id` (minúscula) o la columna se llama distinto. Es el Error A de la clínica. |
| "Drive: *Not a valid Google Drive Folder ID*" | Pegaron la dirección entera en *By ID*. Que peguen solo lo que va después de `/folders/`, o que elijan **By URL**. |
| "La planilla tiene filas nuevas abajo, en vez de completarse" | Usaron **Append row** en vez de **Update row**. Borrar las filas de abajo y cambiar la operación. |
| "*Update row*: no encuentra la fila" o "no escribe nada" | Falta *Column to match on: ID*, o el valor del ID no está mapeado. |
| "Me llegaron 4 correos" | El Gmail está antes del Aggregate, o no lo conectaron después. |
| "Se crearon las carpetas repetidas" | Apretaron *Execute step* en Drive más de una vez. Borrar las repetidas: es la idempotencia, en vivo. |
| "El correo dice `[object Object]`" | Pusieron `{{ $json.filas }}` entero. Que usen el `.map(f => f.Nombre).join(', ')` del chat. |

---

### 110–115 · Para practicar y cómo sigue

#### Filmina 29 · Para practicar (3 min)

<p style="color:#1a7f37">Hoy construyeron un flujo que conecta Sheets, Drive y Gmail de punta a punta. Repítanlo con un caso suyo: cambien la planilla por una propia y adapten el mapeo. Prueben la idempotencia: ejecútenlo dos veces seguidas y fíjense si duplica algo. Y lo de hoy les va a servir directo para la próxima pre-entrega.</p>

Para explicar:
- **"Lo que construiste hoy: un flujo que conecta Sheets, Drive y Gmail de punta a punta."**
  - *Ejemplo:* Leer planilla → Solo filas incompletas → Buscar datos → Crear carpeta → Completar la fila → Juntar →
    Avisar.
- **"Repetilo con tu caso: cambiá la planilla por una tuya y adaptá el mapeo entre nodos."** Es el Ejercicio 5
  (primero el plano) y el 8 (el desafío del onboarding). Adaptar el mapeo es cambiar qué dato va en qué casillero.
  - *Ejemplo:* Una planilla de pedidos con columnas Nro, Cliente y Estado, en vez de ID, Nombre y Cargo.
- **"Probá la idempotencia: ejecutá el flujo dos veces seguidas y fijate si duplica algo."** Es el Ejercicio 6, que
  además pide desactivar el Filter para ver qué pasa sin él.
  - *Ejemplo:* Sin el Filter, la segunda ejecución crea cinco carpetas más y manda otro correo.
- **"Lo que sigue: la pre-entrega 5 lleva esto a un caso de negocio real, con foco en resiliencia."** La filmina
  dice "pre-entrega 5", pero esta semana **no hay pre-entrega**: la próxima es la **Pre-entrega 3** (el primer AI
  Agent), en la Semana 6. Lo de hoy, el plano y pensar en los errores antes, es exactamente lo que van a necesitar
  para esa. **Resiliencia** es que el flujo aguante cuando algo falla: que reintente, avise o siga, en vez de
  romperse en silencio.
  - *Ejemplo:* La Pre-entrega 3 se llama "Planificá y construí tu primer AI Agent": empieza por un plano como el
    del Paso 1.

#### Filmina 30 · ¿Cómo sigue? Del flujo fijo al agente que decide (2 min)

<p style="color:#1a7f37">Ya tienen un sistema de servicios orquestado, probado y con su clínica de errores. Lo que le falta es criterio propio: cada paso lo definieron ustedes de antemano. En el Módulo 6 armamos un AI Agent, con un modelo de chat, memoria, herramientas y un system prompt. Y en vez de decidir ustedes qué nodo va después, lo va a decidir el modelo, en el momento.</p>

Para explicar:
- **"Lo que ya tenés: un ecosistema de servicios orquestado, probado y con su clínica de errores."** Un
  **ecosistema** es un grupo de servicios que trabajan juntos.
  - *Ejemplo:* Sheets + una API + Drive + Gmail, dirigidos por n8n.
- **"Lo que le falta: criterio propio. Cada paso lo definiste vos, de antemano."** El flujo de hoy hace siempre lo
  mismo, en el mismo orden. No puede decidir "a este empleado mejor le mando un WhatsApp".
  - *Ejemplo:* Si la API devuelve algo raro, el flujo no "se da cuenta": hace lo que le dijimos.
- **"Módulo 6: implementación del AI Agent, con chat model, memoria, tools y system prompt."**
  - el **chat model** es el modelo de IA que piensa, como ChatGPT o Gemini;
  - la **memoria** es lo que recuerda de la conversación;
  - las **tools** ("herramientas") son los nodos que el agente puede usar, como Sheets o Gmail;
  - el **system prompt** son las instrucciones de base que le damos, como en la Semana 1.
  - *Ejemplo:* Un agente que recibe "completá los datos del empleado 7 y avisale a RR.HH." y decide solo qué
    herramientas usar.
- **"La conexión: en vez de decidir vos qué nodo va después, el modelo lo va a decidir en tiempo de ejecución."**
  **En tiempo de ejecución** es mientras el flujo corre, no cuando lo armamos.
  - *Ejemplo:* Hoy: Sheets → API → Drive → Gmail, siempre. Con un agente: "¿hace falta crear carpeta? ¿a quién
    aviso?", según el caso.

---

### 115–120 · Preguntas y cierre

**Filmina 31 · ¿Preguntas?** (3 min) — las tres de la filmina: si se les rompió algún permiso de Drive, si quedó
claro por qué el Aggregate va antes del Gmail, y si algún mapeo no les sale (que compartan pantalla).

<p style="color:#1a7f37">¿A alguno se le rompió un permiso de Google y no supo por dónde empezar? ¿Quedó claro por qué el Aggregate tiene que ir antes del Gmail? ¿Algún mapeo que no les salga? Compartan pantalla.</p>

**Filmina 32 · ¡Gracias!** (1 min)

<p style="color:#1a7f37">Gracias. Para la semana que viene: los ejercicios para casa, leer el material y el cuestionario del módulo. Y el que no llegó a conectar Google, que lo haga en casa: la clase que viene lo usamos con el agente.</p>

- **Para la Semana 6:**
  1. Los **ejercicios para casa** (5 a 8). Sobre todo el 5 (el plano de un flujo propio) y el 6 (la idempotencia).
  2. Quien no conectó Google: el Ejercicio 8 de la Semana 4 y repetir la práctica de hoy.
  3. Leer `Semana 5.docx`, escuchar el podcast y hacer el cuestionario del módulo en la plataforma.

---

### Checklist de salida

- [ ] Saben planificar un flujo antes de construirlo: problema, entrada, proceso, salida, servicios y qué puede
  fallar.
- [ ] Saben qué es la idempotencia y cómo la resuelve el Filter.
- [ ] Saben por qué el Aggregate va antes del Gmail (un nodo se ejecuta una vez por item).
- [ ] Conectaron (o vieron conectar) Sheets, Drive y Gmail con OAuth2, y saben que leer no es escribir.
- [ ] Saben usar el ID de un archivo o carpeta de Google, y dónde encontrarlo.
- [ ] Distinguen *Append row* de *Update row*.
- [ ] Saben abrir **Executions** y leer qué pasó en cada nodo, y distinguen un 403 (permiso) de un 404 (no existe).

---

### Glosario de la clase

Todas las palabras técnicas de hoy, en criollo. Se puede pegar en el chat al final de la clase.

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **Planificar** | Escribir y dibujar el flujo antes de abrir n8n. | El plano del Paso 1. |
| **Problema de negocio** | El problema de la persona o la empresa, no el técnico. | "RR.HH. tarda una hora en completar la planilla." |
| **Entrada / proceso / salida** | Qué dispara el flujo / qué hace en el medio / dónde deja el resultado. | Planilla / buscar datos / fila completa y correo. |
| **Orquestar** | Hacer que varios servicios trabajen juntos, en orden. | n8n dirige Sheets, la API, Drive y Gmail. |
| **Ecosistema** | Un grupo de servicios que trabajan juntos. | Google Workspace: Sheets, Drive, Gmail, Calendar. |
| **Servicio externo** | Un programa que no es n8n y con el que n8n trabaja. | Google Drive, dummyjson.com. |
| **Lienzo (canvas)** | La pantalla de n8n donde se ponen los nodos. | "El lienzo en blanco." |
| **Permiso** | Lo que una credencial te deja hacer: leer, escribir, borrar. | Lector, Comentarista, Editor. |
| **Scopes** | Los alcances de un permiso de OAuth2: qué le dejás hacer a n8n. | "Leer y enviar correos" en Gmail. |
| **Rate limit / cuota** | Cuántos pedidos acepta un servicio por minuto / por día o por mes. | Unas 60 escrituras por minuto en Sheets. |
| **Idempotencia** | Que ejecutarlo dos veces deje todo igual que ejecutarlo una. | El Filter: la segunda vez no hace nada. |
| **Reejecutar / reprocesar** | Volver a ejecutar / volver a hacer algo que ya se hizo. | Un reintento después de un error. |
| **Registro** | Un dato guardado: una fila, un contacto, un pedido. | La fila del empleado 3. |
| **Ambiguo** | Que se puede entender de dos maneras. | "Juan Martín del Potro": ¿cuál es el apellido? |
| **Revisión humana** | Mandar los casos dudosos a una persona en vez de adivinar. | Un correo a RR.HH.: "revisá este nombre". |
| **Log de ejecución** | El registro de lo que pasó en cada ejecución, nodo por nodo. | La pestaña **Executions**. |
| **Producción** | Cuando el flujo funciona de verdad, solo, con datos reales. | Lo opuesto a "probando". |
| **Alerta** | Un aviso automático cuando algo falla. | Un **Error Trigger** que manda un correo. |
| **Documentar** | Dejar escrito qué hace el flujo y cómo. | Las notas (sticky notes) del lienzo. |
| **Versionar** | Guardar las versiones anteriores para poder volver atrás. | Descargar el `.json` antes de un cambio. |
| **Git** | Un programa que guarda la historia de cambios de archivos. | Lo usan los programadores; en el curso, alcanza con descargar el JSON. |
| **Modular / sub-workflow** | Armado en piezas reutilizables / un flujo que llama a otro. | "Avisar a RR.HH." como subflujo. |
| **ID** | Un código único que identifica algo y no cambia. | El ID de la carpeta, después de `/folders/`. |
| **Mapear** | Decidir qué dato de un lado va en qué casillero del otro. | `firstName` + `lastName` → Nombre. |
| **Expresión** | Lo que va entre `{{ }}`: n8n lo reemplaza por el dato de cada item. | `{{ $json.ID }}` |
| **`$('Nodo')`** | Tomar un dato de un nodo anterior que no es el inmediato. | `$('Solo filas incompletas').item.json.ID` |
| **Append row / Update row** | Agregar una fila nueva abajo / cambiar una fila que ya existe. | Update, buscando por ID. |
| **Column to match on** | La columna que usa *Update row* para encontrar la fila. | ID. |
| **Manual Trigger** | El trigger que arranca el flujo cuando apretás el botón. | El de toda la práctica. |
| **Google Sheets Trigger** | Un trigger que arranca cuando cambia una planilla. | Para el desafío del onboarding. |
| **Filter** | El nodo que deja pasar solo los items que cumplen una condición. | "Nombre is empty". |
| **Aggregate** | El nodo que junta muchos items en uno. | 4 filas → 1 item → 1 correo. |
| **Retry On Fail** | La opción de un nodo para reintentar si falla. | *Settings* del HTTP Request. |
| **Error Trigger** | Un trigger que arranca cuando otro flujo falla. | Para avisar que algo se rompió. |
| **dummyjson.com** | Una API de prueba con datos inventados, gratis y sin clave. | `users/3` → Sophia Brown. |
| **Resiliencia** | Que el flujo aguante cuando algo falla. | Reintentar, avisar o seguir, en vez de romperse. |
| **AI Agent** | Un flujo con un modelo de IA que decide qué herramienta usar. | El tema de la Semana 6. |
