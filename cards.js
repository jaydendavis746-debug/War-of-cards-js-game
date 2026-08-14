let cards = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];

const prompt = require("prompt-sync")()

cards.sort(() => Math.random() - 0.5);

let p1deck = cards.slice(0,26);
let p2deck = cards.slice(26,52);

console.log("Welcome to WAR! Press q to quit at any point");


const compare = (cardpile, d1, d2) => {
    let c1 = p1deck.shift()
    let c2 = p2deck.shift()
    let result = []

    console.log(`player 1 flips: ${c1}`);
    console.log(`player 2 flips: ${c2}`);

    if (c1 > c2){
        console.log('Player 1 wins the round!');
        result = [1, cardpile];
    }else if(c2 > c1){
        console.log('PLayer 2 wins the round!');
        result = [2, cardpile];
    } else {
        console.log('War! Cards are equal')
        cardpile.push(d1.shift(), d2.shift());
        result = compare(cardpile, d1, d2)
    }

    return result

}

while (p1deck.length > 0 && p2deck.length > 0){   
    const answer = prompt("Press enter to draw your next card");
    if (answer.toLowerCase() === "q") {return}
    let pile = []
    let results = compare(pile, p1deck, p2deck);

    if (results[0] == 1){
        //add cards to p1deck
        pile.forEach(card =>{
                p1deck.push(card)
            })
    } else {
        //add cards to p2 deck
        pile.forEach(card =>{
                p2deck.push(card)
            })
    }

    if(p1deck.length === 0){
        console.log('Player 2 is victorious');
    } else if(p2deck.length === 0){
        console.log('Player 1 is victorious');
    }
}
