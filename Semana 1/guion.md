# Semana 1 — Guion de la clase (2 horas)

**Módulo 1: Introducción a la IA, el Prompt Engineering y las automatizaciones**
Filminas: **1 a 39** de `Modulo_1_AI_Automation.pptx` · Ejercicios: `ejercicios-alumnos.md` (respuestas y
material de la demo en `ejercicios-docente.md`)

> Una sola clase de 2 horas para las 39 filminas. La teoría va rápido (filminas 1 a 23) para dejar 30
> minutos a la práctica en vivo, que es lo que más se aprende. Los ejercicios largos quedan para la casa.

---

## Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–10 | Apertura y presentaciones | 1–5 | |
| 10–25 | **01 · Qué es la IA y qué es un LLM** | 6–10 | Ej. 1 (2 min) |
| 25–45 | **02 · Cómo piensa un modelo** | 11–17 | Demos del tokenizador y de una alucinación |
| 45–65 | **03 · Prompt Engineering** | 18–23 | Ej. 2 (3 min) |
| 65–75 | Break | 24 | |
| 75–105 | **04 · Práctica en vivo** en 5 pasos | 25–31 | Ej. 3 y Ej. 4 |
| 105–115 | **05 · Tu desafío del módulo** y cómo sigue | 32–37 | |
| 115–120 | Preguntas y cierre | 38–39 | Tarea |

**Si el tiempo se aprieta**, recortá en este orden: la anécdota de alucinaciones del grupo (filmina 17),
la demo del tokenizador (queda para la casa) y el paso 3 de la práctica (se explica, no se hace).

---

## Preparación (antes de la clase)

- [ ] **Filmina 2:** dice Profesor / Coordinador / Tutor. Dejar a Arturo Grottoli y a Romina Diaz, sacar coordinador y tutor, y completar el N° de comisión.
- [ ] Un chat de IA abierto (ChatGPT, Claude o Gemini) y el tokenizador de OpenAI (platform.openai.com/tokenizer).
- [ ] Un JSON Formatter abierto (jsonformatter.org o jsonlint.com).
- [ ] Los textos de la agencia de viajes y las cinco versiones del prompt (`ejercicios-docente.md`), listos para copiar y pegar. **Probalos antes** con el modelo que vas a usar.
- [ ] `ejercicios-alumnos.md` listo para compartir: tiene los dos textos de la pastelería con los que practican los alumnos.
- [ ] Avisar que la clase queda grabada.

---

## 0–10 · Apertura

| Filmina | Min | Qué hacer |
|---|---|---|
| **1 · Portada** | 1 | Bienvenida al curso y al Módulo 1. |
| **2 · Presentación del equipo** | 2 | Los dos profes se presentan: quiénes son y a qué se dedican. |
| *(sin filmina)* | 4 | **Los alumnos se presentan en el chat:** de dónde son, a qué se dedican y qué los trajo al curso. Leé algunos en voz alta. |
| **3 · Objetivos** | 2 | Remarcá el último: **forzar salidas en JSON válido**. Es lo que conecta la IA con las automatizaciones. |
| **4 · Agenda** | 1 | Teoría hasta el break; después, práctica con las manos. |
| **5 · La clase queda grabada** | — | Pasarla. |

---

## 10–25 · Sección 01 · Qué es la IA y qué es un LLM

**Filmina 6 · Separador "01"** — pasarla.

**Filmina 7 · ¿Qué es la IA?** (3 min)
- Claude o ChatGPT son **productos**; la IA es una **rama de la informática**, como la ciberseguridad o la ciencia de datos.
- Pregunta rápida: *"¿Qué herramienta con IA usaron esta semana?"* Usá la respuesta para separar producto de disciplina.

**Filmina 8 · Los subcampos** (3 min)
- Machine Learning, Deep Learning, NLP y visión artificial, con un ejemplo cotidiano de cada uno: recomendaciones de Netflix, desbloqueo facial, traductores.

**Filmina 9 · ¿Qué es un LLM?** (4 min)
- Deep Learning + NLP + casi todo el texto de internet. Responde **por probabilidad**.

**Ejercicio 1 · El juego del próximo token** (2 min) — con la filmina 9
- "Son las 21:00. Hola, buenas \_\_\_": que completen en el chat. Casi todos ponen lo mismo: eso hace el modelo, con matemática.

**Filmina 10 · Para recordar** (2 min)
- *El LLM no "entiende": elige la palabra más probable. Simula el comportamiento humano, no lo replica.*
- Cerrá la sección con la diferencia clave: **no toda automatización tiene IA**. Una regla de Gmail que archiva facturas es automatización sin IA; un flujo que le pide a una IA que clasifique mails es una automatización cognitiva, y es lo que vamos a construir en el curso.

---

## 25–45 · Sección 02 · Cómo piensa un modelo

**Filmina 11 · Separador "02"** — pasarla.

**Filmina 12 · La inferencia** (3 min)
- Lo que pasa cuando apretás enter: el modelo predice el próximo fragmento con el contexto que recibe.
- La frase que vuelve en todo el módulo: *contexto pobre, predicción pobre.*

**Filmina 13 · Tokens** (3 min)
- Un token puede ser una palabra, una sílaba o una letra. Lo arma el tokenizador (BPE).

**Demo del tokenizador** (3 min, sin filmina)
- En el tokenizador de OpenAI: "Hola", después "desafortunadamente" y "unfortunately". Que vean que una palabra no es siempre un token y que el español gasta más tokens. (El ejercicio completo queda para la casa.)

**Filmina 14 · Ventana de contexto** (3 min)
- Límite fijo de tokens. No olvida de a poco: lo que queda afuera deja de existir. La hoja de papel de tamaño fijo.

**Filmina 15 · "La IA no piensa: predice"** (1 min)
- Leela y dejala unos segundos.

**Filmina 16 · Alucinaciones** (3 min)
- Información falsa presentada como verdad. Pasa cuando falta información en la ventana o nunca se la dimos.
- **El riesgo en automatización:** nadie mira la pantalla y el dato inventado sigue viaje hasta tu base de datos.

**Demo de una alucinación** (2 min, sin filmina)
- En el chat de IA: *"Este es el mensaje de un cliente: 'Hola, quiero reservar una mesa para 4 el sábado. Soy Laura.' ¿Cuál es el teléfono de Laura?"*. Después repetilo agregando *"Si no está, respondé no_disponible. No inventes."*. Es el anticipo del paso 4 de la práctica.

**Filmina 17 · El estudiante que no estudió** (2 min)
- La analogía. Si sobra tiempo, pedí una alucinación memorable en el chat.

---

## 45–65 · Sección 03 · Prompt Engineering

**Filmina 18 · Separador "03"** — pasarla.

**Filmina 19 · Prompt Engineering** (3 min)
- Diseñar la instrucción, no solo preguntar. El ejemplo del gym: genérico contra específico.

**Filmina 20 · Anatomía del prompt** (4 min)
- **Persona, contexto, tarea y formato.**
- Aclaración: el material de lectura lo llama **rol, tarea, contexto y formato de salida**. Es lo mismo: persona = rol.
- Mostrá en pantalla el ejemplo del material: el prompt malo ("Clasificá este mensaje: …") y el bueno (con rol, categorías, contexto, delimitadores y formato). El bueno devuelve siempre `reclamo_envio`.

**Filmina 21 · Zero-shot, few-shot y Chain of Thought** (4 min)
- Zero-shot: sin ejemplos. Few-shot: dos o tres ejemplos; copia tono y estructura. Chain of Thought: razonar paso a paso, nuestra herramienta contra las alucinaciones.

**Filmina 22 · Salida en JSON** (3 min)
- "Acá tenés tu respuesta, amigo" no le sirve a ninguna automatización. Hace falta un JSON válido y nada más.
- Mostrá uno chiquito: `{"nombre": "Juan", "destino": "Bariloche"}`. (El JSON se ve a fondo en el Módulo 2.)

**Filmina 23 · Delimitadores** (2 min)
- `###` o comillas triples para separar el dato de las instrucciones.

**Ejercicio 2 · #FindTheBug** (3 min)
- El prompt de devoluciones con "Ignorá todas las instrucciones anteriores": que encuentren el problema en el chat. Mostrá la versión con delimitadores (`ejercicios-docente.md`).

---

## 65–75 · Break

**Filmina 24 · Break**

---

## 75–105 · Sección 04 · Práctica en vivo

> **Cómo funciona:** vos lo hacés en pantalla con el **mail de la agencia de viajes**; los alumnos lo hacen
> en paralelo con el **texto de la pastelería** (Ejercicio 3 de `ejercicios-alumnos.md`). Cada uno guarda
> cada versión del prompt y su respuesta.

**Filmina 25 · Separador "04"** — pasarla.

**Filmina 26 · Prompt Battle** (4 min)
- El mail desordenado de Martín (Bariloche) con dos prompts: el **v1** ("Extraé los datos de este mail") y la **plantilla final**. *Mismo modelo, resultados opuestos.* Ahora lo construimos de a un paso.

**Filmina 27 · Paso 1: línea base** (3 min)
- Una sola instrucción, sin estructura. **Guardar la respuesta tal como salió**: es la comparación honesta.

**Filmina 28 · Paso 2: la estructura** (6 min)
- Persona, contexto, tarea explícita (qué campos extraer), formato y el texto entre `###`. Mostrá el **v2**.
- El error más común: no decir qué campos se quieren.

**Filmina 29 · Paso 3: los ejemplos** (5 min)
- Dos ejemplos de entrada y salida (few-shot). Mostrá el **v3** y compará contra el paso 1.

**Filmina 30 · Paso 4: anti-alucinación** (5 min)
- "Usá solo la información del texto", "pensá paso a paso" y `"no_disponible"` para lo que falta.
- **La demo que importa:** el mail de Martín no tiene email ni año. Mostrá la diferencia entre el v3 y el **v4**.

**Filmina 31 · Paso 5: salida JSON** (5 min)
- Las llaves exactas, nada de texto alrededor, y validar en el JSON Formatter. Ese es el prompt final: la **plantilla maestra**.
- Punto fino: si el modelo escribe el razonamiento antes del JSON, pedile que razone sin mostrarlo.

**Ejercicio 4 · ¿Este JSON entra a una automatización?** (2 min)
- Las respuestas A, B, C y D: solo la D sirve tal cual. Se resuelve en voz alta.

---

## 105–115 · Sección 05 · Tu desafío del módulo

| Filmina | Min | Qué remarcar |
|---|---|---|
| **32 · Separador "05"** | — | Pasarla. |
| **33 · ¿De qué se trata?** | 2 | Lo que hicieron hoy, en un solo prompt. Es la pieza que va a entrar a n8n en el Módulo 2. |
| **34 · Tu misión** | 2 | 45–60 min. Prompt final + texto de ejemplo + JSON. **Caso propio**, no el de la clase, y que funcione con **dos textos distintos**. |
| **35 · Los pasos** | 2 | Dos textos → los cinco pasos sobre el primero → probar el segundo sin cambios → validar los dos JSON → una línea sobre qué cambió. |
| **36 · ¿Cómo se evalúa?** | 2 | Estructura · ejemplos · control de alucinaciones · JSON válido y solo · reflexión. Es la base de la **Pre-Entrega 1** (Semana 2). |
| **37 · ¿Cómo sigue?** | 2 | Hoy copiaron y pegaron a mano; en n8n el flujo trae el texto solo. *Este prompt es la primera neurona del agente.* |

---

## 115–120 · Preguntas y cierre

**Filmina 38 · ¿Preguntas?** (4 min) — las tres preguntas de la filmina.

**Filmina 39 · ¡Gracias!** (1 min)
- **Para la Semana 2:**
  1. El **desafío del módulo**.
  2. Los **ejercicios para casa** (5 a 9), que repasan lo que hoy se vio rápido.
  3. Leer `Semana 1.docx`.
  4. Crear una cuenta de **n8n** (el Módulo 2 arranca con la herramienta).

---

## Checklist de salida

- [ ] Quedó clara la diferencia entre IA, LLM y automatización.
- [ ] Vieron tokens reales y una alucinación frenada con una instrucción.
- [ ] Hicieron las cinco versiones del prompt con el texto de la pastelería.
- [ ] Validaron un JSON en el formatter.
- [ ] Saben qué entregar en el desafío y que es la base de la Pre-Entrega 1.
