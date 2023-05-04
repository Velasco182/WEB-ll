alert("BIENVENIDO A CONFIAPP");

let nombre = [], menor = [];

for(let i=0;i<3;i++){
    nombre[i] = prompt("Ingresa tu nombre:");
    menor[i] = prompt("Ingrese el nombre del menor:");
    tutor = {nombre, menor};
    
    console.table(tutor);
}

function tutor(nombre, menor){
    this.nombre=nombre;
    this.menor=menor;
}


