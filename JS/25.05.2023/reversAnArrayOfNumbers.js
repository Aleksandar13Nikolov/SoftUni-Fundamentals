function solve(num, arr) {

    let arr2 =[];

    for(let i=0; i<num; i++) {
        
        arr2.push(arr[i]);
    }
    let buff = "";

    for( let i = arr2.length -1; i>=0; i--) {

        buff += arr2[i] + " ";
    }
    console.log(buff);
}
solve(3, [10, 20, 30, 40, 50]);