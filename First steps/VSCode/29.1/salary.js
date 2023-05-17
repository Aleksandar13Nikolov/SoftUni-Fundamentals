function salary(input) {
    let numberOftabs = Number(input[0]);
    let montleySalary = Number(input[1]);

   
    for (i = 2; i <= numberOftabs + 1; i++ ) {
        let currentTab = input[i];

        if (currentTab === "Facebook") {
            montleySalary -= 150;

        } else if (currentTab === "Instagram") {
            montleySalary -= 100;

        } else if (currentTab === "Reddit") {
           montleySalary -= 50;
        }
    } if (montleySalary <= 0) {
        console.log("You have lost your salary.");   
    } else {
        console.log(montleySalary);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])