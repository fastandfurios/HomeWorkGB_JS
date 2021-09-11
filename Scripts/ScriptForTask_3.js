'use strict'

const a = +prompt('Введите значение переменной a:');
const b = +prompt('Введите значение переменной b:');

if (a >= 0 && b >= 0)
    console.log(`разность ${a} и ${b} составит ${a - b}`)
else if (a < 0 && b < 0)
    console.log(`произведение ${a} и ${b} составит ${a * b}`)
else
    console.log(`сумма ${a} и ${b} составит ${a + b}`)