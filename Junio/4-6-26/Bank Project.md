1. Base en HTML (dibujar el banco)

 - Título (h1)
 - Subtitulo (h2)
 - Caja de texto (input tipo número)
 - Dos botones 

2. Variable del dinero (JS inicial)

    - Crear una variable global que guarde la plata actual. Como el saldo va a cambiar todo el tiempo, usar let en vez de const.

    - ejemplo: let saldo = 1000;

3. Botón de depositar (sumar plata)

    - Crear el listener para el botón "Depositar". Cuando se haga click, tiene que agarrar el número que el usuario escribió en el input, sumárselo a la variable saldo y actualizar el texto del <h2> para que muestre el nuevo total.

    - El valor de los inputs entra como texto. Para no confundir 1000 + "100", Tenemos que transformar el valor a númmero usando Number(input.value)

4. Botón de retirar (Restar con alerta)  

    - Crear el listener para el botón "Retirar". Cuando se haga click, tiene que restar el monto del input a la variable saldo y actualizar la pantalla.

    - Si el usuario quiere retirar $5000 pero solo tiene $1000, ¡el banco no puede quedar en negativo! Tenemos que poner un if. Si el monto a retirar es mayor que el saldo, tiene que tirar un alert("¡No tenés fondos suficientes, Leo!") y frenar la operación.

5. El toque visual

    - Si el usuario hace un retiro exitoso, que el fondo de la pantalla cambie a rojo por un segundo y vuelva a la normalidad (o que el texto del saldo parpadee). Si hace un depósito, que se ponga verde.