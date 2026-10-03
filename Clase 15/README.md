# Clase 15 — Proyecto Integrador: kickoff (Cerebro, Corazón, HITL y Voz)

**Módulo 8 · Proyecto Integrador: tu ecosistema de IA autónomo** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, consigna de la Entrega Final

> El Módulo 8 del PDF no tiene unidades de lectura: es la **consigna de la Entrega Final**. Esta clase la
> presenta completa y arranca la construcción. La clase 16 es un taller de calidad y revisión de avance.
>
> El deck viejo `Proyecto Final.pptx` (raíz) puede servir de apoyo visual; donde no coincida, manda el PDF.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar qué tiene que tener su ecosistema: las **4 categorías de tecnología** y los **requisitos de arquitectura**.
2. Recorrer la hoja de ruta: caso de uso → Cerebro → Corazón → HITL → Voz → prueba y entrega.
3. Conocer los **5 entregables** y cómo se corrigen (20 % cada uno).
4. Salir con **su caso de uso definido** y **el Cerebro empezado**, reutilizando sus pre-entregas.

---

## Preparación previa (docente)

- [ ] El **proyecto ejemplo completo** funcionando de punta a punta para mostrarlo: consulta → IA → HITL → canal → log → dashboard.
- [ ] El **repo de GitHub del proyecto ejemplo** armado con la estructura de entrega (ver abajo), como modelo.
- [ ] Una tabla para relevar en qué estado está cada alumno (qué pre-entregas tiene, qué le falta).

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | El camino recorrido: M1 a M7 |
| 10–30 | **Demo** | El proyecto ejemplo de punta a punta |
| 30–55 | **Bloque A — Qué construir** | Stack, requisitos, 5 entregables, rúbrica |
| 55–60 | Micro-pausa | |
| 60–85 | **Bloque B — La hoja de ruta en 6 pasos** | Del caso de uso a la entrega |
| 85–105 | Práctica | Caso de uso + Cerebro + mapa de pre-entregas |

---

## 0–10 · Apertura: el camino recorrido

Cada pre-entrega fue un ladrillo del proyecto final:

| Módulo | Pre-entrega | Ladrillo del proyecto final |
|---|---|---|
| M1 | Diagrama de arquitectura lógica | El mapa del sistema + gobernanza |
| M2 | JSON + matriz estratégica | El esquema de datos y la elección del stack |
| M3 | Flujo en Make para leads | Orquestación, IA y manejo de errores |
| M4 | Arquitectura de agente en n8n | Agentes, APIs y sub-workflows |
| M5 | Estrategia + pipeline multicanal | La Voz: Gmail, Slack, WhatsApp |
| M6 | Eficiencia y prompts recurrentes | La matriz de costos |
| M7 | Contenido autónomo con HITL | RAG, aprobación humana y dashboard |

## 10–30 · Demo: el proyecto ejemplo de punta a punta

Mostrá la inmobiliaria de alquileres temporarios funcionando, señalando cada pieza de la consigna:
1. **Trigger:** llega una consulta (formulario o mail).
2. **Cerebro:** se registra en Airtable con estado *Pendiente*.
3. **Corazón:** n8n o Make → la IA califica y redacta la respuesta usando el catálogo; **rama de error** si la API falla.
4. **HITL:** la respuesta queda *Procesado por IA* hasta que un humano la aprueba.
5. **Voz:** sale por Gmail (mismo hilo) o WhatsApp (formato internacional); aviso al equipo en Slack.
6. **Log y dashboard:** la fila de log y los KPIs actualizados.
7. **El repo de GitHub** con los entregables.

## 30–55 · Bloque A — Qué hay que construir (según el PDF)

**El proyecto:** un ecosistema funcionando **en vivo** que resuelva un proceso de negocio de punta a punta (ej. gestión de leads, atención al cliente con memoria, propuestas comerciales o pipeline de contenido).

**Las 4 categorías de tecnología (todas obligatorias):**

| Categoría | Opciones |
|---|---|
| **Orquestador** | n8n (preferido) o Make |
| **Base de datos** | Airtable o Notion, como memoria y registro |
| **Procesamiento IA** | OpenAI o Claude, con prompts estructurados y, preferiblemente, agentes o RAG |
| **Canal de salida** | Gmail, Slack o WhatsApp API |

**Requisitos de arquitectura:**
- Se dispara, procesa datos con IA desde la base y entrega un output **sin intervención manual**.
- **Rutas de error** ante datos faltantes o fallos de API.
- Un **punto de validación humana (HITL)** antes de una acción crítica.
- **Nodos con nombres claros**, variables dinámicas y **nada hardcodeado**.

**Los 5 entregables (20 % cada uno; se aprueba con 70):**

| # | Entregable | Qué tiene que tener |
|---|---|---|
| 1 | **Mapa de arquitectura** (PDF) | Triggers, routers, APIs (Gmail/Slack/WhatsApp), nodos de IA y destino de los datos |
| 2 | **Manual operativo de datos** | Esquema de tablas vinculadas de Airtable/Notion (**generado con instrucciones a la IA, Omni AI**) + esquemas JSON de las integraciones, explicados |
| 3 | **Matriz de costos** | Qué modelo por tarea (económico para lo mecánico, Claude para lectura densa, Batches para lo masivo) y el ahorro estimado. *Es un entregable en sí, no solo "limitar tokens".* |
| 4 | **Seguridad y resiliencia** | Minimización de datos + rutas de error (Error Handlers) + puntos de HITL, explicados |
| 5 | **Dashboard de control** | Link público a una Shared View (Notion/Airtable) con KPIs y tasa de errores. *Es más que el link a la base: es un panel.* |

**Además:** el JSON (n8n) o .blueprint (Make) del flujo, el link a la base en modo lectura y capturas de evidencia.

**Formato:** un **repositorio de GitHub** con todo.

**Estructura sugerida del repo** (la del proyecto ejemplo):
```
mi-proyecto/
├── README.md                 ← qué resuelve, cómo funciona, links (base en lectura, dashboard)
├── 1-arquitectura.pdf
├── 2-manual-de-datos.pdf     ← tablas vinculadas + JSON de las integraciones
├── 3-matriz-de-costos.pdf
├── 4-seguridad-y-resiliencia.pdf
├── flujos/                   ← .json de n8n o .blueprint de Make
└── evidencias/               ← capturas de las ejecuciones (incluido el camino infeliz)
```

## 60–85 · Bloque B — La hoja de ruta en 6 pasos (según el PDF)

1. **Elegí tu caso de uso:** un proceso propio o de un cliente ficticio que necesite interpretar lenguaje natural. Ej.: clasificación de leads VIP, triaje de tickets, propuestas comerciales personalizadas. *Para la mayoría: el proceso que vienen trabajando desde el Módulo 1.*
2. **Estructurá el Cerebro (base de datos):**
   - **Campos de estado obligatorios:** *Pendiente*, *Procesado por IA*, *Aprobado por humano*.
   - **Relaciones entre tablas**, para no tener datos aislados.
   - Si hay varias fuentes, la sincronización la maneja el flujo.
3. **Construí el Corazón (orquestación):**
   - **Trigger inteligente:** "From now on" en Gmail o webhooks, para no gastar operaciones.
   - **Motor de IA:** mapear bien la respuesta (ej. `Message.Content`) y **limitar Max Tokens**.
   - **Error handling obligatorio** (Resume o Break): si la API de IA falla, se guarda un registro del error.
4. **Implementá el HITL:** para evitar el **efecto metralleta**, el flujo se detiene antes de la acción crítica y manda una notificación de aprobación (Slack o Email) antes de contactar al cliente.
5. **Conectá la Voz (salida):**
   - **Slack / Gmail:** mapear el **Thread ID**.
   - **WhatsApp:** mensajes proactivos con **plantilla aprobada** y número en **formato internacional (+)**.
6. **Probá, documentá y entregá:**
   - **Test de estrés:** al menos **5 ejecuciones**, incluido el **camino infeliz** (datos incompletos) para verificar filtros y rutas de error.
   - **Video demo de 3 minutos:** trigger, procesamiento y resultado. **Ocultar API keys y credenciales.**
   - Los 5 entregables + archivos técnicos.

**Check de seguridad antes de enviar (del PDF):**
1. ¿Hay un filtro contra bucles infinitos?
2. ¿Los filtros comparan tipos correctos (número con número)?
3. ¿El prompt es dinámico y usa variables del sistema?

## 85–105 · Práctica — Caso de uso + Cerebro

Cada alumno:
1. **Define su caso de uso** en una oración: *"Mi sistema recibe ___, la IA ___, un humano aprueba ___ y sale por ___."*
2. **Mapea sus pre-entregas:** qué ya tiene (diagrama, JSON, flujo de Make, agente, multicanal, matriz, HITL) y qué falta.
3. **Empieza el Cerebro:** las tablas con los **3 campos de estado** y al menos una relación. Si lo hace con Omni AI, que guarde el prompt (lo pide el entregable 2).

**Tarea para la clase 16:** el Cerebro listo y el Corazón conectado (aunque falten la Voz y el HITL). Traer dudas concretas.

---

## Checklist de salida

- [ ] Todos tienen el caso de uso definido en una oración.
- [ ] Todos saben qué pre-entregas reutilizan y qué les falta.
- [ ] Todos conocen los 5 entregables y la estructura del repo.
- [ ] Todos empezaron el Cerebro con los campos de estado.
