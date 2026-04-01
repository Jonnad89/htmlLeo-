function verificarEdad(edad, callbackSiMayor, callbackSiMenor) {
    if(edad >= 18) {
        callbackSiMayor()
    } else {
        callbackSiMenor()
    }
}

// ejemplo de uso
verificarEdad(
    20,
    () => console.log("Acceso permitido"),
    () => console.log("Acceso denegado")
)

// Ejecutar una llista de funciones en orden

function ejecutarEnOrden(callbacks) {
    for (let i = 0; i < callbacks.length; i++){
        callbacks[i]();; // ejecuta cada función
    }
}

const tareas = [
    () => console.log("1- preparar café"),
    () => console.log("2- Leer mails"),
    () => console.log("3- Comenzar a trabajar")
];

ejecutarEnOrden(tareas)
// como desafío probá a que se ejecuten cada 2 segundos

/*
Simular login con callback de éxito o error
*/

function login(usuario, contraseña, onSucccess, onError) {
    if (usuario === "admin" && contraseña === "1234") {
        onSucccess();
    } else {
        onError();
    }
}

// ejemplo
login(
    "admin",
    "1234",
    () => console.log("Benvenido!"),
    () => console.log("Usuario o contraseña incorrecta")
)

// filtro personalizado con callback

function filtrar(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            resultado.push(array[i])
        }
    }
    return resultado;
}

// ejemplo

const edades = [12, 18, 25, 40];
const mayores = filtrar(edades, edad => edad >= 18);
console.log(mayores)

// probá a filtrar strings que tengan una letra especifica

// Simular espera con loader

function mostarCarga(mensaje, callback) {
    console.log(mensaje + "...");
    setTimeout(() =>{
        callback()
    }, 3000); // espera 3 segundos
}

mostarCarga("Cargando datos", ()=>{
    console.log("Datos cargados.")
});

// callback hell (para demostrar como NO hacer las cosas)

/* 
setTimeout(()=> {
    console.log("Paso 1");
    setTimeout(()=>{
        console.log("Paso 2");
        setTimeout(()=>{
            console.log("Paso 3")
        }, 1000)
    }, 1000)
}, 1000)

funciona, pero no se entiende nada
*/