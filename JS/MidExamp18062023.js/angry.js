function solve(price, entryPoint, type) {

    let sumOfLeft = 0;
    let sumOfRight = 0;

    let entryPrice = price[entryPoint];
    let rightPrices = price.splice(entryPoint);


    for(let i = 0; i < price.length; i++) {
        let curentPrice = price[i];

        switch(type) {

            case "expensive" :
                if (curentPrice >= entryPrice) {
                    sumOfLeft += curentPrice;
                }
                break;
            case "cheap" :
                if(curentPrice < entryPrice) {
                    sumOfLeft += curentPrice;
                }
            break;
        } 

    }
    for(let k = 1; k < rightPrices.length; k++) {
        curentPrice = rightPrices[k];

        switch(type) {

            case "expensive" :
                if (curentPrice >= entryPrice) {
                    sumOfRight += curentPrice;
                }
                break;
            case "cheap" :
                if(curentPrice < entryPrice) {
                    sumOfRight += curentPrice;
                }
            break;
        } 
    

    }

    

    if(sumOfLeft >= sumOfRight) {
        console.log(`Left - ${sumOfLeft}`);
    }else{
        console.log(`Righ - ${sumOfRight}`);
    }




}
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

    7,
    
    "expensive");