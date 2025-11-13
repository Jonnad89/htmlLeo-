El objetivo es crear una aplicación para gestionar el inventario de una pequeña tienda.

Estructura de Datos: Usar un Array de Objetos (let inventario = []) donde cada objeto es un producto con: id (único), nombre, cantidad, y precio.

Persistencia: Al cargar la página, intentar recuperar el inventario guardado en localStorage. Antes de salir, guardar el inventario actualizado.

Función de Renderizado: Una función que borre la lista HTML y la reconstruya completamente a partir del array de JS.

Agregar Producto: Al presionar un botón, crear un nuevo objeto, agregarlo al array (.push()) y renderizar la lista.

Eliminar Producto: Cada producto debe tener un botón de "X" que, al hacer clic, elimine ese producto del array de JS (usando su id).