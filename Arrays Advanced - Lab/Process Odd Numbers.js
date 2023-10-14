function processOddNumbers(arr){

   console.log(arr.
    filter((x , i) => x % 2 != 0)
    .map(a => a * 2)
    .reverse()
    .join(' ')
    );
}
processOddNumbers([10, 15, 20, 25])