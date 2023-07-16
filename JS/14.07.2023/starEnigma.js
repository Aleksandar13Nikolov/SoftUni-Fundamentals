function solve(arr) {
    
    let numberOfMesages = arr.shift().split(', ');

    let attackedPlanets = {};
    let destroyedPlanets = {};
    let pattern = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;
    let result = [];

    for (let i = 0; i<=numberOfMesages[0] -1; i++) {
        let currentMessage = arr[i];
        let codePatern = /[STARstar]/g;
        let codeNumber = currentMessage.match(codePatern).length;

        let decodedMassage = '';

        for (const symbol of currentMessage) {

            let decodedSymbol = symbol.charCodeAt() - codeNumber;
            decodedMassage += String.fromCharCode(decodedSymbol);
            
        }
        
        result.push(decodedMassage);
        
    }   
    for (const el of result) {
        let data = el.match(pattern);

        if(data) {
            let planet = result.groups.name;
            let typeOfAttack = result.groups.command;

            if(typeOfAttack === "A") {
                attackedPlanets.name = planet;
            }else{
                destroyedPlanets.name = planet;
            }
        }
    }

            
            
}
solve(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']
)