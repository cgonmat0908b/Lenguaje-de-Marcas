
// Variable para controlar el color del semaforo que se encendera 0 = verde, 1 = amarillo, 2 = rojo
let estado = 0;

// Simulación del semaforo al clickar el cambio de color
function cambioColor(){
    if(estado == 0){
        document.getElementById("verde").style.backgroundColor = "green";
        document.getElementById("amarillo").style.backgroundColor = "black";
        document.getElementById("rojo").style.backgroundColor = "black";
        estado = 1;
    }else if(estado == 1){
        document.getElementById("amarillo").style.backgroundColor = "yellow";
        document.getElementById("verde").style.backgroundColor = "black";
        document.getElementById("rojo").style.backgroundColor = "black";
        estado = 2;
    }else if(estado == 2){
        document.getElementById("rojo").style.backgroundColor = "red";
        document.getElementById("amarillo").style.backgroundColor = "black";
        document.getElementById("verde").style.backgroundColor = "black";
        estado = 0;
    }
}