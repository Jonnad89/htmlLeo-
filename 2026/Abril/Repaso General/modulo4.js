/**
 * Módulo 4: DOM, EVENTOS Y ASINCRONISMO
 */

// --- 1. SELECCIÓN Y MANIPULACIÓN DEL DOM ---
// Ya no usamos solo console.log, ahora escribimos en el HTML

// const titulo = document.querySelector("h1");
// const contenedor = document.getElementById("app");

// Cambiar contenido y estilos desde JS
// if (titulo) {
//     titulo.innerText = "Panel de control Activo"
//     titulo.style.color = "#22c55e"
// }

// --- 2. MÉTODOS DE ARRAY "TOP TIER" ---
// Son los que más se usan en el trabajo real para transformar datos

const productos = [
    {id: 1, nombre : "Celular", precio: 800, stock: 10},
    {id: 2, nombre : "Laptop", precio: 1500, stock: 0},
    {id: 3, nombre : "Tablet", precio: 400, stock: 5},
]

// .map() => Crea un nuevo array (ej. queremos solo los nombres)

const nombres = productos.map(p => p.nombre);
console.log(nombres);

// .filter() => Filtra elementos (ej. solo los que tienen stock)
const disponibles = productos.filter(p => p.stock > 0);
console.log(disponibles);

// .find() => Busca UN solo elemento por algo único (ID)
const productoEncontrado = productos.find(p => p.id === 1);
console.log(productoEncontrado);

// --- 3. ASINCRONISMO (El concepto del "tiempo") --- 
// Simula una consulta a una base de datos o un servidor

const perdirDatosAlServidor = () => {
    return new Promise((resolve, reject) => {
        console.log("Conectando con la base de datos...");
        

        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve({estado: "OK", datos: ["Usuario1", "Usuario2"] } );
            } else {
                reject("Error 404: No se encontraron datos")
            }
        }, 2000)
    })
}
// --- 4. ASYNC / AWAIT (La forma moderna de esperar)

const cargarApp = async () => {
    try {
        console.log("Iniciando aplicación");

        // El código se "detiene" acá hasta que la promesa se resuelva
        const respuesta = await perdirDatosAlServidor()

        console.log("Datos recibidos:", respuesta.datos);
        
    } catch (error) {
        console.error(error)
    }
}

cargarApp()

// --- Ejercicio de repaso ---
// "El buscador inteligente"

const baseDeDatos = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

const buscarTecnologia = async (termino) => {
    console.log(`Buscando "${termino}"...`);

    // Simulamos espera de red
    await new Promise(r => setTimeout(r, 1000));
    
    const resultado = baseDeDatos.filter(t => 
        t.toLowerCase().includes(termino.toLowerCase())
    );

    if (resultado.length > 0) {
        console.log("Resultados encontrados:", resultado.join(","));
    } else {
        console.log("No se encontraron coincidencias.");
    }
};

buscarTecnologia("js")

/** TAREA  */ 
/* 
Agarra el array de productos del punto 2 y usa un -filter() para crear una lista nueva que 
contenga solo los productos que cuestan enos de 1000. Después, usa un .map() sobre ese resultado
para mostrar solo los nombres en mayúsculas

Crear un proyecto de "Dashboard de finanzas personales con criptos"
*/



