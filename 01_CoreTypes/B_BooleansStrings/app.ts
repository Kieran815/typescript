console.log("Module 1.B: Booleans & Strings")
// add a boolean and a string to the prior `add()` example:
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  // function will `console.log` or `return` value based on `showResult` value
  // boolean changes execution based on true/false value
  if (showResult) {
    // if `true`
    console.log(phrase + result)
  } else {
    // elif `false`
    return phrase + result
  }
}

// TypeScript attempts "Type Inference", i.e. to guess `type` of variable if one is not provided
// so even though we generally create variables WITHOUT TYPES, TypeScript is able to infer what `type` they are
const number1 = 5 // `number` (no diff between `int` or `float` numbers)
const number2 = 2.8 // `number`
const printResult = true // `boolean`
let resultText = "The Result is: " // `string`

add(number1, number2, printResult, resultText)

// TypeScript will remember the `type` of the declared variables, and throw errors if you reassign their value to a different type. Example:
resultText = { diffValue: "I'm Supposed to be a String, not an Object" }
// Exact Error Thrown:
// app.ts:23:1 - error TS2322: Type '{ errorMessage: string; }' is not assignable to type 'string'.
// 23 resultText = { errorMessage: "I'm Supposed to be a String, not an Object" }

// the only time you should create a variable with a type assignment is if you
// are not assigning an initial value. This helps to verify the type of the value you later assign to it. Example:
let number3: number
// assigning a `string` to `number3` would throw an error, since it is expecting a `number` value
number3 = "I will throw an error because I am a String, not a Number."
// Exact Error Thrown:
// app.ts:29:1 - error TS2322: Type 'string' is not assignable to type 'number'.
// 29 number3 = "I will throw an error because I am a String, not a Number."

// REMINDER: JavaScript does not understand TypeScript.
// Running the `tsc ${filename}.ts` command compiles the TypeScript into Vanilla JavaScript. The output JavaScript will be on `${filename}.js`
