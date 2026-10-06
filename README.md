# IA Automation · Comisión 2026

Material del docente: guion de cada clase, presentaciones, diagramas y el proyecto ejemplo.

- **Fuente oficial del programa:** `IA Automation.pdf`. Ante cualquier diferencia con las filminas viejas o con `guia-curso.md`, manda el PDF.
- **Formato:** 16 encuentros de ~1 h 45 (dos por módulo). Cada carpeta `Clase N/` tiene su `README.md` con el guion minuto a minuto.
- **Proyecto ejemplo:** una inmobiliaria de alquileres temporarios que se construye en vivo a lo largo del curso. Plan en [Proyecto ejemplo/README.md](Proyecto%20ejemplo/README.md).

---

## Las 16 clases

| Clase | Módulo | Contenido | Pre-entrega | Presentación |
|---|---|---|---|---|
| [1](Clase%201/README.md) | M1 · Fundamentos | Automatización de procesos (BPA) + arquitectura de flujos | | ✅ `Clase01.html` |
| [2](Clase%202/README.md) | M1 · Fundamentos | Ética y seguridad | **Brief PE1** | ✅ `Clase02.html` |
| [3](Clase%203/README.md) | M2 · No-Code y Low-Code | No-Code vs Low-Code + costos y JSON | | pendiente |
| [4](Clase%204/README.md) | M2 · No-Code y Low-Code | Airtable y Omni AI + tu ecosistema | **Brief PE2** | pendiente |
| [5](Clase%205/README.md) | M3 · Make | La interfaz de Make + routers, filtros y transformación | | pendiente |
| [6](Clase%206/README.md) | M3 · Make | JSON y variables + OpenAI y manejo de errores | **Brief PE3** | pendiente |
| [7](Clase%207/README.md) | M4 · n8n | Instalación de n8n + nodos de IA y agentes | | pendiente |
| [8](Clase%208/README.md) | M4 · n8n | HTTP Request + loops y sub-workflows | **Brief PE4** | pendiente |
| [9](Clase%209/README.md) | M5 · Comunicación | Gmail con API + de la app a la API de WhatsApp | | pendiente |
| [10](Clase%2010/README.md) | M5 · Comunicación | WhatsApp (24 h, plantillas, drips, chatbots) + orquestación multicanal | **Brief PE5** | pendiente |
| [11](Clase%2011/README.md) | M6 · Claude | Ventajas de Claude + Message Batches | | pendiente |
| [12](Clase%2012/README.md) | M6 · Claude | Prompt Caching + MCP | **Brief PE6** | pendiente |
| [13](Clase%2013/README.md) | M7 · Agentes y creatividad | Agentes con memoria RAG en Notion + generación de contenido | | pendiente |
| [14](Clase%2014/README.md) | M7 · Agentes y creatividad | Human-in-the-Loop + cuadros de mando | **Brief PE7** | pendiente |
| [15](Clase%2015/README.md) | M8 · Proyecto Integrador | Kickoff: stack, requisitos, 5 entregables, hoja de ruta | **Brief Entrega Final** | pendiente |
| [16](Clase%2016/README.md) | M8 · Proyecto Integrador | Taller de calidad + revisión de avance | | pendiente |

---

## Calendario de pre-entregas

Todas sobre 100 pts; se aprueban con 70.

| Se presenta en | Entrega | Se recomienda cerrar antes de |
|---|---|---|
| Clase 2 | PE1 — Diagrama de arquitectura lógica | Clase 5 |
| Clase 4 | PE2 — Estructura de datos JSON y matriz estratégica | Clase 7 |
| Clase 6 | PE3 — Primer flujo operativo en Make para leads | Clase 9 |
| Clase 8 | PE4 — Arquitectura de agente avanzado en n8n | Clase 11 |
| Clase 10 | PE5 — Estrategia multicanal + pipeline | Clase 13 |
| Clase 12 | PE6 — Diseño de eficiencia e ingeniería de prompts | Clase 15 |
| Clase 14 | PE7 — Sistema de contenido autónomo con HITL | Clase 16 |
| Clase 15 | Entrega Final — Ecosistema autónomo (repo de GitHub) | Cierre de la comisión |

---

## Estado y próximos pasos

### Decisiones tomadas

- **Equipo:** dos profesores, Arturo Grottoli y Romina Diaz. No hay coordinador ni tutor.
- **Proyecto ejemplo:** inmobiliaria de alquileres temporarios (ver [Proyecto ejemplo/README.md](Proyecto%20ejemplo/README.md)).
- **Orquestador principal: n8n**, porque el PDF lo prefiere para la Entrega Final. Make solo en los módulos 3 y 5, porque esas pre-entregas piden un blueprint de Make.
- **Costos:** todo con planes gratuitos y n8n instalado en la máquina del docente. Lo único pago: una recarga mínima de créditos en OpenAI y en Anthropic (~USD 5 cada una, prepago, sin suscripción).
- **Demo de la clase 1:** el bot de películas como intro de "algo que se puede hacer", con video o capturas de respaldo.

### Para acordar con Romina

- [ ] Nombre y destino del negocio del proyecto ejemplo (propuesta: "Cabañas del Lago", Bariloche).
- [ ] Si el proyecto ejemplo se presenta en la clase 1 (después de la demo del bot) o en la clase 2.
- [ ] Si se suma a la clase 2 el bloque de 15 min de panorama del curso (contenido en el README de la clase 2).
- [ ] Alcance de la PE1: cualquier proceso o solo de atención al cliente.
- [ ] Cómo se reparten las clases y las demos.

### Próximos pasos

**De Arturo:**
- [ ] Mandar el mail a Romina con los puntos de arriba.
- [ ] Grabar el video de respaldo de la demo del bot (`Clase 1/demo-bot.mp4`).
- [ ] Terminar los pendientes del bot para la clase 2: rama ❌, `answerCallbackQuery`, borrar el módulo #21.
- [ ] Completar la filmina 2 de la clase 1 cuando estén la descripción de Romina y el N° de comisión.

**De Claude (cuando estén las definiciones):**
- [ ] Filmina "El proyecto que vamos a construir" + diagrama de la inmobiliaria en draw.io.
- [ ] Filminas del panorama del curso en la clase 2 (si se aprueba).
- [ ] Que las presentaciones se adapten al tamaño de la pantalla (no depende de nada; se puede hacer ya).
- [ ] Semana 1 del proyecto ejemplo: datos ficticios (propiedades, consultas, reseñas, FAQ, guía del destino).
- [ ] Presentaciones HTML de las clases 3 a 16.

## Puntos a definir o verificar

- **PE1:** el PDF dice "un proceso cotidiano de tu negocio" en los pasos, pero "un proceso de soporte al cliente" en la ficha del entregable (ver Clase 2).
- **PE4:** el PDF pide elegir uno de tres escenarios, pero la ficha habla de "un proceso de tu elección". El escenario de RR. HH. es alto riesgo según la IA Act (ver Clase 7).
- **Módulo 6:** el PDF nombra modelos y precios que pueden estar desactualizados. Verificar en la documentación de Anthropic antes de las clases 11 y 12.
- **Herramientas:** verificar antes de cada módulo los límites vigentes de los planes gratuitos (Make, n8n Cloud, Airtable, Omni AI, agentes de Notion).
