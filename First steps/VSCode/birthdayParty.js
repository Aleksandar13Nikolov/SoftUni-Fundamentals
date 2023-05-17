function birthdayParty(input) {
    let rent = Number(input[0]);
    
    let cakePrice = rent * 0.2;
    let drinks = cakePrice * 0.55;
    let animation = rent * 1 / 3;

    let budget = rent + cakePrice + drinks + animation;
    
    console.log(budget.toFixed(2));
}
birthdayParty([3720])