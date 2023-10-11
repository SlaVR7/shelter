import {PetsCard} from './slider.js';
import myJson from '../../pets.json' assert {type: 'json'};

export function startCards(mainRandom) {
  const centerLeft = document.getElementById('centerLeft');
  const centerCenter = document.getElementById('centerCenter');
  const centerRight = document.getElementById('centerRight');

  // LEFT ITEM
  const leftPet = new PetsCard(mainRandom);

  //  CENTRAL ITEM
  let random2;
  mainRandom === myJson.length - 1 ? random2 = 0 : random2 = mainRandom + 1;

  const centralPet = new PetsCard(random2);

  // RIGHT ITEM
  let random3;
  random2 === myJson.length - 1 ? random3 = 0 : random3 = random2 + 1;

  const rightPet = new PetsCard(random3);

  //  CHANGE ITEMS

  [centerLeft, centerCenter, centerRight].forEach(item => item.innerHTML = '');

  centerLeft.append(leftPet.image, leftPet.name, leftPet.btn);
  centerCenter.append(centralPet.image, centralPet.name, centralPet.btn);
  centerRight.append(rightPet.image, rightPet.name, rightPet.btn);
}
