function taxes(string) {

    
    let listOfCars = string[0].split(">>");
    let totalTax = 0;

    for(let index = 0; index < listOfCars.length; index++) {
        let tokens = listOfCars[index].split(" ");
        let tax = 0;
        let extratax = 0;
        let carType = tokens[0];
        let carYears = Number(tokens[1]);
        let carKilometers = Number(tokens[2]);

        switch(tokens[0]) {
            
            
            case "family" :
                extratax = Math.floor(carKilometers / 3000);
                tax = 50 - (carYears * 5) + (extratax * 12);
                totalTax += tax;
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;
                
            case "heavyDuty" :
                extratax = Math.floor(carKilometers / 9000);
                tax = 80 - (carYears * 8) + (extratax * 14);
                totalTax += tax;
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;

            case "sports" :
                extratax = Math.floor(carKilometers / 2000);
                tax = 100 - (carYears * 9) + (extratax * 18);
                totalTax += tax;
                console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
                break;

            default :
                console.log("Invalid car type.");

        }
        
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);

}
taxes(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);