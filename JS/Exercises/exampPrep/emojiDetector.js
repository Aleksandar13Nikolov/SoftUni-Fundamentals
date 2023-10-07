function emoji(input) {

    let emojisPatern = /([:*]{2})(?<emojis>[A-Z][a-z]{2,})\1/gm;
    let trashholdPatern = /[0-9]+/g;

    let text = input.shift();

    let numbers = text.match(trashholdPatern);
    let treshHoldSum = 1;

    for (const el of numbers) {
        let tokens = el.trim().split('');
        let tokensLength = tokens.length;

        for(let i = 0; i < tokensLength; i++) {
            let digit = Number(tokens[i]);
            
            treshHoldSum *= digit;
        }
    }
    console.log(`Cool threshold: ${treshHoldSum}`);

    let data = text.match(emojisPatern);

    console.log(`${data.length} emojis found in the text. The cool ones are:`);

    for (const iterator of data) {
        let namePatern = /[A-Z][a-z]{2,}/g;
        let name = iterator.match(namePatern);
        let sum = 0;

        for (const leter of name[0]) {
            let numOfLeter = leter.charCodeAt();
            sum += numOfLeter;
        }
        if(sum > treshHoldSum) {

            console.log(iterator);
        }
    }
      
}
emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])