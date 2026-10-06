# Clase 2 — Ética y seguridad + Pre-Entrega 1

**Módulo 1 · Fundamentos de IA y mentalidad de Arquitecto de Automatización** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidad 3 del Módulo 1 y consigna de la Pre-Entrega 1

> Base de contenido: el PDF. **Presentación:** `Clase02.html` (33 filminas, en esta carpeta; se navega
> con ← → o los botones), con la rúbrica vigente del PDF. Las filminas viejas quedan solo como
> referencia: su rúbrica está desactualizada (dice 60 pts y otros porcentajes).

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar los 3 pilares éticos de la IA: privacidad, equidad y transparencia.
2. Aplicar minimización, trazabilidad, anonimización, eliminación y retención a un flujo concreto.
3. Ubicar un flujo en uno de los 4 niveles de riesgo de la IA Act y saber qué exige el GDPR.
4. Salir con el diagrama más la **capa de gobernanza** y la **consigna de la PE1** clara.

---

## Preparación previa (docente)

**Pendientes del bot (en esta clase los botones ✅/❌ son el centro de la demo de HITL):**

- [ ] Construir la rama del botón ❌ (hoy no hace nada).
- [ ] Agregar el `answerCallbackQuery` para que el botón no quede "cargando" en Telegram.
- [ ] Borrar el módulo temporal #21 (el `setWebhook` manual).
- Si no se llega a terminarlo: en la demo, apretar solo ✅.

**Unos días antes:**

- [ ] **Respaldo:** video o capturas del History de Make (una ejecución abierta, con las burbujas de Input/Output) y de la ficha con los botones.
- [ ] Estudiar las páginas 12 a 20 del PDF (ética y seguridad + consigna de la PE1).
- [ ] Definir con la otra profesora si la PE1 acepta cualquier proceso o solo de atención al cliente (ver la nota en el brief).

**El día de la clase:**

- [ ] Tener abierto el escenario del bot en Make, pestaña **History** (el ícono de reloj), con alguna ejecución reciente para mostrar.
- [ ] Tener a mano los 6 casos de la actividad de riesgo (más abajo).
- [ ] Tener la consigna de la PE1 lista para compartir: el link o la sección del PDF.
- [ ] Tener para compartir `plantilla-pe1.drawio` y `ejemplo-resuelto-pe1.drawio`.

> **A definir con la otra profesora:** sumar al cierre un bloque de **15 minutos de panorama del curso**
> (herramientas y en qué módulo aparecen, Make vs n8n, qué es gratis y qué no, qué cuentas crear y cuándo,
> y el proyecto ejemplo). Saldría del tiempo del taller. Si se aprueba, hay que armar esas filminas en
> `Clase02.html`. El contenido está más abajo, en "Bloque opcional".

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–12 | Repaso | Los alumnos muestran su diagrama y se corrige en vivo |
| 12–45 | **Bloque A — Ética y seguridad** | Unidad 3 del PDF + demo en Make |
| 45–58 | Práctica 3 | Sumar gobernanza al diagrama |
| 58–63 | Micro-pausa | |
| 63–85 | **Bloque B — Brief de la Pre-Entrega 1** | Consigna, ejemplo, rúbrica |
| 85–100 | Taller | Armado acompañado + dudas |
| 100–105 | Cierre | Qué viene en el Módulo 2 |

---

## 0–12 · Repaso: se muestran los diagramas de la tarea

2 o 3 alumnos comparten pantalla. Corregí en grupo los errores típicos:

- Rombo con **más de 2 salidas**. La decisión es solo Sí/No; si hay más opciones, se encadenan rombos.
- Trigger dibujado como rectángulo. Tiene que ser **óvalo**.
- Falta el óvalo de **Fin/Output**.
- Trigger, Inputs y Output **sin etiquetar**.
- Proceso demasiado grande. Hay que acotarlo a una sola tarea.
- La IA aparece "de la nada", sin que se vea qué dato recibe. La rúbrica pide conexión lógica entre el Trigger y el motor de IA.

## 12–45 · Bloque A — Ética y seguridad

**Disparador de la charla:** contratás un asistente que tiene las llaves de la oficina, tus mails y tu base de ventas, y nunca duerme. Un día descubrís que comparte los teléfonos de tus clientes con desconocidos, o que rechaza todas las consultas de una región sin preguntarte. Eso pasa cuando automatizás sin un marco ético.

**Contenido (según el PDF):**

### Los 3 pilares

- **Privacidad:** las personas controlan su información. Tenés que saber qué datos recogés, para qué y con quién los compartís. Ej.: un bot de WhatsApp no debería guardar la foto de perfil y el estado del usuario si solo necesita el nombre. Regla de oro: **minimización de datos**.
- **Equidad:** la IA aprende de datos pasados y repite sus prejuicios. Ej.: un filtro de CVs que prioriza hombres para puestos técnicos. Revisá que tus filtros y prompts no creen "barreras invisibles".
- **Transparencia:** tenés que poder explicar por qué el flujo decidió algo, adiós a la "caja negra". Si un cliente pregunta *"¿por qué no recibí el descuento automático?"*, tenés que poder explicar la lógica del flujo. "La IA decidió así" no vale como respuesta.

### Seguridad y manejo responsable de datos

La seguridad no se trata solo de hackers con máscaras: se trata de prevenir errores humanos y fallas del sistema que expongan información sensible.

- **Human-in-the-loop / "botón de parada":** una automatización no es "configurar y olvidar". Para decisiones importantes (un reembolso, un contrato) va un paso de aprobación manual, por ejemplo un aviso a Slack o un mail con botones Aprobar/Rechazar antes de la acción final.
- **Minimización:** *"si no lo usás, no lo pidas"*. Menos datos guardados es menos riesgo ante un hackeo.
- **Trazabilidad:** el registro de qué entró, qué decidió la IA y qué salió en cada paso. Las herramientas ya lo guardan:
  - **Make:** pestaña **History** (ícono de reloj). Cada ejecución tiene punto verde o rojo; clic en un módulo para ver las burbujas de Input y Output.
  - **n8n:** pestaña **Executions**. Las fallidas aparecen en rojo, el nodo roto queda resaltado y se ve el JSON de entrada y salida.
  - *Buena práctica:* ante errores críticos, mandar el detalle a Slack o a una fila de Sheets/Airtable.
- **Anonimización:** reemplazar nombre, email o teléfono por un código (`cliente_001`, un hash) antes de guardar. En Make/n8n se hace con un módulo de transformación ("Set variable" / "Edit Fields").
- **Eliminación / derecho al olvido:** llega un pedido de baja → buscar la fila por email → *Delete row/record*. Se guarda el registro del borrado (la fecha), no el dato.
- **Retención limitada:** un escenario programado diario que borre los registros de más de X días (30 o 90).

**Demo en vivo con el bot de películas:**

1. **Trazabilidad:** abrí History en Make, entrá a una ejecución y mostrá las burbujas de Input/Output de cada módulo. *"Si el bot guarda mal una peli, acá veo en qué paso falló."*
2. **HITL:** mandá una peli por Telegram. El bot muestra la ficha con los botones ✅/❌ y **no guarda nada hasta que un humano aprueba**. Ese es el botón de parada.

### Marco legal: GDPR e IA Act

- **GDPR:** exige **consentimiento explícito**. No podés sumar a alguien a tu lista de mails solo porque te escribió por WhatsApp; tiene que aceptar.
- **IA Act (UE):** clasifica cada uso de IA en 4 niveles de riesgo. A más riesgo, más obligaciones:

| Nivel | Qué es | Ejemplos |
|---|---|---|
| **Inaceptable** (prohibido) | Atenta contra derechos fundamentales | Scoring social, manipulación subliminal |
| **Alto** (regulado) | Afecta salud, seguridad o derechos | Filtrado de CVs, scoring crediticio, IA en educación o en dispositivos médicos |
| **Limitado** (transparencia) | La mayoría de los flujos de marketing y atención al cliente | Chatbots (tienen que avisar que son bots), contenido generado por IA (hay que etiquetarlo) |
| **Mínimo** (sin obligaciones específicas) | La mayoría del software | Filtros anti-spam, sugerencias simples de productos |

- Sanciones por usos prohibidos: hasta **35 M€ o el 7 % de la facturación anual global**.
- Entrada en vigor por fases: las prohibiciones rigen desde 2025 y las obligaciones de alto riesgo se completan entre 2026 y 2027.
- *¿Dónde caen tus flujos?* Un bot que responde consultas o un flujo que redacta mails es casi siempre **riesgo limitado**. Si el flujo decide a quién se contrata o quién recibe un crédito, sube a **alto riesgo**.

**Actividad rápida (5 min): ¿qué nivel de riesgo es?** Leé cada caso y que respondan en el chat.

1. Un chatbot de WhatsApp que responde horarios y precios → **Limitado** (tiene que avisar que es un bot)
2. Un sistema que filtra CVs y descarta candidatos → **Alto**
3. El filtro anti-spam del mail → **Mínimo**
4. Un puntaje de "buen ciudadano" que decide el acceso a servicios → **Inaceptable**
5. Imágenes para Instagram generadas con IA → **Limitado** (hay que etiquetarlas)
6. Una IA que aprueba o rechaza préstamos → **Alto**

### Mitos para desarmar

1. *"La automatización es 100 % autónoma."* Falso. Un cambio en el modelo puede romper tu prompt mañana; la supervisión es obligatoria.
2. *"Más datos hacen más inteligente a mi IA."* Falso. Más datos es más riesgo; importa la calidad, no la cantidad.
3. *"La ética es solo para grandes corporaciones."* Falso. Un freelance que maneja mal los datos de 10 clientes arruina su reputación. La ética es una ventaja competitiva.

### Checklist de integridad (para cada automatización)

1. **¿Es necesario?** ¿Realmente necesito guardar este dato personal?
2. **¿Hay un humano cerca?** ¿Hay validación humana para las decisiones críticas?
3. **¿Soy transparente?** ¿El usuario sabe que habla con un bot o que sus datos se procesan automáticamente?
4. **¿Tengo un registro?** Si algo sale mal, ¿puedo ver qué pasó en cada paso?

## 45–58 · Práctica 3 — Sumar gobernanza al diagrama

Sobre el diagrama de la tarea:

1. Pasen su flujo por el **checklist de integridad**.
2. Marquen en el diagrama dónde iría el **botón de parada** (revisión humana), si corresponde.
3. Elijan **2 o 3 medidas** (minimización, trazabilidad, anonimización, eliminación, retención, consentimiento, revisión humana) y anoten **con qué módulo o nodo concreto** las implementarían.
4. Clasifiquen su flujo según la IA Act.

## 63–85 · Bloque B — Brief de la Pre-Entrega 1: Diagrama de Arquitectura Lógica

**Lo que tienen que tener asimilado antes de diseñar (consolidación del módulo, según el PDF):**

- **Anatomía de un flujo:** Trigger (evento de tiempo, datos o acciones) + Inputs (materia prima) + Outputs (resultado, que alimenta el paso siguiente).
- **Lógica vs IA:** la lógica es el mapa y la IA es el motor. Nunca conectar un modelo de lenguaje sin antes dibujar la secuencia.
- **Simbología estándar:** óvalo (inicio/fin), rectángulo (acción), rombo (decisión Sí/No).
- **Gobernanza digital 2026:** minimización de datos y cumplimiento de la IA Act y el GDPR, clasificando el nivel de riesgo del sistema.

**Contexto:** un Arquitecto de Automatización no conecta herramientas a ciegas: primero diseña un mapa lógico. En 2026, las empresas exigen que los flujos inteligentes respeten normativas como la IA Act o el GDPR antes de interactuar con motores de IA.

**Tu misión:** diseñar el diagrama lógico de un proceso que conecte una entrada de datos externa (Trigger) con un motor de IA, mostrando la trazabilidad de la información de forma segura y ética.

**Objetivos de aprendizaje de la PE1 (según el PDF):**

- Comprender la lógica técnica elemental (Triggers, Inputs, Outputs) aplicada a flujos inteligentes.
- Diseñar arquitecturas lógicas visuales garantizando la trazabilidad integral del dato.
- Incorporar gobernanza y mitigación de riesgos alineadas con GDPR e IA Act.

> **Ojo con una ambigüedad del PDF:** los pasos dicen "un proceso cotidiano de tu negocio", pero la ficha
> del entregable lo describe como "diseño de flujo … para un proceso de **soporte al cliente**, identificando
> triggers, intervención de IA y puntos de revisión humana". Conviene definir con el grupo si vale cualquier
> proceso o si tiene que ser de atención al cliente. En cualquier caso, que el diagrama muestre dónde
> interviene la IA y dónde hay revisión humana.

**Pasos:**

1. Seleccioná un proceso cotidiano de tu negocio, como responder consultas de clientes o registrar presupuestos.
2. Usá una herramienta de diagramado: papel y lápiz, Draw.io, Canva o Lucidchart.
3. Dibujá usando **estrictamente** los símbolos correctos: óvalo para el inicio/Trigger, rectángulo para las acciones y rombo para las decisiones Sí/No.
4. Etiquetá de forma explícita el **Trigger**, los **Inputs** y el **Output** final.
5. Agregá un **párrafo de gobernanza** (3–4 líneas) con **2 o 3 medidas concretas** según GDPR / IA Act: anonimización, consentimiento, minimización, retención limitada o revisión humana.

**Alcance mínimo:** 5 nodos, es decir 1 óvalo (Trigger), 2 o más rectángulos, 1 rombo y 1 óvalo de Fin (Output). *Se evalúa que la lógica sea clara, no la cantidad de pasos.*

**Formato de entrega:** diagrama (.drawio, Miro, Lucidchart) o PDF con la imagen legible del flujo y la justificación de privacidad.

**Ejemplo resuelto del PDF (responder consultas de clientes):**

```
(ÓVALO · Trigger)        Llega un email de consulta del cliente
        ↓
[RECTÁNGULO · Acción]    La IA lee y clasifica la consulta
        ↓
<ROMBO · Decisión>       ¿Es una consulta simple y frecuente?
   Sí ↓                          ↓ No
[RECTÁNGULO]                  [RECTÁNGULO]
La IA responde sola           Se deriva a un agente humano
        ↓                          ↓
(ÓVALO · Fin/Output)     Respuesta enviada al cliente

Trigger: email entrante | Input: texto de la consulta | Output: respuesta enviada
```

**Párrafo de gobernanza de muestra (molde):**

> "Para proteger los datos personales del cliente (nombre y email), el flujo procesa solo la información
> estrictamente necesaria para responder la consulta (principio de minimización de datos, GDPR). El email
> no se almacena más de 30 días ni se usa para entrenar el modelo de IA, y los datos sensibles se
> anonimizan antes de derivar a un humano. Bajo el enfoque de riesgo de la IA Act, este flujo se
> clasifica como de riesgo limitado."

**Rúbrica (vigente, según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Diseño técnico visual | Uso estricto de los 3 símbolos (óvalo, rectángulo, rombo) modelando la trazabilidad del dato | **30 %** |
| Lógica de integración | Conexión coherente, sin saltos, entre el Trigger externo y el motor de IA | **25 %** |
| Cumplimiento normativo y privacidad | Párrafo de gobernanza con 2–3 medidas concretas alineadas con GDPR / IA Act | **30 %** |
| Etiquetado de Trigger, Inputs y Output | Identificados de forma explícita y correcta, de punta a punta | **15 %** |

**Total: 100 pts · Aprobación: 70 pts**

**Checklist de entrega (para que revisen antes de subir):**

- [ ] Diagrama con los 3 símbolos correctos y mínimo 5 nodos.
- [ ] Trigger, Inputs y Output etiquetados de forma explícita.
- [ ] Párrafo de gobernanza con 2–3 medidas concretas alineadas con GDPR / IA Act.
- [ ] Entregado como .drawio, Miro, Lucidchart o PDF, con el flujo legible y el párrafo.

**Actividad (5 min):** cada uno escribe **su** párrafo de gobernanza en vivo usando el molde. Dos lo leen en voz alta y se corrigen: ¿las medidas son concretas? ¿dice cómo se implementan?

## 85–100 · Taller

- Los alumnos avanzan su PE1 en draw.io mientras vos recorrés las dudas.
- **Plantilla para empezar (según el PDF):** abrir un lienzo en blanco en Draw.io o Lucidchart, buscar las formas óvalo, rectángulo y rombo en el panel de figuras y armar el flujo sobre el ejemplo resuelto.
- **Archivos listos en esta carpeta:** `plantilla-pe1.drawio` (para compartir con los alumnos: nodos con [texto a reemplazar], etiquetas de Trigger/Inputs/Output y recuadro para el párrafo de gobernanza) y `ejemplo-resuelto-pe1.drawio` (el ejemplo del PDF armado, con su párrafo de gobernanza). Se abren en app.diagrams.net → Archivo → Abrir desde → Dispositivo.
- Prioridad: los alumnos cuyo proceso anotaste como "demasiado grande" en la clase 1.
- Si sobra tiempo, revisá diagramas con la rúbrica en la mano.

## Bloque opcional (a definir) · Panorama del curso, 15 min

Si se aprueba, va entre el taller y el cierre (el taller pasa a 85–90).

| Tema | Qué decir |
|---|---|
| **Las herramientas** | Airtable (M2) · Make (M3 y M5) · n8n (M4 en adelante) · OpenAI (M3) · Claude (M6–M7) · Gmail, Slack y WhatsApp (M5) · Notion (M7) |
| **Make vs n8n** | Make es No-Code (más simple, cobra por operación); n8n es Low-Code (más potente, se puede instalar gratis). Para la Entrega Final el programa prefiere n8n. El detalle va en la clase 3. |
| **Qué es gratis y qué no** | Casi todo tiene plan gratuito. Lo único pago son las APIs de OpenAI y Claude: créditos prepagos, sin suscripción. Con una recarga mínima (~USD 5 cada una, verificar al cargar) alcanza para todo el curso. Desactivar la recarga automática. |
| **Qué cuentas crear y cuándo** | Airtable antes de la clase 4 · Make antes de la 5 · OpenAI (con límite de gasto) antes de la 6 · n8n antes de la 7 · Gmail de prueba, Slack y Twilio antes de la 9 · Anthropic antes de la 11 · Notion antes de la 13 · GitHub antes de la 15 |
| **El proyecto ejemplo** | La inmobiliaria de alquileres temporarios que se construye en vivo, módulo por módulo. Cada alumno arma lo mismo con su propio proceso. |

## 100–105 · Cierre

- **Entrega de la PE1:** se recomienda cerrarla antes de la **clase 5**.
- **Adelanto del Módulo 2 (Ecosistema No-Code y Low-Code):** del mapa lógico pasan a las herramientas reales, empezando por el "cerebro" de datos del sistema.
- Ronda final de preguntas.

**Material para profundizar (del PDF):**

- Comisión Europea, AI Act: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- Parlamento Europeo, qué es el AI Act: https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence
- Anthropic, documentación: https://docs.anthropic.com/

---

## Checklist de salida

- [ ] Todos entienden la consigna y la rúbrica de la PE1 (100 pts, aprueba con 70).
- [ ] Todos tienen su diagrama con la capa de gobernanza iniciada.
- [ ] Todos escribieron al menos el borrador de su párrafo de gobernanza.
- [ ] Quedó comunicada la fecha recomendada de entrega (antes de la clase 5).
