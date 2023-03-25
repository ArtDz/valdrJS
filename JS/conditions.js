if (22 < 22) {
    console.log('yes');
} else if (11 !== 2) {
    console.log('yesss');
} else {
    console.log(no);
}

50 === 51 ? console.log('yes its 50') : console.log('no its not 50');

switch (typeof 11) {
    case "number":
        console.log('yes itss 11');
        break
    case 22:
        console.log('noooo');
        break
    default:
        console.log('no');
        break
}

const burger = 4
const fries = 1

if(burger && fries) console.log('Eat it');

const f1 = function() {
    console.log('сработала первая сложная функция');
}

const f2 = function() {
    console.log('сработала second сложная функция');
}

44 === '44' ? f1() : f2()