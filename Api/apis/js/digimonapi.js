let digimones = "";
let counter = 0;
function traerDigimon() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      if (counter === 2) {
        digimones = "";
      }
      let number = document.querySelector("#number").value;
      let digimon = data[number];
      const html = `<div class="digi-item">
                        <h2>${digimon.name}</h2>
                        <img src="${digimon.img}">
                        <p>${digimon.level}</p>
                    </div>`;
      digimones += html;
      document.querySelector(".container").innerHTML = digimones;
      counter++;
      console.log(counter);
    });
}