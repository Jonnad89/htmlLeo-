function encontrarSucursalCercana(miUbicacion, sucursales) {
    let sucursalCercana = null;
    let menorDistancia = Infinity;

    sucursales.forEach(sucursal => {
        // Distancia euclidiana / Pitágoras
        const dx = sucursal.x - miUbicacion.x;
        const dy = sucursal.y - miUbicacion.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < menorDistancia) {
            menorDistancia = distancia;
            sucursalCercana = sucursal.nombre;
        }
    });

    return sucursalCercana;
}

// Prueba:
const miUbicacion = { x: 10, y: 20 };
const sucursales = [
    { nombre: "Centro", x: 15, y: 25 },
    { nombre: "Norte", x: 50, y: 80 },
    { nombre: "Sur", x: 12, y: 22 }
];

console.log(encontrarSucursalCercana(miUbicacion, sucursales));
// Resultado: "Sur"


function validarTurno(turnosOcupados, nuevoTurno) {
    // Usamos .some() para verificar si al menos un turno se solapa
    const haySolapamiento = turnosOcupados.some(turno => {
        return nuevoTurno.inicio < turno.fin && nuevoTurno.fin > turno.inicio;
    });

    // Retorna true si está libre, false si se pisa
    return !haySolapamiento;
}

// Prueba:
const turnosOcupados = [
    { inicio: 9, fin: 10 },
    { inicio: 11, fin: 12.5 },
    { inicio: 15, fin: 16 }
];
const nuevoTurno = { inicio: 10.5, fin: 11.5 };

console.log(validarTurno(turnosOcupados, nuevoTurno));
// Resultado: false (se solapa con el turno de 11 a 12.5)

function resumirNotificaciones(notificaciones) {
    const agrupado = {};

    // 1. Agrupar nombres de usuarios por postId
    notificaciones.forEach(notif => {
        if (!agrupado[notif.postId]) {
            agrupado[notif.postId] = [];
        }
        agrupado[notif.postId].push(notif.usuario);
    });

    // 2. Construir el resumen según la cantidad de personas
    return Object.keys(agrupado).map(postId => {
        const usuarios = agrupado[postId];
        const cantidad = usuarios.length;
        let resumen = "";

        if (cantidad === 1) {
            resumen = `A ${usuarios[0]} le gustó tu publicación`;
        } else if (cantidad === 2) {
            resumen = `A ${usuarios[0]} y ${usuarios[1]} les gustó tu publicación`;
        } else {
            const restantes = cantidad - 2;
            resumen = `A ${usuarios[0]}, ${usuarios[1]} y ${restantes} personas más les gustó tu publicación`;
        }

        return {
            postId: Number(postId),
            resumen: resumen
        };
    });
}

// Prueba:
const notificaciones = [
    { postId: 101, usuario: "Roma" },
    { postId: 101, usuario: "Leo" },
    { postId: 101, usuario: "Matias" },
    { postId: 101, usuario: "Sofia" },
    { postId: 202, usuario: "Roma" }
];

console.log(resumirNotificaciones(notificaciones));

function evaluarStock(inventario) {
    const ordenes = [];

    inventario.forEach(item => {
        // Evaluar si necesita reposición
        if (item.actual < item.minimo) {
            const unidadesFaltantes = item.optimo - item.actual;
            const porcentajeDisponible = item.actual / item.minimo;

            ordenes.push({
                producto: item.producto,
                comprar: unidadesFaltantes,
                prioridad: porcentajeDisponible // Menor valor = mayor urgencia
            });
        }
    });

    // Ordenar de menor a mayor disponibilidad
    ordenes.sort((a, b) => a.prioridad - b.prioridad);

    // Retornar quitando el campo auxiliar de prioridad
    return ordenes.map(item => ({
        producto: item.producto,
        comprar: item.comprar
    }));
}

// Prueba:
const inventario = [
    { producto: "Teclados", actual: 2, minimo: 5, optimo: 15 },
    { producto: "Mouses", actual: 10, minimo: 8, optimo: 20 },
    { producto: "Monitores", actual: 1, minimo: 3, optimo: 8 }
];

console.log(evaluarStock(inventario));
// Resultado: [{ producto: "Monitores", comprar: 7 }, { producto: "Teclados", comprar: 13 }]