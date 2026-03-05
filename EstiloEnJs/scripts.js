function estiloNav(id){
    let elemento = document.getElementById(id);

    elemento.addEventListener("mouseover", function(){
        elemento.style.color = "white";
        elemento.style.fontSize = "20px";
        elemento.style.fontStyle = "oblique";
    });

    elemento.addEventListener("mouseleave", function(){
        elemento.style.color = "";
        elemento.style.fontSize = "";
        elemento.style.fontStyle = "";
    });
}

function estiloBotones(id){
    let boton = document.getElementById(id);
    boton.addEventListener("mouseover", function(){
        boton.style.color = "green";
        boton.style.fontSize = "30px";
        boton.style.fontStyle = "italic";
    });

    boton.addEventListener("mouseleave", function(){
        boton.style.color = "";
        boton.style.fontSize = "";
        boton.style.fontStyle = "";
    });
}


function desaparecer(){
    let barra = document.getElementById("Barra");
    let objeto1 = document.getElementById("i2");
    let objeto2 = document.getElementById("i4");

    barra.style.display = "flex";
    objeto1.style.display = "none";
    objeto2.style.display = "none";

}

function aparecer(){
    let barra = document.getElementById("Barra");
    let objeto1 = document.getElementById("i2");
    let objeto2 = document.getElementById("i4");

    barra.style.display = "flex";
    objeto1.style.display = "";
    objeto2.style.display = "";

}

estiloNav("i1");
estiloNav("i2");
estiloNav("i3");
estiloNav("i4");
estiloBotones("BotonAdmin");
estiloBotones("BotonUsuario");
