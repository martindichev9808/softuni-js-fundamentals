function inventory(arr) {

    let inventory = arr.shift().split(', ');

    for (let loot of arr) {
        let tokens = loot.split(' - ');
        let command = tokens.shift();

        if (command == 'Craft!') {
            break;
        } else if (command == 'Collect') {
            tokens.filter(item => !inventory.includes(item)).forEach(item => inventory.push(item));

        } else if (command == 'Drop') {
            let item = tokens[0]
            let index = inventory.indexOf(item);
            if (index != - 1) {
                inventory.splice(index, 1)
            }
        } else if (command == 'Combine Items') {
            let item = tokens[0].split(':');
            let oldItem = item[0];
            let oldItemIndex = inventory.indexOf(oldItem);
            let newItem = item[1];
            if (oldItemIndex != -1) {
                inventory.splice(oldItemIndex + 1 , 0, newItem);
            } 
        } else if (command == 'Renew') {
            let item = tokens[0];
            let itemIndex = inventory.indexOf(item);
            if (itemIndex != -1) {
                let renewItem = inventory.splice(itemIndex , 1);
                inventory.push(renewItem);
            }
        }
    }
    console.log(inventory.join(', '));
}
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ])
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])