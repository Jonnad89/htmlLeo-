Consigna del Proyecto: Generador de Citas Inspiradoras
Crea una aplicación que muestre citas de forma dinámica y permita al usuario guardarlas en un historial y filtrarlas por autor.

1. Elementos de Datos y Estructura (JS)
Datos Iniciales: Necesitas un array de objetos con citas. Cada objeto debe tener al menos dos propiedades: texto y autor.

Gestión del Historial: Deberás usar un array separado para almacenar las citas que el usuario marque como "favoritas" o "guardadas".

2. Funcionalidades Clave
Generación Aleatoria: Un botón debe generar y mostrar una cita nueva y aleatoria de la lista inicial.

Botón "Guardar" (Historial):

Al hacer clic, la cita actualmente mostrada debe guardarse en el historial.

El botón debe cambiar de estado (ej. de un corazón vacío a un corazón lleno) para indicar que ya está guardada.

Debe prevenir que la misma cita se guarde dos veces en el historial.

Visualización del Historial: Mostrar la lista de citas guardadas en un panel lateral o inferior.

Filtro Dinámico: Agregar un campo de texto que permita filtrar las citas del historial por el nombre del autor en tiempo real

** Pista:
 contenedor-principal
    panel-cita
        id="cita-actual" cita-tarjeta
            id="texto-cita"
            id="autor-cita" autor

            acciones
                id="generar-btn"
                id="guardar-btn" guardar-btn



    panel-historial            
    h2

    input text id="filtro-autor"
    mensaje-vacio