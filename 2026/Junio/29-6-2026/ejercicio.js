const catalogoPrueba = [
    { titulo: "Demon Slayer", tipo: "Anime", genero: "Shonen", urlImagen: "link1.jpg" },
    { titulo: "One Piece", tipo: "Manga", genero: "Aventura", urlImagen: "link2.jpg" },
    { titulo: "Attack on Titan", tipo: "Anime", genero: "Acción", urlImagen: "" }, // ¡Ojo: Imagen vacía!
    { titulo: "Naruto", tipo: "Manga", genero: "Shonen", urlImagen: "link4.jpg" }
];

function buscarPorTitulo(lista, nombreABuscar) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].titulo === nombreABuscar) {
            return lista[i]; // Devuelve el objeto entero encontrado y frena
        }
    }
    return "No se encontró la serie"; // Por si busca algo que no existe
}
console.log("Resultado de búsqueda:", buscarPorTitulo(catalogoPrueba, "Attack on Titan")); 
// Devuelve: { titulo: "One Piece", tipo: "Manga", genero: "Aventura", urlImagen: "link2.jpg" }