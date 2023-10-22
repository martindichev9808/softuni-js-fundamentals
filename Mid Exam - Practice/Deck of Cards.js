function deckOfCards(arr) {
    let deck = arr.shift().split(', ');
    let comandsNum = arr.shift();

    for (let action of arr) {
        let tokens = action.split(', ');
        let command = tokens.shift();

        if (command == 'Add') {
            let card = tokens[0];
            if (!deck.includes(card)) {
                deck.push(card);
                console.log('Card successfully added');
            } else {
                console.log('Card is already in the deck');
            }
        } else if (command == 'Remove') {
            let card = tokens[0];
            let index = deck.indexOf(card);
            if (!deck.includes(card)) {
                console.log('Card not found');
            } else {
                deck.splice(index, 1);
                console.log('Card successfully removed');
            }
        } else if (command == 'Remove At') {
            let index = tokens[0]
            let card = deck[index];
            if (index != - 1 && index < deck.length) {
                deck.splice(index, 1);
                console.log('Card successfuly removed');
            } else {
                console.log('Index out of range');
            }
        } else if (command == 'Insert') {
            let index = tokens[0];
            let card = tokens[1];
            if (index != -1 && index < deck.length) {
                if (!deck.includes(card)) {
                    deck.splice(index, 0, card);
                    console.log('Card successfully added');
                } else {
                    console.log('Card is already added');
                }
            } else {
                console.log('Index out of range');
            }
        }
    }
    console.log(deck.join(', '));
}
    deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])