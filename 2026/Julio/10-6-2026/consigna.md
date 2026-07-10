# Proyecto: MundialApp 2026 🏆⚽

## Objetivo del Proyecto
El objetivo de este proyecto es desarrollar una aplicación web interactiva que simule el análisis de los grupos del Mundial 2026. La aplicación se conectará de forma asincrónica a una base de datos para obtener los resultados actuales de un grupo, procesar las estadísticas de los equipos en tiempo real (Puntos, Goles a Favor, Goles en Contra) y determinar quiénes clasificarían a la siguiente ronda.

Con este proyecto vas a consolidar el uso de **Fetch**, **Async/Await**, el manejo de algoritmos de ordenamiento de arrays (`.sort()`) y la renderización dinámica de tablas en el DOM.

---

## Requerimientos Técnicos

### 1. Interfaz Visual (HTML y CSS)
La pantalla debe tener una estética mundialista y contar con los siguientes elementos:
* **Selector de Grupos:** Un menú desplegable (`<select>`) para elegir qué grupo del mundial queremos analizar (por ejemplo: Grupo A, Grupo B, Grupo C).
* **Botón de Acción:** Un botón que diga `"Cargar y Analizar Grupo"`.
* **Tabla de Posiciones:** Una tabla (`<table>`) o contenedor que inicialmente esté oculto. Cuando los datos bajen de internet, debe completarse dinámicamente mostrando las columnas: *Posición, Equipo, Puntos, Goles a Favor (GF) y Goles en Contra (GC)*.
* **Sección de Clasificados:** Un recuadro destacado abajo de la tabla que muestre visualmente cuáles son los 2 equipos que avanzan a la Fase de Eliminación Directa.
* **Indicador de Carga:** Un texto (*"Conectando con la base de datos de la FIFA..."*) visible únicamente mientras se procesa la petición de red.

### 2. Lógica de Programación (JavaScript)
Al presionar el botón de búsqueda, tu archivo de JavaScript debe ejecutar el siguiente flujo:
* **Paso A:** Mostrar el indicador de carga y limpiar la tabla anterior.
* **Paso B:** Dependiendo del grupo seleccionado, vas a realizar un `fetch()` a la API correspondiente utilizando `async/await` para esperar la respuesta del servidor.
* **Paso C (Procesamiento de Datos):** Los datos van a bajar como un array de objetos desordenado. Vas a tener que programar un algoritmo que ordene los equipos de mayor a menor según sus **Puntos**. En caso de empate en puntos, se debe desempatar por diferencia de goles (Goles a Favor menos Goles en Contra).
* **Paso D (Inyección al DOM):** Recorrer el array ya ordenado y generar las filas de la tabla dinámicamente. 
* **Paso E:** Tomar los dos primeros equipos de la lista ordenada y dibujarlos en la sección de clasificados, ocultando finalmente el texto de carga.