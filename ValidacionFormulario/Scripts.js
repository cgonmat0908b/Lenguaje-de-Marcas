function validarForm(){

}

function validarCod(){

    let n1 = parseInt(document.getElementById("cod").value);
    let resultado;

    if (isNaN(n1)) {
        resultado = "Por favor, introduce un número";

    }else if(n1 > 500 || n1 < 1){
        resultado = "Invalido";

    }else{
        resultado = "Valido";
    }

    document.getElementById("resultadoCodigo").innerHTML = resultado;
}

function valirdarNom(){
    let nom = document.getElementById("nom").value;
    let nomValid;
    if(nom.length < 6 || nom.length > 50){
        nomValid = "Invalido";
    }else{
        nomValid = "Valido";
    }

    document.getElementById("resultadoNom").innerHTML = nomValid;
}