/////// OBJETO LITERAL ////////
const motero = {

    nombre: "Manuel Elkin",
    apellido: "Patarroyo",
    telefono: 3127899809,
    detalle: function(){
        console.log(`El nombre del motero es: \n${this.nombre}`)
    }

}

////// MOSTRAR OBJETO EN CONSOLA /////
console.log(motero)

///// LLAMAR FUNCIONES ///////
motero.detalle();

///// OBJETOS CONTRUCTORES /////
function aprendiz(nombre, direccion, telefono){
    this.nombre=nombre;
    this.direccion=direccion;
    this.telefono=telefono;
}

const aprendiz1 = new aprendiz("juan","esmeralda","321651651");
console.log(aprendiz1);

/////// ARREGLOS ////
const libros = ["la Biblia","!00 años de Soledad","El Quijote","La Odisea"];

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "...");

console.log(aprendiz1);
console.table(libros);
console.table(meses);

//// AGRUPADOS NO NECESARIAMENTE DEL MISMO TIPO ////
const datos = ["ADSO", 2556678, null, true, {nombres: "Samir Elkin", apellidos: "Cauca", sexo: "de cuando en vez"}];
console.table(datos);
console.log(datos);
document.write(datos);

//// ACCEDER A VALORES DE UN ARRAY /////
console.log(datos[1]);
console.log(datos[3],datos[4]);

////// RECORRER ARREGLOS ///////
const aprendices = ["Nicole","Angela","Valeria","Francely"];



aprendices[5]="Manuel";
aprendices[4]="Jonatan";

////////// ELEMENTO AL FINAL /////////
aprendices.push("Aldair");
////////// ELEMENTO AL INICIO /////////
aprendices.unshift("Juan");

console.table(aprendices);

for(let i=0; i<aprendices.length;i++){
    console.log(aprendices[i]);
}



