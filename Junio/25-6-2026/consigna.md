Desafío 1: El Promediador de Calificaciones de la Academia 
Contexto: En la facultad o en un curso de programación, no alcanza con saber las notas por separado; se necesita calcular el promedio final para saber si el alumno califica para una beca.

La consigna: Crear una función llamada calcularPromedio que reciba un array lleno de números (las notas de un alumno), por ejemplo: [8, 9, 7, 10, 6]. La función debe recorrer toda la lista, sumar todas las notas y calcular el promedio final (la suma total dividida la cantidad de notas que había). Finalmente, debe devolver (return) ese promedio redondeado a un solo decimal.

Requisito de seguridad (Freno de mano): Si la lista de notas viene vacía [], la función debe detectar esto inmediatamente para evitar que la máquina intente dividir por cero (lo cual rompería el programa) y debe devolver 0.

Pistas: 1. Usá un acumulador (let suma = 0;) y un bucle for para sumar los cajones.
2. Recordá que la cantidad total de notas la sabés con .length.
3. Para dejar un solo decimal, podés usar Number(resultado.toFixed(1)).

Desafío 2: El Comparador de Inventarios (Actualización de Stock) 📦
Contexto: Un depósito de videojuegos tiene una lista con la cantidad de stock actual de sus productos: [5, 12, 8, 0, 3]. Les llega un camión con mercadería nueva en el mismo orden: [10, 0, 2, 5, 7]. Tenes que programar el sistema que fusione ambas listas sumando los valores correspondientes.

La consigna: Crear una función llamada actualizarStock que reciba dos arrays del mismo largo: stockActual y stockNuevo. La función debe crear una lista vacía llamada inventarioFinal. Al recorrerlas, debe sumar el contenido del cajón [i] de la primera lista con el cajón [i] de la segunda lista, y guardar ese resultado en la lista nueva usando .push(). Al terminar el bucle, debe devolver el array inventarioFinal.

Ejemplo: Si combinás [5, 12] con [10, 0], el resultado debe ser [15, 12].

Pista: Como ambas listas miden lo mismo, un solo bucle for te alcanza para abrir el cajón [i] de las dos listas al mismo tiempo: let suma = stockActual[i] + stockNuevo[i];

Desafío 3: El Contador de la Quiniela (Números Pares e Impares) 🔢
Contexto: En un juego de azar se necesita analizar las estadísticas de los números que salieron para saber cuántos fueron pares (divisibles por 2) y cuántos impares.

La consigna: Crear una función llamada analizarNumeros que reciba un array de números desordenados, por ejemplo: [14, 25, 33, 40, 12, 7]. La función debe revisar toda la lista y contar cuántos números pares y cuántos impares hay. Al final, no debe devolver un solo número, sino una lista con dos resultados: [cantidadPares, cantidadImpares].

Ejemplo: Si le pasamos [14, 25, 33, 40, 12, 7], debe devolver [3, 3], porque salieron tres números pares (14, 40, 12) y tres impares (25, 33, 7).

Pistas:

Crea dos contadores arriba del bucle: let pares = 0; y let impares = 0;.

Recordá que para saber si un número es par, se usa el operador de resto % 2 === 0.

El return final debe armar la lista de salida en el momento: return [pares, impares];.