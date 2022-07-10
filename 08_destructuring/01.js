/**
 * For more info: https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/
 */

// Destucturing the object, must be wrapped with parantheses if not used with any access modifier(let, var, const)
({ x, y } = { x: 10, y: 20 });
console.log(x, y);

let { g, h, ...restof } = { g: 5, h: 10, i: 15, j: 20, k: 25 };
console.log(g, h, restof);

// Destucturing the array
let [q, w, e] = [1, 2, 3];
console.log(q, w, e);

let [a1, a2, a3, ...nums] = [4, 5, 6, 7, 8, 9];
console.log(a1, a2, a3, nums);

// Swap values
let a = 4;
let b = 5;

// This is ultimately destructuring the array
[a, b] = [b, a];
console.log(a);
console.log(b);

let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;
console.log(firstName, secondName);

[firstName, ...lastName] = names;
console.log(firstName, lastName);

[firstName, , ...lastName] = names;
console.log(firstName, lastName);

let namesList = () => {
    return ["alpha", "beta", "gamma", "delta"];
}

[firstName, lastName] = namesList();
console.log(firstName, lastName);

// Destructuring the object
let marks = { a4: 21, a5: -34, a6: 47 };

let { a4, a5, a6 } = marks;
console.log(a4, a5, a6);

// You can also change the variable using colon
let { a4: a7, a5: a8, a6: a9 } = marks;
console.log(a7, a8, a9);

// Destructuring of nested objects
marks = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
// Only alpha and beta will get assigned, section1 will not get assigned
let { section1: { alpha, beta } } = marks;
console.log(alpha, beta);

// With changed names
let { section1: { alpha: alpha1, beta: beta1 } } = marks;
console.log(alpha1, beta1);

let obj = {
    name: "David",
    add: {
        country: "USA",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { name: fname, add: { country: asdf } } = obj;
console.log(fname, asdf)

let { add: { country: abcd } } = obj
console.log(abcd)

let { add: { state: { code: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: tpc } } } } = obj
console.log(tpc);

// We can iterate the array of objects and retrieve specific keys of object

let cars = [
    {
        model: "Honda",
        color: "red"
    },
    {
        model: "Hyundai",
        color: "black"
    },
    {
        model: "Tata",
        color: "blue"
    }
];

cars.forEach(({ model, color }) => {
    console.log(model, color);
});