# Semana 2 · Ejercicios

**Módulo 2: Introducción a las automatizaciones y n8n**

---

## En clase

### Ejercicio 1 · ¿Lineal o cognitiva? (2 min)

Para cada automatización, decí si es **lineal** (reglas fijas, sin interpretar) o **cognitiva** (en
algún paso decide o genera una IA). Respondé en el chat.

1. Cada lunes a las 9, mandar por mail el reporte de ventas que sale de una planilla.
2. Leer las reseñas que llegan y decidir cuáles son quejas urgentes.
3. Copiar cada compra nueva de la tienda online a una planilla de stock.
4. Responder consultas de WhatsApp con información del catálogo.
5. Cuando entra un pago, marcar el pedido como pagado y avisarle a depósito.
6. Resumir las notas de una reunión y mandarlas por Slack al equipo.

### Ejercicio 2 · Calculá el ROI (3 min)

Una agencia de viajes carga a mano en una planilla las consultas que llegan por mail.

- Llegan **40 consultas por semana** y cada una lleva **5 minutos**: unas **13 horas por mes**.
- La hora de trabajo vale **$10.000**: el ahorro sería de **$130.000 por mes**.
- Armar la automatización lleva **15 horas** de trabajo: **$150.000** de inversión.
- Mantenerla (créditos de IA y ajustes) cuesta **$10.000 por mes**.

**Fórmula:** ROI = (Beneficio neto / Costo de la inversión) × 100, donde el beneficio neto es el
ahorro acumulado menos lo que costó.

1. ¿Cuánto da el ROI al primer mes? ¿Y al tercero?
2. ¿En qué momento se llega al break-even?
3. ¿Qué podría hacer esa persona con las 13 horas por mes? (costo de oportunidad)

### Ejercicio 3 · Desafío de priorización (3 min)

Tenés **solo dos horas** para automatizar uno de estos procesos. ¿Cuál elegís y por qué? Votá en el chat.

- **A.** Responder las consultas que llegan por mail: unas 40 por semana, 5 minutos cada una, y hay que leer y entender qué pide cada cliente.
- **B.** Armar el balance anual para el contador: una vez por año, 8 horas.
- **C.** Copiar los pedidos de un formulario a la planilla de stock: 30 por día, 1 minuto cada uno, siempre igual.

### Ejercicio 4 · Tu primer flujo en n8n (8 min)

En tu instancia de n8n, armá el flujo que mostró el profe:

1. Creá un workflow nuevo y agregá un **Manual Trigger**.
2. Agregá un nodo **Edit Fields (Set)** con dos campos: `nombre` = `Martín Gómez` y `destino` = `Bariloche`. Ejecutalo y mirá la salida en las vistas **Table** y **JSON**.
3. Agregá otro **Edit Fields** con un campo `saludo`: escribí `Hola ` y **arrastrá** el campo `nombre` desde la entrada del nodo. Ejecutalo: tiene que salir `Hola Martín Gómez`.
4. **Rompelo:** cambiá el valor de `saludo` por `{{ $json.email.toUpperCase() }}`. Ejecutalo, leé el error y buscá la corrida fallida en **Executions**.

Si no tenés instancia todavía, mirá la demo y hacelo en casa (Ejercicio 8).

---

## Para casa (antes de la Semana 3)

### Ejercicio 5 · ¿Trigger o acción? (5 min)

Decí si cada nodo **arranca** un flujo (trigger) o **hace** algo dentro del flujo (acción).

1. Schedule Trigger (cada lunes a las 9)
2. Enviar un mail con Gmail
3. Webhook
4. Agregar una fila en Google Sheets
5. Manual Trigger
6. Llega un mail nuevo a Gmail
7. Pedirle una respuesta a un modelo de IA
8. Mandar un mensaje a Slack

### Ejercicio 6 · Explorá un template (15 min)

1. Entrá a **n8n.io/workflows** y buscá un template que use IA y se parezca a tu proceso.
2. Importalo en tu instancia.
3. Identificá: ¿cuál es el trigger? ¿dónde está el nodo de IA? ¿cuál es el output?
4. Anotá qué tendrías que cambiar para usarlo: **credenciales** propias y **lógica** (campos, condiciones).

### Ejercicio 7 · Tu proceso en JSON (10 min)

Escribí **un registro** de tu proceso como JSON (una consulta, un pedido, una reseña). Tiene que tener al
menos un texto, un número y un valor verdadero/falso. Validalo en un JSON Formatter (jsonformatter.org
o jsonlint.com).

Ejemplo:
```json
{
  "nombre": "Martín Gómez",
  "destino": "Bariloche",
  "pasajeros": 4,
  "respondida": false
}
```

### Ejercicio 8 · Si no llegaste en clase: tu instancia y tu primer flujo (20 min)

1. Creá tu instancia: **n8n Cloud** (tiene prueba gratuita) o **local** (por ejemplo con `npx n8n`, si tenés Node instalado; se abre en `http://localhost:5678`).
2. Hacé el **Ejercicio 4** completo y sacá una captura del flujo funcionando.

**Además:** leé `Semana 2.docx` y hacé el cuestionario del módulo en la plataforma.

---

## Pre-entrega · De la idea al prompt

> Las filminas la llaman "Pre-entrega 2"; el programa del curso, "Preentrega 1". Es la misma entrega.

**Qué es:** diseñar (sin construirla todavía) una automatización simple que use un paso de IA,
justificando por qué vale la pena y cómo sería el prompt que la hace funcionar.

**Duración estimada:** entre 60 y 90 minutos.

### Consigna

1. **Elegí un proceso manual y repetitivo** de tu trabajo, estudio o vida diaria. Ejemplos: clasificar mails que llegan a una casilla, resumir noticias de una industria, responder preguntas frecuentes, armar un reporte semanal con datos sueltos.
2. **Justificá el ROI** (2–3 líneas): cuánto tiempo lleva hoy a mano, con qué frecuencia se repite y si escala si el volumen crece. No hace falta un cálculo financiero exacto: sí una justificación razonada de por qué automatizarlo, y de por qué no.
3. **Bocetá el flujo:** con texto o un diagrama simple, cómo se vería en n8n: qué lo dispara, qué pasos intermedios hay, dónde entra la IA y cuál es el output final.
4. **Escribí el prompt del nodo de IA:** con contexto claro, instrucción específica y formato de salida. "Resumime esto" no alcanza. Podés partir de la plantilla del desafío del Módulo 1.
5. **Reflexión corta** (3–4 líneas): qué podría salir mal. Al menos un riesgo de cómo procesa texto un LLM (alucinaciones, límite de contexto, ambigüedad) y cómo lo mitigarías en el prompt o en el flujo.

### Formato de entrega

**Un único archivo PDF** (o MD) con las cinco partes y títulos claros, sin comprimir. No se evalúa el
diseño del documento: se evalúa la coherencia entre el proceso, el ROI y el prompt. No hace falta que
el flujo esté construido en n8n.

### Criterios de aceptación

- El ROI incluye una estimación de tiempo ahorrado y la frecuencia del proceso.
- El flujo especifica un disparador, el procesamiento de datos y la salida.
- El prompt incluye explícitamente rol, tarea y formato de salida.
- Hay al menos un riesgo de los modelos de lenguaje con una mitigación coherente.

### Rúbrica (según el programa)

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Proceso y justificación del ROI | Un proceso realmente repetitivo y por qué conviene automatizarlo, con una estimación razonable del tiempo ahorrado | **15 %** |
| Diseño lógico del workflow en n8n | Secuencia ordenada: disparador, datos de entrada, procesamiento y resultado, implementable después en n8n | **40 %** |
| Ingeniería del prompt para el nodo de IA | Contexto, instrucción precisa y formato de salida, claros como para obtener respuestas útiles y consistentes | **30 %** |
| Gestión de errores y riesgos | Un riesgo relevante del flujo de IA y una forma concreta de reducirlo | **10 %** |
| Estructura y formato de entrega | Un único PDF, con secciones tituladas y fácil de revisar | **5 %** |

**Total: 100 pts · Aprobación: 70 pts**
