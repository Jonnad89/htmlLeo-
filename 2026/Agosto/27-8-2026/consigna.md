Ejercicio 1: Navegador de Canciones (.nextElementSibling / DOM)
Objetivo: Crear una lista HTML de 4 canciones (<ul> con <li>). La primera canción debe tener la clase .activa. Agregar un botón "Siguiente Canción" que, al hacer clic, use nextElementSibling para pasar la clase .activa a la siguiente canción de la lista.

Desafío extra: Si llega a la última canción y vuelve a tocar el botón, que una alerta avise "¡Llegaste al final de la lista!".

Conceptos a usar: querySelector, nextElementSibling, classList.add() y classList.remove().

Ejercicio 2: Verificador de Calificaciones (.every() / .some())
Objetivo: Dado el siguiente array de notas de alumnos: const notas = [8, 9, 4, 7, 10, 6];

Crear una función que use .every() para verificar si todos los alumnos aprobaron (nota mayor o igual a 6) y muestre el resultado en un <p>.

Usar .some() para verificar si al menos uno sacó un 10.

Conceptos a usar: .every(), .some() y manipulación de texto en el DOM (innerText).

Ejercicio 3: Buscador de Primer Elemento y Posición (.find() / .findIndex())
Objetivo: Dada una lista de productos en stock:

JavaScript
const productos = [
    { id: 101, nombre: "Teclado", precio: 15000 },
    { id: 102, nombre: "Mouse", precio: 8000 },
    { id: 103, nombre: "Monitor", precio: 85000 },
    { id: 104, nombre: "Pad", precio: 3000 }
];
Usar .find() para buscar el primer producto que cueste más de $10.000 y mostrar su nombre en la pantalla.

Usar .findIndex() para encontrar en qué posición del array se encuentra el "Monitor".

Conceptos a usar: .find(), .findIndex() y métodos de objetos.

Ejercicio 4: Validador de PIN con Bucle while y break
Objetivo: Simular la validación de un cajero automático.

Crear un bucle while que pida un PIN mediante un <input> o simulación de intentos (máximo 3 intentos).

Si el PIN ingresado es correcto (ej: "1234"), debe mostrar el mensaje "Acceso concedido", cortar el bucle inmediatamente con break y cambiar el fondo de la pantalla a verde.

Si agota los 3 intentos sin acertar, debe mostrar "Cuenta bloqueada".

Conceptos a usar: Bucle while, contador de intentos, break y actualización de estilos CSS.