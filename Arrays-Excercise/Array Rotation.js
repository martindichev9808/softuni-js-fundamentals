function arrayRotation(arr , rotCount){

    for(let rotation = 1; rotation <= rotCount; rotation++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)