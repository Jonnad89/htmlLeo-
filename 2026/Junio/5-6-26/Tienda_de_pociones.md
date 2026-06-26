En HTML:
Un título h1 que diga: "Tienda de Pociones de Leo".

Dos pantallas de estado (h2 o h3):

Una que muestre las Pociones en Stock (que empiece en 10).

Otra que muestre el Oro Conseguido (que empiece en $0).

Un input type="number" con un id como cantidad-input para poner cuántas pociones se quieren manejar.

Dos botones principales:

Un botón verde que diga "Vender Pociones 💰".

Un botón azul que diga "Abastecer Stock 📦" (para cuando se queda sin pociones).

==========================================

EN JavaScript:
La tarea: Crear dos variables mutables (let) porque ambas van a cambiar todo el tiempo:

==========================================

En el botón de vender:
La tarea: Cuando se hace click en "Vender":

Lee la cantidad del input.

Valida que no sea menor o igual a cero.

Control de seguridad (Igual que el banco): Si el usuario quiere vender 5 pociones pero solo tiene 3 en stock, tiene que tirar un alert("¡No tenés suficientes pociones en stock!") y meter un return.

Si tiene stock: Resta las pociones del stockPociones y suma el oro correspondiente a oroTotal (Cantidad elegida x PRECIO_POCION).

Actualiza las dos pantallas en el HTML y limpia el inpu

=======================================

En el botón de abastecer:
La tarea: Cuando haga click en "Abastecer Stock":

Lee la cantidad del input.

Control de oro: Cada poción para reponer le cuesta a la tienda, por ejemplo, 30 monedas. Si quiere comprar stock pero no tiene oro suficiente, el sistema lo rebota con un alert().

Si tiene oro: Le resta el costo al oroTotal y le suma las pociones a stockPociones.

Actualiza las pantallas y limpia el input.