Ejercicio 1: Buscador de Sucursal Más Cercana (Geolocalización)
Objetivo: Crear una función encontrarSucursalCercana(miUbicacion, sucursales) que reciba tus coordenadas y una lista de sucursales con su posición. Debe calcular la distancia aproximada (fórmula de Pitágoras) y devolver el nombre de la sucursal más cercana.

Entrada de prueba:

JavaScript
const miUbicacion = { x: 10, y: 20 };
const sucursales = [
    { nombre: "Centro", x: 15, y: 25 },
    { nombre: "Norte", x: 50, y: 80 },
    { nombre: "Sur", x: 12, y: 22 }
];
Resultado esperado: "Sur" (es la que está a menor distancia).

Ejercicio 2: Asignador de Turnos y Horarios Superpuestos (Agenda / Salud)
Objetivo: Crear una función validarTurno(turnosOcupados, nuevoTurno) que reciba un array de turnos programados ({ inicio: 10, fin: 11 } en horas) y un turno que un cliente quiere reservar. Debe devolver true si el turno está disponible o false si se solapa con alguno existente.

Entrada de prueba:

JavaScript
const turnosOcupados = [
    { inicio: 9, fin: 10 },
    { inicio: 11, fin: 12.5 },
    { inicio: 15, fin: 16 }
];
const nuevoTurno = { inicio: 10.5, fin: 11.5 };
Resultado esperado: false (porque se pisa con el turno de 11 a 12.5).

Ejercicio 3: Agrupador y Agregador de Notificaciones (Social Media)
Objetivo: Crear una función resumirNotificaciones(notificaciones) que reciba un historial de interacciones y las agrupe por publicación. Si hay más de 2 interacciones en un mismo post, debe formatearlo como "A [Usuario1], [Usuario2] y X personas más les gustó tu publicación".

Entrada de prueba:

JavaScript
const notificaciones = [
    { postId: 101, usuario: "Roma" },
    { postId: 101, usuario: "Leo" },
    { postId: 101, usuario: "Matias" },
    { postId: 101, usuario: "Sofia" },
    { postId: 202, usuario: "Roma" }
];
Resultado esperado:

JavaScript
[
  { postId: 101, resumen: "A Roma, Leo y 2 personas más les gustó tu publicación" },
  { postId: 202, resumen: "A Roma le gustó tu publicación" }
]
Ejercicio 4: Control de Stock y Reposición Automática (Logística)
Objetivo: Crear una función evaluarStock(inventario) que reciba el inventario de un depósito. Debe identificar qué productos están por debajo de su punto mínimo, calcular cuántas unidades faltan para llegar al stock óptimo, y devolver una orden de compra ordenada por los artículos más urgentes (menor porcentaje de stock disponible).

Entrada de prueba:

JavaScript
const inventario = [
    { producto: "Teclados", actual: 2, minimo: 5, optimo: 15 },
    { producto: "Mouses", actual: 10, minimo: 8, optimo: 20 },
    { producto: "Monitores", actual: 1, minimo: 3, optimo: 8 }
];
Resultado esperado:

JavaScript
[
  { producto: "Teclados", comprar: 13 },
  { producto: "Monitores", comprar: 7 }
]