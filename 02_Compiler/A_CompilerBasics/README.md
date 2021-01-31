# Course Section 2A: Compiler Basics

Covers Sections:

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

## Setting a Compilation Target

- change JS version `tsc` compiles to in `tsconfig.json`
- defaults to `es3`, but can be set for any version
- Example: `"target": "es5"`

Time: 2:21:03
