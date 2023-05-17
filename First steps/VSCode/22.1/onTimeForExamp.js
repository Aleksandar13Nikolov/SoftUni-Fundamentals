function onTimeForExamp(input) {
    let examHour = Number(input[0]);
    let exampMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamTime = examHour * 60 + exampMin;
    let totalArivalTime = arrivalHour * 60 + arrivalMin;

    let totalDiffTime = Math.abs(totalExamTime - totalArivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    if (totalExamTime === totalArivalTime) {
        console.log("On time");
    } else if (totalExamTime < totalArivalTime) {
        console.log("Late");

        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log("On time");
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log("Early");
            if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`);
            } else {
                if(diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }

        }
    }
}
}
onTimeForExamp(["9",
"30",
"9",
"50"]);
