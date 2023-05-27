function solve(arr, arr2) {

    for(let index = 0; index < arr.length; index++) {
        let currentEl = arr[index];

        if(arr2.includes(currentEl)) {
            console.log(currentEl);
        }
    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);