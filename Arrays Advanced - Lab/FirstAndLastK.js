function firstAndLAstK(input){
    let k = input.shift();
    
    console.log(input.slice(0 , k).join(' '));
    console.log(input.slice(-k).join(' '));
    
    
}
firstAndLAstK([2,

    7, 8, 9])