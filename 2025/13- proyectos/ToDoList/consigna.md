Proyecto: Clasificador de Tareas por Prioridad (To-Do List Simple)
Este proyecto permite al usuario ingresar una tarea y clasificarla automáticamente según una palabra clave. Es más simple que el proyecto de Manga porque no gestiona tantos objetos, pero usa arrays, if/else y la actualización del DOM.



1.,"Estructura de Datos: Usar un array de cadenas de texto (string[]) llamado listaTareas para almacenar las tareas ingresadas (ej. [""Comprar leche"", ""Estudiar JS""]).",Arrays de cadenas de texto.

2.,Lógica de Clasificación: Crear una función que determine la prioridad de una tarea usando if/else if/else.,"if/else if/else, método .includes() de string."

3.,"Función de Agregado: La función agregarTarea() debe capturar el texto del input, agregarlo al array y llamar a la función de renderizado.","Arrays (.push()), Manipulación del DOM."

4.,"Lógica de Prioridad: Si la tarea incluye la palabra ""URGENTE"" o ""HOY"", la prioridad es Alta (mostrar en rojo). Si incluye la palabra ""MAÑANA"" o ""SEMANA"", la prioridad es Media (mostrar en azul). En cualquier otro caso, la prioridad es Baja (mostrar en gris).",Lógica Condicional y Operadores Lógicos 

5.,"Salida Dinámica: La función de renderizado debe recorrer el array de tareas y mostrarlas en una lista (ul o div), aplicando el color de fondo/texto según la prioridad determinada.","Bucle (for o .forEach), Estilo Condicional."