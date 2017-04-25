'use strict'

var wror   = require('./'),
    next   = wror([ 2, 5, 3 ]),
    counts = [ 0, 0, 0 ],
    order  = []

for (var i = 0; i < 10; i++) {
    var n = next()

    counts[ n ]++
    order.push(n)
}

console.log(counts)
console.log(order.join(''))
