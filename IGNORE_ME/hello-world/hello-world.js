console.log("Hello World!!!");
// TypeScript is designed to add type-checking to javascript
// used to assign a type to variables
// helpful for error checking, i.e. more complete messages/info
function hello(string) {
    console.log("Hello" + " " + string);
}
// passes because string value is input
hello("Kieran");
// fails because integer value is input
// since integer is not a string, TS will throw an error to the console/terminal
hello(1);
