Métodos de arrays avanzado

Dado un array de productos con nombre y precio, usar map, filter y reduce para:
    - Crear una lista solo de nombres
    - Filtrar productos mayores a 50
    - Calcular el precio total

Asincronía

Simular un login con Promise:
    - Si usuario y contraseña son correctos -> resolve("Bienvenido")
    - Si no -> reject("Acceso denegado")


Proyecto mini
- Lista de productos con descuento automático
    - Array de objetos con productos.
    - Usar .map() para aplicar un 20% de descuento
    - Mostrar en consola el resultado
    - * Guardar el array modificado en localStorage

Funciones:
- Crear una funcion multiplicar(a, b= 1) que devuelva la multiplicación

- Crear una función procesarArray(arr, fn) que recorra un array y aplique fn a cada elemento

Closures:
- Crear una función crearAlarma(mensaje, tiempo) que use setTimeout para mostrar el mensaje después del tiempo indicado
- Crear un contadorRegresivo(inicio) que use un closure y devuelva los valores hasta llegar a 0.
- Hacer un crearCarrito() que devuelva un objeto con métodos para agregarProducto, verCarrito y vaciarCarrito.

Objetos: 
- Crear un objeto usuario donde el nombre de la propiedad venga de una variable clave = "email"

Métodos:
- Crear una función mostrarObjeto(obj) que muestre todas las propiedades y valores

Destructuring: 
- Extraer la propiedad ciudad de un objeto anidado sin copiar la propiedad dirección

Prototipo: 
- Crear un objeto vehiculo con un método arrancar(). Luego crear un auto que herede de vehiculo y tenga un método propio tocarBocina()

Ejercicio integrador:
- Mini sistema de biblioteca
    - crear una clase Libro con titulo y autor
    - crear una clase Biblioteca que guarde un array de libros y tenga métodoss:
        - agregarLibro(libro)
        - mostrarLibros()
    - Crear un objeto miBiblioteca, agregar libros y listarlos

- Crear una clase CuentaBancaria con métodos depositar, retirar, verSaldo.
- Usar closures y objetos para proteger el saldo.
- Crear un carritoDeCompras como objeto con métodos: agregarProducto, calcularTotal, vaciar

OPCIONAL:
- colocar todo en html y css

opcional 2:
- Crear un gesto de tareas:
    - objetos con métodoss
    - uso de arrays de objetos
    - métodos importantes como forEach, find, filter
    - uso de this dentro de un objeto parareferirse a su propio estado
    - simulación de una aplicación real(mini to-do list)
