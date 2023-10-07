function passwordValidator(input) {

        let password = input.shift();
        
        for (const el of input) {
            let tokens = el.split(' ');
            let command = tokens[0];
            if(command === 'Complete') {
                break;
            }
            if(tokens[1] === "Upper") {
                let index = Number(tokens[2]);
                let firstPart = password.substring(0, index);
                let leter = password.substring(index, index + 1).toUpperCase();
                password = firstPart + leter + password.substring(index + 1);
                console.log(password);
                }
            if(tokens[1] === "Lower"){
                let index = Number(tokens[2]);
                let firstPart = password.substring(0, index);
                let leter = password.substring(index,index + 1).toLowerCase();
                password = firstPart + leter + password.substring(index + 1);
                console.log(password);
            }

            switch (command) {

                case "Insert":
                    let index = tokens[1];
                    if(index < 0 || index > password.length){
                        break;
                    }
                    let char = tokens[2];
                    password = password.substring(0, index) + char +password.substring(index);
                    console.log(password);

                    break;
                case "Replace":
                    let symbol = tokens[1];
                    let value = Number(tokens[2]);
                    if(password.includes(symbol)) {
                        let newSymbolNumber = +symbol.charCodeAt() + value;
                        let newSymbol = String.fromCharCode(newSymbolNumber);
                        for (const leter of password) {
                            password = password.replace(symbol, newSymbol);
                        }
                        console.log(password);
                    }

                    break;
                case "Validation":
                    if(password.length < 8) {
                        console.log("Password must be at least 8 characters long!");
                    }
                        let upperCaseCounter = 0;
                        let lowerCaseCounter = 0;
                        let numberCounter = 0;
                    for (const i of password) {

                        let iCharCode = i.charCodeAt();

                        if(iCharCode < 48 && iCharCode > 57 && iCharCode < 65 && iCharCode > 90 && iCharCode < 97 && iCharCode > 122 && iCharCode !== 95) {

                            console.log("Password must consist only of letters, digits and _!");
                        }
                        if(iCharCode >= 65 && iCharCode <= 90) {
                            upperCaseCounter++;
                        }
                        if(iCharCode >= 97 && iCharCode <= 122) {
                            lowerCaseCounter++;
                        }
                        if(iCharCode >= 48 && iCharCode <= 57) {
                            numberCounter++;
                        }
                    }   
                    if(upperCaseCounter <= 0) {
                        console.log("Password must consist at least one uppercase letter!");
                    }
                    if(lowerCaseCounter <= 0) {
                        console.log("Password must consist at least one lowercase letter!");
                    }
                    if(numberCounter <= 0) {
                        console.log("Password must consist at least one digit!");
                    }
                 
                    break;
            }
        }
        


}
passwordValidator(['invalidpassword*',

'Add 2 p',

'Replace i -50',

'Replace * 10',

'Make Upper 2',

'Validation',

'Complete'])