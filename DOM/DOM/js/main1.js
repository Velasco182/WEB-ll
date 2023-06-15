/////////////DOCUMENT OBJECT MODEL//////////////
////////////De tipo gerarjico, o de tipo arbol//////////
/////////Se puede recorrer de padre a hijo o de hijo a padre /////////
/////document///////////
///// TRAVERSING : generar ruta especifica /////  



const header = document.getElementsByClassName('header');
console.log(header); ////HTMLCollection [header.header.contenedor]

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); /////HTMLCollection(4) [header.header.contenedor, div.contenido-hero.contenedor, main.contenido.contenedor, div.contenedor]

const form = document.getElementById('formulario');
console.log(form);    ///form#formulario.formulario.formulario-buscar
                        /*<form action="/buscador" method="POST" class="formulario formulario-buscar" id="formulario">
                        <input type="text" name="busqueda" class="busqueda" placeholder="New York, Londres, Roma, Guadalajara">
                        <input type="submit" value="Buscar" id="btn-submit">
                        </form> */
/////Consultar todo lo que tenga .card
const card = document.querySelector('.card');
console.log(card); /*  /// div.card
                        <div class="card">
//                      <img src="img/hacer1.jpg">
//                      <div class="info">
//                      <p class="categoria concierto">concierto</p>
//                      <p class="titulo">Música electrónica 2021</p>
//                      <p class="precio">$1,200 por persona</p>
                    //  </div>
                    //  </div> */

const segCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segCard);

////Consultar todos los selectores
const forma = document.querySelectorAll('#formulario');
console.log(forma);

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);///////////////mas usado

document.querySelector('.contenido-hero h1').textContent = "Prometí que no iba a hacerte daño, así me sientas extraño soy el que se quedó en tu piel";

document.querySelector('.contenido section h2').textContent = prompt("¿Que quiere ñero?","Tuyatuyasabe'loquequiero baby fluya");

// let x;
// alert("¡Bienvenid@!");

// do{
//     x = parseInt(prompt("¿Cuál es tu código?"));
    
// }while(x!==1 && x!==2 && x!==3 );

// switch(x){
//     case 1:
//         alert("Bienvenido Tutor");
//         document.querySelector('.contenido-hero h1').textContent = "Bienvenido Tutor";
//         break;
        
//     case 2:
//         alert("Bienvenido Adolecente");
//         document.querySelector('.contenido-hero h1').textContent = "Bienvenido Adolecente";
//         break;
        
//     case 3:
//         alert("Bienvenido a ConfiApp");
//         document.querySelector('.contenido-hero h1').textContent = "Bienvenido a ConfiApp";
//         break;

//     default:
//         break;
// }

const imagenes = document.querySelector('.card img');
imagenes.src = 'img/hacer1.jpg'; /// cambiar imagen


//// Manipular estilo de texto.
const headColor = document.querySelector('h1');
headColor.style.color = 'red';
headColor.style.backgroundColor = 'black';
headColor.style.textTransform = 'uppercase';

const cardd = document.querySelector('.card');
console.log(cardd);
console.log(cardd.classList);
cardd.classList.add('nueva_clase');
cardd.classList.remove('nueva_clase');

const navegar = document.querySelector('.navegacion');
console.log(navegar); /////nav.navegacion

console.log(navegar.childNodes); ////NodeList(9) [text, a, text, a, text, a, text, a, text]

console.log(navegar.children); ////HTMLCollection(4) [a, a, a, a]

console.log(navegar.children[3]); ///<a href="#">Iniciar Sesión</a>

console.log(navegar.children[3].nodeName);
console.log(navegar.children[3].nodeType);

console.log(cardd.children[1]);
console.log(cardd.children[1].children[1]);

let dd = cardd.children[1].children[1];
dd.textContent = "Cara e' mondá";

console.log(dd);

cardd.children[0].src = 'img/hacer1.jpg';


// console.log(navegar.children[0].textContent = "Una");

let x;
alert("¡Bienvenid@!");

do{
    x = parseInt(prompt("¿Cuál es tu código?"));
    
}while(x!==1 && x!==2 && x!==3 );

switch(x){
    case 1:
        alert("Bienvenido Tutor");
        document.querySelector('.contenido-hero h1').textContent = "Bienvenido Tutor";

        //////////////////CAMBIAR MENU
        navegar.children[0].textContent = "Menores";
        navegar.children[1].textContent = "Rutas";
        navegar.children[2].textContent = "Seguimiento";
        navegar.children[3].remove('Iniciar Sesion');
        ////////////////////////////////
        
        imagenes.src = 'img/hacer4.jpg';
    
        break;
        
    case 2:
        alert("Bienvenido Adolecente");
        document.querySelector('.contenido-hero h1').textContent = "Bienvenido Adolecente";

        //////////////////CAMBIAR MENU
        navegar.children[0].textContent = "Ruta";
        navegar.children[1].textContent = "Alerta";
        navegar.children[2].textContent = "S.O.S";
        navegar.children[3].remove('Iniciar Sesion');
        //////////////////////////////

        imagenes.children[0].src = 'img/hacer2.jpg';
        cardd.children[0].src = 'img/hacer2.jpg';
        cardd.children[0].src = 'img/hacer2.jpg';
        cardd.children[0].src = 'img/hacer2.jpg';

        break;
        
    case 3:
        alert("Bienvenido a ConfiApp");
        document.querySelector('.contenido-hero h1').textContent = "Bienvenido a ConfiApp";


        navegar.children[0].remove('Vender');


        break;

    default:
        break;
}