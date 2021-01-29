//  *** TYPE ALIASES ***
// Create variables that store your expected Union types
// shortens code and easier to read
// create `type` variable and assign a union value
// (can work with single type values, but not necessary)
function combine(
// input1: number | string,
// input2: number | string,
input1, 
// call alias instead of writing out full union
input2, 
// resultConversion: "convertNumber" | "convertText"
resultConversion) {
    // below code from `B_Literal`
    // Not relevant to Type Aliases
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "convertNumber") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(36, 5, "convertNumber");
console.log(combineAges);
var combineStringAges = combine("36", "5", "convertNumber");
console.log(combineStringAges);
var combineNames = combine("Mark", "Kathy", "convertText");
console.log(combineNames);
