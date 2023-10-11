function oddAndEvenSum(num){

    let evenSum = 0;
    let oddSum = 0;

    let numToStr = String(num);

    for(let char of numToStr){
        let currChar = Number(char);

        if(currChar % 2 == 0){
            evenSum += currChar;
        }else{
            oddSum += currChar;
        }
    }
     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)