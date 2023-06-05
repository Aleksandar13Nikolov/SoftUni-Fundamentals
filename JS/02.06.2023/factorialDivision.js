function solve(num1, num2) {

    function factorial(number) {
        if(number === 0) {
            return 1;     
        }else{
            return number * factorial(number - 1);

        }
        
    }
    let num1Factorial = factorial(num1);
    let num2Factorial = factorial(num2);
    let rsult = num1Factorial/num2Factorial;
    console.log(rsult.toFixed(2));
}
solve(5,2);