function game(string) {

    let rooms = string.split('|');
    let roomsLength = rooms.length;

    let initialHealth = 100;
    let initalBitcoins = 0;
    let roomCounter = 0;

    for(let i = 0; i < roomsLength; i++) {
        let token = rooms[i].split(' ');
        roomCounter++;

        if(initialHealth > 0) {

        switch(token[0]) {
            case "potion" :
                let additionalHealth = Number(token[1]);
                let addedHealth = 0;
                let startHealt = initialHealth;
                initialHealth += additionalHealth;
                addedHealth = additionalHealth;

                if(initialHealth > 100) {
                    addedHealth = 100 - startHealt;
                    initialHealth = 100;
                    
                }
                console.log(`You healed for ${Math.abs(addedHealth)} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                break;

            case "chest"  :
                let bitcoinAmount = Number(token[1]);
                initalBitcoins += bitcoinAmount;
                console.log(`You found ${bitcoinAmount} bitcoins.`);
                break;

            default :
                let monsterAttack = Number(token[1]);
                initialHealth -= monsterAttack;

                if(initialHealth > 0) {
                    console.log(`You slayed ${token[0]}.`);
                }else{
                    console.log(`You died! Killed by ${token[0]}.`);
                    console.log(`Best room: ${roomCounter}`);
                }
                break;
        }
        }

        
    }
    if(roomCounter === roomsLength && initialHealth > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${initalBitcoins}`);
        console.log(`Health: ${initialHealth}`);

    }

}
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");