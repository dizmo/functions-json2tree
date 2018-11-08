[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-json2tree.svg)](https://npmjs.org/package/@dizmo/functions-json2tree)
[![Build Status](https://travis-ci.org/dizmo/functions-json2tree.svg?branch=master)](https://travis-ci.org/dizmo/functions-json2tree)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-json2tree/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-json2tree?branch=master)

# @dizmo/functions-json2tree
 Maps recursively a JSON-like object via a `mapper` function, until the object is completely mapped, or the `mapper` returns `false`.

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
import { json2tree } from '@dizmo/functions-json2tree';
```
```typescript
declare const db: {
    set: (key: string, value: any) => any;
};
json2tree(
    "root", {a:1, b:{y:true}, c:{z:"z"}}, db.set);
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
