const { S, badge, note, bullets, tiles, table, code, twoTiled, split, flow, chain, build } = require("./lib");

// ================= CLASE 5 =================
build(5, "Clase 05 - La Interfaz de Make + Routers y Filtros", [
  S.cover(5, 3, "La Interfaz de Make: Routers, Filtros y Transformación", "Tu primer escenario real: triggers, acciones, operaciones y un flujo que ya no es una línea recta, sino que toma decisiones"),
  S.recap(
    [
      ["fa-brain", "En el Módulo 2 construimos el <strong>Cerebro</strong> en Airtable y aprendimos JSON."],
      ["fa-coins", "Cada paso de Make consume una <strong>operación</strong>: diseñar es hacer más con menos."],
      ["fa-calendar-check", "La <strong>PE2</strong> se recomienda entregar antes de la clase 7."],
    ],
    "Hoy hacemos que los datos se muevan solos: llegó Make."
  ),
  S.objetivos([
    ["fa-display", "Navegar la interfaz de Make: <strong>escenarios, módulos, triggers, acciones y búsquedas</strong>."],
    ["fa-tower-broadcast", "Explicar <strong>polling vs instant (webhooks)</strong>, operaciones, mapping y conexiones."],
    ["fa-shuffle", "Usar un <strong>Router con filtros sin solapamiento</strong> y una función de transformación."],
    ["fa-flag-checkered", "Salir con <strong>tu cuenta de Make</strong>, una conexión hecha y el <strong>escenario VIP / Estándar</strong> funcionando."],
  ]),
  S.transition("Tema 01", "Descubriendo la Interfaz de Make", "Un asistente incansable que no duerme, no se olvida de copiar los datos de un mail a la hoja y manda la bienvenida en el segundo exacto en que alguien se registra. Ese asistente es Make."),
  S.content(
    "El Escenario: tu Lienzo de Creación",
    split(
      badge("Más de 1.000 apps conectables sin código", "tip", "fa-plug") +
        bullets([
          ["fa-file-lines", "En Make una automatización se llama <strong>Escenario</strong> (Scenario): una receta visual con ingredientes (datos), pasos (módulos) y un resultado."],
          ["fa-eye", "Se <strong>ve</strong> el flujo: si el dato va de Gmail a Sheets, hay una línea literal entre los dos íconos."],
        ]),
      ["fa-circle-nodes", "Los módulos", "Los círculos del lienzo. Cada uno es una pieza: un trigger, una acción o una búsqueda, conectados con líneas."]
    )
  ),
  S.content(
    "Los Módulos: las Piezas del Puzzle",
    tiles([
      ["fa-bolt", "Triggers — el \"cuándo\"", "Siempre el primer módulo. <strong>Polling:</strong> Make pregunta cada X minutos \"¿hay algo nuevo?\". <strong>Instant / Webhook:</strong> la app avisa en el momento."],
      ["fa-gears", "Acciones — el \"qué\"", "Crean, mueven, borran o modifican datos. Ej.: mandar a Slack el contenido de un tweet."],
      ["fa-magnifying-glass", "Búsquedas — \"encontrá esto\"", "Traen un dato para usarlo después. Ej.: ¿este cliente ya tiene una suscripción activa en Airtable?"],
    ])
  ),
  S.content(
    "Anatomía de una Conexión",
    tiles([
      ["fa-coins", "Operaciones", "Cada módulo que hace algo con éxito consume una. Trigger + acción, una vez = 2 operaciones. Los planes se cobran por operaciones."],
      ["fa-arrows-left-right", "Mapping", "Arrastrar la variable <strong>Nombre</strong> del formulario al cuerpo del mail. Nunca escribir \"Juan\" a mano."],
      ["fa-key", "Conexiones", "El permiso para entrar a Gmail o Notion vía <strong>OAuth</strong>. Guardan el permiso, no la contraseña, y se pueden revocar."],
    ])
  ),
  S.content(
    "Demo: Cuenta, Escenario y Primera Conexión",
    badge("En vivo en make.com", "live", "fa-play") +
      bullets([
        ["fa-1", "make.com → <strong>Sign up with Google</strong> → plan <strong>Free</strong>."],
        ["fa-2", "Scenarios → <strong>Create a new scenario</strong>: se abre el lienzo en blanco."],
        ["fa-3", "El \"+\" del centro → Google Sheets → elegir trigger o acción → <strong>Add</strong> conexión → elegir la cuenta → <strong>Permitir</strong>."],
        ["fa-4", "<strong>Verificar:</strong> si el desplegable muestra tus hojas, la conexión funciona."],
      ])
  ),
  S.content(
    "Errores Comunes en Make",
    table(
      ["Error", "Qué pasa"],
      [
        ["Empezar con una acción", "Sin trigger, \"Run once\" funciona para probar, pero el flujo nunca se activa solo."],
        ["Confundir búsqueda con acción", "\"Buscar contacto\" no lo crea si no existe. Para crear hace falta un módulo \"Create…\"."],
        ["Olvidar el interruptor Scheduling", "Abajo a la izquierda. Si está en OFF, el asistente está durmiendo."],
      ]
    ) + note("Caso real: de lead a notificación en tiempo real. Watch New Responses en Sheets → mensaje en Slack. El tiempo de respuesta baja de 4 horas a 30 segundos.")
  ),
  S.content(
    "Idempotencia: un Concepto que Vas a Escuchar",
    split(
      bullets([
        ["fa-repeat", "Una operación es <strong>idempotente</strong> cuando ejecutarla varias veces da el mismo resultado que ejecutarla una."],
        ["fa-clone", "Importa con los <strong>reintentos</strong>: si \"crear contacto\" no es idempotente, un reintento lo duplica."],
        ["fa-magnifying-glass", "La solución: <strong>buscar antes de crear</strong>, o una clave única que la app rechace si se repite."],
      ]),
      ["fa-map", "Mapa vivo ↔ material", "APIs y HTTP Request → Módulo 4 (n8n). Webhooks → acá y en el Módulo 4. Si algo del vivo todavía no está en el material, aparece más adelante."]
    )
  ),
  S.content(
    "Práctica 1: tu Primer Escenario",
    badge("Paso 1 de la Pre-Entrega 3 · 15 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-user-plus", "Crear la cuenta de Make (Free)."],
        ["fa-bolt", "Escenario nuevo con trigger <strong>Google Sheets → Watch New Rows</strong> (o Airtable → Watch Records) sobre tu base de la clase 4."],
        ["fa-key", "Autorizar la conexión y verificar que aparezcan tus hojas o tablas."],
        ["fa-tag", "Ponerle nombre al escenario."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Lógica de Flujos: Routers, Filtros y Transformación", "En una cafetería no todos quieren lo mismo. Tratarlos igual es un caos. El mundo real no es una línea recta: es un mapa lleno de bifurcaciones."),
  S.content(
    "Bundles y Routers",
    split(
      badge("Cada formulario crea una caja que recorre el escenario", "tip", "fa-box") +
        bullets([
          ["fa-box-open", "<strong>Bundle:</strong> la caja con sobres etiquetados (Nombre, Email, Presupuesto)."],
          ["fa-code-branch", "<strong>Router:</strong> divide el flujo en 2 o más caminos y <strong>duplica</strong> la caja: con 3 rutas viajan 3 copias a la vez."],
        ]),
      ["fa-envelope", "El cartero que se teletransporta", "En vez de ir a Ventas, después a Soporte y después a Finanzas, deja una copia en cada puerta al mismo tiempo. Pero el Router solo no decide: copia a todos."]
    )
  ),
  S.content(
    "Filtros: los Guardias de Seguridad",
    tiles([
      ["fa-tag", "Condición", "Qué etiqueta de la caja mirar. Ej.: Presupuesto."],
      ["fa-not-equal", "Operador", "Qué regla aplicar: mayor que, contiene, existe…"],
      ["fa-hashtag", "Valor", "Con qué comparar. Ej.: 1000."],
    ]) + note("Por qué importan: ahorran operaciones (frenan el spam al principio) y dan precisión (no mandar \"Bienvenida VIP\" a un suscriptor gratuito).")
  ),
  S.content(
    "Transformación: el Traductor Universal",
    table(
      ["Función", "Para qué", "Ejemplo"],
      [
        ["split", "Dividir un texto", "De \"Juan Pérez\" sacar solo \"Juan\""],
        ["formatDate", "Cambiar el formato de una fecha", "2026-05-20 → 20 de mayo"],
        ["upper / lower", "Mayúsculas o minúsculas", "\"ana\" → \"ANA\""],
        ["parseNumber", "Convertir texto en número", "\"100 USD\" → 100, para poder sumar o comparar"],
      ]
    )
  ),
  S.content(
    "Caso Guiado: Calificá tus Leads con un Router",
    badge("Práctica guiada · no evaluable · 20–30 min", "live", "fa-flask-vial") +
      code(`[Lead entrante] ──→ [¿VIP o Estándar?] ──┬─ (Lead VIP: presupuesto > 1000) ──→ [Avisar lead VIP]  (Slack / Gmail)
                                          └─ (Lead Estándar: ≤ 1000) ─────────→ [Registrar lead]   (Sheets / Airtable)`, 14) +
      bullets([
        ["fa-filter", "Filtros <strong>sin solapamiento</strong>: <strong>&gt; 1000</strong> y <strong>≤ 1000</strong>. Con \"≥ 1000\" en los dos, un lead de 1000 dispara las dos rutas."],
        ["fa-font", "En el aviso VIP: <code>{{upper(nombre)}}</code> para que el nombre salga en mayúsculas."],
      ])
  ),
  S.content(
    "El Caso Paso a Paso",
    bullets([
      ["fa-1", "<strong>Trigger:</strong> Google Sheets → Watch New Rows (nombre, email, presupuesto)."],
      ["fa-2", "<strong>Router</strong> con dos ramas: arriba VIP, abajo Estándar."],
      ["fa-3", "<strong>Filtros:</strong> label \"Lead VIP\" (Greater than 1000) y \"Lead Estándar\" (Less than or equal to 1000)."],
      ["fa-4", "<strong>Acciones:</strong> Slack o Gmail en la VIP; Sheets o Airtable Add a Row en la Estándar."],
      ["fa-5", "<strong>Run once</strong> con dos filas (1500 y 800): cada lead tiene que encender una sola rama."],
      ["fa-6", "<strong>Renombrar</strong> los módulos según lo que hacen: \"Lead entrante\", \"Avisar lead VIP\"…"],
    ])
  ),
  S.content(
    "Demo: las Consultas de la Inmobiliaria",
    flow({
      trigger: "Nueva consulta en Airtable",
      action: "Make lee el presupuesto total",
      decision: "¿Presupuesto alto?",
      si: "Aviso a Slack con el nombre en MAYÚSCULAS",
      no: "Registro silencioso en Airtable",
      fin: "Consulta derivada",
      tags: { action: "Mapping" },
    }) + `<p class="flow-legend">Cada consulta enciende <strong>una sola rama</strong>. Así se ve en el Run once.</p>`
  ),
  S.content(
    "Si Terminás Antes: Hacelo a Prueba de Fallos",
    split(
      bullets([
        ["fa-rotate-right", "Clic derecho en el módulo de Slack → <strong>Add error handler</strong> → <strong>Break</strong>, 3 intentos, 15 segundos."],
        ["fa-table-list", "En la rama de error, una fila de <strong>log</strong> en Sheets: fecha, nombre del lead y mensaje de error."],
        ["fa-clock-rotate-left", "Verificar en <strong>History</strong>: punto verde o rojo por ejecución."],
      ]),
      ["fa-list-check", "Autoevaluación del caso", "Router 30 % · filtros 25 % · acciones finales 20 % · transformación 15 % · evidencias del Run once 10 %. No es evaluable: es entrenamiento para la PE3."]
    )
  ),
  S.content(
    "Síntesis y Tarea",
    bullets([
      ["fa-display", "<strong>Escenarios</strong> y <strong>módulos</strong>: triggers (el inicio), acciones (el trabajo) y búsquedas (la información)."],
      ["fa-arrows-left-right", "<strong>Mapping</strong> para pasar datos de un módulo a otro; <strong>operaciones</strong> como costo."],
      ["fa-code-branch", "El <strong>Router</strong> duplica; el <strong>filtro</strong> decide; la <strong>transformación</strong> traduce."],
      ["fa-house-laptop", "<strong>Tarea:</strong> terminar el caso guiado. En la clase 6 le sumamos OpenAI y el Error Handler, y queda la PE3."],
    ])
  ),
  S.links([
    ["fa-circle-info", "Make — Centro de ayuda", "Escenarios, módulos, routers y filtros.", "help.make.com"],
    ["fa-rocket", "Make — Cómo empezar", "Triggers, acciones y búsquedas paso a paso.", "make.com/en/help/get-started"],
    ["fa-wand-magic-sparkles", "Make — Functions", "Funciones para limpiar y transformar datos.", "make.com/en/help/functions"],
  ]),
  S.dudas(),
]);

// ================= CLASE 6 =================
build(6, "Clase 06 - JSON y Variables + OpenAI y Error Handling", [
  S.cover(6, 3, "JSON, Variables y Flujos Profesionales: OpenAI y Error Handling", "Del flujo que funciona al flujo que piensa y que no se rompe cuando algo falla. Y la Pre-Entrega 3"),
  S.recap(
    [
      ["fa-display", "Make: escenarios, módulos, operaciones, mapping y conexiones."],
      ["fa-code-branch", "Router duplica, filtro decide: filtros <strong>sin solapamiento</strong>."],
      ["fa-font", "Transformación con funciones como <code>upper()</code> y <code>parseNumber()</code>."],
    ],
    "Hoy le damos inteligencia al flujo y una red de seguridad."
  ),
  S.objetivos([
    ["fa-code", "Distinguir tipos de datos en JSON y usar <strong>variables dinámicas</strong> en Make."],
    ["fa-robot", "Configurar <strong>OpenAI</strong> en Make con un prompt que devuelva una palabra exacta."],
    ["fa-shield-halved", "Elegir el <strong>Error Handler</strong> correcto y configurar reintentos con backoff."],
    ["fa-flag-checkered", "Salir con <strong>el escenario de la PE3 casi terminado</strong> y la consigna clara."],
  ]),
  S.transition("Tema 01", "JSON y Variables: el Idioma de los Datos", "Una carta a Japón con la dirección en el formato equivocado nunca llega. Gmail, Airtable, WhatsApp y OpenAI hablan idiomas distintos y se entienden con JSON."),
  S.content(
    "El Problema que Resuelve JSON",
    twoTiled(
      ["fa-shuffle", "Sin estructura", "<p>Una app manda <em>\"Juan Pérez, 30 años, Madrid\"</em>.</p><p style=\"margin-top: 10px;\">Otra espera <em>\"Nombre: Juan | Ciudad: Madrid | Edad: 30\"</em>.</p><p style=\"margin-top: 10px;\">Resultado: no se entienden.</p>"],
      ["fa-receipt", "Receta estructurada", code('{ "plato": "Bizcocho",\n  "ingredientes": ["harina", "huevos", "sal"],\n  "temperatura": 180,\n  "tiempo_minutos": 45 }', 13) + "<p>Si Make necesita el tiempo, busca la etiqueta <code>tiempo_minutos</code>.</p>"]
    )
  ),
  S.content(
    "Tipos de Valores",
    table(
      ["Tipo", "Ejemplo", "Nota"],
      [
        ["Texto (string)", "\"Asistente Virtual\"", "Siempre entre comillas"],
        ["Número", "1500", "Sin comillas"],
        ["Booleano", "true / false", "Interruptores: ¿está pagada la factura?"],
        ["Lista (array)", "[\"Marketing\", \"Ventas\"]", "Entre corchetes"],
      ]
    ) + note("Clave entre comillas dobles, dos puntos entre clave y valor, coma entre pares (nunca después del último).")
  ),
  S.content(
    "Variables y Mapeo",
    split(
      badge("No escribas datos fijos si cambian en cada ejecución", "bug", "fa-triangle-exclamation") +
        bullets([
          ["fa-box", "Una variable es una <strong>caja etiquetada</strong>: hoy dice \"Ana\", mañana \"Carlos\". En Make son las burbujas de colores."],
          ["fa-arrows-left-right", "En vez de \"Hola Juan\", usás <code>{{1.Nombre}}</code>: un solo flujo sirve para miles de casos."],
          ["fa-database", "<strong>Mapeo:</strong> llega <code>{\"email\": \"cliente@ventas.com\"}</code> → elegís la burbuja <code>email</code> en el campo de Airtable."],
        ]),
      ["fa-life-ring", "Guía de supervivencia", "Comillas perdidas: {nombre: \"Luis\"}. Coma final: {\"id\": 1,}. Texto vs número: \"10\" + \"10\" puede dar 1010; usá parseNumber()."]
    )
  ),
  S.content(
    "Práctica 3: Mapeá tus Variables",
    badge("Paso 3 de la Pre-Entrega 3 · 10 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-magnifying-glass", "En tu escenario de la clase 5, revisá que <strong>todas</strong> las acciones usen variables mapeadas."],
        ["fa-ban", "Nada escrito a mano que cambie en cada ejecución."],
        ["fa-tags", "Nombres descriptivos: <code>nombre</code>, <code>email</code>, <code>presupuesto</code>; no \"Value 1\"."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Flujos Profesionales: OpenAI y Error Handling", "Ese nudo en el estómago después de activar un flujo: ¿y si falla mientras no miro? El servidor de correos se cae 2 segundos y el cliente nunca recibe su confirmación."),
  S.content(
    "Tu API Key de OpenAI, Paso a Paso",
    split(
      bullets([
        ["fa-1", "<strong>platform.openai.com</strong> (no es la web de ChatGPT) → perfil → <strong>API keys</strong> → Create new secret key."],
        ["fa-2", "La clave (<code>sk-...</code>) <strong>se muestra una sola vez</strong>: copiala y guardala."],
        ["fa-3", "<strong>Billing:</strong> cargar saldo mínimo y definir un <strong>límite de gasto</strong>. Se paga aparte de ChatGPT Plus."],
        ["fa-4", "En Make: <strong>Create a Chat Completion</strong> → Connection → Add → pegar la key."],
      ]),
      ["fa-lock", "Tratala como una contraseña", "No la pegues en chats ni archivos compartidos. Error 401 = clave mal copiada o cuenta sin saldo. Si se filtra, revocala y generá otra."]
    )
  ),
  S.content(
    "El Prompt Tiene que Devolver una Palabra Exacta",
    twoTiled(
      ["fa-gear", "System", "<p><em>\"Eres un clasificador de leads. Analizas el mensaje del cliente y respondes ÚNICAMENTE con una de estas dos palabras, sin explicaciones ni puntuación: Alta o Baja.\"</em></p>"],
      ["fa-user", "User", "<p><em>\"Clasifica la prioridad de este lead según su intención de compra: \"</em> + la variable del mensaje.</p><p style=\"margin-top: 12px;\">Filtros: <strong>Respuesta = Alta</strong> y <strong>Respuesta = Baja</strong>.</p>"]
    ) + note("Si la IA responde \"Creo que este lead es importante\", el filtro no encuentra coincidencia y el flujo se rompe. Max Tokens: 100–200 para clasificar.")
  ),
  S.content(
    "Los 4 Error Handlers de Make",
    table(
      ["Handler", "Qué hace", "Cuándo usarlo"],
      [
        ["Rollback", "Frena y deshace todo (es el de defecto)", "La opción conservadora"],
        ["Ignore", "Ignora el error y sigue", "Solo si el paso no es crítico"],
        ["Break", "Reintenta después de un tiempo", "La joya de la corona. <strong>La PE3 lo exige</strong>"],
        ["Resume", "Sigue con un valor sustituto", "Para que los módulos siguientes no fallen"],
      ]
    ) + note("Clic derecho sobre el módulo → Add error handler → aparece una rama gris que solo se activa si ese módulo falla.")
  ),
  S.content(
    "Reintentos: el Repartidor de Pizzas",
    tiles([
      ["fa-trash", "Sin manejo de errores", "Nadie abre a la primera, tira la pizza y se va. Perdés la pizza y la plata."],
      ["fa-rotate-right", "Con Break", "Espera y vuelve a tocar el timbre. Lo intenta 3 veces antes de rendirse."],
      ["fa-building", "Con plan B", "Si nadie abre, deja la pizza en recepción (ruta alternativa) y te avisa."],
    ]) + note("Backoff exponencial: 1 minuto, 5, 15. Veinte reintentos por segundo solo gastan operaciones.")
  ),
  S.content(
    "No Todos los Errores Merecen un Reintento",
    twoTiled(
      ["fa-key", "Error 401 — No autorizado", "<p>La API key está mal. Reintentar 100 veces no lo arregla.</p><p style=\"margin-top: 12px;\"><strong>Alerta inmediata</strong> a Slack o mail.</p>"],
      ["fa-server", "Error 500 — Error del servidor", "<p>Un problema temporal del otro lado.</p><p style=\"margin-top: 12px;\">Acá los <strong>reintentos son obligatorios</strong>.</p>"]
    ) + note("Toda rama de error termina con una notificación para vos: mejor un aviso a tiempo que un cliente ignorado una semana.")
  ),
  S.content(
    "Demo: el Escenario Completo de la Inmobiliaria",
    badge("Proyecto ejemplo · en vivo en Make", "live", "fa-play") +
      code(`[Nueva consulta] → [OpenAI: califica Alta/Baja] → [Router] ┬─ Alta → [Aviso a Slack: "Consulta prioritaria"]
                        │                                   └─ Baja → [Registrar en Airtable]
                        └── ⚠ Error Handler Break (3 reintentos)`, 14) +
      bullets([
        ["fa-play", "Run once con una consulta urgente y otra exploratoria: ¿qué rama se enciende en cada una?"],
        ["fa-plug-circle-xmark", "Desconectamos la key y miramos los reintentos en <strong>History</strong>."],
      ])
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 3: Primer Flujo Operativo en Make para Leads", "Un escenario que captura un lead, usa OpenAI para calificarlo y bifurca el camino de forma automática y a prueba de fallos.", "live"),
  S.content(
    "Pasos a Seguir",
    bullets([
      ["fa-1", "Escenario nuevo con un <strong>Trigger real</strong> (Google Sheets, Forms o Gmail)."],
      ["fa-2", "<strong>OpenAI (Create a Chat Completion)</strong> con prompt <strong>mapeado a variables</strong> del paso anterior."],
      ["fa-3", "<strong>Router</strong> con dos rutas: Prioridad Alta y Prioridad Baja."],
      ["fa-4", "<strong>Filtro</strong> en cada rama que valide la palabra exacta que devuelve la IA."],
      ["fa-5", "<strong>Obligatorio:</strong> clic derecho sobre OpenAI → Add error handler → <strong>Break con 3 reintentos</strong>."],
    ]) + note("Si hiciste el caso guiado de la clase 5, solo le sumás OpenAI y el Error Handler.")
  ),
  S.content(
    "Formato de Entrega y Checklist",
    twoTiled(
      ["fa-link", "Un solo link público", "<p>Un Google Doc o página de Notion con el <strong>JSON del blueprint pegado como texto</strong> + la <strong>captura del Run once</strong> con las dos rutas.</p><p style=\"margin-top: 12px;\">Permisos públicos; probalo en una ventana de incógnito.</p>"],
      ["fa-list-check", "Checklist", "<p>✓ Trigger conectado · ✓ OpenAI con variables · ✓ Router con 2 rutas · ✓ Filtros sin solapamiento · ✓ Break con 3 reintentos · ✓ Link + captura</p><p style=\"margin-top: 12px;\">Evitá subir el .json suelto sin permisos.</p>"]
    )
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Orquestación y filtros", "Trigger externo, Router obligatorio y 2+ caminos condicionados por filtros (Alta vs Baja).", "<strong>40 %</strong>"],
        ["Resiliencia y manejo de errores", "Error Handler visible, en modo Break con reintentos automáticos.", "<strong>40 %</strong>"],
        ["Procesamiento dinámico de IA", "OpenAI con variables dinámicas para calificar al prospecto.", "<strong>20 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts. Sumá cuántas operaciones consume cada ejecución: es parte de los objetivos.")
  ),
  S.content(
    "Práctica 4 y Cierre",
    split(
      badge("Paso 4 de la Pre-Entrega 3", "live", "fa-flask-vial") +
        bullets([
          ["fa-robot", "Sumá OpenAI y el Error Handler a tu escenario y hacé el primer Run once."],
          ["fa-calendar-check", "<strong>PE3:</strong> se recomienda entregarla antes de la <strong>clase 9</strong>."],
        ]),
      ["fa-forward", "Próximo: Módulo 4 · n8n", "El paso de No-Code a Low-Code, con agentes de IA. Para la clase 7: decidir si van a usar n8n Cloud (prueba gratuita) o instalado en su máquina."]
    )
  ),
  S.links([
    ["fa-arrows-left-right", "Make — Mapping", "Cómo pasar datos de un módulo a otro.", "make.com/en/help/mapping"],
    ["fa-code", "MDN — JSON", "Sintaxis, tipos y errores comunes.", "developer.mozilla.org"],
    ["fa-robot", "OpenAI — API", "Cómo funciona el módulo que conectás en Make.", "platform.openai.com/docs"],
  ]),
  S.dudas("¡Cerramos el Módulo 3!"),
]);
console.log("m3 ok");
