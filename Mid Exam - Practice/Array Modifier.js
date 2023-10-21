function arrayModifier(arr){

    let initialArr = arr
    .shift()
    .split(' ')
    .map(Number);
    
    for(let element of arr){
        let tokens = element.split(' ');
        let command = tokens.shift();

        if(command == 'end'){
            break;
        }else if (command == 'swap'){
            let inx1 = Number(tokens[0]);
            let inx2 = Number(tokens[1]);

            let holder = initialArr[inx1];
            initialArr[inx1] = initialArr[inx2];
            initialArr[inx2] = holder;     
        }else if (command == 'multiply'){
            let inx1 = Number(tokens[0]);
            let inx2 = Number(tokens[1]);

            initialArr[inx1] *= initialArr[inx2];
        }else if (command == 'decrease'){
            initialArr = initialArr.map((x) => x-1);
        }

    }
    console.log(initialArr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])