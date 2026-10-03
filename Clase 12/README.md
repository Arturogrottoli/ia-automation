# Clase 12 — Prompt Caching + Model Context Protocol (MCP) + Pre-Entrega 6

**Módulo 6 · Inteligencia de negocio con Anthropic Claude API** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 3 y 4 del Módulo 6 y consigna de la Pre-Entrega 6

> **Verificar antes de la clase:** precios, mínimo de tokens para cachear y duración del caché en la
> documentación de Anthropic. El PDF da cifras de un modelo anterior (Claude 3.5 Sonnet); los conceptos se
> mantienen, los números pueden haber cambiado.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar Prompt Caching: prefix, cache hit, cache miss y TTL.
2. Aplicar las reglas: lo cacheable al principio, idéntico y con el mínimo de tokens.
3. Explicar MCP (Resources, Tools, Prompts; Host, Client, Server) y en qué se diferencia de RAG y de una API.
4. Salir con **el prefix definido** y **la matriz de ahorro** de su proceso, y la consigna de la **PE6** clara.

---

## Preparación previa (docente)

- [ ] Del proyecto ejemplo: el **prefix** de la inmobiliaria (instrucciones + catálogo de propiedades + políticas de reserva y cancelación + criterios de clasificación de reseñas), de más de 1.024 tokens.
- [ ] Una llamada a la API con `cache_control` que muestre en la respuesta los tokens de escritura y de lectura de caché (primera vez vs segunda).
- [ ] Para la demo de MCP: **Claude Desktop** (o claude.ai) con un conector o servidor MCP a Airtable o Notion apuntando a la base del proyecto. Verificar que funcione.
- [ ] La matriz de ahorro del proyecto ejemplo armada en una hoja de cálculo.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión de plantillas y flujos por lotes |
| 10–40 | **Bloque A — Prompt Caching** | Unidad 3 del PDF + demo |
| 40–52 | Práctica 3 | Definir el prefix cacheable (paso 3 de la PE6) |
| 52–57 | Micro-pausa | |
| 57–80 | **Bloque B — MCP** | Unidad 4 del PDF + demo |
| 80–100 | **Brief PE6** + Práctica 4 | Matriz de ahorro (paso 4) |
| 100–105 | Cierre | Qué viene en el Módulo 7 |

---

## 10–40 · Bloque A — Prompt Caching: optimización de costos en flujos recurrentes

**Disparador de la charla:** un restaurante donde, cada vez que alguien pide el "Especial del Chef", el cocinero va al mercado y pica todo desde cero. 50 pedidos por hora: lento y carísimo. ¿No conviene tener los **ingredientes pre-picados**? Sin caché, cada pregunta sobre el mismo manual hace que Claude lo "lea todo de nuevo" y te lo cobre completo.

**Contenido (según el PDF):**

- **Qué es:** Claude guarda temporalmente las partes de un prompt que mandás con frecuencia. En flujos automatizados solemos mandar mucho contexto repetido: instrucciones del sistema, documentos de referencia, historial de la conversación.
  - *Sin caché:* 10 preguntas sobre el mismo PDF = pagás 10 lecturas completas.
  - *Con caché:* la primera vez precio completo (o un poco más); las 9 siguientes, una fracción.
- **Conceptos:**
  - **Prefix:** la parte de arriba del prompt que no cambia. **Lo cacheable va al inicio.**
  - **Cache hit:** encuentra el contenido guardado. Rápido y barato.
  - **Cache miss:** no está o expiró. Se procesa todo de nuevo.
- **El ahorro (cifras del PDF, Claude 3.5 Sonnet, por millón de tokens):** escritura en caché ~3,75 USD; lectura de caché ~0,30 USD. Un documento de 20.000 tokens consultado 100 veces al mes pasa de ~7,50 USD a ~1 USD. **"Hasta 90 % de ahorro."** *(Verificar precios vigentes.)*
- **Dónde aplicarlo:**
  - **Bot de atención con "cerebro" de empresa:** precios, políticas y horarios siempre al principio del prompt.
  - **Análisis de documentos masivos:** un estado de cuenta de 100 páginas en caché y muchas preguntas chicas.
  - **Escritura con voz de marca:** un manual de identidad verbal de 30 páginas siempre cargado.
- **Reglas de implementación:**
  1. **Estructura jerárquica:** lo cacheable al principio; si el documento va al final, no se aprovecha.
  2. **Puntos de anclaje (breakpoints):** se marca explícitamente "hasta acá, guardalo" (`cache_control`).
  3. **Vida útil (TTL):** normalmente **5 minutos**, y se reinicia con cada uso. En un flujo recurrente, puede estar vivo todo el día.
- **Errores y trampas:**
  - **Cachear prompts chicos:** hace falta un **mínimo de 1.024 tokens** (en modelos como Sonnet). Una oración no se cachea.
  - **Cambiar una palabra al inicio:** "Hola Claude" vs "Buenas tardes Claude" invalida el caché. El prefix tiene que ser **idéntico**.
  - **Esperar ahorro en el primer mensaje:** escribir en caché cuesta ~25 % más. Si el mensaje va una sola vez, no uses caché.

**Demo con el proyecto ejemplo:** el prefix de la inmobiliaria (instrucciones + catálogo + políticas) con `cache_control`. Hacé dos llamadas seguidas con reseñas distintas y mostrá en la respuesta los tokens de **escritura** en la primera y de **lectura** en la segunda. Después cambiá una palabra del prefix y mostrá el cache miss.

## 40–52 · Práctica 3 — Definí tu prefix (paso 3 de la PE6)

1. ¿Qué bloque **largo e idéntico** se repite en todas las llamadas de su proceso? (instrucciones, catálogo, manual, políticas)
2. ¿Llega al mínimo de tokens? (1.000 tokens ≈ 750 palabras)
3. ¿Qué queda **después** del prefix y cambia en cada llamada? (las variables)

## 57–80 · Bloque B — Model Context Protocol (MCP)

**Disparador de la charla:** el asistente más brillante del mundo, pero vive en una habitación sin ventanas, sin teléfono y sin internet. Solo trabaja con los papeles que le pasás por debajo de la puerta. **MCP le pone ventanas, teléfono y manos.**

**Contenido (según el PDF):**

- **Qué es:** un **estándar abierto** (lanzado por Anthropic) para que las apps de IA se conecten a datos y herramientas externas de forma estandarizada.
- **El USB-C de la IA:** antes, cada IA + cada herramienta = una integración a medida. Con MCP, cada herramienta expone sus datos con un **servidor MCP** y cualquier IA que hable el protocolo se "enchufa".
- **Las 3 capacidades:**

| Capacidad | Qué es | Ejemplo |
|---|---|---|
| **Resources** | Información de solo lectura | Políticas en Drive, notas de un cliente en Notion |
| **Tools** | Acciones en el mundo real | Crear una fila en Sheets, mandar un Slack, generar una factura |
| **Prompts** | Plantillas predefinidas | "Analizar resumen semanal": buscar tareas en Notion y resumir |

- **Arquitectura:** **Host** (donde interactuás: Claude Desktop o tu workflow de n8n) → **Client** (habla MCP, vive en el host) → **MCP Server** (traduce el idioma de la herramienta al de MCP) → **datos** locales o remotos.
- **Casos por rol:**
  - *Asistentes virtuales, "la centralita":* Trello, Asana y Notion conectados; *"revisá los pendientes en Asana e informame si hay algo urgente del cliente X en Notion"*.
  - *Marketers:* Sheets (leads) + Gmail (historial) → correos de seguimiento hiper-personalizados.
  - *Freelancers:* conectar el repositorio de código para que la IA ubique el error real.
- **Errores y trampas:**
  1. **"MCP conecta todo":** hace falta que exista un servidor MCP para esa herramienta. La mayoría de las líderes (Notion, Slack, Airtable, HubSpot) ya tienen.
  2. **Confundir MCP con RAG:** RAG es un buscador que le pasa un documento a la IA (una foto del pasado); MCP es una conexión viva y bidireccional que también escribe y ejecuta.
  3. **"MCP reemplaza las APIs":** no; las usa por debajo. Es una capa estándar que facilita que la IA entienda qué puede hacer.

**Demo con el proyecto ejemplo:** en Claude Desktop (o claude.ai) con el conector a la base de la inmobiliaria:
- *"¿Qué propiedades tienen capacidad para 6 o más y cuál es la más barata?"* → Resource / lectura.
- *"¿Cuáles son las 3 reseñas negativas más recientes y de qué propiedad?"*
- Si el conector lo permite, una acción: *"Marcá como 'Respondida' la consulta de Ana Pérez"* → Tool / escritura, con la aprobación que pide Claude antes de ejecutar.

## 80–100 · Brief de la Pre-Entrega 6: Diseño de Eficiencia e Ingeniería de Prompts Recurrentes

**Misión:** diseñar una estrategia de optimización presupuestaria y redactar prompts profesionales con directrices de caché y procesamiento por lotes para tareas masivas no urgentes.

**Pasos (según el PDF):**

1. **Plantilla de prompt** con un **rol** específico y un **objetivo** detallado.
2. La instrucción de razonamiento: **"Pensá paso a paso antes de darme la conclusión"**.
3. **Flujo por lotes (Batch)** para un volumen masivo (ej. 500 contratos o reseñas) y el **cálculo del beneficio** con el 50 % de descuento.
4. El **bloque largo e idéntico** al principio (**prefix**) para activar `cache_control` en ejecuciones recurrentes.

**Formato:** PDF con el diseño de los prompts, las **variables dinámicas delimitadas** y la **matriz de ahorro de costos en tokens**.

**La matriz de ahorro, con el proyecto ejemplo** (reemplazar los precios por los vigentes; acá van como variables):

| Concepto | Fórmula | Ejemplo (500 reseñas) |
|---|---|---|
| Tokens por reseña | prefix + reseña + respuesta | 2.000 (prefix) + 200 (reseña) + 100 (respuesta) |
| Costo normal (sin caché, sin lote) | 500 × (2.200 × P_in + 100 × P_out) | — |
| **Con Batches** | costo normal × **0,5** | **−50 %** |
| Con caché (prefix) | 1 escritura × 2.000 × (P_in × 1,25) + 499 lecturas × 2.000 × (P_in × 0,1) | el prefix pasa a costar ~10 % |
| **Batches + caché** | se combinan ambos descuentos | el "combo ganador" |

> El 0,1 de la lectura y el 1,25 de la escritura son aproximaciones del PDF ("hasta 90 % de ahorro",
> "~25 % de recargo"). Pediles que usen los precios reales del modelo que elijan y que muestren la cuenta.

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Ingeniería de prompts avanzada | "Pensá paso a paso" + rol experto estricto + fuente de verdad en el contenido cacheado | **40 %** |
| Cálculo matemático de eficiencia | Demostración del 50 % de ahorro con Batches y Prompt Caching | **30 %** |
| Modelado del flujo por lotes | Flujo visual o descriptivo con las marcas de tiempo de la automatización | **30 %** |

**Total: 100 pts · Aprobación: 70 pts**

**Práctica 4 (en clase):** cada uno arma su matriz de ahorro con su volumen y los precios del modelo elegido.

## 100–105 · Cierre

- **Entrega de la PE6:** se recomienda cerrarla antes de la **clase 15**.
- **Recordatorio:** la PE5 se recomendaba cerrar antes de la clase 13.
- **Adelanto del Módulo 7:** agentes con memoria (RAG en Notion), generación de contenido y aprobación humana. Que creen una cuenta de **Notion** si no tienen.

**Material para profundizar (del PDF):**
- Anthropic, Prompt Caching: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- Anthropic, precios: https://www.anthropic.com/pricing
- Anthropic, documentación: https://docs.anthropic.com/

---

## Checklist de salida

- [ ] Todos definieron su prefix (largo, idéntico, al principio).
- [ ] Todos entienden MCP y en qué se diferencia de RAG y de una API.
- [ ] Todos tienen la matriz de ahorro en borrador.
- [ ] Todos tienen la consigna y la rúbrica de la PE6 (40/30/30).
