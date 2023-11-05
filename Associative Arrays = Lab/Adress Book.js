function addressBook(input){

    let address = {};

    for(let item of input){
        let [name , addres] = item.split(':');

        address[name] = addres;
    }

    let entries = Object.entries(address);
    entries.sort((a , b) => a[0].localeCompare(b[0]));

    let sorted = Object.fromEntries(entries);
    for(let [name , adres] of Object.entries(sorted)){
        console.log(name, '->', adres);
    }
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])