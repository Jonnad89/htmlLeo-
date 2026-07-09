// =======================================================================
// EXPLICACIÓN PASO A PASO DEL CONSUMO DE API REAL
// =======================================================================

// PASO 1: CAPTURA DE COMPONENTES DEL DOM
// Traemos las referencias de las etiquetas HTML para poder manipularlas desde JS.
const selectCiudad = document.getElementById("ciudadSelect");
const btnConsultar = document.getElementById("btnConsultar");
const resultadoBox = document.getElementById("resultadoBox");
const txtCargando = document.getElementById("txtCargando");

const txtCiudad = document.getElementById("txtCiudad");
const txtTemperatura = document.getElementById("txtTemperatura");
const txtViento = document.getElementById("txtViento");

// PASO 2: ASINCRONISMO CON EL ESCUCHADOR DE EVENTOS
// Usamos el modificador 'async' al inicio de la función flecha. 
// Esto habilita a JavaScript a pausar su ejecución interna cuando usemos promesas.
btnConsultar.addEventListener("click", async () => {
    
    // PASO 3: CONTROL DE ESTADOS VISUALES INICIALES
    // Mostramos el texto de carga y ocultamos cualquier resultado anterior.
    txtCargando.classList.remove("oculto");
    resultadoBox.classList.add("oculto");

    // PASO 4: OBTENER EL VALOR SELECCIONADO POR EL USUARIO
    let ciudadElegida = selectCiudad.value;

    // Declaramos variables vacías para rellenarlas según la ciudad
    let latitud = "";
    let longitud = "";
    let nombreFormateado = "";

    // PASO 5: EVALUACIÓN DE COORDENADAS GEOGRÁFICAS
    // Mapeamos cada opción del select con las coordenadas reales que exige el satélite.
    if (ciudadElegida === "buenosaires") {
        latitud = "-34.6118";
        longitud = "-58.4173";
        nombreFormateado = "Buenos Aires, AR 🇦🇷";
    } else if (ciudadElegida === "madrid") {
        latitud = "40.4165";
        longitud = "-3.7026";
        nombreFormateado = "Madrid, ES 🇪🇸";
    } else if (ciudadElegida === "tokio") {
        latitud = "35.6895";
        longitud = "139.6917";
        nombreFormateado = "Tokio, JP 🇯🇵";
    } else if (ciudadElegida === "nuevayork") {
        latitud = "40.7143";
        longitud = "-74.006";
        nombreFormateado = "Nueva York, US 🇺🇸";
    }

    // PASO 6: CONSTRUCCIÓN DE LA DIRECCIÓN DE LA API (ENDPOINT)
    // Usamos template strings (comillas invertidas) para meter las variables de latitud y longitud directamente en el link de internet.
    let urlApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;

    // PASO 7: DISPARAR LA PETICIÓN HTTP (Fetch con Await)
    // 'fetch' va a buscar los datos a la URL. 
    // El operador 'await' frena el avance del código: congela la ejecución hasta que los datos terminen de bajar de internet.
    let respuestaServidor = await fetch(urlApi);

    // PASO 8: DESEMPAQUETAR EL FORMATO DE RED A JSON
    // Los datos bajan en formato crudo de transferencia de datos. 
    // El método '.json()' (que también requiere await) lo traduce a un Objeto estándar de JavaScript.
    let datosJSON = await respuestaServidor.json();

    // PASO 9: EXTRACCIÓN DE PROPIEDADES ESPECÍFICAS
    // Si inspeccionamos el objeto recibido de Open-Meteo, vemos que agrupa las mediciones reales dentro de la propiedad 'current_weather'.
    // Accedemos usando la sintaxis de puntos: objeto.propiedad.subpropiedad
    let temperaturaActual = datosJSON.current_weather.temperature;
    let velocidadViento = datosJSON.current_weather.windspeed;

    // PASO 10: ACTUALIZACIÓN DINÁMICA DEL DOM
    // Escribimos los datos del satélite directamente en las etiquetas del HTML correspondientes.
    txtCiudad.innerText = nombreFormateado;
    txtTemperatura.innerText = temperaturaActual;
    txtViento.innerText = velocidadViento + " km/h";

    // PASO 11: CAMBIO DE ESTADO VISUAL FINAL
    // Ocultamos el mensaje de carga ("Conectando con el satélite...") y hacemos visible la tarjeta de resultados con los datos actualizados.
    txtCargando.classList.add("oculto");
    resultadoBox.classList.remove("oculto");
});