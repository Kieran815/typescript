// **** ENUMS ****
// Automatically Enumerated global constraint identifiers
// Helps create human-readable code that is mapped behind the scenes
// Makes identifying values easier for humans to remember
console.log("ENUMS")
// JS requires you to manage constants
// EXAMPLE:
const ADMIN = 0
const READ_ONLY = 1
const AUTHOR = 2

const person = {
  name: "Kieran",
  age: 36,
  hobbies: ["Coding", "Learning", "Parenting", "Video Games"],
  role: ADMIN,
}

if (person.role === ADMIN) {
  console.log(person.name + " is Admin")
}

// ENUM allow you to create enumerated values as global variables
// This allows you to assign Labels to Numbers or Strings (defaults to Numbers, can manually set to whatever value)
// These values can be used to reference global variables
// *** You can also alter the default values by assigning a new default value,
// e.g.: ADMIN = 4
enum Role {
  ADMIN2 = 4,
  READ_ONLY2,
  AUTHOR2,
}
// In JS, this compiles to:
// var Role;
// *** create an IIFE, which assigns the properties to number values
// (function (Role) {
//   Role[(Role["ADMIN2"] = 4)] = "ADMIN2"
//   Role[(Role["READ_ONLY2"] = 5)] = "READ_ONLY2"
//   Role[(Role["AUTHOR2"] = 6)] = "AUTHOR2"
// })(Role || (Role = {}))

const person2 = {
  name: "Lexx",
  age: 5,
  hobbies: ["Playing", "Running", "Watching", "Building"],
  role: Role.READ_ONLY2,
}

if (person2.role === Role.READ_ONLY2) {
  console.log(person2.name + " is Read Only User")
}
