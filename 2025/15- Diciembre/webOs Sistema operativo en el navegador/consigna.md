El objetivo es simular la interfaz básica de un sistema operativo (escritorio, ventanas, barra de tareas) utilizando solo HTML para la estructura, CSS para la apariencia y la posición, y JavaScript para la interactividad y la lógica de las aplicaciones.


1. Escritorio y Barra	Crear la estructura básica del Escritorio y una Barra de Tareas fija en la parte inferior.	HTML Estructura, CSS position: fixed.
2.	Ventanas (Clave)	Crear una función crearVentana(titulo) que añada un div con las clases ventana al escritorio. La ventana debe tener botones "Cerrar" y "Minimizar".	Manipulación del DOM, Evento click para eliminar/ocultar.
3.	Menú de Inicio	Un botón en la barra de tareas que muestre y oculte un Menú de Inicio con al menos dos iconos de aplicaciones (ej. "Notas" y "Calculadora").	Evento click y Clases CSS (ej. .visible / .oculta).
4.	Lógica de Apps (Simple)	Al hacer clic en un icono del Menú de Inicio, se debe llamar a crearVentana() con un título específico e inyectar un contenido simple (ej. un < textarea > para Notas, o un < input > para la Calculadora).	Condicionales (if o switch) dentro de la función de creación de ventana.