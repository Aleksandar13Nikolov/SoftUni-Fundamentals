function solve(string) {

    let array = [];
    let subTotal = 0;

    for(let i = 0; i <= string.length - 1; i++) {

        let currentElement = string[i];
        subTotal += 1;

        if(currentElement === 'add') {
            
            array.push(subTotal);

        }else if(currentElement === 'remove') {

            array.pop();
        }
        
    }
    if(array.length === 0) {

        console.log("Empty");

    }else{

        console.log(array.join(" "));   
    }
}
solve(['add', 'add', 'remove', 'add', 'add']);