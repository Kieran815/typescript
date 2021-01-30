//  *** LITERAL TYPES ***
// Literal types are based on the core types, but with specific values.
// Example:
var specificValue = 10;
// the Literal Value for `specificValue` is 10
// this can be used with `union` type to look for two or more specific values
// Example: modified `combine3()` from `A_Union`
function combine(input1, input2, 
// Literal Types can be used to assign specific values/inputs
resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "convertNumber") {
        // add `+` before var name to convert value to number (JS)
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// adding numbers as numbers
var combineAges = combine(36, 5, "convertNumber");
console.log(combineAges);
// adding numbers as strings
var combineStringAges = combine("36", "5", "convertNumber");
console.log(combineStringAges);
// inputs will concatenate
var combineNames = combine("Mark", "Kathy", "convertText");
console.log(combineNames);
// passing non-specified literal value:
// `willBreak` is not an option in `resultConversion`
// TypeScript will throw an error, but the JS will still concat
var combineBoth = combine("Kieran", 36, "willBreak");
console.log(combineBoth);
// Output: 'Kieran36'
