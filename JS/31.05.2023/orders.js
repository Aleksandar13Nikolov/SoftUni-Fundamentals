function orders(product, units) {

    let sum = 0;

    switch(product) {
        case "coffee" : sum = 1.5 * units; break;
        case "water" : sum = 1 * units; break;
        case "coke" : sum = 1.4 * units; break;
        case "snacks" : sum = 2 * units; break;
    }
    console.log(sum.toFixed(2));
}
orders("coffee", 2 );