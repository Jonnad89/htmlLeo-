1. Las variables: Los estantes
Imaginate que en la pizzeria tenesestantes con etiquetas. Una variable es simplemente un nombre que le das a un lugar para guardar algo.

- Si guardas el nombre del pizzero en un estante que dice "nombre", cada vezque grites "nombre", alguien te va a responder con el nombre

- Las variables pueden cambiar: hoy el estante harina tiene 10 kios mañana puede tener 2

2. Las funciones: Las recetas
Una funcion es una receta o una instruccion guardada.

- En lugar de explicarle a cada empleado nuevo como hacer una masa paso a  paso, escribis la receta una sola vez y la llamas: "PrepararMasa".

- Cada vez que necesitas masa, solo gritas "PrepararMasa"

- Las funciones pueden recibir cosas. Vos le  das "harina" y "agua" (datos), y la funcion te devuelve una masa (resultado)

3. Los objetos: El producto completo

Un objeto  es como una pizza especifica. No es solo un dato, es un conjunto de caracteristicas que definen a "algo".
Si la pizza fueraun objeto, tendria:

- sabor: "muzzarella"
- tamaño: "grande"
- precio: 1500
- tieneAceitunas : true

Todo eso esta empaquetado bajo un miso nombre: laPizzaPedido. Es una forma de organizar la informacion para que  no este suelta.

4. Los arrays: El ticket de lista ordenada

Un array es simplemente una lista ordenada

- Imagina el gancho donde los mozos clavan los tickets de los pedidos
- Estan uno debajo del otro. El primmero que llego es el 0, el segundo es el 1 y asi
- Un array puede guardar lo que quieras: una lista de nombresde clientes, una lista de precios o incluso una lista de objetos (muchas pizzas)

5. Los metodos: Lo que el objeto "sabe hacer"
Un etos es una funcion que vive adentro de un objeto o de un tipo de dato
 
- Si la pizza es el objeto, un metodo seria cortar(). Es una accion que le pertenece a la pizza
- En javaScript, como los arrays son como "objetos inteligentes", tienen  sus propios metodos

    - Filter: Es como un colador. Le decis "Pasame solo las pizzas que tengan morron"
    - Map: Es como un transformador. Le decis: "A todas las pizzas de la lista, poneles doble queso"
    - Push: Es simplemente la accion de clavar un ticket nuevo al final de la lista

6. Clases

Imaginate que tenes un molde de acero para hacer pizzas. El molde no es una pizza, pero define que todas las pizzas que salgan de ahi sean redondas y tengan un borde

- La clase es el molde (el plano)
- El objeto es la pizza real que sale del molde (la instancia)

6. La anatomia de una clase

- El constructor (el momento del nacimiento)
Es una funcion especial que se ejecuta una sola vez, justo cuando creamos el objeto. Sirvepara darle los "datos de nacimiento"

- Propiedades (Lo que el objeso es)
Son las variables internas: sabor, tamaño, precio

- Metodos (lo que el obejo hace) 
Son funciones que viven dentro de la clase. Por ejemplo: cocinar(), entregar() o aplicarDescuento()

class Pizza {
    //1. El molde recibe los datos
    constructor(sabor, precio, ingredientes) {
        this.sabor = sabor;         // Propiedad
        this.precio = precio;       // Propiedad
        this.ingredientes = ingredientes;       // Propiedad
        this.estado = "cruda";         // Propiedad por defecto
    }

        // Un método: una acción que la pizza sabe hacer
        cocinar() {
            this.estado = "cocinada";
            console.log(`La pizza de ${this.sabor} ya está lista`);
        }

        // Otro método: lógica de negocio
        aplicarOferta() {
            this.precio = this.precio * 0.9;    // 10% de descuento
            console.log(`Oferta! El nuevo precio es $${this.precio}`);
        }
}

// La instanciación: usamos la palabra magica "new"
const pizzaDeJuan = new Pizza("Muzzarella", 1000, ["queso", "tomate"])
const pizzaDeTobias = new Pizza("Calabresa", 1500, ["longaniza", "ají"])


pizzaDeJuan.cocinar();  //cambia el estado
pizzaDeTobias.aplicarOferta();  // Cambia su precio

7. Concepto Clave (Para anotar en una hoja)

- LA PALABRA THIS
"this" significa "este objeto". Si estoy en la pizza de muzzarella, this.precio es el precio de esa mismma pizza, no es el de la de al lado.
Es como si cada pizza tuviera su propioespejo verse a si misma.

- LA PALABRA NEW
Sin new, la clase no hace nada. new le dice a JAvaScrip: "Ey, usá el molde y fabricae un objeto real ahora mismo".

8. ¿Por qué usar Clases? (La ventaja Pro)

- Orden: Si mñana decidimos que todas las pizzas tienen que tener "fecha de vencimiento", solo lo agregamos en un lugar (la Clase) y 
automáticamente miles de pizzas lo tendrán.

- Seguridad: Evitar errores de tipeo. Todos los objetos tendrán exatamente las mismas propiedades.

- Escalabilidad: Podes crear sub-clases (Herencia). Por ejemplo, una clase PizzaVegana que hereda todo de Pizza pero añade reglas especiales

 