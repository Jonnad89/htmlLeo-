Evaluaciones y Correcciones del Código 
Puntuación: 4 / 10

Lo positivo:
Estructura HTML y Maquetado:Uso de etiquetas semánticas (<header>, <main>, <label>). Tuviste una excelente iniciativa al dividir la interfaz visualmente entre "Pendientes" y "Completadas".

Estilos CSS: Muy buena aplicación de Flexbox y animaciones con :hover.

Puntos a corregir en JavaScript:
Falta de Persistencia (localStorage): El proyecto no guarda datos en el navegador ni lee al recargar (F5 borra todo).

Sin Array de Estado: Manipulación del DOM directamente en lugar de usar un array de objetos.

Errores de sintaxis:

Anidación de <li>: En cargarTarea() creó un <li> con JS y hay otro <li> adentro por HTML string (<li><li>...</li></li>).

Error de Validación: Evaluaste si el objeto del DOM inputAgregarTarea !== "" en lugar de evaluar su texto inputAgregarTarea.value.trim() !== "".

Confusión de Nodos DOM con Arrays: Intentas hacer listaCompletadas.push(listaPendientes[0]). Un elemento HTML del DOM no tiene método .push().
untos a reforzar en el código:

La regla de oro en JS (El Estado): Para manipular elementos del DOM no usamos métodos de arrays (como .push()) directo sobre etiquetas HTML. Creamos un Array en JS, lo modificamos y volvemos a dibujar la pantalla.

Lectura de Inputs: Para leer lo que el usuario escribe usamos input.value, no la variable del elemento directa.

LocalStorage: Te faltó incluir localStorage.setItem y JSON.parse para que las tareas no se borren al apretar F5.

Nota final: 4/10 (Aprobada la maqueta visual, a practicar más la lógica del JS). ¡A corregir estos puntos y rehacerlo! Pero el puntaje es solo un número que nos impulsa a mejorar, vamos bien Leo!