6 Ejercicios de Lógica de Repaso general

1. El Contador de Vocales 🗣️
El Desafío: Crear una función que reciba una palabra o frase (string) y devuelva cuántas vocales (a, e, i, o, u) tiene en total.

Ejemplo: contarVocales("javascript") ➔ Debe devolver 3.

Recorrer un string con un bucle for, usar .toLowerCase() y verificar si un carácter está en una lista/string de vocales (o usando .includes()).

2. Filtrar los Números Pares 🔢
El Desafío: Crear una función que reciba un array de números enteros y devuelva un nuevo array que contenga únicamente los números pares.

Ejemplo: filtrarPares([1, 2, 3, 4, 5, 6, 7, 8]) ➔ Debe devolver [2, 4, 6, 8].

Uso del operador módulo (% 2 === 0), condicionales y agregar elementos a un array nuevo con .push() (o usando .filter()).

3. Buscador del Número Más Grande 🏆
El Desafío: Crear una función que reciba un array de números y devuelva el número más alto de todos sin usar Math.max().

Ejemplo: encontrarMayor([5, 12, 3, 45, 8]) ➔ Debe devolver 45.

Guardar un valor de referencia en una variable acumuladora y comparar elemento por elemento dentro de un bucle.

4. Calculadora de Promedio de Notas 📝
El Desafío: Crear una función que reciba un array con las notas de un alumno (números del 1 al 10) y devuelva su promedio.

Ejemplo: calcularPromedio([8, 6, 10, 4]) ➔ Debe devolver 7.

Suma acumulativa dentro de un bucle y división final por la longitud del array (.length).

5. El Inversor de Cadenas (Palabra al revés) 🔄
El Desafío: Crear una función que reciba un string y lo devuelva completamente al revés.

Ejemplo: invertirTexto("hola") ➔ Debe devolver "aloh".

Recorrer un string desde el final hacia el principio (o usar métodos como .split(''), .reverse(), .join('')).

6. Menú de Descuentos para Comercio 🛒
El Desafío: Crear una función que reciba el precio total de una compra y el día de la semana. Debe calcular y devolver el precio final aplicando estas reglas:

Si es "Lunes" o "Miércoles", aplica un 10% de descuento.

Si el monto total supera los $10.000 (sin importar el día), aplica un 15% de descuento (este descuento le gana al del día, no se acumulan).

En cualquier otro caso, el precio queda igual.

Ejemplo 1: calcularPrecio(5000, "Lunes") ➔ Devuelve 4500.

Ejemplo 2: calcularPrecio(12000, "Martes") ➔ Devuelve 10200.