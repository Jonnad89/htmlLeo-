Ejercicio 1: Separador de Aprobados y Reprobados (Arrays y Filtros)Crea una función llamada separarAlumnos que reciba el array de notas de un grupo de alumnos. La función debe devolver un nuevo objeto con dos arrays internos: aprobados (notas $\ge 7$) y reprobados (notas $< 7$).

Consignas,Conceptos a Reforzar
a. La función debe recibir un array de números.,Manejo de Arrays.
b. Debe usar el método Array.prototype.filter() o un bucle for para clasificar las notas.,Métodos de Array de alto nivel o bucles.
c. La nota mínima de aprobación es 7.,Condicionales.

Ejercicio 2: Bonificación por Asistencia (Objetos y Lógica Múltiple)
Tienes un array de objetos que representan a los empleados de una empresa. La bonificación de fin de año se calcula bajo estas reglas:

Regla 1: La bonificación básica es del 10% del sueldo.

Regla 2: Si la asistencia es igual o superior a 90%, se añade un 5% extra (total 15%).

Regla 3: Si es un gerente Y tiene asistencia del 100%, se añade un 10% extra (total 20% sobre el sueldo).

Crea una función llamada calcularBonificacion que reciba el array de empleados y devuelva un nuevo array donde cada objeto tenga una nueva propiedad: bonoTotal (el monto del bono en dinero).

Consignas,Conceptos a Reforzar
a. Recorrer un array de objetos y crear uno nuevo (usar .map() o bucle for).,Arrays y Objetos.
b. Uso de if/else if/else anidados y operadores lógicos && para las reglas de bonificación.,Lógica Condicional Compleja.