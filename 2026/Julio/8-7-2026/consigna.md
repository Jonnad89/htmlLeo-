# Proyecto: WeatherVibe App 

## Objetivo del Proyecto
El objetivo de este proyecto es construir una aplicación web interactiva que se conecte a internet en tiempo real para obtener y mostrar los datos meteorológicos actuales de diferentes ciudades del mundo. 

Con este desarrollo vas a dejar atrás los datos locales inventados dentro del código para empezar a consumir información real provista por servidores externos utilizando herramientas avanzadas de JavaScript: **Fetch**, **Async/Await** y procesamiento de archivos **JSON**.

---

## Requerimientos Técnicos

### 1. Interfaz Visual (HTML y CSS)
La pantalla debe ser limpia, responsiva y contar con los siguientes componentes esenciales:
* **Encabezado:** Título de la aplicación (*WeatherVibe*).
* **Selector de Ciudades:** Un menú desplegable (`<select>`) que le permita al usuario elegir entre al menos 4 ciudades importantes del mundo (por ejemplo: Buenos Aires, Madrid, Tokio y Nueva York).
* **Botón de Acción:** Un botón que sirva para disparar la búsqueda del clima actual.
* **Tarjeta de Resultados:** Un contenedor que inicialmente debe estar oculto y que solo se haga visible mediante CSS dinámico cuando los datos de internet se hayan descargado por completo. Debe mostrar:
  * El nombre de la ciudad con su bandera o país.
  * La temperatura actual en grados Celsius (°C).
  * La velocidad del viento actual en km/h.
* **Indicador de Carga:** Un texto o animación temporal (ej: *"Conectando con el satélite..."*) que se muestre únicamente mientras la petición a internet esté en curso.

### 2. Lógica de Programación (JavaScript Asincrónico)
Al hacer clic en el botón de búsqueda, tu archivo de JavaScript debe ejecutar de forma ordenada el siguiente flujo de acciones:

* **Paso A (Estado inicial):** Activar el indicador de carga en la pantalla y asegurarse de que la tarjeta de resultados anterior quede oculta para evitar confusiones en el usuario.
* **Paso B (Mapeo de Coordenadas):** Evaluar qué ciudad seleccionó el usuario. Como las APIs meteorológicas trabajan con coordenadas satelitales, vas a tener que almacenar en variables la **Latitud** y la **Longitud** correspondientes a la opción elegida.
* **Paso C (La Petición de Red):** Utilizar la función `fetch()` apuntando a la URL de la API meteorológica real (Open-Meteo). Es obligatorio el uso de las palabras clave `async` y `await` para pausar la lectura del código hasta que el servidor de internet responda con el paquete de datos.
* **Paso D (Procesamiento de Datos):** Transformar la respuesta cruda de la red en un objeto manipulable de JavaScript utilizando el método `.json()`.
* **Paso E (Inyección y Muestreo):** Acceder a las propiedades internas del objeto JSON recibido, extraer la temperatura y el viento, inyectar esos textos en el DOM mediante propiedades como `.innerText`, apagar el indicador de carga y mostrar la tarjeta de resultados finalizada.