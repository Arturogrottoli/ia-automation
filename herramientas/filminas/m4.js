const { S, badge, note, bullets, tiles, table, code, twoTiled, split, flow, build } = require("./lib");

// ================= CLASE 7 =================
build(7, "Clase 07 - Instalación de n8n + Nodos de IA y Agentes", [
  S.cover(7, 4, "n8n: Instalación, Nodos de IA y Agentes", "Del auto automático al todoterreno: la herramienta que podés instalar en tu propia máquina, y los agentes que razonan y usan herramientas"),
  S.recap(
    [
      ["fa-robot", "En Make conectamos <strong>OpenAI</strong> con un prompt que devuelve una palabra exacta."],
      ["fa-shield-halved", "Blindamos el flujo con <strong>Error Handlers</strong>: Break con 3 reintentos."],
      ["fa-calendar-check", "La <strong>PE3</strong> se recomienda entregar antes de la clase 9."],
    ],
    "Hoy pasamos de No-Code a Low-Code: llegó n8n."
  ),
  S.objetivos([
    ["fa-scale-balanced", "Elegir entre <strong>n8n Cloud y self-hosted</strong> según costo, privacidad y mantenimiento."],
    ["fa-play", "Construir, ejecutar y verificar un workflow mínimo: Test workflow → OUTPUT → Executions."],
    ["fa-brain", "Distinguir una <strong>Basic LLM Chain</strong> de un <strong>AI Agent</strong> y explicar Modelo, Memoria, Tools y ReAct."],
    ["fa-flag-checkered", "Salir con <strong>tu primer AI Agent</strong> funcionando."],
  ]),
  S.transition("Tema 01", "Instalación de n8n: Cloud vs Self-Hosted", "Hasta ahora manejaste un auto automático muy cómodo (Make). n8n es un todoterreno que podés tunear y del que sos dueño del garaje: no pagás por kilómetro, pagás por el espacio."),
  S.content(
    "¿Qué es n8n?",
    split(
      badge("Fair-Code: podés ver el código, modificarlo e instalarlo", "tip", "fa-code-fork") +
        bullets([
          ["fa-circle-nodes", "<strong>nodemation</strong>: automatización basada en nodos, como Make, pero con otra filosofía."],
          ["fa-cubes", "<strong>El nodo, la pieza de Lego:</strong> un trigger (\"cuando llegue un email\"), una acción (\"traducí con ChatGPT\") o una herramienta (\"esperá 5 minutos\")."],
        ]),
      ["fa-faucet", "El canvas como tubería de agua", "El grifo (trigger) → las juntas y filtros (nodos que limpian, preguntan a la IA o deciden) → el desagüe (la acción final). Los datos viajan como una maleta de JSON."]
    )
  ),
  S.content(
    "La Gran Decisión: Cloud o Self-Hosted",
    table(
      ["", "n8n Cloud · \"departamento amueblado\"", "Self-hosted · \"casa propia\""],
      [
        ["Inicio", "Instantáneo (5 min)", "30–60 min (Docker en tu máquina o un servidor)"],
        ["Costo", "~24 €/mes (aprox.), con prueba gratuita", "Gratis en tu máquina · ~5–10 €/mes en un servidor"],
        ["Límite", "Por plan (ej. 2.500 ejecuciones/mes)", "Ilimitado"],
        ["Privacidad", "Los datos pasan por n8n", "100 % en tu servidor"],
        ["Mantenimiento", "Lo hace n8n", "Vos: actualizaciones y backups"],
      ]
    ) + note("Si sos principiante total, empezá con la prueba de Cloud y migrá cuando crezca el volumen.")
  ),
  S.content(
    "Casos Reales y Errores Comunes",
    table(
      ["Caso / error", "Qué pasa"],
      [
        ["Agencia con 50.000 leads/mes", "En Zapier o Make serían cientos de dólares; self-hosted: 10 € de servidor + centavos de API."],
        ["Asistente con datos de salud", "En su propio servidor, los datos nunca salen."],
        ["Self-hosted sin backups", "Si el servidor falla, perdés los flujos. Exportalos con regularidad."],
        ["Ejecución ≠ tarea", "En n8n, un flujo de 50 nodos es <strong>1 ejecución</strong>. En Make, cada operación cuenta."],
        ["No documentar los nodos", "Renombrá: \"Guardar lead en tabla de ventas\", no \"Google Sheets\"."],
      ]
    )
  ),
  S.content(
    "Demo: tu Primer Workflow",
    badge("En vivo en n8n · sin credenciales", "live", "fa-play") +
      bullets([
        ["fa-1", "<strong>Add workflow</strong> → canvas en blanco."],
        ["fa-2", "\"+\" → <strong>Trigger manually</strong>: el grifo para probar a mano."],
        ["fa-3", "\"+\" → <strong>Edit Fields (Set)</strong> con un campo <code>saludo</code> = <code>Hola n8n</code>."],
        ["fa-4", "<strong>Test workflow</strong> → ✓ verde en cada nodo."],
        ["fa-5", "Clic en el nodo → panel <strong>OUTPUT</strong> con el JSON. Menú lateral → <strong>Executions</strong>."],
      ]) +
      note("El ciclo de n8n: construir → ejecutar → verificar.")
  ),
  S.content(
    "Práctica 1: Elegí tu Escenario (PE4)",
    badge("Paso 1 de la Pre-Entrega 4 · 15 minutos", "live", "fa-flask-vial") +
      tiles([
        ["fa-cart-shopping", "Atención al cliente e-commerce", "Analiza el sentimiento de los mails y decide reembolso o cupón."],
        ["fa-user-tie", "Selección de talento (RR. HH.)", "Lee CVs, los califica y agenda entrevistas. <strong>Ojo:</strong> es alto riesgo según la IA Act; sumá revisión humana."],
        ["fa-hashtag", "Monitoreo de redes", "Busca menciones de una marca, clasifica la importancia y avisa en Slack."],
      ]) +
      note("Elegí el escenario, creá tu cuenta de n8n y definí el trigger: ¿qué evento inicia el flujo?")
  ),
  S.brk(),
  S.transition("Tema 02", "Nodos de IA Nativos: LangChain y Agentes", "Un asistente al que le decís \"revisá los mails de hoy, encontrá a los interesados y agendá una llamada\". Hay que razonar, usar herramientas y recordar. Hoy son nodos."),
  S.content(
    "De Cadenas a Agentes",
    twoTiled(
      ["fa-link", "Basic LLM Chain", "<p>Flujo directo: mandás texto a la IA y recibís una respuesta.</p><p style=\"margin-top: 12px;\">Para tareas <strong>predecibles</strong>: resumir, traducir.</p>"],
      ["fa-robot", "AI Agent", "<p>Un sistema que <strong>razona</strong>: evalúa el pedido, decide qué herramienta usar y repite hasta resolver.</p><p style=\"margin-top: 12px;\">LangChain es el estándar; n8n lo traduce a nodos visuales.</p>"]
    )
  ),
  S.content(
    "Los Componentes del Cerebro Digital",
    tiles([
      ["fa-microchip", "Modelo — el motor", "OpenAI Chat Model o Anthropic Chat Model. Se cambia sin rehacer el flujo."],
      ["fa-memory", "Memoria — el recuerdo", "Window Buffer Memory. Sin ella, cada mensaje es como hablar con un extraño."],
      ["fa-hand", "Tools — las manos", "Nodos normales (Gmail, Sheets, Airtable) conectados como herramientas. \"No sé el precio, pero puedo preguntar en Airtable.\""],
    ])
  ),
  S.content(
    "El Ciclo de Razonamiento ReAct",
    `<div class="flow">${["Input|\"¿Qué pedidos tengo pendientes?\"", "Pensamiento|\"Necesito la hoja de pedidos\"", "Acción|Consulta Google Sheets", "Observación|Lee los datos", "Output|\"Tenés 2: Juan y María\""]
      .map((t, k) => {
        const [tag, txt] = t.split("|");
        return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${k === 0 || k === 4 ? "oval" : "rect"}" style="width: 170px;">${txt}</div></div>`;
      })
      .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>` +
      `<p class="flow-legend"><strong>Reason + Act:</strong> si no le conectás la herramienta adecuada, el agente <strong>inventa</strong> o dice que no puede.</p>`
  ),
  S.content(
    "Automatización Tradicional vs Agente",
    table(
      ["", "Tradicional", "Agente de IA"],
      [
        ["Lógica", "\"Si esto, entonces aquello\" (rígida)", "Basada en objetivos (flexible)"],
        ["Errores", "Se detiene si el dato no es exacto", "Puede reintentar o buscar otra vía"],
        ["Input", "Campos estructurados", "Lenguaje natural"],
        ["Configuración", "Muchos filtros y rutas", "Un agente con herramientas"],
      ]
    ) + note("Caso del programa: triaje de soporte. Text Classifier → Switch (técnico / ventas / facturación) → Jira, Slack o un sub-workflow. Es el formato de la PE4.")
  ),
  S.content(
    "Demo: el Agente de la Inmobiliaria",
    split(
      badge("Proyecto ejemplo · en vivo en n8n", "live", "fa-play") +
        bullets([
          ["fa-gear", "<strong>System:</strong> \"Respondés consultas usando SOLO la herramienta Propiedades. Nunca inventes precios ni disponibilidad.\""],
          ["fa-database", "<strong>Tool:</strong> Airtable, tabla Propiedades: \"Usar para buscar por capacidad y precio\"."],
          ["fa-comments", "<strong>Prueba:</strong> \"Somos 4, tenemos 100.000 por noche, ¿qué nos recomendás?\" → miramos el tool call."],
        ]),
      ["fa-shield-halved", "Prueba anti-alucinación", "Preguntamos por algo que no está en el catálogo. Un buen agente dice que no lo tiene y ofrece alternativas."]
    )
  ),
  S.content(
    "Errores y Mejores Prácticas",
    table(
      ["Error", "Mejor práctica"],
      [
        ["Bucle infinito", "Limitar las iteraciones del agente: <strong>5 a 10</strong> pasos."],
        ["Instrucciones vagas", "\"Sé un buen asistente\" falla. Rol claro: \"Tu única función es consultar el inventario y responder el stock.\""],
        ["No probar inputs raros", "Emojis, quejas, otro idioma. Usá Test Step después de cada cambio de prompt."],
      ]
    )
  ),
  S.content(
    "Práctica 2: tu Primer AI Agent",
    badge("Paso 2 de la Pre-Entrega 4 · 15 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-comments", "Trigger <strong>On chat message</strong> → nodo <strong>AI Agent</strong> (los conectores van abajo)."],
        ["fa-microchip", "<strong>Chat Model</strong> (OpenAI o Anthropic) + <strong>Window Buffer Memory</strong>."],
        ["fa-calculator", "<strong>Tool:</strong> Calculator para empezar, con nombre y descripción claros."],
        ["fa-gear", "<strong>System Message:</strong> rol, alcance y qué hacer si no sabe."],
        ["fa-vial", "Test: \"¿Cuánto es el 15 % de 2.400?\" → ver el tool call en el panel."],
      ]) +
      note("Tarea para la clase 8: dejar el agente funcionando y pensar qué API externa necesita tu escenario.")
  ),
  S.links([
    ["fa-book", "n8n — Documentación", "Conceptos, nodos e integraciones.", "docs.n8n.io"],
    ["fa-server", "n8n — Hosting", "Cómo instalar y elegir tu opción.", "docs.n8n.io/hosting"],
    ["fa-robot", "n8n — Advanced AI", "AI Agent, modelos, memoria y tools.", "docs.n8n.io/advanced-ai"],
  ]),
  S.dudas(),
]);

// ================= CLASE 8 =================
build(8, "Clase 08 - HTTP Request + Loops y Sub-Workflows", [
  S.cover(8, 4, "HTTP Request, Loops y Sub-Workflows", "Conectar cualquier app aunque no tenga nodo, procesar miles de registros sin romper nada, y diseñar la arquitectura de tu agente: la Pre-Entrega 4"),
  S.recap(
    [
      ["fa-server", "n8n: Cloud o self-hosted; <strong>1 ejecución</strong> por flujo, no por nodo."],
      ["fa-robot", "AI Agent = Modelo + Memoria + Tools, razonando con el ciclo <strong>ReAct</strong>."],
      ["fa-shield-halved", "Sin la herramienta correcta, el agente inventa. System prompt claro y límite de iteraciones."],
    ],
    "Hoy: conectar lo que no tiene nodo y procesar volumen."
  ),
  S.objetivos([
    ["fa-plug", "Conectar una app sin nodo nativo con <strong>HTTP Request</strong>: URL, método, headers, autenticación y body."],
    ["fa-bug", "Diagnosticar los errores <strong>400, 401, 403 y 404</strong>."],
    ["fa-layer-group", "Procesar volumen con <strong>SplitInBatches</strong> y reutilizar lógica con <strong>sub-workflows</strong>."],
    ["fa-flag-checkered", "Salir con <strong>el diagrama de la PE4</strong> avanzado y la consigna clara."],
  ]),
  S.transition("Tema 01", "HTTP Request: Conectando Apps sin Integración Nativa", "Encontrás una herramienta increíble para gestionar reseñas, vas a n8n… y no tiene nodo. ¿No se puede automatizar? Sí se puede: el HTTP Request es la llave maestra."),
  S.content(
    "La Analogía del Camarero",
    split(
      badge("Vos sos el cliente; la app externa es la cocina", "tip", "fa-utensils") +
        bullets([
          ["fa-door-closed", "No podés entrar a la cocina. El <strong>camarero (la API)</strong> lleva tu pedido y te trae la comida."],
          ["fa-bell-concierge", "El nodo <strong>HTTP Request</strong> es el camarero: le das una nota y te trae los datos."],
        ]),
      ["fa-star", "Por qué usarlo si hay nodos", "Conecta apps nuevas o locales, accede a funciones ocultas (el nodo nativo solo crea; la API también borra o actualiza) y da control total."]
    )
  ),
  S.content(
    "Los 5 Ingredientes de una Petición",
    table(
      ["Ingrediente", "Qué es", "Ejemplo"],
      [
        ["URL (endpoint)", "El destino", "https://api.tu-app.com/v1/clientes"],
        ["Método", "La acción", "<strong>GET</strong> \"dame información\" · <strong>POST</strong> \"guardá esto\""],
        ["Headers", "Instrucciones adicionales", "Content-Type: application/json"],
        ["Autenticación", "La identificación", "API key en Header Auth"],
        ["Body", "El contenido (solo en POST)", "El JSON con los datos"],
      ]
    )
  ),
  S.content(
    "¿Por Qué mi Nodo Está en Rojo?",
    tiles([
      ["fa-key", "401 Unauthorized", "La API key está mal, venció o no está donde va."],
      ["fa-map-location-dot", "404 Not Found", "URL mal escrita. Revisá las barras del final."],
      ["fa-file-circle-xmark", "400 Bad Request", "Le mandaste algo que no entiende: JSON con un error."],
      ["fa-ban", "403 Forbidden", "La key funciona, pero no tenés permiso para esa acción."],
    ]) + note("Tip: probá la URL en el navegador. Si ahí funciona, el problema es la configuración del nodo.")
  ),
  S.content(
    "El Molde de Cualquier Integración",
    code(`[Webhook POST] → [Edit Fields: arma el body] → [HTTP Request POST, Header Auth] → [IF status = 200]
                                                                                   ├─ sí → [Sheets: log OK]
                                                                                   └─ no → [Slack: aviso de error]`, 14) +
      bullets([
        ["fa-lock", "La API key va en <strong>Credentials</strong> (Authorization: Bearer …), <strong>nunca</strong> en la URL ni en el body."],
        ["fa-rotate-right", "En Settings del HTTP Request: <strong>Retry On Fail</strong> (2–3 reintentos)."],
        ["fa-vial", "Se prueba con el webhook en \"Listen for test event\" y un POST desde el formulario o Postman."],
      ])
  ),
  S.content(
    "Demo: la API de Airtable con HTTP Request",
    split(
      badge("Proyecto ejemplo · en vivo en n8n", "live", "fa-play") +
        bullets([
          ["fa-download", "<strong>GET</strong> a la API de Airtable para traer las propiedades (aunque tenga nodo nativo, sirve para ver los 5 ingredientes con una API real)."],
          ["fa-key", "Credencial en <strong>Header Auth</strong>."],
          ["fa-bug", "Forzamos un <strong>401</strong> y lo leemos en Executions."],
        ]),
      ["fa-laptop", "Si n8n corre en tu máquina", "Para recibir webhooks de afuera hace falta una dirección pública: un túnel como n8n --tunnel (solo pruebas) o ngrok."]
    )
  ),
  S.content(
    "Práctica 3: API Externa + Switch",
    badge("Paso 3 de la Pre-Entrega 4 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-plug", "¿Qué <strong>API externa</strong> necesita tu escenario? (OpenAI, Google Drive, Jira, el CRM, Slack…) Anotala con su método."],
        ["fa-code-branch", "<strong>Switch con 2 o más caminos:</strong> ¿qué decide la IA y qué pasa en cada caso? Ej.: reembolso / cupón / escalar."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Loops y Sub-Workflows: Datos Masivos", "5.000 leads para que la IA los analice. Si los mandás de golpe: n8n se queda sin memoria, OpenAI te bloquea, o el flujo falla a mitad y no sabés cuáles se procesaron."),
  S.content(
    "SplitInBatches: la Lavadora de Datos",
    split(
      badge("No metas toda la montaña de ropa de una vez", "tip", "fa-soap") +
        bullets([
          ["fa-1", "Recibe, por ejemplo, 1.000 filas y entrega las primeras 50 (<strong>batch size</strong>)."],
          ["fa-2", "Pasan por los nodos de proceso (ej. la IA)."],
          ["fa-3", "El último nodo <strong>vuelve</strong> a la entrada del SplitInBatches."],
          ["fa-4", "¿Quedan registros? Sí → las próximas 50. No → sigue adelante."],
        ]),
      ["fa-memory", "Por qué ahorra recursos", "En memoria hay solo 50 a la vez. Y si falla en el registro 400, sabés exactamente dónde quedó y no perdés los anteriores."]
    )
  ),
  S.content(
    "Sub-Workflows: tu \"Salsa Secreta\" Reutilizable",
    split(
      badge("DRY: Don't Repeat Yourself", "", "fa-recycle") +
        bullets([
          ["fa-phone", "Un \"Limpiador de teléfonos\" que usan 3 flujos con <strong>Execute Workflow</strong>. Si cambia la lógica, se cambia en un solo lugar."],
          ["fa-broom", "Orden visual, aislamiento de errores y reutilizar la IA (un \"Análisis de sentimiento con Claude\" para todo)."],
        ]),
      ["fa-sitemap", "La arquitectura maestra", "Flujo principal (fuente de datos + loop) → Execute Workflow dentro del loop → sub-workflow que procesa un registro y devuelve el resultado."]
    )
  ),
  S.content(
    "Errores Comunes",
    table(
      ["Error", "Qué pasa", "Solución"],
      [
        ["Loop infinito", "El perro que persigue su cola: consume CPU hasta frenar el servicio", "Verificar que el circuito vuelve al SplitInBatches"],
        ["Batch demasiado grande", "Error <strong>429 Too Many Requests</strong>", "Empezar con 5 a 10 y subir de a poco"],
        ["No pasar datos al sub-workflow", "El sub-flujo recibe vacío", "Activar \"Send all incoming items\" o mapear los campos"],
      ]
    )
  ),
  S.content(
    "Demo: las Reseñas de la Inmobiliaria",
    `<div class="flow">${["Trigger|oval|Leer las reseñas sin analizar", "Loop|rect|SplitInBatches de 10", "Sub-workflow|rect|\"Analizar reseña\": sentimiento y tema", "Acción|rect|Guardar el resultado en Airtable", "Fin|oval|Todas analizadas"]
      .map((t) => {
        const [tag, kind, txt] = t.split("|");
        return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: 165px;">${txt}</div></div>`;
      })
      .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>` +
      `<p class="flow-legend">Es el anticipo del <strong>procesamiento en lote con Claude</strong> del Módulo 6.</p>`
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 4: Arquitectura de Agente Avanzado en n8n", "Diseñar la arquitectura de un agente, sin necesidad de construirlo todavía. Se evalúa tu pensamiento arquitectónico.", "live"),
  S.content(
    "Qué Tiene que Tener tu Diagrama",
    tiles([
      ["fa-bolt", "Trigger", "Qué evento inicia el flujo."],
      ["fa-plug", "Conexiones", "Qué herramientas externas consulta por API (OpenAI, Drive…)."],
      ["fa-code-branch", "IF / Switch", "Al menos dos caminos distintos."],
      ["fa-robot", "Nodo de IA", "Dónde la IA decide o procesa texto."],
    ]) + note("Más: el resultado final, una rama o recuadro de manejo de errores y qué parte se delega a un sub-workflow.")
  ),
  S.content(
    "El Molde del Programa",
    code(`[Trigger: llega un email] → [IA: analiza el sentimiento (API de OpenAI)] → [Switch: ¿sentimiento?]
                                                                            ├─ Negativo → [Procesar reembolso vía API]
                                                                            └─ Positivo → [Enviar cupón de descuento]
                                                                                  ↓
                                                     [Resultado: respuesta enviada + registro en CRM]
⚠ Error: si la API de OpenAI falla → reintento y aviso en Slack
↳ Sub-workflow: "Procesar reembolso" se delega a un flujo aparte`, 13) +
      note("Formato: una sola imagen legible (PNG/JPG) o PDF. Si lo hiciste en Excalidraw o Lucidchart, exportalo; no mandes solo el link al tablero.")
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Claridad y estructura", "Inicio (trigger) y fin lógicos, resultado final claro, fácil de seguir.", "<strong>25 %</strong>"],
        ["Lógica de decisión", "IF / Switch con al menos 2 caminos bien diferenciados.", "<strong>25 %</strong>"],
        ["Nodo de IA + integración vía API", "Dónde decide la IA + al menos una integración externa por API.", "<strong>30 %</strong>"],
        ["Manejo de errores y sub-workflows", "Qué pasa si una conexión falla + qué se delega a un sub-workflow.", "<strong>20 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts")
  ),
  S.content(
    "Práctica 4 y Cierre",
    split(
      badge("Paso 4 de la Pre-Entrega 4", "live", "fa-flask-vial") +
        bullets([
          ["fa-diagram-project", "Sumá a tu diagrama el <strong>sub-workflow</strong> y la <strong>rama de error</strong>."],
          ["fa-calendar-check", "<strong>PE4:</strong> se recomienda entregarla antes de la <strong>clase 11</strong>."],
        ]),
      ["fa-forward", "Próximo: Módulo 5 · Comunicación", "Gmail, Slack y WhatsApp. Antes de la clase 9: un Gmail de prueba, un workspace de Slack y una cuenta de Twilio para el sandbox de WhatsApp."]
    )
  ),
  S.links([
    ["fa-plug", "n8n — HTTP Request", "URL, método, headers, body y autenticación.", "docs.n8n.io"],
    ["fa-repeat", "n8n — Looping", "Procesar listas grandes por lotes.", "docs.n8n.io/flow-logic/looping"],
    ["fa-sitemap", "n8n — Sub-workflows", "Reutilizar flujos con el principio DRY.", "docs.n8n.io/flow-logic/subworkflows"],
  ]),
  S.dudas("¡Cerramos el Módulo 4!"),
]);
console.log("m4 ok");
