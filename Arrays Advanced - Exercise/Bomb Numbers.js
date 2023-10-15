function bombNumbers(arr, bomb) {
    [bombNum, power] = bomb;

    while(arr.includes(bombNum)){
        let index = arr.indexOf(bombNum);
        arr.splice(Math.max(0 , index - power) , power * 2 + 1 , 0);
    }

    let sum = 0;

    for(let num of arr){
        sum += num;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2,

    2, 9],

    [4, 2])