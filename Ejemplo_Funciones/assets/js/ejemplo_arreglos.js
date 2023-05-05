const aprendices=[];

const aprendiz1 = {
    nombre: "Juan",
    materia: "JavaScript"
}

const aprendiz2 = {
    nombre: "Pablo",
    materia: "Html5"
}

const aprendiz3 = {
    nombre: "Pedro",
    materia: "Etica"
}

let resultado;

resultado = [...aprendices, aprendiz1];
resultado = [...resultado, aprendiz2];
resultado = [aprendiz3, ...resultado]


console.table(resultado);

// Eliminar ultimo elemento
resultado.pop();
//Eliminar primer elemento
resultado.shift();
//Eliminar por posición
resultado.slice(1,1);

console.table(resultado);

//Sacar datos de arreglos (destructuring)

const numero=[20,40,60,80];
const[uno, ...demas]=numero;

console.table(numero);
console.log(uno);
console.log(demas);

const semana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
// const [dia1, dia2, dia3]=semana;
//console.log(dia3);

const [ , , dia3, , dia5]=semana;
console.log(dia3);
console.log(dia5);

// iteraciones for - forEach

for(let i=0;i<resultado.length;i++){
    console.table(resultado[i].nombre);
}

//Para cada elmento del arreglo
resultado.forEach(function(estudiante){
    console.table(`Nombre: ${aprendiz1.nombre} \nMateria: ${aprendiz1.materia}`);
});