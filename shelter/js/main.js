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
    if (event.target !== burgerMenu && event.target !== burgerBtn && burgerLines.forEach((item) => {
        return event.target !== item;
    })) {
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
document.addEventListener('click', hideMenu)

// SLIDER

import myJson from '../pets.json' assert {type: 'json'};

const pet1Photo = document.getElementById('pet1Photo');
const pet2Photo = document.getElementById('pet2Photo');
const pet3Photo = document.getElementById('pet3Photo');
const pet1Name = document.getElementById('pet1Name');
const pet2Name = document.getElementById('pet2Name');
const pet3Name = document.getElementById('pet3Name');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const animalList = document.querySelector('.animal__list');

function moveRight() {
    animalList.classList.add('right-transition');
    btnRight.removeEventListener('click', moveRight);
    btnLeft.removeEventListener('click', moveLeft);
}

function moveLeft() {
    animalList.classList.add('left-transition');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

function animationEnd(animation) {
    if (animation.animationName === 'move-left') {
        animalList.classList.remove('left-transition');
    } else {
        animalList.classList.remove('right-transition');
    }

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
}
animalList.addEventListener('animationend', animationEnd)




// function changePet1() {
//     pet1Name.innerHTML = myJson[Math.floor(Math.random()*9)].name;
//     pet1Photo.src = 'assets/img/small%20pets/woody.png';
// }
//
// changePet1()

//console.log(myJson[8])
console.log(Math.floor(Math.random()*9));

// popup

// const petBtn = document.querySelectorAll('.animal__pet_btn');
//
// console.log(petBtn)
