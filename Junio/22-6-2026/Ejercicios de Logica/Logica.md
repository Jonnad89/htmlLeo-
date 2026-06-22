1. Te dan una lista cocn edades de un grupo de personas que quieren entrar a una fiesta.

[14, 18, 22, 15, 30, 17]. Tenes que crear una funcion que limpie esa lista.

La regla: La funcion tiene que recibir ese array de edades y devolver (return) un nuevo array que contenta unicamente los nueros que sean mayoreso iguales a 18

Pista: vas a tener que crear una lista vacia (let aprobados = [];)
Adentro de la funcion, recorrer las edades con un for, y usarel .push() para guardar a los mayores

2. Tenes que crear una funcion que reciba una palabra (string) y la devuelva completamente dada vuelta

La regla: SI la funcion recibe "Leo", tiene que devolver "oeL". Si recibe "Jona", tiene que devolver "anoJ" 

Pista: Se puede resolver recorriendo la palabra con un bucle for empezando desde el final hacia el principio (reversa), o investigando coo usar juntos los metodos de arrays .split(), reverse() y .join()

3. Imagina que en una base de datos de usuarios se registraron nobres repetidos por error: 
["Juan", "Pedro", "Leo", "Juan", "Adrian", "Jose","Juan", "Pedro"]

La regla: Tenes que crear una funcion que reciba esa lista y devuelva un nuevo array pero sin ningun nombre repetido

Pista: AL recorrer la lista, antes de guardar un nombre en el array nuevo, tenes que chequear si ese nombre ya existe ahi usando el metodo .includes() . Si ya esta, lo ignora

4. Este es un ejercicio para ver coo piensa un programador

La regla: Crear una funcion que reciba un nuero limite (por ejemplo 20). La funcion tiene que recorrer e imprimir en consola los numeros del 1 hasta ese limite, pero con tres condiciones: 

    1. Si el numero es divisible por 3, en lugar del nummero tiene que imprimir "Fizz"

    2. Si el numero es divisible por 5, en lugar del numero tiene que imprimir "Buzz"

    3. Si el nummero es divisible por 3 y por 5 a la vez, tiene que imprimir "FizzBuzz"

Pista: PAra saber si un numero es divisible por otro, se usa el operador de resto % 
Ejemplo: if (numero % 3 === 0) *OJO con el orden de los if