/*para enlazar el js al html, pegar el script sobre la etiqueta de cierre del body*/
console.log("entramos a la pagina");

//Evento Onclick en html llama a:

function alerta(){
    alert('Hiciste click');
    console.log("Hizo click en Sign Out");
}

//This en html llama a:
function cambiar_texto(elemento){
    //console.log(elemento);
    elemento.innerText = "Otro texto"; //innerText cambia el texto q se visualiza
}

//Eventos onmouseover y onmouseout:
function cambia_imagen(elemento_img){
    elemento_img.src = "/images/todd-s.jpg"
}

function regresa_imagen(elemento_img){
    elemento_img.src = "/images/jane-m.jpg"
}

//Evento double click -> ondblclick
function eliminar(elemento){
    elemento.remove();
}

//CLICKS
var clicks_profile = 0;
function aumentar_clicks() {
    clicks_profile++;
    alert(`Haz hecho clic: ${clicks_profile} veces`);

    alert("Haz hecho click "+clicks_profile);
}

//QUERYSELECTOR (solo funciona con 1 elemento)

