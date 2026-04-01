Consigna del Proyecto: Sistema KDS (Kitchen Display System) 
El objetivo es crear un panel de control para la cocina que muestre los pedidos pendientes y permita a los cocineros gestionar su estado.

1. Estructura y Componentes
El sistema debe tener un diseño visual con un panel central dividido en columnas que representen el estado del pedido, por ejemplo:

Columna	Estado	Descripción
Pendiente	pending	Pedidos nuevos que deben comenzar a prepararse.
En Preparación	preparing	Pedidos que están siendo cocinados.
Listo para Entregar	ready	Pedidos terminados, esperando ser recogidos por el mesero/repartidor.

Exportar a Hojas de cálculo
2. Funcionalidades Clave de JavaScript
Modelo de Datos: Define una estructura de datos (un array de objetos) para simular los pedidos. Cada pedido debe tener un ID único, una lista de ítems (ej. "Big Mac", "Papas Grandes", "Coca Cola") y un estado inicial (pending).

Renderizado Dinámico: JavaScript debe leer el array de pedidos y dibujar dinámicamente cada pedido como una "tarjeta" en la columna de Pendiente.

Gestión de Estado (El Núcleo): Cada tarjeta de pedido debe tener un botón (o ser clickeable) para avanzar al siguiente estado:

De Pendiente a En Preparación.

De En Preparación a Listo para Entregar.

Movimiento de Tarjetas: Al cambiar el estado, la tarjeta del pedido debe moverse visualmente a la columna correspondiente.

Tiempo de Servicio: Cada pedido debe mostrar un cronómetro que inicie al pasar al estado preparing (o desde pending). Esto simula el tiempo de preparación, esencial en un KDS.

Persistencia: Utiliza localStorage para guardar el estado de los pedidos. Si la página se recarga, los pedidos deben aparecer en la columna y estado correctos.

3. Desafío Adicional (Avanzado)
Prioridad Visual: Haz que los pedidos que llevan más tiempo en la columna Pendiente o En Preparación cambien de color (ej. a amarillo o rojo) para indicar urgencia.

Finalización/Eliminación: Añade un botón en la columna Listo para Entregar que elimine el pedido del sistema, simulando que fue entregado al cliente.

Este proyecto te obligará a gestionar el estado de los datos en tiempo real, crear funciones para el manejo de tiempo (setInterval), y manipular el DOM de manera compleja, moviendo y actualizando elementos entre contenedores. ¡Es un paso excelente hacia la simulación de sistemas reales!