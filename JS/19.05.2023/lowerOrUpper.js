function solve(simbol) {

    let caseResult = "";

    if(simbol === simbol.toUpperCase()) {
        caseResult = "upper-case";
    }else {
        caseResult = "lower-case";
    }
    console.log(caseResult);
}
solve('L')