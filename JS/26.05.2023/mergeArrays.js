function solve(arr, arr2) {

    let arr3 = [];
    let arrayLenght = arr.length;

    for(let index = 0; index < arrayLenght; index++) {

        if(index % 2 === 0) {
            arr3[index] = Number(arr[index]) + Number(arr2[index]);
        }else {
            arr3[index] = arr[index] + arr2[index];
        }
    }

    console.log(arr3.join(" - "));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);