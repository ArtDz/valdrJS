'use strict'



function createCounter() {
    let counter = 0

    return function () {
        counter = counter + 1
        return counter
    }
}

const increment = createCounter()

const c1 = increment()
const c2 = increment()
const c3 = increment()

console.log(c1, c2, c3)