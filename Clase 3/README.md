# Clase 3 — No-Code vs Low-Code + Costos y estructuras de datos (JSON)

**Módulo 2 · Ecosistema No-Code y Low-Code** (primera mitad)
Duración: ~1 h 45 · Fuente: `IA Automation.pdf`, unidades 1 y 2 del Módulo 2

> Base de contenido: el PDF. Este módulo se evalúa en la **Pre-Entrega 2 (Estructura de Datos JSON y
> Matriz Estratégica)**, que se presenta en la clase 4. El cuadro comparativo No-Code vs Low-Code y las
> demás actividades son práctica guiada (no evaluable).

---

## Objetivos de la clase

Al terminar, cada alumno puede:

1. Explicar la diferencia entre No-Code y Low-Code y cuándo conviene cada uno.
2. Leer el modelo de costos de una herramienta: Tasks (Zapier), Operations (Make) y Tokens (OpenAI).
3. Reconocer Objetos `{ }` y Arrays `[ ]` y escribir un JSON válido.
4. Salir con el **stack elegido** para su proceso, una **estimación de costos** y la **lista de variables**.

---

## Preparación previa (docente)

- [ ] Tener abierto [jsonlint.com](https://jsonlint.com) para la micro-práctica.
- [ ] Tener a mano los números del proyecto ejemplo (consultas por mes, módulos del escenario) para la demo de costos.
- [ ] Copiar el JSON roto de la micro-práctica (abajo) para pegarlo en el chat.

---

## Agenda

| Min | Tramo | Contenido |
|---|---|---|
| 0–10 | Apertura | Repaso del Módulo 1 y dudas de la PE1 |
| 10–45 | **Bloque A — No-Code vs Low-Code** | Unidad 1 del PDF |
| 45–58 | Práctica 1 | Elegir el stack de su proceso |
| 58–63 | Micro-pausa | |
| 63–93 | **Bloque B — Costos y JSON** | Unidad 2 del PDF + micro-práctica en jsonlint |
| 93–105 | Práctica 2 + cierre | Estimar costos y listar variables |

---

## 0–10 · Apertura

- Repaso: el Módulo 1 dejó el **mapa** (el diagrama). Ahora empezamos a elegir las herramientas y a empaquetar los datos.
- Dudas sobre la PE1 (entrega recomendada antes de la clase 5).

## 10–45 · Bloque A — Diferencias clave entre No-Code y Low-Code

**Disparador de la charla, la cocina:**
- **No-Code** es comprar una cocina modular pre-diseñada: todo encaja, solo elegís dónde va cada módulo. Rápido, pero limitado a lo que diseñó el fabricante.
- **Low-Code** es una cocina semi-industrial: módulos base, pero podés soldar piezas, cambiar conexiones de gas, sumar ventilación a medida. Necesitás herramientas y conocimiento, y el resultado es exactamente lo que tu negocio necesita.

**Contenido (según el PDF):**

- **No-Code, la democratización de la creación:** crear apps, sitios o automatizaciones sin escribir código. Interfaz visual, *drag and drop*. "Si sabés usar PowerPoint o Canva, podés usar No-Code."
  - **Por qué explotó:** antes, guardar adjuntos en Drive y avisar por Slack requería un programador y un script. Hoy, quien conoce el problema es quien construye la solución.
  - **Ejemplo:** un administrativo de una inmobiliaria recibe 50 solicitudes por día. Con Zapier, en 10 minutos: el dato va a Google Sheets → se envía un mail de bienvenida → se crea un recordatorio para llamar en 24 h.
- **Low-Code, potencia con un toque de personalización:** visual y con bloques, pero permite (o exige) pequeños fragmentos de código. Para quien tiene base técnica mínima o necesita integraciones profundas o seguridad empresarial.
  - **Cuándo aparece:** cuando los bloques se quedan cortos. Ej.: el mail de bienvenida tiene que incluir un cálculo complejo con el presupuesto del cliente y datos de mercado de una fuente sin conector. Ahí escribís una pequeña función.
- **¿Cuál elegir según tu rol?**
  - **Freelancer o dueño de negocio → No-Code.** Ej.: facturación con Stripe + contabilidad + correo, todo con conectores estándar.
  - **Marketer en una startup que crece → Low-Code.** Ej.: los leads vienen de una base antigua sin conector; se usa n8n o Retool y un poco de JavaScript.
- **Ejemplo de justificación (es el tipo de texto de la PE2):**
  > "Para automatizar mi facturación elijo una solución No-Code como Make o Zapier. En cuanto a velocidad,
  > puedo conectar Stripe, mi software de contabilidad y el correo en una sola tarde usando conectores
  > estándar, sin depender de un desarrollador. En flexibilidad, no necesito nada a medida: el proceso es
  > estable y se repite igual todos los meses, así que los bloques preconstruidos me alcanzan de sobra. Y en
  > límites técnicos, mi volumen es bajo (unas decenas de facturas por mes), muy por debajo de los topes de
  > ejecución del plan básico. Pasar a Low-Code solo agregaría complejidad y costo sin ningún beneficio real
  > para este caso."
- **Errores y trampas conceptuales:**
  1. *"No-Code significa cero límites."* El negocio crece y la plataforma "no te deja". **Mejor práctica:** preguntate *"¿qué es lo más complejo que mi proceso tendrá que hacer en 6 meses?"*.
  2. *"Low-Code es igual de fácil que No-Code."* Aparecen API, JSON, Webhooks, variables de entorno. Hay que entender cómo fluye la información.
  3. *El "código oculto".* El código siempre está, escondido bajo la interfaz. Si la plataforma falla, dependés del proveedor: **vendor lock-in**.
- **Síntesis:** no son enemigos, son escalones. **No-Code para la agilidad, Low-Code para la escalabilidad.** La IA ayuda a cruzar el puente: *"Escribime un código simple en JavaScript para extraer el nombre de este texto."*

**Demo con el proyecto ejemplo (inmobiliaria de alquileres temporarios):** pensá en voz alta qué elegirías para cada parte:
- recibir consultas del formulario, calificarlas con IA y avisar → **No-Code (Make)**: conectores estándar, volumen moderado;
- un agente que consulta el catálogo vía API y decide con varias herramientas → **Low-Code (n8n)**, que es lo que veremos en el Módulo 4.

## 45–58 · Práctica 1 — Elegí el stack de tu proceso

**Consigna:** con el proceso del Módulo 1:

1. Desglosá sus pasos (los rectángulos de tu diagrama).
2. Para cada paso, ¿alcanza con un conector estándar o hace falta algo a medida?
3. Decidí: **No-Code (Zapier/Make) o Low-Code (n8n)**, y anotá 2 o 3 razones usando **flexibilidad, velocidad y límites técnicos**.

> Esto es el borrador del párrafo de justificación de la PE2 (mínimo 100 palabras).

## 63–93 · Bloque B — Costos, límites de ejecución y estructuras de datos

**Disparador de la charla:** creás un flujo espectacular (Gmail → IA → Sheets → Slack) y a fin de mes te llega una factura de 200 USD porque no calculaste el pago por uso. O el flujo se frena porque la IA no entiende la lista que le mandaste.

**Contenido (según el PDF):**

### 1. Modelos de costos

| Herramienta | Unidad | Cómo cuenta |
|---|---|---|
| **Zapier** | Task | Cada acción exitosa. El trigger normalmente no suma. Email → Excel = 1 task. |
| **Make** | Operation | Cada paso. Email (1) + Excel (1) = 2 operations. Por eso los paquetes de Make son más grandes. |
| **OpenAI** | Token | "Pedazos de palabras": 1.000 tokens ≈ 750 palabras. Pagás lo que enviás (input) y lo que responde (output). |

- **Analogía del Uber:** la suscripción es tener la app; la ejecución es el viaje; los tokens o tasks son los kilómetros. Un resumen de 2 líneas es un viaje corto; un PDF de 50 páginas, uno largo.
- **Rate limits, los semáforos:** un plan gratuito de IA puede permitir 3 solicitudes por minuto. Si mandás 100 mails de golpe, el sistema te frena y el proceso falla.

### 2. JSON, el idioma de la automatización

- **Objeto `{ }`, la "ficha personal":** información de una sola cosa, en pares **clave: valor**.
  ```json
  { "nombre": "Laura Pérez", "email": "laura@email.com", "es_cliente_vip": true, "puntos_acumulados": 150 }
  ```
- **Array `[ ]`, la "lista de compras":** varias cosas del mismo tipo. `["Diseño Logo", "Redacción SEO", "Gestión Ads"]`
- **Anidamiento, el sistema de carpetas:** un objeto que contiene un array de objetos.
  ```json
  {
    "fecha": "2026-05-10",
    "vendedor": "Carlos Ruiz",
    "ventas_realizadas": [
      {"producto": "Suscripción Mensual", "monto": 29.99},
      {"producto": "Pack Iconos", "monto": 15.00},
      {"producto": "Asesoría 1h", "monto": 50.00}
    ],
    "total_dia": 94.99
  }
  ```
  Entender las "fichas dentro de carpetas" es lo que después permite armar filtros avanzados en Make.

### 3. Casos reales

- **Marketer freelance:** usaba el modelo más caro para 5 ideas de posts × 20 clientes cada lunes. Pasó al modelo chico (GPT-4o-mini), ~90 % más barato con el mismo resultado.
- **Administrativo de PYME:** el CRM no tiene integración. Con un Webhook y un JSON básico (nombre + teléfono) se conecta con casi cualquier software.

### 4. Errores comunes

- **Bucle infinito:** un flujo "mail → fila en Sheets" y otro "fila en Sheets → mail". Consume todas las operaciones en minutos.
- **IA de lujo para tareas básicas:** no uses el modelo más caro para corregir ortografía.
- **JSON sin comillas dobles:** ❌ `{nombre: "Juan"}` ✅ `{"nombre": "Juan"}`
- **Confundir `{ }` con `[ ]`:** llaves para describir una cosa; corchetes para una lista.

### Micro-práctica en vivo: validá un JSON roto (5 min)

Pegá esto en el chat y que lo validen en jsonlint.com:

```
{ 'fecha': '2026-05-10', "vendedor": "Carlos Ruiz", "ventas_realizadas": [ {"producto": "Suscripción Mensual", "monto": 29.99}, {"producto": "Pack Iconos", "monto": 15.00}, ], "total_dia": 44.99 }
```

- **Los dos errores:** comillas simples en `'fecha'` y `'2026-05-10'`, y la coma huérfana después del último producto.
- **Lo que importa del mensaje de error** es el número de línea.
- **Ojo:** jsonlint valida la **sintaxis**, no la lógica. El `total_dia` dice 44.99 y la suma real da otra cosa: "Valid JSON" igual. Los datos los revisás vos.
- **Remarcá:** esto es el **40 % de la PE2** ("El archivo JSON es 100 % válido en jsonlint.com").

**Demo con el proyecto ejemplo, la cuenta de costos:** el escenario de Make del Módulo 3 (formulario → OpenAI → router → Airtable → Slack) usa unas 5 operaciones por consulta. Con 300 consultas por mes son ~1.500 operaciones: **se pasa del plan gratuito de Make (1.000)**. Preguntá al grupo cómo lo resolverían (filtrar antes de llamar a la IA, agrupar, plan pago). Verificá los límites vigentes del plan gratuito antes de dar el número.

**Síntesis (según el PDF):** los costos son la gasolina; las estructuras de datos, los contenedores de carga. *"Automático no significa gratuito."*

## 93–105 · Práctica 2 + cierre

**Consigna** sobre su proceso:

1. **Estimá el costo:** ¿cuántas veces por mes corre? ¿cuántos pasos tiene? Multiplicá y compará con el plan gratuito.
2. **Listá las variables:** qué datos viajan por el flujo (ej. `nombre`, `email`, `presupuesto`, `fechas`). Marcá cuáles son listas (van a ser arrays).

**Tarea para la clase 4:** traer la lista de variables. En la clase 4 se arma la base y el JSON.

**Material para profundizar:** el PDF no trae links en estas unidades; sirven [jsonlint.com](https://jsonlint.com) y las páginas de precios de Make y Zapier.

---

## Checklist de salida

- [ ] Todos eligieron No-Code o Low-Code con 2–3 razones.
- [ ] Todos hicieron la micro-práctica en jsonlint.
- [ ] Todos tienen una estimación de costos y la lista de variables de su proceso.
