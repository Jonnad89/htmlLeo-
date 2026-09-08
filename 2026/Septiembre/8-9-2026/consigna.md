Ejercicio 1: El Lector de Inputs y Trim
El problema a resolver: Corregir la lectura del valor de un input y su validación.

Consigna para Leo:

Crea un input y un button . Al hacer clic en el botón, el código debe verificar que el campo no esté vacío ni contenga solo espacios. Si tiene texto válido, mostralo en un alert() o en un <p>. Si está vacío, mostrá una alerta de error.

Qué estás evaluando: Que use input.value.trim() y no la variable del elemento DOM directamente.

=========================================================================================================

Ejercicio 2: Cambio de Estado en un Array de Objetos
El problema a resolver: Modificar datos internamente en JavaScript sin tocar el DOM directamente.

Consigna para Leo:

Dado el siguiente array de objetos:
let frutas = [{ id: 1, nombre: "Manzana", enStock: true }, { id: 2, nombre: "Pera", enStock: true }];
Escribí una función cambiarStock(id) que busque la fruta por su id y le cambie la propiedad enStock a false. Luego, hacé un console.log(frutas) para verificar que se modificó el array.

Qué estás evaluando: Que entienda cómo mutar o mapear objetos dentro de un array según un identificador único.

=========================================================================================================

Ejercicio 3: El Renderizador de Listas (El Estado Manda)El problema a resolver: Crear el HTML a partir del Array y no hacer .appendChild() manual suelto.Consigna para Leo:Usando el array del ejercicio anterior, creá una función renderizar(). La función debe vaciar un ul con innerHTML = "" y recorrer el array con .forEach() para agregar un li por cada fruta. Si enStock es false, el texto debe decir "AGOTADO".Qué estás evaluando: Que domine el patrón "Limpiar contenedor $ \ rightarrow $ Recorrer Array $ \ rightarrow $ Dibujar en pantalla".

=========================================================================================================

Ejercicio 4: Guardado y Lectura de Emergencia
El problema a resolver: Uso correcto de JSON.stringify y JSON.parse.

Consigna para Leo:

Guardá el array frutas en el localStorage bajo la clave "mis_frutas". Después, abrí una pestaña nueva o recargá la página y lográ recuperar ese array en una variable llamada frutasGuardadas convirtiéndolo de vuelta a objeto JS.

Qué estás evaluando: Uso fluido de localStorage.setItem(), localStorage.getItem(), JSON.stringify() y JSON.parse()