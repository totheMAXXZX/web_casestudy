let cardGroup = ["😡", "😆", "😆", "🤯", "😭", "🥺", "🧐", "😚"];

let totalCards = cardGroup.concat(cardGroup);
let startTime; 

function deckCards() {
    let result;
    result = totalCards.sort(function () {
        return 0.5 - Math.random();
    });
    return result;
}

function distributeCard() {
    let table = document.querySelector("#table");
    let shuffledCards = deckCards();
    table.innerHTML = "";

    shuffledCards.forEach(function(element){
        let card = document.createElement("div");

        card.innerHTML =
            "<div class='card' data-value= " + element +">" +
            "<div class='card_content'>" + element + "</div>" +
            "</div>";

        table.appendChild(card);
    });

    
    startTime = new Date().getTime();
}

function discover() {
    let discovery;
    let totalDiscovery = document.querySelectorAll(".discovered");

    if (totalDiscovery.length > 1){
        return;
    }

    this.classList.add("discovered");

    discovery = document.querySelectorAll(".discovered");
    if (discovery.length < 2) {
        return;
    }
    
    compare(discovery);
}

function compare(cardsToCompare){
    if (cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value ) {
        success(cardsToCompare);
    } else {
        setTimeout(function() {
            cardsToCompare.forEach(function(element){
                element.classList.remove("discovered");
            });
        }, 1000);
    }
}

function success(lastCard) {
    lastCard.forEach(function(element){
        element.classList.add("successful");
        element.classList.remove("discovered");
    });

    
    let allSuccessful = document.querySelectorAll(".successful");
    if (allSuccessful.length === totalCards.length) {
        endGame();
    }
}

function endGame() {
    let endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000; 
    
    alert("Congratulations! You've successfully completed the game in " + totalTime + " seconds. You're awesome!");
}

function error() {
    console.log("error");
}

distributeCard();

document.querySelectorAll(".card").forEach(function (element) {
    element.addEventListener("click", discover);
});