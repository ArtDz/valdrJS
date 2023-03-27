const person = {
    name: 'Btr',
    age: 25,
    jobs: {
        developer: 'Russia, France',
        smm: 'Russia China'
    },
    isMarried: false,
    makeTest: function () {
        console.log('test')
    },
    showName() {
        console.log(this.name)
    }
}

delete person.isMarried

const {developer: xxx, smm} = person.jobs


// let counter = 0
// for (const key in person) {
//     if (typeof person[key] === 'object') {
//         counter++
//         for (const i in person[key]) {
//             console.log(`Key - ${i}, znachenie - ${person[key][i]}`)
//         }
//     } else {
//         console.log(`Key - ${key}, znachenie - ${person[key]}`)
//         counter++
//     }
// }

