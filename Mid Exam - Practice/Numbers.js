function numbers(arr){

    let nums = arr.split(' ').map(Number);
    let avgNum = nums.reduce((acc , val) => acc + val) / nums.length;
    let topNum = nums
    .filter(num => num > avgNum)
    .sort((a , b) => b-a)
    .slice(0 , 5)

    if(topNum <= 0){
        console.log('No');
    }else {
        console.log(topNum.join(' '))
    }

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')