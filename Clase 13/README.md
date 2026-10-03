# Clase 13 — Agentes con memoria RAG en Notion + Generación de contenido

**Módulo 7 · Diseño de agentes y automatización de la creatividad** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 7

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 7 (Sistema de Contenido Autónomo con
> Supervisión HITL)**, que se presenta en la clase 14. Es la última pre-entrega antes de la Entrega Final.
> (El PDF la nombra de dos formas: también como "Pipeline de Contenido Autónomo con Control de Calidad".)

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar RAG con la analogía del examen a libro abierto.
2. Armar una base de conocimiento **atómica y verificada** en Notion y un agente que responde solo con ella y cita la fuente.
3. Diseñar el ciclo de contenido automatizado: captura → procesamiento IA → formateo → distribución.
4. Salir con **su base de conocimiento** y **el generador desde una idea semilla** (pasos 1 y 2 de la PE7).

---

## Preparación previa (docente)

- [ ] Del proyecto ejemplo, en Notion: una base **"Base de conocimiento"** con páginas atómicas: políticas de reserva y cancelación, horarios de check-in y check-out, qué incluye cada propiedad, guía del destino (restaurantes, excursiones, cómo llegar), preguntas frecuentes.
- [ ] **Verificar cómo se crean hoy los agentes personalizados en Notion** (nombre de la función, plan necesario). Si no está disponible en tu plan, el RAG se arma con n8n: AI Agent + tool de Notion o Airtable.
- [ ] En Airtable, la tabla **Contenido** del proyecto: Idea semilla, Tono, Audiencia, Keywords, Estado (Pendiente / Generando / Para revisar / Aprobado / Publicado), Texto generado, Aprobado (checkbox).
- [ ] Una tabla **Identidad de marca** con muletillas, frases prohibidas y firma.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso del Módulo 6 · dudas de la PE6 |
| 10–45 | **Bloque A — Agentes con memoria RAG en Notion** | Unidad 1 del PDF + demo |
| 45–58 | Práctica 1 | Base de conocimiento RAG (paso 1) |
| 58–63 | Micro-pausa | |
| 63–93 | **Bloque B — Generación de contenido automatizada** | Unidad 2 del PDF + demo |
| 93–105 | Práctica 2 + cierre | Generador desde una idea semilla (paso 2) |

---

## 10–45 · Bloque A — Agentes con memoria RAG en Notion

**Disparador de la charla:** un asistente rapidísimo, que escribe muy bien y lee miles de documentos… pero no sabe nada de tu negocio: ni precios, ni cómo le hablás a tus clientes, ni tus procesos. Si le preguntás, "adivina", y eso son **alucinaciones**. ¿Y si le das una biblioteca privada y le ordenás *"antes de responder, consultá siempre estos libros"*?

**Contenido (según el PDF):**

- **RAG (Retrieval-Augmented Generation):** **recuperar** información de una fuente externa para **aumentar** la respuesta que la IA **genera**.
- **La analogía del bibliotecario:** una IA sin RAG es un estudiante brillante que rinde de memoria y confunde fechas. Con RAG rinde **a libro abierto**: busca el libro exacto, lee el párrafo y responde con evidencia.
- **Por qué importa:** **precisión** (lee tus tarifas, no las inventa) · **contexto actualizado** (si cambiás un proceso en Notion, el agente lo sabe al instante) · **seguridad** (la información queda en tu ecosistema).
- **Notion como cerebro:** el agente no lee todo; hace una **búsqueda semántica** y encuentra las páginas con el significado más cercano. *"¿Qué colores usamos en redes?"* → página "Identidad visual" → *"Según tu manual de marca, Azul Cobalto y Blanco Hueso."*
- **Anatomía del agente:**
  - **Instrucciones:** *"Respondé siempre con la información de mi base de conocimiento. Si no la encontrás, decí que no lo sabés."*
  - **Acceso a datos (memoria de largo plazo):** solo una base de "Conocimiento" curada, no todo Notion.
  - **Memoria del chat (corto plazo):** "¿Cuál es el precio del Premium?" → "500 USD" → "¿Y qué incluye?" (sabe que habla del Premium).
- **Paso a paso (del PDF):**
  1. Crear una base **"[Agente] Base de conocimiento"**: cada fila es un trozo (política de devoluciones, horarios, manual de ventas).
  2. Crear el agente o asistente.
  3. En "Conocimiento" o "Fuentes", vincular esa base.
  4. Prompt: *"Sos un asistente de soporte interno. Ayudá al equipo consultando la base vinculada. Sé conciso y citá siempre la página de donde sacaste la información."*
  5. **Prueba de fuego:** una pregunta que solo esté en un documento recóndito. Si responde citándolo, el RAG funciona.
- **Ejemplo trabajado:** *"¿Cuál es nuestra política de devoluciones para productos digitales?"* → busca → página "Política de devoluciones" → *"Los productos digitales admiten reembolso dentro de los 7 días si no se descargaron. Fuente: Base de conocimiento › Política de devoluciones."*
- **Casos:** una agencia con un agente por cliente (briefs y reportes); asistentes virtuales con los SOPs de cada cliente; RR. HH. respondiendo beneficios y vacaciones.
- **Errores comunes:**
  1. **Información desactualizada:** borradores o notas contradictorias. Una vista **"Verificada"** y que el agente solo vea esa.
  2. **Instrucciones vagas:** "Ayudame con mis dudas" → usa conocimiento general. *"Tu única fuente de verdad es la base vinculada. No uses conocimiento externo."*
  3. **Páginas gigantes (ruido):** una página de 50 páginas confunde. **Piezas atómicas: una página por tema.**

**Demo con el proyecto ejemplo:** el agente de la inmobiliaria sobre la base de Notion:
- *"¿A qué hora es el check-out y qué pasa si me quiero ir más tarde?"* → responde citando la página de políticas.
- *"¿Qué restaurantes recomiendan cerca de la Cabaña Los Coihues?"* → cita la guía del destino.
- **Prueba anti-alucinación:** *"¿Aceptan mascotas?"* (que no esté en la base) → tiene que decir que no lo sabe.

## 45–58 · Práctica 1 — Tu base de conocimiento RAG (paso 1 de la PE7)

1. En Notion (o Airtable), una base con **5 a 10 páginas atómicas** de su proceso (políticas, precios, preguntas frecuentes, tono de marca).
2. Un agente con la instrucción restrictiva y que **cite la página**.
3. La prueba de fuego y la prueba anti-alucinación.

## 63–93 · Bloque B — Automatización completa de generación de contenido

**Disparador de la charla:** lunes a la mañana, una idea para un post: "Cómo organizar tu semana siendo freelancer". Antes: 40 minutos frente al cursor, adaptar para LinkedIn, resumir para X, buscar imagen, programar… dos horas. Ahora: escribís la idea en una celda de Airtable, marcás "Generar" y en menos de 60 segundos tenés el post de LinkedIn, un resumen para Slack y el borrador del newsletter.

**Contenido (según el PDF):**

- **El ciclo del contenido automatizado:**
  1. **Captura (trigger):** donde nace la idea (Airtable o Notion).
  2. **Procesamiento (IA):** Claude u OpenAI transforman la idea.
  3. **Formateo:** se adapta tono y largo a cada red.
  4. **Distribución (output):** Slack, Gmail o una columna "Listo para publicar".
- **La idea semilla:** el input mínimo. No escribís el post; das el "qué". *Idea:* "Beneficios de Notion para equipos chicos" · *Contexto:* "tono divertido, ahorro de tiempo".
- **La arquitectura en Make o n8n:**
  - **Trigger, Airtable como control remoto:** una vista "Por procesar"; el flujo arranca cuando la fila pasa a **"Generando"**. Campos de **Tono**, **Audiencia** y **Keywords** como variables.
  - **Cerebro:** prompt estructurado: *"Actuá como experto en marketing digital. Tomá la idea semilla {{Idea}} y generá tres piezas: 1. Un post de LinkedIn de 200 palabras. 2. Un tweet de 280 caracteres. 3. Un resumen para Slack. Usá un tono {{Tono}}."*
    - OpenAI si necesitás un JSON muy estricto; Claude por su estilo más humano (según el PDF).
  - **Formateador:** nodos de transformación ("Set" en n8n, variables en Make) para separar el bloque en piezas por canal. LinkedIn es profesional, Instagram visual y directo, X rápido.
- **¿Qué delegar?**
  - **Evergreen** (tips, tutoriales): **sí automatizar**.
  - **Actualidad:** **híbrido**; la estructura automática, la opinión humana.
  - **Interacción y empatía** (comentarios, crisis): **no automatizar**.
- **La Thermomix:** vos elegís la receta (estrategia) y ponés los ingredientes (idea semilla); el robot pica y cocina (el flujo); vos probás y ajustás la sal (revisión humana).
- **Evitar el "efecto robot", las variables de marca:** una tabla **Identidad de marca** con **muletillas** ("¡Vamos!", "Ojo a esto"), **lo que odiamos** (frases que la marca nunca diría) y **firma**.
- **Casos:** un community manager gestiona 10 cuentas en vez de 2; un consultor convierte fragmentos de artículos en posts; un e-commerce genera descripción, post de Instagram y WhatsApp VIP para cada producto nuevo.
- **Errores comunes:**

| Error | Por qué | Cómo evitarlo |
|---|---|---|
| Output cortado | Max Tokens muy bajo | Subir Max Tokens |
| Formato amontonado | Un párrafo gigante | "Párrafos cortos, bullets y 2-3 emojis máximo" |
| El flujo no arranca | Filtros estrictos o trigger mal conectado | Run once y revisar el input paso a paso |
| Contenido genérico | Prompt "hacé un post" | Role prompting |

- **Consejos:** primero una sola red, después escalar · n8n para volumen (no cobra por operación) · guardar el texto original en una columna oculta.

**Demo con el proyecto ejemplo:** idea semilla en Airtable: *"Escapada de invierno en la Cabaña Los Coihues: chimenea, vista al lago, ideal para parejas"*, tono "cálido y cercano", audiencia "parejas de 30 a 45". Al pasar a "Generando": Claude genera el post de Instagram, la historia y el mensaje para la lista de WhatsApp, usando la **identidad de marca** y los **datos reales de la propiedad** (tomados de la base, no inventados). El resultado queda en la fila con estado **"Para revisar"**: la aprobación humana es tema de la clase 14.

## 93–105 · Práctica 2 + cierre — Generador desde una idea semilla (paso 2 de la PE7)

1. En Airtable o Notion, la base de control con **Idea semilla, Tono, Audiencia, Estado**.
2. Trigger cuando una fila pasa a **"Generando"**.
3. Nodo de IA con el prompt estructurado y **el contexto privado** (la base de conocimiento de la práctica 1).
4. Que el resultado se escriba en la fila (todavía sin publicar).

**Tarea para la clase 14:** dejar funcionando el generador. En la clase 14 le sumamos la pausa humana y el dashboard.

---

## Checklist de salida

- [ ] Todos tienen una base de conocimiento atómica y un agente que cita la fuente.
- [ ] Todos probaron que el agente no inventa lo que no está en la base.
- [ ] Todos tienen el generador desde una idea semilla (o lo terminan de tarea).
