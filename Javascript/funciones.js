/* 
FUNCIÓN: Bloque de código al que nombramos y al que podemos llamar las veces que se necesite.
*/

//function nombreFuncion (parametro1, parametro2,...){}

function saludo(){
    console.log("Hola");
}

saludo(); //al llamar la función realizará la acción


//PASAR PARAMETRO A TRAVÈS DE LA LLAMADA

function saludo_nombre(nombre){
    console.log(`Hola ${nombre}`);
}

saludo_nombre("Rebe"); //el parametro nombre està recibiendo el valor en la llamada

function saludo_nombre_apellido(nombre, apellido){
    console.log(`Hola ${nombre}${apellido}`);
}

saludo_nombre_apellido("Rebe",  "Marvelous");

//operaciones dentro de la funciòn y parametros dentro de la llamada
function sumatoria(num1,num2){
    return num1 + num2;
}

var resultado = sumatoria(11, 20); //31
console.log(`El resultado es: ${resultado}`);
