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
document.addEventListener('click', hideMenu)

// SLIDER

import myJson from '../pets.json' assert {type: 'json'};

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const animalList = document.querySelector('.animal__list');
const itemLeft = document.querySelectorAll('.item__left');
const itemCenter = document.querySelectorAll('.item__center');
const itemRight = document.querySelectorAll('.item__right');


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

const mainRandom = Math.floor(Math.random()*8);

function animationEnd(animation) {
    if (animation.animationName && animation.animationName === 'move-left') {
        animalList.classList.remove('left-transition');

        const animalLeft = document.getElementById('animal__left');
        const animalCenter = document.getElementById('animal__active');
        animalCenter.innerHTML = animalLeft.innerHTML;

        // LEFT ITEM
        let random = Math.floor(Math.random() * 8);

        const image = document.createElement('img');
        image.classList.add('animal__pet_photo');
        image.src = myJson[random].img;

        const name = document.createElement('h3');
        name.classList.add('animal__pet_name');
        name.innerText = myJson[random].name;

        const btn = document.createElement('button');
        btn.classList.add('animal__pet_btn');
        btn.innerText = 'Learn more';

        //  CENTRAL ITEM
        let random2;
        random === myJson.length - 1 ? random2 = 0 : random2 = random + 1;

        const image2 = document.createElement('img');
        image2.classList.add('animal__pet_photo');
        image2.src = myJson[random2].img;

        const name2 = document.createElement('h3');
        name2.classList.add('animal__pet_name');
        name2.innerText = myJson[random2].name;

        const btn2 = document.createElement('button');
        btn2.classList.add('animal__pet_btn');
        btn2.innerText = 'Learn more';

        // RIGHT ITEM
        let random3;
        random2 === myJson.length - 1 ? random3 = 0 : random3 = random2 + 1;

        const image3 = document.createElement('img');
        image3.classList.add('animal__pet_photo');
        image3.src = myJson[random3].img;

        const name3 = document.createElement('h3');
        name3.classList.add('animal__pet_name');
        name3.innerText = myJson[random3].name;

        const btn3 = document.createElement('button');
        btn3.classList.add('animal__pet_btn');
        btn3.innerText = 'Learn more';

        //  CHANGE ITEMS

        itemLeft[0].innerHTML = '';
        itemLeft[0].appendChild(image);
        itemLeft[0].appendChild(name);
        itemLeft[0].appendChild(btn);

        itemCenter[0].innerHTML = '';
        itemCenter[0].appendChild(image2);
        itemCenter[0].appendChild(name2);
        itemCenter[0].appendChild(btn2);

        itemRight[0].innerHTML = '';
        itemRight[0].appendChild(image3);
        itemRight[0].appendChild(name3);
        itemRight[0].appendChild(btn3);


    } else {
        animalList.classList.remove('right-transition');

        const animalRight = document.getElementById('animal__right');
        const animalCenter = document.getElementById('animal__active');
        animalCenter.innerHTML = animalRight.innerHTML;

        // LEFT ITEM
        let random = Math.floor(Math.random() * 8),
            random2,
            random3;

        const image = document.createElement('img');
        image.classList.add('animal__pet_photo');
        image.src = myJson[random].img;

        const name = document.createElement('h3');
        name.classList.add('animal__pet_name');
        name.innerText = myJson[random].name;

        const btn = document.createElement('button');
        btn.classList.add('animal__pet_btn');
        btn.innerText = 'Learn more';

        //  CENTRAL ITEM
        random === myJson.length - 1 ? random2 = 0 : random2 = random + 1;

        const image2 = document.createElement('img');
        image2.classList.add('animal__pet_photo');
        image2.src = myJson[random2].img;

        const name2 = document.createElement('h3');
        name2.classList.add('animal__pet_name');
        name2.innerText = myJson[random2].name;

        const btn2 = document.createElement('button');
        btn2.classList.add('animal__pet_btn');
        btn2.innerText = 'Learn more';

        // RIGHT ITEM
        random2 === myJson.length - 1 ? random3 = 0 : random3 = random2 + 1;

        const image3 = document.createElement('img');
        image3.classList.add('animal__pet_photo');
        image3.src = myJson[random3].img;

        const name3 = document.createElement('h3');
        name3.classList.add('animal__pet_name');
        name3.innerText = myJson[random3].name;

        const btn3 = document.createElement('button');
        btn3.classList.add('animal__pet_btn');
        btn3.innerText = 'Learn more';

        //  CHANGE ITEMS

        itemLeft[1].innerHTML = '';
        itemLeft[1].appendChild(image);
        itemLeft[1].appendChild(name);
        itemLeft[1].appendChild(btn);

        itemCenter[1].innerHTML = '';
        itemCenter[1].appendChild(image2);
        itemCenter[1].appendChild(name2);
        itemCenter[1].appendChild(btn2);

        itemRight[1].innerHTML = '';
        itemRight[1].appendChild(image3);
        itemRight[1].appendChild(name3);
        itemRight[1].appendChild(btn3);
    }

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
}

const centerLeft = document.getElementById('centerLeft');
const centerCenter = document.getElementById('centerCenter');
const centerRight = document.getElementById('centerRight');
function startCards() {

    // LEFT ITEM

    const image = document.createElement('img');
    image.classList.add('animal__pet_photo');
    image.src = myJson[mainRandom].img;

    const name = document.createElement('h3');
    name.classList.add('animal__pet_name');
    name.innerText = myJson[mainRandom].name;

    const btn = document.createElement('button');
    btn.classList.add('animal__pet_btn');
    btn.innerText = 'Learn more';

    //  CENTRAL ITEM
    let random2;
    mainRandom === myJson.length - 1 ? random2 = 0 : random2 = mainRandom + 1;

    const image2 = document.createElement('img');
    image2.classList.add('animal__pet_photo');
    image2.src = myJson[random2].img;

    const name2 = document.createElement('h3');
    name2.classList.add('animal__pet_name');
    name2.innerText = myJson[random2].name;

    const btn2 = document.createElement('button');
    btn2.classList.add('animal__pet_btn');
    btn2.innerText = 'Learn more';

    // RIGHT ITEM
    let random3;
    random2 === myJson.length - 1 ? random3 = 0 : random3 = random2 + 1;

    const image3 = document.createElement('img');
    image3.classList.add('animal__pet_photo');
    image3.src = myJson[random3].img;

    const name3 = document.createElement('h3');
    name3.classList.add('animal__pet_name');
    name3.innerText = myJson[random3].name;

    const btn3 = document.createElement('button');
    btn3.classList.add('animal__pet_btn');
    btn3.innerText = 'Learn more';

    //  CHANGE ITEMS

    centerLeft.innerHTML = '';
    centerLeft.appendChild(image);
    centerLeft.appendChild(name);
    centerLeft.appendChild(btn);

    centerCenter.innerHTML = '';
    centerCenter.appendChild(image2);
    centerCenter.appendChild(name2);
    centerCenter.appendChild(btn2);

    centerRight.innerHTML = '';
    centerRight.appendChild(image3);
    centerRight.appendChild(name3);
    centerRight.appendChild(btn3);
}
startCards();
animalList.addEventListener('animationend', animationEnd);


if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1280) {
    itemLeft.innerHTML = '';
}

if (document.documentElement.clientWidth < 768) {
    itemLeft.innerHTML = '';
    itemRight.innerHTML = '';
}

// POPUP

const popItem = document.querySelectorAll('.animal__item'),
      popWrapper = document.querySelector('.popup-wrapper'),
      popup = document.querySelector('.popup'),
    popPhoto = document.querySelectorAll('.animal__pet_photo'),
    popTitle = document.querySelectorAll('.animal__pet_name'),
    popBtn = document.querySelectorAll('.animal__pet_btn');


function showPopup() {
    console.log(wrapper)
    console.log(popWrapper)
    wrapper.classList.add('darkness2');
    popWrapper.classList.add('flex');
    document.body.classList.add('overflow2');
}


function hidePopup(event) {
    let result;

    for (let i = 0; i < 9; i++) {
        if (event.target !== popup && event.target !== popPhoto[i] && event.target !== popTitle[i] && event.target !== popBtn[i] && event.target !== popItem[i]) {
            result = true;
        } else return;
    }

    if (result) {
        wrapper.classList.remove('darkness2');
        popWrapper.classList.remove('flex');
        document.body.classList.remove('overflow2');
    }
}



document.addEventListener('click', hidePopup);


for (let i = 0; i < 9; i++) {
    popItem[i].addEventListener('click', showPopup);
}




