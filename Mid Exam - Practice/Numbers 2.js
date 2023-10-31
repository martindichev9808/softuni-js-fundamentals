function numbers(arr){

    let numbers = arr
    .shift()
    .split(' ');

    for(let action of arr){
        let tokens = action.split(',' && ' ');
        let operation = tokens.shift();
        
        if(operation == 'Finish'){
            break;
        }else if (operation == "Add"){
            let value = tokens[0]
            numbers.push(value);
        }else if (operation == 'Remove'){
            let value = tokens[0];
            let index = numbers.indexOf(value);
            if(index != -1 && index < numbers.length){
                numbers.splice(index , 1)
            }
        }else if (operation == 'Replace'){
            let value = tokens[0];
            let replacement = tokens[1];
            let index = numbers.indexOf(value);
            if(index != -1 && index < numbers.length){
                numbers.split(index , 1 , value);
            }
        }else if (operation== 'Colllapse'){
            let value = tokens[0];
            let index = numbers.indexOf(value);
            for(i = 0; i < numbers.length; i++){
                let currNum = numbers[i];
                if(value > currNum){
                    numbers.splice(index , 1)
                }
            }
        }
    }
    console.log(numbers.join(' '));
}
numbers(["1 , 4 , 5 , 19", "Add 1", "Remove 4", "Finish"])