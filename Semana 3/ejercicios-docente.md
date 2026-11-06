# Semana 3 · Ejercicios — versión docente

Respuestas esperadas de `ejercicios-alumnos.md` y lo que pasa en cada flujo de la carpeta `n8n/`. **No compartir
con los alumnos.** Todo lo de n8n está probado en la versión 2.46.

---

## En clase

### Ejercicio 1 · ¿Trigger, action o transform?

| # | Nodo | Respuesta |
|---|---|---|
| 1 | Schedule (lunes a las 9) | **T**: arranca el flujo por horario |
| 2 | Mandar un mensaje por Telegram | **A** |
| 3 | IF: ¿monto mayor a 10.000? | **X**: decide adentro de n8n |
| 4 | Llegó un formulario (webhook) | **T** |
| 5 | Edit Fields: juntar nombre y apellido | **X** |
| 6 | Agregar una fila en Google Sheets | **A** |
| 7 | Merge: juntar dos ramas | **X** |
| 8 | Execute workflow (Manual Trigger) | **T** |

**La que más se equivoca es la 3:** el IF parece que "hace" algo, pero no toca ninguna aplicación de afuera.
Regla rápida: si necesita una credencial, casi seguro es una acción.

### Ejercicio 2 · Detective de datos

**Respuesta: B, campo inexistente.** El IF del flujo `04-detective-de-datos.json` pregunta por `{{ $json.importe }}`,
pero las consultas traen `monto`. Como `importe` no existe, el IF no tiene con qué comparar y manda los cinco items
por *false*, **sin error** (probado: 0 por *true*, 5 por *false*).

- **Cómo revelarlo:** abrir *Separar en items* → pestaña **JSON** de la salida: el campo es `monto`.
- **Cómo arreglarlo:** en el IF, borrar `{{ $json.importe }}` y arrastrar `monto` desde la entrada. Resultado: 2
  por *true* (Martín y Sofía), 3 por *false*.
- **Si alguien vota C:** no está mal (la condición está mal configurada), pero B es la causa precisa y la que dice
  dónde mirar: en la entrada del nodo.

### Ejercicio 3 · ¿Dos IF o un Switch?

1. **Switch.** Con IF hacen falta dos, uno colgado del *false* del otro ("¿es alta?" → no → "¿es media?"); se lee
   peor y hay que seguir la cadena para entender por qué un item terminó en un lado.
2. **Cuarta categoría:** con Switch, se agrega una regla (y una entrada en el Merge, si lo hay). Con IF, un tercer
   IF en la escalera, y revisar que no se rompa el orden.
3. **Campo vacío:** con IF anidados, cae por el último *false* y termina tratado como "baja" sin que nadie lo
   decida. Con Switch, sale por la **salida por defecto**, que se puede mandar a revisar a mano. Si la salida por
   defecto está en *None*, se pierde sin aviso.

### Ejercicio 4 · Tu primer flujo con lógica

El resultado esperado es el flujo `02-consultas-con-logica.json`. Lo que sale en cada nodo (probado):

| Nodo | Items | Detalle |
|---|---|---|
| Consultas de prueba | 1 | Un solo item con el campo `consultas` (una lista de 5) |
| Separar en items | 5 | Una ficha por consulta |
| ¿Más de USD 10.000? (Paso 2) | 2 / 3 | *true*: Martín y Sofía. *false*: Lucía, Diego y Carla |
| ¿Qué tipo de consulta? | 2 / 1 / 1 / 1 | Paquetes: Martín y Sofía. Vuelos: Lucía. Hoteles: Diego. Otra: Carla (crucero) |
| Con *Fallback Output* en *None* | 2 / 1 / 1 | Carla desaparece, sin error |
| Juntar las ramas (Append, 4 entradas) | 5 | En orden de entrada: paquetes, vuelos, hoteles, otra |
| Con Diego en "vuelo" (rama Hoteles vacía) | 5 | El Merge en Append **no se frena**: sigue con lo que llegó |
| Todas en una lista | 1 | `{"consultas": [ ...5 fichas con su área... ]}` |
| Esperar 5 segundos | 1 | El mismo item, 5 segundos después |
| Mail de resumen (simulado) | 1 | El texto de abajo |

```text
Buen día. Hoy entraron 5 consultas:
- Martín Gómez (paquete, USD 12000): Área de paquetes
- Sofía Herrera (paquete, USD 15000): Área de paquetes
- Lucía Fernández (vuelo, USD 3500): Área de vuelos
- Diego Ramírez (hotel, USD 800): Área de hoteles
- Carla Méndez (crucero, USD 6000): Revisar a mano
```

**Por qué hay un Split Out:** Edit Fields devuelve un item por cada item que le entra; con el trigger manual, uno
solo. No se puede fabricar una lista de cinco items con un único Edit Fields (en modo JSON, si se pega una lista
`[...]` directa, da el error *'jsonOutput' expects a object*). Por eso: Edit Fields con `{"consultas": [...]}` y
Split Out.

**Errores que aparecen** (probados):
- Monto con comillas (`"12000"`): el IF se pone rojo con *Wrong type: '12000' is a string but was expecting a number
  [condition 0, item 0]*. Se arregla sacando las comillas o activando **Convert types where required**.
- Campo mal escrito en el IF: todo por *false*, sin error (el Ejercicio 2).
- Sin **Include Other Input Fields** en las ramas: el Merge devuelve fichas con solo `area`, y el mensaje sale con
  `undefined` en nombre, categoría y monto.

## Los flujos de la carpeta `n8n/`

| Archivo | Para qué | Qué pasa al ejecutarlo |
|---|---|---|
| `01-consultas-if.json` | Plan B del Paso 2 | 2 items por *true* (gerencia), 3 por *false* (ventas) |
| `02-consultas-con-logica.json` | El flujo completo, Pasos 1 a 5 | Termina en el mensaje de resumen de arriba |
| `03-desafio-merge-congelado.json` | Desafío de la filmina 24 | IF: 0 / 3. *Venta común*: 3. *Juntar ventas* (Combine por posición): **0 items**. *Mail al gerente*: no se ejecuta. Sin error |
| `04-detective-de-datos.json` | Ejercicio 2 | IF: 0 / 5, sin error |

**El Merge según el modo, con una rama vacía** (probado con el flujo 03):

| Modo | Qué pasa |
|---|---|
| Append | Devuelve los 3 items que llegaron y el mail se arma (3 veces) |
| Combine → By Position | Devuelve 0 items; lo que sigue no se ejecuta |
| Choose Branch | El Merge no se ejecuta |

En ninguno de los tres hay error. Lo que las filminas llaman "flujo congelado" es, en esta versión, Combine o Choose
Branch con una rama vacía.

---

## Para casa

### Ejercicio 5 · Rearmalo desde cero

No hay respuesta única. Para revisar la captura: todos los nodos en verde, nombres descriptivos (ningún "Edit
Fields1"), la salida *Otra* activada y una nota que explique el flujo. Donde más se traban: el modo JSON del Edit
Fields, el Split Out, y conectar los nodos pegados con Ctrl + V.

### Ejercicio 6 · Una cuarta ruta y la salida por defecto

1. Cuarta regla `crucero` → `Cruceros` → Edit Fields `area` = `Área de cruceros`. El Merge pasa a **5 entradas**
   (si no le suman una, el nodo nuevo queda sin conectar y Carla no llega al resumen).
2. La consulta `excursion` sale por **Otra**.
3. Respuesta abierta. Buenas respuestas: avisar a una persona (es un caso que nadie previó), o responderle al cliente
   que la consulta se deriva y anotarla para ver si conviene sumar la categoría. Lo que hay que marcar: que se
   **decida**, no que se pierda.

### Ejercicio 7 · Taller de diseño: el formulario por país

Una solución posible:

```text
1. Trigger: llega el formulario (webhook o el trigger del formulario)
2. Edit Fields: nombre = {{ $json.nombre.toUpperCase() }}   (en MAYÚSCULAS)
3. IF: país is equal to "España"
   ├─ true  → Base de datos A (acción)
   └─ false → Base de datos B (acción)
```

- **IF**, porque hay dos caminos y los dos hacen algo. **Filter** no sirve: descartaría a los que no son de España.
  **Switch** también está bien, sobre todo si piensan en la pregunta 4.
- **Mayúsculas antes de la decisión:** un solo Edit Fields para todos. Si va después, hacen falta dos (uno por rama)
  o un Merge para juntarlas antes. Funciona igual, pero es más largo.
- **Se suma Argentina:** con IF, hay que anidar otro IF en el *false*: es el momento de pasar a **Switch** (España →
  A, Argentina → C, salida por defecto → B).

Es la actividad "Taller de diseño" del material de lectura (pensada para 40 minutos en grupos). Si la querés hacer en
clase con salas de grupos, entra en lugar del Ejercicio 3 y parte de la práctica.

### Ejercicio 8 · Predicción

1. **IF** (monto > 10.000): *true* 2 (Bruno, Ceci), *false* 2 (Ana, Dani).
2. **Switch:** Paquetes 1 (Bruno), Vuelos 2 (Ana, Ceci), Hoteles 0, salida por defecto 1 (Dani, "tren").
3. **Sin salida por defecto:** Dani desaparece; salen 3 items en total. Sin error.
4. **Merge en Append:** 4 items. Con Hoteles vacío, también 4: Append sigue con lo que llegó.
5. **Aggregate:** 1 item, con la lista de los 4.
6. **Filter** (categoria = vuelo): 2 items (Ana y Ceci). Los otros dos se **descartan**: no hay rama *false*.
