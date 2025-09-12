// Array de preguntas con opciones y respuestsa correcta

const questions = [
    {
        question : "¿Cuál es el resultado de 2 + 2?",
        answers: ["3", "4", "5"],
        correct : "4"
    },
    {
        question : "¿Qué método de array crea un nuevo array filtrado",
        answers: ["filter()", "map()", "forEach()"],
        correct : "filter()"
    },
    {
        question: "¿Cómo se accede a la propiedad 'nombre' de un objeto?",
        answers : ["obj.nombre", "obj[nombre]", "obj{nombre}"],
        correct : "obj.nombre"
    }
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

// Cargamos preguntas dinámicamente
function loadQuiz() {
    quizContainer.innerHTML = questions.map((q, index) => {
        return `
        <div class="question">
            <h3>${index +1}. ${q.question} </h3>
            ${q.answers
                .map(ans =>
                    `
                    <label>
                    <input type="radio" name=question${index} value="${ans}"> ${ans}
                    </label><br>`
                )
                .join("")}
        </div>
        `;
    }).join("");
}

//Calculamos resultado
function showResults() {
    let score = 0;
    questions.forEach((q, index)=> {
        const selector = `input[name=question${index}]:checked`;
        const input = document.querySelector(selector)
        const userAnswer = input ? input.value.trim() : "";
        if (userAnswer === q.correct.trim()){
            score++;
        }
    });
    resultContainer.textContent = `Obtuviste ${score} de ${questions.length} correctas`;
}

loadQuiz();
submitButton.addEventListener("click", showResults)