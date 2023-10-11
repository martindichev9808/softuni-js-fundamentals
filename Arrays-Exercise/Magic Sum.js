function magicSum(arr , equal){

    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == equal){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],

    27)