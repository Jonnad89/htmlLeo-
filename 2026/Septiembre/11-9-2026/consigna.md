Bloque 1: Transformación Compleja y Lógica de Negocio
Ejercicio 1: El Tablero de Métricas de Ventas

Consigna: Tenés la lista let ventas = [{ id: 1, cliente: "Ana", monto: 120, categoria: "tech" }, { id: 2, cliente: " Berto ", monto: 50, categoria: "hogar" }, { id: 3, cliente: "Carla", monto: 300, categoria: "tech" }];.

Escribí una función procesarVentas(categoria) que primero filtre las ventas de esa categoría con .filter().

Sobre el resultado, usá .map() para limpiar los nombres de los clientes quitando espacios extra con .trim() y pasando sus nombres a mayúsculas.

Calculá y retorná un objeto con el siguiente formato: { categoria: "TECH", totalFacturado: 420, clientes: ["ANA", "CARLA"] }

=========================================================================================================

Ejercicio 2: Sistema de Descuentos por Antigüedad

Consigna: Dado un array de usuarios let clientes = [{ id: 101, nombre: "Marcos", compras: 12, esVIP: false }, { id: 102, nombre: "Julia", compras: 3, esVIP: false }];.

Creá la función actualizarEstados(). Recorré el array con .map(): si el cliente tiene más de 5 compras, convertí esVIP a true.

Agregale a cada cliente una nueva propiedad descuento que sea del 15% si es VIP o 5% si no lo es.

Generá una función que devuelva solo la lista de nombres de los clientes que quedaron con el 15% de descuento.


=========================================================================================================

Bloque 2: Filtrado Multi-Criterio y Paginado
Ejercicio 3: Filtro Combinado de Inventario

Consigna: Tenés un inventario let productos = [{ id: 1, nombre: "Teclado", precio: 50, stock: 10 }, { id: 2, nombre: "Mouse", precio: 20, stock: 0 }, { id: 3, nombre: "Monitor", precio: 200, stock: 5 }];.

Escribí una función buscarProductos(precioMaximo, soloConStock).

Si soloConStock es true, debe filtrar los productos cuyo stock > 0. Si es false, ignora esa regla.

Además, solo debe traer productos cuyo precio sea menor o igual a precioMaximo.

Mapeá la lista final para que devuelva strings formateados: "Teclado - $50 (10 unidades)".

=========================================================================================================
Ejercicio 4: Motor de Búsqueda de Texto Abierto

Consigna: Dado un listado de posts let posts = [{ id: 1, titulo: "Aprender JavaScript en 2026", tags: ["js", "web"] }, { id: 2, titulo: "Tutorial de CSS Grid", tags: ["css", "diseño"] }];.

Escribí una función buscarPost(termino).

Normalizá el término recibido limpiándolo con .trim() y .toLowerCase().

La función debe devolver los posts donde el término coincida o bien con parte del titulo (usando .includes()), o bien exista dentro del array de tags.

=========================================================================================================

Bloque 3: Manipulación Avanzada de Objetos y Estado
Ejercicio 5: Gestor de Turnos y Reordenamiento

Consigna: Tenés una lista de turnos médicos let turnos = [{ id: 1, paciente: "Esteban", atendid: false, urgente: false }, { id: 2, paciente: "Laura", atendido: false, urgente: true }];.

Escribí la función atenderPaciente(id) que cambie atendido a true mediante .map().

Escribí la función obtenerProximos() que devuelva un array ordenado donde los pacientes con urgente: true y atendido: false aparezcan primero en la lista.

=========================================================================================================

Ejercicio 6: Normalizador de Datos de Formularios

Consigna: Imaginá que recibís un objeto crudo de un formulario desprolijo:

let datosRaw = { nombreCompleto: "  mario alberto kempes ", edad: "30", hobbys: "futbol, tenis, lectura " };.

Escribí una función limpiarFormulario(objeto) que procese los datos y retorne un objeto perfecto.

nombreCompleto: debe quedar en Formato Título o minúsculas limpias sin espacios extras.

edad: debe convertirse a un número entero estricto (Number() o parseInt()).

hobbys: debe convertirse de un string separado por comas a un Array de Strings, quitando los espacios de cada hobby (usando .split(",") combinado con .map() y .trim()).

=========================================================================================================


