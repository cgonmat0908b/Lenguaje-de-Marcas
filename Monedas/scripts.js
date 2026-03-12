let cantidadPagada = 0;

function pagar(valor){

    cantidadPagada += valor;

    document.getElementById("pagado").innerText =
    cantidadPagada.toFixed(2);

    let importe =
    parseFloat(document.getElementById("importe").value);

    let caja = document.getElementById("pagado");

    if(cantidadPagada < importe){

    caja.style.border = "3px solid red";
    caja.style.background = "orange";

    }else{
        caja.style.border = "3px solid green";
        caja.style.background = "lightblue";

        let cambio = cantidadPagada - importe;

        document.getElementById("cambio").innerText =  "Cambio: " + cambio.toFixed(2) + "€";

    }   

}