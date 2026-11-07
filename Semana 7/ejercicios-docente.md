# Semana 7 · Ejercicios: versión docente

**No se comparte con los alumnos.** Respuestas, salidas reales de los flujos y qué mirar en cada ejercicio.

Todo lo que dice "real" se ejecutó el 7 de noviembre de 2026 con Ollama 0.40 y n8n 2.46, en Docker con 4 núcleos y
4 GB de memoria, sin placa de video. Los modelos responden distinto en cada ejecución: las de los alumnos no van a ser
iguales, pero los errores van a ser del mismo tipo.

---

## Ejercicio 1 · ¿Local o nube?

| Caso | Conviene | Por qué |
|---|---|---|
| 1 · Banco, quejas con tarjetas | **Local** | Privacidad: los números de tarjeta no pueden viajar a otra empresa. La tarea (resumir, clasificar) es simple. |
| 2 · Clínica, historias clínicas | **Local** | La ley lo exige: no hay otra opción. Y que el resto del flujo tampoco las mande afuera (ni por Gmail). |
| 3 · Agente con cinco herramientas | **Nube** | Elegir bien entre muchas herramientas es razonamiento complejo: un modelo chico se equivoca más. Si hay datos sensibles, un modelo local grande (14B o más) en una máquina potente. |
| 4 · 3.000 facturas por día | **Local** | Costo: el volumen es grande y la tarea es simple (cuatro categorías). |
| 5 · Probar un flujo 100 veces | **Local** | Costo y límites: no gasta tokens ni choca con el límite de pedidos. Al final, si hace falta, se cambia el cerebro. |
| 6 · Asistente sin señal | **Local** | Independencia: sin internet, la nube no existe. |

Lo que hay que escuchar: un argumento con una de las tres razones o con la contrapartida, no "porque es mejor". Si
alguien dice "nube" en el caso 1 o 2, preguntale qué pasa con los datos.

---

## Ejercicio 2 · ¿Qué modelo te entra?

Respuestas esperables:
- **4 GB:** `llama3.2:1b`, cerrando todo lo demás. Va a ser lento y flojo.
- **8 GB:** `llama3.2` (3B). Ocupa 2,6 GB cargado; con Windows, el navegador, Docker y Zoom, entra justo.
- **16 GB:** hasta 7 u 8B (`llama3.1:8b`, unos 5 GB). Para la clase, `llama3.2`, que responde más rápido.
- **32 GB o placa de video de 8 GB o más:** 13–14B.

Ojo con las Mac con chip M1, M2, M3 o M4: la memoria es compartida con la placa de video, y Ollama la aprovecha.
Una Mac de 16 GB anda mucho más rápido que una notebook de 16 GB sin placa.

---

## Ejercicio 3 · La práctica

Las salidas reales de cada paso están en el guion (README, Sección 03). Resumen de lo medido:

| Prueba | Tiempo |
|---|---|
| `llama3.2:1b`, primera pregunta (incluye cargar el modelo) | 80 s |
| `llama3.2`, primera pregunta (incluye cargar el modelo) | 167 s |
| `llama3.2`, segunda pregunta, ya cargado | 9 s |
| Flujo 01 en n8n (la Basic LLM Chain), primera vez | 71 s |
| Flujo 02, rama local, con el modelo ya cargado | 26 s |

Memoria: `llama3.2` ocupa **2,6 GB** cargado; `llama3.2:1b`, **1,5 GB**. Con los dos cargados en 4 GB, el de 3B se
cortó con `signal: killed`.

**El paso 5, la tabla de comparación.** Lo que tienen que encontrar en la respuesta local (real):

```text
Hola! Salta en julio es una excelente elección. Recomiendo visitar el Cerro del Comandante, el Mercado de Artesanías
y el Lago Milicia. No olvides llevar ropa fresca y protector solar, ya que el sol es intenso en esa época. ¿Quieres
que te ayude con el alojamiento y actividades adicionales?
```

- inventa lugares ("Lago Milicia"), y en otra ejecución puso el Teatro Colón en Salta;
- "ropa fresca" en julio, que es invierno;
- ignora al nene y los 5 días;
- no habla en rioplatense ("Quieres", no "Querés"), aunque el prompt lo pide.

Gemini debería nombrar lugares reales (Cerro San Bernardo, Cafayate, Purmamarca o la Quebrada de Humahuaca, el Tren a
las Nubes), avisar del frío de la noche y armar algo para la familia. **La rama de Gemini no se ejecutó** al armar el
material (hace falta una clave): probala antes de la clase y guardá la respuesta por si en vivo da 429.

Una buena conclusión para "tu flujo": *"En mi pre-entrega el agente responde consultas con datos de clientes: el
paso que lee los mensajes va local; si la respuesta necesita razonar con varias herramientas, nube, tapando antes
nombre y teléfono."*

---

## Ejercicio 4 · Dos tamaños, la misma pregunta

Lo que tiene que aparecer en la tabla (valores de la prueba; los de cada alumno cambian según la máquina):

| | `llama3.2:1b` | `llama3.2` |
|---|---|---|
| Pesa | 1,3 GB | 2,0 GB |
| Memoria cargado | 1,5 GB | 2,6 GB |
| Primera respuesta | 80 s | 167 s |
| ¿Tiene sentido? | A medias: "un casco ligero", "un reloj suave y resistente al frío" | Sí: ropa abrigada, botas de nieve |

La respuesta real del de 1B:

```text
¡Hola! En Bariloche, invierno es una experiencia única. Para disfrutar al máximo de la belleza natural de esta
ciudad, te recomiendo llevar:
* Un casco ligero y protegido para caminar en carreteras y senderos, así como un paraguas resistente a la lluvia.
* Un abrigo o capa de calor para protegerte del frío y la lluvia, y un sombrero para protegerte la cabeza y las orejas.
* Un reloj suave y resistente al frío para evitar que se pierda el tiempo.
```

La conclusión esperable: el chico es más rápido y entra en cualquier máquina, pero para hablar con clientes no
alcanza. Sirve para tareas cerradas (clasificar en pocas categorías, sacar un dato).

`--verbose` muestra al final `total duration`, `load duration` (la carga en memoria: es casi todo el tiempo de la
primera vez), `prompt eval rate` y `eval rate` (tokens por segundo al escribir).

---

## Ejercicio 5 · Quejas privadas

**La salida real del flujo tal como viene** (`llama3.2`, temperatura 0.1):

```text
Marta Suárez     Categoría: Cobro
                 Me cobraron dos veces el mismo pasaje en una tarjeta.
Jorge Benítez    Categoría: Cobro
                 Resumen: Aparece una compra en Miami con tarjeta que no pertenece al cliente.
Lucía Fernández  Categoría: Cobro
                 Resumen: Quiero cambiar la fecha de mi viaje a Mendoza.
```

Qué tienen que encontrar:
- **dos de tres mal clasificadas:** Jorge es **Fraude** (una compra que no hizo) y Lucía es **Atención** (no
  la atienden y quiere un cambio). El modelo puso "Cobro" a todas;
- **el formato no se respetó del todo:** a Marta le falta "Resumen:", y hay una línea en blanco de más;
- el resumen de Lucía está en primera persona ("Quiero"), copiado de la queja;
- **esta vez no repitió los números de tarjeta**. Pero no hay garantía: por eso el Ejercicio 6.

**Un prompt mejorado** (la solución): definir cada categoría con una frase, dar el formato exacto, dar un ejemplo y
bajar la temperatura a 0.

```text
Clasificá la queja de un cliente de una agencia de viajes.

Categorías (elegí UNA):
- Fraude: una compra o un cobro que el cliente NO hizo.
- Cobro: un cobro de algo que el cliente sí compró, pero mal hecho (doble, de más, sin devolución).
- Atención: problemas para comunicarse o pedidos de cambios, sin problemas de plata.

Respondé EXACTAMENTE con este formato, dos líneas, sin nada más:
Categoría: <Fraude, Cobro o Atención>
Resumen: <una oración en tercera persona, sin números de tarjeta>

Ejemplo:
Queja: Me debitaron un hotel que nunca reservé.
Categoría: Fraude
Resumen: El cliente reclama un débito de un hotel que no reservó.

Queja: {{ $json.queja }}
```

**Salida real con el prompt mejorado** (temperatura 0, y con las tarjetas ya tapadas por el Ejercicio 6):

```text
Marta Suárez     Queja: Me cobraron dos veces el mismo pasaje en la tarjeta [TARJETA]. ...
                 Categoría: Cobro
                 Resumen: El cliente reclama un cobro duplicado de un pasaje en su tarjeta.
Jorge Benítez    Queja: Aparece una compra en Miami que yo no hice, con mi tarjeta [TARJETA]. ...
                 Categoría: Fraude
                 Resumen: El cliente reclama una compra ficticia en Miami con su tarjeta.
Lucía Fernández  Queja: Llamé tres veces al número de atención y nadie me atendió. ...
                 Categoría: Atención
                 Resumen: El cliente reclama problemas de atención al servicio de atención al cliente de la agencia de viajes.
```

Las tres categorías, bien, y los resúmenes en tercera persona. Pero copió la línea "Queja: …" del ejemplo: el formato
todavía no es exacto. Si un alumno lo nota, la mejora siguiente es sacar el ejemplo del texto de la queja o decir
"no repitas la queja". Con un modelo chico, siempre queda algo para ajustar.

El aprendizaje: con un modelo chico, las instrucciones tienen que ser mucho más explícitas que con uno grande. Lo que
Gemini entiende con "clasificá en Fraude, Cobro o Atención", un 3B necesita que se lo definan.

---

## Ejercicio 6 · Tapar los datos antes de la IA

La expresión `{{ $json.queja.replace(/\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}/g, '[TARJETA]') }}` reemplaza cualquier
grupo de 16 dígitos, con o sin espacios o guiones, por `[TARJETA]`. Probada en n8n 2.46:

```text
Antes: Me cobraron dos veces el mismo pasaje en la tarjeta 4517 6601 2345 9087. Necesito ...
Después: Me cobraron dos veces el mismo pasaje en la tarjeta [TARJETA]. Necesito ...
```

Y la de Jorge, igual. La de Lucía, sin tarjeta, pasa sin cambios.

Para explicarla si preguntan: `\d` es "un dígito", `{4}` "cuatro veces", `[ -]?` "un espacio o un guion, opcional",
y la `g` del final, "todas las veces que aparezca".

La pregunta para pensar: con la tarjeta tapada, en la nube **todavía viajan** el nombre del cliente y su viaje. Tapar
reduce el riesgo, pero no lo elimina. Para datos de salud, ni siquiera alcanza: la historia clínica entera es
sensible.

---

## Ejercicio 7 · Ana con cerebro local

**La prueba real** (`llama3.2`, temperatura 0.2, con las herramientas del dólar y la calculadora; la de la planilla
no, porque pide Google). Mensaje: *"Hola! ¿Cuánto son USD 950 por persona, para 2 personas, en pesos al dólar
oficial?"*.

Lo que hizo:
1. Primer pedido al modelo: **3 minutos 40 segundos** (el system prompt de Ana y la descripción de las herramientas
   son mucho texto para procesar en CPU).
2. Usó la **calculadora**: 950 × 2 = `1900`. Bien.
3. **No consultó el dólar.**
4. Respondió: **"El paquete cuesta $ 1.900.000."**

En total, más de 5 minutos, y una respuesta **inventada**: al oficial de $ 1.570, son unos $ 2.983.000. Rompió dos
reglas de su system prompt: "usá cotizacion_dolar cuando haya que pasar dólares a pesos" y "no inventes el dato".

Es la conclusión que tienen que sacar los alumnos: **un modelo de 3B no es un buen cerebro para un agente con
varias herramientas**. Para la Pre-entrega 4 (WhatsApp, respuestas rápidas, cuentas con plata), conviene Gemini, o
un modelo local de 14B o más en una máquina potente. Lo local sirve para pasos simples dentro del flujo.

Lo que pueden probar para que mejore: temperatura 0; una regla más explícita en el system prompt ("para pasar a
pesos, SIEMPRE primero cotizacion_dolar, después calculadora"); o, si tienen 16 GB, `llama3.1:8b` o `qwen2.5:7b`.

---

## Para repasar (respuestas)

1. Ollama es el programa que descarga, guarda y hace funcionar modelos (el reproductor). El modelo es el archivo con
   lo aprendido (la canción). Sin modelo, Ollama no responde nada.
2. De 1 a 3B, por ejemplo `llama3.2`: ocupa unos 2,6 GB cargado, y el resto de los 8 GB lo usan el sistema y los
   demás programas. Va a correr en la CPU, más lento que con placa de video.
3. Da error de conexión: adentro del contenedor, `localhost` es el contenedor mismo, y ahí no está Ollama. Se arregla
   con `http://host.docker.internal:11434`.
4. Porque la primera vez Ollama tiene que cargar el modelo del disco a la memoria. Después queda cargado (5 minutos
   sin uso, por defecto) y responde mucho más rápido.
5. No: el modelo es local, pero el resumen sale por Gmail a los servidores de Google. La privacidad es del flujo
   entero, no de un nodo.

## El cuestionario de la plataforma (4 preguntas)

Respuestas: **A, A, A, A**.
1. Ollama descarga y ejecuta modelos localmente (no es un servicio en la nube, y no trae los modelos instalados).
2. Sí, corre en la CPU sin placa de video, más lento.
3. Lento palabra por palabra con un modelo grande: no entra en la VRAM y parte del trabajo pasa a la CPU.
4. "No encuentra ningún modelo": instalar Ollama no instala modelos; hay que descargarlos.
