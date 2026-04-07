// Simulamos base de dato de publicaciones (posts). 

const posts = [
    { autor: "Santi", texto: "Hoy aprendí JS", likes: 15, categoria: "Programación"},
    { autor: "Elena", texto: "El café estaba frío", likes: 2, categoria: "Vida"},
    { autor: "Marcos", texto: "React.Js es genial", likes: 50, categoria: "Programación"},
    { autor: "Santi", texto: "Me gusta el mate", likes: 10, categoria: "Vida"},
    { autor: "Paula", texto: "Busco trabajo Dev.", likes: 100, categoria: "Programación"},
];

//Filtrar

const programacion = posts.filter(p => p.categoria === "Programación" );

// console.log(prograacion);

// Transformar

const populares = programacion
    .filter(p => p.likes > 20) // Un filtro extra para el muro
    .map(p => `🔥 POST POPULAR: ${p.texto}`)

// console.log(populares);

// Sumar todos los likes de programación
const totalLikesProgra = programacion.reduce((total, p) => total + p.likes, 0);

// console.log(totalLikesProgra);

// Mostrar el resultado final

console.log("--- REPORTE DE RED SOCIAL ---");
populares.forEach(post => console.log(post));
console.log(`Total de likes en el setor IT: ${totalLikesProgra}`);


