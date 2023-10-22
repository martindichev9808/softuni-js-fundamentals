function theHuntingGame(arr){

    let days = arr.shift();
    let players = arr.shift();
    let groupEnergy = arr.shift();
    let waterPerPerson = arr.shift();
    let foodPerPerson = arr.shift();
    let totalWater = days * players * waterPerPerson;
    let totalFood = days * players * foodPerPerson;

    for(let i = 1; i <= arr.length; i++){
        let currentDay = arr[i - 1];
        groupEnergy -= currentDay;
        if(groupEnergy <= 0){
            break;
        }
        if(i != 0 && i % 2 == 0){
            totalWater -= totalWater * 0.3;
            groupEnergy += groupEnergy * 0.05;
        }
        if(i != 0 && i % 3 == 0){
            totalFood -= totalFood / players;
            groupEnergy += groupEnergy * 0.10;
        }
    }
    if(groupEnergy > 0){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }else{
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}
theHuntingGame(["12", "6",

"4430",

"9.8",

"5.5",

"620.3",

"840.2",

"960.1",

"220",

"340",

"674",

"365", 

"345.5", "212", "412.12", "258", "496"])
