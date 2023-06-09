///////////////// CICLO FOR ////////////////
for(let i=0;i<5;i++){
    console.log(`Numero ${[i]}`);
    document.write(`Numero ${[i]}<br>`);
}

for(let j=0;j<=7;j++){
    if(j%2 == 0){
        console.log(`${[j]} Es par`);
        document.write(`${[j]} Es par<br>`);
    }else{
        console.log(`${[j]} Es impar`);
        document.write(`${[j]} Es impar<br>`);
    }
}

const libros = [
    {nombre:"Odisea", precio:5000, pasta:"Dura"},
    {nombre:"100 años", precio:4000, pasta:"Dura"},
    {nombre:"soledad", precio:3000, pasta:"Plastificada"},
    {nombre:"quijote", precio:6000, pasta:"Dura"},
    {nombre:"libro", precio:7000, pasta:"Dura"},
    {nombre:"libro2", precio:10000, pasta:"Dura"},
   ];

for(let l=0;l<=libros.length;l++){
    console.table(libros[l]);
    document.write(`Libros<br>${libros[l]}`);
}

for(let ll=0;ll<=libros.length;ll++){
    if (libros[ll].pasta === "Plastificada"){
        console.table(`El libro ${libros[ll].nombre}, tiene descuento en la tienda`);
        break;
    }
    console.table(libros[ll]);
}

for(let i = 0; i<=10;i++){
    console.log(i);
    if(i===5){
        console.log("Este es el numero "+i);
        // break;
        continue;
    }
}

//////////////////02/06/2023 CICLO WHILE////////////////////
let i=0;

while(i<10){
    console.log(`While el número ${i}`);
    i++;
}

let x=0;

do{

    console.log(`Do while el número ${x}`);
    i++;

}while(x<=5);

/////////////////FOR EACH ////////////////////////
////////////////ARROW FUNCTION SIEMPRE
////////RECORRE ARREGLOS SIN NECESIDAD DE VARIABLE APARTE 
libros.forEach( libros => console.log(libros));
libros.map( (libros, ind) => {console.log(`${ind}:, ${libros}`); }); 

///////////////HACE UN ARREGLO APARTE 
libros.map( (libros) => {console.log(libros.nombre, libros.pasta); });

/////////////////FOR IN - FOR OF
////////////////IN SIRVE PARA OBJETOS
////////////////OF SIRVE PARA OBJETOS Y ARREGLOS
for(let libro of libros){
    console.log(libro);
}