6 Ejercicios Nuevos de Lógica Algorítmica
1. El Detector de Año Bisiesto 📅
El Desafío: Crear una función que reciba un año (número entero, por ejemplo 2024 o 2026) y determine si es bisiesto o no, devolviendo true o false.

La Regla de Lógica:

Un año es bisiesto si es divisible por 4.

Pero si es divisible por 100, no es bisiesto...

A menos que también sea divisible por 400 (en ese caso sí es bisiesto).

 Combinación de operadores lógicos complejos (&&, ||) y módulo (%).

2. Compresión de Textos Simples (Run-Length) 🗜️
El Desafío: Crear una función que reciba un string con letras repetidas consecutivas y devuelva un string "comprimido" contando cuántas veces se repite cada letra seguidamente.

Ejemplo: "aabcccccaaa" ➔ Debe devolver "a2b1c5a3".

 Recorrido de cadenas con comparación entre el elemento actual y el siguiente (string[i] vs string[i+1]), junto a un contador.

 3. El Juego de los Saltos en Array 🏃‍♂️
El Desafío: Dado un array de números enteros donde cada número representa la cantidad máxima de pasos que podés saltar hacia adelante desde esa posición, determinar si es posible llegar hasta el último elemento del array empezando desde el primer índice.

Ejemplo 1: [2, 3, 1, 1, 4] ➔ true (Desde el índice 0 saltás 2 pasos al índice 2; de ahí saltás 3 pasos y llegás al final).

Ejemplo 2: [3, 2, 1, 0, 4] ➔ false (Caés en el 0 y te quedás atrapado, no podés avanzar más).

Control de índices dinámicos y seguimiento de límites alcanzables.

4. La Matriz Identidad (Grillas 2D) 📐El Desafío: Crear una función que reciba un número entero N y genere una matriz cuadrada de $N \times N$ (un array de arrays) que represente una "Matriz Identidad".Regla: Todos los elementos deben ser 0, excepto la diagonal principal (donde la fila y la columna son iguales: i === j), que debe ser 1.Ejemplo para $N = 3$:

[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]

Bucles anidados (for dentro de for) y creación de arreglos bidimensionales.

5. Rotación de Arrays a la Derecha 🔄
El Desafío: Crear una función que reciba un array y un número K (pasos de rotación). Debe mover todos los elementos del array K posiciones hacia la derecha. Los elementos que "salen" por el final deben reingresar por el principio.

Ejemplo: rotar([1, 2, 3, 4, 5], 2) ➔ Debe devolver [4, 5, 1, 2, 3].

Restricción: Pensar el algoritmo sin usar arreglos auxiliares gigantes si es posible (manipulando índices o reordenando).

Aritmética modular (índice % longitud) y reordenamiento de elementos.

6. Balanza de Paréntesis y Corchetes ⚖️
El Desafío: Crear una función que reciba un string compuesto únicamente por símbolos como (), [], {} y verifique si la estructura está correctamente balanceada y cerrada en el orden correspondiente.

Ejemplo 1: "{[()]}" ➔ true

Ejemplo 2: "{[(])}" ➔ false (Está mal cerrado)

Ejemplo 3: "(((" ➔ false (Faltan cierres)

Concepto de estructura de datos tipo Pila (Stack / LIFO: Last In, First Out) usando .push() y .pop().