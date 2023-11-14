var edad = 14;
var mensaje = "";

if(edad > 18) {
    mensaje = "La persona es mayor de edad";
} else {
    mensaje = "La persona es menor de edad";
}

//Operador ternario -> (condicional) ? si se cumple : no se cumple

mensaje = (edad > 18) ? "La persona es mayor de edad" : "La persona es menor de edad";

var edad_bebe = 3;

if(edad_bebe < 2) {
    mensaje = "Es un bebe";
} else if(edad_bebe < 5) {
    mensaje = "Es un toddler";
} else {
    mensaje = "Es un niño";
}

mensaje = (edad_bebe < 2) ? "Es un bebe" : (edad_bebe < 5) ? "Es un toddler" : "Es un niño";

//Función flecha -> () => codigo

function sumatoria(num1, num2) {
    return num1+num2;
}

var sumatoriaFlecha = (num1, num2) => num1+num2;

function abc(num1) {
    for(var i=0; i<num1; i++) {
        console.log(num1);
    }
}

var abcFlecha = num1 => {
    for(var i=0; i<num1; i++) {
        console.log(num1);
    }
}

/**/ 
let doble = num => 2*num; 

/*Función flecha -> SIGMA
Recibimos numero y vamos a sumar del 1-número recibido
num = 5
suma = 0;
i = 1
suma += 1 = 1
i = 2
suma = 1 + 2 = 3
i = 3
suma = 3 + 3 = 6
i = 4
suma = 6 + 4 = 10
i = 5
suma = 10 + 5 = 15
i = 6
*/
//function sigma (num) {
var sigma = num => {
    var suma = 0;
    for(let i=1; i<=num; i++) {
        suma += i;
    }
    return suma;
}

console.log(sigma(5));

/*
Función flecha -> Sumar Positivos e imprimir negativos
Función que reciba un arreglo y regrese la suma de los números positivos e imprima la suma de los números negativos
arr = [1,-1, 2, -2, 3, -3]
positivos = 0
negativos = 0
i = 0
positivos += 1 = 1
negativos += 0 = 0
-------
i = 1
positivos += 0 = 1
negativos += 
*/
var sumaPositivos = arr => {
    var positivos = 0; //suma nums positivos
    var negativos = 0; //suma nums negativos;
    for(let i=0; i<arr.length; i++) {
        positivos += arr[i] > 0 ? arr[i] : 0;
        negativos += arr[i] < 0 ? arr[i] : 0;
    }
    console.log(negativos);
    return positivos;
}


var pos = sumaPositivos([1,-1, 2, -2, 3, -3]); //Funcion Flecha Operador ternario
console.log("Nums positivos:"+pos);

/* FUNCIONES DE ARREGLOS */

//forEach me recorre un listado
var numeros = [1, 2, 3, 4, 5, 6, 7];
numeros.forEach(function(num){
    console.log("En este momento recorro el num "+num);
})

//filter me recorre el listado y agrega a la variable solo aquellos que cumplen con la condicional
var nums_filtrados = numeros.filter(num => num > 5);

console.log(nums_filtrados);

//map me recorre el listado y altera la lista
var nombres = ["Elena", "Juana", "Pablo", "Pedro", "Cynthia"]
var saludos = nombres.map(nombre => `¡Hola! ${nombre} ¿Cómo estás?`);
console.log(saludos);

var nombre_filtrados = nombres.filter(nombre => nombre.startsWith("P"));
var nuevos_saludos = nombre_filtrados.map(nombre => `¡Hola! ${nombre} ¿Cómo estás?`);
console.log(nuevos_saludos);