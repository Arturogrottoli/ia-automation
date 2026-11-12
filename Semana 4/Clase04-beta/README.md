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
| (extra) | **Si llegás · Una probadita de API** | Qué es una API, el dólar con HTTP Request (flujo 07) y un Pokémon (flujo 08). Si no llegás, queda para la clase siguiente. |
| (extra 2) | **Si sobra tiempo · Dos ejemplos completos** | Consulta con presupuesto (Switch + IF, flujo 09) y alerta del dólar (horario + API + IF, flujo 10) |

**Si el tiempo se aprieta** (para terminar en 120 minutos hay que ahorrar unos 23), recortá en este orden:

| Orden | Qué recortás | Cómo | Ahorrás |
|---|---|---|---|
| 0 | El tramo 2 del flujo 02 (que conteste solo la frase) | Hacés solo 02-12 a 02-15, sin el `<h1>` (02-16) y sin la tabla del repaso | ~2 min |
| 1 | IF 2 (flujo 05) | Lo mostrás ya importado y lo probás con los dos montos, sin armarlo | ~4 min |
| 2 | El formulario con Google Sheets (flujo 03) | Lo mostrás ya armado: completás el formulario y mostrás la fila nueva en la planilla | ~4 min |
| 3 | El Switch (flujo 06) | Lo mostrás ya importado: elegís dos tipos en el formulario y mostrás por qué salida pasa cada uno | ~4 min |
| 4 | IF 1 (flujo 04) | Queda para el comienzo de la clase siguiente; hoy solo se explica *Qué es un IF* | ~6 min |
| 5 | Los errores 2 y 3 del Paso 6 (la flecha rota y el silencioso) | Los contás en una frase cada uno: "sin flecha, el nodo queda sin color" y "si escribís mal el casillero, sale vacío, no rojo" | ~4 min |
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
  - `02-webhook-desde-el-navegador.json`: Webhook (GET, dirección `saludo`) → *Armar la respuesta* → *Contestar al
    navegador* (Respond to Webhook).
  - `03-formulario.json`: n8n Form Trigger (dirección `consulta-viaje`) → *Ordenar los datos* → *Guardar en la
    planilla* (Google Sheets).
  - `04-if-fin-de-semana.json`: Schedule Trigger → IF → dos mensajes.
  - `05-if-descuento.json`: Webhook (GET, dirección `presupuesto`) → IF → con o sin descuento.
  - `06-switch-por-tipo.json`: n8n Form con lista desplegable (dirección `consulta-tipo`) → Switch → cuatro áreas.
  - `07-api-dolar.json` y `08-api-pokemon.json` (extra, si llegás): trigger manual → HTTP Request → Edit Fields.
  - `09-ejemplo-switch-e-if.json` y `10-ejemplo-alerta-dolar.json` (extra 2, si sobra tiempo): los dos ejemplos
    completos del final.
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

**Paso 1a-bis · Los botones de arriba del nodo (2 min)**

```text
EN N8N · Paso 1a-bis: los botones de arriba del nodo
1. Pasá el mouse por encima del nodo, sin hacer clic
2. Arriba del nodo aparece una barrita con cuatro iconos:
     ▶  play           → Execute step (ejecutar este paso)
     ⏻  encendido      → Deactivate (desactivar, "apagar" el nodo)
     🗑  tacho          → Delete (borrar el nodo)
     ⋯  tres puntitos  → más opciones (el mismo menú del clic derecho)
3. Dejá el mouse quieto sobre cada icono: aparece un cartelito con su nombre
```

<p style="color:#1a7f37">Antes de seguir, miren esto. Paso el mouse por arriba del nodo, sin hacer clic, y aparece una barrita con cuatro dibujitos. Son los controles de ese nodo. Si dejo el mouse quieto encima de cada uno, aparece un cartelito que dice qué hace. Vamos uno por uno.</p>

- **▶ El play: *Execute step*, ejecutar este paso.** Corre solo este nodo, no todo el flujo. En el trigger hace lo
  mismo que el botón grande de abajo, porque el trigger es el primero. Cuando el flujo sea más largo, sirve para
  probar un nodo solo, sin correr todo.
  - *Ejemplo:* Es como probar solo la salsa de la receta, sin cocinar el plato entero.
  - *Ejemplo:* El botón grande, *Execute workflow*, corre todo el flujo. El play chiquito corre un solo paso.

<p style="color:#1a7f37">El segundo, el de encendido, el mismo dibujito del botón de la tele, apaga el nodo. No lo borra: lo deja ahí, pero en gris, y n8n hace de cuenta que no está. Lo vuelvo a apretar y se prende de nuevo.</p>

- **⏻ El de encendido: *Deactivate*, desactivar.** El nodo queda en el canvas, pero gris, y n8n lo saltea al
  ejecutar. Se vuelve a prender con el mismo botón (ahí dice *Activate*, activar).
  - *Ejemplo:* Es como desenchufar un electrodoméstico sin tirarlo: sigue en la cocina, pero no anda.
  - *Ejemplo:* Tenés un nodo que manda un mail y querés probar el flujo sin mandar mails de verdad: lo apagás,
    probás, y después lo prendés.
- **Ojo con apagar el trigger.** Si apagás el nodo que arranca el flujo, el flujo no tiene por dónde empezar.
  Mostralo un segundo y volvé a prenderlo.

<p style="color:#1a7f37">El tercero, el tachito, borra el nodo. Si lo borran sin querer, no pasa nada: Control Z lo trae de vuelta. Y los tres puntitos abren un menú con más opciones, el mismo que sale con el clic derecho: renombrar, duplicar, copiar, abrir.</p>

- **🗑 El tacho: *Delete*, borrar.** Saca el nodo del canvas, con sus flechas. Si fue sin querer: **Ctrl + Z**
  (deshacer) lo trae de vuelta.
  - *Ejemplo:* Es la diferencia con el de encendido: apagar es guardar en el placard; borrar es tirar a la basura
    (aunque con Ctrl + Z la sacás del tacho).
- **⋯ Los tres puntitos: más opciones.** Es el mismo menú del clic derecho: *Rename* (renombrar), *Duplicate*
  (duplicar), *Copy* (copiar), *Open* (abrir), y también *Deactivate* y *Delete*.
  - *Ejemplo:* Recién le cambiamos el nombre con clic derecho → *Rename*: también se puede desde los tres puntitos.
- **La barrita aparece en todos los nodos, no solo en el trigger.** Cada nodo que agreguemos va a tener los
  mismos cuatro botones.

> **Para vos:** si en tu versión de n8n los iconos o los textos del cartelito cambian un poco, vale lo que dice el
> cartelito. Los cuatro de siempre son: ejecutar, apagar, borrar y más opciones.

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

<p style="color:#1a7f37">Ahora sí, completemos. Vamos a armar la ficha que acabamos de ver: dos casilleros, nombre y ciudad.</p>

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**2d-1 · El botón Add Field**

```text
En "Fields to Set" está el recuadro punteado que dice  Drag input fields here / or / Add Field.
Clic en las palabras  Add Field  (agregar campo). Aparece una fila con tres partes:
   [ name ]   [ tipo ▾ ]   [ value ]
```

<p style="color:#1a7f37">Fíjense en el recuadro punteado del medio: abajo de todo dice Add Field, agregar campo. Eso es un botón. Lo aprieto, y aparece una fila con tres lugares. El primero es el nombre del casillero; el segundo, qué tipo de dato es; el tercero, el valor, lo que va adentro.</p>

**2d-2 · El primer casillero: nombre**

```text
name (nombre del casillero):  nombre     ← en minúscula, sin tildes ni espacios
tipo:                         String     ← es el que viene: quiere decir "texto"
value (lo que va adentro):    Ana
```

<p style="color:#1a7f37">El nombre del casillero: nombre, en minúscula. El tipo: String, que quiere decir texto; es el que viene, no lo toco. Y el valor: Ana. Ya tengo mi primer casillero: se llama nombre y adentro dice Ana.</p>

- **El nombre del casillero, siempre simple.** Minúscula, sin tildes ni espacios: así después es fácil
  arrastrarlo y no hay errores de una letra.
  - *Ejemplo:* `nombre` y no `Nombre del cliente`.

**2d-3 · El segundo casillero: ciudad**

```text
Debajo de la primera fila aparece otra vez  Add Field : clic.
   name:  ciudad      tipo:  String      value:  Córdoba
```

<p style="color:#1a7f37">Otro Add Field, y el segundo casillero: ciudad, texto, Córdoba.</p>

**2d-4 · Probar solo este nodo**

```text
Botón negro  Execute step  (arriba de la columna del medio)
→ a la derecha (OUTPUT) aparece la ficha:   nombre: Ana    ciudad: Córdoba
→ probá las tres vistas: Schema, Table y JSON
```

<p style="color:#1a7f37">Ahora aprieto Execute step, ejecutar paso: corre solo este nodo. Y miren a la derecha, en Output: nuestro nodo armó la ficha que planeamos. Nombre, Ana. Ciudad, Córdoba. Y esa ficha es la que va a viajar por la flecha hasta el nodo siguiente. Arriba puedo elegir cómo verla: Schema, como lista; Table, como planilla; JSON, como texto. Es lo mismo, de tres formas.</p>

- **Execute step ejecuta solo ese nodo.** Sirve para probar un nodo sin correr todo el flujo, y ver qué sale.
  - *Ejemplo:* Cambiás "Ana" por tu nombre, apretás *Execute step*, y en OUTPUT aparece tu nombre.

**2d-5 · Ponerle nombre al nodo y cerrar**

```text
Arriba a la izquierda, clic en el nombre "Edit Fields" → escribí  Datos del cliente  → Enter
Cerrá la ventana: la ✕ de arriba a la derecha (o Esc)
En el canvas, arriba de la flecha que sale de "Datos del cliente" dice  1 item
```

<p style="color:#1a7f37">Le cambio el nombre al nodo, para que diga qué hace: Datos del cliente. Cierro con la cruz. Y miren el canvas: arriba de la flecha dice 1 item, una ficha. Es la que acabamos de armar.</p>

**Si te equivocaste en algo** (no hace falta mostrarlo; está para el que lo necesite):

```text
EN N8N · Corregir un campo
Cambiar un valor:         clic en el casillero de value y escribís otro (por ejemplo, tu nombre)
Cambiar el tipo:          clic en el desplegable del tipo (String ▾) y elegís otro
Borrar un campo:          pasá el mouse por la fila → aparece un tachito a la derecha → clic
Cambiar el orden:         arrastrá la fila desde los puntitos de su izquierda
Después de cualquier cambio: Execute step otra vez, para ver cómo queda
```


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

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**3-1 · Agregar el segundo Edit Fields y mirar INPUT**

```text
En "Datos del cliente", clic en el + de su derecha → buscá  edit  → Edit Fields (Set)
Mirá la izquierda (INPUT): están los casilleros  nombre  y  ciudad  que llegaron
(si no aparecen: el botón de INPUT que ejecuta los nodos anteriores, o cerrá y Execute workflow)
```

<p style="color:#1a7f37">Miren la izquierda, INPUT, la entrada. Están nombre y ciudad: es exactamente la ficha que salió del nodo anterior. Lo que un nodo muestra en Output, el siguiente lo recibe en Input.</p>

- **Los datos pasan por la flecha: la salida de un nodo es la entrada del siguiente.**
  - *Ejemplo:* Es una cadena de montaje: cada puesto recibe la pieza del anterior, le hace algo, y la pasa.

**3-2 · El casillero del saludo, con texto fijo al principio**

```text
Add Field  →  Name:  mensaje     Type: String
Value: escribí  Hola    (con un espacio después)
```

<p style="color:#1a7f37">Un casillero nuevo, que se llama mensaje. Empiezo a escribir: Hola, y un espacio. Hasta acá es texto fijo.</p>

**3-3 · Arrastrar el nombre**

```text
Desde INPUT, arrastrá el casillero  nombre  y soltalo en Value, después de "Hola "
→ aparece en verde:  {{ $json.nombre }}
→ arriba del campo, el modo cambió solo de "Fixed" a "Expression"
```

<p style="color:#1a7f37">Y ahora, en vez de escribir Ana, agarro el casillero nombre de la izquierda y lo suelto acá. Miren: apareció algo en verde, con dos llaves de cada lado. Eso se llama expresión. Quiere decir: "acá no va un texto fijo; va lo que diga el casillero nombre del dato que me llegó". Y arriba cambió solo de Fixed, fijo, a Expression, expresión.</p>

- **Fixed o Expression: texto fijo o texto que cambia.** En **Fixed**, lo que escribís es literal. En
  **Expression**, podés mezclar texto con casilleros que vienen de antes, entre `{{ }}`.
  - *Ejemplo:* Fixed: "Hola Ana" siempre dice Ana. Expression: "Hola {{ $json.nombre }}" dice el nombre de quien
    sea que llegó.
- **`{{ $json.nombre }}` se lee "el casillero nombre de lo que me llegó".** `$json` es "el dato que entró a este
  nodo", y `.nombre` es "el casillero que se llama nombre".
  - *Ejemplo:* Si el casillero se llamara `destino`, la expresión sería `{{ $json.destino }}`.

**3-4 · Terminar la frase con la ciudad**

```text
Seguí escribiendo:  , gracias por escribirnos desde    (con espacio al final)
Arrastrá el casillero  ciudad  al final, y escribí un punto.
Queda:  Hola {{ $json.nombre }}, gracias por escribirnos desde {{ $json.ciudad }}.
```

<p style="color:#1a7f37">Sigo escribiendo el resto de la frase, y al final arrastro la ciudad. Arrastrar es mejor que escribir: si escribo a mano y me equivoco una letra, no da error, sale vacío.</p>

- **Arrastrar es mejor que escribir.** Con `{{ $json.nombr }}` o `{{ $json.Nombre }}` no da error: el resultado sale
  vacío ("Hola , gracias por…"). Para n8n, mayúscula y minúscula son distintas.
  - *Ejemplo:* Arrastrando no hay forma de equivocarse.

**3-5 · La vista previa y la prueba**

```text
Abajo del campo aparece el resultado de muestra:  Hola Ana, gracias por escribirnos desde Córdoba.
Execute step → en OUTPUT:  mensaje: Hola Ana, gracias por escribirnos desde Córdoba.
Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Armar el saludo
```

<p style="color:#1a7f37">Miren abajo del campo: n8n ya me muestra cómo va a quedar, con los datos de ahora. Hola Ana, gracias por escribirnos desde Córdoba. Si ahí viera un hueco, sabría que algo está mal escrito. Ejecuto el paso, y en Output está el saludo armado.</p>

- **La vista previa avisa antes de ejecutar.**
  - *Ejemplo:* Ves "Hola Ana, gracias por escribirnos desde ." → falta la ciudad: se te escapó el arrastre.

### Paso 4 · Ejecutar todo, guardar y ver las ejecuciones (4 min)

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**4-1 · Ejecutar el flujo entero**

```text
Abajo en el medio:  Execute workflow
→ los tres nodos se ponen verdes, con un ✓. Arriba de cada flecha:  1 item
→ doble clic en "Armar el saludo" → OUTPUT:  Hola Ana, gracias por escribirnos desde Córdoba.
```

<p style="color:#1a7f37">Ahora ejecutemos el flujo entero. Abajo en el medio está el botón Execute workflow. Fíjense qué pasa: los tres nodos se ponen verdes, uno después del otro, y arriba de cada flecha aparece un número: es la cantidad de datos que pasaron por ahí. Uno.</p>

- **Execute workflow corre todo; Execute step corre un solo nodo.** El primero es para probar el flujo entero; el
  segundo, para probar un nodo mientras lo armás.
  - *Ejemplo:* Mientras armás el saludo, Execute step. Cuando terminaste, Execute workflow.
- **Verde, rojo y gris.** Verde con ✓: el nodo funcionó. Rojo: falló (al abrirlo, dice por qué). Gris: no se
  ejecutó. El rojo lo vemos en vivo en el Paso 6, rompiendo el flujo a propósito.
  - *Ejemplo:* Si *Armar el saludo* está gris, mirá si la flecha que lo une con *Datos del cliente* está bien.
- **El número arriba de la flecha es la cantidad de items.** Un item es una ficha. Si pasaran cinco clientes, diría
  5, y el saludo se armaría cinco veces.
  - *Ejemplo:* "1 item" = una ficha = un cliente.

**4-2 · Guardar**

```text
Cerrá la ventana (✕ o Esc) → arriba a la derecha:  Save   (o Ctrl + S)
```

<p style="color:#1a7f37">Y ahora, a guardar. n8n no guarda solo: si cierran la pestaña sin guardar, pierden el trabajo. Botón Save, arriba a la derecha, o control S.</p>

- **Save guarda; Publish es otra cosa.** Al lado está **Publish** ("publicar"): es para que un flujo funcione solo,
  sin que nadie apriete nada. Con el trigger manual no hace falta.
  - *Ejemplo:* Save es como guardar un documento de Word. Publish es como mandarlo a imprenta.

**4-3 · El historial: Executions**

```text
Arriba en el medio, pestaña  Executions  (ejecuciones): la lista de cada vez que corrió el flujo
→ clic en una: se ve cómo quedó cada nodo en esa vez
Pestaña  Editor  para volver a armar
```

<p style="color:#1a7f37">Arriba en el medio hay una pestaña que se llama Executions, ejecuciones. Es el historial: cada vez que el flujo corrió, queda anotado acá, cuándo, si salió bien o mal, y qué datos pasaron. Hago clic en una y veo cómo quedó cada nodo. Para volver a armar, la pestaña Editor.</p>

- **Executions es la primera parada cuando algo "no anduvo".**
  - *Ejemplo:* Un cliente dice "no me llegó la respuesta". Vas a Executions, buscás esa hora, y ves en qué nodo se
    cortó.

### Paso 5 · Cambiar los valores: el flujo sigue andando (3 min)

<p style="color:#1a7f37">El flujo ya anda. Ahora quiero que vean algo que es la idea de toda la clase. Voy a cambiar los datos del cliente, y no voy a tocar nada más. Miren el saludo.</p>

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**5-1 · Cambiar los datos, solo en el primer nodo**

```text
Doble clic en "Datos del cliente"
   nombre:  borrá  Ana      y escribí  Martín
   ciudad:  borrá  Córdoba  y escribí  Rosario
Cerrá la ventana (✕ o Esc). A "Armar el saludo" NO lo abras ni lo toques
```

<p style="color:#1a7f37">Cambio Ana por Martín y Córdoba por Rosario. Y fíjense: el saludo no lo toco. Ni lo abro.</p>

**5-2 · Ejecutar y mirar el saludo**

```text
Execute workflow → doble clic en "Armar el saludo" → OUTPUT:
   Hola Martín, gracias por escribirnos desde Rosario.
```

<p style="color:#1a7f37">¿Vieron? No toqué el saludo, y cambió solo. Porque en el saludo no dice "Ana": dice "el nombre que me llegue". Si mañana el cliente se llama Lucía y es de Salta, el saludo dice Lucía y Salta. Armo los pasos una vez, y funcionan con cualquier dato. Eso es automatizar.</p>

- **Lo que cambia es el dato; los pasos quedan iguales.** *Armar el saludo* tiene la misma expresión
  `{{ $json.nombre }}`, que ahora encuentra "Martín".
  - *Ejemplo:* Una plantilla de mail que dice "Hola [nombre]": la escribiste una vez y sirve para mil clientes.
- **Por eso usamos expresiones y no texto fijo.**
  - *Ejemplo:* ❌ Mal: el saludo dice `Hola Ana, gracias…` escrito a mano → con Martín sale "Hola Ana". ✅ Bien:
    `Hola {{ $json.nombre }}, gracias…` → con Martín sale "Hola Martín".
- **Si el saludo no cambió, casi siempre es que no volviste a ejecutar.** OUTPUT muestra la última prueba.
  - *Ejemplo:* Cambiaste a Martín, abriste el saludo y dice Ana → cerrá, Execute workflow, y abrilo de nuevo.

**5-3 · Cada ejecución queda anotada**

```text
Pestaña  Executions : ahora hay dos, una con Ana y otra con Martín → clic en cada una
Volvé a  Editor  → dejá Martín o volvé a Ana (da igual) → Save
```

<p style="color:#1a7f37">Y en Executions ahora hay dos: la de Ana y la de Martín. Cada ejecución es nueva, con los datos de ese momento, y no se mezclan.</p>

<p style="color:#1a7f37">Hoy los datos los cambio yo a mano. En el Bloque 5 vamos a hacer que lleguen solos, desde el navegador o desde un formulario. El saludo va a ser el mismo; lo único que cambia es de dónde vienen los datos.</p>

`PARA EL CHAT` (opcional, para los que te vienen siguiendo; no esperás las respuestas):

```text
PARA EL CHAT · Si me venís siguiendo, probá vos (si no, hacelo después con la grabación)
1. Abrí "Datos del cliente" y cambiá Ana por tu nombre y Córdoba por tu ciudad.
2. Execute workflow.
3. Mirá lo que dice el casillero "mensaje" de "Armar el saludo".
```

### Paso 6 · Romperlo a propósito: qué pasa cuando algo falla (7 min)

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

**Error 2: la flecha rota.** Ahora rompemos la unión entre dos nodos.

```text
EN N8N · Paso 6, error 2: la flecha rota
1. Pasá el mouse por arriba de la flecha que va de "Datos del cliente" a "Armar el saludo"
   → aparecen dos botoncitos sobre la flecha: un  +  (meter un nodo en el medio) y un tachito 🗑
2. Clic en el tachito → la flecha desaparece
3. Execute workflow → miren el canvas:
   - "Cuando hago clic" y "Datos del cliente" en verde ✓
   - "Armar el saludo" sin color: no se ejecutó, y no hay error en ningún lado
   - no aparece el "1 item" entre los dos, porque ya no hay flecha por donde pasar
4. Para arreglarlo: en "Datos del cliente", a la derecha, hay un puntito (la salida).
   Agarralo con el mouse, arrastralo hasta el puntito de la izquierda de "Armar el saludo" y soltá
   → la flecha vuelve
5. Execute workflow → los tres en verde otra vez
```

<p style="color:#1a7f37">¿Ven? Sin la flecha, el dato no tiene por dónde pasar. El primer nodo anda, el segundo anda, pero el tercero se queda esperando algo que nunca le llega. Y n8n no avisa nada, porque para n8n no es un error: es un nodo suelto. Por eso, cuando un nodo queda sin color, lo primero que miro es si la flecha está.</p>

**Error 3: el que NO se pone rojo.** Este es el más traicionero, por eso lo mostramos.

```text
EN N8N · Paso 6, error 3: el silencioso
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

<p style="color:#1a7f37">Terminamos el primer flujo. Antes de pasar al siguiente, vamos a hacer tres cosas que van a repetir siempre: guardar, salir del flujo, y abrir uno nuevo.</p>

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**7-1 · Guardar**

```text
Arriba a la derecha:  Save   (o Ctrl + S)  → el botón cambia a  Saved  (guardado)
```

<p style="color:#1a7f37">Guardo. Miren el botón: ahora dice Saved, guardado. Cuando dice Saved, no hay nada sin guardar; si dice Save, hay cambios pendientes.</p>

**7-2 · Salir del flujo**

```text
En la barra de la izquierda, clic en  Overview
(si te olvidaste de guardar, n8n pregunta antes de salir:
 Save = guardar y salir · Leave without saving = salir sin guardar → elegí Save)
```

<p style="color:#1a7f37">Para salir del flujo, voy a Overview, la lista. No hay una cruz para cerrar el flujo: salir es volver a la lista. Si me hubiera olvidado de guardar, n8n me pregunta antes.</p>

**7-3 · El flujo quedó en la lista**

```text
En Overview aparece  Mi primer flujo : clic en el nombre para volver a abrirlo cuando quieras
```

<p style="color:#1a7f37">Fíjense: el primer flujo no se borró. Está en la lista, con su nombre. Overview es la carpeta; cada workflow es un archivo adentro. Si mañana lo quieren ver, clic en Mi primer flujo, y está tal como lo dejaron.</p>

**7-4 · Empezar el segundo, en una hoja nueva**

```text
Arriba a la derecha:  Create workflow  → hoja en blanco, con el  +  (Add first step)
Arriba a la izquierda, clic en  My workflow  →  Webhook desde el navegador  → Enter
```

<p style="color:#1a7f37">Y para el ejemplo que viene, un workflow nuevo. Cada automatización va en su propio workflow, separada. No armo el webhook al lado del saludo: si pusiera dos triggers en la misma hoja, después no sabría qué arranca qué.</p>

- **Un workflow por automatización.**
  - *Ejemplo:* ❌ Mal: armar el webhook al lado del saludo, en "Mi primer flujo". ✅ Bien: un workflow nuevo que se
    llama "Webhook desde el navegador".


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

### Ejemplo en vivo: el navegador le manda datos a n8n (flujo 02) (14 min)

El flujo que arman, completo (está en `02-webhook-desde-el-navegador.json`):

```text
Llega un pedido  →  Armar la respuesta  →  Contestar al navegador
(Webhook, GET)       (Edit Fields)          (Respond to Webhook)
```

Se arma **en un solo flujo, de corrido, en dos tramos**:

| Tramo | Nodos | Qué ve el navegador al final del tramo |
|---|---|---|
| **1 · Que llegue el dato y n8n conteste** (pasos 02-1 a 02-10) | *Llega un pedido* → *Armar la respuesta* | La ficha en JSON: `{"mensaje":"Hola Ana, recibimos tu consulta para viajar a Mendoza."}` |
| **2 · Que conteste solo la frase** (pasos 02-11 a 02-16) | se agrega *Contestar al navegador* al final | Solo la frase, grande, como el título de una página: **Hola Ana, recibimos tu consulta para viajar a Mendoza.** |

Por qué en dos tramos: primero se ve cómo contesta n8n solo (con la ficha entera), y así se entiende para qué sirve
el nodo del final. No son dos flujos: es el mismo, que se completa.

**¿Anda en local?** ✅ Sí, sin pasos extra, pero **solo desde tu propia computadora**: la dirección empieza con
`localhost`, y esa dirección solo existe ahí. Sirve para aprender y probar. Si le pasaras esa dirección a un cliente
o a una página web, no les funcionaría: para eso hace falta n8n Cloud (o un túnel). En n8n Cloud anda igual, con tu
dirección `https://tunombre.app.n8n.cloud/...`, y ahí sí se puede abrir desde cualquier lado.

<p style="color:#1a7f37">Antes de armarlo, una aclaración: esta dirección va a funcionar solo desde mi computadora, porque es localhost. Para probar, alcanza y sobra. Lo que no puedo hacer es pasársela a un cliente: él no puede llegar a mi computadora.</p>

<p style="color:#1a7f37">Vamos a la hoja en blanco que abrimos recién, la que se llama "Webhook desde el navegador". Si no la crearon, vuelvan a Overview, Create workflow, y le ponen ese nombre. Esta vez, el trigger no va a ser manual: va a ser un webhook.</p>

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**02-1 · Poner el webhook**

```text
En el workflow nuevo del Paso 7 (si no lo creaste: Overview → Create workflow → Webhook desde el navegador)
Clic en el +  (Add first step) → buscá  webhook  → elegí  Webhook
```

<p style="color:#1a7f37">Primer nodo, el trigger. Busco webhook y lo elijo. Este es el timbre: el flujo va a arrancar cuando alguien toque su dirección.</p>

**02-2 · El método: GET**

```text
HTTP Method:   GET     (es el que viene; no lo toques)
```

<p style="color:#1a7f37">Lo primero que pregunta es el método: cómo le van a mandar los datos. Dejo GET, que es "pedir", lo que hace el navegador cuando escribimos una dirección. Así lo podemos probar desde el navegador, sin instalar nada. Un poco más adelante vamos a ver por qué esto importa.</p>

- **GET es "pedir"; es lo que hace el navegador.** Cada vez que escribís una dirección en el navegador, hace un
  pedido GET.
  - *Ejemplo:* Abrir `google.com` es un GET a Google. Abrir nuestra dirección es un GET a n8n.

**02-3 · El Path: el nombre del timbre**

```text
Path:   viene con letras y números raros, tipo  3f8a2c1e-7b4d-...
        → borralos y escribí  saludo
```

<p style="color:#1a7f37">Miren el Path: no dice saludo, dice una tira larga de letras y números. No se asusten, no es un error. Es un nombre que n8n inventa solo, al azar, para que cada webhook tenga una dirección distinta. Funciona igual, pero es imposible de dictar. Lo borro y escribo una palabra: saludo.</p>

- **Lo que viene en Path es un código al azar (UUID).** Tan largo que es casi imposible que dos webhooks tengan el
  mismo, y nadie lo puede adivinar.
  - *Ejemplo:* Como el número de seguimiento de un envío: largo y feo, pero único. Si lo dejás, el webhook anda
    igual: la dirección termina en `/webhook-test/3f8a2c1e-…` en vez de `/webhook-test/saludo`.
- **El Path no puede repetirse, y va letra por letra.** Dos flujos con `saludo` chocan. Y `saludo`, `Saludo` y
  `Saludo!` son tres direcciones distintas.
  - *Ejemplo:* Dos casas con el mismo número en la misma calle: el cartero no sabe a cuál tocar.

**02-4 · Respond: cuándo contesta**

```text
Respond:   When Last Node Finishes   (que conteste cuando termine el último nodo, con lo que armó)
           (en el tramo 2, paso 02-12, lo cambiamos: por ahora, este)
```

<p style="color:#1a7f37">Respond es cuándo le contesta n8n al que tocó el timbre. Elijo When Last Node Finishes: cuando termine el último nodo. Así el navegador recibe lo que armemos, el saludo. Si lo dejara en Immediately, inmediatamente, contestaría apenas lo tocan, antes de armar nada.</p>

- **Con *Immediately*, el navegador no ve el saludo.** Muestra `{"message":"Workflow was started"}` ("el flujo
  arrancó").
  - *Ejemplo:* Es como un mozo que dice "ya le traigo" y se va, en vez de traerte el plato.

**02-5 · La dirección completa, leída por partes**

```text
Arriba del nodo, en "Webhook URLs", pestaña  Test URL:
   http://localhost:5678/webhook-test/saludo
```

<p style="color:#1a7f37">Ahora miren arriba, en Webhook URLs: está la dirección completa del timbre, y ya termina en saludo. Vamos a leerla por partes, porque cada parte quiere decir algo.</p>

```text
http://localhost:5678  /  webhook-test  /  saludo  ?nombre=Ana&destino=Mendoza
└──────────┬────────┘    └─────┬─────┘    └──┬──┘  └────────────┬────────────┘
   dónde está n8n         modo prueba       Path     los datos que le mandamos
  (tu computadora,       (solo anda          (el      (los agregamos nosotros;
   puerta 5678)          después de        nombre      no vienen en la
                         Execute workflow)  del timbre)  dirección que copia n8n)
```

- **`http://localhost:5678` es dónde está n8n.** *localhost* = "esta misma computadora"; *5678* es la puerta (el
  **puerto**), la misma que pusimos en Docker. Por eso esta dirección solo anda desde tu computadora.
  - *Ejemplo:* En n8n Cloud, esta parte es `https://tunombre.app.n8n.cloud`.
- **`webhook-test` = modo prueba.** Escucha solo después de apretar **Execute workflow**, y una vez. La pestaña
  **Production URL** dice `webhook` sin `-test`: escucha siempre, pero solo con el flujo publicado (**Publish**).
  - *Ejemplo:* Test: `…/webhook-test/saludo`. Production: `…/webhook/saludo`.
- **Lo que va después del `?` lo agregamos nosotros**, cada vez que tocamos el timbre.
  - *Ejemplo:* La misma dirección sirve para Ana y para Martín: cambia lo que va después del `?`.

**02-6 · Cerrar y dejar listo el segundo nodo**

```text
Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Llega un pedido
+ a la derecha → Edit Fields (Set). Todavía no hay nada en INPUT: está bien.
Cerrá la ventana sin completar nada → Save
```

<p style="color:#1a7f37">Le pongo nombre al nodo y agrego el Edit Fields que va a armar la respuesta. Lo dejo vacío por ahora: todavía no le llegó nada, así que no tengo qué arrastrar. Primero vamos a tocar el timbre, y después lo completamos.</p>

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

**Ahora sí: armar la respuesta con lo que llegó**

**02-7 · Abrir el Edit Fields y encontrar query**

```text
Doble clic en el Edit Fields → en INPUT, abrí  query  (clic en la flechita)
→ adentro:  nombre: Ana    destino: Mendoza
```

<p style="color:#1a7f37">Ahora que tocamos el timbre, el Edit Fields tiene datos en INPUT. Abro query, la carta, y adentro están nombre y destino.</p>

- **Un casillero puede tener casilleros adentro.** `query` es una ficha dentro de la ficha. Para llegar al de
  adentro, se encadenan los nombres con puntos.
  - *Ejemplo:* Como una carpeta dentro de otra: `query.nombre` es "la carpeta query, el archivo nombre".

**02-8 · Armar el mensaje arrastrando**

```text
Add Field  →  Name:  mensaje    Type: String
Value: escribí  Hola   y arrastrá  nombre  (el de adentro de query)  → aparece  {{ $json.query.nombre }}
Seguí:  , recibimos tu consulta para viajar a   y arrastrá  destino   y un punto.
Queda:  Hola {{ $json.query.nombre }}, recibimos tu consulta para viajar a {{ $json.query.destino }}.
```

<p style="color:#1a7f37">Igual que en el saludo: escribo Hola y arrastro el nombre. Pero miren la expresión: ahora dice $json.query.nombre. Es "adentro de query, el casillero nombre". Sigo la frase y arrastro el destino.</p>

- **`query` es "lo que vino en la dirección".** Por eso la expresión es `{{ $json.query.nombre }}`.
  - *Ejemplo:* Si la dirección dice `?nombre=Lucía&personas=3`, en n8n aparece `query` con `nombre: Lucía` y
    `personas: 3`.

**02-9 · Guardar y tocar el timbre otra vez**

```text
Cerrá la ventana (✕ o Esc) → renombralo:  Armar la respuesta  → Save
Execute workflow  → en la otra pestaña, recargá la dirección (F5)
El navegador muestra:
   {"mensaje":"Hola Ana, recibimos tu consulta para viajar a Mendoza."}
```

<p style="color:#1a7f37">Guardo, Execute workflow, y recargo la otra pestaña. ¡Ahí está! Le mandamos datos a n8n desde el navegador, n8n los recibió, armó un mensaje, y nos contestó. Eso mismo es lo que hace un formulario de una página web, o una aplicación: tocar el timbre de n8n con datos.</p>

**02-10 · Otra vez, con otros datos**

```text
Execute workflow → en la otra pestaña, cambiá los datos:
   http://localhost:5678/webhook-test/saludo?nombre=Martín&destino=Bariloche
→ Hola Martín, recibimos tu consulta para viajar a Bariloche.
```

<p style="color:#1a7f37">Y otra vez, con otros datos, para que vean que cambia solo. Y presten atención al orden, que es siempre el mismo: primero Execute workflow, después la dirección.</p>

- **Si falta un dato, no da error: queda vacío.** Sin `?nombre=...`, el flujo corre igual, pero el mensaje sale
  con huecos: "Hola , recibimos tu consulta para viajar a ." (lo probamos).
  - *Ejemplo:* Es como un formulario de papel que alguien entrega en blanco: llega, pero no sirve.

`PARA EL CHAT` (para que lo tengan; lo prueban ahora si te vienen siguiendo, o después con la grabación):

```text
PARA EL CHAT · Tocá el timbre vos (ahora o después con la grabación)
1. En n8n: Execute workflow (que quede esperando).
2. En otra pestaña, pegá la dirección cambiando los datos:
     http://localhost:5678/webhook-test/saludo?nombre=TU_NOMBRE&destino=A_DONDE_QUIERAS
3. Mirá lo que te contesta el navegador.
(Si usás n8n en la nube, cambiá http://localhost:5678 por tu dirección de n8n.)
```

**Tramo 2 · Que conteste solo la frase (en el mismo flujo)**

<p style="color:#1a7f37">El saludo llegó, pero miren cómo se ve en el navegador: con llaves, comillas, y la palabra mensaje. Eso es porque n8n le contesta al navegador con la ficha entera, en un formato que se llama JSON. A otro programa le sirve; a una persona, no. Ahora, en este mismo flujo, vamos a hacer que el navegador muestre solo la frase. Para eso agregamos un nodo más al final, que se llama Respond to Webhook: responder al webhook.</p>

```text
Hasta ahora:   Llega un pedido  →  Armar la respuesta
Al terminar:   Llega un pedido  →  Armar la respuesta  →  Contestar al navegador
```

**02-11 · Qué es eso que se ve en el navegador: JSON**

```text
Mirá la pestaña del navegador:   {"mensaje":"Hola Martín, recibimos tu consulta para viajar a Bariloche."}
```

<p style="color:#1a7f37">Leamos esto. Las llaves abren y cierran la ficha. Entre comillas, primero el nombre del casillero, mensaje; después dos puntos; y después el valor, la frase. Es la misma ficha que vemos en OUTPUT, escrita en una sola línea.</p>

- **JSON es el formato en que se pasan datos los programas.** `{"mensaje":"Hola…"}` = "casillero mensaje, valor
  Hola…".
  - *Ejemplo:* Es como una planilla escrita en un renglón: se puede leer, pero es incómodo.
- **¿Por qué contesta así?** Porque en el webhook pusimos *Respond: When Last Node Finishes*: "cuando termine el
  último nodo, contestá con lo que armó". Y lo que armó es una ficha entera.
  - *Ejemplo:* Es como un contestador automático que lee todo lo que tiene anotado, tal cual.

**02-12 · Decirle al webhook que no conteste solo**

```text
Doble clic en "Llega un pedido" → en  Respond  abrí la lista y cambiá
   When Last Node Finishes   por   Using 'Respond to Webhook' Node
   (contestar con el nodo Respond to Webhook)
Cerrá la ventana (✕ o Esc)
```

<p style="color:#1a7f37">Primero, le digo al webhook: no contestes vos solo; va a contestar un nodo que pongo al final. Fíjense que todavía no agregué ese nodo. Si ahora tocara el timbre, el navegador se quedaría esperando una respuesta que nadie da. Por eso el paso siguiente es agregarlo.</p>

- **Respond tiene tres opciones.** *Immediately*: contesta apenas lo tocan, antes de hacer nada. *When Last Node
  Finishes*: contesta solo, con la ficha del último nodo. *Using 'Respond to Webhook' Node*: contesta el nodo
  Respond to Webhook, con lo que vos le digas.
  - *Ejemplo:* La tercera es como una persona que atiende el teléfono y dice solo lo que hace falta.

**02-13 · Agregar el nodo que contesta**

```text
En "Armar la respuesta", clic en el + de su derecha → buscá  respond  → Respond to Webhook
```

<p style="color:#1a7f37">Busco respond y elijo Respond to Webhook. Miren: queda al final, unido con una flecha a Armar la respuesta. Este nodo es el que le va a hablar al navegador.</p>

- **Los dos cambios van juntos.** El *Respond* del webhook dice "va a contestar un nodo", y este es ese nodo. Si
  falta uno de los dos, no anda.
  - *Ejemplo:* ❌ Mal: cambiar el Respond del webhook y olvidarse del nodo nuevo → el navegador no recibe el saludo.
    ✅ Bien: las dos cosas.

**02-14 · Qué contesta: solo la frase**

```text
Se abre la ventana del nodo:
   Respond With:   Text     (contestar con un texto, no con la ficha entera)
   Response Body:  desde INPUT, arrastrá  mensaje   → queda  {{ $json.mensaje }}
Cerrá → renombralo:  Contestar al navegador  → Save
```

<p style="color:#1a7f37">Respond With, contestar con: Text, un texto. Y en Response Body, el cuerpo de la respuesta, que es exactamente lo que va a ver el navegador, arrastro el casillero mensaje desde la izquierda, como siempre. O sea: "contestá solo con lo que dice mensaje".</p>

- **Lo que escribas en *Response Body* es exactamente lo que ve el navegador.** Se puede mezclar texto fijo con
  casilleros, igual que en Edit Fields.
  - *Ejemplo:* `Gracias, {{ $json.mensaje }}` → el navegador muestra "Gracias, Hola Ana, recibimos…".

**02-15 · Probar: ahora se ve solo la frase**

```text
Execute workflow  → en la otra pestaña, la dirección con datos → Enter (o F5)
   http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza
→ el navegador muestra solo:   Hola Ana, recibimos tu consulta para viajar a Mendoza.
```

<p style="color:#1a7f37">¿Ven la diferencia? Antes, el navegador mostraba la ficha, con llaves y comillas. Ahora muestra solo la frase, como una página cualquiera. Lo que cambió es quién contesta: antes contestaba el webhook solo, con todo lo que había; ahora contesta el último nodo, con lo que nosotros le dijimos.</p>

**02-16 · Que se vea como el título de una página**

```text
Doble clic en "Contestar al navegador" → en Response Body, dejalo así:
   <h1>{{ $json.mensaje }}</h1>
Cerrá → Save → Execute workflow → en la otra pestaña, F5
→ la frase aparece grande, en negrita, como el título de una página
```

<p style="color:#1a7f37">Y un truco final: si pongo h1 entre los signos de menor y mayor adelante, y lo mismo con una barra atrás, la frase sale grande, como el título de una página. Son marcas de página web; el idioma de las páginas se llama HTML. No hace falta saber HTML: con esta sola marca ya se ve la diferencia.</p>

- **`<h1>` y `</h1>` son marcas de HTML:** "esto es un título grande". `<h1>` abre y `</h1>` cierra.
  - *Ejemplo:* `<h1>Hola</h1>` se ve como un título grande; `<b>Hola</b>`, en negrita.

<p style="color:#1a7f37">Repasemos el flujo entero, de izquierda a derecha. Llega un pedido: el timbre, recibe los datos en la dirección. Armar la respuesta: arma la frase con esos datos. Contestar al navegador: le devuelve la frase al que tocó el timbre. Tres nodos, una automatización completa: entra un dato, se procesa, y sale una respuesta.</p>

| Nodo | Qué hace | Lo que sale |
|---|---|---|
| **Llega un pedido** (Webhook) | Recibe el pedido y los datos de la dirección | `query`: nombre, destino |
| **Armar la respuesta** (Edit Fields) | Arma la frase con los datos | `mensaje`: Hola Ana, … |
| **Contestar al navegador** (Respond to Webhook) | Le contesta al navegador solo con la frase | La página con el título |

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


#### Romperlo a propósito: un dato que no es lo que esperaba (3 min)

<p style="color:#1a7f37">Como hicimos con el saludo, vamos a romper este también. Pero acá pasa algo nuevo: el que tocó el timbre está esperando una respuesta. ¿Qué ve él cuando algo se rompe? Vamos a agregar un dato más, la cantidad de personas, y le vamos a decir a n8n que tiene que ser un número.</p>

**R-1 · Agregar un casillero de número**

```text
Doble clic en "Armar la respuesta" → Add Field:
   Name: personas     Type: Number     Value: escribí  {{ $json.query.personas }}
Cerrá → Save
```

<p style="color:#1a7f37">Agrego un casillero, personas, y le digo que es un número: Number.</p>

**R-2 · Primero, con un número: anda**

```text
Execute workflow → en la otra pestaña:
   http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza&personas=3
→ el navegador muestra la frase, como siempre (personas no se ve: la respuesta es solo el mensaje)
→ en n8n, en el OUTPUT de "Armar la respuesta":  personas: 3
```

<p style="color:#1a7f37">Con un 3, anda: el navegador muestra la frase, y en n8n, en Armar la respuesta, está personas, 3.</p>

**R-3 · Ahora, con una palabra: se rompe**

```text
Execute workflow → ahora con una palabra donde va el número:
   http://localhost:5678/webhook-test/saludo?nombre=Ana&destino=Mendoza&personas=tres
```

<p style="color:#1a7f37">Ahora escribo "tres", con letras. Y miremos las dos pantallas, la de n8n y la del navegador.</p>

**R-4 · Las dos pantallas**

```text
En n8n:        "Llega un pedido" en verde ✓, "Armar la respuesta" en ROJO,
               "Contestar al navegador" sin color (no llegó a correr)
               (doble clic en el rojo → 'personas' expects a number but we got 'tres' [item 0])
En el navegador:  {"message":"Error in workflow"}   ("error en el flujo")
```

<p style="color:#1a7f37">Nosotros, en n8n, vemos todo: qué nodo falló, por qué, con qué dato. El que tocó el timbre, en cambio, solo ve "Error in workflow": sabe que algo salió mal, pero no qué. Está bien que sea así: al cliente no le mostramos las tripas del flujo. Pero quiere decir que, cuando un cliente diga "me salió un error", el detalle lo vamos a buscar nosotros, en Executions.</p>

- **El error se ve distinto de cada lado.** En n8n: el nodo rojo con el mensaje completo. Del otro lado: un mensaje
  corto y general.
  - *Ejemplo:* Como un restaurante: si se quema la comida, el cocinero sabe qué pasó; al cliente el mozo le dice
    "hubo un problema en la cocina".
- **El 500 es un número de error.** **500** = "hubo un error del lado del que contesta". Ya vimos el **404** = "no
  hay nada en esta dirección".
  - *Ejemplo:* 404 = tocaste un timbre que no existe. 500 = el timbre existe, atendieron, pero adentro algo se
    rompió.
- **Los datos de afuera no siempre vienen bien.** Alguien puede escribir "tres" en vez de 3. En un formulario de
  verdad, el campo de número no deja escribir letras: lo vemos en el formulario que sigue.
  - *Ejemplo:* Executions guarda la ejecución con ✗ y, al abrirla, en `query` se ve el "tres".

**R-5 · Arreglarlo**

```text
En "Armar la respuesta", borrá el casillero  personas  (tachito a su derecha) → Save
```

<p style="color:#1a7f37">Lo arreglo borrando el casillero, y el flujo queda como antes.</p>


### Otra forma: el formulario de n8n, y cada consulta a Google Sheets (flujo 03) (12 min)

<p style="color:#1a7f37">Escribir datos en una dirección sirve para probar, pero un cliente nunca va a hacer eso. Lo que sí hace un cliente es completar un formulario. Y n8n tiene un trigger que arma el formulario solo: On form submission. Y vamos a hacer algo útil con lo que llega: guardar cada consulta como una fila en una planilla de Google Sheets. Así, al final del día, la agencia tiene todas las consultas anotadas sin copiar nada a mano.</p>

<p style="color:#1a7f37">¿Se acuerdan de la postal y el paquete? Con el webhook mandamos una postal, GET, con los datos en la dirección. El formulario manda un paquete, POST: cuando apretás Enviar, los datos viajan adentro, y la dirección queda limpia. Y hay una ventaja: el nodo del formulario abre el paquete solo. No hay que buscar en body ni en query: los datos aparecen directo, con el nombre de cada pregunta del formulario.</p>

El flujo (en clase **lo armamos desde cero**; el archivo `03-formulario.json` es el mismo flujo ya armado, para casa):

```text
Formulario de consulta   →   Ordenar los datos   →   Guardar en la planilla
(n8n Form Trigger)           (Edit Fields)            (Google Sheets: Append row)
```

Lo que tiene que pasar: alguien completa el formulario, y en la planilla aparece una fila nueva con la fecha, el
nombre, el destino y la cantidad de personas.

**¿Anda en local?** ✅ Sí, pero con **dos pasos extra**, porque ahora n8n sale a escribir en Google (es la
"dirección 1": n8n sale a hacer algo):
- **La credencial de Google Sheets.** En n8n local hay que crear antes el permiso en Google Cloud Console
  (*Client ID* y *Client Secret*): unos 20 minutos, una sola vez. El paso a paso, desde cero y con cada pantalla
  explicada, está en el anexo, al final de este ejemplo: [Conectar Google Sheets en n8n local](#anexo-del-flujo-03--conectar-google-sheets-por-primera-vez-n8n-local). En n8n Cloud alcanza con **Sign in
  with Google**.
- **El formulario se abre solo en tu computadora** (`http://localhost:5678/form/...`), como el webhook. Para que lo
  completen clientes desde su celular, hace falta n8n Cloud.

Por eso, en clase, **este ejemplo lo mostrás vos** con tu credencial ya creada. Ellos lo arman en casa cuando
tengan la credencial (o en n8n Cloud, donde es un botón).

**Antes de la clase (vos):** tener la **credencial de Google Sheets ya creada** en tu n8n (la guía está en el
anexo, al final de este ejemplo). La planilla **la creás en vivo**, en el paso D0, con estos cuatro títulos en la
fila 1:

| A | B | C | D |
|---|---|---|---|
| fecha | nombre | destino | personas |

**En n8n, paso a paso** (lo armás vos desde cero, en tu pantalla; ellos miran). Cada paso son uno o dos clics, y
justo abajo está lo que decís y lo que explicás **en ese momento**, antes de pasar al clic siguiente. Son cuatro
partes: el formulario, probarlo, ordenar los datos y guardarlos en la planilla.

**Los tres nodos, y dónde se agrega cada uno:**

| Nodo | Qué es | Cómo se agrega | Dónde está el paso a paso |
|---|---|---|---|
| 1 · *Formulario de consulta* | Trigger: n8n Form | El **+** del canvas vacío (*Add first step*) → `form` → **n8n Form** → *On new n8n Form event* | Parte A (A1 a A7), y se prueba en la Parte B |
| 2 · *Ordenar los datos* | Acción: Edit Fields (Set) | El **+** a la derecha del nodo 1 → `edit` → **Edit Fields (Set)** | Parte C (C1 a C4) |
| 3 · *Guardar en la planilla* | Acción: Google Sheets | El **+** a la derecha del nodo 2 → `sheets` → **Google Sheets** → *Append row in sheet* | Parte D (D0 a D5). En D2 elegís: primera vez o ya conectada |

<p style="color:#1a7f37">Son tres nodos, uno detrás del otro. Primero, el formulario, que arranca todo. Segundo, un nodo que pasa en limpio los datos. Tercero, Google Sheets, que los guarda. Los voy agregando de a uno, siempre con el más de la derecha del último nodo, y pruebo cada uno antes de poner el siguiente.</p>

#### Parte A · Poner el formulario (el trigger)

**A1 · Crear el workflow**

```text
Overview → Create workflow → clic en "My workflow" → escribí  Formulario a Google Sheets  → Enter
```

<p style="color:#1a7f37">Flujo nuevo, hoja en blanco, como siempre. Le pongo un nombre que diga qué hace: formulario a Google Sheets.</p>

**A2 · Buscar el formulario**

```text
Clic en el +  (Add first step) → a la derecha se abre "What triggers this workflow?"
→ escribí  form  en el buscador → clic en  n8n Form
```

<p style="color:#1a7f37">El primer nodo siempre es el trigger, lo que arranca todo. Hoy el que arranca es una persona que completa un formulario. Busco form y elijo n8n Form, que es el formulario que arma n8n solo, sin que tengamos que hacer ninguna página.</p>

**A3 · La pantalla de Triggers y Actions: qué elijo acá**

```text
Se abre un panel con el título "n8n Form" y dos grupos:
   Triggers (1)  ⚡   On new n8n Form event      ← ESTE
   Actions (2)        Next Form Page · Form Ending   (hoy no)
→ clic en  On new n8n Form event
```

<p style="color:#1a7f37">Paremos en esta pantalla, porque les va a aparecer muchas veces. Cuando elijo una aplicación, n8n me muestra dos grupos. Arriba, Triggers, con el rayito: son los que arrancan el flujo, "cuando pasa esto". Abajo, Actions: son los que hacen algo en el medio, "hacé esto". Como este es el primer paso, elijo el trigger: On new n8n Form event, que quiere decir "cuando llega un formulario nuevo", o sea, cuando alguien lo completa.</p>

Para explicar:
- **Triggers ⚡ = arrancan el flujo; Actions = hacen algo después.** El primer nodo de un flujo siempre es un
  trigger. Todos los demás son acciones.
  - *Ejemplo:* "Cuando alguien completa el formulario (trigger), guardá la consulta (acción)".
- **Es el mismo nodo que *On form submission*.** Si no hubieras buscado, en la lista de *What triggers this
  workflow?* está directo **On form submission** ("cuando mandan un formulario"). Son dos nombres para el mismo
  nodo: cualquiera de los dos caminos sirve.
  - *Ejemplo:* Es como entrar a un negocio por la puerta de adelante o por la de al lado: llegás al mismo lugar.
- **Las dos acciones del formulario no se usan hoy.** *Next Form Page* agrega otra página de preguntas;
  *Form Ending*, una pantalla final. Sirven para formularios más largos.
  - *Ejemplo:* Un formulario de inscripción con una página de datos personales y otra de pago.

**A4 · El título y la descripción**

```text
Se abre la ventana del nodo. Arriba: la dirección (Test URL / Production URL), como en el webhook.
   Form Title:        Consulta de viaje
   Form Description:  Contanos a dónde querés viajar y te respondemos.
```

<p style="color:#1a7f37">Arriba, igual que en el webhook, está la dirección: el formulario también tiene su timbre. Ahora le pongo el título, lo que la persona ve arriba de todo, en grande, y una descripción, el textito de abajo que explica para qué es.</p>

- **Por dentro, es un webhook con una página linda.** Tiene dirección de prueba (`/form-test/…`) y de verdad
  (`/form/…`), igual que el webhook. La diferencia es que, en vez de escribir los datos en la dirección, la persona
  ve una página con preguntas.
  - *Ejemplo:* Una agencia con n8n Cloud comparte el link del formulario por WhatsApp; cada cliente que lo
    completa dispara el flujo.

**A5 · La primera pregunta**

```text
Form Elements (las preguntas). La primera ya viene; completala:
   Field Name:      Nombre       (si en tu versión dice "Label", es ese)
   Element Type:    Text         (la persona escribe)
   Required Field:  prendido     (obligatoria)
```

<p style="color:#1a7f37">Cada pregunta del formulario es un Form Element. Le digo tres cosas: qué pregunto, que es el Field Name; qué tipo de respuesta, en este caso texto; y si es obligatoria. Y presten atención a esto: lo que escribo en Field Name, "Nombre", es lo que ve la persona, y también va a ser el nombre del casillero cuando el dato llegue a n8n.</p>

- **Cada pregunta del formulario va a ser un casillero.** Lo que la persona escriba en "Nombre" va a llegar a n8n
  en un casillero que se llama `Nombre`, con mayúscula, igual que la pregunta.
  - *Ejemplo:* Si la pregunta se llamara "Tu nombre", el casillero se llamaría `Tu nombre`.
- **Required Field = obligatoria.** Si está prendido, el formulario no deja mandar si esa pregunta está vacía.
  - *Ejemplo:* Sin nombre no sabemos a quién contestar: por eso es obligatoria.

**A6 · Las otras dos preguntas**

```text
Abajo: Add Form Element →  Field Name: Destino     Element Type: Text     Required Field: prendido
Add Form Element      →  Field Name: Cantidad de personas     Element Type: Number
```

<p style="color:#1a7f37">Dos preguntas más, con Add Form Element. Destino, de texto. Y Cantidad de personas, que la pongo de tipo número. ¿Se acuerdan del error de recién, cuando alguien escribió "tres" en vez de 3? Con el tipo número, el formulario no deja escribir letras: el error no llega ni a pasar.</p>

- **Element Type elige qué puede escribir la persona.** *Text*: cualquier cosa. *Number*: solo números. Hay más:
  *Email*, *Date* (fecha), *Dropdown List* (lista desplegable, la usamos en el Switch).
  - *Ejemplo:* Con *Number*, si alguien escribe "tres", el formulario no lo acepta y le pide un número.

**A7 · El Path, cerrar y guardar**

```text
Más abajo:  Options → Add option → Path → escribí  consulta-viaje
Cerrá la ventana (✕ o Esc) → renombrá el nodo:  Formulario de consulta  → Save
```

<p style="color:#1a7f37">Como en el webhook, la dirección viene con letras y números raros. La cambio por una palabra que se lee: consulta-viaje. Cierro, le pongo nombre al nodo y guardo.</p>

#### Parte B · Probar el formulario antes de seguir

**B1 · Abrir el formulario y completarlo**

```text
Execute workflow  → se abre una pestaña nueva con el formulario
(si no se abre sola: doble clic en el nodo → Test URL → copiala y abrila en otra pestaña)
Completalo:  Nombre: Ana    Destino: Mendoza    Cantidad de personas: 3  → Submit
```

<p style="color:#1a7f37">Antes de seguir, lo pruebo. Siempre que pongo un trigger, lo pruebo primero, así en el nodo siguiente ya tengo datos para arrastrar. Aprieto Execute workflow y se abre el formulario: el que vería un cliente. Lo completo como si fuera Ana, y aprieto Submit, enviar.</p>

- **Es como el webhook: primero Execute workflow, después el formulario.** La dirección de prueba atiende una vez
  por clic.
  - *Ejemplo:* Si abren la dirección de prueba sin apretar *Execute workflow*, la página dice *Form Trigger isn't
    listening yet* ("el formulario todavía no está escuchando"). Es el mismo error del timbre desconectado.
- **Al apretar Submit, el navegador manda un POST: el paquete cerrado.** Miren la barra: la dirección no cambió, no
  dice `?nombre=…`. Los datos viajaron adentro.
  - *Ejemplo:* Comparalo con el webhook: ahí los datos estaban a la vista en la dirección.

**B2 · Mirar lo que llegó**

```text
Volvé a n8n: el nodo se puso verde. Doble clic → OUTPUT:
   Nombre: Ana     Destino: Mendoza     Cantidad de personas: 3
   (y un casillero submittedAt, con la hora en que se mandó)
```

<p style="color:#1a7f37">Miren qué limpio. Comparado con el webhook, no hay headers ni query: el nodo del formulario abrió el paquete solo. Cada pregunta es un casillero, con el nombre de la pregunta. Nombre, Destino, Cantidad de personas.</p>

#### Parte C · Ordenar los datos (Edit Fields)

**C1 · Agregar el nodo y entender para qué**

```text
Cerrá → clic en el + a la derecha del formulario → buscá  edit  → Edit Fields (Set)
```

<p style="color:#1a7f37">Antes de mandar esto a la planilla, lo voy a ordenar. ¿Por qué? Miren la planilla: los títulos son fecha, nombre, destino, personas. Cortos y en minúscula. Y lo que llega del formulario dice Nombre con mayúscula y Cantidad de personas, largo. Si no coinciden, Google Sheets no sabe en qué columna va cada cosa. Este nodo es pasar en limpio la ficha antes de archivarla.</p>

- **Los nombres de los casilleros tienen que ser iguales a los títulos de la planilla.** Letra por letra, con las
  mismas mayúsculas. Así, en la Parte D, cada dato va solo a su columna.
  - *Ejemplo:* El casillero `destino` va a la columna "destino". Si el título dijera "Destino del viaje", no
    coincidiría y esa columna quedaría vacía.

**C2 · El casillero de la fecha**

```text
Add Field →  Name: fecha     Type: String
Value: escribí  {{ $now.toFormat('dd/MM/yyyy HH:mm') }}
→ el campo pasa solo a Expression, y abajo se ve la fecha y la hora de ahora
```

<p style="color:#1a7f37">El primer casillero es la fecha, que el formulario no trae. Escribo esto que parece raro: $now quiere decir "ahora", la fecha y la hora del momento en que corre el flujo. Y toFormat le dice cómo escribirla: día, mes, año, hora y minutos, como estamos acostumbrados. Miren abajo: ya me muestra la fecha de hoy.</p>

- **`$now` es "ahora".** Es una palabra especial de n8n. `.toFormat('dd/MM/yyyy HH:mm')` la escribe como
  día/mes/año hora:minutos.
  - *Ejemplo:* Una consulta del 11 de noviembre a las 12:36 queda `11/11/2026 12:36`.
- **Ojo con la hora.** n8n usa la zona horaria del flujo. Si sale con otra hora: menú **…** del flujo →
  **Settings** → **Timezone** → *America/Argentina/Buenos Aires*. (Los flujos de la carpeta ya vienen así.)
  - *Ejemplo:* Sin configurar, puede salir con la hora de otro país (por ejemplo, 10:36 en vez de 12:36).

**C3 · Los otros tres casilleros, arrastrando**

```text
Add Field →  Name: nombre     Type: String   Value: arrastrá  Nombre   → {{ $json.Nombre }}
Add Field →  Name: destino    Type: String   Value: arrastrá  Destino  → {{ $json.Destino }}
Add Field →  Name: personas   Type: Number   Value: arrastrá  Cantidad de personas
                                             → {{ $json['Cantidad de personas'] }}
```

<p style="color:#1a7f37">Los otros tres los arrastro desde la izquierda, como en el saludo. A la izquierda dice Nombre con mayúscula; acá el casillero nuevo se llama nombre, en minúscula, igual que la planilla. Y fíjense el último: como "Cantidad de personas" tiene espacios, n8n lo escribe distinto, con corchetes y comillas. No hace falta aprenderlo: lo escribe solo al arrastrar.</p>

- **Corchetes cuando el nombre tiene espacios.** `$json.Nombre` sirve para nombres de una palabra. Para "Cantidad
  de personas", n8n escribe `$json['Cantidad de personas']`. Es lo mismo, con otra forma.
  - *Ejemplo:* Por eso conviene que las preguntas tengan nombres cortos; pero si arrastrás, no importa.

**C4 · Probar y guardar**

```text
Execute step → OUTPUT:  fecha: 11/11/2026 12:36   nombre: Ana   destino: Mendoza   personas: 3
Cerrá → renombralo:  Ordenar los datos  → Save
```

<p style="color:#1a7f37">Ejecuto solo este paso y miro: cuatro casilleros, con los mismos nombres que la planilla. Listo para archivar.</p>

#### Parte D · Guardar en la planilla (Google Sheets)

**D0 · La planilla, lista antes de poner el nodo**

<p style="color:#1a7f37">Antes de poner el tercer nodo, dejo n8n un momento y voy a Google. ¿Por qué primero Google? Porque n8n me va a preguntar en qué planilla escribir, y esa planilla tiene que existir. Así que la creo ahora.</p>

**D0-1 · Crear la planilla**

```text
Pestaña nueva del navegador → escribí  sheets.new  → Enter
(con la misma cuenta de Google que vas a usar en n8n)
→ se abre una planilla vacía: "Hoja de cálculo sin título"
```

<p style="color:#1a7f37">Escribo sheets punto new en el navegador, y Google me crea una planilla nueva, vacía. Es un atajo: es lo mismo que entrar a Drive y apretar Nuevo, Hojas de cálculo.</p>

- **Es una planilla (Google Sheets), no un documento (Google Docs).** n8n escribe filas y columnas: tiene que ser
  una hoja de cálculo.
  - *Ejemplo:* Si creás un Google Docs y pegás su link, n8n no lo reconoce como planilla.
- **La misma cuenta de Google que la credencial.** n8n va a entrar a *esa* cuenta: una planilla de otra cuenta no
  la ve.

**D0-2 · El nombre y los títulos de las columnas**

```text
Arriba a la izquierda: clic en "Hoja de cálculo sin título" → escribí  Consultas de la agencia  → Enter
Fila 1:   A1  fecha     B1  nombre     C1  destino     D1  personas
```

<p style="color:#1a7f37">Le pongo nombre: Consultas de la agencia. Y en la fila 1, los títulos de las columnas: fecha, nombre, destino, personas. Fíjense que son exactamente los mismos nombres de los casilleros que armamos en Ordenar los datos. En minúscula, igualitos. Eso es lo que va a hacer que cada dato caiga en su columna.</p>

- **La fila 1 son los títulos; las consultas van de la fila 2 para abajo.** n8n lee la fila 1 para saber qué
  columnas hay.
  - *Ejemplo:* Si la fila 1 está vacía, n8n no tiene dónde poner nada.
- **Los títulos, letra por letra iguales a los casilleros.**
  - *Ejemplo:* `personas` ✅ · `Personas` ❌ · `cantidad de personas` ❌.

**D0-3 · Copiar el link**

```text
Clic en la barra de direcciones (arriba) → Ctrl + A → Ctrl + C
El link se ve así:  https://docs.google.com/spreadsheets/d/1AbC…XyZ/edit#gid=0
Volvé a la pestaña de n8n
```

<p style="color:#1a7f37">Y me copio el link de la planilla, el de la barra de arriba, entero. Lo voy a pegar en n8n en un ratito. No hace falta compartirla con nadie: n8n entra con mi cuenta.</p>

- **El link entero, de `https` hasta el final.** El pedazo largo del medio es lo que identifica la planilla.
  - *Ejemplo:* Si pegás solo el nombre, "Consultas de la agencia", sale *Not a valid Google Drive File URL*.

**D1 · Elegir Google Sheets, y esta vez una acción**

```text
Clic en el + a la derecha de "Ordenar los datos" → buscá  sheets  → clic en  Google Sheets
→ aparece otra vez el panel de Triggers y Actions
→ en Actions: clic en  Append row in sheet   (agregar una fila a la hoja)
```

<p style="color:#1a7f37">Miren: otra vez la misma pantalla de Triggers y Actions, ahora de Google Sheets. Pero esta vez no es el primer paso: el flujo ya arrancó con el formulario. Así que elijo una Action, una acción: Append row in sheet, agregar una fila. La regla es simple: el primer nodo, un trigger; todos los demás, acciones.</p>

- **Append Row = agregar una fila al final.** Cada consulta es una fila nueva; las de antes no se tocan. Hay otras
  acciones (leer filas, actualizar una fila) que vemos más adelante.
  - *Ejemplo:* Diez clientes completan el formulario en el día: la planilla termina con diez filas.

**D2 · La credencial: el permiso para entrar a tu Google**

```text
Se abrió la ventana del nodo. Arriba de todo:  Credential to connect with  → clic en la lista
¿Qué aparece?
   🅰 La lista está vacía (o solo dice "+ Create new credential")  → es la PRIMERA VEZ: camino 🅰
   🅱 Aparece  Google Sheets account                                → YA ESTÁ CONECTADA: camino 🅱
```

<p style="color:#1a7f37">Para escribir en mi planilla, n8n necesita permiso para entrar a mi cuenta de Google. Ese permiso se llama credencial. Abro la lista de Credential y me fijo: si ya tengo una, la elijo y listo. Si está vacía, es la primera vez, y hay que crearla. Se hace una sola vez.</p>

- **Credencial = la llave para entrar a otra aplicación.** Se crea una vez y se reusa en todos los flujos.
  - *Ejemplo:* Como darle a alguien una copia de la llave de tu casa: no le das tu contraseña, le das una llave
    que podés quitarle cuando quieras.

**D2 · Camino 🅰 · Primera vez: crear la credencial**

```text
Credential to connect with → + Create new credential
→ se abre la ventana  Google Sheets account
   n8n Cloud:  botón  Sign in with Google  → elegís tu cuenta → Allow → Save     (listo, seguí en D3)
   n8n local:  pide  Client ID  y  Client Secret  (cartel rojo: Please check the errors below)
               → hacé el trámite en Google Cloud con la guía completa (link abajo), y volvé a D3
```

**Guía completa de la primera conexión (n8n local):**
- En este README: [Anexo del flujo 03 · Conectar Google Sheets por primera vez](#anexo-del-flujo-03--conectar-google-sheets-por-primera-vez-n8n-local)
- Archivo aparte, para los alumnos: [google-sheet-conection.md](google-sheet-conection.md) (Partes 0 a 3, pasos 0 a 17)

<p style="color:#1a7f37">Si están en n8n Cloud, es un botón: Sign in with Google, elijo mi cuenta, acepto, y listo. En n8n local, como yo, me pide dos datos, Client ID y Client Secret, que se sacan de una página de Google. Ese trámite lleva unos veinte minutos y se hace una sola vez; está paso a paso en la guía. Ustedes lo hacen en casa, con calma. Yo ya lo hice, así que sigo por el otro camino.</p>

- **El cartel rojo no es un error tuyo.** En n8n local, la ventana nueva siempre arranca así: le faltan los dos datos
  de Google.
  - *Ejemplo:* Un alumno ve *Please check the errors below*: no rompió nada, le falta hacer la guía.
- **El Client Secret no se comparte.** No se pega en ningún chat ni en el grupo de la clase.

**D2 · Camino 🅱 · Ya está conectada: elegirla de la lista**

```text
Credential to connect with → elegí  Google Sheets account   (la que ya creaste)
→ no aparece ningún cartel rojo: seguí en D3
```

<p style="color:#1a7f37">Como yo ya la tengo, la elijo de la lista: Google Sheets account. Y nada más. No vuelvo a Google, no pego nada. Es la llave que ya hicimos: se usa en todas las puertas.</p>

**D2-bis · Más sobre la credencial ya vinculada** (para leer en casa, no hace falta en clase)

```text
En cualquier nodo de Google Sheets (de este flujo o de otro):
   Credential to connect with  → abrí la lista → elegí  Google Sheets account   (la que ya creaste)
   → listo: no se vuelve a hacer nada en Google Cloud
```

<p style="color:#1a7f37">Y una vez que la credencial existe, el trámite no se repite nunca más. En cualquier flujo nuevo, en cualquier nodo de Google Sheets, abro la lista de Credential y elijo la que ya tengo: Google Sheets account. Es la llave que ya hicimos: se usa en todas las puertas.</p>

- **La credencial queda guardada en tu n8n, no en el flujo.** Por eso aparece en la lista de cualquier flujo. Para
  verlas todas: **Overview** → pestaña **Credentials** (credenciales).
  - *Ejemplo:* Mañana armás otro flujo que lee una planilla: nodo Google Sheets → Credential → *Google Sheets
    account*. Nada más.
- **Al importar un flujo, la credencial no viene con el archivo.** El nodo aparece sin credencial (o con un aviso):
  se elige de la lista, igual que acá.
  - *Ejemplo:* Importás `03-formulario.json` → *Guardar en la planilla* → Credential → *Google Sheets account* →
    pegás el link de tu planilla en *Document*.
- **Si tenés más de una, ponele nombre.** Clic en el lápiz al lado de la credencial → arriba, clic en el nombre
  *Google Sheets account* → por ejemplo *Sheets · mi Gmail*.
  - *Ejemplo:* Una para tu Gmail personal y otra para el de la agencia: con nombre, no las confundís.
- **Si un día deja de andar** (en modo de prueba, Google vence el permiso cada 7 días): lápiz al lado de la
  credencial → **Reconnect** (o *Sign in with Google*) → elegís tu cuenta → **Save**. No hace falta volver a Google
  Cloud.
  - *Ejemplo:* El nodo se pone rojo con un error de permiso, aunque la semana pasada andaba: Reconnect y listo.
- **Sirve también para otros productos de Google**, si al crear el proyecto encendiste su API. Gmail, Drive o
  Calendar tienen su propia credencial en n8n, pero usan el mismo Client ID y Client Secret.
  - *Ejemplo:* Para Gmail: encendés la Gmail API en Google Cloud, creás la credencial *Gmail OAuth2* en n8n y pegás
    los mismos dos datos.

**D3 · Qué planilla y qué hoja**

**D3-1 · Resource y Operation: ya vienen**

```text
Resource:   Sheet Within Document     (ya viene: "una hoja dentro de una planilla")
Operation:  Append Row                (ya viene, porque elegiste esa acción en D1)
```

<p style="color:#1a7f37">Estas dos ya vienen bien, porque elegí Append row en el panel: trabajo con una hoja de una planilla, y agrego una fila. No las toco.</p>

**D3-2 · Document: pegar el link**

```text
Fila "Document": a la derecha dice  From list ▾  → cambialo a  By URL
→ en la caja:  Ctrl + V  (el link que copiaste en D0-3)
```

<p style="color:#1a7f37">Document es el archivo, la planilla. A la derecha dice From list, elegir de una lista; lo cambio por By URL, por link, y pego el link que me copié. Es la forma que menos falla.</p>

- **Tres formas de elegir la misma planilla.** *From list* (la buscás por nombre), *By URL* (pegás el link) o
  *By ID* (solo el pedazo del medio del link).
  - *Ejemplo:* Con *From list* también anda: aparece "Consultas de la agencia". Si no aparece, la planilla está en
    otra cuenta.

**D3-3 · Sheet: la pestaña de adentro**

```text
Fila "Sheet": clic en  Choose…  → elegí  Hoja 1
```

<p style="color:#1a7f37">Y Sheet es la hoja, la pestañita de abajo de la planilla. Una planilla puede tener varias; le digo cuál: Hoja 1.</p>

- **Document es el cuaderno; Sheet es el separador.** n8n necesita los dos para saber dónde escribir.

**D4 · Cómo se reparten los datos en las columnas**

```text
Mapping Column Mode:  Map Automatically
                      (cada casillero va a la columna que se llama igual)
(si abajo aparece "Values to Send" con una caja vacía por columna, quedó en el modo a mano:
 volvé a elegir  Map Automatically )
Cerrá → renombralo:  Guardar en la planilla  → Save
```

<p style="color:#1a7f37">Y acá se ve por qué ordenamos los datos antes. Elijo Map Automatically: que cada casillero vaya solo a la columna que se llama igual. fecha a fecha, nombre a nombre. Si no hubiéramos acomodado los nombres, esto no funcionaría.</p>

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

Por qué: con *Map Automatically*, n8n busca para cada casillero la columna que se llama exactamente
igual. Si no la encuentra, ese dato no va a ningún lado.

**D5 · La prueba completa**

```text
Execute workflow  → se abre el formulario → completalo:  Martín · Bariloche · 2  → Submit
Volvé a n8n: los tres nodos en verde.
Abrí la planilla: hay una fila nueva →  11/11/2026 12:40 | Martín | Bariloche | 2
```

<p style="color:#1a7f37">Ahora todo junto. Completo el formulario como si fuera otro cliente, Martín, que va a Bariloche con dos personas. Los tres nodos en verde. Y miren la planilla: apareció una fila nueva, sola.</p>

<p style="color:#1a7f37">Esto contesta la pregunta de hace un rato: ¿dónde quedan guardados los datos? Dentro del flujo, viven mientras dura la ejecución. Para que queden para siempre, un nodo los tiene que mandar a algún lado. Acá, a Google Sheets.</p>

<p style="color:#1a7f37">Fíjense que las dos formas hacen lo mismo: entran datos de afuera, n8n los recibe, y los usa en los nodos siguientes. Con el webhook los mandamos en la dirección; con el formulario los carga una persona. Para n8n, en los dos casos, es una ficha con casilleros. Y si queremos que quede guardado, lo mandamos a una planilla.</p>

#### Anexo del flujo 03 · Conectar Google Sheets por primera vez (n8n local)

> **Desde dónde se llega:** desde el paso **D2** (camino 🅰, primera vez). Cuando termines, volvé a
> [D3](#parte-d--guardar-en-la-planilla-google-sheets) y seguí con la planilla.

<p style="color:#1a7f37">Para guardar en la planilla, hay que darle permiso a n8n para entrar a nuestro Google. Si están en n8n Cloud, es un botón. Si están en n8n local, como yo, hay que hacer un trámite una sola vez, en una página de Google. Se los muestro ahora para que vean dónde está cada cosa; ustedes lo hacen en casa, con calma, siguiendo esta parte del README o la grabación.</p>

> **Guía aparte para los alumnos:** el mismo camino, un paso por vez, con los nombres de Google Cloud en castellano
> y los errores que aparecieron al probarlo: [google-sheet-conection.md](google-sheet-conection.md).
>
> **Para vos:** si ya tenés la credencial creada, mostrá solo la ventana de n8n y los pasos 5 a 8 en Google (unos 4 minutos), y volvé a D3. Si no la tenés, hacela antes de la clase con estos mismos pasos.

Esto es para cuando, en n8n **en tu computadora** (`localhost:5678`), abrís un nodo de Google Sheets, elegís
crear una credencial, y aparece esta ventana:

```text
┌───────────────────────────────────────────────────────────────────┐
│ Google Sheets account                                  Save   ✕   │
│ Google Sheets OAuth2 API                                          │
│                                                                   │
│ Connection     Setup credential              OAuth2 (recommended) │
│ Sharing                                                           │
│ Details        ⚠ Please check the errors below                    │
│                                                                   │
│                OAuth Redirect URL                                 │
│                http://localhost:5678/rest/oauth2-credential/callback
│                                                                   │
│                Client ID *        [                    ]          │
│                This field is required                             │
│                Client Secret *    [                    ]          │
└───────────────────────────────────────────────────────────────────┘
```

**Tiempo:** unos 20 minutos, **una sola vez**. Después la credencial sirve para todos tus flujos.

**Si usás n8n Cloud, no necesitás nada de esto:** en esa misma ventana aparece un botón **Sign in with Google**,
elegís tu cuenta y listo. Esto es solo para n8n local.

> Los nombres de los botones de Google Cloud cambian seguido. Si no encontrás uno exacto, buscá el parecido.

**Primero, qué es esta ventana y por qué pide esas cosas**

**Qué es una credencial.** Es el permiso que le das a n8n para entrar a tu cuenta de Google y escribir en tus
planillas. Es como darle a alguien una copia de la llave de tu casa: no le das tu contraseña, le das una llave que
podés quitarle cuando quieras.

**Por qué en local pide Client ID y Client Secret.** Google no deja que cualquier programa entre a tu cuenta. Antes,
el programa se tiene que presentar: "soy tal aplicación, y quiero permiso para usar Google Sheets". En n8n Cloud, esa
presentación ya la hizo n8n por vos. En n8n local, **tu n8n es una aplicación nueva que Google no conoce**, así que
tenés que registrarla vos, en una página de Google que se llama **Google Cloud Console**. Al registrarla, Google te da
dos datos:

| Dato | Qué es | Parecido a |
|---|---|---|
| **Client ID** | El nombre de tu aplicación para Google. | El número de socio de un club. |
| **Client Secret** | La clave secreta de esa aplicación. No se comparte. | La contraseña del socio. |

Esos dos datos se pegan en la ventana de n8n.

**Qué es OAuth2.** Es el nombre del sistema que usa Google para dar estos permisos. Lo importante: vos nunca le das
tu contraseña de Gmail a n8n. Google te pregunta a vos, en una pantalla de Google, "¿dejás que esta aplicación use tus
planillas?", y si decís que sí, le da a n8n una llave. Por eso dice **OAuth2 (recommended)** arriba a la derecha:
dejalo así.

**Qué es la OAuth Redirect URL.** Es la dirección a la que Google te devuelve después de que decís "sí, acepto".
Tiene que ser exactamente esa, `http://localhost:5678/rest/oauth2-credential/callback`, porque es la puerta de tu n8n
local. Se la vas a tener que dar a Google en el paso 5.

**El plan.** Son tres partes:

```text
Parte 1 · En Google Cloud Console: registrar tu n8n como aplicación   (pasos 1 a 6)
Parte 2 · Copiar Client ID y Client Secret a la ventana de n8n         (paso 7)
Parte 3 · Conectar y probar                                            (pasos 8 y 9)
```

Dejá la ventana de n8n abierta en una pestaña, y abrí Google Cloud Console en otra.

**Parte 1 · Registrar tu n8n en Google Cloud Console**

**Paso 1 · Entrar y crear un proyecto**

```text
Andá a  console.cloud.google.com  → entrá con el mismo Gmail donde está tu planilla
(la primera vez puede pedirte aceptar las condiciones: aceptá)
Arriba, al lado del logo, el selector de proyectos → New project
   Project name:  n8n curso   → Create
Esperá unos segundos y fijate que arriba diga  n8n curso  (si no, elegilo en el selector)
```

Un **proyecto** es una carpeta donde Google guarda todo lo de tu aplicación. Hay que crearla una vez.

**Paso 2 · Encender las dos APIs que usa n8n**

```text
Menú ☰ (arriba a la izquierda) → APIs & Services → Library
   buscá  Google Sheets API  → clic → Enable
Volvé a Library
   buscá  Google Drive API   → clic → Enable
```

Una **API** es la puerta por donde un programa habla con otro (la vemos en la próxima clase). Google tiene una puerta
para cada producto, y vienen cerradas. Encendés dos: **Sheets** (para escribir en la planilla) y **Drive** (n8n la usa
para listar tus planillas y encontrarlas por el link).

**Paso 3 · La pantalla de consentimiento: cómo se presenta tu aplicación**

```text
Menú ☰ → Google Auth Platform   (en algunas cuentas dice  OAuth consent screen)
→ Get started
   App name:            n8n curso
   User support email:  tu Gmail                      → Next
   Audience:            External                      → Next
   Contact information: tu Gmail                      → Next
   tildá que aceptás la política                      → Continue → Create
```

Esto es lo que vas a ver después, cuando Google te pregunte "¿dejás que **n8n curso** use tus planillas?". **External**
quiere decir que la app la usa una cuenta de Gmail común (no una empresa).

**Paso 4 · Agregarte como usuario de prueba**

```text
En Google Auth Platform → Audience → Test users → Add users
→ escribí tu Gmail → Save
```

Tu aplicación queda "en prueba": solo la pueden usar las cuentas que pongas acá. **Si te salteás este paso,** al
conectar Google te va a bloquear con *Access blocked* o *Error 403: access_denied*.

**Paso 5 · Crear el cliente y darle la dirección de regreso**

```text
En Google Auth Platform → Clients → Create client
   Application type:  Web application
   Name:              n8n local
   Authorized redirect URIs → Add URI → pegá:
      http://localhost:5678/rest/oauth2-credential/callback
→ Create
```

La dirección la copiás de la ventana de n8n (el recuadro gris de **OAuth Redirect URL**), para no equivocarte. Tiene
que ser **idéntica**: `http` (no `https`), `localhost`, `5678`, y sin barra al final.

**Paso 6 · Copiar los dos datos**

```text
Aparece una ventana con:
   Client ID       1234567890-abc…apps.googleusercontent.com
   Client secret   GOCSPX-…
→ copiá los dos (hay un botón para copiar al lado de cada uno)
```

**Copiá el Client secret ahora:** después Google no lo vuelve a mostrar completo. Si lo perdés, no pasa nada grave:
en el cliente, creás un secret nuevo.

**Parte 2 · Volver a n8n y pegar los datos**

**Paso 7 · Completar la ventana de la credencial**

```text
Volvé a la pestaña de n8n (la ventana "Google Sheets account"):
   OAuth2 (recommended):  dejalo así
   Client ID:             pegá el Client ID
   Client Secret:         pegá el Client secret
→ el cartel rojo "Please check the errors below" desaparece
→ aparece el botón  Sign in with Google
```

El cartel rojo de la captura solo quería decir eso: que faltaban estos dos datos.

**Parte 3 · Conectar y probar**

**Paso 8 · Darle permiso a n8n**

```text
Clic en  Sign in with Google  → se abre una ventana de Google
→ elegí tu cuenta
→ aparece "Google hasn't verified this app" (Google no verificó esta app): es normal, la app es tuya
   → Continue
→ tildá los permisos que pide (ver, editar planillas y archivos) → Continue
→ la ventana se cierra y en n8n dice  Account connected  (cuenta conectada)
→ Save  (arriba a la derecha de la ventana de la credencial)
```

Ese aviso de "app no verificada" asusta, pero es lógico: Google verifica las apps que usa mucha gente. La tuya la
creaste recién y la usás solo vos.

**Paso 9 · Probarla en el flujo**

```text
En el nodo de Google Sheets:
   Credential to connect with:  ahora aparece tu credencial (Google Sheets account) → elegila
   Document:  By URL → pegá el link completo de tu planilla
   Sheet:     Hoja 1
→ Execute step
```

Si la fila aparece en la planilla, está todo bien. Desde ahora, en cualquier flujo, elegís esta misma credencial.

**Si algo sale mal con la credencial**

| Si te aparece… | Qué pasó | Qué hacés |
|---|---|---|
| *Please check the errors below* · *This field is required* | Faltan el Client ID y el Client Secret | Pasos 1 a 7. |
| *Error 400: redirect_uri_mismatch* | La dirección de regreso que tiene Google no es idéntica a la de n8n | Copiala de nuevo desde n8n y pegala en el cliente de Google (paso 5). Fijate: `http`, `localhost`, `5678`, sin barra al final. Guardá y esperá unos minutos. |
| *Access blocked* o *Error 403: access_denied* | Tu Gmail no está como usuario de prueba | Paso 4. |
| *Google hasn't verified this app* | Es normal: la app es tuya | **Continue**. |
| *Google Sheets API has not been used in project… or it is disabled* | No encendiste la API | Paso 2 (las dos: Sheets y Drive). |
| *Not a valid Google Drive File URL* | El link de la planilla está incompleto | Copiá el link entero de la barra del navegador: `https://docs.google.com/spreadsheets/d/…/edit`. |
| A la semana deja de andar | En modo de prueba, Google vence el permiso a los 7 días | Abrí la credencial → **Reconnect** (o *Sign in with Google* de nuevo). |

**Palabras de esta parte** (también están en el glosario)

| Palabra | Qué es |
|---|---|
| **Credencial** (*credential*) | El permiso guardado en n8n para entrar a otra aplicación. |
| **OAuth2** | El sistema de Google para dar permisos sin pasar tu contraseña. |
| **Google Cloud Console** | La página de Google para registrar aplicaciones (`console.cloud.google.com`). |
| **Proyecto** | La carpeta de Google Cloud donde queda registrada tu aplicación. |
| **API** | La puerta por donde un programa habla con otro. Hay que encender las de Sheets y Drive. |
| **Pantalla de consentimiento** (*consent screen*) | La pantalla donde Google te pregunta si das permiso. |
| **Usuario de prueba** (*test user*) | La cuenta que puede usar tu app mientras está en prueba: la tuya. |
| **Client ID / Client Secret** | El nombre y la clave de tu aplicación para Google. |
| **OAuth Redirect URL** | La dirección a la que Google te devuelve después de dar permiso: la puerta de tu n8n. |
| **Sign in with Google** | El botón que abre la pantalla de Google para dar permiso. |

> **⏪ Credencial lista:** volvé a [D3 · Qué planilla y qué hoja](#parte-d--guardar-en-la-planilla-google-sheets)
> y seguí desde ahí.

#### Para casa (no se da en clase) · Si en vez de armarlo importás `03-formulario.json`

En clase el flujo se arma desde cero. Si un alumno después importa el archivo, al ejecutarlo le sale:

```text
Workflow execution cannot start
The 'Guardar en la planilla' node has issues:
- Parameter "Document" is required.
- Not a valid Google Drive File URL
```

Es normal: el archivo no trae ni tu planilla ni tu credencial. Los dos primeros nodos vienen completos; solo hay
que completar **Guardar en la planilla**, con los mismos pasos de la Parte D:

```text
1. Crear la planilla con sus títulos y copiar el link          → D0-1 a D0-3
2. Doble clic en "Guardar en la planilla" → Credential → Google Sheets account
   (si la lista está vacía: es la primera vez → el anexo de arriba)   → D2
3. Document → By URL → pegar el link · Sheet → Hoja 1            → D3-2 y D3-3
4. Save → Execute workflow
```

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

#### ¿Para qué se usa un IF en la vida real? (2 min)

<p style="color:#1a7f37">¿Y esto para qué sirve en un negocio? Para casi todo. Cada vez que en un trabajo alguien dice "si pasa tal cosa, hago esto; si no, hago lo otro", ahí hay un IF. Y lo bueno es que el IF no se cansa ni se olvida: pregunta lo mismo, igual, todas las veces.</p>

| Negocio | La pregunta del IF | Si es sí (true) | Si es no (false) |
|---|---|---|---|
| Agencia de viajes | ¿El presupuesto es de USD 1000 o más? | Aplicar 10% de descuento | Precio normal |
| Agencia de viajes | ¿Hoy es sábado o domingo? | No mandar el resumen | Mandar el resumen del día |
| Tienda online | ¿Hay stock del producto? | Confirmar la compra | Avisar "sin stock" y ofrecer otro |
| Tienda online | ¿El pago se acreditó? | Mandar la confirmación | Mandar un recordatorio de pago |
| Consultorio | ¿El turno es mañana? | Mandar recordatorio por WhatsApp | No hacer nada |
| Cualquier negocio | ¿El mail dice "urgente"? | Avisarle al dueño al celular | Dejarlo en la bandeja |
| Cualquier negocio | ¿El formulario vino con el email completo? | Guardarlo en la planilla | Pedirle que lo complete |

Para explicar:
- **El IF reemplaza a la persona que revisa y decide.** Lo que antes hacía alguien mirando uno por uno ("este
  pagó, este no"), el IF lo hace solo con cada dato que llega.
  - *Ejemplo:* Cien pedidos en el día: el IF separa en segundos los que pagaron de los que no.
- **Casi siempre el IF está en el medio de un flujo más grande.** Antes hay un trigger que trae el dato (un
  formulario, un mail, un horario); después de cada salida hay acciones (mandar un mensaje, guardar una fila).
  - *Ejemplo:* Formulario → IF ¿email completo? → true: Google Sheets; false: mail pidiendo que lo complete.
- **También sirve para frenar el flujo.** Una de las dos salidas puede no tener nada conectado: ahí el flujo
  termina, a propósito.
  - *Ejemplo:* "¿Es fin de semana?" → true: nada (no se manda nada); false: mandar el resumen.

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

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**1 · Crear el workflow y elegir el disparador con horario**

```text
Overview → Create workflow → nombre:  IF fin de semana
+ (Add first step) → On a schedule   (con un horario)
```

<p style="color:#1a7f37">Flujo nuevo. Esta vez el trigger no es un clic ni un formulario: es un reloj. On a schedule quiere decir "con un horario": el flujo arranca solo, cuando llega la hora.</p>

- **On a schedule (Schedule Trigger) = arranca solo, con un horario.** Se elige cada cuánto (minutos, horas, días,
  semanas) y a qué hora.
  - *Ejemplo:* "Todos los lunes a las 8" → *Trigger Interval: Weeks*, el lunes, a las 8am.

**2 · Decirle cuándo**

```text
Trigger Interval:       Days   (cada tantos días)
Days Between Triggers:  1      (todos los días)
Trigger at Hour:        9am
Trigger at Minute:      0
Cerrá → renombralo:  Todos los días a las 9
```

<p style="color:#1a7f37">Le digo: cada un día, a las nueve en punto. O sea, todos los días a las 9. Le pongo ese nombre al nodo, así se lee solo.</p>

**3 · Poner el IF**

```text
+ a la derecha → buscá  if  → If
```

<p style="color:#1a7f37">Ahora el IF, la pregunta de sí o no. La pregunta va a ser: ¿hoy es fin de semana?</p>

**4 · Escribir la pregunta: qué miro**

```text
En Conditions, el casillero de la izquierda (value1): escribí  {{ $now.weekday }}
```

<p style="color:#1a7f37">La condición tiene tres partes: qué miro, cómo comparo, y contra qué. Qué miro: el día de hoy. n8n sabe qué día es: $now es "ahora", y weekday es el número del día de la semana. Lunes es 1, martes 2, y así hasta el domingo, que es 7.</p>

- **`$now.weekday` es el número del día.** Lunes = 1 … sábado = 6, domingo = 7.
  - *Ejemplo:* Hoy, miércoles, vale `3`.

**5 · Cómo comparo y contra qué**

```text
medio:    Number → is greater than or equal to   (es mayor o igual a)
derecha:  6
Cerrá → renombralo:  ¿Es fin de semana?
```

<p style="color:#1a7f37">Cómo comparo: mayor o igual. Contra qué: 6. O sea: ¿el número del día es 6 o más? El 6 es el sábado y el 7 el domingo. Si es 6 o 7, es fin de semana.</p>

**6 · Las dos salidas: true y false**

```text
El IF tiene dos salidas a la derecha:  true  (sí)  y  false  (no)
En el + de  true  → Edit Fields → campo  mensaje  (String):
   Hoy es {{ $now.setLocale('es').toFormat('cccc') }}: no mandamos el resumen.
→ renombralo:  Fin de semana: no mandar
```

<p style="color:#1a7f37">Miren que el IF tiene dos salidas: true, verdadero, cuando la respuesta es sí; y false, falso, cuando es no. En la de true, si es fin de semana, armo un mensaje que dice "no mandamos el resumen". Y ese pedazo raro escribe el nombre del día en castellano: miércoles, sábado.</p>

- **`$now.setLocale('es').toFormat('cccc')` es el nombre del día, en castellano.** `setLocale('es')` = "en
  español"; `cccc` = "el nombre del día completo".
  - *Ejemplo:* Un miércoles da "miércoles".

**7 · El otro camino**

```text
En el + de  false  → Edit Fields → campo  mensaje :
   Hoy es {{ $now.setLocale('es').toFormat('cccc') }}: mandamos el resumen del día.
→ renombralo:  Día de semana: mandar resumen
```

<p style="color:#1a7f37">Y en false, cuando no es fin de semana, el mensaje dice "mandamos el resumen". Hoy uso un mensaje para que se vea; en la vida real, acá iría el nodo que manda el mail.</p>

**8 · La hora de Argentina**

```text
Menú … del flujo (arriba, al lado del nombre) → Settings → Timezone:
   America/Argentina/Buenos Aires  → Save
```

<p style="color:#1a7f37">Un detalle importante. Si el flujo dice "a las 9", ¿las 9 de dónde? Le digo que use la hora de Argentina. Si no, puede arrancar a las 9 de otro país.</p>

**9 · Probarlo sin esperar a las 9**

```text
Execute workflow  → se pone verde el camino de  false  (hoy es miércoles):
   mensaje: Hoy es miércoles: mandamos el resumen del día.
```

<p style="color:#1a7f37">No hace falta esperar a mañana a las 9: Execute workflow lo dispara ahora. Miren el canvas: el dato fue por false, porque hoy no es fin de semana, y el camino de true quedó gris, sin ejecutar. Si lo corriéramos un sábado, sería al revés. El IF eligió solo por dónde ir.</p>

- **El camino que no se usa queda gris.** No es un error: el dato fue por el otro lado.
  - *Ejemplo:* Hoy *Fin de semana: no mandar* queda gris; el sábado, el gris va a ser el otro.
- **Para que arranque solo de verdad, Publish.** *Execute workflow* es para probar. Para que mañana a las 9 arranque
  solo: **Publish**, y la computadora y Docker prendidos a esa hora.
  - *Ejemplo:* Lo armás a las 15, lo probás a las 15, y lo publicás para que mañana a las 9 arranque solo.

**10 · Probar el otro camino sin esperar al sábado**

```text
Abrí el IF → cambiá el 6 por un 3 → Execute workflow → ahora va por  true
Después volvé a poner el 6 → Save
```

<p style="color:#1a7f37">¿Y cómo sé que el otro camino anda, si hoy es miércoles? Hago trampa: cambio el 6 por un 3. Ahora la pregunta es "¿el día es 3 o más?", y hoy es 3: va por true. Listo, los dos caminos andan. Vuelvo a poner el 6.</p>

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

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**1 · El webhook que recibe el pedido**

```text
Overview → Create workflow → nombre:  IF descuento
+ → On webhook call → Webhook:
   HTTP Method: GET     Path: presupuesto     Respond: When Last Node Finishes
→ renombralo:  Pedido de presupuesto
```

<p style="color:#1a7f37">Esto ya lo conocen: un webhook, como el del saludo. Ahora se llama presupuesto, y le vamos a mandar dos datos en la dirección: el nombre y el monto del viaje.</p>

**2 · Probarlo para tener datos**

```text
Execute workflow, y en otra pestaña:
   http://localhost:5678/webhook-test/presupuesto?nombre=Ana&monto=1500
```

<p style="color:#1a7f37">Antes de seguir, toco el timbre una vez. Así, en el IF, ya tengo los datos en INPUT para arrastrar: Ana, 1500.</p>

**3 · El IF: qué miro, cómo comparo, contra qué**

```text
+ → If. En Conditions:
   izquierda:  arrastrá  monto  (adentro de query) → {{ $json.query.monto }}
   medio:      Number → is greater than or equal to
   derecha:    1000
```

<p style="color:#1a7f37">La pregunta: ¿el monto es mil o más? Qué miro: el monto, lo arrastro desde query. Cómo comparo: mayor o igual. Contra qué: mil.</p>

- **El 1000 justo, ¿qué hace?** *Greater than or equal to* es "mayor **o igual**": 1000 va por *true*. Si fuera
  *is greater than* ("mayor que"), 1000 iría por *false*.
  - *Ejemplo:* Elegir bien la comparación es decidir qué pasa con el caso del borde.

**4 · El interruptor para convertir texto en número**

```text
Abajo, prendé el interruptor:  Convert types where required   (convertir tipos cuando haga falta)
→ renombralo:  ¿Monto de 1000 o más?
```

<p style="color:#1a7f37">Y acá un detalle que en la clase 3 nos hizo renegar. Lo que llega en la dirección, 1500, parece un número, pero llega como texto. Y el IF, para decir si es más que mil, necesita un número. Este interruptor le dice: "si hace falta, convertilo". Sin él, el IF se pone rojo.</p>

- **Lo que llega en la dirección siempre es texto.** `monto=1500` llega como el texto "1500". Con el interruptor,
  n8n lo convierte en el número 1500 antes de comparar.
  - *Ejemplo:* Con el interruptor apagado, el IF se pone rojo con *Wrong type* ("tipo equivocado"): está comparando
    texto contra número. Es el mismo error de la Clase 3.

**5 · El camino con descuento: una cuenta**

```text
+ de  true  → Edit Fields → campo  mensaje :
   Hola {{ $json.query.nombre }}: tu viaje de USD {{ $json.query.monto }} tiene 10% de descuento.
   Pagás USD {{ $json.query.monto * 0.9 }}.
→ renombralo:  Con descuento
```

<p style="color:#1a7f37">Si es mil o más, armo el mensaje con el descuento. Y miren el final: monto por cero coma nueve. Dentro de las llaves se pueden hacer cuentas. Monto por 0,9 es el monto con 10% menos. Miren abajo, en la vista previa: mil quinientos por cero coma nueve, mil trescientos cincuenta. La cuenta la hizo n8n.</p>

- **Dentro de `{{ }}` se pueden hacer cuentas.** Sumar (`+`), restar (`-`), multiplicar (`*`) y dividir (`/`).
  - *Ejemplo:* `{{ $json.query.monto * 0.9 }}` es "el monto por 0,9". Ojo: el decimal se escribe con **punto**
    (`0.9`), no con coma.

**6 · El camino sin descuento**

```text
+ de  false  → Edit Fields → campo  mensaje :
   Hola {{ $json.query.nombre }}: tu viaje de USD {{ $json.query.monto }} no llega a USD 1000,
   así que no tiene descuento.
→ renombralo:  Sin descuento → Save
```

<p style="color:#1a7f37">Y si no llega a mil, otro mensaje: no tiene descuento.</p>

**7 · Probar los dos montos**

```text
Execute workflow → en el navegador, la dirección con  monto=1500  → con descuento:
   Hola Ana: tu viaje de USD 1500 tiene 10% de descuento. Pagás USD 1350.
Execute workflow otra vez → la dirección con  nombre=Luis&monto=800  → sin descuento:
   Hola Luis: tu viaje de USD 800 no llega a USD 1000, así que no tiene descuento.
```

<p style="color:#1a7f37">Pruebo con 1500: el navegador dice "pagás 1350". Ahora con 800: "no tiene descuento". Es el mismo flujo, con dos respuestas posibles: el navegador recibe la del camino que corrió.</p>

- **El webhook contesta con lo que armó el último nodo que corrió.** Como corre un solo camino, el navegador recibe
  el mensaje de *Con descuento* o el de *Sin descuento*, según el monto.
  - *Ejemplo:* Con 1500 contesta el de arriba; con 800, el de abajo.

### Qué es un Switch, y el ejemplo (flujo 06) (10 min)

<p style="color:#1a7f37">El IF tiene un límite: solo dos caminos, sí o no. ¿Y si hay más opciones? Por ejemplo, la consulta puede ser de un vuelo, de un hotel, de un paquete, o de otra cosa. Para eso está el Switch, que en inglés quiere decir "interruptor" o "selector": como la perilla de un lavarropas, que según dónde la pongas elige un programa distinto. El Switch mira el dato y lo manda por una de varias salidas.</p>

<p style="color:#1a7f37">Y tiene algo muy importante: una salida para lo que no encaja en ninguna regla. Así ninguna consulta se pierde en el camino.</p>

```text
                          ┌─ regla 1 ¿es Vuelo?    → salida Vuelos
                          ├─ regla 2 ¿es Hotel?    → salida Hoteles
dato  →  Switch ¿qué es? ─┼─ regla 3 ¿es Paquete?  → salida Paquetes
                          └─ ninguna de las tres   → salida Otra (Fallback Output)
```

Para explicar (antes del ejemplo):
- **Switch (selector) = una pregunta con varias respuestas posibles, y una salida por respuesta.** El IF pregunta
  "¿sí o no?"; el Switch pregunta "¿cuál de todas?".
  - *Ejemplo:* IF: "¿es un vuelo?". Switch: "¿es un vuelo, un hotel, un paquete, u otra cosa?".
- **Cada salida tiene su regla.** Una regla es una condición, igual a la del IF: qué miro, cómo comparo, contra
  qué. El dato sale por la primera regla que se cumple.
  - *Ejemplo:* Regla 1: `Tipo de consulta` · *is equal to* · `Vuelo` → salida Vuelos.
- **La salida para lo demás (*Fallback Output*) es opcional, pero conviene siempre.** Si no está, lo que no
  cumple ninguna regla se pierde sin avisar.
  - *Ejemplo:* Llega "Crucero", que no tiene regla: con la salida Otra, alguien lo lee; sin ella, desaparece.

#### ¿Para qué se usa un Switch en la vida real? (2 min)

<p style="color:#1a7f37">El Switch es el que reparte. En cualquier negocio donde llegan cosas de distinto tipo y cada tipo lo atiende alguien distinto, o se trata distinto, hay un Switch. Es como la persona de la mesa de entradas que mira cada papel y dice: esto va a contaduría, esto a ventas, esto a reclamos.</p>

| Negocio | Qué mira el Switch | Las salidas |
|---|---|---|
| Agencia de viajes | El tipo de consulta | Vuelos · Hoteles · Paquetes · Otra |
| Agencia de viajes | La provincia del cliente | Vendedor de Córdoba · de Mendoza · de Salta · Otra |
| Tienda online | El estado del pedido | Pagado → preparar · Enviado → avisar · Entregado → pedir reseña · Otro |
| Tienda online | El medio de pago | Tarjeta · Transferencia · Efectivo · Otro |
| Soporte / atención | El tema del mensaje | Facturación · Técnico · Ventas · Otro |
| Inmobiliaria | El tipo de operación | Alquiler · Venta · Tasación · Otra |
| Cualquier negocio | El día de la semana | Lunes: informe semanal · Viernes: cierre · Otros días: nada |

Para explicar:
- **El Switch reemplaza a la persona que clasifica.** Lo que llega mezclado (mails, formularios, pedidos) sale
  ordenado, cada cosa por su camino.
  - *Ejemplo:* Cien consultas en el día: cada vendedor recibe solo las suyas, sin que nadie las reparta a mano.
- **Funciona mejor cuando las respuestas son fijas.** Por eso en el ejemplo usamos una lista desplegable: la
  persona elige entre opciones, y el texto llega siempre igual.
  - *Ejemplo:* Con texto libre, alguien escribe "pasaje" en vez de "Vuelo", y la regla no lo reconoce (va a Otra).
- **Después de cada salida puede haber un flujo distinto.** Cada camino puede tener sus propios nodos: uno manda
  un mail, otro guarda en una planilla, otro avisa por WhatsApp.
  - *Ejemplo:* Vuelos → mail al vendedor de vuelos. Paquetes → fila en la planilla de paquetes. Otra → aviso al
    dueño.

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

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**1 · El formulario con una lista desplegable**

```text
Overview → Create workflow → nombre:  Switch por tipo
+ → On form submission   (o buscá  form  → n8n Form → Triggers → On new n8n Form event)
   Form Title:  Consulta a la agencia
   Form Elements → primer campo:  Nombre   (Text, Required Field prendido)
```

<p style="color:#1a7f37">Empiezo con un formulario, como el de la planilla. Primera pregunta: el nombre.</p>

**2 · La pregunta con opciones**

```text
Add Form Element → segundo campo:  Tipo de consulta
   Element Type:   Dropdown List   (lista desplegable)
   Field Options → agregá cuatro opciones:  Vuelo · Hotel · Paquete · Otra cosa
   Required Field: prendido
→ renombralo:  Formulario con tipo
```

<p style="color:#1a7f37">La segunda pregunta es nueva: una lista desplegable, de esas que se abren y elegís una opción. Le pongo cuatro: vuelo, hotel, paquete, u otra cosa. ¿Por qué lista y no texto libre? Porque así la respuesta llega siempre escrita igual, y el Switch la puede reconocer.</p>

- **La lista desplegable (*Dropdown List*) ayuda al Switch.** Si fuera un casillero libre, alguien podría escribir
  "vuelo", "VUELO" o "pasaje", y la regla "es igual a Vuelo" no coincidiría.
  - *Ejemplo:* Cuando el flujo tiene que decidir según una respuesta, conviene que sea una lista.

**3 · Probarlo para tener datos**

```text
Execute workflow → completá el formulario una vez:  Ana · Vuelo  → Submit
```

<p style="color:#1a7f37">Como siempre, pruebo el trigger antes de seguir, así tengo datos para arrastrar.</p>

**4 · El Switch y su primera regla**

```text
+ → buscá  switch  → Switch.    Mode: Rules (reglas)
Routing Rules (reglas para repartir) → primera regla:
   izquierda:  arrastrá  Tipo de consulta  → {{ $json['Tipo de consulta'] }}
   medio:      String → is equal to   (es igual a)
   derecha:    Vuelo
   Rename Output: prendido → Output Name:  Vuelos
```

<p style="color:#1a7f37">Ahora el Switch. Cada regla es una pregunta, como la del IF, y cada regla tiene su propia salida. Primera regla: ¿el tipo de consulta es igual a Vuelo? Si sí, sale por una salida que llamo Vuelos. Le pongo nombre a la salida para que en el canvas se lea qué es cada camino.</p>

- **Switch (selector) = varias salidas, una por regla.** El dato sale por la primera regla que se cumple.
  - *Ejemplo:* Regla 1: ¿es "Vuelo"? → salida Vuelos. Regla 2: ¿es "Hotel"? → salida Hoteles.
- **Ponerle nombre a cada salida (*Rename Output*).** Si no, se llaman 0, 1, 2…
  - *Ejemplo:* "Vuelos", "Hoteles" en vez de "Output 0", "Output 1".

**5 · Las otras dos reglas**

```text
Add Routing Rule → igual, con  Hotel    → Output Name: Hoteles
Add Routing Rule → igual, con  Paquete  → Output Name: Paquetes
```

<p style="color:#1a7f37">Dos reglas más, iguales: una para Hotel y otra para Paquete. El texto de la derecha tiene que ser exactamente igual a la opción de la lista: con mayúscula, sin espacios de más.</p>

**6 · La salida para lo demás**

```text
Options → Add option → Fallback Output (salida para lo que no encaja):  Extra Output
Add option → Rename Fallback Output:  Otra
→ renombralo:  ¿Qué tipo de consulta?
```

<p style="color:#1a7f37">¿Y "Otra cosa"? No le hice regla. Para eso está esta opción: una salida extra para todo lo que no cumple ninguna regla. La llamo Otra. Es la red de seguridad: así ninguna consulta se pierde.</p>

- **Sin *Fallback Output*, lo que no encaja se pierde en silencio.** No da error: simplemente no sigue.
  - *Ejemplo:* Mañana alguien agrega "Crucero" a la lista y nadie toca el Switch: sin *Fallback*, esas consultas
    desaparecen; con *Fallback*, caen en "Otra".

**7 · Un aviso en cada salida**

```text
Ahora el Switch tiene cuatro salidas. En el + de cada una, un Edit Fields con un campo  aviso :
   Vuelos   →  Vuelos: atender a {{ $json.Nombre }}.
   Hoteles  →  Hoteles: atender a {{ $json.Nombre }}.
   Paquetes →  Paquetes: atender a {{ $json.Nombre }}.
   Otra     →  Otra cosa: {{ $json.Nombre }} necesita que alguien lo lea.
→ Save
```

<p style="color:#1a7f37">Miren el canvas: cuatro salidas, cada una con su nombre. En cada una pongo un aviso para el área que corresponde. En la vida real, acá iría un mail o un mensaje a cada vendedor.</p>

**8 · Probarlo con dos opciones**

```text
Execute workflow → completá el formulario eligiendo  Paquete  → se pone verde solo el camino de Paquetes
Execute workflow → completá eligiendo  Otra cosa  → va por la salida  Otra
```

<p style="color:#1a7f37">Elijo Paquete: se prende solo el camino de Paquetes. Ahora elijo Otra cosa, que no tiene regla: no se perdió, fue por Otra, para que alguien la revise.</p>

- **¿IF o Switch?** Dos caminos (sí o no) → IF. Tres o más → Switch.
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

<p style="color:#1a7f37">Ojo: los IF uno adentro del otro también funcionan. No está mal; da el mismo resultado. La pregunta es cuál es más cómodo, y para eso piensen en lo que pasa después: cuando hay que leerlo, cambiarlo, o cuando llega algo que no esperábamos.</p>

**IF dentro de IF contra Switch: qué gana cada uno**

| Mirando… | Dos o tres IF encadenados | Un Switch |
|---|---|---|
| **Cuántos nodos** | Uno por opción: para 3 áreas, 3 IF | Uno solo, para todas |
| **Leerlo en el canvas** | Hay que seguir las flechas *false* de uno en uno, como una escalera | Todas las salidas una al lado de la otra, con su nombre |
| **Agregar una opción** (llega "Crucero") | Otro IF más, colgado del último *false*, y reconectar flechas | Una regla más (*Add Routing Rule*), en el mismo nodo |
| **Lo que no encaja** | Termina en el último *false*, que no tiene nombre y es fácil olvidarse de conectarlo | Va a la salida *Otra* (*Fallback Output*), que se ve y tiene nombre |
| **Cambiar una regla** | Abrir el IF que corresponde (hay que encontrarlo) | Abrir un solo nodo: están todas las reglas juntas |
| **Equivocarse** | Si un IF pregunta mal, todos los de abajo reciben lo que no era | Cada regla es independiente: una mal escrita afecta solo a su salida |

Para explicar:
- **El beneficio del Switch es el orden, no el resultado.** Con IF encadenados o con Switch, la consulta de
  "Paquete" llega al mismo lugar. La diferencia está en lo fácil que es entenderlo y cambiarlo después.
  - *Ejemplo:* En tres meses, otra persona (o vos) abre el flujo. Con el Switch ve "Vuelos · Hoteles · Paquetes ·
    Otra" y entiende en dos segundos. Con la escalera de IF, tiene que abrir cada uno para ver qué pregunta.
- **Crecer es más fácil con el Switch.** Las opciones casi siempre aumentan: hoy son 3 áreas, mañana 6.
  - *Ejemplo:* Con IF, para 6 áreas son 6 IF en escalera. Con Switch, son 6 reglas en un nodo.
- **La salida "Otra" es una red de seguridad que se ve.** En la escalera de IF, lo que no encaja cae en el último
  *false*; si nadie lo conectó, se pierde en silencio.
  - *Ejemplo:* Alguien elige "Crucero": con el Switch cae en "Otra" y alguien lo lee; con IF, puede no ir a ningún
    lado.
- **¿Entonces el IF nunca?** El IF es mejor cuando la pregunta es de **sí o no**, o cuando cada paso pregunta **por
  cosas distintas**. El Switch es para cuando se pregunta **una sola cosa** que puede tener **varias respuestas**.
  - *Ejemplo:* "¿El monto es 1000 o más?" → IF. "¿Es vuelo, hotel o paquete?" → Switch. "¿Es paquete? Y si es
    paquete, ¿el monto es 1000 o más?" → son dos preguntas distintas: un Switch y, en la salida Paquetes, un IF.

`PARA EL CHAT` (opcional; das las respuestas sin esperar):

```text
PARA EL CHAT · ¿IF o Switch?
1. Si el cliente pagó la seña, mandarle la confirmación; si no, un recordatorio.
2. Según la provincia del cliente (Córdoba, Mendoza, Salta, otra), mandarlo a un vendedor distinto.
3. Si el mail dice "urgente", avisarle al dueño.
```

Respuestas: **1 → IF** (sí o no); **2 → Switch** (cuatro caminos, con "otra" como salida para lo demás); **3 → IF**.

---

## Extra, si llegás · Una probadita de API (10 min)

**Solo si sobra tiempo después del Switch.** Si no llegás, no pasa nada: API es el tema de la clase siguiente, y
esto queda en el README para leer y en los flujos `07-api-dolar.json` y `08-api-pokemon.json` de la carpeta
[n8n/](n8n/). Si llegás justo, hacé solo la explicación y el ejemplo 1.

**¿Anda en local?** ✅ Sí, sin pasos extra: es la "dirección 1", n8n sale a buscar algo a internet. Las dos APIs de
los ejemplos son gratis y **no piden clave**.

### Qué es una API (3 min)

<p style="color:#1a7f37">Hasta ahora, los datos le llegaban a n8n: los escribíamos nosotros, o los mandaba el navegador o un formulario. Ahora vamos al revés: n8n sale a buscar datos a otro lado. Y para eso se usa una API.</p>

<p style="color:#1a7f37">Piensen en un restaurante. Ustedes no entran a la cocina a buscar la comida: le piden al mozo, con lo que dice la carta, y el mozo les trae el plato. La API es el mozo. Otro sistema, por ejemplo una página que sabe el precio del dólar, tiene sus datos en la cocina. Nosotros le pedimos a la API lo que queremos, y la API nos trae la respuesta. En n8n, el que hace el pedido es un nodo que se llama HTTP Request: pedido por internet.</p>

```text
n8n (HTTP Request)  ── "¿cuánto está el dólar oficial?" ──►  API de dolarapi.com
n8n                 ◄── { "compra": 1520, "venta": 1570 } ──   (la respuesta, en JSON)
```

Para explicar:
- **API = la puerta por donde un programa le pide datos a otro.** Cada API tiene su "carta": qué cosas se le pueden
  pedir y en qué dirección.
  - *Ejemplo:* La carta de dolarapi dice: "pidiendo `/v1/dolares/oficial`, te doy el dólar oficial".
- **Es el webhook al revés.** Con el webhook, alguien de afuera toca el timbre de n8n. Con una API, n8n toca el
  timbre de otro.
  - *Ejemplo:* Webhook: el formulario le avisa a n8n. API: n8n le pregunta a dolarapi.
- **La respuesta viene en JSON, la misma ficha de siempre.** Con llaves, casilleros y valores. n8n la muestra en
  OUTPUT y se arrastra igual que todo lo demás.
  - *Ejemplo:* `compra: 1520` se arrastra y queda `{{ $json.compra }}`.
- **Algunas APIs piden clave y otras no.** Las de hoy son abiertas. Otras (Google, Mercado Pago, la de un clima
  con más datos) piden una clave o una credencial, como la de Google Sheets.
  - *Ejemplo:* dolarapi y PokeAPI: sin clave. Gmail: con credencial.

### Ejemplo 1 · El precio del dólar (flujo 07) (4 min)

```text
Cuando hago clic  →  Preguntarle a la API  →  Armar el aviso
(trigger manual)     (HTTP Request, GET)       (Edit Fields)
```

Lo que tiene que salir (probado; el número cambia cada día): `Dólar oficial hoy: compra $1520, venta $1570.`

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**API-1 · Un flujo nuevo con el trigger de siempre**

```text
Overview → Create workflow → nombre:  API dólar
+ (Add first step) → Trigger manually
```

<p style="color:#1a7f37">Flujo nuevo, y el trigger más simple, el del clic. Lo que nos importa hoy es el nodo que viene.</p>

**API-2 · El nodo que hace el pedido: HTTP Request**

```text
+ a la derecha → buscá  http  → HTTP Request
   Method:  GET     (pedir: es el que viene)
   URL:     https://dolarapi.com/v1/dolares/oficial
→ lo demás, como viene
```

<p style="color:#1a7f37">HTTP Request es el mozo: el nodo que le hace el pedido a la API. Le digo dos cosas. El método: GET, pedir, el mismo que usaba el navegador. Y la dirección, la URL: es la parte de la carta que dice "dólar oficial". No hay clave, no hay credencial: esta API es abierta.</p>

- **La URL es "qué le pido".** Cambiando el final, se piden otras cosas de la misma carta.
  - *Ejemplo:* `…/v1/dolares/blue` trae el dólar blue; `…/v1/dolares` trae todos juntos.
- **Es GET, como el navegador.** De hecho, esa misma dirección se puede pegar en el navegador y se ve la
  respuesta.
  - *Ejemplo:* Abrí `https://dolarapi.com/v1/dolares/oficial` en otra pestaña: aparece la ficha en JSON.

**API-3 · Probar el pedido y mirar la respuesta**

```text
Execute step → OUTPUT:
   moneda: USD   casa: oficial   nombre: Oficial
   compra: 1520   venta: 1570   fechaActualizacion: 2026-11-11T18:00:00.000Z
Cerrá → renombralo:  Preguntarle a la API
```

<p style="color:#1a7f37">Ejecuto el paso, y miren: la API contestó. Una ficha con la moneda, la casa, el precio de compra, el de venta y cuándo se actualizó. Esto no lo escribí yo: vino de afuera, de internet, recién.</p>

**API-4 · Usar la respuesta, como siempre**

```text
+ → Edit Fields → Add Field →  Name: mensaje   Type: String
Value:  Dólar oficial hoy: compra $   → arrastrá  compra   → , venta $   → arrastrá  venta   → .
Queda:  Dólar oficial hoy: compra ${{ $json.compra }}, venta ${{ $json.venta }}.
Cerrá → renombralo:  Armar el aviso → Save → Execute workflow
→ mensaje: Dólar oficial hoy: compra $1520, venta $1570.
```

<p style="color:#1a7f37">Y lo que trajo la API se usa igual que cualquier dato: lo arrastro. Ahora tengo una frase con el dólar de hoy. Si mañana lo ejecuto, dice el dólar de mañana, sin tocar nada. Imagínense esto con el trigger de horario: todos los días a las 9, el dólar del día en un mensaje para los vendedores.</p>

- **Lo que trae la API es un dato más.** Se arrastra, se usa en un IF, se guarda en una planilla.
  - *Ejemplo:* Juntándolo con el flujo 05: "tu viaje de USD 1350 son hoy $2.119.500" (monto × venta).

### Ejemplo 2 · Los datos de un Pokémon (flujo 08) (3 min)

Para mostrar que con cualquier API es igual, y para que lo prueben ellos en casa cambiando el nombre.

Lo que tiene que salir (probado): `pikachu es el Pokémon número 25 y es de tipo electric.`

**API-5 · El mismo flujo, con otra dirección**

```text
En el flujo del dólar (o uno nuevo igual): doble clic en "Preguntarle a la API"
   URL:  https://pokeapi.co/api/v2/pokemon/pikachu
→ Execute step
```

<p style="color:#1a7f37">Mismo nodo, otra dirección: ahora le pregunto a la PokeAPI por Pikachu. Y miren el OUTPUT: es enorme. Miles de datos: sus movimientos, sus fotos, sus juegos. Las APIs suelen traer mucho más de lo que necesitamos. Nosotros agarramos solo lo que nos sirve.</p>

- **No hace falta entender toda la respuesta.** Se busca lo que sirve y se arrastra. Para encontrarlo, la vista
  **Schema** de OUTPUT ayuda: muestra los casilleros ordenados.
  - *Ejemplo:* De todo lo que trae Pikachu, usamos tres: `name`, `id` y el tipo.

**API-6 · Sacar tres datos de la respuesta**

```text
Edit Fields → mensaje (String):
   {{ $json.name }} es el Pokémon número {{ $json.id }} y es de tipo {{ $json.types[0].type.name }}.
→ Execute step → pikachu es el Pokémon número 25 y es de tipo electric.
```

<p style="color:#1a7f37">Arrastro el nombre, el número, y el tipo. El tipo está más adentro: en una lista que se llama types, el primero, y adentro su nombre. Arrastrándolo, n8n lo escribe solo.</p>

- **`types[0]` es "el primero de la lista".** Algunos casilleros son listas (un Pokémon puede tener dos tipos).
  `[0]` es el primero, porque se cuenta desde cero, como los items.
  - *Ejemplo:* Bulbasaur tiene dos tipos: `types[0]` es grass y `types[1]` es poison.
- **Si escribís mal el nombre, la API contesta que no existe.** Con `pikachuu` el nodo se pone rojo: la API
  devuelve un error **404**, "no encontrado", el mismo número que vimos con el webhook.
  - *Ejemplo:* Es pedirle al mozo un plato que no está en la carta.

`PARA EL CHAT` (para que lo prueben en casa):

```text
PARA EL CHAT · Probá vos (en casa, con el flujo 08 de la carpeta n8n/)
1. En "Preguntarle a la API", cambiá pikachu por otro: charmander, bulbasaur, snorlax…
2. Execute workflow y mirá qué dice el mensaje.
3. Bonus: la API de Rick and Morty, en la misma URL:
     https://rickandmortyapi.com/api/character/1
   y armá un mensaje con {{ $json.name }} y {{ $json.species }}.
```

<p style="color:#1a7f37">Esto fue una probadita. La clase que viene vemos API con calma: cómo se lee la carta de una API, las que piden clave, y cómo sumarla a los flujos que ya armamos.</p>

---

## Extra, si sobra tiempo · Dos ejemplos completos (15 min)

**Solo si sobra tiempo.** Son dos flujos que juntan lo que se vio en la clase, para que vean que las piezas se
combinan. Si no llegás, quedan armados en la carpeta [n8n/](n8n/) (`09-ejemplo-switch-e-if.json` y
`10-ejemplo-alerta-dolar.json`) y en este README, para verlos en casa.

**Si vas justo de tiempo:** importalos ya armados (menú **…** → **Import from File…**), explicá el canvas de izquierda
a derecha y probalos. Unos 3 minutos cada uno.

| Ejemplo | Qué junta | ¿Anda en local? |
|---|---|---|
| **A · Consulta con presupuesto** (flujo 09) | Formulario + Switch + IF + una cuenta | ✅ Sí, sin pasos extra (el formulario se abre en tu computadora) |
| **B · Alerta del dólar** (flujo 10) | Horario + API (HTTP Request) + IF | ✅ Sí, sin pasos extra (para que arranque solo a las 9: Publish y la computadora prendida) |

<p style="color:#1a7f37">Nos sobró un poquito de tiempo, así que vamos a hacer dos ejemplos completos. No hay nada nuevo: son las mismas piezas de hoy, juntas. Fíjense que así se arman las automatizaciones de verdad: no con un nodo mágico, sino combinando estos ladrillos.</p>

### Ejemplo A · Consulta con presupuesto: Switch y después IF (flujo 09) (8 min)

La agencia recibe consultas por un formulario. Cada una va al área que corresponde, y los paquetes de USD 1000 o
más tienen 10% de descuento.

```text
                                              ┌─ Vuelos   → Aviso a vuelos
Formulario de   →  ¿Qué tipo de consulta?  ───┼─ Hoteles  → Aviso a hoteles
consulta           (Switch)                   ├─ Paquetes → ¿Paquete de 1000 o más? ─ true  → Paquete con descuento
                                              │             (IF)                     └ false → Paquete sin descuento
                                              └─ Otra     → Para revisar a mano
```

Lo que tiene que salir (probado):

| Formulario | Camino | Aviso |
|---|---|---|
| Ana · Paquete · 1500 | Paquetes → true | `Paquetes: Ana tiene 10% de descuento. Paga USD 1350 en vez de USD 1500.` |
| Luis · Paquete · 800 | Paquetes → false | `Paquetes: Luis, paquete de USD 800, sin descuento.` |
| Sofi · Vuelo · 600 | Vuelos | `Vuelos: Sofi busca un vuelo de hasta USD 600.` |
| Leo · Hotel · 300 | Hoteles | `Hoteles: Leo busca un hotel de hasta USD 300.` |

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**A-1 · El formulario, con tres preguntas**

```text
Overview → Create workflow → nombre:  Consulta con presupuesto
+ → On form submission  (o buscá  form  → n8n Form → Triggers → On new n8n Form event)
   Form Title:  Pedí tu presupuesto
   Form Elements:
      Nombre               (Text, Required Field prendido)
      Tipo de consulta     (Dropdown List: Vuelo · Hotel · Paquete; Required Field prendido)
      Presupuesto en USD   (Number, Required Field prendido)
   Options → Add option → Path:  pedir-presupuesto
→ renombralo:  Formulario de consulta → Save
```

<p style="color:#1a7f37">Arranca con un formulario, como el de la planilla, pero con tres preguntas: el nombre, el tipo de consulta en una lista, y el presupuesto, que es de tipo número. Lista para el tipo, así el Switch lo reconoce; número para el presupuesto, así nadie escribe "mil".</p>

**A-2 · Probar el formulario para tener datos**

```text
Execute workflow → completalo:  Ana · Paquete · 1500  → Submit
```

<p style="color:#1a7f37">Como siempre, pruebo el trigger antes de seguir, así tengo datos para arrastrar en el Switch.</p>

**A-3 · El Switch reparte por tipo**

```text
+ → Switch → Mode: Rules
   Regla 1:  {{ $json['Tipo de consulta'] }}  · String → is equal to ·  Vuelo    → Rename Output: Vuelos
   Regla 2:  igual, con  Hotel    → Hoteles
   Regla 3:  igual, con  Paquete  → Paquetes
   Options → Fallback Output: Extra Output → Rename Fallback Output: Otra
→ renombralo:  ¿Qué tipo de consulta?
```

<p style="color:#1a7f37">El Switch, igual que el de recién: una regla por tipo y la salida Otra para lo que no encaje. Primera pregunta del flujo: ¿qué tipo de consulta es?</p>

**A-4 · Vuelos y hoteles: un aviso cada uno**

```text
+ de  Vuelos   → Edit Fields → aviso:  Vuelos: {{ $json.Nombre }} busca un vuelo de hasta USD {{ $json['Presupuesto en USD'] }}.
+ de  Hoteles  → Edit Fields → aviso:  Hoteles: {{ $json.Nombre }} busca un hotel de hasta USD {{ $json['Presupuesto en USD'] }}.
+ de  Otra     → Edit Fields → aviso:  Otra: revisar la consulta de {{ $json.Nombre }}.
```

<p style="color:#1a7f37">Para vuelos, hoteles y lo demás, un aviso al área. En la vida real, acá iría un mail al vendedor de cada área.</p>

**A-5 · En Paquetes, una segunda pregunta: el IF**

```text
+ de  Paquetes  → If:
   {{ $json['Presupuesto en USD'] }}  · Number → is greater than or equal to ·  1000
   Convert types where required:  prendido
→ renombralo:  ¿Paquete de 1000 o más?
```

<p style="color:#1a7f37">Y acá está lo interesante. Los paquetes tienen una regla más: si son de mil dólares o más, tienen descuento. Esa es otra pregunta, de sí o no, así que en la salida de Paquetes pongo un IF. Primero el Switch pregunta "¿qué es?", y después, solo para los paquetes, el IF pregunta "¿es de mil o más?".</p>

- **Switch e IF se combinan.** El Switch para la pregunta con varias respuestas; el IF, después, para una pregunta
  de sí o no que solo importa en un camino.
  - *Ejemplo:* A un vuelo no le preguntamos por el descuento: el IF está solo en Paquetes.

**A-6 · Con y sin descuento**

```text
+ de  true   → Edit Fields → aviso:
   Paquetes: {{ $json.Nombre }} tiene 10% de descuento. Paga USD {{ $json['Presupuesto en USD'] * 0.9 }}
   en vez de USD {{ $json['Presupuesto en USD'] }}.
+ de  false  → Edit Fields → aviso:
   Paquetes: {{ $json.Nombre }}, paquete de USD {{ $json['Presupuesto en USD'] }}, sin descuento.
→ Save
```

<p style="color:#1a7f37">En true, el descuento con la cuenta de por cero coma nueve, como en el flujo del presupuesto. En false, sin descuento.</p>

**A-7 · Probar tres casos**

```text
Execute workflow → Ana · Paquete · 1500  → Paquetes → true  → Paga USD 1350 en vez de USD 1500.
Execute workflow → Luis · Paquete · 800  → Paquetes → false → sin descuento.
Execute workflow → Sofi · Vuelo · 600    → Vuelos           → busca un vuelo de hasta USD 600.
```

<p style="color:#1a7f37">Miren el canvas en cada prueba: se prende un solo camino. Ana, paquete de 1500: pasa por Paquetes y después por true, con descuento. Luis, 800: Paquetes y false. Sofi, un vuelo: va directo a Vuelos, y el IF ni se entera. Un formulario, cinco caminos posibles, y cada consulta encuentra el suyo sola.</p>

### Ejemplo B · Alerta del dólar: horario, API e IF (flujo 10) (7 min)

Todos los días a las 9, n8n pregunta el dólar oficial. Si pasó los $1600, avisa que hay que revisar los precios en
pesos; si no, avisa que está todo tranquilo.

```text
Todos los días a las 9  →  Preguntar el dólar  →  ¿Pasó los $1600?  ─ true  → Alerta: subió
(Schedule Trigger)         (HTTP Request)         (IF)               └ false → Todo tranquilo
```

Lo que tiene que salir (probado hoy, con el dólar a $1570):
- tal cual → `El dólar oficial está a $1570: no pasó los $1600. No hace falta cambiar precios.`
- cambiando el límite a 1000 → `⚠️ Atención: el dólar oficial está a $1570. Revisar los precios en pesos de hoy.`

(El valor del dólar cambia cada día: puede que te salga otro número, y otro camino.)

**En n8n, paso a paso** (cada paso son uno o dos clics; abajo de cada uno, lo que decís y explicás en ese momento):

**B-1 · El horario**

```text
Overview → Create workflow → nombre:  Alerta del dólar
+ → On a schedule →  Trigger Interval: Days · Days Between Triggers: 1 · Trigger at Hour: 9am · Minute: 0
→ renombralo:  Todos los días a las 9
Menú … → Settings → Timezone: America/Argentina/Buenos Aires → Save
```

<p style="color:#1a7f37">Arranca con el reloj, como el del fin de semana: todos los días a las 9, con la hora de Argentina.</p>

**B-2 · Preguntarle a la API**

```text
+ → HTTP Request →  Method: GET ·  URL: https://dolarapi.com/v1/dolares/oficial
→ Execute step → OUTPUT: compra, venta, fechaActualizacion…
→ renombralo:  Preguntar el dólar
```

<p style="color:#1a7f37">Después, el mozo: le pregunto a la API del dólar, igual que en el ejemplo de API. Ejecuto el paso y ya tengo el precio de hoy, venta incluida.</p>

**B-3 · La pregunta: ¿pasó los $1600?**

```text
+ → If:   arrastrá  venta  → {{ $json.venta }}  · Number → is greater than ·  1600
→ renombralo:  ¿Pasó los $1600?
```

<p style="color:#1a7f37">Y el IF: ¿el precio de venta es mayor que 1600? Fíjense que el dato que compara no lo escribió nadie: lo trajo la API recién.</p>

- **El IF puede preguntar por cualquier dato, venga de donde venga.** De un formulario, de la dirección, de la
  fecha o de una API: para el IF es un casillero más.
  - *Ejemplo:* Acá, `venta` viene de dolarapi.

**B-4 · Los dos mensajes**

```text
+ de  true   → Edit Fields → mensaje:
   ⚠️ Atención: el dólar oficial está a ${{ $json.venta }}. Revisar los precios en pesos de hoy.
+ de  false  → Edit Fields → mensaje:
   El dólar oficial está a ${{ $json.venta }}: no pasó los $1600. No hace falta cambiar precios.
→ Save
```

<p style="color:#1a7f37">Un mensaje para cada camino. En la vida real, el de true podría ser un mail o un WhatsApp al dueño, y el de false, nada: si está tranquilo, no hace falta molestar a nadie.</p>

**B-5 · Probarlo sin esperar a las 9, y ver los dos caminos**

```text
Execute workflow → hoy va por  false  (el dólar está a $1570)
Abrí el IF → cambiá 1600 por 1000 → Execute workflow → ahora va por  true  (la alerta)
Volvé a poner 1600 → Save
```

<p style="color:#1a7f37">Lo pruebo ahora: el dólar está a 1570, no pasó los 1600, va por false. Y para ver el otro camino, hago la trampa de siempre: bajo el límite a mil, y ahora va por true, con la alerta. Vuelvo a poner 1600. Si lo publico, mañana a las 9 lo hace solo, sin que yo toque nada. Eso es una automatización completa: arranca sola, busca un dato afuera, decide, y avisa.</p>

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
| *Workflow execution cannot start* · *Parameter "Document" is required* · *Not a valid Google Drive File URL* | Importaron el flujo 03: el archivo no trae la planilla ni la credencial; o pegaron un link incompleto | En *Guardar en la planilla*: elegir la credencial y en *Document → By URL* pegar el link completo (`https://docs.google.com/spreadsheets/d/…/edit`). |
| *At least one value has to be added under 'Values to Send'* (y abajo, los títulos de la planilla con casilleros vacíos) | *Mapping Column Mode* quedó en *Map Each Column Manually* (a mano) | Subir hasta *Mapping Column Mode* y elegir **Map Automatically**. (O, a mano: arrastrar cada casillero desde INPUT a su columna.) |
| Google Sheets pide credencial o da error de permiso | En n8n local falta crear el permiso en Google Cloud | [Conectar Google Sheets en n8n local](#anexo-del-flujo-03--conectar-google-sheets-por-primera-vez-n8n-local). En n8n Cloud: *Sign in with Google*. |
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
| **Client ID / Client Secret** | El nombre y la clave secreta de tu n8n local para Google. Se sacan de Google Cloud Console. | `1234…apps.googleusercontent.com` / `GOCSPX-…` |
| **OAuth Redirect URL** | La dirección a la que Google te devuelve después de dar permiso: la puerta de tu n8n. | `http://localhost:5678/rest/oauth2-credential/callback` |
| **Usuario de prueba** (*test user*) | La cuenta que puede usar tu app de Google mientras está en prueba. | Tu Gmail. |
| **Pantalla de consentimiento** (*consent screen*) | La pantalla de Google que pregunta si le das permiso a la app. | "¿Dejás que n8n curso use tus planillas?" |
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
| **Execute step** | Ejecutar solo un nodo, para probarlo. | Botón arriba en la ventana del nodo, o el ▶ de la barrita que aparece al pasar el mouse por el nodo. |
| **Deactivate / Activate** | Apagar / prender un nodo. Apagado queda gris y n8n lo saltea. | El ⏻ de la barrita de arriba del nodo. |
| **Delete** | Borrar. Se deshace con Ctrl + Z. | El 🗑 de la barrita de arriba del nodo. |
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
| **Map Automatically** | Que cada casillero vaya a la columna que se llama igual. | `destino` → columna "destino". |
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
| **API** | La puerta por donde un programa le pide datos a otro: el mozo del restaurante. | dolarapi, PokeAPI |
| **HTTP Request** | El nodo que le hace un pedido a una API por internet: el mozo. | GET a `dolarapi.com/v1/dolares/oficial` |
| **URL** | La dirección de internet: qué se le pide a la API. | `https://pokeapi.co/api/v2/pokemon/pikachu` |
| **Postman** | Aplicación para probar direcciones de internet mandándoles pedidos. No la usamos. | GET + dirección + *Send*. |
