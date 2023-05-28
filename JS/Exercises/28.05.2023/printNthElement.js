function solve(string) {

    let buff = "";
    let arrayLength = string.length;
    let step = Number(string[arrayLength - 1 ]);

    for(let i = 0; i < arrayLength - 1; i+= step) {
        buff += string[i] + " ";
    }
    
    console.log(buff);
}
solve(['dsa', 'asd', 'test', 'test', '2']);