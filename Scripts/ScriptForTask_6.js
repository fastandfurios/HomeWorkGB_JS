'use strict'

/*
Как-то давным-давно я учился C# на таком ресурсе, как ulearn.me.
Так вот, там была такая задача и я ее еще тогда там решил.
Мне стоило зайти на этот ресурс, посмотреть решение на C# и
переписать решение на JS.
*/

const number = +prompt('Введите сумму, которую хотите положить на счет:');

(Number.isNaN(number))
    ? console.log('Был введен некорректный символ')
    : getResult(number);

/**
 * Выводит результат
 * @param {*} number - сумма, введенная пользователем
 */
function getResult(number){
    let entry = number.toString();

    console.log(`Ваша сумма в ${number} ${compare(entry)} зачислена.`);
}

/**
 * Сравнивает переданное значение с критериями функции
 * @param {*} entry - строкое представление числа, введенного пользователем
 * @returns строка
 */
function compare(entry){
    const word = "руб";

    if(entry.endsWith("1") && !entry.endsWith("11")) {
        return word + "ль";
    }
    else if(entry.endsWith("12") || entry.endsWith("13") || entry.endsWith("14")) {
        return word + "лей"
    } 
    else if(entry.endsWith("2") || entry.endsWith("3") || entry.endsWith("4")) {
        return word + "ля"
    } 
    else {
        return word + "лей"
    } 
}