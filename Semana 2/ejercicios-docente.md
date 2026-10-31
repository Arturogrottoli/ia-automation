# Semana 2 · Ejercicios — versión docente

Respuestas esperadas de `ejercicios-alumnos.md` y el material de las demos. **No compartir con los
alumnos.**

---

## En clase

### Ejercicio 1 · ¿Lineal o cognitiva?

| # | Caso | Respuesta |
|---|---|---|
| 1 | Reporte de ventas cada lunes | **Lineal**: horario fijo, datos de una planilla, sin interpretar |
| 2 | Decidir qué reseñas son quejas urgentes | **Cognitiva**: hay que leer e interpretar |
| 3 | Copiar compras a la planilla de stock | **Lineal** |
| 4 | Responder consultas de WhatsApp con el catálogo | **Cognitiva**: entender la pregunta y redactar |
| 5 | Pago recibido → marcar pedido y avisar a depósito | **Lineal** |
| 6 | Resumir notas de una reunión y mandarlas a Slack | **Cognitiva**: el resumen lo hace una IA (el envío es lineal) |

**Lo que hay que remarcar:** la mayoría de los flujos cognitivos tienen pasos lineales alrededor del paso
de IA. El 6 lo muestra bien.

### Ejercicio 2 · Calculá el ROI

Beneficio neto = ahorro acumulado − mantenimiento acumulado − inversión.

| Momento | Ahorro acumulado | Mantenimiento | Beneficio neto | ROI |
|---|---|---|---|---|
| Mes 1 | $130.000 | $10.000 | 130.000 − 10.000 − 150.000 = **−$30.000** | −30.000 / 150.000 × 100 = **−20 %** |
| Mes 2 | $260.000 | $20.000 | **$90.000** | **60 %** |
| Mes 3 | $390.000 | $30.000 | **$210.000** | **140 %** |

- **Break-even:** al principio del segundo mes (alrededor de la semana 5 o 6): con un ahorro neto de $120.000 por mes, los $150.000 de inversión se recuperan en 1,25 meses.
- **Costo de oportunidad:** con 13 horas por mes, esa persona podría responder más rápido a los clientes, hacer seguimiento de presupuestos o vender más. Ese valor no está en la cuenta y es el argumento más fuerte.

### Ejercicio 3 · Desafío de priorización

No hay una única respuesta correcta; lo que importa es el argumento.
- **C (formulario → planilla)** es la fruta madura: la frecuencia más alta (30 por día), juicio humano nulo y entra en dos horas. Es lineal.
- **A (responder consultas)** es la de más valor y es cognitiva, pero en dos horas probablemente no quede terminada. Es la que vamos a aprender a construir en el curso.
- **B (balance anual)** es la peor: una vez por año, el mantenimiento se come el ahorro y el ROI da negativo.

Usá la discusión para repasar: frecuencia, juicio humano, costo de oportunidad y que la primera
automatización conviene que sea chica.

## n8n en vivo (60–100 min)

> **Probá todo antes de la clase en tu instancia.** Los nombres de algunos botones cambian entre
> versiones de n8n; lo que importa es mostrar cada pieza.

### Recorrido por la interfaz (10 min)

| Qué mostrar | Qué decir |
|---|---|
| La pantalla de inicio con la lista de workflows | Acá vive todo lo que armen. Cada workflow se puede exportar como `.json`. |
| Dónde están las **credenciales** | Son las llaves para que n8n entre a Gmail, Sheets o una IA en tu nombre. Se cargan una vez y se reutilizan. |
| Un workflow nuevo y el **buscador de nodos** | Triggers (lo que arranca el flujo) y acciones (lo que hace). Hay cientos de integraciones. |
| Un nodo abierto | Parámetros a la izquierda; entrada y salida. Vistas **Table** y **JSON**: el JSON de la filmina 20. |
| Guardar, ejecutar y el interruptor para activarlo | Probar a mano no es lo mismo que dejarlo corriendo solo: para producción hace falta un trigger real y activarlo. |
| **Executions** | El historial: cada corrida con su estado. Es lo primero que se mira cuando algo falla. |

### Un template real (10 min)

1. n8n.io/workflows → buscar por caso de uso o por integración.
2. Importar el template elegido (con un clic desde la biblioteca o con Import from URL / Import from File).
3. Leerlo nodo por nodo: **trigger**, **IA**, **destino del dato**.
4. Señalar los avisos de credenciales faltantes y los campos que dependen del caso.

**Cómo elegirlo:** chico (4 a 6 nodos), con un nodo de IA, y con un trigger fácil de explicar (un
formulario, un mail o un horario). Evitá los que necesitan muchas credenciales distintas.

### Flujo mínimo y error (12 min)

1. **Manual Trigger** → **Edit Fields (Set)**: `nombre` = `Martín Gómez`, `destino` = `Bariloche`.
2. Segundo **Edit Fields**: `saludo` = "Hola " + el campo `nombre` arrastrado desde la entrada. Queda como `Hola {{ $json.nombre }}` y sale `Hola Martín Gómez`.
3. Romperlo: `saludo` = `{{ $json.email.toUpperCase() }}`. Como `email` no existe, el nodo falla y el error indica que no puede leer esa propiedad (el texto exacto depende de la versión). **Probalo antes** para saber qué mensaje vas a mostrar.
4. Mostrar la corrida fallida en **Executions**.

### Ejercicio 4 · Los alumnos lo replican

Trabas comunes:
- No encuentran **Edit Fields**: en algunas versiones aparece como "Set" o hay que buscarlo por "edit".
- **Arrastrar el campo:** hay que ejecutar antes el nodo anterior para que aparezca la entrada.
- Escriben `{{ nombre }}` en vez de `{{ $json.nombre }}`: buen momento para mostrar que arrastrar lo escribe solo.

## Pre-entrega · Ejemplo resuelto (agencia de viajes)

Para mostrar en pantalla con las filminas 27 a 31. Sigue el ejemplo de la Semana 1. Los alumnos lo
hacen en casa con su propio proceso.

**Paso 1 · El proceso**
> Tareas candidatas: cargar a mano las consultas que llegan por mail (40 por semana), armar la cotización
> de cada paquete (requiere criterio del vendedor), hacer el cierre contable anual (una vez por año).
> **Elegida:** cargar las consultas en la planilla de ventas. Alta frecuencia y bajo juicio: los datos
> ya están en el mail, solo hay que pasarlos.

**Paso 2 · El ROI**
> Hoy son 40 consultas por semana a 5 minutos cada una: unas 13 horas por mes. Con la automatización, el
> vendedor dedica ese tiempo a cotizar y cerrar ventas. Si las consultas se multiplican por diez en
> temporada alta, sin automatizar haría falta otra persona. **Por qué no:** si llegaran cinco consultas
> por mes, no valdría la pena armarlo.

**Paso 3 · El boceto**
```
1. Disparador: llega un mail nuevo a la casilla de consultas (Gmail Trigger).
2. Nodo de IA: extrae los datos de la consulta y devuelve JSON (el prompt del paso 4).
3. Agrega una fila en la planilla de ventas (Google Sheets) con ese JSON.
4. Output: la consulta cargada en la planilla, lista para que el vendedor la cotice.
```

**Paso 4 · El prompt**
> La plantilla maestra de la Semana 1 (`Semana 1/ejercicios-docente.md`, "Prompt final · Salida JSON").

**Paso 5 · Los riesgos**
> **Riesgo:** alucinación. Si el mail no trae el año del viaje o el email del cliente, el modelo puede
> inventarlos y el vendedor cotiza fechas que nadie pidió. **Mitigación:** el prompt prohíbe inventar y
> marca `"no_disponible"`; en el flujo, si algún dato clave sale `no_disponible`, la fila se marca "a
> revisar" para que el vendedor confirme con el cliente.

---

## Para casa

### Ejercicio 5 · ¿Trigger o acción?

| # | Nodo | Respuesta |
|---|---|---|
| 1 | Schedule Trigger | **Trigger** (por horario) |
| 2 | Enviar un mail con Gmail | **Acción** |
| 3 | Webhook | **Trigger** (por evento externo) |
| 4 | Agregar una fila en Google Sheets | **Acción** |
| 5 | Manual Trigger | **Trigger** (para pruebas) |
| 6 | Llega un mail nuevo a Gmail | **Trigger** |
| 7 | Pedirle una respuesta a un modelo de IA | **Acción** |
| 8 | Mandar un mensaje a Slack | **Acción** |

Coincide con el cuestionario del material: solo los triggers pueden arrancar un flujo, y todo flujo en
producción necesita al menos uno.

### Ejercicio 6 · Explorá un template

No hay respuesta única. Para revisar: que identifiquen bien trigger, nodo de IA y output, y que
mencionen las **credenciales** propias como lo primero a cambiar. Si alguno elige un template muy
grande, sugerile uno más chico: la idea es entenderlo, no usarlo.

### Ejercicio 7 · Tu proceso en JSON

Errores típicos para revisar: comillas simples en vez de dobles, coma después del último par, números
o `true`/`false` entre comillas (pasan a ser texto).

### Ejercicio 8 · Si no llegaste en clase

Lo que suele trabar al crear la instancia:
- **n8n Cloud:** verificar cuánto dura la prueba gratuita; si vence antes de que termine el curso, conviene que pasen a local.
- **Local:** `npx n8n` necesita Node instalado; la primera vez descarga bastante. Abre en `http://localhost:5678`.
- El flujo es el del Ejercicio 4.
