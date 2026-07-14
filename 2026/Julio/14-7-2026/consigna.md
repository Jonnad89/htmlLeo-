Ejercicios de Funciones Medianas (Para meterle más lógica)1. 
El sumador de un rango 

➕El Desafío: Crear una función llamada sumarRango(inicio, fin) que reciba dos números enteros y devuelva la suma de todos los números que hay entre ellos, incluyéndolos.

Ejemplo: sumarRango(1, 4) tiene que sumar $1 + 2 + 3 + 4$ y devolver 10.Pista: Vas a necesitar inicializar un acumulador en 0 y usar un bucle for que arranque en inicio y termine en fin.

2. El filtro de palabras largas 

💬El Desafío: Crear una función llamada filtrarPalabrasLargas(listaPalabras, limite) que reciba un array de palabras y un número. 
Debe devolver un nuevo array que contenga únicamente las palabras que tengan más letras que el número límite especificado.
Ejemplo: filtrarPalabrasLargas(["sol", "pelota", "mar", "botines"], 4) debe devolver ["pelota", "botines"] 

(porque tienen más de 4 letras).Pista: Podés usar un bucle tradicional metiendo las palabras que cumplan la condición en un nuevo array con .push(), o investigar el método .filter().

3. El validador de emails simple 

📧El Desafío: Crear una función llamada validarEmail(correo) que verifique de forma básica si un string tiene formato de correo. 

Debe devolver true si cumple con estas tres condiciones, o false si falla alguna:Debe contener el símbolo @.
Debe contener un punto . después del @.No debe tener espacios en blanco.Ejemplo: validarEmail("leo@correo.com") devuelve true, pero validarEmail("leo correo.com") o validarEmail("leo@.com") devuelven false.

4. Buscador de goleadores 

⚽El Desafío: Crear una función llamada obtenerGoleador(jugadores) que reciba un array de objetos (donde cada objeto representa un jugador con su nombre y cantidad de goles) y devuelva el nombre del jugador que hizo más goles.Ejemplo:JavaScriptconst lista = [
    { nombre: "Julián", goles: 3 },
    { nombre: "Lautaro", goles: 5 },
    { nombre: "Messi", goles: 4 }
];
// obtenerGoleador(lista) debe devolver "Lautaro"
Pista: Arrancá asumiendo que el primer jugador de la lista es el que tiene más goles, recorré el resto con un bucle y compará para actualizar quién va ganando.

5. El formateador de precios 🛒El Desafío: Crear una función llamada formatearCarrito(productos) que reciba un array de productos con sus precios y devuelva un array de strings prolijos para mostrar en una pantalla de compras.Ejemplo:JavaScriptconst carrito = [
    { articulo: "Remera", precio: 15000 },
    { articulo: "Gorra", precio: 8500 }
];
// Debe devolver: ["Remera - $15000", "Gorra - $8500"]
Pista: Vas a necesitar recorrer el array y usar plantillas de texto (template strings con comillas invertidas `) para armar cada elemento.

6. El contador de vocales 


🗣️El Desafío: Crear una función llamada contarVocales(texto) que reciba cualquier palabra o frase y devuelva cuántas vocales (a, e, i, o, u) tiene en total. No debe importar si están en mayúsculas o minúsculas.Ejemplo: contarVocales("Mundial") debe devolver 3 (u, i, a).