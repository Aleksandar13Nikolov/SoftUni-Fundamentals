function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let totalPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (i = 1; i <= groupCount; i++) {
        let currentGroup = Number(input[i]);
        
        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup <= 25) {
            kilimanjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }   
    } totalPeople = musala + monblan + kilimanjaro + k2 + everest;
       let musalaPercent = (musala/totalPeople) *100;
       let monblanPercent = (monblan/totalPeople) * 100;
        let kilimanjaroPercent = (kilimanjaro/totalPeople) * 100;
        let k2Percent = (k2/totalPeople) * 100;
        let everestPercent = (everest/totalPeople) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
    
} 
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

