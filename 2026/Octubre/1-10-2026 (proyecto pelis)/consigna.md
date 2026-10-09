Buscador de Películas y Series (Movie Finder)
Objetivo: Desarrollar una aplicación interactiva que consuma una API pública para buscar películas o series, mostrar sus detalles en tarjetas y permitir al usuario guardarlas en su lista de "Favoritos" persistente.

 Requisitos del Proyecto
1. Interfaz (HTML / CSS)
Encabezado: Título de la app y un contador dinámico de "Favoritos guardados".
Barra de Búsqueda: Un <input> con un botón de "Buscar" y un selector (<select>) para filtrar por tipo (Película, Serie o Cualquiera).
Grid de Resultados: Un contenedor donde se dibujarán las tarjetas (cards) de las películas encontradas.
Sección / Pestaña de Favoritos: Un apartado especial para ver las películas que el usuario guardó.
2. Funcionalidades de JavaScript
Consumo de API (async / await & fetch):
Usar la API gratuita de OMDb API ([https://www.omdbapi.com/](https://www.omdbapi.com/)) o TMDB para buscar contenido al enviar el formulario.
Manejar los estados de carga ("Cargando películas...") y posibles errores ("No se encontraron resultados").
Renderizado Dinámico:
Mostrar en cada tarjeta: póster/imagen, título, año de estreno, tipo (Movie/Series) y un botón "❤️ Guardar a Favoritos".
Gestión de Favoritos (LocalStorage):
Al hacer clic en "Guardar a Favoritos", el objeto de la película debe agregarse a un array en localStorage.
Evitar que la misma película se agregue dos veces (validar por ID).
Permitir eliminar películas de la lista de favoritos.
Detalle / Modal (Desafío Extra):
Al hacer clic en la tarjeta de una película, abrir un cartel flotante (modal) que pida a la API los detalles completos: sinopsis, director y puntuación.

Ejemplo de estructura de datos:

{
    id: "tt0133093",
    titulo: "The Matrix",
    anio: "1999",
    tipo: "movie",
    poster: "https://m.media-amazon.com/images/M/..."
}