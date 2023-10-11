import {moveLeft, moveRight, PetsCard} from './slider.js';
import myJson from '../../pets.json' assert {type: 'json'};
import {animalList, btnLeft, btnRight} from '../constants.js';
import {updateAnimalElement} from './updateAnimalElement.js';

export function animationEnd(event) {
  let random = Math.floor(Math.random() * 8),
    random2,
    random3;

  random === myJson.length - 1 ? random2 = 0 : random2 = random + 1;
  random2 === myJson.length - 1 ? random3 = 0 : random3 = random2 + 1;

  const leftPet = new PetsCard(random);
  const centralPet = new PetsCard(random2);
  const rightPet = new PetsCard(random3);

  const pets = {leftPet, centralPet, rightPet};

  if (event.animationName && event.animationName === 'move-left') {
    animalList.classList.remove('left-transition');
    updateAnimalElement('animal__left', 0, pets);
  } else {
    animalList.classList.remove('right-transition');
    updateAnimalElement('animal__right', 1, pets);
  }

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
}
