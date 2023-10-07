function solve(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();

    let textArray = text.split(' ');
    let itsTrue = true;

    for (const el of textArray) {
        if(el === word) {
            itsTrue = true;
            console.log(word);
            break;
        }
            
           
    }
    if(!textArray.includes(word)){
        itsTrue = false;
        console.log(`${word} not found!`);
    }
    
}
solve('piton','JavaScript is the best programming language');