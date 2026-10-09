# Clase 16 — Proyecto Integrador: taller de calidad de arquitecto + revisión de avance

**Módulo 8 · Proyecto Integrador: tu ecosistema de IA autónomo** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, consigna de la Entrega Final  
**Presentación:** `Clase16.html` (14 filminas, en esta carpeta; se navega con ← → o los botones).

> Clase de taller. Se repasan los criterios que más se pierden (seguridad, costos, dashboard), se hace el
> test del camino infeliz y se revisa el avance de cada alumno.

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Pasar su sistema por el **check de seguridad** y el **test de estrés** (5+ ejecuciones con camino infeliz).
2. Armar su **matriz de costos** y su documento de **seguridad y resiliencia**.
3. Publicar su **dashboard** como Shared View y armar el **repo** con los 5 entregables.
4. Salir con **un plan concreto** para terminar la Entrega Final.

---

## Preparación previa (docente)

- [ ] El repo del proyecto ejemplo con los 5 entregables terminados, para mostrar como modelo.
- [ ] La matriz de costos del proyecto ejemplo.
- [ ] Una planilla para la revisión 1 a 1: caso de uso, qué tiene, qué falta, próximo paso.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Ronda rápida: en qué paso de la hoja de ruta está cada uno |
| 10–35 | **Bloque A — Check de seguridad y resiliencia** | Camino infeliz, filtros, error handlers, HITL |
| 35–55 | **Bloque B — Matriz de costos y dashboard** | Entregables 3 y 5 |
| 55–60 | Micro-pausa | |
| 60–95 | **Revisión de avance 1 a 1** | Mientras el resto construye |
| 95–105 | Cierre del curso | Entrega, video demo, despedida |

---

## 10–35 · Bloque A — Check de seguridad y resiliencia (entregable 4)

**El check de seguridad del PDF, en vivo con el proyecto ejemplo:**

1. **¿Hay un filtro contra bucles infinitos?** Ej.: el flujo ignora mails de `noreply` o respuestas automáticas; un flujo que escribe en la base no vuelve a disparar el mismo flujo.
2. **¿Los filtros comparan tipos correctos?** `presupuesto` como número, no como texto (`parseNumber`).
3. **¿El prompt es dinámico?** Usa variables del sistema, nada hardcodeado.

**El test del camino infeliz (mínimo 5 ejecuciones):** con el proyecto ejemplo, probar en vivo:

| # | Prueba | Qué tiene que pasar |
|---|---|---|
| 1 | Consulta completa y normal | Camino feliz de punta a punta |
| 2 | Consulta sin email o sin fechas | El filtro la frena o pide el dato; no se rompe |
| 3 | La API de IA falla (key desconectada) | Reintentos y luego registro del error + aviso |
| 4 | Un humano rechaza la respuesta | No sale nada al cliente; queda registrado |
| 5 | Mensaje raro (emoji, texto en otro idioma, queja) | La IA no inventa; va a revisión humana |

**El documento de seguridad y resiliencia** explica, para su sistema:
- **Minimización de datos:** qué datos se piden y por qué; cuáles no (lo visto en la clase 2).
- **Rutas de error:** qué Error Handler hay en cada punto frágil (Break, Resume) y adónde va el registro.
- **Puntos de HITL:** dónde está el semáforo humano y por qué ahí (riesgo legal o alucinaciones antes de hablar con el exterior).

## 35–55 · Bloque B — Matriz de costos (entregable 3) y dashboard (entregable 5)

**Matriz de costos:** un cuadro que justifique **qué modelo por tarea**:

| Tarea del sistema | Tipo de tarea | Modelo / API | Por qué | Costo estimado por mes |
|---|---|---|---|---|
| Clasificar la prioridad de una consulta | Mecánica, corta | Modelo económico | No requiere razonamiento profundo | volumen × tokens × precio |
| Redactar la respuesta con el catálogo | Lectura densa + redacción | Claude + caché del catálogo | Contexto largo repetido | con descuento de caché |
| Analizar las reseñas de la semana | Masiva, no urgente | Claude con **Batches** | Puede esperar hasta 24 h | **−50 %** |

> La rúbrica pide justificar el uso de modelos económicos para lo mecánico, Claude para lectura densa y
> Batches para lo masivo, "certificando el 50 % de ahorro". Que muestren la cuenta, como en la PE6. Los
> precios, siempre los vigentes del proveedor.

**Dashboard de control:**
- Fuente: la tabla de log, con **timestamp** en cada fila.
- **Máximo 4 KPIs:** tasa de aprobación, volumen de salida, **tasa de error** (obligatoria según la rúbrica) y uno propio del negocio.
- Publicarlo como **Shared View pública** (Airtable) o página pública (Notion) y **probar el link en incógnito**.
- *No alcanza con el link a la base: tiene que ser un panel que el dueño del negocio entienda en 5 segundos.*

## 60–95 · Revisión de avance 1 a 1

Mientras el resto avanza (construir, documentar, armar el repo), recorré a cada alumno con estas preguntas:

1. ¿Están las **4 categorías** (orquestador, base, IA, canal)?
2. ¿El flujo corre **sin intervención manual** salvo el HITL?
3. ¿Hay **ruta de error** y registro del error?
4. ¿Los **nodos tienen nombres claros**?
5. ¿Qué entregable le falta y cuál es el próximo paso concreto?

Anotalo en la planilla. Prioridad: quienes todavía no tienen el Corazón conectado.

## 95–105 · Cierre del curso

**Recordatorio de la entrega (según el PDF):**
- **Formato:** link a un **repositorio de GitHub** con:
  - el **diagrama de arquitectura** en PDF;
  - el **flujo** (.json de n8n o .blueprint de Make);
  - el **link a la base en modo lectura**;
  - **capturas** de evidencia;
  - los **5 entregables** (los 5 se corrigen, 20 % cada uno; se aprueba con 70).
- **Video demo de 3 minutos** sin API keys a la vista.
- **Fecha:** al cierre de la comisión (confirmala con la coordinación).

**Rúbrica de la Entrega Final (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Mapa de arquitectura | Modelado visual completo: triggers, routers, APIs, nodos de IA y destino de los datos | **20 %** |
| Manual operativo de estructuras de datos | Cerebro relacional (esquema generado con Omni AI) + esquemas JSON de las integraciones | **20 %** |
| Estrategia de optimización de costos | Cuadro comparativo y matriz de decisión por modelo y tarea, con el 50 % de ahorro de Batches | **20 %** |
| Malla de seguridad, privacidad y resiliencia | Minimización de datos, rutas de contingencia y puntos de HITL justificados | **20 %** |
| Dashboard de control ejecutivo | Link público y operativo con KPIs y tasa de errores en tiempo real | **20 %** |

**Total: 100 pts · Aprobación: 70 pts**

**Despedida:** el recorrido de los 8 módulos, del diagrama en papel al ecosistema autónomo. Ronda final de preguntas.

---

## Checklist de salida

- [ ] Todos pasaron el check de seguridad y saben qué probar en el camino infeliz.
- [ ] Todos tienen un borrador de la matriz de costos y del documento de seguridad.
- [ ] Todos saben cómo publicar el dashboard y armar el repo.
- [ ] Revisaste el avance de cada alumno y anotaste su próximo paso.
