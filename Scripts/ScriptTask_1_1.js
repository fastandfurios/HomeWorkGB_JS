'use strict'

//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    console.log(`Цена на ${this.name} с учетом скидки - ${this.price - (this.price * .25)} д.е.`);
}

let product = new Product('хлеб', 38);
product.make25PercentDiscount();

//es6
class NewProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log(`Цена на ${this.name} с учетом скидки - ${this.price - (this.price * .25)} д.е.`);
    }
}

let newProduct = new NewProduct('сыр', 154);
newProduct.make25PercentDiscount();