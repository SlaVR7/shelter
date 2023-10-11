import {animalList, btnLeft, btnRight, itemCenter, itemLeft, itemRight} from '../constants.js';
import {createElement} from './сreateElement.js';
import myJson from '../../pets.json' assert {type: 'json'};

export function moveRight() {
  animalList.classList.add('right-transition');
  btnRight.removeEventListener('click', moveRight);
  btnLeft.removeEventListener('click', moveLeft);
}

export function moveLeft() {
  animalList.classList.add('left-transition');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
}

export class PetsCard {
  constructor(randomNumber) {
    this.image = createElement('img', 'animal__pet_photo', undefined, myJson[randomNumber].img);
    this.name = createElement('h3', 'animal__pet_name', myJson[randomNumber].name);
    this.btn = createElement('button', 'animal__pet_btn', 'Learn more');
  }
}

export function clearPetCards(index) {
  itemLeft[index].innerHTML = '';
  itemCenter[index].innerHTML = '';
  itemRight[index].innerHTML = '';
}

export function appendCards(pets, index) {
  itemLeft[index].append(pets.leftPet.image, pets.leftPet.name, pets.leftPet.btn);
  itemCenter[index].append(pets.centralPet.image, pets.centralPet.name, pets.centralPet.btn);
  itemRight[index].append(pets.rightPet.image, pets.rightPet.name, pets.rightPet.btn);
}
