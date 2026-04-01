. Inventario	Mostrar el stock actual de Azúcar y Envoltorios. Botones para reponer (sumar stock).	Aritmética simple, gestión de múltiples variables de estado.
2. Producción	Botón "Crear Lote" que consume Materia Prima y produce Caramelos sin empacar. Botón "Empacar" que consume Envoltorios y convierte Caramelos sin empacar en Caramelos terminados.	Lógica condicional anidada (if anidados) para verificar si hay suficiente stock antes de producir.
3. Logística	Botón "Entregar Pedido" que resta una cantidad de Caramelos terminados y suma un Ingreso por Venta (dinero).	Aritmética con acumulación (+=, -=).
4. Estado Visual	La interfaz debe actualizarse inmediatamente y el estado debe ser persistente usando localStorage.
Múltiples .textContent y localStorage.

Pista JS:

const STORAGE_KEY = 'candyFlowState';
const COSTO_LOTE_AZUCAR = 10;
const CARAMELOS_POR_LOTE = 50;
const ENVOLTORIOS_POR_LOTE = 50;
const CARAMELOS_POR_ENTREGA = 100;
const INGRESO_POR_ENTREGA = 500;

const DEFAULT_STATE = {
    azucar: 50,
    envoltorios: 200,
    caramelosCrudos: 0,
    caramelosTerminados: 0,
    ingresos: 0
};

let estado = JSON.parse(localStorage.getItem(STORAGE_KEY)) || DEFAULT_STATE;