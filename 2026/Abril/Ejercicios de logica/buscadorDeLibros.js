const biblioteca = [
    { titulo: "El Aleph", autor: "Borges", disponible: true },
    { titulo: "Rayuela", autor: "Cortázar", disponible: false },
    { titulo: "Ficciones", autor: "Borges", disponible: false },
    { titulo: "Final del juego", autor: "Cortázar", disponible: true },
];

const buscarLibro = (nombreAutor) => {
    // Filtrar los libros del autor y si estan disponibles
    const resultados = biblioteca.filter(libro => 
        libro.autor.toLowerCase() === nombreAutor.toLowerCase() && libro.disponible
    );

    if ( resultados.length > 0 ) {
        console.log(`Libros disponibles de ${nombreAutor}:`);
        resultados.forEach(l => console.log(`- ${l.titulo}`));
    } else {
        console.log(`No hay libros disponibles de ${nombreAutor} actualmente.`);
        
    }
};

buscarLibro("Borges")
buscarLibro("Cortázar")