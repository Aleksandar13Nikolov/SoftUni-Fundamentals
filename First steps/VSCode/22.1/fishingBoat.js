function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let number = Number(input[2]);
    let totalSum = 0;
// "Spring", "Summer", "Autumn", "Winter"
   
    switch (season) {
        case "Spring":
            totalSum = 3000;
        break;
        case "Summer":
        case "Autumn":
            totalSum = 4200;
        break;
        case "Winter":
            totalSum = 2600;
        break;
    }
     if (number <= 6) {
        totalSum *= 0.90;
    } else if (number >= 7 && number <= 11) {
        totalSum *= 0.85; 
    } else {
        totalSum *= 0.75; 
    } 
    if(season !== "Autumn" && number %  2 == 0) {
               totalSum *= 0.95;
            }  
        
     if (budget >= totalSum) {
        let result = budget - totalSum;
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    } else {
        let result = totalSum - budget;
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`)
}
}
fishingBoat(["2000",
"Winter",
"12"])