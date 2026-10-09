const { S, badge, note, bullets, tiles, table, code, twoTiled, split, flow, build } = require("./lib");

// ================= CLASE 9 =================
build(9, "Clase 09 - Gmail con API + de la App a la API de WhatsApp", [
  S.cover(9, 5, "Gmail con API y la API de WhatsApp", "Del bot que responde \"en 24 horas\" al asistente que entiende el contexto. Y por qué WhatsApp automatizado necesita una API"),
  S.recap(
    [
      ["fa-plug", "HTTP Request: los 5 ingredientes y los errores 400, 401, 403 y 404."],
      ["fa-layer-group", "SplitInBatches para volumen y sub-workflows para no repetirse."],
      ["fa-calendar-check", "La <strong>PE4</strong> se recomienda entregar antes de la clase 11."],
    ],
    "Hoy: los canales por donde realmente hablan tus clientes."
  ),
  S.objetivos([
    ["fa-envelope-open-text", "Explicar por qué la <strong>Gmail API</strong> supera a los filtros de Gmail."],
    ["fa-user-tie", "Diferenciar una respuesta \"robot\" de una respuesta <strong>con contexto</strong>."],
    ["fa-pen-to-square", "Armar el flujo Watch Emails → IA → <strong>borrador</strong> y evitar los 3 errores clásicos."],
    ["fa-brands fa-whatsapp", "Explicar por qué WhatsApp necesita la API y un proveedor, y tener el <strong>sandbox</strong> listo."],
  ]),
  S.transition("Tema 01", "Automatización de Gmail: Respuestas Contextuales", "El lunes abrís Gmail y, en vez de 50 mails repetitivos, hay una carpeta \"IA: Borradores generados\". La IA leyó cada uno y redactó una respuesta personalizada esperando tu aprobación."),
  S.content(
    "La Gmail API: la Puerta Trasera Segura",
    split(
      badge("Gmail es una oficina; vos entrás por la puerta principal", "tip", "fa-door-open") +
        bullets([
          ["fa-key", "La API es una <strong>puerta trasera ultra-segura</strong> para que Make o n8n retiren información y actúen en tu nombre."],
          ["fa-filter", "Los filtros de Gmail son un guardia que solo deja pasar a quien dice una palabra clave."],
        ]),
      ["fa-bolt", "Los 3 superpoderes de la API", "<strong>Sentimiento:</strong> ¿enojado, feliz, confundido? · <strong>Memoria contextual:</strong> correos anteriores · <strong>Lógica multicapa:</strong> queja → Slack; venta → Airtable + link de calendario."]
    )
  ),
  S.content(
    "Contexto: la Diferencia entre un Robot y un Asistente",
    twoTiled(
      ["fa-robot", "Robot básico", "<p><strong>Cliente:</strong> \"Hola, ¿cuándo terminás?\"</p><p style=\"margin-top: 10px;\"><strong>Respuesta:</strong> \"Gracias por contactar. Respondemos en 24 horas.\"</p><p style=\"margin-top: 10px;\">El cliente se siente ignorado.</p>"],
      ["fa-user-tie", "Asistente con contexto", "<p>La IA lee el hilo, ve que prometiste el logo para el viernes y que hoy es jueves.</p><p style=\"margin-top: 10px;\"><strong>Respuesta:</strong> \"Según lo acordado el lunes, tu logo estará listo mañana viernes a primera hora.\"</p>"]
    ) + note("Contexto = el hilo de correos + el tono + los datos que ya tenés en tu base.")
  ),
  S.content(
    "La Arquitectura del Flujo",
    flow({
      trigger: "Gmail: Watch Emails",
      action: "OpenAI redacta con los hechos del negocio",
      decision: "¿Confío ya en el prompt?",
      si: "Send an Email (automático)",
      no: "Create a Draft (lo reviso yo)",
      fin: "Respuesta en el mismo hilo",
      tags: { decision: "Etapa", si: "Más adelante", no: "Al empezar" },
    }) + `<p class="flow-legend"><strong>Empezá con borradores:</strong> revisás, ajustás y enviás. Es aprobación humana, que vemos a fondo en el Módulo 7.</p>`
  ),
  S.content(
    "Casos Reales",
    tiles([
      ["fa-user-tie", "Freelancer", "Detecta \"costo\" o \"presupuesto\" y responde con el link a su brochure de precios en Drive."],
      ["fa-cart-shopping", "E-commerce", "Extrae el número de pedido, busca el estado en Airtable: \"Tu pedido #1234 llega el miércoles\"."],
      ["fa-users", "Asistente con 5 clientes", "Adapta el tono según la marca: formal para un abogado, relajado para un coach."],
    ])
  ),
  S.content(
    "Los 3 Errores Clásicos",
    table(
      ["Error", "Qué pasa", "Solución"],
      [
        ["Loop infinito de correos", "Tu respuesta automática choca con un \"fuera de la oficina\" y se responden sin fin", "Filtro: remitente sin \"noreply\" y asunto sin \"Autoreply\""],
        ["Prompt vago", "\"Respondé este correo\" → la IA inventa que cobrás 500", "Una sección de <strong>hechos innegables</strong>: precios, horarios y servicios reales"],
        ["No manejar hilos", "Cada respuesta crea un mail nuevo", "Mapear el <strong>Thread ID</strong> del correo original"],
      ]
    ) + note("Privacidad: los datos viajan encriptados, pero vos sos responsable de qué le indicás a la IA sobre tus clientes.")
  ),
  S.content(
    "Demo: Gmail de la Inmobiliaria",
    split(
      badge("Proyecto ejemplo · en vivo en Make", "live", "fa-play") +
        bullets([
          ["fa-envelope", "Mail de prueba: \"Somos 4 y queremos ir del 10 al 17 de enero, ¿tienen algo con parrilla?\""],
          ["fa-list-check", "El prompt con los <strong>hechos innegables</strong>: propiedades, precios por noche, check-in, políticas."],
          ["fa-pen-to-square", "El <strong>borrador</strong> aparece en Gmail, en el mismo hilo."],
        ]),
      ["fa-filter", "Antes de OpenAI", "El filtro anti-loop: si el remitente es noreply o el asunto dice Autoreply, el flujo se frena y no gasta nada."]
    )
  ),
  S.content(
    "Práctica 1: Gmail + IA que Resume y Prioriza",
    badge("Paso 1 de la Pre-Entrega 5 · 13 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-envelope", "Escenario nuevo: <strong>Gmail → Watch Emails</strong> (Inbox) con tu Gmail de prueba."],
        ["fa-robot", "<strong>OpenAI → Create a Chat Completion</strong> con el prompt de triaje (abajo)."],
        ["fa-play", "Run once: un mail urgente y uno tranquilo. Revisá que el JSON llegue bien."],
      ]) +
      `<div class="code-block" style="font-family: var(--font-main); font-size: 15px; white-space: normal; font-style: italic;">"Actuá como un triaje de ventas. Analizá este correo y respondé en formato JSON con dos campos: 1. 'resumen': un resumen de 10 palabras. 2. 'prioridad': un número del 1 al 5 (donde 5 es venta urgente hoy mismo)."</div>`
  ),
  S.brk(),
  S.transition("Tema 02", "De la App a la API de WhatsApp", "Un prospecto llena tu formulario a las 11 de la noche. Le llega un WhatsApp de bienvenida, un recurso gratis y, tres días después, una pregunta. Tus clientes no siempre leen el mail: están en WhatsApp."),
  S.content(
    "Los Límites de la App WhatsApp Business",
    split(
      bullets([
        ["fa-users-slash", "No permite varios agentes respondiendo de forma organizada."],
        ["fa-robot", "Sus automatizaciones son básicas: ausencia y bienvenida."],
        ["fa-ban", "<strong>No se conecta oficialmente con Make o n8n</strong> sin riesgo de que bloqueen el número."],
      ]),
      ["fa-door-open", "La WhatsApp Business API", "Una \"puerta de servicio\" que abre Meta para que otros softwares hablen con WhatsApp. Para cruzarla hace falta un <strong>BSP</strong> (Business Solution Provider)."]
    )
  ),
  S.content(
    "Twilio vs Wati: Lego Suelto o Set Armado",
    table(
      ["", "Wati", "Twilio"],
      [
        ["Qué es", "Plataforma \"todo en uno\" para WhatsApp", "Infraestructura"],
        ["Trae", "Bandeja de entrada para el equipo + constructor visual de chatbots", "Nada visible: \"no tiene cara\""],
        ["Costo por mensaje", "Mayor", "Mucho más económico"],
        ["Ideal para", "Simplicidad y rapidez", "Conectarlo a Make o n8n y mandar los mensajes adonde quieras"],
      ]
    )
  ),
  S.content(
    "Sandbox y Webhooks",
    twoTiled(
      ["fa-flask", "Sandbox — la caja de arena", "<p>Twilio y Wati permiten <strong>probar sin pagar</strong> y sin un número de empresa verificado.</p><p style=\"margin-top: 12px;\">Es el simulador de vuelo antes de pilotar el avión.</p>"],
      ["fa-tower-broadcast", "Webhook — cómo salta el mensaje", "<p>Alguien te escribe → WhatsApp avisa al proveedor → el proveedor lanza el mensaje a una <strong>URL especial</strong> que creás en Make o n8n.</p>"]
    )
  ),
  S.content(
    "Demo: el Sandbox de WhatsApp",
    badge("En vivo en la consola de Twilio", "live", "fa-play") +
      bullets([
        ["fa-1", "Consola de Twilio → <strong>WhatsApp Sandbox</strong>: el número del sandbox y el código para unirse."],
        ["fa-2", "Desde tu celular, mandás el código por WhatsApp a ese número."],
        ["fa-3", "En Make: <strong>Twilio → Send a Message</strong> a tu celular, en <strong>formato internacional</strong> (whatsapp:+549…)."],
        ["fa-4", "Dónde se configura la URL del webhook para los mensajes que entran."],
      ]) +
      note("Los pasos exactos de la consola pueden cambiar: seguí los que muestra Twilio en pantalla.")
  ),
  S.content(
    "Práctica 2 y Tarea",
    badge("Paso 2 de la Pre-Entrega 5 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-user-plus", "Crear la cuenta de Twilio y unirse al <strong>WhatsApp Sandbox</strong> desde tu celular."],
        ["fa-paper-plane", "Mandarte un mensaje desde Make con el número en formato internacional."],
        ["fa-house-laptop", "<strong>Tarea para la clase 10:</strong> traer funcionando Gmail → OpenAI (resumen + prioridad) y el sandbox."],
      ])
  ),
  S.content(
    "Síntesis de la Clase",
    bullets([
      ["fa-key", "La <strong>Gmail API</strong> es el puente que permite leer y escribir por vos de forma segura."],
      ["fa-crown", "El <strong>contexto es el rey</strong>: sin contexto es spam; con contexto es atención de calidad."],
      ["fa-pen-to-square", "Empezá siempre con <strong>borradores</strong> antes de pasar al envío automático."],
      ["fa-brands fa-whatsapp", "WhatsApp automatizado necesita la <strong>API</strong> y un <strong>BSP</strong>; para practicar, el sandbox."],
    ])
  ),
  S.dudas(),
]);

// ================= CLASE 10 =================
build(10, "Clase 10 - WhatsApp, Orquestación Multicanal y PE5", [
  S.cover(10, 5, "WhatsApp y Orquestación Multicanal", "La regla de las 24 horas, drips y chatbots, y el arte de usar el canal correcto en el momento justo. Y la Pre-Entrega 5"),
  S.recap(
    [
      ["fa-envelope-open-text", "Gmail con API: contexto, borradores, filtro anti-loop y Thread ID."],
      ["fa-brands fa-whatsapp", "WhatsApp necesita la API y un proveedor (Twilio o Wati)."],
      ["fa-flask", "Tarea: Gmail → OpenAI (resumen + prioridad) y el sandbox funcionando."],
    ],
    "Hoy coordinamos los tres canales como un solo equipo."
  ),
  S.objetivos([
    ["fa-clock", "Explicar la <strong>ventana de 24 horas</strong> y cuándo hace falta una <strong>plantilla</strong> aprobada."],
    ["fa-droplet", "Diseñar un <strong>drip</strong> y un <strong>chatbot de reglas</strong> con salida a humano."],
    ["fa-diagram-project", "Distinguir multicanalidad de <strong>orquestación</strong> y elegir el canal según la urgencia."],
    ["fa-flag-checkered", "Salir con <strong>el pipeline Gmail → IA → Slack / WhatsApp</strong> y la consigna de la <strong>PE5</strong>."],
  ]),
  S.transition("Tema 01", "WhatsApp: 24 Horas, Plantillas, Drips y Chatbots", "El poder de WhatsApp no está en mandar muchos mensajes, sino el mensaje correcto, a la persona correcta, en el momento exacto."),
  S.content(
    "La Regla de las 24 Horas y las Plantillas",
    split(
      badge("WhatsApp protege a sus usuarios del spam", "bug", "fa-shield-halved") +
        bullets([
          ["fa-clock", "No podés mandar <strong>texto libre</strong> salvo que el cliente te haya escrito en las <strong>últimas 24 horas</strong>."],
          ["fa-file-signature", "Para <strong>iniciar</strong> la conversación (un drip, un seguimiento) hace falta una <strong>plantilla pre-aprobada por Meta</strong>."],
          ["fa-triangle-exclamation", "Si respondés con texto libre después de dos días, Make da error. Tené una plantilla de seguimiento lista."],
        ]),
      ["fa-check", "Plantilla que se aprueba", "❌ \"Hola, ¿por qué no compraste?\"<br>✅ \"Hola {{1}}, gracias por tu interés en {{2}}. Acá tenés el catálogo que pediste.\""]
    )
  ),
  S.content(
    "Drips: la Ciencia de la Gotera Constante",
    `<div class="flow">${["Día 0|oval|\"¡Gracias por registrarte! Acá tenés el acceso.\"", "Día 1 (+24 h)|rect|\"¿Pudiste ver el material? Respondé si tenés dudas.\"", "Día 3 (+72 h)|rect|\"Tenemos una oferta que vence mañana. ¿Te interesa?\""]
      .map((t) => {
        const [tag, kind, txt] = t.split("|");
        return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: 250px;">${txt}</div></div>`;
      })
      .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>` +
      `<p class="flow-legend">En WhatsApp la apertura ronda el <strong>90 %</strong>. La ventaja es la consistencia: a una persona se le olvida el día 3; a la automatización, nunca.</p>`
  ),
  S.content(
    "Chatbots de Reglas y Errores Comunes",
    twoTiled(
      ["fa-sitemap", "Un árbol de decisiones", "<p>No todo chatbot necesita IA. \"Precios\" → lista de precios; \"Soporte\" → pasa a un humano.</p><p style=\"margin-top: 12px;\"><strong>En Make:</strong> webhook del mensaje → Router que analiza el texto → respuesta por WhatsApp.</p>"],
      ["fa-triangle-exclamation", "Lo que no hay que hacer", "<p><strong>Mensajes masivos sin consentimiento:</strong> si te marcan como spam, Meta suspende el número para siempre.</p><p style=\"margin-top: 12px;\"><strong>Sin salida humana:</strong> siempre \"Hablar con una persona\" o una rama <em>fallback</em> que avise por Slack.</p>"]
    )
  ),
  S.content(
    "Proyecto Ejemplo: el Drip de una Estadía",
    tiles([
      ["fa-calendar-check", "Al reservar", "Confirmación con los datos de la propiedad. El huésped acaba de escribir: texto libre."],
      ["fa-key", "Un día antes del check-in", "Recordatorio con horario y ubicación. Pasaron más de 24 h: <strong>plantilla</strong>."],
      ["fa-star", "Después del check-out", "Pedido de reseña. También <strong>plantilla</strong>."],
    ])
  ),
  S.content(
    "Práctica 3: Plantilla + Filtro de 24 h",
    badge("Paso 3 de la Pre-Entrega 5 · 10 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-file-signature", "Redactá una <strong>plantilla</strong> de seguimiento para tu proceso con variables {{1}}, {{2}}."],
        ["fa-filter", "Pensá el <strong>filtro</strong>: último mensaje del cliente hace menos de 24 h → texto libre; si no → plantilla."],
      ]) +
      note("En el sandbox de Twilio hay plantillas de prueba; las propias requieren aprobación de Meta en una cuenta real.")
  ),
  S.brk(),
  S.transition("Tema 02", "Orquestación Multicanal: Email a Slack y WhatsApp", "Mandás un mail urgente, pasan 3 horas, escribís por WhatsApp… y el que te atiende no sabe nada del mail. Tenés que explicar todo de nuevo."),
  S.content(
    "Multicanalidad no es Orquestación",
    tiles([
      ["fa-phone-volume", "Multicanalidad básica", "Muchos teléfonos en el escritorio. Si suenan todos a la vez, caos."],
      ["fa-music", "Orquestación", "Un director que decide cuándo entra el violín (email) y, si el público no aplaude, la trompeta (WhatsApp)."],
    ]) +
      `<div style="margin-top: 20px;">${badge("Los 3 pilares de la orquestación", "tip", "fa-star")}</div>` +
      tiles([
        ["fa-bullseye", "Centralización", "Una fuente de verdad: Slack."],
        ["fa-gears", "Automatización", "Make u n8n + la IA deciden."],
        ["fa-comments", "Contexto", "El cliente nunca se repite."],
      ])
  ),
  S.content(
    "La Arquitectura: Email → Slack → WhatsApp",
    flow({
      trigger: "Gmail: llega un correo",
      action: "OpenAI: JSON con resumen + prioridad 1–5",
      decision: "¿Prioridad = 5?",
      si: "WhatsApp al cliente (formato internacional)",
      no: "Solo el aviso en Slack",
      fin: "Equipo avisado y cliente atendido",
      tags: { si: "Sí", no: "No" },
    }) + `<p class="flow-legend">La rama de <strong>Slack corre siempre</strong> (resumen + link al correo); WhatsApp solo si es urgente. Email para el detalle, Slack de comando, WhatsApp para el cierre.</p>`
  ),
  S.content(
    "¿Qué Canal Uso?",
    table(
      ["Canal", "Urgencia", "Uso ideal", "Lo que siente el cliente"],
      [
        ["Email", "Baja / media", "Documentación, propuestas largas, confirmaciones", "\"Es profesional y está documentado\""],
        ["Slack", "Interna", "Coordinación del equipo, alertas de leads", "\"Estamos todos alineados\""],
        ["WhatsApp", "Alta", "Recordatorios de citas, ventas calientes, soporte inmediato", "\"Me están dando prioridad personal\""],
      ]
    ) + note("Para reflexionar: si fueras tu propio cliente, ¿cuándo un WhatsApp automático te ayuda y cuándo te invade? Esa es la regla del filtro.")
  ),
  S.content(
    "Errores y Mejores Prácticas",
    table(
      ["Error", "Mejor práctica"],
      [
        ["Efecto metralleta", "Mail + Slack + WhatsApp por cada correo. WhatsApp solo con urgencia, o tras una espera si no abrió el mail."],
        ["Perder el hilo", "Que las respuestas de WhatsApp también lleguen a Slack: Email → Slack → WhatsApp → Slack."],
        ["No manejar el consentimiento", "Que en el formulario el cliente acepte ser contactado por medios electrónicos o móvil."],
      ]
    )
  ),
  S.content(
    "Demo: la Inmobiliaria en Tres Canales",
    split(
      badge("Proyecto ejemplo · Run once en vivo", "live", "fa-play") +
        bullets([
          ["fa-envelope", "<strong>Mail tranquilo:</strong> \"¿Tienen cabañas para el verano que viene?\" → prioridad 2 → <strong>solo Slack</strong>."],
          ["fa-envelope-circle-check", "<strong>Mail urgente:</strong> \"Llegamos mañana y no encontramos la llave\" → prioridad 5 → <strong>Slack + WhatsApp</strong>."],
        ]),
      ["fa-lightbulb", "Qué mirar", "En el Run once, qué ramas se encienden en cada caso. Es exactamente la evidencia que pide la PE5."]
    )
  ),
  S.content(
    "Práctica 4: el Router Multicanal",
    badge("Paso 4 de la Pre-Entrega 5 · 10 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-code-branch", "Agregá el <strong>Router</strong> después de OpenAI en tu escenario de la clase 9."],
        ["fa-brands fa-slack", "<strong>Rama Slack</strong> (sin filtro): resumen al canal del equipo."],
        ["fa-brands fa-whatsapp", "<strong>Rama WhatsApp</strong> (filtro prioridad = 5): mensaje dinámico en formato internacional."],
        ["fa-play", "Run once con un mail urgente y uno tranquilo."],
      ])
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 5: Estrategia Multicanal + Pipeline", "Una clínica con problemas de comunicación: los pacientes no leen los mails, los médicos no se enteran de los cambios y la recepción está saturada.", "live"),
  S.content(
    "Parte 1: ¿Qué Canal para Cada Escenario?",
    table(
      ["", "Escenario de la clínica"],
      [
        ["A", "Un paciente nuevo necesita sus credenciales y el reglamento de privacidad (PDF de 5 páginas)."],
        ["B", "Fuga de agua en el consultorio 4: mantenimiento avisa a recepción que no asigne pacientes por 2 horas."],
        ["C", "Cirugía mañana 8:00: el paciente tiene que confirmar 8 h de ayuno; si no responde, se cancela."],
        ["D", "Balance mensual de facturación para los socios."],
        ["E", "La IA detecta 3 mensajes con \"urgencia\" por WhatsApp sin respuesta: ¿dónde se avisa al equipo?"],
      ]
    ) + note("Un renglón por escenario, al menos 3 conceptos técnicos (asíncrono, tasa de apertura, canal compartido, trazabilidad) y por qué se descartan los otros dos canales.")
  ),
  S.content(
    "Parte 2: el Blueprint y el Formato",
    twoTiled(
      ["fa-diagram-project", "El blueprint de Make", "<p>✓ Trigger en <strong>Gmail</strong> conectado a una <strong>IA que clasifica la prioridad</strong>.</p><p>✓ <strong>Router</strong> que deriva al canal inmediato si la prioridad es máxima.</p><p>✓ Salida a <strong>Slack</strong> (resumen) y a <strong>WhatsApp API</strong> (mensaje dinámico, formato internacional).</p>"],
      ["fa-link", "Un solo link público", "<p>Google Doc o Notion con la <strong>tabla</strong> + el <strong>JSON del blueprint</strong> pegado como texto + la <strong>captura del Run once</strong> exitoso.</p><p style=\"margin-top: 12px;\">El PDF del escenario A es parte del enunciado: no se entrega.</p>"]
    )
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Estrategia de comunicación", "Tabla de 5 escenarios: canal correcto, ≥3 conceptos técnicos, descarte fundamentado.", "<strong>20 %</strong>"],
        ["Orquestación multicanal integrada", "Trigger en Gmail + IA que analiza el texto y clasifica la prioridad.", "<strong>35 %</strong>"],
        ["Lógica de distribución crítica", "Router que desvía al canal inmediato si la prioridad es máxima.", "<strong>25 %</strong>"],
        ["Formato de salida y alertas", "Resumen en Slack + WhatsApp dinámico en formato internacional.", "<strong>20 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts")
  ),
  S.content(
    "Cerramos el Módulo 5",
    split(
      bullets([
        ["fa-brain", "La IA <strong>entiende</strong> el mensaje, Slack <strong>informa</strong> al equipo y WhatsApp <strong>actúa</strong> en los momentos críticos."],
        ["fa-calendar-check", "<strong>PE5:</strong> se recomienda entregarla antes de la <strong>clase 13</strong>."],
      ]),
      ["fa-forward", "Próximo: Módulo 6 · Claude", "Razonamiento, documentos y cómo procesar volumen gastando menos. Antes de la clase 11: cuenta en la consola de Anthropic con un saldo mínimo y límite de gasto."]
    )
  ),
  S.dudas("¡Cerramos el Módulo 5!"),
]);
console.log("m5 ok");
