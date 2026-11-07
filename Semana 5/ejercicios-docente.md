# Semana 5 · Ejercicios — versión docente

**Módulo 5: Creando workflows con aplicaciones y servicios externos.** Respuestas, qué pasa en cada flujo y cómo
preparar Google. **No se comparte con los alumnos.**

Los flujos 01, 03 y 04 se probaron en n8n 2.46.6 el 6 de noviembre de 2026, con dummyjson.com real. El 02 (con
Google) se importa y n8n acepta todos sus parámetros (solo pide las credenciales), pero no se ejecutó contra Google.

---

## Preparar Google (antes de la clase)

Partís del proyecto `n8n curso` de la Semana 4 (Ejercicio 8), con la credencial de Google Sheets ya conectada.

1. **Habilitar las APIs.** En **console.cloud.google.com**, con el proyecto seleccionado: ☰ → **APIs & Services** →
   **Library**. Habilitá (**Enable**) las que falten:
   - **Google Sheets API**;
   - **Google Drive API**;
   - **Gmail API**.
2. **Usuarios de prueba.** En **Google Auth Platform** → **Audience** → **Test users**, tu Gmail tiene que estar.
   Para que los alumnos usen **su propio** proyecto, no hace falta agregarlos al tuyo.
3. **La credencial de Drive.** En n8n: **Credentials** → **Create credential** → **Google Drive OAuth2 API** →
   - pegá el mismo *Client ID* y *Client Secret* de la de Sheets;
   - **Sign in with Google** → tu cuenta → *Google no verificó esta app* → **Continuar** → tildá los permisos →
     **Continuar**;
   - tiene que quedar en verde: *Account connected*.
4. **La credencial de Gmail.** Igual, con **Gmail OAuth2 API**. (En clase la volvés a crear en vivo; podés
   borrarla antes o crear una segunda.)
5. **Si perdiste el Client Secret:** en **Google Auth Platform** → **Clients** → tu cliente → **Add secret**.
   Copiás el nuevo. Las credenciales ya conectadas siguen andando.
6. **La planilla** `Empleados` (desde `planilla-empleados.csv`), una **copia** para restaurarla, y la carpeta
   **Legajos** con su ID anotado.
7. **Para mostrar el 403:** una planilla de otra cuenta (Romina) compartida con vos como **Lector**, con las mismas
   columnas y dos filas vacías.

**Cómo restaurar la planilla entre pruebas:** seleccionás las columnas B a E desde la fila 2 (menos la del ID 2) y
apretás **Suprimir**. O borrás la hoja y la volvés a importar desde el CSV.

---

## En clase

### Ejercicio 1 · ¿Qué pasa si se ejecuta dos veces?

No hay una única respuesta. Lo que se busca es que digan **qué** se duplica y **cómo** se evita. Casi siempre la
solución es "antes de hacer, preguntar si ya está hecho": un Filter o un IF que mire una columna de control (un ID,
un "Avisado: sí", un número de pedido).

| Tipo de flujo | Qué se duplica | Cómo se evita |
|---|---|---|
| Correo → fila en la planilla | La fila | Buscar el ID del correo en la planilla antes de agregar, o usar *Append or Update* con una columna única. |
| Formulario → mensaje al cliente | El mensaje | Una columna "Avisado" y un Filter que deje pasar solo los no avisados. |
| Pedido → turno en el calendario | El turno | Buscar si ya existe un turno con ese nombre y esa hora. |
| Cobro → recibo | El recibo (y, peor, el cobro) | Un número de operación único; si ya existe, no hacer nada. |

### Ejercicio 2 · ¿Cuántos correos salen?

- **a) 4.** Cada nodo se ejecuta una vez por cada item que le llega.
- **b) 1.**
- **c) 0, y no llega ningún correo.** El Filter devuelve 0 items, y en n8n, cuando a un nodo le llegan 0 items, ese
  nodo y los que siguen no se ejecutan (lo mismo que se vio en la Semana 3 con el Merge). Si se quisiera un correo
  "hoy no había nada", habría que activar en el Filter *Settings* → **Always Output Data** y manejar el caso del
  item vacío. No hace falta mostrarlo.

### Ejercicio 3 · Mapeo relámpago

Flujo `01-mapeo-relampago.json`. Salida probada:

| Nombre completo | nombre | apellido | email | telefono |
|---|---|---|---|---|
| Lucía Fernández | Lucía | Fernández | lucia.fernandez@gmail.com | 1155551234 |
| María Laura Gómez | María Laura | Gómez | mlgomez@hotmail.com | 0351154449876 |
| Juan Martín del Potro | Juan Martín del | Potro | jmdp@yahoo.com.ar | 5492236001122 |

Lo importante:
- **Ver que hay que transformar.** Los espacios del email, las mayúsculas, los guiones del teléfono.
- **El caso ambiguo.** "del Potro" no tiene solución con una regla simple. Hay dos salidas buenas:
  - cambiar la entrada: el formulario pide nombre y apellido por separado;
  - mandar a revisión humana los nombres de más de tres palabras.

  Una IA también podría separarlo, y es un buen anticipo del Módulo 6.
- **Las expresiones no se toman de memoria.** Se las pueden pedir a una IA: "en una expresión de n8n, ¿cómo saco la
  última palabra de un texto?".

### Ejercicio 4 · La práctica

El flujo `02-planilla-google.json` es la práctica terminada. Con la planilla del CSV, lo que tiene que pasar:

| Nodo | Items | Qué sale |
|---|---|---|
| Leer planilla | 5 | Las cinco filas, con `row_number`. Las celdas vacías llegan como `""`. |
| Solo filas incompletas | 4 | ID 1, 3, 4 y 5. La fila del ID 2 queda en *Discarded*. |
| Buscar datos del empleado | 4 | 1 Emily Johnson (29, Sales Manager) · 3 Sophia Brown (43, Accountant) · 4 James Davis (46, Research Analyst) · 5 Emma Miller (31, Quality Assurance Engineer). |
| Crear carpeta del empleado | 4 | Cada una con `id` y `name` (`1 - Emily Johnson`…). |
| Completar la fila | 4 | Las columnas escritas: ID, Nombre, Edad, Cargo y Carpeta. |
| Juntar en un solo item | 1 | `filas`: una lista con las 4. |
| Avisar que terminó | 1 | Un correo: "Planilla completa: 4 empleados nuevos". |

El flujo `03-ensayo-sin-google.json` hace exactamente esto con los nodos de Google reemplazados por Edit Fields
(probado: 5 → 4 → 4 → 4 → 4 → 1 → 1). El mensaje que arma:

```text
Hola:

El flujo terminó bien. Se completaron 4 filas de la planilla:

- 1 · Emily Johnson (Sales Manager)
- 3 · Sophia Brown (Accountant)
- 4 · James Davis (Research Analyst)
- 5 · Emma Miller (Quality Assurance Engineer)

Cada uno tiene su carpeta en Drive (el link quedó en la columna Carpeta).

Enviado por n8n.
```

**Ojo con *Execute step* en Drive:** cada clic crea las carpetas otra vez. Si en clase alguien lo aprieta dos veces,
aprovechalo: es la idempotencia en vivo.

**Por qué funciona `$('Solo filas incompletas').item.json.ID` desde Drive y desde Sheets:** n8n sabe de qué item de
antes viene cada item de ahora (se llama *paired items*). El item 3 de Drive "viene" del item 3 del Filter, así que
toma el ID correcto. No hace falta explicarlo, salvo que alguien pregunte.

**Los errores de Google de la clínica (Paso 5)** son los mensajes habituales de las APIs de Google, pero no se
probaron en este n8n: el texto exacto puede variar.

| Qué rompés | Dónde falla | Lo que esperás ver | Qué se hace |
|---|---|---|---|
| Una letra del ID de Legajos | Crear carpeta del empleado | *The resource you are requesting could not be found* · 404 · *File not found: …* | Corregir el ID. |
| Borrar Legajos y vaciar la papelera | Crear carpeta del empleado | El mismo 404. Si la carpeta solo está en la papelera, Google puede seguir encontrándola. | Crear otra carpeta y actualizar el ID. |
| Una planilla compartida como Lector | Completar la fila (*Leer planilla* anda) | *Forbidden - perhaps check your credentials?* · 403 · *The caller does not have permission* | Pedir permiso de Editor. Cambiar la credencial no sirve. |
| Revocar el acceso en myaccount.google.com/permissions | El primer nodo de Google | Un error de la credencial (suele mencionar el token o *invalid_grant*). | Abrir la credencial → **Sign in with Google** otra vez. |

---

## Para casa

### Ejercicio 5 · El plano de tu propio flujo

Se corrige que el plano esté completo, no que sea perfecto. Lo que más falla: el "resultado" escrito en nodos ("que
Gmail mande un mail") en vez de en negocio, y la idempotencia sin respuesta. Un plano resuelto, para mostrar:

```text
1. PROBLEMA: la recepcionista del consultorio confirma los turnos del día siguiente llamando uno por uno (1 h por día).
2. RESULTADO: cada paciente con turno mañana recibe una confirmación, y la recepcionista ve quién confirmó sin llamar.
3. ENTRADA → PROCESO → SALIDA:
   Todos los días a las 18 (Schedule Trigger)
   → leer los turnos de mañana (Google Sheets)
   → solo los que tienen email y "Avisado" vacío (Filter)
   → mandar el correo de confirmación (Gmail, uno por paciente)
   → marcar "Avisado: sí" (Google Sheets, Update row por ID de turno)
   → juntar (Aggregate) → un resumen a la recepcionista (Gmail)
4. SERVICIOS:
   Google Sheets | lee y escribe | OAuth2 | Editor de la planilla de turnos | ✅
   Gmail         | envía         | OAuth2 | enviar correo                    | ✅
5. QUÉ PUEDE SALIR MAL:
   - Gmail falla → Retry On Fail (3 intentos) y, si sigue, el resumen lo dice.
   - Turno sin email → el Filter lo deja afuera y el resumen dice "3 pacientes sin email: llamar".
   - Dudosos → ninguno; los sin email van a la recepcionista.
6. IDEMPOTENCIA: la columna "Avisado". Si corre dos veces, la segunda no encuentra a nadie.
7. EL DÍA DESPUÉS: Error Trigger que me manda un correo; notas en el lienzo; el JSON descargado en una carpeta.
```

### Ejercicio 6 · Probá la idempotencia

1. La segunda ejecución se frena en el Filter con 0 items: no crea carpetas ni manda correo.
2. Con el Filter desactivado pasan las **5** filas (también la del ID 2):
   - **en Drive**: 5 carpetas nuevas, con los mismos nombres que las anteriores (Drive permite nombres repetidos);
   - **en la planilla**: los nombres, edades y cargos quedan iguales (la API devuelve lo mismo), pero la columna
     **Carpeta** cambia al link de las carpetas nuevas. La fila del ID 2 pierde su "(ya creada)";
   - **el correo**: dice "5 empleados nuevos", que es falso.
3. **Por qué casi no se ve en la planilla:** *Update row* reescribe la misma fila con los mismos datos, y eso es
   idempotente por naturaleza. Crear una carpeta y mandar un correo, no: cada ejecución crea una cosa nueva. Es la
   misma idea que GET contra POST de la Semana 4.

### Ejercicio 7 · Clínica de errores

Flujo `04-clinica-de-errores.json`. La planilla de mentira tiene los ID 1, 4, 7 y 250. Probado:

| Nodo | Qué se ve | Causa | Arreglo |
|---|---|---|---|
| **Error A** | **No da error.** Salen 4 items, y cada uno trae `users` (una lista de 30 personas), `total: 208`, `skip` y `limit`. | La URL usa `$json.id` (minúscula), pero la columna es `ID`. La expresión da vacío, la URL queda `https://dummyjson.com/users/`, y eso devuelve la lista de todos. Es el "Variable undefined" del material de lectura, que acá falla **en silencio**. | `{{ $json.ID }}`. Para verlo: debajo del campo URL, n8n muestra cómo queda la dirección con el dato. |
| **Error B** | **Rojo:** *The resource you are requesting could not be found*, y en los detalles: `404 - {"message":"User with id '250' not found"}`. | El ID 250 no existe en la API (tiene 208 personas): un dato mal cargado en la planilla. Y una sola fila mala frena el nodo entero: las otras tres tampoco siguen. | Corregir la planilla. Y para que no frene todo: *Settings* → **On Error** → **Continue (using error output)**, y mandar esa salida a un correo de revisión humana: "el ID 250 no existe". |
| **Error C** | **No da error.** Salen **4 items** iguales. | No hay Aggregate: el "correo" se arma una vez por fila. Con un Gmail de verdad, llegarían 4 correos. | Un Aggregate antes. |

Lo de Google:
- **403 *The caller does not have permission*:** la cuenta conectada puede ver la planilla pero no editarla. Hay
  que pedir permiso de Editor. Cambiar la credencial no sirve, salvo que sea de otra cuenta que sí sea Editor.
- **404 *File not found*:** el ID ya no existe (la carpeta se borró, o es de otra cuenta). Revisar el ID y que la
  cuenta conectada tenga acceso a esa carpeta.

### Ejercicio 8 · Desafío: el onboarding

```text
Manual Trigger
→ Google Sheets · Get row(s)                      (Ingresos)
→ Filter: Avisado is empty  AND  Email is not empty
→ Google Drive · Create folder                    Name: {{ $json.Nombre }} · Parent: la carpeta de legajos, por ID
→ Gmail · Send a message                          To: {{ $('Filter').item.json.Email }}
                                                  Subject: ¡Bienvenido/a, {{ $('Filter').item.json.Nombre }}!
                                                  Message: … tu carpeta: https://drive.google.com/drive/folders/{{ $('Google Drive').item.json.id }}
→ Google Sheets · Update row                      Column to match on: Email
                                                  Carpeta: https://drive.google.com/drive/folders/{{ $('Google Drive').item.json.id }} · Avisado: sí
```

- **Por qué no va Aggregate:** acá queremos **un correo por persona**, cada uno con su nombre y su carpeta. El
  Aggregate va cuando se quiere **un** aviso para todos. La regla no es "siempre Aggregate antes del Gmail", sino
  "un Aggregate cuando muchos items tienen que dar una sola cosa".
- **El orden Gmail → Update row** es una decisión. Si el correo falla, la fila no se marca, y la próxima vez se
  reintenta. Al revés, si marca primero y el correo falla, esa persona nunca recibe la bienvenida.
- **El email vacío:** el Filter la deja afuera. Mejor todavía: avisarle a RR.HH. que falta (revisión humana).
- **Con el Google Sheets Trigger:** revisa la planilla cada tanto (por defecto, cada minuto) y arranca con las
  filas nuevas. El Filter sigue haciendo falta por dos razones:
  - si se elige *On row added or updated*, el propio flujo, al escribir "sí" en Avisado, cambia la fila y la vuelve
    a disparar;
  - aunque sea *On row added*, una fila agregada a medio completar (sin email) igual entra.

### Cuestionario del módulo (respuestas)

| Pregunta | Respuesta |
|---|---|
| 1 · Trigger para un formulario externo | **B**, un Webhook. |
| 2 · Manejo seguro de credenciales | **A**, el sistema de credenciales de la plataforma. |
| 3 · Conectores contra HTTP (múltiple) | **B y C**. |
| 4 · Entrada → proceso → salida para gastos | **B**: correo → extraer datos → fila en Sheets. |
| 5 · Requisito para conectar Google Drive | **B**, credenciales (OAuth2). |
