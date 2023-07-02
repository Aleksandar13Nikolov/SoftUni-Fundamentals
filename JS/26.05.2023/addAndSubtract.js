function solve(arr) {
    let sumArr = 0;
    let sumArr2 = 0;
    let arrLength = arr.length;

    for(let index = 0; index < arrLength; index++) {
        let currentNumber = Number(arr[index]);

        sumArr += currentNumber;

        if(currentNumber % 2 === 0) {
            currentNumber += index;
        }else {
            currentNumber -= index;
        }
        arr[index] = currentNumber;
        sumArr2 += currentNumber;
    }
    console.log(arr);
    console.log(sumArr);
    console.log(sumArr2);
}
solve([5, 15, 23, 56, 35]);