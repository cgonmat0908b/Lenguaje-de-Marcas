function validar(){
    let pass = document.getElementById("contrasenya").value;

    if(pass.length < 5){
        document.getElementById("barra-fuerza").style.backgroundColor = "red";
        document.getElementById("barra-fuerza").style.width = "20%"

    }else if(pass.length >= 5 && pass.length <= 10){
        document.getElementById("barra-fuerza").style.backgroundColor = "orange";
        document.getElementById("barra-fuerza").style.width = "50%"

    }else if(pass.length > 10){
        document.getElementById("barra-fuerza").style.backgroundColor = "green";
        document.getElementById("barra-fuerza").style.width = "100%"
    }
    

}

let contador = 0;
function terminosMarcados(){
    contador++;

    if(contador % 2 !== 0){
        document.getElementById("enviar").style.backgroundColor = "white";
    }else if(contador % 2 === 0){
        document.getElementById("enviar").style.backgroundColor = "grey";
    }
    
}

function mostrar(){
    document.getElementById("terms").style.display = "inline";
    document.getElementById("resumidos").style.display = "inline";
}

function ocultar(){
    document.getElementById("terms").style.display = "none";
    document.getElementById("resumidos").style.display = "none";
}