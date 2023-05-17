function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (i = 2; i <= tournaments + 1; i++) {
        let currentReult = input[i];
        
        if(currentReult === "W") {
            pointsWon += 2000;
            tournamentsWon++;
        } else if (currentReult === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    let totalPoints = startingPoints + pointsWon;
    console.log(`Final points: ${totalPoints}`);

    let avgPoints = Math.floor(pointsWon / tournaments);
    console.log(`Average points: ${avgPoints}`);
    let tournamentsWonPercent = (tournamentsWon/tournaments) * 100;
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
