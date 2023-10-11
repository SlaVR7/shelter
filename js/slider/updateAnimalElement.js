import {handleShowPopupListener} from '../main.js';
import {appendCards, clearPetCards} from './slider.js';

export function updateAnimalElement(animalId, petIndex, pets) {
  const animalElement = document.getElementById(animalId);
  const animalCenter = document.getElementById('animal__active');
  animalCenter.innerHTML = animalElement.innerHTML;

  handleShowPopupListener();
  clearPetCards(petIndex);
  appendCards(pets, petIndex);
}
