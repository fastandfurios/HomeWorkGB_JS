'use strict'

for (let index = 0; index < 10; outputResult(index++)) {}

/**
 * Выводит результат каждой итерации цикла
 * @param {*} index - переданная переменная
 */
function outputResult(index){
    console.log(index);
}