const { S, badge, note, bullets, tiles, table, code, twoTiled, split, flow, build } = require("./lib");

const lineFlow = (steps, w = 170) =>
  `<div class="flow">${steps
    .map((t) => {
      const [tag, kind, txt] = t.split("|");
      return `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: ${w}px;">${txt}</div></div>`;
    })
    .join('<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>')}</div>`;

// ================= CLASE 13 =================
build(13, "Clase 13 - Agentes con Memoria RAG + Generación de Contenido", [
  S.cover(13, 7, "Agentes con Memoria RAG y Generación de Contenido", "Una IA que responde solo con tu información y cita la fuente, y una fábrica de contenido que convierte una idea semilla en piezas listas para publicar"),
  S.recap(
    [
      ["fa-boxes-stacked", "Batches: 50 % menos para lo que puede esperar."],
      ["fa-database", "Prompt Caching: el prefix al principio, idéntico y con el mínimo de tokens."],
      ["fa-plug", "MCP: el USB-C que conecta la IA con tus herramientas."],
    ],
    "Hoy: agentes que saben de tu negocio y que producen contenido."
  ),
  S.objetivos([
    ["fa-book-open", "Explicar <strong>RAG</strong> con la analogía del examen a libro abierto."],
    ["fa-database", "Armar una base de conocimiento <strong>atómica y verificada</strong> y un agente que cita la fuente."],
    ["fa-industry", "Diseñar el ciclo de contenido: <strong>captura → IA → formateo → distribución</strong>."],
    ["fa-flag-checkered", "Salir con <strong>tu base de conocimiento</strong> y <strong>el generador desde una idea semilla</strong>."],
  ]),
  S.transition("Tema 01", "Agentes con Memoria RAG en Notion", "Un asistente rapidísimo que escribe muy bien… pero no sabe nada de tu negocio. Si le preguntás, adivina. ¿Y si le das una biblioteca privada y le pedís que la consulte siempre antes de responder?"),
  S.content(
    "¿Qué es RAG?",
    twoTiled(
      ["fa-user-graduate", "IA sin RAG", "<p>Un estudiante brillante que rinde <strong>de memoria</strong>: confunde fechas o inventa datos.</p>"],
      ["fa-book-open-reader", "IA con RAG", "<p>Rinde <strong>a libro abierto</strong>: busca el libro exacto, lee el párrafo y responde con evidencia.</p>"]
    ) + note("Retrieval-Augmented Generation: recuperar información de una fuente externa para aumentar la respuesta que la IA genera. Precisión, información actualizada y datos que quedan en tu ecosistema.")
  ),
  S.content(
    "Anatomía de un Agente con Memoria",
    tiles([
      ["fa-gear", "Instrucciones", "\"Respondé siempre con la información de mi base de conocimiento. Si no la encontrás, decí que no lo sabés.\""],
      ["fa-database", "Acceso a datos", "La memoria de largo plazo: solo una base de \"Conocimiento\" curada, no todo Notion."],
      ["fa-comments", "Memoria del chat", "La de corto plazo: \"¿Cuánto sale el Premium?\" … \"¿Y qué incluye?\" Sabe que hablás del Premium."],
    ]) + note("Notion no lee todo: hace una búsqueda semántica y encuentra las páginas con el significado más cercano a tu pregunta.")
  ),
  S.content(
    "Tu Primer Agente RAG, Paso a Paso",
    bullets([
      ["fa-1", "Una base <strong>\"[Agente] Base de conocimiento\"</strong>: cada fila es un trozo (política de devoluciones, horarios, manual de ventas)."],
      ["fa-2", "Crear el agente o asistente."],
      ["fa-3", "En \"Conocimiento\" o \"Fuentes\", vincular esa base."],
      ["fa-4", "Prompt: \"Respondé únicamente con la base vinculada y <strong>citá siempre la página de origen</strong>. Si no está, decí que no lo sabés.\""],
      ["fa-5", "<strong>Prueba de fuego:</strong> una pregunta que solo esté en un documento recóndito. Si cita ese documento, funciona."],
    ]) + note("Verificá cómo se crean hoy los agentes en Notion y en qué plan están. Si no los tenés, el RAG se arma en n8n con un AI Agent y una tool de Notion o Airtable.")
  ),
  S.content(
    "Errores Comunes con RAG",
    table(
      ["Error", "Solución"],
      [
        ["Información desactualizada", "Borradores o notas contradictorias confunden. Una vista <strong>\"Verificada\"</strong> y que el agente solo vea esa."],
        ["Instrucciones vagas", "\"Ayudame con mis dudas\" → usa conocimiento general. \"Tu única fuente de verdad es la base vinculada.\""],
        ["Páginas gigantes (ruido)", "Una página de 50 páginas confunde. <strong>Piezas atómicas:</strong> una página por tema."],
      ]
    )
  ),
  S.content(
    "Demo: el Agente de la Inmobiliaria",
    split(
      badge("Proyecto ejemplo · base de conocimiento en Notion", "live", "fa-play") +
        bullets([
          ["fa-clock", "\"¿A qué hora es el check-out y qué pasa si me quiero ir más tarde?\" → cita la página de políticas."],
          ["fa-utensils", "\"¿Qué restaurantes recomiendan cerca de la Cabaña Los Coihues?\" → cita la guía del destino."],
          ["fa-paw", "\"¿Aceptan mascotas?\" (no está en la base) → tiene que decir que no lo sabe."],
        ]),
      ["fa-layer-group", "La base, atómica", "Políticas de reserva, check-in y check-out, qué incluye cada propiedad, guía del destino y preguntas frecuentes: una página por tema."]
    )
  ),
  S.content(
    "Práctica 1: tu Base de Conocimiento",
    badge("Paso 1 de la Pre-Entrega 7 · 13 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-database", "Una base con <strong>5 a 10 páginas atómicas</strong> de tu proceso: políticas, precios, preguntas frecuentes, tono de marca."],
        ["fa-robot", "Un agente con la instrucción restrictiva y que <strong>cite la página</strong>."],
        ["fa-vial", "La prueba de fuego y la prueba anti-alucinación."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Automatización Completa de Generación de Contenido", "Antes: 40 minutos frente al cursor, adaptar para LinkedIn, resumir para X, programar. Ahora: escribís la idea en Airtable, marcás \"Generar\" y en menos de un minuto tenés las piezas."),
  S.content(
    "El Ciclo de Vida del Contenido Automatizado",
    lineFlow(["1 · Captura|oval|La idea nace en Airtable o Notion", "2 · Procesamiento|rect|Claude u OpenAI la transforman", "3 · Formateo|rect|Se adapta el tono y el largo a cada red", "4 · Distribución|oval|Slack, Gmail o \"Listo para publicar\""], 200) +
      `<p class="flow-legend"><strong>La idea semilla:</strong> el input mínimo. No escribís el post; das el \"qué\" (\"Beneficios de Notion para equipos chicos\" + \"tono divertido\").</p>`
  ),
  S.content(
    "La Arquitectura en Make o n8n",
    twoTiled(
      ["fa-table", "Airtable como control remoto", "<p>Una vista \"Por procesar\": el flujo arranca cuando la fila pasa a <strong>\"Generando\"</strong>.</p><p style=\"margin-top: 12px;\">Campos de <strong>Tono, Audiencia y Keywords</strong> que viajan como variables.</p>"],
      ["fa-wand-magic-sparkles", "Un prompt estructurado", "<p><em>\"Actuá como experto en marketing digital. Tomá la idea semilla {{Idea}} y generá: 1. un post de LinkedIn de 200 palabras, 2. un tweet de 280 caracteres, 3. un resumen para Slack. Usá un tono {{Tono}}.\"</em></p>"]
    ) + note("Después, nodos de transformación separan el bloque en una pieza por canal: LinkedIn es profesional, Instagram visual, X rápido.")
  ),
  S.content(
    "¿Qué Delegar y Qué No?",
    tiles([
      ["fa-seedling", "Evergreen: sí", "Tips, tutoriales, conceptos educativos. Se programan y se reutilizan."],
      ["fa-newspaper", "Actualidad: híbrido", "La estructura automática; la opinión, humana."],
      ["fa-heart", "Empatía: no", "Responder comentarios o una crisis de marca. Ahí el agente falla."],
    ]) + note("La Thermomix: vos elegís la receta y ponés los ingredientes; el robot pica y cocina; vos probás y ajustás la sal.")
  ),
  S.content(
    "Evitar el \"Efecto Robot\" y Errores Comunes",
    table(
      ["Error / técnica", "Qué hacer"],
      [
        ["Variables de marca", "Una tabla de Identidad de marca con <strong>muletillas</strong>, lo que la marca <strong>nunca diría</strong> y la <strong>firma</strong>."],
        ["Output cortado", "Subir Max Tokens en el nodo de IA."],
        ["Formato amontonado", "Pedir \"párrafos cortos, bullets y 2-3 emojis máximo\"."],
        ["Contenido genérico", "Role prompting: un rol claro y contexto, no \"hacé un post\"."],
        ["Escalar demasiado rápido", "Primero una sola red funcionando; guardá el texto original en una columna oculta."],
      ]
    )
  ),
  S.content(
    "Demo: un Post para la Cabaña",
    split(
      badge("Proyecto ejemplo · idea semilla en Airtable", "live", "fa-play") +
        bullets([
          ["fa-seedling", "<strong>Idea:</strong> \"Escapada de invierno en la Cabaña Los Coihues: chimenea, vista al lago, ideal para parejas\"."],
          ["fa-sliders", "<strong>Tono:</strong> cálido y cercano · <strong>Audiencia:</strong> parejas de 30 a 45."],
          ["fa-wand-magic-sparkles", "Claude genera el post de Instagram, la historia y el mensaje para la lista de WhatsApp."],
        ]),
      ["fa-hourglass-half", "Todavía no se publica", "Usa la identidad de marca y los datos reales de la propiedad, y queda en estado \"Para revisar\". La aprobación humana es tema de la clase 14."]
    )
  ),
  S.content(
    "Práctica 2: el Generador desde una Idea Semilla",
    badge("Paso 2 de la Pre-Entrega 7 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-table", "Base de control con <strong>Idea semilla, Tono, Audiencia y Estado</strong>."],
        ["fa-bolt", "Trigger cuando una fila pasa a <strong>\"Generando\"</strong>."],
        ["fa-robot", "Nodo de IA con el prompt estructurado y <strong>el contexto privado</strong> (tu base de la práctica 1)."],
        ["fa-pen", "Que el resultado se escriba en la fila, todavía sin publicar."],
      ]) + note("Tarea para la clase 14: dejar el generador funcionando. Ahí sumamos la pausa humana y el dashboard.")
  ),
  S.dudas(),
]);

// ================= CLASE 14 =================
build(14, "Clase 14 - Human-in-the-Loop + Cuadros de Mando", [
  S.cover(14, 7, "Human-in-the-Loop y Cuadros de Mando", "La IA hace el trabajo pesado y un humano aprueba antes de lo crítico. Y un tablero para saber, en 5 segundos, si todo funciona. Más la Pre-Entrega 7"),
  S.recap(
    [
      ["fa-book-open-reader", "RAG: la IA responde a libro abierto, con una base atómica y verificada."],
      ["fa-industry", "La fábrica de contenido: captura → IA → formateo → distribución."],
      ["fa-seedling", "El generador desde una idea semilla, con tono y audiencia como variables."],
    ],
    "Hoy le ponemos el freno de seguridad a la fábrica y un tablero de control."
  ),
  S.objetivos([
    ["fa-user-check", "Diseñar un flujo <strong>HITL</strong>: trigger → IA → pausa → acción humana → ejecución final."],
    ["fa-traffic-light", "Elegir dónde poner la pausa sin crear un <strong>cuello de botella</strong>."],
    ["fa-gauge-high", "Armar un <strong>dashboard</strong> con fuente de verdad, visualización y máximo 4 KPIs."],
    ["fa-flag-checkered", "Salir con <strong>la pausa HITL</strong>, el <strong>dashboard</strong> y la consigna de la <strong>PE7</strong>."],
  ]),
  S.transition("Tema 01", "Human-in-the-Loop: Aprobación Humana", "Un robot de cocina que hace 100 platos en minutos, pero no tiene sentido del gusto. La solución: el chef prueba una cucharada antes de que el plato salga."),
  S.content(
    "¿Qué es HITL y Por Qué Importa?",
    split(
      badge("La IA es el motor; el humano, el volante", "tip", "fa-car") +
        bullets([
          ["fa-robot", "La IA hace el trabajo pesado (~<strong>90 %</strong>); el humano valida, corrige o refina en los <strong>puntos críticos</strong>."],
          ["fa-triangle-exclamation", "<strong>Alucinaciones:</strong> la aprobación las frena antes de llegar al cliente."],
          ["fa-palette", "<strong>Sensibilidad de marca:</strong> correcto, pero con un tono que no es el tuyo."],
        ]),
      ["fa-sack-dollar", "Casos de alto riesgo", "Mover dinero, publicar para miles de seguidores o escribirle a clientes VIP: el costo de un error es demasiado alto para dejarlo solo en manos de un algoritmo."]
    )
  ),
  S.content(
    "El Flujo HITL",
    flow({
      trigger: "Llega un lead o una idea",
      action: "La IA redacta la propuesta",
      decision: "Pausa: ¿un humano aprueba?",
      si: "Se ejecuta la acción final",
      no: "No sale nada; se corrige el prompt",
      fin: "Resultado con control de calidad",
      tags: { decision: "Semáforo humano", si: "Aprobar", no: "Rechazar" },
    }) + `<p class="flow-legend">Ejemplo: una agencia genera hilos de X; el community manager revisa en Slack y recién al apretar "Publicar" sale al mundo.</p>`
  ),
  S.content(
    "Dónde Poner la Pausa",
    tiles([
      ["fa-brands fa-slack", "Slack o Teams con botones", "La forma más elegante: el botón manda una señal de vuelta al flujo."],
      ["fa-table", "Airtable o Sheets por estado", "La IA escribe el borrador y el flujo se detiene. Sigue cuando cambiás \"Pendiente\" a \"Aprobado\"."],
      ["fa-file-pen", "Formulario de espera", "Wait for Webhook: te llega un link, editás el texto y el flujo sigue con tus cambios."],
    ])
  ),
  S.content(
    "Errores y Mejores Prácticas",
    table(
      ["Error", "Mejor práctica"],
      [
        ["El cuello de botella", "Aprobar cada una de 500 imágenes diarias destruye el beneficio. HITL en la <strong>última milla</strong>: antes de que sea público o vaya a un tercero."],
        ["\"Si hago clic, ¿para qué automatizo?\"", "A mano son 30 minutos; con HITL, 1 minuto de lectura y un clic. Se automatizó el 95 % del esfuerzo mental."],
        ["Ignorar el feedback", "Si rechazás, entendé por qué (¿prompt vago? ¿faltó contexto?) y ajustá el nodo de IA."],
      ]
    )
  ),
  S.content(
    "Demo: el Post de la Cabaña, Aprobado",
    split(
      badge("Proyecto ejemplo · en vivo", "live", "fa-play") +
        bullets([
          ["fa-hourglass-half", "El post de la clase 13 está en Airtable en estado <strong>\"Para revisar\"</strong>."],
          ["fa-pen", "Lo leemos, corregimos una frase y marcamos <strong>Aprobado</strong>."],
          ["fa-filter", "El segundo flujo, con el filtro <strong>Aprobado = true</strong>, lo manda a #publicaciones y lo marca \"Publicado\"."],
        ]),
      ["fa-film", "Otro ejemplo real", "Los botones ✅/❌ del bot de películas son una pausa HITL: la IA arma la ficha y no se guarda nada hasta que un humano aprueba."]
    )
  ),
  S.content(
    "Práctica 3: Pausa HITL + Filtro Condicional",
    badge("Paso 3 de la Pre-Entrega 7 · 12 minutos", "live", "fa-flask-vial") +
      bullets([
        ["fa-square-check", "Que el resultado se escriba con un checkbox <strong>Aprobado</strong> (o que el borrador vaya a Slack o Email con un link de revisión)."],
        ["fa-filter", "Un <strong>filtro final</strong> que no deje avanzar a la distribución salvo que Aprobado = true."],
        ["fa-vial", "Probar los dos caminos: aprobado y sin aprobar."],
      ])
  ),
  S.brk(),
  S.transition("Tema 02", "Cuadros de Mando para Monitorear tus Automatizaciones", "n8n capta leads, Claude escribe, Make manda WhatsApps. Al final del día: ¿funcionó todo? ¿cuántos errores hubo mientras dormías? Si tenés que entrar a cada herramienta, tenés un agujero negro."),
  S.content(
    "Del Reporte al Dashboard",
    twoTiled(
      ["fa-camera", "Reporte — el pasado", "<p>Una foto de lo que pasó: el PDF del viernes.</p><p style=\"margin-top: 12px;\">Útil para el archivo, pero llega tarde para decidir.</p>"],
      ["fa-gauge-high", "Dashboard — el presente", "<p>El tablero del auto mientras manejás: velocidad, nafta y la luz roja del motor.</p><p style=\"margin-top: 12px;\">Visibilidad de la IA, errores al instante y cálculo de ROI.</p>"]
    )
  ),
  S.content(
    "Los 3 Componentes de un Dashboard",
    tiles([
      ["fa-database", "Fuente de la verdad", "Airtable o Sheets. Cada flujo deja una <strong>huella</strong>: una fila con fecha, estado, plataforma y error."],
      ["fa-chart-pie", "Visualización", "Notion para dashboards ejecutivos; Sheets para gráficos simples. No hace falta Power BI."],
      ["fa-bullseye", "KPIs", "Tasa de aprobación (calidad de los prompts), volumen de salida y tasa de error de la IA."],
    ]) + note("Ejemplo: Elena ve en Notion 70 % publicado, 20 % pendiente de aprobación, 10 % error. Encuentra un token vencido y lo arregla.")
  ),
  S.content(
    "Errores Comunes y el Toque Maestro",
    table(
      ["Error / técnica", "Qué hacer"],
      [
        ["Cementerio de datos", "50 gráficos que nadie mira. <strong>Máximo 4 KPIs.</strong>"],
        ["Datos desvinculados", "Copiar y pegar a mano no es un dashboard: el último nodo de todo flujo es \"Create record\" o \"Update row\"."],
        ["Olvidar el timestamp", "Sin fecha y hora no podés filtrar por \"hoy\" o \"esta semana\"."],
        ["IA que analiza tu rendimiento", "Cada domingo, Claude lee la semana y avisa por Slack: \"La aprobación bajó 15 % los miércoles; revisá el prompt de tono\"."],
      ]
    ) + note("El flujo termina cuando el dato llega al dashboard, no cuando se manda el mensaje.")
  ),
  S.content(
    "Demo: el Dashboard de la Inmobiliaria",
    tiles([
      ["fa-signal", "Consultas por prioridad", "Alta y baja, esta semana."],
      ["fa-user-check", "Tasa de aprobación", "De los posts que generó la IA."],
      ["fa-boxes-stacked", "Volumen de salida", "Consultas respondidas + posts publicados."],
      ["fa-triangle-exclamation", "Tasa de error", "De los flujos, desde la tabla de log."],
    ])
  ),
  S.transition("✅ Entregable evaluado del Módulo", "Pre-Entrega 7: Sistema de Contenido Autónomo con Supervisión HITL", "Un pipeline de contenido conectado a una base de conocimiento, con una pausa obligatoria para validación humana antes de la distribución.", "live"),
  S.content(
    "Pasos a Seguir",
    bullets([
      ["fa-1", "Una <strong>base de control</strong> en Airtable o Notion: tu centro de comando."],
      ["fa-2", "<strong>Trigger</strong> que reaccione solo cuando una fila pasa a \"Generando\" con una <strong>idea semilla</strong>."],
      ["fa-3", "<strong>Nodo de IA</strong> (Claude o GPT) con <strong>contexto privado</strong> que redacte una pieza de marketing."],
      ["fa-4", "<strong>Pausa HITL:</strong> checkbox \"Aprobado\" en Airtable, o borrador a Slack o Email con un link de revisión."],
      ["fa-5", "<strong>Filtro final:</strong> no avanza a las plataformas externas salvo que el checkbox sea true."],
    ]) + note("Formato: PDF explicativo que demuestre el nodo de interrupción humana, o link público al flujo activo.")
  ),
  S.content(
    "¿Cómo se Evalúa?",
    table(
      ["Criterio", "Qué se evalúa", "Peso"],
      [
        ["Mecanismo de pausa humana (HITL)", "Punto de pausa obligatorio: checkbox \"Aprobado\" o alerta restrictiva a Slack/Email.", "<strong>40 %</strong>"],
        ["Lógica de distribución condicional", "La distribución solo se ejecuta si el humano valida.", "<strong>30 %</strong>"],
        ["Estructura RAG y base de conocimiento", "Base en Notion/Airtable que alimenta al agente ante una idea semilla.", "<strong>30 %</strong>"],
      ]
    ) + note("Total: 100 pts · Aprobación: 70 pts. El dashboard no está en la rúbrica de la PE7, pero es uno de los 5 entregables de la Entrega Final.")
  ),
  S.content(
    "Práctica 4 y Cierre",
    split(
      badge("Paso 4 de la Pre-Entrega 7", "live", "fa-flask-vial") +
        bullets([
          ["fa-gauge-high", "Un dashboard con <strong>3 KPIs</strong> alimentado por una tabla de log con timestamp."],
          ["fa-calendar-check", "<strong>PE7:</strong> se recomienda entregarla antes de la <strong>clase 16</strong>."],
        ]),
      ["fa-forward", "Próximo: el Proyecto Integrador", "Traé a la clase 15 todas tus pre-entregas: son los ladrillos del proyecto final. Y creá tu cuenta de GitHub."]
    )
  ),
  S.dudas("¡Cerramos el Módulo 7!"),
]);
console.log("m7 ok");
