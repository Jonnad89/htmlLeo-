Consigna del Proyecto: Panel de Control de Tareas (Kanban Básico)
Crea una interfaz de tablero que simule la gestión de proyectos estilo Kanban (como Trello), permitiendo a los usuarios mover tareas entre diferentes columnas de estado.

1. Elementos de la Interfaz (Estructura de Datos)
Columnas (Contenedores): Tres columnas que representan los estados del flujo de trabajo: Por Hacer (To Do), En Progreso (In Progress) y Terminado (Done).

Tarjetas (Tareas): El usuario debe poder ingresar una nueva tarea y que esta aparezca en la columna inicial (Por Hacer). Cada tarjeta debe ser un elemento individual y móvil.

2. Funcionalidades Clave (JavaScript y Eventos)
Creación de Tareas: Un formulario simple para agregar una nueva tarea. La tarea debe ser un objeto con id, texto y estado (inicialmente, 'todo').

Actualización de Estado (El Desafío):

Al hacer clic en un botón dentro de una tarjeta (ej. una flecha o un botón "Mover"), la tarjeta debe moverse visualmente a la siguiente columna.

Este movimiento debe actualizar el estado de la tarea en tu estructura de datos principal (un array o un objeto que almacene todas las tareas).

Delegación de Eventos: Para un código más limpio y eficiente, utiliza la Delegación de Eventos en el contenedor principal en lugar de añadir un listener a cada tarjeta o botón individual.

3. Persistencia (Repaso)
Utiliza localStorage para guardar el array completo de tareas cada vez que se agrega o mueve una tarjeta. Al cargar la página, las tareas deben restaurarse en sus respectivas columnas.