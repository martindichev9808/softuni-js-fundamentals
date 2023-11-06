function legendaryFarming(arr){

    let legendaryItems = { shards: 0, fragments: 0, motes: 0,};
    let junkItems = {};
    let legendarys = {shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'}

    let materialArr = arr.split(' ');
    for(let i = 0; i < materialArr.length; i += 2){
        let qty = Number(materialArr[i]);
        let material = materialArr[i + 1].toLowerCase();

        if(material in legendaryItems){
            legendaryItems[material] += qty;
            if(legendaryItems[material] >= 250){
                let legenderyWon = legendarys[material];
                console.log(`${legenderyWon} obtained!`);
                legendaryItems[material] -= 250;
                break;
            }
        }else {
            if(material in junkItems){
                junkItems[material] += qty;
            }else {
                junkItems[material] = qty;
            }
        }
    }
    let legendaryEntries = Object.entries(legendaryItems).sort((a , b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for(let [material , qty] of legendaryEntries){
        console.log(`${material}: ${qty}`);
    }

    let junkEntries = Object.entries(junkItems).sort((a , b) => a[0].localeCompare(b[0]));
    for(let [material , qty] of junkEntries){
        console.log(`${material}: ${qty}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')