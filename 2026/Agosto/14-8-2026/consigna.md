Objetivo
Desarrollar la interfaz y la lógica interna de un sistema de cobro comercial inspirado en Computación Plus. El proyecto pondrá a prueba la gestión de listas de productos en memoria, manipulación avanzada del DOM, eventos de teclado y ventanas modales de pago.

Requerimientos de la Aplicación

1. Layout e Interfaz Estilo POS

Barra Lateral (Sidebar): Accesos rápidos visuales (F1 Artículos, F2 Clientes, F4 Ventas, F5 Consultar, Salir).

Encabezado de Comprobante: Selector de tipo de factura (A, B, X), datos de vendedor, cliente y fecha actual calculada con JavaScript.

Panel Inferior: Mostrar el TOTAL A COBRAR en tamaño grande y un botón destacado para confirmar/cobrar.

2. Búsqueda y Carga Inteligente de Productos

Crear una base de datos en JS (Array de objetos) con al menos 5 productos (código, descripción, precio).

El campo de búsqueda debe permitir ingresar tanto el código numérico exacto (ej: 101) como palabras clave del nombre (ej: memoria).

Permitir seleccionar la cantidad antes de agregar.

3. Tabla de Venta y Carrito Dinámico

Renderizar dinámicamente cada ítem agregado con: Cantidad, Código, Descripción, Precio Unitario, Subtotal y un botón para eliminar la fila.

Lógica de acumulación: Si el producto ya existe en la lista, debe sumar la cantidad al renglón existente en lugar de duplicar la fila.

Recalcular el Total General automáticamente tras cualquier cambio (alta o baja).

4. Modal de Cobro y Vuelto Reactivo

Al presionar "Cobrar", abrir una ventana flotante (modal).

Calcular el vuelto en tiempo real a medida que el usuario escribe el monto con el que abona el cliente (evento input).

Si el dinero abonado es insuficiente, indicar visualmente que falta saldo.

Al confirmar la venta, emitir una alerta, vaciar el carrito y reiniciar la pantalla para una nueva transacción.

5. Atajos de Teclado (UX Avanzada)

Presionar la tecla Enter en el campo de código debe ejecutar la acción de agregar ítem.

Presionar la tecla F9 en cualquier parte de la pantalla debe abrir directamente el modal de cobro.

Desafíos Técnicos de JavaScript a Resolver

Métodos de Array: Manipular arreglos usando .find(), .findIndex(), .splice() y .forEach().

Manejo de Estado: Mantener sincronizado el arreglo carrito con la tabla visible y el total acumulado.

Eventos: Capturar keydown, keypress e input para automatizar la experiencia de uso sin depender solo del mouse.