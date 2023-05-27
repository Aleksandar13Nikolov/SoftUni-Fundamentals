function equalSums(arr) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrayLenght = arr.length;

    for(let curentI = 0; curentI < arrayLenght; curentI++ ) {
        for(let i=0; i <arrayLenght; i++) {
            if(i !== curentI) {
                let num = Number(arr[i]);
                if(i < curentI) {
                    leftSum += num;
                }else if (i > curentI) {
                    rightSum += num;
                }
            }
            if(curentI === 0) {
                leftSum = 0;
            }else if(curentI === arrayLenght - 1) {
                rightSum = 0;
            }
              
        }
        if(leftSum === rightSum) {
            console.log(curentI);
            isEqual = true;
        }else{
            leftSum = 0;
            rightSum = 0;
       
    }
   
    }
    if(!isEqual) {
        console.log("no");
    }


}
equalSums([1, 2, 3, 3]);