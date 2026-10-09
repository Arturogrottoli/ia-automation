const { S, badge, note, bullets, tiles, table, code, twoTiled, split, build } = require("./lib");

const lineFlow = (steps, w = 170) =>
  `<div class="flow">${steps
    .map((t) => {
      const [tag, kind, txt] = t.split("|");
      return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: ${w}px;">${txt}</div></div>`;
    })
    .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>`;

// ================= CLASE 15 =================
build(15, "Clase 15 - Proyecto Integrador: Kickoff", [
  S.cover(15, 8, "Proyecto Integrador: tu Ecosistema de IA Autónomo", "Todo lo que construiste en siete módulos, unido en un sistema que funciona de punta a punta. Qué hay que entregar, cómo se evalúa y por dónde empezar"),
  S.recap(
    [
      ["fa-user-check", "HITL: un humano aprueba antes de lo crítico, sin crear cuellos de botella."],
      ["fa-gauge-high", "Dashboard con máximo 4 KPIs, alimentado por un log con timestamp."],
      ["fa-calendar-check", "La <strong>PE7</strong> se recomienda entregar antes de la clase 16."],
    ],
    "Hoy arranca la Entrega Final."
  ),
  S.objetivos([
    ["fa-cubes", "Explicar las <strong>4 categorías de tecnología</strong> y los <strong>requisitos de arquitectura</strong>."],
    ["fa-route", "Recorrer la hoja de ruta: caso de uso → <strong>Cerebro → Corazón → HITL → Voz</strong> → prueba y entrega."],
    ["fa-list-check", "Conocer los <strong>5 entregables</strong> y cómo se corrigen (20 % cada uno)."],
    ["fa-flag-checkered", "Salir con <strong>tu caso de uso definido</strong> y <strong>el Cerebro empezado</strong>."],
  ]),
  S.content(
    "El Camino Recorrido",
    table(
      ["Módulo", "Pre-entrega", "Ladrillo del proyecto final"],
      [
        ["M1", "Diagrama de arquitectura lógica", "El mapa del sistema + gobernanza"],
        ["M2", "JSON + matriz estratégica", "El esquema de datos y la elección del stack"],
        ["M3", "Flujo en Make para leads", "Orquestación, IA y manejo de errores"],
        ["M4", "Arquitectura de agente en n8n", "Agentes, APIs y sub-workflows"],
        ["M5", "Estrategia + pipeline multicanal", "La Voz: Gmail, Slack, WhatsApp"],
        ["M6", "Eficiencia y prompts recurrentes", "La matriz de costos"],
        ["M7", "Contenido autónomo con HITL", "RAG, aprobación humana y dashboard"],
      ]
    )
  ),
  S.content(
    "Demo: el Proyecto Ejemplo de Punta a Punta",
    lineFlow(["Trigger|oval|Llega una consulta", "Cerebro|rect|Airtable: estado Pendiente", "Corazón|rect|n8n + IA califican y redactan", "HITL|rect|Un humano aprueba", "Voz|rect|Gmail o WhatsApp + aviso en Slack", "Control|oval|Log y dashboard"], 140) +
      `<p class="flow-legend">La inmobiliaria de alquileres temporarios, con su <strong>rama de error</strong> si la IA falla, y el <strong>repo de GitHub</strong> con los entregables.</p>`
  ),
  S.transition("Tema 01", "Qué Hay que Construir", "Un ecosistema funcionando en vivo que resuelva un proceso de negocio de punta a punta: gestión de leads, atención al cliente con memoria, propuestas comerciales o un pipeline de contenido."),
  S.content(
    "Las 4 Categorías de Tecnología (Todas Obligatorias)",
    tiles([
      ["fa-diagram-project", "Orquestador", "n8n (preferido) o Make."],
      ["fa-database", "Base de datos", "Airtable o Notion, como memoria y registro."],
      ["fa-brain", "Procesamiento IA", "OpenAI o Claude, con prompts estructurados y, mejor, agentes o RAG."],
      ["fa-paper-plane", "Canal de salida", "Gmail, Slack o WhatsApp API."],
    ])
  ),
  S.content(
    "Requisitos de Arquitectura",
    bullets([
      ["fa-play", "Se dispara, procesa datos con IA desde la base y entrega un output <strong>sin intervención manual</strong>."],
      ["fa-shield-halved", "<strong>Rutas de error</strong> ante datos faltantes o fallos de API."],
      ["fa-user-check", "Un <strong>punto de validación humana (HITL)</strong> antes de una acción crítica."],
      ["fa-tags", "<strong>Nodos con nombres claros</strong>, variables dinámicas y nada hardcodeado."],
    ])
  ),
  S.content(
    "Los 5 Entregables (20 % Cada Uno)",
    table(
      ["#", "Entregable", "Qué tiene que tener"],
      [
        ["1", "Mapa de arquitectura (PDF)", "Triggers, routers, APIs, nodos de IA y destino de los datos."],
        ["2", "Manual operativo de datos", "Tablas vinculadas (generadas con Omni AI) + esquemas JSON de las integraciones."],
        ["3", "Matriz de costos", "Qué modelo por tarea y el ahorro estimado. Es un entregable en sí, no solo \"limitar tokens\"."],
        ["4", "Seguridad y resiliencia", "Minimización de datos + Error Handlers + puntos de HITL, explicados."],
        ["5", "Dashboard de control", "Link público (Shared View) con KPIs y tasa de errores. Más que el link a la base."],
      ]
    ) + note("Además: el flujo (.json de n8n o .blueprint de Make), la base en modo lectura y capturas. Todo en un repositorio de GitHub. Se aprueba con 70.")
  ),
  S.content(
    "La Estructura del Repositorio",
    `<div class="two-column" style="grid-template-columns: 1fr 1fr;"><div>${code(
      "mi-proyecto/\n├── README.md\n├── 1-arquitectura.pdf\n├── 2-manual-de-datos.pdf\n├── 3-matriz-de-costos.pdf\n├── 4-seguridad-y-resiliencia.pdf\n├── flujos/\n└── evidencias/",
      15
    )}</div><div>${bullets([
      ["fa-file-lines", "<strong>README:</strong> qué resuelve, cómo funciona y los links (base en lectura, dashboard)."],
      ["fa-diagram-project", "<strong>flujos/:</strong> los .json de n8n o .blueprint de Make."],
      ["fa-camera", "<strong>evidencias/:</strong> capturas de las ejecuciones, incluido el camino infeliz."],
    ])}</div></div>`
  ),
  S.brk(),
  S.transition("Tema 02", "La Hoja de Ruta en 6 Pasos", "Del caso de uso a la entrega: Cerebro, Corazón, semáforo humano y Voz. Cada paso reutiliza algo que ya construiste."),
  S.content(
    "Pasos 1 y 2: Caso de Uso y Cerebro",
    twoTiled(
      ["fa-bullseye", "1 · Elegí tu caso de uso", "<p>Un proceso propio o de un cliente ficticio que necesite interpretar lenguaje natural.</p><p style=\"margin-top: 12px;\">Para la mayoría: <strong>el proceso que vienen trabajando desde el Módulo 1</strong>.</p>"],
      ["fa-brain", "2 · Estructurá el Cerebro", "<p>En Airtable o Notion, con <strong>campos de estado</strong> obligatorios: <em>Pendiente</em>, <em>Procesado por IA</em>, <em>Aprobado por humano</em>.</p><p style=\"margin-top: 12px;\"><strong>Relaciones entre tablas</strong> para no tener datos aislados.</p>"]
    )
  ),
  S.content(
    "Pasos 3 y 4: el Corazón y el Semáforo Humano",
    twoTiled(
      ["fa-heart-pulse", "3 · Construí el Corazón", "<p><strong>Trigger inteligente:</strong> \"From now on\" o webhooks, para no gastar operaciones.</p><p style=\"margin-top: 8px;\"><strong>Motor de IA:</strong> mapear bien la respuesta y limitar Max Tokens.</p><p style=\"margin-top: 8px;\"><strong>Error handling obligatorio:</strong> si la API falla, se guarda un registro del error.</p>"],
      ["fa-traffic-light", "4 · Implementá el HITL", "<p>Para evitar el <strong>efecto metralleta</strong>, el flujo se detiene antes de la acción crítica.</p><p style=\"margin-top: 12px;\">Una notificación de aprobación (Slack o Email) antes de contactar al cliente.</p>"]
    )
  ),
  S.content(
    "Pasos 5 y 6: la Voz y la Entrega",
    twoTiled(
      ["fa-bullhorn", "5 · Conectá la Voz", "<p><strong>Slack / Gmail:</strong> mapear el Thread ID.</p><p style=\"margin-top: 12px;\"><strong>WhatsApp:</strong> mensajes proactivos con plantilla aprobada y número en formato internacional (+).</p>"],
      ["fa-flag-checkered", "6 · Probá, documentá y entregá", "<p><strong>Test de estrés:</strong> al menos 5 ejecuciones, incluido el <strong>camino infeliz</strong>.</p><p style=\"margin-top: 8px;\"><strong>Video demo de 3 minutos</strong>, sin API keys a la vista.</p><p style=\"margin-top: 8px;\">Los 5 entregables + archivos técnicos.</p>"]
    )
  ),
  S.content(
    "Check de Seguridad Antes de Enviar",
    tiles([
      ["fa-repeat", "¿Hay filtro anti-bucles?", "Que un flujo no se dispare a sí mismo ni responda a respuestas automáticas."],
      ["fa-hashtag", "¿Tipos de datos correctos?", "Los filtros comparan número con número, no texto con número."],
      ["fa-wand-magic-sparkles", "¿Prompt dinámico?", "El prompt usa variables del sistema; nada escrito a mano."],
    ])
  ),
  S.content(
    "Práctica: Caso de Uso + Cerebro",
    badge("20 minutos · arranca tu Entrega Final", "live", "fa-flask-vial") +
      bullets([
        ["fa-pen", "Definí tu caso en una oración: <em>\"Mi sistema recibe ___, la IA ___, un humano aprueba ___ y sale por ___.\"</em>"],
        ["fa-list-check", "Mapeá tus pre-entregas: qué ya tenés y qué te falta."],
        ["fa-database", "Empezá el Cerebro: las tablas con los <strong>3 campos de estado</strong> y al menos una relación. Si usás Omni AI, guardá el prompt."],
      ]) + note("Tarea para la clase 16: el Cerebro listo y el Corazón conectado, aunque falten la Voz y el HITL.")
  ),
  S.dudas(),
]);

// ================= CLASE 16 =================
build(16, "Clase 16 - Proyecto Integrador: Taller de Calidad", [
  S.cover(16, 8, "Taller de Calidad de Arquitecto", "Seguridad, costos y dashboard: los criterios que más se pierden. Test del camino infeliz, revisión de avance y cierre del curso"),
  S.content(
    "Ronda Rápida: ¿Dónde Estás?",
    badge("Esta clase queda grabada para que la veas después", "live", "fa-video") +
      tiles([
        ["fa-brain", "Cerebro", "¿Tus tablas tienen los campos de estado y relaciones?"],
        ["fa-heart-pulse", "Corazón", "¿El flujo corre con IA y tiene ruta de error?"],
        ["fa-traffic-light", "HITL", "¿Hay un semáforo humano antes de lo crítico?"],
        ["fa-bullhorn", "Voz", "¿Sale por Gmail, Slack o WhatsApp?"],
      ])
  ),
  S.objetivos([
    ["fa-shield-halved", "Pasar tu sistema por el <strong>check de seguridad</strong> y el <strong>test de estrés</strong>."],
    ["fa-coins", "Armar tu <strong>matriz de costos</strong> y tu documento de <strong>seguridad y resiliencia</strong>."],
    ["fa-gauge-high", "Publicar tu <strong>dashboard</strong> y armar el <strong>repo</strong> con los 5 entregables."],
    ["fa-flag-checkered", "Salir con <strong>un plan concreto</strong> para terminar la Entrega Final."],
  ]),
  S.transition("Tema 01", "Check de Seguridad y Resiliencia", "Un sistema que funciona cuando todo sale bien no alcanza. Se evalúa cómo se comporta cuando algo sale mal."),
  S.content(
    "El Test del Camino Infeliz (5+ Ejecuciones)",
    table(
      ["#", "Prueba", "Qué tiene que pasar"],
      [
        ["1", "Consulta completa y normal", "Camino feliz de punta a punta."],
        ["2", "Consulta sin email o sin fechas", "El filtro la frena o pide el dato; no se rompe."],
        ["3", "La API de IA falla (key desconectada)", "Reintentos, después registro del error y aviso."],
        ["4", "Un humano rechaza la respuesta", "No sale nada al cliente; queda registrado."],
        ["5", "Mensaje raro: emoji, otro idioma, una queja", "La IA no inventa; va a revisión humana."],
      ]
    ) + note("Sacá captura de cada una: van a la carpeta evidencias/ del repo.")
  ),
  S.content(
    "El Documento de Seguridad y Resiliencia",
    tiles([
      ["fa-filter", "Minimización de datos", "Qué datos pedís y por qué; cuáles no (lo de la clase 2)."],
      ["fa-shield-halved", "Rutas de error", "Qué Error Handler hay en cada punto frágil (Break, Resume) y adónde va el registro."],
      ["fa-user-check", "Puntos de HITL", "Dónde está el semáforo humano y por qué ahí: riesgo legal o alucinaciones antes de hablar con el exterior."],
    ])
  ),
  S.transition("Tema 02", "Matriz de Costos y Dashboard", "Dos de los cinco entregables que más se subestiman. Cada uno vale un 20 %."),
  S.content(
    "La Matriz de Costos",
    table(
      ["Tarea del sistema", "Tipo", "Modelo / API", "Por qué"],
      [
        ["Clasificar la prioridad de una consulta", "Mecánica, corta", "Modelo económico", "No requiere razonamiento profundo"],
        ["Redactar la respuesta con el catálogo", "Lectura densa + redacción", "Claude + caché", "Contexto largo que se repite"],
        ["Analizar las reseñas de la semana", "Masiva, no urgente", "Claude con Batches", "Puede esperar: −50 %"],
      ]
    ) + note("La rúbrica pide justificar modelo económico para lo mecánico, Claude para lectura densa y Batches para lo masivo, con la cuenta del ahorro. Precios: siempre los vigentes.")
  ),
  S.content(
    "El Dashboard de Control",
    split(
      bullets([
        ["fa-clock", "<strong>Fuente:</strong> la tabla de log, con timestamp en cada fila."],
        ["fa-bullseye", "<strong>Máximo 4 KPIs:</strong> tasa de aprobación, volumen, <strong>tasa de error</strong> (obligatoria) y uno de tu negocio."],
        ["fa-link", "Publicado como <strong>Shared View</strong> (Airtable) o página pública (Notion). Probá el link en incógnito."],
      ]),
      ["fa-stopwatch", "La prueba de los 5 segundos", "El dueño del negocio tiene que entender la salud del sistema en 5 segundos, sin saber nada de n8n ni de APIs."]
    )
  ),
  S.brk(),
  S.content(
    "Revisión de Avance 1 a 1",
    badge("Mientras el resto avanza en su proyecto", "live", "fa-comments") +
      bullets([
        ["fa-cubes", "¿Están las <strong>4 categorías</strong>: orquestador, base, IA y canal?"],
        ["fa-play", "¿El flujo corre <strong>sin intervención manual</strong>, salvo el HITL?"],
        ["fa-shield-halved", "¿Hay <strong>ruta de error</strong> y registro del error?"],
        ["fa-tags", "¿Los <strong>nodos tienen nombres claros</strong>?"],
        ["fa-forward", "¿Qué entregable falta y cuál es el <strong>próximo paso concreto</strong>?"],
      ])
  ),
  S.content(
    "La Rúbrica de la Entrega Final",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Mapa de arquitectura", "Triggers, routers, APIs, nodos de IA y destino de los datos.", "<strong>20 %</strong>"],
        ["Manual operativo de datos", "Cerebro relacional (con Omni AI) + esquemas JSON de las integraciones.", "<strong>20 %</strong>"],
        ["Optimización de costos", "Matriz de decisión por modelo y tarea, con el ahorro de Batches.", "<strong>20 %</strong>"],
        ["Seguridad, privacidad y resiliencia", "Minimización, rutas de contingencia y puntos de HITL justificados.", "<strong>20 %</strong>"],
        ["Dashboard de control", "Link público y operativo con KPIs y tasa de errores.", "<strong>20 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts. Formato: un repositorio de GitHub + video demo de 3 minutos sin API keys a la vista.")
  ),
  S.content(
    "Del Diagrama en Papel al Ecosistema Autónomo",
    tiles([
      ["fa-pen-ruler", "Diseñar", "Pensar en flujos, dibujarlos y cuidar los datos (M1–M2)."],
      ["fa-diagram-project", "Orquestar", "Make, n8n, agentes y APIs (M3–M4)."],
      ["fa-comments", "Comunicar", "Gmail, Slack y WhatsApp coordinados (M5)."],
      ["fa-brain", "Pensar", "Claude, RAG, contenido y aprobación humana (M6–M7)."],
    ]) + note("Gracias por el recorrido. ¡Ahora a terminar ese proyecto!", true)
  ),
  S.dudas("¡Cerramos el curso, arquitectos!"),
]);
console.log("m8 ok");
