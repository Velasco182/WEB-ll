// const edad = 18;
const edad = prompt("Ingresa tu edad");
/////// ESTRUCTURAS DE CONTROL //////////// (IF-ELSE-ELSE IF)
if(edad>=18){
    console.log("Eres mayor de edad");
    document.write("Eres mayor de edad");
}else if(edad>=1 && edad<18){
    console.log("Eres menor de edad");
    document.write("Eres menor de edad");
}
/////// COMPARADORES //////////// (==, !=, !==, ===)
// const puntaje=1000, puntaje1="1000";
const dinero=1000, factura=15000;

// if(puntaje==puntaje1){
//     console.log(" Es diferente");
//     document.write(" Es diferente");
// }else if(puntaje===puntaje1){
//     console.log(" Es estrictamente diferente");
//     document.write(" Es estrictamente diferente");
// }

if(dinero > factura){
    console.log("El dinero si alcanza");
    document.write(" El dinero si alcanza");
}else{
    console.log("No es suficiente");
    document.write(" No es suficiente");    
}

//////// No es buena practica usar if anidados, en su lugar usar swich case /////////

const money = 10000, fact=10000, tarjeta=false, tarjetaCredito=false, cheque=true;

if(money != fact){
    console.log("El dinero si te alcanza");
    document.write("El dinero si te alcanza");    
}else if(tarjeta){
    console.log("Puedo pagar porque tengo tarjeta");
    document.write("Puedo pagar porque tengo tarjeta");
}else if(tarjetaCredito){
    console.log("Puedo pagar porque tengo tarjeta de crédito");
    document.write("Puedo pagar porque tengo tarjeta de crédito");
}else if(cheque){
    console.log("Puedo pagar porque tengo cheque");
    document.write("Puedo pagar porque tengo cheque");
}else{
    console.log("No es suficiente");
    document.write("No es suficiente");
}


///// SWICH CASE /////////////////
const metodoPago = "tarjeta de crédito";

switch(metodoPago){
    case "efectivo":
        console.log("Puedo pagar porque tengo efectivo");
        document.write("Puedo pagar porque tengo efectivo");
    break;
    case "cheque":
        console.log("Puedo pagar porque tengo cheque");
        document.write("Puedo pagar porque tengo cheque");
    break;
    case "tarjeta de crédito":
        console.log("Puedo pagar porque tengo tarjeta de crédito");
        document.write("Puedo pagar porque tengo tarjeta de crédito");
    break;
    case "tarjeta":
        console.log("Puedo pagar porque tengo tarjeta");
        document.write("Puedo pagar porque tengo tarjeta");
    break;
    default:
        console.log("No has seleccionado un método de pago");
        document.write("No has seleccionado un método de pago");
    break;    
}

function pagar(){
    console.log(`Estás pagando con: ${metodoPago}}`);
    document.write(`Estás pagando con: ${metodoPago}}`);
}

