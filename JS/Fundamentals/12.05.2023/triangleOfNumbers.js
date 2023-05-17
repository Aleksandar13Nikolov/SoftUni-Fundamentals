function demo(number) {
let result = "";

for(let rows = 1; rows <= number; rows++) {
    let result = "";
    for(let cols = 1; cols <= rows; cols++) {
        result += `${rows} `;
    }
    console.log(result);
   
}
}
demo(5);