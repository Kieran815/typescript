"use strict";
console.log("Watch Node");
console.log("run `tsc app.ts -w` in the terminal");
console.log("makes single file automatically re-compile");
const userName = "Kieran";
console.log("Arbitrary Output: " + userName);
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Clicked Possibly Null Object!");
});
if (button) {
    button.addEventListener("click", () => {
        console.log("Clicked!");
    });
}
//# sourceMappingURL=app.js.map