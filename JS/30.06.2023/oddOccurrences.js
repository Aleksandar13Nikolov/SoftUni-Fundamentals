function demo(input) {

    let inputArray = input.split(' ').map(e=>e.toLowerCase());
    let wordsobject = {};

    for (const word of inputArray) {

        if(!wordsobject.hasOwnProperty(word)) {
            wordsobject[word] = 0;
        }
        wordsobject[word]++;
    }
        

        let arrofOddElements = Object.entries(wordsobject).filter(double => double[1] % 2 !== 0).sort((a,b) => b[1] - a[1]);

        let result = "";
        for (const array  of arrofOddElements) {

            result += `${array[0]} `;
            
        }
        console.log(result);
        
        
    


}
demo('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');