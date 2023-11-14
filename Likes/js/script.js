//Función para aumentar likes
var me_gusta = 3;

function like(){
    me_gusta++;
    var cantidad = document.querySelector(".cantidad") //aquí estoy seleccionando la clase dentro del span que debe cambiar y guardandolo en la var cantidad
    cantidad.innerText = me_gusta;
}