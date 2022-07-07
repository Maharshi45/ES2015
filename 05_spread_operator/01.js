/**
 * spread operator is an opposite of rest operator
 * In rest operator, parameters become an array
 * In spread operator, elements of array becomes individual elements
 */

let arrayNum1 = [1, 2];
console.log("Normal array: " + arrayNum1);
console.log("spread operator: ");
console.log(...arrayNum1);

/** We can combine 2 arrays using spread operator */
let arrayNum2 = [3, 4];
// This will not change arrayNum2
arrayNum1.push(...arrayNum2);
console.log("combined array: " + arrayNum1);

/** We can combine 2 arrays and assign it to other array without modifying existing arrays */
let arrayNum3 = [5, 6, 7];
let arrayNum4 = [8, 9, 10];
let arrayNum5 = [...arrayNum3, ...arrayNum4];
console.log(arrayNum3);
console.log(arrayNum4);
console.log(arrayNum5);

/** We can add elements to array and assign it to other array without modifying the existing array */
let arrayNum6 = [...arrayNum3, 8, 9];
console.log(arrayNum3);
console.log(arrayNum6);

/** Use of spread operator in function */
function sum(num1, num2, num3) {
    return (num1 + num2 + num3);
}

let arrayNum7 = [1, 2, 3];
console.log(sum(...arrayNum7));