function convert(input) {

    let person = JSON.parse(input);
    let personInfo = Object.entries(person);
    for (let [key, value] of personInfo) {
        console.log(`${key}: ${value}`);
    }
    

}
convert('{"name": "George", "age": 40, "town": "Sofia"}');