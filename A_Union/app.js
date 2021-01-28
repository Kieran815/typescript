// UNIONS
// Helpful for combining data types
// `add()` from section `01_CoreTypes/B_BooleansStrings`
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2
//   if (showResult) {
//     console.log(phrase + result)
//   } else {
//     return phrase + result
//   }
// }
// combining `number` types from before...
function combine(input1, input2) {
    var result = input1 + input2;
    return result;
}
var combineAges = combine(36, 5);
// output is 41. Simple.
console.log(combineAges);
// changing the input type will throw an error:
var combineNames = combine("Kieran", "Lexx");
console.log(combineNames);
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// const combineNames = combine("Kieran", "Lexx")
// UNION type allows you to accept different types of values
// Can allow as many types as you want
// written as `input: type1 | type2 | type3 | ...`
// Example:
function combine2(input3, input4) {
    // Written as is, TypeScript will throw an error b/c it want you to know there MIGHT be a problem, based on your input types. The code is still Valid JavaScript, so it will still compile and run.
    var result = input3 + input4;
    return result;
}
function combine3(input5, input6) {
    // the work-around is to add type-checking to your inputs.
    var result;
    // if input types are both `number`
    if (typeof input5 === "number" && typeof input6 === "number") {
        // add number
        result = input5 + input6;
    }
    else {
        // else input types convert to string
        result = input5.toString() + input6.toString();
    }
    return result;
}
// running `combine3()` now returns NO ERRORS in TypeScript
// this also ensures that the code is working ONLY with `number` or `string` types
var combineAges2 = combine3(66, 66);
console.log(combineAges2);
var combineNames2 = combine3("Mark", "Kathy");
console.log(combineNames2);
// inputs will concatenate
var combineBoth = combine3("Kieran", 36);
console.log(combineBoth);
// Output: 'Kieran36'
