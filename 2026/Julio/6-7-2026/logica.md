Ejercicio 1: El Super Multiplicador de Clics 
Contexto: En los juegos clicker, no solo comprás mejoras automáticas, sino que también podés mejorar la potencia de tu propio clic manual (pasar de ganar +1 byte a ganar +5, +10, etc.).

La consigna: Crear una función llamada mejorarClic que reciba dos datos: el nivel actual del clic del jugador (un número) y la cantidad de Bytes que tiene guardados.

Si el jugador tiene 100 Bytes o más, la función debe restar esos 100 Bytes y devolver el nuevo nivel del clic aumentado en +1.

Si no le alcanza la plata, debe mostrar un alert o devolver un mensaje que diga: "Funden insuficientes", junto con el nivel de clic intacto.

Pista: Vas a tener que usar un condicional if/else clásico para verificar si los bytes alcanzan para pagar el costo fijo de 100. Tiene que devolver los dos datos actualizados (puede devolverlos en forma de texto o un array).

Ejercicio 2: El Calculador de Producción Total (BPS) 
Contexto: Queremos saber cuántos Bytes por segundo (BPS) genera nuestro sistema en total sumando todas las herramientas que compramos en la tienda.

La consigna: Crear una función llamada calcularBpsTotal que reciba tres números: la cantidad de Servidores Proxy (cada uno genera 2 BPS), la cantidad de IA Hackers (cada una genera 10 BPS) y la cantidad de Supercomputadoras (cada una genera 50 BPS). La función debe hacer la matemática correspondiente y devolver el total de Bytes por segundo automáticos.

Pista: Es una cuenta matemática directa. No necesita bucles, solo multiplicar cada cantidad por su valor de producción y sumar los tres resultados.

Ejercicio 3: El Alerta de Logros (Desbloqueo de Medallas) 
Contexto: Los juegos se vuelven adictivos gracias a los logros. Queremos un sistema que felicite al jugador cuando alcanza hitos importantes de minado.

La consigna: Crear una función llamada chequearLogros que reciba la cantidad actual de bytes del jugador. La función debe devolver un texto con una medalla según el rango:

Si tiene menos de 1000 bytes: "Rookie Hacker "

Si tiene entre 1000 y 9999 bytes: "Cyber Master "

Si tiene 10000 bytes o más: "Ghost in the Shell "

Pista: Ojo acá con el orden de los if y else if. Recordá que JavaScript lee de arriba hacia abajo, así que hay que estructurar bien los límites de los números.

Ejercicio 4: La Inflación de la Tienda (Precios Dinámicos) 
Contexto: Como viste en el código del proyecto, cada vez que comprás un ítem, el siguiente se vuelve más caro. Vamos a automatizar ese cálculo para cualquier producto.

La consigna: Crear una función llamada calcularPrecioInflado que reciba el precioBase de una mejora (ej: 15 bytes) y la cantidadComprada de ese artículo (ej: 5 servidores). Cada unidad comprada aumenta el precio un 20% de forma compuesta.

Pista: Para calcular el precio final de forma limpia,podes puede usar un bucle for que se ejecute tantas veces como indique la cantidadComprada. En cada vuelta, multiplica el precio por 1.20. Al final, no te olvides de usar Math.round() para que no devuelva decimales locos.