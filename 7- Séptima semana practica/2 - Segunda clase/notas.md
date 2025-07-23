PÁGINA PARA PRACTICAR FLEXBOX
https://flexboxfroggy.com

Box model - Modelo de caja

el modelo de caja es la base de cómo CSS renderiza los elementos. Cada elemento visual ocupa un espacio rectangular.

- margin -> espacio exterior
- padding -> espacio interior
- border -> borde del elemento
- box-sizing -> cómo se calcula el ancho/alto total

BOX-SIZING

¿qué va a pasar?

.box-content: el tamaño total va a ser más grande que 200x100px, porque ell padding y el borde se suman.

.box-border: el tamaño total se mantiene en 200x100px, porque el contenido se ajusta para que todo encaje en ese tamaño.

            POSICIONAMIENTO

static -> posición por defecto (flujo normal del documento)

relative -> se posiciona en relación a si mismo, puede moverse con top, left.

absolute -> se posiciona respecto al ancestro posicionado más cercano

fixed -> fijo en la pantalla (como una barra que siempre queda visible)

sticky -> se comporta como relative pero se vuelve fijo al hacer scroll

Explicación del ejemplo en html:
- El div.elemento-absolute se posiciona en relación al div.contenedor-relative porque esté último tiene position: relative.

- Si el contenedor no tuviera position: relative, el absolute se posicionaría respecto al body.



            FLEXBOX

display: flex;

flex-direction -> dirección de los elementos (row, column)

justify-content -> alinea horizontalmente 

align-items -> alinea verticalmente

gap -> espaciado entre los hijos

flex-wrap -> permite que los elementos bajen de linea

** Propiedades de los hijos

flex-grow -> hece que un item crezca si hay espacio

flex-shrink -> permite que un item se achique

flex-basis -> tamaño base antes de aplicar grow/shrink

order -> cambia el orden visual sin alterar el html



            GRID

grid-template-column -> define las columnas por  ejemplo:  200px 200px o 1fr 2fr

grid-template.rows -> define las filas (opcional, similar a las columnas)

gap -> espaciado entre columnas

place-items -> centra contenido vertical y horizontal

grid-template-areas -> asigna nombre de areas y disposición visual del contenedor

grid-template-columns: 1fr 1fr -> columnas iguales

grid-column: span 2 -> ocupando varias columnas

layout por nombres de áreas

