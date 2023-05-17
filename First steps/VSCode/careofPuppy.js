function careOfPuppy (input) {
    let index = 0;
    let food = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let foodInGrams = food * 1000;
    let eatedFood = 0;

    while (command !== "Adopted") {

        command = Number(command);
        eatedFood += command;
        command = input[index];
        index++;
        
    }
    if (foodInGrams >= eatedFood) {
        let difference = foodInGrams - eatedFood;
        console.log(`Food is enough! Leftovers: ${difference} grams.`);
    } else {
        difference = eatedFood - foodInGrams;
        console.log(`Food is not enough. You need ${difference} grams more.`);
    }
}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
