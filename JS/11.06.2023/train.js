function solve(input) {

    let  wagons = input[0].split(` `).map(Number);
    let wagonCapacity = input[1];

    for(let index = 2; index < input.length; index++) {
        let command = input[index].split(` `);
        if(command[0] === "Add") {
            wagons.push(Number(command[1]));
        }else{
            let passangers = Number(command[0]);

            for (let g = 0; g < wagons.length; g++) {
                if(wagonCapacity - wagons[g] >= passangers) {
                    wagons[g] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));

}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)