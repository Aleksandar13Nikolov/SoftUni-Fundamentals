function catCreator (arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
    
        }
    }

    let cats =[];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index].split(' ');
        cats.push(new Cat(element[0], element[1]));
        
    }
    for (const el of cats) {
        el.meow();

    }
  
    
}
catCreator(['Candy 1', 'Poppy 3', 'Nyx 2'])