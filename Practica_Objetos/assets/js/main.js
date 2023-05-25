let boolean1 = true;
let boolean2 = false;


console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);
console.log(); 
   
                // VERIFICAR BOOLEAN

let sesion =false;
console.log(sesion? 'si esta aautenticado' : 'no esta autenticado');


                // --------------//
                //    objetos    // 
                // --------------//

const moteros = {
        nombre:"eduin",
        apellidos:"pardo   llll",
        correo:"yecid@moteros.co",
        celular: 3007895100,
        alias: "nee",
        correoalter:"motero2@nnnn.co",
        identificacion:"6446464"
}

console.log(moteros);

moteros.moto="yamaha";


console.log(moteros.celular);
console.log(moteros.correo);
console.log(moteros.moto);

console.log(moteros['identificacion']);

////////////////////////////////////////////
delete moteros.alias;
delete moteros.correoalter;
//////////////////////////////////////////
const nombres = moteros.nombre;
console.log(nombres);
///////////////////////////////////////////

const {nombre, celular} = moteros;
console.log(nombre," ",celular);

