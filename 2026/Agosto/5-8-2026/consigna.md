A construir un dashboar "FocusDash"

1. Estructura y Maquetación 

(HTML/CSS):
Sidebar (Barra Lateral): Con el logo de la app, navegación y tu perfil de usuario.
KPI Cards (3 Tarjetas de Resumen): "Horas de Enfoque" (target: 120), "Tareas Completadas" (target: 48) y "Racha de Días" (target: 15).Sección Principal (2 Columnas):Columna Izquierda: 
Tabla con la lista de tus proyectos/tareas recientes y 3 botones para filtrar 
(Todas, Completadas, En Proceso).Columna Derecha: 3 Metas semanales (ej: "Estudiar JS", "Hacer Ejercicio", "Lectura") con sus respectivas barras de progreso.

2. Funcionalidad y Animaciones (JavaScript):Animación de entrada: 
Las tarjetas deben aparecer en pantalla con un efecto escalonado (fade in + slide up).
Contadores en vivo: 
Los números de los 3 KPIs deben comenzar en 0 e incrementarse fluidamente hasta llegar a su valor final mediante un temporizador en JS.Barras de progreso dinámicas: 
Las barras deben arrancar en $0\%$ y llenarse solas hasta el porcentaje definido en su atributo data-progress.Filtro de la tabla: 
Al hacer clic en los botones de filtro, la tabla debe actualizarse para mostrar solo las tareas correspondientes.Botón "Actualizar": 
Debe reiniciar las animaciones de los números y las barras para simular la carga de nuevos datos.