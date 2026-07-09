Ejercicio 1: El formateador de URLs (Sanitización de Datos)
Contexto: En el mundo real, los usuarios escriben las ciudades con espacios, acentos o mayúsculas (ej: "  Nueva York  " o "San Martín"). Si le mandamos eso directo a una API, el enlace se rompe.

El Desafío: Crear una función llamada limpiarTerminoBusqueda(texto) que reciba un string con cualquier imperfección, le remueva los espacios de los extremos, reemplace los espacios internos por guiones medios (-) y devuelva todo en minúsculas.

Ejemplo: Si recibe "  Nueva York  ", debe devolver "nueva-york".

Pista: Vas a necesitar investigar los métodos de strings .trim(), .toLowerCase() y .replaceAll().

Ejercicio 2: El Escudo Anti-Errores (Manejo de Fallas con Try/Catch)
Contexto: Las APIs a veces se caen, se corta el wifi o el servidor responde un error. Un programador Semi-Senior nunca deja que la aplicación se congele con la pantalla en blanco.

El Desafío: Crear una función asrincrónica llamada obtenerDatosSeguros(url). Debe intentar hacer un fetch(url).

Si la conexión es exitosa, debe devolver el JSON.

Si la URL está rota o internet falla, la función no debe romper el programa; debe capturar el error y devolver un objeto propio que diga { error: true, mensaje: "No pudimos conectar con el satélite" }.

Pista: Es obligatorio usar la estructura try { ... } catch (error) { ... } envolviendo al fetch.

Ejercicio 3: El Historial de Búsquedas (Evitar Datos Duplicados)
Contexto: Queremos guardar las últimas ciudades que buscó el usuario en una lista (un array), pero si busca "Madrid" tres veces seguidas, no queremos que aparezca tres veces en pantalla.

El Desafío: Crear una función llamada agregarAlHistorial(listaHistorial, nuevaCiudad).

Si la ciudad ya existe en la lista (sin importar mayúsculas o minúsculas), no la agrega y devuelve la lista intacta.

Si no existe, la agrega al principio de la lista.

Restricción: El historial solo puede tener un máximo de 5 ciudades. Si se pasa de 5, debe eliminar la más vieja (la última).

Pista: Vas a necesitar métodos como .includes(), .unshift() y .pop().

Ejercicio 4: Filtro Avanzado (Data Crunching)
Contexto: Imaginate que una API de clima te devuelve una lista con el pronóstico de los próximos 5 días de la semana en un array de objetos:

JavaScript
const pronosticoSemana = [
    { dia: "Lunes", temp: 15, lluvia: true },
    { dia: "Martes", temp: 22, lluvia: false },
    { dia: "Miércoles", temp: 32, lluvia: false },
    { dia: "Jueves", temp: 28, lluvia: true },
    { dia: "Viernes", temp: 12, lluvia: false }
];
El Desafío: Crear una función llamada analizarSemana(arrayDias) que procese esa lista y devuelva un objeto resumen con tres datos clave calculados automáticamente:

temperaturaMaxima: La temperatura más alta de toda la semana.

diasConLluvia: La cantidad total de días donde lluvia sea true.

promedioTemperatura: El promedio de temperatura de los 5 días.

Pista: Podés recorrer el array usando un bucle o métodos avanzados como .reduce().

Ejercicio 5: El "Cache" de Datos (Optimización de Rendimiento)
Contexto: Hacer peticiones a internet a cada rato consume datos y vuelve lenta la app. Si el usuario buscó "Tokio" hace dos minutos, la temperatura no cambió. Un Semi-Senior guarda un "espejo" temporal de los datos en memoria.

El Desafío: Crear una función llamada consultarConCache(ciudad, cacheExistente).

La variable cacheExistente es un objeto que guarda búsquedas previas con su hora, por ejemplo: { "tokio": { temp: 18, hora: 1400 } }.

Si la ciudad consultada ya está dentro del objeto cacheExistente, la función debe devolver un mensaje que diga: "Datos recuperados del caché local: X°C".

Si la ciudad no está en el objeto, debe devolver: "Realizando nueva petición a internet...".

Pista: Tenés que verificar la existencia de una clave dinámica dentro de un objeto usando el operador in o evaluando si cacheExistente[ciudad] es diferente de undefined.