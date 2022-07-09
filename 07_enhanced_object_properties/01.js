model = "Hyundai";
color = "Black";

/** ES5 way of initializing properties for object */
let car1 = {
    model: model,
    color: color,
    drive: function () {
        console.log(`Model: ${this.model}, Color: ${this.color}`);
    }
}

car1.drive();

/**
 * ES5 way of initializing properties for object
 * If property name and name of reference of value is same then we need not require to assign it
 * We do not require 'function' keyword to define a function inside object
*/
let car2 = {
    model,
    color,
    drive() {
        console.log(`Model: ${this.model}, Color: ${this.color}`);
    }
}
car2.drive();

/**
 * Computed Properties in ES5
 * We need to create a reference for the object and return the reference
 */
function generateObjectES5(name, value) {
    let ob = {};
    ob[name] = value;
    return ob;
}

console.log(generateObjectES5("model", "Honda"));

/**
 * Computed Properties in ES6
 * We can direct construct an object and return it
 */
function generateObjectES6(name, value) {
    return {
        [name]: value
    };
}
console.log(generateObjectES6("model", "Suzuki"));