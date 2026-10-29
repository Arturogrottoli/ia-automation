# Semana 1 · Clase 2 — Guion de las filminas

**Módulo 1: Introducción a la IA, el Prompt Engineering y las automatizaciones**
Duración: **2 horas** · Filminas: **25 a 39** de `Modulo_1_AI_Automation.pptx` (práctica en vivo y desafío)
Ejercicios: `ejercicios-alumnos.md` · Material de la demo: `ejercicios-docente.md`, sección "Clase 2"

> En esta clase se trabaja con las manos: cada alumno arma su prompt en cinco versiones con **su propio
> texto**, mientras vos lo hacés en pantalla con el mail de la agencia de viajes.

---

## Agenda

| Min | Tramo | Filminas | Ejercicio |
|---|---|---|---|
| 0–15 | Repaso y revisión de la tarea | 20–23 | Tarea (zero vs few-shot) |
| 15–25 | **04 · Práctica en vivo:** Prompt Battle | 25–26 | |
| 25–45 | Paso 1 (línea base) y paso 2 (estructura) | 27–28 | Ej. 7 |
| 45–60 | Paso 3 (ejemplos) | 29 | Ej. 7 |
| 60–70 | Break | 24 | |
| 70–85 | Paso 4 (anti-alucinación) | 30 | Ej. 7 |
| 85–100 | Paso 5 (salida JSON) | 31 | Ej. 7, Ej. 8 y Ej. 9 |
| 100–115 | **05 · Tu desafío del módulo** y cómo sigue | 32–37 | |
| 115–120 | Preguntas y cierre | 38–39 | |

---

## Preparación (antes de la clase)

- [ ] Los dos textos de la agencia de viajes y las cinco versiones del prompt (`ejercicios-docente.md`) listos para copiar y pegar.
- [ ] Probá las cinco versiones antes con el modelo que vas a usar, para saber qué va a salir.
- [ ] Un JSON Formatter abierto (jsonformatter.org o jsonlint.com).
- [ ] Recordar en el grupo, el día anterior, que traigan **dos textos propios** del mismo tipo.
- [ ] Tener textos de respaldo para quien no traiga los suyos: los dos de la agencia de viajes sirven.

---

## 0–15 · Repaso y revisión de la tarea

- **Repaso rápido** con las filminas 20 a 23 (no hace falta volver a explicarlas): persona, contexto, tarea y formato; zero-shot, few-shot y Chain of Thought; salida en JSON; delimitadores.
- **Revisión de la tarea:** 2 o 3 alumnos comparten su resultado de zero-shot vs few-shot con las reseñas. La conclusión esperada: el few-shot mantiene el tono y el largo; el zero-shot varía.
- Chequeá quién trajo sus dos textos. A quien no los tenga, pasale los de la agencia de viajes.

---

## 15–25 · Sección 04 · Práctica en vivo

**Filmina 25 · Separador "04"** (pasarla)

**Filmina 26 · Ejemplo en vivo: Prompt Battle** (8 min)
- En pantalla: el **texto 1** (el mail desordenado de Martín, que quiere ir a Bariloche).
- Corré dos prompts con el mismo modelo:
  - el **v1**: "Extraé los datos de este mail";
  - el **final** (la plantilla maestra).
- Mostrá los resultados uno al lado del otro: *mismo modelo, resultados opuestos.*
- Cerrá con: *"Ahora vamos a construir ese prompt de a un paso, cada uno con su propio texto."*

---

## 25–45 · Pasos 1 y 2

**Filmina 27 · Paso 1: línea base** (8 min)
- **Objetivo:** tener un punto de comparación honesto.
- Que cada uno le pida a la IA la extracción de datos de su texto **con una sola instrucción**, sin ejemplos ni estructura, y **guarde la respuesta tal como salió**.
- Vos hacelo con el texto 1 en pantalla.

**Filmina 28 · Paso 2: la estructura** (12 min)
- **Objetivo:** pasar de la instrucción suelta a un prompt profesional.
- Persona y contexto, la tarea explícita (**qué campos extraer**), el formato, y el texto **entre `###`**.
- Mostrá el **v2** en pantalla. Que cada uno arme el suyo.
- Recorré el chat: el error más común es no decir qué campos se quieren.

---

## 45–60 · Paso 3

**Filmina 29 · Paso 3: los ejemplos** (15 min)
- **Objetivo:** que el modelo copie tu forma de trabajar sin explicársela.
- Dos o tres ejemplos de entrada y salida dentro del prompt (few-shot). Que muestren **el tono y la estructura exacta** que se quiere.
- Mostrá el **v3**. Que comparen contra la línea base del paso 1.
- *Tip:* los ejemplos tienen que ser parecidos al caso real, pero no iguales.

---

## 60–70 · Break

**Filmina 24 · Break** — volvé a la 24 y después seguí con la 30.

---

## 70–85 · Paso 4

**Filmina 30 · Paso 4: anti-alucinación** (15 min)
- **Objetivo:** que el modelo admita lo que no sabe en vez de inventarlo.
- Tres agregados: **razonar paso a paso** (Chain of Thought), **prohibir información que no esté en el texto** y **un valor fijo para lo ausente**, por ejemplo `"no_disponible"`.
- **La demo que importa:** el mail de Martín no tiene email ni año en las fechas. Mostrá qué hacía el v3 con eso y qué hace el **v4**.
- Conectá con el Ejercicio 4 de la Clase 1 (la caza de alucinaciones).

---

## 85–100 · Paso 5

**Filmina 31 · Paso 5: salida JSON** (8 min)
- **Objetivo:** dejar el prompt listo para enchufarlo a una automatización.
- Declarar **las llaves exactas** del JSON, prohibir texto antes o después, y **validar** en el JSON Formatter hasta que dé válido.
- Mostrá el prompt final y validá la salida en vivo.
- **Punto fino:** "pensá paso a paso" puede chocar con "solo JSON". Si el modelo escribe el razonamiento, pedile que razone sin mostrarlo o que lo ponga en una llave `"verificacion"`.
- *Resultado:* tu **plantilla maestra**. *"Eso mismo es el desafío del módulo."*

**Ejercicio 8 · ¿Este JSON entra a una automatización?** (4 min)
- Las cuatro respuestas A, B, C y D: solo la D sirve tal cual. Respuestas en `ejercicios-docente.md`.

**Ejercicio 9 · La prueba del segundo texto** (3 min)
- Que corran su prompt final con su **segundo texto, sin cambiar nada**. Vos hacelo con el texto 2 (Lucía, Cancún).
- Si algo se rompe, casi siempre se arregla con un ejemplo más o una regla explícita.

---

## 100–115 · Sección 05 · Tu desafío del módulo

**Filmina 32 · Separador "05"** (pasarla)

**Filmina 33 · ¿De qué se trata?** (2 min)
- Lo que construyeron: un prompt que toma un texto desordenado y devuelve datos estructurados.
- Pasos 1 a 3: estructura, formato y ejemplos. Paso 4: freno a las alucinaciones. Paso 5: JSON puro.
- **Para qué sirve:** es la pieza que van a pegar dentro de n8n en el Módulo 2.

**Filmina 34 · Tu misión** (2 min)
- Entre 45 y 60 minutos. Un documento con el prompt final, un texto de ejemplo y la salida JSON.
- **El caso tiene que ser propio** (no el de la clase) y el prompt tiene que **funcionar con dos textos distintos**.

**Filmina 35 · Los pasos** (2 min)
- Elegir el caso y dos textos → los cinco pasos sobre el primero → probar con el segundo sin cambios → validar los dos JSON → anotar en una línea qué cambió entre la v1 y la final.

**Filmina 36 · ¿Cómo se evalúa?** (3 min)
- Estructura · ejemplos (al menos dos) · control de alucinaciones · JSON válido y solo · reflexión sobre qué componente hizo la diferencia.
- Aclará que **la Pre-Entrega 1** (se presenta la Semana 2) parte de este prompt: le suma la justificación del ROI, el boceto del flujo en n8n y la reflexión sobre riesgos.

**Filmina 37 · ¿Cómo sigue?** (3 min)
- Hoy copiaron y pegaron el texto a mano. En n8n, el flujo lo va a traer solo y le va a pasar el JSON al paso siguiente.
- *El curso termina en un agente autónomo. Este prompt es su primera neurona.*

---

## 115–120 · Preguntas y cierre

**Filmina 38 · ¿Preguntas?** (4 min)
- Las tres preguntas de la filmina: qué concepto quedó nublado, con qué caso van a armar la plantilla, y si tienen un prompt que no les haya funcionado.

**Filmina 39 · ¡Gracias!** (1 min)
- **Para la Semana 2:** terminar el desafío y crear una cuenta de n8n (el Módulo 2 arranca con la herramienta).

---

## Checklist de salida

- [ ] Todos armaron las cinco versiones con su propio texto (o con el de respaldo).
- [ ] Todos validaron un JSON en el formatter.
- [ ] Todos probaron su prompt con un segundo texto.
- [ ] Quedó clara la consigna del desafío y que es la base de la Pre-Entrega 1.
