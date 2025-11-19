//1. Estructura de datos
const datosVentas = [
    {mes: "Enero", ventas: 1200},
    {mes: "Febrero", ventas: 1850},
    {mes: "Marzo", ventas: 900},
    {mes: "Abril", ventas: 2400},
];

//2. Selectores del DOM
const graficoBarrasDiv = document.getElementById('grafico-barras');
const actualizarBtn = document.getElementById('actualizar-btn');
const maximoDisplay = document.getElementById('maximo-display');

// 3. Función principal: Crea y renderiza el gráfico

function generarGrafico() {
    // Limpiar cualquier gráfico anterior
    graficoBarrasDiv.innerHTML = '';

    // 2. Cálculo de Escala (la parte más compleja de este proyecto)

    //1. Obtener un array simple con solo los valores de ventas
    const soloValores = datosVentas.map(dato => dato.ventas);

    //2. Usar Math.max con el operador Spred (...) para encontrar el máximo
    const ventaMaxima = Math.max(...soloValores);

    // Actualizar el display de referencia
    maximoDisplay.textContent = `Venta Máxima (referencia): $${ventaMaxima}`;

    //4. Renderizado dinámico de barras
    datosVentas.forEach(dato => {
        // Calcular la altura de a barra en porcentaje
        const alturaPorcentaje = (dato.ventas / ventaMaxima) * 100;

        //1.Crear el elemento de la barra (el div principal)
        const barra = document.createElement('div');
        barra.classList.add('barra');

        //2. Aplicar el estilo de altura dinámico
        barra.style.height = `${alturaPorcentaje}%`;

        //3. Crear y añadir el texto del valor

        barra.innerHTML = `
            <span class="barra-valor">$${dato.ventas}</span>
            <span class="barra-mes">${dato.mes}</span>
        `;

        //4. Añadir la barra al contenedor principal del gráfico
        graficoBarrasDiv.appendChild(barra);
    });
}

//5. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Generar el gráfico al cargar la página
    generarGrafico();

    // Asignar listener al botón (para poder actualizarlo o simular recarga)
    actualizarBtn.addEventListener('click', generarGrafico)
})