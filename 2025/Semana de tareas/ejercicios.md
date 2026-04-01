Consigna del Proyecto: “Panel Interactivo”

Crea una página web que cumpla con lo siguiente:

Un input de texto donde el usuario escriba su nombre.

Cuando el input tenga foco (focus), muestra debajo “Estás escribiendo tu nombre”.

Cuando pierda el foco (blur), borra ese mensaje.

Un botón “Cambiar color”.

Cuando el usuario pase el mouse por encima (mouseover), el fondo del botón cambia de color.

Cuando salga del botón (mouseout), vuelve al color original.

Cuando haga click (click), el fondo de la página cambia a un color aleatorio.

Un contador de teclas.

En todo el documento (document), cada vez que se presione una tecla (keydown), incrementa un contador y muéstralo en pantalla.

Detectar scroll.

Cuando el usuario haga scroll en la página, muestra en la parte superior el número de píxeles que se ha desplazado.


===================================================

Consigna del Proyecto: “Contador Interactivo”

Crea una página con:

Un texto que muestre un número.

Un botón “Sumar” que incremente el número cada vez que se hace click.

Un botón “Restar” que lo decremente.

Un input de texto para escribir un color; cuando se pierda el foco (blur), el color de fondo de la página cambia a ese color.

=====================================================

Consigna del Proyecto: “Galería de imágenes con cambio de tamaño”

Crea una página web que tenga:

Un título y un contenedor con varias imágenes pequeñas.

Al hacer click en cualquier imagen, se debe agrandar (aplicar un estilo CSS diferente) y si vuelves a hacer click, vuelve a su tamaño original.

Debajo, un botón que al hacer click muestre/oculte todas las imágenes (toggle).

==================================================

Objetivo:
Crear un sitio web estilo Facebook muy simplificado que tenga:

Página de Login:

Un formulario con usuario y contraseña.

Si las credenciales son correctas (por ejemplo, usuario: admin y contraseña: 1234), redirigir a una “página de inicio”.

Página de Inicio (estilo Facebook sin imágenes):

Un encabezado con el nombre del sitio.

Un formulario para escribir un “estado” (un texto).

Debajo, mostrar todos los estados publicados, como un muro.

Cada vez que se publica un estado, se agrega arriba del muro.

Estilos agradables con CSS.

Colores claros, cajas centradas.

Botones estilizados.

Sin usar imágenes ni frameworks.

Restricciones:
– Podes usar HTML, CSS y JavaScript puro.
– Usa solamente el evento click para el envío de formularios.
– No uses bases de datos: guarda los estados en un array en JS.

📝 Estructura del proyecto

Tendrás dos archivos HTML:

login.html (página de inicio de sesión)

home.html (la “página estilo Facebook”)

Y un archivo CSS y JS cada uno, o bien un único CSS y JS compartid

=========================================================================
Consigna: “Mini-Notas Online”

Crea una página web en la que un usuario pueda guardar, ver y eliminar notas.
Las notas se guardarán en localStorage para que, aunque recargues la página, sigan ahí.

Requisitos

Formulario para agregar notas

Un input de texto para el título de la nota.

Un textarea para el contenido de la nota.

Un botón “Agregar nota”.

Listado de notas guardadas

Cada nota debe mostrarse con su título y contenido.

Debe tener un botón “Eliminar” para borrar sólo esa nota.

Persistencia

Las notas deben guardarse en localStorage para que al recargar la página sigan apareciendo.

Estilo

Usar CSS para hacer tarjetas de notas (.nota) con borde, padding y un color suave de fondo.

Poner las notas en un grid responsive (por ejemplo, dos columnas en desktop, una en móvil).