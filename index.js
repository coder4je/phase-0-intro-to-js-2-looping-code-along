const gifts = ["teddy bear", "drone", "doll"];
// let cards = [];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts); 


function writeCards(names, adjective) {
    let contents = [];  
    for (let i=0; i < names.length; i++) {  
        contents.push("Thank you, " + names[i] +", for the wonderful " + adjective + " gift!");

    }   
    return contents;    
}


writeCards(["Charlie", "Samip", "Ali"], "birthday");
// writeCards([], []);

function countDown(num) {
    let i = num;
    while (i > -1) {
        console.log(i);
        i--
    }
}


countDown("10");