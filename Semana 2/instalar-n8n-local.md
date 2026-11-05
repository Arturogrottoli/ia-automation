# Instalar n8n en tu computadora, gratis

Guía para tener tu propia instancia de n8n con Docker, sin pagar el plan de n8n Cloud. Se hace una sola vez.
Si te trabás en algún paso, mirá la tabla "Si algo sale mal" al final, o escribí en el canal del curso
contando en qué paso estás y qué mensaje te aparece (una captura de pantalla ayuda mucho).

**Qué es Docker, en dos líneas.** Un programa que baja otros programas listos para usar, metidos en una "caja"
(un **contenedor**) que trae todo lo que necesitan para funcionar. Así n8n anda igual en cualquier computadora, sin
instalarle nada a mano. Tres palabras que vas a ver: la **imagen** es la caja cerrada que se descarga; el
**contenedor** es esa caja abierta y funcionando; el **volumen** es un túnel entre la caja y una carpeta de tu
computadora, donde se guardan tus datos para que no se pierdan.

Vamos a instalar n8n en tu computadora, gratis. Son cuatro etapas. Primero, en Windows, activamos WSL, una pieza que Docker necesita. Segundo, instalamos Docker, el programa que maneja las cajas. Tercero, bajamos la caja de n8n y la prendemos. Y cuarto, entrás a n8n desde el navegador y te creás el usuario. Se hace una sola vez y lleva entre 15 y 30 minutos, casi todo esperando descargas.

Los nombres de los botones de Docker Desktop pueden cambiar un poco entre versiones; los de esta guía están en
inglés, que es como viene instalado.

## Antes de empezar: qué hace falta

| Qué | Por qué | Cómo te fijás |
|---|---|---|
| Windows 10 u 11 de 64 bits, o una Mac | Docker Desktop no funciona en Windows más viejos ni de 32 bits | Windows: Inicio → Configuración → Sistema → Información. Tiene que decir "Tipo de sistema: 64 bits". |
| 8 GB de memoria RAM (con 4 anda, pero lento) | Docker y n8n usan memoria mientras están prendidos | En la misma pantalla, "RAM instalada". |
| Unos 10 GB libres en el disco | Docker, WSL y la caja de n8n ocupan lugar | Explorador de archivos → Este equipo. |
| Poder instalar programas (permiso de administrador) | El instalador cambia cosas de Windows | En tu computadora personal, lo tenés. En una del trabajo, quizás haya que pedírselo al área de sistemas. |
| Internet | Se descargan varios cientos de MB | — |

## Etapa 1 · WSL (solo Windows; en Mac se saltea)

Las cajas de Docker están hechas para Linux, que es otro sistema operativo, como Windows o el de las Mac. Es el que usan casi todos los servidores del mundo. WSL quiere decir "Subsistema de Windows para Linux": es una pieza oficial de Microsoft que deja correr Linux adentro de Windows. Docker la usa por debajo; vos no la vas a ver ni tocar nunca. Es como un adaptador de enchufe: el enchufe de Docker es de otro país, y WSL hace que entre en la pared de Windows.

1. Hacés clic en **Inicio**, escribís `PowerShell`, hacés **clic derecho** sobre *Windows PowerShell* y elegís
   **Ejecutar como administrador**. Windows pregunta "¿Quieres permitir que esta aplicación haga cambios?": **Sí**.
   Se abre una ventana azul o negra: es la terminal.
2. **Antes de instalar, fijate si ya lo tenés** (muchas computadoras con Windows 11 ya lo traen). Escribís (o
   pegás) este comando y apretás **Enter**:

```bash
wsl --version
```

- **Si aparecen varias líneas con números** y la primera dice *Versión de WSL: …* (o *WSL version: …*): ya lo
  tenés. Actualizalo con este comando (tarda un minuto; *update* quiere decir actualizar) y pasá directo a la
  etapa 2:

```bash
wsl --update
```

- **Si aparece un error o un texto largo en inglés** con una lista de opciones (*Usage: wsl.exe…*): no lo tenés,
  o es una versión muy vieja. Instalalo:

```bash
wsl --install --no-distribution
```

Instala WSL solo, sin instalar además un Linux completo, que no hace falta. Si dice que la opción
`--no-distribution` no existe (pasa en Windows desactualizados), escribís solo `wsl --install`; en ese caso,
después de reiniciar se abre una ventana de Ubuntu que pide un usuario y una contraseña: inventá cualquiera (en
minúsculas y sin espacios), anotala y cerrá esa ventana.

3. Cuando termina, podés **reiniciar la computadora** ahora, o esperar al final de la etapa 2: el instalador de
   Docker también pide reiniciar, y con un solo reinicio alcanza.

## Etapa 2 · Descargar e instalar Docker Desktop

Docker Desktop es el programa con ventanas para usar Docker. Desde ahí vamos a prender y apagar n8n con un botón, como un reproductor de música. Es gratis para uso personal, para estudiar y para empresas chicas.

4. Entrás a **docker.com/products/docker-desktop** y apretás **Download Docker Desktop**. Elegís tu versión:
   - **Windows:** *Download for Windows – AMD64*. Es la de casi todas las computadoras. La *ARM64* es solo para
     las pocas que tienen procesador ARM (algunas Surface): lo dice en Configuración → Sistema → Información →
     "Procesador".
   - **Mac:** menú  → **Acerca de esta Mac**. Si dice "Chip Apple M1" (o M2, M3, M4…), elegís *Apple Silicon*;
     si dice "Procesador Intel", elegís *Intel chip*.
5. **Windows:** abrís el archivo que se descargó (*Docker Desktop Installer.exe*) y a la pregunta de Windows le
   decís **Sí**. Aparece la pantalla *Configuration*: dejás tildada la opción **Use WSL 2 instead of Hyper-V
   (recommended)** ("usar WSL 2", lo de la etapa 1) y apretás **OK**. Tarda unos minutos. Al final aparece
   **Close and restart** (o *Close and log out*): lo apretás y la computadora se reinicia.
   **Mac:** abrís el archivo *Docker.dmg*, arrastrás la ballena a la carpeta **Aplicaciones** y la abrís desde ahí.
   Te pide la contraseña de la Mac: es para terminar de instalarse.
6. Abrís **Docker Desktop** (en Windows, desde Inicio; queda un ícono de una ballena). La primera vez aparecen tres
   pantallas:
   - el contrato de uso (*Docker Subscription Service Agreement*): **Accept** ("aceptar");
   - una invitación a crear una cuenta de Docker o iniciar sesión: **no hace falta**. Apretás **Skip** o *Continue
     without signing in* ("seguir sin iniciar sesión");
   - una encuesta sobre para qué lo vas a usar: **Skip**.
7. Esperás a que abajo a la izquierda aparezca, en verde, **Engine running** ("motor funcionando"). Docker ya
   está listo.

La ballena es el logo de Docker: carga contenedores en el lomo, como un barco. Cuando dice Engine running, Docker está prendido y listo para recibir cajas. Ojo con una cosa: Docker Desktop tiene que estar abierto cada vez que quieras usar n8n. Si lo cerrás, n8n se apaga.

## Etapa 3 · Bajar n8n y prenderlo, desde Docker Desktop

Ahora le pedimos a Docker la caja de n8n. Se hace todo con clics, sin escribir comandos: crear una carpeta en el
escritorio, bajar la imagen de n8n, prenderla y comprobar que anda.

8. **Crear la carpeta donde van a vivir tus datos.** En el **Escritorio**: clic derecho en un lugar vacío →
   **Nuevo** → **Carpeta** → nombre `n8n` (en minúsculas) → Enter. En Mac: clic derecho en el escritorio →
   **Nueva carpeta** → `n8n`. Por ahora queda vacía; cuando prendas n8n se va a llenar sola.
9. **Bajar la imagen de n8n.** En Docker Desktop, en el **buscador de arriba** (*Search*; también con **Ctrl + K**)
   escribís `n8nio/n8n`. Aparece **n8nio/n8n**, con el logo de n8n: apretás **Pull** ("traer", descargar). Tarda
   unos minutos. Cuando termina, la ves en la pestaña **Images** ("imágenes"), a la izquierda: `n8nio/n8n`,
   etiqueta `latest` ("la última versión"), alrededor de 2 GB.

   La imagen viene **todo empaquetado**: n8n, el programa Node que necesita, en la versión justa, y todas las demás
   piezas. Por eso pesa casi 2 GB y por eso funciona igual en todas las computadoras. Usá siempre la de `n8nio`
   (la cuenta oficial de n8n), no otras que se llaman parecido.
10. **Prenderla.** En **Images**, en la fila de `n8nio/n8n`, apretás ▶ (*Run*, "correr"), a la derecha. Se abre la
    ventana *Run a new container* ("correr un contenedor nuevo"). **Todavía no aprietes Run:** primero abrís
    **Optional settings** ("configuración opcional"). Para nosotros no es opcional.

    El **contenedor** es la caja abierta y funcionando. La imagen es la caja cerrada que quedó guardada; de una
    imagen se pueden abrir muchos contenedores, como de una receta salen muchas tortas.
11. **Completar la configuración.** Tres cosas; el resto queda como está:

```text
Container name:   n8n
Ports → Host port:   5678        (al lado dice :5678/tcp)
Volumes → Host path:   la carpeta n8n del escritorio   (botón … para elegirla)
          Container path:   /home/node/.n8n
```

- **Container name** ("nombre del contenedor"): `n8n`. Si queda vacío, Docker inventa uno (tipo *happy_turing*).
- **Host port** ("puerto de tu computadora"): `5678`. Un **puerto** es como el número de departamento en un
  edificio: la computadora es el edificio, y cada programa atiende en su número. Adentro de la caja, n8n atiende en
  el 5678; esto abre esa puerta hacia tu computadora. Si queda vacío, n8n funciona pero no podés entrar.
- **Host path** ("ruta en tu computadora"): con el botón **…** elegís la carpeta `n8n` del escritorio.
- **Container path** ("ruta adentro del contenedor"): exactamente `/home/node/.n8n`, con la barra al principio y
  el punto antes de n8n.

Apretás **Run**.

### Qué es `/home/node/.n8n` y por qué hay que ponerlo

Adentro de la caja de n8n hay una computadora en miniatura, con Linux, con sus propias carpetas. `/home/node/.n8n`
es la dirección de la carpeta donde n8n guarda **todo lo suyo**: workflows, credenciales, tu usuario.

- **Las barras `/`:** en Linux las carpetas se separan con barra común. Se lee "carpeta home → node → .n8n". En
  Windows sería algo como `C:\Users\node\.n8n`.
- **`/home`:** donde están las carpetas personales de los usuarios, como `C:\Users` en Windows.
- **`node`:** el usuario que usa n8n adentro de la caja (se llama así porque n8n está hecho con Node).
  `/home/node` es su carpeta personal, como `C:\Users\TuNombre` es la tuya.
- **`.n8n`:** la carpeta de n8n. El punto adelante quiere decir "carpeta oculta" en Linux.

**Por qué conectarla con tu escritorio:** todo lo que está adentro de un contenedor se pierde cuando se borra el
contenedor, y se borra cada vez que actualizás n8n. El **volumen** es un túnel: le dice a Docker "cuando n8n guarde
algo en `/home/node/.n8n`, guardalo en realidad en mi carpeta `n8n` del escritorio". n8n ni se entera, y tus datos
quedan afuera de la caja, a salvo. Es como pasar las fotos del celular a un pendrive: si cambiás de celular, las
fotos siguen ahí. *Host* quiere decir anfitrión (tu computadora); *container* es la caja. Un lado del túnel y el
otro.

**Por qué exactamente esa dirección:** n8n siempre guarda ahí y no se puede cambiar. Si escribís otra cosa
(`/n8n`, `/home/node/n8n` sin el punto), el túnel va a un cajón que n8n no usa: funciona igual, pero guarda adentro
de la caja, y lo perdés el día que actualizás.

12. **Comprobarlo.** Dos pruebas:
    - En Docker Desktop, pestaña **Logs** del contenedor (el registro de lo que va haciendo n8n). Al final tiene que
      decir lo de abajo ("el editor ya está disponible en…"). La primera vez puede tardar un minuto. En
      **Containers** aparece **n8n** con un punto verde y `5678:5678`.
    - Abrís la carpeta `n8n` del escritorio: **ya no está vacía**. Aparecen `database.sqlite`, `config`, `nodes`,
      `storage` y algún archivo más. Eso lo escribió n8n desde adentro de la caja, por el túnel.

```text
Editor is now accessible via:
http://localhost:5678
```

### Qué hay en la carpeta `n8n` del escritorio

| Archivo | Qué es |
|---|---|
| `database.sqlite` | La **base de datos**: tus workflows, credenciales, tu usuario y el historial de ejecuciones. Lo más importante. |
| `config` | La configuración, con la **clave de encriptación**: la llave con la que n8n guarda tus credenciales bajo llave. Sin este archivo, las credenciales guardadas no se pueden volver a abrir. |
| `nodes`, `storage` | Carpetas de n8n para nodos extra y archivos. |
| `n8nEventLog.log` y otros | Registros internos. |

- **No borres ni edites** nada de esta carpeta, y menos con n8n prendido.
- **Copia de seguridad:** apagás n8n (■) y copiás la carpeta entera a otro lado (un pendrive, Google Drive).
- **Si cambiás de computadora:** instalás Docker, copiás la carpeta `n8n` al escritorio nuevo y hacés los pasos 9 a
  11. Aparece tu n8n con todo adentro.

### Alternativa: lo mismo, con dos comandos

Si preferís la terminal (PowerShell común, o Terminal en Mac). Antes, creá la carpeta del paso 8:

```bash
docker pull n8nio/n8n
docker run -d --name n8n -p 5678:5678 -v "C:\Users\TuNombre\Desktop\n8n:/home/node/.n8n" n8nio/n8n
```

En Mac, la parte del volumen es `-v ~/Desktop/n8n:/home/node/.n8n`. Cada parte es un casillero del paso 11:
`--name` es *Container name*, `-p` es el puerto (tu computadora a la izquierda, la caja a la derecha), `-v` es el
túnel (tu carpeta a la izquierda, el cajón de n8n a la derecha), y `-d` lo deja corriendo por detrás para que
puedas cerrar la terminal.

## Etapa 4 · Entrar a n8n y crear tu usuario

13. Abrís el navegador (Chrome, Edge, Firefox) y escribís arriba, donde van las direcciones:
    **`http://localhost:5678`**. También podés hacer clic en `5678:5678` en Docker Desktop.
14. Aparece **Set up owner account** ("crear la cuenta de dueño"). Completás:
    - *Email*: tu mail;
    - *First Name* y *Last Name*: nombre y apellido;
    - *Password*: una contraseña de al menos 8 caracteres, con un número y una mayúscula.

    Apretás **Next** ("siguiente").

Esta cuenta no es de internet: es la del dueño de tu n8n, y vive en tu computadora. No es una cuenta de n8n.io ni de Docker. Anotá la contraseña, porque n8n local no te puede mandar un mail para recuperarla.

15. Aparece una encuesta, *Customize n8n to you* ("personalizá n8n"): la completás o la salteás con **Get started**
    ("empezar").
16. Puede aparecer un ofrecimiento de funciones extra gratis a cambio de tu mail (*Get paid features for free*). Es
    opcional: si lo aceptás, te llega un mail con una clave de licencia y un botón para activarla. Para el curso no
    hace falta.
17. Llegás a la **pantalla de inicio** de n8n, con la lista de workflows vacía. Listo: esta es tu instancia.

Esto que ves es tu n8n, el mismo que el de la nube, pero corriendo en tu computadora. Todo lo que hagamos en el curso funciona igual acá. La única diferencia: los flujos corren solo mientras la computadora y Docker Desktop estén prendidos.

## El día a día

- **Prenderlo:** abrís Docker Desktop, esperás *Engine running*, vas a **Containers** y apretás ▶ (*Start*) en la
  fila de n8n. Después, `http://localhost:5678` en el navegador. **No** se vuelve a hacer el ▶ *Run* de la pestaña
  Images (paso 10): eso crea un contenedor nuevo, y el tuyo ya existe.
- **Apagarlo:** ■ (*Stop*) en la fila de n8n, o cerrás Docker Desktop del todo (clic derecho en la ballena, abajo a
  la derecha → *Quit Docker Desktop*).
- **Tus workflows no se pierden** al apagar: están en la carpeta `n8n` del escritorio.
- **Actualizar n8n** (más o menos una vez por mes): ■ *Stop*, después el tacho (*Delete*) en la fila de n8n en
  **Containers**; eso borra la caja, no tus datos, que están en la carpeta del escritorio. Después, en **Images**,
  volvés a hacer **Pull** de `n8nio/n8n` (baja la versión nueva) y repetís los pasos 10 y 11 con los mismos datos y
  la misma carpeta.

## Si algo sale mal

| Lo que aparece | Qué quiere decir | Qué hacer |
|---|---|---|
| Docker Desktop dice *WSL update failed* o *WSL needs updating* | WSL está desactualizado | PowerShell como administrador → `wsl --update` → reiniciar. |
| *Virtualization support not detected* o algo con *virtualization* | La **virtualización** (una función del procesador que permite correr una computadora adentro de otra) está apagada | Fijate en el Administrador de tareas (Ctrl + Shift + Esc) → Rendimiento → CPU → "Virtualización". Si dice "Deshabilitado", hay que activarla en la BIOS: el menú que aparece al prender la computadora (con F2, F10 o Supr, según la marca), en una opción llamada *Virtualization*, *Intel VT-x* o *SVM*. Si no te animás, pedí ayuda y mientras tanto usá n8n Cloud. |
| `docker: command not found` o "no se reconoce el término docker" | La terminal no encuentra Docker | Abrí Docker Desktop; cerrá la terminal y abrí una nueva (si estaba abierta desde antes de instalar Docker, no lo ve). |
| *Cannot connect to the Docker daemon* o *error during connect* | Docker Desktop todavía no terminó de arrancar | Esperá a que diga *Engine running* y repetí el comando. |
| El buscador no encuentra `n8nio/n8n`, o pide iniciar sesión | Docker Desktop busca en Docker Hub y a veces tarda | Esperá unos segundos y probá de nuevo, o usá la alternativa con comandos (`docker pull n8nio/n8n`), que no pide cuenta. |
| *The container name "/n8n" is already in use* | Ya creaste el contenedor antes | No hace falta el paso 10: prendelo con ▶ en **Containers**. |
| *port is already allocated* ("el puerto ya está ocupado") | Hay otro n8n (u otro programa) usando el 5678 | En Containers, apagá el otro con ■. |
| En Containers, el n8n no muestra `5678:5678` y `localhost:5678` no carga | Se apretó Run sin completar *Host port* | ■ y tacho en ese contenedor, y repetí los pasos 10 y 11 completando *Optional settings*. |
| `localhost:5678` dice "No se puede acceder a este sitio" | n8n está apagado o todavía arrancando | Fijate en Containers que tenga el punto verde y esperá a que los Logs digan *Editor is now accessible*. |
| La carpeta `n8n` del escritorio sigue vacía con n8n prendido | El *Container path* está mal escrito o quedó vacío | Antes de crear workflows: ■ y tacho, y repetí los pasos 10 y 11 con `/home/node/.n8n` exacto. |
| "Se me borraron los workflows" | El contenedor se creó sin el volumen, o con otra carpeta | Usá siempre la misma carpeta del escritorio y el *Container path* `/home/node/.n8n`. |
| La computadora anda lenta | Docker usa memoria | Cuando no uses n8n, cerrá Docker Desktop. |
