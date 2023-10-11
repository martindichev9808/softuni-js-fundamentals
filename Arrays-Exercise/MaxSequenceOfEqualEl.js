function maxSequenceOfEl(arr){

    let longestSeq = [];

    for(i = 0; i < arr.length; i++){
        let currNum = arr[i];
        let currSequence = [currNum];
        for(j = i + 1; j < arr.length; j++){
            
            newNum = arr[j];
            if(currNum == newNum){
                currSequence.push(newNum);
            }else {
                break;
            }
        }
        if(currSequence.length > longestSeq.length){
            longestSeq = currSequence;
        }
    }
console.log(longestSeq.join(' '));

}
maxSequenceOfEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])