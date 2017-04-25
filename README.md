[![view on npm](http://img.shields.io/npm/v/wror.svg?style=flat-square)](https://www.npmjs.com/package/wror)
[![downloads per month](http://img.shields.io/npm/dm/wror.svg?style=flat-square)](https://www.npmjs.com/package/wror)
[![node version](https://img.shields.io/badge/node-%3E=0.8-brightgreen.svg?style=flat-square)](https://nodejs.org/download)
[![build status](https://img.shields.io/travis/schwarzkopfb/wror.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/wror)
[![test coverage](https://img.shields.io/coveralls/schwarzkopfb/wror.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/wror)
[![license](https://img.shields.io/npm/l/wror.svg?style=flat-square)](https://github.com/schwarzkopfb/wror/blob/master/LICENSE)

# Weighted Round-Robin Arbiter

Generate array indices with round-robin distribution, weighted by given scores.

## Usage

The package exposes a factory function which takes an array of weight scores and returns the arbiter function.

```js
const wror = require('./'),
      next = wror([ 2, 5, 3 ]),
      counts = [ 0, 0, 0 ],
      order = []

for (let i = 0; i < 10; i++) {
    let n = next()

    counts[ n ]++
    order.push(n)
}

console.log(counts)
console.log(order.join(''))
```

The result will be the following:

```
[ 2, 5, 3 ]
1112120120
```

## Installation

With npm:

    npm install wror

## Tests & benchmarks

Run unit tests:

    npm test

Run unit tests and create coverage report:

    npm run cover

## License

[MIT](/LICENSE)
