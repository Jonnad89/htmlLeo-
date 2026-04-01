function ejecutarOperacion(a, b, operacion) {
    return operacion(a, b)
}

const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;

console.log(ejecutarOperacion(5, 3, sumar))
console.log(ejecutarOperacion(5, 3, restar))

// Validamos edad antesde acceder

function verificarEdad(edad, callbackSiMayor, callbackSiMenor) {
    if (edad >= 18) {
        callbackSiMayor();
    } else {
        callbackSiMenor();
    }
}

// ejemplo de uso
verificarEdad(
    20, 
    () => console.log("Acceso permitido"),
    () => console.log("Acceso denegado")
)

// ejecutamos una lista de funciones en orden

function ejecutarEnOrden(callbacks) {
    for (let i = 0; i < callbacks.length; i++) {
        callbacks[i](); // ejecuta cada función
    }
}

const tareas = [
    () => console.log("1 - Preparar café"),
    () => console.log("2 - Leer mails"),
    () => console.log("3 - Comenzar el trabajo")
];

ejecutarEnOrden(tareas);

// simulamos login con calback de éxito o error

function login(usuario, contrasena, onSucces, onError) {
    if (usuario === "admin" && contrasena === "1234") {
        onSucces();
    } else {
        onError();
    }
}

// Ejemplo de uso

login(
    "admin",
    "1234",
    () => console.log("Bienvenido!"),
    () => console.log("X Usuario o contraseña incorrecta.")
)

// Filtro personalizado con callback

function filtrar (array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

// Ejemplo de uso
const edades = [12, 18, 25, 40];
const mayores = filtrar(edades, edad => edad >= 18);
console.log(mayores)

// Simulamos espera con loader

function mostrarCarga(mensaje, callback) {
    console.log(mensaje + "...");
    setTimeout(() => {
        callback();
    }, 3000)
}

mostrarCarga("Cargando datos", () =>{
    console.log("Datos cargados!");
})

// Callback Hell (Como no hacer las cosas)

setTimeout(() => {
    console.log("paso 1");
        setTimeout(()=> {
            console.log("Paso 2");
                setTimeout(()=> {
                    console.log("Paso 3")
        }, 1000)
    }, 1000)
}, 1000)