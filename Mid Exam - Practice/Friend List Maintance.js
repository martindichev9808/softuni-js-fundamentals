function friendListMaintance(arr) {

    let list = arr.shift().split(', ');
    let blackListCounter = 0;
    let lostCounter = 0;

    for (let action of arr) {
        let tokens = action.split(' ');
        let command = tokens[0];

        if (command == 'Report') {
            break;
        } else if (command == 'Blacklist') {
            let name = tokens[1];
            if (list.includes(name)) {
                blackListCounter++;
                console.log(`${name} was blacklisted.`);
                list[list.indexOf(name)] = 'Blacklisted';
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command == 'Error') {
            let index = tokens[1];
            if (index != -1 && index < list.length) {
                let name = list[index];
                if (name != 'Blacklisted' && name != 'Lost') {
                    lostCounter++;
                    console.log(`${name} was lost due to an error.`);
                    list.splice(index, 1, 'Lost');
                }
            }
        } else if (command == 'Change') {
            let index = tokens[1];
            let newName = tokens[2];
            if (index != -1 && index < list.length) {
                console.log(`${list[index]} changed his username to ${newName}.`);
                list.splice(index, 1, newName);
            }
        }
    }
    console.log(`Blacklisted names: ${blackListCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(list.join(' '));
}
friendListMaintance(["Mike, John, Eddie, William",

    "Blacklist Maya",

    "Error 1",

    "Change 4 George",

    "Report"])