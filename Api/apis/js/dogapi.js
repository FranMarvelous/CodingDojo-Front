/*CONSUMO DE APIS*/

/* Promesa */
function muestraPerrito(){
    fetch("https:dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data =>{
        var imagen_perrito = `<img src="${data['message']}" alt="perrito">`;
        document.querySelector('.img').innerHTML = imagen_perrito;
    })
}

/* Async await */
async function muestraPerritoAsync(){
    var response = await fetch("https:dog.ceo/api/breeds/image/random");
    var data = await response.json();
    var imagen_perrito = `<img src="${data['message']}" alt=""perrito>`;
    document.querySelector('.img').innerHTML = imagen_perrito;
}