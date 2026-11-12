# Conectar Google Sheets con n8n local (Docker), paso a paso

Esta guía es el camino que hicimos en vivo, un paso por vez. Sirve para **n8n instalado en tu computadora con
Docker** (el que se abre en `http://localhost:5678`).

- **Cuánto lleva:** unos 20 minutos, **una sola vez**. Después la credencial sirve para todos tus flujos.
- **Si usás n8n Cloud, no hace falta nada de esto:** al crear la credencial aparece el botón **Sign in with
  Google**, elegís tu cuenta y listo.
- **Los nombres de los botones:** están como aparecen con Google Cloud en castellano, con el inglés entre
  paréntesis. Google los cambia seguido: si no encontrás uno exacto, buscá el parecido.

---

## Antes de empezar: qué es cada cosa

- **Credencial:** el permiso que le das a n8n para entrar a tu Google y escribir en tus planillas. Es como darle a
  alguien una copia de la llave de tu casa: no le das tu contraseña, le das una llave que podés quitarle cuando
  quieras.
- **Por qué en local hay que hacer este trámite:** Google no deja entrar a cualquier programa. En n8n Cloud, n8n ya
  está registrado en Google. Tu n8n local, en cambio, es una aplicación nueva que Google no conoce, así que hay que
  registrarla en **Google Cloud Console** (la página de Google para registrar aplicaciones).
- **Client ID y Client Secret:** los dos datos que da Google al registrar tu aplicación. El **Client ID** es el
  nombre de tu aplicación (se puede mostrar). El **Client Secret** es su clave: **no se comparte ni se pega en
  ningún chat**.
- **OAuth Redirect URL:** la dirección a la que Google te devuelve después de dar el permiso. Es la puerta de tu
  n8n: `http://localhost:5678/rest/oauth2-credential/callback`. Anda con Docker sin tocar nada, porque el que hace
  ese viaje es tu propio navegador.

**Vas a trabajar con dos pestañas:** la de n8n (con la ventana de la credencial abierta) y la de Google Cloud. No
cierres la de n8n en ningún momento.

---

## Parte 0 · Llegar a la ventana de la credencial en n8n

**Paso 0.** En el flujo, doble clic en el nodo de Google Sheets (*Guardar en la planilla*) → **Credential** →
**Create new credential**. Se abre esta ventana:

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

El cartel rojo **Please check the errors below** no quiere decir que rompiste algo: solo avisa que faltan el
Client ID y el Client Secret. Los vamos a buscar a Google. **OAuth2 (recommended)** dejalo como está.

**Paso 1 · Copiar la dirección de regreso.** Seleccioná con el mouse el texto del recuadro gris
`http://localhost:5678/rest/oauth2-credential/callback` y copialo con **Ctrl + C**. No cierres la ventana.

---

## Parte 1 · En Google Cloud: registrar tu n8n

**Paso 2 · Entrar a Google Cloud.** Pestaña nueva (**Ctrl + T**) → **console.cloud.google.com** → entrá con el
**mismo Gmail donde está tu planilla**. Si es la primera vez, te pide aceptar las condiciones: elegí tu país,
tildá y aceptá.

**Paso 3 · Despejar la pantalla.** Si se abrió el menú de la izquierda o aparece un cartel (por ejemplo, "Configura
Gemini Cloud Assist"), cerralos con su **✕**. No los necesitás.

**Paso 4 · Crear el proyecto.**
1. Arriba a la izquierda, al lado del logo de Google Cloud y del buscador, hay un botón con el nombre de un proyecto
   (si ya usaste Google Cloud, dice el de otro proyecto; si no, **Seleccionar un proyecto**). Clic ahí.
2. Se abre la ventana **Seleccionar un proyecto** → arriba a la derecha, **Proyecto nuevo** (*New project*).
3. **Nombre del proyecto:** `n8n curso`. Organización y ubicación: no los toques.
4. **Crear** (*Create*). Tarda unos segundos (aparece un aviso en la campanita de arriba a la derecha).
5. Volvé a hacer clic en el botón de arriba a la izquierda y elegí **n8n curso**. **Tiene que quedar diciendo
   n8n curso** antes de seguir.

Un **proyecto** es la carpeta donde Google guarda todo lo de tu aplicación.

**Paso 5 · Encender la API de Google Sheets.**
1. En el buscador de arriba ("Buscar (/) recursos, documentos, productos y más") escribí `Google Sheets API`.
2. Clic en **Google Sheets API** (ícono verde de planilla).
3. Botón azul **Habilitar** (*Enable*).
4. Te lleva a la página **Detalles del servicio o la API**. Tiene que decir **Estado: Habilitada**.

El botón **Crear credenciales** que aparece en esa página **no lo toques** (lo hacemos por otro lado).

Una **API** es la puerta por donde un programa habla con otro. Google tiene una por producto, y vienen apagadas.

**Paso 6 · Encender la API de Google Drive.** Igual que el anterior:
1. En el buscador, borrá con la ✕ y escribí `Google Drive API`.
2. Clic en **Google Drive API** (ícono del triángulo de colores) → **Habilitar**.
3. Tiene que decir **Estado: Habilitada**.

n8n usa Drive para encontrar tu planilla a partir del link y para listarte tus planillas.

**Paso 7 · Ir a la pantalla de consentimiento.** En el menú gris de la izquierda (**APIs y servicios**), clic en
**Pantalla de consentimiento…** (el nombre aparece cortado; está debajo de **Credenciales**). Clic en el texto, no
en los tres puntitos. Te lleva a **Google Auth Platform** → botón **Comenzar** (*Get started*).

La **pantalla de consentimiento** es lo que Google te va a mostrar después, cuando te pregunte "¿dejás que esta app
use tus planillas?".

**Paso 8 · Completar el formulario (cuatro partes).**

| Parte | Qué completás | Botón |
|---|---|---|
| **Información de la app** | **Nombre de la app:** `n8n curso` · **Correo electrónico de asistencia del usuario:** elegí tu Gmail de la lista | **Siguiente** |
| **Público** | Elegí **Externos** | **Siguiente** |
| **Información de contacto** | **Direcciones de correo electrónico:** tu Gmail (y Enter) | **Siguiente** |
| **Finalizar** | Tildá **Acepto la Política de Datos del Usuario de los Servicios de las APIs de Google** | **Continuar** → **Crear** |

**Externos** quiere decir que la app la usa una cuenta de Gmail común. **Internos** es solo para empresas con
Google Workspace: con un Gmail normal no se puede elegir.

**Paso 9 · Agregarte como usuario de prueba.**
1. En el menú de la izquierda, **Público**.
2. Bajá hasta **Usuarios de prueba** → **+ Add users** (o **Agregar usuarios**).
3. Escribí tu Gmail (el mismo con el que vas a conectar n8n) y Enter → **Guardar**.
4. Tu Gmail tiene que aparecer en la lista.

Tu app queda "en prueba": solo la pueden usar las cuentas de esta lista. **Si te salteás este paso, después Google
te bloquea** con *Access blocked* o *Error 403: access_denied*.

**Paso 10 · Crear el cliente.**
1. En el menú de la izquierda, **Clientes** → **+ Crear cliente**.
2. **Tipo de aplicación:** **Aplicación web**.
3. **Nombre:** `n8n local`.
4. Todavía no aprietes **Crear**: falta el paso 11.

**Paso 11 · Pegar la dirección de n8n.**
1. Bajá en la misma página. Hay dos partes:
   - **Orígenes autorizados de JavaScript** → esta **no** la toques.
   - **URIs de redireccionamiento autorizados** → esta es.
2. En **URIs de redireccionamiento autorizados** → **+ Agregar URI** → clic en el casillero vacío → **Ctrl + V**.
   Tiene que quedar:

   ```text
   http://localhost:5678/rest/oauth2-credential/callback
   ```

   (Si no pega nada, volvé a n8n y copiala de nuevo del recuadro gris.)
3. Revisá: empieza con `http` (**no** `https`), dice `localhost` y `5678`, y **no termina en barra**.
4. **Crear**.

**Paso 12 · Los dos datos.** Aparece una ventanita con el **ID de cliente** (termina en
`.apps.googleusercontent.com`) y el **Secreto del cliente**. **No la cierres todavía.** El secreto copialo ahora:
después Google no lo vuelve a mostrar completo (si lo perdés, se crea uno nuevo en el cliente).

---

## Parte 2 · Volver a n8n y pegar los datos

**Paso 13 · Pegar el Client ID y el Client Secret.**
1. Volvé a la pestaña de n8n, a la ventana **Google Sheets account**.
2. **Client ID:** pegá el ID de cliente.
3. En Google, botón de copiar al lado de **Secreto del cliente** → en n8n, bajá con la ruedita hasta **Client
   Secret** → **Ctrl + V**.
4. El cartel rojo desaparece y aparece el botón **Sign in with Google**.

**Paso 14 · Conectar.**
1. Clic en **Sign in with Google** → se abre una ventana de Google.
2. Elegí tu cuenta (la que agregaste como usuario de prueba).
3. Aparece **"Google no verificó esta app"** (*Google hasn't verified this app*). Es normal: la app la creaste vos y
   la usás solo vos. → **Continuar**.
4. Google muestra los permisos (ver y editar tus planillas y archivos) → tildalos todos → **Continuar**.
5. La ventana se cierra sola y n8n dice **Account connected** (cuenta conectada).
6. **Save**, arriba a la derecha de la ventana de la credencial.

---

## Parte 3 · Usar la credencial en el nodo de Google Sheets

**Paso 15 · Crear la planilla** (si todavía no la tenés).
1. Pestaña nueva → **sheets.new** (se crea una planilla en blanco en tu Drive).
2. Arriba a la izquierda, donde dice **Hoja de cálculo sin título**, clic → `Consultas de la agencia` → Enter.
3. En la fila 1, un título por casilla (clic en **A1**, escribís, **Tab** para pasar a la de al lado):

   | A1 | B1 | C1 | D1 |
   |---|---|---|---|
   | fecha | nombre | destino | personas |

   En minúscula y sin espacios: tienen que ser **iguales** a los nombres de los casilleros que llegan a n8n.
4. No hace falta guardar: Google Sheets guarda solo.

**Paso 16 · Completar el nodo.** En n8n, en el nodo *Guardar en la planilla*:

| Campo | Qué poner |
|---|---|
| **Credential** | **Google Sheets account** (la que acabás de crear) |
| **Resource** | Sheet Within Document (ya viene) |
| **Operation** | Append Row (ya viene) |
| **Document** | **By URL** → clic donde dice **Enter URL…** → pegá el link completo de la planilla (copiado de la barra del navegador: `https://docs.google.com/spreadsheets/d/…/edit`). **O más fácil:** cambiá **By URL** por **From list** y elegí *Consultas de la agencia* de la lista. |
| **Sheet** | Clic en **Choose…** → elegí **Hoja 1** (o *Sheet1*) |
| **Mapping Column Mode** | **Map Automatically** |

**Paso 17 · Probar.** **Execute step** (botón negro de arriba). En OUTPUT aparece la fila, y en la planilla, una fila
nueva debajo de los títulos. 🎉

---

## Parte 4 · La próxima vez: si ya tenés la credencial vinculada

Los pasos 0 a 14 se hacen **una sola vez**. Después, la credencial queda guardada en tu n8n y se reusa.

**Paso 18 · Usarla en cualquier nodo nuevo de Google Sheets** (en este flujo o en otro):
1. Doble clic en el nodo de Google Sheets.
2. **Credential to connect with** → abrí la lista → elegí **Google Sheets account** (la que ya creaste).
3. Completá **Document**, **Sheet** y **Mapping Column Mode** como en el paso 16.

No se vuelve a entrar a Google Cloud, ni se pegan otra vez el Client ID y el Client Secret.

**Paso 19 · Al importar un flujo que usa Google Sheets** (por ejemplo, `03-formulario.json`): el archivo no trae
tu credencial ni tu planilla. Abrí el nodo de Google Sheets → **Credential** → elegí **Google Sheets account** →
pegá el link de tu planilla en **Document** → elegí la hoja.

**Dónde están guardadas:** **Overview** → pestaña **Credentials** (credenciales). Ahí ves todas las que creaste.

**Si tenés más de una:** ponele nombre a cada una, para no confundirlas. Clic en el lápiz al lado de la credencial
→ arriba, clic en el nombre *Google Sheets account* → por ejemplo *Sheets · mi Gmail* → **Save**.

**Si un día deja de andar** (el nodo se pone rojo con un error de permiso, aunque antes andaba): en modo de prueba,
Google vence el permiso cada 7 días. Lápiz al lado de la credencial → **Reconnect** (o **Sign in with Google**) →
elegís tu cuenta → **Continuar** → **Save**. No hace falta volver a Google Cloud.

**Para Gmail, Drive o Calendar:** se usa el mismo proyecto y los mismos dos datos.
1. En Google Cloud, encendé la API que corresponda (por ejemplo, **Gmail API**), como en el paso 5.
2. En n8n, creá la credencial de ese producto (por ejemplo, **Gmail OAuth2 API**).
3. Pegá el mismo Client ID y el mismo Client Secret → **Sign in with Google**.

---

## Lo que nos pasó en el camino (y cómo se arregló)

| Lo que apareció | Qué era | Qué hicimos |
|---|---|---|
| *Please check the errors below* · *This field is required* (en la ventana de la credencial) | Faltaban el Client ID y el Client Secret | Pasos 2 a 13. |
| *Workflow execution cannot start* · *Parameter "Document" is required* · *Not a valid Google Drive File URL* | El casillero **Document** estaba vacío (el flujo importado no trae tu planilla) | Pegar el link completo en **Enter URL…**, o **From list** y elegir la planilla. |
| **Sheet** dice **Choose…** con un triángulo rojo | Falta elegir la hoja | Abrir la lista y elegir **Hoja 1**. |
| *At least one value has to be added under 'Values to Send'*, con una caja vacía por columna | **Mapping Column Mode** había quedado en el modo a mano (*Map Each Column Manually*) | Volver a elegir **Map Automatically**. (O arrastrar cada casillero desde INPUT a su caja.) |
| El cartel rojo de abajo a la derecha seguía apareciendo | Era de una prueba anterior | Cerrarlo con la ✕ y volver a probar. |

## Otros errores que pueden aparecer

| Si te aparece… | Qué pasó | Qué hacés |
|---|---|---|
| *Error 400: redirect_uri_mismatch* | La dirección del paso 11 no es idéntica a la de n8n | Copiala de nuevo desde n8n y pegala en el cliente. `http`, `localhost`, `5678`, sin barra al final. Guardá y esperá 2 minutos. |
| *Access blocked* o *Error 403: access_denied* | Tu Gmail no está como usuario de prueba | Paso 9. |
| *Google Sheets API has not been used in project… or it is disabled* | Falta encender una API | Pasos 5 y 6 (las dos). |
| La fila se agrega, pero con columnas vacías | Los títulos de la planilla no son iguales a los nombres de los casilleros | Que la fila 1 diga exactamente `fecha`, `nombre`, `destino`, `personas`. |
| A la semana deja de andar | En modo de prueba, Google vence el permiso a los 7 días | Abrí la credencial → **Reconnect** (o *Sign in with Google* de nuevo). |

---

## Palabras de esta guía

| Palabra | Qué es |
|---|---|
| **Credencial** (*credential*) | El permiso guardado en n8n para entrar a otra aplicación. |
| **OAuth2** | El sistema de Google para dar permisos sin pasarle tu contraseña a n8n. |
| **Google Cloud Console** | La página de Google para registrar aplicaciones (`console.cloud.google.com`). |
| **Proyecto** | La carpeta de Google Cloud donde queda registrada tu aplicación. |
| **API** | La puerta por donde un programa habla con otro. Hay que encender las de Sheets y Drive. |
| **Habilitar** (*Enable*) | Encender una API para tu proyecto. |
| **Pantalla de consentimiento** (*consent screen*) | La pantalla donde Google te pregunta si das permiso. |
| **Externos** (*External*) | Que la app la usa una cuenta de Gmail común. |
| **Usuario de prueba** (*test user*) | La cuenta que puede usar tu app mientras está en prueba: la tuya. |
| **Cliente** (*client*) | El registro de tu n8n en Google, del que salen el ID y el secreto. |
| **ID de cliente / Secreto del cliente** (*Client ID / Client Secret*) | El nombre y la clave de tu aplicación para Google. El secreto no se comparte. |
| **URI de redireccionamiento** (*OAuth Redirect URL*) | La dirección a la que Google te devuelve después de dar permiso: la puerta de tu n8n. |
| **Sign in with Google** | El botón que abre la pantalla de Google para dar permiso. |
| **Account connected** | El aviso de n8n de que la credencial quedó lista. |
| **Map Automatically** | Que cada casillero vaya solo a la columna de la planilla que se llama igual. |
