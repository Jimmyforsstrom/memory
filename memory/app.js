"use strict";
const cardArray = [
    {
        alias: "ERIC",
        img: "images/ape1.png",
    },
    {
        alias: "STEVE",
        img: "images/ape2.png",
    },
    {
        alias: "FRED",
        img: "images/ape3.png",
    },
    {
        alias: "NICK",
        img: "images/ape4.png",
    },
    {
        alias: "HOBBIT",
        img: "images/ape5.png",
    },
    {
        alias: "Mark",
        img: "images/ape6.png",
    },
    {
        alias: "LOGAN",
        img: "images/ape7.png",
    },
    {
        alias: "SONOS",
        img: "images/ape8.png",
    },
    {
        alias: "ERIC",
        img: "images/ape1.png",
    },
    {
        alias: "STEVE",
        img: "images/ape2.png",
    },
    {
        alias: "FRED",
        img: "images/ape3.png",
    },
    {
        alias: "NICK",
        img: "images/ape4.png",
    },
    {
        alias: "HOBBIT",
        img: "images/ape5.png",
    },
    {
        alias: "Mark",
        img: "images/ape6.png",
    },
    {
        alias: "LOGAN",
        img: "images/ape7.png",
    },
    {
        alias: "SONOS",
        img: "images/ape8.png",
    },
];
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
let cardChosen = [];
let cardChosenId = [];
const cardsWon = [];
let res = document.getElementById("result");
// const grid = document.querySelector('#grid') or
const grid = document.getElementById("grid");
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/bored.jpg");
        card.className = "cardImg";
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid === null || grid === void 0 ? void 0 : grid.appendChild(card);
    }
}
createBoard();
function checkMatch() {
    const cards = document.querySelectorAll("img");
    const option1Id = cardChosenId[0];
    const option2Id = cardChosenId[1];
    if (cardChosen[0] == cardChosen[1]) {
        alert("you´ve found a match");
        cards[option1Id].setAttribute("src", "images/blank.png");
        cards[option2Id].setAttribute("src", "images/blank.png");
        cards[option1Id].removeEventListener("click", flipCard);
        cards[option2Id].removeEventListener("click", flipCard);
        cardsWon.push(cardChosen);
        let cardWonInt = cardsWon.length.toString();
        if (res != undefined) {
            res.innerHTML = cardWonInt;
        }
    }
    else {
        cards[option1Id].setAttribute("src", "images/bored.jpg");
        cards[option2Id].setAttribute("src", "images/bored.jpg");
    }
    cardChosen = [];
    cardChosenId = [];
    if (cardsWon.length == cardArray.length / 2) {
        if (res != undefined) {
            res.innerHTML = "Game ended, well done";
        }
    }
}
function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].alias);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
