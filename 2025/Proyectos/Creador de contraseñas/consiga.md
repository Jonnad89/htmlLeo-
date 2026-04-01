El objetivo es desarrollar una herramienta interactiva en Vanilla JavaScript que cumpla una doble función: generar contraseñas aleatorias personalizables y analizar la fortaleza de cualquier contraseña ingresada por el usuario, brindando feedback visual en tiempo real.

Implementar la función generar(largo, opciones) que use los arrays de caracteres y el método Math.random() para construir una cadena que cumpla con todos los criterios seleccionados por el usuario.

Debe garantizar que, si el usuario selecciona una opción (ej. "incluir Símbolos"), la contraseña generada contenga al menos uno de ese tipo para ser verdaderamente segura

Implementar la función calcularFortaleza(password) que devuelva un puntaje numérico (0 a 100) basado en los siguientes criterios de seguridad:

Longitud: Puntuación incremental (mayor puntaje si es ≥8, ≥12 y ≥16 caracteres).

Tipos de Caracteres: Puntuación fija por verificar la presencia de cada uno de los cuatro tipos: minúsculas, mayúsculas, números y símbolos.

El input principal (password-output) debe escuchar el evento input para llamar a la función de validación en tiempo real y actualizar la barra de fortaleza.

Al hacer clic en "Generar Contraseña", se debe calcular la nueva contraseña y se debe actualizar la barra de fortaleza de inmediato con el score de la contraseña generada.