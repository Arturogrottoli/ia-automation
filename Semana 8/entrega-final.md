# Entrega Final · Tu asistente autónomo, desplegado

La consigna oficial está en `program-summary.pdf` (páginas 45 a 48). Acá está la misma consigna, explicada punto por
punto, con un ejemplo y con lo que ya tenés hecho del curso para cada parte.

**La presentamos en la última clase (Semana 8). La Semana 9 no tiene clase: es para armarla y entregarla.**

---

## En pocas palabras

Elegís un negocio (real, inventado o el tuyo) que pierde tiempo haciendo algo a mano, siempre igual. Armás en n8n un
asistente con IA que lo resuelve: recibe mensajes, consulta datos, decide qué hacer y responde. Lo dejás **andando
solo** (desplegado) y lo entregás en un **repositorio** (una carpeta en internet, en GitHub) con el flujo, una
explicación y capturas.

**No arrancás de cero:** el asistente de la Semana 8 + la planilla y el dólar de la Semana 6 ya son casi todo. El
ejemplo que tiene la forma del proyecto final es el **flujo 08** de la Semana 8 (Ana por WhatsApp con las
herramientas de la Semana 6).

---

## Los 7 requisitos, en criollo

| # | Lo que pide | Qué quiere decir | Ejemplo con la agencia "Rumbo Sur" |
|---|---|---|---|
| 1 | **Caso de negocio con ROI** | Qué tarea manual automatizás, cuánto tiempo o plata cuesta hoy, y hasta dónde conviene. **ROI** (*return on investment*) = cuánto te ahorra comparado con lo que cuesta armarlo y mantenerlo. | "Llegan 40 consultas por día de '¿cuánto sale?'. Una persona tarda 3 min en cada una: 2 h por día. El bot cuesta unos USD 5 por mes de Gemini. Deja de convenir si llegan 2 consultas por semana." |
| 2 | **Dos fuentes de entrada distintas** | El flujo recibe o busca datos de dos lugares diferentes. | Los mensajes del chat (WhatsApp o Telegram) **y** la planilla de paquetes en Google Sheets (y la API del dólar, si querés tres). |
| 3 | **Lógica con criterio** | Cada nodo está por una razón. No suman puntos los nodos de más. Lo explicás con **notas adhesivas** (*sticky notes*, Shift + S). | El IF *¿Es texto?* está para que una foto no rompa el agente: lo dice una nota al lado. |
| 4 | **Un AI Agent, no un nodo de IA simple** | Un agente con system prompt completo (rol, alcance, tono, qué puede y qué no, qué hace si no entiende) que **toma una decisión** (elige una herramienta, clasifica, deriva). Y explicás por qué no alcanzaba un *Basic LLM Chain*. | Ana decide si consulta la planilla, si busca el dólar, o si le pasa la conversación a un vendedor. Un nodo simple solo escribiría texto. |
| 5 | **Modelo local o nube, justificado** | Elegís Ollama (en tu máquina) o Gemini (en la nube) y explicás por qué: costo según cuántos mensajes, privacidad de los datos, depender o no de una empresa. | "Gemini: son consultas de precios, sin datos sensibles, y en el celular la respuesta tiene que llegar en segundos." |
| 6 | **Una salida a un lugar real** | El resultado llega a algún lugar que alguien usa: un mensaje de WhatsApp o Telegram, un mail, una fila en una planilla, un evento en el calendario. Si es un chat, el prompt tiene que tener el tono del chat: corto, informal, y pasar a una persona cuando hace falta. | La respuesta de Ana en el chat, y una fila en "Consultas de la agencia" cuando el cliente quiere reservar. |
| 7 | **Errores y casos límite** | Mostrás **al menos dos** lugares donde algo puede salir mal y cómo lo prevé tu flujo. | 1) Una foto: el IF la manda a una respuesta fija. 2) La API del dólar no responde: el prompt dice "si no tenés la cotización, no inventes, decí que lo consulta un vendedor". |

### ¿Tiene que ser WhatsApp?

La consigna se llama "asistente de WhatsApp", pero el requisito 6 dice **"si usás WhatsApp Business"**: el canal
puede ser otro. Si Meta no te deja avanzar (la cuenta, el número, el token), **Telegram** sirve igual: es el mismo
asistente con otra entrada y otra respuesta (flujo `09-asistente-telegram.json` de la Semana 8, y el Ejercicio 0-B).
Contá en el README por qué elegiste ese canal.

### ¿Qué quiere decir "desplegado"?

Que anda **sin que vos estés mirando**: el flujo está **publicado** (botón *Publish*), tiene una dirección https que
no cambia y las credenciales no vencen.

- **n8n Cloud:** ya tiene dirección pública. Es lo más fácil.
- **n8n en Docker, en tu computadora:** hace falta un túnel con dirección fija (ngrok con su dominio gratis) y la
  computadora prendida mientras el bot atiende. Está en el Ejercicio 5 de la Semana 8.
- **WhatsApp:** el token tiene que ser el de **usuario del sistema** (no vence), no el de 24 horas (Ejercicio 5).
- **Telegram:** el token del bot no vence. Solo hay que publicar el flujo.

---

## Cómo se entrega: un repositorio

Un **repositorio** (o "repo") es una carpeta en internet, en una página como **GitHub**, donde subís los archivos del
proyecto. Se entrega **el link** al repo.

### Qué tiene que tener

```text
mi-proyecto-final/
├── README.md                         ← la explicación (abajo tenés un modelo)
├── workflow-asistente.json           ← tu flujo, descargado de n8n
└── capturas/
    ├── canvas.png                    ← el flujo entero en pantalla
    └── ejecucion.png                 ← una ejecución que salió bien (en verde)
```

### Paso a paso (sin instalar nada)

```text
1. El flujo: en n8n, abrí tu workflow → menú … (arriba a la derecha) → Download → se baja un .json
2. ABRÍ ese .json con el Bloc de notas y buscá (Ctrl + F) "key", "token", "password" y "Bearer":
   si aparece una clave escrita a mano en un nodo, borrala. (n8n no exporta las credenciales, pero sí
   lo que pegaste a mano en un campo.)
3. Las capturas: Windows + Shift + S → el canvas entero, y una ejecución exitosa (pestaña Executions)
4. github.com → Sign up (si no tenés cuenta) → botón "+" arriba a la derecha → New repository
   → nombre: proyecto-final-ai-automation → Public → marcá "Add a README file" → Create repository
5. Add file → Upload files → arrastrá el .json y las capturas → Commit changes
6. Clic en README.md → el lápiz (Edit) → pegá tu README (el modelo de abajo) → Commit changes
7. Copiá el link del repo (la barra de direcciones) y entregalo en la plataforma
```

**Para que las capturas se vean en el README:** si las subiste sueltas, escribí `![Canvas](canvas.png)`. Si las
pusiste en una carpeta, `![Canvas](capturas/canvas.png)`. (Para crear la carpeta desde la web: *Add file → Upload
files* y, antes de subir, arrastrá la carpeta entera.)

---

## Modelo de README (copialo y completalo)

````markdown
# Asistente de [nombre del negocio]

## 1. El caso de negocio
- **Qué hace hoy una persona a mano:** ...
- **Cuánto cuesta:** ... consultas por día × ... minutos = ... horas por semana.
- **Por qué conviene automatizarlo:** ...
- **Hasta dónde conviene (límite del ROI):** deja de convenir si ...

## 2. Cómo funciona
[captura del canvas]
1. Entrada 1: ... (por ejemplo, el mensaje de Telegram)
2. Entrada 2: ... (por ejemplo, la planilla de precios en Google Sheets)
3. El agente decide: ...
4. La salida: ...

## 3. Por qué un AI Agent y no un nodo de IA simple
...

## 4. El modelo: local o nube
- **Elegí:** ...
- **Por qué:** costo (...), privacidad (...), independencia (...).

## 5. Qué puede salir mal y cómo lo prevé el flujo
1. ... → ...
2. ... → ...

## 6. El system prompt completo
```text
[pegá acá el System Message del agente, entero]
```

## 7. Una ejecución de prueba
[captura de una ejecución en verde, con la pregunta y la respuesta]
````

---

## Checklist antes de entregar

- [ ] El repo tiene el `.json` del flujo, descargado de n8n, **sin claves escritas a mano**.
- [ ] El README explica el caso de negocio, el ROI y hasta dónde conviene.
- [ ] El README justifica el modelo (local o nube).
- [ ] El README explica por qué hace falta un agente.
- [ ] El system prompt está completo, en un bloque de código.
- [ ] Hay capturas del canvas y de una ejecución que salió bien.
- [ ] El flujo tiene **dos entradas distintas**, **un AI Agent** y **al menos un camino de error** (un IF, un
  límite en el prompt o una validación antes de actuar).
- [ ] Le mandaste una foto, un pedido imposible y escribiste desde dos chats a la vez, y no se rompió.

## Cómo se corrige

| Qué se mira | Cuánto vale |
|---|---|
| **El flujo en n8n:** anda y junta bien las piezas pedidas | 50 % |
| **El agente y el modelo:** system prompt ordenado y la elección del modelo justificada | 25 % |
| **Los errores:** qué pasa con fallas, mensajes raros o una API caída | 15 % |
| **El caso de negocio:** el problema, el ROI y por qué vale la pena automatizarlo | 10 % |

Son 100 puntos y se aprueba con **70**. La mitad de la nota es que el flujo ande: primero que funcione, después se
pule.

---

## Palabras que aparecen acá

| Palabra | Qué es |
|---|---|
| **ROI** | *Return on investment*, "retorno de la inversión": cuánto te ahorra algo comparado con lo que cuesta. |
| **Desplegar** | Dejar el sistema funcionando para que lo use otra gente, sin que estés mirando. |
| **Repositorio (repo)** | Una carpeta en internet (en GitHub, por ejemplo) con los archivos de un proyecto. |
| **GitHub** | La página más usada para guardar y compartir repositorios. Es gratis. |
| **README** | El archivo que explica el proyecto. GitHub lo muestra solo, abajo de la lista de archivos. |
| **Commit** | "Guardar un cambio" en el repo. Cada vez que subís o editás algo, GitHub te pide confirmar con *Commit changes*. |
| **Sticky note** | La nota adhesiva de n8n (Shift + S) para explicar una parte del flujo. |
| **Telegram / BotFather** | Una app de mensajería parecida a WhatsApp. BotFather es el bot oficial de Telegram con el que se crean bots. |
