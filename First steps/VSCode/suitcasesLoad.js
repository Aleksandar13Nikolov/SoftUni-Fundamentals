function suitcasesLoad(input) {
    let index = 0;
    let freeSpace = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let curentVolume = 0;
    let suitcasesCount = 0;
    let suitcaseCountToThree = 0
    let suitcaseVolume = 0;
    let itsTrue = true;
    

    while (command !== "End") {
        
        suitcaseVolume = Number(command);
       
        if (curentVolume + suitcaseVolume <= freeSpace) { 
             
            if(suitcaseCountToThree == 2 && curentVolume + suitcaseVolume * 1.1 <= freeSpace)  {
                
            curentVolume += suitcaseVolume * 1.1;
            suitcaseCountToThree = 0;
            suitcasesCount++;

            }else if(curentVolume <= freeSpace) {
                curentVolume += suitcaseVolume; 
                suitcaseCountToThree++;
                suitcasesCount++;
        }
            

        } else {
            console.log("No more space!");
            itsTrue = false;
            break;
        }
        command = input[index];
        index++;

        
    }
    if (itsTrue) {

    console.log("Congratulations! All suitcases are loaded!");

    }
    
    console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);


}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
