let cards = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
const prompt = require('prompt-sync')()

cards.sort(() => Math.random() - 0.5);

let p1deck = cards.slice(0,26);
let p2deck = cards.slice(26,52);

while (p1deck.length > 0 && p2deck.length > 0){
    //take user input
    const answer = prompt('Welcome to WAR! Press enter to flip card or q to quit');
    if (answer.toLowerCase() === "q") {return}
    let p1Card = p1deck.shift()
    let p2Card = p2deck.shift()

    console.log(`player 1 flips: ${p1Card}`);
    console.log(`player 2 flips: ${p2Card}`);

    if (p1Card > p2Card){
        console.log('Player 1 wins the round!');
        p1deck.push(p2Card, p1Card)
    }else if(p2Card > p1Card){
        console.log('PLayer 2 wins round!');
        p2deck.push(p2Card, p1Card)
    } else {
        console.log('War! Cards are equal')
        let pile = [];
        pile.push(p1Card, p2Card, p1deck.shift(), p2deck.shift())

        p1Card = p1deck.shift()
        p2Card = p2deck.shift()

        if(p1Card > p2Card){
            console.log('Player 1 wins war');
            pile.forEach(card =>{
                p1deck.push(card)
            })
        } else if(p2Card >= p1Card){
            console.log('Player 2 wins war');
            pile.forEach(card =>{
                p2deck.push(card)
            })
        }

    }

    if(p1deck.length === 0){
        console.log('Player 2 is victorious');
    } else if(p2deck.length === 0){
        console.log('Player 1 is victorious');
    }
}