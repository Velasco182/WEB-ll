let recorrido = document;

// recorrido = recorrido.head;

// recorrido = recorrido.forms;

// recorrido = recorrido.domain;

//console.log(recorrido);
/// Bloquear pagina web C:\Windows\System32\drivers\etc

console.log(recorrido);
console.log(recorrido.head);
console.log(recorrido.forms);
console.log(recorrido.domain);
console.log(recorrido.forms[0]);

console.log(recorrido.forms[0].action); ///http://127.0.0.1:5500/buscador

console.log(recorrido.forms[0].method); ///post

console.log(recorrido.images); ////HTMLCollection(16) [img, img, img, img, img, img, img, img, img, img, img, img, img, img, img, img]

console.log(recorrido.links); ////HTMLCollection(25) [a, a, a, a, a.boton.btn-mi-viaje, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.btn-flotante]

console.log(recorrido.links[4]);

console.log(navegar.firstChild);
console.log(navegar.firstElementChild);
console.log(navegar.lastChild);
console.log(navegar.lastElementChild);

//////Crear elementos
const enlace = document.createElement('a');
//////Atributos del elemento
enlace.textContent = 'GIT';
enlace.href = 'https://github.com/Velasco182/';
enlace.target = '_blank';


const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[2]);

///////Evento que lanza alertas cuando se cliquea el elemento antes creado (GIT)
enlace.onclick = alertas;

function alertas(){
    alert("Hola, estas presionando un enlace");
}

console.log(enlace);

//////Crear elemento card

const parrafo1= document.createElement('p');
parrafo1.textContent='aprendiz';
parrafo1.classList.add('categoia');
parrafo1.classList.add('concierto');


const parrafo1= document.createElement('p');
parrafo1.textContent='nombre';
parrafo1.classList.add('titulo');


const parrafo3= document.createElement('p');
parrafo3.textContent='jornada';
parrafo3.classList.add('precio');


const info=document.createElement('div');
info.classList.add8('info');
info.append.child(parrafo1);
info.append.child(parrafo2);
info.append.child(parrafo3);


const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () =>{
    alert('Diste click');
})