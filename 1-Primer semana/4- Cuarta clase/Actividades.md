- Práctica: estructura de una sección de blog. usar:

- main
- section
    - h2
    - article
        - h3
        - p
    - article
        - h3
        - p
-   </section>
- </main>

- Ejercicio práctico
- Crear una estructura con:
    - Un header con título de blog
    - Un main con una section llamada "noticias"
    - Dentro de esa section, tres articles con título y párrafo (se puede utilzar "lorem")
    - Un footer con el texto: "Copyright 2025"

- Práctica 2 - Galería de imágenes básicas

- Crear una sección con tres imágenes, como una mini galería. Usar:

    section
        h2
        article
            img
            p

        article
            img
            p
        
        article
            img
            p
** Dentro de las img usar rutas relativas (las que se encuentran dentro del proyecto), usar atributo alt y colocar un width de 300

- Crear tu propia galería de 3 imágenes con descripción. Podes usar cualquiera que te guste, descargalas y ponelas en una carpeta img/assets. Crear una tabla con datos sobre las imágenes, crear un formulario. Crear la estructura completa con header, main, section, aside y footer.

- Práctica 3:

- Estruturar en carpetas. Ejemplo:
    - landing-page/
        - index.html
        - img/
            - portada.jpg
            - servicio1.jpg
            - servicio2.jpg

Estructura base
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi landing page</title>
</head>
<body>
<!-- Acá va todo el contenido... -->
</body>
</html>

Usar Header con navegación
    - header
        - h1
        - nav
            - ul
                - li
                    - a (usar href="#algo")

- Sección de portada
    - section
        - h2
        - img (width="600")
        - p

- Sección de servicios
    - h2

    - article
        - img (width="300")
        - h3
        - p

    - article
        - img
        - h3 
        - p

Formulario de contacto
    - section
        - h2
        - form
            - label
            - input

            - br

            - label
            - input

            - br

            - label (for="mensaje")
            - textearea (id="mensaje" name="mensaje" wors="4" cols="40")

            - br

            - input (type="submit" value="Enviar")

footer
    - &copy; 2025 Mi sitio web. Todos los derechos reservados.

** Ejercicio para reforzar
Hacer todo de nuevo desde cero, pero con otro tema: por ejemplo, una página de un estudio de yoga, una cafetería o una banda música. Usá al menos dos secciones, un imagen por sección y un formulario de contacto