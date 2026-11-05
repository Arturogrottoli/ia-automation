# Instalar n8n en tu computadora, gratis

Guía para tener tu propia instancia de n8n con Docker, sin pagar el plan de n8n Cloud. Se hace una sola vez.
Si te trabás en algún paso, mirá la tabla "Si algo sale mal" al final, o escribí en el canal del curso
contando en qué paso estás y qué mensaje te aparece (una captura de pantalla ayuda mucho).

**Qué es Docker, en dos líneas.** Un programa que baja otros programas listos para usar, metidos en una "caja"
(un **contenedor**) que trae todo lo que necesitan para funcionar. Así n8n anda igual en cualquier computadora, sin
instalarle nada a mano. Tres palabras que vas a ver: la **imagen** es la caja cerrada que se descarga; el
**contenedor** es esa caja abierta y funcionando; el **volumen** es la carpeta donde se guardan tus datos para que no
se pierdan.

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

## Etapa 3 · Bajar n8n y prenderlo

Ahora le pedimos a Docker la caja de n8n. Son tres comandos que se copian y se pegan, uno por vez. No hace falta entenderlos de memoria; abajo está qué hace cada parte.

8. Abrís una terminal **común** (esta vez no hace falta administrador): Inicio → `PowerShell` → Enter. En Mac,
   abrís **Terminal** (Aplicaciones → Utilidades). Recordá: en la terminal, en vez de hacer clic, se escriben
   órdenes; se pega el comando y se aprieta **Enter**.
9. **Bajar n8n.** Pegás esto y apretás Enter:

```bash
docker pull docker.n8n.io/n8nio/n8n
```

Vas a ver varias barras de descarga que avanzan. Tarda unos minutos, según tu internet. Termina cuando dice
algo como `Status: Downloaded newer image for docker.n8n.io/n8nio/n8n:latest` ("se descargó la imagen").

10. **Crear la carpeta donde se guardan tus datos** (el volumen):

```bash
docker volume create n8n_data
```

Responde solamente `n8n_data`. Ahí van a quedar tus workflows y credenciales, aunque apagues o borres n8n.

11. **Prender n8n:**

```bash
docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Responde con un código largo de letras y números, que es el número de identificación del contenedor. Si aparece
eso, n8n arrancó. Ya podés cerrar la terminal: n8n sigue prendido adentro de Docker.

12. **Comprobarlo.** En Docker Desktop, a la izquierda, entrás en **Containers** ("contenedores"). Aparece **n8n**
    con un punto verde (prendido) y, al lado, `5678:5678`. Si hacés clic en el nombre se abre la pestaña **Logs**
    (el registro de lo que va haciendo n8n). Al final tiene que decir:

```text
Editor is now accessible via:
http://localhost:5678
```

("El editor ya está disponible en http://localhost:5678.") La primera vez puede tardar un minuto en aparecer.

### Qué quiere decir cada parte del comando del paso 11

| Parte | Qué hace |
|---|---|
| `docker run` | Crea un contenedor a partir de una imagen y lo prende. |
| `-d` | Lo deja corriendo "por detrás" (*detached*, "desenganchado"), así se puede cerrar la terminal. |
| `--name n8n` | Le pone nombre al contenedor: así aparece en Docker Desktop. |
| `-p 5678:5678` | Conecta el puerto 5678 de tu computadora con el del contenedor: por eso se entra por `localhost:5678`. Un **puerto** es como el número de departamento en un edificio: la computadora es el edificio, y cada programa atiende en su número. n8n atiende en el 5678. |
| `-v n8n_data:/home/node/.n8n` | Guarda los datos de n8n en el volumen `n8n_data`. Sin esto, al borrar el contenedor se pierde todo. |
| `docker.n8n.io/n8nio/n8n` | La imagen oficial de n8n, la que bajamos en el paso 9. |

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
  fila de n8n. Después, `http://localhost:5678` en el navegador. **No** se vuelve a correr el comando del paso 11:
  el contenedor ya existe.
- **Apagarlo:** ■ (*Stop*) en la fila de n8n, o cerrás Docker Desktop del todo (clic derecho en la ballena, abajo a
  la derecha → *Quit Docker Desktop*).
- **Tus workflows no se pierden** al apagar: están en el volumen `n8n_data`.
- **Actualizar n8n** (más o menos una vez por mes): ■ *Stop*, después el tacho (*Delete*) en la fila de n8n; eso
  borra la caja, no tus datos, que están en el volumen. Después corrés en la terminal el comando del paso 9 (baja la
  versión nueva) y el del paso 11.

## Si algo sale mal

| Lo que aparece | Qué quiere decir | Qué hacer |
|---|---|---|
| Docker Desktop dice *WSL update failed* o *WSL needs updating* | WSL está desactualizado | PowerShell como administrador → `wsl --update` → reiniciar. |
| *Virtualization support not detected* o algo con *virtualization* | La **virtualización** (una función del procesador que permite correr una computadora adentro de otra) está apagada | Fijate en el Administrador de tareas (Ctrl + Shift + Esc) → Rendimiento → CPU → "Virtualización". Si dice "Deshabilitado", hay que activarla en la BIOS: el menú que aparece al prender la computadora (con F2, F10 o Supr, según la marca), en una opción llamada *Virtualization*, *Intel VT-x* o *SVM*. Si no te animás, pedí ayuda y mientras tanto usá n8n Cloud. |
| `docker: command not found` o "no se reconoce el término docker" | La terminal no encuentra Docker | Abrí Docker Desktop; cerrá la terminal y abrí una nueva (si estaba abierta desde antes de instalar Docker, no lo ve). |
| *Cannot connect to the Docker daemon* o *error during connect* | Docker Desktop todavía no terminó de arrancar | Esperá a que diga *Engine running* y repetí el comando. |
| *The container name "/n8n" is already in use* | Ya creaste el contenedor antes | No hace falta el paso 11: prendelo con ▶ en Containers. |
| *port is already allocated* ("el puerto ya está ocupado") | Hay otro n8n (u otro programa) usando el 5678 | En Containers, apagá el otro con ■. |
| `localhost:5678` dice "No se puede acceder a este sitio" | n8n está apagado o todavía arrancando | Fijate en Containers que tenga el punto verde y esperá a que los Logs digan *Editor is now accessible*. |
| "Se me borraron los workflows" | El contenedor se creó sin la parte `-v n8n_data:...` | Usar siempre el comando completo del paso 11. |
| La computadora anda lenta | Docker usa memoria | Cuando no uses n8n, cerrá Docker Desktop. |
