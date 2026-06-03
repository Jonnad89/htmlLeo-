1. El Validador de Nombres (Filtros de texto)
El reto: Crear una función que reciba un array de nombres de Pokémon y un string con una letra. Debe devolver un nuevo array solo con los nombres que empiecen con esa letra.

Ejemplo: filtrarPorLetra(['Pikachu', 'Bulbasaur', 'Pidgeot'], 'P') ➡️ Devuelve ['Pikachu', 'Pidgeot'].

2. El Curandero del Centro Pokémon (for...of y modificación)
El reto: El equipo de Leo tiene la vida baja: const equipo = [{n: 'Pikachu', hp: 20}, {n: 'Charizard', hp: 50}];.

La tarea: Crear una función curarEquipo(lista) que recorra el array con un for...of y le sume 50 de vida (hp) a cada uno. Al final, debe devolver el equipo sanado.

3. El Buscador de Items Caros (for clásico y extremos)
El reto: Tenemos una lista de precios de la tienda: const precios = [200, 1200, 450, 3500, 900];.

La tarea: Encontrar el precio más alto de la lista usando un bucle for clásico.

Pista: Creá una variable llamada maximo que empiece valiendo el primer elemento, y comparala con los demás adentro del bucle.

4. El Clonador de Inventario (Operador Spread)
El reto: Crear una función que reciba el objeto de un personaje, por ejemplo: const original = { nombre: "Gengar", nivel: 50 };.

La tarea: La función debe devolver una copia exacta e independiente (un clon) modificando el nivel a 100, pero sin alterar al objeto original.

Pista: Usá el operador spread (...) que vimos en el simulador RPG.

5. El Traductor de Cartas (for...in)
El reto: Tenemos un objeto con las estadísticas de un monstruo en inglés:

JavaScript
const stats = { name: "Zeus", attack: 95, defense: 80 };
La tarea: Usar un bucle for...in para imprimir en consola las propiedades, pero cambiando el texto de las llaves al español.

Resultado esperado: Debe imprimir "NAME: Zeus", "ATTACK: 95", etc. (Podés usar condicionales adentro del bucle).

6. Tabla de Multiplicar Gamer (Bucles anidados)
El reto: Crear un generador de combos. El programa debe imprimir en la consola las combinaciones de botones del 1 al 3.

Resultado esperado:

"Combo: 1 - 1", "Combo: 1 - 2", "Combo: 1 - 3"

"Combo: 2 - 1", "Combo: 2 - 2", "Combo: 2 - 3"... y así hasta el 3 - 3.

Pista: Vas a necesitar meter un bucle for adentro de otro bucle for.

7. El Filtro Anti-Fantasmas (Eliminar elementos)
El reto: Tenemos una lista de enemigos en el mapa, pero algunos ya tienen 0 de vida:

JavaScript
const mapa = [{tipo: 'Orco', hp: 100}, {tipo: 'Fantasma', hp: 0}, {tipo: 'Goblin', hp: 45}];
La tarea: Crear una función que limpie el mapa y devuelva un array solo con los enemigos que sigan vivos (hp > 0).

8. La Quiniela del RPG (while + azar)
El reto: Simular un lanzamiento de dados de ataque.

La tarea: Usar un bucle while que genere números aleatorios entre 1 y 6 (dados). El bucle debe seguir corriendo y sumando los resultados hasta que salga el número 6. Cuando sale el 6, el bucle frena y muestra el total acumulado.

9. El Contador de Tipos Repetidos (Acumulador avanzado)
El reto: Tenemos un equipo con muchos tipos repetidos: ['Fuego', 'Agua', 'Fuego', 'Eléctrico', 'Fuego', 'Agua'].

La tarea: Crear un script que recorra la lista y cuente exactamente cuántos hay de tipo 'Fuego'.

10. Inventor de IDs únicos (Generador)
El reto: En las bases de datos cada elemento necesita un ID único que no se repita.

La tarea: Crear una función llamada generarID(). Cada vez que la ejecutes, debe devolver un string que empiece con "USER-" seguido de un número completamente aleatorio entre 1000 y 9999.

Ejemplo: Al ejecutarla puede dar "USER-4823" o "USER-1105".