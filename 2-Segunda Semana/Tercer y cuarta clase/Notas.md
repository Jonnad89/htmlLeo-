En Css podemos aplicar colores con diferentes notaciones:

- Nombre de color: red, blue, green
- Hexadecimal: #ff0000
- RGB: rgb(255, 0, 0)
- RGBA (transparencia): rgba(255, 0, 0, 0.5)
- HSL: hsl(0, 100%, 50%)

Tipografías:
- Las tipografías se aplican con font-family
- Se puede usar unna fuente especifica o una genérica (sans-serif, serif, etc)
- Se puede importar fuentes con Google 

Unidades de medida:
Absolutas:
- px: píxeles(fijos)
- cm, mm, in (rara vez usadas en pantallas)

Relativas:
- %: relatvo al elemento padre
- em: relativo al tamaño del texxto del elemento padre
- rem: relativo al tamaño del texto base (html)
- vw, vh: relativo al ancho/alto de la ventana


** Visibilidad:
overflow:
- visible: Muestra el contenido aunque se salga
- hidden: oculta lo que desborda
- scroll: fuerza barra de scroll
- auto: barra sólo si es necesaria

** Posicionamiento:

static -> por defecto, sigue el flujo normal
relative -> se puede mover respecto a su posición original
absolute -> se posiciona respecto al primer contenedor con position: relattive o body
fixed -> se queda fijo en pantalla al hacer scroll
sticky -> se comporta como relative hasta llegar a cierto punto del scroll