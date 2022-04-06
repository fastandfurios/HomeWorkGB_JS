'use strict'

const a = +prompt('Введите число a:');
const b = +prompt('Введите число b:');

if (a >= 0 && b >= 0)
{
    console.log(`разность ${a} и ${b} составит ${a - b}`);
}
else if (a < 0 && b < 0)
{
    console.log(`произведение ${a} и ${b} составит ${a * b}`);
}
else
{
    console.log(`сумма ${a} и ${b} составит ${a + b}`);
}
