Ejercicio con objetos

- Crear un objeto "producto" que contenga nombre, precio y stock, luego iterar los pares clave y valor 
- mostrar las entradas (Object.entries)
- Mostrar por consola un mensaje que diga `${clave}: ${valor}`

==========  Ejercicio con clase y constructor  ===========

- Crear una clase "Alumno" que tenga nombre, nota y un método "aprobado()" que devuelva true si la nota es >= 7



- Crear un gestor de tareas:
    - Crear una clase llamada "Tarea"
    - Cada tarea debe tener:
        - descripcion(string)
        - prioridad( string: puedeser "alta", "media" o "baja")
        - completada (booleano, inicia en false)
    - La clase debe tener:
        - un método:
            - marcarComoCompletado() que ponga completada = true
            - un método mostrar() que muestre por consola:
                - Tarea : [descripcion] 
                - Prioridad : [prioridad]
                - Estado : completada / pendiente
    - Crear al menos 3 tareas distintas (instancias)
    - Marcar una como completada
    - Mostrar todas las tareas por consola usando un array y un for



- Buenas prácticas:
    - Modificar instancias es común y es válido también
    - Evitar eliminar propiedades que tu clase espera usar internamente