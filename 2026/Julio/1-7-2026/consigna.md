Consigna del Proyecto: "SplitBill App" 
Objetivo de la aplicación:
Crear una calculadora interactiva para dividir la cuenta del grupo cuando salen a comer o compran algo juntos. La app debe calcular cuánto tiene que poner cada persona, cuánto se deja de propina y mostrar un resumen prolijo en la pantalla.

Requerimientos Visuales (HTML y CSS):
Formulario de Entrada:

Un campo de texto (input de tipo número) para el Total de la cuenta (ej: cuánto dolió el ticket).

Un campo de texto (input de tipo número) para la Cantidad de personas que van a pagar.

Un menú desplegable (select) para elegir el porcentaje de Propina que quieren dejar (opciones: 0%, 10%, 15%, 20%).

Botón de Acción: Un botón que diga "Calcular División".

Cuadro de Resultados (El Resumen): Un contenedor abajo que muestre de forma clara:

Total de la cuenta original: $X

Propina calculada: $Y

¡Cada uno debe poner!: $Z

Requerimientos de Lógica (JavaScript):
Cada vez que se haga clic en el botón "Calcular División", tenes programar los siguientes pasos:

Capturar y Validar (Frenos de mano):

Guardar en variables los valores de la cuenta, las personas y el porcentaje de propina usando .value.

Muy importante: Transformar esos textos en números reales con Number().

Validación: Si el total es menor o igual a 0, o si la cantidad de personas es menor a 1, la app no debe calcular nada. Debe mostrar un mensaje de error que diga: "Por favor, ingresá valores válidos."

Hacer las cuentas matemáticas:

Paso A: Calcular cuánta plata es la propina. (Fórmula: totalCuenta * (porcentajePropina / 100)).

Paso B: Sumar la cuenta original más la propina para tener el "Gran Total".

Paso C: Dividir ese Gran Total por la cantidad de personas.

Actualizar la pantalla: Inyectar los resultados finales en el HTML para que el grupo vea cuánto pone cada uno.