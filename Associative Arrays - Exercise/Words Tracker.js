function wordsTracker(input){

    let searchedWords = input.shift().split(' ');
    let occurrences = {};

    for(let word of searchedWords){
        occurrences[word] = 0;
    }
    for(let word of input){
        if(word in occurrences){
            occurrences[word]++;
        }
    }
    let entries = Object.entries(occurrences).sort((a , b) => b[1] - a[1]);
    for(let [word , repeat] of entries){
        console.log(`${word} - ${repeat}`);
    }
}
wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])