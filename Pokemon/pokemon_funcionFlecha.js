var monster = { //Objeto
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
}

var pokémon = [ //Arreglo
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// console.log(pokemon[0]["name"]); //pokemon[0].name

//Lista de OBJ pokemon que comiencen con la letra B
// var pokemonLetraB = pokémon.filter(poke => poke.name.startsWith("B"));
// console.log(pokemonLetraB);

//Lista de SOLO nombres de pokemones
// var soloNombres = pokémon.map(poke => poke.name);
// console.log(soloNombres);

/* PRINT all the NAMES of the pokemons that have ID greater than 99
    Imprimir todos los NOMBRES de pokemones con ID mayor a 99
*/
// for (let i=0; i<pokémon.length; i++){
//     if(pokémon[i].id > 99){
//         console.log(pokémon[i].name);
//     }
// }

/* PRINT the pokémon objects whose id is evenly divisible by 3
    Imprimir el OBJETO en el cual el id es divisible entre 3
*/
// for (let i=0; i<pokémon.length; i++){
//     if(pokémon[i].id % 3 === 0){
//         console.log(pokémon[i]);
//     }
// }

/* PRINT the pokémon objects that have more than one type
    Imprimir el OBJETO con más de un tipo
*/
// for (let i=0; i<pokémon.length; i++){
//     if(pokémon[i].types.length > 1){
//         console.log(pokémon[i]);
//     }
// }

/* PRINT the names of the pokémon whose only type is "poison"
    Imprimir NOMBRE de pokemon que SOLO TIENE tipo "poison"
*/
// for(let i=0; i< pokémon.length; i++) {
//     if(pokémon[i].types.includes("poison") && pokémon[i].types.includes("grass")) {
//         console.log(pokémon[i]);
//     }
// }

// for(let i=0; i < pokémon.length; i++){
//     if(pokémon[i].types == "poison"){
//         console.log(pokémon[i]);
//     }
// }

// if(1 == "1") -> true Compara valores
// if(1 === "1") ->false Compara valores y tipo de dato


/* PRINT all the NAMES of the pokemons that have ID greater than 99
    Lista todos los NOMBRES de pokemones con ID mayor a 99
*/

//var nombre_filtrados = nombres.filter(nombre => nombre.startsWith("P"));

var pokemon_99 = pokémon.filter(poke => poke.id > 99);          //function pokemon_99(element) (this)
var nombres_poke99 = pokemon_99.map(poke => poke.name);
console.log(nombres_poke99);

/* PRINT the pokémon objects whose id is evenly divisible by 3
    Lista los OBJETOS en el cual el id es divisible entre 3
*/

var pokemon_idd3 = pokémon.filter(poke => poke.id % 3 === 0);
console.log(pokemon_idd3);

/* PRINT the pokémon objects that have more than one type
    Lista los OBJETOS con más de un tipo
*/

var pokemon_2tipos = pokémon.filter(poke => poke.types.length > 1 );
console.log(pokemon_2tipos);

/* PRINT the names of the pokémon whose only type is "poison"
    Lista los NOMBRES de pokemon que SOLO TIENE tipo "poison"
*/

var pokemon_poison = pokémon.filter(poke => poke.types == "poison");
var nombres_poke_poison = pokemon_poison.map(pokename => pokename.name);
console.log(nombres_poke_poison);

/* PRINT the names of the pokémon whose only type is "poison"
    Lista los NOMBRES de pokemon que TENGA tipo "poison"
*/

var pokemon_poison = pokémon.filter(poke => poke.types.includes("poison"));
var nombres_poke_poison = pokemon_poison.map(pokename => pokename.name);
console.log(nombres_poke_poison);

var pokeID99 = pokémon.filter(poke => poke.id > 99).map(poke => poke.name);
console.log(pokeID99);