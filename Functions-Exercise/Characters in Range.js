function characterInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1 , code2);
    let maxCode =Math.max(code1 , code2);

    let result = '';
    for (let currChar = minCode + 1; currChar < maxCode; currChar++) {
        let currCode = String.fromCharCode(currChar);
        result += currCode + ' ';
    }
 console.log(result);
}
characterInRange('a',

    'd')