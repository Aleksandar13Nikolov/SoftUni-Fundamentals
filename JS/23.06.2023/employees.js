function objectsDemo(names) {

    let obj = {};

    for (const name of names) {
        obj[name] = name.length;
    }
    for (const name in obj) {
        
            console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
          
            
    }
    
    
}
objectsDemo([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);