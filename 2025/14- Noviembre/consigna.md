crear una aplicación que simule el flujo de trabajo de una lavandería, desde la recepción de la ropa hasta el cálculo final de la cuenta.

Requisitos:

Estructura de Datos: Usar un array de objetos (let pedidos = []). Cada objeto debe representar un pedido con: id, usuario (nombre), pesoKg (para el precio), y estado (INGRESADO, LAVANDO, TERMINADO).

Cálculo de Precios: Definir una tarifa fija (ej. $2.50 por kg). El precio total debe calcularse dinámicamente: pesoKg * tarifa.

Flujo de Trabajo: Botones para cambiar el estado de un pedido específico: "A Lavar" (cambia a LAVANDO) y "Finalizar" (cambia a TERMINADO).

Visualización Clara: La lista de pedidos debe usar CSS para mostrar claramente el estado de cada pedido (ej. verde para "TERMINADO", azul para "LAVANDO").

El JS comienza así:

// --- 1. ESTADO GLOBAL Y CONFIGURACIÓN ---
const TARIFA_POR_KG = 2.50; // Ejemplo: 2.50 USD/moneda por kilogramo
const STORAGE_KEY = 'lavanderiaPedidos';

// Cargar pedidos guardados o usar un array vacío si no hay nada
let pedidos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

De acá en adelante van los selectores del DOM