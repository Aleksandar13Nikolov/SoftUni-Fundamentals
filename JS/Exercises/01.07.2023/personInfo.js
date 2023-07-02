function objectsTest(firstName, lastName, age) {

    let personInfo = {};

    personInfo.firstName = firstName;
    personInfo.lastName = lastName;
    personInfo.age = age;

    
    console.log(Object.entries(personInfo));
}   
objectsTest("Peter", 
"Pan",
"20");