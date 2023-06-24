function objectsDemo(input) {

       let result = {};

     for (const element of input) {

           let termin = JSON.parse(element);

           let value = termin.split(':');

           result.term = value[0];
           result.definition = value[1];

           
           result.sort((a,b) => a.term - b.term);

           console.log(`Term: ${term} => Definition: ${definition}`);

           
        }

       

        

}
objectsDemo([
    '{"Coffee":"A hot drink madefrom the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])