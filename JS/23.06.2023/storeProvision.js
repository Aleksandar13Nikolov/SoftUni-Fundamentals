function objectsDemo(firstArray, secondArray) {

    let localStorage = {};

    for(let index = 0; index < firstArray.length; index += 2) {
       let product = firstArray[index];
        let quontity = Number(firstArray[index + 1]);

        localStorage[product] = quontity;
    }
    for (let index = 0; index < secondArray.length; index += 2) {
        let product = secondArray[index];

        if(!localStorage.hasOwnProperty(product)) {
            localStorage[product] = 0;
        }
        localStorage[product] += Number(secondArray[index + 1]);
    }
    for (const productkey in localStorage) {
        console.log(`${productkey} -> ${localStorage[productkey]}`);
    }

}
objectsDemo([
    'Chips', '5', 'CocaCola', '9', 'Bananas', 
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )