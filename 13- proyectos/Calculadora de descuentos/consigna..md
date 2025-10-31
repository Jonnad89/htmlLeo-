Variables de Estado: Usar variables numéricas simples para el precio, el porcentaje de descuento y la cantidad de artículos. Variables y Constantes (let, const).

2.Entrada de Datos: Tres campos de entrada (input type="number"): Precio, Descuento (%) y Cantidad.Manejo de Inputs.

3.Lógica Matemática: Crear una función principal (calcularDescuento()) que ejecute tres cálculos obligatorios:Operadores Aritméticos.
a. Calcular el monto del descuento por artículo.Precio * (Descuento / 100)
b. Calcular el Ahorro Total.Descuento por Artículo * Cantidad
c. Calcular el Total a Pagar Final.(Precio - Monto Descuento) * Cantidad

4.Validación Condicional: Dentro de la función de cálculo, usar un if para verificar que el precio y el descuento no sean negativos y que el descuento no sea $\ge 100\%$. Si la validación falla, debe mostrar un error en el DOM.if/else y Lógica de Validación.

5.Manejo de Eventos y Salida: El cálculo debe ejecutarse cada vez que se cambie cualquiera de los tres campos de entrada ('input' event). Los resultados (Ahorro Total y Precio Final) deben actualizarse en el DOM.addEventListener('input', ...) y textContent

** Pistas **

Pistas de HTML (Estructura)
Tipos de Input: Para el precio, el descuento y la cantidad, debe asegurarse de usar el atributo type="number". Esto ayuda a la validación automática del navegador.

Identificadores (id): Cada elemento clave (los 3 inputs y los 3 displays de resultados) necesita un id único y descriptivo (ej. precio-input, total-final-display). ¡Sin un id, JavaScript no puede encontrarlos!

Etiquetas (label): Recordarle la importancia de usar etiquetas que apunten a los inputs con el atributo for. Esto mejora la accesibilidad y la experiencia de usuario.


Pistas de CSS (Estilo y Presentación)
Diseño de Layout: Usar Flexbox (display: flex) en el contenedor principal (.contenedor-principal) o en el contenedor de resultados (.resultados) para alinear bien los montos y las etiquetas. Esto es más fácil que usar float.

Variables de Color: Recordarle que usamos variables CSS (ej. --color-ahorro, --color-error) para los resultados. Así, si la lógica de validación falla (Requisito 4), solo tiene que cambiar el texto de error al color definido (--color-error).

El box-sizing: Para que el input ocupe todo el ancho sin desbordarse al darle padding, recordar la propiedad box-sizing: border-box;.

Pistas de JavaScript (Lógica Central)
Estas son las claves para la función calcularDescuento():

Obtener Valores: Para obtener el texto de los inputs, se usa .value. Pero como son números, debe usar parseFloat() o parseInt() para que JavaScript los trate como números en las operaciones matemáticas y no como cadenas de texto.

Manejo de Eventos (Tiempo Real): ¿Qué evento debe escuchar en los inputs para que el cálculo se ejecute inmediatamente mientras el usuario escribe o cambia el valor? La pista es el evento input.

** inputElemento.addEventListener('input', nombreDeLaFuncion); **

La Lógica del Descuento: La fórmula clave que debe resolver es:$$\text{Descuento Total} = \text{Precio} \times (\text{Descuento} / 100) \times \text{Cantidad}$$Mostrar Resultados: Para actualizar el texto en los displays (los <span> de los resultados), debe usar la propiedad .textContent.Formato de Moneda: Para asegurarse de que el resultado siempre tenga dos decimales (ej. 15.50), la pista es el método .toFixed(2) que se aplica al resultado numérico.Validación: Para el Requisito 4, la estructura básica es:

if (// Condición de error aquí) {
    // Mostrar mensaje de error
    return; // ¡CLAVE! Detiene la función si hay un error
}
// Si no hay errores, sigue con el cálculo