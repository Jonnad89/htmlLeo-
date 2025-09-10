// Prototipos y Object.create()

const animal = {
    comer() {console.log("ñam ñam")}
};

const perro = Object.create(animal);
perro.ladrar = function() {console.log("guau"); };

perro.comer();
perro.ladrar();