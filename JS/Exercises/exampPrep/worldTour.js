function solve(input) {

    let allStops = input.shift();
    
    for (let str of input) {

        let stop = str.split(':');
        let elements = stop[0];

            switch (elements) {

                case "Add Stop":
                    let index = Number(stop[1]);
                    let destination = stop[2];
                    if(index >= 0 && index <= allStops.length){
                        allStops = allStops.slice(0,index) + destination + allStops.slice(index);
                        console.log(allStops);
                    }break;
            
                case "Remove Stop":
                    let startIndex = Number(stop[1]);
                    let endIndex = Number(stop[2]);
                    if(startIndex <= allStops.length && endIndex <= allStops.length && startIndex < endIndex && startIndex >= 0 && endIndex >= 0) {
                        allStops = allStops.slice(0,startIndex) + allStops.slice(endIndex +1);
                        console.log(allStops);
                    }break;

                case "Switch":
                    let oldStop = stop[1];
                    let newStop = stop[2];
                    allStops = allStops.replace(oldStop, newStop);
                    console.log(allStops);
                break;

                case "Travel":
                break;
            }
        
        
    }
    console.log(`Ready for world tour! Planned stops: ${allStops}`);
    
}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])