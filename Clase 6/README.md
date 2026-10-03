# Clase 6 — JSON y variables + Flujos profesionales: OpenAI y Error Handling + Pre-Entrega 3

**Módulo 3 · Orquestación No-Code con Make** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 3 y 4 del Módulo 3 y consigna de la Pre-Entrega 3

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Distinguir tipos de datos en JSON y usar variables dinámicas en Make (`{{1.Nombre}}`).
2. Configurar OpenAI en Make (API key, System / User, Max Tokens) con un prompt que devuelva una palabra exacta.
3. Elegir el Error Handler correcto (Rollback, Ignore, Break, Resume) y configurar reintentos con backoff.
4. Salir con **el escenario de la PE3 casi terminado** y la consigna clara.

---

## Preparación previa (docente)

- [ ] **API key de OpenAI** conectada en Make, con saldo cargado y **límite de gasto** definido.
- [ ] El escenario del proyecto ejemplo listo: consulta → OpenAI califica → Router Alta/Baja → acciones → Error Handler Break.
- [ ] El blueprint exportado del proyecto ejemplo, pegado en un Google Doc público con la captura del Run once (como modelo de entrega).
- [ ] Avisar en la clase anterior que **la API de OpenAI se paga aparte** de ChatGPT Plus.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión del caso guiado de la clase 5 |
| 10–35 | **Bloque A — JSON y variables** | Unidad 3 del PDF |
| 35–45 | Práctica 3 | Mapear variables en sus acciones |
| 45–50 | Micro-pausa | |
| 50–80 | **Bloque B — OpenAI y Error Handling** | Unidad 4 del PDF + demo |
| 80–100 | **Brief PE3** + Práctica 4 | OpenAI + Error Handler en su escenario |
| 100–105 | Cierre | Qué viene en el Módulo 4 |

---

## 10–35 · Bloque A — JSON y variables: el idioma de los datos

**Disparador de la charla:** mandás una carta a Japón con la dirección en el formato equivocado y nunca llega. Las apps (Gmail, Airtable, WhatsApp, OpenAI) hablan idiomas distintos y se entienden con **JSON**.

**Contenido (según el PDF):**

- **El problema que resuelve:** una app manda `Juan Pérez, 30 años, Madrid` y otra espera `Nombre: Juan | Ciudad: Madrid | Edad: 30`. JSON pone orden, como una receta estructurada:
  ```json
  { "plato": "Bizcocho", "ingredientes": ["harina", "huevos", "sal"], "temperatura": 180, "tiempo_minutos": 45 }
  ```
- **Pares clave-valor:** la clave (etiqueta) siempre entre comillas dobles; `:` entre clave y valor; `,` entre pares.
- **Tipos de valores:**

| Tipo | Ejemplo | Nota |
|---|---|---|
| Texto (string) | `"Asistente Virtual"` | Con comillas |
| Número | `1500` | Sin comillas |
| Booleano | `true` / `false` | Interruptores (¿está pagada?) |
| Lista (array) | `["Marketing", "Ventas"]` | Entre corchetes |

- **Variables, las "cajas etiquetadas":** hoy la caja "Nombre del cliente" dice "Ana"; mañana, "Carlos". En Make son las burbujas de colores. Un solo flujo sirve para miles de casos: en vez de "Hola Juan", `{{1.Nombre}}`.
  > **Importante:** no escribas datos fijos si cambian en cada ejecución. Siempre variables mapeadas.
- **Mapeo, de formulario a CRM:** llega `{"email": "cliente@ventas.com"}` → en el campo Email de Airtable elegís la burbuja `email` → Make escribe el valor.
- **Guía de supervivencia:**
  1. Comillas perdidas: ❌ `{nombre: "Luis"}` ✅ `{"nombre": "Luis"}`. El módulo "JSON → Create JSON" lo hace por vos.
  2. Coma final: ❌ `{"id": 1, "tipo": "base",}`.
  3. Texto vs número: `"10"` + `"10"` puede dar `1010`. Usá `parseNumber()`.
- **Aplicaciones:** un marketer filtra leads de Facebook por un booleano "Servicio Premium"; un asistente virtual reparte en Notion un array de tareas; un administrativo cambia el formato de fecha para Sheets.

## 35–45 · Práctica 3 — Mapear variables

En su escenario de la clase 5: revisar que **todas** las acciones usen variables mapeadas (nada escrito a mano) y que los nombres sean descriptivos (`nombre`, `email`, `presupuesto`, no "Value 1").

## 50–80 · Bloque B — Flujos profesionales: OpenAI y Error Handling

**Disparador de la charla:** ese nudo en el estómago después de activar un flujo: *"¿y si falla mientras no miro?"*. El servidor de correos tiene una micro-caída de 2 segundos y el cliente nunca recibe su confirmación.

**Contenido (según el PDF):**

### 1. La inteligencia en el flujo: OpenAI en Make

- **Procesamiento de texto dinámico:** la IA genera contenido distinto según las variables que recibe.
- **API key (paso a paso):**
  1. platform.openai.com (no es la web de ChatGPT) → perfil → **API keys** → **Create new secret key** (nombre: `Make - curso`).
  2. La clave (`sk-...`) **se muestra una sola vez**: copiarla y guardarla.
  3. **Billing:** cargar saldo mínimo y definir un **usage limit**. La API se paga aparte de ChatGPT Plus.
  4. En Make: módulo **Create a Chat Completion** → Connection → **Add** → pegar la key → Save.
  5. Si el desplegable Model muestra modelos, funciona. **Error 401** = clave mal copiada o cuenta sin saldo.
  > Tratá la API key como una contraseña. Si se filtra, revocala y generá otra.
- **Campos clave:** Connection · Model · Messages: **System** (la personalidad) y **User** (texto fijo + variables).
- **El prompt de la PE3 tiene que devolver una sola palabra exacta**, porque después el filtro compara contra ese texto:
  - **System:** *"Eres un clasificador de leads. Analizas el mensaje del cliente y respondes ÚNICAMENTE con una de estas dos palabras, sin explicaciones ni puntuación: Alta o Baja."*
  - **User:** *"Clasifica la prioridad de este lead según su intención de compra: "* + la variable del mensaje.
  - Filtros: `[Respuesta de OpenAI] [Es igual a] Alta` y `[...] [Es igual a] Baja`.
- **Tokens, el presupuesto de escritura:** si la IA se pone "habladora", gastás de más. Para clasificar, **Max Tokens 100–200**.

### 2. Gestión de errores: la red de seguridad

Los errores no son una posibilidad, son una certeza. Clic derecho sobre un módulo → **Add error handler** → rama gris que solo se activa si ese módulo falla:

| Handler | Qué hace | Cuándo |
|---|---|---|
| **Rollback** | Frena y deshace todo (por defecto) | La opción conservadora |
| **Ignore** | Ignora el error y sigue | Solo si el paso no es crítico |
| **Break** | Reintenta después de un tiempo | **La joya de la corona.** La PE3 lo exige |
| **Resume** | Sigue con un valor sustituto | Para que los módulos siguientes no fallen |

- **Reintentos:** *Number of attempts* (3 es el número mágico) + *Interval*.
- **Analogía del repartidor de pizzas:** sin manejo de errores, nadie abre y tira la pizza. Con Break, espera y vuelve a tocar 3 veces. Con plan B (Resume / Ignore), la deja en recepción y te avisa.
- **Casos del PDF:**
  - *Clasificación de leads:* 200 mensajes por día; si OpenAI está lenta, espera 30 s y reintenta; tras 3 fallos, el contacto va a "Revisión manual".
  - *Respuestas de soporte:* si hay "tokens excedidos", ruta Resume con respuesta estándar ("un humano te atenderá pronto").
- **Errores y mejores prácticas:**
  - **"Más reintentos es mejor":** 20 reintentos por segundo solo gastan operaciones. Usá **backoff exponencial**: 1 minuto, 5, 15.
  - **No distinguir errores:** un **401** (API key mal) no se arregla reintentando → alerta inmediata. Un **500** (error del servidor) sí → reintentos.
  - **Olvidar el plan B:** toda rama de error termina con una notificación para vos.

**Demo con el proyecto ejemplo:** el escenario de la inmobiliaria completo:

```
[Nueva consulta] → [OpenAI: califica Alta/Baja] → [Router] ┬─ Alta → [Aviso a Slack: "Consulta prioritaria"]
                        │                                   └─ Baja → [Registrar en Airtable]
                        └── ⚠ Error Handler Break (3 reintentos)
```

Hacé **Run once** con una consulta urgente (fechas próximas, presupuesto alto) y otra exploratoria, y mostrá qué rama se enciende en cada caso. Después forzá un error (desconectá la key) y mostrá los reintentos en History.

## 80–100 · Brief de la Pre-Entrega 3: Primer Flujo Operativo en Make para Leads

**Misión:** construir y activar un escenario que capture un lead, use OpenAI para calificarlo y bifurque el camino de forma automática y a prueba de fallos.

**Antes de construir, el diagrama (del PDF):**
```
(Óvalo) Llega un lead (Google Sheets) → (Rectángulo) La IA califica el lead (OpenAI) → (Rombo) ¿Prioridad?
  ├─ Alta → (Rectángulo) Avisar a ventas
  └─ Baja → (Rectángulo) Registrar en la base
  ⚠ Si la IA falla → reintentar (Error Handler, modo Break x3)
```

**Pasos:**

1. Escenario nuevo con un **Trigger real** (Google Sheets, Forms o Gmail).
2. **OpenAI (Create a Chat Completion)** con prompt **mapeado a variables** del paso anterior.
3. **Router** con dos rutas: *Prioridad Alta* y *Prioridad Baja*.
4. **Filtro** en cada rama que valide la palabra exacta que devuelve la IA.
5. **Obligatorio:** clic derecho sobre OpenAI → **Add error handler** → **Break con 3 reintentos**.

> Si hicieron el caso guiado de la clase 5, solo le suman OpenAI y el Error Handler.

**Formato de entrega:** **un solo link público** (Google Doc o Notion) con el **JSON del blueprint pegado como texto** + la **captura del Run once** mostrando las dos rutas.
- Permisos: "Cualquiera con el enlace puede ver". Probar el link en una ventana de incógnito.
- Evitar: subir el .json suelto sin permisos, o pegar el JSON directo en la plataforma.
- El blueprint de muestra del PDF es una **referencia de estructura; no se importa tal cual**.

**Checklist de entrega:**
- [ ] Trigger conectado (Sheets / Forms / Gmail).
- [ ] OpenAI con prompt mapeado a variables (no texto fijo).
- [ ] Router con 2 rutas: Prioridad Alta y Prioridad Baja.
- [ ] Filtros que no se solapan (cada lead cae en una sola ruta).
- [ ] Error Handler Break con 3 reintentos sobre OpenAI.
- [ ] Link público + captura del Run once con ambas rutas.

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Orquestación y filtros | Trigger externo, Router obligatorio y 2+ caminos condicionados por filtros (Alta vs Baja) | **40 %** |
| Resiliencia y manejo de errores | Error Handler visible, en modo Break con reintentos automáticos | **40 %** |
| Procesamiento dinámico de IA | OpenAI con variables dinámicas para calificar al prospecto | **20 %** |

**Total: 100 pts · Aprobación: 70 pts**

> Los objetivos de la PE3 también mencionan estimar el costo operativo en operaciones, aunque no figura en
> la rúbrica. Vale pedirles que anoten cuántas operaciones consume cada ejecución.

**Práctica 4 (en clase):** sumar OpenAI y el Error Handler a su escenario y hacer el primer Run once.

## 100–105 · Cierre

- **Entrega de la PE3:** se recomienda cerrarla antes de la **clase 9**.
- **Adelanto del Módulo 4 (n8n):** el paso de No-Code a Low-Code, con agentes de IA.
- Para la clase 7: decidir si van a usar **n8n Cloud** (prueba gratuita) o **self-hosted**.

**Material para profundizar (del PDF):**
- Make, mapping: https://www.make.com/en/help/mapping
- MDN, JSON: https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
- OpenAI, documentación de la API: https://platform.openai.com/docs/

---

## Checklist de salida

- [ ] Todos tienen su API key de OpenAI con límite de gasto.
- [ ] Todos tienen el escenario con OpenAI + Router + Error Handler (o lo terminan de tarea).
- [ ] Todos saben cómo armar el link público de la entrega.
