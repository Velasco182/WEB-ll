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



