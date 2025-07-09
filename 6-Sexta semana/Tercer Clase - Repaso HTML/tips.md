Estructura semántica:

    <header>
        Encabezaado del sitio 
    </header> 
    <nav>
        Navegación
    </nav>
    <main>
        Contenido principal
    </main>
    <section>
        agrupación temática
    </section>
    <article>
        Contenido independiente
    </article>
    <aside>
        Contenido lateral o complementario
    </aside>
    <footer>
        pie de página
    </footer>


Tipos de inputs:
    - text, password, email, numbre, checkbox, radio, file, submit, reset, etc...


****** Etiquetas especiales ******

- br -> Salto de línea
- hr -> Línea horizontal
- strong y em -> Énfasis semántico (negrita y cursiva con significado)
- span -> Contenedor en línea
- div -> Contenedor de bloque

****** Atributos Globales útiles ******

- class -> para CSS y JS
- id -> Identificado único
- style -> Estilos en línea
- title -> Descripción al pasar el mouse
- alt -> Texto alternativo (en imágenes)
- target="_blank" -> Abrir enlace en nueva pestaña

****** Buenas prácticas ******

- Código indentado
- Uso de etiquetas semánticas
- Validación W3C https://validator.w3.org/
- Etiquetas cerradas correctamente
- Accesibilidad: usar alt, label, title,etc..
- Mantener estructura lógica del contenido

¿Cuándo usar setction y cuando usar article?

section -> una sección temática de contenido, relacionada por contexto. Puede contener artículos, títulos y subtítulos

article -> Un contenido independiente y reutilizable, como una publicación, una entradade blog, una noticia, etc...

****** figure ******

Ventaja de que permite agrupar imagen + texto explicativo de forma semántica

****** details y summary ****** 

Details -> Es un elemento intercativo nativo de HTML que el usuario puede expandir o contraer

ideal para: 
    - FAQs (preguntas frecuentes)
    - Descripciones avanzadas
    - Mostrar/ocultar contenido sin JavaScript

El summary es lo que se muestra siempre al hacer click, se desplega el resto