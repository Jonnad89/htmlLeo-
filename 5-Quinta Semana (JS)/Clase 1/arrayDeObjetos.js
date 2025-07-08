// Crear un array de objetos "alumnos" y mostrar los nombres

let alumnos = [
    { nombre : "Ana", edad : 20 },
    { nombre : "Lucas", edad : 22 },
    { nombre : "Martín", edad : 19 }
];

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].nombre)
}

// Recorrer el array anterior y mostar solo los alumnos mayores de 20 años

for ( let i = 0; i < alumnos.length; i++ ) {
    if (alumnos[i].edad > 20) {
        console.log(`${alumnos[i].nombre} tiene más de 20`)
    }
}