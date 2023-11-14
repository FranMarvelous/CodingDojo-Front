
async function buscarBandera() {

var busqueda = document.querySelector(`#busqueda`).value; //valor ingresado

var response = await fetch(`https://restcountries.com/v3.1/name/${busqueda}`);

// var responseJson = await response.json()
// console.log(responseJson);

var data= await response.json();

var bandera = `<img src="${data[0]['flags']['png']}" alt="bandera">`;
document.querySelector(`.img`).innerHTML = bandera;
document.querySelector(`.capital`).innerText = data[0]['capital'];


}

