function tournament(input) {
    let index = 0;

    let days = Number(input[index]);
    index++;
    let sport = input[index];
    index++;
    let result = input[index];
    index++;

    let totalMoney = 0;
    let winDays = 0;
    let loseDays = 0;

    for (let i = 1; i <= days; i++ ) {
        let moneyPerDay = 0;
        let winCount = 0;
        let loseCount = 0;

        while (sport !== "Finish" ) {
         
            if (result === "win") {
                moneyPerDay += 20;
                winCount++;

            } else {
                loseCount++;
            }
            
            sport = input[index];
            index++;
            result = input[index];
            index++;

        }
        if (winCount > loseCount) {
            totalMoney += moneyPerDay * 1.1;
            winDays++;
        } else {
            totalMoney += moneyPerDay;
            loseDays++;
        }
        result = input[index];
        index--;
        sport = input[index];
        index++;
        result = input[index];
        index++
    }
    if (winDays > loseDays) {
        totalMoney = totalMoney * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

