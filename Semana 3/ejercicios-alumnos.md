# Semana 3 · Ejercicios

**Módulo 3: Conceptos básicos**

### Palabras que vas a ver en estos ejercicios

| Palabra | Qué quiere decir |
|---|---|
| **Trigger** | Disparador: el nodo que hace arrancar el flujo. Siempre va primero. |
| **Action** | Acción: un nodo que hace algo en otra aplicación (mandar un mail, agregar una fila). |
| **Transform** | Transformación: un nodo que trabaja con los datos adentro de n8n, sin conectarse a nada de afuera. |
| **Item** | Cada dato suelto que pasa por el flujo. Cinco consultas son cinco items. |
| **Campo** | Un casillero de la ficha JSON: `nombre`, `monto`. |
| **Rama** | Cada camino que sale de un nodo que decide. |
| **IF** | "Si": decide entre dos caminos, *true* (sí) y *false* (no). |
| **Switch** | Reparte en tres caminos o más, uno por regla, y tiene una salida por defecto para lo que no encaja. |
| **Merge** | "Unir": junta en una sola salida lo que venía por varias ramas. |
| **Aggregate** | "Agrupar": junta muchos items en uno solo, con una lista adentro. |
| **Wait** | "Esperar": frena el flujo un rato y después sigue igual. |
| **Split Out** | "Separar": parte una lista en un item por cada elemento. |
| **Salida por defecto** | La salida del Switch para lo que no encaja en ninguna regla (*Fallback Output*). |
| **Anidar** | Poner un IF adentro de otro IF. |
| **Exportar** | Bajar el flujo como un archivo `.json`. |

---

## En clase

### Ejercicio 1 · ¿Trigger, action o transform? (3 min)

Respondé en el chat con el número y la letra: **T** (trigger), **A** (action) o **X** (transform).

1. Todos los lunes a las 9 (Schedule)
2. Mandar un mensaje por Telegram
3. IF: ¿el monto es mayor a 10.000?
4. Llegó un formulario nuevo (webhook)
5. Edit Fields: juntar nombre y apellido
6. Agregar una fila en Google Sheets
7. Merge: juntar dos ramas
8. El botón "Execute workflow" (Manual Trigger)

### Ejercicio 2 · Detective de datos (5 min)

El profe muestra un flujo: cinco consultas pasan por un IF que pregunta si el monto supera los USD 10.000. Martín
(USD 12.000) y Sofía (USD 15.000) deberían ir a gerencia, pero las cinco van a ventas. No hay ningún error.

¿Por qué falla? Votá en el chat:
- **A)** Error de conexión
- **B)** Campo inexistente
- **C)** El nodo está mal configurado

### Ejercicio 3 · ¿Dos IF o un Switch? (4 min)

Hay que repartir consultas según su urgencia: alta, media o baja.

1. ¿Lo resolvés con dos IF anidados o con un Switch? ¿Por qué?
2. Mañana aparece una cuarta categoría: "crítica". ¿Qué tenés que cambiar en cada caso?
3. ¿Qué pasa con una consulta que llega sin urgencia (el campo vacío)?

### Ejercicio 4 · Tu primer flujo con lógica (lo armamos a la par)

Lo armás en tu n8n mientras el profe lo arma en pantalla. Si te perdés, acá están todos los pasos.

**El caso:** la agencia de viajes recibe consultas con nombre, monto en dólares y categoría. Cada consulta tiene
que ir a su área, y al final tiene que salir un solo mensaje con el resumen.

**Paso 1 · El terreno**

1. Workflow nuevo. Nombre: `Consultas con lógica`.
2. **Add first step** → buscá `manual` → **Trigger manually**.
3. **+** → buscá `edit` → **Edit Fields (Set)**. Arriba, **Mode** → **JSON**. Borrá lo que hay y pegá:

```json
{
  "consultas": [
    { "nombre": "Martín Gómez", "monto": 12000, "categoria": "paquete" },
    { "nombre": "Lucía Fernández", "monto": 3500, "categoria": "vuelo" },
    { "nombre": "Diego Ramírez", "monto": 800, "categoria": "hotel" },
    { "nombre": "Sofía Herrera", "monto": 15000, "categoria": "paquete" },
    { "nombre": "Carla Méndez", "monto": 6000, "categoria": "crucero" }
  ]
}
```

4. Renombrá el nodo: `Consultas de prueba`. **Execute step**: sale **1 item** con la lista adentro.
5. **+** → buscá `split` → **Split Out**. En *Fields To Split Out*: `consultas`. Renombralo: `Separar en items`.
   **Execute step**: salen **5 items**. Miralos en las vistas **Table** y **JSON**.

**Paso 2 · El IF**

6. **+** → **If**. En *Conditions*: arrastrá `monto` desde la izquierda al primer cuadro → **Number** → **is
   greater than** → `10000`. Renombralo: `¿Más de USD 10.000?`. **Execute step**: 2 items por *true*, 3 por
   *false*.
7. En la salida *true*: **Edit Fields** → **Add Field** → `asignado_a` = `Gerencia`. Activá **Include Other Input
   Fields**. Renombralo: `Asignar a gerencia`.
8. En la salida *false*: otro igual, con `Equipo de ventas`. Renombralo: `Asignar a ventas`.
9. **Execute workflow** y mirá los números sobre las flechas.

**Paso 3 · El Switch**

10. Borrá el IF y sus dos Edit Fields (seleccionalos y apretá **Supr**).
11. **+** a la derecha de `Separar en items` → **Switch**. *Mode*: **Rules**. Tres reglas: arrastrá `categoria` →
    **String** → **is equal to** → `paquete`, `vuelo` y `hotel`. En cada una, activá **Rename Output** y ponele
    nombre: `Paquetes`, `Vuelos`, `Hoteles`.
12. **Add option** → **Fallback Output** → **Extra Output**. **Add option** → **Rename Fallback Output** → `Otra`.
    Renombrá el nodo: `¿Qué tipo de consulta?`. **Execute step**: Paquetes 2, Vuelos 1, Hoteles 1, Otra 1.
13. Probá: cambiá *Fallback Output* a **None** y ejecutá. ¿Dónde quedó Carla? Volvelo a **Extra Output**.
14. En cada salida, un **Edit Fields** con `area` y **Include Other Input Fields** activado:
    - Paquetes → `Área de paquetes` (nodo: `Para área de paquetes`)
    - Vuelos → `Área de vuelos` (nodo: `Para área de vuelos`)
    - Hoteles → `Área de hoteles` (nodo: `Para área de hoteles`)
    - Otra → `Revisar a mano` (nodo: `Para revisar a mano`)

    Truco: armá uno, seleccionalo, **Ctrl + C** y **Ctrl + V**, y cambiale el valor y el nombre. El pegado queda
    suelto: conectalo.

**Paso 4 · Volver a juntar**

15. **+** → **Merge**. *Mode*: **Append**. *Number of Inputs*: **4**. Conectá cada Edit Fields a una entrada.
    Renombralo: `Juntar las ramas`. **Execute workflow**: salen 5 items.
16. Probá: en `Consultas de prueba`, cambiá la categoría de Diego a `vuelo` y ejecutá. ¿Se frena el Merge? Después
    volvelo a `hotel`.
17. **+** → **Aggregate** → **All Item Data (Into a Single List)** → *Put Output in Field*: `consultas`.
    Renombralo: `Todas en una lista`. **Execute step**: sale 1 item.

**Paso 5 · Ordenar**

18. **+** → **Wait** → *Resume*: **After Time Interval**, *Wait Amount*: `5`, *Wait Unit*: **Seconds**.
    Renombralo: `Esperar 5 segundos`.
19. **+** → **Edit Fields** → **Add Field** → `mensaje`. En el valor pegá esto (si queda en *Fixed*, pasalo a
    *Expression*):

```text
Buen día. Hoy entraron {{ $json.consultas.length }} consultas:
{{ $json.consultas.map(c => '- ' + c.nombre + ' (' + c.categoria + ', USD ' + c.monto + '): ' + c.area).join('\n') }}
```

Renombralo: `Mail de resumen (simulado)`. **Execute workflow**: espera 5 segundos y sale el resumen.
20. Revisá que todos los nodos tengan nombres claros. Agregá una nota (**Shift + S**) que explique qué hace el flujo.
21. **Ctrl + S** y después menú **…** (arriba a la derecha) → **Download**. Guardá el `.json`.

---

## Para casa (antes de la Semana 4)

### Ejercicio 5 · Rearmalo desde cero, sin mirar la grabación (30 min)

Armá de nuevo el flujo del Ejercicio 4 en un workflow nuevo, **sin mirar la grabación ni los pasos**. Si te trabás,
anotá en qué paso fue y recién ahí mirá los pasos. Sacá una captura del flujo terminado con todos los nodos en
verde.

### Ejercicio 6 · Desafío: una cuarta ruta y la salida por defecto (15 min)

1. Agregale al Switch una cuarta regla: `categoria` = `crucero` → salida `Cruceros` → un Edit Fields con
   `area` = `Área de cruceros`. Acordate de sumarle una entrada al Merge.
2. Agregá una sexta consulta de una categoría que no exista (por ejemplo, `excursion`). ¿Por dónde sale?
3. Decidí qué hacer con lo que cae en la salida por defecto y escribilo en una nota del flujo: ¿se le avisa a una
   persona? ¿se le responde algo al cliente? ¿por qué?

### Ejercicio 7 · Taller de diseño: el formulario por país (15 min)

Sin abrir n8n, en papel o en un documento. El caso:

> Recibimos un formulario con nombre, email y país. Si el país es España, los datos van a la base de datos A; si es
> otro, a la base de datos B. En los dos casos, el nombre tiene que quedar en MAYÚSCULAS.

1. ¿Qué nodos usarías y en qué orden? Hacé un boceto con cajitas y flechas, o una lista numerada.
2. ¿Usaste IF, Switch o Filter? ¿Por qué?
3. ¿Pusiste el paso de las mayúsculas antes o después de la decisión? ¿Cambia algo?
4. Mañana se suma Argentina con su propia base de datos C. ¿Qué cambiás?

### Ejercicio 8 · Predicción: ¿qué sale de cada nodo? (10 min)

Sin ejecutar nada, respondé. Entran estas cuatro consultas:

```json
[
  { "nombre": "Ana", "monto": 9000, "categoria": "vuelo" },
  { "nombre": "Bruno", "monto": 20000, "categoria": "paquete" },
  { "nombre": "Ceci", "monto": 11000, "categoria": "vuelo" },
  { "nombre": "Dani", "monto": 500, "categoria": "tren" }
]
```

1. Un **IF** con `monto` *is greater than* `10000`: ¿cuántos items salen por *true* y cuántos por *false*? ¿Quiénes?
2. Un **Switch** con reglas `paquete`, `vuelo` y `hotel`, y salida por defecto: ¿cuántos items salen por cada
   salida?
3. El mismo Switch, pero con la salida por defecto en *None*: ¿qué pasa con Dani?
4. Un **Merge** en modo *Append* que junta las salidas del Switch: ¿cuántos items salen? ¿Y si la salida de hoteles
   llega vacía?
5. Un **Aggregate** (*All Item Data*) después del Merge: ¿cuántos items salen?
6. Un **Filter** con `categoria` *is equal to* `vuelo`: ¿cuántos items salen? ¿Qué pasa con los demás?

Después, armalo en n8n y comprobá tus respuestas.

**Además:** leé `Semana 3.docx` y hacé el cuestionario del módulo en la plataforma.
