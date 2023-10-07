function solve(arr) {

    let itemInventory = arr.shift().split(' , ');
    
    
 
    for(let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' - ');
        let command = token[0];
        let item = token[1];

            switch(command) {

            case "Collect" :
                    
                    if(itemInventory.includes(item)) {

                    }else{
                        itemInventory.push(item);
                    }
            break;

            case "Drop" :

                    if(itemInventory.includes(item)) {
                        let index = itemInventory.indexOf(item);
                        itemInventory.splice(index,1);
                    }
            break;

            case "Combine Items" :
                    let combined = item.split(':');
                    let oldItem = combined[0];
                    let newItem = combined[1];

                    if(itemInventory.includes(oldItem)) {
                        let indexOfOldItem = itemInventory.indexOf(oldItem);
                        itemInventory.splice(indexOfOldItem, 0, newItem);
                    }
            break;
            case "Renew" :

                    if(itemInventory.includes(item)) {
                        let index = itemInventory.indexOf(item); 
                        let piece = itemInventory.slice(index,1);
                        itemInventory.push(piece);
                    }
            break;

            case "Craft!" :
            break;
            }        
            

        


    }

    console.log(itemInventory.join(", "));


}
solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);