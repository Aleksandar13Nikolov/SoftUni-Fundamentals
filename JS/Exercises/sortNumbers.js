function solve(num1, num2, num3) {

    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;

    if (num1 >= num2 && num1 >= num3) {
        firstNumber = num1;
        if (num2 >= num3) {
            secondNumber = num2;
            thirdNumber = num3;
        } else {
            secondNumber = num3;
            thirdNumber = num2;
        }
        
    } else if (num2 >= num1 && num2 >= num3) {
        firstNumber = num2;
        if (num1 >= num3) {
            secondNumber = num1;
            thirdNumber = num3;
        } else {
            secondNumber = num3;
            thirdNumber = num1;
        }
    } else if (num3 >= num1 && num3 >=num2) {
        firstNumber = num3;
        if (num1 >= num2) {
            secondNumber = num1;
            thirdNumber = num2;
        } else {
            secondNumber = num2;
            thirdNumber = num1;
        }
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);

}
solve(-2,1,3);