'use strict'

const discount = 15;

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Рассчитывает цену с условием скидки
 * @param {*} price - цена без скидки
 * @returns - цена со скидкой
 */
let discountedPrice = (price) => price - (price * discount / 100);

products.forEach(function (value) {
    console.log(`Старая цена - ${value.price} д.ед. Новая цена с учетом скидки в ${discount}% - ${discountedPrice(value.price)} д.ед.`);
});