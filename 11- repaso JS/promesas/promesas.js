const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if(exito) {
        resolve("Todo salió bien")
    } else {
        reject("Algo falló")
    }
});

promesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error)
    })

/*
resolve() -> se llama si todo salió bien
reject() -> si hubo un error
.then() -> recibe la respuesta cuando se resuelve
.catch() captura cualquier error
*/

// Ejemplo real con fetch(): Vamos a obtener una lista de posts de prueba desde una API pública

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        console.log("Datos recibidos:", datos);
    })
    .catch((error) => {
        console.error("Error al obtener los datos:", error)
    });

/* 
paso a paso:
fetch(...) -> hace la petición
.then(respuesta => respuesta.json()) -> convierte los datos a JSON
.then(datos => {...}) -> trabaja con los datos
.cath() -> atrapa errores como que no haya conexión
*/