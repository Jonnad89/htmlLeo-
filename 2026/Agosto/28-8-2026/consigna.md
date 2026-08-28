Ejercicio Integrador: Procesador de Tareas en Lote (Queue System)
Objetivo: Simular un sistema de procesamiento de tareas donde los ítems se procesan uno a uno mediante un bucle while al tocar un botón.

Consina:

Tenés una lista HTML de tareas con estado inicial "Pendiente".

Al hacer clic en el botón "Procesar Siguiente", usá un bucle while que busque el primer <li> que todavía no esté procesado (podés detectar si tiene la clase .pendiente).

Cambiá su texto a "Completada", quitales la clase .pendiente, agregales la clase .completada (cambiando su fondo a verde) y cortá el bucle con break para procesar de a una por clic.

Si el bucle termina y no encuentra ninguna tarea pendiente, mostrá un mensaje: "¡Todas las tareas fueron procesadas!".

Conceptos a usar: while, break, querySelector / querySelectorAll, classList.contains(), classList.remove(), classList.add().