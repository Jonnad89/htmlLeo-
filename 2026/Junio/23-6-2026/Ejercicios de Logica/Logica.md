Ejercicio 1: El Filtro Anti-Spam (Buscador de malas palabras) 🚫
En el chat de los juegos, a veces la gente se pone pesada. Tenes que crear un filtro automático que detecte si un mensaje contiene una palabra prohibida.

La regla: La función debe recibir dos textos: el mensaje completo del usuario y la palabraProhibida. Debe devolver true si el mensaje tiene esa palabra, o false si está limpio.

Pista: Los textos en JavaScript tienen un superpoder parecido al de los arrays. Podes usar el método .includes() directamente sobre el texto para saber si una palabra está adentro de otra.

Ejercicio 2: La Fábrica de Iniciales (Generador de Avatares) 
Viste que en las apps, si no tenés foto de perfil, te ponen un círculo con tus iniciales (por ejemplo, si te llamás "Jonatan Perez", tu avatar dice "JP"). Vas a programar eso.

La regla: Crear una función que reciba un nombre completo (nombre y apellido separado por un espacio) y devuelva las dos iniciales en mayúscula juntas. Si le pasás "leo messi", debe devolver "LM".

Pista: Primero podes usar .split(" ") para separar el nombre del apellido en una lista de dos elementos. Después, podes agarrar la letra en la posición [0] de cada uno.

Ejercicio 3: El Almacén de Don Carlos (Sumador de Carrito) 
Estás ayudando a Don Carlos a digitalizar su almacén. Le dan una lista con los precios de los productos que un cliente se está llevando: [150, 300, 250, 1000, 50].

La regla: Crear una función que reciba ese array de precios y devuelva el total acumulado de la cuenta (la suma de todos los números).

Pista: Vas a necesitar una variable afuera del bucle que arranque en cero (let total = 0;). En cada vuelta del for, tenes que usar el operador += para ir sumándole al total lo que haya adentro de cada cajón [i].

Ejercicio 4: El Espejo de Capicúas (Palíndromos) 
Una palabra es un palíndromo (o capicúa) cuando se lee igual al derecho y al revés, como la palabra "neuquen" o "ana".

La regla: Crear una función que reciba una palabra y devuelva true si es capicúa o false si no lo es.

Pista: ¡Acá podes reutilizar la lógica! Si la palabra original es exactamente igual a la palabra invertida, entonces ¡es capicúa!

=====================================================================================0

Estás programando un sistema meteorológico. Te dan una lista con las temperaturas máximas registradas durante la última semana en una ciudad del sur: [12, -2, 5, 0, -5, 18, -1].

La regla: Crear una función que reciba esa lista de números y devuelva la cantidad exacta de días en los que la temperatura fue bajo cero (menor que 0).

Pista: Al igual que en el ejercicio del carrito de compras, vas a necesitar un contador afuera del bucle (let diasFrios = 0;). Pero esta vez, en lugar de sumar el valor del cajón, solo tenes que sumarle 1 al contador (diasFrios++) únicamente si el número del cajón [i] es negativo.

Ejercicio 2: El Repartidor de Cartas (¿Quién es el más joven?) 👶
Imaginá que en un videojuego multijugador queremos armar un emparejamiento y necesitamos saber la edad del jugador más chico de un grupo. Nos pasan una lista desordenada: [25, 19, 32, 14, 21, 16].

La regla: Crear una función que reciba ese array de edades y devuelva cuál es el número más chico de todos sin usar métodos automáticos.

Pista: Este ejercicio es el hermano gemelo del que hiciste antes para buscar el cofre con el tesoro mayor. Vas a arrancar asumiendo que el primer número es el menor (let menor = lista[0];), recorres la lista y, si encontras un cajón que tenga un número más chico que su récord actual, actualiza la variable.