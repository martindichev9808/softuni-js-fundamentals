function addAndSubtract(arr){

    let oldNum = 0;
    let newNum = 0;
    
    for(i = 0; i < arr.length; i++ ){

        let num = arr[i];
        oldNum += num;
        
        if( num % 2 == 0){
            num += i;
        }else {
            num -= i;
        }

        newNum += num;
        arr[i] = num;
    }

    console.log(arr);
    console.log(oldNum);
    console.log(newNum);

}

addAndSubtract([5, 15, 23, 56, 35])