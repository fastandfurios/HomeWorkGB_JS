'use strict'

const a = +prompt('Введите число a:');
const b = +prompt('Введите число b:');
const operator = prompt('Введите одно из действий (+, -, /, *)');

(Number.isNaN(a) || Number.isNaN(b)) 
    ? console.log('Было введено не число. Попробуйте снова.')
    : outputResults(a, b, operator);

/**
 * В зависимости от введенного пользователем оператора, выводит результат
 * @param {*} a - введенное пользователем число
 * @param {*} b - введенное пользователем число
 * @param {*} operator - введенный пользователем оператор
 */
function outputResults(a, b, operator) {
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
        default:
            console.log("Было введенно некорректное действие. Попробуйте снова.");
    }
}

/**
 * складывает два числа
 * @param {*} a - веденное пользоваетелем число
 * @param {*} b - веденное пользоваетелем число
 * @returns сумма двух чисел
 */
function getSum(a, b) {
    return a + b;
}

/**
 * вычитает из числа a число b
 * @param {*} a - веденное пользоваетелем число
 * @param {*} b - веденное пользоваетелем число
 * @returns разность двух чисел
 */
function getSub(a, b) {
    return a - b;
}

/**
 * делит число a на число b
 * @param {*} a - веденное пользоваетелем число
 * @param {*} b - веденное пользоваетелем число
 * @returns результат деления двух чисел
 */
function getDiv(a, b) {
    return (a / b).toFixed(2);
}

/**
 * умножает два числа
 * @param {*} a - веденное пользоваетелем число
 * @param {*} b - веденное пользоваетелем число
 * @returns произведение двух чисел
 */
function getInc(a, b) {
    return a * b;
}