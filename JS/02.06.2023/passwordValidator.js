function solve(pass) {

    let isValidPass = true;
    let isInvalidLength = pass.length < 6 || pass.length > 10;

    if(isInvalidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }
    let isOnlyLetterAndDigit = true;
    let digitCounter = 0;

    for(let index = 0; index < pass.length; index++) {
        let currentCode = pass.charCodeAt(index);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isNotSmallLetter = currentCode < 97 || currentCode > 122;
        let isNotBigLetter = currentCode < 65 || currentCode > 90;

        if(isNumber) {
            digitCounter++;
        }

        if(isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValidPass = false;
            isOnlyLetterAndDigit = false;

        }
    }
    if(!isOnlyLetterAndDigit) {
        console.log("Password must consist only of letters and digits");
    }
    if(!(digitCounter >= 2)) {
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }
    if(isValidPass) {
        console.log("Password is valid");
    }

}
solve('logIn');