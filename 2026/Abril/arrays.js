// Arrays -> Es una sola variable que guarda muchas cosas adentro

// Imagina una fila de asientos, cada uno tiene un número (índice)

const frutas = ["Manzana", "Pera", "Banana"];

// IMPORTANTE:  En programación se cuenta desde el 0

console.log(frutas[0]) // "Manzana"
console.log(frutas[1]) // "Pera"

//.forEach() "El cartero"

const nombres = ["Juan", "Marta", "Pedro"]; 

nombres.forEach(persona => {
    console.log("Hola " + persona);
});

//.filter() "El colador"

const edades = [15, 20, 12, 30, 18];

// Queremos solo los mayores de edad 
const adultos = edades.filter(numero => {
    return numero >= 18;
});

console.log(adultos);

//.map() "El transformador"

const precios = [10, 20, 30];

// Queremos que cada precio ahora tenga el signo "$" adelante
const preciosConSigno = precios.map(p => {
    return "$" + p;
});

console.log(preciosConSigno); 


// === Ejercicio ===

const invitados = [
    { nombre: "Lucas", edad: 25, confirmado: true },
    { nombre: "Ana", edad: 17, confirmado: true },
    { nombre: "Marcos", edad: 32, confirmado: false },
    { nombre: "Sofi", edad: 15, confirmado: true },
    { nombre: "Juan", edad: 20, confirmado: false },
];
//.forEach() RECORRER: Saludamos a cada invitado
invitados.forEach(persona => {
    console.log(`Hola ${persona.nombre}, bienvenido al sistema.`);
    
})

//.filter() FILTRAR: ¿Quiénes vienen realmente?
const confirmados = invitados.filter(persona =>  {
    return persona.confirmado === true;
});

console.log(confirmados);

//.map() TRANSFORMAR: Solo queremos los nombres en mayúsculas
const etiquetas = confirmados.map(persona => {
    return persona.nombre.toUpperCase();
});

console.log(etiquetas);

//.reduce() ACUMULAR: Summar todas las edades de los confirmados

const sumaEdades = confirmados.reduce((total, persona) => {
    return total + persona.edad;
}, 0); // Empezamos en 0

console.log(`La suma de edades es: ${sumaEdades}`);

