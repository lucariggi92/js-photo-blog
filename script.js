
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
            <div class="card bg-white data-postid">
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


    const overlayElem = document.querySelector(".overlay");
    const cardShowedElem = document.querySelector(".card-showed");

    const cardElem = document.querySelectorAll(".card");
    //aggiungo un eventlistener per ogni card
  //se clicco su una qualiasi card mi compare l'overlay con l'immagine 
    // cardElem.forEach(card => {
    //     card.addEventListener("click", function () {
    //         overlayElem.classList.remove("hidden");
    //         cardShowedElem.classList.remove("hidden");
    //     })
    // })

    //se clicco una card mi restituisce nella cardShowed quella cliccata
    cardElem.forEach(card => {
        card.addEventListener("click", function () {

            //recupero l'url e il title dell'immagini
            const imgElem = card.querySelector("img").src
            const titleElem = card.querySelector("h2").textContent

            //stampo nell'HTML l'immagine se clicco
           cardShowedElem.innerHTML = `    
           <button class="m-bottom">Chiudi</button>
            <img src="${imgElem}" alt="${titleElem}">`
            // elimino la classe nascosto
            overlayElem.classList.remove("hidden");
            cardShowedElem.classList.remove("hidden");

            //inserisco il bottone chiudi
            const chiudBtn = cardShowedElem.querySelector("button");
            chiudBtn.addEventListener("click", function () {
                overlayElem.classList.add("hidden");
                cardShowedElem.classList.add("hidden");

            });

           //se clicco sull'overlay chiudo l'overlay e la cardShowed
            overlayElem.addEventListener("click", function(){
                overlayElem.classList.add("hidden");
                cardShowedElem.classList.add("hidden");
            })
         

        })  //chiusura addeventlistener
    });   //chiusura ciclo foreach 

});//chiusura del then

