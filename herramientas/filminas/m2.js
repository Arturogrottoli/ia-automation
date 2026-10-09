const { S, badge, note, bullets, tiles, table, code, twoTiled, split, build } = require("./lib");

// ================= CLASE 3 =================
build(3, "Clase 03 - No-Code vs Low-Code, Costos y JSON", [
  S.cover(3, 2, "No-Code vs Low-Code: Costos y Estructuras de Datos", "Elegir la herramienta correcta, entender cuánto cuesta realmente automatizar y hablar el idioma universal de los datos: JSON"),
  S.recap(
    [
      ["fa-sitemap", "En el Módulo 1 dibujamos el <strong>mapa</strong>: Trigger → Inputs → Acciones/Decisión → Output, con óvalo, rectángulo y rombo."],
      ["fa-shield-halved", "Le sumamos la <strong>capa de gobernanza</strong>: minimización, trazabilidad, revisión humana y nivel de riesgo."],
      ["fa-calendar-check", "La <strong>Pre-Entrega 1</strong> se recomienda entregar antes de la clase 5. ¿Dudas?"],
    ],
    "Hoy empezamos a elegir las herramientas y a empaquetar los datos."
  ),
  S.objetivos([
    ["fa-scale-balanced", "Explicar la diferencia entre <strong>No-Code y Low-Code</strong> y cuándo conviene cada uno."],
    ["fa-coins", "Leer el modelo de costos: <strong>Tasks</strong> (Zapier), <strong>Operations</strong> (Make) y <strong>Tokens</strong> (OpenAI)."],
    ["fa-code", "Reconocer <strong>Objetos { }</strong> y <strong>Arrays [ ]</strong> y escribir un JSON válido."],
    ["fa-flag-checkered", "Salir con el <strong>stack elegido</strong>, una <strong>estimación de costos</strong> y la <strong>lista de variables</strong> de tu proceso."],
  ]),
  S.transition("Tema 01", "Diferencias Clave entre No-Code y Low-Code", "Comprar una cocina modular que encaja perfecto, o una semi-industrial donde podés soldar piezas a medida. Las dos sirven; depende de qué querés cocinar."),
  S.content(
    "No-Code: la Democratización de la Creación",
    split(
      badge("Si sabés usar PowerPoint o Canva, podés usar No-Code", "tip", "fa-wand-magic-sparkles") +
        bullets([
          ["fa-hand-pointer", "Crear apps y automatizaciones <strong>sin escribir código</strong>: interfaz visual, <em>drag and drop</em>."],
          ["fa-user-gear", "Quien conoce el problema es quien construye la solución. Antes hacía falta un programador y un script."],
        ]),
      ["fa-building", "Ejemplo: una inmobiliaria", "50 solicitudes por día. Con Zapier, en 10 minutos: el dato va a Google Sheets → se envía un mail de bienvenida → se crea un recordatorio para llamar en 24 horas."]
    )
  ),
  S.content(
    "Low-Code: Potencia con un Toque de Personalización",
    split(
      badge("Aparece cuando los bloques se quedan cortos", "", "fa-puzzle-piece") +
        bullets([
          ["fa-code", "Visual y con bloques, pero permite (o exige) <strong>pequeños fragmentos de código</strong>."],
          ["fa-users-gear", "Para quien tiene base técnica mínima o necesita integraciones profundas o seguridad empresarial."],
        ]),
      ["fa-calculator", "Cuándo aparece", "El mail de bienvenida tiene que incluir un cálculo con el presupuesto del cliente y datos de mercado de una fuente sin conector. Ahí escribís una pequeña función."]
    )
  ),
  S.content(
    "¿Cuál Elegir Según tu Rol?",
    twoTiled(
      ["fa-user-tie", "Freelancer o dueño de negocio → No-Code", "<p>Automatizar la facturación: Stripe + software contable + correo. Hay conectores estándar para todo.</p><p style=\"margin-top: 12px;\"><strong>Decisión:</strong> No-Code (Make, Zapier).</p>"],
      ["fa-rocket", "Marketer en una startup que crece → Low-Code", "<p>Los leads vienen de una base antigua sin conector. Hace falta escribir la conexión.</p><p style=\"margin-top: 12px;\"><strong>Decisión:</strong> Low-Code (n8n, Retool) y algo de JavaScript.</p>"]
    ) + note("La pregunta clave: ¿qué es lo más complejo que mi proceso tendrá que hacer en 6 meses?")
  ),
  S.content(
    "Así se Justifica una Elección (es el texto de la PE2)",
    badge("Ejemplo del programa · mínimo 100 palabras", "tip", "fa-pen") +
      `<div class="code-block" style="font-family: var(--font-main); font-size: 16px; line-height: 1.6; padding: 24px 30px; font-style: italic; white-space: normal;">"Para automatizar mi facturación elijo una solución No-Code como Make o Zapier. En cuanto a <strong>velocidad</strong>, puedo conectar Stripe, mi software de contabilidad y el correo en una sola tarde usando conectores estándar. En <strong>flexibilidad</strong>, no necesito nada a medida: el proceso es estable y se repite igual todos los meses. Y en <strong>límites técnicos</strong>, mi volumen es bajo, muy por debajo de los topes del plan básico. Pasar a Low-Code solo agregaría complejidad y costo sin ningún beneficio real."</div>` +
      note("Fijate: argumenta con velocidad, flexibilidad y límites técnicos. Eso es lo que evalúa la rúbrica.")
  ),
  S.content(
    "Errores y Trampas Conceptuales",
    table(
      ["Error", "Realidad"],
      [
        ["\"No-Code significa cero límites\"", "El negocio crece y la plataforma \"no te deja\". Preguntate qué tendrá que hacer tu proceso en 6 meses."],
        ["\"Low-Code es igual de fácil\"", "Aparecen API, JSON, Webhooks, variables de entorno. Hay que entender cómo fluye la información."],
        ["\"El código no existe\"", "Está oculto bajo la interfaz. Si la plataforma falla, dependés del proveedor: <strong>vendor lock-in</strong>."],
      ]
    ) + note("No son enemigos, son escalones: No-Code para la agilidad, Low-Code para la escalabilidad.")
  ),
  S.content(
    "Práctica 1: Elegí el Stack de tu Proceso",
    badge("Paso 1 de la Pre-Entrega 2 · 13 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-list-ol", "Desglosá los pasos de tu proceso del Módulo 1 (los rectángulos de tu diagrama)."],
        ["fa-plug", "Para cada paso: ¿alcanza con un conector estándar o hace falta algo a medida?"],
        ["fa-scale-balanced", "Decidí: <strong>No-Code (Zapier/Make) o Low-Code (n8n)</strong>."],
        ["fa-pen", "Anotá 2 o 3 razones usando <strong>flexibilidad, velocidad y límites técnicos</strong>."],
      ]) +
      note("Es el borrador del párrafo de justificación de la PE2.")
  ),
  S.brk(),
  S.transition("Tema 02", "Costos, Límites de Ejecución y Estructuras de Datos", "Un flujo espectacular… y a fin de mes llega una factura de 200 USD porque nadie calculó el pago por uso. O se frena porque la IA no entendió la lista que le mandaste."),
  S.content(
    "Modelos de Costos: Tasks, Operations y Tokens",
    table(
      ["Herramienta", "Unidad", "Cómo cuenta"],
      [
        ["Zapier", "Task", "Cada acción exitosa. El trigger normalmente no suma. Email → Excel = 1 task."],
        ["Make", "Operation", "Cada paso. Email (1) + Excel (1) = 2 operations. Por eso sus paquetes son más grandes."],
        ["OpenAI", "Token", "\"Pedazos de palabras\": 1.000 tokens ≈ 750 palabras. Pagás lo que enviás (input) y lo que responde (output)."],
      ]
    ) + note("Automático no significa gratuito.")
  ),
  S.content(
    "La Analogía del Uber",
    tiles([
      ["fa-mobile-screen", "La suscripción", "Es tener la app instalada: a veces hay un cargo base mensual."],
      ["fa-car", "La ejecución (run)", "Es el viaje que pedís cada vez que el flujo corre."],
      ["fa-road", "Los kilómetros", "Tokens o tasks: lo que define el costo. Un resumen de 2 líneas es corto; un PDF de 50 páginas, largo."],
    ]) + note("Rate limits, los semáforos: un plan gratuito puede permitir 3 pedidos por minuto. Si mandás 100 de golpe, te frena.")
  ),
  S.content(
    "JSON: Objetos y Arrays",
    twoTiled(
      ["fa-id-card", "Objeto { } — la \"ficha personal\"", `<p>Información de una sola cosa, en pares <strong>clave: valor</strong>.</p>${code('{ "nombre": "Laura Pérez",\n  "email": "laura@email.com",\n  "es_cliente_vip": true,\n  "puntos_acumulados": 150 }', 13)}`],
      ["fa-list", "Array [ ] — la \"lista de compras\"", `<p>Varias cosas del mismo tipo.</p>${code('["Diseño Logo", "Redacción SEO", "Gestión Ads"]', 13)}<p style="margin-top: 10px;">Clave entre comillas dobles; texto entre comillas; números y true/false sin comillas.</p>`]
    )
  ),
  S.content(
    "Anidamiento: Fichas Dentro de Carpetas",
    `<div class="two-column" style="grid-template-columns: 1.1fr 0.9fr;"><div>${code(
      '{\n  "fecha": "2026-05-10",\n  "vendedor": "Carlos Ruiz",\n  "ventas_realizadas": [\n    {"producto": "Suscripción Mensual", "monto": 29.99},\n    {"producto": "Pack Iconos", "monto": 15.00},\n    {"producto": "Asesoría 1h", "monto": 50.00}\n  ],\n  "total_dia": 94.99\n}',
      14
    )}</div><div>${bullets([
      ["fa-folder-open", "Un <strong>objeto</strong> principal (el reporte)…"],
      ["fa-layer-group", "…que contiene un <strong>array</strong> de otros objetos (cada venta)."],
      ["fa-filter", "Entender esto es lo que después permite armar filtros avanzados en Make."],
    ])}</div></div>`
  ),
  S.content(
    "Casos Reales y Errores Comunes",
    table(
      ["Caso / error", "Qué pasa y qué hacer"],
      [
        ["Marketer freelance", "Usaba el modelo más caro para ideas de posts. Pasó al modelo chico: ~90 % más barato, mismo resultado."],
        ["Administrativo de PYME", "El CRM no tiene integración: con un Webhook y un JSON básico (nombre + teléfono) se conecta igual."],
        ["Bucle infinito", "Flujo \"mail → fila\" y otro \"fila → mail\": consumen todas las operaciones en minutos."],
        ["JSON sin comillas dobles", "❌ {nombre: \"Juan\"}  ✅ {\"nombre\": \"Juan\"}"],
        ["Confundir { } con [ ]", "Llaves para describir una cosa; corchetes para una lista."],
      ]
    )
  ),
  S.content(
    "Micro-Práctica: Validá un JSON Roto",
    badge("5 minutos · jsonlint.com", "live", "fa-bug") +
      code(`{ 'fecha': '2026-05-10', "vendedor": "Carlos Ruiz", "ventas_realizadas": [ {"producto": "Suscripción Mensual", "monto": 29.99}, {"producto": "Pack Iconos", "monto": 15.00}, ], "total_dia": 44.99 }`, 14) +
      bullets([
        ["fa-paste", "Pegalo en <strong>jsonlint.com</strong> → Validate JSON. Lo que importa del error es el <strong>número de línea</strong>."],
        ["fa-magnifying-glass", "Tiene <strong>dos errores</strong>: comillas simples y una coma huérfana al final del array."],
        ["fa-triangle-exclamation", "Ojo: jsonlint valida la <strong>sintaxis</strong>, no la lógica. El total está mal y dice \"Valid JSON\" igual."],
      ]) +
      note("Esto es el 40 % de la PE2: \"El archivo JSON es 100 % válido en jsonlint.com\".")
  ),
  S.content(
    "Demo: ¿Cuánto Cuesta el Proyecto Ejemplo?",
    split(
      badge("Inmobiliaria de alquileres temporarios", "live", "fa-calculator") +
        bullets([
          ["fa-diagram-project", "El escenario del Módulo 3: formulario → OpenAI → router → Airtable → Slack = <strong>~5 operaciones</strong> por consulta."],
          ["fa-calendar", "300 consultas por mes × 5 = <strong>~1.500 operaciones</strong>."],
          ["fa-circle-exclamation", "El plan gratuito de Make trae <strong>1.000</strong> por mes. No alcanza."],
        ]),
      ["fa-lightbulb", "¿Cómo lo resolverían?", "Filtrar antes de llamar a la IA, agrupar consultas, pasar a un plan pago… o usar n8n self-hosted, que no cobra por operación."]
    )
  ),
  S.content(
    "Práctica 2: Costos y Variables de tu Proceso",
    badge("Paso 2 de la Pre-Entrega 2 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-repeat", "<strong>Estimá el costo:</strong> ¿cuántas veces por mes corre? ¿cuántos pasos tiene? Multiplicá y compará con el plan gratuito."],
        ["fa-tags", "<strong>Listá las variables:</strong> qué datos viajan por el flujo (ej. nombre, email, presupuesto, fechas)."],
        ["fa-list", "Marcá cuáles son <strong>listas</strong>: van a ser arrays en tu JSON."],
      ]) +
      note("Tarea para la clase 4: traer la lista de variables. Ahí armamos la base y el JSON.")
  ),
  S.content(
    "Síntesis de la Clase",
    bullets([
      ["fa-stairs", "No-Code y Low-Code son <strong>escalones</strong>: agilidad hoy, escalabilidad mañana."],
      ["fa-gas-pump", "Los costos (tasks, operations, tokens) son la <strong>gasolina</strong>: calculá cuánto rinde el tanque antes de salir."],
      ["fa-box", "Las estructuras de datos (objetos, arrays, JSON) son los <strong>contenedores de carga</strong>: si no tienen la forma correcta, el destino no los abre."],
      ["fa-language", "La IA puede ayudarte a cruzar el puente: \"escribime un código simple para extraer el nombre de este texto\"."],
    ])
  ),
  S.links([
    ["fa-check-double", "jsonlint.com", "Validar la sintaxis de cualquier JSON antes de entregar.", "jsonlint.com"],
    ["fa-coins", "Precios de Make", "Cuántas operaciones trae cada plan.", "make.com/en/pricing"],
    ["fa-coins", "Precios de Zapier", "Para comparar tasks con operations.", "zapier.com/pricing"],
  ]),
  S.dudas(),
]);

// ================= CLASE 4 =================
build(4, "Clase 04 - Airtable, Omni AI y tu Ecosistema", [
  S.cover(4, 2, "Conexiones, Omni AI y tu Ecosistema Completo", "Del Google Sheet desordenado a una base inteligente en Airtable, las cuatro piezas de todo ecosistema, y la Pre-Entrega 2"),
  S.recap(
    [
      ["fa-scale-balanced", "No-Code para la agilidad, Low-Code para la escalabilidad."],
      ["fa-coins", "Cada ejecución cuesta: tasks, operations y tokens."],
      ["fa-code", "JSON: objetos <strong>{ }</strong>, arrays <strong>[ ]</strong>, comillas dobles y sin comas huérfanas."],
    ],
    "Hoy construimos el Cerebro de verdad y presentamos la Pre-Entrega 2."
  ),
  S.objetivos([
    ["fa-arrows-left-right", "Entender por qué no hay sincronización bidireccional gratuita entre Sheets y Airtable, y qué herramientas puente existen."],
    ["fa-wand-magic-sparkles", "Usar un <strong>prompt específico</strong> para que Omni AI construya una base."],
    ["fa-cubes", "Ubicar cada herramienta en su función: <strong>Cerebro, Sistema Nervioso, Cara e Inteligencia</strong>."],
    ["fa-flag-checkered", "Salir con <strong>tu base en Airtable</strong>, el <strong>JSON validado</strong> y la consigna de la <strong>PE2</strong>."],
  ]),
  S.transition("Tema 01", "Conexiones y Omni AI", "Un cliente te da un Google Sheet desordenado con 500 leads. En vez de transcribir durante horas, los llevás a Airtable y le pedís a una IA que diseñe la estructura."),
  S.content(
    "Google Sheets y Airtable: Aliados, no Rivales",
    twoTiled(
      ["fa-arrow-right-from-bracket", "Airtable → Sheets (salida): fácil", "<p>Con las <strong>Automations</strong> de Airtable: trigger \"cuando un registro cumple una condición\" (Status = Finalizado) → acción \"Google Sheets: Append row\".</p><p style=\"margin-top: 12px;\">Ej.: cada proyecto finalizado se suma al Sheet del contador.</p>"],
      ["fa-door-closed", "Sheets → Airtable (entrada): la puerta unidireccional", "<p>Airtable es una oficina con una puerta que solo abre hacia afuera. Para que entre información sola hace falta un <strong>\"cartero\"</strong>.</p><p style=\"margin-top: 12px;\">No hay sincronización bidireccional nativa y gratuita.</p>"]
    )
  ),
  S.content(
    "Herramientas Puente: los \"Carteros\" de Datos",
    tiles([
      ["fa-arrows-rotate", "Whalesync", "La favorita para sincronización <strong>bidireccional</strong>: cambiás algo en un lado y cambia en el otro."],
      ["fa-link", "Byteline", "Simple para freelancers que conectan tablas de clientes sin complicaciones."],
      ["fa-download", "Data Fetcher", "Extensión de Airtable que trae datos de Sheets bajo demanda."],
    ]) + note("Para mandar datos nuevos: automatizaciones internas. Para dos archivos espejo: una herramienta externa.")
  ),
  S.content(
    "Omni AI: tu Arquitecto Digital",
    split(
      badge("No es un chatbot: es un generador de aplicaciones", "tip", "fa-wand-magic-sparkles") +
        bullets([
          ["fa-table", "Le hablás en lenguaje natural y <strong>crea las tablas</strong>, los tipos de campo, las relaciones y las vistas."],
          ["fa-hammer", "<strong>El carpintero mágico:</strong> no le das planos, le decís qué mueble necesitás. Vos seguís siendo el arquitecto."],
        ]),
      ["fa-circle-info", "Verificalo en tu plan", "Omni AI y los créditos de IA dependen del plan de Airtable. Si no lo tenés, el prompt igual sirve para diseñar la base a mano."]
    )
  ),
  S.content(
    "El Poder del Prompt en Omni AI",
    twoTiled(
      ["fa-xmark", "Prompt vago", "<p><em>\"Hazme una base de datos para mi negocio.\"</em></p><p style=\"margin-top: 12px;\">Resultado: algo genérico que probablemente no sirva.</p>"],
      ["fa-check", "Prompt profesional", "<p><em>\"Crea una base para un negocio de coaching. Tabla de Clientes (email y teléfono), tabla de Sesiones (fecha, notas, status de pago) y tabla de Paquetes de Horas. Conecta las sesiones con los clientes y agrega una vista de calendario.\"</em></p>"]
    ) + note("Usá guardrails: decile los estados exactos (\"En Proceso\", \"Pausado\", \"Terminado\") para que cree el Single select como lo necesitás.")
  ),
  S.content(
    "Demo: la Base de la Inmobiliaria",
    badge("Proyecto ejemplo · prompt a Omni AI", "live", "fa-play") +
      `<div class="code-block" style="font-family: var(--font-main); font-size: 15px; line-height: 1.6; white-space: normal;">"Crea una base para una inmobiliaria de alquileres temporarios. Una tabla de <strong>Propiedades</strong> (nombre, tipo cabaña/departamento, capacidad, precio por noche en moneda, ubicación, servicios como selección múltiple, fotos). Una tabla de <strong>Consultas</strong> (nombre, email, fecha de entrada, fecha de salida, huéspedes, presupuesto, mensaje, prioridad Alta/Baja, estado Nueva/Respondida/Reservada/Descartada) vinculada a Propiedades. Y una tabla de <strong>Reseñas</strong> (propiedad vinculada, puntaje 1 a 5, texto, fecha). Agregá una vista Kanban de Consultas por estado."</div>` +
      note("Después de generar: revisar que el presupuesto sea número o moneda y que los estados estén como los pedimos.")
  ),
  S.content(
    "Errores Comunes y Mejores Prácticas",
    table(
      ["Error", "Mejor práctica"],
      [
        ["Confundir importar con sincronizar", "Importar un CSV es una foto estática; sincronizar es un flujo vivo que trae los cambios."],
        ["Exceso de confianza en la IA", "Revisá siempre la estructura: que un precio sea Currency y no Single line text."],
        ["No usar guardrails", "Decile qué NO querés y los formatos exactos de tus estados."],
      ]
    )
  ),
  S.content(
    "Práctica 3: Construí el Cerebro",
    badge("Paso 3 de la Pre-Entrega 2 · ejercicio del programa", "live", "fa-flask-vial") +
      `<div class="two-column" style="grid-template-columns: 1fr 1fr;"><div>${table(
        ["Columna", "Tipo de campo"],
        [
          ["Nombre", "Single line text"],
          ["Email", "Email"],
          ["Presupuesto", "Number (o Currency)"],
          ["Estado", "Single select: Nuevo, Contactado, Cerrado"],
        ]
      )}</div><div>${bullets([
        ["fa-user-plus", "Cuenta gratuita en <strong>airtable.com</strong>."],
        ["fa-database", "Base <strong>Ecosistema</strong> con una tabla <strong>Leads</strong>."],
        ["fa-keyboard", "3 filas inventadas: una de presupuesto alto y otra bajo."],
        ["fa-camera", "<strong>Captura</strong> de la tabla: la van a usar en el Módulo 3."],
      ])}</div></div>` +
      note("Fijate en el tipo de campo: si Presupuesto queda como texto, Make no va a poder filtrar por monto.")
  ),
  S.brk(),
  S.transition("Tema 02", "Tu Ecosistema Completo", "Una idea que ahorra 10 horas por semana y un área de IT con 6 meses de espera. Hace una década moría en una servilleta. Hoy es la democratización del software."),
  S.content(
    "Las 4 Funciones de Todo Ecosistema",
    tiles([
      ["fa-brain", "Cerebro", "Donde vive el dato: Airtable, Google Sheets, Notion."],
      ["fa-diagram-project", "Sistema Nervioso", "Mueve los datos: Make, Zapier, Power Automate (y n8n)."],
      ["fa-display", "Cara", "Lo que el usuario ve y toca: Softr, Glide, Bubble."],
      ["fa-wand-magic-sparkles", "Inteligencia", "Procesa, resume y genera: GPT de OpenAI, Claude."],
    ]) + note("Un lead entra en Airtable → Make lo manda a Slack → el equipo lo ve en Softr. ¿Dónde ponés la IA?")
  ),
  S.content(
    "Por Qué Ahora: la Cocina Profesional",
    split(
      bullets([
        ["fa-seedling", "<strong>Programación tradicional:</strong> cultivar los vegetales y fabricar los cuchillos antes de cocinar."],
        ["fa-bowl-food", "<strong>Low-Code:</strong> ingredientes pre-cortados y salsas base, pero hace falta técnica."],
        ["fa-cubes", "<strong>No-Code:</strong> cocina modular de ensamblaje; elegís y combinás siguiendo una receta."],
      ]),
      ["fa-chart-line", "Lo que ganan las empresas", "Agilidad (de meses a una semana), reducción de costos y alineación con el negocio: quien conoce el problema construye la solución."]
    )
  ),
  S.content(
    "Errores del Arquitecto",
    table(
      ["Error", "Qué pasa"],
      [
        ["Ceguera de planificación", "\"No hay código, no hace falta diseñar.\" Sin diagrama, caos."],
        ["Subestimar el modelado de datos", "Texto en una columna de moneda: flujos que fallan en silencio."],
        ["Efecto Frankenstein", "15 herramientas cuando una robusta hace el 80 %. Cada conexión es un punto de falla."],
        ["Ignorar los límites de ejecución", "Un flujo que corre cada minuto sin necesidad agota el presupuesto en un día."],
      ]
    ) + note("El futuro: la IA como traductor universal. Igual hay que entender la estructura para darle buenas instrucciones.")
  ),
  S.content(
    "Demo: el Ecosistema del Proyecto Ejemplo",
    tiles([
      ["fa-brain", "Cerebro", "Airtable: Propiedades, Consultas y Reseñas."],
      ["fa-diagram-project", "Sistema Nervioso", "n8n como principal; Make en los módulos 3 y 5."],
      ["fa-display", "Cara", "Slack para el equipo, WhatsApp y Gmail para el huésped, y un dashboard."],
      ["fa-wand-magic-sparkles", "Inteligencia", "OpenAI para calificar consultas; Claude para leer y redactar."],
    ])
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 2: Estructura de Datos JSON y Matriz Estratégica", "Analizar tu proceso, justificar el stack que elegiste y estructurar sus variables en un formato universal.", "live"),
  S.content(
    "Pasos a Seguir",
    bullets([
      ["fa-1", "Tomá el proceso del Módulo 1 y <strong>desglosá sus pasos</strong>."],
      ["fa-2", "Escribí una <strong>justificación de mínimo 100 palabras</strong>: No-Code (Zapier/Make) o Low-Code (n8n), basada en flexibilidad, velocidad, límites técnicos y costos."],
      ["fa-3", "En un editor de texto simple, creá un <strong>Objeto principal { } que contenga un Array [ ]</strong>."],
      ["fa-4", "Comillas dobles en claves y textos; <strong>sin comas huérfanas</strong>."],
      ["fa-5", "<strong>Validá en jsonlint.com.</strong> Formato: PDF con la justificación y el JSON validado."],
    ])
  ),
  S.content(
    "Ejemplo: el JSON de una Consulta",
    `<div class="two-column" style="grid-template-columns: 1.15fr 0.85fr;"><div>${code(
      '{\n  "consulta_id": "C-0042",\n  "nombre": "Ana Pérez",\n  "email": "ana@mail.com",\n  "fecha_entrada": "2027-01-10",\n  "fecha_salida": "2027-01-17",\n  "huespedes": 4,\n  "presupuesto_por_noche": 120000,\n  "prioridad": "Alta",\n  "propiedades_sugeridas": [\n    {"nombre": "Cabaña Los Coihues", "capacidad": 4},\n    {"nombre": "Depto Centro Cívico", "capacidad": 5}\n  ]\n}',
      13
    )}</div><div>${bullets([
      ["fa-id-card", "Un <strong>objeto</strong> principal: la consulta."],
      ["fa-list", "Un <strong>array</strong> de objetos: las propiedades sugeridas."],
      ["fa-hashtag", "Números sin comillas; texto con comillas dobles."],
      ["fa-circle-check", "Validado en jsonlint antes de entregar."],
    ])}</div></div>`
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Sintaxis y formato JSON", "100 % válido en jsonlint.com: comillas dobles, sin comas huérfanas.", "<strong>40 %</strong>"],
        ["Modelado relacional de datos", "Al menos un Objeto { } y un Array [ ] de elementos anidados descriptivos.", "<strong>30 %</strong>"],
        ["Justificación estratégica", "Párrafo de mínimo 100 palabras sobre flexibilidad, velocidad, límites y costos.", "<strong>30 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts")
  ),
  S.slido("Práctica 4: tu JSON", "Armá el JSON de tu proceso", "Con las variables que trajiste de la clase 3.", "{ objeto } + [ array ]", "Validalo en jsonlint y pegalo en el chat cuando diga \"Valid JSON\"."),
  S.content(
    "Cerramos el Módulo 2",
    split(
      bullets([
        ["fa-brain", "Construiste el <strong>Cerebro</strong> de tu sistema en Airtable."],
        ["fa-code", "Dominaste el JSON, el idioma con el que se hablan las herramientas."],
        ["fa-calendar-check", "<strong>PE2:</strong> se recomienda entregarla antes de la <strong>clase 7</strong>."],
      ]),
      ["fa-forward", "Próximo: Módulo 3 · Make", "Conectás tu base de Airtable a tu primer escenario. Traé la captura de tu tabla y creá tu cuenta gratuita de Make antes de la clase 5."]
    )
  ),
  S.dudas("¡Cerramos el Módulo 2!"),
]);
console.log("m2 ok");
