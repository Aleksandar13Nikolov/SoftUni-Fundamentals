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
solve([5, 10, 12, 5, 4, 20],

    3,
    
    "cheap");