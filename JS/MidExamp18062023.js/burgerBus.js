function profit(arr) {

    let numberOfCitys = Number(arr.shift());
    let index = 0;
    let cityName = arr[0];
    index++;
    let income = Number(arr[1]);
    index++;
    let expenses = Number(arr[2]);
    index++;

    let cityCounter = 0;
    let totalProfit = 0;

    while (cityCounter < numberOfCitys) {
        cityCounter++;
        let profit = income - expenses;
        
        if(cityCounter % 3 === 0) {
            profit = income - (expenses * 1.5);
        }
        if(cityCounter % 5 === 0) {
            profit = (income * 0.9) - expenses;
        }

        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
        totalProfit += profit;
        cityName = arr[index];
        index++;
        income = Number(arr[index]);
        index++;
        expenses = Number(arr[index]);
        index++;
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}
profit(["5", "Lille", "2226.00", "1200.60", "Rennes", "6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"])