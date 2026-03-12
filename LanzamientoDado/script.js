// Función para generar un numero aleatorio del 1 al 6

function aleatorio(){
    return Math.floor( 1 + (Math.random() * 6));
}


// Funcion que dado un numero aleatorio, muestra el resultado del dado de manera numerica y visual
function mostrarResultado(){

    let num = aleatorio();
    let resultado = "El resultado es: ".concat(num);
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("imagen").src = "imagenes/d" + num + ".JPG";

    document.getElementById("imagen2").style.display = "none" ;

}

// Misma funcion que arriba, pero a demas lo hace con un dado extra
function variosDados(){
    let num1 = aleatorio();
    let num2 = aleatorio();

    let total = num1 + num2;

    let resultado = "El resultado es: ".concat(total);
    document.getElementById("resultado").innerHTML = resultado;

    document.getElementById("imagen").src = "imagenes/d" + num1 + ".JPG";
    document.getElementById("imagen2").src = "imagenes/d" + num2 + ".JPG";
    document.getElementById("imagen2").style.display = "inline" ;


}


// Funcion para cambiar los estilos de fondo, tamaño de fuente y color de los botones al clickar el boton "cambiar"
function cambioEstilo(){
    document.getElementById("entero").style.backgroundImage = "url('imagenes/" + "Fondo.png')";
    document.getElementById("entero").style.backgroundRepeat = "no-repeat";
    document.getElementById("entero").style.backgroundSize = "cover";

    document.getElementById("Dados").style.color = "green";
    document.getElementById("Cambio").style.color = "green";
    document.getElementById("Tirar").style.color = "green";

    document.getElementById("Dados").style.fontSize = "10px";
    document.getElementById("Cambio").style.fontSize = "10px";
    document.getElementById("Tirar").style.fontSize = "10px";


}
