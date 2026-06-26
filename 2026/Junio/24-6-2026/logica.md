Ejercicio 1: El Reajuste Inflacionario (Modificar el Array) 📈
Hasta ahora venimos leyendo datos de una lista. Ahora toca cambiar los datos reales que están adentro de los cajones. Don Carlos necesita aumentar un 10% todos los precios de su almacén por la inflación.

La regla: Crear una función que reciba el array de precios [100, 200, 300, 500], multiplique cada precio por 1.10 (que equivale a sumarle el 10%) y modifique la lista original. Al final, debe devolver la lista ya actualizada.

Pista clave: En lugar de usar una variable externa, tenes que reasignar el valor directamente en el cajón correspondiente: lista[i] = lista[i] * 1.10;

Ejercicio 2: El Validador de Alumnos (Doble condición) 🎓
En una escuela, para que un alumno apruebe la materia necesita cumplir dos condiciones obligatorias: tener una nota mayor o igual a 6 Y además tener una asistencia mayor o igual al 75%.

La regla: Crear una función llamada evaluarAlumno que reciba dos números (la nota y la asistencia). Debe devolver el texto "Aprobado" si cumple ambas cosas, o "Reprobado" si falla en alguna.

Pista: Vas a tener que usar el operador lógico de intersección && (AND) adentro del if.

Ejercicio 3: El Contador de Vocales (Análisis de texto) 🗣️
Acá tenes que crear un sistema que cuente cuántas vocales (a, e, i, o, u) tiene una palabra.

La regla: La función recibe una palabra (por ejemplo, "computadora") y debe devolver el número exacto de vocales que contiene (en este caso, 5).

Pista: Vas a necesitar un bucle for que recorra la palabra letra por letra. Adentro, un if largo que chequee si la letra actual es igual a "a", "e", "i", "o" o "u". Para agrupar los "o", se usa el operador lógico || (OR).

Ejercicio 4: El Administrador de Tareas (Buscar un elemento) 📋
Imaginá una lista de tareas donde cada una tiene un estado: ["Pendiente", "Completada", "Pendiente", "En progreso"]. Queremos saber si todavía queda trabajo por hacer.

La regla: Crear una función que reciba esa lista de tareas y devuelva true si encuentra al menos una tarea que esté "Pendiente". Si están todas terminadas o en progreso, devuelve false.

Pista: En cuanto el bucle for abra un cajón [i] y encuentre la palabra "Pendiente", acá podes meter un return true; ahí mismo para cortar la función (Freno de mano). Si el bucle termina por completo y nunca entró a ese if, abajo de todo pone return false;.