//FUNCION PARA DESPLEGAR ALERTS EN NAV-LINKS CON THIS

function alerta(elemento){
//elemento = <a onclick="alerta(this)" href="#">Dallas</a>
var lugar = elemento.innerText; //al igualar el innerText del anchor con la variable lugar, al hacer click trae el texto de adentro
alert("Loading weather report from "+ lugar)
}

//Función para que se elimine la caja de cookies al ser clickeado el boton de aceptar
function aceptarCookies(){ //poner el onclick en el elemento que llamará a la función (botón en este caso)
    var cookies = document.querySelector(".cookies"); //guardo en la var la clase del elemento que quiero borrar
    cookies.remove();
}

//funcion para cambiar un select y modificar valores tras el cambio de select
function cambiar_temperatura(){
    var elemento_select = document.querySelector("select");
    console.log(elemento_select.value); //me trae el valor del select SELECCIONADO
    var grados_c = [24, 18, 27, 19, 21, 16, 26, 21];
    var grados_f = [75, 65, 80, 66, 69, 61, 78, 70];

    for(let i=0; i<8; i++){
        var elemento_temp = document.querySelector('#temp'+i);
        if(elemento_select.value == "F"){
            elemento_temp.innerText = grados_f[i];
        }else{
            elemento_temp.innerText = grados_c[i];
        }
    }
}