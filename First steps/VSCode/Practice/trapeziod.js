function trapeziodArea (input){
    let ab = Number(input[0]);
    let cd = Number(input[1]);
    let high = Number(input[2]);
    let area = (ab + cd) * high / 2;
    console.log(area.toFixed(2));
    }
trapeziodArea(["8", "13", "7"]);