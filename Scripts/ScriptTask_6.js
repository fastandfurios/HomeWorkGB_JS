'use strict'

let entry = 'x';

for (let index = 0; index < 20; index++) {
    if(index === 0) {
        console.log(entry);
        continue;
    }

    console.log(entry += 'x');
}