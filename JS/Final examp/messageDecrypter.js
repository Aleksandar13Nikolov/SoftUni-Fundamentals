function messageDecrypter(input) {
    let inputCount = input.shift();
    

    let patern = /([$%]?)(?<tag>[A-Z][a-z]{2,})\1\:\ (?<masage>\[\d+]\|\[\d+]\|\[\d+]\|)/gm;

    for (const iterator of input) {
        
        let result = iterator.match(patern);

        let tag = result.split(' ');

        console.log(tag);

        if(result) {


        }
        console.log("Valid message not found!");
        
       
    }

}
messageDecrypter(["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"])