let contador = 0;

function contadorMasCambios(id){
    let elemento = document.getElementById(id);
    

    elemento.addEventListener("mouseenter", function(){ // addEventListener("dblclick") para que el evento sea doble click
        let num  = Math.floor(Math.random() * 7);

        // Cambiar el fondo de manera "Aleatoria"
        switch(num){
            case 0 :
                document.getElementById(id).style.backgroundColor = "red";
            break;

            case 1 :
                document.getElementById(id).style.backgroundColor = "yellow";
            break;

            case 2 :
                document.getElementById(id).style.backgroundColor = "blue";
            break;

            case 3 :
                document.getElementById(id).style.backgroundColor = "green";
            break;

            case 4 :
                document.getElementById(id).style.backgroundColor = "brown";
            break;

            case 5 :
                document.getElementById(id).style.backgroundColor = "purple";
            break;

            case 6 :
                document.getElementById(id).style.backgroundColor = "grey";
            break;

        }

        contador++;

        document.getElementById("entrado").innerHTML = "Has entrado " + contador + " veces";


    });

}

contadorMasCambios("recuadro");