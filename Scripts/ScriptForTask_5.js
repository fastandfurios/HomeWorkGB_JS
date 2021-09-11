'use strict'

const a = +prompt('Введите число a:');
const b = +prompt('Введите число b:');
const operator = prompt('Введите одно из действий (+, -, /, *)');

(isNaN(a) || isNaN(b)) 
    ? console.log('Было введено не число. Попробуйте снова.')
    : selectActions(a, b, operator);

function selectActions(a, b, operator) {
    switch (operator) {
        case '+':
            console.log(`Сумма ${a} и ${b} составит: ${getSum(a, b)}`)
            break;
        case '-':
            console.log(`Разность ${a} и ${b} составит: ${getSub(a, b)}`)
            break;
        case '/':
            console.log(`Деление ${a} и ${b} составит: ${getDiv(a, b)}`)
            break;
        case '*':
            console.log(`Произведение ${a} и ${b} составит: ${getInc(a, b)}`)
            break;
    }
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