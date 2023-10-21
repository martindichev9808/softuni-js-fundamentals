function heartDelivery(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let currentPosition = 0;

    for (let action of arr) {
        let tokens = action.split(' ');
        let command = tokens[0];

        if (command === 'Love!') {
            break;
        }

        let length = Number(tokens[1]);
        currentPosition = (currentPosition + length) % neighborhood.length;

        if (neighborhood[currentPosition] === 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            neighborhood[currentPosition] -= 2;
            if (neighborhood[currentPosition] === 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }
    }

    let housesNotCelebrated = neighborhood.filter(hearts => hearts !== 0).length;

    console.log(`Cupid's last position was ${currentPosition}.`);
    
    if (housesNotCelebrated === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${housesNotCelebrated} places.`);
    }
}
 heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])