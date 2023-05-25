function solve(num) {

    let arr = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num >= 1 && num <= 7) {
        console.log(arr[num - 1]);
    } else {
        console.log( "Invalid day!");
    }
}
solve(2);