// **** TUPLES ****
// A `tuple` is an array of a fixed length with a fixed type
// Used in several different programming languages
// `tuples` are NOT a native part of JavaScript
// TypeScript allows for the use of tuples because of static typing.

// Adding a `role` tuple to the `person` object:
// As is, TS will read the `role` value as:
// `(string | number)[]` (array of`string or number` type)
// It will NOT prevent you from changing/adding values of any type
const person1 = {
  name: "Kieran",
  age: 36,
  hobbies: ["Coding", "Learning", "Parenting", "Video Games"],
  role: [30, "admin"],
}
console.log("Initial Array of `person.role`")
console.table(person1.role)
// `push` still works, since `person.role` is an array, not a tuple
person1.role.push("author")
person1.role[1] = 10
console.log(
  "Array of `person.role` (not at tuple, since it can push 'author' and change `person.role[1]` to 10 on `person.role`):"
)
console.table(person1.role)

// all of the above code throw NO ERRORS
// all data types in `person.role` are still numbers or strings
// still not a Tuple

//
// *** MAKE A TUPLE ***
// create an explicit object type:
const person2: {
  name: string
  age: number
  hobbies: string[]
  // when creating at tuple, assign every element in the array a static type
  // this will check both the length of the array and the type of each element
  // JS will still run the TS Tuple as a regular array
  // TS will throw an error in development if the length/types do not match
  // Example: TS reads 'first element is a number, second element is a string'
  role: [number, string]
} = {
  name: "Kieran",
  age: 36,
  hobbies: ["Coding", "Learning", "Parenting", "Video Games"],
  role: [30, "admin"],
}

// So running the same code from above will throw errors for you to catch in dev
console.log("Initial Array of `person2.role`")
console.table(person2.role)
// `push` still works, since `person.role` is still an array in JS, not a tuple
person2.role.push("author")

// changing `role[1]` to a number will throw an error in terminal
// TS is expecting a string, not a number
// Will throw error:
// error TS2322: Type 'number' is not assignable to type 'string'.
// 55 person2.role[1] = 10
person2.role[1] = 10

// TypeScript WILL throw an error if try to assign additional values directly to the tuple
// Changes WILL STILL APPLY IN JAVASCRIPT ARRAY
// error TS2322: Type '[number, string, string]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.
person2.role = [40, "klondike", "bar"]

console.log(
  "Tuples are part of TypeScript in dev terminal, but JavaScript still reads them as normal arrays."
)
console.log(
  "NOTE: `push` still works, since `person.role` is still an array in JS, not a tuple"
)

console.table(person2.role)
console.log(
  "Tuples add strictness to the type of data you are working with in development. Although the array can still mutate based on the JS, TypeScript will allow you to be more exact about specific data types in the dev terminal, ensuring higher accuracy in execution."
)
