function manOWar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHp = Number(input.shift());
    let critical = maxHp * 0.2;

    for (let current of input) {
        let tokens = current.split(' ');
        let command = tokens.shift();


        if (command == 'Retire') {
            break;
        } else if (command == 'Fire') {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            if (index < 0 || index >= warShip.length) {
                continue;
            }
            warShip[index] -= damage;
            if (warShip[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }
        } else if (command == 'Defend') {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (start < 0 || start >= pirateShip.length || end < 0 || end >= pirateShip.length) {
                continue;
            }
            for (i = start; i <= end; i++) {
                pirateShip[i] -= damage;

                if (pirateShip[i] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    return;
                }
            }
        } else if (command == 'Repair') {
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);

            if (index < 0 || index >= pirateShip.length) {
                continue;
            }
            pirateShip[index] += health;
            if (pirateShip[index] > maxHp) {
                pirateShip[index] = maxHp;
            }
        } else if (command == 'Status') {
            let damaged = pirateShip.filter(section => section < critical);
            console.log(`${damaged.length} sections need repair.`);
        }
    }

    let pirateShipSum = 0;
    let warShipSum = 0;

    for(let section of pirateShip){
        pirateShipSum += section;
    }
    for(let section of warShip){
        warShipSum += section;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])