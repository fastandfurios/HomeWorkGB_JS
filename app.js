'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

const btns = document.querySelectorAll('.featuredItems button');
const counterEl = document.querySelector('.cartIconWrap span');
const cartIconWrapEl = document.querySelector('.cartIconWrap');
const addedProducts = document.querySelector('.addedProducts');
const array = [];

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        counterEl.textContent = Number(counterEl.textContent) + 1;

        const productsNames = document.querySelectorAll('.product .productName');
        const productsVolume = document.querySelectorAll('.product .volume');
        const pricePerPiece = document.querySelectorAll('.product .pricePerPiece');
        const totalPrices = document.querySelectorAll('.product .totalPrice');
        const sumEl = document.querySelector('.sum span');
        
        let productEl = event.target?.parentNode?.parentNode?.nextElementSibling;
        let productNotInBasket = productEl.querySelector('.featuredName').textContent;

        if(productsNames.length === 0) {
            addedProducts?.insertAdjacentHTML('beforeend', changeHTML(productEl));
            sumEl.textContent = productEl.querySelector('.featuredPrice').textContent;
            array.push(Number(sumEl.textContent.replace('$', '')));
        }
    
        for (let index = 0; index < productsNames.length; index++) {
            if(productsNames[index].textContent === productNotInBasket) {
                productsVolume[index].textContent = Number(productsVolume[index].textContent) + 1;
                totalPrices[index].textContent = `$${Number(productsVolume[index].textContent) * Number(pricePerPiece[index].textContent.replace('$', ''))}.00`;
                array[index] = Number(totalPrices[index].textContent.replace("$", ""));
                sumEl.textContent = "$" + getSum(array) + ".00";
                break;
            }

            if(index === productsNames.length - 1) {
                addedProducts?.insertAdjacentHTML('beforeend', changeHTML(productEl));
                array.push(Number(productEl.querySelector('.featuredPrice').textContent.replace('$', '')));
                sumEl.textContent = "$" + getSum(array) + ".00";
            }
        }
    });
});

//событие не срабатывает, пока в корзине нет товаров
cartIconWrapEl?.addEventListener('click', () => {
    if(Number(counterEl.textContent) != 0) {
        document.querySelector('.recyclebin')?.classList.toggle('hidden');
    }
});

function changeHTML(productEl) {
    return `<div class=product><div class=productName>${productEl.querySelector('.featuredName').textContent}</div><div class=volume>${1}</div><div class=pricePerPiece>${productEl.querySelector('.featuredPrice').textContent}</div><div class=totalPrice>${productEl.querySelector('.featuredPrice').textContent}</div></div>`;
}

function getSum(array) {
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    return sum;
}