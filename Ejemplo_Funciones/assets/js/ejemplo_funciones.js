function multiplicar(a,b){

    a = prompt("Número 1: ");
    b = prompt("Número 2: ");

    c = a*b;
    return c;
}

console.log(multiplicar());

/////// FUNCIÓN DECLARACIÓN ////////

function sumar(){
    console.log(2+2);
}

sumar();

/////// FUNCIÓN EXPRESIÓN ////////

const resta = function resta(){
    console.log(8-3);
}

resta();

/////// FUNCIONES SE LLAMAN CON PARÉNTESIS LIKE: sumar();
/////// MÉTODOS SE LLAMAN CON PUNTO LIKE: console.log(8-3);

const n1 = 10;
const n2 = "20";

console.log(parseInt(n2));
// console.log(n1.toString);

function saludo(nombre, apellido){
    console.log(`Bienvenido: ${nombre} ${apellido}`)
}

saludo("Rubén", "Velasco");
