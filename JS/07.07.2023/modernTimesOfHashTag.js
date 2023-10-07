function solve(text) {
    
    let inputArray = text.split(' ');

    for (const word of inputArray) {
        if(word[0] === '#' && word.length > 1) {
            let wordsArray = word.split('');
            wordsArray.shift();

            let wordToPrint = '';

            for (const leter of wordsArray) {
                if(!isNaN(leter)) {
                    wordToPrint = "";
                    break;
                }else{
                    wordToPrint += leter;
                }
            }
            if(wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }
        
        
    }

}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');