import {burgerBtn, burgerLinks} from './constants.js';
import {hideMenu, toggleMenu} from './burgerMenu.js';
import myJson from '../pets.json' assert {type: 'json'};
import {displayWindowSize} from './slider/windowSizes.js';
import {toFirstPage} from './pagintion/toFirstPage.js';
import {toPrevPage} from './pagintion/toPrevPage.js';
import {toNextPage} from './pagintion/toNextPage.js';
import {toLastPage} from './pagintion/toLastPage.js';
import {createElements} from './pagintion/createElements.js';
import {showPopup} from './popup/showPopup.js';
import {hidePopup} from './popup/hidePopup.js';

burgerBtn.addEventListener('click', toggleMenu);
burgerLinks.forEach((item) => {
    item.addEventListener('click', hideMenu);
});
document.addEventListener('click', hideMenu);
let width = window.innerWidth;
function setWidth(value) {
    width = value;
}

// PAGINATION

const pagesNav = {
    firstPage: document.querySelector('#firstPage'),
    prevPage: document.querySelector('#prevPage'),
    currentPage: document.querySelector('#currentPage'),
    nextPage: document.querySelector('#nextPage'),
    lastPage: document.querySelector('#lastPage')
}

window.onresize = () => displayWindowSize(pagesNav, setWidth);

let arr = [].concat(myJson, myJson, myJson, myJson, myJson, myJson);
const pets = document.querySelectorAll('.animal__item');
export let randArr = [];

if (pagesNav.firstPage) {
    pagesNav.firstPage.addEventListener('click', () => toFirstPage(pagesNav,randArr, arr, pets));
    pagesNav.prevPage.addEventListener('click', () => toPrevPage(pagesNav, randArr, arr, pets));
    pagesNav.nextPage.addEventListener('click', () => toNextPage(pagesNav, width, randArr, arr, pets));
    pagesNav.lastPage.addEventListener('click', () => toLastPage(pagesNav, width, randArr, arr, pets));
    document.addEventListener('DOMContentLoaded', () => createElements(randArr, arr, pets));
    document.addEventListener('click', hidePopup);

    for (let i = 0; i < 8; i++) {
        pets[i].addEventListener('click',() => showPopup(pets[i]));
    }
}





