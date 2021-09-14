'use strict'

for (let index = 0; index <= 10 ; index++) {

    if(index === 0){
        console.log(`${index} - это ноль`);
        continue;
    }

    (index % 2 === 0) 
        ? console.log(`${index} - четное число`)
        : console.log(`${index} - нечетное число`);
}