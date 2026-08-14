let cards = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];

cards.sort(() => Math.random() - 0.5);

let p1deck = cards.slice(0,26);
let p2deck = cards.slice(26,52);

while (p1deck.length > 0 && p2deck.length > 0){
    console.log("Press enter to flip card or q to quit");
    //take user input
    const answer = getInput();
    if (answer.toLowerCase() === "q") {return}

    
}