/*Crea una  SOLA página HTML donde se resuelvan los siguientes ejercicios mediante javascript.

l código de JS irá en un fichero externo con extensión .js


Leer un número y determinar si es par o impar. Resolvemos mediante un funcion espar que devuelva un booleano

Determinar el área de un rectángulo 

Leemos un nº de DNI y su letra y averiguamos si la letra es la correcta o no. En caso que no, mostraremos la letra que le corresponde  ( con funcion). La función para ver si el DNI es correcto se incluira en una librería en un fichero externo, con extensión .js

  
En la página será necesario crear los elementos necesarios para mostrar los resultados, con su id correspondiente
Además de elementos estáticos de HTML para dar forma y presencia a la página


Enviamos los ejercicios anteriores en un documento html basicos-js.html
*
*
*/

function esPar(num1){
    return(num1 % 2 == 0);
}

function comprobar(){
    let n1 = parseInt(document.getElementById("Num1").value);
    if(esPar(n1)){
        texto ="Es par";
    }else{
        texto ="Es impar";
    }
    document.getElementById("numPar").innerText = texto;
}

function calculoBase(base, altura){

    base = parseInt(document.getElementById("Base").value);
    altura = parseInt(document.getElementById("Altura").value);

    area = base * altura;
    texto = "El area del rectangulo es: " + area;

    document.getElementById("resultadoBase").innerHTML = texto;
}

function letraDNI(numero) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras[numero % 23];
}


function comprobarDNI() {
    let dni = document.getElementById("DNI").value.toUpperCase();
    let resultado = document.getElementById("resultadoDNI");

    if (dni.length < 2) {
        resultado.innerText = "Introduce un DNI válido";
        return;
    }

    let numero = parseInt(dni.slice(0, -1));
    let letra = dni.slice(-1);

    if (isNaN(numero)) {
        resultado.innerText = "Introduce un DNI válido";
        return;
    }

    let letraCorrecta = letraDNI(numero);

    if (letra === letraCorrecta) {
        resultado.innerText = "El DNI es correcto";
    } else {
        resultado.innerText =
            "El DNI es incorrecto. La letra correcta es: " + letraCorrecta;
    }
}
