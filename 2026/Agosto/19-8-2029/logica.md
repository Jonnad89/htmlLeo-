Ejercicio 1: Contador de Frecuencia (Nivel Fácil)

Objetivo: Crear una función contarCanciones(lista) que reciba un array de nombres de canciones (con algunos repetidos) y devuelva un objeto indicando cuántas veces aparece cada una.

Entrada de prueba: ["Canción A", "Canción B", "Canción A", "Canción C", "Canción B", "Canción A"]

Resultado esperado: { "Canción A": 3, "Canción B": 2, "Canción C": 1 }

Pista: Usar un bucle forEach o la función .reduce() verificando si la propiedad ya existe dentro del objeto acumulador.

==================================================================================================

Ejercicio 2: Agrupador por Artista y Tiempo Total (Nivel Medio)

Objetivo: Dada una lista de canciones con duraciones en segundos, armar una función que agrupe los temas por artista, cuente cuántos temas tiene y devuelva la duración total acumulada en formato MM:SS.

Entrada de prueba:

const temas = [
  { artista: "Charly", duracion: 180 },
  { artista: "Spinetta", duracion: 200 },
  { artista: "Charly", duracion: 150 }
];

resultado esperado: 
{
  Charly: { cantidad: 2, tiempoTotal: "5:30" },
  Spinetta: { cantidad: 1, tiempoTotal: "3:20" }
}
==================================================================================================

Ejercicio 3: Generador de Playlist por Tiempo Límite (Nivel Desafío)

Objetivo: Crear una función armarPlaylist(listaCanciones, maxSegundos) que reciba una lista de temas y un tiempo máximo disponible. La función debe ir sumando canciones en orden sin pasarse del límite de tiempo establecido.

Resultado esperado: Debe retornar un objeto con el array de las canciones elegidas y los segundos sobrantes.

Ejemplo: Si el límite es 300 segundos y la primera canción dura 200 y la segunda 150, solo debe agregar la primera y devolver que sobraron 100 segundos.

==================================================================================================
Ejercicio 4: Shuffle Inteligente (Nivel Desafío Avanzado)

Objetivo: Crear una función mezclarInteligente(listaCanciones) que reciba un array de objetos (canciones) y devuelva una nueva lista mezclada, garantizando que nunca queden dos canciones seguidas del mismo artista (siempre que la cantidad de temas por artista lo permita).

Entrada de prueba:

JavaScript
const playlistOriginal = [
  { titulo: "De Mí", artista: "Charly García" },
  { titulo: "Rezo por Vos", artista: "Charly García" },
  { titulo: "Barro Tal Vez", artista: "Spinetta" },
  { titulo: "Goteo", artista: "Duki" },
  { titulo: "Hablando a tu Corazón", artista: "Charly García" }
];


Resultado esperado:
Una playlist intercalada donde ningún tema de "Charly García" suena inmediatamente al lado de otro del mismo artista. Por ejemplo:

[Charly García, Spinetta, Charly García, Duki, Charly García]

Pistas para resolverlo:

Guardá una copia de las canciones disponibles en un array auxiliar.

Creá un array vació resultado = [].

En un bucle, elegí una canción al azar del array auxiliar.

Verificá si el artista de la canción elegida es igual al del último tema agregado en resultado (resultado[resultado.length - 1]?.artista).

Si es el mismo artista y quedan otros artistas disponibles, elegí otro tema. Si es diferente, agregalo a resultado y removelo de las canciones disponibles.




==================================================================================================


