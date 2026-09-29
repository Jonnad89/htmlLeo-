Desafío 1: El Proyecto Práctico — "Catálogo Interactivo de Productos"
Objetivo: Desarrollar un e-commerce simplificado que permita agregar productos, filtrar por categoría o precio, buscar por texto y gestionar un carrito de compras dinámico.
📋 Requisitos del Proyecto
1. Interfaz (HTML / CSS)
Formulario de Carga: Nombre del producto, precio, categoría (ej: Electrónica, Ropa, Hogar) e imagen (URL).
Barra de Búsqueda y Filtros:
Un <input> para buscar por texto en tiempo real.
Un <select> para filtrar por categoría.
Sección de Catálogo: Un contenedor dinámico en grid/flexbox para mostrar las tarjetas de los productos.
Sección de Carrito: Un panel que liste los productos agregados, cantidad y el Total ($) calculado automáticamente.
2. Funcionalidades de JavaScript
Gestión de Productos:
Agregar nuevos productos al catálogo con un ID único.
Renderizar las tarjetas con imagen, nombre, precio y botón "Agregar al Carrito".
Filtro y Búsqueda Combinados:
Al escribir en la barra de búsqueda o cambiar la categoría, la lista debe actualizarse mostrando solo los productos que cumplan ambas condiciones.
Lógica del Carrito:
Agregar productos al carrito (si ya existe en el carrito, sumar la cantidad).
Eliminar productos del carrito.
Calcular el precio total dinámicamente usando .reduce().
Persistencia (LocalStorage):
Guardar tanto el catálogo como el carrito para que no se borren al recargar la página.
🧠 Desafío 2: Módulo de Lógica pura en JavaScript
Indicación para Leo: Resolvé las siguientes funciones en un archivo separado (logica.js) probando los resultados por consola (console.log).

Ejercicio 1: El Contador de Palabras
Escribí una función contarPalabras(texto) que reciba una frase y devuelva un objeto con la cantidad de veces que aparece cada palabra (sin diferenciar mayúsculas de minúsculas).
Ejemplo: contarPalabras("Hola mundo hola")
Resultado: { hola: 2, mundo: 1 }
Ejercicio 2: Encontrar el Segundo Número Más Grande
Escribí una función segundoMayor(numeros) que reciba un array de números y devuelva el segundo valor más alto (sin ordenar todo el array de forma nativa si te animás al reto).
Ejemplo: segundoMayor([10, 40, 30, 20, 50, 50])
Resultado: 40
Ejercicio 3: Invertir una Cadena sin .reverse()
Crea una función invertirTexto(cadena) que tome un string y lo devuelva invertido usando únicamente un bucle (for o while).
Ejemplo: invertirTexto("javascript")
Resultado: "tpircsavaj"
Ejercicio 4: Agrupar por Propiedad
Escribí una función agruparPor(array, propiedad) que reciba un array de objetos y agrupe los elementos por la propiedad indicada.


const alumnos = [
    { nombre: "Ana", nota: "A" },
    { nombre: "Pedro", nota: "B" },
    { nombre: "Juan", nota: "A" }
];
agruparPor(alumnos, "nota");

{
    A: [{ nombre: "Ana", nota: "A" }, { nombre: "Juan", nota: "A" }],
    B: [{ nombre: "Pedro", nota: "B" }]
}