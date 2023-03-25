'use strict'

console.log('arr' + ' - object');

let incr = 10, decr = 11

console.log(incr || decr);

const x = {
    a: incr,
    b: decr,
    c: incr + decr
}

console.log(x.a * x.b)

const y = (num) => {
    return num * 22
}
console.log(y(77))
