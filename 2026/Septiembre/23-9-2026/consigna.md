Objetivo: Construir una aplicación web interactiva que permita gestionar una lista de tareas, clasificarlas por prioridad, guardarlas en el navegador y ver estadísticas en tiempo real.

💡 Regla de libertad: Podés resolver el proyecto usando Programación Orientada a Objetos (Clases) como vimos en la clase, o con funciones y objetos tradicionales si te resulta más cómodo. Lo importante es que la lógica funcione impecablemente.

📋 Requisitos del Proyecto
1. Interfaz y Estructura (HTML/CSS)
Un formulario con:

Un campo de texto para escribir el título de la tarea.

Un selector (<select>) para elegir la prioridad: Alta, Media o Baja.

Un botón para agregar la tarea.

Un panel de estadísticas que muestre:

Total de tareas.

Tareas completadas.

Tareas pendientes.

Una lista donde se irán mostrando las tareas agregadas.

2. Funcionalidades de JavaScript (El Creador)
Agregar Tarea:

Al enviar el formulario, se debe crear una nueva tarea con un ID único (Date.now()), título, prioridad y estado completada: false.

Validación: No se pueden agregar tareas con el campo de texto vacío.

Renderizar y Visualizar:

Las tareas deben mostrarse en la pantalla diferenciadas visualmente según su prioridad (por ejemplo, con un borde o color distinto para Alta, Media y Baja).

Si la tarea está completada, su texto debe verse tachado.

Marcar como Completada:

Cada tarea debe tener un botón para cambiar su estado entre "Pendiente" y "Completada".

Eliminar Tarea:

Cada tarea debe tener un botón para borrarla de la lista definitiva.

Estadísticas Dinámicas:

Cada vez que agregues, completes o elimines una tarea, los contadores de la parte superior (Totales, Completadas y Pendientes) deben actualizarse automáticamente.

Persistencia (LocalStorage):

Al recargar la página, todas las tareas y sus estados deben mantenerse exactamente como las dejaste.