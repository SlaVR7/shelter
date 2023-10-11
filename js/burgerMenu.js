import {burgerBtn, burgerLines, burgerMenu, wrapper} from './constants.js';

export function toggleMenu() {
  burgerMenu.classList.toggle('transform');
  burgerBtn.classList.toggle('rotate');
  document.body.classList.toggle('overflow');
  wrapper.classList.toggle('darkness');
}

function isBurgerMenuElement(element) {
  return (
    element === burgerMenu ||
    element === burgerBtn ||
    element === burgerLines[0] ||
    element === burgerLines[1] ||
    element === burgerLines[2]
  );
}

export function hideMenu(event) {
  if (!isBurgerMenuElement(event.target)) {
    burgerMenu.classList.remove('transform');
    burgerBtn.classList.remove('rotate');
    document.body.classList.remove('overflow');
    wrapper.classList.remove('darkness');
  }
}
