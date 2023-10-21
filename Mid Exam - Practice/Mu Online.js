function muOnline(input) {
    // parse input
    let health = 100;
    let bitcoins = 0
    let dungeon = input.split('|');
    let bestRoom = 1;

    // parse command :
    for (let rooms of dungeon) {
        let room = rooms.split(' ');
        let command = room[0];
        if (command == 'potion') {
            //  for "potion" :
            //-- Heal with number
            //-- Health must be 100
            // Print : "You healed for {amount} hp."
            // Second print : Current health: {health} hp."
            let number = Number(room[1]);
            let newHp = health + number <= 100 ? number : 100 - health;

            health += newHp;
            console.log(`You healed for ${newHp} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command == 'chest') {
            // for "chest" :
            //-- Number of founded coins
            //--Print: "You found {amount} bitcoins."
            let number = Number(room[1]);
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            // for "anything else":
            // Health - damage
            // if health is more than 0 :
            //You slayed {monster}."
            // if its not :
            //If you've died, print "You died! Killed by {monster}." 
            //and your quest is over. Print the best room you've managed to reach: "Best room: {room}"
            let damage = Number(room[1]);
            health -= damage;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++
    }
    // output print :
    if (health > 0) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")