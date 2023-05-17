function demo(start, end) {
    let sum = 0;
    let numbersRow = "";
    for (let number = start; number <= end; number++) {
        sum += number; 
        numbersRow += `${number} `;
    }
    console.log(numbersRow);
    console.log(`Sum: ${sum}`);

}
demo(5, 10);