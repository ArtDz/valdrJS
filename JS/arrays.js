'use strict'

const arr = [1,2,3,6,8,101]

for (let i of arr) {
    i+='111'
}

const newArr = arr.map((item, index) => {
    item+='---'
    // console.log(`${index} - ${item}`)
})


const str = 'ч1, ч2, ч3'

const prod = str.split(',')

console.log(arr.sort((a,b)=> a - b))