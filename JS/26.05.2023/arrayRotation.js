function solve(array, numberOfRotation) {

    let arrayLenght = array.lenght;
    
    for(let index = 1; index <= numberOfRotation; index++) {

        let firstEl = array.shift();
        array.push(firstEl);
    }
    console.log(array.join(" "));
}
solve([51, 47, 32, 61, 21], 2);