alert("Bienvendido a Ping - Pong");
let x = prompt("Ingresa un Límite");


isFinite(x) ? 'Float': x = prompt("Ingresa un Límite valido");

parseInt(x);

for(let j=0;j<=x;j++){
console.log(`${[j]}`);
document.write(`${[j]}<br>`);
    if(j==0){

    }else if(j%5 === 0 && j%3 === 0){
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




