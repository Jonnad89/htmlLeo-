El objetivo es construir una interfaz visualmente impresionante que simule un tocadiscos o reproductor de música con un disco de vinilo girando.

Estructura Base: Usar CSS Grid o Flexbox para organizar los elementos principales (controles, información, el disco).

El Disco (El Centro del Desafío):

1. Crear un círculo con la textura de un vinilo o un degradado para simularlo.

Aplicar una animación CSS de rotación infinita (@keyframes y transform: rotate()).

Usar un Pseudo-elemento (::before o ::after) para simular la etiqueta central del disco.

Brazos del Reproductor: Crear un brazo de aguja (un rectángulo transformado) que se mueva con CSS Transition o Transform cuando se presiona "Play".

Botones de Control: Estilizar botones modernos usando sombras (box-shadow) y transiciones de color.

2. Funcionalidades Clave de JavaScript
Control Play/Pause: Al presionar el botón "Play", debe:

Añadir una clase al disco (.girando) que active la animación CSS.

Cambiar la clase de la aguja para que se mueva sobre el disco.

Información Dinámica: Actualizar la carátula, el título y el artista de la canción actual.

Controles de Navegación: Implementar la lógica para el botón "Siguiente Canción" que actualice la información y simule la carga de un nuevo vinilo.

