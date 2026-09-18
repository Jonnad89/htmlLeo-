Proyecto: "Flashcards de Estudio / Tarjetas de Memoria"
Cambiamos el típico formato de "Lista / Carrito" por una interfaz de Tarjetas. La lógica de fondo es exactamente la misma (Array de objetos, .value.trim(), .map(), .filter() y localStorage)

1. Requerimientos Técnico
Estado (JS):

Array de objetos: [{ id: 123, pregunta: "...", respuesta: "...", mostrada: false }].

Creación:

Dos inputs (#pregunta y #respuesta).

Validar ambos campos con .trim(). Si alguno está vacío, no se crea la tarjeta.

Interacción:

Al hacer clic en el botón "Ver Respuesta" de una tarjeta, se debe ejecutar una función toggleRespuesta(id) que use .map() para cambiar el booleano mostrada a su opuesto (!tarjeta.mostrada).

Eliminación y Persistencia:

Botón para eliminar tarjeta individual usando .filter().

Todo sincronizado con localStorage (JSON.stringify y JSON.parse).
