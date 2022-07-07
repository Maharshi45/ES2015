/**
 * ES5 - Using arguments object
 * arguments object stores all the arguments including str
*/
function add(str) {
    var sum = 0;
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add("Hello", 1, 2 ,3, 4, 5));

/**
 * ES6 - Using rest parameter
 * rest parameter only stores extra parameters and act as an array
 * We can not have argument after rest parameter
 * We can have only one rest parameter argument
*/
function addNew(str1, ...nums) {
    var sum = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(addNew("Hello", 1, 2 ,3, 4, 5));