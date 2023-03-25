let x = 11

while (x < 15) {
    console.log(x);
    x++
}

let y = 5

do {
    console.log('anyway i started');
    y--
} while (y > 1)

for (let i = 1; i < [1,2,3,4,5].length; i++) {
    console.log('start');
    
}


let res = ''
const length = 5

first: for (let i = 1; i < length; i++) {
    
    for (let j = 0; j < i; j++) {
        if (j === 3) continue first
        res+= '*'
    }

    res += '\n'
    
}



const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)