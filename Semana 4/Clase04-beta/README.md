# Clase 4 (beta) · Volver a las bases: Docker, n8n y tu primer flujo

| | |
|---|---|
| **Para qué es esta clase** | Retomar desde cero lo que en la Clase 3 no quedó claro: dónde corre n8n, qué es automatizar, qué es un workflow, cómo se arma y cómo le llegan los datos. |
| **Duración** | Una clase de 2 horas. El guion tiene material para ~143 minutos: alcanza de sobra para las 2 horas, y si el tiempo no da, hay una lista de qué recortar (debajo de la Agenda). La parte de API queda para la clase siguiente. |
| **Qué se lleva cada alumno** | n8n abierto en su computadora (o en la nube), y seis flujos chicos vistos paso a paso: un saludo, un webhook, un formulario que guarda en Google Sheets, dos IF y un Switch. |
| **Qué necesitás** | Docker Desktop con n8n instalado (el de la Semana 2), el navegador, los seis flujos de la carpeta [n8n/](n8n/), y para el flujo 03 una planilla de Google Sheets y tu credencial de Google ya conectada. |
| **Probado en** | n8n 2.46.6 en Docker (noviembre 2026). Los flujos 01, 02, 04, 05 y 06 se ejecutaron y dieron el resultado que dice este guion, igual que los mensajes de error del webhook y del formulario. Del 03 se probó el formulario y el armado de los datos; el paso a Google Sheets no (hace falta una cuenta de Google conectada). Los nombres de los botones salen del código de n8n y de las clases anteriores; conviene hacer los clics una vez antes de la clase. |

**Cómo leer este guion**

- <span style="color:#1a7f37">El texto en verde</span> es lo que decís en voz alta, más o menos con esas palabras.
- **Para explicar** desarrolla cada idea, con un *Ejemplo* para cada punto. Está pensado para que el alumno que
  vuelva a ver la grabación entienda todo aunque no sepa ninguna palabra técnica.
- **En n8n, paso a paso** son los clics exactos, para hacerlos despacio en tu pantalla compartida, explicando cada
  uno.
- Los bloques que empiezan con `PARA EL CHAT` se pegan en el chat de la clase, tal cual.

---

## A tener en cuenta

- **Por qué esta clase existe.** En la Clase 3 muchos se perdieron: aparecieron IF, Switch y Merge antes de tener
  firme qué es un nodo o cómo se pasa un dato de uno a otro. Esta clase va más lento, con ejemplos muy chicos.
- **Regla de oro: la clase no se frena por problemas puntuales.** Son muchos y siempre alguien se queda: en la
  Clase 3 se perdió mucho tiempo resolviendo casos de a uno, se retrasó todo y nadie quedó contento. Hoy la clase
  avanza siempre, al mismo ritmo para todos:
  - **Vos mostrás despacio.** Cada ejemplo se hace en tu pantalla, un clic por vez, diciendo qué apretás y por qué.
    Al terminar un ejemplo, lo resumís en una frase antes de pasar al siguiente.
  - **Ellos eligen:** te siguen en su n8n, o solo miran y lo hacen después con la grabación. Las dos opciones están
    bien, y se dice en voz alta al principio.
  - **Las dudas generales** ("¿qué es un nodo?", "¿por qué se puso verde?") se responden en el momento, para todos:
    si uno lo pregunta, seguro hay otros con la misma duda.
  - **Los problemas puntuales** ("a mí no me abre Docker", "me sale un error") no se resuelven en clase. Se anotan en
    el chat y se ven al final, si sobra tiempo, o en una consulta aparte. Si Romina puede, que los vaya atendiendo
    en el chat sin frenar la clase.
  - **El respaldo:** este README tiene todos los clics, y en la carpeta [n8n/](n8n/) están los flujos ya armados.
    Nadie se queda sin el material aunque se haya trabado.
- **Pensado para volver a ver la clase.** Cada ejemplo se hace completo y sin saltos, y cada palabra nueva se explica
  la primera vez que aparece. Así, quien se perdió en vivo puede seguir la grabación paso a paso con este README al
  lado.
- **Postman se explica pero no se usa.** En clases anteriores no se entendió. Acá se cuenta qué es y para qué sirve
  (para que no se asusten si lo ven en un tutorial), pero los datos se mandan con el navegador y con un formulario
  de n8n, que no necesitan instalar nada.
- **Si alguien no tiene n8n funcionando,** no se arregla en clase: se crea la prueba gratis de n8n en la nube (14
  días) y sigue la clase desde ahí. La instalación local se arregla después, con la guía de la Semana 2
  ([../../Semana 2/instalar-n8n-local.md](../../Semana%202/instalar-n8n-local.md)).
- **Tu n8n de demostración** ya usa el nombre `n8n_local` y el puerto 5678. Mostrá ese.
- **Es una sola clase de 2 horas.** El guion tiene material para ~143 minutos, a propósito: mejor que sobre a que
  falte. Si vas bien de tiempo, se da todo; si no, recortás con la lista de abajo de la Agenda. Lo que no llegues a
  dar del Bloque 6 queda para empezar la clase siguiente (los flujos 04, 05 y 06 ya están armados en [n8n/](n8n/)).
  **API no entra en esta clase:** se da en la siguiente.

---

## Agenda de esta parte

| Min | Tramo | Qué pasa |
|---|---|---|
| 0–5 | Apertura | Qué vamos a hacer hoy y por qué vamos más despacio |
| 5–25 | **Bloque 1 · Docker y n8n en tu computadora** | Qué es Docker y cuándo se usa, cómo se trajo n8n, por qué local no sirve para un negocio, la alternativa en la nube |
| 25–42 | **Bloque 2 · Qué es automatizar y qué es n8n** | Las ideas antes de los clics, qué es un nodo, qué anda en local (resumen), y las palabras de n8n en castellano y en inglés |
| 42–55 | **Bloque 3 · Recorrido por n8n** | Dónde está cada cosa: workflow, canvas, nodo, botones; y el trigger, explicado desde la vida diaria |
| 55–97 | **Bloque 4 · Tu primer flujo** | El primer nodo, la ventana de Edit Fields, qué es un dato, dónde quedan los datos, pasar datos, cambiar los valores, romperlo a propósito, y cómo guardarlo y empezar otro: un saludo (flujo 01) |
| 97–118 | **Bloque 5 · Cómo le llegan los datos a n8n** | Webhook desde el navegador (flujo 02) y formulario que guarda en Google Sheets (flujo 03) |
| 118–140 | **Bloque 6 · Que el flujo decida** | IF con horario (flujo 04), IF con una cuenta (flujo 05) y Switch con lista desplegable (flujo 06) |
| 140–143 | Cierre | Mini repaso en el chat |

**Si el tiempo se aprieta** (para terminar en 120 minutos hay que ahorrar unos 23), recortá en este orden:

| Orden | Qué recortás | Cómo | Ahorrás |
|---|---|---|---|
| 0 | Que el navegador muestre solo el saludo (flujo 02b, opcional) | Lo saltás: el saludo ya se vio en JSON | ~4 min |
| 1 | IF 2 (flujo 05) | Lo mostrás ya importado y lo probás con los dos montos, sin armarlo | ~4 min |
| 2 | El formulario con Google Sheets (flujo 03) | Lo mostrás ya armado: completás el formulario y mostrás la fila nueva en la planilla | ~4 min |
| 3 | El Switch (flujo 06) | Lo mostrás ya importado: elegís dos tipos en el formulario y mostrás por qué salida pasa cada uno | ~4 min |
| 4 | IF 1 (flujo 04) | Queda para el comienzo de la clase siguiente; hoy solo se explica *Qué es un IF* | ~6 min |
| 5 | El error 2 del Paso 6 (el silencioso) | Lo contás en una frase: "si escribís mal el casillero, sale vacío, no rojo" | ~2 min |
| 6 | El recorrido por la pestaña Executions | Se nombra; se ve en la grabación de la clase siguiente | ~1 min |
| 7 | La tabla de palabras en castellano y en inglés (Bloque 2) | La pegás en el chat y decís "está en el README" | ~2 min |

Con los cortes 1 a 4 ya llegás a ~125 minutos; con los siete, a ~120. Lo último que se recorta es el Bloque 4: si no
ven el primer flujo armado completo y despacio, el resto no se entiende.
La tabla de otras cajas de Docker, el detalle de qué anda en local y Postman ya están en
[Para leer en casa](#para-leer-en-casa-no-se-da-en-clase).

---

## Preparación (antes de la clase)

- [ ] Docker Desktop abierto y el contenedor `n8n_local` prendido (punto verde en **Containers**).
- [ ] `http://localhost:5678` abierto en el navegador, con tu usuario ya logueado.
- [ ] Importá los seis flujos de la carpeta [n8n/](n8n/) (los vas a usar de respaldo): workflow nuevo → menú **…**
      (arriba a la derecha) → **Import from File…** → elegís el archivo → **Save**.
  - `01-mi-primer-flujo.json`: trigger manual → *Datos del cliente* → *Armar el saludo*.
  - `02-webhook-desde-el-navegador.json`: Webhook (GET, dirección `saludo`) → *Armar la respuesta*.
  - `02b-webhook-saludo-en-el-navegador.json`: el mismo, con *Respond to Webhook* al final, para que el navegador
    muestre solo el saludo (dirección `saludo-lindo`).
  - `03-formulario.json`: n8n Form Trigger (dirección `consulta-viaje`) → *Ordenar los datos* → *Guardar en la
    planilla* (Google Sheets).
  - `04-if-fin-de-semana.json`: Schedule Trigger → IF → dos mensajes.
  - `05-if-descuento.json`: Webhook (GET, dirección `presupuesto`) → IF → con o sin descuento.
  - `06-switch-por-tipo.json`: n8n Form con lista desplegable (dirección `consulta-tipo`) → Switch → cuatro áreas.
- [ ] **Para el flujo 03:** creá la planilla "Consultas de la agencia" con los títulos `fecha`, `nombre`, `destino`,
      `personas` en la fila 1. En el nodo *Guardar en la planilla*, elegí tu credencial de Google Sheets y pegá el
      link de la planilla. Probalo una vez y borrá la fila de prueba.
- [ ] Ejecutá cada uno una vez para ver que anden (lo que tiene que salir está en cada bloque).
- [ ] Tené abierta en otra pestaña la página de n8n Cloud (`n8n.io`), para mostrar la alternativa gratuita.
- [ ] Tené a mano los bloques `PARA EL CHAT` de este guion en un bloc de notas.
- [ ] Mandales antes de la clase un mensaje: *"Para la clase, prendan Docker Desktop y n8n antes de entrar. Si no
      les anda, créense la prueba gratis de n8n en n8n.io (14 días) y sigan la clase desde ahí. Y si no llegan a
      nada, no pasa nada: pueden mirar la clase y hacerlo después con la grabación."*

---

## 0–5 · Apertura

<p style="color:#1a7f37">Hola a todos. Hoy vamos a hacer algo distinto: vamos a volver a las bases. La clase pasada fuimos rápido y varios se quedaron con dudas, y es lógico: aparecieron muchos nodos juntos antes de tener firme lo más básico. Así que hoy vamos despacio, paso a paso, y todo lo hacemos juntos.</p>

<p style="color:#1a7f37">El plan es este. Primero, dónde vive n8n en su computadora: qué es Docker y cómo se prende. Después, qué es automatizar y qué es n8n, sin tocar nada. Después, un recorrido por la pantalla de n8n para saber dónde está cada cosa. Y después armamos nuestro primer flujo, muy chiquito, y aprendemos cómo le llegan los datos a n8n desde afuera.</p>

<p style="color:#1a7f37">Cómo vamos a trabajar hoy. Yo voy a ir mostrando todo en mi pantalla, despacio, un clic por vez, explicando cada cosa. Ustedes pueden seguirme en su n8n, o solo mirar y hacerlo después con la grabación: las dos formas están bien. Todo esto queda grabado, y en el material están todos los pasos, uno por uno.</p>

<p style="color:#1a7f37">Y un acuerdo, para que la clase avance para todos. Si tienen una duda sobre lo que estoy explicando, pregunten: seguro le sirve a otro. Pero si a alguien le aparece un problema propio, un error en su computadora, Docker que no abre, lo anotan en el chat y lo vemos al final o en una consulta aparte. Si frenamos la clase por cada caso, no llegamos a ver lo importante. Nadie se queda afuera: está todo grabado y en el material.</p>

Para explicar:
- **Volver a las bases no es retroceder.** En automatización, todo lo que viene (IF, Switch, APIs, inteligencia
  artificial) se apoya en tres ideas: qué es un nodo, cómo se conectan y cómo pasan los datos. Si eso está firme, lo
  demás es sumar piezas.
  - *Ejemplo:* Es como aprender a manejar: si no tenés claro el embrague, no tiene sentido salir a la ruta. Hoy
    practicamos el embrague.
- **Seguir o mirar: las dos sirven.** No hay que tomar apuntes de los clics: están todos en este material. El que
  quiera, lo hace a la par; el que prefiera, mira con atención y lo hace después, tranquilo, con la grabación.
  - *Ejemplo:* "Si se les traba algo mientras me siguen, no se queden peleando con eso: suelten el mouse, miren
    cómo lo hago yo, y después lo repiten con el video".
- **Dudas generales sí, problemas puntuales al final.** Una duda sobre la idea le sirve a todos. Un error de una
  computadora en particular lleva tiempo, y mientras tanto el resto espera.
  - *Ejemplo:* "¿Por qué el nodo se puso gris?" se responde ahora. "A mí Docker me dice Engine stopped" se anota en
    el chat y se ve al final.

---

## 5–25 · Bloque 1 · Docker y n8n en tu computadora

### Qué es Docker (5 min)

Abrís Docker Desktop y lo mostrás en pantalla compartida, en la pestaña **Containers**.

<p style="color:#1a7f37">Esto que ven es Docker Desktop. Docker es un programa que sirve para correr otros programas adentro de una caja. Esa caja trae todo lo que el programa necesita para funcionar, ya armado. Así no tenemos que instalar n8n pieza por pieza: bajamos la caja, la prendemos, y anda.</p>

<p style="color:#1a7f37">¿Por qué existe esto? Porque instalar un programa como n8n "a mano" es un lío. n8n necesita otro programa abajo para funcionar, que se llama Node, y en una versión exacta. Y ese necesita otras piezas. Si a uno le falta una, o tiene otra versión, no anda. Es el famoso "en mi computadora funciona y en la tuya no". Docker resuelve eso: la caja viene con todas las piezas adentro, en la versión justa, y funciona igual en la computadora de cada uno.</p>

<p style="color:#1a7f37">Fíjense: acá hay una fila que dice n8n, con un punto verde. Esa es la caja de n8n, prendida. Docker es la estantería; n8n es una de las cajas que hay en la estantería. Y en esa estantería se pueden poner otras cajas, con otros programas: una base de datos, una página web, una inteligencia artificial. Cada una en su caja, sin mezclarse.</p>

Para explicar:
- **El problema que resuelve: "en mi computadora anda".** Un programa casi nunca viene solo: necesita otros
  programas abajo (a eso se le dice **dependencias**, "de lo que depende"). Instalar todo a mano, en la versión
  justa, en Windows, Mac o Linux, es largo y se rompe fácil. Con Docker, el que hizo el programa ya dejó todo armado
  en la caja.
  - *Ejemplo:* Es como una mudanza: en vez de llevar cada plato suelto en el auto, los embalás en una caja con su
    papel. La caja llega igual a cualquier casa.
  - *Ejemplo:* n8n por dentro necesita Node en una versión exacta. Con Docker no tuvimos que instalar Node: venía
    en la caja.
- **Cuándo se usa Docker.** Cuando querés usar un programa que es un "servidor" (algo que queda prendido atendiendo,
  como n8n) sin complicarte con la instalación; cuando querés probar algo sin ensuciar tu computadora; y cuando
  querés que funcione igual en todos lados.
  - *Ejemplo:* Probar un programa: lo bajás, lo prendés, no te gustó, lo borrás. Tu computadora queda como estaba,
    sin restos instalados por todos lados.
  - *Ejemplo:* Las empresas usan Docker para llevar el mismo programa de la computadora del programador a sus
    servidores en internet. Si anda en la caja, anda en todos lados.
- **Cuándo no hace falta.** Los programas de todos los días (el navegador, Word, Spotify) se instalan normal. Docker
  es para programas tipo servidor, que en general no tienen un instalador simple.
  - *Ejemplo:* En la Semana 7 vamos a instalar Ollama (la IA local) con su instalador normal, no con Docker, porque
    así usa mejor la placa de video. Existe la caja de Ollama, pero no la necesitamos.

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

**¿Qué otras cajas se pueden traer, además de n8n?** Se cuenta en una frase: cualquier programa que tenga su
imagen publicada en Docker Hub (una base de datos, una página web, una IA local…), y todas se traen igual: buscar,
*Pull*, *Run*. La tabla con ejemplos está en [Para leer en casa](#para-leer-en-casa-no-se-da-en-clase).

### Cómo se prende n8n (y cómo lo instalamos) (6 min)

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

**Repaso: cómo lo trajimos la primera vez** (lo contás mostrando cada pantalla; no se instala de nuevo). La
instalación completa, con WSL y los problemas típicos, está en la guía de la Semana 2
([../../Semana 2/instalar-n8n-local.md](../../Semana%202/instalar-n8n-local.md)).

<p style="color:#1a7f37">Les muestro de dónde salió nuestra caja de n8n, porque es el mismo camino para cualquier otra. Fueron dos momentos: primero traer la imagen, el molde, desde internet; y después, desde la pestaña Images, armar la caja con ese molde.</p>

```text
EN DOCKER · Momento 1: traer la imagen (se hace UNA sola vez)
1. Crear una carpeta "n8n" en el Escritorio (clic derecho → Nuevo → Carpeta). Ahí n8n va a guardar tus flujos.
2. En Docker Desktop, arriba, el buscador (dice Search; también se abre con Ctrl + K)
3. Escribir:  n8nio/n8n   → en los resultados aparece n8nio/n8n, con el logo de n8n
4. Botón  Pull  ("traer"): la baja de Docker Hub. Tarda unos minutos (pesa unos 2 GB)
5. Cuando termina, pestaña  Images  (a la izquierda): aparece la fila
     n8nio/n8n    Tag: latest    Size: ~2 GB
```

Mostrás en tu Docker Desktop la pestaña **Images** con la fila `n8nio/n8n`, y el buscador con `n8nio/n8n` escrito
(si apretás **Pull**, como ya la tenés, solo la actualiza).

<p style="color:#1a7f37">Esta es la pestaña Images: acá quedan los moldes que bajamos. La de n8n dice latest, que quiere decir "la última versión". Esto todavía no es n8n funcionando: es la caja cerrada, guardada en el estante. Para abrirla, está el botón de play de esta fila.</p>

```text
EN DOCKER · Momento 2: armar la caja desde Images (se hace UNA sola vez)
1. Pestaña Images → fila n8nio/n8n → botón ▶ (Run, "correr"), a la derecha
2. Se abre "Run a new container" (correr un contenedor nuevo). ANTES de apretar Run,
   abrir  Optional settings  y completar:
     Container name:   n8n                        (el nombre de la caja)
     Host port:        5678                       (el número de puerta en tu computadora)
     Host path:        la carpeta n8n del Escritorio   (botón … para elegirla)
     Container path:   /home/node/.n8n            (el cajón de n8n adentro de la caja)
3. Run → Docker salta a la pantalla del contenedor y muestra los Logs (lo que va haciendo)
4. Esperar a que los Logs digan:  Editor is now accessible via http://localhost:5678
5. Abrir el navegador en http://localhost:5678 → la primera vez pide crear tu usuario
   (Set up owner account: mail, nombre y contraseña)
6. Desde ese día, la caja vive en la pestaña Containers: ahí se prende y se apaga
```

Para explicar:
- **Docker Hub es de donde salen las imágenes.** Es una página (hub.docker.com) donde las empresas publican sus
  cajas. El buscador de Docker Desktop busca ahí. No hace falta crearse una cuenta para bajar imágenes.
  - *Ejemplo:* `n8nio/n8n` se lee "la imagen n8n de la cuenta n8nio", como `@n8nio` en Instagram.
- **Pull = traer el molde.** Baja la imagen a tu computadora y la deja en **Images**. No prende nada todavía.
  - *Ejemplo:* Es como descargar un instalador: lo tenés, pero el programa todavía no está abierto.
- **El tag dice qué versión es.** `latest` es "la última". Se podría pedir una versión exacta, pero para el curso
  alcanza con la última.
  - *Ejemplo:* `n8nio/n8n:latest` es la última; `n8nio/n8n:2.46.6` sería esa versión exacta.
- **Run desde Images arma una caja nueva.** Por eso se hace una sola vez. Si se vuelve a hacer, se arma otra caja
  aparte (vacía, sin tu usuario si apunta a otra carpeta), y hasta puede chocar con la primera por el puerto.
  - *Ejemplo:* La segunda vez Docker avisa `port is already allocated` ("el puerto ya está ocupado"): la primera
    caja ya está usando el 5678.
- **Optional settings no es opcional para nosotros.** Sin el puerto, n8n arranca pero no se puede entrar desde el
  navegador. Sin la carpeta, los flujos quedan adentro de la caja y se pierden si la caja se borra.
  - *Ejemplo:* La carpeta es como sacar las fotos del celular a un pendrive: si cambiás de celular, las fotos
    siguen en el pendrive.
- **Los Logs son el diario de la caja.** Ahí se ve lo que va haciendo el programa. Si algo no anda, es lo primero
  que se mira.
  - *Ejemplo:* Mientras dice "Initializing", todavía está arrancando: hay que esperar. Cuando dice *Editor is now
    accessible*, ya se puede entrar.

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

### Por qué local, y la alternativa en la nube (4 min)

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

### ¿Y si quiero usar n8n local para un negocio? (3 min)

<p style="color:#1a7f37">Una pregunta que siempre aparece: si el local es gratis, ¿lo puedo usar para mi negocio? Para aprender y para probar, perfecto. Para un negocio de verdad, no les va a funcionar. Y no es por n8n: es por dónde está corriendo, que es su computadora.</p>

<p style="color:#1a7f37">Piensen qué necesita un negocio: que el flujo atienda a cualquier hora, los siete días, aunque ustedes estén durmiendo o de vacaciones. Y que lo puedan tocar desde afuera: un cliente que completa el formulario de la web, Mercado Pago que avisa un pago, un WhatsApp que entra. Su computadora no cumple ninguna de las dos cosas.</p>

Para explicar:
- **Tiene que estar prendida todo el tiempo.** Si apagás la computadora, la suspendés o cerrás Docker, n8n se
  apaga. Todo lo que llegue en ese rato se pierde: nadie lo atiende.
  - *Ejemplo:* Un cliente completa el formulario de la agencia a las 2 de la mañana. Tu notebook está cerrada: la
    consulta no entra a ningún lado y el cliente nunca recibe respuesta.
  - *Ejemplo:* Windows se actualiza solo y reinicia la computadora a la noche. Hasta que alguien abra Docker,
    no funciona nada.
- **Desde internet no se la puede encontrar.** `localhost` quiere decir "esta computadora": es una dirección que no
  sale a internet. Las aplicaciones de afuera (Mercado Pago, WhatsApp, el formulario de una página web) no pueden
  tocar tu webhook, porque no saben llegar a tu computadora.
  - *Ejemplo:* Le das a Mercado Pago la dirección `http://localhost:5678/webhook/pagos`. Cuando entra un pago,
    Mercado Pago busca "localhost"… en su propia computadora, no en la tuya. El aviso nunca te llega.
  - *Ejemplo:* Por eso hoy probamos el webhook desde *nuestro* navegador: es la única forma de que funcione en local.
- **Depende de tu internet, tu luz y tu equipo.** Si se corta internet, se corta la luz o se rompe el disco, el
  negocio se frena. Y si se rompe la computadora sin copia, se pierden los flujos.
  - *Ejemplo:* Un corte de luz de dos horas en el barrio = dos horas de consultas sin respuesta.
- **Es tu computadora de todos los días.** Si n8n está atendiendo clientes, no la podés llevar, apagar ni usar
  tranquilo para otra cosa pesada.
  - *Ejemplo:* Te llevás la notebook a un viaje en avión: el negocio queda sin atención todo el vuelo.
- **Qué se usa entonces para un negocio:** n8n tiene que vivir en una computadora que esté siempre prendida y
  conectada a internet. Hay dos caminos: **n8n Cloud** (pagando un plan: n8n se ocupa de todo) o un **servidor
  propio en internet** (una computadora alquilada, que se llama *VPS*, con n8n instalado en Docker, igual que hoy).
  El segundo es más barato pero hay que saber mantenerlo.
  - *Ejemplo:* Para aprender: n8n local, gratis. Para el negocio: lo mismo que armaron, llevado a la nube o a un
    servidor. Los flujos se exportan e importan igual, no hay que rehacerlos.

### Si no te anda Docker o no tenés computadora propia (2 min)

<p style="color:#1a7f37">Y para el que no pudo instalar Docker, o tiene una computadora que no le da, o directamente no tiene una computadora propia para el curso: también hay una salida. n8n Cloud funciona desde el navegador, así que sirve cualquier computadora: la del trabajo, la de un familiar. Se crean la cuenta de prueba, trabajan los 14 días, y antes de que se venza se descargan todo lo que hicieron.</p>

Para explicar:
- **Arrancar con una cuenta de prueba.** Se crean la cuenta en `n8n.io` con su mail, y siguen el curso desde ahí.
  Como es en el navegador, no hace falta instalar nada ni tener una computadora potente.
  - *Ejemplo:* Alguien que usa la computadora de la oficina, donde no le dejan instalar programas, entra a
    `tunombre.app.n8n.cloud` y trabaja igual.
- **Antes de que se venza, descargar cada flujo.** Hacia el día 12 o 13, abren cada flujo y lo descargan: menú
  **…** (arriba a la derecha) → **Download**. Se baja un archivo `.json` por flujo. Lo guardan en una carpeta (o en
  su mail, o en Google Drive) para no perderlo.
  - *Ejemplo:* Una carpeta "Curso n8n" con `mi-primer-flujo.json`, `webhook-desde-el-navegador.json`, etc.
- **Seguir en otro lado e importar.** Con esos archivos, siguen donde puedan: en un n8n local si consiguieron una
  computadora, o en una cuenta nueva. En el n8n nuevo: workflow nuevo → menú **…** → **Import from File…** → eligen
  el archivo → **Save**. El flujo aparece igual que antes.
  - *Ejemplo:* Terminan los 14 días, abren su cuenta nueva, importan los cinco archivos, y siguen con la clase de esa
    semana.
- **Lo que no viaja con el archivo: las claves.** El archivo trae los nodos y las flechas, pero no las
  **credenciales** (las contraseñas y claves para conectarse a Gmail, Google Sheets, etc.). En el n8n nuevo hay que
  volver a crearlas y elegirlas en cada nodo. El historial de ejecuciones tampoco viaja.
  - *Ejemplo:* Un flujo que manda mails por Gmail se importa bien, pero el nodo de Gmail aparece con un aviso hasta
    que le vuelven a conectar su cuenta de Google.

**Nota para vos (no se lee en clase):** abrir una cuenta de prueba nueva con otro mail funciona técnicamente, pero
no encontré en las condiciones de n8n si está permitido repetir la prueba. Antes de recomendarlo en voz alta,
conviene revisar sus términos de uso. La opción segura para el que no tiene computadora propia es: prueba de 14
días para las primeras clases, y mientras tanto conseguir una computadora donde instalar n8n local (la guía de la
Semana 2), o que lo decida cada alumno. Si se vence, igual tienen 90 días para descargar los flujos.

`PARA EL CHAT`:

```text
PARA EL CHAT · ¿Cómo van a seguir la clase?
Escriban en el chat:
  1 → tengo n8n abierto en localhost:5678
  2 → no me anda Docker (me creo la prueba gratis en n8n.io)
```

No esperás a que todos respondan: es para saber cómo está la clase. A los que escriban 2 les decís que se creen
la cuenta mientras vos seguís con el Bloque 2, que es teoría y no necesita tocar nada. Si a alguien no le sale
crear la cuenta, que mire la clase y lo haga después: no se resuelve en vivo.

---

## 25–42 · Bloque 2 · Qué es automatizar y qué es n8n

### Qué es automatizar (5 min)

<p style="color:#1a7f37">Antes de tocar nada, la idea. Automatizar es lograr que una tarea que hacemos a mano, siempre igual, se haga sola. La palabra clave es "siempre igual": si una tarea tiene pasos fijos, se puede automatizar.</p>

<p style="color:#1a7f37">Piensen en una agencia de viajes. Cada vez que llega una consulta por la web, alguien la copia en una planilla, le manda un mail al cliente diciendo "recibimos tu consulta", y le avisa al vendedor. Todos los días, cien veces, los mismos pasos. Eso es lo que una automatización hace sola.</p>

Para explicar:
- **Automatizar es que una computadora haga una tarea repetitiva, siguiendo pasos fijos, sin que una persona la
  haga a mano cada vez.** No es magia ni inteligencia: es una receta que la computadora sigue al pie de la letra.
  - *Ejemplo:* El débito automático de la luz: todos los meses, el mismo día, se paga sola. Nadie entra al home
    banking.
- **Toda automatización tiene tres partes: algo que la dispara, unos pasos, y un resultado.** n8n está en inglés,
  así que cada parte tiene su nombre en castellano y el que van a ver en la pantalla:
  - **Disparador** = ***trigger*** (se dice "tríguer"). Es "lo que pasa" y arranca todo: llegó un mail, son las 9 de
    la mañana, alguien completó un formulario. En n8n es siempre el primer nodo.
  - **Pasos** = ***nodes*** ("nodos"); a los que hacen algo en otra aplicación se les dice ***actions***
    ("acciones"). Es lo que se hace con eso que pasó: guardar, armar un mensaje, mandarlo.
  - **Resultado** = ***output*** ("salida"). Es lo que queda al final: una fila en una planilla, un mensaje mandado.
  - *Ejemplo:* "Cuando llega una consulta (**disparador** / *trigger*) → la guardo en la planilla y le respondo al
    cliente (**pasos** / *nodes*) → el cliente tiene su respuesta y la consulta quedó anotada (**resultado** /
    *output*)".
  - *Ejemplo:* "Todos los lunes a las 9 (**disparador** / *trigger*: *Schedule*, "horario") → busco las ventas de la
    semana y armo un resumen (**pasos** / *nodes*) → al dueño le llega un mail con el resumen (**resultado** /
    *output*)".
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

### Qué es n8n y qué es un nodo (8 min)

<p style="color:#1a7f37">n8n es la herramienta donde armamos esas recetas. En vez de escribir código, ponemos cajitas en una pantalla y las unimos con flechas. Cada cajita hace una cosa. Y las flechas dicen en qué orden.</p>

<p style="color:#1a7f37">Se pronuncia "n-eight-n", o "enéiten". Viene de la palabra nodemation, que tiene una n, ocho letras en el medio, y otra n. No hace falta acordarse: lo importante es que es una herramienta para automatizar uniendo piezas.</p>

Para explicar:
- **n8n es una herramienta para armar automatizaciones uniendo piezas, sin programar.** Cada pieza se llama
  **nodo** y hace una sola cosa: recibir un mail, leer una planilla, armar un mensaje, mandar un WhatsApp. Uniendo
  nodos se arma la receta completa.
  - *Ejemplo:* Es como armar con bloques de Lego: cada bloque es simple, pero encastrándolos armás una casa.

**Qué es un nodo, explicado desde cero** (3 min). Es la palabra más importante de la clase: conviene ir despacio.

<p style="color:#1a7f37">Paremos un momento en la palabra nodo, en inglés node, porque la vamos a usar toda la clase. Un nodo es una cajita que hace una sola tarea. Le llega algo, hace su tarea con eso, y entrega el resultado. Nada más. Un nodo no sabe hacer todo: sabe hacer una cosa, y la hace bien.</p>

<p style="color:#1a7f37">Piensen en una fila de personas pasándose baldes de agua para apagar un incendio. Cada persona recibe el balde de la de atrás y se lo pasa a la de adelante. Cada uno hace solo su parte, y entre todos llevan el agua de punta a punta. En n8n, cada persona es un nodo, y el balde son los datos.</p>

Para explicar:
- **Un nodo = recibe, hace una tarea, entrega.** Todos los nodos funcionan igual, sean del tipo que sean: les entra
  algo por la izquierda (la **entrada**, *input*), hacen su tarea, y sale algo por la derecha (la **salida**,
  *output*), que pasa al nodo siguiente.
  - *Ejemplo:* Una exprimidora: entran naranjas, exprime, sale jugo. No hace tostadas: para eso hay otro aparato.
  - *Ejemplo:* El nodo "armar el saludo": le entra el nombre "Ana", arma la frase, y entrega "Hola Ana, gracias por
    escribirnos".
- **Cada nodo hace una sola cosa.** Por eso un flujo tiene varios: uno para cada paso de la receta. Si un paso es
  muy grande, se parte en varios nodos.
  - *Ejemplo:* "Responder una consulta" no es un nodo: son varios. Uno recibe la consulta, otro arma el mensaje y
    otro lo manda por mail.
- **En la pantalla, un nodo es un cuadradito con un dibujo y un nombre.** El dibujo dice de qué es (el sobre de
  Gmail, la planilla verde de Sheets, el rayito de un disparador). Tiene un puntito a la izquierda (por donde
  entran los datos) y uno a la derecha (por donde salen). Con doble clic se abre para configurarlo.
  - *Ejemplo:* El nodo de Gmail tiene el logo de Gmail; el de WhatsApp, el logo verde de WhatsApp. Se reconocen sin
    leer.
- **Los nodos se configuran, no se programan.** Adentro de cada nodo hay casilleros para completar: a quién mandarle
  el mail, qué planilla leer, qué texto armar. Eso es todo lo que hay que decirle.
  - *Ejemplo:* En el nodo de Gmail completás "Para: cliente@mail.com", "Asunto: Recibimos tu consulta" y el texto.
    No hay que saber cómo funciona Gmail por dentro: el nodo ya lo sabe.
- **Hay tres grandes tipos de nodos**, según lo que hacen. Hoy alcanza con conocer los nombres; los vamos a ir
  viendo:
  - **Disparador** (*trigger*): el que arranca el flujo. Siempre va primero. *Ejemplo:* "cuando llega un mail".
  - **Acción** (*action*): hace algo en otra aplicación. *Ejemplo:* "mandá un WhatsApp", "agregá una fila en la
    planilla".
  - **Transformación** (*transform*): trabaja con los datos adentro de n8n, sin salir a ningún lado: los ordena,
    los cambia o arma un texto. *Ejemplo:* "armá el saludo con el nombre" (el nodo *Edit Fields* de hoy).
- **Un nodo solo no sirve de mucho: la gracia es unirlos.** Los nodos se unen con flechas, y por las flechas pasan
  los datos de uno al otro. Un nodo que no está unido a nada no recibe nada y no hace nada.
  - *Ejemplo:* La fila de los baldes: si una persona se corre de la fila, el agua no llega más allá de ella.

**Ejemplo: partir una tarea en nodos**

❌ Mal: pensar todo como un solo paso.

```text
Nodo: "Atender la consulta del cliente"
```

✅ Bien: un nodo por cada cosa que hay que hacer.

```text
Nodo 1 (disparador / trigger):       llega la consulta del formulario
Nodo 2 (transformación / transform): armar el mensaje "Hola Ana, recibimos tu consulta"
Nodo 3 (acción / action):            mandar el mensaje por mail
```

Por qué: un nodo hace una sola cosa. Si podés decir "y después…", es otro nodo.

- **n8n se conecta con cientos de aplicaciones.** Gmail, Google Sheets, WhatsApp, Telegram, Slack… Cada una tiene
  sus nodos ya armados. Y si alguna no tiene, igual hay forma de hablarle (lo vamos a ver más adelante, con el nodo
  *HTTP Request*).
  - *Ejemplo:* Hay un nodo de Gmail que manda mails, otro de Google Sheets que agrega filas. No hay que saber cómo
    funciona Gmail por dentro: el nodo ya lo sabe.
  - *Ejemplo:* Mercado Libre o Mercado Pago no tienen nodo propio en n8n. Igual se les puede hablar, con el nodo
    genérico *HTTP Request*: es más trabajo, pero se puede.
  - *Ojo:* que exista el nodo no quiere decir que funcione igual en n8n local y en la nube. Lo vemos ahora.
- **"Sin programar" no quiere decir "sin pensar".** n8n nos ahorra escribir código, pero los pasos los tenemos que
  pensar nosotros: qué dispara el flujo, qué se hace, en qué orden.
  - *Ejemplo:* n8n no sabe que la agencia quiere responder a cada consulta. Eso lo decidimos nosotros, y lo armamos.
- **Hay otras herramientas parecidas.** Make y Zapier hacen lo mismo con otra pantalla. Usamos n8n porque se puede
  tener gratis en la propia computadora y porque es de las más usadas en empresas.
  - *Ejemplo:* Si algún día trabajan con Zapier, las ideas de hoy (disparador, pasos, datos que pasan) son las
    mismas.

### ¿Todas las aplicaciones andan con n8n local? (2 min)

<p style="color:#1a7f37">Una pregunta clave: ¿puedo usar Gmail, Google Sheets o WhatsApp con mi n8n local? La respuesta corta: casi todo, sí, pero depende de para qué lado va el mensaje. Hay dos direcciones, y conviene tenerlas claras desde hoy.</p>

<p style="color:#1a7f37">Primera dirección: n8n sale a buscar o a mandar algo. Mandar un mail, escribir en una planilla, mandar un WhatsApp. Eso anda en local, porque es nuestra computadora la que sale a internet, como cuando abren una página. Segunda dirección: la aplicación le avisa a n8n que pasó algo. Entró un pago, llegó un WhatsApp. Eso no anda en local, porque desde internet nadie puede encontrar nuestra computadora: es el localhost que vimos recién.</p>

En resumen, para tener a mano:
- **n8n sale a hacer algo** (mandar, leer, escribir): ✅ anda en local. Solo pide la credencial de esa aplicación.
  Google (Gmail, Sheets) pide en local un paso extra: crear un permiso en Google Cloud Console, una sola vez.
- **La aplicación le avisa a n8n** (llegó un WhatsApp, entró un pago): ❌ no anda en local, porque desde internet
  nadie encuentra tu computadora.
- **Regla para todo el curso:** en cada ejemplo decimos si anda en local y si necesita algún paso extra.

La explicación completa y la tabla aplicación por aplicación están en
[Para leer en casa](#para-leer-en-casa-no-se-da-en-clase).

### Las palabras de n8n, en castellano y en inglés (2 min)

<p style="color:#1a7f37">n8n está en inglés, y los tutoriales también. Así que hoy cada palabra la vamos a decir en los dos idiomas: en castellano para entenderla, y en inglés porque es lo que van a ver en la pantalla. Les paso la lista por el chat para que la tengan a mano toda la clase.</p>

Pegás esta tabla en el chat (o les pasás el link a este README). No se lee entera en voz alta: se usa como
"machete" durante la clase, y cada palabra se explica cuando aparece.

| En castellano | En inglés (como aparece en n8n) | Qué es, en una frase |
|---|---|---|
| Flujo, automatización | ***Workflow*** | La receta completa: disparador + pasos + resultado |
| Nodo | ***Node*** | Una cajita que hace una sola cosa |
| Disparador | ***Trigger*** | El primer nodo, el que arranca el flujo |
| Disparar a mano | ***Trigger manually*** / *Manual Trigger* | Arranca cuando apretás un botón |
| Con horario | ***On a schedule*** / *Schedule Trigger* | Arranca solo, a una hora |
| Gancho web, "timbre" | ***Webhook*** (*web* = internet, *hook* = gancho) | Una dirección de internet que, al tocarla, arranca el flujo |
| Cuando mandan un formulario | ***On form submission*** / *n8n Form Trigger* | n8n arma un formulario y arranca cuando lo completan |
| Acción | ***Action*** | Un nodo que hace algo en otra aplicación (mandar un mail, agregar una fila) |
| Lienzo, mesa de trabajo | ***Canvas*** | La hoja donde se ponen y se unen los nodos |
| Conexión, flecha | ***Connection*** | Une un nodo con el siguiente; por ahí pasan los datos |
| Entrada / Salida | ***Input*** / ***Output*** | Lo que le llega a un nodo / lo que entrega |
| Configuración | ***Parameters*** | Lo que le pedimos al nodo que haga |
| Campo, casillero | ***Field*** (también *key*, "clave") | Cada dato de la ficha: nombre y valor |
| Editar campos | ***Edit Fields (Set)*** | El nodo que crea o cambia casilleros |
| Elemento, ficha | ***Item*** | Una ficha de datos que pasa por la flecha |
| Fijo / Expresión | ***Fixed*** / ***Expression*** | Texto que no cambia / texto que usa datos de antes |
| Ejecutar este paso | ***Execute step*** | Corre un solo nodo, para probarlo |
| Ejecutar el flujo | ***Execute workflow*** | Corre el flujo entero |
| Guardar / Publicar | ***Save*** / ***Publish*** | Guardar los cambios / dejarlo funcionando solo |
| Ejecuciones | ***Executions*** | El historial de cada vez que corrió el flujo |
| Respuesta | ***Respond*** / ***Response*** | Lo que el webhook le contesta al que lo tocó |
| Dirección de prueba / de verdad | ***Test URL*** / ***Production URL*** | `webhook-test/...` (una vez por clic) / `webhook/...` (con Publish) |
| Credenciales | ***Credentials*** | Las claves para conectarse a otras aplicaciones |

Para explicar:
- **No hace falta saber inglés.** Alcanza con reconocer estas palabras. Son siempre las mismas, en todos los
  flujos.
  - *Ejemplo:* Si en un video de YouTube dicen "add a trigger node", ya saben que es "agregá un disparador".
- **En el curso las vamos a decir de las dos formas.** A veces "disparador", a veces "trigger": es lo mismo.
  - *Ejemplo:* "El trigger, o sea el disparador, es el webhook".

---

## 42–55 · Bloque 3 · Recorrido por n8n: dónde está cada cosa

En este bloque no se arma nada todavía: se muestra la pantalla y se nombra cada parte, despacio. El que quiera,
lo va mirando en su n8n.

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

### El trigger: lo que arranca todo (6 min)

Es la idea que más cuesta. Se explica en tres pasos: primero con cosas de la vida diaria, después con la frase
"cuando pasa esto…", y recién al final con las opciones de n8n.

**Paso 1 · En la vida diaria**

<p style="color:#1a7f37">Antes de n8n, pensemos en cosas de todos los días que "arrancan solas". El despertador: suena cuando llegan las 7. La luz del pasillo con sensor: se prende cuando pasa alguien. El débito automático: se paga cuando llega el día 10. En todos los casos hay algo que pasa, y eso hace arrancar una acción. Ese "algo que pasa" es el disparador. En inglés, trigger.</p>

<p style="color:#1a7f37">Fíjense que el despertador no hace nada en todo el día: está esperando. Recién cuando llegan las 7, suena. Un trigger es exactamente eso: un nodo que espera, atento, a que pase una cosa. Y cuando pasa, arranca todo el flujo.</p>

| En la vida diaria | El disparador (*trigger*): "lo que pasa" | Lo que se hace después |
|---|---|---|
| Despertador | Llegan las 7 de la mañana | Suena la alarma |
| Luz con sensor | Pasa alguien por el pasillo | Se prende la luz |
| Timbre | Alguien toca el botón | Suena adentro y vas a abrir |
| Débito automático | Llega el día 10 del mes | Se paga la factura |
| Contestador del celular | Entra una llamada y no atendés | Suena el mensaje grabado |

**Paso 2 · El truco: buscar la palabra "cuando"**

<p style="color:#1a7f37">El truco para encontrar el trigger de cualquier automatización: díganla en voz alta empezando con la palabra "cuando". Lo que va después del "cuando" es el trigger. Lo que viene después de la coma son los pasos. Por ejemplo: "cuando alguien completa el formulario, le mando un mail". El trigger es "alguien completa el formulario". Mandar el mail no es el trigger: es lo que se hace después.</p>

```text
CUANDO  [esto pasa]            →   [hago esto]
        ↑ el trigger                ↑ los pasos (los otros nodos)

CUANDO  llega un mail          →   lo guardo en la planilla
CUANDO  son las 8 de la mañana →   mando el clima
CUANDO  aprieto el botón       →   pruebo el flujo
```

Para explicar:
- **Trigger (disparador) = la respuesta a "¿cuándo arranca?".** No hace el trabajo: solo dice "ahora". El trabajo lo
  hacen los nodos que vienen después.
  - *Ejemplo:* En "todos los días a las 8, mandá el clima", el trigger es "todos los días a las 8". Mandar el clima
    es otro nodo.
- **El error más común: confundir el trigger con lo que se hace.** Si la frase dice "mandar", "guardar",
  "responder", eso es una acción, no el disparador.
  - *Ejemplo:* "Mandar un WhatsApp" no puede ser el trigger. "Cuando llega un WhatsApp", sí.
- **Siempre es el primer nodo y está a la izquierda de todo.** En la pantalla tiene un dibujito de rayo o de
  "arranque". Sin trigger, el flujo no arranca nunca: es un despertador sin hora puesta.
  - *Ejemplo:* Por eso, en un flujo nuevo, lo primero que pregunta n8n es *What triggers this workflow?* ("¿qué
    dispara este flujo?").
- **El trigger espera; no hace falta estar mirando.** Una vez armado (y publicado), el trigger queda atento solo. Por
  eso la automatización funciona aunque nadie esté en la computadora.
  - *Ejemplo:* Un flujo con "todos los días a las 8" manda el clima aunque vos estés durmiendo (si n8n está
    prendido).
- **Cada ejecución arranca por un motivo.** Si querés que algo arranque "cuando llega un mail" y también "todos los
  lunes", lo más simple es armar dos flujos, cada uno con su disparador.
  - *Ejemplo:* "Responder mails" y "resumen de los lunes" son dos recetas distintas, con dos disparadores
    distintos.

**Paso 3 · Los triggers que ofrece n8n**

<p style="color:#1a7f37">Ahora sí, n8n. Apreto el más del canvas, y lo primero que me pregunta es: ¿qué dispara este flujo? Y me da opciones. Cada opción es un tipo de "cuando".</p>

Apretás el **+** del canvas (*Add first step*) y mostrás el panel que se abre, sin elegir nada todavía. Vas
señalando cada opción y diciendo su "cuando":

| En el panel de n8n (inglés) | En castellano | El "cuando…" | Ejemplo |
|---|---|---|---|
| ***Trigger manually*** | Disparar a mano | Cuando **yo aprieto el botón** | Probar el flujo mientras lo armo (el de hoy) |
| ***On a schedule*** | Con un horario | Cuando **llega una hora o un día** | Todos los días a las 8, mandar el clima |
| ***On webhook call*** | Cuando llaman al webhook | Cuando **alguien toca una dirección de internet** | Una página web le avisa a n8n (Bloque 5) |
| ***On form submission*** | Cuando mandan un formulario | Cuando **alguien completa un formulario de n8n** | Un cliente pide una cotización (Bloque 5) |
| ***On app event*** | Cuando pasa algo en una aplicación | Cuando **pasa algo en Gmail, Sheets, Telegram…** | Cuando llega un mail nuevo a Gmail |
| ***On chat message*** | Cuando llega un mensaje de chat | Cuando **alguien escribe en el chat de n8n** | Un asistente con IA (más adelante en el curso) |

**Ejemplo: encontrar el trigger**

❌ Mal: elegir el trigger por lo que se hace.

```text
"Quiero mandar un mail de bienvenida a cada cliente nuevo.
 El trigger es Gmail, porque mando un mail."
```

✅ Bien: preguntarse "¿cuándo arranca?".

```text
"CUANDO un cliente nuevo completa el formulario → le mando el mail de bienvenida.
 El trigger es el formulario (On form submission). Gmail es la acción, va después."
```

Por qué: el trigger es lo que *pasa*, no lo que *hacés*. Gmail aparece en el flujo, pero como paso, no como
disparador.

**Actividad: ¿cuál es el trigger?** Primero resolvés vos el número 1 en voz alta, usando el truco del "cuando", y
después pegás el resto en el chat. No esperás a que todos respondan: das la respuesta de cada una explicando el
porqué.

<p style="color:#1a7f37">Hagamos el primero juntos. "Todos los días a las 8 de la mañana, mandar el clima". Lo digo con cuando: cuando son las 8 de la mañana, mando el clima. Lo que va después del cuando es "son las 8": es un horario. El trigger es On a schedule. Y mandar el clima es lo que se hace después.</p>

`PARA EL CHAT`:

```text
PARA EL CHAT · ¿Cuál es el trigger? (truco: decilo empezando con "CUANDO…")
Opciones:  a) Trigger manually (a mano)          b) On a schedule (horario)
           c) On form submission (formulario)    d) On app event (algo en una aplicación)

1. Todos los días a las 8 de la mañana, mandar el clima.          ← lo hicimos juntos: b
2. Cuando alguien completa el formulario de consultas, avisarle al vendedor.
3. Quiero probar mi flujo ahora mismo, con un botón.
4. Cuando llega un mail nuevo a mi Gmail, guardarlo en una planilla.
5. Mandar un WhatsApp de cumpleaños a cada cliente, el día de su cumpleaños, a las 10.
```

Respuestas, explicadas:
- **1 → b) On a schedule.** "Cuando son las 8" es un horario. Mandar el clima es la acción.
- **2 → c) On form submission.** "Cuando alguien completa el formulario". Avisarle al vendedor es la acción.
- **3 → a) Trigger manually.** "Cuando yo aprieto el botón". Es el de probar.
- **4 → d) On app event** (el *Gmail Trigger*). "Cuando llega un mail". Guardar en la planilla es la acción.
- **5 → b) On a schedule.** Es la trampa: suena a WhatsApp, pero WhatsApp es lo que se *hace*. Lo que dispara es
  "todos los días a las 10": el flujo arranca a esa hora, busca quién cumple años hoy, y le manda el mensaje.

<p style="color:#1a7f37">¿Vieron la última? Parecía que el trigger era WhatsApp, pero no: WhatsApp es lo que hacemos. Lo que hace arrancar el flujo es el horario, todos los días a las 10. Siempre que duden, díganlo con "cuando".</p>

---

## 55–97 · Bloque 4 · Tu primer flujo: un saludo

Lo armás en vivo, despacio y completo, este flujo de tres nodos (el que quiera, lo arma a la par):

```text
Cuando hago clic  →  Datos del cliente  →  Armar el saludo
(trigger manual)     (Edit Fields)          (Edit Fields)
```

Lo que tiene que salir al final: `Hola Ana, gracias por escribirnos desde Córdoba.`

**¿Anda en local?** ✅ Sí, sin ningún paso extra: no usa credenciales ni sale a internet. Funciona igual en n8n
Cloud.

Si alguien se traba mientras te sigue, no frenás: que suelte el mouse y mire. Después puede rearmarlo con la
grabación, o importar el archivo `01-mi-primer-flujo.json` de la carpeta [n8n/](n8n/).

### Paso 1 · El primer nodo: el trigger manual (7 min)

Es el primer nodo que ven poner en su vida. Va despacio, en tres partes: **ponerlo**, **entender qué hace**, y
**aprender a agregarle nodos**.

#### 1a · Poner el primer nodo

<p style="color:#1a7f37">Vamos a armar el flujo más simple que existe. Tenemos la hoja en blanco, el canvas, con un cuadrado en el medio que tiene un más. Ese más dice Add first step: agregar el primer paso. Lo aprieto. Y fíjense qué me pregunta n8n primero: What triggers this workflow? ¿Qué dispara este flujo? Es lo que vimos recién: antes que nada, n8n quiere saber cuándo arranca.</p>

<p style="color:#1a7f37">Elijo la primera opción: Trigger manually, disparar a mano. Y listo: apareció nuestro primer nodo en el canvas. Es un cuadradito con un dibujo de un cursor, el de hacer clic, y un nombre largo en inglés: When clicking Execute workflow. Traducido: "cuando hacés clic en Ejecutar flujo". El nombre ya dice lo que hace.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 1a: poner el primer nodo
1. En el canvas vacío, clic en el +  (Add first step, "agregar el primer paso")
2. Se abre a la derecha el panel "What triggers this workflow?" (¿qué dispara este flujo?)
3. Clic en:  Trigger manually  (disparar a mano)
4. Aparece el nodo en el canvas, con el dibujo de un cursor:
     When clicking 'Execute workflow'   ("cuando hacés clic en Ejecutar flujo")
5. Abajo en el medio del canvas apareció el botón  Execute workflow  (ejecutar flujo)
6. Cambiale el nombre: clic derecho en el nodo → Rename → escribí  Cuando hago clic  → Enter
   (otra forma: hacé un clic en el nodo para seleccionarlo y apretá F2)
```

#### 1b · Qué hace y para qué sirve

<p style="color:#1a7f37">¿Qué hace este nodo? Una sola cosa: cuando aprieto el botón Execute workflow, de abajo, arranca el flujo. Nada más. No manda mails, no lee planillas, no trae datos. Es el botón de encendido. Pruébenlo: aprieto Execute workflow, y el nodo se pone verde. Funcionó. No hizo nada visible, porque todavía no tiene a quién pasarle la posta.</p>

Apretás **Execute workflow** y mostrás que el nodo se pone verde con un ✓. Hacés doble clic en el nodo y mostrás su
OUTPUT.

<p style="color:#1a7f37">Si lo abro con doble clic, a la derecha, en Output, la salida, dice que entregó un item, una ficha, pero vacía: sin casilleros. Es como un sobre sin carta. Este nodo no trae datos: solo da la señal de largada. Los datos los va a poner el nodo que sigue.</p>

Para explicar:
- **Qué hace: arranca el flujo cuando apretás *Execute workflow*.** Es el disparador (*trigger*) más simple: el
  "cuando" es "cuando yo aprieto el botón".
  - *Ejemplo:* Es el botón de encendido de la licuadora: no licúa, pero sin él no arranca nada.
- **Qué entrega: una ficha vacía.** Al ejecutarse, pasa al nodo siguiente un solo item sin casilleros. Sirve para
  que el siguiente nodo arranque.
  - *Ejemplo:* Como el "¡ya!" de una carrera de postas: no lleva la posta, pero hace salir al primer corredor.
- **Para qué sirve: para probar mientras armamos.** Con este trigger, vos decidís cuándo corre el flujo: lo armás,
  lo probás, cambiás algo, lo volvés a probar. Por eso es el primero que se aprende y el que más se usa mientras se
  construye.
  - *Ejemplo:* Es como probar una receta en tu cocina antes de abrir el restaurante: la hacés cuando querés, todas
    las veces que haga falta.
- **Para qué no sirve: para que el flujo funcione solo.** Un flujo con trigger manual solo corre cuando alguien
  aprieta el botón. Para que funcione solo, se cambia por otro trigger (un horario, un webhook, un formulario) y el
  resto del flujo queda igual.
  - *Ejemplo:* Armás y probás "mandar el resumen" con el trigger manual. Cuando anda, lo cambiás por *On a schedule*
    ("todos los lunes a las 9"), y ya funciona solo.
- **Ponerle nombre a cada nodo.** n8n les pone nombres en inglés y largos. Un nombre que diga qué hace ese nodo hace
  que el flujo se lea solo, sin abrir nada.
  - *Ejemplo:* "Edit Fields1" no dice nada. "Armar el saludo" se entiende sin abrirlo.
  - *Ejemplo:* Dentro de un mes, un flujo con nodos llamados "Cuando hago clic → Datos del cliente → Armar el
    saludo" se entiende de un vistazo.

#### 1c · Cómo se agregan más nodos

<p style="color:#1a7f37">Un trigger solo no hace nada útil: da la señal y no hay nadie para recibirla. Para que el flujo haga cosas, hay que agregarle nodos después. Miren el nodo: a la derecha tiene un puntito, y al lado un más. Ese puntito es la salida del nodo, por donde salen los datos. Y el más quiere decir: agregar el nodo que sigue. Lo que agregue ahí queda conectado solo, con una flecha.</p>

Mostrás, sin agregar nada todavía, el **+** de la derecha del nodo y el panel que se abre (*What happens next?*,
"¿qué pasa después?"). Lo cerrás con la cruz o con Esc: el nodo de verdad se agrega en el Paso 2.

```text
EN N8N · Las formas de agregar un nodo
Forma 1 (la que usamos): el + de la derecha del nodo
  → se abre "What happens next?" (¿qué pasa después?)
  → buscás el nodo por su nombre (por ejemplo "edit") y le hacés clic
  → aparece a la derecha, YA CONECTADO con una flecha

Forma 2: arrastrar desde el puntito de salida
  → apretás el puntito de la derecha del nodo, arrastrás hasta un lugar vacío y soltás
  → se abre el mismo panel; el nodo que elijas queda conectado

Forma 3: el + de arriba a la derecha del canvas (o la tecla Tab)
  → agrega un nodo SUELTO, sin flecha. Después hay que conectarlo a mano:
    arrastrar desde el puntito de salida de un nodo hasta el puntito de entrada (izquierda) del otro
```

```text
EN N8N · Arreglar lo que salió mal
Mover un nodo:            hacé clic sobre el nodo y arrastralo
Borrar un nodo:           clic en el nodo y tecla Supr (Delete), o clic derecho → Delete
Borrar una flecha:        pasá el mouse por arriba de la flecha → aparece un tachito → clic
Deshacer:                 Ctrl + Z
Abrir un nodo:            doble clic
Volver al canvas:         la ✕ de arriba a la derecha de la ventana, o la tecla Esc
```

Para explicar:
- **El puntito de la derecha es la salida; el de la izquierda, la entrada.** Las flechas siempre van de la salida
  de un nodo a la entrada del siguiente. Los datos viajan en ese sentido: de izquierda a derecha.
  - *Ejemplo:* Como una manguera: el agua entra por un lado y sale por el otro. No se conecta al revés.
- **El + de la derecha es el camino fácil.** Agrega el nodo y lo conecta solo. Es el que conviene usar siempre que se
  pueda.
  - *Ejemplo:* Trigger → **+** → *Edit Fields*: ya quedan unidos con su flecha.
- **El panel "¿qué pasa después?" tiene un buscador.** Hay cientos de nodos, ordenados por tipo (acciones en
  aplicaciones, transformar datos, lógica…). Lo más rápido es escribir el nombre.
  - *Ejemplo:* Escribís "gmail" y aparece el nodo de Gmail; escribís "edit" y aparece *Edit Fields (Set)*.
- **Un nodo sin flecha no recibe nada.** Si un nodo quedó suelto, no se ejecuta: queda gris. Es lo primero que hay
  que revisar cuando "no pasa nada".
  - *Ejemplo:* Agregaste un nodo con el + de arriba y te olvidaste de conectarlo: al ejecutar, el trigger se pone
    verde y el nodo suelto sigue gris.
- **Cada nodo nuevo es un paso más de la receta.** El flujo crece hacia la derecha, nodo por nodo, y cada uno hace
  una cosa con lo que le pasó el anterior.
  - *Ejemplo:* El flujo de hoy va a quedar así: *Cuando hago clic* → *Datos del cliente* → *Armar el saludo*. Tres
    nodos, tres pasos.

### Paso 2 · Datos del cliente: el nodo Edit Fields (14 min)

Es la primera vez que abren un nodo por dentro. Va en cinco partes: **agregar el nodo**, **conocer la ventana que se
abre** (sin completar nada todavía), **entender qué es un dato** antes de armarlo, **completarla campo por campo**,
y **ver qué pasa con los datos que salen**.

#### 2a · Agregar el nodo

<p style="color:#1a7f37">Ahora vamos a crear unos datos, como si hubiera llegado un cliente. Para eso usamos un nodo que se llama Edit Fields, editar campos. Sirve para escribir datos, cambiarlos o darles forma. Lo agrego con el más de la derecha del trigger, como vimos recién.</p>

```text
EN N8N · Paso 2a: agregar Edit Fields
1. En el nodo "Cuando hago clic", clic en el + de su derecha
2. Se abre "What happens next?" (¿qué pasa después?). En el buscador escribí:  edit
3. Clic en  Edit Fields (Set)
4. El nodo queda conectado con una flecha, y se abre solo una ventana grande: es el nodo por dentro
```

#### 2b · La ventana del nodo: qué es cada parte

<p style="color:#1a7f37">Cuando agregamos un nodo, o le hacemos doble clic, se abre esta ventana grande. Es el nodo por dentro. Y todos los nodos de n8n tienen la misma ventana, así que si la entienden una vez, la entienden para siempre. Antes de completar nada, recorrámosla.</p>

<p style="color:#1a7f37">Tiene tres columnas. A la izquierda, Input, la entrada: lo que le llegó del nodo anterior. En el medio, la configuración: lo que le pedimos que haga. A la derecha, Output, la salida: lo que va a entregar al nodo siguiente. Se lee de izquierda a derecha, como la flecha: entra, se procesa, sale.</p>

Lo mostrás señalando cada zona con el mouse:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ ✎ Edit Fields   ← nombre del nodo (clic para renombrar)                      Docs ↗   ✕ │
├───────────────────────────┬───────────────────────────────────────┬──────────────────────┤
│ INPUT                     │ Parameters | Settings  [Execute step] │ OUTPUT            ✎  │
│ Schema | Table | JSON     │                                       │                      │
│                           │ Mode: Manual Mapping  (arriba; subí   │                      │
│ ▾ Cuando hago clic ⚡     │                        con la rueda)  │      →|              │
│   No fields - node        │ Fields to Set                         │  No output data      │
│   executed, but no items  │ ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐   │  [Execute step]      │
│   were sent on this       │   Drag input fields here              │  or set mock data    │
│   branch                  │          or                           │                      │
│                           │       Add Field   ← ACÁ se hace clic  │                      │
│ ▸ Variables and context   │ └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │                      │
│                           │ ○ Include Other Input Fields          │                      │
│                           │ Options                      +        │                      │
│                           │ (+ Add option)                        │                      │
└───────────────────────────┴───────────────────────────────────────┴──────────────────────┘
```

Para explicar (cada zona de la ventana):
- **Arriba a la derecha, la cruz ✕.** Cierra la ventana y vuelve al flujo (al canvas). Lo que completaste queda
  guardado en el nodo (igual hay que apretar **Save** en el flujo para no perderlo). También se cierra con la tecla
  **Esc**, o haciendo clic en el fondo gris, afuera de la ventana. Al lado está **Docs**: abre el manual de ese nodo
  (en inglés).
  - *Ejemplo:* Completás dos campos, cerrás con la ✕, y al volver a abrir el nodo con doble clic siguen ahí.
- **Arriba a la izquierda, el nombre del nodo** (con un lapicito). Haciendo clic ahí se le cambia el nombre, sin
  salir de la ventana.
  - *Ejemplo:* Clic en "Edit Fields" → escribís "Datos del cliente" → Enter.
- **El botón negro *Execute step* ("ejecutar este paso")**, arriba de la columna del medio. Corre solo este nodo y
  muestra el resultado a la derecha. Es el botón de "probar". Mientras OUTPUT está vacío, aparece otro igual en el
  medio de la columna de la derecha: hacen lo mismo.
  - *Ejemplo:* Completás los campos, apretás *Execute step*, y en OUTPUT ves la ficha que armaste.
- **La columna de la izquierda, INPUT (entrada).** Muestra lo que le pasó el nodo anterior, con el nombre de ese
  nodo arriba. Hoy viene del trigger, que no trae datos: por eso dice *No fields - node executed, but no items were
  sent on this branch* ("sin campos: el nodo se ejecutó, pero no mandó datos por acá"). Está bien: no es un error.
  En el Paso 3 vamos a ver casilleros acá, y los vamos a arrastrar. También tiene las vistas **Schema**, **Table** y
  **JSON**, igual que OUTPUT.
  - *Ejemplo:* Si el nodo anterior todavía no se ejecutó, INPUT ofrece un botón para ejecutarlo y traer sus datos.
  - *Ejemplo:* *Variables and context* ("variables y contexto"), abajo, son datos que n8n tiene siempre (la fecha,
    el nombre del flujo). Hoy no se usan.
- **La columna del medio, la configuración, con dos pestañas.** **Parameters** ("parámetros") es lo que le pedimos
  que haga: acá se completa todo. **Settings** ("ajustes") son opciones avanzadas de cómo se comporta el nodo
  (reintentar si falla, qué hacer ante un error, notas). Hoy no se toca.
  - *Ejemplo:* Para este nodo, todo lo que necesitamos está en *Parameters*.
- **La columna de la derecha, OUTPUT (salida).** Antes de ejecutar dice *No output data* ("todavía no hay datos de
  salida"), con un botón *Execute step* y la opción *or set mock data* ("o cargá datos de ejemplo", que no usamos).
  Después de *Execute step* muestra la ficha que va a salir por la flecha. Se puede ver de tres formas: **Schema** (la lista de casilleros), **Table**
  (como planilla) y **JSON** (como texto con llaves). Es la misma información, dibujada distinto.
  - *Ejemplo:* En JSON se ve así: `{ "nombre": "Ana", "ciudad": "Córdoba" }`. Las llaves `{ }` encierran la ficha;
    cada casillero es `"nombre": valor`.

Y adentro de *Parameters*, lo que tiene **Edit Fields**:
- **Mode ("modo"): *Manual Mapping*.** Está arriba de todo en la columna del medio (si la ventana se abre más
  abajo, se sube con la rueda del mouse). Quiere decir "armar los campos a mano, uno por uno". Es el que viene, y el
  que usamos. La otra opción, *JSON*, es para escribir la ficha entera como texto: no la usamos.
  - *Ejemplo:* Con *Manual Mapping* completás "nombre = Ana" en casilleros, sin escribir llaves ni comillas.
- **Fields to Set ("campos a poner").** Es la lista de casilleros que va a tener la ficha de salida. Arranca vacía:
  es el recuadro con borde punteado que dice *Drag input fields here / or / Add Field* ("arrastrá campos de la
  entrada acá, o agregá un campo"). **Las palabras *Add Field* de adentro del recuadro son el botón**: se les hace
  clic. Cada campo que agregás es una fila con tres partes: **nombre**, **tipo** y **valor**.
  - *Ejemplo:* Dos filas: `nombre` (texto) = `Ana`, y `ciudad` (texto) = `Córdoba`.
- **Include Other Input Fields ("incluir los otros campos de la entrada").** Un interruptor. Apagado (como viene):
  la salida tiene **solo** los campos que armaste acá. Prendido: la salida tiene tus campos **más** todo lo que
  llegó por la entrada.
  - *Ejemplo:* Hoy da igual, porque la entrada viene vacía. En el Paso 3 lo dejamos apagado: así *Armar el saludo*
    entrega solo el mensaje, y no repite el nombre y la ciudad.
- **Options ("opciones") → el + o *Add option*.** Opciones finas, para casos especiales. No se usan hoy. (Más abajo
  dice *I wish this node would…*: es para mandarle sugerencias a n8n; no tiene que ver con el flujo.)
  - *Ejemplo:* Una de las opciones es *Ignore Type Conversion Errors* ("ignorar errores de tipo"): para cuando un
    número viene escrito como texto. Más adelante.

#### 2c · Antes de completar: qué es un dato en n8n

Antes de escribir nada, se explica qué es lo que vamos a armar. Así, cuando completen los campos, ya saben qué es
cada cosa.

<p style="color:#1a7f37">Antes de completar, una idea clave. En n8n, un dato es una ficha con casilleros. Cada casillero tiene un nombre, que es la etiqueta, y un valor, que es lo que va adentro. Como la ficha de un consultorio: dice "Nombre", y al lado "Ana". Lo que vamos a hacer con Edit Fields es justamente eso: armar una ficha, eligiendo qué casilleros tiene y qué va en cada uno.</p>

<p style="color:#1a7f37">Y cada casillero tiene un tipo: si es texto, si es un número, o si es un sí o un no. Lo elegimos nosotros, y le dice a n8n cómo tratar ese dato.</p>

Para explicar:
- **Edit Fields (Set) crea, cambia o borra casilleros.** Es el nodo que más vamos a usar para preparar datos. En
  inglés, *field* es "campo" o "casillero", y *set* es "poner". Por eso a veces aparece como *Set*.
  - *Ejemplo:* Acá lo usamos para inventar un cliente. Más adelante, para ordenar los datos que llegan de un
    formulario antes de guardarlos.
- **Un dato es una ficha con casilleros: nombre del casillero y valor.** El nombre no cambia; el valor sí. Al
  nombre del casillero se le dice **campo**, o *key* ("clave") en inglés.
  - *Ejemplo:* Como una ficha de un consultorio: "Nombre: Ana", "Ciudad: Córdoba". Mañana viene otro cliente, y la
    ficha tiene los mismos casilleros con otros valores.
- **El nombre del casillero: corto, en minúscula, sin espacios ni tildes.** Es una costumbre que evita problemas
  después, cuando haya que usar ese casillero en otro nodo.
  - *Ejemplo:* `nombre`, `ciudad`, `monto_usd` (con guion bajo en vez de espacio). Mejor que `Nombre del Cliente`.
- **El tipo del casillero dice qué clase de dato es.** **String** es texto. **Number** es un número (para hacer
  cuentas). **Boolean** es sí o no (*true* o *false*). Hay dos más, *Array* (una lista) y *Object* (una ficha
  dentro de otra), que vemos más adelante.
  - *Ejemplo:* "Ana" es String. 800 (el monto de un viaje) es Number. "¿Pagó la seña?" es Boolean.
  - *Ejemplo:* Si guardás 800 como String, n8n lo trata como la palabra "800": no se puede multiplicar. Por eso, para
    montos, *Number*.
- **El valor puede ser fijo o venir de antes.** Ahora vamos a escribir "Ana" a mano: es un valor **fijo**
  (*Fixed*). En el Paso 3 vamos a usar valores que vienen del nodo anterior (*Expression*). Arriba del casillero de
  valor se ve en qué modo está.
  - *Ejemplo:* *Fixed*: siempre dice "Ana". *Expression*: dice el nombre de quien haya llegado.
La ficha que vamos a armar, antes de hacerla:

| Nombre del casillero (*name*) | Tipo (*type*) | Valor (*value*) |
|---|---|---|
| `nombre` | String (texto) | `Ana` |
| `ciudad` | String (texto) | `Córdoba` |

**Ejemplo: completar un campo**

❌ Mal: el nombre del casillero con espacios y mayúsculas, y el valor mezclado en el nombre.

```text
name:  Nombre Ana       tipo: String     value:  (vacío)
```

✅ Bien: el nombre del casillero en un lado, y el valor en el otro.

```text
name:  nombre           tipo: String     value:  Ana
```

Por qué: el *name* es la etiqueta del casillero (no cambia) y el *value* es lo que va adentro (cambia con cada
cliente). Si se mezclan, el nodo siguiente no encuentra el dato.

#### 2d · Completar la ventana, campo por campo

<p style="color:#1a7f37">Ahora sí, completemos. Vamos a armar la ficha que acabamos de ver: dos casilleros, nombre y ciudad. Fíjense en el recuadro punteado del medio: abajo de todo dice Add Field, agregar campo. Eso es un botón. Lo aprieto, y aparece una fila con tres lugares para completar. El primero es el nombre del casillero; el segundo, qué tipo de dato es; el tercero, el valor, lo que va adentro.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 2c: completar Edit Fields
1. En "Fields to Set" está el recuadro punteado que dice  Drag input fields here / or / Add Field.
   Hacé clic en las palabras  Add Field  (agregar campo). Aparece una fila con tres partes:
     [ name ]   [ tipo ▾ ]   [ value ]
2. Primer campo:
     name (nombre del casillero):  nombre        ← escribilo en minúscula, sin tildes ni espacios
     tipo:                         String        ← es el que viene: quiere decir "texto"
     value (lo que va adentro):    Ana
3. Debajo de la primera fila aparece el botón  Add Field : clic otra vez. Segundo campo:
     name:   ciudad      tipo: String      value:  Córdoba
4. Botón negro  Execute step  (arriba de la columna del medio)
5. A la derecha (OUTPUT) aparece la ficha:   nombre: Ana    ciudad: Córdoba
   → probá las tres vistas: Schema, Table y JSON
6. Arriba a la izquierda, clic en el nombre "Edit Fields" → escribí  Datos del cliente  → Enter
7. Cerrá la ventana: la ✕ de arriba a la derecha (o Esc)
8. En el canvas, arriba de la flecha que sale de "Datos del cliente" dice  1 item
```

```text
EN N8N · Corregir un campo
Cambiar un valor:         clic en el casillero de value y escribís otro (por ejemplo, tu nombre)
Cambiar el tipo:          clic en el desplegable del tipo (String ▾) y elegís otro
Borrar un campo:          pasá el mouse por la fila → aparece un tachito a la derecha → clic
Cambiar el orden:         arrastrá la fila desde los puntitos de su izquierda
Después de cualquier cambio: Execute step otra vez, para ver cómo queda
```

<p style="color:#1a7f37">Miren lo que salió a la derecha, en Output. Nuestro nodo armó la ficha que planeamos: dos casilleros, nombre, Ana, y ciudad, Córdoba. Cada uno con su nombre y su valor, como dijimos. Y esa ficha es la que va a viajar por la flecha hasta el nodo siguiente.</p>

Para explicar:
- **Execute step ejecuta solo ese nodo.** Sirve para probar un nodo sin correr todo el flujo, y ver qué sale.
  - *Ejemplo:* Cambiás "Ana" por tu nombre, apretás *Execute step*, y en OUTPUT aparece tu nombre.


#### 2e · Salieron los datos: ¿dónde quedan y cómo los reutilizo?

<p style="color:#1a7f37">Ya tenemos la ficha en Output. Una pregunta que siempre aparece: ¿esto quedó guardado en algún lado? ¿Lo puedo volver a usar? La respuesta tiene dos partes. Dentro de este flujo, sí: cualquier nodo que pongamos después puede usar estos datos, y eso es lo que vamos a hacer en el próximo paso. Pero no quedan guardados para siempre como en una planilla: viven mientras dura esta ejecución.</p>

<p style="color:#1a7f37">Piénsenlo como una bandeja que pasa por una cadena de montaje. La ficha se arma acá, viaja por la flecha al nodo siguiente, y cada nodo de más adelante la puede mirar y usar. Cuando el flujo termina, la bandeja se vacía. La próxima vez que lo ejecute, se vuelve a armar desde cero.</p>

Para explicar:
- **Dentro de la misma ejecución, sí se reutilizan.** La ficha que sale de un nodo es la entrada (*input*) del
  siguiente. Y cualquier nodo de más adelante puede usar los datos de cualquier nodo anterior, no solo del que tiene
  pegado.
  - *Ejemplo:* En el Paso 3, *Armar el saludo* va a usar el `nombre` y la `ciudad` que armamos acá: los vamos a
    arrastrar desde su INPUT. No hay que volver a escribirlos.
  - *Ejemplo:* Si después del saludo agregáramos un cuarto nodo, ese también podría usar el `nombre` de *Datos del
    cliente*, aunque no esté pegado a él.
- **No quedan guardados para la próxima vez.** Cada vez que el flujo corre, empieza de cero: los nodos vuelven a
  armar los datos. Lo de la corrida anterior no se "acuerda".
  - *Ejemplo:* Hoy el flujo arma "Ana". Si mañana lo ejecutás, vuelve a armar "Ana" porque está escrito en el nodo,
    no porque se haya guardado de hoy.
- **Lo que sí queda: el historial (*Executions*).** n8n anota cada ejecución en la pestaña **Executions**
  ("ejecuciones"), con lo que salió de cada nodo. Sirve para revisar qué pasó, pero no para usar esos datos en otra
  ejecución.
  - *Ejemplo:* Mañana abrís *Executions*, hacés clic en la de hoy, y ves que *Datos del cliente* entregó Ana y
    Córdoba. Es como mirar una foto: podés verla, pero no usarla en el flujo de mañana.
- **Lo que se ve en la ventana es la última prueba.** OUTPUT muestra lo que salió la última vez que ejecutaste. Si
  cambiás algo en el nodo, hay que volver a apretar *Execute step* para ver el resultado nuevo. Y si cerrás n8n o
  recargás la página, esa vista puede quedar vacía hasta que lo ejecutes otra vez.
  - *Ejemplo:* Cambiás "Ana" por "Martín" y OUTPUT sigue diciendo Ana hasta que apretás *Execute step*.
- **Para guardar datos de verdad, hay que mandarlos a algún lado.** Si querés que la información quede para
  siempre (por ejemplo, cada consulta de un cliente), un nodo del flujo la tiene que escribir en un lugar que guarde:
  una planilla de Google Sheets, una base de datos, un mail. Lo hacemos en el Bloque 5, con el formulario que
  guarda cada consulta en Google Sheets.
  - *Ejemplo:* "Cuando llega una consulta → la guardo en Google Sheets". La planilla es la que guarda; el flujo solo
    la lleva hasta ahí.

### Paso 3 · Armar el saludo: pasar datos de un nodo al otro (7 min)

<p style="color:#1a7f37">Ahora lo importante de la clase: cómo un nodo usa los datos del anterior. Vamos a agregar otro Edit Fields que arme un saludo con el nombre y la ciudad. Pero no vamos a escribir "Ana" a mano: vamos a decirle "usá el nombre que te llegó". Así, si mañana el cliente es otro, el saludo cambia solo.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 3: Armar el saludo (pasar datos de un nodo al otro)
1. En "Datos del cliente", clic en el + de su derecha → buscá  edit  → Edit Fields (Set)
2. Mirá la izquierda (INPUT): están los casilleros  nombre  y  ciudad  que llegaron
   (si no aparecen, apretá el botón de INPUT para ejecutar los nodos anteriores, o cerrá y Execute workflow)
3. Clic en  Add Field  (adentro del recuadro punteado) →  Name:  mensaje     Type: String
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
10. Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Armar el saludo
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

### Paso 4 · Ejecutar todo, guardar y ver las ejecuciones (4 min)

<p style="color:#1a7f37">Ahora ejecutemos el flujo entero. Abajo en el medio está el botón Execute workflow. Apriétenlo. Fíjense qué pasa: los tres nodos se ponen verdes, uno después del otro, y arriba de cada flecha aparece un número: es la cantidad de datos que pasaron por ahí. Uno.</p>

<p style="color:#1a7f37">Y ahora, a guardar. n8n no guarda solo: si cierran la pestaña sin guardar, pierden el trabajo. Botón Save, arriba a la derecha, o control S.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 4: ejecutar, guardar y mirar
1. Abajo en el medio:  Execute workflow
2. Los tres nodos se ponen verdes, con un ✓. Arriba de cada flecha:  1 item
3. Doble clic en "Armar el saludo" → OUTPUT:  Hola Ana, gracias por escribirnos desde Córdoba.
4. Cerrá la ventana (✕ o Esc) → arriba a la derecha:  Save   (o Ctrl + S)
5. Arriba en el medio, pestaña  Executions  (ejecuciones): la lista de cada vez que corrió el flujo
   → clic en una: se ve cómo quedó cada nodo en esa vez
6. Pestaña  Editor  para volver a armar
```

Para explicar:
- **Verde, rojo y gris.** Verde con ✓: el nodo funcionó. Rojo: falló (al abrirlo, dice por qué). Gris: no se
  ejecutó (no le llegó nada, o el flujo se cortó antes). El rojo lo vemos en vivo en el Paso 6, rompiendo el flujo a
  propósito.
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

### Paso 5 · Cambiar los valores: el flujo sigue andando (3 min)

<p style="color:#1a7f37">El flujo ya anda. Ahora quiero que vean algo que es la idea de toda la clase. Voy a cambiar los datos del cliente, y no voy a tocar nada más. Miren el saludo.</p>

**En n8n, paso a paso** (lo hacés vos, despacio, en tu pantalla):

```text
EN N8N · Paso 5: cambiar los valores
1. Doble clic en "Datos del cliente"
2. En el casillero  nombre , borrá  Ana  y escribí  Martín
3. En el casillero  ciudad , borrá  Córdoba  y escribí  Rosario
4. Cerrá la ventana (✕ o Esc). A "Armar el saludo" NO lo abras ni lo toques
5. Abajo en el medio:  Execute workflow
6. Doble clic en "Armar el saludo" → OUTPUT:
   Hola Martín, gracias por escribirnos desde Rosario.
7. Volvé a poner Ana y Córdoba (o dejalo así: da igual) → Save
```

<p style="color:#1a7f37">¿Vieron? No toqué el saludo, y cambió solo. Porque en el saludo no dice "Ana": dice "el nombre que me llegue". Si mañana el cliente se llama Lucía y es de Salta, el saludo dice Lucía y Salta. Armo los pasos una vez, y funcionan con cualquier dato. Eso es automatizar.</p>

<p style="color:#1a7f37">Y fíjense una cosa más: hoy los datos los cambio yo a mano. En el Bloque 5 vamos a hacer que lleguen solos, desde el navegador o desde un formulario. El saludo va a ser el mismo; lo único que cambia es de dónde vienen los datos.</p>

Para explicar:
- **Lo que cambia es el dato; los pasos quedan iguales.** En *Datos del cliente* cambiaste lo que entra. *Armar el
  saludo* no lo tocaste: tiene la misma expresión `{{ $json.nombre }}`, que ahora encuentra "Martín".
  - *Ejemplo:* Una plantilla de mail que dice "Hola [nombre]": la escribiste una vez y sirve para mil clientes.
- **Por eso usamos expresiones y no texto fijo.** Si en el saludo hubieras escrito "Hola Ana" a mano (Fixed), al
  cambiar el cliente el saludo seguiría diciendo Ana.
  - *Ejemplo:* ❌ Mal: el saludo dice `Hola Ana, gracias…` escrito a mano → con Martín sale "Hola Ana". ✅ Bien:
    `Hola {{ $json.nombre }}, gracias…` → con Martín sale "Hola Martín".
- **Cada ejecución es nueva.** Al apretar Execute workflow otra vez, n8n corre todo de nuevo con los datos de ahora.
  La ejecución anterior (la de Ana) sigue anotada en Executions, pero no se mezcla con la nueva.
  - *Ejemplo:* En Executions ahora hay dos: una con Ana y otra con Martín. Clic en cada una para ver qué pasó.
- **Si el saludo no cambió, casi siempre es que no volviste a ejecutar.** OUTPUT muestra la última prueba; si
  cambiaste los datos pero no apretaste Execute workflow, todavía muestra la de antes.
  - *Ejemplo:* Cambiaste a Martín, abriste el saludo y dice Ana → cerrá, Execute workflow, y abrilo de nuevo.

`PARA EL CHAT` (opcional, para los que te vienen siguiendo; no esperás las respuestas):

```text
PARA EL CHAT · Si me venís siguiendo, probá vos (si no, hacelo después con la grabación)
1. Abrí "Datos del cliente" y cambiá Ana por tu nombre y Córdoba por tu ciudad.
2. Execute workflow.
3. Mirá lo que dice el casillero "mensaje" de "Armar el saludo".
```

### Paso 6 · Romperlo a propósito: qué pasa cuando algo falla (5 min)

<p style="color:#1a7f37">Ahora vamos a hacer algo que parece raro: vamos a romper el flujo a propósito. ¿Por qué? Porque les va a pasar, a todos, muchas veces, y no pasa nada. Quiero que vean cómo se ve un error, dónde lo leen y cómo lo arreglan, ahora que estamos tranquilos y sabemos qué rompimos.</p>

**Error 1: el nodo se pone rojo.** Le decimos a n8n que el nombre es un número.

```text
EN N8N · Paso 6, error 1: el rojo
1. Doble clic en "Datos del cliente"
2. En el casillero  nombre , a la derecha, cambiá el tipo de  String  a  Number
   (el valor sigue diciendo  Ana )
3. Cerrá la ventana (✕ o Esc) → Execute workflow
4. Miren el canvas:
   - "Cuando hago clic" en verde ✓ (anduvo)
   - "Datos del cliente" en ROJO (acá falló)
   - "Armar el saludo" en gris (no se ejecutó: no le llegó nada)
   - aparece un aviso de que hubo un problema en ese nodo
5. Doble clic en el nodo rojo → en OUTPUT, en rojo, dice:
   'nombre' expects a number but we got 'Ana' [item 0]
   y abajo, una pista para arreglarlo
6. Para arreglarlo: volvé el tipo de  nombre  a  String  → ✕ → Execute workflow
   → los tres nodos en verde otra vez
```

<p style="color:#1a7f37">Leamos el error juntos, que está en inglés. "Nombre espera un número, pero recibimos Ana". O sea: le dijimos que en ese casillero iba un número, y le pusimos un texto. n8n no adivina: frena y avisa. Y fíjense que nos dice tres cosas: en qué nodo pasó, que es el rojo; qué pasó, que es el mensaje; y en qué ficha, que es el item cero, la primera. Y el nodo de después quedó gris: como el anterior falló, a ese no le llegó nada.</p>

**Error 2: el que NO se pone rojo.** Este es el más traicionero, por eso lo mostramos.

```text
EN N8N · Paso 6, error 2: el silencioso
1. Doble clic en "Armar el saludo"
2. En el Value, cambiá  $json.nombre  por  $json.Nombre   (con N mayúscula)
3. Miren la vista previa abajo del campo:  Hola , gracias por escribirnos desde Córdoba.
4. Execute step → todo en verde, pero el saludo salió sin nombre
5. Para arreglarlo: borrá la expresión y volvé a arrastrar  nombre  desde INPUT
```

<p style="color:#1a7f37">¿Vieron? Todo verde, y sin embargo está mal. El verde quiere decir "no se rompió", no quiere decir "salió lo que yo quería". n8n buscó un casillero que se llama Nombre con mayúscula, no lo encontró, y puso un hueco. Por eso siempre miramos el resultado, no solo el color.</p>

Para explicar:
- **Equivocarse es parte del trabajo.** Nadie arma un flujo sin errores. Lo importante es saber leerlos.
  - *Ejemplo:* Hasta el que da la clase ve nodos rojos todas las semanas. Se lee el mensaje, se arregla, y se vuelve
    a ejecutar.
- **El rojo te dice dónde mirar.** El primer nodo rojo es donde se cortó. Los de antes (verdes) anduvieron; los de
  después (grises) ni se ejecutaron. No hace falta revisar todo el flujo: abrís el rojo.
  - *Ejemplo:* En un flujo de diez nodos, si el sexto está rojo, el problema está en el sexto (o en lo que le llegó
    del quinto).
- **El mensaje de error se lee en tres partes: dónde, qué, y en qué ficha.** Dónde: el nodo rojo. Qué: el texto en
  rojo (en inglés; si no lo entendés, copialo en un traductor). En qué ficha: `[item 0]` es la primera (n8n cuenta
  desde cero).
  - *Ejemplo:* `'nombre' expects a number but we got 'Ana' [item 0]` = "en la primera ficha, `nombre` esperaba un
    número y le llegó 'Ana'".
- **Verde no es lo mismo que bien.** Hay errores que no rompen nada: un casillero mal escrito da vacío, no rojo.
  Por eso, después de ejecutar, siempre se abre el último nodo y se lee el resultado.
  - *Ejemplo:* ❌ Mal: "Está todo verde, listo". ✅ Bien: "Está todo verde; abro *Armar el saludo* y leo: Hola Ana,
    gracias por escribirnos desde Córdoba. Ahora sí, listo".
- **Executions también guarda los errores.** La ejecución que falló queda anotada con un ✗ rojo. Si un flujo falla
  cuando no lo estás mirando, ahí lo encontrás.
  - *Ejemplo:* En Executions, la del error 1 dice *Error*; las otras, *Success* (bien).
- **Antes de pedir ayuda, tres preguntas.** ¿Qué nodo está rojo? ¿Qué dice el mensaje? ¿Qué cambié justo antes?
  Con eso se resuelve la mayoría. Y si no, al chat, con una captura del nodo rojo abierto.
  - *Ejemplo:* "Se me puso rojo *Datos del cliente*, dice *expects a number*, y recién cambié el tipo": ya está
    resuelto antes de preguntar.

### Paso 7 · Guardar, cerrar este flujo y empezar el segundo (2 min)

<p style="color:#1a7f37">Terminamos el primer flujo. Antes de pasar al siguiente, vamos a hacer tres cosas que van a repetir siempre: guardar, salir del flujo, y abrir uno nuevo. Cada automatización va en su propio workflow, separada: no armamos el segundo ejemplo en la misma hoja que el primero.</p>

**En n8n, paso a paso:**

```text
EN N8N · Paso 7: guardar, cerrar y empezar otro
1. Guardar: arriba a la derecha,  Save   (o Ctrl + S)
   → el botón cambia a  Saved  (guardado): ya no hay nada sin guardar
2. Salir del flujo: en la barra de la izquierda, clic en  Overview
   (si te olvidaste de guardar, n8n te pregunta antes de salir:
    Save = guardar y salir · Leave without saving = salir sin guardar → elegí Save)
3. En la lista de Overview aparece  Mi primer flujo : ahí queda, para abrirlo cuando quieras
4. Empezar el segundo: arriba a la derecha,  Create workflow
   → hoja en blanco nueva, con el  +  (Add first step)
5. Arriba a la izquierda, clic en  My workflow  → escribí el nombre del nuevo:
   Webhook desde el navegador   → Enter
```

<p style="color:#1a7f37">Fíjense: el primer flujo no se borró ni se mezcló con nada. Está en la lista, con su nombre. Si mañana lo quieren ver, van a Overview y hacen clic en "Mi primer flujo". Y ahora tenemos una hoja en blanco para el ejemplo que viene.</p>

Para explicar:
- **Guardar antes de salir, siempre.** n8n no guarda solo mientras armás. Cuando el botón dice **Saved**, está todo
  guardado; si dice **Save**, hay cambios sin guardar.
  - *Ejemplo:* Es como un documento de Word: si cerrás sin guardar, perdés lo último que hiciste.
- **Cerrar un flujo es volver a Overview.** No hay una X para cerrar el flujo: salís yendo a la lista. El flujo
  queda guardado ahí, como un archivo en una carpeta.
  - *Ejemplo:* Overview es la carpeta; cada workflow es un archivo adentro.
- **Un workflow por automatización.** Cada ejemplo de hoy va en su propio workflow, con su nombre. Si pusieras dos
  triggers en la misma hoja, sería difícil saber qué arranca qué.
  - *Ejemplo:* ❌ Mal: armar el webhook al lado del saludo, en "Mi primer flujo". ✅ Bien: un workflow nuevo que se
    llama "Webhook desde el navegador".
- **Para volver a abrir uno, clic en su nombre.** En Overview, clic en el flujo y se abre tal como lo dejaste.
  - *Ejemplo:* Al final de la clase, clic en "Mi primer flujo": están los tres nodos y la última ejecución en
    Executions.

---

## 97–118 · Bloque 5 · Cómo le llegan los datos a n8n

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

**¿Anda en local?** ✅ Sí, sin pasos extra, pero **solo desde tu propia computadora**: la dirección empieza con
`localhost`, y esa dirección solo existe ahí. Sirve para aprender y probar. Si le pasaras esa dirección a un cliente
o a una página web, no les funcionaría: para eso hace falta n8n Cloud (o un túnel). En n8n Cloud anda igual, con tu
dirección `https://tunombre.app.n8n.cloud/...`, y ahí sí se puede abrir desde cualquier lado.

<p style="color:#1a7f37">Antes de armarlo, una aclaración: esta dirección va a funcionar solo desde mi computadora, porque es localhost. Para probar, alcanza y sobra. Lo que no puedo hacer es pasársela a un cliente: él no puede llegar a mi computadora.</p>

<p style="color:#1a7f37">Vamos a la hoja en blanco que abrimos recién, la que se llama "Webhook desde el navegador". Si no la crearon, vuelvan a Overview, Create workflow, y le ponen ese nombre. Esta vez, el trigger no va a ser manual: va a ser un webhook.</p>

**En n8n, paso a paso:**

```text
EN N8N · El webhook (flujo 02)
 1. Usá el workflow nuevo del Paso 7 (si no lo creaste: Overview → Create workflow → renombralo:
    Webhook desde el navegador )
 2. Clic en el +  (Add first step) → buscá  webhook  → elegí  Webhook
 3. Se abre el nodo. Completá:
      HTTP Method:   GET        (es el que viene; es "pedir", lo que hace el navegador)
      Path:          saludo     (viene con letras y números raros, tipo  3f8a2c1e-7b4d-...
                                 borralos y escribí  saludo ; abajo se explica qué son)
      Respond:       When Last Node Finishes
                     (que conteste cuando termine el último nodo, con lo que armó)
 4. Arriba del nodo, en "Webhook URLs", pestaña  Test URL: está la dirección
      http://localhost:5678/webhook-test/saludo
    (antes de cambiar el Path, terminaba con las letras y números raros)
 5. Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Llega un pedido
 6. + a la derecha → Edit Fields (Set). Todavía no hay nada en INPUT: está bien.
    Cerrá la ventana sin completar nada (lo completamos después de la primera prueba).
 7. Save
```

#### ¿Qué es eso que aparece en Path, y qué es esa dirección? (2 min)

<p style="color:#1a7f37">Cuando abren el webhook, en Path no dice "saludo": dice una tira larga de letras y números, algo como 3f8a2c1e-7b4d y sigue. No se asusten, no es un error. Es un nombre que n8n inventa solo, al azar, para que cada webhook tenga una dirección distinta. Funciona igual; el problema es que es imposible de recordar o de dictar. Por eso hoy la cambiamos por una palabra: saludo.</p>

<p style="color:#1a7f37">Y ese Path es el final de la dirección del timbre. Miren arriba, en Webhook URLs: ahí está la dirección completa. Vamos a leerla por partes, porque cada parte quiere decir algo.</p>

```text
http://localhost:5678  /  webhook-test  /  saludo  ?nombre=Ana&destino=Mendoza
└──────────┬────────┘    └─────┬─────┘    └──┬──┘  └────────────┬────────────┘
   dónde está n8n         modo prueba       Path     los datos que le mandamos
  (tu computadora,       (solo anda          (el      (los agregamos nosotros;
   puerta 5678)          después de        nombre      no vienen en la
                         Execute workflow)  del timbre)  dirección que copia n8n)
```

Para explicar:
- **Lo que viene en Path es un nombre al azar que pone n8n.** Se llama **UUID** (un código único): letras y números
  al azar, tan largos que es casi imposible que dos webhooks tengan el mismo. Así, aunque tengas cien flujos con
  webhook, ninguna dirección se pisa con otra, y nadie puede adivinarla.
  - *Ejemplo:* Es como el número de seguimiento de un envío: largo y feo, pero único. Si lo dejás, el webhook anda
    igual: la dirección termina en `/webhook-test/3f8a2c1e-7b4d-...` en vez de `/webhook-test/saludo`.
- **¿Por qué lo cambiamos?** Para la clase, una palabra corta se lee, se dicta y se escribe sin errores. En un flujo
  de verdad, a veces conviene dejar el código raro, justamente porque nadie lo adivina.
  - *Ejemplo:* ❌ Mal para la clase: dictar "barra tres f ocho a dos c…". ✅ Bien: "barra saludo".
- **El Path no puede repetirse.** Si dos flujos usan el mismo Path (`saludo` en los dos), n8n no sabe cuál tiene que
  arrancar y avisa que esa dirección ya está en uso.
  - *Ejemplo:* Dos casas con el mismo número en la misma calle: el cartero no sabe a cuál tocar.
- **`http://localhost:5678` es dónde está n8n.** *localhost* quiere decir "esta misma computadora", y *5678* es la
  puerta (el **puerto**) por donde se entra a n8n: la misma que pusimos en Docker. Por eso esta dirección solo anda
  desde tu computadora.
  - *Ejemplo:* Es la misma dirección que usan para abrir n8n en el navegador, `localhost:5678`. En n8n Cloud, esta
    parte es `https://tunombre.app.n8n.cloud`.
- **`webhook-test` quiere decir "modo prueba".** Esta dirección solo escucha después de apretar **Execute
  workflow**, y una sola vez. Al lado está la pestaña **Production URL**, que dice `webhook` sin `-test`: esa es la
  que escucha siempre, pero solo con el flujo publicado (**Publish**). Hoy usamos solo la de prueba.
  - *Ejemplo:* Test URL: `http://localhost:5678/webhook-test/saludo`. Production URL:
    `http://localhost:5678/webhook/saludo`.
- **Lo que va después del `?` lo agregamos nosotros.** n8n te da la dirección hasta `saludo`. Los datos
  (`?nombre=Ana&destino=Mendoza`) los escribimos al final, cada vez que tocamos el timbre.
  - *Ejemplo:* La misma dirección sirve para Ana y para Martín: lo que cambia es lo que va después del `?`.

#### Antes de probar: el error que les va a salir, a propósito (2 min)

<p style="color:#1a7f37">Antes de probarlo bien, lo voy a probar mal, a propósito, porque este error les va a salir a todos. Copio la dirección, le agrego los datos, la pego en otra pestaña… y todavía no apreté nada en n8n. Miren lo que dice el navegador.</p>

```text
EN N8N · Probarlo mal, a propósito
1. NO aprietes Execute workflow todavía
2. En OTRA pestaña del navegador, pegá:
     http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza
3. El navegador muestra:
     {"code":404,"message":"The requested webhook \"saludo\" is not registered.",
      "hint":"Click the 'Execute workflow' button on the canvas, then try again.
      (In test mode, the webhook only works for one call after you click this button)"}
```

<p style="color:#1a7f37">Leamos lo que dice. "El webhook saludo no está registrado": o sea, nadie está escuchando en esa dirección. Y la pista: "apretá el botón Execute workflow y probá de nuevo; en modo prueba, el webhook funciona para una sola llamada después de apretar el botón". Es el timbre desconectado: la dirección de prueba solo atiende si en n8n apretamos Execute workflow justo antes, y atiende una sola vez. Si recargan la página otra vez, vuelve a salir este error, hasta que aprieten de nuevo.</p>

Para explicar:
- **404 / "not registered" = "en esta dirección no hay nadie escuchando".** No quiere decir que el flujo esté mal
  armado: quiere decir que la dirección de prueba está apagada en este momento.
  - *Ejemplo:* Tocás el timbre de una casa y no hay nadie: el timbre existe, pero no atiende.
- **La dirección de prueba se prende con Execute workflow, y se apaga después de una llamada.** Por eso el orden es
  siempre el mismo: primero Execute workflow en n8n (el nodo dice *Waiting for trigger event*), después Enter en la
  otra pestaña. Para probar otra vez: de nuevo Execute workflow, y de nuevo Enter (o F5).
  - *Ejemplo:* ❌ Mal: pegar la dirección, recargar tres veces, y recién ahí ir a n8n. ✅ Bien: Execute workflow →
    otra pestaña → Enter → volver a n8n a mirar.
- **El Path tiene que ser exactamente igual, letra por letra.** `saludo`, `Saludo` y `Saludo!` son tres direcciones
  distintas: n8n distingue mayúsculas y cualquier signo. Si en la dirección escribís otra cosa que lo que dice
  *Path*, sale el mismo error, aunque hayas apretado Execute workflow. Mirá bien el texto del error: entre comillas
  te dice qué dirección pediste (`"Saludo!"`), y la comparás con el Path del nodo (`saludo`).
  - *Ejemplo:* Path `saludo` y en el navegador `.../webhook-test/Saludo!` → `The requested webhook "Saludo!" is not
    registered`. Arreglo: escribir `saludo`, en minúscula y sin el signo.
- **La pestaña de n8n tiene que quedar abierta mientras probás.** El que "escucha" en modo prueba es el editor que
  tenés abierto. Si cerrás esa pestaña o te vas a otro flujo, deja de escuchar.
  - *Ejemplo:* Apretás Execute workflow, cerrás n8n, y pegás la dirección: sale el error.
- **Lo más seguro: copiar la dirección del nodo, no escribirla.** En el nodo del webhook, pestaña *Test URL*, clic
  en la dirección para copiarla, y al final le agregás `?nombre=Ana&destino=Mendoza`.
  - *Ejemplo:* Copiando, no se cuela una mayúscula ni un signo de más.

<p style="color:#1a7f37">Ahora sí, probémoslo bien. Primero n8n, después el navegador. Apretamos Execute workflow: fíjense que el webhook se queda esperando, dice que está escuchando. Ahora vamos a tocar el timbre: vamos a la otra pestaña y apretamos Enter.</p>

```text
EN N8N · Primera prueba: tocar el timbre (ahora sí, en orden)
1. PRIMERO en n8n:  Execute workflow  → el nodo del webhook dice "Waiting for trigger event"
   (esperando). No cierres esta pestaña.
2. DESPUÉS, en la OTRA pestaña del navegador, la dirección (copiada del nodo, con los datos al final):
     http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza
   → Enter (o F5 si ya estaba pegada)
3. Volvé a la pestaña de n8n: el webhook se puso verde
4. Doble clic en "Llega un pedido" → OUTPUT: buscá el casillero  query
     query:  nombre: Ana    destino: Mendoza
5. ¿Te salió otra vez "not registered"? Fijate dos cosas: que hayas apretado Execute workflow
   justo antes, y que lo que está entre comillas en el error sea igual al Path (saludo).
```

En esta primera prueba, como el Edit Fields todavía está vacío, el navegador no muestra el saludo: lo importante es
que el webhook se puso verde y que en `query` llegaron los datos.

<p style="color:#1a7f37">Miren lo que llegó. Es un montón de cosas, y la primera vez asusta. Tranquilos: de todo esto, hoy nos importa una sola, que es query. Pero vamos a ver qué es lo demás, para que no les dé miedo.</p>

#### ¿Qué es todo lo que llegó? (3 min)

<p style="color:#1a7f37">Cuando el navegador toca el timbre, no manda solo los datos que escribimos. Manda también una tarjeta de presentación: quién es, desde qué computadora llama, en qué idioma quiere la respuesta. n8n lo anota todo y nos lo muestra. Es como una carta: adentro está el mensaje, pero el sobre también trae datos, el remitente, el sello, la fecha. Nosotros abrimos la carta y leemos el mensaje.</p>

Lo que se ve en OUTPUT es **1 item** (una ficha) con estos casilleros grandes. Conviene mostrarlo en la vista
**Schema** (arriba de OUTPUT), que lo muestra ordenado, en vez de JSON:

```text
1 item
├── headers        ← el "sobre": información que el navegador manda sola, siempre
├── params         ← vacío: no lo usamos
├── query          ← ⭐ LO QUE NOS IMPORTA: los datos que pusimos después del ?
│     ├── nombre:  Ana
│     └── destino: Mendoza
├── body           ← vacío: es para datos que viajan "adentro" del pedido; con el navegador no se
│                     puede (se explica justo abajo, en "¿Por qué body está vacío?")
├── webhookUrl     ← la dirección que se tocó: http://localhost:5678/webhook-test/saludo
└── executionMode  ← "test": se usó la dirección de prueba
```

Qué es cada cosa de **headers** (no hace falta aprenderlo; está para que no asuste):

| Casillero | Qué quiere decir | En el ejemplo |
|---|---|---|
| `host` | A qué dirección se llamó. | `localhost:5678`: n8n en tu computadora. |
| `connection` | Si la conexión queda abierta para más pedidos. | `keep-alive`: "dejala abierta". |
| `user-agent` | Qué programa llamó: navegador y sistema. | Chrome/Brave en Windows. |
| `sec-ch-ua`, `sec-ch-ua-mobile`, `sec-ch-ua-platform` | Lo mismo, más detallado: marca del navegador, si es celular (`?0` = no), y el sistema. | Brave 156, no celular, Windows. |
| `accept` | Qué tipo de respuesta prefiere. | `text/html…`: una página web. |
| `accept-language` | En qué idioma prefiere la respuesta. | `es-419`: español de Latinoamérica. |
| `accept-encoding` | Si acepta la respuesta comprimida, para que viaje más rápido. | `gzip, br…` |
| `sec-fetch-…`, `sec-gpc`, `upgrade-insecure-requests` | Avisos de seguridad y privacidad del navegador: cómo se abrió la página, si pide no ser rastreado, si prefiere https. | Lo abriste escribiendo la dirección (`navigate`). |
| `cookie` | Datos chiquitos que el navegador guarda de una página y se los devuelve cada vez que la visita. | Son de n8n mismo (sus estadísticas de uso: `rl_…`, `ph_…`), porque n8n y el webhook están en la misma dirección, `localhost:5678`. |

Para explicar:
- **El navegador siempre manda más de lo que escribimos.** Cada vez que abrís una página, tu navegador se presenta
  solo: qué navegador es, en qué idioma lo usás, qué acepta. Pasa con cualquier página de internet, no solo con
  n8n. La diferencia es que acá lo podemos ver.
  - *Ejemplo:* Por eso una página te aparece en español sin que se lo digas: leyó `accept-language`.
- **Los headers son el sobre; query es la carta.** `headers` lo arma el navegador; `query` lo armamos nosotros,
  con lo que va después del `?`. Para el saludo solo usamos la carta.
  - *Ejemplo:* Si cambiás la dirección a `?nombre=Lucía&destino=Salta`, cambia `query`; los `headers` quedan casi
    iguales.
- **Un item con muchos casilleros, algunos con casilleros adentro.** Es la misma ficha de siempre, solo que más
  grande. `headers` y `query` son "carpetas" con casilleros adentro; para llegar a uno se usa el punto:
  `$json.query.nombre`.
  - *Ejemplo:* `$json.headers['accept-language']` daría `es-419` (lleva corchetes porque el nombre tiene guiones).
- **No hace falta borrar nada de lo que sobra.** Lo que no usamos, no molesta: el Edit Fields que sigue toma solo
  los casilleros que le pedimos y arma una ficha nueva, limpia.
  - *Ejemplo:* La respuesta final va a ser solo `{"mensaje": "Hola Ana, …"}`: los headers no aparecen.
- **Ojo al compartir capturas.** El casillero `cookie` puede tener datos de tu sesión. En n8n local no es grave,
  pero es un buen hábito no pegar los headers completos en un chat público.
  - *Ejemplo:* Si piden ayuda, que muestren solo el casillero `query`, no todo el OUTPUT.

<p style="color:#1a7f37">Entonces: de todo esto, vamos a usar solo query, que tiene nombre Ana y destino Mendoza. Lo demás es el sobre de la carta: está, es normal, y no lo tocamos.</p>

#### ¿Por qué body está vacío? Dos formas de mandar datos: GET y POST (3 min)

<p style="color:#1a7f37">Seguro alguno se preguntó: si body es para mandar datos, ¿por qué está vacío? ¿Por qué no mandamos los datos ahí? La respuesta es: porque con la barra del navegador no se puede. Y para entender por qué, hay que saber que hay dos formas de mandarle datos a una dirección.</p>

<p style="color:#1a7f37">La primera se llama GET, que en inglés quiere decir "conseguir", "pedir". Es una postal: los datos van escritos afuera, a la vista, en la misma dirección, después del signo de pregunta. La segunda se llama POST, que quiere decir "enviar", "despachar". Es un paquete cerrado: la dirección va afuera, y los datos van adentro de la caja. Esa caja es el body.</p>

<p style="color:#1a7f37">Y acá está la clave: cuando ustedes escriben una dirección en la barra del navegador y aprietan Enter, el navegador siempre hace un GET. Siempre. Está hecho para pedir páginas, no para mandar paquetes. La barra tiene un solo lugar para escribir, que es la dirección; no tiene un lugar para meter cosas en la caja. Por eso los datos los pusimos en la dirección, y por eso body llegó vacío. Para mandar un POST hace falta otra cosa: un formulario, una aplicación, o un programa como Postman.</p>

```text
GET  (postal)                              POST  (paquete cerrado)
─────────────────────────────────          ─────────────────────────────────
dirección:  .../saludo?nombre=Ana          dirección:  .../saludo
            └ los datos van ACÁ,           body:       nombre: Ana   ← los datos van
              a la vista                               destino: Mendoza  ADENTRO
body:       vacío                                      (no se ven en la dirección)

Lo hace:   la barra del navegador          Lo hace:   un formulario, una aplicación,
                                                       Postman. La barra del navegador NO.
En n8n:    llegan en  query                En n8n:    llegan en  body
```

Para explicar:
- **GET = postal: los datos van en la dirección.** Todo lo que va después del `?` se ve: en la barra, en el
  historial del navegador, en una captura de pantalla. Para datos chicos y que no son secretos, alcanza.
  - *Ejemplo:* Buscar "vuelos a Mendoza" en Google: mirá la barra, dice `google.com/search?q=vuelos+a+mendoza`.
    Es un GET, y tu búsqueda quedó escrita en la dirección.
- **POST = paquete: los datos van adentro, en el body.** No se ven en la dirección, y entran muchos más: textos
  largos, muchos casilleros, archivos.
  - *Ejemplo:* Cuando iniciás sesión en una página, tu contraseña no aparece en la barra
    (`...login?clave=1234`): viaja adentro, en un POST.
- **La barra del navegador solo sabe hacer GET.** No es una limitación de n8n: es así en cualquier página. Por eso,
  para probar sin instalar nada, configuramos el webhook en **HTTP Method: GET**. Si lo hubiéramos puesto en POST,
  el navegador no podría tocarlo: daría error, porque el timbre espera un paquete y le llega una postal.
  - *Ejemplo:* ❌ Webhook en POST + dirección pegada en el navegador → no anda. ✅ Webhook en GET + dirección con
    `?nombre=Ana` → anda, y los datos llegan en `query`.
- **¿Por qué no se usa siempre GET, si es tan fácil?** Porque todo queda a la vista, y la dirección tiene un largo
  máximo. Una consulta con un mensaje largo, un archivo o una contraseña no entra (o no conviene) en una postal.
  - *Ejemplo:* Un cliente escribe tres párrafos contando su viaje: eso va en un POST, en el body.
- **Esto se ve enseguida con el formulario.** Cuando alguien aprieta "Enviar" en un formulario, el navegador manda
  un **POST**: los datos van adentro, no en la dirección. Por eso, en el ejemplo que sigue, la dirección del
  formulario no cambia, y los datos igual llegan a n8n.
  - *Ejemplo:* En el flujo 03, después de enviar el formulario, mirá la barra: no dice `?nombre=…`. Los datos
    viajaron en el paquete.

<p style="color:#1a7f37">Resumiendo: la barra del navegador solo manda postales, GET, con los datos a la vista en la dirección, y n8n los pone en query. Para mandar un paquete cerrado, POST, con los datos en el body, hace falta un formulario. Y eso es justo lo que vamos a hacer en un ratito.</p>

```text
EN N8N · Armar la respuesta con lo que llegó
1. Doble clic en el Edit Fields → en INPUT, abrí  query  (clic en la flechita)
2. Clic en  Add Field  (adentro del recuadro punteado) →  Name:  mensaje    Type: String
3. Value: escribí  Hola   y arrastrá  nombre  (el de adentro de query)
   → aparece  {{ $json.query.nombre }}
4. Seguí:  , recibimos tu consulta para viajar a   y arrastrá  destino   y un punto.
   Queda:  Hola {{ $json.query.nombre }}, recibimos tu consulta para viajar a {{ $json.query.destino }}.
5. Cerrá la ventana (✕ o Esc) → renombralo:  Armar la respuesta  → Save
6. Execute workflow  → en la otra pestaña, recargá la dirección (F5)
7. El navegador muestra:
     {"mensaje":"Hola Ana, recibimos tu consulta para viajar a Mendoza."}
```

<p style="color:#1a7f37">¡Ahí está! Le mandamos datos a n8n desde el navegador, n8n los recibió, armó un mensaje, y nos contestó. Eso mismo es lo que hace un formulario de una página web, o una aplicación: tocar el timbre de n8n con datos.</p>

Lo repetís una vez más en tu pantalla con otros datos (`?nombre=Martín&destino=Bariloche`), para que vean que
cambia solo. Recordá decir en voz alta que hay que apretar **Execute workflow** antes de cada prueba.

`PARA EL CHAT` (para que lo tengan; lo prueban ahora si te vienen siguiendo, o después con la grabación):

```text
PARA EL CHAT · Tocá el timbre vos (ahora o después con la grabación)
1. En n8n: Execute workflow (que quede esperando).
2. En otra pestaña, pegá la dirección cambiando los datos:
     http://localhost:5678/webhook-test/saludo?nombre=TU_NOMBRE&destino=A_DONDE_QUIERAS
3. Mirá lo que te contesta el navegador.
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
  pedido GET. Por eso, con el método GET, podemos probar el webhook sin ningún programa extra. (El otro método
  importante es POST, el "paquete cerrado": está explicado arriba, en "¿Por qué body está vacío?".)
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


#### Que el navegador muestre solo el saludo, como una página (opcional, 4 min)

<p style="color:#1a7f37">El saludo llegó, pero se ve feo: con llaves, comillas, y la palabra mensaje. Eso es porque n8n le contesta al navegador con la ficha entera, en formato JSON, que es como se pasan los datos entre programas. A un programa le sirve; a una persona, no. Vamos a hacer que el navegador muestre solo la frase, como si fuera una página. Para eso hay un nodo que se llama Respond to Webhook: responder al webhook. Con él, nosotros elegimos qué se contesta.</p>

```text
Llega un pedido  →  Armar la respuesta  →  Contestar al navegador
(Webhook, GET)       (Edit Fields)          (Respond to Webhook)
```

**En n8n, paso a paso** (sobre el mismo flujo 02):

```text
EN N8N · Que el navegador muestre solo el saludo
1. Doble clic en "Llega un pedido" → en  Respond  cambiá  When Last Node Finishes  por
      Using 'Respond to Webhook' Node     (contestar con el nodo Respond to Webhook)
   → Cerrá la ventana (✕ o Esc)
2. En "Armar la respuesta", clic en el + de su derecha → buscá  respond  → Respond to Webhook
3. Se abre el nodo. Completá:
      Respond With:   Text          (contestar con un texto, no con la ficha)
      Response Body:  arrastrá  mensaje  desde INPUT  → queda  {{ $json.mensaje }}
4. Cerrá la ventana → renombralo:  Contestar al navegador  → Save
5. Execute workflow  → en la otra pestaña, F5
6. El navegador muestra solo:
      Hola Ana, recibimos tu consulta para viajar a Mendoza.
7. (Para que se vea como título grande) volvé a Response Body y dejalo así:
      <h1>{{ $json.mensaje }}</h1>
   → Execute workflow → F5 → la frase aparece grande, en negrita, como el título de una página
```

<p style="color:#1a7f37">¿Ven la diferencia? Antes, el navegador mostraba la ficha, con llaves y comillas. Ahora muestra la frase, como una página cualquiera. Lo que cambió es quién contesta: antes contestaba el webhook solo, con todo lo que había; ahora contesta el nodo Respond to Webhook, con lo que nosotros le dijimos.</p>

**¿Anda en local?** ✅ Sí, sin pasos extra. Está armado en `02b-webhook-saludo-en-el-navegador.json` (con la
dirección `saludo-lindo`, para que no choque con el flujo 02 si importás los dos).

Para explicar:
- **JSON es el formato en que se pasan datos los programas.** Las llaves `{ }`, las comillas y los dos puntos
  arman la ficha: `{"mensaje":"Hola Ana…"}` es "casillero mensaje, valor Hola Ana…". Es lo mismo que ven en n8n,
  pero escrito en una línea.
  - *Ejemplo:* Es como una planilla escrita en un renglón: sirve para que otro programa la lea, pero para leerla
    una persona es incómoda.
- **Respond to Webhook = elegir qué se contesta.** Con *When Last Node Finishes*, el webhook contesta solo, con la
  ficha del último nodo. Con *Using 'Respond to Webhook' Node*, contesta este nodo, con lo que le digas.
  - *Ejemplo:* Es la diferencia entre un contestador automático que lee todo lo que tiene anotado, y una persona
    que contesta solo lo que hace falta.
- **Respond With: Text = contestar con un texto.** Lo que escribas en *Response Body* ("cuerpo de la respuesta")
  es exactamente lo que va a ver el navegador. Se puede mezclar texto fijo con casilleros arrastrados, igual que
  en Edit Fields.
  - *Ejemplo:* `Gracias, {{ $json.mensaje }}` → el navegador muestra "Gracias, Hola Ana, recibimos…".
- **`<h1>` y `</h1>` son marcas de página web (HTML).** Le dicen al navegador "esto es un título grande". No hace
  falta saber HTML: con esta sola marca alcanza para que se vea la diferencia.
  - *Ejemplo:* `<h1>Hola</h1>` se ve como un título grande; `<b>Hola</b>`, en negrita.
- **Los dos nodos trabajan juntos.** Si en el Webhook elegís *Using 'Respond to Webhook' Node*, al final tiene que
  estar el nodo Respond to Webhook; si no, el navegador no recibe el saludo.
  - *Ejemplo:* ❌ Mal: cambiar el Respond del Webhook y olvidarte del nodo nuevo. ✅ Bien: las dos cosas, el
    Respond del Webhook y el nodo al final.

### Otra forma: el formulario de n8n, y cada consulta a Google Sheets (flujo 03) (8 min)

<p style="color:#1a7f37">Escribir datos en una dirección sirve para probar, pero un cliente nunca va a hacer eso. Lo que sí hace un cliente es completar un formulario. Y n8n tiene un trigger que arma el formulario solo: On form submission. Y vamos a hacer algo útil con lo que llega: guardar cada consulta como una fila en una planilla de Google Sheets. Así, al final del día, la agencia tiene todas las consultas anotadas sin copiar nada a mano.</p>

<p style="color:#1a7f37">¿Se acuerdan de la postal y el paquete? Con el webhook mandamos una postal, GET, con los datos en la dirección. El formulario manda un paquete, POST: cuando apretás Enviar, los datos viajan adentro, y la dirección queda limpia. Y hay una ventaja: el nodo del formulario abre el paquete solo. No hay que buscar en body ni en query: los datos aparecen directo, con el nombre de cada pregunta del formulario.</p>

El flujo (está armado en `03-formulario.json`):

```text
Formulario de consulta   →   Ordenar los datos   →   Guardar en la planilla
(n8n Form Trigger)           (Edit Fields)            (Google Sheets: Append row)
```

Lo que tiene que pasar: alguien completa el formulario, y en la planilla aparece una fila nueva con la fecha, el
nombre, el destino y la cantidad de personas.

**¿Anda en local?** ✅ Sí, pero con **dos pasos extra**, porque ahora n8n sale a escribir en Google (es la
"dirección 1": n8n sale a hacer algo):
- **La credencial de Google Sheets.** En n8n local hay que crear antes el permiso en Google Cloud Console
  (*Client ID* y *Client Secret*): unos 15 minutos, una sola vez. El paso a paso es el Ejercicio 8 de la Semana 4
  original ([../ejercicios-alumnos.md](../ejercicios-alumnos.md)). En n8n Cloud alcanza con **Sign in with
  Google**.
- **El formulario se abre solo en tu computadora** (`http://localhost:5678/form/...`), como el webhook. Para que lo
  completen clientes desde su celular, hace falta n8n Cloud.

Por eso, en clase, **este ejemplo lo mostrás vos** con tu credencial ya creada. Ellos lo arman en casa cuando
tengan la credencial (o en n8n Cloud, donde es un botón).

**Antes de la clase (vos):** una planilla de Google Sheets nueva, llamada "Consultas de la agencia", con estos
cuatro títulos en la fila 1, escritos exactamente así:

| A | B | C | D |
|---|---|---|---|
| fecha | nombre | destino | personas |

**En n8n, paso a paso** (lo armás vos desde cero, en tu pantalla, y vas diciendo cada cosa a medida que la
hacés; ellos miran). Son cuatro partes: el formulario, probarlo, ordenar los datos, y guardarlos en la planilla.

**Parte A · Poner el formulario (el trigger)**

```text
EN N8N · Parte A: el formulario
 1. Overview → Create workflow → renombralo:  Formulario a Google Sheets
 2. Clic en el +  (Add first step). A la derecha se abre la lista "What triggers this workflow?"
    (¿qué arranca este flujo?). Hay dos caminos para llegar al formulario; los dos dan el MISMO nodo:
      Camino 1 (el más corto): en la lista, clic en  On form submission
      Camino 2 (si buscaste): escribí  form  en el buscador → clic en  n8n Form
         → se abre un panel con el título "n8n Form" y dos grupos:
              Triggers (1)  ⚡   On new n8n Form event   ← ESTE
              Actions (2)        (Next Form Page, Form Ending: no los usamos hoy)
         → clic en  On new n8n Form event
 3. Se abre la ventana del formulario. Arriba está la dirección (Test URL / Production URL),
    igual que en el webhook. Completá de arriba hacia abajo:
      Form Title:        Consulta de viaje            (el título grande del formulario)
      Form Description:  Contanos a dónde querés viajar y te respondemos.   (el texto de abajo)
 4. Form Elements (las preguntas). La primera ya viene armada; completala:
      Field Name:     Nombre        (el texto de la pregunta, si en tu versión dice "Label", es ese)
      Element Type:   Text          (texto: la persona escribe)
      Required Field: prendido      (obligatoria: no se puede mandar vacía)
 5. Abajo: Add Form Element → segunda pregunta:
      Field Name: Destino     Element Type: Text     Required Field: prendido
 6. Add Form Element → tercera pregunta:
      Field Name: Cantidad de personas     Element Type: Number   (solo números)
 7. Más abajo:  Options → Add option → Path → escribí  consulta-viaje
    (como en el webhook: cambia los números raros por una palabra que se lee)
 8. Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Formulario de consulta  → Save
```

<p style="color:#1a7f37">Fíjense en esta pantalla, porque les va a aparecer muchas veces. Cuando busco algo, por ejemplo form, n8n me muestra la aplicación, y adentro, dos grupos: Triggers y Actions. Los Triggers, los que tienen el rayito, son los que arrancan el flujo: "cuando pasa esto". Las Actions son las que hacen algo en el medio: "hacé esto". Como este es el primer paso, el que arranca todo, elijo el trigger: On new n8n Form event, que quiere decir "cuando hay un formulario nuevo de n8n", o sea, cuando alguien lo completa. Es lo mismo que On form submission, que estaba en la lista de arriba: dos nombres para el mismo nodo.</p>

<p style="color:#1a7f37">Ahora armo las preguntas. Cada pregunta es un Form Element. Le pongo el texto, el tipo, si es texto o número, y si es obligatoria. Lo que escriba en Field Name es lo que ve la persona en el formulario, y también va a ser el nombre del casillero cuando el dato llegue a n8n.</p>

**Parte B · Probar el formulario antes de seguir**

```text
EN N8N · Parte B: probarlo
 1. Execute workflow  → se abre una pestaña nueva con el formulario
    (si no se abre sola: doble clic en el nodo → Test URL → copiala y abrila en otra pestaña)
 2. Completalo:  Nombre: Ana    Destino: Mendoza    Cantidad de personas: 3  → Submit
 3. Volvé a n8n: el nodo se puso verde. Doble clic → OUTPUT:
      Nombre: Ana     Destino: Mendoza     Cantidad de personas: 3
    (más un casillero submittedAt, con la hora en que se mandó)
```

<p style="color:#1a7f37">Miren el OUTPUT. Comparado con el webhook, es mucho más limpio: no hay headers ni query. Cada pregunta del formulario es un casillero, con el nombre de la pregunta. Esto es lo del paquete cerrado: el formulario mandó los datos adentro, y el nodo los abrió solo. Siempre que agrego un trigger, lo pruebo antes de seguir: así, en el próximo nodo, ya tengo datos en INPUT para arrastrar.</p>

**Parte C · Ordenar los datos (Edit Fields)**

```text
EN N8N · Parte C: ordenar los datos
 1. Clic en el + a la derecha del formulario → buscá  edit  → Edit Fields (Set)
 2. En INPUT están Nombre, Destino y Cantidad de personas. Armá cuatro casilleros con Add Field,
    con nombres cortos, en minúscula, IGUALES a los títulos de la planilla:
      Name: fecha      Type: String   Value: {{ $now.toFormat('dd/MM/yyyy HH:mm') }}
                       (este se escribe: tocá el Value, escribí  {{  y pegá lo de adentro;
                        el campo pasa a Expression y abajo se ve la fecha de ahora)
      Name: nombre     Type: String   Value: arrastrá  Nombre   → {{ $json.Nombre }}
      Name: destino    Type: String   Value: arrastrá  Destino  → {{ $json.Destino }}
      Name: personas   Type: Number   Value: arrastrá  Cantidad de personas
                                             → {{ $json['Cantidad de personas'] }}
 3. Execute step → OUTPUT:  fecha: 11/11/2026 12:36   nombre: Ana   destino: Mendoza   personas: 3
 4. Cerrá → renombralo:  Ordenar los datos  → Save
```

<p style="color:#1a7f37">¿Por qué este nodo en el medio? Porque la planilla tiene títulos en minúscula y cortos: fecha, nombre, destino, personas. Y lo que llega del formulario dice Nombre con mayúscula, y Cantidad de personas. Acá los acomodo para que se llamen igual que las columnas, y de paso agrego la fecha. Es como pasar en limpio una ficha antes de archivarla.</p>

**Parte D · Guardar en la planilla (Google Sheets)**

```text
EN N8N · Parte D: guardar en Google Sheets
 1. Clic en el + a la derecha de "Ordenar los datos" → buscá  sheets  → clic en  Google Sheets
    → se abre el mismo tipo de panel que con el formulario: Triggers y Actions.
      Ahora NO es el primer paso: elegí una ACCIÓN →  Append row in sheet
      (agregar una fila a la hoja)
 2. Se abre la ventana. De arriba hacia abajo:
      Credential to connect with:  elegí tu credencial de Google Sheets
      Resource:   Sheet Within Document     (ya viene)
      Operation:  Append Row                (ya viene, porque elegiste esa acción)
      Document:   cambiá "From list" por  By URL  → pegá el link de tu planilla
      Sheet:      Hoja 1  (o como se llame la pestaña de abajo de la planilla)
      Mapping Column Mode:  Map Each Column Automatically
                            (cada casillero va a la columna que se llama igual)
 3. Cerrá → renombralo:  Guardar en la planilla  → Save
 4. Execute workflow  → se abre el formulario → completalo con otros datos → Submit
 5. Volvé a n8n: los tres nodos en verde.
 6. Abrí la planilla: hay una fila nueva →  11/11/2026 12:40 | Martín | Bariloche | 2
```

<p style="color:#1a7f37">Miren que acá aparece otra vez el panel de Triggers y Actions, el mismo que con el formulario. Pero ahora elijo una Action, porque no es el primer paso: el flujo ya arrancó con el formulario, y ahora quiero que haga algo. Agregar una fila. La regla es simple: el primer nodo, un trigger; todos los demás, acciones.</p>

**La pantalla de Triggers y Actions** (la de la captura que aparece al buscar una aplicación):

| Lo que dice | Qué es | Cuándo lo elijo |
|---|---|---|
| **Triggers** ⚡ (con el rayito) | Nodos que **arrancan** el flujo: "cuando pasa esto…" | Solo en el **primer** paso |
| **Actions** | Nodos que **hacen algo** en el medio: "…hacé esto" | En **todos los demás** pasos |
| *On new n8n Form event* | El trigger del formulario de n8n (= *On form submission*) | Para empezar con un formulario |
| *Next Form Page*, *Form Ending* | Acciones del formulario: otra página de preguntas, o la pantalla final | Hoy no se usan |
| *Append row in sheet* | Acción de Google Sheets: agregar una fila | Para guardar cada consulta |

<p style="color:#1a7f37">Miren la planilla: apareció una fila nueva, sola. Esto contesta la pregunta de hace un rato: ¿dónde quedan guardados los datos? Dentro del flujo, viven mientras dura la ejecución. Para que queden para siempre, un nodo los tiene que mandar a algún lado. Acá, a Google Sheets.</p>

Para explicar:
- **On form submission (n8n Form Trigger) = n8n arma un formulario y arranca cuando alguien lo manda.** Por dentro
  es un webhook, pero con una página linda para que una persona complete.
  - *Ejemplo:* Una agencia (con n8n Cloud) comparte el link del formulario por WhatsApp. Cada cliente que lo
    completa dispara el flujo.
- **Cada pregunta del formulario es un casillero.** Lo que escribe la persona llega a n8n con el nombre de la
  pregunta: `Nombre`, `Destino`, `Cantidad de personas`. Se arrastran igual que antes.
  - *Ejemplo:* `{{ $json.Nombre }}` trae lo que escribió la persona en "Nombre" (con mayúscula, porque así se llama
    la pregunta). Para "Cantidad de personas", que tiene espacios, n8n escribe `{{ $json['Cantidad de personas'] }}`
    al arrastrar: corchetes y comillas en vez del punto.
- **Para qué sirve el "Ordenar los datos" del medio.** Deja los casilleros con nombres cortos y en minúscula,
  **iguales a los títulos de la planilla**, y agrega la fecha. Así el nodo de Google Sheets sabe solo qué va en
  cada columna.
  - *Ejemplo:* El casillero `destino` va a la columna "destino". Si en la planilla el título dijera "Destino del
    viaje", no coincidiría y esa columna quedaría vacía.
- **`$now` es "ahora".** Es una palabra especial de n8n que trae la fecha y la hora del momento en que corre el
  flujo. `.toFormat('dd/MM/yyyy HH:mm')` la escribe como estamos acostumbrados: día/mes/año hora:minutos.
  - *Ejemplo:* Una consulta que llega el 11 de noviembre a las 12:36 queda como `11/11/2026 12:36`.
  - *Ojo con la hora:* n8n usa la zona horaria configurada en el flujo. Los flujos de la carpeta ya vienen con la
    hora de Argentina. En uno nuevo: menú **…** del flujo → **Settings** → **Timezone** → *America/Argentina/Buenos
    Aires*. Si no, puede salir con la hora de otro país.
- **Append Row = agregar una fila al final.** Cada consulta es una fila nueva; las de antes no se tocan. Hay otras
  operaciones (leer filas, actualizar una fila), que vemos más adelante.
  - *Ejemplo:* Diez clientes completan el formulario en el día: la planilla termina con diez filas.
- **También tiene dirección de prueba y de verdad.** Como el webhook: con *Execute workflow* funciona una vez (la
  dirección de prueba es `/form-test/consulta-viaje`); publicado con **Publish**, funciona siempre en
  `/form/consulta-viaje`.
  - *Ejemplo:* Si abren la dirección de prueba sin apretar *Execute workflow*, la página dice *Form Trigger isn't
    listening yet* ("el formulario todavía no está escuchando").

**Ejemplo: los nombres de los casilleros y de las columnas**

❌ Mal: casilleros con un nombre y columnas con otro.

```text
Ordenar los datos:   Nombre · Destino del viaje · Cantidad de personas
Planilla (fila 1):   nombre | destino | personas
→ la fila se agrega, pero con columnas vacías
```

✅ Bien: los mismos nombres de los dos lados.

```text
Ordenar los datos:   fecha · nombre · destino · personas
Planilla (fila 1):   fecha | nombre | destino | personas
```

Por qué: con *Map Each Column Automatically*, n8n busca para cada casillero la columna que se llama exactamente
igual. Si no la encuentra, ese dato no va a ningún lado.

<p style="color:#1a7f37">Fíjense que las dos formas hacen lo mismo: entran datos de afuera, n8n los recibe, y los usa en los nodos siguientes. Con el webhook los mandamos en la dirección; con el formulario los carga una persona. Para n8n, en los dos casos, es una ficha con casilleros. Y si queremos que quede guardado, lo mandamos a una planilla.</p>

**Postman (solo se nombra):** si alguna vez ven un tutorial que usa Postman, es una aplicación para mandarle
pedidos a una dirección, como hicimos con el navegador. No la usamos; la explicación está en
[Para leer en casa](#para-leer-en-casa-no-se-da-en-clase).

---

## 118–140 · Bloque 6 · Que el flujo decida: IF y Switch

Hasta acá, todos los datos seguían el mismo camino. En este bloque el flujo **decide**: según el dato, va por un
lado o por otro. Son tres ejemplos cortitos, y cada uno trae **una cosa nueva**:

| Flujo | Nodo de decisión | Lo nuevo que aparece |
|---|---|---|
| `04-if-fin-de-semana.json` | **IF** | Un disparador con **horario** (*Schedule Trigger*) y la fecha de hoy (`$now`) |
| `05-if-descuento.json` | **IF** | Hacer una **cuenta** con un dato (el 10% de descuento) |
| `06-switch-por-tipo.json` | **Switch** | Un formulario con **lista desplegable** |

Los tres andan en local sin pasos extra (más abajo, en cada uno, el detalle).

### Qué es un IF (3 min)

<p style="color:#1a7f37">Un IF, que en inglés quiere decir "si", es un nodo que hace una pregunta y, según la respuesta, manda el dato por uno de dos caminos. Lo usamos todo el tiempo sin darnos cuenta: si llueve, llevo paraguas; si no, no. Si el cliente pagó, le mando la confirmación; si no, le mando un recordatorio.</p>

<p style="color:#1a7f37">El IF tiene dos salidas. Una se llama true, verdadero: por ahí va el dato si la respuesta es sí. La otra se llama false, falso: por ahí va si la respuesta es no. Y cada salida tiene su propio camino, con sus propios nodos.</p>

```text
                    ┌─ true  (sí)  →  lo que se hace si se cumple
dato  →  IF ¿...?  ─┤
                    └─ false (no)  →  lo que se hace si no se cumple
```

Para explicar:
- **IF (si) = una pregunta de sí o no, con dos caminos.** La pregunta se llama **condición** (*condition*). Si se
  cumple, el dato sale por **true** ("verdadero"); si no, por **false** ("falso").
  - *Ejemplo:* "¿El monto es de 1000 o más?" → sí: aplicar descuento; no: precio normal.
- **La condición tiene tres partes: qué miro, cómo lo comparo, y contra qué.** En n8n son tres casilleros: el dato
  (a la izquierda), la comparación en el medio (*is equal to* = "es igual a", *is greater than* = "es mayor que",
  *contains* = "contiene"…) y el valor (a la derecha).
  - *Ejemplo:* `monto` · *is greater than or equal to* ("es mayor o igual a") · `1000`.
- **Primero se elige el tipo de dato de la comparación.** En el desplegable del medio, las comparaciones están
  agrupadas por tipo: **String** (texto), **Number** (número), **Date & Time** (fecha), **Boolean** (sí/no). Para
  comparar números, se elige una de *Number*.
  - *Ejemplo:* "¿Es mayor que 1000?" → *Number* → *is greater than*. "¿Dice urgente?" → *String* → *contains*.
- **Cada dato se pregunta por separado.** Si llegan cinco consultas, el IF pregunta cinco veces: algunas pueden ir
  por true y otras por false en la misma ejecución.
  - *Ejemplo:* Tres presupuestos de USD 500, 1200 y 3000: el de 500 va por false, los otros dos por true.

### IF, ejemplo 1: ¿hoy es fin de semana? (flujo 04) (6 min)

El flujo:

```text
Todos los días a las 9  →  ¿Es fin de semana?  ─ true  → Fin de semana: no mandar
(Schedule Trigger)          (IF)                └ false → Día de semana: mandar resumen
```

Lo que tiene que salir hoy (miércoles): `Hoy es miércoles: mandamos el resumen del día.`

**Lo nuevo:** el disparador con horario (*Schedule Trigger*) y `$now`, que es "ahora".

**¿Anda en local?** ✅ Sí, sin pasos extra, para probarlo con *Execute workflow*. Para que arranque **solo** todos
los días a las 9 hacen falta tres cosas: que el flujo esté publicado (**Publish**), que la computadora y Docker
estén prendidos a esa hora, y la zona horaria bien puesta (el archivo ya viene con la de Argentina).

<p style="color:#1a7f37">Primer ejemplo. Imaginen que la agencia quiere mandar un resumen todos los días a las 9, pero no los sábados ni los domingos. Para eso usamos dos cosas nuevas. Un disparador con horario, que arranca solo todos los días a las 9. Y un IF que pregunta: ¿hoy es fin de semana?</p>

**En n8n, paso a paso:**

```text
EN N8N · IF 1: ¿hoy es fin de semana? (flujo 04)
 1. Overview → Create workflow → nombre:  IF fin de semana
 2. + (Add first step) → On a schedule  (con un horario)
      Trigger Interval:       Days   (cada tantos días)
      Days Between Triggers:  1      (todos los días)
      Trigger at Hour:        9am    (a las 9)
      Trigger at Minute:      0
    Cerrá → renombralo:  Todos los días a las 9
 3. + a la derecha → buscá  if  → If
 4. En Conditions (condiciones), tres casilleros:
      izquierda (value1):  escribí  {{ $now.weekday }}
                           (el número del día de hoy: lunes = 1 … sábado = 6, domingo = 7)
      medio:               Number → is greater than or equal to   (es mayor o igual a)
      derecha (value2):    6
    Cerrá → renombralo:  ¿Es fin de semana?
 5. El IF tiene dos salidas a la derecha:  true  y  false
    En el + de  true  → Edit Fields → campo  mensaje  (String):
      Hoy es {{ $now.setLocale('es').toFormat('cccc') }}: no mandamos el resumen.
    → renombralo:  Fin de semana: no mandar
 6. En el + de  false  → Edit Fields → campo  mensaje :
      Hoy es {{ $now.setLocale('es').toFormat('cccc') }}: mandamos el resumen del día.
    → renombralo:  Día de semana: mandar resumen
 7. Menú … del flujo → Settings → Timezone:  America/Argentina/Buenos Aires → Save
 8. Execute workflow  (no hace falta esperar a las 9: lo dispara ahora)
 9. Se pone verde el camino de  false  (hoy es miércoles):
      mensaje: Hoy es miércoles: mandamos el resumen del día.
```

<p style="color:#1a7f37">Miren el canvas: el dato fue por false, porque hoy no es fin de semana, y el camino de true quedó gris: no se ejecutó. Si lo corriéramos un sábado, sería al revés. El IF eligió solo por dónde ir.</p>

Para explicar:
- **On a schedule (Schedule Trigger) = arranca solo, con un horario.** Se elige cada cuánto (minutos, horas, días,
  semanas) y a qué hora. Es el disparador de "todos los días a las 9".
  - *Ejemplo:* "Todos los lunes a las 8" → *Trigger Interval: Weeks*, el lunes, a las 8am.
- **Execute workflow lo prueba sin esperar.** Aunque el trigger diga "a las 9", al apretar *Execute workflow* arranca
  en el momento. Para que funcione solo a las 9 de verdad, hay que publicarlo (**Publish**).
  - *Ejemplo:* Lo armás a las 15, lo probás a las 15 con *Execute workflow*, y lo publicás para que mañana a las 9
    arranque solo.
- **`$now` es "ahora", y sabe muchas cosas de la fecha.** `$now.weekday` es el número del día de la semana;
  `$now.setLocale('es').toFormat('cccc')` es el nombre del día, en castellano.
  - *Ejemplo:* Un miércoles, `$now.weekday` es `3` y el nombre del día es "miércoles".
- **El camino que no se usa queda gris.** No es un error: el dato fue por el otro lado.
  - *Ejemplo:* Hoy *Fin de semana: no mandar* queda gris; el sábado, el gris va a ser el otro.
- **Para probar el otro camino sin esperar al sábado:** cambiar el 6 por un 3 (miércoles) y volver a ejecutar. Ahora
  va por *true*. Después se vuelve a poner el 6.
  - *Ejemplo:* Es la forma de comprobar que los dos caminos están bien armados.

### IF, ejemplo 2: ¿le corresponde descuento? (flujo 05) (6 min)

El flujo:

```text
Pedido de presupuesto  →  ¿Monto de 1000 o más?  ─ true  → Con descuento
(Webhook, GET)            (IF)                    └ false → Sin descuento
```

Lo que tiene que salir (probado):
- con `?nombre=Ana&monto=1500` → `Hola Ana: tu viaje de USD 1500 tiene 10% de descuento. Pagás USD 1350.`
- con `?nombre=Luis&monto=800` → `Hola Luis: tu viaje de USD 800 no llega a USD 1000, así que no tiene descuento.`

**Lo nuevo:** hacer una cuenta con un dato (`monto * 0.9`) y el interruptor *Convert types where required*.

**¿Anda en local?** ✅ Sí, sin pasos extra, **solo desde tu computadora** (es un webhook con `localhost`, como el
flujo 02).

<p style="color:#1a7f37">Segundo ejemplo, ahora con una cuenta. La agencia hace 10% de descuento a los viajes de mil dólares o más. Le mandamos al flujo el nombre y el monto por la dirección, como en el webhook de antes, y el IF decide si corresponde el descuento. Si corresponde, n8n hace la cuenta solo.</p>

**En n8n, paso a paso:**

```text
EN N8N · IF 2: ¿le corresponde descuento? (flujo 05)
 1. Overview → Create workflow → nombre:  IF descuento
 2. + → On webhook call → Webhook:
      HTTP Method: GET     Path: presupuesto     Respond: When Last Node Finishes
    → renombralo:  Pedido de presupuesto
 3. Execute workflow, y en otra pestaña:
      http://localhost:5678/webhook-test/presupuesto?nombre=Ana&monto=1500
    (así el IF ya tiene datos en INPUT para arrastrar)
 4. + → If. En Conditions:
      izquierda:  arrastrá  monto  (adentro de query) → {{ $json.query.monto }}
      medio:      Number → is greater than or equal to
      derecha:    1000
    Abajo, prendé el interruptor:  Convert types where required  (convertir tipos cuando haga falta)
    → renombralo:  ¿Monto de 1000 o más?
 5. + de  true  → Edit Fields → campo  mensaje :
      Hola {{ $json.query.nombre }}: tu viaje de USD {{ $json.query.monto }} tiene 10% de descuento.
      Pagás USD {{ $json.query.monto * 0.9 }}.
    → renombralo:  Con descuento
 6. + de  false  → Edit Fields → campo  mensaje :
      Hola {{ $json.query.nombre }}: tu viaje de USD {{ $json.query.monto }} no llega a USD 1000,
      así que no tiene descuento.
    → renombralo:  Sin descuento
 7. Save → Execute workflow → en el navegador, la dirección con monto=1500  → con descuento
 8. Execute workflow otra vez → la dirección con  monto=800                 → sin descuento
```

<p style="color:#1a7f37">Miren la cuenta: escribimos monto por cero coma nueve, y n8n la hizo solo: mil quinientos por cero coma nueve, mil trescientos cincuenta. Las expresiones no solo traen datos: también pueden hacer cuentas con ellos.</p>

Para explicar:
- **Dentro de `{{ }}` se pueden hacer cuentas.** Sumar (`+`), restar (`-`), multiplicar (`*`) y dividir (`/`). La
  cuenta se hace con el dato que llegó.
  - *Ejemplo:* `{{ $json.query.monto * 0.9 }}` es "el monto por 0,9", o sea, el monto con 10% menos. Ojo: en las
    cuentas el decimal se escribe con **punto** (`0.9`), no con coma.
- **Por qué hay que prender *Convert types where required*.** Lo que llega en la dirección (`monto=1500`) llega como
  **texto**, aunque parezca un número. El IF, para comparar "¿es mayor que 1000?", necesita un **número**. Con ese
  interruptor prendido, n8n convierte el texto "1500" en el número 1500 antes de comparar.
  - *Ejemplo:* Con el interruptor apagado, el IF se pone rojo con un error de tipo (*Wrong type*: "tipo
    equivocado"): está comparando texto contra número. Es el mismo error de la Clase 3.
- **El webhook contesta con lo que armó el último nodo que corrió.** Como cada vez corre un solo camino, el navegador
  recibe el mensaje de *Con descuento* o el de *Sin descuento*, según el monto.
  - *Ejemplo:* Con 1500 contesta el de arriba; con 800, el de abajo. Es el mismo flujo, con dos respuestas posibles.
- **El 1000 justo, ¿qué hace?** *Greater than or equal to* es "mayor **o igual**": 1000 va por *true*. Si fuera
  *is greater than* ("mayor que"), 1000 iría por *false*.
  - *Ejemplo:* Elegir bien la comparación es decidir qué pasa con el caso del borde.

### Qué es un Switch, y el ejemplo (flujo 06) (7 min)

<p style="color:#1a7f37">El IF tiene un límite: solo dos caminos, sí o no. ¿Y si hay más opciones? Por ejemplo, la consulta puede ser de un vuelo, de un hotel, de un paquete, o de otra cosa. Para eso está el Switch, que en inglés quiere decir "interruptor" o "selector": como la perilla de un lavarropas, que según dónde la pongas elige un programa distinto. El Switch mira el dato y lo manda por una de varias salidas.</p>

<p style="color:#1a7f37">Y tiene algo muy importante: una salida para lo que no encaja en ninguna regla. Así ninguna consulta se pierde en el camino.</p>

El flujo:

```text
                                           ┌─ Vuelos   → Para el área de vuelos
Formulario con tipo  →  ¿Qué tipo de      ─┼─ Hoteles  → Para el área de hoteles
(n8n Form, lista         consulta?         ├─ Paquetes → Para el área de paquetes
 desplegable)            (Switch)          └─ Otra     → Para revisar a mano
```

Lo que tiene que salir (probado): eligiendo "Vuelo" → `Vuelos: atender a Ana.`; "Paquete" → `Paquetes: atender a
Ana.`; "Otra cosa" → `Otra cosa: Ana necesita que alguien lo lea.`

**Lo nuevo:** el formulario con **lista desplegable** (*Dropdown List*) y el Switch con salida para "lo demás".

**¿Anda en local?** ✅ Sí, sin pasos extra, con la condición de siempre: el formulario se abre solo en tu
computadora.

**En n8n, paso a paso:**

```text
EN N8N · Switch: cada consulta a su área (flujo 06)
 1. Overview → Create workflow → nombre:  Switch por tipo
 2. + → On form submission  (o buscá  form  → n8n Form → Triggers → On new n8n Form event):
      Form Title:  Consulta a la agencia
      Form Elements → primer campo:  Nombre  (texto, Required Field prendido)
      Add Form Element → segundo campo:  Tipo de consulta
        Element Type:  Dropdown List  (lista desplegable)
        Field Options → agregá cuatro opciones:  Vuelo · Hotel · Paquete · Otra cosa
        Required Field: prendido
    → renombralo:  Formulario con tipo
 3. Execute workflow → completá el formulario una vez (Ana, Vuelo), para tener datos en INPUT
 4. + → buscá  switch  → Switch.   Mode: Rules (reglas)
    Routing Rules (reglas para repartir) → primera regla:
      izquierda:  arrastrá  Tipo de consulta  → {{ $json['Tipo de consulta'] }}
      medio:      String → is equal to   (es igual a)
      derecha:    Vuelo
      Rename Output: prendido → Output Name:  Vuelos
    Add Routing Rule → igual, con  Hotel   → Output Name: Hoteles
    Add Routing Rule → igual, con  Paquete → Output Name: Paquetes
 5. Options → Add option → Fallback Output  (salida para lo que no encaja):  Extra Output
    Add option → Rename Fallback Output:  Otra
    → renombralo:  ¿Qué tipo de consulta?
 6. Ahora el Switch tiene cuatro salidas. En el + de cada una, un Edit Fields con un campo  aviso :
      Vuelos   →  Vuelos: atender a {{ $json.Nombre }}.
      Hoteles  →  Hoteles: atender a {{ $json.Nombre }}.
      Paquetes →  Paquetes: atender a {{ $json.Nombre }}.
      Otra     →  Otra cosa: {{ $json.Nombre }} necesita que alguien lo lea.
 7. Save → Execute workflow → completá el formulario eligiendo  Paquete
    → se pone verde solo el camino de Paquetes
 8. Repetilo eligiendo  Otra cosa  → va por la salida  Otra
```

<p style="color:#1a7f37">Vean: cada vez se prende un solo camino, el que corresponde. Y cuando elegimos "Otra cosa", que no tiene regla, no se perdió: fue por la salida Otra, para que alguien la revise. Esa salida es la red de seguridad del Switch.</p>

Para explicar:
- **Switch (selector) = varias salidas, una por regla.** Cada regla es una condición, igual que la del IF. El dato
  sale por la primera regla que se cumple.
  - *Ejemplo:* Regla 1: ¿es "Vuelo"? → salida Vuelos. Regla 2: ¿es "Hotel"? → salida Hoteles. Y así.
- **La salida para "lo demás" (*Fallback Output*).** Si el dato no cumple ninguna regla, sin esta salida se pierde en
  silencio: no da error, simplemente no sigue. Con ella, va a un camino para revisarlo.
  - *Ejemplo:* Mañana alguien agrega "Crucero" a la lista y nadie toca el Switch: sin *Fallback*, esas consultas
    desaparecen; con *Fallback*, caen en "Otra".
- **Ponerle nombre a cada salida (*Rename Output*).** Si no, se llaman 0, 1, 2… En el canvas se ve el nombre al lado
  de cada salida, y el flujo se lee solo.
  - *Ejemplo:* "Vuelos", "Hoteles", "Paquetes", "Otra" en vez de "Output 0", "Output 1"…
- **La lista desplegable (*Dropdown List*) ayuda al Switch.** Como la persona elige entre opciones fijas, el texto
  llega siempre escrito igual, y la regla "es igual a Vuelo" funciona. Si fuera un casillero libre, alguien podría
  escribir "vuelo", "VUELO" o "pasaje", y no coincidiría.
  - *Ejemplo:* Por eso, cuando el flujo tiene que decidir según una respuesta, conviene que la respuesta sea una
    lista y no un texto libre.
- **¿IF o Switch?** Dos caminos (sí o no) → IF. Tres o más → Switch. Poner un IF adentro de otro para tener tres
  caminos funciona, pero se complica rápido.
  - *Ejemplo:* "¿Pagó?" → IF. "¿Vuelo, hotel o paquete?" → Switch.

**Ejemplo: elegir entre IF y Switch**

❌ Mal: un IF colgado de otro IF para tener tres caminos.

```text
IF ¿es Vuelo? ─ true → Vuelos
              └ false → IF ¿es Hotel? ─ true → Hoteles
                                       └ false → IF ¿es Paquete? ─ true → Paquetes
                                                                  └ false → ...
```

✅ Bien: un Switch, una regla por opción y una salida para lo demás.

```text
Switch ─ Vuelos · Hoteles · Paquetes · Otra
```

Por qué: el Switch se lee de un vistazo, y agregar una opción nueva es agregar una regla, no otro IF.

`PARA EL CHAT` (opcional; das las respuestas sin esperar):

```text
PARA EL CHAT · ¿IF o Switch?
1. Si el cliente pagó la seña, mandarle la confirmación; si no, un recordatorio.
2. Según la provincia del cliente (Córdoba, Mendoza, Salta, otra), mandarlo a un vendedor distinto.
3. Si el mail dice "urgente", avisarle al dueño.
```

Respuestas: **1 → IF** (sí o no); **2 → Switch** (cuatro caminos, con "otra" como salida para lo demás); **3 → IF**.

---

## 140–143 · Cierre

<p style="color:#1a7f37">Repasemos lo de hoy en una frase cada uno. n8n corre en una caja de Docker, en nuestra computadora, y se abre en localhost dos puntos 5678. Un workflow es una receta: un trigger que la arranca, y nodos que hacen una cosa cada uno, unidos por flechas. Los datos son fichas con casilleros, que pasan por las flechas de un nodo al otro, y se usan arrastrándolos. Los datos pueden llegar de afuera, por un webhook o por un formulario, y si queremos que queden guardados, los mandamos a una planilla. Y el flujo puede decidir: con un IF, cuando hay dos caminos, y con un Switch, cuando hay más.</p>

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
6. Las consultas pueden ser de vuelo, hotel, paquete u otra cosa. ¿Qué nodo uso para repartirlas?
   a) IF   b) Switch   c) Edit Fields
```

Respuestas: **1a, 2b, 3b, 4a, 5b, 6b.** Leés en voz alta cuántos acertaron cada una. La que suele fallar es la 3: si
pasa, volvés al Paso 3 del Bloque 4 y arrastrás el casillero otra vez, en vivo.

---

## Para leer en casa (no se da en clase)

Estas partes se sacaron de la clase para que entre todo, pero quedan acá para el que quiera profundizar.

### A · Otras cajas que se pueden traer con Docker

Cualquier programa que tenga su imagen publicada. Las imágenes
se buscan en **Docker Hub**, que es como un Play Store de cajas: ahí cada empresa o proyecto publica la suya. Algunos
ejemplos que se pueden traer igual que n8n:

| Imagen (lo que se busca) | Qué es | Para qué le serviría a alguien que automatiza |
|---|---|---|
| `hello-world` | Una caja mínima que solo muestra un mensaje y se apaga | Probar que Docker anda, en un minuto |
| `postgres` | Una base de datos (PostgreSQL): un lugar ordenado para guardar mucha información | Guardar los clientes o los pedidos que llegan por n8n, en vez de una planilla |
| `mysql` | Otra base de datos, muy usada en páginas web | Lo mismo: guardar datos; muchas tiendas online la usan |
| `wordpress` | El programa con el que se hacen muchas páginas web | Armar una web de prueba con un formulario que le mande datos a n8n |
| `ollama/ollama` | Para correr modelos de inteligencia artificial en tu computadora | IA sin pagar por uso (en el curso la instalamos de otra forma, en la Semana 7) |
| `n8nio/n8n` otra vez | Una segunda copia de n8n, separada de la tuya | Practicar sin miedo a romper tu n8n de siempre (con otro nombre y otro puerto, por ejemplo 5679) |

Para explicar:
- **Todas se traen igual: buscar, Pull, Run.** Lo que aprendieron con n8n sirve para cualquier caja. Lo único que
  cambia es la configuración de cada una (qué puerto usa, qué carpeta), y eso lo dice la página de la imagen en
  Docker Hub.
  - *Ejemplo:* n8n atiende en el 5678; una base de datos `postgres` atiende en el 5432. Cada caja, su número de
    puerta.
- **Cada caja está separada de las otras.** Pueden tener n8n y una base de datos prendidas a la vez, y no se pisan.
  Si una se rompe, las otras siguen.
  - *Ejemplo:* Como departamentos de un edificio: si se inunda el 3.° B, el 5.° A sigue seco.
- **Usar siempre la imagen oficial.** En Docker Hub cualquiera puede publicar cajas, y hay copias con nombres
  parecidos. Las oficiales tienen una etiqueta (*Docker Official Image* o *Verified Publisher*) o el usuario de la
  empresa.
  - *Ejemplo:* Para n8n, `n8nio/n8n` (la cuenta de la empresa n8n). No `alguien/n8n`, que puede estar vieja o
    modificada.
- **Cada caja ocupa lugar y memoria.** Las imágenes pesan (la de n8n, unos 2 GB) y cada caja prendida usa memoria de
  la computadora. Conviene prender solo las que se usan.
  - *Ejemplo:* Si la computadora anda lenta, en **Containers** apagás con ■ las cajas que no estés usando.

### B · ¿Qué anda en n8n local y qué no? (completo)

Para explicar:
- **Dirección 1: n8n sale a hacer algo (anda en local).** Cuando n8n manda, lee o escribe, es tu computadora la
  que sale a internet. Eso funciona igual que en la nube. Lo único que hace falta es la **credencial**
  (*credential*): el permiso para entrar a tu cuenta de esa aplicación.
  - *Ejemplo:* Mandar un mail con Gmail, agregar una fila en Google Sheets, mandarle un mensaje a un cliente por
    WhatsApp o por Telegram, preguntarle algo a una IA como Gemini.
- **Dirección 2: la aplicación le avisa a n8n (no anda en local, así nomás).** Para eso la aplicación necesita una
  dirección de internet pública para tocar el timbre (un webhook con `https://`). `localhost` no sirve: no sale de
  tu computadora.
  - *Ejemplo:* "Cuando llega un WhatsApp, respondé" (*WhatsApp Trigger*), "cuando le escriben al bot de Telegram"
    (*Telegram Trigger*), "cuando Mercado Pago avisa un pago", "cuando alguien completa el formulario de mi página
    web". Todos necesitan que la aplicación encuentre a n8n en internet.
- **La excepción: los disparadores que "preguntan cada tanto".** Algunos disparadores no esperan el aviso: es n8n el
  que va y pregunta cada uno o dos minutos "¿hay algo nuevo?". A eso se le dice **polling** ("sondeo"). Como es n8n el
  que sale (dirección 1), anda en local.
  - *Ejemplo:* *Gmail Trigger* ("cuando llega un mail") y *Google Sheets Trigger* ("cuando se agrega una fila")
    funcionan en local: n8n revisa tu casilla o tu planilla cada tanto. Solo mientras la computadora esté prendida.
- **Google en local pide un paso extra: crear tu propia "aplicación" en Google.** Para que n8n entre a tu Gmail o a
  tus planillas, Google pide un permiso con *OAuth2* (el "iniciar sesión con Google" para programas). En n8n
  Cloud es un botón: **Sign in with Google**, y listo. En n8n local, ese botón solo no alcanza: antes hay que crear
  un proyecto en **Google Cloud Console** (la página de Google para programadores), sacar un *Client ID* y un
  *Client Secret*, y pegarlos en n8n. Son unos 15 minutos, una sola vez, y sirve para Gmail, Sheets, Drive y
  Calendar.
  - *Ejemplo:* En la nube: credencial de Google Sheets → **Sign in with Google** → elegís tu cuenta → listo. En
    local: lo mismo, pero antes de ese botón completás el *Client ID* y el *Client Secret* de tu proyecto de Google.
    El paso a paso está en el Ejercicio 8 de la Semana 4 original ([../ejercicios-alumnos.md](../ejercicios-alumnos.md)).
- **Para la dirección 2 en local existe un "puente", pero es avanzado.** Se llama **túnel** (*tunnel*): un programa
  que le da a tu n8n local una dirección pública de internet, mientras la computadora esté prendida. No lo usamos
  ahora; para recibir avisos de verdad, lo simple es n8n Cloud.
  - *Ejemplo:* Para que WhatsApp le avise a tu n8n local que llegó un mensaje, haría falta el túnel. En la Semana 8
    está explicado como ejercicio opcional.

**La tabla para tener a mano: qué anda en local y qué hace falta**

| Aplicación | Lo que queremos | ¿Anda en n8n local? | Paso extra en local | En n8n Cloud |
|---|---|---|---|---|
| Trigger manual, Edit Fields, horario (*Schedule*) | Probar, armar datos, correr a una hora | ✅ Sí | Ninguno (el horario, solo con la compu prendida) | ✅ Igual |
| Webhook / formulario de n8n | Mandarle datos a n8n | ✅ Sí, **solo desde tu computadora** | Ninguno, pero nadie de afuera lo puede usar | ✅ Y desde cualquier lado |
| Gmail | Mandar mails / leer mails | ✅ Sí | Crear el proyecto en Google Cloud (OAuth2, una vez) | ✅ Botón *Sign in with Google* |
| Gmail Trigger | Cuando llega un mail | ✅ Sí (pregunta cada tanto) | El mismo proyecto de Google | ✅ Igual |
| Google Sheets | Leer y escribir filas | ✅ Sí | El mismo proyecto de Google | ✅ Botón *Sign in with Google* |
| Google Sheets Trigger | Cuando se agrega una fila | ✅ Sí (pregunta cada tanto) | El mismo proyecto de Google | ✅ Igual |
| IA (Gemini, OpenAI) | Preguntarle algo a una IA | ✅ Sí | Ninguno: una clave (*API Key*) | ✅ Igual |
| Telegram | Mandar mensajes de un bot | ✅ Sí | Ninguno: el código del bot (*token*) | ✅ Igual |
| Telegram Trigger | Cuando le escriben al bot | ❌ No | Necesita dirección `https://` pública (túnel) | ✅ Sí |
| WhatsApp | Mandar mensajes | ✅ Sí | La cuenta de Meta para desarrolladores y su *token* | ✅ Igual |
| WhatsApp Trigger | Cuando llega un WhatsApp | ❌ No | Necesita dirección `https://` pública (túnel) | ✅ Sí |
| Mercado Pago (con HTTP Request) | Consultar pagos | ✅ Sí | Ninguno: una clave | ✅ Igual |
| Mercado Pago, avisos | Cuando entra un pago | ❌ No | Necesita dirección `https://` pública (túnel) | ✅ Sí |
| Formulario de tu página web (Typeform, Tally, una web propia) | Que la web le mande cada consulta a n8n | ❌ No | Necesita dirección `https://` pública (túnel) | ✅ Sí |

**Regla para todo el curso:** cada vez que usemos un ejemplo en n8n local, decimos si necesita algún paso extra.
De los flujos de hoy, solo el 03 necesita un paso extra (la credencial de Google Sheets). Los demás no usan
credenciales, y los datos los mandamos desde nuestra propia computadora.

**Ejemplo: elegir local o nube según el flujo**

❌ Mal: armar en local un flujo que espera avisos de afuera.

```text
"Armé en mi n8n local un WhatsApp Trigger para que responda solo a los clientes.
 Le mandé un mensaje de prueba y no pasa nada."
```

✅ Bien: mirar para qué lado va el mensaje antes de armar.

```text
"Mi flujo empieza cuando llega un WhatsApp: es dirección 2, la aplicación le avisa a n8n.
 En local no va a llegar. Lo armo en n8n Cloud (o con un túnel)."
```

Por qué: en la dirección 2, la aplicación tiene que encontrar a n8n en internet, y `localhost` solo existe adentro
de tu computadora. No es un error de configuración: así no puede llegar.

### C · Postman: qué es y por qué no lo usamos

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

## Las trabas más comunes

No se resuelven en vivo, caso por caso. Esta tabla sirve para responder al final de la clase o en la consulta, y
para que el alumno la lea solo cuando vuelve a ver la grabación. Si una misma traba le pasa a muchos a la vez (por
ejemplo, todos ven `not registered`), ahí sí se explica en el momento, para todos.

| Lo que ven | Por qué pasa | Qué hacer |
|---|---|---|
| `localhost:5678` dice "No se puede acceder a este sitio" | n8n está apagado o todavía arrancando | Docker Desktop → Containers → ▶ en n8n. Esperar el punto verde y recargar. |
| Docker Desktop dice "Engine stopped" o no abre | Docker todavía está arrancando, o falta WSL | Esperar un minuto. Si sigue, que se cree la prueba de n8n Cloud y lo arreglen después con la guía de la Semana 2. |
| Entraron a n8n y está vacío, sin sus flujos | Hicieron *Run* desde **Images** y armaron una caja nueva | Apagar esa caja (■) y prender la de siempre desde **Containers**. |
| En el segundo Edit Fields, INPUT está vacío | El nodo anterior todavía no se ejecutó | Cerrar la ventana y apretar *Execute workflow*; o el botón de INPUT que ejecuta los nodos anteriores. |
| El saludo sale "Hola , gracias por escribirnos desde ." | La expresión está mal escrita (una letra, una mayúscula) | Borrar lo escrito y arrastrar el casillero desde INPUT. |
| El navegador dice `The requested webhook "saludo" is not registered` | No apretaron *Execute workflow* antes, o ya usaron esa vez; o la dirección no es igual al Path (`Saludo!` ≠ `saludo`); o cerraron la pestaña de n8n | *Execute workflow*, dejar n8n abierto, y cargar la dirección copiada del nodo. El texto entre comillas del error dice qué dirección se pidió: compararlo con el Path. |
| El navegador muestra `{"message":"Workflow was started"}` | En el Webhook, *Respond* quedó en *Immediately* | Cambiar *Respond* a **When Last Node Finishes**. |
| El navegador queda cargando mucho tiempo | El flujo se trabó en un nodo, o falta el Edit Fields | Mirar el canvas: qué nodo quedó gris o rojo. |
| En el webhook, el mensaje sale con huecos | La dirección no tiene `?nombre=...&destino=...`, o tiene espacios | Copiar la dirección del `PARA EL CHAT` y cambiar solo los valores. |
| En n8n Cloud, la dirección de localhost no anda | En la nube no hay localhost | Usar la dirección propia: `https://tunombre.app.n8n.cloud/webhook-test/saludo?...` |
| En Google Sheets, la fila se agrega pero con columnas vacías | Los nombres de los casilleros no son iguales a los títulos de la planilla | Que *Ordenar los datos* use exactamente `fecha`, `nombre`, `destino`, `personas`, igual que la fila 1. |
| Google Sheets pide credencial o da error de permiso | En n8n local falta crear el permiso en Google Cloud | Ejercicio 8 de la Semana 4 original. En n8n Cloud: *Sign in with Google*. |
| La fecha del formulario sale con otra hora | El flujo usa otra zona horaria | Menú **…** del flujo → **Settings** → **Timezone** → *America/Argentina/Buenos Aires*. |
| El IF 2 se pone rojo con *Wrong type* | Lo que llega en la dirección es texto, y el IF compara números | Prender *Convert types where required* en el IF. |
| El Switch manda todo a *Otra* | El texto de la regla no es igual al de la lista (mayúscula, tilde, espacio) | Copiar en la regla exactamente la opción de la lista: `Vuelo`, `Hotel`, `Paquete`. |
| Un nodo en rojo con *expects a number but we got…* | En Edit Fields, el tipo del casillero es Number y el valor es texto | Cambiar el tipo a String (o poner un número de verdad). |
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
- [ ] Cambiar los datos y ver que el flujo sigue andando sin tocar los pasos.
- [ ] Ver un nodo en rojo, leer el mensaje de error (dónde, qué, en qué ficha) y arreglarlo; y saber que verde no
      siempre quiere decir que salió bien.
- [ ] Mandarle datos a n8n desde el navegador con un webhook, y saber que un formulario hace lo mismo.
- [ ] Saber que para guardar los datos hay que mandarlos a algún lado (Google Sheets), y qué paso extra pide Google
      en n8n local.
- [ ] Usar un IF para dos caminos y un Switch para tres o más, con su salida para "lo demás".

---

## Glosario de esta parte

| Palabra | Qué quiere decir | Ejemplo |
|---|---|---|
| **Automatizar** | Que una computadora haga sola una tarea repetitiva, con pasos fijos. | El débito automático de la luz. |
| **Docker** | Programa que corre otros programas adentro de una caja, con todo lo que necesitan. | n8n corre en Docker. |
| **Docker Desktop** | La versión de Docker con ventanas y botones. | Containers → ▶ para prender n8n. |
| **Imagen** | El molde de un programa, que se baja una sola vez. | `n8nio/n8n`, en la pestaña Images. |
| **Contenedor** (*container*) | La caja armada con ese molde, que se prende y se apaga. | La fila "n8n" en Containers. |
| **Dependencias** | Los otros programas que un programa necesita para funcionar. | n8n depende de Node. |
| **Docker Hub** | La página donde se publican las imágenes; un "Play Store de cajas". | `n8nio/n8n`, `postgres`. |
| **Pull** | Traer (descargar) una imagen de Docker Hub a tu computadora. | Buscar `n8nio/n8n` → Pull. |
| **Tag** (etiqueta) | La versión de una imagen. | `latest` = la última. |
| **Run** | Armar y prender una caja nueva a partir de una imagen. Se hace una sola vez. | Images → ▶ → Optional settings. |
| **Logs** | El "diario" de una caja: lo que va haciendo el programa. | *Editor is now accessible…* |
| **Base de datos** | Un programa para guardar mucha información ordenada. | `postgres`, `mysql`. |
| **VPS / servidor** | Una computadora alquilada en internet, siempre prendida. | Donde vive n8n de un negocio. |
| **Credenciales** | Las claves que n8n guarda para conectarse a otras aplicaciones. No viajan al descargar un flujo. | La cuenta de Gmail conectada. |
| **Polling** (sondeo) | Un disparador que pregunta cada tanto "¿hay algo nuevo?". Anda en local. | *Gmail Trigger*, *Google Sheets Trigger*. |
| **OAuth2** | El "iniciar sesión con Google" para programas: le das permiso a n8n sin darle tu contraseña. | En local pide un proyecto en Google Cloud. |
| **Google Cloud Console** | La página de Google para programadores, donde se crea el permiso para n8n local. | `console.cloud.google.com` |
| **Túnel** (*tunnel*) | Un programa que le da a tu n8n local una dirección pública de internet. Avanzado. | Para recibir WhatsApp en local (Semana 8). |
| **Token / API Key** | Una clave larga que una aplicación te da para que n8n se conecte. | El *token* de un bot de Telegram. |
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
| **Settings** (ajustes) | Opciones avanzadas de cómo se comporta un nodo. Hoy no se tocan. | Reintentar si falla. |
| **Manual Mapping** | Modo de Edit Fields para armar los campos a mano, uno por uno. | El que viene y el que usamos. |
| **Fields to Set** | La lista de casilleros que va a tener la ficha de salida de Edit Fields. | `nombre`, `ciudad`. |
| **Add Field** | Agregar un casillero nuevo (nombre, tipo y valor). | Las palabras de adentro del recuadro punteado de Fields to Set. |
| **Include Other Input Fields** | Si está prendido, la salida suma lo que llegó por la entrada. | Apagado: solo tus campos. |
| **✕ (cerrar la ventana)** | Cerrar la ventana del nodo y volver al flujo (al canvas). | También con Esc. |
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
| **headers** (encabezados) | El "sobre" del pedido: lo que el navegador manda solo (quién es, idioma, qué acepta). | `user-agent`, `accept-language` |
| **body** (cuerpo) | Datos que viajan "adentro" del pedido, no en la dirección. Con el navegador (GET) queda vacío. | Lo usan formularios y otras aplicaciones. |
| **Cookie** | Datito que el navegador guarda de una página y le devuelve en cada visita. | Las de n8n: `rl_…`, `ph_…` |
| **User-agent** | El casillero que dice qué navegador y qué sistema llamaron. | Chrome en Windows. |
| **GET** | El pedido de "dame": lo que hace el navegador al abrir una dirección. | Abrir una página. |
| **POST** | El pedido de "te mando datos": lleva los datos adentro (*body*). | Lo que hace un formulario de una web. |
| **Respond** | Cuándo y quién contesta el webhook: *Immediately*, *When Last Node Finishes* o *Using 'Respond to Webhook' Node*. | When Last Node Finishes, para ver el mensaje. |
| **Path** (camino) | La última parte de la dirección del webhook: el nombre del timbre. | `saludo` |
| **UUID** | Código único de letras y números al azar. n8n lo pone solo en Path para que ninguna dirección se repita. | `3f8a2c1e-7b4d-...` |
| **Test URL / Production URL** | Dirección de prueba (una vez por clic) / dirección de verdad (con Publish). | `webhook-test/...` / `webhook/...` |
| **On form submission** | Trigger que arma un formulario y arranca cuando alguien lo manda. | El flujo 03. |
| **Append Row** | Operación de Google Sheets: agregar una fila al final. | Una fila por consulta. |
| **Map Each Column Automatically** | Que cada casillero vaya a la columna que se llama igual. | `destino` → columna "destino". |
| **`$now`** | "Ahora": la fecha y la hora del momento en que corre el flujo. | `$now.weekday`, `$now.toFormat(...)` |
| **Timezone** (zona horaria) | La hora de qué país usa el flujo. | *America/Argentina/Buenos Aires*. |
| **On a schedule** (*Schedule Trigger*) | Disparador que arranca solo, con un horario. | Todos los días a las 9. |
| **IF** (si) | Nodo que hace una pregunta de sí o no y tiene dos salidas. | ¿Monto de 1000 o más? |
| **true / false** | Verdadero / falso: las dos salidas del IF. | true = sí se cumple. |
| **Condición** (*condition*) | La pregunta del IF: qué miro, cómo comparo, contra qué. | `monto` ≥ `1000` |
| **Convert types where required** | Interruptor del IF para convertir texto en número antes de comparar. | `"1500"` → 1500 |
| **Switch** (selector) | Nodo que reparte los datos en varias salidas, una por regla. | Vuelos · Hoteles · Paquetes · Otra |
| **Routing Rules** | Las reglas del Switch: una por salida. | ¿Es "Vuelo"? → Vuelos |
| **Fallback Output** | La salida del Switch para lo que no cumple ninguna regla. | "Otra". |
| **Dropdown List** | Lista desplegable en un formulario de n8n. | Vuelo / Hotel / Paquete / Otra cosa |
| **Respond to Webhook** | Nodo para elegir qué le contesta el webhook a quien lo tocó. | Contestar solo el saludo. |
| **Response Body** | Lo que se contesta: lo que ve el navegador. | `<h1>{{ $json.mensaje }}</h1>` |
| **HTML** | El idioma de las páginas web: marcas como `<h1>` (título) o `<b>` (negrita). | `<h1>Hola</h1>` |
| **Postman** | Aplicación para probar direcciones de internet mandándoles pedidos. No la usamos. | GET + dirección + *Send*. |
