# Clase 5 — La interfaz de Make + Routers, filtros y transformación

**Módulo 3 · Orquestación No-Code con Make** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 3

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 3 (Primer Flujo Operativo en Make
> para Leads)**, que se presenta en la clase 6. El caso guiado de esta clase (Router VIP / Estándar) es
> **práctica no evaluable**, pero deja armado casi todo el escenario de la PE3.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Navegar la interfaz de Make: escenarios, módulos, triggers, acciones y búsquedas.
2. Explicar polling vs instant (webhooks), operaciones, mapping y conexiones.
3. Usar un Router con filtros **sin solapamiento** y una función de transformación.
4. Salir con **su cuenta de Make, una conexión hecha** y el **escenario VIP / Estándar** funcionando.

---

## Preparación previa (docente)

- [ ] Cuenta de Make (plan Free) con la conexión de Google ya autorizada.
- [ ] Un Google Sheet "Leads" con columnas `nombre`, `email`, `presupuesto` (o la tabla de Airtable de la clase 4).
- [ ] Para el proyecto ejemplo: la tabla Consultas de la inmobiliaria con 2 filas de prueba (una de presupuesto alto y una de bajo).
- [ ] Un canal de Slack (o un Gmail) para la alerta VIP.
- [ ] Recordar a los alumnos que traigan la cuenta de Make creada y la captura de su base de la clase 4.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso del Módulo 2 · dudas de la PE2 |
| 10–40 | **Bloque A — La interfaz de Make** | Unidad 1 del PDF + demo |
| 40–55 | Práctica 1 | Cuenta + primer escenario + primera conexión |
| 55–60 | Micro-pausa | |
| 60–85 | **Bloque B — Routers, filtros y transformación** | Unidad 2 del PDF |
| 85–105 | Práctica 2 (guiada) + cierre | Caso VIP / Estándar con "Run once" |

---

## 10–40 · Bloque A — Descubriendo la interfaz de Make

**Disparador de la charla:** un asistente incansable que no duerme, no se olvida de copiar los datos de un mail a la hoja y manda la bienvenida en el segundo exacto en que alguien se registra. Ese asistente es **Make** (antes Integromat): más de 1.000 apps conectables sin código.

**Contenido (según el PDF):**

1. **El escenario, tu lienzo:** una automatización en Make se llama **Escenario**. Es una receta visual: ingredientes (datos), pasos (módulos) y resultado. Se ve el flujo: una línea literal de Gmail a Sheets.
2. **Los módulos, las piezas del puzzle:**
   - **Triggers, el "cuándo":** siempre el primer módulo.
     - **Polling:** Make pregunta cada X minutos "¿hay algo nuevo?" (ej. revisar Gmail cada 10 minutos).
     - **Instant / Webhooks:** la app avisa en el milisegundo en que algo pasa (ej. un pago en Stripe).
   - **Acciones, el "qué":** crean, mueven, borran o modifican datos (ej. mensaje en Slack con el tweet).
   - **Búsquedas (Searches), el "encontrá esto":** traen un dato para usarlo después (ej. ¿este cliente ya tiene suscripción en Airtable?).
3. **Anatomía de una conexión:**
   - **Operaciones:** cada módulo que hace algo con éxito consume una. Trigger + acción una vez = 2 operaciones. Los planes se cobran por operaciones: *hacer más con menos*.
   - **Mapping:** arrastrar la variable `Nombre` del formulario al cuerpo del mail; nunca escribir "Juan" a mano.
   - **Conexiones:** el permiso para entrar a Gmail o Notion, vía **OAuth** ("Iniciar sesión con Google"). Guardan el permiso, no la contraseña, y se pueden revocar.
4. **Primeros pasos (demo en vivo):**
   1. make.com → registrarse (Sign up with Google) → plan **Free**.
   2. Scenarios → **Create a new scenario**.
   3. "+" del centro → buscar Google Sheets → elegir trigger o acción → **Add** conexión → elegir la cuenta → **Permitir**.
   4. Verificar: si el desplegable muestra tus hojas, la conexión funciona.
5. **Errores comunes:**
   1. Empezar con una acción: sin trigger, "Run once" funciona para probar pero el flujo nunca se activa solo.
   2. Confundir búsqueda con acción: "Buscar contacto" no lo crea si no existe.
   3. **Olvidar el interruptor "Scheduling"** (abajo a la izquierda): si está en OFF, el asistente duerme.
6. **Caso de uso, de lead a notificación en tiempo real:** un freelancer pierde leads entre el spam. Trigger *Watch New Responses* en Sheets → *Create a Message* en Slack o WhatsApp. El tiempo de respuesta baja de 4 horas a 30 segundos.

**Mapa vivo ↔ material (del PDF):** si en clase aparecen conceptos de más adelante, ubicalos:
- **APIs / HTTP Request** → Módulo 4 (n8n).
- **Webhooks** → acá (polling vs webhooks) y en el Módulo 4.
- **Idempotencia** → ejecutar algo varias veces da el mismo resultado que una. Importa con los reintentos: si "crear contacto" no es idempotente, un reintento lo duplica. Solución: **buscar antes de crear**, o una clave única.

## 40–55 · Práctica 1 — Cuenta, escenario y primera conexión

1. Crear la cuenta de Make (Free).
2. Crear un escenario nuevo y agregar como trigger **Google Sheets → Watch New Rows** (o Airtable → Watch Records) sobre su base de la clase 4.
3. Autorizar la conexión y verificar que aparezcan sus hojas o tablas.
4. Ponerle nombre al escenario.

## 60–85 · Bloque B — Lógica de flujos: routers, filtros y transformación

**Disparador de la charla:** en una cafetería no todos quieren lo mismo: café para llevar, desayuno, retirar un pedido. Tratar a todos igual es un caos. El mundo real no es una línea recta; es un mapa con bifurcaciones.

**Contenido (según el PDF):**

1. **Bundles, las cajas que viajan:** cada formulario crea una caja con sobres etiquetados (Nombre, Email, Presupuesto) que recorre el escenario.
2. **Router, el gran distribuidor:** divide el flujo en 2+ caminos. **Duplica** la caja: con 3 rutas viajan 3 copias a la vez.
   - **Analogía del cartero:** en vez de ir a Ventas, después a Soporte, después a Finanzas, teletransporta una copia a cada puerta.
   - **Clave:** el Router solo no decide; copia a todos. Lo inteligente lo ponen los filtros.
3. **Filtros, los guardias de seguridad:** una condición sobre la línea punteada entre dos módulos.
   - **Por qué importan:** ahorran operaciones (frenan el spam al principio) y dan precisión (no mandar "Bienvenida VIP" a un suscriptor gratuito).
   - **Anatomía:** **condición** (qué etiqueta mirar) + **operador** (mayor que, contiene, existe) + **valor** (con qué comparar). Ej.: `[Presupuesto] [Es mayor que] [5000]`.
4. **Transformación, el traductor universal:** las apps hablan formatos distintos (`"100 USD"` vs `100`; `2026-05-20` vs "20 de mayo"; `JUAN PEREZ` vs `Juan Perez`).
   - `split` (dividir texto) · `formatDate` (formato de fecha) · `upper` / `lower` (mayúsculas / minúsculas) · `parseNumber` (texto a número).

## 85–105 · Práctica 2 — Caso guiado: calificá tus leads con un Router

Se arma en 20–30 minutos. **Consejo del PDF:** no lo hagan de memoria; prueben después de cada rama.

1. **Trigger:** Google Sheets → Watch New Rows (hoja con `nombre`, `email`, `presupuesto`).
2. **Router** con dos ramas: arriba VIP, abajo Estándar.
3. **Filtro VIP:** label *Lead VIP* · `{{presupuesto}}` **Greater than** `1000`.
4. **Filtro Estándar:** label *Lead Estándar* · `{{presupuesto}}` **Less than or equal to** `1000`.
   > **Clave:** `> 1000` y `≤ 1000`. Con "≥ 1000" en ambos, un lead de exactamente 1000 dispara las dos rutas.
5. **Acción VIP:** Slack → Create a Message (o Gmail): `Nuevo lead VIP: {{upper(nombre)}} — Presupuesto: {{presupuesto}}`.
6. **Acción Estándar:** Google Sheets → Add a Row (o Airtable), mapeando `nombre`, `email`, `presupuesto`.
7. **Run once** con dos filas (1500 y 800): cada lead tiene que encender **una sola** rama.
8. **Renombrar los módulos** (clic derecho → Rename) según lo que hacen: *Lead entrante*, *¿VIP o Estándar?*, *Avisar lead VIP*, *Registrar lead estándar*.

```
[Lead entrante]──→[¿VIP o Estándar?]──┬─(Lead VIP)──────→[Avisar lead VIP]       (Slack/Gmail)
                                      └─(Lead Estándar)─→[Registrar lead estándar] (Sheets)
```

**Demo con el proyecto ejemplo:** el mismo escenario sobre las consultas de la inmobiliaria: si el presupuesto total supera un umbral → aviso a Slack con el nombre en mayúsculas; si no → registro en Airtable.

**Si alguno termina antes, que lo blinde (del PDF):**
- clic derecho en el módulo de Slack → **Add error handler** → **Break**, 3 intentos, 15 segundos;
- en la rama de error, una fila de log en Sheets con fecha, nombre del lead y mensaje de error;
- verificar en **History**.

**Rúbrica de autoevaluación del caso (no evaluable):** estructura con Router 30 % · filtros 25 % · acciones finales 20 % · transformación 15 % · evidencias del Run once 10 %.

**Tarea para la clase 6:** terminar el caso guiado. En la clase 6 se le suma OpenAI y el Error Handler, y queda armada la PE3.

**Material para profundizar (del PDF):**
- Make, centro de ayuda: https://help.make.com/
- Make, cómo empezar: https://www.make.com/en/help/get-started
- Make, functions: https://www.make.com/en/help/functions

---

## Checklist de salida

- [ ] Todos tienen cuenta de Make y una conexión funcionando.
- [ ] Todos probaron el Router con filtros sin solapamiento (o lo terminan de tarea).
- [ ] Todos saben dónde está el interruptor Scheduling y el History.
