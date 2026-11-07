# Semana 7 · Ejercicios: IA local con Ollama

Esta semana bajamos el modelo de IA a nuestra propia computadora. Los ejercicios 1 a 3 son de la clase; del 4 al 7,
para casa. No hay pre-entrega, pero el Ejercicio 7 te deja listo el cerebro para la Pre-entrega 4.

**Antes de la clase** hacé los Pasos 1 y 2 del Ejercicio 3: instalar Ollama y descargar `llama3.2` (2 GB). En clase
no da el tiempo ni la conexión para que 30 personas bajen lo mismo a la vez.

---

## Ejercicio 1 · ¿Local o nube? (en clase, 5 min)

Para cada caso, decidí si el paso de IA conviene **local** (Ollama) o **en la nube** (Gemini, ChatGPT, Claude), y
escribí por qué en una línea. Pensá en las tres razones (costo, privacidad, independencia) y en la contrapartida
(los modelos locales son más chicos).

1. Un banco quiere resumir quejas de clientes que incluyen números de tarjeta.
2. Una clínica quiere resumir historias clínicas, y la ley le prohíbe subirlas a la nube.
3. Una agencia de viajes quiere un agente que responda consultas usando cinco herramientas.
4. Un estudio contable clasifica 3.000 facturas por día en "luz", "gas", "agua" u "otro".
5. Vas a probar un flujo nuevo 100 veces hasta que quede bien.
6. Un guía de turismo quiere un asistente en la notebook para usar en la montaña, sin señal.

---

## Ejercicio 2 · ¿Qué modelo te entra? (en clase, 2 min)

1. Fijate cuánta memoria RAM tiene tu computadora:
   - Windows: **Configuración** → **Sistema** → **Información** → *RAM instalada*;
   - Mac: menú  → **Acerca de esta Mac** → *Memoria*.
2. Buscá tu tramo en la tabla:

| Memoria de tu computadora | Tamaño de modelo | Para hoy |
|---|---|---|
| 4 GB | 1B, y cerrando todo lo demás | `llama3.2:1b` |
| 8 GB | 1 a 3B | `llama3.2` |
| 16 GB | hasta 7 u 8B | `llama3.2` (y en casa, probá `llama3.1:8b`) |
| 32 GB o más, o placa de video de 8 GB o más | 13B o más | `llama3.2` (y en casa, lo que quieras) |

3. Escribí en el chat: cuánta RAM tenés y qué modelo te toca.

---

## Ejercicio 3 · La práctica (en clase, 40 min)

### Paso 1 · El motor: instalar Ollama

**Windows:**
1. Entrá a **ollama.com** → **Download** → **Windows** → se baja `OllamaSetup.exe`.
2. Abrilo → **Install**. No pide ser administrador.
3. Cuando termina, Ollama queda funcionando de fondo: aparece el ícono de una llama al lado del reloj. Las
   versiones nuevas abren además una ventana de chat: la podés cerrar, Ollama sigue andando.

**Mac:**
1. **ollama.com** → **Download** → **macOS** → abrí el archivo y arrastrá **Ollama** a **Aplicaciones**.
2. Abrilo desde Aplicaciones. Aparece el ícono de la llama arriba, en la barra del menú.

**Comprobá que está escuchando**, de dos formas:
1. Abrí una terminal (Windows: tecla Windows → escribí `PowerShell` → Enter; Mac: **Terminal**) y escribí:
   ```text
   ollama --version
   ```
   Tiene que responder `ollama version is ...`. Si dice que *ollama no se reconoce*, cerrá la terminal y abrí otra.
2. En el navegador, entrá a `http://localhost:11434`. Tiene que decir **Ollama is running**.

Por último, abrí el monitor de memoria y dejalo a la vista:
- Windows: **Ctrl + Shift + Esc** → pestaña **Rendimiento** → **Memoria**;
- Mac: **Monitor de Actividad** → pestaña **Memoria**.

### Paso 2 · El modelo: descargarlo y preguntarle

1. Con el tramo del Ejercicio 2, descargá tu modelo:
   ```text
   ollama pull llama3.2
   ```
   (o `ollama pull llama3.2:1b` si tenés 4 GB). Tarda unos minutos: son 2 GB (o 1,3 GB).
2. Comprobá que está:
   ```text
   ollama list
   ```
3. Preguntale algo, mirando el monitor de memoria:
   ```text
   ollama run llama3.2 "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
   ```
   La primera vez tarda: Ollama carga el modelo en memoria. Mirá cómo sube la memoria en el monitor.
4. Preguntale otra cosa: la segunda respuesta sale mucho más rápido.
5. Para ver qué está cargado y cuánta memoria usa:
   ```text
   ollama ps
   ```

### Paso 3 · Sin internet

1. Apagá el WiFi (o desenchufá el cable).
2. Volvé a preguntar:
   ```text
   ollama run llama3.2 "¿Cuál es la capital de Mendoza? Una línea."
   ```
3. Responde igual: el modelo está en tu disco. Anotá cuánto tardó.
4. Volvé a prender el WiFi.

### Paso 4 · El puente: n8n + Ollama

Para este paso, n8n tiene que estar en tu computadora (en Docker, como en la Semana 2). Si usás n8n Cloud, miralo en
la pantalla del profe: n8n Cloud no puede ver tu Ollama.

1. En n8n: **Credentials** → **Create credential** → buscá **Ollama** → elegí **Ollama**.
2. **Base URL**:
   - n8n en Docker: `http://host.docker.internal:11434`
   - n8n instalado sin Docker: `http://localhost:11434`
3. **API Key**: vacía. Nombre de la credencial: `Ollama local` → **Save**. Tiene que decir *Connection tested
   successfully*.
4. Workflow nuevo → nombre: `Hola Ollama`.
5. **Add first step** → buscá "manual" → **Trigger manually**.
6. **+** → buscá "edit" → **Edit Fields (Set)** → **Add Field** → name: `pregunta`, value: la pregunta del Paso 2.
   Renombralo: `La pregunta`.
7. **+** → buscá "basic llm" → **Basic LLM Chain**:
   - **Source for Prompt**: *Define below*;
   - **Prompt**: arrastrá `pregunta` desde la izquierda.
   - Renombralo: `Preguntarle al modelo local`.
8. Abajo del nodo, en **Chat Model**, el **+** → buscá "ollama" → **Ollama Chat Model** → credencial `Ollama local`
   → **Model**: `llama3.2:latest`.
9. **Execute workflow**. Mientras espera, mirá el monitor de memoria. La respuesta aparece en el casillero `text`.

Si da error de conexión, revisá la *Base URL*: es el error más común de hoy.

### Paso 5 · Comparar: local contra nube

1. Importá `02-local-vs-nube.json` (de la carpeta `n8n/` de la semana): workflow nuevo → menú **…** → **Import from
   File**.
2. Elegí tu credencial de Ollama en *Cerebro local: Ollama* y la de Gemini en *Cerebro nube: Gemini*.
3. **Execute workflow** dos veces (la primera, el local tarda más porque carga el modelo).
4. En el último nodo, *Juntar las dos*, completá esta tabla con lo que ves:

| | Local (Ollama) | Nube (Gemini) |
|---|---|---|
| ¿Respondió lo que se pedía? | | |
| ¿En castellano rioplatense? | | |
| Segundos | | |
| Costo | | |

5. Escribí en dos líneas: **para tu propio flujo** (el de la pre-entrega), ¿qué cerebro conviene y por qué?

---

## Ejercicio 4 · Dos tamaños, la misma pregunta (casa, 20 min)

1. Descargá el modelo chico: `ollama pull llama3.2:1b`.
2. Hacele la misma pregunta a los dos, con `--verbose` (muestra los tiempos al final):
   ```text
   ollama run llama3.2:1b --verbose "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
   ollama run llama3.2 --verbose "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
   ```
3. Completá:

| | `llama3.2:1b` | `llama3.2` |
|---|---|---|
| Pesa (`ollama list`) | | |
| Memoria cargado (`ollama ps`) | | |
| `total duration` (tiempo total) | | |
| `eval rate` (palabras por segundo, aprox.) | | |
| ¿La respuesta tiene sentido? | | |

4. Si tenés 16 GB o más, sumá una tercera columna con `llama3.1:8b`.
5. Conclusión en una línea: ¿cuál usarías para un flujo de tu trabajo?

---

## Ejercicio 5 · Quejas privadas (casa, 20 min)

El caso del banco: tres quejas de clientes, dos con número de tarjeta. El modelo local las clasifica y las resume, y
ningún dato sale de tu computadora.

1. Importá `03-quejas-privadas.json` y elegí tu credencial de Ollama.
2. Ejecutalo. Mirá la salida de *Para el equipo*: para cada cliente, la categoría y el resumen.
3. Revisá:
   - ¿Clasificó bien las tres (Cobro, Fraude, Atención)?
   - ¿Respetó la regla de **no escribir el número de tarjeta** en el resumen?
   - ¿Respondió solo las dos líneas, o agregó texto de más?
4. Mejorá el prompt del nodo *Clasificar y resumir (local)* para que falle menos, y volvé a ejecutar. Pistas: dar un
   ejemplo de la respuesta esperada; bajar la temperatura a 0; decir qué hacer si duda.

---

## Ejercicio 6 · Tapar los datos antes de la IA (casa, 15 min)

Un modelo chico no siempre respeta una regla como "no escribas el número de tarjeta". La forma segura es que **no le
llegue**. Vas a tapar los números antes de mandarle la queja.

1. En el flujo del Ejercicio 5, pasá el mouse por la línea entre *Una por una* y *Clasificar y resumir (local)* →
   **+** → **Edit Fields (Set)**. Renombralo: `Tapar tarjetas`.
2. Activá **Include Other Input Fields**.
3. **Add Field** → name: `queja` · tipo: String · value:
   ```text
   {{ $json.queja.replace(/\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}/g, '[TARJETA]') }}
   ```
4. **Execute step**: en la salida, la queja de Marta dice `...en la tarjeta [TARJETA]. Necesito...`.
5. Ejecutá el flujo entero: ahora el modelo no puede repetir el número, porque nunca lo vio.

Para pensar: si este paso de IA fuera en la nube, ¿alcanzaría con tapar la tarjeta? ¿Qué otros datos de la queja
quedan (nombre, viaje)?

---

## Ejercicio 7 · Ana con cerebro local (casa, 30 min)

Ana, la asesora de la Semana 6, con el cerebro en tu máquina. Mismas herramientas, mismo system prompt.

**Opción A · desde el archivo:** importá `04-agente-ana-local.json`. Elegí la credencial de Ollama en *Cerebro:
Ollama (local)*, y en *consultar_paquetes* tu credencial de Sheets y el link de tu planilla de paquetes.

**Opción B · cambiarle el cerebro a tu agente:**
1. Abrí tu agente de la Semana 6 (o el `02-agente-agencia.json`) → menú **…** → **Duplicate** → nombre: `Ana local`.
2. Seleccioná el sub-nodo de Gemini → **Supr** (lo borrás).
3. Abajo del agente, en **Chat Model**, el **+** → **Ollama Chat Model** → credencial `Ollama local` → **Model**:
   `llama3.2:latest`.
4. En **Options** → **Add Option** → **Sampling Temperature** → `0.2`.

**Probalo** con **Open chat** y las mismas preguntas que a la Ana de Gemini:
1. `Hola! Quiero ir a Bariloche 5 días con mi pareja, ¿cuánto sale en pesos?`
2. `¿Y el de nieve tiene lugar?`
3. `¿Cuánto está el dólar blue?`

Compará con la Ana de Gemini: ¿usó las herramientas correctas? ¿Hizo la cuenta con la calculadora? ¿Cuánto tardó
cada respuesta? Anotá en qué se equivocó: es lo que vas a tener en cuenta para elegir el cerebro de la Pre-entrega 4.

---

## Para repasar

1. ¿Cuál es la diferencia entre Ollama y un modelo?
2. Tenés una notebook de 8 GB sin placa de video. ¿Qué tamaño de modelo elegís y por qué?
3. Tu n8n corre en Docker y en la credencial de Ollama pusiste `http://localhost:11434`. ¿Qué pasa y cómo se
   arregla?
4. ¿Por qué la primera respuesta del modelo tarda mucho más que la segunda?
5. Un flujo usa Ollama para resumir historias clínicas y después manda el resumen por Gmail. ¿Es privado? ¿Por qué?
