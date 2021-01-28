// **** TYPING ARRAYS ****
var person = {
    name: "Kieran",
    age: 36,
    // hover over `hobbies` triggers TS alert of what inferred type it is (array of strings). Output below:
    // (property) hobbies: string[]
    hobbies: ["Coding", "Learning", "Parenting", "Video Games"]
};
// You can also explicitly set the type of variable. Adding `[]` to the end of a type denotes that the variable will be an array of the data type:
var favoriteActivities;
// trying to add an element that IS NOT in an array will throw an error.
// ERROR OUTPUT:
// Type `string` is not assignable to type `string[]`
favoriteActivities = "Coding";
// adding a DIFFERENT TYPE to the explicitly set array will also throw an error
// ERROR OUTPUT:
// Type `number` is not assignable to type `string`
favoriteActivities = ["Coding", 5];
// adding a different type to an array makes it a `mixed` array.
// mixed arrays use the `any` type to allow for any data types:
var favoriteActivities2;
// this will allow the array to have different data types:
favoriteActivities2 = ["Learning", 10];
// NOTE: using `any` will ignore the data types, essentially negating the benefits of using TS.
// using TS inference allows you to add data-type methods to code
// since TS already verifies what data-type the code is using
console.log("Converted strings in array to uppercase");
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    // this only applies to the type methods for what you are working on
    // `hobby` is a string, so it can use string methods
    // `map` is an array method, so it will NOT work on strings:
    // ERROR OUTPUT:
    // Property 'map' does not work on type 'string'
    console.log(hobby.map());
}
