1. El eliminador de duplicados 🧹
El Desafío: Crear una función llamada unicos(array) que reciba una lista de elementos (números o palabras) donde puede haber repetidos, y devuelva un nuevo array pero con todos los elementos únicos (sin duplicados).

Ejemplo: unicos([1, 2, 2, 3, 4, 4, 1]) debe devolver [1, 2, 3, 4].

Pista: Podés resolverlo de forma tradicional recorriendo el array y usando .includes(), o usar el objeto moderno de JavaScript Set (que por definición no admite duplicados).

2. El generador de contraseñas básicas 🔑
El Desafío: Crear una función llamada generarPassword(longitud) que devuelva una contraseña al azar combinando letras minúsculas y números. El largo de la contraseña lo define el parámetro longitud.

Ejemplo: generarPassword(8) podría devolver "a4f2g9z1".

Pista: Creá un string con todos los caracteres posibles: const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";. Adentro de un bucle que se repita tantas veces como la longitud pedida, seleccioná una posición al azar usando Math.random().

3. Clasificador de edades 🎂
El Desafío: Crear una función llamada clasificarPersonas(personas) que reciba un array de objetos con nombre y edad. Debe devolver un objeto con dos listas adentro: una con los nombres de los menores de 18 años y otra con los mayores (18 o más).

Ejemplo:

JavaScript
const grupo = [
    { nombre: "Benja", edad: 12 },
    { nombre: "Jona", edad: 30 },
    { nombre: "Mateo", edad: 15 }
];
// Debe devolver: { menores: ["Benja", "Mateo"], mayores: ["Jona"] }
4. Buscador en catálogo (Insensible a mayúsculas) 🔍
El Desafío: Crear una función llamada buscarProducto(productos, termino) que reciba un array de strings (catálogo de productos) y un string de búsqueda (termino). Debe devolver un nuevo array con todos los productos que contengan ese término de búsqueda.

Restricción de nivel: No debe importar si el usuario busca en mayúsculas, minúsculas o mixto.

Ejemplo: buscarProducto(["Camiseta Arg", "Pelota", "Remera de entrenamiento"], "remera") debe devolver ["Remera de entrenamiento"].

Pista: Usá .toLowerCase() tanto en el producto como en el término de búsqueda antes de usar .includes().

5. El formateador de nombres propios 👤
El Desafío: Crear una función llamada capitalizarNombre(nombreCompleto) que tome un nombre escrito de cualquier manera y devuelva el nombre con la primera letra de cada palabra en mayúscula y el resto en minúscula. Además, debe limpiar espacios de más.

Ejemplo: capitalizarNombre("  jUaN pÉrEz   ") debe devolver "Juan Pérez".

Pista: Primero usá .trim() y .split(" ") para separar el string en palabras. Después, recorre cada palabra, poné su primer caracter en mayúscula (palabra[0].toUpperCase()), sumale el resto en minúscula (palabra.slice(1).toLowerCase()) y unilas todas de nuevo con .join(" ").

6. El promedio de alumnos (Con datos faltantes) 📊
El Desafío: Crear una función llamada calcularPromedioNotas(notas) que reciba un array de números (calificaciones) y devuelva el promedio redondeado a un decimal.

Restricción de robustez: Si el array está vacío o no se le pasa nada a la función, no debe dar error de división por cero ni tirar NaN. Debe devolver 0.

Ejemplo: calcularPromedioNotas([8, 9, 10]) devuelve 9. calcularPromedioNotas([]) o calcularPromedioNotas() devuelve 0.

Pista: Usá parámetros por defecto en la definición de la función (notas = []) y un if que verifique si el largo es 0.