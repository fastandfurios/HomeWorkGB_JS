'use strict'

const temperatureCels = +prompt('Введите температуру в градусах Цельсия');
const temperatureF = (9 / 5) * temperatureCels + 32;
console.log(`Температура по Фаренгейту составит:  ${Math.round(temperatureF)} F`);