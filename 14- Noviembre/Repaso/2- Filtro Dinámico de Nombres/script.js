// Array de Datos (Estructura de Objetos)

const personal = [
    { nombre: "Jonatan", cargo : "Gerente" },
    { nombre: "Roma", cargo : "Coordinadora" },
    { nombre: "Marta", cargo :"Asistente" },
    { nombre: "Carlos", cargo : "Desarrollador" },
    { nombre: "Ana", cargo : "Diseñadora" },
];

const filtroInput = document.getElementById("filtro-input");
const listaResultaddosUL = document.getElementById('lista-resultados');

//1. Función de Renderizado
function renderizarLista(data) {
    listaResultaddosUL.innerHTML = ''; // Limpiar

    data.forEach(persona => {
        const li = document.createElement('li');
        // Asegurar que el texto sea visible
        li.textContent = `${persona.nombre} (${persona.cargo}) `;
        listaResultaddosUL.appendChild(li)
    });
}

//2. Función de Filtrado ( Evento 'input' )
function filtrarPersonal() {
    const termino = filtroInput.value.toLowerCase().trim();

    if (termino === '') {
        // Si está vacío, mostrar el array completo
        renderizarLista(personal)
        return;
    }

    // Usar filter() para buscar coincidencia

    const resultados = personal.filter(persona =>
        persona.nombre.toLowerCase().includes(termino)
    );

    renderizarLista(resultados);
}

// inicialización

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar la lista completa al cargar
    renderizarLista(personal)

    // Usar el evento 'input' para filtrar en tiempo real
    filtroInput.addEventListener('input', filtrarPersonal)
})