console.log("Excluding files")

console.log(
  "exclude files by adding them to an `exclude` array in the `tsconfig.json` File. This tells the `.ts` project to not compile the excluded file."
)

// "exclude": ["exclude.dev.ts"]

console.log("you can also exclude files based on extensions")

// "exclude": ["*.dev.ts"]

console.log("you can also exclude files in any folder")

// "exclude": ["**/*.dev.ts"]

console.log(
  "NOTE: Exclude `node_modules` so they don't slow down the compiler!!!"
)

console.log(
  "NOTE: if not using `exclude`, `node_modules` is excluded by default"
)
