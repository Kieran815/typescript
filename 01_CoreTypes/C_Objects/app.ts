console.log("Module 1.C: Objects")
/* TypeScript will use `Type Inference` (from last lesson) to infer the value types from key/value pairs in Objects
// Type Inference is the Best Way for TypeScript to deal with Objects
// It allows TS to check the key/value pair types without adding extra code
// (hover over object to see the Object Type (key/type pairs) in VSCode)
*/
const person = {
  name: "Kieran",
  age: 36,
}

// TypeScript will throw an Error b/c there is no `nickname` property
console.log(person.nickname)
/* Exact Error Message:
//  app.ts:9:20 - error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.
// 9 console.log(person.nickname)
*/

/* adding the `object` type will tell TypeScript to ONLY verify that the variable type is an `object`
// Doing this prevents the object from passing any other info to TypeScript
// This makes it throw errors even if there technically are none
// (hover over object to see type is now only `object` in VSCode)
*/
const person2: object = {
  name: "Lexx",
  age: 5,
}

console.log(person2.name)
/* Exact Error Message:
// app.ts:20:21 - error TS2339: Property 'name' does not exist on type 'object'.
// 20 console.log(person2.name)
*/

/* You can pass more types to the object to provide more info to TypeScript about a given object
// This is more pain than it's usually worth, as it is easier/better to allow TypeScript to use Type Inference
*/
const person3: {
  name: string
  age: number
} = {
  name: "Navi",
  age: 6,
}
console.log(person3.name)
