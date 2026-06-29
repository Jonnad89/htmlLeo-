Ejercicio 1: El Contador de Mangas Tomo por Tomo 
Contexto: Queremos saber de forma automática cuántos mangas tenemos registrados en total dentro de nuestra base de datos sin tener que contarlos a mano mirando la pantalla.

La consigna: Tenes que crear una función llamada contarMangas que reciba un array de objetos (el catálogo de series). La función debe recorrer la lista con un bucle for y contar únicamente aquellas tarjetas donde el .tipo sea exactamente igual a "Manga". Al final, debe devolver (return) ese número.

Pista: vas a tener que combinar (let cantidad = 0;) y abrir el cajón del objeto para preguntar por su propiedad: if (lista[i].tipo === "Manga").

Ejercicio 2: El Buscador Otaku (Filtrado por texto) 
Contexto: Viste que en las plataformas ponés "Naruto" en el buscador y te aparecen las coincidencias. Vamos a programar la lógica que hace que ese buscador de texto funcione.

La consigna: Crear una función llamada buscarPorTitulo que reciba dos cosas: el array de objetos del catalogo y un texto suelto con el nombreABuscar (ej: "One Piece"). La función debe recorrer el catálogo y devolver (return) el objeto completo que coincida con ese título.

Pista: Adentro del bucle for, la máquina tiene que comparar if (lista[i].titulo === nombreABuscar). Cuando lo encuentre, metés un return lista[i]; inmediatamente para devolver la tarjeta de la serie encontrada y cortar el bucle.

Ejercicio 3: El Especialista de Géneros (Filtro Avanzado) 
Contexto: A veces el usuario no quiere buscar una serie puntual, sino que quiere explorar categorías. Por ejemplo, quiere ver solo los contenidos del género "Shonen" o de "Aventura".

La consigna: Crear una función llamada filtrarPorGenero que reciba el array del catálogo y un texto con el generoElegido. La función debe crear una lista vacía y guardar dentro todas las series que pertenezcan a ese género. Al final, devuelve el nuevo array con las series que cumplen la condición.

Pista: vas a usar la lógica que ya domina: crear una lista vacía (let filtrados = [];), recorrer la original con un for, evaluar if (lista[i].genero === generoElegido) y guardarlo usando .push(lista[i]).

Ejercicio 4: El Verificador de Imágenes Rotas (Control de errores) ⚠️
Contexto: Si nos olvidamos de ponerle el link de la imagen a una serie, en la web se va a ver un recuadro roto muy feo. Queremos un sistema de alerta que revise el catálogo antes de mostrarlo.

La consigna: Crear una función llamada validarImagenes que reciba el array del catálogo. Debe revisar cada objeto y, si encuentra al menos uno donde la propiedad .urlImagen esté vacía (""), debe devolver false (lo que significa: "¡Alerta! Hay imágenes rotas"). Si revisa todo el catálogo y todas las series tienen su link de imagen puesto, devuelve true ("Catálogo aprobado").

Pista: En el momento en que el bucle encuentre una string vacía (if (lista[i].urlImagen === "")), tiene que ejecutar un return false; para dar la alarma. Si el bucle termina limpio, abajo de todo ponés return true;.