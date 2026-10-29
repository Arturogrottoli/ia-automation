# Semana 1 · Clase 1 — Guion de las filminas

**Módulo 1: Introducción a la IA, el Prompt Engineering y las automatizaciones**
Duración: **2 horas** · Filminas: **1 a 24** de `Modulo_1_AI_Automation.pptx` (las tres secciones de teoría)
Ejercicios: `ejercicios-alumnos.md` (respuestas en `ejercicios-docente.md`)

> El deck está pensado para una sola sesión larga. Lo partimos en dos: **la Clase 1 es la teoría**
> (secciones 01 a 03) con ejercicios cortos intercalados, y **la Clase 2 es la práctica en vivo y el
> desafío** (secciones 04 y 05). La filmina 24 (Break) se usa en las dos clases.

---

## Agenda

| Min | Tramo | Filminas | Ejercicio |
|---|---|---|---|
| 0–15 | Apertura y presentaciones | 1–5 | |
| 15–40 | **01 · Qué es la IA y qué es un LLM** | 6–10 | Ej. 1 y Ej. 2 |
| 40–60 | **02 · Cómo piensa un modelo** (primera parte) | 11–14 | Ej. 3 |
| 60–70 | Break | 24 | |
| 70–90 | **02 · Cómo piensa un modelo** (segunda parte) | 15–17 | Ej. 4 |
| 90–115 | **03 · Prompt Engineering** | 18–23 | Ej. 5 y Ej. 6 |
| 115–120 | Cierre y tarea | — | Tarea |

---

## Preparación (antes de la clase)

- [ ] **Filmina 2:** dice Profesor / Coordinador / Tutor. El equipo son solo los dos profes: poner a Arturo Grottoli y a Romina Diaz, sacar coordinador y tutor, y completar el N° de comisión.
- [ ] Un chat de IA abierto (ChatGPT, Claude o Gemini) para las demos.
- [ ] El tokenizador de OpenAI abierto (platform.openai.com/tokenizer) para el Ejercicio 3. Verificá que funcione.
- [ ] Probá antes el Ejercicio 4 con el modelo que vas a usar, para saber qué va a pasar.
- [ ] `ejercicios-alumnos.md` listo para compartir (o pegar los enunciados en el chat).
- [ ] Avisar que la clase queda grabada.

---

## 0–15 · Apertura

**Filmina 1 · Portada** (1 min)
- Bienvenida al curso AI Automation y al Módulo 1.

**Filmina 2 · Presentación del equipo** (3 min)
- Los dos profes se presentan: quiénes son y a qué se dedican.

**Presentación de los alumnos** (sin filmina, 6 min)
- En el chat o con micrófono: de dónde son, a qué se dedican y qué los trajo al curso.
- Si el grupo es grande, que lo escriban en el chat y leés algunos.

**Filmina 3 · Objetivos** (2 min)
- Leé los cinco objetivos. Remarcá el último: **forzar salidas en JSON válido**. Es lo que conecta la IA con las automatizaciones, y el porqué de todo el módulo.

**Filmina 4 · Agenda** (2 min)
- Aclará cómo se reparte: **hoy la teoría** (qué es la IA, tokens y alucinaciones, Prompt Engineering); **la clase que viene la práctica en vivo y el desafío**.

**Filmina 5 · La clase queda grabada** (1 min)

---

## 15–40 · Sección 01 · Qué es la IA y qué es un LLM

**Filmina 6 · Separador "01"** (pasarla)

**Filmina 7 · ¿Qué es la IA?** (4 min)
- **Idea clave:** Claude o ChatGPT son **productos**; la IA es una **rama de la informática**, como la ciberseguridad o la ciencia de datos.
- Su objetivo: sistemas que hagan tareas que necesitan inteligencia humana.
- Pregunta al grupo: *"¿Qué herramienta con IA usaron esta semana?"* Vas a escuchar ChatGPT; usalo para separar producto de disciplina.

**Filmina 8 · Los subcampos** (4 min)
- Machine Learning (aprende de ejemplos), Deep Learning (redes neuronales de muchas capas), NLP (lenguaje) y visión artificial (imágenes y video).
- Ejemplos para cada uno: recomendaciones de Netflix (ML), desbloqueo facial (visión), traductores y chatbots (NLP).

**Filmina 9 · ¿Qué es un LLM?** (5 min)
- **La fórmula:** Deep Learning + NLP + casi todo el texto de internet.
- **Cómo responde:** por probabilidad. El ejemplo de "Hola, buenas \_\_\_" a las 21:00.
- ChatGPT, Claude y Gemini son LLMs: son los que van a vivir dentro de nuestros flujos.

**Ejercicio 2 · El juego del próximo token** (3 min) — se hace acá, con la filmina 9
- Leé las tres frases y que completen en el chat. Mostrá que casi todos ponen lo mismo.
- Después cambiá el contexto de la frase 3 (el atardecer) y que vean cómo cambia la palabra probable.

**Filmina 10 · Para recordar** (2 min)
- *El LLM no "entiende": arma un mapeo matemático y elige la palabra más probable. Simula el comportamiento humano, no lo replica.*

**Ejercicio 1 · ¿IA, LLM o automatización?** (8 min)
- 5 minutos para resolver, 3 para corregir en voz alta. Respuestas en `ejercicios-docente.md`.
- **Cerrá con el caso 7:** un flujo que lee mails, le pide a la IA que los clasifique y los reparte. *"Eso es lo que vamos a construir en el curso."*

---

## 40–60 · Sección 02 · Cómo piensa un modelo (primera parte)

**Filmina 11 · Separador "02"** (pasarla)

**Filmina 12 · La inferencia** (4 min)
- Es lo que pasa cuando apretás enter: el modelo ya entrenado predice el próximo fragmento de texto.
- **La condición:** predice solo con el contexto que recibe. *Contexto pobre, predicción pobre.* Esta frase vuelve en todo el módulo.

**Filmina 13 · Tokens** (4 min)
- Un token puede ser una palabra, una sílaba o una letra. Lo arma el tokenizador; el algoritmo más común es **BPE (Byte-Pair Encoding)**.
- Cada modelo tokeniza distinto: por eso no todos sirven para todo.

**Ejercicio 3 · Mirá los tokens** (10 min)
- Hacé el primer texto en vivo en el tokenizador y que sigan solos con el resto.
- Lo que tienen que descubrir: una palabra no es siempre un token, y el español gasta más tokens que el inglés.

**Filmina 14 · Ventana de contexto** (2 min)
- El límite fijo de tokens que el modelo procesa a la vez. **No olvida de a poco:** lo que queda afuera deja de existir para el modelo.
- La hoja de papel de tamaño fijo. Conectalo con el ejercicio: *"si el español gasta más tokens, ¿qué pasa con un texto largo?"*

---

## 60–70 · Break

**Filmina 24 · Break** — saltá hasta la 24 y después volvé a la 15.

---

## 70–90 · Sección 02 · Cómo piensa un modelo (segunda parte)

**Filmina 15 · "La IA no piensa: predice"** (1 min)
- Leela y dejala unos segundos. Es la idea que ordena todo lo que sigue.

**Filmina 16 · Alucinaciones** (5 min)
- Información falsa presentada como verdad absoluta.
- **Por qué pasan:** perdió información que no entra en la ventana, o nunca se la dimos.
- **El riesgo en automatización:** nadie mira la pantalla. El dato inventado sigue viaje hasta tu base de datos.

**Filmina 17 · Actividad: el estudiante que no estudió** (4 min)
- El estudiante que, en vez de decir "no sé", arma una respuesta larguísima y segurísima.
- Pregunta al grupo: *"¿Cuál es la alucinación más loca que les dio una IA?"* Que cuenten 2 o 3 en el chat.

**Ejercicio 4 · Cazá una alucinación** (10 min)
- Que prueben los dos pedidos y después los repitan con *"si no tenés esa información, respondé no_disponible"*.
- **Lo importante del cierre:** una instrucción explícita cambia el comportamiento. Es el anticipo del **paso 4 (anti-alucinación)** de la Clase 2.

---

## 90–115 · Sección 03 · Prompt Engineering

**Filmina 18 · Separador "03"** (pasarla)

**Filmina 19 · Prompt Engineering** (3 min)
- No es solo preguntar: es **diseñar la instrucción**. El prompt es el puente entre nosotros y la IA.
- El ejemplo del gym: "armame una rutina" contra una pedida con grupo muscular, intensidad y días.

**Filmina 20 · Anatomía del prompt** (4 min)
- **Persona, contexto, tarea y formato.**
- Aclaración: el material de lectura (`Semana 1.docx`) lo llama **rol, tarea, contexto y formato de salida**. Es lo mismo: persona = rol.
- *La IA no sabe lo que querés: es un predictor de texto y necesita instrucciones explícitas.*

**Filmina 21 · Técnicas: zero-shot, few-shot y Chain of Thought** (4 min)
- **Zero-shot:** sin ejemplos; "tirarse a la pileta sin saber si hay agua".
- **Few-shot:** dos o tres ejemplos dentro del prompt; copia el tono y la estructura.
- **Chain of Thought:** la obligamos a razonar paso a paso antes de responder. Nuestra herramienta contra las alucinaciones.

**Filmina 22 · Salida en JSON** (3 min)
- Si la IA responde "Acá tenés tu respuesta, amigo", ninguna automatización puede usar eso.
- Hace falta **un objeto JSON válido y nada más**: se piden las llaves en el prompt y se prohíbe el texto extra.
- Mostrá un JSON chiquito: `{"nombre": "Juan", "destino": "Bariloche"}`. Clave entre comillas, valor, coma entre pares. (El JSON se ve más a fondo en el Módulo 2.)

**Filmina 23 · Coder Tips: delimitadores** (2 min)
- Envolver el dato entre `###` o comillas triples: la IA sabe dónde empieza y dónde termina.
- *No es la longitud lo que mejora la respuesta: es la claridad, el orden, los delimitadores y los ejemplos.*

**Ejercicio 5 · Del prompt malo al prompt bueno** (6 min en clase)
- Hacé el número 3 (clasificar el comentario) en vivo con el grupo; el 1 y el 2 quedan para la casa.

**Ejercicio 6 · #FindTheBug** (3 min)
- Que encuentren el problema en el chat: falta de delimitadores e inyección de prompt ("ignorá las instrucciones anteriores"). Mostrá la versión corregida.

---

## 115–120 · Cierre y tarea

- **Repaso en una frase:** la IA predice tokens dentro de una ventana limitada; por eso necesita prompts con estructura, ejemplos y límites.
- **Tarea para la Clase 2:**
  1. Ejercicio 5 completo (prompts 1 y 2).
  2. Zero-shot vs few-shot con las reseñas de la cafetería.
  3. Leer `Semana 1.docx`.
  4. **Conseguir dos textos desordenados del mismo tipo** de su trabajo o proyecto (dos mails, dos reseñas, dos mensajes). Sin esto no pueden hacer la práctica de la Clase 2.
- **Adelanto:** la próxima clase convertimos un mail desordenado en un JSON listo para una automatización, en cinco pasos.

---

## Checklist de salida

- [ ] Quedó clara la diferencia entre IA, LLM y automatización.
- [ ] Vieron tokens reales en el tokenizador.
- [ ] Vieron una alucinación y cómo la frena una instrucción explícita.
- [ ] Conocen las cuatro partes del prompt y las tres técnicas.
- [ ] Saben que tienen que traer **dos textos propios** a la Clase 2.
