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
