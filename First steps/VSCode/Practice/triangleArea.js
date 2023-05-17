function triangleArea(input){
    let a = Number(input[0]);
    let high = Number(input[1]);
    let area = a * high /2;
    console.log(area.toFixed(2));
}
triangleArea(["7.75", "8.45"]);