// ==========================================
// 1. NAVEGACIÓN DEL DOM
// ==========================================
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnParent = document.getElementById("btn-parent");
const outDom = document.getElementById("out-dom");

btnNext.addEventListener("click", () => {
    const actual = document.querySelector(".activa");
    // Selecciona el hermano siguiente directo en el HTML
    const siguiente = actual.nextElementSibling;

    if (siguiente) {
        actual.classList.remove("activa");
        siguiente.classList.add("activa");
        outDom.innerText = "Avanzaste a: " + siguiente.textContent;
    } else {
        outDom.innerText = "No hay más hermanos siguientes.";
    }
});

btnPrev.addEventListener("click", () => {
    const actual = document.querySelector(".activa");
    // Selecciona el hermano anterior directo en el HTML
    const anterior = actual.previousElementSibling;

    if (anterior) {
        actual.classList.remove("activa");
        anterior.classList.add("activa");
        outDom.innerText = "Volviste a: " + anterior.textContent;
    } else {
        outDom.innerText = "No hay más hermanos anteriores.";
    }
});

btnParent.addEventListener("click", () => {
    const actual = document.querySelector(".activa");
    // Obtiene el nodo contenedor padre
    const padre = actual.parentElement;
    outDom.innerText = "El ID del padre es: " + padre.id + " y tiene " + padre.children.length + " hijos.";
});


// ==========================================
// 2. MÉTODOS DE ARRAYS
// ==========================================
const numeros = [12, 45, 8, 90, 23, 60];
const outArray = document.getElementById("out-array");

// --- COMUNES ---
document.getElementById("btn-map").addEventListener("click", () => {
    const res = numeros.map(n => n * 2);
    outArray.innerText = ".map() => [" + res.join(", ") + "]";
});

document.getElementById("btn-filter").addEventListener("click", () => {
    const res = numeros.filter(n => n > 30);
    outArray.innerText = ".filter() => [" + res.join(", ") + "]";
});

document.getElementById("btn-reduce").addEventListener("click", () => {
    const total = numeros.reduce((acc, n) => acc + n, 0);
    outArray.innerText = ".reduce() Total suma => " + total;
});

document.getElementById("btn-includes").addEventListener("click", () => {
    const existe = numeros.includes(90);
    outArray.innerText = ".includes(90) => " + existe;
});

// --- NO COMUNES ---
document.getElementById("btn-some").addEventListener("click", () => {
    // Devuelve true si AL MENOS UNO cumple la condición
    const hayPares = numeros.some(n => n % 2 === 0);
    outArray.innerText = ".some() (¿Hay al menos un par?) => " + hayPares;
});

document.getElementById("btn-every").addEventListener("click", () => {
    // Devuelve true solo si TODOS cumplen la condición
    const todosMayores = numeros.every(n => n > 5);
    outArray.innerText = ".every() (¿Todos son > 5?) => " + todosMayores;
});

document.getElementById("btn-find").addEventListener("click", () => {
    // Devuelve EL PRIMER elemento que coincide (no un array)
    const encontrado = numeros.find(n => n > 40);
    outArray.innerText = ".find() (Primer elemento > 40) => " + encontrado;
});

document.getElementById("btn-findIndex").addEventListener("click", () => {
    // Devuelve el índice (posición) del elemento
    const idx = numeros.findIndex(n => n === 90);
    outArray.innerText = ".findIndex(90) => Posición [ " + idx + " ]";
});

document.getElementById("btn-flat").addEventListener("click", () => {
    // Desarma sub-arrays anidados
    const anidado = [1, [2, 3], [4, [5]]];
    const plano = anidado.flat(2); // Profundidad 2
    outArray.innerText = "Original: [1, [2, 3], [4, [5]]] => .flat(2): [" + plano.join(", ") + "]";
});


// ==========================================
// 3. BUCLE WHILE, BREAK Y CONTINUE
// ==========================================
const outWhile = document.getElementById("out-while");

document.getElementById("btn-while-normal").addEventListener("click", () => {
    outWhile.innerHTML = "";
    let i = 1;
    const limite = parseInt(document.getElementById("input-limite").value) || 5;

    while (i <= limite) {
        outWhile.innerHTML += `<li>Vuelta número: ${i}</li>`;
        i++;
    }
});

document.getElementById("btn-while-break").addEventListener("click", () => {
    outWhile.innerHTML = "";
    let i = 1;

    while (i <= 10) {
        if (i === 5) {
            outWhile.innerHTML += `<li style="color: #ff4d4d;"><strong>Bucle cortado con BREAK en i = 5</strong></li>`;
            break; // Detiene el bucle por completo
        }
        outWhile.innerHTML += `<li>Vuelta: ${i}</li>`;
        i++;
    }
});

document.getElementById("btn-while-continue").addEventListener("click", () => {
    outWhile.innerHTML = "";
    let i = 0;

    while (i < 8) {
        i++;
        if (i % 2 === 0) {
            // Saltea los números pares y continúa con la siguiente vuelta
            continue; 
        }
        outWhile.innerHTML += `<li style="color: #1ed760;">Número Impar (procesado): ${i}</li>`;
    }
});


// ==========================================
// 4. MÉTODOS DE OBJETOS
// ==========================================
const usuario = {
    nombre: "Leo",
    rol: "Developer",
    nivel: "JS Intermedio",
    estado: "Activo"
};

const outObjetos = document.getElementById("out-objetos");

document.getElementById("btn-keys").addEventListener("click", () => {
    // Extrae solo los nombres de las propiedades
    const llaves = Object.keys(usuario);
    outObjetos.innerHTML = "<strong>Object.keys():</strong> [" + llaves.join(", ") + "]";
});

document.getElementById("btn-values").addEventListener("click", () => {
    // Extrae solo los valores contenidos
    const valores = Object.values(usuario);
    outObjetos.innerHTML = "<strong>Object.values():</strong> [" + valores.join(", ") + "]";
});

document.getElementById("btn-entries").addEventListener("click", () => {
    // Devuelve una matriz de pares [clave, valor]
    const entradas = Object.entries(usuario);
    outObjetos.innerHTML = "<strong>Object.entries():</strong><br>";
    entradas.forEach(([clave, valor]) => {
        outObjetos.innerHTML += `• <code>${clave}</code>: ${valor}<br>`;
    });
});

document.getElementById("btn-assign").addEventListener("click", () => {
    // Fusiona/clona objetos
    const extras = { experiencia: "2 años", ciudad: "Buenos Aires" };
    const objetoCompleto = Object.assign({}, usuario, extras);
    
    outObjetos.innerHTML = "<strong>Object.assign() Resultado:</strong><br>" + JSON.stringify(objetoCompleto, null, 2);
});