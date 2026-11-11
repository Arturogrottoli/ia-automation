# Clase 4 (beta) · Volver a las bases: Docker, n8n y tu primer flujo

| | |
|---|---|
| **Para qué es esta clase** | Retomar desde cero lo que en la Clase 3 no quedó claro: dónde corre n8n, qué es automatizar, qué es un workflow, cómo se arma y cómo le llegan los datos. |
| **Duración de esta parte** | ~75 minutos (el resto de la clase se define después) |
| **Qué se lleva cada alumno** | n8n abierto en su computadora (o en la nube), y dos flujos armados con sus manos: uno que arranca con un clic y otro que recibe datos desde el navegador. |
| **Qué necesitás** | Docker Desktop con n8n instalado (el de la Semana 2), el navegador, y los tres flujos de la carpeta [n8n/](n8n/). |
| **Probado en** | n8n 2.46.6 en Docker (noviembre 2026). Los tres flujos se ejecutaron y dieron el resultado que dice este guion, igual que los mensajes de error del webhook y del formulario. Los nombres de los botones salen del código de n8n y de las clases anteriores; conviene hacer los clics una vez antes de la clase. |

**Cómo leer este guion**

- <span style="color:#1a7f37">El texto en verde</span> es lo que decís en voz alta, más o menos con esas palabras.
- **Para explicar** desarrolla cada idea, con un *Ejemplo* para cada punto. Está pensado para que el alumno que
  vuelva a ver la grabación entienda todo aunque no sepa ninguna palabra técnica.
- **En n8n, paso a paso** son los clics exactos, para hacerlos en tu pantalla compartida mientras ellos te siguen.
- Los bloques que empiezan con `PARA EL CHAT` se pegan en el chat de la clase, tal cual.

---

## A tener en cuenta

- **Por qué esta clase existe.** En la Clase 3 muchos se perdieron: aparecieron IF, Switch y Merge antes de tener
  firme qué es un nodo o cómo se pasa un dato de uno a otro. Esta clase va más lento, con ejemplos muy chicos, y
  todo se hace a la par: vos hacés un clic, ellos hacen el mismo clic.
- **Regla de oro de la clase:** no avances al paso siguiente hasta que la mayoría escriba "listo" en el chat. Si
  dos o tres se traban, que sigan con el flujo ya armado de la carpeta [n8n/](n8n/) y lo revisan después con la
  grabación.
- **Postman se explica pero no se usa.** En clases anteriores no se entendió. Acá se cuenta qué es y para qué sirve
  (para que no se asusten si lo ven en un tutorial), pero los datos se mandan con el navegador y con un formulario
  de n8n, que no necesitan instalar nada.
- **Si alguien no tiene n8n funcionando,** no se arregla en clase: se crea la prueba gratis de n8n en la nube (14
  días) y sigue la clase desde ahí. La instalación local se arregla después, con la guía de la Semana 2
  ([../../Semana 2/instalar-n8n-local.md](../../Semana%202/instalar-n8n-local.md)).
- **Tu n8n de demostración** ya usa el nombre `n8n_local` y el puerto 5678. Mostrá ese.

---

## Agenda de esta parte

| Min | Tramo | Qué pasa |
|---|---|---|
| 0–5 | Apertura | Qué vamos a hacer hoy y por qué vamos más despacio |
| 5–20 | **Bloque 1 · Docker y n8n en tu computadora** | Qué es Docker, cómo prender n8n, la alternativa en la nube |
| 20–30 | **Bloque 2 · Qué es automatizar y qué es n8n** | Las ideas antes de los clics |
| 30–40 | **Bloque 3 · Recorrido por n8n** | Dónde está cada cosa: workflow, canvas, nodo, botones |
| 40–55 | **Bloque 4 · Tu primer flujo** | Trigger manual + Edit Fields: un saludo (flujo 01) |
| 55–72 | **Bloque 5 · Cómo le llegan los datos a n8n** | Webhook desde el navegador (flujo 02), formulario (flujo 03), y qué es Postman |
| 72–75 | Cierre de esta parte | Mini repaso en el chat |

**Si el tiempo se aprieta**, recortá en este orden: el formulario (flujo 03: se muestra ya importado, sin armarlo),
el recorrido por la pestaña Executions, y la explicación de Postman (queda en este README para leer). Lo último que
se recorta es el Bloque 4: si no arman el primer flujo con sus manos, el resto no se entiende.

---

## Preparación (antes de la clase)

- [ ] Docker Desktop abierto y el contenedor `n8n_local` prendido (punto verde en **Containers**).
- [ ] `http://localhost:5678` abierto en el navegador, con tu usuario ya logueado.
- [ ] Importá los tres flujos de la carpeta [n8n/](n8n/) (los vas a usar de respaldo): workflow nuevo → menú **…**
      (arriba a la derecha) → **Import from File…** → elegís el archivo → **Save**.
  - `01-mi-primer-flujo.json`: trigger manual → *Datos del cliente* → *Armar el saludo*.
  - `02-webhook-desde-el-navegador.json`: Webhook (GET, dirección `saludo`) → *Armar la respuesta*.
  - `03-formulario.json`: n8n Form Trigger (dirección `consulta-viaje`) → *Armar el resumen*.
- [ ] Ejecutá cada uno una vez para ver que anden (lo que tiene que salir está en cada bloque).
- [ ] Tené abierta en otra pestaña la página de n8n Cloud (`n8n.io`), para mostrar la alternativa gratuita.
- [ ] Tené a mano los bloques `PARA EL CHAT` de este guion en un bloc de notas.
- [ ] Mandales antes de la clase un mensaje: *"Para la clase, prendan Docker Desktop y n8n antes de entrar. Si no
      les anda, no se preocupen: lo resolvemos al principio."*

---

## 0–5 · Apertura

<p style="color:#1a7f37">Hola a todos. Hoy vamos a hacer algo distinto: vamos a volver a las bases. La clase pasada fuimos rápido y varios se quedaron con dudas, y es lógico: aparecieron muchos nodos juntos antes de tener firme lo más básico. Así que hoy vamos despacio, paso a paso, y todo lo hacemos juntos.</p>

<p style="color:#1a7f37">El plan es este. Primero, dónde vive n8n en su computadora: qué es Docker y cómo se prende. Después, qué es automatizar y qué es n8n, sin tocar nada. Después, un recorrido por la pantalla de n8n para saber dónde está cada cosa. Y después armamos nuestro primer flujo, muy chiquito, y aprendemos cómo le llegan los datos a n8n desde afuera.</p>

<p style="color:#1a7f37">Una regla para hoy: cada vez que terminemos un paso, escriben "listo" en el chat. No avanzo hasta que la mayoría esté. Y si alguien se pierde, no pasa nada: todo esto queda grabado y paso a paso en el material.</p>

Para explicar:
- **Volver a las bases no es retroceder.** En automatización, todo lo que viene (IF, Switch, APIs, inteligencia
  artificial) se apoya en tres ideas: qué es un nodo, cómo se conectan y cómo pasan los datos. Si eso está firme, lo
  demás es sumar piezas.
  - *Ejemplo:* Es como aprender a manejar: si no tenés claro el embrague, no tiene sentido salir a la ruta. Hoy
    practicamos el embrague.
- **Todo se hace a la par.** No hay que tomar apuntes de los clics: están todos en este material. Lo importante es
  hacerlo con las manos.
  - *Ejemplo:* "Yo hago un clic, lo explico, ustedes hacen el mismo clic, y escriben listo".

---

## 5–20 · Bloque 1 · Docker y n8n en tu computadora

### Qué es Docker (5 min)

Abrís Docker Desktop y lo mostrás en pantalla compartida, en la pestaña **Containers**.

<p style="color:#1a7f37">Esto que ven es Docker Desktop. Docker es un programa que sirve para correr otros programas adentro de una caja. Esa caja trae todo lo que el programa necesita para funcionar, ya armado. Así no tenemos que instalar n8n pieza por pieza: bajamos la caja, la prendemos, y anda.</p>

<p style="color:#1a7f37">Fíjense: acá hay una fila que dice n8n, con un punto verde. Esa es la caja de n8n, prendida. Docker es la estantería; n8n es una de las cajas que hay en la estantería.</p>

Para explicar:
- **Docker es un programa que corre otros programas "en una caja".** A esa caja se le dice **contenedor**
  (*container* en inglés). Adentro tiene el programa y todo lo que necesita: no se mezcla con lo demás que tengas
  instalado en la computadora.
  - *Ejemplo:* Es como una vianda: viene la comida, los cubiertos y la servilleta, todo junto en un táper. No tenés
    que salir a buscar cada cosa.
- **Imagen y contenedor no son lo mismo.** La **imagen** es el molde: lo que se baja de internet una sola vez. El
  **contenedor** es la caja que se arma con ese molde y que se prende y se apaga.
  - *Ejemplo:* La imagen es la receta de la torta; el contenedor es la torta. Con una receta podés hacer muchas
    tortas. En Docker Desktop, las imágenes están en la pestaña **Images** y las cajas en **Containers**.
- **Docker Desktop es la versión con ventanas.** Docker se puede usar escribiendo comandos, pero Docker Desktop nos
  deja hacer todo con clics: ver las cajas, prenderlas y apagarlas.
  - *Ejemplo:* En la fila de n8n están los botones: ▶ (prender), ■ (apagar) y el tacho (borrar la caja). El tacho no
    se toca.
- **Para qué lo usamos en el curso:** para tener n8n en nuestra propia computadora, gratis y sin límite de tiempo.
  - *Ejemplo:* La versión de n8n en la nube cobra por mes. La que corre en Docker, en tu computadora, es gratis
    siempre.

### Cómo se prende n8n (y cómo lo instalamos) (5 min)

<p style="color:#1a7f37">Repasemos cómo lo instalamos en la Semana 2, porque hay que tenerlo claro. Primero bajamos la imagen de n8n: el molde. Después, con el botón Run, armamos la caja, y le dijimos tres cosas: cómo se llama, en qué puerta atiende, el 5678, y en qué carpeta guarda sus cosas, la carpeta n8n del Escritorio. Eso se hace una sola vez.</p>

<p style="color:#1a7f37">Desde ese día, para usar n8n solo hay que hacer dos cosas: prender la caja con el play, y abrir el navegador en localhost dos puntos 5678. Nada más. No se vuelve a instalar.</p>

**En n8n, paso a paso** (cómo prender n8n cada vez que lo quieran usar):

```text
EN DOCKER · Prender n8n (cada vez que lo quieras usar)
1. Abrí Docker Desktop (y esperá a que abajo diga "Engine running")
2. Pestaña Containers (a la izquierda)
3. En la fila de n8n, apretá ▶ (si ya tiene el punto verde, está prendido)
4. Abrí el navegador en:  http://localhost:5678
5. Entrá con tu email y tu contraseña de n8n

Para apagarlo al terminar: en la misma fila, apretá ■
```

**Repaso: cómo se instaló la primera vez** (solo se cuenta; está completo en la guía de la Semana 2):

```text
EN DOCKER · Instalar n8n (se hace UNA sola vez)
1. Crear una carpeta "n8n" en el Escritorio (ahí n8n guarda tus flujos)
2. En Docker Desktop, buscar arriba:  n8nio/n8n  → Pull   (baja la imagen, el molde)
3. Pestaña Images → en n8nio/n8n, botón ▶ Run → Optional settings:
     Container name:  n8n
     Host port:       5678
     Host path:       la carpeta n8n del Escritorio
     Container path:  /home/node/.n8n
4. Run. La primera vez, n8n te pide crear tu usuario (email y contraseña)
```

Para explicar:
- **"localhost" quiere decir "esta misma computadora".** Es una dirección que no sale a internet: apunta a tu
  propia máquina. Por eso n8n local solo lo podés abrir vos, desde tu computadora.
  - *Ejemplo:* Si le pasás a un compañero tu dirección `http://localhost:5678`, en su computadora va a abrir *su*
    n8n (o nada, si no tiene), no el tuyo.
- **El puerto, 5678, es el número de puerta.** La computadora es un edificio y cada programa atiende en su número de
  departamento. n8n atiende en el 5678.
  - *Ejemplo:* Por eso la dirección termina en `:5678`. Si escribís solo `localhost`, tocás otro timbre y no atiende
    nadie.
- **La carpeta n8n del Escritorio es la memoria.** Ahí se guardan tus flujos y tu usuario. Si apagás la caja, o
  apagás la computadora, no se pierde nada. Si borraras esa carpeta, sí.
  - *Ejemplo:* Apagan n8n hoy, lo prenden la semana que viene, y los flujos de hoy siguen ahí.
- **Se instala una vez; se prende cada vez.** El error más común es volver a hacer *Run* desde la pestaña Images:
  eso arma una caja nueva, vacía. Para prender la de siempre se usa el ▶ de **Containers**.
  - *Ejemplo:* Es como tener un auto: no te comprás uno nuevo cada vez que salís, le das arranque al que ya tenés.

### Por qué local, y la alternativa en la nube (5 min)

<p style="color:#1a7f37">¿Por qué usamos n8n en nuestra computadora? Por una sola razón: es gratis y sin límite de tiempo. Es ideal para aprender y practicar todo lo que quieran.</p>

<p style="color:#1a7f37">Ahora, si alguien no pudo instalarlo, o Docker no le anda, no se quede afuera. n8n tiene una versión en la nube, en su página, con dos semanas de prueba gratis. Se crean una cuenta y en un minuto tienen n8n funcionando en el navegador, sin instalar nada. Todo lo que hagamos hoy funciona igual ahí.</p>

Mostrás la página `n8n.io` en otra pestaña y el botón para empezar la prueba gratis.

Para explicar:
- **n8n local:** corre en tu computadora, con Docker. Es **gratis para siempre**. La contra: solo funciona mientras
  tu computadora y la caja estén prendidas, y solo desde tu computadora.
  - *Ejemplo:* Si cerrás la notebook, tus flujos dejan de funcionar hasta que la vuelvas a prender.
- **n8n Cloud (en la nube):** corre en las computadoras de n8n, y entrás desde el navegador con una dirección propia
  (algo como `tunombre.app.n8n.cloud`). La **prueba gratis dura 14 días**, con todas las funciones del plan Pro y un
  límite de 1.000 ejecuciones (cada vez que un flujo corre, es una ejecución). Después hay que pagar.
  - *Ejemplo:* Alguien con una computadora vieja donde Docker no anda se crea la cuenta de prueba y sigue la clase
    desde ahí. En 14 días le da tiempo a arreglar la instalación local.
- **Qué pasa cuando terminan los 14 días.** Si no pagás, la prueba se vence sola: no te cobran nada y no hay que
  cancelar. Pero n8n borra ese espacio. Tenés 90 días para bajarte los flujos.
  - *Ejemplo:* Antes de que se venza, descargá cada flujo (menú **…** → **Download**) y después lo importás en tu n8n
    local con **Import from File…**. Así no perdés lo que hiciste.
- **Los flujos son los mismos en los dos lados.** Lo que cambia es la dirección: donde el material dice
  `http://localhost:5678`, en la nube va tu dirección `https://tunombre.app.n8n.cloud`.
  - *Ejemplo:* La dirección del webhook de hoy, en local, empieza con `http://localhost:5678/webhook-test/...`; en
    la nube, con `https://tunombre.app.n8n.cloud/webhook-test/...`.

`PARA EL CHAT`:

```text
PARA EL CHAT · ¿Cómo van a seguir la clase?
Escriban en el chat:
  1 → tengo n8n abierto en localhost:5678
  2 → no me anda Docker (me creo la prueba gratis en n8n.io)
```

Esperás las respuestas. A los que escriban 2, les decís que se creen la cuenta mientras vos seguís con la
explicación del Bloque 2, que no necesita tocar nada.

---

## 20–30 · Bloque 2 · Qué es automatizar y qué es n8n

### Qué es automatizar (5 min)

<p style="color:#1a7f37">Antes de tocar nada, la idea. Automatizar es lograr que una tarea que hacemos a mano, siempre igual, se haga sola. La palabra clave es "siempre igual": si una tarea tiene pasos fijos, se puede automatizar.</p>

<p style="color:#1a7f37">Piensen en una agencia de viajes. Cada vez que llega una consulta por la web, alguien la copia en una planilla, le manda un mail al cliente diciendo "recibimos tu consulta", y le avisa al vendedor. Todos los días, cien veces, los mismos pasos. Eso es lo que una automatización hace sola.</p>

Para explicar:
- **Automatizar es que una computadora haga una tarea repetitiva, siguiendo pasos fijos, sin que una persona la
  haga a mano cada vez.** No es magia ni inteligencia: es una receta que la computadora sigue al pie de la letra.
  - *Ejemplo:* El débito automático de la luz: todos los meses, el mismo día, se paga sola. Nadie entra al home
    banking.
- **Toda automatización tiene tres partes: algo que la dispara, unos pasos, y un resultado.** El disparador es "lo
  que pasa" (llegó un mail, son las 9 de la mañana, alguien completó un formulario). Los pasos son lo que se hace con
  eso. El resultado es lo que queda (una fila en una planilla, un mensaje mandado).
  - *Ejemplo:* "Cuando llega una consulta (disparador) → la guardo en la planilla y le respondo al cliente (pasos) →
    el cliente tiene su respuesta y la consulta quedó anotada (resultado)".
- **Qué conviene automatizar: lo repetitivo, lo que tiene pasos fijos, lo que da lo mismo quién lo haga.** Lo que
  necesita criterio humano todavía no, o no del todo.
  - *Ejemplo:* Mandar el mail de "recibimos tu consulta": sí. Decidir qué paquete le conviene a una familia con tres
    chicos: eso lo sigue pensando el vendedor (más adelante vamos a ver cómo la IA lo puede ayudar).

**Ejemplo: cómo se piensa una automatización**

❌ Mal: describirla como un deseo.

```text
"Quiero que las consultas se manejen solas."
```

✅ Bien: con disparador, pasos y resultado.

```text
Disparador: llega una consulta desde el formulario de la web.
Pasos:      1. armar un mensaje con el nombre y el destino
            2. mandárselo al cliente
Resultado:  el cliente recibe "Hola Ana, recibimos tu consulta para viajar a Mendoza".
```

Por qué: una computadora no entiende deseos; entiende pasos. Si podés escribir los pasos, se puede automatizar.

### Qué es n8n (5 min)

<p style="color:#1a7f37">n8n es la herramienta donde armamos esas recetas. En vez de escribir código, ponemos cajitas en una pantalla y las unimos con flechas. Cada cajita hace una cosa. Y las flechas dicen en qué orden.</p>

<p style="color:#1a7f37">Se pronuncia "n-eight-n", o "enéiten". Viene de la palabra nodemation, que tiene una n, ocho letras en el medio, y otra n. No hace falta acordarse: lo importante es que es una herramienta para automatizar uniendo piezas.</p>

Para explicar:
- **n8n es una herramienta para armar automatizaciones uniendo piezas, sin programar.** Cada pieza se llama
  **nodo** y hace una sola cosa: recibir un mail, leer una planilla, armar un mensaje, mandar un WhatsApp. Uniendo
  nodos se arma la receta completa.
  - *Ejemplo:* Es como armar con bloques de Lego: cada bloque es simple, pero encastrándolos armás una casa.
- **n8n se conecta con cientos de aplicaciones.** Gmail, Google Sheets, WhatsApp, Slack, Mercado Libre… Cada una
  tiene sus nodos ya armados. Y si alguna no tiene, igual hay forma de hablarle (lo vamos a ver más adelante).
  - *Ejemplo:* Hay un nodo de Gmail que manda mails, otro de Google Sheets que agrega filas. No hay que saber cómo
    funciona Gmail por dentro: el nodo ya lo sabe.
- **"Sin programar" no quiere decir "sin pensar".** n8n nos ahorra escribir código, pero los pasos los tenemos que
  pensar nosotros: qué dispara el flujo, qué se hace, en qué orden.
  - *Ejemplo:* n8n no sabe que la agencia quiere responder a cada consulta. Eso lo decidimos nosotros, y lo armamos.
- **Hay otras herramientas parecidas.** Make y Zapier hacen lo mismo con otra pantalla. Usamos n8n porque se puede
  tener gratis en la propia computadora y porque es de las más usadas en empresas.
  - *Ejemplo:* Si algún día trabajan con Zapier, las ideas de hoy (disparador, pasos, datos que pasan) son las
    mismas.

---

## 30–40 · Bloque 3 · Recorrido por n8n: dónde está cada cosa

En este bloque no se arma nada todavía: se muestra la pantalla y se nombra cada parte. Ellos te siguen en su n8n.

### La pantalla de inicio y crear un workflow (4 min)

<p style="color:#1a7f37">Abran n8n. Lo primero que ven es la pantalla de inicio, que se llama Overview. Acá van a aparecer todos los flujos que armen, como una lista de archivos. Arriba a la derecha hay un botón que dice Create workflow: crear flujo. Apriétenlo.</p>

<p style="color:#1a7f37">En n8n, a cada automatización se le dice workflow, que en inglés quiere decir flujo de trabajo. Workflow y flujo son lo mismo. Un workflow es una receta: una serie de pasos, uno después del otro.</p>

**En n8n, paso a paso:**

```text
EN N8N · Crear un workflow nuevo
1. En la pantalla de inicio (Overview), arriba a la derecha: Create workflow
2. Se abre una hoja en blanco (el canvas) con un cuadrado y un +  (Add first step)
3. Arriba a la izquierda dice "My workflow": hacé clic ahí y cambiale el nombre
   → escribí:  Mi primer flujo   y apretá Enter
```

Para explicar:
- **Workflow (flujo) = una automatización completa.** Es la receta entera: desde lo que la dispara hasta el
  resultado. Cada workflow se guarda por separado, con su nombre.
  - *Ejemplo:* "Responder consultas de la web" es un workflow. "Mandar el resumen del día" es otro.
- **Overview es la lista de todos tus flujos.** Para volver ahí desde cualquier lado, se toca el logo o **Overview**
  en la barra de la izquierda.
  - *Ejemplo:* Mañana entran a n8n, van a Overview, y hacen clic en "Mi primer flujo" para seguir donde lo dejaron.
- **Ponerle nombre desde el principio.** Si no, todos se llaman "My workflow" y después no se sabe cuál es cuál.
  - *Ejemplo:* Al final del curso van a tener veinte flujos. "My workflow 14" no dice nada; "Saludo a clientes" sí.

### El canvas, los nodos y las flechas (3 min)

<p style="color:#1a7f37">Esta hoja en blanco se llama canvas: el lienzo, la mesa de trabajo. Acá vamos a poner los nodos, que son las cajitas, y a unirlos con flechas. Cada nodo hace una sola cosa. Y la flecha dice: cuando este termina, sigue aquel, y le pasa lo que hizo.</p>

Para explicar:
- **Canvas = la mesa de trabajo.** Es donde se ve el flujo completo. Se puede mover arrastrando el fondo y hacer zoom
  con la rueda del mouse (o con los botones + y − de abajo a la izquierda).
  - *Ejemplo:* Si se pierden y no ven nada, el botón de abajo a la izquierda con forma de cuadrado (*Fit view*,
    "ajustar a la pantalla") centra todo el flujo.
- **Nodo = una cajita que hace una sola cosa.** Recibe datos, hace algo, y entrega datos al siguiente. Se agrega con
  el botón **+** y se abre con **doble clic**.
  - *Ejemplo:* Un nodo "manda un mail". Otro nodo "arma el texto del mail". Uno no hace el trabajo del otro.
- **Flecha (conexión) = el orden y el camino de los datos.** Une la salida de un nodo (el puntito de la derecha) con
  la entrada del siguiente (el puntito de la izquierda). Los datos viajan por la flecha, de izquierda a derecha.
  - *Ejemplo:* Si dos nodos no están unidos con una flecha, el segundo nunca se entera de lo que hizo el primero.

### El trigger: lo que arranca todo (3 min)

<p style="color:#1a7f37">Todo flujo empieza con un nodo especial que se llama trigger, el disparador. Es el que dice cuándo arranca la receta. Sin trigger, el flujo no arranca nunca. Por eso, cuando apretamos el más, n8n nos pregunta primero: ¿qué dispara este flujo?</p>

Apretás el **+** del canvas (*Add first step*) y mostrás el panel que se abre, sin elegir nada todavía.

Para explicar:
- **Trigger (disparador) = el primer nodo, el que arranca el flujo.** Siempre está a la izquierda de todo y tiene
  un rayito o un dibujo de "arranque". Un flujo tiene al menos uno.
  - *Ejemplo:* El timbre de una casa: hasta que alguien no lo toca, no pasa nada adentro.
- **Hay muchos tipos de trigger, según qué es "lo que pasa".** El panel muestra las opciones más comunes:
  - **Trigger manually** ("disparar a mano"): arranca cuando apretás un botón. Es el que usamos para probar.
  - **On a schedule** ("con un horario"): arranca solo a una hora, todos los días o cada tanto.
  - **On webhook call** ("cuando llaman al webhook"): arranca cuando alguien de afuera toca una dirección de
    internet. Lo vemos en el Bloque 5.
  - **On form submission** ("cuando mandan un formulario"): n8n arma un formulario y arranca cuando alguien lo
    completa. También en el Bloque 5.
  - **On app event** ("cuando pasa algo en una aplicación"): por ejemplo, cuando llega un mail a Gmail.
  - *Ejemplo:* "Todos los lunes a las 9, mandá el resumen" → *On a schedule*. "Cuando alguien completa el formulario
    de la web" → *On form submission*.

`PARA EL CHAT`:

```text
PARA EL CHAT · ¿Cuál es el trigger?
Escriban en el chat qué trigger usarían:
  1. Todos los días a las 8 de la mañana, mandar el clima.
  2. Cuando alguien completa el formulario de consultas.
  3. Quiero probar mi flujo ahora, con un botón.
```

Respuestas: **1 → On a schedule; 2 → On form submission; 3 → Trigger manually.**

---

## 40–55 · Bloque 4 · Tu primer flujo: un saludo

El objetivo es que cada uno arme, con sus manos, este flujo de tres nodos:

```text
Cuando hago clic  →  Datos del cliente  →  Armar el saludo
(trigger manual)     (Edit Fields)          (Edit Fields)
```

Lo que tiene que salir al final: `Hola Ana, gracias por escribirnos desde Córdoba.`

Si alguien se traba, puede importar el archivo `01-mi-primer-flujo.json` de la carpeta [n8n/](n8n/) y seguir mirando.

### Paso 1 · El trigger manual (3 min)

<p style="color:#1a7f37">Vamos a armar el flujo más simple que existe. Apriétenle al más del medio. Nos pregunta qué dispara el flujo: elijan Trigger manually, disparar a mano. Listo: ya tenemos el primer nodo.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 1: el trigger manual
1. En el canvas vacío, clic en el +  (Add first step)
2. Se abre el panel "What triggers this workflow?" (¿qué dispara este flujo?)
3. Clic en:  Trigger manually
4. Aparece el nodo en el canvas: "When clicking 'Execute workflow'"
5. Para cambiarle el nombre: clic derecho en el nodo → Rename → escribí  Cuando hago clic  → Enter
   (o seleccionalo y apretá F2)
```

Para explicar:
- **El trigger manual es el de probar.** Arranca el flujo cada vez que apretás el botón **Execute workflow**
  ("ejecutar flujo"), abajo en el medio del canvas. No sirve para que el flujo funcione solo, pero es perfecto para
  aprender: vos decidís cuándo corre.
  - *Ejemplo:* Es como probar una receta en tu cocina antes de abrir el restaurante.
- **Ponerle nombre a cada nodo.** n8n les pone nombres en inglés y largos. Un nombre que diga qué hace ese nodo hace
  que el flujo se lea solo.
  - *Ejemplo:* "Edit Fields1" no dice nada. "Armar el saludo" se entiende sin abrirlo.

### Paso 2 · Datos del cliente: el nodo Edit Fields (5 min)

<p style="color:#1a7f37">Ahora vamos a crear unos datos, como si hubiera llegado un cliente. Para eso usamos un nodo que se llama Edit Fields, editar campos. Sirve para escribir datos, cambiarlos o darles forma. Fíjense que el trigger tiene un más a la derecha: ese más es para agregar el nodo que sigue.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 2: Datos del cliente (Edit Fields)
1. En el nodo "Cuando hago clic", clic en el + de su derecha
2. En el buscador del panel, escribí:  edit   → elegí  Edit Fields (Set)
3. Se abre el nodo (la ventana grande). En "Fields to Set": clic en  Add Field
4. Primer campo:
     Name (nombre):   nombre
     Type (tipo):     String   (texto; es el que viene)
     Value (valor):   Ana
5. Otra vez Add Field. Segundo campo:
     Name:   ciudad      Type: String      Value:  Córdoba
6. Arriba, botón  Execute step  (ejecutar este paso)
7. A la derecha (OUTPUT) aparece:  nombre: Ana   ciudad: Córdoba
8. Arriba a la izquierda:  Back to canvas  (volver al lienzo)
9. Renombrá el nodo:  Datos del cliente
```

<p style="color:#1a7f37">Miren lo que salió a la derecha, donde dice Output, la salida. Nuestro nodo armó una ficha con dos casilleros: nombre, Ana, y ciudad, Córdoba. Eso es un dato en n8n: una ficha con casilleros, cada uno con su nombre y su valor.</p>

Para explicar:
- **Edit Fields (Set) crea, cambia o borra casilleros.** Es el nodo que más vamos a usar para preparar datos. En
  inglés, *field* es "campo" o "casillero", y *set* es "poner".
  - *Ejemplo:* Acá lo usamos para inventar un cliente. Más adelante, para ordenar los datos que llegan de un
    formulario antes de guardarlos.
- **La ventana grande de un nodo tiene tres partes.** A la izquierda, **INPUT** (la entrada: lo que le llegó del
  nodo anterior). En el medio, **Parameters** (la configuración: lo que le pedimos que haga). A la derecha, **OUTPUT**
  (la salida: lo que entrega al siguiente).
  - *Ejemplo:* Es como una máquina de exprimir: entran naranjas (input), la configurás (parameters) y sale jugo
    (output).
- **Un dato es una ficha con casilleros: nombre del casillero y valor.** El nombre no cambia; el valor sí. Al
  nombre del casillero se le dice **campo**, o *key* ("clave") en inglés.
  - *Ejemplo:* Como una ficha de un consultorio: "Nombre: Ana", "Ciudad: Córdoba". Mañana viene otro cliente, y la
    ficha tiene los mismos casilleros con otros valores.
- **El tipo del casillero dice qué clase de dato es.** **String** es texto. **Number** es un número (para hacer
  cuentas). **Boolean** es sí o no (*true* o *false*).
  - *Ejemplo:* "Ana" es String. 800 (el monto de un viaje) es Number. "¿Pagó la seña?" es Boolean.
- **Execute step ejecuta solo ese nodo.** Sirve para probar un nodo sin correr todo el flujo, y ver qué sale.
  - *Ejemplo:* Cambiás "Ana" por tu nombre, apretás Execute step, y en OUTPUT aparece tu nombre.
- **OUTPUT se puede ver de tres formas:** **Schema** (los casilleros como lista), **Table** (como planilla) y
  **JSON** (como texto con llaves). Son la misma información, dibujada distinto.
  - *Ejemplo:* En JSON se ve así: `{ "nombre": "Ana", "ciudad": "Córdoba" }`. Las llaves `{ }` encierran la ficha;
    cada casillero es `"nombre": valor`.

### Paso 3 · Armar el saludo: pasar datos de un nodo al otro (7 min)

<p style="color:#1a7f37">Ahora lo importante de la clase: cómo un nodo usa los datos del anterior. Vamos a agregar otro Edit Fields que arme un saludo con el nombre y la ciudad. Pero no vamos a escribir "Ana" a mano: vamos a decirle "usá el nombre que te llegó". Así, si mañana el cliente es otro, el saludo cambia solo.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 3: Armar el saludo (pasar datos de un nodo al otro)
1. En "Datos del cliente", clic en el + de su derecha → buscá  edit  → Edit Fields (Set)
2. Mirá la izquierda (INPUT): están los casilleros  nombre  y  ciudad  que llegaron
   (si no aparecen, apretá "Execute previous nodes", ejecutar los nodos anteriores)
3. Add Field →  Name:  mensaje     Type: String
4. En Value, escribí:  Hola     (con un espacio después)
5. Desde INPUT, arrastrá el casillero  nombre  y soltalo en Value, después de "Hola "
   → aparece en verde:  {{ $json.nombre }}
   → arriba del campo, el modo cambió solo de "Fixed" a "Expression"
6. Seguí escribiendo:  , gracias por escribirnos desde   (con espacio al final)
7. Arrastrá el casillero  ciudad  al final, y escribí un punto.
   Queda:  Hola {{ $json.nombre }}, gracias por escribirnos desde {{ $json.ciudad }}.
8. Abajo del campo aparece el resultado de muestra:
   Hola Ana, gracias por escribirnos desde Córdoba.
9. Execute step → en OUTPUT:  mensaje: Hola Ana, gracias por escribirnos desde Córdoba.
10. Back to canvas → renombrá el nodo:  Armar el saludo
```

<p style="color:#1a7f37">Esto que está en verde, con dos llaves de cada lado, se llama expresión. Quiere decir: "acá no va un texto fijo; va lo que diga el casillero nombre del dato que me llegó". Es la forma de pasar datos de un nodo al otro. Y la forma más fácil de escribirla es arrastrar el casillero desde la izquierda.</p>

Para explicar:
- **Los datos pasan por la flecha: la salida de un nodo es la entrada del siguiente.** Lo que *Datos del cliente*
  mostró en OUTPUT es exactamente lo que *Armar el saludo* ve en INPUT.
  - *Ejemplo:* Es una cadena de montaje: cada puesto recibe la pieza del anterior, le hace algo, y la pasa.
- **Fixed o Expression: texto fijo o texto que cambia.** En **Fixed** ("fijo"), lo que escribís es literal. En
  **Expression** ("expresión"), podés mezclar texto con casilleros que vienen de antes, entre `{{ }}`.
  - *Ejemplo:* Fixed: "Hola Ana" siempre dice Ana. Expression: "Hola {{ $json.nombre }}" dice el nombre de quien
    sea que llegó.
- **`{{ $json.nombre }}` se lee "el casillero nombre de lo que me llegó".** `$json` es "el dato que entró a este
  nodo", y `.nombre` es "el casillero que se llama nombre". No hace falta escribirlo a mano: se arrastra.
  - *Ejemplo:* Si el casillero se llamara `destino`, la expresión sería `{{ $json.destino }}`.
- **Arrastrar es mejor que escribir.** Si escribís a mano y te equivocás una letra (`$json.nombr`), no da error: el
  resultado sale vacío. Arrastrando no hay forma de equivocarse.
  - *Ejemplo:* Con `{{ $json.Nombre }}` (con mayúscula) sale "Hola , gracias por…". El casillero se llama `nombre`,
    en minúscula: para n8n son distintos.
- **La vista previa avisa antes de ejecutar.** Abajo del campo, n8n muestra cómo va a quedar el texto con los datos
  de ahora. Si ahí ves un hueco, algo está mal escrito.
  - *Ejemplo:* Ves "Hola Ana, gracias por escribirnos desde ." → falta la ciudad: se te escapó el arrastre.

### Paso 4 · Ejecutar todo, guardar y ver las ejecuciones (5 min)

<p style="color:#1a7f37">Ahora ejecutemos el flujo entero. Abajo en el medio está el botón Execute workflow. Apriétenlo. Fíjense qué pasa: los tres nodos se ponen verdes, uno después del otro, y arriba de cada flecha aparece un número: es la cantidad de datos que pasaron por ahí. Uno.</p>

<p style="color:#1a7f37">Y ahora, a guardar. n8n no guarda solo: si cierran la pestaña sin guardar, pierden el trabajo. Botón Save, arriba a la derecha, o control S.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 4: ejecutar, guardar y mirar
1. Abajo en el medio:  Execute workflow
2. Los tres nodos se ponen verdes, con un ✓. Arriba de cada flecha:  1 item
3. Doble clic en "Armar el saludo" → OUTPUT:  Hola Ana, gracias por escribirnos desde Córdoba.
4. Back to canvas → arriba a la derecha:  Save   (o Ctrl + S)
5. Arriba en el medio, pestaña  Executions  (ejecuciones): la lista de cada vez que corrió el flujo
   → clic en una: se ve cómo quedó cada nodo en esa vez
6. Pestaña  Editor  para volver a armar
```

`PARA EL CHAT`:

```text
PARA EL CHAT · Probá vos
1. Abrí "Datos del cliente" y cambiá Ana por tu nombre y Córdoba por tu ciudad.
2. Execute workflow.
3. Pegá en el chat lo que dice el casillero "mensaje" de "Armar el saludo".
```

Lo que tiene que pasar: cada uno pega su saludo con su nombre y su ciudad, sin haber tocado el nodo *Armar el
saludo*. Ese es el momento para cerrar la idea:

<p style="color:#1a7f37">¿Vieron? No tocaron el saludo, y cambió solo. Porque el saludo no dice Ana: dice "el nombre que me llegue". Esa es la idea de toda automatización: armo los pasos una vez, y funcionan con cualquier dato.</p>

Para explicar:
- **Verde, rojo y gris.** Verde con ✓: el nodo funcionó. Rojo: falló (al abrirlo, dice por qué). Gris: no se
  ejecutó (no le llegó nada, o el flujo se cortó antes).
  - *Ejemplo:* Si *Armar el saludo* está gris, mirá si la flecha que lo une con *Datos del cliente* está bien
    conectada.
- **El número arriba de la flecha es la cantidad de items.** Un **item** es una ficha de datos. Hoy pasa uno solo
  (un cliente). Si pasaran cinco clientes, diría 5, y el saludo se armaría cinco veces, uno por cliente.
  - *Ejemplo:* "1 item" = una ficha = un cliente.
- **Execute workflow corre todo; Execute step corre un solo nodo.** El primero es para probar el flujo entero; el
  segundo, para probar un nodo mientras lo armás.
  - *Ejemplo:* Mientras armás el saludo, usás Execute step. Cuando terminaste, Execute workflow para ver todo junto.
- **Save guarda.** Sin guardar, los cambios se pierden al cerrar la pestaña. En n8n 2.x también hay un botón
  **Publish** ("publicar"): es para que un flujo funcione solo, sin que nadie apriete nada. Con el trigger manual no
  hace falta; lo usamos cuando el flujo tiene que estar siempre atento (por ejemplo, con un webhook de verdad).
  - *Ejemplo:* Save es como guardar un documento de Word. Publish es como mandarlo a imprenta: a partir de ahí, está
    en uso.
- **Executions es el historial.** Cada vez que el flujo corre, queda anotado ahí: cuándo, si salió bien o mal, y qué
  datos pasaron por cada nodo. Es la primera parada cuando algo "no anduvo".
  - *Ejemplo:* Un cliente dice "no me llegó la respuesta". Vas a Executions, buscás esa hora, y ves en qué nodo se
    cortó.

---

## 55–72 · Bloque 5 · Cómo le llegan los datos a n8n

Hasta ahora los datos los escribimos nosotros a mano, en *Datos del cliente*. En la vida real, los datos llegan de
afuera: alguien completa un formulario, una aplicación avisa algo. En este bloque se ven dos formas muy simples de
que entren datos de afuera, sin instalar nada: **el webhook desde el navegador** y **el formulario de n8n**. Al final
se cuenta qué es **Postman**, sin usarlo.

<p style="color:#1a7f37">Hasta ahora, el dato "Ana, Córdoba" lo escribimos nosotros. Pero una automatización de verdad recibe los datos de afuera: de un formulario de la web, de un mensaje, de otra aplicación. Vamos a ver dos formas muy simples de mandarle datos a n8n. Y para eso, primero, una palabra nueva: webhook.</p>

### Qué es un webhook (4 min)

<p style="color:#1a7f37">Un webhook es una dirección de internet que n8n crea para un flujo. Es como un timbre: cuando alguien toca esa dirección, el flujo arranca. Y en esa misma dirección se le pueden mandar datos. Es un trigger, como el manual, pero en vez de apretar un botón nosotros, lo toca alguien de afuera.</p>

Para explicar:
- **Webhook = una dirección de internet que, cuando alguien la toca, arranca el flujo.** Es un tipo de trigger. La
  palabra viene de *web* (internet) y *hook* ("gancho"): un gancho en internet del que se cuelga tu flujo.
  - *Ejemplo:* El timbre de tu casa: está siempre ahí, y cuando alguien lo toca, vos te enterás y abrís.
- **Quién lo toca: cualquier programa que sepa la dirección.** Un formulario de la web, una tienda online, otra
  aplicación, o nosotros mismos desde el navegador.
  - *Ejemplo:* Mercado Pago, cuando entra un pago, toca el webhook de la tienda para avisarle "te pagaron".
- **Al tocarlo, se pueden mandar datos.** La forma más simple es ponerlos en la misma dirección, después de un
  signo de pregunta: `?nombre=Ana&destino=Mendoza`. A eso se le dice **parámetros**: cada uno es
  `casillero=valor`, y se separan con `&`.
  - *Ejemplo:* `http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza` le manda a n8n dos datos:
    nombre Ana y destino Mendoza.
- **El webhook también puede contestar.** El que tocó el timbre puede recibir una respuesta: un mensaje armado por
  el flujo.
  - *Ejemplo:* Tocás la dirección desde el navegador, y en la pantalla aparece "Hola Ana, recibimos tu consulta
    para viajar a Mendoza".

### Ejemplo en vivo: el navegador le manda datos a n8n (flujo 02) (8 min)

El flujo que arman:

```text
Llega un pedido  →  Armar la respuesta
(Webhook, GET)       (Edit Fields)
```

Lo que tiene que pasar: pegan una dirección en el navegador y la pantalla muestra
`{"mensaje":"Hola Ana, recibimos tu consulta para viajar a Mendoza."}`.

<p style="color:#1a7f37">Armemos un flujo nuevo. Vuelvan a Overview y creen otro workflow, que se llame "Webhook desde el navegador". Esta vez, el trigger no va a ser manual: va a ser un webhook.</p>

**En n8n, paso a paso:**

```text
EN N8N · El webhook (flujo 02)
 1. Overview → Create workflow → renombralo:  Webhook desde el navegador
 2. Clic en el +  (Add first step) → buscá  webhook  → elegí  Webhook
 3. Se abre el nodo. Completá:
      HTTP Method:   GET        (es el que viene; es "pedir", lo que hace el navegador)
      Path:          saludo     (borrá lo que viene y escribí "saludo")
      Respond:       When Last Node Finishes
                     (que conteste cuando termine el último nodo, con lo que armó)
 4. Arriba del nodo, en "Webhook URLs", pestaña  Test URL: está la dirección
      http://localhost:5678/webhook-test/saludo
 5. Back to canvas → renombrá el nodo:  Llega un pedido
 6. + a la derecha → Edit Fields (Set). Todavía no hay nada en INPUT: está bien.
    Volvé al canvas sin completar nada (lo completamos después de la primera prueba).
 7. Save
```

<p style="color:#1a7f37">Ahora probémoslo. Apretamos Execute workflow: fíjense que el webhook se queda esperando, dice que está escuchando. Ahora vamos a tocar el timbre: copiamos la dirección, le agregamos los datos, y la pegamos en otra pestaña del navegador.</p>

```text
EN N8N · Primera prueba: tocar el timbre
1. Execute workflow  → el nodo del webhook dice "Waiting for trigger event" (esperando)
2. Abrí OTRA pestaña del navegador y pegá esta dirección (con tus datos si querés):
     http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza
3. Enter. Volvé a la pestaña de n8n: el webhook se puso verde
4. Doble clic en "Llega un pedido" → OUTPUT: buscá el casillero  query
     query:  nombre: Ana    destino: Mendoza
```

<p style="color:#1a7f37">Miren lo que llegó. El webhook recibe muchos casilleros: de dónde vino el pedido, qué navegador usamos, la hora. A nosotros nos importa uno: query. Ahí adentro están los datos que pusimos en la dirección: nombre Ana, destino Mendoza.</p>

```text
EN N8N · Armar la respuesta con lo que llegó
1. Doble clic en el Edit Fields → en INPUT, abrí  query  (clic en la flechita)
2. Add Field →  Name:  mensaje    Type: String
3. Value: escribí  Hola   y arrastrá  nombre  (el de adentro de query)
   → aparece  {{ $json.query.nombre }}
4. Seguí:  , recibimos tu consulta para viajar a   y arrastrá  destino   y un punto.
   Queda:  Hola {{ $json.query.nombre }}, recibimos tu consulta para viajar a {{ $json.query.destino }}.
5. Back to canvas → renombralo:  Armar la respuesta  → Save
6. Execute workflow  → en la otra pestaña, recargá la dirección (F5)
7. El navegador muestra:
     {"mensaje":"Hola Ana, recibimos tu consulta para viajar a Mendoza."}
```

<p style="color:#1a7f37">¡Ahí está! Le mandamos datos a n8n desde el navegador, n8n los recibió, armó un mensaje, y nos contestó. Eso mismo es lo que hace un formulario de una página web, o una aplicación: tocar el timbre de n8n con datos.</p>

`PARA EL CHAT`:

```text
PARA EL CHAT · Tocá el timbre vos
1. En n8n: Execute workflow (que quede esperando).
2. En otra pestaña, pegá la dirección cambiando los datos:
     http://localhost:5678/webhook-test/saludo?nombre=TU_NOMBRE&destino=A_DONDE_QUIERAS
3. Pegá en el chat lo que te contestó el navegador.
(Si usás n8n en la nube, cambiá http://localhost:5678 por tu dirección de n8n.)
```

Para explicar:
- **`query` es "lo que vino en la dirección".** Los datos que van después del `?` llegan a n8n adentro del
  casillero `query`. Por eso la expresión es `{{ $json.query.nombre }}`: "adentro de query, el casillero nombre".
  - *Ejemplo:* Si la dirección dice `?nombre=Lucía&personas=3`, en n8n aparece `query` con `nombre: Lucía` y
    `personas: 3`.
- **Un casillero puede tener casilleros adentro.** `query` es una ficha dentro de la ficha. Para llegar al de
  adentro, se encadenan los nombres con puntos.
  - *Ejemplo:* Como una carpeta dentro de otra: `query.nombre` es "la carpeta query, el archivo nombre".
- **GET es "pedir"; es lo que hace el navegador.** Cada vez que escribís una dirección en el navegador, hace un
  pedido GET. Por eso, con el método GET, podemos probar el webhook sin ningún programa extra. (Hay otros métodos,
  como POST, para mandar muchos datos: los vemos más adelante.)
  - *Ejemplo:* Abrir `google.com` en el navegador es un GET a Google. Abrir nuestra dirección es un GET a n8n.
- **"Respond: When Last Node Finishes" hace que el navegador reciba el mensaje.** Si se deja en *Immediately*
  ("inmediatamente"), n8n contesta apenas le llega el pedido, antes de armar nada, con un mensaje genérico.
  - *Ejemplo:* Con *Immediately*, el navegador muestra `{"message":"Workflow was started"}` ("el flujo arrancó"),
    y no nuestro saludo.
- **La dirección de prueba funciona una vez por cada clic.** La **Test URL** (`webhook-test`) solo atiende si antes
  apretaste *Execute workflow*, y atiende una sola vez. Para probar de nuevo, otra vez *Execute workflow*.
  - *Ejemplo:* Si recargan sin volver a apretar, el navegador muestra un error: `The requested webhook "saludo" is
    not registered` ("ese webhook no está registrado"), con la pista *Click the 'Execute workflow' button*.
- **La dirección de verdad es la Production URL, y necesita Publish.** La **Production URL** (sin `-test`:
  `http://localhost:5678/webhook/saludo`) funciona siempre, sin apretar nada, pero solo si el flujo está publicado
  con el botón **Publish**. Es la que se le da a un formulario real.
  - *Ejemplo:* Mientras armás: Test URL y Execute workflow. Cuando ya anda: Publish, y le pasás a la web la
    Production URL.
- **Si falta un dato, no da error: queda vacío.** Si alguien toca la dirección sin `?nombre=...`, el flujo corre
  igual, pero el mensaje sale con huecos. (Lo probamos: sin datos, contesta "Hola , recibimos tu consulta para
  viajar a ."). Más adelante vamos a ver cómo preguntar "¿llegó el nombre?" antes de responder.
  - *Ejemplo:* Es como un formulario de papel que alguien entrega en blanco: llega, pero no sirve.

**Ejemplo: mandar datos en la dirección**

❌ Mal: datos con espacios y sin el signo de pregunta.

```text
http://localhost:5678/webhook-test/saludo nombre=Ana destino=Mendoza
```

✅ Bien: un `?` antes del primero, y `&` entre uno y otro.

```text
http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza
```

Por qué: la dirección tiene reglas fijas. Lo que va después del `?` son los datos, de a pares `casillero=valor`,
separados con `&`. Con espacios, el navegador corta la dirección o la cambia.

### Otra forma: el formulario de n8n (flujo 03) (4 min)

<p style="color:#1a7f37">Escribir datos en una dirección sirve para probar, pero un cliente nunca va a hacer eso. Lo que sí hace un cliente es completar un formulario. Y n8n tiene un trigger que arma el formulario solo: On form submission. Lo muestro ya armado.</p>

Abrís el flujo **03 · Formulario: los datos los carga una persona** (importado antes de la clase).

```text
Formulario de consulta   →   Armar el resumen
(n8n Form Trigger)           (Edit Fields)
```

**En n8n, paso a paso** (lo mostrás vos; ellos miran):

```text
EN N8N · El formulario (flujo 03)
1. Doble clic en "Formulario de consulta". Se ve:
     Form Title:        Consulta de viaje
     Form Description:  Contanos a dónde querés viajar y te respondemos.
     Form Elements (Form Fields):  Nombre · Destino · Cantidad de personas
     (cada uno tiene su Element Type: texto o número, y si es obligatorio: Required Field)
2. Back to canvas → Execute workflow
3. Se abre una pestaña nueva con el formulario. Completalo:
     Nombre: Ana    Destino: Mendoza    Cantidad de personas: 2   → Submit
4. Volvé a n8n: los dos nodos en verde.
5. Doble clic en "Armar el resumen" → OUTPUT:
     resumen: Nueva consulta: Ana quiere viajar a Mendoza (2 personas).
```

Para explicar:
- **On form submission (n8n Form Trigger) = n8n arma un formulario y arranca cuando alguien lo manda.** Por dentro
  es un webhook, pero con una página linda para que una persona complete.
  - *Ejemplo:* Una agencia comparte el link del formulario por WhatsApp. Cada cliente que lo completa dispara el
    flujo.
- **Cada pregunta del formulario es un casillero.** Lo que escribe la persona llega a n8n con el nombre de la
  pregunta: `Nombre`, `Destino`, `Cantidad de personas`. Se arrastran igual que antes.
  - *Ejemplo:* En el resumen, `{{ $json.Nombre }}` trae lo que escribió la persona en "Nombre". (Con mayúscula,
    porque así se llama la pregunta.)
- **También tiene dirección de prueba y de verdad.** Como el webhook: con *Execute workflow* funciona una vez (la
  dirección de prueba es `/form-test/consulta-viaje`); publicado con **Publish**, funciona siempre en
  `/form/consulta-viaje`.
  - *Ejemplo:* Si abren la dirección de prueba sin apretar *Execute workflow*, la página dice *Form Trigger isn't
    listening yet* ("el formulario todavía no está escuchando").

<p style="color:#1a7f37">Fíjense que las dos formas hacen lo mismo: entran datos de afuera, n8n los recibe, y los usa en los nodos siguientes. Con el webhook los mandamos en la dirección; con el formulario los carga una persona. Para n8n, en los dos casos, es una ficha con casilleros.</p>

### Y Postman, ¿qué es? (1 min, solo se cuenta)

<p style="color:#1a7f37">Una última cosa, para que no se asusten si la ven en un tutorial. Existe una aplicación que se llama Postman. Sirve para mandarle pedidos a una dirección, como hicimos con el navegador, pero con más control: se puede elegir el método, mandar muchos datos, ver la respuesta completa. La usan mucho los programadores para probar. Nosotros no la vamos a usar: con el navegador y con el formulario de n8n alcanza.</p>

Para explicar:
- **Postman es una aplicación para probar direcciones de internet (APIs y webhooks) sin armar nada.** Escribís la
  dirección, elegís el método (GET, POST…), cargás los datos, apretás *Send* ("enviar") y ves lo que contesta. Es
  gratis y se instala o se usa desde la web.
  - *Ejemplo:* Es como un control remoto universal para probar cualquier aparato: no es el aparato, es para
    apretarle botones y ver qué hace.
- **Para qué la usa la gente:** para mandar pedidos que el navegador no puede mandar fácil. El navegador, al
  escribir una dirección, solo hace GET con datos en la dirección. Postman puede mandar un POST con muchos datos
  "adentro" del pedido (en lo que se llama *body*, "cuerpo"), o con una clave de acceso.
  - *Ejemplo:* Para simular que un formulario de una web manda nombre, mail, teléfono y un mensaje largo, Postman lo
    hace en un clic; con el navegador no se puede.
- **Por qué no la usamos:** suma una aplicación nueva y una pantalla llena de opciones, y para aprender no hace
  falta. Lo que hicimos con el navegador es exactamente lo mismo que hace Postman con un GET.
  - *Ejemplo:* Si ven un tutorial que dice "abrí Postman, poné GET y la dirección, y apretá Send", ustedes pueden
    hacer lo mismo pegando la dirección en el navegador.

---

## 72–75 · Cierre de esta parte

<p style="color:#1a7f37">Repasemos lo de hoy en una frase cada uno. n8n corre en una caja de Docker, en nuestra computadora, y se abre en localhost dos puntos 5678. Un workflow es una receta: un trigger que la arranca, y nodos que hacen una cosa cada uno, unidos por flechas. Los datos son fichas con casilleros, que pasan por las flechas de un nodo al otro, y se usan arrastrándolos. Y los datos pueden llegar de afuera: por un webhook o por un formulario.</p>

`PARA EL CHAT`:

```text
PARA EL CHAT · Mini repaso. Respondé con el número y la letra (ej: 1a, 2c...)
1. ¿Qué es Docker?
   a) Un programa que corre otros programas en una caja   b) Una parte de n8n   c) Un navegador
2. ¿Qué hace un trigger?
   a) Manda mails   b) Arranca el flujo   c) Guarda el flujo
3. ¿Cómo usa un nodo el nombre que armó el nodo anterior?
   a) Lo escribo de nuevo a mano   b) Arrastro el casillero y queda {{ $json.nombre }}   c) No se puede
4. Pego en el navegador .../webhook-test/saludo?nombre=Ana y me dice "not registered". ¿Qué me faltó?
   a) Apretar Execute workflow antes   b) Reinstalar Docker   c) Cambiar de navegador
5. Si no pude instalar n8n en mi computadora, ¿qué hago?
   a) Me pierdo la clase   b) Creo la prueba gratis de 14 días en n8n.io   c) Uso Postman
```

Respuestas: **1a, 2b, 3b, 4a, 5b.** Leés en voz alta cuántos acertaron cada una. La que suele fallar es la 3: si
pasa, volvés al Paso 3 del Bloque 4 y arrastrás el casillero otra vez, en vivo.

---

## Las trabas más comunes

| Lo que ven | Por qué pasa | Qué hacer |
|---|---|---|
| `localhost:5678` dice "No se puede acceder a este sitio" | n8n está apagado o todavía arrancando | Docker Desktop → Containers → ▶ en n8n. Esperar el punto verde y recargar. |
| Docker Desktop dice "Engine stopped" o no abre | Docker todavía está arrancando, o falta WSL | Esperar un minuto. Si sigue, que se cree la prueba de n8n Cloud y lo arreglen después con la guía de la Semana 2. |
| Entraron a n8n y está vacío, sin sus flujos | Hicieron *Run* desde **Images** y armaron una caja nueva | Apagar esa caja (■) y prender la de siempre desde **Containers**. |
| En el segundo Edit Fields, INPUT está vacío | El nodo anterior todavía no se ejecutó | Botón **Execute previous nodes** en INPUT, o *Execute workflow*. |
| El saludo sale "Hola , gracias por escribirnos desde ." | La expresión está mal escrita (una letra, una mayúscula) | Borrar lo escrito y arrastrar el casillero desde INPUT. |
| El navegador dice `The requested webhook "saludo" is not registered` | No apretaron *Execute workflow* antes, o ya usaron esa vez | *Execute workflow* y volver a cargar la dirección. |
| El navegador muestra `{"message":"Workflow was started"}` | En el Webhook, *Respond* quedó en *Immediately* | Cambiar *Respond* a **When Last Node Finishes**. |
| El navegador queda cargando mucho tiempo | El flujo se trabó en un nodo, o falta el Edit Fields | Mirar el canvas: qué nodo quedó gris o rojo. |
| En el webhook, el mensaje sale con huecos | La dirección no tiene `?nombre=...&destino=...`, o tiene espacios | Copiar la dirección del `PARA EL CHAT` y cambiar solo los valores. |
| En n8n Cloud, la dirección de localhost no anda | En la nube no hay localhost | Usar la dirección propia: `https://tunombre.app.n8n.cloud/webhook-test/saludo?...` |
| Cerraron la pestaña y el flujo desapareció | No guardaron | Rearmarlo (son tres nodos) o importar el archivo de la carpeta. Desde ahora: **Save** siempre. |

---

## Checklist de salida (de esta parte)

Al terminar, cada alumno puede:
- [ ] Prender n8n desde Docker Desktop y abrirlo en `localhost:5678` (o tener su prueba en n8n Cloud).
- [ ] Explicar con sus palabras qué es automatizar, qué es n8n, un workflow, un nodo y un trigger.
- [ ] Crear un workflow, ponerle nombre, agregar nodos con el **+** y abrirlos con doble clic.
- [ ] Usar Edit Fields para crear casilleros y leer INPUT y OUTPUT.
- [ ] Pasar un dato de un nodo al otro arrastrando el casillero (`{{ $json.nombre }}`).
- [ ] Ejecutar con *Execute step* y *Execute workflow*, guardar con *Save*, y mirar *Executions*.
- [ ] Mandarle datos a n8n desde el navegador con un webhook, y saber que un formulario hace lo mismo.

---

## Glosario de esta parte

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **Automatizar** | Que una computadora haga sola una tarea repetitiva, con pasos fijos. | El débito automático de la luz. |
| **Docker** | Programa que corre otros programas adentro de una caja, con todo lo que necesitan. | n8n corre en Docker. |
| **Docker Desktop** | La versión de Docker con ventanas y botones. | Containers → ▶ para prender n8n. |
| **Imagen** | El molde de un programa, que se baja una sola vez. | `n8nio/n8n`, en la pestaña Images. |
| **Contenedor** (*container*) | La caja armada con ese molde, que se prende y se apaga. | La fila "n8n" en Containers. |
| **localhost** | "Esta misma computadora": una dirección que no sale a internet. | `http://localhost:5678` |
| **Puerto** | El "número de puerta" donde atiende un programa. | n8n atiende en el 5678. |
| **n8n Cloud** | n8n en la nube, en las computadoras de n8n. Prueba gratis de 14 días. | `tunombre.app.n8n.cloud` |
| **n8n** | Herramienta para armar automatizaciones uniendo nodos, sin programar. | |
| **Workflow** (flujo) | Una automatización completa: trigger + nodos + flechas. | "Mi primer flujo". |
| **Overview** | La pantalla de inicio de n8n, con la lista de tus flujos. | Botón **Create workflow**. |
| **Canvas** | La mesa de trabajo donde se ven y se unen los nodos. | La hoja en blanco del flujo. |
| **Nodo** | Una cajita que hace una sola cosa. | Edit Fields, Webhook. |
| **Conexión** (flecha) | Une un nodo con el siguiente; por ahí pasan los datos. | De *Datos del cliente* a *Armar el saludo*. |
| **Trigger** (disparador) | El primer nodo: el que arranca el flujo. | Trigger manually, Webhook, formulario. |
| **Trigger manually** | Trigger que arranca cuando apretás *Execute workflow*. | El de probar. |
| **Edit Fields (Set)** | Nodo que crea, cambia o borra casilleros. | *Datos del cliente*. |
| **Campo / casillero** (*field*, *key*) | Cada dato de la ficha, con su nombre y su valor. | `nombre: Ana` |
| **String / Number / Boolean** | Tipos de dato: texto, número, sí o no. | "Ana" / 800 / true |
| **Item** | Una ficha de datos que pasa por las flechas. | "1 item" arriba de la flecha. |
| **JSON** | La forma de escribir una ficha como texto, con llaves. | `{ "nombre": "Ana" }` |
| **INPUT / OUTPUT** | Lo que le llega a un nodo / lo que entrega. | Izquierda y derecha de la ventana del nodo. |
| **Parameters** | La configuración de un nodo: lo que le pedimos que haga. | El medio de la ventana del nodo. |
| **Fixed / Expression** | Texto fijo / texto que mezcla casilleros que vienen de antes. | `Hola {{ $json.nombre }}` |
| **Expresión** | Lo que va entre `{{ }}`: "acá va el valor de este casillero". | `{{ $json.ciudad }}` |
| **`$json`** | "El dato que le llegó a este nodo". | `$json.nombre` = el nombre que llegó. |
| **Execute step** | Ejecutar solo un nodo, para probarlo. | Botón arriba en la ventana del nodo. |
| **Execute workflow** | Ejecutar el flujo entero. | Botón abajo en el medio del canvas. |
| **Save** | Guardar el flujo. | Ctrl + S. |
| **Publish** | Publicar: dejar el flujo funcionando solo, siempre atento. | Necesario para la Production URL. |
| **Executions** | El historial de cada vez que corrió el flujo. | Pestaña arriba en el medio. |
| **Webhook** | Una dirección de internet que, al tocarla, arranca el flujo. | `.../webhook-test/saludo` |
| **Parámetros (en la dirección)** | Datos que van después del `?`, de a pares `casillero=valor`, separados con `&`. | `?nombre=Ana&destino=Mendoza` |
| **query** | El casillero donde n8n pone los parámetros de la dirección. | `{{ $json.query.nombre }}` |
| **GET** | El pedido de "dame": lo que hace el navegador al abrir una dirección. | Abrir una página. |
| **POST** | El pedido de "te mando datos": lleva los datos adentro (*body*). | Lo que hace un formulario de una web. |
| **Respond** | Cuándo contesta el webhook: *Immediately* o *When Last Node Finishes*. | When Last Node Finishes, para ver el mensaje. |
| **Test URL / Production URL** | Dirección de prueba (una vez por clic) / dirección de verdad (con Publish). | `webhook-test/...` / `webhook/...` |
| **On form submission** | Trigger que arma un formulario y arranca cuando alguien lo manda. | El flujo 03. |
| **Postman** | Aplicación para probar direcciones de internet mandándoles pedidos. No la usamos. | GET + dirección + *Send*. |
