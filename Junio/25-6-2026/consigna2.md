Desafío Final: El Filtro de Envíos Gratis (E-Commerce) 🛒🚚
Contexto: En Mercado Libre o cualquier tienda online, cuando sumás productos al carrito, el sistema calcula si llegás a un monto mínimo para darte el "Envío Gratis". vas a programar exactamente esa lógica.

La consigna: Crear una función llamada evaluarEnvioGratis que reciba un array con los precios de los productos que el usuario cargó en el carrito (por ejemplo: [1500, 4000, 2300]).
La función debe hacer dos cosas:

Sumar todos los productos del carrito para obtener el total de la compra.

Verificar si el total de la compra es mayor o igual a $7000.

Si el total llega o supera los $7000, debe devolver el texto: "¡Tenés Envío Gratis! Total: $X".

Si no llega, debe calcular cuánto le falta para alcanzar el beneficio y devolver: "Te faltan $Y para el envío gratis".

Pistas:

Necesitás un acumulador let total = 0; y un bucle for para sumar los precios de los cajones [i].

Para saber cuánto le falta en el caso de que no llegue, la cuenta matemática es simple: 7000 - total.