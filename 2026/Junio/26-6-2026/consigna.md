Consigna del Proyecto: "Anime & Manga Explorer" 🌌
Objetivo del proyecto:
Crear una aplicación web de una sola página donde el usuario pueda explorar tarjetas (cards) de diferentes series de anime y mangas. La página debe permitir filtrar el contenido por categorías (ver "Solo Animes", "Solo Mangas" o "Ver Todo") a través de botones interactivos.

Requerimientos Visuales (HTML y CSS):
Encabezado (Header): Un título genial para la página (ej: Otaku Station).

Barra de Filtros: Tres botones arriba de todo: "Todos", "Animes (Videos)" y "Mangas (Imágenes)".

Contenedor Principal Grid: Un espacio vacío en el centro donde JavaScript va a "dibujar" las tarjetas de cada contenido.

Las Tarjetas (Cards): Cada tarjeta debe tener de forma prolija:

El título de la serie.

Una etiqueta que diga si es "Anime" o "Manga".

La imagen de portada (o un reproductor/enlace si es video).

Un botón que diga "Ver ahora".

Requerimientos de Lógica (JavaScript):
La Base de Datos (El Array Maestro): En tu archivo JS vas a crear una lista (array) llamada catalogo que contenga objetos. Cada objeto representará una serie con sus datos básicos: titulo, tipo (si es "Anime" o "Manga"), genero y urlImagen (un link a una imagen real de internet).

Función de Renderizado (Dibujar en pantalla): Crear una función llamada mostrarCatalogo(lista) que reciba un array, recorra cada elemento con un bucle (for o forEach) y construya el HTML de las tarjetas dinámicamente adentro del contenedor principal usando .innerHTML.

El Sistema de Filtros (La magia de los botones):

Al hacer clic en el botón "Animes", el sistema debe crear una lista nueva filtrada (donde tipo === "Anime"), limpiar la pantalla y llamar a la función de dibujo pasándole solo esa lista.

Lo mismo debe pasar al hacer clic en "Mangas".

El botón "Todos" simplemente vuelve a pasarle la lista completa original.