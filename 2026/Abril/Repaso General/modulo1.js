/** 
 *  REPASO GENERAL: VARIABLES, TIPOS DE DATOS Y LÓGICA
 *  El objetivo es entender como la pc guarda información y coom decide caminos
 */

// --- 1. Variables ( los contenedores )

// let: Permite cambiar el valor después (es flexible)

let edad = 25;
console.log(edad);
edad = 26;
console.log(edad);

// const: El valor NO cambia (es una constante)
const nombre = "Roma";
console.log(nombre);
// nombre = "Jona"; // Genera error, una constante no se puede reasignar
// console.log(nombre);


// --- 2. Tipos de datos (¿qué hay dentro del contenedor?)

let string = "Hola Mundo"; // Texto (Siempre entre comillas)
let number = 100;          // Números (sin comillas)
let boolean = true;        // Solo pueden ser true (verdadero) o false (falso) 
let nulo = null;           // Está vacío intencionalmente
let indefinido;            // Existe la variable pero no tiene valor aún

// --- 3. TEMPLATE LITERALS (unir texto y variable de forma pro) ---
// En lugar de usar " + ", usamos ` y ${}
const saludo = `Hola mi nombre es ${nombre} y tengo ${edad} años.`
console.log("Saludo: ", saludo);

// --- 4. OPERADORES LÓGICOS (Las llaves de la decisión) --- 

/**
 * && (AND / Y): Todas las condiciones deben ser TRUE
 * || (OR / O): Al menos una condición debe ser TRUE
 * ! (NOT / NO): Invierte el valor (lo que era true ahora es false)
 */

const tieneEntrada = true;
const tieneDinero = false;
const esMayorDeEdad = true;

// Ejemplo AND: ¿Puede entrar al VIP? (Necesita entrada y ser mayor)
const puedeEntrarVIP = tieneEntrada && esMayorDeEdad; // true

// Ejemplo OR: ¿Puede comprar algo? (Necesita entrada o dinero)
const puedeComprar = tieneEntrada || tieneDinero; //true (porque tiene entrada)

// --- 5. CONDICIONALES (El camino de código) ---

/**
 * El bloque IF/ELSE es como un semáforo o un portero de discoteca
 */

let clima = "lluvia";

if (clima === "soleado") {
    console.log("Salgo a caminar");
} else if (clima === "lluvia") {
    console.log("Me quedo programando en casa");
} else {
    console.log("El día está nublado");    
}

// --- EJERCICIO DE PRÁCTICA ---
// EL VALIDADOR DE ACCESO
const usuarioRegistrado = true;
const contraseñaCorrecta = true;
const esAdmin = false;

console.log("--- RESULTADO DEL ACCESO ---");

if( usuarioRegistrado && contraseñaCorrecta ) {
    if (esAdmin) {
        console.log("Acceso total concedido al Panel de control");
    } else {
        console.log("Acceso concedido al perfil de Usuario");        
    }
} else {
    console.log("Datos incorrectos. Acceso denegado.");    
}