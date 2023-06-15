function carWash(array) {

    let carCleanPercentage = 0;
    let arrayLength = array.length;

    for(let index = 0; index < arrayLength; index++) {

        let currentWord = array[index];
        switch(currentWord) {
            case "soap" : carCleanPercentage += 10; break;
            case "water" : carCleanPercentage *= 1.2; break; 
            case "vacuum cleaner" : carCleanPercentage *= 1.25; break;
            case "mud" : carCleanPercentage *= 0.9; break;
        }
    

    }console.log(`The car is ${carCleanPercentage.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);