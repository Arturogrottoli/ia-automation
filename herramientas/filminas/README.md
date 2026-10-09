# Generador de filminas (clases 3 a 16)

Las presentaciones `Clase 3/Clase03.html` a `Clase 16/Clase16.html` se generan con estos scripts.
Reutilizan el CSS y la navegación de `Clase 1/Clase01.html`, así que todas tienen el mismo formato que
las clases 1 y 2.

- `lib.js`: las piezas (portada, separadores, tarjetas, tablas, diagramas de flujo, break, dudas) y la
  función que arma el archivo y numera las filminas.
- `m2.js` … `m8.js`: el contenido de cada módulo (dos clases por archivo). El contenido sale del README
  de cada clase, que a su vez sale de `IA Automation.pdf`.
- `check.js`: prepara una copia que reporta si algo se sale del cuadro de 1280×720.

## Cómo regenerar

Desde esta carpeta, con Node instalado:

```
node m2.js      # regenera Clase03.html y Clase04.html
node m5.js      # regenera Clase09.html y Clase10.html
```

**Ojo:** regenerar pisa el HTML. Si editás una presentación a mano, hacé el mismo cambio en el `mN.js`
correspondiente, o dejá de regenerar esa clase.

Las clases 1 y 2 no se generan con esto: se editan directamente.
