

function Prueba(){

    let nom = document.getElementById("nombre").value;
    let apell = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let Tel =document.getElementById("Tel").value;
    let Sexo  = document.getElementById("Sexo").value;
    let Trabajo =document.getElementById("Trabajo").value;
    if(nom  == " " || apell == " " || edad === " " || Tel ===" " || Sexo == " " || Trabajo == " ") {
        
        alert("llena todos los campos");

    }else{
        console.log(nom + " " + apell +" " + edad + " " + Tel +" " + Sexo + " " + Trabajo  );

        document.getElementById("fomulario").style.display ='none';
        document.getElementById("img1").style.display ='block';
        document.getElementById("risa").style.display ='block';
        document.getElementById("risa2").style.display ='block';
        asignarTextoElemento('p','Deja de estar de flojo');

    }
    
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
