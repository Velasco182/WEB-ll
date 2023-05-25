const persona = {
        nombre:"Elkin",
        apellidos:"Fabricio",
        correo:"elkinf@gmail.com",
        celular: 3007895112,
        alias: "Elfa",
        correoalter:"elfabricio@gmail.com",
        identificacion:"1061663936",
        menores1: {
            nombre: "Juan",
            apellidos:"Fabricio",
            correo:"elkinf@gmail.com",
            celular: 3007895112
        }
}

console.log(persona);

////////// DECONSTRUCTOR ///////////
const {nombre, alias, menores1:{apellidos}} = persona;

console.log(apellidos);

///////////////UNIR O COPIAR OBJETOS///////////////
const motero = {
    nombre: "Saul",
    apellido: "Goodman",
    telefono: 3219087865
}

const moto = {
    placa: "ATX-666",
    color: "Rojo",
    modelo: 1978
}

// Object.seal(motero);

console.log(motero, moto);

const motero1 = Object.assign(motero, moto);

console.log(motero1);

const motero2 = {...motero, ...moto};

console.log(motero1);

