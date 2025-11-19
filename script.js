
const cardsGrid = document.getElementById("cardsGrid");


//richiamo un array con oggetti. ogni oggetto è una card con info all'interno
axios.get("https://lanciweb.github.io/demo/api/pictures/").then(function (resp) {
        
    //sto assegnando alla variabile cardArray un valore (una serie di oggetti)
    const cardArray = resp.data;

        let cardStr = "";

       // voglio estrarre dall'array dei valori uso il foreach
        cardArray.forEach((curCard) => {
        //destrutturazione per semplificare l'inserimento delle variabili 
        // all'interno della stringa
        
            const {url, title , date} = curCard;
         
           // creo la stringa da inserire nell'HTML

            cardStr = cardStr +
                `<div class="col ">
            <div class="card bg-white">
             <img src="${url}" alt="${title}">
            <p class="data p-top-15">${date}</p>
            <h2 class="titoli">${title}</h2>
            </div>
            <img src="./img/pin.svg" alt="" class="pin">
            </div>`
        });

        //print in html le cards
 cardsGrid.innerHTML =cardStr;
});
