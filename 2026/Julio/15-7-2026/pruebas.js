// 1. Eliminador de duplicados
function unicos(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }
    return resultado;
    // Con Set (Avanzado): return [...new Set(array)];
}

console.log(unicos([1,2,2,4,5,6,6]));


// 2. Generador de contraseñas
function generarPassword(longitud) {
    const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < longitud; i++) {
        let indiceAzar = Math.floor(Math.random() * caracteres.length);
        password += caracteres[indiceAzar];
    }
    return password;
}

console.log(generarPassword(16));




// 3. Clasificador de edades
function clasificarPersonas(personas) {
    let menores = [];
    let mayores = [];
    
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad >= 18) {
            mayores.push(personas[i].nombre);
        } else {
            menores.push(personas[i].nombre);
        }
    }
    return { menores: menores, mayores: mayores };
}
const grupoFamiliar = [
    { nombre: "Mateo", edad: 14 },
    { nombre: "Jona", edad: 30 },
    { nombre: "Benja", edad: 17 },
    { nombre: "Sofía", edad: 18 }, // Al límite, tiene que ir a mayores
    { nombre: "Ariel", edad: 45 }
];

const resultadoClasificacion = clasificarPersonas(grupoFamiliar);
console.log("Objeto completo devuelto:", resultadoClasificacion);
console.log("¿Menores ordenados? (Esperado: ['Mateo', 'Benja']):", resultadoClasificacion.menores);
console.log("¿Mayores ordenados? (Esperado: ['Jona', 'Sofía', 'Ariel']):", resultadoClasificacion.mayores);


// 4. Buscador en catálogo
function buscarProducto(productos, termino) {
    let terminoLimpio = termino.toLowerCase();
    let encontrados = [];
    
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].toLowerCase().includes(terminoLimpio)) {
            encontrados.push(productos[i]);
        }
    }
    return encontrados;
}

console.log("\n--- 4. PROBANDO: buscarProducto ---");
const catalogoMundial = [
    "Camiseta Titular Argentina 🇦🇷",
    "Pelota Al Rihla Oficial",
    "Botines de cuero negro",
    "Camiseta Suplente ARG",
    "Short de entrenamiento"
];

// Prueba 1: Buscando en mayúsculas algo que está mezclado
console.log("Buscar 'ARG' (Debe traer 2 camisetas):", buscarProducto(catalogoMundial, "ARG"));
// Prueba 2: Buscando algo en minúsculas
console.log("Buscar 'pelo' (Debe traer la pelota):", buscarProducto(catalogoMundial, "pelo"));
// Prueba 3: Buscando algo que no existe (Debe devolver array vacío [])
console.log("Buscar 'Medias' (Esperado: []):", buscarProducto(catalogoMundial, "Medias"));

// 5. Formateador de nombres
function capitalizarNombre(nombreCompleto) {
    let palabras = nombreCompleto.trim().split(" ");
    let palabrasFormateadas = [];
    
    for (let i = 0; i < palabras.length; i++) {
        let pal = palabras[i];
        if (pal !== "") { // Evita procesar espacios múltiples seguidos
            let formateada = pal[0].toUpperCase() + pal.slice(1).toLowerCase();
            palabrasFormateadas.push(formateada);
        }
    }
    return palabrasFormateadas.join(" ");
}

console.log("\n--- 5. PROBANDO: capitalizarNombre ---");
// Prueba 1: Mezcla fea de mayúsculas/minúsculas y espacios en las puntas
console.log("Caso estándar:", capitalizarNombre("  lEOnEl mEsSi  ")); 
// Esperado: "Leonel Messi"

// Prueba 2: Caso extremo con muchos espacios en el medio (el IF de tu código salva esto)
console.log("Caso espacios múltiples:", capitalizarNombre("joNaTaN      pErEz")); 
// Esperado: "Jonatan Perez"

// 6. Promedio con datos faltantes
function calcularPromedioNotas(notas = []) {
    if (notas.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return +(suma / notas.length).toFixed(1);
}

console.log("\n--- 6. PROBANDO: calcularPromedioNotas ---");
// Prueba 1: Con notas normales (Debería dar 8.3)
console.log("Promedio estándar [7, 8, 10]:", calcularPromedioNotas([7, 8, 10]));

// Prueba 2: Pasándole un array vacío (Tu código debe retornar 0 en vez de NaN)
console.log("Promedio array vacío (Esperado 0):", calcularPromedioNotas([]));

// Prueba 3: No pasándole absolutamente nada (Usa el parámetro por defecto y retorna 0)
console.log("Promedio sin parámetros (Esperado 0):", calcularPromedioNotas());
