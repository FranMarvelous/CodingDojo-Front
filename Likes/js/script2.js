//Funciónes para aumentar likes

/* tarjeta 1 */
var me_gusta = 9;

function like(){
    me_gusta++;
    var cantidad = document.querySelector(".cantidad") //aquí estoy seleccionando la clase dentro del span que debe cambiar y guardandolo en la var cantidad
    cantidad.innerText = me_gusta;
}

/* tarjeta 2 */
var me_gusta2 = 12;

function like2(){
    me_gusta2++;
    var cantidad2 = document.querySelector(".cantidad2") //aquí estoy seleccionando la clase dentro del span que debe cambiar y guardandolo en la var cantidad
    cantidad2.innerText = me_gusta2;
}

/* tarjeta 2 */
var me_gusta3 = 9;

function like3(){
    me_gusta3++;
    var cantidad3 = document.querySelector(".cantidad3") //aquí estoy seleccionando la clase dentro del span que debe cambiar y guardandolo en la var cantidad
    cantidad3.innerText = me_gusta3;
}
