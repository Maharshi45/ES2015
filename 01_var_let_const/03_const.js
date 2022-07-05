/**
 * The scope of const variables is similar to let variables(blocked scope).
 * We can not change the value of const reference(not value) after they are declared.
 */

const firstName = "roger";
console.log(firstName);
/** Reassignment is not possible */
// firstName = "rafael";
// console.log(firstName);

/**
 * In below example, we are not changing the reference of DAYS.
 * We are updating the DAYS object. Reference remain same.
 */
const DAYS = {};
DAYS.one = "sunday";
DAYS.two = "monday";
console.log(DAYS);
DAYS.one = "saturday";
console.log(DAYS);