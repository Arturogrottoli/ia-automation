# Clase 8 — HTTP Request + Loops y sub-workflows + Pre-Entrega 4

**Módulo 4 · Automatización avanzada de agentes con n8n** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 3 y 4 del Módulo 4 y consigna de la Pre-Entrega 4

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Conectar una app sin nodo nativo con HTTP Request: URL, método, headers, autenticación y body.
2. Diagnosticar los errores 400, 401, 403 y 404.
3. Procesar volumen con SplitInBatches y reutilizar lógica con sub-workflows (DRY).
4. Salir con **el diagrama de la PE4 avanzado** y la consigna clara.

---

## Preparación previa (docente)

- [ ] n8n con un nodo HTTP Request de prueba contra `https://reqres.in/api/users?page=2`. Verificar antes que la API responda; si pide una key, usar otra API pública de prueba.
- [ ] Del proyecto ejemplo: un **HTTP Request GET a la API de Airtable** (tabla Propiedades) con la credencial en *Header Auth*, y el loop sobre la tabla Reseñas con un sub-workflow "Analizar reseña".
- [ ] El diagrama de la PE4 del proyecto ejemplo en draw.io, como modelo.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión de los agentes de la clase 7 |
| 10–40 | **Bloque A — HTTP Request** | Unidad 3 del PDF + demo |
| 40–52 | Práctica 3 | API externa + Switch con 2+ caminos (paso 3 de la PE4) |
| 52–57 | Micro-pausa | |
| 57–80 | **Bloque B — Loops y sub-workflows** | Unidad 4 del PDF |
| 80–100 | **Brief PE4** + Práctica 4 | Sub-workflow + rama de error (paso 4) |
| 100–105 | Cierre | Qué viene en el Módulo 5 |

---

## 10–40 · Bloque A — HTTP Request: conectando apps sin integración nativa

**Disparador de la charla:** descubrís una herramienta increíble para gestionar reseñas o un CRM de nicho, vas a n8n… y no tiene nodo. ¿No se puede automatizar? Sí se puede: el nodo HTTP Request es la llave maestra para hablar con casi cualquier software que tenga **API**.

**Contenido (según el PDF):**

- **La analogía del camarero:** vos sos el cliente (tu automatización), la cocina es la app externa. No podés entrar a la cocina; el **camarero (la API)** lleva tu pedido y trae la comida. El nodo HTTP Request es el camarero.
- **Por qué usarlo si hay nodos nativos:** conecta apps nuevas o locales; accede a funciones ocultas (el nodo nativo solo crea, la API también borra o actualiza); control total sobre qué se envía y cómo se recibe.
- **Los 5 ingredientes de una petición:**

| Ingrediente | Qué es | Ejemplo |
|---|---|---|
| **URL** (endpoint) | El destino | `https://api.tu-app.com/v1/clientes` |
| **Método** | La acción | **GET** "dame información" · **POST** "guardá esto" |
| **Headers** | Instrucciones adicionales | `Content-Type: application/json` |
| **Autenticación** | La identificación | API key (en *Header Auth*) |
| **Body** | El contenido (solo en POST) | El JSON con los datos |

- **Primer HTTP Request (demo del PDF):** nodo HTTP Request → **GET** → URL `https://reqres.in/api/users?page=2` → autenticación *None* → **Execute Node** → ver los datos en el panel derecho.
- **¿Por qué está en rojo?**
  - **401 Unauthorized:** la API key está mal, venció o no está en el lugar correcto.
  - **404 Not Found:** URL mal escrita (revisá las barras del final).
  - **400 Bad Request:** le mandaste algo que no entiende (JSON con un error).
  - **403 Forbidden:** la key funciona, pero no tenés permiso para esa acción.
  > Tip: probá la URL en el navegador. Si ahí funciona, el problema es la configuración del nodo.
- **Casos reales:** un asistente virtual conecta la telefonía local para crear tareas en Notion por cada llamada perdida; un marketer manda leads a WhatsApp vía la API de Twilio o Wati; un administrativo baja los movimientos del banco y los manda a Slack.
- **Construcción guiada (del PDF), el molde de cualquier integración:**
  ```
  [Webhook POST] → [Edit Fields: arma el body] → [HTTP Request POST al CRM, Header Auth] → [IF status = 200]
                                                                                          ├─ sí → [Sheets: log OK]
                                                                                          └─ no → [Slack: aviso de error]
  ```
  - La API key va en **Credentials** (`Authorization: Bearer TU_API_KEY`), **nunca** en la URL ni en el body.
  - En Settings del HTTP Request, **Retry On Fail** (2–3 reintentos).
  - Se prueba con el webhook en "Listen for test event" y un POST desde Postman o el formulario.

**Demo con el proyecto ejemplo:** HTTP Request **GET a la API de Airtable** para traer las propiedades (aunque Airtable tenga nodo nativo, sirve para ver los 5 ingredientes con una API real). Mostrá un 401 a propósito (key mal puesta) y cómo se lee en Executions.

## 40–52 · Práctica 3 — API externa + Switch (paso 3 de la PE4)

Sobre su escenario de la PE4:
1. **¿Qué API externa necesita?** (OpenAI, Google Drive, Jira, el CRM, Slack…) Anotarla con su método (GET o POST).
2. **Switch con 2 o más caminos:** ¿qué decide la IA y qué pasa en cada caso? Ej.: reembolso / cupón / escalar.

## 57–80 · Bloque B — Loops y sub-workflows: procesando datos masivos

**Disparador de la charla:** 5.000 leads para que la IA analice y redacte un mail. Si los mandás de golpe: n8n se queda sin memoria, OpenAI te bloquea por rate limit, o el flujo falla a mitad y no sabés cuáles se procesaron.

**Contenido (según el PDF):**

- **El loop, la lavadora de datos:** no metés toda la montaña de ropa de una vez; la separás en **cargas (batches)** y repetís el ciclo.
- **SplitInBatches (Loop Over Items):**
  1. Recibe, por ejemplo, 1.000 filas.
  2. **Batch size** 50 → entrega las primeras 50.
  3. Pasan por los nodos de proceso (ej. ChatGPT).
  4. El último nodo **vuelve** a la entrada lateral del SplitInBatches.
  5. ¿Quedan registros? Sí → las próximas 50. No → sigue adelante.
  - **Ventaja:** en memoria solo hay 50 a la vez, y si falla en el 400 sabés dónde quedó.
- **Sub-workflows, la "salsa secreta" reutilizable:** un flujo independiente llamado por otro con **Execute Workflow**.
  - **DRY (Don't Repeat Yourself):** un "Limpiador de teléfonos" que usan 3 flujos; si cambia la lógica, se cambia en un solo lugar.
  - **Ventajas:** orden visual, aislamiento de errores, reutilizar la IA (un sub-workflow "Análisis de sentimiento con Claude" para YouTube, Amazon y soporte).
- **La arquitectura maestra:** flujo principal (fuente de datos + loop) → Execute Workflow dentro del loop → sub-workflow que procesa un registro y devuelve el resultado.
  - *Ejemplo:* una agencia procesa 2.000 reseñas de 10 en 10; el sub-workflow detecta quejas técnicas con Claude, traduce y guarda en la base de soporte.
- **Errores comunes:**
  - **Loop infinito (el perro que persigue su cola):** olvidar cerrar el círculo hacia el SplitInBatches.
  - **Batch demasiado grande:** error **429 Too Many Requests**. Empezá con **5 a 10** y subí de a poco.
  - **No pasar datos al sub-workflow:** activar **"Send all incoming items"** o mapear los campos.

**Demo con el proyecto ejemplo:** loop sobre la tabla **Reseñas** de la inmobiliaria en batches de 10 → **Execute Workflow** → sub-workflow **"Analizar reseña"** (la IA devuelve sentimiento y tema: limpieza, ubicación, atención) → guarda el resultado en Airtable. Es el anticipo del procesamiento en lote con Claude del Módulo 6.

## 80–100 · Brief de la Pre-Entrega 4: Arquitectura de Agente Avanzado en n8n

**Consigna:** diseñar la arquitectura de un agente avanzado **sin necesidad de construirlo** todavía. Se evalúa el pensamiento arquitectónico.

**Antes de diseñar (consolidación del módulo, según el PDF):**
- **Trazabilidad del dato:** lo que necesitás en un nodo avanzado tiene que venir declarado desde los nodos iniciales.
- **Tipos de datos:** `"5000"` como texto concatena o da error en una regla numérica.
- **Funciones de limpieza:** `parseNumber`, `formatDate` antes de inyectar en la app de destino.

**Paso 1, el escenario:** uno de los tres (e-commerce, RR. HH. o redes). Ver la nota de la clase 7 sobre RR. HH. y sobre si se acepta su propio proceso.

**Paso 2, el diagrama** (Excalidraw, Lucidchart, draw.io o papel) con:
- **Trigger:** qué evento inicia el flujo.
- **Conexiones:** qué herramientas externas consulta (logos o nombres: Google Drive, API de OpenAI…).
- **Lógica (IF / Switch):** al menos dos caminos distintos.
- **Nodo de IA:** dónde la IA decide o procesa texto.
- **Resultado final:** dónde termina la tarea del agente.

**Paso 3, criterios de aceptación:** claridad (inicio y fin lógicos) · indicar qué parte se delega a un **sub-workflow** · un recuadro o rama de **manejo de errores**.

**Molde del PDF (atención al cliente):**
```
[Trigger: llega un email] → [IA: analiza el sentimiento (API de OpenAI)] → [IF / Switch: ¿sentimiento?]
                                                                            ├─ Negativo → [procesar reembolso vía API]
                                                                            └─ Positivo → [enviar cupón de descuento]
                                                                                  ↓
                                                     [Resultado: respuesta enviada + registro en CRM]
⚠ Error: si la API de OpenAI falla → reintento y aviso en Slack
↳ Sub-workflow: "Procesar reembolso" se delega a un flujo aparte
```

**Checklist de entrega:**
- [ ] Trigger claro.
- [ ] Al menos 1 integración externa vía API.
- [ ] Nodo de IA señalado.
- [ ] IF / Switch con al menos 2 caminos.
- [ ] Resultado final claro.
- [ ] Recuadro o rama de manejo de errores.
- [ ] Indicado qué se delega a un sub-workflow.

**Formato:** **una sola imagen legible (PNG/JPG) o PDF**. Si lo armaron en Excalidraw o Lucidchart, exportarlo; no mandar solo el link al tablero. Si va por link, permisos públicos y probar en incógnito.

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Claridad y estructura | Inicio (trigger) y fin lógicos, resultado final claro, fácil de seguir | **25 %** |
| Lógica de decisión | IF / Switch con al menos 2 caminos bien diferenciados | **25 %** |
| Nodo de IA + integración vía API | Dónde decide la IA + al menos una integración externa por API | **30 %** |
| Manejo de errores y sub-workflows | Qué pasa si una conexión falla + qué se delega a un sub-workflow | **20 %** |

**Total: 100 pts · Aprobación: 70 pts**

**Práctica 4 (paso 4 de la PE4):** sumar al diagrama el sub-workflow y la rama de error. Mostrá el diagrama del proyecto ejemplo como referencia.

## 100–105 · Cierre

- **Entrega de la PE4:** se recomienda cerrarla antes de la **clase 11**.
- **Recordatorio:** la PE3 se recomendaba cerrar antes de la clase 9.
- **Adelanto del Módulo 5 (Gmail, Slack y WhatsApp):** que creen un Gmail de prueba, un workspace de Slack gratis y una cuenta de Twilio para el sandbox de WhatsApp.

**Material para profundizar (del PDF):**
- n8n, HTTP Request: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/
- n8n, Webhook: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/
- n8n, credenciales: https://docs.n8n.io/credentials/
- MDN, métodos HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Methods
- n8n, looping: https://docs.n8n.io/flow-logic/looping/
- n8n, sub-workflows: https://docs.n8n.io/flow-logic/subworkflows/

---

## Checklist de salida

- [ ] Todos hicieron un HTTP Request GET que devolvió datos.
- [ ] Todos entienden los 5 ingredientes y los errores 400/401/403/404.
- [ ] Todos tienen el diagrama de la PE4 con trigger, IA, API, Switch, error y sub-workflow (o lo terminan de tarea).
- [ ] Quedaron pedidas las cuentas de Gmail de prueba, Slack y Twilio para la clase 9.
