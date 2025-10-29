El objetivo es crear una pequeña interfaz con una imagen y dos botones para cambiar la fuente (src) de esa imagen a la izquierda o a la derecha, simulando un carrusel simple.

#-Requisito Principal,Conceptos a Practicar
1.,Estructura de Datos: Usar un array de strings (string[]) llamado RUTAS_IMAGENES para almacenar las rutas de las imágenes disponibles.,Arrays de cadenas de texto.
2.,Gestión de Estado: Usar una variable numérica (let indiceActual = 0;) para llevar un seguimiento de qué imagen del array se está mostrando actualmente.,Variables numéricas como índice.
3.,Manipulación del DOM: Crear una función (cambiarImagen()) que utilice el valor de indiceActual para obtener la ruta del array y actualizar el atributo src del elemento img.,setAttribute().
4.,"Lógica de Navegación (Bucles): Dentro de las funciones de navegación, usar lógica if/else o el operador módulo (%) para asegurarse de que el índice vuelva a cero al llegar al final del array (navegación circular).",Lógica Condicional y Bucles Implícitos/Cíclicos.
5."Eventos: Añadir listeners a dos botones: ""Anterior"" y ""Siguiente"".","addEventListener('click', ...)."