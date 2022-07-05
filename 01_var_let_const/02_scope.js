/** Problem with scope of var variables */
var number1 = 10;
if (true) {
    var number1 = 20;
    console.log(number1);
}
console.log(number1);

/** Scope of let variable */
let number2 = 10;
if (true) {
    let number2 = 20;
    console.log(number2);
}
console.log(number2);

let number3 = 10;
if (true) {
    number3 = 20;
    console.log(number3);
}
console.log(number3);

/** Problem with scope of var variables */
for (var i = 0; i < 3; i++) {
    console.log("i: " + i);
}
console.log("i outside for loop: " + i);

/** Scope of let variable */
for (let j = 0; j < 3; j++) {
    console.log("j: " + j);
}
console.log("j outside for loop: " + j);