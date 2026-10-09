# Clase 9 — Gmail con API + De la app a la API de WhatsApp

**Módulo 5 · Ecosistema de comunicación: Gmail, Slack y WhatsApp API** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidad 1 y primera parte de la unidad 2 del Módulo 5  
**Presentación:** `Clase09.html` (20 filminas, en esta carpeta; se navega con ← → o los botones).

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 5 (estrategia multicanal +
> pipeline en Make)**, que se presenta en la clase 10.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar por qué la Gmail API supera a los filtros de Gmail (sentimiento, memoria, lógica multicapa).
2. Diferenciar una respuesta "robot" de una respuesta con contexto.
3. Armar el flujo Watch Emails → IA → **borrador** y evitar los tres errores clásicos (loop, prompt vago, Thread ID).
4. Explicar por qué WhatsApp automatizado necesita la API y un proveedor (BSP), y tener el **sandbox** listo.

---

## Preparación previa (docente)

- [ ] Un **Gmail de prueba** conectado en Make (no tu mail personal).
- [ ] Cuenta de **Twilio** con el **WhatsApp Sandbox** activado y tu celular unido al sandbox (se manda un código por WhatsApp al número del sandbox). Verificar los pasos vigentes en la consola de Twilio.
- [ ] Del proyecto ejemplo: el escenario Gmail → OpenAI → borrador, con los **"hechos innegables"** de la inmobiliaria (propiedades, precios por noche, horarios de check-in, políticas) en el prompt.
- [ ] 2 o 3 mails de prueba listos para mandar (una consulta de disponibilidad, una queja, un "¿cuándo me confirman?").

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso del Módulo 4 · dudas de la PE4 |
| 10–45 | **Bloque A — Gmail con API** | Unidad 1 del PDF + demo |
| 45–58 | Práctica 1 | Trigger Gmail + IA que resume y prioriza |
| 58–63 | Micro-pausa | |
| 63–93 | **Bloque B — De la app a la API de WhatsApp** | Unidad 2 del PDF (primera parte) + sandbox |
| 93–105 | Práctica 2 + cierre | Sandbox de WhatsApp funcionando |

---

## 10–45 · Bloque A — Automatización de Gmail: respuestas contextuales con API

**Disparador de la charla:** el lunes abrís Gmail y en vez de 50 mails repetitivos ("¿cuál es tu tarifa?", "¿tenés disponibilidad?") hay una carpeta **"IA: Borradores generados"**. La IA leyó cada mail, revisó conversaciones anteriores y redactó una respuesta personalizada esperando tu aprobación: *"Hola María, qué bueno saludarte de nuevo. Veo que necesitás los precios para el proyecto que mencionaste el mes pasado…"*.

**Contenido (según el PDF):**

- **La Gmail API, la puerta trasera segura:** Gmail es una oficina; vos entrás por la puerta principal (web o app). La API es una puerta trasera ultra-segura para que Make o n8n retiren información y actúen en tu nombre.
- **Por qué la API y no los filtros de Gmail:** los filtros son un guardia que solo deja pasar a quien dice una palabra clave. La API da **3 superpoderes**:
  1. **Análisis de sentimiento:** ¿el cliente está enojado, feliz o confundido?
  2. **Memoria contextual:** usar correos anteriores para que la respuesta tenga sentido histórico.
  3. **Lógica multicapa:** si es queja → Slack; si es venta → Airtable + respuesta con link de calendario.
- **Contexto, la diferencia entre un robot y un asistente:**
  - *Robot:* "Hola, ¿cuándo terminás?" → "Gracias por contactar. Respondemos en 24 horas." → el cliente se siente ignorado.
  - *Asistente:* la IA lee el hilo, ve que prometiste el logo para el viernes y que hoy es jueves → *"Según lo acordado el lunes, tu logo estará listo mañana viernes a primera hora."*
  - **Contexto** = el hilo de correos + el tono + los datos que ya tenés en tu base (Airtable).
- **Arquitectura del flujo en Make:**
  1. **Trigger:** Gmail → **Watch Emails**.
  2. **Input:** el cuerpo del mensaje y el remitente.
  3. **Cerebro:** OpenAI con un system prompt: *"Sos un asistente ejecutivo. Analizá este correo y redactá una respuesta profesional basada en estos hechos…"*.
  4. **Acción:** Gmail → **Create a Draft** (o Send an Email).
  - **Por qué empezar con borradores:** revisás, ajustás y enviás. Cuando confiás en el prompt, pasás a envío automático. (Es human-in-the-loop, que veremos a fondo en el Módulo 7.)
- **Casos reales:**
  - *Freelancer:* detecta "costo" o "presupuesto" y responde con el link al brochure de precios en Drive.
  - *E-commerce:* extrae el número de pedido, busca el estado en Airtable y responde *"Tu pedido #1234 está en camino y llega el miércoles"*.
  - *Asistente virtual con 5 clientes:* adapta el tono según la marca (formal para un abogado, relajado para un coach).
- **Errores comunes:**
  1. **Loop infinito de correos:** tu respuesta automática choca con un "fuera de la oficina" y se responden sin fin. **Filtro:** remitente no contiene `noreply` y asunto no contiene `Autoreply`.
  2. **Prompt vago:** "Respondé este correo" → la IA inventa precios. **Sección de "hechos innegables"** con precios, horarios y servicios reales.
  3. **No manejar hilos:** cada respuesta crea un mail nuevo. **Mapear el Thread ID** del correo original.
- **Privacidad:** los datos viajan encriptados, pero vos sos responsable de qué le indicás a la IA sobre los datos de tus clientes.

**Demo con el proyecto ejemplo:** mandá una consulta al Gmail de prueba: *"Hola, somos 4 y queremos ir del 10 al 17 de enero, ¿tienen algo con parrilla?"*. Mostrá:
- el **prompt con los hechos innegables** de la inmobiliaria;
- el **borrador** que aparece en Gmail, en el mismo hilo (Thread ID mapeado);
- el **filtro anti-loop** antes de OpenAI.

## 45–58 · Práctica 1 — Trigger Gmail + IA que resume y prioriza

Escenario nuevo en Make:
1. **Gmail → Watch Emails** (carpeta Inbox) con su Gmail de prueba.
2. **OpenAI → Create a Chat Completion** con el prompt del PDF:
   > "Actuá como un triaje de ventas. Analizá este correo y respondé en formato JSON con dos campos:
   > 1. 'resumen': un resumen de 10 palabras. 2. 'prioridad': un número del 1 al 5 (donde 5 es venta urgente hoy mismo)."
3. **Run once** mandándose un mail urgente y uno tranquilo. Revisar que el JSON llegue bien.

> Este es el paso 1 de la PE5. En la clase 10 le sumamos el Router, Slack y WhatsApp.

## 63–93 · Bloque B — WhatsApp Business API: de la app a la API

**Disparador de la charla:** un prospecto llena tu formulario a las 11 de la noche. En vez de esperar a que te despiertes, le llega un WhatsApp de bienvenida, un recurso gratis y, tres días después, una pregunta para ver si tiene dudas. Tus clientes no siempre revisan el mail; **están en WhatsApp**.

**Contenido (según el PDF):**

- **Los límites de la app WhatsApp Business:**
  1. No permite varios agentes respondiendo de forma organizada.
  2. Sus automatizaciones son básicas (ausencia, bienvenida).
  3. **No se puede conectar oficialmente con Make o n8n** sin riesgo de que bloqueen el número.
- **La WhatsApp Business API:** una "puerta de servicio" que abre Meta para que otros softwares hablen con WhatsApp. Para cruzarla hace falta un **BSP (Business Solution Provider)**.
- **Twilio vs Wati, Lego suelto vs set armado:**

| | **Wati** | **Twilio** |
|---|---|---|
| Qué es | Plataforma "todo en uno" para WhatsApp | Infraestructura |
| Trae | Bandeja de entrada para el equipo + constructor visual de chatbots | Nada visible: "no tiene cara" |
| Costo por mensaje | Mayor | Mucho más económico |
| Ideal para | Simplicidad y rapidez | Conectarlo a Make y mandar los mensajes adonde quieras (Sheets, Slack) |

- **Sandbox (caja de arena):** Twilio y Wati permiten probar sin pagar y sin un número de empresa verificado. Es el simulador de vuelo antes de pilotar.
- **Webhooks:** lo que hace que el mensaje "salte" de WhatsApp a Make. Alguien te escribe → WhatsApp avisa al proveedor → el proveedor lanza el mensaje a una URL especial que creás en Make.

**Demo:** consola de Twilio → **WhatsApp Sandbox** → mostrar el número del sandbox y el código para unirse. Mandar un mensaje desde Make (**Twilio → Send a Message**) a tu celular, con el número en **formato internacional** (`whatsapp:+549…` para un celular argentino). Mostrar dónde se configura la URL del webhook para los mensajes entrantes.

## 93–105 · Práctica 2 + cierre

1. Crear la cuenta de Twilio y unirse al **WhatsApp Sandbox** desde su celular.
2. Mandarse un mensaje desde Make con el módulo de Twilio, con el número en formato internacional.

**Tarea para la clase 10:** traer funcionando el escenario Gmail → OpenAI (resumen + prioridad) y el sandbox de WhatsApp.

**Material para profundizar:** el PDF no trae links en estas unidades. Sirven la documentación de Twilio sobre el WhatsApp Sandbox y el centro de ayuda de Make (módulos de Gmail y Twilio).

---

## Checklist de salida

- [ ] Todos tienen Gmail conectado en Make y el flujo que devuelve resumen + prioridad.
- [ ] Todos entienden contexto, filtro anti-loop y Thread ID.
- [ ] Todos tienen el sandbox de WhatsApp funcionando (o saben qué les falta).
