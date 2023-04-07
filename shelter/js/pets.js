// BURGER MENU

const burgerBtn = document.querySelector('#burgerBtn');
const burgerMenu = document.querySelector('#burgerMenu');
const burgerLinks = document.querySelectorAll('.burger-menu__item');
const burgerLines = document.querySelectorAll('.burger__line');
const wrapper = document.querySelector('.wrapper');

function toggleMenu() {
    burgerMenu.classList.toggle('transform');
    burgerBtn.classList.toggle('rotate');
    document.body.classList.toggle('overflow');
    wrapper.classList.toggle('darkness');
}

function hideMenu(event) {
    if (event.target !== burgerMenu && event.target !== burgerBtn && event.target !== burgerLines[0] && event.target !== burgerLines[1] && event.target !== burgerLines[2]) {
        burgerMenu.classList.remove('transform');
        burgerBtn.classList.remove('rotate');
        burgerMenu.classList.remove('transform');
        burgerBtn.classList.remove('rotate');
        document.body.classList.remove('overflow');
        wrapper.classList.remove('darkness');
    }
}

burgerBtn.addEventListener('click', toggleMenu);
burgerLinks.forEach((item) => {
    item.addEventListener('click', hideMenu);
});
document.addEventListener('click', hideMenu);

// PAGINATION

const firstPage = document.querySelector('#firstPage'),
    prevPage = document.querySelector('#prevPage'),
    currentPage = document.querySelector('#currentPage'),
    nextPage = document.querySelector('#nextPage'),
    lastPage = document.querySelector('#lastPage');
    let width;

(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        width = window.innerWidth;
        changeWidth()
    }
})();

function changeWidth() {
    if (width < 768 && +currentPage.innerText < 16 || width < 1280 && +currentPage.innerText < 8) {
        nextPage.classList.add('animal__nav_active');
        lastPage.classList.add('animal__nav_active');
    } else if (width < 1280 && width >= 768 && +currentPage.innerText >= 8) {
        nextPage.classList.add('animal__nav_deactivated');
        lastPage.classList.add('animal__nav_deactivated');
        currentPage.innerText = '8';
    } else if (width >= 1280 && +currentPage.innerText >= 6) {
        nextPage.classList.add('animal__nav_deactivated');
        lastPage.classList.add('animal__nav_deactivated');
        currentPage.innerText = '6';
    }
}


function toFirstPage() {
    if ( +currentPage.innerText > 1) {
        createElements();
    }

    currentPage.innerHTML = '1';
    firstPage.classList.remove('animal__nav_active');
    firstPage.classList.add('animal__nav_deactivate');
    prevPage.classList.remove('animal__nav_active');
    prevPage.classList.add('animal__nav_deactivate');
    nextPage.classList.remove('animal__nav_deactivate');
    nextPage.classList.add('animal__nav_active');
    lastPage.classList.remove('animal__nav_deactivate');
    lastPage.classList.add('animal__nav_active');
}

firstPage.addEventListener('click', toFirstPage);

function toPrevPage() {

    if (prevPage.classList.contains('animal__nav_active')) {
        createElements()
    }

    if (+currentPage.innerText <= 2) {
        toFirstPage();
    } else {
        currentPage.innerText = +currentPage.innerText - 1;
        nextPage.classList.remove('animal__nav_deactivate');
        nextPage.classList.add('animal__nav_active');
        lastPage.classList.remove('animal__nav_deactivate');
        lastPage.classList.add('animal__nav_active');
    }
}

prevPage.addEventListener('click', toPrevPage);

function toNextPage() {

    if (nextPage.classList.contains('animal__nav_active')) {
        createElements()
    }

    if (currentPage.innerText === '1') {
        currentPage.innerText = '2';

        firstPage.classList.add('animal__nav_active');
        firstPage.classList.remove('animal__nav_deactivate');
        prevPage.classList.add('animal__nav_active');
        prevPage.classList.remove('animal__nav_deactivate');

    } else if (width >= 1280 && +currentPage.innerText >= 5 || width >= 768 && width < 1280 && +currentPage.innerText >= 7 || width < 768 && +currentPage.innerText >= 15) {
        toLastPage();
    } else {
        currentPage.innerText = +currentPage.innerText + 1;

        firstPage.classList.add('animal__nav_active');
        firstPage.classList.remove('animal__nav_deactivate');
        prevPage.classList.add('animal__nav_active');
        prevPage.classList.remove('animal__nav_deactivate');
    }
}

nextPage.addEventListener('click', toNextPage);

function toLastPage() {
    if (lastPage.classList.contains('animal__nav_active')) {
        createElements()
    }

    if (width >= 1280) {
        currentPage.innerText = '6';
    } else if (width >= 768 && width < 1280) {
        currentPage.innerText = '8';
    } else {
        currentPage.innerText = '16';
    }
    firstPage.classList.add('animal__nav_active');
    firstPage.classList.remove('animal__nav_deactivate');
    prevPage.classList.add('animal__nav_active');
    prevPage.classList.remove('animal__nav_deactivate');
    nextPage.classList.add('animal__nav_deactivate');
    nextPage.classList.remove('animal__nav_active');
    lastPage.classList.add('animal__nav_deactivate');
    lastPage.classList.remove('animal__nav_active');

}

lastPage.addEventListener('click', toLastPage);

import myJson from '../pets.json' assert {type: 'json'};

let arr = [].concat(myJson, myJson, myJson, myJson, myJson, myJson);

const pets = document.querySelectorAll('.animal__item');

let randArr = [];


function createElements() {

    let random = Math.floor(Math.random() * 40);
    if (random === randArr.at(-1)) {
        random++;
    }

    randArr.push(random);



    const imageArr = [];
    const nameArr = [];
    const btnArr = [];


    for (let i = random; i <= random + 7; i++) {
        const image = document.createElement('img');
        image.classList.add('animal__pet_photo');
        image.src = arr[i].img;

        const name = document.createElement('h3');
        name.classList.add('animal__pet_name');
        name.innerText = arr[i].name;

        const btn = document.createElement('button');
        btn.classList.add('animal__pet_btn');
        btn.innerText = 'Learn more';

        imageArr.push(image);
        nameArr.push(name);
        btnArr.push(btn)

    }


    for (let i = 0; i <= 7; i++) {
        pets[i].innerHTML = '';
        pets[i].prepend(nameArr[i]);
        pets[i].prepend(imageArr[i]);
        pets[i].appendChild(btnArr[i]);
    }
}

document.addEventListener('DOMContentLoaded', createElements);

