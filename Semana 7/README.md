# Semana 7 — Módulo 7: Instalando IA local con Ollama

Fuente: `program-summary.pdf` (Módulo 7). **Una clase de 2 horas.**

## Qué hay en esta carpeta

| Archivo | Para qué |
|---|---|
| `Modulo_7_AI_Automation.pptx` | Las filminas del módulo (30). |
| `Semana 7.docx` | El material de lectura: por qué correr un modelo local, qué es Ollama, cómo elegir el modelo según el hardware, el cuestionario de 4 preguntas, el podcast y el guion sugerido de la clase. |
| [ejercicios-alumnos.md](ejercicios-alumnos.md) | Ejercicios en clase y para casa, con el paso a paso de la instalación. Se comparte con los alumnos. |
| [n8n/](n8n/) | Cuatro workflows listos para importar: el "hola mundo" con Ollama, la comparación local contra nube, la clasificación de quejas con datos de tarjeta y Ana (el agente de la Semana 6) con el cerebro en Ollama. |
| [ejercicios-docente.md](ejercicios-docente.md) | Respuestas, las salidas reales de los flujos y las trabas más comunes. **No se comparte.** |

## Los ejercicios

| Cuándo | Ejercicio | Duración |
|---|---|---|
| En clase | 1 · ¿Local o nube? (el banco y la clínica de la filmina 12) | 5 min |
| En clase | 2 · ¿Qué modelo te entra? | 2 min |
| En clase | 3 · La práctica: motor, modelo, sin internet, puente y comparación | 40 min |
| Casa | 4 · Dos tamaños, la misma pregunta | 20 min |
| Casa | 5 · Quejas privadas | 20 min |
| Casa | 6 · Tapar los datos antes de la IA | 15 min |
| Casa | 7 · Ana con cerebro local | 30 min |

## Evaluación

- Esta semana **no tiene pre-entrega**.
- El cuestionario del módulo en la plataforma: 4 preguntas, se aprueba con 70 %, 3 intentos.
- La semana que viene llega la **Pre-entrega 4** (el asistente de WhatsApp). Usa el agente de la Semana 6, con el
  cerebro que cada uno elija: nube o local.

## A tener en cuenta

- **La descarga es el cuello de botella.** El material de lectura propone bajar un modelo de unos 4 GB en vivo. Con
  30 personas en la misma clase y conexiones distintas, no da. Por eso:
  - el día anterior les pedís que **instalen Ollama y descarguen `llama3.2`** (2 GB) en casa. El paso a paso está en
    el Ejercicio 3 de [ejercicios-alumnos.md](ejercicios-alumnos.md);
  - en clase vos mostrás la descarga del chico, `llama3.2:1b` (1,3 GB), para que vean cómo es;
  - el que llega sin nada, sigue en tu pantalla y lo hace en casa.
- **Los modelos de la clase son `llama3.2` (3B) y `llama3.2:1b`.** `llama3.2` es el que el nodo de n8n trae por
  defecto, habla castellano aceptable y sabe usar herramientas (lo necesita la Ana del Ejercicio 7). El de 1B es para
  las máquinas con poca memoria.
- **Qué está probado** (7 de noviembre de 2026, Ollama 0.40 y n8n 2.46, en Docker con 4 núcleos y 4 GB de memoria, sin
  placa de video, algo parecido a una notebook común):
  - los dos modelos responden en castellano. `llama3.2` tardó **167 segundos** la primera vez (cargar el modelo en
    memoria) y **9 segundos** la segunda. El de 1B, **80 segundos** la primera vez, con una respuesta floja (le
    recomendó a un cliente llevar "un casco ligero" a Bariloche): es el ejemplo perfecto de la filmina 11;
  - con los dos modelos cargados a la vez, el de 3B se cortó con `signal: killed`: **no alcanzó la memoria**. Es una
    traba que les va a pasar;
  - Ana (el agente de la Semana 6) con `llama3.2` tardó **más de 5 minutos** en responder una pregunta, usó la
    calculadora pero no consultó el dólar, e **inventó el precio en pesos**. Es la razón para no usar un modelo de 3B
    como cerebro de un agente con varias herramientas (Ejercicio 7, versión docente);
  - los errores de la práctica son los reales: `localhost` desde Docker da **`fetch failed`**, y un nombre de modelo
    equivocado, **`model 'llama3' not found`**;
  - los cuatro flujos de la carpeta [n8n/](n8n/) se ejecutaron contra ese Ollama. La rama de Gemini del flujo 02 no
    (hace falta una clave): se probó con Ollama en las dos ramas.
  Los tiempos de cada alumno van a ser muy distintos: con una placa de video, mucho más rápido; con 8 GB de memoria y
  el navegador lleno de pestañas, más lento.
- **La dirección de Ollama depende de dónde está n8n** (filmina 19). La mayoría instaló n8n en **Docker Desktop** en la
  Semana 2: para ellos es `http://host.docker.internal:11434`. Los que usan **n8n Cloud** no pueden conectarse a su
  Ollama: hacen los Pasos 1 a 3 y el 4 lo miran en tu pantalla (o instalan n8n en Docker con la guía de la Semana 2).
- **Ollama se instala directo en la computadora, no en Docker.** Así usa la placa de video si la hay, sin
  configuración extra. n8n sigue en Docker, y se hablan a través de `host.docker.internal`.
- **Dos detalles de las filminas:**
  - la filmina 16 dice "Llama 3.1/3.2 8B": el de 8B es **Llama 3.1**; Llama 3.2 viene en 1B y 3B. En el guion se dice
    así;
  - la filmina 11 nombra GPT-4o como modelo de punta: en 2026 ya hay modelos más nuevos. Se dice "los grandes de la
    nube: los de OpenAI, Claude, Gemini".
- **Esta clase no tiene filmina de "Para practicar".** La tarea va al final, con la filmina 28.
- **En la teoría hay bloques "En la terminal, paso a paso" y "En n8n, paso a paso"**, con los comandos y los clics.
  Están para mostrarlos en un minuto mientras lo contás; si vas corto, pegá el bloque en el chat y seguí: en la
  práctica lo hacen completo.

---

## Guion de la clase

### Agenda

| Min | Tramo | Filminas | En clase |
|---|---|---|---|
| 0–10 | Apertura y repaso de la Semana 6 | 1–5 | |
| 10–35 | **01 · Por qué correr IA local** | 6–12 | Ej. 1 (5 min) |
| 35–60 | **02 · Ollama y los modelos** | 13–19 | Ej. 2 (2 min) |
| 60–70 | Break | 20 | |
| 70–113 | **03 · Práctica en vivo:** el motor, el modelo, sin internet, el puente y comparar | 21–27 | Ej. 3 |
| 113–117 | Cómo sigue y la tarea | 28 | |
| 117–120 | Preguntas y cierre | 29–30 | |

**Si el tiempo se aprieta**, recortá en este orden:
1. El Paso 3 (sin internet): lo hacés vos solo, en un minuto, y ellos lo prueban en casa.
2. Los cinco detalles (filmina 17): se leen.
3. El Ejercicio 2: se responde en voz alta con un par de ejemplos.
4. El Paso 5 (comparar): ejecutás el flujo 02 ya importado y comentan el resultado.

Lo último que se recorta es el Paso 4 (el puente con n8n): es lo que conecta este módulo con el resto del curso.

---

### Preparación (antes de la clase)

- [ ] **Ollama instalado en tu computadora** (ollama.com → *Download*) y `llama3.2` descargado (`ollama pull
  llama3.2`). Probá antes la práctica entera.
- [ ] **`llama3.2:1b` sin descargar**, para mostrar la descarga en vivo en el Paso 2 (1,3 GB). Si ya lo tenés,
  borralo antes con `ollama rm llama3.2:1b`.
- [ ] **Tu n8n en Docker prendido**, con la credencial de Gemini (la de las Semanas 2 y 6).
- [ ] **Los workflows importados** (carpeta [n8n/](n8n/)). Para cada uno: workflow nuevo → menú **…** → **Import from
  File** → **Save**. En cada nodo de Ollama, creá o elegí la credencial **Ollama** con la *Base URL*
  `http://host.docker.internal:11434`.
  - `01-hola-ollama.json`: el puente terminado (plan B del Paso 4).
  - `02-local-vs-nube.json`: elegí también la credencial de Gemini en *Cerebro nube: Gemini*. Ejecutalo dos veces
    (la primera, el local carga el modelo).
  - `03-quejas-privadas.json` y `04-agente-ana-local.json`: los Ejercicios 5 y 7. Para el 04, la credencial de Sheets
    y el link de la planilla de paquetes de la Semana 6.
- [ ] **El Administrador de tareas** a mano: **Ctrl + Shift + Esc** → pestaña **Rendimiento** → **Memoria**. En Mac,
  **Monitor de Actividad** → pestaña **Memoria**.
- [ ] **Una terminal abierta** (PowerShell en Windows, Terminal en Mac) con letra grande: **Ctrl + rueda del mouse**.
- [ ] **El WiFi a mano para apagarlo** en el Paso 3. Si estás por cable, desenchufalo o desactivá el adaptador. Ojo:
  **la clase de Zoom también se corta**. Avisalo antes, y que Romina sostenga el chat esos 30 segundos. Si no querés
  arriesgar, mostrá la prueba grabada en un video corto.
- [ ] **El día anterior**, avisales a los alumnos:
  - que instalen Ollama y descarguen `llama3.2` en casa, con el paso a paso del Ejercicio 3 (Pasos 1 y 2);
  - que se fijen cuánta memoria RAM tiene su computadora (Ejercicio 2): **Configuración → Sistema → Información** en
    Windows, ** → Acerca de esta Mac** en Mac;
  - que entren con n8n prendido.
- [ ] [ejercicios-alumnos.md](ejercicios-alumnos.md) listo para compartir.
- [ ] Avisar que la clase queda grabada.

---

### 0–10 · Apertura y repaso de la Semana 6

**Filmina 1 · Portada** (1 min) — Módulo 7: Instalando IA local con Ollama.

<p style="color:#1a7f37">Bienvenidos al Módulo 7. Hasta hoy, cada vez que usamos IA, el modelo estaba en la computadora de otro: de Google, de OpenAI. Hoy lo bajamos a la nuestra.</p>

Para explicar:
- **"IA local".** **Local** quiere decir "acá, en mi máquina", lo contrario de "en la nube". **La nube** son las
  computadoras de una empresa, en algún lugar del mundo, a las que nos conectamos por internet.
  - *Ejemplo:* Cuando el agente de la semana pasada le preguntaba algo a Gemini, el mensaje viajaba a un centro de
    datos de Google y volvía. Hoy el mensaje no sale de la computadora.
- **"Ollama".** Es el programa que vamos a instalar hoy. El nombre viene de *llama*, el animal, porque el primer modelo
  famoso que se podía bajar se llamaba LLaMA.
  - *Ejemplo:* Instalamos Ollama, le decimos "bajate este modelo", y queda andando en nuestra máquina.

**Filmina 2 · Objetivos** (2 min)

<p style="color:#1a7f37">Hoy vamos a entender las tres razones para correr un modelo local, qué se gana y qué se pierde, la diferencia entre Ollama y un modelo, qué modelo aguanta cada computadora, y vamos a conectar n8n con nuestro Ollama.</p>

Para explicar cada objetivo:
- **"Explicar las tres razones para correr un modelo local: costo, privacidad e independencia."** Son los tres
  argumentos que van a usar cuando alguien les pregunte "¿y por qué no usás ChatGPT?".
  - *Ejemplo:* Una clínica: privacidad. Una empresa que procesa miles de textos por día: costo. Un pueblo con
    internet que se corta: independencia.
- **"Reconocer el trade-off entre capacidad del modelo y control sobre los datos."** Un **trade-off** es un "toma y
  daca": para ganar algo, se resigna otra cosa.
  - *Ejemplo:* Ganás que los datos no salgan de tu máquina; perdés algo de inteligencia, porque el modelo que te
    entra es más chico.
- **"Distinguir qué hace Ollama de qué es un modelo."** Es la confusión número uno del módulo. Ollama es el programa;
  el modelo es el archivo con lo que la IA aprendió.
  - *Ejemplo:* Instalar Ollama es como instalar Spotify: tenés la aplicación, pero sin canciones no suena nada.
- **"Elegir el tamaño de modelo que tu hardware puede sostener."** **Hardware** es la parte física de la
  computadora: el procesador, la memoria, el disco, la placa de video.
  - *Ejemplo:* Con 8 GB de memoria, un modelo de 3B. Con 32 GB y una buena placa de video, uno de 14B.
- **"Conectar n8n con una instancia local de Ollama."** Una **instancia** es una copia funcionando de un programa,
  como en la Semana 2 con n8n.
  - *Ejemplo:* Al final de la clase, un flujo de n8n le pregunta algo a la IA y la respuesta sale de tu
    computadora, no de Google.

**Filmina 3 · Agenda** (1 min)

<p style="color:#1a7f37">Primero, dónde quedamos. Después, por qué correr un modelo local. Después, qué es Ollama y cómo elegir el modelo. Break. Y la práctica: lo instalamos, lo probamos sin internet y lo conectamos con n8n.</p>

**Filmina 4 · La clase queda grabada** — pasarla.

<p style="color:#1a7f37">La clase queda grabada.</p>

**Repaso de la Semana 6** (3 min, sin filmina) — antes de pasar a la filmina 5.

<p style="color:#1a7f37">Repasemos. La semana pasada armamos un agente: un cerebro, que era Gemini; un diario, la memoria; unas manos, las herramientas; y un manual, el system prompt. Y una idea clave: el agente decide solo qué herramienta usar, en un ciclo de razonar, actuar y observar.</p>

<p style="color:#1a7f37">Hoy vamos a tocar solo una de esas piezas: el cerebro. El resto queda igual.</p>

Para explicar:
- **El cerebro es intercambiable.** En n8n, el modelo es un sub-nodo que se enchufa abajo del agente. Se puede
  desenchufar Gemini y enchufar otro, sin tocar ni las herramientas ni el system prompt.
  - *Ejemplo:* Ana, la asesora de "Rumbo Sur", con el cerebro de Gemini o con el de Ollama: mismas herramientas,
    mismas reglas. Lo prueban en casa con el Ejercicio 7.
- **Cada vuelta del ciclo es un pedido al modelo.** Lo vimos la semana pasada: un agente le pregunta varias veces al
  modelo por cada mensaje. Eso hoy importa por dos cosas: en la nube se paga por cada pedido, y en local, cada pedido
  usa nuestra máquina.
  - *Ejemplo:* "¿Cuánto sale Bariloche en pesos?" son cuatro vueltas: la planilla, el dólar, la calculadora y la
    respuesta. Cuatro pedidos al modelo.

**Filmina 5 · ¿Dónde quedamos? Dónde corre tu modelo** (3 min)

<p style="color:#1a7f37">En el Módulo 6 diseñaron un agente con cerebro, memoria, herramientas y límites. La pregunta que quedó es: ese cerebro, ¿dónde corre? Hasta ahora, en la API de otra empresa. Eso implica que pagan por token, que dependen de que el proveedor esté funcionando y que sus datos salen de su máquina. Hoy bajamos el modelo a su propia computadora y lo enchufamos a n8n.</p>

Para explicar:
- **"En el módulo 6: diseñaste un agente con cerebro, memoria, herramientas y límites."**
  - *Ejemplo:* Ana: cerebro Gemini, memoria de 10 mensajes, tres herramientas y un system prompt con sus límites.
- **"La pregunta que quedó: ese cerebro, ¿dónde corre? Hasta ahora, en la API de un tercero."** **Correr** un
  programa es tenerlo funcionando. Un **tercero** es otra empresa, que no somos ni nosotros ni el cliente. Lo de la
  API lo vimos en la Semana 4: el nodo de Gemini le manda un pedido HTTP a Google.
  - *Ejemplo:* Cada mensaje a Ana viaja a `generativelanguage.googleapis.com`, una dirección de Google, y vuelve con
    la respuesta.
- **"Lo que eso implica: pagás por token, dependés de que el proveedor esté arriba, y tus datos salen de tu
  infraestructura."** Tres cosas, que son las tres razones de la Sección 01:
  - un **token** es un pedacito de texto, más o menos tres cuartos de una palabra; las APIs cobran por cantidad de
    tokens;
  - **estar arriba** es estar funcionando (lo contrario de "estar caído");
  - **infraestructura** son las máquinas y sistemas propios.
  - *Ejemplo:* Si Google tiene un problema, Ana deja de responder. Y cada consulta de un cliente, con su nombre y su
    teléfono, pasa por los servidores de Google.
- **"Hoy: bajamos el modelo a tu propia máquina y lo enchufamos a n8n."**
  - *Ejemplo:* El mismo nodo Basic LLM Chain de la semana pasada, con un Ollama Chat Model abajo en vez de Gemini.

---

### 10–35 · Sección 01 · Por qué correr IA local

**Filmina 6 · Separador "01: Por qué correr IA local"**

<p style="color:#1a7f37">Empecemos por el por qué. Si no tienen claro para qué sirve, instalar un modelo es solo un experimento.</p>

#### Filmina 7 · Tres razones para bajarlo: costo, privacidad e independencia (3 min)

<p style="color:#1a7f37">Tres razones. Costo: las APIs cobran por token, y un modelo local no cobra por pedido; el único costo es la máquina. Privacidad: los datos nunca salen de tu computadora. E independencia: no dependés de que otra empresa esté funcionando, de sus precios ni de sus límites, y podés trabajar sin internet.</p>

Para explicar:
- **"Costo: las APIs cobran por token, de entrada y de salida. Un modelo local no tiene costo por request: el único
  costo es el hardware."** **Entrada** es lo que le mandamos (el prompt, el system prompt, la memoria); **salida** es
  lo que responde. Un **request** es un pedido, como en la Semana 4.
  - *Ejemplo:* Resumir mil mails por día en la nube se paga mil veces. En local, la computadora trabaja mil veces,
    pero no llega ninguna factura.
- **"Privacidad: los datos nunca salen de tu infraestructura. Crítico si el flujo procesa información sensible."**
  **Información sensible** es la que puede hacer daño si se filtra: salud, plata, documentos, datos personales.
  - *Ejemplo:* Un mail con el número de tarjeta de un cliente. Con Gemini, viaja a Google. Con Ollama, no sale de tu
    computadora.
- **"Independencia: no dependés de un proveedor externo, ni de su disponibilidad, sus precios o sus límites. Y podés
  operar sin internet."** **Proveedor** es la empresa que da el servicio.
  - *Ejemplo:* Los proveedores anuncian fechas en las que un modelo deja de funcionar, y los flujos que lo usan hay
    que cambiarlos. Un modelo descargado, en cambio, no se lo pueden apagar a nadie.

**Las tres razones, en una tabla** (para decirlo una vez):

| | En la nube (Gemini, ChatGPT, Claude) | Local (Ollama) |
|---|---|---|
| Costo | Por cada pedido, según los tokens | Cero por pedido; se paga la máquina y la luz |
| Privacidad | Los datos viajan al proveedor | Los datos no salen de tu computadora |
| Independencia | Si el proveedor se cae o cambia, te afecta | Funciona aunque no haya internet |
| Inteligencia | Modelos enormes, los mejores | Modelos chicos, más limitados |

La última fila es la contrapartida de la filmina 11.

#### Filmina 8 · El costo: por token, o una sola vez (4 min)

<p style="color:#1a7f37">Las APIs cobran por token, sumando entrada y salida. En flujos que procesan mucho texto, el costo crece en línea recta con el uso: el doble de textos, el doble de plata. Un modelo local no cobra por pedido: una vez descargado, preguntar es gratis. El único costo es la máquina. Y donde más se nota es al probar: pueden ejecutar un flujo cien veces sin gastar un peso.</p>

Para explicar:
- **"Cómo cobran las APIs: por token, sumando entrada y salida."** La entrada no es solo la pregunta del usuario:
  también va el system prompt entero y la memoria, en **cada** pedido.
  - *Ejemplo:* El system prompt de Ana tiene unas 300 palabras. Viaja (y se cobra) en cada vuelta del ciclo, aunque el
    cliente solo haya escrito "hola".
- **"En workflows que procesan grandes volúmenes de texto, el costo escala linealmente con el uso."** **Escala
  linealmente** quiere decir que crece en la misma proporción: el doble de uso, el doble de costo. No hay descuento
  por cantidad.
  - *Ejemplo:* Si resumir 100 contratos por mes cuesta X, resumir 1.000 cuesta 10 veces X.
- **"El modelo local: no tiene costo por request. Una vez descargado, las inferencias son gratuitas."** **Inferencia**
  es cada vez que el modelo genera una respuesta. Es la palabra técnica para "usar el modelo" (lo contrario de
  **entrenarlo**, que es cuando aprende).
  - *Ejemplo:* Le preguntás 500 veces a `llama3.2` en tu máquina. No hay ninguna cuenta que crezca.
- **"El único costo: el hardware."** Y la luz. Y si el modelo es grande, una computadora más cara.
  - *Ejemplo:* Una notebook con 16 GB de RAM ya corre un modelo de 7B u 8B. Una placa de video potente cuesta como
    muchos meses de API: conviene si se va a usar mucho.
- **"Dónde más brilla: en prototipado y testing. Podés iterar un workflow cientos de veces sin gastar un centavo en
  tokens."** **Prototipar** es armar una primera versión para probar la idea. **Iterar** es repetir: probar, ajustar,
  volver a probar.
  - *Ejemplo:* Mientras arman la pre-entrega, prueban el flujo 50 veces con Ollama. Cuando funciona, si quieren, le
    cambian el cerebro a uno de la nube.

**Ejemplo: ¿cuándo pesa el costo?**

❌ Mal: "lo local siempre es más barato".

```text
Un flujo que se ejecuta 3 veces por semana para resumir un mail.
→ En la nube cuesta centavos por mes (o nada, con el plan gratis).
→ Comprar una computadora más potente para eso no tiene sentido.
```

✅ Bien: pesa cuando el volumen es grande o hay que probar mucho.

```text
Un flujo que clasifica 5.000 mensajes por día, o un prototipo que se ejecuta 200 veces mientras se arma.
→ En la nube, la cuenta crece todos los días.
→ En local, la máquina ya está: cada pedido es gratis.
```

#### Filmina 9 · La privacidad: los datos no salen de tu red (4 min)

<p style="color:#1a7f37">Con un modelo local, los datos nunca salen de tu infraestructura. Es crítico con historias clínicas, contratos, datos de clientes o código propio. Permite cumplir con las leyes de protección de datos sin depender de lo que diga el contrato de otra empresa. Y es la opción natural donde no hay internet o donde la empresa tiene reglas estrictas sobre la información.</p>

Para explicar:
- **"Qué garantiza: con un modelo local, los datos nunca salen de tu infraestructura."** Ni el prompt, ni el texto que
  se analiza, ni la respuesta. Todo pasa adentro de la memoria de tu computadora.
  - *Ejemplo:* Le pedís a Ollama "resumí este contrato". El contrato va de n8n a Ollama, los dos en tu máquina. Nada
    cruza internet.
- **"Cuándo es crítico: historias clínicas, contratos, datos de clientes, código propietario."** **Código
  propietario** es el código de una empresa, que no es público y vale plata.
  - *Ejemplo:* Una historia clínica dice qué enfermedades tiene alguien. Si se filtra, el daño no se arregla.
- **"Lo que habilita: cumplir con regulaciones de protección de datos sin depender de los términos de servicio de un
  tercero."** **Regulaciones** son leyes y normas. En la Argentina rige la **Ley 25.326 de Protección de Datos
  Personales**, y los datos de salud son "sensibles": tienen más protección. Los **términos de servicio** son el
  contrato que aceptamos al usar un servicio (el "Acepto" que nadie lee).
  - *Ejemplo:* Una clínica que manda historias clínicas a una IA en la nube depende de lo que esa empresa haga con
    ellas. Con un modelo local, la pregunta ni se plantea.
- **"El escenario natural: entornos sin conexión a internet, o corporativos con políticas estrictas de manejo de
  información."** **Corporativo** es de una empresa grande. **Políticas** son las reglas internas.
  - *Ejemplo:* Muchos bancos prohíben pegar datos de clientes en ChatGPT. Con un modelo en un servidor del propio
    banco, se puede usar IA sin romper la regla.

**Ejemplo: privacidad de verdad**

❌ Mal: creer que alcanza con pedirle a la IA de la nube que no guarde nada.

```text
Prompt a un modelo en la nube:
"No guardes estos datos. Resumí la historia clínica de Juan Pérez, DNI 30.123.456: diabetes tipo 2, ..."
→ Los datos ya viajaron. Lo que pase con ellos depende del proveedor, no del prompt.
```

✅ Bien: que los datos no viajen.

```text
El mismo prompt a llama3.2 en Ollama, en la computadora de la clínica.
→ La historia clínica no sale de la máquina. No hay nada que pedir.
```

#### Filmina 10 · La independencia: que nadie te apague el flujo (3 min)

<p style="color:#1a7f37">Con un modelo local, te independizás de que otra empresa esté funcionando. Dejan de afectarte las caídas, los cambios de precio, los modelos que se dejan de ofrecer y los límites de pedidos por minuto. Podés trabajar sin internet. En resumen: pasás de usar la IA de otro a ser dueño de tu propia IA.</p>

Para explicar:
- **"De qué te independizás: de la disponibilidad de un proveedor externo."** **Disponibilidad** es estar
  funcionando cuando lo necesitás.
  - *Ejemplo:* Si la API de Google se cae un viernes a la noche, Ana deja de atender. Con un modelo local, sigue,
    mientras tu computadora esté prendida.
- **"Qué deja de afectarte: caídas de servicio, cambios de precio, deprecación de modelos, límites de rate."**
  **Deprecación** es cuando una empresa anuncia que un modelo se deja de ofrecer. **Límites de rate** ("de ritmo")
  son los topes de pedidos por minuto: el **429** de la Semana 4.
  - *Ejemplo:* En la Semana 6, con el plan gratis de Gemini, un agente podía dar 429 por hacer muchos pedidos
    seguidos. Ollama no tiene ese límite: el único límite es la velocidad de tu máquina.
- **"Podés operar sin internet: valioso para demos, entornos de desarrollo aislados o lugares con conectividad
  limitada."** Una **demo** es una demostración. Un **entorno aislado** es una computadora que, a propósito, no está
  conectada a internet. **Conectividad limitada** es internet que anda mal o se corta.
  - *Ejemplo:* Mostrarle tu automatización a un cliente en un lugar sin WiFi. O un campo en el interior, con internet
    que va y viene.
- **"El resumen: pasás de consumidor de APIs a dueño de tu propia infraestructura de IA."**
  - *Ejemplo:* Es la diferencia entre alquilar y tener la casa propia: más control, pero el mantenimiento es tuyo.

#### Filmina 11 · La contrapartida: nada de esto es gratis (3 min)

<p style="color:#1a7f37">Ahora la contra. Los modelos que entran en una computadora común son más chicos. Y en tareas de razonamiento complejo rinden menos que los grandes de la nube, los de OpenAI, Claude o Gemini. Es un toma y daca: costo y privacidad de un lado, inteligencia del otro. Depende del caso, no hay una respuesta única.</p>

Para explicar:
- **"El límite del hardware de consumo: los modelos que corren ahí suelen ser más pequeños."** **Hardware de
  consumo** es el que compra cualquier persona: una notebook, una PC de escritorio. Lo contrario son los servidores
  de las empresas de IA, con placas de video que cuestan miles de dólares cada una.
  - *Ejemplo:* En una notebook de 8 GB entra un modelo de 3B. Los de la nube se estiman en cientos de miles de
    millones de parámetros: cien veces más grandes, o más.
- **"Dónde se nota: en tareas de razonamiento complejo tienden a rendir por debajo de los modelos de punta en la
  nube."** **Razonamiento complejo** es lo que necesita varios pasos: resolver un problema, planificar, usar bien
  varias herramientas. **De punta** es "lo mejor que hay hoy".
  - *Ejemplo:* Probado para esta clase: le pedimos a `llama3.2:1b` qué llevar a Bariloche en invierno, y recomendó
    "un casco ligero" y "un reloj suave y resistente al frío". El de 3B respondió bien: ropa abrigada, botas de nieve.
- **"Los de punta: GPT-4o, Claude, Gemini."** Son ejemplos de modelos grandes de la nube. (La filmina nombra GPT-4o,
  que ya tiene versiones más nuevas: lo importante es la idea.)
- **"El trade-off: costo y privacidad de un lado, capacidad bruta del modelo del otro. Depende del caso, no hay una
  respuesta única."** **Capacidad bruta** es la inteligencia pura del modelo.
  - *Ejemplo:* Clasificar mails en "urgente" o "no urgente": un modelo local alcanza. Analizar un contrato de 40
    páginas y detectar cláusulas peligrosas: conviene uno grande, si la privacidad lo permite.

**Ejemplo: elegir según la tarea**

❌ Mal: elegir siempre lo mismo.

```text
"Todo con Ollama, porque es gratis."     → el agente con 5 herramientas se equivoca seguido.
"Todo con la nube, porque es mejor."     → las historias clínicas viajan a otra empresa.
```

✅ Bien: elegir por paso.

```text
Paso con datos sensibles y tarea simple (clasificar, resumir corto)  → local.
Paso sin datos sensibles y tarea difícil (razonar, varias herramientas) → nube.
```

Por qué: en un mismo flujo puede haber pasos de los dos tipos. Es el criterio que arman en el Paso 5 de la práctica.

#### Filmina 12 · Para pensar: el banco y la clínica (5 min) — Ejercicio 1

<p style="color:#1a7f37">Trabajás para un banco y tenés que resumir quejas de clientes que incluyen números de tarjeta. O para una clínica que tiene prohibido por ley subir historias clínicas a la nube. ¿Por qué usarías Ollama y no un modelo en la nube? Respondan en el chat: elijan uno de los dos casos y den el argumento en una línea.</p>

Para explicar:
- **La dinámica.** Les das 2 minutos para escribir. Después leés tres o cuatro respuestas en voz alta. El material de
  lectura propone hacerlo en grupos de 3 durante 20 minutos: no entra en la clase, así que es individual y por el
  chat.
  - *Ejemplo de respuesta buena:* "La clínica: si la ley prohíbe subir los datos, la única forma de usar IA es que el
    modelo esté adentro de la clínica."
- **Las tres preguntas del material de lectura** (si sobra un minuto, las tirás en voz alta):
  - ¿Qué tamaño de modelo elegirían? → Para resumir, alcanza con uno de 7B u 8B; mejor que el de 3B si hay plata para
    la máquina.
  - ¿Qué hardware mínimo necesitarían? → Una computadora con 16 GB de RAM, o mejor, una placa de video de 8 GB o
    más.
  - ¿Cómo garantizarían que n8n no mande datos afuera? → Que n8n también esté en una máquina de la clínica, que el
    único modelo conectado sea el de Ollama, y que no haya nodos que manden los datos a otro servicio (Gmail, Slack).
  - *Ejemplo:* Un flujo con Ollama que, al final, manda el resumen por Gmail, saca los datos igual. La privacidad es
    de todo el flujo, no solo del modelo.

<p style="color:#1a7f37">Y una trampa: que el modelo sea local no alcanza si el flujo, después, manda el resumen por mail a una cuenta de Gmail. La privacidad es del flujo entero, no de un nodo.</p>

---

### 35–60 · Sección 02 · Ollama y los modelos

**Filmina 13 · Separador "02: Ollama y los modelos"**

<p style="color:#1a7f37">Ya sabemos por qué. Ahora, con qué: Ollama, los modelos y cómo elegir uno que nuestra computadora aguante.</p>

#### Filmina 14 · ¿Qué es Ollama? El reproductor, no la canción (3 min)

<p style="color:#1a7f37">Un modelo de lenguaje es un archivo gigante con lo que la IA aprendió. Para usarlo hace falta algo que lo cargue en la memoria y te deje preguntarle. Eso es Ollama: un programa que descarga, guarda y hace funcionar modelos de IA en tu propia computadora, sin depender de internet ni de una empresa. El modelo es la canción; Ollama es el reproductor.</p>

Para explicar:
- **"El problema: un modelo de lenguaje es un archivo gigante con conocimiento entrenado. Para usarlo hace falta algo
  que lo cargue en memoria y te deje preguntarle."** **Cargar en memoria** es pasar el archivo del disco a la
  **memoria RAM**, la memoria rápida de la computadora, la que se usa mientras algo está abierto. Un modelo no se
  puede usar desde el disco: es demasiado lento.
  - *Ejemplo:* Es como un libro: guardado en la biblioteca (el disco) no sirve; para leerlo, hay que tenerlo abierto
    sobre la mesa (la RAM). Y un libro gigante necesita una mesa grande.
- **"Eso es Ollama: un programa que descarga, guarda y hace funcionar modelos de IA en tu propia computadora."** Tres
  verbos: **descarga** (los baja de internet), **guarda** (los deja en el disco, listos) y **hace funcionar** (los
  carga y responde las preguntas).
  - *Ejemplo:* `ollama pull llama3.2` lo descarga y lo guarda; `ollama run llama3.2` lo hace funcionar.
- **"Sin depender de: internet ni de una empresa externa."** Internet hace falta una sola vez, para la descarga.
  - *Ejemplo:* Es como un mapa del GPS descargado: hace falta internet para bajarlo, pero después anda en el medio de
    la ruta sin señal.
- **"La analogía: el modelo es la canción, el archivo. Ollama es el reproductor que la hace sonar."**
  - *Ejemplo:* Con Spotify instalado pero sin canciones, no suena nada. Con Ollama instalado pero sin modelos, no
    responde nada: es el error de la pregunta 4 del cuestionario.

#### Filmina 15 · ¿Qué es un modelo? Un archivo pesado con lo aprendido (3 min)

<p style="color:#1a7f37">El modelo contiene todo lo que la IA aprendió en su entrenamiento. Pesa varios gigas. Su tamaño se mide en parámetros: cuantos más, más capaz, pero más pesado de correr. Y hay de distintas especialidades: generalistas, para programar, para conversar.</p>

Para explicar:
- **"Qué contiene: todo lo que la IA aprendió durante su entrenamiento."** El **entrenamiento** es el proceso en el
  que la empresa le mostró al modelo enormes cantidades de texto. Lo que "aprendió" quedó guardado como números.
  - *Ejemplo:* El modelo no tiene adentro una copia de Wikipedia. Tiene millones de números que, combinados, le
    permiten escribir sobre lo que leyó.
- **"Cuánto pesa: varios GB. No es poco."** Un **GB** (gigabyte) es una unidad de tamaño de archivos: una película
  en buena calidad pesa unos 2 GB.
  - *Ejemplo:* `llama3.2` pesa 2 GB; `llama3.2:1b`, 1,3 GB. Uno de 70B pesa más de 40 GB.
- **"Su tamaño: se mide en parámetros. Cuanto más grande, más capaz, pero más pesado de correr."** Los **parámetros**
  son esos números internos. Se cuentan en miles de millones: la **B** viene de *billion*, que en inglés son mil
  millones.
  - *Ejemplo:* `llama3.2` tiene 3B: 3.200 millones de parámetros. Le podés preguntar a Ollama con `ollama show
    llama3.2` y te lo dice: *parameters 3.2B*.
- **"Su especialidad: hay generalistas, otros optimizados para código, otros para conversación."** **Optimizado** es
  "ajustado para hacer algo mejor".
  - *Ejemplo:* `llama3.2` es generalista. `qwen2.5-coder` está entrenado para programar. Hay modelos que también
    entienden imágenes.

#### Filmina 16 · Elegir por hardware: el límite es la memoria, no el saber (5 min) — Ejercicio 2

<p style="color:#1a7f37">Esta es la tabla para elegir. De 1 a 3B, entre 4 y 8 GB de memoria: una notebook común. De 7 a 8B, entre 8 y 16 GB: una notebook con 16 de RAM. De 13 a 14B, entre 16 y 24: una PC con buena placa de video. Y de ahí para arriba, equipos de gama alta o servidores. El límite no es cuánto sabe el modelo, es cuánta memoria tenés.</p>

Para explicar:
- **La tabla, fila por fila** (la de la filmina, con un ejemplo de qué se puede hacer con cada una):

| Tamaño | Memoria | Equipo típico | Modelos | Qué se puede hacer |
|---|---|---|---|---|
| 1 a 3B | 4 a 8 GB | Notebook sin placa de video | `llama3.2`, `llama3.2:1b`, Qwen2.5 1.5B, Phi-3 mini, Gemma2 2B | Clasificar, resumir corto, extraer datos simples |
| 7 a 8B | 8 a 16 GB | Notebook de 16 GB, placa de video común | Llama 3.1 8B, Mistral 7B, Qwen2.5 7B | Redactar bien, resumir textos largos, herramientas simples |
| 13 a 14B | 16 a 24 GB | PC con placa tipo RTX 4070 o 4080 | Qwen2.5 14B | Razonar mejor, agentes con varias herramientas |
| 32 a 34B | 24 a 40 GB | Placa de gama alta, o varias | Qwen2.5 32B, Mixtral | Cerca de los modelos de la nube en muchas tareas |
| 70B o más | 48 GB o más | Servidor con placas de datacenter | Llama 3.3 70B | Para empresas |

- **La memoria que importa es la RAM o la VRAM.** La **VRAM** es la memoria de la **placa de video** (o **GPU**, la
  parte de la computadora pensada para gráficos, que resulta muy buena para la IA). Si el modelo entra en la VRAM,
  vuela. Si no hay placa, Ollama usa el **procesador** (la **CPU**) y la RAM: funciona, pero más lento.
  - *Ejemplo:* Probado para esta clase, sin placa de video: `llama3.2` ocupó **2,6 GB** de memoria y respondió una
    pregunta corta en 9 segundos.
- **La memoria de la tabla es de la máquina entera.** El modelo no está solo: también están Windows, el navegador,
  Docker con n8n y el Zoom.
  - *Ejemplo:* En una notebook de 8 GB, Windows y el navegador ya usan 4 o 5. Quedan 3: entra justo `llama3.2`.
- **Corrección de la filmina:** dice "Llama 3.1/3.2 8B". El de 8B es **Llama 3.1**; Llama 3.2 viene en 1B y 3B (son
  los que usamos hoy).
- **Por qué entran: los modelos vienen comprimidos.** A eso se le dice **cuantizar** (en inglés, *quantized*):
  guardar cada número con menos precisión para que ocupe menos, como una foto en JPG en vez del original. Se pierde
  un poco de calidad, casi nada.
  - *Ejemplo:* `ollama show llama3.2` dice *quantization Q4_K_M*: cada número guardado en unos 4 bits en vez de 16.
    Sin comprimir pesaría más de 6 GB; comprimido, 2 GB.

**Ejercicio 2 · ¿Qué modelo te entra?** (2 min)

<p style="color:#1a7f37">Fíjense cuánta RAM tiene su computadora: en Windows, Configuración, Sistema, Información; en Mac, el menú de la manzanita, Acerca de esta Mac. Escriban en el chat cuánta tienen y qué tramo de la tabla les toca.</p>

Respuestas esperables: "8 GB → 1 a 3B, `llama3.2`"; "16 GB → hasta 7 u 8B, pero hoy usamos el de 3B para que ande
rápido"; "4 GB → el de 1B, y cerrando todo lo demás".

#### Filmina 17 · Cinco detalles: lo que conviene tener claro (3 min)

<p style="color:#1a7f37">Cinco detalles. Ollama es el motor, no un modelo. Los modelos se descargan aparte. El tamaño importa: más grande, mejores respuestas, pero más memoria. Ollama queda escuchando para que otras aplicaciones, como n8n, le pidan respuestas. Y una vez descargado el modelo, no hace falta internet.</p>

Para explicar:
- **"Ollama es el motor: no es un modelo en sí mismo."** Un **motor** es lo que hace andar algo, pero no es el auto
  entero.
  - *Ejemplo:* Instalar Ollama y escribir `ollama run` sin haber bajado nada: no responde, porque falta el modelo.
- **"Los modelos se descargan aparte: cada uno con sus propias características."** Se eligen de la biblioteca de
  ollama.com (sección *Models*).
  - *Ejemplo:* `ollama pull llama3.2`, `ollama pull mistral`, `ollama pull gemma2:2b`. Cada uno, una descarga.
- **"El tamaño importa: más grande da mejores respuestas, pero pide más memoria y potencia."**
  - *Ejemplo:* El de 1B tarda menos y ocupa menos, pero recomendó un casco para ir a Bariloche. El de 3B, no.
- **"Ollama queda escuchando: en tu computadora, para que otras apps como n8n le puedan pedir respuestas."**
  **Escuchar** es quedar atento a pedidos, como el webhook de la Semana 4. Ollama escucha en el **puerto 11434** (un
  **puerto** es como el número de departamento de un edificio: la computadora es el edificio, y cada programa atiende
  en su número). Ollama tiene una **API**, como la de dolarapi.com, pero adentro de tu máquina.
  - *Ejemplo:* Abrís `http://localhost:11434` en el navegador y aparece **Ollama is running** ("Ollama está
    funcionando").
- **"No hace falta internet: una vez que el modelo ya está descargado."**
  - *Ejemplo:* Lo comprobamos en el Paso 3, apagando el WiFi.

**En la terminal, paso a paso** (lo mostrás en tu terminal mientras lo contás, 1 min):

```text
EN LA TERMINAL · Los comandos de Ollama
ollama --version          → qué versión está instalada (si responde, Ollama está)
ollama pull llama3.2      → descargar un modelo (sin usarlo)
ollama run llama3.2       → usarlo: abre un chat; para salir, escribí /bye
ollama list               → qué modelos tengo descargados y cuánto pesa cada uno
ollama ps                 → qué modelos están cargados en memoria ahora
ollama stop llama3.2      → sacarlo de la memoria (sigue descargado)
ollama rm llama3.2        → borrarlo del disco
```

Lo que se ve: `ollama list` muestra una tabla con `NAME`, `SIZE` y la fecha; `ollama ps` muestra el modelo cargado,
cuánta memoria usa y si corre en la CPU o en la GPU (`100% CPU`). Después de 5 minutos sin uso, Ollama lo saca solo
de la memoria.

#### Filmina 18 · Ollama es el Spotify de la IA (1 min)

<p style="color:#1a7f37">No es la canción: es el reproductor que la hace sonar. Ollama es el Spotify de la IA.</p>

Para explicar:
- **La frase para llevarse.** Si se acuerdan de una sola cosa de la teoría, que sea esta.
  - *Ejemplo:* Spotify: la app, la biblioteca de canciones, bajar las que querés para escucharlas sin internet.
    Ollama: el programa, la biblioteca de modelos, bajar los que querés para usarlos sin internet.

**Ejemplo: la confusión número uno**

❌ Mal: "instalé Ollama, ya tengo la IA".

```text
PS> ollama run llama3.2
pulling manifest ...      ← recién ahí empieza a bajar 2 GB, porque no estaba
(sin internet: Error: pull model manifest ...)
```

✅ Bien: instalar el motor y después bajar el modelo.

```text
PS> ollama pull llama3.2     ← una vez, con internet
PS> ollama list               ← confirmar que está
NAME               SIZE
llama3.2:latest    2.0 GB
PS> ollama run llama3.2      ← ahora sí, con o sin internet
```

#### Filmina 19 · Coder Tips: localhost adentro de Docker (3 min)

<p style="color:#1a7f37">Atención con esto, que es el error más común de hoy. Si n8n corre en Docker y Ollama en tu sistema, localhost no funciona: adentro del contenedor, localhost apunta al contenedor mismo. Hay que poner host.docker.internal, dos puntos, 11434. Y si n8n está en la nube, directamente no puede ver tu Ollama.</p>

Para explicar:
- **Qué es localhost, otra vez.** En la Semana 2 dijimos: **localhost** es "esta misma computadora". El problema es
  quién dice "esta". Un contenedor de Docker es como una computadora aparte, adentro de la tuya (la caja de la Semana
  2). Si n8n, adentro de su caja, dice "localhost", se refiere a la caja, no a tu computadora. Y Ollama no está en la
  caja.
  - *Ejemplo:* Es como estar en un departamento y decir "tocá el timbre de esta casa": tocás el del departamento, no
    el del edificio.
- **`host.docker.internal`** es el nombre que Docker Desktop le da a tu computadora, vista desde adentro de la caja.
  **Host** es "anfitrión": la máquina que hospeda a los contenedores.
  - *Ejemplo:* n8n en Docker: `http://host.docker.internal:11434`. n8n instalado sin Docker: `http://localhost:11434`.
- **n8n en la nube no ve tu Ollama.** n8n Cloud está en una computadora de la empresa n8n; tu Ollama está en tu casa.
  No hay forma directa de que se encuentren.
  - *Ejemplo:* Los que usan n8n Cloud hoy hacen la instalación y las pruebas en la terminal, y el puente lo miran en
    mi pantalla. Si quieren hacerlo, instalan n8n en Docker con la guía de la Semana 2.

**En n8n, paso a paso** (lo mostrás en tu n8n mientras lo contás, 1 min):

```text
EN N8N · La credencial de Ollama
1. Pantalla de inicio → pestaña Credentials → Create credential
2. Buscá "Ollama" → elegí Ollama
3. Base URL:
   n8n en Docker            → http://host.docker.internal:11434
   n8n instalado sin Docker → http://localhost:11434
4. API Key: dejala vacía (Ollama en tu máquina no pide clave)
5. Save → tiene que aparecer "Connection tested successfully"
```

Lo que se ve: si la *Base URL* está mal, en vez del mensaje verde aparece un error de conexión. Lo vamos a ver en la
práctica.

**Ejemplo: la Base URL**

❌ Mal: n8n en Docker con `localhost`.

```text
Base URL: http://localhost:11434
→ la credencial no conecta, y el nodo falla con "fetch failed": n8n busca a Ollama adentro de su propio
  contenedor, y ahí no hay nadie.
```

✅ Bien: n8n en Docker con `host.docker.internal`.

```text
Base URL: http://host.docker.internal:11434
→ Connection tested successfully
```

---

### 60–70 · Break

**Filmina 20 · Break** (10 min)

<p style="color:#1a7f37">Diez minutos de break. Los que todavía no instalaron Ollama: empiecen ahora la descarga, ollama.com, Download. Y los que ya lo tienen, abran una terminal y dejen n8n prendido.</p>

---

### 70–113 · Sección 03 · Práctica en vivo

**Filmina 21 · Separador "03: Práctica en vivo"**

#### Filmina 22 · Ejemplo en vivo: instalación y primer prompt local (1 min)

<p style="color:#1a7f37">Ahora lo hacemos. Yo voy a mostrar Ollama andando, la pregunta desde la terminal, cuánto sube la memoria, y después apago el WiFi y el modelo sigue respondiendo. Los que llegaron con Ollama instalado, lo hacen a la par. Los que no, miran y lo hacen en casa con el Ejercicio 3.</p>

La demo de la filmina son los Pasos 1 a 3, hechos por vos con la clase siguiendo.

#### La práctica: qué vamos a armar (para decirlo una vez)

<p style="color:#1a7f37">Cinco pasos. Uno: el motor, Ollama corriendo. Dos: el modelo, bajarlo y preguntarle. Tres: sin internet. Cuatro: el puente, n8n hablando con Ollama. Y cinco: el mismo prompt al modelo local y al de la nube, para comparar.</p>

1. Compartís [ejercicios-alumnos.md](ejercicios-alumnos.md). Pegás en el chat:

```text
PRÁCTICA · Semana 7
Vamos a seguir el Ejercicio 3 de ejercicios-alumnos.md.
Si llegaste con Ollama y llama3.2 instalados: hacé los pasos a la par.
Si no: mirá mi pantalla; lo hacés en casa con el mismo paso a paso.
Si usás n8n Cloud: los Pasos 1 a 3 los podés hacer; el 4 miralo en mi pantalla.
```

#### Paso 1 · El motor (70–76)

2. **Filmina 23.** Decís:

<p style="color:#1a7f37">Paso uno: tener Ollama corriendo. Se descarga del sitio oficial, se instala como cualquier programa y queda escuchando en la computadora.</p>

3. Mostrás **ollama.com** → **Download**: las tres opciones (Windows, Mac, Linux). No instalás de nuevo: ya lo tenés.
   Mostrás el ícono de la llama al lado del reloj. Decís:

<p style="color:#1a7f37">El instalador es como el de cualquier programa: siguiente, siguiente. No pide ser administrador. Cuando termina, aparece esta llamita al lado del reloj: eso quiere decir que Ollama está funcionando de fondo, esperando pedidos. Las versiones nuevas abren también una ventanita de chat; la pueden cerrar, Ollama sigue andando.</p>

4. **Verificar que escucha.** En PowerShell, con letra grande:

```text
PS> ollama --version
ollama version is 0.40.15
```

Y en el navegador, `http://localhost:11434`: aparece **Ollama is running**. Decís:

<p style="color:#1a7f37">Dos pruebas. La terminal responde con la versión: el programa está instalado. Y el navegador, en el puerto 11434, dice "Ollama is running": está escuchando. Es la misma idea que n8n en el puerto 5678. Ese número, 11434, lo vamos a necesitar en el Paso 4.</p>

5. **El monitor de recursos.** **Ctrl + Shift + Esc** → **Rendimiento** → **Memoria**. Lo dejás en un costado de la
   pantalla. Pegás en el chat:

```text
PRÁCTICA · Paso 1: el motor
1. ollama.com → Download → instalalo
2. En PowerShell (o Terminal):  ollama --version
3. En el navegador:  http://localhost:11434  → "Ollama is running"
4. Abrí el monitor de memoria y dejalo a la vista:
   Windows: Ctrl + Shift + Esc → Rendimiento → Memoria
   Mac: Monitor de Actividad → Memoria
```

<p style="color:#1a7f37">Miren cuánta memoria están usando ahora, antes de cargar ningún modelo. Anótenlo: después comparamos.</p>

**Plan B:** si `ollama --version` dice *no se reconoce como nombre de un cmdlet*, cerrá PowerShell y abrí otra: la
terminal que estaba abierta no se enteró de la instalación.

#### Paso 2 · El modelo (76–85)

6. **Filmina 24.** Decís:

<p style="color:#1a7f37">Paso dos: elegir y bajar el modelo que su equipo aguanta. Con la tabla del Ejercicio 2: 8 gigas, llama3.2; 4 gigas, el de 1B.</p>

7. **La descarga en vivo**, con el modelo chico (el grande ya lo tenés):

```text
PS> ollama pull llama3.2:1b
pulling manifest
pulling 74701a8c35f6: 100% ▕████████████████▏ 1.3 GB
...
success
```

<p style="color:#1a7f37">Esto es lo único que necesita internet: bajar el archivo. 1,3 gigas. Con buena conexión, dos o tres minutos. Mientras baja, sigamos.</p>

8. **La primera pregunta**, con el que ya tenés, mirando el monitor de memoria:

```text
PS> ollama run llama3.2 "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
```

Mientras piensa, señalás la memoria subiendo. Decís:

<p style="color:#1a7f37">Miren la memoria: subió unos dos gigas y medio. Es el modelo, que pasó del disco a la memoria. Y tarda, sobre todo la primera vez: no es un error, es la computadora haciendo todo el trabajo que antes hacía Google.</p>

Respuesta real (Ollama 0.40, sin placa de video; tardó casi 3 minutos la primera vez):

```text
Para visitar Bariloche en invierno, te recomiendo llevar:
* Ropa cálida y acogedora, como chaquetas, guantes y gorras para protegerte del viento y la lluvia.
* Un par de botas de nieve o senderismo para navegar por los senderos nevados ...
* Un kit de primeros auxilios básico y un cargador portátil ...
```

9. **La segunda pregunta**, ya cargado:

```text
PS> ollama run llama3.2 "¿Cuál es la capital de Mendoza? Una línea."
La capital de Mendoza es Mendoza.
```

<p style="color:#1a7f37">Nueve segundos. La segunda vez no tiene que cargar nada: el modelo ya estaba en memoria. Por eso la primera respuesta siempre tarda más.</p>

10. **`ollama ps`**:

```text
PS> ollama ps
NAME               SIZE      PROCESSOR    CONTEXT    UNTIL
llama3.2:latest    2.6 GB    100% CPU     4096       4 minutes from now
```

<p style="color:#1a7f37">Esto dice qué modelo está cargado: llama3.2, ocupando 2,6 gigas, corriendo cien por ciento en el procesador, porque esta máquina no tiene placa de video. Y "4 minutes from now": si nadie le pregunta nada en cinco minutos, Ollama lo saca de la memoria solo.</p>

11. Pegás en el chat:

```text
PRÁCTICA · Paso 2: el modelo
1. Bajá tu modelo:  ollama pull llama3.2     (4 GB de RAM: ollama pull llama3.2:1b)
2. Comprobá:  ollama list
3. Preguntá (mirando la memoria):
   ollama run llama3.2 "Sos la asesora de una agencia de viajes. En 3 líneas, recomendale a un cliente qué llevar para ir a Bariloche en invierno."
4. Preguntá otra cosa y compará el tiempo
5. ollama ps  → ¿cuánta memoria usa? ¿CPU o GPU?
Escribí en el chat: cuánto tardó la primera y cuánto la segunda.
```

12. Leés tiempos del chat en voz alta. Van a ser muy distintos: el que tiene placa de video, segundos; el que tiene
    8 GB y el navegador lleno, minutos. Decís:

<p style="color:#1a7f37">¿Ven las diferencias? Es la tabla de la filmina 16 en vivo: el mismo modelo, en máquinas distintas, tarda distinto. Con una placa de video, vuela. Sin placa, anda, pero con paciencia.</p>

**Si a alguien le sale `signal: killed` o `model requires more system memory`:** no le alcanza la memoria. Que cierre
pestañas y programas, que haga `ollama stop` del modelo que no usa, o que baje el de 1B. Al probar esta clase pasó
exactamente eso: con el de 1B todavía cargado, el de 3B se cortó con `signal: killed`.

#### Paso 3 · Sin internet (85–90)

13. **Filmina 25.** Decís:

<p style="color:#1a7f37">Paso tres: comprobar que la autonomía es real y no un discurso. Voy a apagar el WiFi. Ojo: el Zoom también se corta, así que me van a perder unos segundos. Romina sigue con ustedes.</p>

14. Apagás el WiFi. Preguntás:

```text
PS> ollama run llama3.2 "Escribí un saludo de bienvenida para un cliente que llega a Salta. Dos líneas."
```

Responde. Lo mostrás (si el Zoom se reconectó) o lo contás al volver. Prendés el WiFi.

<p style="color:#1a7f37">Respondió sin internet. El modelo está en el disco, el motor en la computadora: no hay nadie más en el medio. Es el GPS con el mapa descargado.</p>

15. Pegás en el chat:

```text
PRÁCTICA · Paso 3: sin internet
1. Apagá el WiFi
2. ollama run llama3.2 "Escribí un saludo de bienvenida para un cliente que llega a Salta. Dos líneas."
3. ¿Respondió? ¿Cuánto tardó?
4. Prendé el WiFi de nuevo
```

<p style="color:#1a7f37">Y fíjense en el tiempo: anótenlo. La latencia, el tiempo que tarda en responder, es el precio de la autonomía. No es un error: es procesamiento.</p>

**Plan B:** si no querés cortar tu Zoom, mostrá un video corto grabado antes con la prueba, o pedile a un alumno que
lo haga y cuente el resultado por el chat cuando vuelva.

#### Paso 4 · El puente (90–103)

16. **Filmina 26.** Decís:

<p style="color:#1a7f37">Paso cuatro, el más importante: que n8n le hable a nuestro Ollama. Es la misma Basic LLM Chain de la semana pasada, pero con el cerebro de Ollama.</p>

17. **La credencial.** Pegás en el chat:

```text
PRÁCTICA · Paso 4: la credencial
1. n8n → Credentials → Create credential → buscá "Ollama" → Ollama
2. Base URL:
   n8n en Docker            → http://host.docker.internal:11434
   n8n instalado sin Docker → http://localhost:11434
3. API Key: vacía · nombre: Ollama local → Save
4. Tiene que decir "Connection tested successfully"
```

18. Lo hacés a la par. **Primero, a propósito, con `http://localhost:11434`**: aparece el error de conexión. Decís:

<p style="color:#1a7f37">Lo hice mal a propósito. Mi n8n está en Docker, y puse localhost. Adentro de la caja de Docker, localhost es la caja misma, y ahí no hay ningún Ollama. Es el Coder Tip de antes. Lo cambio por host.docker.internal...</p>

Lo cambiás → **Save** → *Connection tested successfully*.

<p style="color:#1a7f37">...y ahora sí. host.docker.internal es la forma de decir, desde adentro de la caja, "la computadora de afuera".</p>

19. **El flujo.** Pegás en el chat:

```text
PRÁCTICA · Paso 4: el flujo
1. Workflow nuevo → nombre: Hola Ollama
2. Add first step → Trigger manually
3. + → Edit Fields (Set) → Add Field → name: pregunta → value: (la pregunta de Bariloche del Paso 2)
   Renombralo: La pregunta
4. + → buscá "basic llm" → Basic LLM Chain
   Source for Prompt: Define below · Prompt: arrastrá "pregunta" desde la izquierda
   Renombralo: Preguntarle al modelo local
5. Abajo del nodo, en Chat Model: + → Ollama Chat Model
   Credencial: Ollama local · Model: llama3.2:latest
6. Execute workflow
```

20. Lo hacés a la par. Mientras corre, mostrás dos cosas:
    - el **Administrador de tareas**: la memoria sube;
    - el **registro de Ollama**: clic derecho en el ícono de la llama → **View logs** → abrís `server.log` (en Mac,
      `~/.ollama/logs/server.log`). Al final aparece una línea por cada pedido de n8n:

```text
[GIN] 2026/11/07 - 13:36:57 | 200 |  1m0s |  172.18.0.3 | POST "/api/chat"
```

<p style="color:#1a7f37">Esta línea es n8n hablándole a Ollama. POST, como en la Semana 4: n8n le manda un pedido a la API de Ollama, en la dirección /api/chat. El 200 es "salió bien". El minuto es lo que tardó. Y esa dirección, 172.18 punto algo, es el contenedor de n8n. Todo pasa adentro de mi computadora.</p>

21. La salida del flujo (real, del flujo de la carpeta `n8n/`, 71 segundos la primera vez):

```json
{
  "text": "Excelente elección! Para disfrutar de Bariloche en invierno, te recomiendo llevar:\n\n* Ropa cálida y acogedora, como chaquetas, gorras, guantes y calcetines de lana ...\n* Un buen par de botas impermeables ... para caminar en la nieve y en la ladera de Cerro Campanario.\n* Un kit de primeros auxilios y un teléfono con batería extra ..."
}
```

<p style="color:#1a7f37">Ahí está: el hola mundo de n8n con un modelo local. El mismo nodo de la semana pasada, el mismo casillero text en la salida. Lo único que cambió es el cerebro de abajo. Y ninguna palabra salió de mi computadora.</p>

**Plan B:** el flujo **01 · Hola mundo: n8n + Ollama** es este mismo paso, terminado. Solo hay que elegir la
credencial.

#### Paso 5 · Comparar (103–113)

22. **Filmina 27.** Decís:

<p style="color:#1a7f37">Último paso: entender qué ganamos y qué perdemos. El mismo prompt al modelo local y a Gemini, y comparamos calidad, tiempo y costo. Y cada uno decide, para su caso, cuál conviene.</p>

23. Abrís el flujo **02 · Comparar: el mismo prompt, local y en la nube** (ya importado y con las dos credenciales).
    Mostrás el prompt en *El mismo prompt*: una familia con un nene que quiere ir 5 días a Salta en julio. Pegás en
    el chat:

```text
PRÁCTICA · Paso 5: comparar
1. Importá 02-local-vs-nube.json (carpeta n8n/ de la semana)
2. Credencial de Ollama en "Cerebro local: Ollama" y de Gemini en "Cerebro nube: Gemini"
3. Execute workflow (dos veces: la primera, el local carga el modelo)
4. En "Juntar las dos", completá la tabla del Paso 5 del Ejercicio 3
```

24. **Execute workflow.** Abrís *Juntar las dos*: dos items, uno por modelo, con `modelo`, `segundos`, `costo` y
    `respuesta`. Leés en voz alta la del modelo local. La de la prueba (llama3.2, 26 segundos):

```text
Hola! Salta en julio es una excelente elección. Recomiendo visitar el Cerro del Comandante, el Mercado de Artesanías
y el Lago Milicia. No olvides llevar ropa fresca y protector solar, ya que el sol es intenso en esa época. ...
```

Preguntás en el chat: *"¿Ven algo raro?"*. Lo que tienen que encontrar:
- el "Lago Milicia" **no existe**: el modelo lo inventó. Y el cerro famoso de la ciudad es el **San Bernardo**, no
  "del Comandante";
- "ropa fresca" en **julio**, que en Salta es invierno, con noches frías;
- no dice nada del nene ni arma un plan de 5 días.

(En otra prueba, el mismo modelo ubicó el **Teatro Colón en Salta**.) Después leés la de Gemini, que va a ser más
precisa y más completa.

<p style="color:#1a7f37">Esto es la contrapartida de la filmina 11, en vivo. El modelo chico escribe lindo y con seguridad, pero inventa. Para recomendar lugares a un cliente, no alcanza. Para clasificar un mail en tres categorías, quizás sí. Por eso la pregunta no es "¿cuál es mejor?", sino "¿cuál conviene para este paso?".</p>

25. **El criterio.** Pegás en el chat:

```text
PRÁCTICA · El criterio: ¿local o nube para este paso?
¿Hay datos sensibles (salud, tarjetas, documentos)?      → sí: local (o tapar los datos antes)
¿La tarea es simple (clasificar, extraer, resumir corto)? → sí: local alcanza
¿Tiene que saber cosas del mundo o razonar varios pasos?  → sí: nube
¿Tiene que responder rápido (un chat, WhatsApp)?          → sí: nube, o una máquina potente
¿Se ejecuta miles de veces o hay que probar mucho?        → sí: local ahorra plata

Escribí en el chat, para TU flujo de la pre-entrega: ¿local o nube? ¿Por qué?
```

26. Leés tres o cuatro respuestas.

<p style="color:#1a7f37">No hay una respuesta única: depende del paso. Y en un mismo flujo pueden convivir los dos. Lo importante es que lo decidan ustedes, con argumentos, y no por costumbre.</p>

**Plan B:** si Gemini da **429** (el límite del plan gratis), ejecutalo de nuevo en un minuto, o mostrá solo la rama
local y leé la respuesta de Gemini que guardaste al probarlo antes de la clase.

#### Las trabas más comunes durante la práctica

| Lo que escriben en el chat | Qué les respondés |
|---|---|
| "*ollama* no se reconoce como nombre de un cmdlet" | Cerrá PowerShell y abrí otra. Si sigue, Ollama no se instaló: volvé a correr el instalador. |
| "`http://localhost:11434` no carga" | Ollama no está corriendo. Buscá "Ollama" en el menú Inicio y abrilo: aparece la llama al lado del reloj. |
| "Se queda girando y no responde" | Es la primera carga: puede tardar varios minutos en una máquina sin placa de video. Mirá el monitor: si la memoria está al 100 %, cerrá programas. |
| "`signal: killed`" o "*model requires more system memory*" | No alcanza la memoria. Cerrá pestañas, `ollama stop` de otro modelo cargado, o usá `llama3.2:1b`. |
| "`ollama run` se puso a descargar" | El modelo no estaba descargado: `run` lo baja solo. Es el "instalé Ollama, ya tengo la IA" de la filmina 18. |
| La credencial da error de conexión, o el nodo dice **`fetch failed`** | n8n en Docker con `localhost`. Cambiá la *Base URL* por `http://host.docker.internal:11434`. |
| "Uso n8n Cloud y no conecta" | n8n Cloud no puede ver tu computadora. Hacé los Pasos 1 a 3 y el 4 miralo; en casa, n8n en Docker con la guía de la Semana 2. |
| "En *Model* no aparece ningún modelo" | La credencial no conecta, o no bajaste ninguno. Probá `ollama list`. |
| **`model 'llama3' not found`** (en n8n o en la terminal) | El nombre tiene que ser exacto, el de `ollama list`: `llama3.2:latest`, no `llama3`. |
| La respuesta está en inglés o es rara | Es un modelo chico. Pedí "respondé en español" en el prompt, y no esperes la calidad de Gemini. |
---

### 113–117 · Cómo sigue y la tarea

#### Filmina 28 · ¿Cómo sigue? Del laboratorio al canal real (2 min)

<p style="color:#1a7f37">Lo que ya tienen: un agente que puede correr con un modelo en la nube o en su propia máquina. Lo que le falta: un canal por donde la gente le hable de verdad. El Módulo 8 es WhatsApp Business, con la API de Meta y n8n. El mismo agente, pero atendiendo mensajes reales de personas reales.</p>

Para explicar:
- **"Lo que ya tenés: un agente que puede correr con un modelo en la nube o en tu propia máquina."** El cerebro es
  una pieza que se cambia: hoy lo vimos con una chain, y en el Ejercicio 7 lo hacen con Ana.
  - *Ejemplo:* Ana con Gemini, o Ana con `llama3.2`. Mismas herramientas, mismo system prompt.
- **"Lo que le falta: un canal por donde la gente le hable de verdad."** Un **canal** es el medio por donde llegan
  los mensajes: el chat de prueba de n8n, un formulario, WhatsApp.
  - *Ejemplo:* Hasta ahora, a Ana le escribimos solo nosotros, desde el botón *Open chat* de n8n.
- **"Módulo 8: WhatsApp Business, con Meta Cloud API y n8n."** **Meta** es la empresa dueña de WhatsApp. La **Meta
  Cloud API** es su API para que un programa mande y reciba mensajes de WhatsApp.
  - *Ejemplo:* Un cliente escribe al WhatsApp de la agencia, n8n recibe el mensaje, Ana responde.
- **"La conexión: el mismo agente, pero atendiendo mensajes reales de personas reales."** Y ahí aparece una decisión
  de hoy: para responder rápido por WhatsApp, ¿alcanza un modelo local?
  - *Ejemplo:* Al preparar esta clase, la Ana local (`llama3.2`, sin placa de video) tardó más de 5 minutos en
    responder y, además, inventó el precio en pesos. Para WhatsApp, eso no sirve: conviene la nube, o un modelo
    local más grande en una máquina potente.

**La tarea** (2 min, sin filmina). Pegás en el chat:

```text
TAREA · Semana 7 (no hay pre-entrega)
1. Si no llegaste en clase: instalá Ollama y bajá llama3.2 (Ejercicio 3, Pasos 1 a 4).
2. Ejercicio 4: dos tamaños, la misma pregunta.
3. Ejercicios 5 y 6: quejas privadas, y tapar los datos antes de la IA.
4. Ejercicio 7: Ana con cerebro local. Anotá en qué se equivoca: te sirve para elegir el cerebro de la Pre-entrega 4.
5. El cuestionario del módulo en la plataforma (4 preguntas).
```

<p style="color:#1a7f37">Esta semana no hay pre-entrega, pero la que viene es la cuarta: el asistente de WhatsApp. El Ejercicio 7 les deja el agente listo con los dos cerebros, para elegir con datos y no a ojo.</p>

---

### 117–120 · Preguntas y cierre

**Filmina 29 · Abrimos micrófonos y chat** (2 min)

<p style="color:#1a7f37">¿Cuánta RAM libre tienen y qué tramo de modelo les entra? ¿A alguien le dio error de conexión entre n8n y Ollama? Puede ser Docker. ¿Tienen algún caso donde la privacidad sea el argumento decisivo? Abrimos micrófonos y chat.</p>

Para explicar:
- **Si alguien quedó con el puente sin andar**, que pegue en el chat su *Base URL* y dónde corre su n8n. Nueve de
  cada diez veces es `localhost` con n8n en Docker.
- **Si alguien tiene un caso de privacidad**, es material para la pre-entrega: el paso con datos sensibles va local,
  y el resto puede ir a la nube.

**Filmina 30 · Gracias** (1 min)

<p style="color:#1a7f37">Gracias por estudiar con nosotros. Nos vemos la semana que viene con WhatsApp.</p>

---

### Checklist de salida

- [ ] Todos saben la diferencia entre Ollama (el motor) y un modelo (el archivo).
- [ ] Cada uno sabe qué tramo de modelo le entra según su RAM.
- [ ] Los que llegaron instalados: hicieron una pregunta en la terminal y vieron subir la memoria.
- [ ] Vieron (en tu pantalla o en la suya) que el modelo responde sin internet.
- [ ] La mayoría conectó n8n con Ollama, y los que no, saben cuál es su traba (Base URL, n8n Cloud, falta de
  memoria).
- [ ] Vieron la comparación local contra nube y saben que la elección es por paso, no para todo el flujo.
- [ ] Saben que la semana que viene es WhatsApp y la Pre-entrega 4.

---

### Glosario de la clase

| Término | En criollo | Ejemplo |
|---|---|---|
| **IA local** | Un modelo de IA que funciona en tu propia computadora, no en la de una empresa. | `llama3.2` en Ollama. |
| **La nube** | Las computadoras de una empresa, a las que nos conectamos por internet. | Gemini, en los servidores de Google. |
| **Ollama** | El programa que descarga, guarda y hace funcionar modelos de IA en tu computadora. El reproductor. | `ollama run llama3.2` |
| **Modelo** | El archivo con lo que la IA aprendió. La canción. | `llama3.2`, 2 GB. |
| **Parámetros** | Los números internos del modelo. Más parámetros, más capaz y más pesado. | 3B = 3.000 millones. |
| **B** | *Billion*: mil millones, en inglés. | `llama3.2:1b`: mil millones de parámetros. |
| **Inferencia** | Cada vez que el modelo genera una respuesta. | Cada ejecución de la Basic LLM Chain. |
| **Entrenamiento** | Cuando la empresa le enseña al modelo con muchísimo texto. Nosotros no lo hacemos. | — |
| **Token** | Un pedacito de texto, como tres cuartos de una palabra. Las APIs cobran por token. | "Bariloche" son 2 o 3 tokens. |
| **Trade-off** | Un toma y daca: ganar algo resignando otra cosa. | Privacidad a cambio de inteligencia. |
| **Hardware** | La parte física de la computadora. | Procesador, memoria, disco, placa de video. |
| **RAM** | La memoria rápida, la que se usa mientras algo está abierto. El modelo tiene que entrar ahí. | 8 GB, 16 GB. |
| **CPU** | El procesador. Puede correr el modelo, pero más lento. | `100% CPU` en `ollama ps`. |
| **GPU** / **placa de video** | La parte pensada para gráficos; es muy rápida para la IA. | Una NVIDIA RTX 4070. |
| **VRAM** | La memoria de la placa de video. Si el modelo entra ahí, vuela. | 8 GB de VRAM. |
| **Cuantizar** (*quantized*) | Comprimir el modelo guardando sus números con menos precisión, para que ocupe menos. | `Q4_K_M`: 2 GB en vez de 6. |
| **Latencia** | El tiempo que tarda en llegar la respuesta. | 9 segundos. |
| **Puerto** | El "número de departamento" en el que atiende un programa dentro de la computadora. | Ollama: 11434. n8n: 5678. |
| **Localhost** | "Esta misma computadora". Adentro de un contenedor, es el contenedor. | `http://localhost:11434` |
| **host.docker.internal** | El nombre de tu computadora visto desde adentro de un contenedor de Docker. | `http://host.docker.internal:11434` |
| **Base URL** | La dirección base de una API: a partir de ella se arman todos los pedidos. | La de la credencial de Ollama. |
| **Terminal** | La ventana donde se escriben comandos. | PowerShell, Terminal de Mac. |
| **Comando** | Una orden escrita en la terminal. | `ollama list` |
| **Deprecación** | Cuando un proveedor anuncia que un modelo deja de ofrecerse. | "Este modelo deja de funcionar en tal fecha." |
| **Límite de rate** | El tope de pedidos por minuto de una API. Si lo pasás: 429. | El plan gratis de Gemini. |
| **Datos sensibles** | Los que pueden hacer daño si se filtran. La ley los protege más. | Salud, tarjetas, documentos. |
| **Canal** | El medio por donde llegan los mensajes al agente. | WhatsApp, el chat de n8n. |
