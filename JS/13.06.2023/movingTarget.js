function movingTarget (input) {
    
    let target = input[0].split(" ");


    let i = 1;
    let command = input[i];
    i++;

    while(command !== "End") {
        let token = command.split(" ");

        let index = Number(token[1]);

        switch(token[0]) {
            
            case "Shoot": 
                    let power = Number(token[2]);
                 if (index <= target.length -1) {
                 let newTarget = Number(target[index]) - power;
                    if(newTarget > 0) {
                         target.splice(index, 1, newTarget);
                    }else{
                        target.splice(index, 1);
                     }
                }break;
            case "Add":
                    let value = Number(token[2]);
                    if(index <= target.length -1) {
                        target.splice(index, 0, value);
                    }else{
                        console.log("Invalid placement!");
                    }break;
            case "Strike":
                let radius = Number(token[2]);

                if(index <= target.length -1 && index !== 0) {
                    target.splice((index - radius), ((radius *2) + 1));
                }else{
                    console.log("Strike missed!");
                }break;
                
            }
       command = input[i];
       i++;  
    }
    console.log(target.join("|"));

}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);