/** Fat arrow function */
let square1 = (x) => {
    return x * x;
}

/** If there is only 1 parameter then we can remove paratheses around the parameter */
let square2 = x => {
    return x * x;
}

/**
 * If there is only return statement then we can remove curly braces of function
 * If we are removing the curly braces then we also need to remove return keyword
*/
let square3 = x =>  x * x;

/**
 * If we want to return an object using above example then we need to wrap that object with parantheses
 * This is because the engine will get confused whether curly brace is for function body or for the object
*/
let getuserInfo = id => ({id: id, name: "Roger"});

console.log(square1(3));
console.log(square2(3));
console.log(square3(3));
console.log(getuserInfo(1));

/** Example for no argument function */
let getCountry = () => "India";
console.log(getCountry());

/** In ES5, inner function can not access this object */
let timer1 = {
    message: "ES5 message",
    start: function() {
        setTimeout(function() {
            console.log(this.message);
        }, 1000);
    }
}

timer1.start();

/** Arrow function does not have its own this object, so it can access outer this object */
let timer2 = {
    message: "ES6 message",
    start: function() {
        setTimeout(() => {
            console.log(this.message);
        }, 1000);
    }
}

timer2.start();

/**
 * There are 2 ways to solve above problems with ES5 
 * 1. Using bind() method
 * 2. Storing this in temporary reference
*/
let timer3 = {
    message: "ES5 message",
    start: function() {
        setTimeout(function() {
            console.log(this.message);
        }.bind(this), 1000);
    }
}

timer3.start();

let timer4 = {
    message: "ES5 message",
    start: function() {
        let that = this;
        setTimeout(function() {
            console.log(that.message);
        }, 1000);
    }
}

timer4.start();