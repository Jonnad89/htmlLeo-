let estudiantes = [
    { nombre : "Lucía", edad : 20, curso : "JS", aprobado : true}, 
    { nombre : "Pedro", edad : 22, curso : "JS", aprobado : false}, 
    { nombre : "María", edad : 19, curso : "React", aprobado : true}, 
    { nombre : "Luis", edad : 21, curso : "JS", aprobado : false} 
]

// Mostrar todos los nombres de los estudiantes

estudiantes.forEach( e => console.log(e.nombre) )

// Filtrar solo los estudiantes del curso "JS"

let js = estudiantes.filter(e => e.curso === "JS");
console.log(js)

// Mostrar solo los que están aprobados

let aprobados = estudiantes.filter( e => e.aprobado === true );
console.log(aprobados)

// Crear un array nuevo solo con nombres y edades 

let resumen = estudiantes.map( e => {
    return { nombre : e.nombre, edad : e.edad };
} );

console.log(resumen)

// Contar cuántos estudiantes hay por curso

let conteo = {};

for ( let i = 0; i < estudiantes.length; i ++ ) {
    let curso = estudiantes[i].curso;
    conteo[curso] = (conteo[curso] || 0) +1;
}

console.log(conteo)