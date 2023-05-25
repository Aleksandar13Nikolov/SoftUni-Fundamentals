function solve(arr) {

        for(let i=0; i<arr.length / 2; i++) {

            let element1 = arr[i];
            let element2 = arr[arr.length - 1 - i];
            arr[i] = element2;
            arr[arr.length - 1 - i] = element1;

        }
        console.log(arr.join(" "));
}
solve(['a', 'b', 'c', 'd', 'e']);