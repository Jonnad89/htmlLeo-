Agregá un selector (select) arriba de la lista para filtrar las tareas. El usuario debe poder elegir entre ver Todas, Solo Pendientes o Solo Completadas (o filtrar por prioridad: Alta, Media, Baja).

en JS:
En la función renderizar(), antes del .forEach(), aplica un .filter() al array misTareas según la opción seleccionada.

Agregá un botón de 'Editar' (✏️) junto a cada tarea. Al hacer clic, debe aparecer un prompt() (o transformar el texto en un input) para cambiar el nombre de la tarea y actualizar el LocalStorage.

en JS:
Crea una función editarTarea(id) que busque la tarea con .find(), le pida el nuevo nombre con prompt(), modifique la propiedad .tarea, llame a guardar() y ejecute renderizar().