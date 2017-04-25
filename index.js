'use strict'

module.exports = generateWeightedRoundRobinArbiter

var assert  = require('assert'),
    message = 'weights must be an array of positive numbers'

function generateWeightedRoundRobinArbiter(weights) {
    assert(Array.isArray(weights), message)
    assert(weights.length, message)

    var i      = 0,
        cw     = 0,
        max    = maxOfArray(weights),
        gcd    = gcdOfArray(weights),
        length = weights.length

    for (var j = length; j--;)
        assert(weights[ j ] > 0, message)

    return function next() {
        if (i++ === 0) {
            cw = cw - gcd

            if (cw < 0)
                cw = max
        }
        else if (i >= length)
            i = 0

        if (weights[ i ] >= cw)
            return i
        else
            return next()
    }
}

function gcd(n1, n2) {
    return n2 ? gcd(n2, n1 % n2) : n1
}

function gcdOfArray(arr) {
    var n = arr[ 0 ],
        i = arr.length

    while(i--)
        n = gcd(n, arr[ i ])

    return n
}

function maxOfArray(arr) {
    var n = arr[ 0 ],
        i = arr.length

    while (i--)
        if (arr[ i ] > n)
            n = arr[ i ]

    return n
}
