const nombre = prompt('¿Cuál es tu nombre?');
const apellido = prompt('¿Cuál es tu apellido?');
document.querySelector('.contenido').innerHTML = `${nombre +" "+ apellido} está aprendiendo JavaScript`;

console.log(nombre + " " + apellido);

alert('Bienvenido' + " "+nombre+ " " + apellido);
