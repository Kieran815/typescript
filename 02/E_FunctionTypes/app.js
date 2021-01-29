// *** THE FUNCTION TYPE ***
// typescript has a `Function` type
// it is used for assigning function values to variables
// it helps error-check to prevent accidental value changes
// `add` and `printResult` functions from last lesson
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
printResult(add(36, 5));
// create an empty variable
// default type `any`
// assign the `Function` type to ensure any value passed is a function
var combinedValues;
// point variable at a function
combinedValues = add;
// execute newly created function assignment
console.log("The Result of combinedValues is " + combinedValues(36, 5));
// to prevent values from reassigning, you can apply the `Function` type
// this will throw an error if the variable could be reassigned to a different value
// the JavaScript will still reassign the value, but TypeScript will
combinedValues = 5;
// Error Message:
// error TS2322: Type 'number' is not assignable to type 'Function'.
// combinedValues = 5
console.log("combinedValues is now " + combinedValues);
// *** FUNCTION TYPES ****
// used function syntax to assign types
// pass props to a variable to assign expected input types
// arrow function to expected output type
var combinedValues2;
// tells TS that assigned function should take in numbers and return numbers
// this allows you to assign `add` to `combinedValues2`, but throws an error for `printResult`
combinedValues2 = add;
// Error
combinedValues2 = printResult;
// Error Message:
// error TS2322: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// Type 'void' is not assignable to type 'number'.
