function shopingList(arr) {
    let list = arr.shift().split('!');

    for (let products of arr) {
        let tokens = products.split(' ');
        let command = tokens.shift();

        if (command == 'Go Shopping!') {
            break;
        } else if (command == 'Urgent') {
            // check if the item is not included in list and then we push the item
            tokens.filter(name => !list.includes(name)).forEach(name => list.unshift(name))

        } else if (command == 'Unnecessary') {
            // check if the item is included and removes it 
            let item = tokens[0];
            let index = list.indexOf(item);
            if (index != -1) {
                list.splice(index, 1)
            }
        } else if (command == 'Correct') {
            // check if old item is included and if it is replace it with new item
            let oldItem = tokens[0];
            let newItem = tokens[1];
            let indexOfOld = list.indexOf(oldItem);
            if (indexOfOld != -1) {
                list.splice(indexOfOld, 1, newItem);
            }
        } else if (command == 'Rearrange') {
            //check if item is in the list than , remove it and push it in the end  
            let item = tokens[0];
            let index = list.indexOf(item);
            if (index != -1) {
                list.splice(index, 1);
                list.push(item);
            }
        }
    }
    console.log(list.join(', '));
}
shopingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])