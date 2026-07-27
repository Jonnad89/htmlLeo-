vamos a "simular" retrasos de red reales usando promesas manuales creadas con new Promise y setTimeout.

📦 Ejercicio 1: El Almacén Virtual (Simular Base de Datos)
La Idea: En el desarrollo real, los datos no están en memoria, tardan en leerse del disco o de la base de datos.

El Desafío:

Creá un array local de objetos llamado productos (cada uno con id, nombre y stock).

Escribí una función que devuelva una Promesa llamada obtenerStockFisico(id). Esta función debe buscar el producto por ID dentro del array.

Si el producto existe, la promesa se debe resolver después de 2 segundos devolviendo el stock.

Si no existe, se debe rechazar con el mensaje "Producto no registrado".

Creá una función asincrónica consultarYMostrar(id) que use async/await y un bloque try/catch para testear ambos casos (uno que exista y uno que no) en la consola.

🛒 Ejercicio 2: Checkout de Compra (Tareas Secuenciales)
La Idea: Cuando un usuario compra, pasan varias cosas en orden: se verifica el stock, se procesa el pago y se genera la factura. Si una falla, el proceso se frena.

El Desafío: Creá tres funciones que simulen estos pasos devolviendo promesas con distintos tiempos de espera:

verificarStock() (tarda 1 segundo).

procesarPago() (tarda 1.5 segundos).

emitirFactura() (tarda 0.8 segundos).

Luego, programá la función principal asincrónica realizarCheckout(). Tenés que ejecutar los tres pasos en orden usando await para cada uno. Usá console.time() y console.timeEnd() al principio y al final de la función para medir exactamente cuánto tardó todo el proceso completo en la consola.

🔒 Ejercicio 3: El Validador de Claves con Intentos (Control de Fallos)
La Idea: Cuando un sistema valida una contraseña de forma asincrónica (por ejemplo, con un hash pesado), puede fallar por saturación o microcortes.

El Desafío:

Escribí una función validarPasswordEnServidor(clave) que devuelva una promesa. Para simular inestabilidad, hacé que la promesa tenga un 50% de probabilidades de resolverse bien y un 50% de fallar (podés usar Math.random()).

Creá una función asincrónica sistemaDeSeguridad(). Esta función debe intentar validar la clave usando await.

Si la validación falla (cae en el catch), el código debe esperar 1 segundo de penalización y volver a intentarlo de forma automática. El sistema debe permitir hasta 3 intentos antes de bloquear la consola con un cartel de "Sistema bloqueado por seguridad".

📤 Ejercicio 4: Subida de Archivos en Lote (Paralelismo Local)
La Idea: Si un usuario sube 5 fotos pesadas a su perfil, no queremos subirlas una por una esperando a que termine la anterior. Queremos subirlas todas juntas.

El Desafío:

Creá una función llamada subirArchivoSimulado(nombreArchivo, pesoMB). Esta función debe calcular el tiempo de subida de forma dinámica: por cada MB, el archivo va a tardar 100ms en "subirse" (un archivo de 10MB tardará 1 segundo o 1000ms). Al terminar, debe retornar el nombre del archivo subido.

Creá un array con 4 archivos ficticios con diferentes pesos.

Escribí una función asincrónica subirGaleria(archivos) que dispare la subida de todos los archivos al mismo tiempo usando Promise.all().

Imprimí en consola el tiempo exacto que tardó toda la subida conjunta (vas a notar que tarda lo que tarde el archivo más pesado, no la suma de todos).