// Función para generar un numero aleatorio del 1 al 6

function aleatorio(){
    return Math.floor( 1 + (Math.random() * 6));
}

function mostrarResultado(){

    let resultado = "El resultado es: ".concat(aleatorio());
    document.getElementById("resultado").innerHTML = resultado;
    imagen();
}

function imagen(){
    let numImg = aleatorio();
    document.getElementById("imagen").src = "imagenes/d" + numImg + ".JPG";

}

