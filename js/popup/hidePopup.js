import {wrapper} from '../constants.js';

export function hidePopup(event) {
  const popWrapper = document.querySelector('.popup-wrapper');
  const popItem = document.querySelectorAll('.animal__item');
  const popup = document.querySelector('.popup');
  const popPhoto = document.querySelectorAll('.animal__pet_photo');
  const popTitle = document.querySelectorAll('.animal__pet_name');
  const popBtn = document.querySelectorAll('.animal__pet_btn');
  const bigImgContainer = document.querySelector('.popup__image');
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

    bigImgContainer.innerHTML = '';
  }
}
