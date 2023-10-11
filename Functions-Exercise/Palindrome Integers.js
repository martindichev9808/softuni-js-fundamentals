function palindromeNum(arr) {

    for (let currNum of arr) {
        let isPalindrome = checkIsPalindrome(currNum);
        console.log(isPalindrome);
        }

    function checkIsPalindrome(num) {
        let numAsString = String(num);
        let reversedNumStr = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let currChar = numAsString[i];
            reversedNumStr += currChar;
        }

        let isPalindrome = numAsString == reversedNumStr;
        return isPalindrome;
    }
}

palindromeNum([123, 323, 421, 121])

