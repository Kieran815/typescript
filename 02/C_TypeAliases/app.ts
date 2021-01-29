//  *** TYPE ALIASES ***
// Create variables that store your expected types/values
// shortens code and easier to read
// create `type` variable and assign a value
// (can work with single type values, but not necessary. you would just use a type-literal)

type Combinable = number | string // use `type` to create aliases
// pass types to alias
type passedConversion = "convertNumber" | "convertText"

function combine(
  // input1: number | string,
  // input2: number | string,
  input1: Combinable,
  // call alias instead of writing out full union
  input2: Combinable,
  // resultConversion: "convertNumber" | "convertText"
  resultConversion: passedConversion
) {
  // below code from `B_Literal`
  // Not relevant to Type Aliases
  let result
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "convertNumber"
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combineAges = combine(36, 5, "convertNumber")
console.log(combineAges)
const combineStringAges = combine("36", "5", "convertNumber")
console.log(combineStringAges)
const combineNames = combine("Mark", "Kathy", "convertText")
console.log(combineNames)
