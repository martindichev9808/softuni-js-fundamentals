function sortedArrayBy2(arr){
    let sortedArr = arr.sort((a ,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortedArrayBy2(['alpha',

'beta',

'gamma'])