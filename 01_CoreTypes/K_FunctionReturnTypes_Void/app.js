// **** FUNCTION RETURN TYPES AND VOID ****
// *** Function Return Types ***
// functions have `return` types
// type inference will try to id the return type
// will read `function add(n1: number, n2: number): number`
function add(n1, n2) {
    return n1 + n2;
}
// you can assign return values a type
function add2(n1, n2) {
    // function expects a string, so convert the inputs to strings
    return n1.toString() + n2.toString();
}
// Dont set function return types unless you need to
// TS will use type inference by default, which you can check by hovering as above
// ***VOID***
// `void` is the standard used in almost all scenarios where you have a `function` that DOES NOT RETURN A VALUE
// `void` can be assigned specifically, but TS also infers it
// Functions that don't RETURN anything use the `void` type
// Ex: console.log (hover over `printResult` to see type inference)
// Reads: `function printResult(num: number): void`
function printResult(num) {
    // Console doesn't return anything
    // the type is combined `string` and `number`
    console.log("Result is: " + num);
}
console.log("printResult(add(36, 5))");
printResult(add(36, 5));
// using `void` makes it deliberately clear to TS that the function DOES NOT have a return statement
// `printResult` /w `void` statement
function printResult2(num) {
    console.log("Result is: " + num);
}
console.log("printResult2(add(66, 66)");
// `console.log`ging a function that `console.log`s a result will return `undefined`
// it tries to log the results of a function that doesn't return anything
console.log(printResult2(add(66, 66)));
