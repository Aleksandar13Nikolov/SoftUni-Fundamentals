function solve(arr) {

    let pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;
    console.log("Bought furniture:");

    for (const el of arr) {
        let result = el.match(pattern);

        if(result) {
            let items = result.groups.name;
            let price = +result.groups.price;
            let quantity = +result.groups.quantity;

            totalSum += price * quantity;
            console.log(items);
        }
        
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
solve (['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])