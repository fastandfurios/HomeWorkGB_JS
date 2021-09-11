'use strict'

const a = +prompt('Введите число a:');
const b = +prompt('Введите число b:');

if(isNaN(a) || isNaN(b)) {
    console.log('Было введено не число. Попробуйте снова.');
}
else{
    console.log(`Сумма ${a} и ${b} составит: ${getSum(a, b)}`)
    console.log(`Разность ${a} и ${b} составит: ${getSub(a, b)}`)
    console.log(`Деление ${a} и ${b} составит: ${getDiv(a, b)}`)
    console.log(`Произведение ${a} и ${b} составит: ${getInc(a, b)}`)
}

function getSum(a, b) {
    return a + b;
}

function getSub(a, b) {
    return a - b;
}

function getDiv(a, b) {
    return (a / b).toFixed(2);
}

function getInc(a, b) {
    return a * b;
}