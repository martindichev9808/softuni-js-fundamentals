function perfectNumber(num){

    let properDiviser = 0;
    for(let diviser = 1; diviser < num; diviser++){
        if(num % diviser == 0){
            properDiviser += diviser;
        }
    }

    if(properDiviser == num){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)