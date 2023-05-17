function newHous(input) {
    let typeOfFlower = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

        switch (typeOfFlower) {
            case "Roses":
                totalPrice = number * 5;
                break;
            case "Dahlias":
                totalPrice = number * 3.80;
                break;
            case "Tulips" :
                totalPrice = number * 2.80;
                break;
            case "Narcissus":
                totalPrice = number * 3;
                break;
            case "Gladiolus":
                totalPrice = number * 2.5;
                break;
        }
        if (typeOfFlower === "Roses" && number > 80) {
            totalPrice *= 0.90;
        } else if (typeOfFlower === "Dahlias" && number > 90) {
            totalPrice *= 0.85;
        } else if (typeOfFlower === "Tulips" && number > 80) {
            totalPrice *= 0.85;
        } else if (typeOfFlower === "Narcissus" && number < 120) {
            totalPrice *= 1.15;
        } else if (typeOfFlower === "Gladiolus" && number < 80) {
            totalPrice *=1.20;
        } 
        if (budget >= totalPrice) {
            let moneyLeft = budget - totalPrice;
            console.log(`Hey, you have a great garden with ${number} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            moneyLeft = totalPrice - budget;
            console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`)
        }
        }
newHous(["Narcissus",
"119",
"360"])


