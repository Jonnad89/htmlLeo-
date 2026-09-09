Bloque A: Limpieza e Inputs (Repetición de .value y .trim())
Ejercicio 1: El Validador de Nombres

Consigna: Tenés un input id="nombre" y un button id="btn-validar". Al hacer clic, leé el texto, sacale los espacios vacíos con .trim() y validá: si tiene menos de 3 caracteres o está vacío, mostrá en un p id="mensaje" el texto "Nombre inválido". Si está bien, mostrá "Bienvenido [ nombre ]".

Sintaxis a repetir: input.value.trim(), .length, p.textContent.

Ejercicio 2: Formateador de Comentarios

Consigna: Tenés un textarea id="comentario" y un botón. Al hacer clic, leé el valor, aplicale .trim() y convertilo a mayúsculas con .toUpperCase(). Insertá el resultado como un li dentro de un ul.

Sintaxis a repetir: textarea.value.trim().toUpperCase(), document.createElement("li"), .appendChild().

Bloque B: Array de Objetos y Filtros (Repetición de .map() y .filter())
Ejercicio 3: El Interruptor de Estado (.map())

Consigna: Dado el array let usuarios = [{ id: 1, nombre: "Leo", activo: true }, { id: 2, nombre: "Jonatan", activo: false }];, escribí una función desactivarUsuario(id). La función debe usar .map() para retornar un nuevo array donde el usuario con ese id tenga activo: false.

Sintaxis a repetir: array.map(item => item.id === id ? { ...item, activo: false } : item).

Ejercicio 4: El Filtro de Eliminación (.filter())

Consigna: Dado el array let carrito = [{ id: 10, producto: "Pan" }, { id: 20, producto: "Leche" }, { id: 30, producto: "Café" }];, escribí una función eliminarDelCarrito(idAEliminar). Usá .filter() para quitar el producto del array y mostrá el array resultante por console.log().

Sintaxis a repetir: array = array.filter(item => item.id !== idAEliminar).

Bloque C: Persistencia en LocalStorage (Repetición de stringify y parse)
Ejercicio 5: Guardado Automatizado

Consigna: Creá un array let puntajes = [100, 250, 500];. Escribí una función guardarPuntajes() que convierta el array a texto con JSON.stringify() y lo guarde en localStorage bajo la clave "mis_puntajes".

Sintaxis a repetir: localStorage.setItem("clave", JSON.stringify(array)).

Ejercicio 6: Carga Segura con Fallback

Consigna: Escribí la línea de código exacta para recuperar "mis_puntajes" de localStorage. Usá JSON.parse() y asegurate de agregar el operador || [] al final para que nunca devuelva null si la memoria está vacía.

Sintaxis a repetir: let datos = JSON.parse(localStorage.getItem("clave")) || [];.