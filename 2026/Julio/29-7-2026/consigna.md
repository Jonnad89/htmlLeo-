Objetivo
Crear una aplicación web para escuchar estaciones de radio online en vivo de Argentina. La app debe consumir la API pública de Radio Browser para obtener el listado de radios, mostrarlas en pantalla y reproducir la que el usuario elija.

* La URL para el fetch()
Para traer las radios top de Argentina, tenés que hacer el fetch a este endpoint público (devuelve un array JSON con las emisoras):

https://de1.api.radio-browser.info/json/stations/bycountry/argentina?limit=15&order=clickcount&reverse=true

Requisitos de la App
HTML & CSS:

Crear un diseño atractivo y limpio con un reproductor superior (título de la radio actual y el reproductor de audio) y una lista desplegada abajo.

Usar la etiqueta <audio id="reproductor" controls></audio> para reproducir el streaming.

JavaScript:

Crear una función asíncrona (async/await) para hacer el fetch a la URL de la API.

Recorrer la lista de radios que te devuelve la API y renderizar cada una dentro de la lista en pantalla.

Propiedades clave que te da la API para usar:

estacion.name ➔ El nombre de la radio (ej: Metro 95.1, Los 40).

estacion.favicon ➔ La imagen del logo de la radio (si no tiene, podés poner una por defecto).

estacion.url_resolved o estacion.url ➔ La URL del streaming de audio para poner en el reproductor.

Al hacer click en una radio de la lista:

Pasar su url_resolved al atributo src de tu etiqueta <audio>.

Ejecutar .play() en el audio para que empiece a sonar.

Mostrar en un <h1> o <h2> el nombre de la radio que está sonando actualmente.