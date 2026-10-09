# Clase 11 — Ventajas de Claude + Message Batches API

**Módulo 6 · Inteligencia de negocio con Anthropic Claude API** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 6  
**Presentación:** `Clase11.html` (20 filminas, en esta carpeta; se navega con ← → o los botones).

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 6 (Diseño de Eficiencia e
> Ingeniería de Prompts Recurrentes)**, que se presenta en la clase 12.
>
> **Ojo con los datos que cambian rápido.** El PDF nombra modelos (Claude 3.5 Sonnet, GPT-4o) y precios que
> pueden estar desactualizados. Antes de la clase, verificá en [anthropic.com/pricing](https://www.anthropic.com/pricing)
> y en la documentación de Anthropic los modelos vigentes, el tamaño de la ventana de contexto y los
> descuentos. Los conceptos (lote asíncrono, 50 % de descuento, hasta 24 h) son los que importan.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar las fortalezas de Claude: ventana de contexto amplia, razonamiento paso a paso y visión de documentos.
2. Escribir un prompt con **rol + objetivo + "pensá paso a paso"**.
3. Decidir cuándo una tarea va por **Message Batches** (asíncrono, hasta 24 h, 50 % más barato) y cuándo no.
4. Salir con **la plantilla de prompt** y **el flujo de lote modelado** de su proceso (pasos 1 y 2 de la PE6).

---

## Preparación previa (docente)

- [ ] Cuenta en la consola de Anthropic con saldo mínimo y **límite de gasto**.
- [ ] Un PDF con tablas o gráficos (ej. un reporte con un gráfico de torta) para la demo de visión.
- [ ] Del proyecto ejemplo: las **500 reseñas de huéspedes** (CSV en `Proyecto ejemplo/datos/`) y un lote de prueba ya enviado, con su ID, para mostrar el estado y los resultados.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso del Módulo 5 · dudas de la PE5 |
| 10–45 | **Bloque A — Ventajas de Claude** | Unidad 1 del PDF + demo |
| 45–58 | Práctica 1 | Plantilla de prompt (rol + paso a paso) |
| 58–63 | Micro-pausa | |
| 63–93 | **Bloque B — Message Batches API** | Unidad 2 del PDF + demo |
| 93–105 | Práctica 2 + cierre | Modelar su flujo por lotes con tiempos |

---

## 10–45 · Bloque A — Ventajas de Claude para razonamiento y visión de documentos

**Disparador de la charla:** un contrato de 60 páginas, tres informes de ventas y una propuesta de marketing, y 15 minutos antes de la reunión. Antes hojeabas y entrabas inseguro. Claude no es un chat para preguntas rápidas: es un **asistente ejecutivo** que lee, ve y razona sobre montañas de información.

**Contenido (según el PDF):**

- **Por qué Claude es diferente:** se especializó en **razonamiento** y **visión profunda de documentos**. Si Google es un buscador y otros modelos son calculadoras de palabras, Claude es un asistente graduado con honores: entiende tono e intención y no se cansa (lee un libro y recuerda el capítulo 1 mientras analiza el 20).
- **La ventana de contexto, la mesa de trabajo:** muchos modelos tienen una mesa chica y los primeros papeles se caen. Claude tiene una **mesa gigante** (el PDF dice 200.000 tokens): tres PDFs, la transcripción de una reunión de 2 horas y un manual, todo a la vez.
- **Razonamiento paso a paso:** ante *"analizá mis gastos del mes y decime cómo ahorrar un 15 % sin tocar publicidad"*:
  1. **Descompone** el problema (gasto fijo vs variable).
  2. **Busca pruebas** en el documento.
  3. **Pensamiento extendido:** antes de responder, verifica su propia lógica, "como si se tomara un café y revisara sus notas".
  - *Ejemplo:* *"¿Hay alguna contradicción entre lo que pidió el cliente en la reunión y lo que escribí en la propuesta?"* → detecta la diferencia de presupuesto.
- **Visión de documentos (multimodal):** muchos PDFs tienen tablas pegadas como imagen, gráficos y diagramas. Claude los **ve**: *"Según el gráfico de la página 4, ¿qué región creció menos y qué razones encontrás en el texto?"*.
- **Claude vs modelos generalistas (para un perfil no técnico):**

| | Claude | Otros modelos generalistas |
|---|---|---|
| Documentos largos | Procesa varios PDFs sin "olvidar" el inicio | Suelen recortar o perder contexto |
| Visión de documentos | Lee tablas, gráficos e imágenes del PDF | Muchas veces hay que transcribir a mano |
| Razonamiento | Paso a paso antes de responder: menos alucinaciones | Responden rápido y pueden inventar |
| Ideal para | Contratos, reportes, lógica de negocio | Respuestas cortas, tareas creativas o de alta velocidad |

- **Errores y mejores prácticas:**
  1. **Copiar y pegar fragmentos:** se pierden formato, tablas e imágenes. **Subí el archivo original.**
  2. **Pedir resúmenes genéricos:** "Resumí este PDF" da algo vago. **Rol + objetivo:** *"Actuá como mi asesor financiero. Revisá este informe trimestral y extraé las 3 alertas rojas que un emprendedor sin conocimientos contables debería entender hoy."*
  3. **No pedirle que razone:** la frase mágica *"Pensá paso a paso antes de darme la conclusión"*.

**Demo:** subí a Claude el PDF con un gráfico y preguntá algo que obligue a cruzar el gráfico con el texto. Después mostrá la misma pregunta sin y con "pensá paso a paso".

## 45–58 · Práctica 1 — Plantilla de prompt (paso 1 de la PE6)

Cada uno escribe una plantilla para una tarea de su proceso con:
1. **Rol** específico ("Actuá como…").
2. **Objetivo** detallado.
3. **"Pensá paso a paso antes de darme la conclusión."**
4. **Variables dinámicas delimitadas** (ej. `{{texto_reseña}}`, `{{nombre_cliente}}`).

**Ejemplo con el proyecto ejemplo:**
> "Actuá como analista de experiencia de huéspedes de [Nombre del negocio]. Tu objetivo es clasificar la
> reseña según su sentimiento (positivo, neutro, negativo) y su tema principal (limpieza, ubicación,
> atención, equipamiento, precio), y detectar si menciona un problema que haya que resolver en la
> propiedad. Pensá paso a paso antes de dar tu conclusión. Respondé solo con un JSON con los campos
> sentimiento, tema, requiere_accion (true/false) y resumen.
> Reseña: {{texto_reseña}} · Propiedad: {{propiedad}}"

## 63–93 · Bloque B — Message Batches API: grandes volúmenes, mitad de precio

**Disparador de la charla:** 1.000 camisas sucias. La lavandería rápida las hace una por una mientras esperás: caro y perdés el día. La lavandería industrial te dice: *"dejámelas todas, las lavo de noche cuando la luz es más barata, y mañana las tenés listas a mitad de precio"*.

**Contenido (según el PDF):**

- **Qué es:** procesar muchas peticiones de forma **asíncrona**. En vez de una pregunta y esperar, mandás un **paquete** con cientos o miles; Claude lo procesa cuando tiene menos carga y entrega todo junto en **hasta 24 horas**.
- **La regla de oro del ahorro: 50 % de descuento.**

| | Llamada normal (tiempo real) | Message Batches |
|---|---|---|
| Velocidad | Segundos | Hasta 24 horas |
| Costo | 100 % (precio de lista) | **50 %** |
| Uso ideal | Chatbots, atención en vivo | Análisis de datos, reportes, contenido masivo |
| Límites | Por minuto | Independientes y mucho más altos |

- **Cuándo tiene sentido:** 2.000 reseñas en Airtable para clasificar el sentimiento con la API normal cuestan el doble y pueden chocar con los límites de velocidad.
  - Análisis de 500 anuncios para el reporte del lunes.
  - Scoring de 1.000 leads antes de que entre el equipo de ventas.
  - Descripciones para 300 productos nuevos.
  - Auditoría de 100 contratos para extraer vencimientos y cláusulas.
  - **Regla:** *"si la tarea puede esperar a que te tomes un café o a que pase la noche, es un Batch"*.
- **Cómo funciona, sin tecnicismos:**
  1. **El sobre:** juntás todas las peticiones en un formato específico.
  2. **La oficina postal:** lo enviás por la API y recibís un **ID de seguimiento**. El flujo puede terminar acá.
  3. **La recogida:** más tarde (máximo 24 h) el sistema pregunta *"¿está listo el sobre #12345?"* y descarga todas las respuestas.
  - En n8n se resuelve con nodos de espera o un flujo programado que consulta el estado.
- **Combo ganador:** Batches (50 % menos en la generación) + Prompt Caching (lectura barata de la instrucción repetida), que vemos en la clase 12.
- **Errores y trampas:**
  - **"La calidad es menor":** falso. Es el mismo modelo; cambia el horario en que se procesa.
  - **Usarlo para interacciones humanas:** nunca en un chatbot de WhatsApp. Nadie espera 24 horas un precio.
  - **No manejar la espera:** el paso siguiente no puede ir pegado al envío del lote si depende de la respuesta.

**Demo con el proyecto ejemplo:** el lote de las **500 reseñas** de huéspedes:
```
[Programado: domingo 22:00] → [Airtable: reseñas de la semana sin analizar] → [Arma el lote: una petición por reseña]
   → [POST a Message Batches → guarda el batch_id en Airtable]

[Programado: lunes 7:00] → [Consulta el estado del batch_id] → ¿terminó?
   ├─ Sí → [Descarga resultados] → [Actualiza cada reseña: sentimiento, tema, requiere_accion] → [Resumen a Slack]
   └─ No → [Reintenta en 1 hora]
```
Mostrá el **hueco de tiempo** entre el envío y la recogida: esas son las "marcas de tiempo" que pide la PE6.

## 93–105 · Práctica 2 + cierre — Modelá tu flujo por lotes (paso 2 de la PE6)

Para una tarea masiva de su proceso:
1. **¿Qué volumen?** (ej. 500 reseñas, 300 descripciones, 100 contratos).
2. **¿Puede esperar?** Si no, no es un batch.
3. **Las marcas de tiempo:** cuándo se arma y envía el lote, cuándo se consulta, qué pasa si no terminó.

**Tarea para la clase 12:** traer la plantilla de prompt y el flujo de lote. En la clase 12 se agregan el prefix cacheable y la matriz de ahorro.

**Material para profundizar (del PDF):**
- Anthropic, documentación: https://docs.anthropic.com/
- Anthropic, PDFs y visión: https://docs.anthropic.com/en/docs/build-with-claude/pdf-support
- Anthropic, extended thinking: https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking
- Anthropic, Message Batches: https://docs.anthropic.com/en/docs/build-with-claude/batch-processing
- Anthropic, precios: https://www.anthropic.com/pricing

---

## Checklist de salida

- [ ] Todos tienen una plantilla con rol + objetivo + "pensá paso a paso" + variables delimitadas.
- [ ] Todos saben cuándo una tarea es batch y cuándo no.
- [ ] Todos modelaron su flujo por lotes con marcas de tiempo.
