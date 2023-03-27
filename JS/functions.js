'use strict'

// Создайте функцию, которая будет принимать в себя 2 аргумента,
//   оба числа. Первое число - это база, второе число - это сколько
// раз нужно будет повторить это число в прогрессии. (Смотри пример ниже).
// Функция должна возвращать строку (или число в особых случаях, о которых ниже)
// , где эти числа идут по порядку, разделенные тремя дефисами "---".
//   После последнего числа их не должно быть.
//
//   Если второй аргумент не является числом, равен или меньше нуля
// - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
//
//
// Примеры:
//
//   Вызов функции getMathResult(5, 3) даст ответ 5---10---15

function getMathResult(a, b) {
  if (b < 0 || b === 0 || typeof b === 'string') return a

  let string = 0

  for (let i = 1; i <= b; i++) {
    string += a * i
    i === b ? string += '' : string += '---'
  }

  return string
}

function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}


function first() {
  setTimeout(function () {
    console.log(1)
  }, 1500)
  console.log('before')
}

function done() {
  console.log('Done')
}

function learnJS(lang, cb) {
  console.log(`i learn ${lang}`)
  cb()
}

learnJS('JS', done)