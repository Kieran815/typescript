# Course Section 2: Compiler and Configuration

Covers Sections:

## <strong><u>Compiler Basics</u></strong>

## Module Intro

- Going over compiler usage
- faster than `tsc app.ts` every time
- set up live watch for projects

## Watch Node

- run `tsc app.ts -w` to enter `--watch` mode
- `--watch` recompiles code on change/save

## Compiling the Entire Project

- enter `tsc --init` in the root folder to mark a project as a TypeScript project
- lets TS know to manage entire project
- creates `tsconfig.json` file

## Include and Exclude Files

- add `exclude` array to `tsconfig.json` to exclude files/folders from compilation
  - when using `exclude`, make sure to add `node_modules`
- add `include` array to `tsconfig.json` to ONLY compile files/folders listed
- add `files` array to `tsconfig.json` to only compile specific files (not folders)
  -usually only for smaller projects with a few files
  - not usually used

## <strong><u>`./tsconfig.json`</u></strong>

## Setting a Compilation Target

- change JS version `tsc` compiles to in `tsconfig.json`
  - defaults to `es3`, but can be set for any version
  - Example: `"target": "es5"`

## Understand TypeScript Libs

- "libs" are imported libraries on `tsconfig.json` for the TypeScript project
- "libs" tell TS how to behave, ie version of JavaScript, other libraries for coding
- default imports for `"libs"` based on `"target"` and `"module"` values
- "libs" normally commented out, unless using libraries other than defaults

## Other Options

- `"sourceMap": true` creates a browser-readable map of all project files
  - makes it so you can see `.ts` files in the `sources` tab in browser dev tools
  - helpful for debuggin/breakpoints in browser

## `Rootdir` and `Outdir`

- use `"outDir"` to tell TS where to save the compiler output files
  - usually in `./dist` or equivalent
- use `"rootDir"` to tell TS where to compile from
  - will COMPILE all `.ts` files in all CHILD folders/directories
  - will IGNORE all `.ts` files in all OTHER folders/directories
- `"removeComments"` strips comments from output files
  - makes for cleaner `.js` output files, since compiling from `.ts`
- `"noEmit"` will NOT COMPILE AND OUTPUT
  - used to error-check `.ts` w/o creating `.js` files

## Strict Compilation Options

- `"noImplicitAny"` prevents errors messages from from unspecified (`any`) parameter types
- `"strictNullChecks": false` prevents strict null checks
- `"strictBindCallApply"` makes sure you don't use `bind`, `call`, or `apply` in a way that doesn't work
- `"alwaysStrict"` makes sure `.js` files always use strict mode
- `"noUnusedLocals"` prevents unused local variables
- `"noUnusedParameters"` prevents unused params in functions
- `"noImplicitReturns"` throws error on omission of return statements

Time: 2:21:03 - 3:11:01
