const API_KEY = "e6c3ed4131c547db86173fce65664c0b";

async function buscarNoticias(){
    //URL: https://newsapi.org/v2/everything?apiKEY=LLAVE&q=TERMINOBUXAR&pageSize=CANTIDAD

    var busqueda = document.querySelector('#busqueda').value; //valor que usuario ingresó
    var cantidad = document.querySelector('#cantidad').value;
    
    var response = await fetch(`https://newsapi.org/v2/everything?apiKEY=${API_KEY}&q=${busqueda}&pageSize=${cantidad}`)

    var responseJson = await response.json();
    console.log(responseJson);/*responseJson = {
        articles = [ //Lista de articulos
            { //Obj articulo
                author:
                content:
                description:
                title:
                urlToImage:
            }
        ]
    } */

    //lista con textos -> etiquetas article 
    var articulos = responseJson['articles'].map(article => 
                            `<article>
                                <h2>${article['title']}</h2>
                                <u>${article['author']}</u>
                                <p>
                                    ${article['description']}
                                </p>
                                <img src="${article['urlToImage']}" style="width:200px"> 
                            </article>`);

    
    console.log(articulos);

    //JOIN
    var textoArticulos = articulos.join('');

    var nombres = ["Elena", "Juan", "Juana", "Pablo"];
    var nombres_texto = nombres.join('!'); //Elena!Juan!Juana!Pablo


    document.querySelector(".articulos").innerHTML = textoArticulos;
    
}