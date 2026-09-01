Ejercicio 1: Contador de Caracteres con Límite Visual
Objetivo: Crear un <textarea> para redactar una publicación y un contador que muestre cuántos caracteres quedan disponibles (máximo 140). Si la cantidad de caracteres restantes baja de 20, el texto del contador debe ponerse en rojo. Si supera los 140, se debe desactivar el botón "Publicar".

Conceptos a ejercitar: Evento input, propiedad .length, manipulación de clases o estilos CSS y atributo disabled.

Ejercicio 2: Tabla de Datos Ordenable (Sort en DOM)
Objetivo: Mostrar una tabla HTML con nombres y edades de personas. Agregar un botón "Ordenar por Edad" que reordene la lista internamente con .sort() y actualice las filas impresas en la pantalla de menor a mayor.

Conceptos a ejercitar: .sort(), iteración de objetos y renderizado dinamico de filas (<tr> / <td>).

Ejercicio 3: Buscador con Historial de Búsquedas Recientes
Objetivo: Crear un campo de texto para buscar productos. Cada vez que el usuario presione un botón "Buscar", el término ingresado se debe agregar a una lista de "Búsquedas recientes" (guardando máximo las últimas 3). Si la lista ya tiene 3 elementos, la búsqueda más vieja se debe eliminar al agregar una nueva.

Conceptos a ejercitar: Métodos de array (.unshift(), .pop() o .slice()), actualización de listas (<ul>) e inputs.

Ejercicio 4: Marcador de Tareas como Importantes (Delegación o Iteración)
Objetivo: Tener una lista de tareas pendientes. Cada tarea tiene dos botones: "Completar" (que tacha el texto) y "Destacar" (que cambia el fondo de la fila a amarillo y la mueve al principio de la lista).

Conceptos a ejercitar: Reorganización de nodos en el DOM con prepend() o appendChild(), classList.toggle().