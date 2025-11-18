
const cardsGrid = document.getElementById("cardsGrid");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
        const cardArray = resp.data;
        let cardStr = "";
        cardArray.forEach((curCard) => {
            cardStr = cardStr +
                `<div class="col ">
            <div class="card bg-white">
          <img src="${curCard.url}" alt="${curCard.title}">
          <p class="data p-top-15">${curCard.data}</p>
          <h2 class="titoli">${curCard.title}</h2>
            </div>
            <img src="./img/pin.svg" alt="" class="pin">
            </div>`
        });
 cardsGrid.innerHTML =cardStr;
});