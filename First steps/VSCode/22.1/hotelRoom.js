function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentTotal = 0;
    let studioTotal = 0;
//May, June, July, August, September или October
    switch(month) {
        case "May":
        case "October":
            if (nights > 7 && nights < 14) {
                apartmentTotal = nights * 65;
                studioTotal = (nights * 50) * 0.95;
            } else if (nights > 14) {
                apartmentTotal = (nights * 65) * 0.90;
                studioTotal = (nights * 50) * 0.70;
            } else {
                apartmentTotal = nights * 65;
                studioTotal = nights * 50;
            }break;
        case "June":
        case "September":
            if (nights > 14) {
                apartmentTotal = (nights * 68.70) * 0.90;
                studioTotal = (nights * 75.20) * 0.80; 
            } else {
                apartmentTotal = nights * 68.70;
                studioTotal = nights * 75.20;
            }break;
        case "August":
        case "July":
            if (nights > 14) {
                apartmentTotal = (nights * 77) * 0.90;
                studioTotal = nights * 76;
            } else {
                apartmentTotal = nights * 77;
                studioTotal = nights * 76;
            }break;
    }console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
     console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);

    } 
hotelRoom(["June",
"1"])
