function solve(num) {

    let inputAsString = num.toString();
    let sum = 0;

    for (i = 0; i < inputAsString.length; i++) {
        let currentDigit = Number(inputAsString[i]);
        sum += currentDigit;
    }

    console.log(sum);
}
solve(245678)