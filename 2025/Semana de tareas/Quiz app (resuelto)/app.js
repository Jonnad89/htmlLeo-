// --- 1. DATOS DEL QUIZ ---
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Berlín", "Madrid", "París", "Roma"],
        respuestaCorrecta: 2 // Índice de la respuesta correcta
    },
    {
        pregunta: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
        opciones: ["Marte", "Júpiter", "Venus", "Saturno"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿En qué año se lanzó JavaScript?",
        opciones: ["1990", "1995", "2000", "2005"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el lenguaje de marcado para la web?",
        opciones: ["Python", "CSS", "JavaScript", "HTML"],
        respuestaCorrecta: 3
    }
];

// --- 2. SELECTORES Y VARIABLES DE ESTADO ---
const quizPregunta = document.getElementById('quiz-pregunta');
const opcionesContenedor = document.getElementById('opciones-contenedor');
const resultadoFinalDiv = document.getElementById('resultado-final');
const puntuacionFinalH2 = document.getElementById('puntuacion-final');
const reiniciarBtn = document.getElementById('reiniciar-btn');

let preguntaActualIndex = 0;
let puntuacion = 0;

// --- 3. LÓGICA PRINCIPAL ---
function mostrarPregunta() {
    const preguntaActual = preguntas[preguntaActualIndex];
    quizPregunta.textContent = preguntaActual.pregunta;
    
    // Asignar texto a los botones de opciones
    const botonesOpcion = opcionesContenedor.querySelectorAll('.btn-opcion');
    botonesOpcion.forEach((boton, index) => {
        boton.textContent = preguntaActual.opciones[index];
        boton.classList.remove('oculto');
    });
    
    opcionesContenedor.classList.remove('oculto');
    resultadoFinalDiv.classList.add('oculto');
}

function verificarRespuesta(opcionSeleccionada) {
    const preguntaActual = preguntas[preguntaActualIndex];
    
    // Deshabilitar los botones después de la selección
    opcionesContenedor.querySelectorAll('.btn-opcion').forEach(boton => {
        boton.disabled = true;
    });

    if (opcionSeleccionada === preguntaActual.respuestaCorrecta) {
        puntuacion++;
    }

    // Pequeña pausa para mostrar la respuesta y pasar a la siguiente
    setTimeout(() => {
        preguntaActualIndex++;
        if (preguntaActualIndex < preguntas.length) {
            mostrarPregunta();
            opcionesContenedor.querySelectorAll('.btn-opcion').forEach(boton => {
                boton.disabled = false;
            });
        } else {
            mostrarResultado();
        }
    }, 500); // Pausa de 0.5 segundos
}

function mostrarResultado() {
    quizPregunta.classList.add('oculto');
    opcionesContenedor.classList.add('oculto');
    resultadoFinalDiv.classList.remove('oculto');
    puntuacionFinalH2.textContent = `Tu puntuación es ${puntuacion} de ${preguntas.length}.`;
}

function reiniciarQuiz() {
    preguntaActualIndex = 0;
    puntuacion = 0;
    quizPregunta.classList.remove('oculto');
    mostrarPregunta();
    opcionesContenedor.querySelectorAll('.btn-opcion').forEach(boton => {
        boton.disabled = false;
    });
}

// --- 4. MANEJO DE EVENTOS ---
opcionesContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-opcion')) {
        const opcionSeleccionada = parseInt(e.target.dataset.opcion);
        verificarRespuesta(opcionSeleccionada);
    }
});

reiniciarBtn.addEventListener('click', reiniciarQuiz);

// Iniciar el quiz al cargar la página
mostrarPregunta();