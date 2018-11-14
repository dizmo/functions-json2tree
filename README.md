[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-json2tree.svg)](https://npmjs.org/package/@dizmo/functions-json2tree)
[![Build Status](https://travis-ci.org/dizmo/functions-json2tree.svg?branch=master)](https://travis-ci.org/dizmo/functions-json2tree)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-json2tree/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-json2tree?branch=master)

# @dizmo/functions-json2tree
Provides two functions `array2tree` and `object2tree`, where:

* `array2tree`: maps an array via an `apply` function, until the array is completely mapped, or `apply` returns `false`.

The array is a recursive description of a tree, where the *value* of a given node is at index `0` of the array followed *optionally* by other arrays, each containing the *name* followed by a *sub-tree* for any given sub-nodes. Each sub-tree is again yet another array according to the same recursive description.

* `object2tree`: maps a JSON-like object via an `apply` function, until the object is completely mapped or `apply` returns `false`.

The object conforms to the same rules like any regular JSON or JavaScript object, with the addition that the values of nodes can be directly represented using an underscore `_` for the key value.

## Usage
### Install
```sh
npm install @dizmo/functions-json2tree --save
```
### Require
```javascript
let lib = require('@dizmo/functions-json2tree');
```
### Examples
```typescript
import { array2tree } from '@dizmo/functions-json2tree';
import { object2tree } from '@dizmo/functions-json2tree';
```
```typescript
declare const db: {
    // db should set value for given path (or root)
    set: (key: string | null, value: any) => any;
};
```
```typescript
array2tree("path/to/a-node", [
    "α"
], db.set);
array2tree("path/to/b-node", [
    "β", ["i", [0]], ["j", [1]], ["k", [2]]
], db.set);
array2tree("path/to/c-node", [
    "γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]
], db.set);
```
```typescript
object2tree("path/to/a-node", {
    _: "α"
}, db.set);
object2tree("path/to/b-node", {
    _: "β", i: 0, j: 1, k: 2
}, db.set);
object2tree("path/to/c-node", {
    _: "γ", x: {_: "ξ", y: {_: "υ", z: "ζ"}}
}, db.set);
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [Hasan Karahan](https://github.com/hsk81)
