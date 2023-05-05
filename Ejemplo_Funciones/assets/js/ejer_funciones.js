function registro(){
    nom = prompt("Ingresa tu nombre: ");
    apellido = prompt("Ingresa tu apellido: ");
    ciudad = prompt("Ingresa tu ciudad: ");
    pwd = prompt("Ingresa una contraseña");
    alert("¡Registro Exitoso!");

    return nom, pwd;
}

function inicio(){

    registro();

    nombre = prompt("Ingresa tu usuario: ");
    pw = prompt("Ingresa tu contraseña: ");

    if(nombre === registro.nom && pw === registro.pwd){
        alert("Inicio de sesión exitoso.")
        console.log(`Bienvenido ${nombre}, te encuentras en ${ciudad}.`)

    }else{
        alert("Usuario o contraseña inválido");
    }
}

inicio();