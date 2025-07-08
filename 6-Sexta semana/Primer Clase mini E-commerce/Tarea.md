1 - Refactorizar el mini e-commerce

- Objetivo: Reforzar comprensión del proyecto actual

    - Cambiar los nombres y precios de los productos
    - Agregar al menos 2 productos nuevos.
    - Personalizar los estilos con nuevos colores y tipografía
    - Cambar el texto de los botones ("Aadir al carrito", "Eliminar del carrito")

2 - Validar carrito vacío
- Objetivo : Aplicar condicionales

    - Mostrar un mensaje (por ejemplo: "Tu carrito está vacío") si el array carrito tiene 0 productos
    - Ocultar ese mensaje si hay productos

3 - Calcular de cantidad de productos repetidos

- Objetivo: Practicar lógica con arrays + objetos

    - Hacer que si agregas el mismo producto varias veces, en lugar de repetirlo, se muestra una cantidad
        - por ejemplo: Gorra - $1800 x 3

**Tips
    - usar un objeto para contar repeticiones como en el siguiente ejemplo:

    let contador = {};
    carrito.forEach(producto => {
        contador[producto.nombre] = (contador[producto.nombre] || 0) +1;
    })


BONUS: Agregar campo "busqueda"
- Objetivo: Aplicar eventos tipo input.

- Crear un input de búsqueda que filtre los productos mentras escribe.
- Mostrar solo los que coincidan con el texto ingresado.