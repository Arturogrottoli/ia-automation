# Proyecto ejemplo del curso: inmobiliaria de alquileres temporarios

El hilo conductor de **IA Automation**. Lo construye el docente en vivo, un poco en cada clase. Cada
alumno arma el mismo esqueleto con **su propio proceso**, el que elige en la Clase 1.

Fuente oficial del programa: `IA Automation.pdf`. Ante cualquier diferencia, manda el PDF.

---

## El negocio

Una inmobiliaria que alquila **departamentos y cabañas por temporada** en un destino turístico.

- **Nombre y destino:** a definir (ej. "Cabañas del Lago", Bariloche, o "Costa Alquileres", costa atlántica).
- **Catálogo:** 12–15 propiedades ficticias (capacidad, precio por noche, ubicación, servicios, fotos).
- **Lo que llega:** consultas por formulario, mail y WhatsApp con fechas, cantidad de huéspedes y presupuesto.
- **Lo que queda afuera del alcance:** pagos, reservas de vuelos y documentos de identidad (datos sensibles).

### Por qué este rubro

- **Coincide con el PDF.** Los ejemplos del Módulo 1 (Ana Pérez, el formulario, el caso de WhatsApp) y la PE3 (leads) son de inmobiliaria. Las filminas de las clases 1 y 2 sirven casi tal cual.
- **Cubre todos los módulos sin forzar nada:**
  - las consultas son leads con prioridad (M3);
  - WhatsApp es su canal natural (M5);
  - las reseñas de huéspedes dan volumen para procesar en lote (M6);
  - el catálogo y la guía del destino sirven de base para que la IA responda (M7);
  - las fotos de las propiedades dan contenido visual para redes (M7).
- **Riesgo bajo según la IA Act:** es atención al cliente (riesgo limitado). No decide sobre personas.

### El bot de películas

No se descarta. Queda como **gancho** en las clases 1 y 2 ("esto es lo que van a poder hacer") y como
ejemplo real de botón de parada (los botones ✅/❌). No es el proyecto de la clase porque usa otras
herramientas (Sheets, Gemini y Telegram en vez de Airtable/Notion, OpenAI/Claude y Gmail/Slack/WhatsApp).

---

## Las herramientas

| Capa | Herramienta | Para qué |
|---|---|---|
| Cerebro (datos) | **Airtable** (+ Notion en M7) | Propiedades, consultas, reseñas, contenido |
| Orquestación | **n8n** como principal (M4, M6, M7, M8) y **Make** solo en M3 y M5 | Los flujos |
| Inteligencia | **OpenAI** (M3) y **Claude** (M6, M7) | Calificar, responder, resumir, redactar |
| Canales | **Gmail, Slack, WhatsApp** (sandbox de Twilio) | Entrada y salida de mensajes |
| Diagramas | **draw.io** | Arquitectura de cada módulo |
| Entrega final | **GitHub** | Repo con todo integrado |

**Decisión: n8n es el orquestador principal**, porque es el que el PDF prefiere para la Entrega Final.
Make se usa solo en los módulos 3 y 5, porque esas pre-entregas piden un blueprint de Make y las demos
tienen que coincidir. En el Módulo 8, el flujo integrado del proyecto ejemplo queda en n8n.

---

## Qué se construye en cada módulo

| Módulo | Clases | Lo que arma el docente en vivo | Lo que hace cada alumno | Pre-entrega |
|---|---|---|---|---|
| **M1** Fundamentos | 1–2 | Diagrama: consulta → la IA clasifica → decisión → derivación, + gobernanza | Diagrama de su proceso + párrafo de gobernanza | PE1 |
| **M2** No-Code / Low-Code | 3–4 | Base en Airtable: Propiedades, Consultas, Reseñas, con campos de estado + el JSON de una consulta | Su base y su JSON validado | PE2 |
| **M3** Make | 5–6 | Formulario → OpenAI califica la consulta → Router prioridad alta / baja → Error Handler con reintentos | Mismo flujo con sus datos | PE3 |
| **M4** n8n | 7–8 | Agente que responde consultas usando el catálogo (HTTP Request + sub-workflow + rama de error) | Diagrama de su agente | PE4 |
| **M5** Multicanal | 9–10 | Gmail → la IA resume y prioriza → Slack siempre; WhatsApp si es urgente | Su pipeline multicanal | PE5 |
| **M6** Claude | 11–12 | En n8n: procesamiento en lote de 500 reseñas + caché del catálogo · MCP con Claude Desktop · matriz de ahorro | Su diseño de eficiencia | PE6 |
| **M7** Agentes y creatividad | 13–14 | En n8n: guía del destino en Notion para que la IA responda + posts de propiedades con aprobación en Slack + dashboard | Su sistema con aprobación humana | PE7 |
| **M8** Integrador | 15–16 | El flujo de consultas integrado en n8n (lo de M3 y M5 pasado a n8n) + repo de GitHub + video demo | Su Entrega Final | Final |

Cada pre-entrega es un "ladrillo" del proyecto final, como plantea el PDF.

---

## Plan de trabajo

**Antes del curso:** módulos 1 a 5 completos (clases 1 a 10).
**Durante el curso:** módulos 6, 7 y 8, siempre con 2 o 3 semanas de ventaja.

### Quién hace qué

- **Claude:** READMEs de cada clase, filminas HTML, diagramas .drawio, datos ficticios, prompts, JSON,
  esquemas de las bases, borradores de escenarios, guías paso a paso y la guía del proyecto para alumnos.
- **Docente:** crear las cuentas y conectar las herramientas, armar o importar los escenarios, probarlos,
  sacar capturas como respaldo, y revisar y ajustar las clases a su forma de dar.

### Semana 1: base del proyecto + M1 y M2 · ~8–10 h

- [ ] Definir nombre, destino y estilo del negocio
- [ ] Generar los datos ficticios: 12–15 propiedades, 50 consultas de ejemplo, 500 reseñas, preguntas frecuentes, guía del destino
- [ ] Crear las cuentas: Airtable, Make, OpenAI, Anthropic, Slack, Notion, Twilio, GitHub, un Gmail de prueba
- [ ] Adaptar clases 1–2: filmina "El proyecto que vamos a construir" + diagrama de la inmobiliaria en draw.io
- [ ] Guía del proyecto para alumnos: la regla del proceso + casos de respaldo
- [ ] **M2:** armar la base en Airtable (Propiedades, Consultas, Reseñas) e importar los datos
- [ ] **M2:** JSON de una consulta (objeto con un array), validado en jsonlint.com
- [ ] Clases 3–4: README + filminas + materiales

### Semana 2: M3 en Make · ~7–9 h

- [ ] Formulario de consulta (Google Forms o Airtable Form) como trigger
- [ ] OpenAI "Create a Chat Completion" que califica la consulta (prioridad, tipo, resumen) con prompt mapeado a variables
- [ ] Router prioridad alta / baja con filtros sin solapamiento
- [ ] Error Handler Break con 3 reintentos sobre OpenAI
- [ ] Capturas del "Run once" por las dos rutas + exportar el blueprint
- [ ] Clases 5–6: README + filminas + materiales

### Semana 3: M4 en n8n · ~8–10 h

- [ ] Instalar n8n. Como es el orquestador principal y el curso dura unos dos meses, conviene **self-hosted** (Docker en tu máquina o un servidor de ~5–10 €/mes) en lugar de la prueba de n8n Cloud, que vence. Verificar cuánto dura la prueba para avisarles a los alumnos.
- [ ] Agente (AI Agent) con memoria y una tool que consulta el catálogo de Airtable por HTTP Request
- [ ] Switch con 2+ caminos, rama de error y sub-workflow
- [ ] Diagrama del agente (es lo que se entrega en la PE4)
- [ ] Clases 7–8: README + filminas + materiales

### Semana 4: M5 multicanal + ensayo · ~8–10 h

- [ ] Gmail (Watch Emails) → IA que devuelve JSON con resumen + prioridad 1–5
- [ ] Router: Slack siempre; WhatsApp (sandbox de Twilio) si la prioridad es 5
- [ ] Tabla de "¿qué canal uso?" para los escenarios del negocio
- [ ] Clases 9–10: README + filminas + materiales
- [ ] Ensayo completo de la clase 1 (filminas en tu pantalla, demo del bot, draw.io)
- [ ] Margen para imprevistos (lo que más demora suele ser conectar cuentas: Twilio, n8n, permisos de Gmail)

### Durante el curso, semanas 1–2: M6 Claude · ~6–8 h

- [ ] Plantilla de prompt (rol + objetivo + "pensá paso a paso") para analizar reseñas
- [ ] Procesamiento en lote (Message Batches) de las 500 reseñas, con sus tiempos
- [ ] Caché del catálogo + políticas (prefix estático para `cache_control`)
- [ ] Matriz de ahorro con el cálculo del 50 % del lote
- [ ] Demo de MCP (Claude conectado a Airtable o Notion)
- [ ] Clases 11–12: README + filminas + materiales

### Durante el curso, semanas 3–4: M7 agentes y creatividad · ~7–9 h

- [ ] Guía del destino y preguntas frecuentes en Notion como base de conocimiento (RAG)
- [ ] Generador de posts de propiedades desde una "idea semilla" (tono, audiencia, keywords)
- [ ] Pausa de aprobación humana: borrador a Slack o checkbox "Aprobado" en Airtable → solo publica si está aprobado
- [ ] Dashboard con 3–4 KPIs (consultas por prioridad, tasa de aprobación, tasa de error)
- [ ] Clases 13–14: README + filminas + materiales

### Durante el curso, semanas 5–6: M8 integrador · ~10–12 h

- [ ] Pasar a n8n el flujo de consultas que en M3 y M5 se hizo en Make (calificación + multicanal), con su manejo de errores y la pausa de aprobación humana
- [ ] Repo en GitHub: diagrama de arquitectura (PDF), blueprints / JSON, link a la base en modo lectura, capturas, dashboard
- [ ] Test de 5+ ejecuciones incluyendo el "camino infeliz"
- [ ] Video demo de 3 minutos (sin API keys a la vista)
- [ ] Clases 15–16: README + filminas + materiales

**Total estimado:** ~35–40 h antes del curso y ~25 h durante. Es una estimación, no algo medido.

---

## Costos

Casi todo entra en planes gratuitos: Airtable (hasta 1.000 registros), Make (1.000 operaciones por mes),
n8n self-hosted en tu máquina, Slack, Notion, el sandbox de WhatsApp de Twilio y GitHub.

Lo único pago: **~USD 10–20 de créditos de API** de OpenAI y Anthropic para los módulos 3, 6 y 7.
Si n8n va en un servidor en vez de tu máquina, sumar ~5–10 €/mes. n8n Cloud tiene prueba gratuita y
después es pago.

---

## Para los alumnos

- **Con negocio propio:** usan el proceso que eligen en la Práctica 1 de la Clase 1. Ese es su proyecto de todo el curso.
- **Sin negocio propio:** eligen un caso de respaldo con el mismo esqueleto:
  - consultorio: turnos y consultas;
  - e-commerce: reclamos y post-venta;
  - academia de cursos: inscripciones;
  - gimnasio: pruebas gratis y bajas.
- **La regla del proceso:** tiene que tener una entrada de datos, un paso de IA, una decisión y un
  punto de revisión humana. Si cumple eso, sirve para los 8 módulos.
- **A evitar:** procesos donde la IA decide sobre personas (selección de personal, créditos). Caen en
  riesgo alto según la IA Act.

---

## Estructura de esta carpeta

A medida que avance el proyecto:

```
Proyecto ejemplo/
├── README.md          ← este plan
├── datos/             ← CSV ficticios: propiedades, consultas, reseñas, FAQ, guía del destino
├── diagramas/         ← .drawio de cada módulo
├── prompts/           ← prompts de cada paso con IA
├── escenarios/        ← blueprints de Make y workflows de n8n exportados
└── capturas/          ← respaldo visual de cada demo
```

---

## Decisiones pendientes

- [ ] Nombre del negocio y destino
- [ ] Frecuencia de clases (el plan supone 2 por semana)
- [ ] Si la PE1 admite cualquier proceso o solo de atención al cliente (el PDF es ambiguo; ver README de la Clase 2)
