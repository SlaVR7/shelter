import {
    animalList,
    btnLeft,
    btnRight,
    burgerBtn,
    burgerLinks,
    itemLeft,
    itemRight,
} from './constants.js';
import {hideMenu, toggleMenu} from './burgerMenu.js';
import { moveLeft, moveRight } from './slider/slider.js';
import {startCards} from './slider/startCards.js';
import {animationEnd} from './slider/animationEnd.js';
import {hidePopup} from './popup/hidePopup.js';
import {showPopup} from './popup/showPopup.js';

burgerBtn.addEventListener('click', toggleMenu);
burgerLinks.forEach((item) => {
    item.addEventListener('click', hideMenu);
});
document.addEventListener('click', hideMenu);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

let mainRandom = Math.floor(Math.random()*8);
startCards(mainRandom);
animalList.addEventListener('animationend', animationEnd);

const width = window.innerWidth;

if (width > 768 && width < 1280) {
    itemLeft.innerHTML = '';
}

if (width < 768) {
    itemLeft.innerHTML = '';
    itemRight.innerHTML = '';
}

// POPUP

document.addEventListener('click', (e) => hidePopup(e));

export function handleShowPopupListener() {
    const popItem = document.querySelectorAll('.animal__item');
    for (let i = 0; i < 9; i++) {
        popItem[i].addEventListener('click', () => showPopup(popItem[i]));
    }
}

handleShowPopupListener()







