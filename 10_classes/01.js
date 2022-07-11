class Person {
    static count = 0;
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Instance method
    speak() {
        Person.count++;
        return `${this.name} speaking..`;
    }
    // static method
    static welcome() {
        return `Welcome!! count : ${this.count}`;
    }
}
let person1 = new Person("David", 23);
console.log(person1.speak());
console.log(Person.welcome());

class Athelete extends Person {
    constructor(name, age, sport) {
        super(name, age);
        this.sport = sport;
    }
    run() {
        return `${this.name} plays ${this.sport}`;
    }
}

let athelete1 = new Athelete("William", 25, "tennis");
console.log(athelete1.run());
console.log(athelete1.speak());
console.log(Person.welcome());