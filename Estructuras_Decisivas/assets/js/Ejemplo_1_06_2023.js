const user = true;
const pruebaPago = true;
const transporte = true;

if(user || pruebaPago || transporte){
    console.log("El usuario puede comprar y llevarse el mercado.");
}else{
    console.log("El usuario no puede comprar.");
}

if(user && pruebaPago){
    console.log("El usuario puede comprar.");
}else if(!user){
    console.log("No eres usuario debes registarte.");
}else if(!pruebaPago){
    console.log("No tienes fondos.");
}else if(!transporte){
    console.log("Coja taxi o comprese carro.");
}else{
    console.log("No puede pagar.");
}

const efectivo = 1000;
const credito = 5000;
const disponible = efectivo + credito;

totalPago = 3000;

if(efectivo > totalPago){
    console.log("Si puedes pagar.");
}else{
    console.log("No puedes pagar.");
}
/////////////// OR con MAYOR y MENOR ////////////////////

if(efectivo > totalPago || credito>totalPago){
    console.log("Si puedes pagar.");
}else{
    console.log("No puedes pagar.");
}

/////////////////////////////////////////////////////////

if(efectivo > totalPago || credito>totalPago || disponible>totalPago){
    console.log("Si puedes pagar.");
}else{
    console.log("No puedes pagar.");
}