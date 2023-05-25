//saludar(prompt('Ingresa tu nombre'),prompt('Ingresa tu apellido'));
// saludar();

// function saludar(nom='anonimo',ape='sin registrar'){
//   console.log(`Hola ${nom} ${ape}`);
// }

/* let nom, nombre , apellido, ciudad, pwd, pw;

alert("¡BIENVENIDO A CONFIAPP!");
alert("¡Regístrate ahora!");

inicio();

function registro() {

    nom = prompt("Ingresa tu nombre: ");
    apellido = prompt("Ingresa tu apellido: ");
    ciudad = prompt("Ingresa tu ciudad: ");
    pwd = prompt("Ingresa una contraseña");
    alert("¡Registro Exitoso!");

    return nom, pwd;
}

function inicio() {

    registro();

    nombre = prompt("Ingresa tu usuario: ");
    pw = prompt("Ingresa tu contraseña: ");

        if (nombre == nom && pw == pwd) {
            alert("Inicio de sesión exitoso.");
            console.log(`Bienvenido ${nombre}, te encuentras en ${ciudad}.`);
            document.write(`Bienvenido ${nombre}, te encuentras en ${ciudad}.`);

            } else {
                alert("Usuario o contraseña inválido");
        }
} */

// const peliculas = {//esto es un objeto}
//     drama: function(nombre) {//esta es un valor tipo función 
//         console.log(`PELICULAS DE DRAMA, ESTA PELÍCULA ES: ${nombre}`);
//     },
//     infantil: function() {
//         console.log(`PELICULAS INFANTILES`);
//     }
// }

// peliculas.drama('Voces inocentes');
// peliculas.infantil();

/* const aprendiendo = ()=>{
//     console.log("Estamos aprendiendo funciones flecha.");
// }

// aprendiendo();*/

//Pasando parámetros como siempre
const aprender = function(asignatura){
    console.log(`Estamos aprendiendo ${asignatura}`);
}

aprender("Matemáticas");

//Pasando parametros en una función flecha
const aprender1 = (asignatura)=> `Estamos aprendiendo ${asignatura} `;

console.log(aprender1('JS'));

//si solo es un parámetro
const aprender2 = asignatura => `Estamos aprendiendo ${asignatura}`;

console.log(aprender1('CSS'));
