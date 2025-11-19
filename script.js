
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

        const { url, title, date } = curCard;

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
    cardsGrid.innerHTML = cardStr;

    //richiamo tutti gli elemnti dell'HTML che mi servono per generare un evento

    const cardElem = document.querySelectorAll(".card");
    const overlayElem = document.querySelector(".overlay");
    const cardShowedElem = document.querySelector(".card-showed");
    console.log(cardElem, overlayElem, cardShowedElem);

    //se clicco su una qualiasi card mi comparr l'overlay con l'immagine e il tasto chiudi
    cardElem.forEach(card => {
        card.addEventListener("click", function () {
            overlayElem.classList.remove("hidden");
            cardShowedElem.classList.remove("hidden");
        })

        //se clicco su button chiudi sparisce nuovamente
        const chiudBtn = document.querySelector("button");
        chiudBtn.addEventListener("click", function () {
            overlayElem.classList.add("hidden");
            cardShowedElem.classList.add("hidden");
        })
        
        //Milestone 3 Inseriamo il pezzo di logica finale: 
        // quando una foto viene cliccata, dobbiamo fare in 
        // modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.

    })



});



