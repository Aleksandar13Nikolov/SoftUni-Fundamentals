function barcodeGenerator(input) {

    let firstNumber =Number(input[0]);
    let finalNumber = Number(input[1]);
    let buffer = "";
    let result = "";

    for (i = firstNumber; i <= finalNumber; i++) {
        
        	for (a = Number(firstNumber[0]); a <= Number(firstNumber[3]); a++){
                if (a % 2 !== 0) {
                    buffer+= a;
                } else {
                    buffer = 0;
                }
            } if (buffer !== 0) {
                result += buffer + " ";
            }

    }
    console.log(result);

}
barcodeGenerator(["2345",
"6789"])