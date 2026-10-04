# Clase 1 — Automatización de procesos y arquitectura de flujos

**Módulo 1 · Fundamentos de IA y mentalidad de Arquitecto de Automatización** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 1

> Base de contenido: el PDF. **Presentación:** `Clase01.html` (33 filminas, en esta carpeta; se navega
> con ← → o los botones). Las filminas viejas quedan solo como referencia; donde difieran, manda el PDF.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar qué es la automatización de procesos (BPA) y en qué se diferencia del RPA.
2. Descomponer cualquier proceso en **Trigger → Inputs → Acciones/Decisión → Output**.
3. Dibujar un flujo con los **3 símbolos**: óvalo, rectángulo y rombo.
4. Salir con **un proceso real elegido** y el **borrador del diagrama**, que es la base de la Pre-Entrega 1.

---

## Preparación previa (docente)

- [ ] Completar el nombre del otro profesor o profesora (a confirmar) y el N° de comisión en la filmina 2.
- [ ] Abrir una pestaña de [draw.io](https://app.diagrams.net) con un lienzo en blanco para la demo.
- [ ] Probar el bot de películas: que el escenario de Make esté ON y que Telegram responda.
- [ ] Tener abiertos el Google Sheet del catálogo y el sitio "Diario de proyección".
- [ ] Avisar que la clase queda grabada para verla después.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–15 | Apertura | Equipo docente, modalidad Coderflex, cómo funciona el curso y presentación de los alumnos |
| 15–22 | Gancho | Demo en vivo del bot de películas |
| 22–45 | **Bloque A — BPA** | Unidad 1 del PDF |
| 45–58 | Práctica 1 | Elegir un proceso real |
| 58–63 | Micro-pausa | |
| 63–93 | **Bloque B — Arquitectura de flujos** | Unidad 2 del PDF + demo en draw.io |
| 93–105 | Práctica 2 + cierre | Borrador del diagrama y tarea |

---

## 0–15 · Apertura

- Presentación de los dos profesores y de la comisión.
- **Modalidad Coderflex:** clases en vivo con el mismo grupo, todo queda grabado para verlo después, material de lectura por módulo, pre-entregas corregidas que arman el proyecto final.
- **Cómo funciona el curso:** 8 módulos (7 de contenido + Proyecto Integrador). Cada módulo cierra con una Pre-Entrega que suma al proyecto final.
- **Evaluación:** todas las entregas son sobre **100 pts y se aprueban con 70**.
- **Presentación de los alumnos:** cuentan de dónde son y qué los impulsó a tomar el curso (en el chat o con micrófono).
- En este módulo **lo único que se corrige es la Pre-Entrega 1** (Diagrama de Arquitectura Lógica). El resto es práctica guiada y no se evalúa.

## 15–22 · Gancho: el bot de películas

Mostrá el producto final antes de la teoría:

1. Mandá por Telegram el nombre de una peli que viste.
2. El bot contesta con la ficha (director, año, país, género), que completó la IA.
3. Mostrá la fila nueva en el Google Sheet y la peli en el sitio.
4. Mensaje para el grupo: *"Esto es una automatización con IA. Al final del curso van a saber armar algo así. Hoy aprendemos a dibujarla antes de construirla."*

## 22–45 · Bloque A — Automatización de procesos (BPA)

**Disparador de la charla:** te llegan 15 mails de clientes y pasás 45 minutos copiando y pegando la misma respuesta, adjuntando el catálogo y anotando nombres en un Excel.

**Contenido (según el PDF):**

- **Definición:** BPA es usar tecnología para ejecutar tareas y procesos recurrentes **con la mínima intervención humana posible**. Dejás de ser vos el "motor" que mueve la información de un lado a otro.
- **Lógica base de dos partes:**
  - **Disparador (Trigger):** "cuando ocurra este evento…" (ej. llega un mail con la palabra "Presupuesto").
  - **Acción (Action):** "…hacé esto automáticamente" (ej. responder con las tarifas y guardar el contacto).
  - La automatización no es magia ni "tiene mente propia": es la lógica de **"Si pasa X, entonces hacé Y"**. No hace falta saber programar, ni ser "ingeniero de la NASA" o una gran corporación.
- **Por qué ahora:** antes hacía falta contratar programadores. Hoy, con herramientas No-Code (Zapier, Make, n8n), cualquiera que sepa usar un navegador puede orquestar sus procesos.
- **Los 3 beneficios:**
  - **Eficiencia:** una tarea de 10 min hecha 10 veces por día equivale a casi 1 h diaria recuperada.
  - **Eliminación del error humano:** la máquina hace igual la vez 1 y la vez 1.000.
  - **Escalabilidad:** pasar de 5 a 50 clientes sin colapsar ni multiplicar costos.
- **BPA vs RPA:**
  - **RPA, el "mono digital":** bots que imitan clics en pantalla. Se usa para sistemas viejos. Ej.: un bot que entra a la web del banco y descarga el extracto.
  - **BPA, el "director de orquesta":** rediseña y conecta el flujo completo. Ej.: el extracto llega por API, se categoriza en la contabilidad y te avisa por Slack si el saldo está bajo.
  - En el curso nos enfocamos en **BPA + IA**.
- **Casos "del caos al control":**
  - *Post-venta.* **Manual:** cada viernes el dueño de la tienda online revisa quién compró, escribe un mail uno por uno preguntando si les gustó el producto y anota los comentarios en un cuaderno. **Automatizado:** la orden se marca "entregada" en Shopify → se espera 3 días → se manda una encuesta → la IA analiza la respuesta. Si es negativa, avisa al dueño de inmediato; si es positiva, le pide al cliente una reseña en Google.
  - *Ventas / onboarding.* **Manual:** un freelancer recibe un mensaje por Instagram, pide el mail, manda la propuesta en PDF, espera, arma el contrato a mano y lo envía a firmar. **Automatizado:** el cliente llena un formulario → se genera el contrato con sus datos → se envía a firma digital → una vez firmado, se crea la carpeta del proyecto en Drive y se manda el mail de bienvenida con los próximos pasos.
- **Errores comunes:**
  1. Automatizar un proceso que no funciona. **Primero optimizá, después automatizá.**
  2. Querer automatizar todo de golpe. Empezá por la tarea más repetitiva.
  3. Olvidar el toque humano. Automatizá lo mecánico y guardá tu tiempo para la empatía, la creatividad y la estrategia.

**Interacción:** preguntá al grupo *"¿qué tarea repetís varias veces por día?"* y calculen juntos cuántas horas por semana les consume.

## 45–58 · Práctica 1 — Elegir un proceso real

**Consigna:** elegí una tarea repetitiva de tu trabajo o negocio que te quite tiempo. Por ejemplo, responder consultas de clientes, registrar presupuestos o cargar datos de formularios.

- Tiene que ser **real y acotada**: una sola tarea, no "todo el negocio".
- Anotá cada cuánto ocurre y cuánto tiempo te lleva.
- 2 o 3 alumnos la comparten en voz alta. Aprovechá para corregir si alguno elige algo demasiado grande.

> Este proceso es el que van a diagramar en la Pre-Entrega 1.

## 63–93 · Bloque B — Arquitectura de flujos: Triggers, Inputs y Outputs

**Disparador de la charla:** la cafetería. Entra un cliente (evento), le tomás el pedido (datos), preparás el café (acción) y le entregás el café con el ticket (resultado). Sin un sistema, es un caos.

**Contenido (según el PDF):**

- **Trigger, el "cuándo":** el evento que despierta al flujo. Sin trigger, el flujo es un auto estacionado sin conductor.
  - **Por evento:** llega un formulario, o un mail con "Factura" en el asunto.
  - **Programado (Recurrence):** todos los lunes a las 8:00, o cada 15 minutos.
- **Input, el "con qué":** la materia prima del flujo (remitente, email, texto del mensaje).
- **Output, el "resultado":** el producto final (un PDF, un mensaje de Slack, una fila en Sheets).
- **Idea clave:** *el output de un paso suele ser el input del siguiente.* Diseñar un flujo es encadenar "maletas de datos".

**Ejemplo trabajado del PDF (inmobiliaria):**

1. **Trigger:** llega una respuesta nueva al formulario "Quiero información".
2. **Input:** `nombre: Ana Pérez · email: ana@mail.com · zona: Palermo · presupuesto: 120000`
3. **Acciones:**
   - A. Guardar la fila en el Google Sheets "Leads".
   - B. Decisión (rombo): ¿presupuesto ≥ 100.000? Si es **Sí**, se avisa al vendedor senior por Slack. Si es **No**, el lead pasa a una lista de seguimiento por mail.
4. **Output:** la fila creada y el mensaje en Slack: *"Nuevo lead premium: Ana Pérez — Palermo — $120.000"*.

**Los 3 símbolos:**

| Símbolo | Significa | Ejemplo |
|---|---|---|
| **Óvalo** | Inicio (Trigger) / Fin (Output) | "Llega un mensaje por WhatsApp" |
| **Rectángulo** | Acción que hace la app o la IA | "Enviar email", "Resumir texto" |
| **Rombo** | Decisión con **solo dos salidas: Sí / No** | "¿Es consulta de compra?" |

**Por qué el pensamiento lógico va antes que la IA:** mucha gente intenta "conectar ChatGPT con Gmail" sin dibujar el flujo antes. El resultado suele ser una IA que responde cosas incoherentes o mails que se envían a las personas equivocadas. Pensar en flujos es ver un proceso como una secuencia ordenada, no como una masa confusa de tareas.

**Frase para cerrar la idea:** *"La lógica es el mapa; la IA es el motor. Un motor potente sin mapa solo te lleva más rápido al lugar equivocado."*

**El caso del PDF que sirve de molde para la PE1 (soporte inmobiliario por WhatsApp):**

- **Trigger:** entra un mensaje nuevo por WhatsApp preguntando por una propiedad.
- **Inputs:** el nombre del contacto y el texto del mensaje.
- **Acción (IA):** un modelo como Claude analiza el mensaje para saber si el cliente busca comprar o alquilar.
- **Decisión:** ¿es compra? Si es **Sí**, se agenda una cita con el vendedor senior. Si es **No**, se envía el PDF con el catálogo de alquileres.
- **Output:** el mensaje de respuesta enviado al cliente.

Remarcá que esta estructura (óvalo → rectángulo de IA → rombo → dos rectángulos → óvalo de fin) es exactamente lo que piden en la Pre-Entrega 1.

**Demo en vivo en draw.io:** diagramá el bot de películas con los 3 símbolos:

```
(Óvalo · Trigger)  Llega un mensaje por Telegram
        ↓            Input: texto del mensaje
[Rectángulo]       La IA interpreta el mensaje y arma la ficha
        ↓
<Rombo>            ¿Quiere registrar una peli?
   Sí ↓                        ↓ No
[Rectángulo]                [Rectángulo]
Guardar la fila             Buscar en el catálogo
en Google Sheets            y responder la consulta
        ↓                        ↓
(Óvalo · Fin/Output)  Respuesta enviada por Telegram
```

Mientras dibujás, señalá dónde está cada pieza (Trigger / Input / Output) y cómo el output de un paso entra como input del siguiente.

**Respaldo:** el diagrama terminado está en `diagrama-bot-peliculas.drawio` (en esta carpeta). Tenelo abierto en otra pestaña de app.diagrams.net por si querés mostrarlo armado.

**Otro caso del PDF, con trigger programado (reporte de ventas de un e-commerce):** viernes 17:00 (trigger) → ventas de la semana desde Shopify o Stripe (inputs) → sumar totales y generar un gráfico (acción) → resumen en el canal de Slack del equipo (output).

**Buena práctica, la regla de la receta de cocina:** horno a 180 °C (trigger) → harina, huevos y azúcar (inputs) → mezclar (acción) → ¿está esponjosa? Si no, seguir batiendo (decisión) → pastel terminado (output). *Si podés explicar tu proceso como una receta, lo podés automatizar.*

**Síntesis del bloque (según el PDF):** pasamos de ver la tecnología como una "caja negra" a verla como una serie de pasos lógicos conectados. El trigger es la chispa que inicia todo; los inputs son la información necesaria y los outputs, el valor entregado; los diagramas de flujo son la mejor herramienta para evitar el caos. Dominar esto es lo que separa a un usuario de herramientas de un Arquitecto de Automatización.

## 93–105 · Práctica 2 + cierre

**Consigna:** con el proceso elegido, escribí primero en texto las 4 piezas con datos concretos (como los de Ana):

```
Trigger:   ...
Inputs:    ...
Acciones / Decisión:  ...
Output:    ...
```

Después hacé el **borrador del diagrama** con los 3 símbolos. Papel y lápiz sirve.

**Tarea para la clase 2:**

- Pasar el diagrama a draw.io, Lucidchart, Canva o Miro.
- Mínimo **5 nodos**: 1 óvalo de Trigger, 2 o más rectángulos, 1 rombo y 1 óvalo de Fin.
- Trigger, Inputs y Output **etiquetados explícitamente**.
- Traerlo para mostrar al principio de la próxima clase.

**Material para profundizar (del PDF):**

- Make, Centro de ayuda: https://help.make.com/
- n8n, documentación: https://docs.n8n.io/
- n8n, Learning paths: https://docs.n8n.io/learning-paths/

---

## Checklist de salida

- [ ] Todos tienen un proceso real elegido.
- [ ] Todos tienen el borrador del diagrama, aunque sea en papel.
- [ ] Quedó clara la tarea: pasarlo a digital con 5 nodos mínimo y etiquetas.
- [ ] Anotaste qué alumnos eligieron procesos demasiado grandes, para revisarlos en la clase 2.
