function blackFlag(input){
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let total = 0;

    for(let i = 1; i <= days; i++){
        total += dailyPlunder;

        if(i % 3 == 0){
            total += dailyPlunder * 0.5;
        }
        if(i % 5 == 0){
            total -= total * 0.3;
        }
    }
    if(total >= expectedPlunder){
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`)
    }else{
        console.log(`Collected only ${((total/expectedPlunder)*100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
"20",
"380"])