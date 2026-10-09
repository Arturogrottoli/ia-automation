# Clase 10 — WhatsApp: regla de 24 h, plantillas, drips y chatbots + Orquestación multicanal + Pre-Entrega 5

**Módulo 5 · Ecosistema de comunicación: Gmail, Slack y WhatsApp API** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, segunda parte de la unidad 2, unidad 3 y consigna de la Pre-Entrega 5  
**Presentación:** `Clase10.html` (23 filminas, en esta carpeta; se navega con ← → o los botones).

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar la **ventana de 24 horas** de WhatsApp y cuándo hace falta una **plantilla** aprobada por Meta.
2. Diseñar un **drip** y un **chatbot de reglas** con salida a humano.
3. Distinguir multicanalidad de orquestación y elegir el canal según la urgencia.
4. Salir con **el pipeline Gmail → IA → Slack / WhatsApp** armado y la consigna de la **PE5** clara.

---

## Preparación previa (docente)

- [ ] Workspace de **Slack** con un canal `#consultas` conectado en Make.
- [ ] Sandbox de **Twilio** funcionando (de la clase 9).
- [ ] Del proyecto ejemplo, el escenario multicanal completo: Gmail → OpenAI (JSON resumen + prioridad) → Router → Slack siempre / WhatsApp si prioridad = 5.
- [ ] La tabla de los 5 escenarios de la clínica (consigna de la PE5) para compartir.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión: flujo Gmail → IA y sandbox |
| 10–35 | **Bloque A — WhatsApp: 24 h, plantillas, drips, chatbots** | Unidad 2 del PDF (segunda parte) |
| 35–45 | Práctica 3 | Plantilla + filtro de ventana de 24 h |
| 45–50 | Micro-pausa | |
| 50–75 | **Bloque B — Orquestación multicanal** | Unidad 3 del PDF + demo |
| 75–85 | Práctica 4 | Router multicanal |
| 85–100 | **Brief PE5** | Consigna, rúbrica |
| 100–105 | Cierre | Qué viene en el Módulo 6 |

---

## 10–35 · Bloque A — WhatsApp: plantillas, drips y chatbots

**Contenido (según el PDF):**

### La regla de las 24 horas y las plantillas

- WhatsApp protege a sus usuarios del spam: **no podés mandar texto libre** a un cliente salvo que te haya escrito en las **últimas 24 horas**.
- Para **iniciar** la conversación (un drip, un seguimiento) hace falta una **plantilla (template) pre-aprobada por Meta**.
  - ❌ *"Hola, ¿por qué no compraste?"* → probablemente rechazada.
  - ✅ *"Hola {{1}}, gracias por tu interés en {{2}}. Acá tenés el catálogo que pediste."* → se aprueba rápido.
- **La trampa de las 24 horas:** si respondés con texto libre después de dos días, Make da error. Tené siempre una plantilla de "Seguimiento" lista.

### Drips, la ciencia de la gotera constante

- Secuencia de mensajes automáticos a lo largo del tiempo. En WhatsApp la tasa de apertura ronda el **90 %**.
- **Drip de bienvenida (alguien se registra a una clase gratis en Airtable):**
  1. **Día 0:** "¡Hola! Gracias por registrarte. Acá tenés el enlace de acceso."
  2. **Día 1 (+24 h):** "¿Pudiste ver el material? Si tenés dudas, respondé este mensaje."
  3. **Día 3 (+72 h):** "Tenemos una oferta especial que vence mañana. ¿Te interesa?"
- **Por qué automatizarlo:** consistencia. A un asistente se le olvida el seguimiento del día 3; a Make con Twilio, nunca.

### Chatbots de reglas

- No todo chatbot necesita IA: un **árbol de decisiones** resuelve mucho. "Precios" → lista de precios; "Soporte" → pasa a un humano.
- **Flujo en Make:** trigger (webhook del mensaje) → **Router** que analiza el texto (rama "Hola" → bienvenida; rama "Cita" → busca horarios en Google Calendar) → respuesta por WhatsApp.

### Errores comunes

- **Bloqueo del número:** mensajes masivos de venta sin consentimiento. Si muchos te marcan como spam, Meta suspende el número para siempre. Usá WhatsApp para dar valor o responder lo que inició el cliente.
- **La trampa de las 24 horas:** ver arriba.
- **No tener salida humana:** siempre ofrecé "Hablar con una persona" o una rama **fallback** que avise al equipo por Slack cuando el bot no entiende.

> *"El poder de WhatsApp no está en enviar muchos mensajes, sino en enviar el mensaje correcto, a la persona correcta, en el momento exacto."*

**Proyecto ejemplo, el drip de una estadía** (para mostrar en pizarra o en Make):
- **Al reservar:** confirmación con los datos de la propiedad (el huésped acaba de escribir → texto libre).
- **Un día antes del check-in:** recordatorio con horario y ubicación → **plantilla**, porque pasaron más de 24 h.
- **Al día siguiente del check-out:** pedido de reseña → **plantilla**.

## 35–45 · Práctica 3 — Plantilla + filtro de ventana de 24 h

1. Redactar una **plantilla** de seguimiento para su proceso, con variables `{{1}}`, `{{2}}`.
2. En Make, pensar el **filtro**: si el último mensaje del cliente fue hace menos de 24 h → texto libre; si no → plantilla.

> En el sandbox de Twilio hay plantillas de prueba ya disponibles; las propias requieren aprobación de Meta en una cuenta real.

## 50–75 · Bloque B — Orquestación multicanal: email a Slack y WhatsApp

**Disparador de la charla:** mandás un mail urgente pidiendo presupuesto. Pasan 3 horas. Escribís por WhatsApp y el que te atiende no sabe nada del mail: tenés que explicar todo de nuevo. Frustrante.

**Contenido (según el PDF):**

- **Multicanalidad ≠ orquestación:**
  - *Multicanalidad básica:* muchos teléfonos en el escritorio; si suenan todos a la vez, caos.
  - *Orquestación:* un director que decide cuándo entra el violín (email) y, si el público no aplaude, la trompeta (WhatsApp).
- **Los 3 pilares:** **centralización** (una fuente de verdad: Slack) · **automatización** (Make + OpenAI deciden) · **contexto** (el cliente nunca se repite).
- **La arquitectura Email → Slack → WhatsApp** (una agencia con prospectos de alta prioridad):
  - **Email:** la entrada formal; ahí viven el detalle y los archivos.
  - **Slack:** el centro de comando; nadie tiene que revisar el inbox.
  - **WhatsApp:** el canal de cierre (apertura ~98 %), reservado para lo que importa.
- **Paso a paso en Make:**
  1. **Gmail → Watch Emails**, solo Inbox y, si se puede, una etiqueta de clientes.
  2. **OpenAI → Create a Chat Completion** con el prompt de triaje que devuelve JSON (`resumen` + `prioridad` 1–5).
  3. **Router:**
     - **Rama A, siempre:** Slack → Create a Message con el resumen y el link al correo.
     - **Rama B, condicional:** filtro `prioridad = 5` → WhatsApp (Twilio/Wati) → Send a Message: *"Hola {nombre}, recibimos tu correo sobre {tema}. Al ser urgente, ¿hablamos ahora? Mi agenda: [link]"*.
- **Matriz: ¿qué canal uso?**

| Canal | Urgencia | Uso ideal | Lo que siente el cliente |
|---|---|---|---|
| **Email** | Baja / media | Documentación, propuestas largas, confirmaciones | "Es profesional y está documentado" |
| **Slack** | Interna | Coordinación del equipo, alertas de leads | "Estamos todos alineados" |
| **WhatsApp** | Alta | Recordatorios de citas, ventas calientes, soporte inmediato | "Me están dando prioridad personal" |

- **Errores y mejores prácticas:**
  1. **Efecto metralleta:** mail + Slack + WhatsApp por cada correo. WhatsApp solo con condiciones de urgencia, o tras una espera (Sleep) si no abrió el mail.
  2. **Perder el hilo:** que el equipo vea las respuestas de WhatsApp (herramientas como 2Chat o Wozat las llevan a Slack): Email → Slack → WhatsApp → Slack.
  3. **No manejar el consentimiento:** que en el formulario acepte ser contactado por medios electrónicos o móvil.
- **Para reflexionar (del PDF):** *si fueras tu propio cliente, ¿cuándo un WhatsApp automático te ayuda y cuándo te invade?* Esa respuesta es la regla del filtro.

**Demo con el proyecto ejemplo:**
- Mail tranquilo ("¿tienen cabañas para el verano que viene?") → prioridad 2 → **solo Slack**.
- Mail urgente ("llegamos mañana y no encontramos la llave de la cabaña") → prioridad 5 → **Slack + WhatsApp** al huésped.
- Mostrar en el Run once qué ramas se encienden.

## 75–85 · Práctica 4 — Router multicanal

Sobre su escenario de la clase 9:
1. Agregar el **Router** después de OpenAI.
2. **Rama Slack** (sin filtro): resumen al canal del equipo.
3. **Rama WhatsApp** (filtro `prioridad = 5`): mensaje dinámico en **formato internacional**.
4. **Run once** con un mail urgente y uno tranquilo.

## 85–100 · Brief de la Pre-Entrega 5: Estrategia multicanal + pipeline

**Antes de integrar (consolidación del módulo, según el PDF):**
- **OAuth2:** el estándar para conectar Gmail o Slack sin exponer credenciales; un token temporal con accesos delimitados.
- **Gmail API vs filtros:** sentimiento, hilos históricos (Thread ID) y lógica multicapa.
- **Ventana de 24 horas:** pasadas las 24 h, solo plantillas aprobadas.
- **Centralización:** WhatsApp y Gmail son entrada y cierre; la coordinación interna va a Slack.

**Contexto de la consigna:** una **clínica** con problemas de comunicación: los pacientes no leen los mails de confirmación, los médicos no se enteran de los cambios de agenda y la recepción está saturada.

**Parte 1, tabla de estrategia:** para cada escenario, elegir el canal (Gmail, Slack o WhatsApp API) y justificar:

| Escenario | Situación |
|---|---|
| **A** | Un paciente nuevo necesita sus credenciales y el reglamento de privacidad (PDF de 5 páginas) |
| **B** | Fuga de agua en el consultorio 4: mantenimiento avisa a recepción que no asigne pacientes por 2 horas |
| **C** | Cirugía mañana 8:00: el paciente tiene que confirmar 8 h de ayuno; si no responde, se cancela |
| **D** | Balance mensual de facturación para los socios |
| **E** | La IA detecta que un paciente escribió 3 veces "urgencia" por WhatsApp y nadie respondió: ¿dónde se avisa al equipo? |

- Un renglón por escenario.
- **Al menos tres conceptos técnicos** del módulo (asíncrono, tasa de apertura, canal compartido, trazabilidad…).
- **Por qué se descartan los otros dos canales** en cada caso.
- *El PDF del escenario A es parte del enunciado, no algo que entregar.*

**Respuestas esperables (para el docente):** A → Gmail (documento largo, formal, queda registro) · B → Slack (interno, inmediato, canal compartido) · C → WhatsApp (alta urgencia y alta apertura; probablemente con plantilla) · D → Gmail (documentación formal, asíncrono) · E → Slack (alerta interna al equipo). Aceptá otras respuestas si están bien justificadas.

**Parte 2, blueprint de Make:**
- Trigger en **Gmail** conectado a una **IA que clasifica la prioridad**.
- **Router** que deriva al canal de acción inmediata cuando la prioridad es máxima.
- Salida a **Slack** (resumen al equipo) y a **WhatsApp API** (mensaje dinámico con **formato internacional**).

**Formato:** **un solo link público** (Google Doc o Notion) con la tabla + el **JSON del blueprint pegado como texto** + la **captura del Run once** exitoso.

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Estrategia de comunicación | Tabla de 5 escenarios: canal correcto, ≥3 conceptos técnicos, descarte fundamentado de los otros dos | **20 %** |
| Orquestación multicanal integrada | Trigger en Gmail + IA que analiza el texto y clasifica la prioridad | **35 %** |
| Lógica de distribución crítica | Router que desvía al canal inmediato si la prioridad es máxima | **25 %** |
| Formato de salida y alertas | Resumen en Slack + WhatsApp dinámico (Twilio o Wati) en formato internacional | **20 %** |

**Total: 100 pts · Aprobación: 70 pts**

## 100–105 · Cierre

- **Entrega de la PE5:** se recomienda cerrarla antes de la **clase 13**.
- **Recordatorio:** la PE4 se recomendaba cerrar antes de la clase 11.
- **Adelanto del Módulo 6 (Claude):** que creen una cuenta en la consola de Anthropic y carguen un saldo mínimo con límite de gasto.

---

## Checklist de salida

- [ ] Todos entienden la ventana de 24 h y cuándo hace falta plantilla.
- [ ] Todos tienen el Router multicanal (Slack siempre, WhatsApp si es urgente) o lo terminan de tarea.
- [ ] Todos tienen la consigna de la PE5 (tabla de la clínica + blueprint) y la rúbrica.
- [ ] Quedó pedida la cuenta de Anthropic para la clase 11.
