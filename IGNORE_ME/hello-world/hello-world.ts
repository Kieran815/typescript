console.log("Hello World!!!");
// TypeScript is designed to add type-checking to javascript
// used to assign a type to variables
// helpful for error checking, i.e. more complete messages/info
function hello(string: String) {
  console.log("Hello" + " " + string);
}

// passes because string value is input
hello("Kieran");

// fails because integer value is input
// since integer is not a string, TS will throw an error to the console/terminal
hello(1);

/* **** EXACT ERROR MESSAGE FROM NODE ****

tsc hello-world.ts
hello-world.ts:14:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'String'.

14 hello(1);
      ~


Found 1 error.

*/

/* **** NOTE ON EXECUTION ****
  hello-world.js will still run and output `Hello 1`, so watch the `tsc` command for errors;
*/
