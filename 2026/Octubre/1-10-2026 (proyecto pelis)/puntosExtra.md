Consigna: Mostrar un texto arriba de la grilla que indique cuántas películas coinciden con la búsqueda actual (ej: "Mostrando 4 resultados" o "No se encontraron películas").
Objetivo: Reforzar la lectura de la propiedad .length sobre el array filtrado.


Consigna: Agregar un <select> en el HTML con las opciones:
"Más recientes primero"
"Más antiguas primero"
Objetivo: Practicar el método .sort() de JavaScript sobre objetos

// Ejemplo de lógica para Leo:
resultados.sort((a, b) => Number(b.anio) - Number(a.anio));

Consigna: Agregar un desplegable para filtrar por género (Acción, Ciencia Ficción, Drama, Comedia, Crimen).
Objetivo: Combinar múltiples condiciones en el .filter() (Título + Tipo + Categoría).

 