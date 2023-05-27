function solve(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSeqNum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(i !==0) {
            let currentNumber = Number(arr[i]);
            let prevNumber = Number(arr[i - 1]);

            if(currentNumber === prevNumber) {
                sequence ++;

                if(sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSeqNum = currentNumber;
                }
            }else {
                sequence = 1;
            }
        }
    }
    console.log(`${(maxSeqNum+ " ").repeat(maxSequence)}`);
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);