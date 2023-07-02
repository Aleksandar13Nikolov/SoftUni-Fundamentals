function demo (input) {
    let viplidt = [];
    let regularList = [];

    let commsnd = input.shift();

    while (commsnd !== 'PARTY') {

        let firstChart = commsnd[0];

        if(isNaN(firstChart)) {
            regularList.push(commsnd);
        }else{
            viplidt.push(commsnd);

        }
        commsnd = input.shift();
        
    }

    let allGuests = viplidt.concat(regularList);

    for (const guest of input) { 
        if(allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest),1);
        }
        
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
    
}
demo(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)