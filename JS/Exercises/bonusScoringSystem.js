function bonus(arr) {
    
    let students = Number(arr[0]);
    let lectures = Number(arr[1]);
    let aditionalBonus = Number(arr[2]);

    let maxStudentScore = 0;
    let totalBonus = 0;
    let maxStudentAttend = 0;
    let newArr = arr.slice(3)

    for(let i = 0; i <= students; i++) {

        let studentsAttendance = Number(newArr[i]);
        totalBonus = (studentsAttendance / lectures) * (5 + aditionalBonus);

        if(totalBonus > maxStudentScore) {
            maxStudentScore = totalBonus;
            maxStudentAttend = studentsAttendance;
        }
        
    }
 
    console.log(`Max Bonus: ${Math.round(maxStudentScore)}.`);
    console.log(`The student has attended ${maxStudentAttend} lectures.`);
    
}
bonus(['5', '25', '30', '12', '19', '24', '16', '20']);