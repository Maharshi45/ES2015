/** Hoisting example with var */
function compute(option) {
    if (option === 0) {
        var score = 100;
        return score;
    } else if (option === 1) {        
        return score;
    }
    return score;
}

/**
 * Below code is similar to above code. This is hoisting.
 * variables with var will automatically get define on top of the scope.
 */
// function compute(option) {
//    var score;
//     if (option === 0) {
//         score = 100;
//         return score;
//     } else if (option === 1) {        
//         return score;
//     }
//     return score;
// }

console.log("var hoisting");
console.log(compute(0));
console.log(compute(1));
console.log(compute(2));


/** Prevention of hoisting using let */
function compute_let(option) {
    if (option === 0) {
        let score = 100;
        return score;
    } else if (option === 1) {        
        return score;
    }
    return score;
}

console.log(compute_let(0));
console.log(compute_let(1));
console.log(compute_let(2));