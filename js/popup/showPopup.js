import {wrapper} from '../constants.js';
import {definePopupProps} from './definePopupProps.js';
import myJson from '../../pets.json' assert {type: 'json'};

export function showPopup(petCard) {
  const popWrapper = document.querySelector('.popup-wrapper');
  const targetPetName = petCard.querySelector('.animal__pet_name').innerText;
  const petData = myJson.find(obj => obj.name === targetPetName);

  wrapper.classList.add('darkness2');
  popWrapper.classList.add('flex');
  document.body.classList.add('overflow2');

  definePopupProps(petData);
}
