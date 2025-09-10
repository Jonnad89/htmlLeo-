const usuario = {id: 1, nombre : "Ana", direccion: {ciudad : "Madrid"} };

const {nombre, direccion: {ciudad}} = usuario;
console.log(nombre, ciudad)