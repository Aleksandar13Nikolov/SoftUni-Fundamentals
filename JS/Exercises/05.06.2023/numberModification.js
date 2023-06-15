function numberMod(number) {

    let numToString = number.toString();
    let numToStringLength = numToString.length;
    let averageSum = 0;
    let sum = 0;

    for(let i = 0; i < numToStringLength; i++) {
        
        let currentDigit = Number(numToString[i]);
        sum += currentDigit;
         
    }
    averageSum = sum / numToStringLength;
    if (averageSum >= 5) {
        console.log(numToString);
        
    }else {
        numToString += "9";
        numberMod(numToString);
    }
    
}
numberMod(101);