function addAndSubtract(num1 , num2 , num3){

    let sum = calculateSum(num1 , num2);
    let subtract = calculateSubtract(sum , num3);

    console.log(subtract)

    function calculateSum(num1 , num2){
        let sum = num1 + num2;
        return num1 + num2;
    }

    function calculateSubtract(num1 , num2){
        let subtract = num1 - num2;
        return num1 - num2;
    }
}
addAndSubtract(23,

    6,
    
    10)