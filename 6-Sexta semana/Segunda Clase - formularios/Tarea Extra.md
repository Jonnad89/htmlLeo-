- Crear libro de visitas

objetivo: 
    - crear una pequeña app tipo "libro de visitas", donde el usuario pueda dejar su nombre, email y un mensaje. Todos los mensajes enviados se guardan en localStorage y se muestran debajo del formulario

Requisitos técnicos:

- inputs: nombre, email, mensaje
- validaciones: 
    - Todos los campos son obligatorios
    - El email debe tener formato váido(@ y .)
    - Mostrar múltiples errores si hay
    - Si todo es válido:
        - Mostrar mensaje de éxito
        - Guardar el mensaje como objeto en un array en localStorage
        - Limpiar formulario

Mostrar mensajes guardados:
- Al cargar la página, mostrar todos los mensajes enviados anterioremente
- Cada mensaje debe mostrarse asi:

    Carla (carla@mail.com) dijo : "¡Excelente atención!"

- Botón extra

    - Agregar un botón "Borrar todo" que: 
        - Elimine todos los mensajes guardados
        - Limpie la pantalla


sugerencia de estructura de datos: 

    {
        nombre : "Carla",
        email : "carla@mail.com",
        mensaje : "¡Excelente atención!",
        fecha : "07/07/2025 10:35"
    }

** Todos los objetos se guardan dentro de un array llamado "mensajesVisita" en localStorage