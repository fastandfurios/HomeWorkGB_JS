'use strict'

let flag = false;
let numberObj = {};

do {
    const number = +prompt('Введите целое число в диапазоне от 0 до 999: ');

    if(Number.isNaN(number)) {
        run(`Было введено не число`);
    }
    else if(number < 0 || number > 999) {
        run(`${number} - находилось за заданным диапазоном`);
    }
    else if(!Number.isInteger(number)) {
        run(`${number} - это не целое число`);
    }
    else {
        console.clear();
        convert(number);
        console.log('Результат конвертирования: ', numberObj);
        flag = false;
    }
    
} while (flag);

/**
 * Выполняет действия в условиях
 * @param {string} entry - строка
 */
function run(entry) {
    console.log(entry);
    console.log('Результат конвертирования: ', numberObj);
    flag ||= true;
}

/**
 * Конвертирует число в объект
 * @param {Number} number - число, введенное пользователем
 */
function convert(number) {
    let entry = String(number);

    if(entry.length === 1) {
       completeObject(number, 0, 0);
    }
    else if(entry.length === 2) {
      completeObject(number, Math.floor(number / 10), 0);
    }
    else if(entry.length === 3) {
       completeObject(number % 10, Math.floor(number / 10) % 10, Math.floor(number / 100));
    }
}

/**
 * Заполняет объект данными
 * @param {Number} units - единицы
 * @param {Number} tens - десятки
 * @param {Number} hundreds - сотни
 */
function completeObject(units, tens, hundreds) {
    numberObj = {
        units: units,
        tens: tens,
        hundreds: hundreds,
    }
}