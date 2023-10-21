function treasureHunt(input) {
    let initialChest = input.shift().split('|');

    for (let current of input) {
        let tokens = current.split(' ');
        let command = tokens.shift();

        if (command == 'Yohoho!') {
            break;
        } else if (command == 'Loot') {
            for (i = 0; i < tokens.length; i++) {
                let currEl = tokens[i];
                if (initialChest.includes(currEl)) {
                    continue;
                } else {
                    initialChest.unshift(currEl)
                }
            }
        } else if (command == 'Drop') {
            let index = Number(tokens[0]);
            if (index >= 0 && index < initialChest.length) {
                let removedItem = initialChest.splice(index , 1).shift();
                initialChest.push(removedItem);
            }
          

        } else if (command == 'Steal') {
            let count = tokens.shift();
            let stolenItems = initialChest.splice(-count);
            console.log(stolenItems.join(', '));
        }
    }
    let sum = 0;
    if (initialChest == 0) {
        console.log(`Failed treasure hunt.`)
    } else {
        for (i = 0; i < initialChest.length; i++) {
            let currEl = initialChest[i];
            sum += currEl.length;
        }
        console.log(`Average treasure gain: ${(sum / initialChest.length).toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])