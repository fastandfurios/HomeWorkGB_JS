'use strict'

/*
Как-то давным-давно я учился C# на таком портале, как ulearn.me.
Так вот, там была такая задача и я ее еще тогда там решил.
Мне стоило зайти на этот портал, посмотреть решение на C# и
переписать решение на JS.
*/

const number = +prompt('Введите сумму, которую хотите положить на счет:');

(isNaN(number))
    ? console.log('Был введен некорректный символ')
    : getResult(number);

function getResult(number){
    let newNumber = number.toString();

    console.log(`Ваша сумма в ${number} ${compare(newNumber)} зачислена.`);
}

function compare(newNumber){
    const word = "руб";

    if(newNumber.endsWith("1") && !newNumber.endsWith("11"))
        return word + "ль";
    else if(newNumber.endsWith("12") || newNumber.endsWith("13") || newNumber.endsWith("14"))
        return word + "лей"
    else if(newNumber.endsWith("2") || newNumber.endsWith("3") || newNumber.endsWith("4"))
        return word + "ля"
    else
        return word + "лей"
}