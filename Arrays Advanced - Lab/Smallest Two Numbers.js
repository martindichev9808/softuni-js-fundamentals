function smallest2Numbers(arr){

    let sortedEl = arr.sort((a , b) => a - b);
    console.log(sortedEl.slice(0 , 2).join(' '));
}
smallest2Numbers([30, 15, 50, 5])