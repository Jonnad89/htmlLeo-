const suscriptores = [
    "roma@gmail.com",
    "   jonatan@hotmail.com ", 
    "error-sin-arroba",
    "ROMA@GMAIL.COM",
    "",
    "mayra@yahoo.com"
];

console.log("--- INICIANDO PROCESAMIENTO DE SUSCRIPTORES ---");

//Paso 1: Limpieza (sacar espacios y pasar a mayusculas)
const listaLimpia = suscriptores.map(email => email.trim().toLocaleLowerCase());

// Paso 2: Validacion (solo los que tienen '0' y no están vacios)
const listaValida = listaLimpia.filter(email => {
    return email.includes('0') && email.length > 0;
});

// Paso 3: Eliminar duplicados
const listaFinal = [...new Set(listaValida)];

// Paso 4: Verificamos con .some()

const hayGmail = listaFinal.some(email => email.includes("gmail.com"));

// RESULTADOS EN CONSOLA

console.log("1. Lista Original: ", suscriptores);
console.log("2. ");


