function solve(data) {

       let employeeOne = Number(data.shift());
       let employeeTwo = Number(data.shift());
       let employeeThree = Number(data.shift());
       let students = Number(data.shift());

       let capcityPerHour = employeeOne + employeeTwo + employeeThree;
       let restHours = 0;
       
       while(students > 0) {
            restHours++;
            students -= capcityPerHour;
            if(restHours % 4 === 0) {

                restHours++;
            }
       }
     console.log(`Time needed: ${restHours}h.`); 


}
solve(['5','6','4','20']);