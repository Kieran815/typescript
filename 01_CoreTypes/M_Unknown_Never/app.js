console.log("The Unknown Type");
// *** The UNKNOWN Type ***
// `unknown` acts similarly to `any`
// `any` IGNORES type errors, allows any type
// `unknown` forces type-checking
//  used to ensure the code checks accuracy
// NOTE: `unknown` is better than `any`, since `unknown` is still a type
// NOTE: `unknown` should still be used sparingly
var userInput;
// assign any value to an unknown type and get no errors
// both values still come up `unknown` on hover
userInput = 5;
userInput = "Max";
// assign an `unknown` type value to a known type will throw an error.
// `unknown` forces type-checking against expected input types
var userName;
// throws error assigning type `string` to type `unknown`
userName = userInput;
// ERROR MESSAGE:
// error TS2322: Type 'unknown' is not assignable to type 'string'.
// 19 userName = userInput
// correct this error using `typeof`
//  if input is a string
if (typeof userInput === "string") {
    // assign input to name
    userName = userInput;
    // throws no errors, cleaner code.
}
// *** The NEVER Type ***
// `never` indicates that a function will NEVER RETURN ANYTHING
// different from `void`, which IGNORES return values
// used frequently in debugging
// Example: Force Errors
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// throw force error if conditions are not met
generateError("An Error Occurred", 500);
