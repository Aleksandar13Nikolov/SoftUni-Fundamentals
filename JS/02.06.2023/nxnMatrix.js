function solve(num) {

    function rowGenerator() {
        let row = "";
        for(let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        return row;
    }
    for(let i = 1; i <= num; i++) {
       console.log(rowGenerator());
    }

}
solve(3)