# Semana 5 · Ejercicios

**Módulo 5: Creando workflows con aplicaciones y servicios externos**

### Palabras que vas a ver en estos ejercicios

| Palabra | Qué quiere decir |
|---|---|
| **Planificar** | Escribir y dibujar el flujo antes de abrir n8n. |
| **Entrada / proceso / salida** | Qué dispara el flujo / qué hace en el medio / dónde deja el resultado. |
| **Idempotencia** | Que ejecutar el flujo dos veces deje todo igual que ejecutarlo una: no duplica nada. |
| **Mapear** | Decidir qué dato de un lado va en qué casillero del otro. |
| **ID** | Un código único que identifica algo (una fila, una carpeta) y no cambia. |
| **Permiso** | Lo que tu cuenta puede hacer con un archivo: ver (Lector) o cambiar (Editor). |
| **OAuth2** | "Iniciar sesión con Google" para n8n: un permiso sin dar tu contraseña. |
| **Log de ejecución** | Lo que n8n guarda de cada ejecución, nodo por nodo. Pestaña **Executions**. |
| **Filter** | El nodo que deja pasar solo los items que cumplen una condición. |
| **Aggregate** | El nodo que junta muchos items en uno. |
| **Append row / Update row** | Agregar una fila nueva / cambiar una fila que ya existe. |
| **Expresión** | Lo que va entre `{{ }}`: n8n lo reemplaza por el dato de cada item. |

---

## En clase

### Ejercicio 1 · ¿Qué pasa si se ejecuta dos veces? (3 min)

Pensá en el flujo que bocetaste en el Módulo 2 (o en el de tu pre-entrega). Si se ejecutara **dos veces** con el
mismo dato:

1. ¿Qué se duplicaría? (una fila, un mensaje, un turno, un pago…)
2. ¿Cómo lo evitarías? (una frase)

### Ejercicio 2 · ¿Cuántos correos salen? (2 min)

La planilla tiene 5 filas: 4 vacías y 1 completa. El flujo es Leer planilla → Filter (solo vacías) → … → Gmail.

- a) Con el Filter y **sin** Aggregate antes del Gmail, ¿cuántos correos salen?
- b) Con el Filter y **con** Aggregate, ¿cuántos?
- c) Si lo ejecutás otra vez (ya está todo completo), ¿cuántos?

### Ejercicio 3 · Mapeo relámpago (6 min)

Un formulario manda esto:

```json
{"Nombre completo": "Lucía Fernández", "Email": "  Lucia.Fernandez@Gmail.com ", "Teléfono": "11 5555-1234"}
```

El nodo siguiente pide cuatro campos: `nombre`, `apellido`, `email` y `telefono`. ¿Qué pondrías en cada uno? ¿Hay
que transformar algo? Después, pensá: ¿funciona tu solución con "Juan Martín del Potro"?

(El flujo `01-mapeo-relampago.json` tiene la solución.)

### Ejercicio 4 · La planilla que se completa sola (lo armamos a la par)

Lo armás en tu n8n mientras el profe lo arma en pantalla. Si te perdés, acá están todos los pasos.

**Lo que necesitás antes:** la credencial de Google Sheets del Ejercicio 8 de la Semana 4. Si no la tenés,
importá `03-ensayo-sin-google.json` y seguí la clase con ese flujo (hace lo mismo, sin Google). Lo de Google lo
hacés en casa.

**La planilla:** en Google Drive → **Nuevo** → **Hoja de cálculo de Google** → nombre `Empleados` → **Archivo** →
**Importar** → **Subir** → `planilla-empleados.csv` → *Reemplazar la hoja actual*. Quedan cinco filas: ID 1 a 5, y
solo la del ID 2 completa.

**Paso 1 · El plano** (sin abrir n8n)

```text
PROBLEMA: RR.HH. completa a mano los datos de cada empleado nuevo. Tarda y se equivoca.
RESULTADO: cada fila con ID queda completa, con su carpeta en Drive, y RR.HH. recibe UN aviso.
ENTRADA  → la planilla (filas con ID y sin Nombre). La disparo a mano.
PROCESO  → solo filas incompletas → buscar datos por ID → crear carpeta → escribir la fila
SALIDA   → la fila completa + un correo con el resumen
SERVICIOS: Google Sheets · dummyjson.com · Google Drive · Gmail
```

**Paso 2 · Los accesos**

1. En **console.cloud.google.com**, tu proyecto `n8n curso`: ☰ → **APIs & Services** → **Library** → **Gmail API**
   → **Enable**. Fijate que la Google Drive API y la Google Sheets API ya estén habilitadas.
2. En n8n: **Credentials** → **Create credential** → **Gmail OAuth2 API** → pegá el *Client ID* y el *Client
   Secret* (los mismos de tu credencial de Sheets) → **Sign in with Google** → tu cuenta → *Google no verificó esta
   app* → **Continuar** → tildá todo → **Continuar**.
3. Repetí con **Google Drive OAuth2 API**.
4. Abrí tu planilla, escribí una letra en una celda vacía y borrala. Eso prueba que podés **escribir**.

**Paso 3 · La entrada**

5. Workflow nuevo: `Planilla completa`. **Add first step** → **Trigger manually**.
6. **+** → **Google Sheets** → **Get row(s) in sheet**. *Credential*: la de Sheets. *Document*: **By URL** → el
   link de tu planilla. *Sheet*: **Hoja 1**. Renombralo: `Leer planilla`. **Execute step**: 5 items.
7. **+** → **Filter**. Arrastrá `Nombre` → **String** → **is empty**. Renombralo: `Solo filas incompletas`.
   **Execute step**: pasan 4.

**Paso 4 · Proceso y salida**

8. **+** → **HTTP Request**. *URL* (en modo **Expression**): `https://dummyjson.com/users/{{ $json.ID }}`.
   **Send Query Parameters**: `select` = `firstName,lastName,age,company`. Renombralo: `Buscar datos del empleado`.
   **Execute step**: 4 items.
9. En Drive, creá una carpeta `Legajos`, abrila y copiá de la dirección lo que va después de `/folders/`: ese es
   su **ID**.
10. **+** → **Google Drive** → **Create folder**. *Credential*: la de Drive. *Folder Name* (Expression):
    `{{ $('Solo filas incompletas').item.json.ID }} - {{ $json.firstName }} {{ $json.lastName }}`. *Parent Drive*:
    **My Drive**. *Parent Folder*: **By ID** → el ID de Legajos. Renombralo: `Crear carpeta del empleado`.
    **Execute step** (¡una sola vez!): cuatro carpetas en Legajos.
11. **+** → **Google Sheets** → **Update row in sheet**. Tu planilla, **Hoja 1**. *Mapping Column Mode*: **Map Each
    Column Manually**. *Column to match on*: **ID**. Renombralo: `Completar la fila`. Completá los valores
    (arrastralos o pegalos) y apretá **Execute step**: mirá la planilla.

```text
ID       {{ $('Solo filas incompletas').item.json.ID }}
Nombre   {{ $('Buscar datos del empleado').item.json.firstName }} {{ $('Buscar datos del empleado').item.json.lastName }}
Edad     {{ $('Buscar datos del empleado').item.json.age }}
Cargo    {{ $('Buscar datos del empleado').item.json.company.title }}
Carpeta  https://drive.google.com/drive/folders/{{ $json.id }}
```

12. **+** → **Aggregate** → *All Item Data (Into a Single List)* → *Put Output in Field*: `filas`. Renombralo:
    `Juntar en un solo item`. Entran 4, sale 1.
13. **+** → **Gmail** → **Send a message**. *To*: tu correo. *Subject* (Expression):
    `Planilla completa: {{ $json.filas.length }} empleados nuevos`. *Email Type*: **Text**. *Message* (Expression):
    `Se completaron {{ $json.filas.length }} filas: {{ $json.filas.map(f => f.Nombre).join(', ') }}`. **Add
    option** → **Append n8n Attribution** → apagado. Renombralo: `Avisar que terminó`. **Execute step**: llega
    **un** correo.
14. **Execute workflow** (todo el flujo): se frena en el Filter con 0 items. No duplicó nada.
15. Borrá los datos de una fila y **Execute workflow** otra vez: se completa solo esa.
16. **Ctrl + S** → menú **…** → **Download**. Guardá el `.json`.

**Paso 5 · La clínica:** el profe rompe el flujo a propósito (un ID de carpeta que no existe y una planilla sin
permiso de escritura) y lee el error en **Executions**. Vos lo practicás con el Ejercicio 7.

---

## Para casa (antes de la Semana 6)

### Ejercicio 5 · El plano de tu propio flujo (20 min)

Elegí un proceso real que hagas a mano (tuyo, de tu trabajo o de un conocido) y completá esta plantilla **antes**
de abrir n8n. Todavía no hace falta construirlo.

```text
1. EL PROBLEMA (una línea): qué se hace a mano y por qué conviene automatizarlo (tiempo, errores, costo o escala).
2. EL RESULTADO, en términos de negocio (no de nodos):
3. ENTRADA → PROCESO → SALIDA (con flechas, un paso por renglón):
4. SERVICIOS:
   Servicio | Qué hace el flujo (leer/escribir/enviar) | Credencial | Permiso que necesita | ¿Lo probé?
5. QUÉ PUEDE SALIR MAL:
   - si un servicio falla o tarda:
   - si llega un dato vacío, repetido o mal escrito:
   - ¿hay casos dudosos que tenga que mirar una persona?
6. IDEMPOTENCIA: si se ejecuta dos veces con el mismo dato, ¿qué se duplica? ¿cómo lo evito?
7. EL DÍA DESPUÉS: ¿cómo me entero si falla? ¿dónde lo documento? ¿quién lo mantiene?
```

Para la columna "¿Lo probé?": entrá a cada servicio con la cuenta que usaría el flujo y fijate si podés hacer lo que
el flujo necesita (sobre todo, **escribir**).

### Ejercicio 6 · Probá la idempotencia (15 min)

Con tu flujo de la clase (o con `02-planilla-google.json`):

1. Ejecutalo dos veces seguidas. ¿Qué hace la segunda vez? Anotalo.
2. Ahora **desactivá el Filter**: clic derecho sobre *Solo filas incompletas* → **Deactivate** (queda gris, y los
   datos pasan de largo). Ejecutalo otra vez.
3. Respondé:
   - ¿Cuántas carpetas nuevas aparecieron en Legajos? ¿Tienen nombres repetidos?
   - ¿Qué pasó con las filas de la planilla? ¿Cambió algo que se vea?
   - ¿Cuántas filas dice el correo?
4. Volvé a activar el Filter y borrá las carpetas repetidas.
5. En dos o tres líneas: ¿por qué el problema se ve en Drive y en el correo, pero casi no en la planilla?

### Ejercicio 7 · Clínica de errores (15 min)

Importá `04-clinica-de-errores.json`. Tiene tres flujos rotos. Abrí cada nodo de error y apretá **Execute step**
(ejecuta solo ese nodo y los anteriores). Para cada uno, completá:

| Nodo | ¿Qué ves? (el error, o la salida) | ¿Cuál es la causa? | ¿Cómo lo arreglás? |
|---|---|---|---|
| Error A · Buscar empleado | | | |
| Error B · Buscar empleado | | | |
| Error C · Mandar el correo | | | |

Pistas:
- **No todos se ponen rojos.** Mirá también la salida: ¿es lo que esperabas?
- **Para el A**, abrí el nodo y mirá cómo quedó la URL después de la expresión (debajo del campo).
- **Para el B**, fijate en cuál de las cuatro filas se rompe. ¿Qué tendría que hacer el flujo con las otras tres?
- **Para el C**, contá cuántos items salen.

Después, pensá dos errores que te pueden aparecer con Google y qué harías:
- "403 · *The caller does not have permission*" al escribir en la planilla.
- "404 · *File not found*" al crear la carpeta.

### Ejercicio 8 · Desafío: el onboarding (30 min)

Es el ejemplo del material de lectura. **Onboarding** es la bienvenida de una persona nueva a una empresa. Armá un
flujo que, cuando se agrega un empleado a una planilla, le cree su carpeta personal en Drive y le mande un correo
de bienvenida con el link.

1. Una planilla nueva `Ingresos`, con las columnas **Nombre, Email, Área, Carpeta, Avisado**.
2. El plano primero (como el del Ejercicio 5): ¿qué pasa si la fila se procesa dos veces? ¿Y si el email está
   vacío?
3. El flujo:
   - Manual Trigger → Google Sheets (leer);
   - un **Filter** que deje pasar solo las filas con **Avisado** vacío **y** Email que no esté vacío;
   - Google Drive (crear la carpeta con el nombre de la persona);
   - Gmail: un correo **a cada persona**, con su nombre y el link de su carpeta. Acá no va Aggregate: ¿por qué?
   - Google Sheets (*Update row*, buscando por Email): escribir el link en **Carpeta** y `sí` en **Avisado**.
4. Probalo con dos filas, usando tus propios correos (o el mismo con `+1` y `+2`: `tunombre+1@gmail.com` llega a tu
   casilla).
5. **Extra:** cambiá el Manual Trigger por un **Google Sheets Trigger** (*On row added*) y fijate qué pasa cuando
   agregás una fila. ¿Por qué el Filter sigue siendo necesario?

### Cuestionario del módulo

En la plataforma: 5 preguntas, 15 minutos, se aprueba con 70 %, tenés 3 intentos. Antes, leé `Semana 5.docx` y
escuchá el podcast.
