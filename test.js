'use strict'

var test = require('tap'),
    wror = require('./')

test.test('assertions', function (test) {
    test.throws(function () { wror() })
    test.throws(function () { wror([]) })
    test.throws(function () { wror([ -1 ]) })
    test.throws(function () { wror([ 0 ]) })

    test.doesNotThrow(function () { wror([ 1 ]) })

    test.end()
})

var r1 = generate(10, [ 1 ]),
    r2 = generate(33, [ 1, 1, 1 ]),
    r3 = generate(100, [ 20, 25, 35, 10, 10 ]),
    r4 = generate(100, [ .25, .5, .25, .5 ])

test.same(r1, [ 10 ])
test.same(r2, [ 11, 11, 11 ])
test.same(r3, [ 20, 24, 32, 12, 12 ])
test.same(r3, [ 20, 24, 32, 12, 12 ])
test.same(r4, [ 20, 30, 20, 30 ])

function generate(i, weights) {
    var next   = wror(weights),
        result = fill(weights.length)

    while(i--)
        result[ next() ]++

    return result
}

function fill(i) {
    var arr = []

    while(i--)
        arr[ i ] = 0

    return arr
}
