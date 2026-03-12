

function conversion(){
    let num = document.getElementById("valores").value;
    let resultado = 0;

    if(document.getElementById("Libra").checked){
        resultado = num * 1.18;
    }else if(document.getElementById("Euro").checked){
        resultado = num / 1.18;
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;

}
