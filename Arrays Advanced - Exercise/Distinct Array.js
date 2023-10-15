function distinctArray(arr){

    let uneque = [];

    for(let num of arr){
        if(!uneque.includes(num)){
            uneque.push(num);
        }
    }
    console.log(uneque.join(' '))
}
distinctArray([1, 2, 3, 4])