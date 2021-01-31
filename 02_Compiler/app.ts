console.log("Watch Node")

// **** Watch Node ****
// running `tsc app.ts` is inefficient
// it is better to run `-w` or `--watch`
// `-w` tells TypeScript to watch the file for changes

console.log("run `tsc app.ts -w` in the terminal")
console.log("makes single file automatically re-compile")
// still throws compilation errors in terminal

const userName: string = "Kieran"
console.log("Arbitrary Output: " + userName)

// *** STRICT COMPILATION OPTIONS

// *** strict `null` checks ***

// assigning an `html` element in TypeScript can produce a `null` type
// TypeScript isn't sure the element will be there, so it infers `null`
const button = document.querySelector("button")

// this throws an error, even though it is correct JavaScript
button.addEventListener("click", () => {
  console.log("Clicked Possibly Null Object!")
})

// `"strictNullChecks": false` prevents strict null checks
// used if you KNOW the element(s) will be there
// it's better to use `null` type work-arounds, such as:

// add `!` to the end of a `null` variable
// tells TS that the element is absolutely there

// EXAMPLE: `const button = document.querySelector("button")!`

// BETTER:
// `if` statement:
// check if element exists
if (button) {
  // now the same block is error free
  button.addEventListener("click", () => {
    console.log("Clicked!")
  })
}
