function solve(input) {

    let output = input[0];

    for (let i = 1; i < input.length; i++) {
        
        let curentEl = input[i];
        let prevEl = input[i - 1];

        if(curentEl !== prevEl) {
            output += curentEl;
        }
    }
    console.log(output);

}
solve('aaaaabbbbbcdddeeeedssaa');