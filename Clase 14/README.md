# Clase 14 — Human-in-the-Loop + Cuadros de mando + Pre-Entrega 7

**Módulo 7 · Diseño de agentes y automatización de la creatividad** (segunda mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 3 y 4 del Módulo 7 y consigna de la Pre-Entrega 7

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Diseñar un flujo HITL: trigger → IA → **pausa** → acción humana → ejecución final.
2. Elegir dónde poner la pausa (Slack con botones, estado en Airtable, Wait for Webhook) sin crear un cuello de botella.
3. Armar un dashboard con fuente de verdad, visualización y **máximo 4 KPIs**.
4. Salir con **la pausa HITL + filtro condicional** en su generador, el **dashboard** y la consigna de la **PE7** clara.

---

## Preparación previa (docente)

- [ ] El generador de contenido del proyecto ejemplo (clase 13) con:
  - escritura del borrador en Airtable con estado **"Para revisar"** y checkbox **Aprobado**;
  - un segundo flujo que se dispara cuando **Aprobado = true** y "publica" (manda a Slack `#publicaciones` o a una columna "Listo para publicar").
- [ ] Opcional: la versión con **botones en Slack** (Aprobar / Rechazar). El bot de películas tiene un ejemplo real con botones en Telegram.
- [ ] Una tabla **Log** en Airtable donde cada flujo deja una fila: fecha y hora, flujo, resultado (OK / error), estado.
- [ ] Un dashboard del proyecto ejemplo (Airtable Interface o Notion) con 3–4 KPIs.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Revisión de los generadores de la clase 13 |
| 10–40 | **Bloque A — Human-in-the-Loop** | Unidad 3 del PDF + demo |
| 40–52 | Práctica 3 | Pausa HITL + filtro condicional (paso 3) |
| 52–57 | Micro-pausa | |
| 57–80 | **Bloque B — Cuadros de mando** | Unidad 4 del PDF + demo |
| 80–100 | **Brief PE7** + Práctica 4 | Dashboard con 3 KPIs (paso 4) |
| 100–105 | Cierre | Qué viene en el Módulo 8 |

---

## 10–40 · Bloque A — Insertar aprobación humana en flujos de IA (HITL)

**Disparador de la charla:** un robot de cocina que hace 100 platos en minutos, pero no tiene sentido del gusto. Si lo dejás solo, podés servir una cena desastrosa a tus invitados más importantes. La solución: **el chef prueba una cucharada** antes de que el plato salga.

**Contenido (según el PDF):**

- **Qué es HITL:** un equipo híbrido. La IA hace el trabajo pesado (~**90 %**) y el humano interviene en **puntos críticos** para validar, corregir o refinar. La IA es el motor; el humano, el volante.
- **Por qué es vital:**
  1. **Alucinaciones:** la IA inventa con seguridad; la aprobación las frena antes de llegar al cliente.
  2. **Sensibilidad de marca:** técnicamente correcto, pero con un tono que no es el tuyo.
  3. **Alto riesgo:** mover dinero, publicar para miles de seguidores, mails a clientes VIP.
- **El flujo HITL:**
  1. **Trigger:** ocurre un evento (llega un lead).
  2. **IA:** analiza y redacta una propuesta.
  3. **Pausa:** en vez de enviar, notifica (Slack, WhatsApp, Gmail) con botones **Aprobar** / **Editar-Rechazar**.
  4. **Acción humana:** un clic.
  5. **Ejecución final:** solo si aprobaste.
- **Ejemplo:** una agencia genera hilos de X desde artículos. Sin HITL, un mal resumen daña la reputación. Con HITL, el hilo va a un Slack privado, el community manager revisa los hashtags y al apretar "Publicar" sale.
- **Dónde poner la pausa:**
  - **Slack / Teams con botones:** la forma más elegante; el botón manda una señal de vuelta al flujo.
  - **Airtable / Sheets por estado:** la IA escribe el borrador y el flujo se detiene; la segunda parte arranca cuando cambiás "Pendiente" a "Aprobado".
  - **Formularios de espera (Wait for Webhook):** te llega un link, editás el texto en un formulario y el flujo sigue con tus cambios.
- **Errores y mejores prácticas:**
  - **Cuello de botella:** aprobar cada una de 500 imágenes diarias destruye el beneficio. HITL en la **última milla** (antes de que sea público o vaya a un tercero) o cuando la IA tenga baja confianza.
  - **"Si tengo que hacer clic, ¿para qué automatizo?":** a mano son 30 minutos (leer, pensar, escribir, publicar); con HITL, 1 minuto de lectura y un clic. Se automatizó el 95 % del esfuerzo mental.
  - **Ignorar el feedback:** si rechazás, entendé por qué (¿prompt vago? ¿faltó contexto?) y ajustá el nodo de IA.

**Demo con el proyecto ejemplo:**
1. El post de la Cabaña Los Coihues (clase 13) está en Airtable con estado **"Para revisar"**.
2. Lo leés, corregís una frase y marcás **Aprobado**.
3. El segundo flujo, con un **filtro `Aprobado = true`**, lo manda a `#publicaciones` y cambia el estado a **"Publicado"**.
4. Mostrá que un post **sin aprobar no pasa el filtro**.
5. Opcional: mostrá los botones ✅/❌ del bot de películas como ejemplo de pausa con botones.

## 40–52 · Práctica 3 — Pausa HITL + filtro condicional (paso 3 de la PE7)

Sobre su generador de la clase 13:
1. Que el resultado se escriba en la base con un checkbox **Aprobado** (o que mande el borrador a Slack o Email con un link de revisión).
2. Un **filtro final** que impida avanzar hacia la distribución salvo que **Aprobado = true**.
3. Probar los dos caminos: aprobado y sin aprobar.

## 57–80 · Bloque B — Cuadros de mando automáticos para monitorear automatizaciones

**Disparador de la charla:** construiste la máquina: n8n capta leads, Claude escribe artículos, Make manda WhatsApps. Al final del día: *¿está todo funcionando? ¿cuántos posts salieron? ¿cuántos errores hubo mientras dormía?* Si para saberlo tenés que entrar a n8n, a Airtable y a WhatsApp, tenés un **agujero negro de información**.

**Contenido (según el PDF):**

- **Reporte vs dashboard:**
  - **Reporte:** una foto del pasado (el PDF del viernes). Llega tarde para decidir.
  - **Dashboard:** el tablero del auto mientras manejás: velocidad, nafta, luz roja de motor.
- **Por qué automatizar la reportabilidad:** visibilidad de la IA (trabaja detrás de escena) · detección de errores al instante · cálculo de ROI (horas ahorradas).
- **Los 3 componentes:**
  1. **Fuente de la verdad (Airtable / Sheets):** cada flujo deja una **huella**: una fila con fecha, estado, plataforma y error si lo hubo.
  2. **Visualización (Notion / Sheets):** no hace falta Power BI. Notion para dashboards ejecutivos con vistas de Airtable; Sheets para cálculos y gráficos simples.
  3. **KPIs:**
     - **Tasa de aprobación:** qué % de lo que genera la IA aprueba un humano (mide la calidad de los prompts).
     - **Volumen de salida:** cuántos activos se procesaron hoy.
     - **Tasa de error:** cuántas veces falló la API de OpenAI o Claude.
- **Ejemplo real, Elena:** gestiona redes de 5 clientes. Cada hilo que genera Claude deja una fila en "Log de producción"; en Notion ve un gráfico circular: 70 % publicado, 20 % pendiente de aprobación, 10 % error. Ve el 10 %, encuentra un token de Instagram vencido y lo arregla.
- **Errores comunes:**
  - **Cementerio de datos:** 50 gráficos que nadie mira. **Máximo 4 KPIs.**
  - **Datos desvinculados:** copiar y pegar a mano no es un dashboard. **El último nodo de todo flujo es "Create record" o "Update row".**
  - **Olvidar el timestamp:** sin fecha y hora no podés filtrar por "hoy" o "esta semana".
- **El toque maestro, la IA que analiza tu rendimiento:** cada domingo, Claude lee la tabla de la semana y manda a Slack: *"Esta semana se generaron 45 posts. La tasa de aprobación bajó 15 % los miércoles; sugiero revisar el prompt de tono de marca de ese día."*
- **Síntesis:** *el flujo termina cuando el dato llega al dashboard, no cuando se manda el mensaje.* Cualquiera tiene que entender la salud del sistema en 5 segundos.

**Demo con el proyecto ejemplo:** el dashboard de la inmobiliaria con 4 KPIs:
1. **Consultas por prioridad** (alta / baja) esta semana.
2. **Tasa de aprobación** de los posts generados.
3. **Volumen de salida:** consultas respondidas + posts publicados.
4. **Tasa de error** de los flujos (desde la tabla Log).

## 80–100 · Brief de la Pre-Entrega 7: Sistema de Contenido Autónomo con Supervisión HITL

**Antes de dar autonomía (consolidación del módulo, según el PDF):**
- **RAG:** base de conocimiento privada (Notion o Airtable) y búsqueda semántica, sin conocimiento externo.
- **Información atómica:** un tema por página o registro.
- **Principio HITL:** validación manual antes de que el entregable sea público o vaya a un tercero.
- **Automatización híbrida:** la IA hace el 95 % del esfuerzo mental; el humano, 1 minuto de auditoría y un clic.

**Misión:** construir un pipeline de contenido autónomo conectado a una base de conocimiento (RAG), con una **pausa obligatoria** para validación humana antes de la distribución.

**Pasos:**
1. Una **base de control** en Airtable o Notion (el centro de comando).
2. **Trigger** que reaccione solo cuando una fila pasa a **"Generando"** con una **idea semilla**.
3. **Nodo de IA** (Claude o GPT) con **contexto privado** que redacte una pieza de marketing (ej. post de LinkedIn).
4. **Pausa HITL:** escribir el resultado en Airtable con un checkbox **"Aprobado"**, o mandar el borrador a Slack o Email con un link de revisión.
5. **Filtro final:** no avanza a las plataformas externas salvo que el checkbox sea **true**.

**Formato:** PDF explicativo del pipeline que demuestre el nodo de interrupción humana, **o** link público al flujo activo.

**Rúbrica (según el PDF):**

| Criterio | Qué se evalúa | Peso |
|---|---|---|
| Mecanismo de pausa humana (HITL) | Punto de pausa obligatorio: checkbox "Aprobado" en Airtable o alerta restrictiva a Slack/Email | **40 %** |
| Lógica de distribución condicional | La distribución solo se ejecuta si el humano valida | **30 %** |
| Estructura RAG y base de conocimiento | Base en Notion/Airtable que alimenta al agente ante una idea semilla | **30 %** |

**Total: 100 pts · Aprobación: 70 pts**

> El dashboard figura en los objetivos de aprendizaje de la PE7 pero **no en la rúbrica**. Igual conviene
> armarlo: es uno de los 5 entregables de la Entrega Final.

**Práctica 4 (paso 4):** armar un dashboard con **3 KPIs** sobre su sistema (tasa de aprobación, volumen, tasa de error), alimentado por una tabla de log con timestamp.

## 100–105 · Cierre

- **Entrega de la PE7:** se recomienda cerrarla antes de la **clase 16**.
- **Recordatorio:** la PE6 se recomendaba cerrar antes de la clase 15.
- **Adelanto del Módulo 8:** el Proyecto Integrador. Que traigan a la clase 15 **todas sus pre-entregas**: son los ladrillos del proyecto final. Que creen una cuenta de **GitHub**.

---

## Checklist de salida

- [ ] Todos tienen la pausa HITL con filtro condicional funcionando (aprobado / sin aprobar).
- [ ] Todos tienen una tabla de log con timestamp y un dashboard con 3–4 KPIs.
- [ ] Todos tienen la consigna y la rúbrica de la PE7 (40/30/30).
- [ ] Quedó pedido traer todas las pre-entregas y la cuenta de GitHub para la clase 15.
