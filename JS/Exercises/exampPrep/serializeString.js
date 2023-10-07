function solve(input){

    

    let strByLeters = input[0].split('');

    for (const symbol of strByLeters) {
       
        let indexOfLeters = '';

        for (let index = 0; index < strByLeters.length; index++) {
            let leter = strByLeters[index];
            if(symbol === leter) {
                indexOfLeters += index.toString();
               
            }
            
        }
       
        console.log(`${symbol}:${result}`);
    }
    
    

}
solve(["avjavamsdmcalsdm"])