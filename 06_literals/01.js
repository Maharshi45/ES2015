/** Use of literals */
let name = "David";
console.log(`Hello ${name}, Good morning`);

/** we can also use it as multi line string */
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas erat justo, aliquam id laoreet quis, consectetur porttitor lacus.
Phasellus urna nisl, scelerisque eget euismod sit amet, eleifend ut tellus.`;

console.log(lorem);

/** we can also pass method calls and perform mathematic operations */
function getUserName() {
    return "Williams";
}

let score = 546;

let message = `${getUserName()} got ${score / 6} percentage`;
console.log(message);