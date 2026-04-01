// 1. Base de datos
const propiedades = [
    {id: 1, tipo: "casa", precio: 250000, ciudad: "Buenos Aires",img: "https://pic.le-cdn.com/thumbs/520x390/08/1/properties/Property-6895b01a1e14f02856e456077e127685-131651535.jpg" },
    {id: 2, tipo: "departamento", precio: 120000, ciudad: "Rosario",img: "https://d1v2p1s05qqabi.cloudfront.net/9608807/1712256615.jpg" },
    {id: 3, tipo: "casa", precio: 180000, ciudad: "Córdoba",img: "https://www.argenprop.com/static-content/27965161/2adbe626-f21e-4551-9a0e-1e48132c7eb2_u_small.jpg" },
   
];

let favoritos = JSON.parse(localStorage.getItem("favoritos_inmo")) || [];

const contenedor = document.getElementById('galeria-propiedades');
const btnBuscar = document.getElementById('btn-buscar')
const filtroTipo = document.getElementById("filtro-tipo")
const filtroPrecio = document.getElementById("filtro-precio")

function mostrarPropiedades(lista) {
    
    if(!lista) {
        console.error("la lista llegó indefinida")
        return
    }
    contenedor.innerHTML = '';



    lista.forEach(p=>{
        const esFav = favoritos.includes(p.id)

        const card = document.createElement("article");
        card.className = 'card-propiedad';
        card.innerHTML = `

            <img src="${p.img}" alt="${p.tipo}">
            <div class="info">
                <div class="tag">${p.tipo.toUpperCase()}</div>
                <h3>${p.ciudad}</h3>
                <p class="precio">$${p.precio.toLocaleString()}</p>
                <div class="card-footer">
                <button class="btn-contacto" onclick="contactar(${p.id})">Contactar</button>
                <button class="btn-fav ${esFav ? "activo" : ""}" onclick="toggleFavorito(${p.id})">
                    ${esFav ? '❤' : '🤍'}
                </button>
                </div>
            </div>
        `
        contenedor.appendChild(card)
    })
}

async function filtrar() {
    contenedor.innerHTML = '<div class="loader">Buscando en la base de datos...</div>'

    await new Promise(resolve => setTimeout(resolve, 800))

    const tipo = filtroTipo.value;
    const precioMax = parseFloat(filtroPrecio.value) || Infinity;

    const resultados = propiedades.filter(p => {
        const coincideTipo = tipo === 'todos' || p.tipo === tipo;
        const coincidePrecio = p.precio <= precioMax;
        return coincideTipo && coincidePrecio
    });

    mostrarPropiedades(resultados)
}

function toggleFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id)
    } else {
        favoritos.push(id)
    }

    // guardamos en local storage
    localStorage.setItem("favoritos_inmo", JSON.stringify(favoritos));

    filtrar(id)
}

function contactar(id) {
    const p = propiedades.find(prop => prop.id === id);
    alert(`Solicitud enviada para la propiedad ${p.ciudad}`)
}

btnBuscar.addEventListener("click", filtrar)

mostrarPropiedades(propiedades)