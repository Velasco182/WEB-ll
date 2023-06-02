alert("Bienvendido a Ping - Pong");
let x; 

do{
  alert("Ingresa un número, solo es válido para enteros");
  x = prompt("Ingresa el número");
  
while(x%x!=0);


//isFinite(x) ? 'Float': x = prompt("Ingresa un Límite valido");

//parseInt(x);

for(let j=1;j<=x;j++){
console.log(`${[j]}`);
document.write(`${[j]}<br>`);

    if(j%5 === 0 && j%3 === 0){
        console.log(`${[j]} Ping Pong`);
        document.write(`${[j]} Ping Pong<br>`);
    }else if(j%5 === 0){
        console.log(`${[j]} Pong`);
        document.write(`${[j]} Pong<br>`);
    }else if(j%3 === 0){
        console.log(`${[j]} Ping`);
        document.write(`${[j]} Ping<br>`);
    }
}




