// in TypeScript, assign a data type when creating variables
//  **** TYPES OF DATA IN TS ****
/*
  any
  Number
  String
  Boolean
  Array
    Vector: array w/ only elements of specified data type;
*/
/* NOTE: can use either capital or lower-case when referring to default types */
// **** EXCEPT `any`; `any` apparently needs to be lower-case
var count = 5;
var name = "Lexx";
/* **** ANY **** */
// TypeScript uses the `any` type to allow for any data types
var m = 1;
// allowing any input to pass validation
m = "Kieran";
/* TRY TO AVOID USING `any`, AS IT DEFEATS THE PURPOSE OF TYPESCRIPT */
/* **** NUMBER**** */
var n = 1;
// when compiling to JavaScript using the `tsc` command, TypeScript will remove
// the type assignment from the JS code (see file `types.js`);
n = "Kieran";
/* **** ERROR MESSAGE ****
tsc types.ts
types.ts:6:1 - error TS2322: Type 'string' is not assignable to type 'Number'.
6 n = "Kieran";
~
Found 1 error.
*/
/* **** BOOLEANS **** */
var isWinter = false;
// throws error, will still compile
// isWinter = 123;
/* **** ARRAYS **** */
// assign data type and add brackets to denote array
/* VECTOR: array where all elements are the same type */
var names = ["Kieran", "Lexx", "Navi"];
// can use `Any` to allow for multiple types in array:
var names2 = ["Kieran", "Lexx", "Navi", 10, true, NaN, undefined];
/* ****ENUM **** */
// an easy way to store built-in variables:
var Family;
(function (Family) {
    Family[Family["Mark"] = 0] = "Mark";
    Family[Family["Kathy"] = 1] = "Kathy";
    Family[Family["Alexxander"] = 2] = "Alexxander";
})(Family || (Family = {}));
;
var lexx = Family.Alexxander;
/* **** VOID **** */
// Void is type that is not a type, equal to nothing
// usually used at end of functions
// NOTE: when typing functions, use appropriate type to define the value
// the function RETURNS:
function getMyName() {
    // console.log doesn't actually RETURN anything, so this function would use type `Void`
    console.log("Kieran");
}
