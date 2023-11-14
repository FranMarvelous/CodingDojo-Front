var num = 1;
let texto = "Este es un texto"; //Solo existe en el bloque que se declara
const otro_num = 2; //No pueden ser alteradas
var decimales = 1.11;
var bool = true;

console.log("Hola mundo!");
console.log(otro_num);

var despues; 
console.log(despues); //Por default el valor de mi variables es undefined
despues = "Texto colocado después";
console.log(despues);
despues = 10;
console.log(despues);

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; //1 + 2 = 3
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre);

var otro_nombre = "Juana de Arco";
var edad = 18;
var otro_mensaje = `Mi nombre es: ${otro_nombre}, ¿cómo estás?. Tengo ${edad} años`; //Interpolación
var tercer_mensaje = "Mi nombre es: "+otro_nombre+" ¿cómo estás? Tengo "+edad+" años"; //Sin interpolación - Concatenado
console.log(otro_mensaje);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto + num1 + num2);
console.log(num1 + num2 + combinamosTexto);

var orden = 10 + 20 / 6;
console.log(orden);
orden = (10+20) / 6; // 1.- (). 2.- /*%. 3.- +-

var n = 14;
n += 5; //n = n+5 = 14+5 = 19

var nombre_completo = "Pedro";
nombre_completo += " Perez"; // "Pedro Perez"
console.log(nombre_completo)

if(bool) { //a === b; a !== b; a < b; a > b; a <=b; a >=b
    console.log("Variable verdadera");
} else {
    console.log("Variable falsa");
}

if(n >= 15) {
    console.log("Numero mayor a 15");
} else {
    console.log("Número menor a 15");
}

var edad_nino = 6;
if(edad_nino < 2) {
    console.log("Es un bebe");
} else if(edad_nino < 5) { // 2-5
    console.log("Es un toddler");
} else {
    console.log("Es un niño");
}

var temperatura = 5;
var estaLloviendo = false;
if(temperatura >= 18 && !estaLloviendo) { // && -> AMBAS condiciones deben cumplirse
    console.log("Es un buen día para dar un paseo!");
} else {
    console.log("Daremos el paseo cuando las condiciones sean óptimas");
}

var edad_conducir = 17;
var permisoPadres = true;
if(edad_conducir >= 18 || permisoPadres) { // || -> una u otra condicional se cumplan
    console.log("Tienes permiso para obtener tu licencia de manejo");
}

/*
i = 0
¡Hola!
¿Cómo estás?
---
i = 1
¡Hola!
¿Cómo estás?
---
i = 2
¡Hola!
¿Cómo estás?
---
i = 3
¡Hola!
¿Cómo estás?
---
i = 4
 */
for(let i=0; i < 4; i++){ // (inicializar; condicional; paso)
    console.log("¡Hola!");
    console.log("¿Cómo estás?");
}

//console.log(i);

for(let i=10; i > 0; i--) {
    console.log(i);
}

/*
x = 0
Entramos al while
x = 1;
---
Entramos al while
x = 2
---
Entramos al while
x = 3
*/
let x = 0;
while(x < 3) {
    console.log("Entramos al while");
    x++;
}

let inicio = 2;
let final = 10;
/*
inicio = 2
final = 10
Entramos al nuevo while
inicio = 3
final = 9
---
Entramos al nuevo while
inicio = 4
final = 8
---
Entramos al nuevo while
inicio = 5
final = 7
---
Entramos al nuevo while
inicio = 6
final = 6
*/
while(inicio < final) {
    console.log("Entramos al nuevo while");
    if(inicio > 5) {
        inicio +=2;
    } else {
        inicio++;
        final--;
    }
}

var variable1 = 1;
var variable2 = "1";
if(variable1 == variable2) {
    console.log("Son iguales");
}

if(variable1 === variable2) {
    console.log("Son iguales y con el mismo tipo");
}

/* ARRAY/ARREGLO/LISTA */
var hobbies = [ "Leer",
                "Correr",
                "Bailar",
                "Cantar",
                "Tocar la guitarra",
                "Jugar videojuegos"
            ];
console.log(hobbies[0]);

hobbies[1] = "Trotar";
console.log(hobbies);

console.log(hobbies.length);

//A través de un bucle recorremos el arreglo
for(let z=0; z < hobbies.length; z++) {
    console.log(hobbies[z]);
}

var combinado = [
    1.11,
    "Texto de arreglo",
    true,
    30,
    ["esta", "es", "otra", "lista"]
]

for(let i=0; i < combinado.length; i++) {
    console.log(`Posición: ${i} de mi arreglo es: ${combinado[i]}`);
}

combinado.push("nuevo elemento"); //Agrega nuevo elemento a la lista
console.log(combinado);

combinado.pop(); //Elimina el último elemento de nuestra lista
combinado.pop();
console.log("-----");
console.log(combinado);

const nombres = ["Juana", "Elena", "Paco", "Pedro"];
nombres.pop();
console.log(nombres);
nombres[1] = "Rosa";
console.log(nombres);

const no_modificable = "ABC";
// no_modificable = "BCD";
// nombres = ["A", "B", "C"];

combinado = [];

var matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
]

matriz[0].push(6);
console.log(matriz);

/* OBJETOS */
var estudiante = {
    "id": 12345,
    "nombre": "Elena",
    "apellido": "De Troya",
    "edad": 25,
    "hobbies": ["Leer", "Bailar", "Ver series"],
    "direcciones": [
        {
            "calle": "Av. Sol",
            "num": 123,
            "ciudad": "Monterrey",
            "pais": "México"
        },
        {
            "calle": "Primera Avenida",
            "num": 345,
            "ciudad": "Guadalajara",
            "pais": "México"
        }
    ]
};

console.log(estudiante["nombre"]);
console.log(estudiante.apellido);
estudiante.apellido = "De Arco";
console.log(estudiante);

estudiante["curso"] = "Front-End"; //Agregamos propiedad/key
console.log(estudiante);

delete estudiante.direcciones; //Eliminar propiedad/key
console.log(estudiante);