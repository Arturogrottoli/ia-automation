# Clase 7 — Instalación de n8n + Nodos de IA y agentes

**Módulo 4 · Automatización avanzada de agentes con n8n** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 4  
**Presentación:** `Clase07.html` (20 filminas, en esta carpeta; se navega con ← → o los botones).

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 4 (Arquitectura de Agente Avanzado
> en n8n)**, que se presenta en la clase 8. La PE4 es un **diagrama**: no hace falta construir el agente,
> pero construirlo ayuda a diseñarlo bien.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Elegir entre n8n Cloud y self-hosted según costo, privacidad y mantenimiento.
2. Construir, ejecutar y verificar un workflow mínimo (Test workflow → OUTPUT → Executions).
3. Distinguir una Basic LLM Chain de un AI Agent y explicar Modelo, Memoria, Tools y el ciclo ReAct.
4. Salir con **su primer AI Agent funcionando** (Chat Trigger + modelo + memoria + una tool).

---

## Preparación previa (docente)

- [ ] n8n listo. Para el proyecto ejemplo, **self-hosted en tu máquina** (Docker o `npx n8n`): gratis y sin límite de ejecuciones. Verificar cuánto dura la prueba de **n8n Cloud**: si vence antes del final del curso, los alumnos van a necesitar plan pago o self-hosted.
- [ ] **Si n8n corre en tu máquina, no tiene dirección pública:** para recibir webhooks de afuera (un formulario, Twilio, Telegram) hace falta un túnel gratuito, como el modo `n8n start --tunnel` (solo para pruebas) o ngrok. Probalo antes de la clase 8, que usa el nodo Webhook.
- [ ] Credencial de OpenAI o Anthropic cargada en n8n.
- [ ] El agente del proyecto ejemplo armado: Chat Trigger → AI Agent (modelo + Window Buffer Memory + tool de Airtable sobre la tabla Propiedades).
- [ ] Pedir a los alumnos que lleguen con la cuenta de n8n creada.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión de la PE3 · de Make a n8n |
| 10–40 | **Bloque A — Instalación y primeros pasos** | Unidad 1 del PDF + primer workflow |
| 40–55 | Práctica 1 | Elegir escenario + trigger (paso 1 de la PE4) |
| 55–60 | Micro-pausa | |
| 60–90 | **Bloque B — Nodos de IA y agentes** | Unidad 2 del PDF + demo |
| 90–105 | Práctica 2 + cierre | Su primer AI Agent (paso 2 de la PE4) |

---

## 10–40 · Bloque A — Instalación de n8n: Cloud vs self-hosted

**Disparador de la charla:** hasta ahora manejaron un auto automático muy cómodo (Make). n8n es un todoterreno que podés tunear y del que sos dueño del garaje: no pagás por kilómetro, pagás por el espacio que ocupás.

**Contenido (según el PDF):**

- **Qué es n8n:** *nodemation*, automatización basada en nodos. Su filosofía es **Fair-Code**: podés ver el código, modificarlo e instalarlo en tu servidor.
- **El nodo, la pieza de Lego:** un nodo puede ser un trigger ("cuando llegue un email"), una acción ("traducí con ChatGPT") o una herramienta ("esperá 5 minutos", "si es inglés, camino A").
- **La gran decisión, como elegir vivienda:**

| | **n8n Cloud** ("departamento amueblado") | **Self-hosted** ("casa propia") |
|---|---|---|
| Inicio | Instantáneo (5 min) | 30–60 min (VPS + Docker) |
| Costo | ~24 €/mes (aprox.) | ~5–10 €/mes de servidor |
| Límite | Por plan (ej. 2.500 ejecuciones/mes en el básico) | Ilimitado |
| Privacidad | Los datos pasan por n8n | 100 % en tu servidor |
| Nodos comunitarios | Limitados | Todos |
| Mantenimiento | Lo hace n8n | Vos: actualizaciones y backups |

  *Recomendación del PDF:* si sos principiante total, empezá con la prueba de Cloud y migrá cuando crezca el volumen.
- **El canvas como tubería de agua:** el grifo (trigger manual, programado o por evento) → las juntas y filtros (nodos de función: limpiar, preguntar a la IA, decidir) → el desagüe (la acción final).
- **JSON, la maleta de datos:** los nodos se pasan JSON y en cualquier punto podés abrir la maleta y ver qué hay.
- **Casos reales:**
  1. Una agencia procesa 50.000 leads por mes con IA: en Zapier o Make serían cientos de dólares; en self-hosted, 10 € de servidor + centavos de API.
  2. Un asistente virtual con datos de salud: en su servidor, los datos nunca salen.
  3. Un emprendedor usa nodos comunitarios para conectar herramientas de IA nuevas.
- **Errores y mejores prácticas:**
  1. **Self-hosted sin backups:** exportá los flujos con regularidad.
  2. **Confundir ejecución con tarea:** en n8n, un flujo de 50 nodos es **1 ejecución**; en Make cada operación cuenta.
  3. **No documentar los nodos:** usá notas y renombrá ("Guardar lead en tabla de ventas", no "Google Sheets").

**Demo en vivo, tu primer workflow (del PDF):**
1. **Add workflow** → canvas en blanco.
2. "+" → **Trigger manually**.
3. "+" → **Edit Fields (Set)** con un campo `saludo` = `Hola n8n`.
4. **Test workflow** → ✓ verde en cada nodo.
5. Clic en Edit Fields → panel **OUTPUT** con el JSON.
6. Menú lateral → **Executions**: fecha, estado y duración de cada corrida.

*El ciclo de n8n:* construir → ejecutar → verificar.

## 40–55 · Práctica 1 — Elegí tu escenario y su trigger (paso 1 de la PE4)

La PE4 pide elegir **uno de tres escenarios** (del PDF):

1. **Atención al cliente e-commerce:** analiza el sentimiento de los mails y decide reembolso o cupón.
2. **Selección de talento (RR. HH.):** lee CVs, los califica según el puesto y agenda entrevistas.
3. **Monitoreo de redes:** busca menciones de una marca, clasifica la importancia y avisa en Slack al departamento que corresponda.

> **Ojo con el escenario 2:** filtrar CVs es **alto riesgo** según la IA Act (lo vimos en la clase 2). Si
> alguien lo elige, que incluya revisión humana antes de descartar o agendar.
>
> **Ambigüedad del PDF:** los pasos dicen "elegí uno de estos tres escenarios", pero la ficha del entregable
> habla de "un proceso de negocio específico de tu elección". Conviene definir si se acepta su propio proceso.

**Consigna:** elegir el escenario, crear la cuenta de n8n y definir el trigger (¿qué evento inicia el flujo?).

## 60–90 · Bloque B — Nodos de IA nativos: LangChain y agentes

**Disparador de la charla:** un asistente al que le decís *"revisá los mails de hoy, encontrá a los interesados en el producto nuevo y agendá una llamada"*. Para eso hay que razonar, usar herramientas y recordar. Antes eran miles de líneas de código; hoy son nodos.

**Contenido (según el PDF):**

- **De cadenas a agentes:**
  - **Basic LLM Chain:** flujo directo; mandás texto, recibís respuesta. Para tareas predecibles (resumir, traducir).
  - **AI Agent:** razona, decide qué herramienta usar y repite hasta resolver.
  - **LangChain** es el estándar para apps de IA; n8n lo traduce a nodos visuales.
- **Los componentes del cerebro:**
  - **Modelo, el motor:** sub-nodo OpenAI Chat Model o Anthropic Chat Model. Se cambia sin rehacer el flujo.
  - **Memoria, el recuerdo:** *Window Buffer Memory*; sin ella, cada mensaje es como hablar con un extraño.
  - **Tools, las manos:** nodos normales (WhatsApp, Gmail, Sheets) conectados como herramientas. *"No sé el precio, pero tengo una herramienta Airtable: voy a preguntar ahí."*
- **El ciclo ReAct (Reason + Act):** input ("¿qué pedidos tengo pendientes?") → pensamiento ("necesito la hoja de pedidos") → acción (consulta) → observación (lee los datos) → pensamiento final → output.
  > **Importante:** si no le conectás la herramienta adecuada, el agente **inventa** o dice que no puede.
- **Tradicional vs agente:**

| | Automatización tradicional | Agente de IA |
|---|---|---|
| Lógica | "Si esto, entonces aquello" (rígida) | Basada en objetivos (flexible) |
| Errores | Se detiene si el dato no es exacto | Puede reintentar o buscar otra vía |
| Input | Campos estructurados | Lenguaje natural |
| Configuración | Muchos filtros y rutas | Un agente con herramientas |

- **Casos de la industria:**
  - **Triaje de soporte:** *Text Classifier* etiqueta Facturación / Error técnico / Ventas → error técnico crea ticket en Jira; ventas avisa por Slack; facturación va a un sub-workflow "Gestión de cobros"; rama de error si Jira falla. **Es exactamente el formato de la PE4.**
  - **Investigación de mercado:** HTTP Request para buscar en la web + Notion; de 20 minutos a 30 segundos por empresa.
- **Errores y mejores prácticas:**
  - **Bucle infinito:** limitar las iteraciones del agente (**5 a 10**).
  - **Instrucciones vagas:** "Sé un buen asistente" falla. System prompt con rol claro: *"Sos un experto en logística. Tu única función es consultar el inventario en Airtable y responder con el stock. Si no encontrás el producto, pedí el código."*
  - **No probar inputs raros:** emojis, quejas. Usá **Test Step** después de cada cambio de prompt.

**Demo con el proyecto ejemplo:** el agente de la inmobiliaria.
- **System message:** *"Sos el asistente de [Nombre del negocio], alquileres temporarios en [destino]. Respondés consultas sobre disponibilidad, capacidad y precios usando SOLO la herramienta Propiedades. Si no encontrás una propiedad que cumpla, decilo y ofrecé alternativas. Nunca inventes precios ni disponibilidad."*
- **Tool:** Airtable (tabla Propiedades), con descripción: *"Usar para buscar propiedades por capacidad y precio."*
- **Prueba:** *"Somos 4, tenemos 100.000 por noche, ¿qué nos recomendás?"* → mostrá en el panel del agente el tool call y la observación (el ciclo ReAct en vivo).
- **Prueba anti-alucinación:** preguntá por algo que no está en el catálogo y mostrá que no inventa.

## 90–105 · Práctica 2 — Tu primer AI Agent (paso 2 de la PE4)

Paso a paso (del PDF):

1. Workflow nuevo → trigger **On chat message** (Chat Trigger).
2. "+" → **AI Agent** (Advanced AI). Los conectores van abajo: Model, Memory, Tool.
3. **Chat Model:** OpenAI o Anthropic, con su API key.
4. **Memory:** Window Buffer Memory (valor por defecto).
5. **Tool:** *Calculator* para empezar (o Google Sheets / Airtable), con nombre y descripción claros.
6. **System Message:** rol, alcance y qué hacer si no sabe.
7. **Test:** *"¿Cuánto es el 15 % de 2.400?"* → ver el tool call.
8. Verificar en el panel: input, pasos intermedios y output.

**Checklist (del PDF):** Chat Model conectado · Window Buffer Memory · una tool con nombre y descripción · system prompt anti-alucinación · test donde usó la tool · diagrama Trigger → AI Agent (Model + Memory + Tools) → Output.

**Tarea para la clase 8:** dejar el agente funcionando y pensar qué API externa necesitaría su escenario.

**Material para profundizar (del PDF):**
- n8n, documentación: https://docs.n8n.io/
- n8n, hosting: https://docs.n8n.io/hosting/
- n8n, learning paths: https://docs.n8n.io/learning-paths/
- n8n, Advanced AI: https://docs.n8n.io/advanced-ai/
- LangChain, agentes: https://python.langchain.com/docs/concepts/agents/

---

## Checklist de salida

- [ ] Todos tienen n8n funcionando (Cloud o self-hosted).
- [ ] Todos corrieron el workflow mínimo y vieron Executions.
- [ ] Todos eligieron escenario para la PE4.
- [ ] Todos tienen un AI Agent con modelo, memoria y una tool (o lo terminan de tarea).
