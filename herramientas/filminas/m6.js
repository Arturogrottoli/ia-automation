const { S, badge, note, bullets, tiles, table, code, twoTiled, split, build } = require("./lib");

const lineFlow = (steps, w = 170) =>
  `<div class="flow">${steps
    .map((t) => {
      const [tag, kind, txt] = t.split("|");
      return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: ${w}px;">${txt}</div></div>`;
    })
    .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>`;

// ================= CLASE 11 =================
build(11, "Clase 11 - Ventajas de Claude + Message Batches", [
  S.cover(11, 6, "Claude: Razonamiento, Documentos y Procesamiento en Lote", "Un asistente ejecutivo que lee, ve y razona sobre montañas de información, y cómo procesar miles de pedidos a mitad de precio"),
  S.recap(
    [
      ["fa-envelope-open-text", "Gmail con contexto, WhatsApp con la API y la regla de las 24 horas."],
      ["fa-diagram-project", "Orquestación: Slack siempre, WhatsApp solo si es urgente."],
      ["fa-calendar-check", "La <strong>PE5</strong> se recomienda entregar antes de la clase 13."],
    ],
    "Hoy: elegir el cerebro correcto y gastar menos procesando volumen."
  ),
  S.objetivos([
    ["fa-brain", "Explicar las fortalezas de Claude: <strong>contexto amplio, razonamiento paso a paso y visión de documentos</strong>."],
    ["fa-pen", "Escribir un prompt con <strong>rol + objetivo + \"pensá paso a paso\"</strong>."],
    ["fa-boxes-stacked", "Decidir cuándo una tarea va por <strong>Message Batches</strong> (hasta 24 h, 50 % más barato)."],
    ["fa-flag-checkered", "Salir con <strong>la plantilla de prompt</strong> y <strong>el flujo por lotes</strong> de tu proceso."],
  ]),
  S.transition("Tema 01", "Ventajas de Claude para Razonamiento y Documentos", "Un contrato de 60 páginas, tres informes de ventas y una propuesta de marketing, y 15 minutos antes de la reunión. Claude no es un chat para preguntas rápidas: es un asistente ejecutivo."),
  S.content(
    "La Ventana de Contexto: la Mesa de Trabajo",
    split(
      badge("Claude se especializó en razonamiento y en documentos", "tip", "fa-brain") +
        bullets([
          ["fa-table-cells-large", "Muchos modelos tienen una mesa chica: si ponés muchos papeles, los primeros se caen."],
          ["fa-maximize", "Claude tiene una <strong>mesa gigante</strong> (el programa habla de 200.000 tokens): varios PDFs, la transcripción de una reunión y un manual, todo a la vez."],
        ]),
      ["fa-circle-info", "Verificá los números", "Los tamaños de contexto y los modelos cambian seguido. Revisá los vigentes en la documentación de Anthropic antes de dar cifras."]
    )
  ),
  S.content(
    "Razonamiento Paso a Paso",
    split(
      bullets([
        ["fa-scissors", "<strong>Descompone</strong> el problema en partes chicas (gasto fijo vs variable)."],
        ["fa-magnifying-glass", "<strong>Busca pruebas</strong> en el documento que subiste."],
        ["fa-mug-hot", "<strong>Pensamiento extendido:</strong> antes de responder, verifica su propia lógica. \"Como si se tomara un café y revisara sus notas.\""],
      ]),
      ["fa-scale-balanced", "Ejemplo", "\"¿Hay alguna contradicción entre lo que pidió el cliente en la reunión y lo que escribí en la propuesta?\" → Claude detecta la diferencia de presupuesto."]
    )
  ),
  S.content(
    "Visión de Documentos",
    split(
      badge("Multimodal: lee texto, tablas, gráficos e imágenes del PDF", "", "fa-eye") +
        bullets([
          ["fa-table", "Tablas pegadas como imagen, gráficos de barras, diagramas de flujo: no hace falta transcribirlos."],
          ["fa-chart-pie", "\"Según el gráfico de la página 4, ¿qué región creció menos y qué razones encontrás en el texto?\""],
        ]),
      ["fa-briefcase", "Por qué importa", "Ver el gráfico y leer el texto explicativo a la vez es lo que lo hace imbatible para perfiles administrativos y de marketing."]
    )
  ),
  S.content(
    "Claude vs Modelos Generalistas",
    table(
      ["", "Claude", "Otros modelos generalistas"],
      [
        ["Documentos largos", "Procesa varios PDFs sin \"olvidar\" el inicio", "Suelen recortar o perder contexto"],
        ["Visión de documentos", "Lee tablas, gráficos e imágenes del PDF", "Muchas veces hay que transcribir a mano"],
        ["Razonamiento", "Paso a paso antes de responder: menos alucinaciones", "Responden rápido y pueden inventar"],
        ["Ideal para", "Contratos, reportes, lógica de negocio", "Respuestas cortas, tareas creativas o de alta velocidad"],
      ]
    ) + note("Comparación del programa, pensada para un perfil no técnico.")
  ),
  S.content(
    "Errores Comunes y Mejores Prácticas",
    table(
      ["Error", "Mejor práctica"],
      [
        ["Copiar y pegar fragmentos", "Se pierden formato, tablas e imágenes. <strong>Subí el archivo original.</strong>"],
        ["Pedir resúmenes genéricos", "Rol + objetivo: \"Actuá como mi asesor financiero. Extraé las 3 alertas rojas que un emprendedor sin conocimientos contables debería entender hoy.\""],
        ["No pedirle que razone", "La frase mágica: <strong>\"Pensá paso a paso antes de darme la conclusión.\"</strong>"],
      ]
    )
  ),
  S.content(
    "Práctica 1: tu Plantilla de Prompt",
    badge("Paso 1 de la Pre-Entrega 6 · 13 minutos", "live", "fa-flask-vial") +
      `<div class="code-block" style="font-family: var(--font-main); font-size: 15px; line-height: 1.55; white-space: normal;"><em>"Actuá como <strong>analista de experiencia de huéspedes</strong> de la inmobiliaria. Tu objetivo es clasificar la reseña según su sentimiento (positivo, neutro, negativo) y su tema principal (limpieza, ubicación, atención, equipamiento, precio), y detectar si menciona un problema a resolver. <strong>Pensá paso a paso antes de dar tu conclusión.</strong> Respondé solo con un JSON con sentimiento, tema, requiere_accion y resumen. Reseña: <strong>{{texto_reseña}}</strong> · Propiedad: <strong>{{propiedad}}</strong>"</em></div>` +
      note("Tu plantilla: rol, objetivo, \"pensá paso a paso\" y variables dinámicas delimitadas con {{ }}.")
  ),
  S.brk(),
  S.transition("Tema 02", "Message Batches API: Volumen a Mitad de Precio", "1.000 camisas sucias. La lavandería rápida las hace de a una mientras esperás. La industrial te dice: dejámelas, las lavo de noche y mañana las tenés a mitad de precio."),
  S.content(
    "¿Qué es la Message Batches API?",
    table(
      ["", "Llamada normal (tiempo real)", "Message Batches"],
      [
        ["Velocidad", "Segundos", "Hasta 24 horas"],
        ["Costo", "100 % (precio de lista)", "<strong>50 %</strong>"],
        ["Uso ideal", "Chatbots, atención en vivo", "Análisis de datos, reportes, contenido masivo"],
        ["Límites", "Por minuto", "Independientes y mucho más altos"],
      ]
    ) + note("Asíncrono: en vez de una pregunta y esperar, mandás un paquete con cientos o miles y recibís todo junto.")
  ),
  S.content(
    "¿Cuándo Tiene Sentido un Lote?",
    tiles([
      ["fa-bullhorn", "Campañas", "Análisis de 500 anuncios para el reporte del lunes."],
      ["fa-ranking-star", "Leads", "Scoring de 1.000 registros antes de que entre ventas."],
      ["fa-boxes-stacked", "Contenido", "Descripciones para 300 productos nuevos."],
      ["fa-file-contract", "Auditoría", "Vencimientos y cláusulas de 100 contratos."],
    ]) + note("Regla: si la tarea puede esperar a que te tomes un café o a que pase la noche, es un Batch.")
  ),
  S.content(
    "Cómo Funciona, sin Tecnicismos",
    lineFlow(["1 · El sobre|rect|Juntás todas las peticiones en un formato", "2 · La oficina postal|rect|Lo enviás y recibís un ID de seguimiento", "3 · La espera|oval|El flujo puede terminar acá", "4 · La recogida|rect|\"¿Está listo el sobre #12345?\" y descargás todo"], 200) +
      `<p class="flow-legend">En n8n: un flujo que envía y guarda el ID, y otro programado que consulta el estado más tarde.</p>`
  ),
  S.content(
    "Errores y Trampas",
    table(
      ["Error", "Realidad"],
      [
        ["\"La calidad es menor\"", "Falso. Es el mismo modelo; cambia el horario en que se procesa."],
        ["Usarlo para interacciones humanas", "Nunca en un chatbot de WhatsApp: nadie espera 24 horas para saber un precio."],
        ["No manejar la espera", "El paso siguiente no puede ir pegado al envío si depende de la respuesta."],
      ]
    ) + note("El combo ganador, en la clase 12: Batches (50 % menos) + Prompt Caching (lectura barata de lo que se repite).")
  ),
  S.content(
    "Demo: 500 Reseñas en Lote",
    code(`[Domingo 22:00] → [Airtable: reseñas sin analizar] → [Arma el lote: una petición por reseña]
   → [Envía a Message Batches → guarda el batch_id en Airtable]

[Lunes 7:00] → [Consulta el estado del batch_id] → ¿terminó?
   ├─ Sí → [Descarga resultados] → [Actualiza cada reseña] → [Resumen a Slack]
   └─ No → [Reintenta en 1 hora]`, 14) +
      note("El hueco entre el envío y la recogida son las marcas de tiempo que pide la PE6.")
  ),
  S.content(
    "Práctica 2: Modelá tu Flujo por Lotes",
    badge("Paso 2 de la Pre-Entrega 6 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-boxes-stacked", "<strong>¿Qué volumen?</strong> (ej. 500 reseñas, 300 descripciones, 100 contratos)."],
        ["fa-hourglass-half", "<strong>¿Puede esperar?</strong> Si no, no es un batch."],
        ["fa-clock", "<strong>Las marcas de tiempo:</strong> cuándo se arma y envía, cuándo se consulta, qué pasa si no terminó."],
      ]) +
      note("Tarea para la clase 12: traer la plantilla y el flujo. Ahí sumamos el prefix cacheable y la matriz de ahorro.")
  ),
  S.links([
    ["fa-book", "Anthropic — Documentación", "Modelos, mensajes y capacidades.", "docs.anthropic.com"],
    ["fa-file-pdf", "Anthropic — PDFs y visión", "Cómo Claude lee tablas, gráficos e imágenes.", "docs.anthropic.com · pdf-support"],
    ["fa-boxes-stacked", "Anthropic — Batches", "Armar el lote, enviarlo y recuperar resultados.", "docs.anthropic.com · batch-processing"],
  ]),
  S.dudas(),
]);

// ================= CLASE 12 =================
build(12, "Clase 12 - Prompt Caching + MCP", [
  S.cover(12, 6, "Prompt Caching y Model Context Protocol (MCP)", "No pagar dos veces por leer lo mismo, y darle a la IA ventanas, teléfono y manos. Y la Pre-Entrega 6"),
  S.recap(
    [
      ["fa-brain", "Claude: contexto amplio, razonamiento paso a paso y visión de documentos."],
      ["fa-pen", "Prompts con <strong>rol + objetivo + \"pensá paso a paso\"</strong>."],
      ["fa-boxes-stacked", "<strong>Batches:</strong> hasta 24 h y 50 % más barato para lo que puede esperar."],
    ],
    "Hoy completamos el combo de eficiencia y conectamos la IA con tus herramientas."
  ),
  S.objetivos([
    ["fa-database", "Explicar Prompt Caching: <strong>prefix, cache hit, cache miss y TTL</strong>."],
    ["fa-list-check", "Aplicar las reglas: lo cacheable <strong>al principio, idéntico y con el mínimo de tokens</strong>."],
    ["fa-plug", "Explicar <strong>MCP</strong> y en qué se diferencia de RAG y de una API."],
    ["fa-flag-checkered", "Salir con <strong>el prefix</strong> y <strong>la matriz de ahorro</strong> de tu proceso, y la consigna de la <strong>PE6</strong>."],
  ]),
  S.transition("Tema 01", "Prompt Caching: Optimización de Costos", "Un restaurante donde cada pedido del \"Especial del Chef\" obliga a ir al mercado y picar todo desde cero. ¿No conviene tener los ingredientes pre-picados?"),
  S.content(
    "¿Qué es el Prompt Caching?",
    split(
      badge("Claude \"recuerda\" las partes repetidas del prompt", "tip", "fa-database") +
        bullets([
          ["fa-file-lines", "En los flujos mandamos mucho contexto repetido: instrucciones, documentos de referencia, historial."],
          ["fa-xmark", "<strong>Sin caché:</strong> 10 preguntas sobre el mismo PDF = 10 lecturas completas."],
          ["fa-check", "<strong>Con caché:</strong> la primera vez se paga completo (o un poco más); las siguientes, una fracción."],
        ]),
      ["fa-coins", "Hasta 90 % de ahorro", "El programa da cifras de un modelo anterior: un documento de 20.000 tokens consultado 100 veces al mes pasa de ~7,50 USD a ~1 USD. Verificá los precios vigentes."]
    )
  ),
  S.content(
    "Prefix, Cache Hit y Cache Miss",
    tiles([
      ["fa-arrow-up", "Prefix", "La parte de arriba del prompt que no cambia. <strong>Lo cacheable va al inicio.</strong>"],
      ["fa-bolt", "Cache hit", "Encuentra el contenido guardado y lo usa: rápido y barato."],
      ["fa-rotate", "Cache miss", "No está o expiró: se procesa todo de nuevo, como cocinar desde cero."],
    ]) + note("Usos: el \"cerebro\" de un bot de atención (precios, políticas), análisis de documentos largos, voz de marca siempre cargada.")
  ),
  S.content(
    "Las Reglas y las Trampas",
    table(
      ["Regla / trampa", "Qué pasa"],
      [
        ["Estructura jerárquica", "Lo cacheable al principio. Si el documento va al final, no se aprovecha."],
        ["Puntos de anclaje", "Se marca explícitamente \"hasta acá, guardalo\": <code>cache_control</code>."],
        ["Vida útil (TTL)", "Normalmente 5 minutos, y se reinicia con cada uso. En un flujo recurrente puede durar todo el día."],
        ["Cachear prompts chicos", "Hace falta un mínimo (el programa dice 1.024 tokens en modelos como Sonnet)."],
        ["Cambiar una palabra al inicio", "\"Hola Claude\" vs \"Buenas tardes Claude\" invalida el caché: el prefix tiene que ser idéntico."],
        ["Esperar ahorro en el primer mensaje", "Escribir en caché cuesta ~25 % más. Si va una sola vez, no conviene."],
      ]
    )
  ),
  S.content(
    "Demo: el Prefix de la Inmobiliaria",
    split(
      badge("Proyecto ejemplo · llamada a la API", "live", "fa-play") +
        bullets([
          ["fa-layer-group", "<strong>Prefix:</strong> instrucciones + catálogo de propiedades + políticas de reserva + criterios de clasificación."],
          ["fa-repeat", "Dos llamadas seguidas con reseñas distintas: <strong>escritura</strong> de caché en la primera, <strong>lectura</strong> en la segunda."],
          ["fa-pen", "Cambiamos una palabra del prefix y aparece el <strong>cache miss</strong>."],
        ]),
      ["fa-receipt", "Qué mirar", "En la respuesta de la API vienen los tokens de escritura y de lectura de caché. Ahí se ve el ahorro."]
    )
  ),
  S.content(
    "Práctica 3: Definí tu Prefix",
    badge("Paso 3 de la Pre-Entrega 6 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-copy", "¿Qué bloque <strong>largo e idéntico</strong> se repite en todas tus llamadas? (instrucciones, catálogo, manual, políticas)"],
        ["fa-ruler", "¿Llega al mínimo de tokens? (1.000 tokens ≈ 750 palabras)"],
        ["fa-shuffle", "¿Qué queda <strong>después</strong> del prefix y cambia en cada llamada? Esas son tus variables."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Model Context Protocol (MCP)", "El asistente más brillante del mundo, encerrado en una habitación sin ventanas ni teléfono. Solo trabaja con los papeles que le pasás por debajo de la puerta. MCP le pone ventanas, teléfono y manos."),
  S.content(
    "El USB-C de la Inteligencia Artificial",
    twoTiled(
      ["fa-plug-circle-xmark", "Antes de MCP", "<p>Cada IA + cada herramienta = una integración a medida y costosa.</p><p style=\"margin-top: 12px;\">Como tener un cargador distinto para cada aparato.</p>"],
      ["fa-plug-circle-check", "Con MCP", "<p>Un <strong>estándar abierto</strong> (lanzado por Anthropic): cada herramienta expone sus datos con un <strong>servidor MCP</strong> y cualquier IA que hable el protocolo se \"enchufa\".</p>"]
    )
  ),
  S.content(
    "Las 3 Capacidades y la Arquitectura",
    tiles([
      ["fa-book", "Resources", "Información de solo lectura: políticas en Drive, notas de un cliente en Notion."],
      ["fa-hand", "Tools", "Acciones: crear una fila, mandar un Slack, generar una factura."],
      ["fa-file-lines", "Prompts", "Plantillas predefinidas: \"Analizar resumen semanal\"."],
    ]) +
      note("Host (Claude Desktop o tu n8n) → Client (habla MCP) → MCP Server (traduce el idioma de la herramienta) → tus datos.")
  ),
  S.content(
    "MCP: Errores y Trampas",
    table(
      ["Error", "Realidad"],
      [
        ["\"MCP conecta todo\"", "Hace falta un servidor MCP para esa herramienta. La mayoría de las líderes (Notion, Slack, Airtable, HubSpot) ya tienen."],
        ["Confundir MCP con RAG", "RAG es un buscador que le pasa un documento a la IA (una foto del pasado). MCP es una conexión viva y bidireccional que también escribe."],
        ["\"MCP reemplaza las APIs\"", "No: las usa por debajo. Es una capa estándar para que la IA entienda qué puede hacer."],
      ]
    ) + note("Casos: la \"centralita\" que une Trello, Asana y Notion; mails de seguimiento con Sheets + Gmail; leer un repositorio de código.")
  ),
  S.content(
    "Demo: Claude Conectado a la Base",
    split(
      badge("Claude Desktop o claude.ai con el conector", "live", "fa-play") +
        bullets([
          ["fa-book", "<strong>Resource:</strong> \"¿Qué propiedades son para 6 o más y cuál es la más barata?\""],
          ["fa-star-half-stroke", "\"¿Cuáles son las 3 reseñas negativas más recientes y de qué propiedad?\""],
          ["fa-hand", "<strong>Tool:</strong> \"Marcá como Respondida la consulta de Ana Pérez\" (Claude pide aprobación antes)."],
        ]),
      ["fa-circle-info", "Antes de la clase", "Verificar qué conectores MCP están disponibles para Airtable o Notion y que funcionen con la base del proyecto."]
    )
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 6: Diseño de Eficiencia e Ingeniería de Prompts", "Una estrategia de optimización presupuestaria y prompts profesionales con caché y lotes para tareas masivas no urgentes.", "live"),
  S.content(
    "Pasos a Seguir",
    bullets([
      ["fa-1", "Una <strong>plantilla de prompt</strong> con un <strong>rol</strong> específico y un <strong>objetivo</strong> detallado."],
      ["fa-2", "La instrucción de razonamiento: <strong>\"Pensá paso a paso antes de darme la conclusión\"</strong>."],
      ["fa-3", "Un <strong>flujo por lotes</strong> para un volumen masivo (ej. 500 reseñas) y el <strong>cálculo del 50 %</strong> de ahorro."],
      ["fa-4", "El <strong>prefix</strong>: el bloque largo e idéntico al principio para activar <code>cache_control</code>."],
    ]) + note("Formato: PDF con los prompts, las variables dinámicas delimitadas y la matriz de ahorro de costos en tokens.")
  ),
  S.content(
    "La Matriz de Ahorro",
    table(
      ["Concepto", "Fórmula", "Ejemplo · 500 reseñas"],
      [
        ["Tokens por reseña", "prefix + reseña + respuesta", "2.000 + 200 + 100"],
        ["Costo normal", "500 × (2.200 × P_in + 100 × P_out)", "Precio de lista"],
        ["Con Batches", "Costo normal × 0,5", "<strong>−50 %</strong>"],
        ["Con caché del prefix", "1 escritura × 2.000 × P_in × 1,25 + 499 lecturas × 2.000 × P_in × 0,1", "El prefix cuesta ~10 %"],
        ["Batches + caché", "Se combinan ambos descuentos", "El combo ganador"],
      ]
    ) + note("P_in y P_out son los precios por token del modelo elegido: usá los vigentes y mostrá la cuenta.")
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Ingeniería de prompts avanzada", "\"Pensá paso a paso\" + rol experto estricto + fuente de verdad en el contenido cacheado.", "<strong>40 %</strong>"],
        ["Cálculo matemático de eficiencia", "Demostración del 50 % de ahorro con Batches y Prompt Caching.", "<strong>30 %</strong>"],
        ["Modelado del flujo por lotes", "Flujo visual o descriptivo con las marcas de tiempo.", "<strong>30 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts")
  ),
  S.content(
    "Práctica 4 y Cierre",
    split(
      badge("Paso 4 de la Pre-Entrega 6", "live", "fa-flask-vial") +
        bullets([
          ["fa-calculator", "Armá tu <strong>matriz de ahorro</strong> con tu volumen y los precios del modelo elegido."],
          ["fa-calendar-check", "<strong>PE6:</strong> se recomienda entregarla antes de la <strong>clase 15</strong>."],
        ]),
      ["fa-forward", "Próximo: Módulo 7", "Agentes con memoria (RAG en Notion), generación de contenido y aprobación humana. Creá tu cuenta de Notion antes de la clase 13."]
    )
  ),
  S.links([
    ["fa-database", "Anthropic — Prompt Caching", "Prefix, cache hits y ejemplos.", "docs.anthropic.com · prompt-caching"],
    ["fa-coins", "Anthropic — Precios", "Para verificar descuentos de lote y caché.", "anthropic.com/pricing"],
    ["fa-plug", "Model Context Protocol", "Qué es MCP y los servidores disponibles.", "modelcontextprotocol.io"],
  ]),
  S.dudas("¡Cerramos el Módulo 6!"),
]);
console.log("m6 ok");
