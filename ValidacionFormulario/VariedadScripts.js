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
