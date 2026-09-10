Proyecto:

armar la lógica de un Carrito de Compras. La app tiene un formulario para ingresar un producto con su precio, una lista donde se muestran los productos agregados, un botón para eliminar productos individuales y un contador que calcula el Total gastado. Todo tiene que persistir al recargar la página

puntos a tener en cuenta:

Estado inicial: Crear la variable carrito que intente leer de localStorage con JSON.parse() o arranque con array vacío [].

Función renderizar():

Limpiar el "ul".

Recorrer el array carrito con .forEach().

Insertar los "li" con el nombre, precio y un botón Eliminar con el ID del producto.

Extra: Calcular la suma de todos los precios e injectarla en #monto-total.

Función agregarProducto():

Validar con .value.trim() que el nombre no esté vacío y que el precio sea mayor a 0.

Crear el objeto { id: Date.now(), nombre: texto, precio: Number(precio) }.

Hacer .push() al array, guardar en localStorage con JSON.stringify() y re-renderizar.

Función eliminarProducto(id):

Usar .filter() sobre el array de estado.

Actualizar localStorage y re-renderizar.