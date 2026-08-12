Objetivo
Desarrollar una aplicación web interactiva de preguntas y respuestas (Trivia) que ponga a prueba el control de flujo en JavaScript, el manejo de eventos de tiempo (setInterval / clearInterval) y la gestión de estados en el DOM.

Requerimientos de la Aplicación

1. Flujo de Pantallas (Single Page App)

Inicio: Título del juego, breve instrucción y botón "Comenzar".

Juego: Muestra el número de pregunta actual (ej: Pregunta 2/4), el puntaje acumulado, el texto de la pregunta, 4 opciones de respuesta y el temporizador.

Resultados: Al terminar, muestra el puntaje final, total de aciertos/desaciertos y el % de efectividad lograda.

2. Lógica de Tiempo (Reloj por Pregunta)

Cada pregunta tiene 10 segundos para responderse.

Debe incluir una barra de progreso visual que se vaya reduciendo a la par del tiempo.

Si el tiempo llega a cero, la pregunta se marca automáticamente como incorrecta y habilita el avance.

3. Respuestas e Interactividad

Al seleccionar una opción, se deben deshabilitar los demás botones para evitar clics múltiples.

Dar feedback visual instantáneo: botón verde si es correcta, rojo si es incorrecta (y marcar en verde cuál era la correcta).

Detener el reloj inmediatamente apenas el usuario responde.

Mostrar el botón "Siguiente Pregunta" recién cuando se haya respondido.

4. Sistema de Puntaje Ponderado

Respuesta correcta: 100 puntos base.

Bonus por velocidad: +10 puntos extra por cada segundo restante en el reloj.

Requisitos Técnicos del Código

JavaScript: Control estricto de los temporizadores con clearInterval para evitar que los relojes se encadenen. Estructurar el código en funciones claras (iniciar juego, cargar pregunta, validar respuesta, renderizar resultados).

HTML/CSS: Maquetado limpio con Flexbox/Grid, interfaz adaptada a modo oscuro y botones con estados :disabled e interacciones visuales.