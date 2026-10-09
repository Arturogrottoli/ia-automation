# Clase 4 — Conexiones y Omni AI + Tu ecosistema completo + Pre-Entrega 2

**Módulo 2 · Ecosistema No-Code y Low-Code** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 3 y 4 del Módulo 2 y consigna de la Pre-Entrega 2  
**Presentación:** `Clase04.html` (24 filminas, en esta carpeta; se navega con ← → o los botones).

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar por qué no hay sincronización bidireccional nativa y gratuita entre Google Sheets y Airtable, y qué herramientas puente existen.
2. Usar un prompt específico para que Airtable Omni AI construya una base.
3. Ubicar cada herramienta en su función: Cerebro, Sistema Nervioso, Cara e Inteligencia.
4. Salir con **su base creada en Airtable**, el **JSON validado** y la consigna de la **PE2** clara.

---

## Preparación previa (docente)

- [ ] Cuenta de Airtable con la base del proyecto ejemplo lista (Propiedades, Consultas, Reseñas).
- [ ] **Verificar que Omni AI esté disponible en tu plan de Airtable** y cuántos créditos de IA trae el plan gratuito. Si no está, mostrá el prompt y la base ya armada.
- [ ] El JSON de una consulta del proyecto ejemplo, validado, para mostrar.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso: stack, costos, JSON |
| 10–40 | **Bloque A — Conexiones y Omni AI** | Unidad 3 del PDF + demo |
| 40–55 | Práctica 3 | Construí el Cerebro en Airtable |
| 55–60 | Micro-pausa | |
| 60–80 | **Bloque B — Tu ecosistema completo** | Unidad 4 del PDF |
| 80–100 | **Brief PE2** + Práctica 4 | Consigna, rúbrica, JSON validado |
| 100–105 | Cierre | Qué viene en el Módulo 3 |

---

## 10–40 · Bloque A — Conexiones y Omni AI

**Disparador de la charla:** un cliente te entrega un Google Sheet desordenado con 500 leads. En vez de transcribir durante horas, configurás un flujo que los lleva a Airtable y le pedís a una IA que diseñe la estructura.

**Contenido (según el PDF):**

### 1. Sincronización Google Sheets ↔ Airtable

- No son competidores, trabajan juntos: **Sheets** para recolectar rápido; **Airtable** es el "cerebro" con relaciones y vistas.
- **La verdad sobre la sincronización nativa:** no existe una sincronización bidireccional perfecta y gratuita usando solo los botones de Google o Airtable.
  - **Airtable → Sheets (salida), fácil:** con Automations de Airtable. Trigger "cuando un registro cumple una condición" (Status = Finalizado) → acción "Google Sheets: Append row". Ej.: cada proyecto finalizado se suma al Sheet del contador.
  - **Sheets → Airtable (entrada), la "puerta unidireccional":** Airtable es una oficina con una puerta que solo abre hacia afuera. Para que entre información sola, hace falta un "cartero".
- **Herramientas puente:** **Whalesync** (bidireccional), **Byteline** (simple para freelancers), **Data Fetcher** (extensión que trae datos de Sheets bajo demanda).
- *Regla:* para mandar datos nuevos, automatizaciones internas; para dos archivos espejo, herramienta externa.

### 2. Airtable Omni AI, tu arquitecto digital

- No es un chatbot: es un **motor de generación de aplicaciones**. Le hablás en lenguaje natural y construye tablas, tipos de campo, relaciones y vistas.
- ❌ **Prompt vago:** *"Hazme una base de datos para mi negocio."* → algo genérico que no sirve.
- ✅ **Prompt profesional (del PDF):** *"Crea una base para gestionar un negocio de coaching. Necesito una tabla de Clientes (con email y teléfono), una tabla de Sesiones (con fecha, notas de la sesión y status de pago) y una tabla de Paquetes de Horas. Conecta las sesiones con los clientes y asegúrate de tener una vista de calendario para las citas."*
- **Qué hace:** crea las tablas, define los tipos de campo (email → Email, notas → Long text), vincula registros y genera vistas.
- **Analogía del carpintero mágico:** no le das planos, le decís qué mueble necesitás. Vos seguís siendo el arquitecto; Omni es el constructor más rápido.

### 3. Errores y mejores prácticas

1. **Confundir importar con sincronizar:** importar un CSV es una foto estática; sincronizar es un flujo vivo.
2. **Exceso de confianza en la IA:** revisá siempre la estructura generada (que un precio sea Currency, no Single line text).
3. **No usar guardrails:** decile qué estados exactos querés ("En Proceso", "Pausado", "Terminado") para que cree el Single select como lo necesitás.

**Demo con el proyecto ejemplo:** prompt a Omni AI para la inmobiliaria:

> "Crea una base para una inmobiliaria de alquileres temporarios. Necesito una tabla de Propiedades (nombre,
> tipo cabaña/departamento, capacidad en personas, precio por noche en moneda, ubicación, servicios como
> selección múltiple, fotos como adjunto), una tabla de Consultas (nombre, email, teléfono, fecha de
> entrada, fecha de salida, cantidad de huéspedes, presupuesto en moneda, mensaje, prioridad como selección
> única Alta/Baja, estado como selección única Nueva/Respondida/Reservada/Descartada) vinculada a
> Propiedades, y una tabla de Reseñas (propiedad vinculada, puntaje de 1 a 5, texto, fecha). Agregá una vista
> de Kanban de Consultas por estado."

Después mostrá la revisión: tipos de campo correctos, que el presupuesto sea número o moneda, que los estados estén como los pediste.

## 40–55 · Práctica 3 — Construí el Cerebro (ejercicio del PDF)

**Consigna (7–10 min):** no lo dibujes, hacelo. Es la base que van a usar en el Módulo 3 con Make.

1. Entrar a airtable.com y crear una cuenta gratuita.
2. Crear una base llamada **Ecosistema** con una tabla **Leads**:

| Columna | Tipo de campo |
|---|---|
| Nombre | Single line text |
| Email | Email |
| Presupuesto | Number (o Currency) |
| Estado | Single select: Nuevo, Contactado, Cerrado |

3. Cargar 3 filas inventadas: al menos una con presupuesto alto y otra bajo (sirve para los filtros del M3).
4. **Sacar una captura** de la tabla y guardarla: la van a necesitar en el Módulo 3.

> *Fijate en el tipo de campo, no solo en el nombre.* Si Presupuesto queda como texto, Make no va a poder comparar ni filtrar por monto.

**Si les sobra tiempo:** que adapten la tabla a su propio proceso (con sus variables de la clase 3).

## 60–80 · Bloque B — Ecosistema No-Code y Low-Code: consolidación y futuro

**Disparador de la charla:** tenés una idea que ahorra 10 horas semanales a tu equipo, pero IT tiene 6 meses de espera. Hace una década moría en una servilleta. Hoy es la **democratización del software**.

**Contenido (según el PDF):**

- **Un ecosistema, no una lista:** plataformas de construcción (Airtable, Softr, Bubble) + motores de automatización (Make, Zapier) + fuentes de datos (bases, CRMs) + comunidad (plantillas, plugins, tutoriales).
- **Analogía de la cocina profesional:**
  - programación tradicional: cultivar los vegetales y fabricar los cuchillos antes de cocinar;
  - Low-Code: ingredientes pre-cortados y salsas base, pero hace falta técnica;
  - No-Code: cocina modular de ensamblaje; elegís y combinás siguiendo una receta.
- **Los dos mundos:**
  - **No-Code:** velocidad y accesibilidad; para "citizen developers"; ideal para MVPs y herramientas internas; difícil de forzar.
  - **Low-Code:** extensibilidad y control; para perfiles técnicos; escala y conecta sistemas viejos; más curva y mantenimiento.
- **Por qué ahora:** la demanda de software crece más rápido que los programadores. Las empresas ganan **agilidad**, **reducción de costos** y **alineación con el negocio** (quien conoce el problema construye la solución).
- **Las 4 funciones del ecosistema:**

| Función | Qué hace | Ejemplos |
|---|---|---|
| **Cerebro** | Donde vive el dato | Airtable, Google Sheets, Smartsheet, Notion |
| **Sistema Nervioso** | Mueve los datos | Make, Zapier, Power Automate |
| **Cara** | Lo que el usuario ve y toca | Softr, Glide, Bubble |
| **Inteligencia** | Procesa, resume, genera | GPT de OpenAI, Claude |

- **El recorrido del dato (ejercicio de 2 min del PDF):** un lead entra en Airtable (Cerebro) → Make lo detecta y lo manda a Slack (Sistema Nervioso) → el equipo lo consulta en Softr (Cara). *¿Dónde ponés la Inteligencia?* Ej.: que Make le pida a la IA clasificar el lead por prioridad antes de avisar.
- **Errores y trampas:**
  1. **Ceguera de planificación:** "como no hay código, no hace falta diseñar". Sin diagrama, caos.
  2. **Subestimar el modelado de datos:** texto en una columna de moneda → flujos que fallan en silencio.
  3. **Efecto Frankenstein:** 15 herramientas cuando una robusta hace el 80 %. Cada conexión es un punto de falla.
  4. **Ignorar los límites de ejecución:** un flujo que corre cada minuto sin necesidad agota el presupuesto en un día.
- **El futuro, la IA como traductor universal:** ya podés pedir *"un flujo que tome los mails de soporte, analice el sentimiento y, si es urgente, lo ponga en Slack y cree un ticket en Airtable"*. Igual hay que entender la estructura (JSON) para dar mejores instrucciones.
- **Puntos clave:** No-Code prioriza velocidad; Low-Code, flexibilidad. Un ecosistema necesita cerebro, cuerpo y sistema nervioso. La eficiencia depende de entender los costos por uso. JSON es el pegamento universal.

**Proyecto ejemplo:** mostrá el ecosistema de la inmobiliaria con las 4 funciones: Airtable (Cerebro) · Make y n8n (Sistema Nervioso) · Slack, WhatsApp y un portal (Cara) · OpenAI y Claude (Inteligencia).

## 80–100 · Brief de la Pre-Entrega 2: Estructura de Datos JSON y Matriz Estratégica

**Misión:** analizar un proceso de negocio, justificar técnicamente el stack elegido y estructurar sus variables en JSON.

**Pasos:**

1. Tomá el proceso del Módulo 1 y desglosá sus pasos.
2. Escribí una **justificación de mínimo 100 palabras**: ¿No-Code (Zapier/Make) o Low-Code (n8n)? Basada en **flexibilidad, velocidad y límites técnicos** (y costos).
3. En un editor de texto simple, creá un **Objeto principal `{ }` que contenga un Array `[ ]`** (lista de elementos relacionados de la tarea).
4. Comillas dobles en claves y textos; sin comas huérfanas al final.
5. **Validá en jsonlint.com.**

**Formato:** PDF con la justificación y la estructura de datos validada.

**Ejemplo con el proyecto ejemplo** (mostrarlo validado en jsonlint):

```json
{
  "consulta_id": "C-0042",
  "nombre": "Ana Pérez",
  "email": "ana@mail.com",
  "fecha_entrada": "2027-01-10",
  "fecha_salida": "2027-01-17",
  "huespedes": 4,
  "presupuesto_por_noche": 120000,
  "prioridad": "Alta",
  "propiedades_sugeridas": [
    {"nombre": "Cabaña Los Coihues", "capacidad": 4, "precio_por_noche": 110000},
    {"nombre": "Depto Centro Cívico", "capacidad": 5, "precio_por_noche": 95000}
  ]
}
```

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Sintaxis y formato JSON | 100 % válido en jsonlint.com: comillas dobles, sin comas huérfanas | **40 %** |
| Modelado relacional de datos | Al menos un Objeto `{ }` y un Array `[ ]` de elementos anidados descriptivos | **30 %** |
| Justificación estratégica No-Code/Low-Code | Párrafo de mínimo 100 palabras sobre flexibilidad, velocidad, límites y costos | **30 %** |

**Total: 100 pts · Aprobación: 70 pts**

**Práctica 4 (en clase):** cada uno arma su JSON y lo valida en jsonlint. Que lo peguen en el chat los primeros que tengan "Valid JSON".

## 100–105 · Cierre

- **Entrega de la PE2:** se recomienda cerrarla antes de la **clase 7**.
- **Adelanto del Módulo 3 (Make):** la base de Airtable que crearon hoy es la que van a conectar con su primer escenario. Que traigan la captura.
- Que creen su **cuenta gratuita de Make** antes de la clase 5.

---

## Checklist de salida

- [ ] Todos tienen la base creada en Airtable (y la captura).
- [ ] Todos tienen un JSON con objeto + array validado en jsonlint.
- [ ] Todos entienden la consigna y la rúbrica de la PE2 (40/30/30, aprueba con 70).
- [ ] Quedó pedida la cuenta de Make para la clase 5.
