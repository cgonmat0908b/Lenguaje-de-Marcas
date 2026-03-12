let contador = 0


function calculoIMC(){

    contador++;

    let peso = parseFloat(document.getElementById("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);

    altura = altura / 100;
    let IMC = (peso / (altura * altura));


    if(IMC < 18.5){
        document.getElementById("Resultado").innerHTML = IMC.toFixed(2) + " Bajo peso";
        document.getElementById("cajaResult").style.backgroundColor = "red";
    }else if(IMC >= 18.5 && IMC <= 24.9){
        document.getElementById("Resultado").innerHTML = IMC.toFixed(2) + " Peso Saludable";
        document.getElementById("cajaResult").style.backgroundColor = "green";

    }else if(IMC >= 25 && IMC <= 29.9){
        document.getElementById("Resultado").innerHTML = IMC.toFixed(2) + " Sobrepeso";
        document.getElementById("cajaResult").style.backgroundColor = "orange";

    }else if(IMC >= 30){
        document.getElementById("Resultado").innerHTML = IMC.toFixed(2) + " Obesidad";
        document.getElementById("cajaResult").style.backgroundColor = "red";
    }

    document.getElementById("Contador").innerHTML = "Cáculos:" + contador;

}

