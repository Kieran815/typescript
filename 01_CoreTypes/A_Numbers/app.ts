console.log("See `app.ts` for notes on console outputs...")
/*
 **** Section 1: CORE TYPES ****
 * Types used in TypeScript AND JavaScript
 *  number: all numbers, no diff between int or float
 *  string: all text values; denoted by "", '', or ``
 *  boolean: true or false values
 *
 *
 */

// #### TypeScript is used in development to help catch errors in JavaScript Code. It is designed to add an extra Status check to make sure that JavaScript outputs the expected value types.

// **** NUMBERS ****

console.log(
  "Example Function: " +
    "\n" +
    function add(n1: number, n2: number) {
      return n1 + n2
    }
)

// #### Example 1: Passing a String and a Number to a function
// expecting a Number to return:

// function add(n1, n2) {
//   return n1 + n2
// }

// const number1 = "5"
// const number2 = 2.8

// const result = add(number1, number2)

// // `result` will log to `52.8` because "5" is read by JS as a String and concat it with the value 2.8;
// // "5" + 2.8 = "52.8"
// console.log(result, typeof result)

//
// #### Example 2: same code with TypeScript will throw an error since `number1` is a String and `number2` is a float
function add(n1: number, n2: number) {
  return n1 + n2
}

const number1 = "5"
const number2 = 2.8

const result = add(number1, number2)

// TypeScript will throw an error in the console when
// `types` don't match:

// app.ts:41:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 40 const result = add(number1, number2)
//                       ~~~~~~~
// Found 1 error.
console.log("EX1.A: TypeScript `add` function w/ Errors:")
console.log("Result 1:" + result, typeof result)

// However, JavaScript WILL STILL RUN THE CODE, giving the same concatenated value as the prior example;
// "52.8 string"

// Using TypeScript will prevent you from creating/running unnecessary errors by checking the types of the variables being passed DURING DEVELOPMENT.
// When errors are found, TypeScript will give you a better idea of what and where they are in your code, preventing you from having unnecessary errors in your production code.

// **** FINAL PASSING AND WORKING CODE WITH TYPESCRIPT:
function add2(n1: number, n2: number) {
  return n1 + n2
}
const number3 = 5
const number4 = 2.8
const result2 = add2(number3, number4)
console.log("Ex 1.B: FINAL PASSING AND WORKING CODE WITH TYPESCRIPT:")
console.log("Result 2:" + result2, typeof result2)

// #### Example 3: You CAN do type checking in Vanilla JS, but it adds extra code and will cause a failure at runtime:
console.log(
  "You CAN do type checking in Vanilla JS, but it adds extra code and will cause a failure at runtime:"
)
function add3(n1, n2) {
  // Type-Checking `if` statement for Vanilla JS:
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Invalid Input Type; Input must be a Number")
  }
  return n1 + n2
}
const number5 = "5"
const number6 = 2.8
console.log(
  "Ex1.C: Placed @ End Since it throw an Intentional Error from Example 1:"
)
console.log("JavaScript `add` function w/ `typeof` forces errors:")
const result3 = add3(number5, number6)
console.log(result3, typeof result3)
