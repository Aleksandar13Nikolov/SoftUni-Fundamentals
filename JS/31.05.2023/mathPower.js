function solve(num1, numPow) {

    let ressult = 1;

    for (let i = 0; i < numPow; i++) {
        ressult *= num1;
    }
    console.log(ressult);
}
solve(2, 8);