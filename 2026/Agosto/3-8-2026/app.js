/* 
Dashboard dinámico e interactivo
 
1. Datos de estado (simulación de una API finanzas)
2. Animaciones por matemática con requesAnimationFrom (contadores vivos)
3. Modificación dinámica de estilos CSS (Barras de progreso)
4. Filtrado de arrays y renderizado de tabblas dinámicas en el DOM

1. BASE DE DATOS MOCK (SIMULACIÓN DE RESPUESTA JSON EN UN BACKEND)
*/

const transacciones = [
  {
    id: 1,
    concepto: "Pago Cliente Freelance",
    categoria: "Trabajo",
    monto: 4500,
    tipo: "ingreso",
    estado: "Completado",
  },
  {
    id: 2,
    concepto: "Suscripción servidor Cloud",
    categoria: "Tecnología",
    monto: 120,
    tipo: "gasto",
    estado: "Completado",
  },
  {
    id: 3,
    concepto: "Venta de Servicio Web",
    categoria: "Trabajo",
    monto: 3700,
    tipo: "ingreso",
    estado: "Completado",
  },
  {
    id: 4,
    concepto: "Compra Equipamento",
    categoria: "Hardware",
    monto: 1800,
    tipo: "gasto",
    estado: "Pendiente",
  },
  {
    id: 5,
    concepto: "Suscripción Spotify/Netflix",
    categoria: "Ocio",
    monto: 50,
    tipo: "gasto",
    estado: "Completado",
  },
];

// 2. Selección de eleentos del DOM

const tablaCuerpo = document.getElementById("tablaCuerpo");
const botonesFiltro = document.querySelectorAll(".filter-btn");
const elementosKpi = document.querySelectorAll(".kpi-value");
const barrasProgreso = document.querySelectorAll(".progress-bar-fill");
const tarjetasAnimadas = document.querySelectorAll(".animated-card");
const btnRefrescar = document.getElementById("btnRefrescar");

// 3. Animación de entrada escalonada (Fade In / Slide Up)
function animarEntradaTarjetas() {
  tarjetasAnimadas.forEach((tarjeta, indice) => {
    setTimeout(() => {
      tarjeta.classList.add("show");
    }, indice * 150); // Cada tarjeta espera 150ms más que la anterior
  });
}

// 4. Animación de contadores numéricos (Efecto "Número creciendo")

function animarContador(elemento) {
  const objetivo = parseInt(elemento.getAttribute("data-target"));
  let valorActual = 0;
  const duracion = 1500; // La animación dura 1.5 segundos
  const pasos = 60; // 60 cuadros por segundo
  const incremento = objetivo / pasos;
  const tiempoEntrePasos = duracion / pasos;

  const temporizador = setInterval(() => {
    valorActual += incremento;

    if (valorActual >= objetivo) {
      //Cuando alcanzamos o superamos la meta, fijaos el valor exacto y frenamos
      elemento.innerText = `$${objetivo.toLocaleString()}`;
      clearInterval(temporizador);
    } else {
      // Formateamos con comas de miles para que parezca dinero real
      elemento.innerText = `$${Math.floor(valorActual).toLocaleString()}`;
    }
  }, tiempoEntrePasos);
}

// 5. Animación de barras de progreso

function animarBarrasProgreso() {
  barrasProgreso.forEach((barra) => {
    const porcentaje = barra.getAttribute("data-progress");
    // Le damos un pequeño delay para que la transición se aprecie mejor
    setTimeout(() => {
      barra.style.width = `${porcentaje}%`;
    }, 400);
  });
}

// 6. Renderizado y filtrado de la tabla de transacciones

function renderizarTabla(filtro = "todos") {
  tablaCuerpo.innerHTML = ""; //Limpieza inicial

  //Filtramos el array según el tipo seleccionado
  const datosFiltrados = transacciones.filter((item) => {
    if (filtro === "todos") return true;
    return item.tipo === filtro;
  });

  // Recorremos el array resultante y creamos filas de tabla ('<tr>')
  datosFiltrados.forEach((item) => {
    const fila = document.createElement("tr");

    // Determinamos el color según sea Ingreso o Gasto
    const esIngreso = item.tipo === "ingreso";
    const colorMonto = esIngreso ? "#10b981" : "#ef4444";
    const signo = esIngreso ? "+" : "-";

    fila.innerHTML = `
        <td style="font-weight: 600;">${item.concepto}</td>
        <td style="color: var(--text-secondary);">${item.categoria}</td>
        <td style="color: ${colorMonto}; font-weight: bold;">
        ${signo}$${item.monto.toLocaleString()}
        </td>

        <td>
            <span style="
            font-size: 0.75rem;
            padding: 4px 8px;
            border-radius: 6px;
            /* Cambiá 'completado' por 'Completado' */
background: ${item.estado === "Completado" ? "rgba(16,185,129, 0.15)" : "rgba(245, 158, 11, 0.15)"};
color: ${item.estado === "Completado" ? "#10b981" : "#f59e0b"};
            ">
            ${item.estado}
            </span>
        </td>
        `;

    tablaCuerpo.appendChild(fila);
  });
}

// 7. Eventos e interactividad

// Evento para los botones de filtro (Todos/Ingresos/Gatos)
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    // A. Sacamos la clase 'active' de todos los botones
    botonesFiltro.forEach((b) => b.classList.remove("active"));
    // B. Se la agregamos al boton clickeado
    boton.classList.add("active");

    // c. Leemos el atributo 'data-filter' y renderizamos
    const filtro = boton.getAttribute("data-filter");
    renderizarTabla(filtro);
  });
});

// Evento para el botón de "Actualizar Datos" (Reinicia todas las animaciones)

btnRefrescar.addEventListener("click", () => {
  // A. Reiniciamos contadores a $0
  elementosKpi.forEach((el) => {
    el.innerText = "$0";
    animarContador(el);
  });

  // B. Reiniciamoms ancho de barras de progreso
  barrasProgreso.forEach((b) => {
    b.style.width = "0%";
  });
  animarBarrasProgreso();
});

// 8. Arranque / Inicialización del dashboard
function inciarDashboard() {
  animarEntradaTarjetas();

  // Disparamos la animación de números en cada KPI
  elementosKpi.forEach((el) => animarContador(el));

  // Disparamos la animación de las barras de metas
  animarBarrasProgreso();

  // Cargamos la tabla inicialmente con todas las transacciones
  renderizarTabla("todos");
}

// Ejecutamos todo cuando carga la página
inciarDashboard();
