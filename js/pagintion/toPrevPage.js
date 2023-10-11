import {toFirstPage} from './toFirstPage.js';
import {createElements} from './createElements.js';

export function toPrevPage(pagesNav, randArr, arr, pets) {
  if (pagesNav.prevPage.classList.contains('animal__nav_active')) {
    createElements(randArr, arr, pets)
  }

  if (+pagesNav.currentPage.innerText <= 2) {
    toFirstPage(pagesNav, randArr, arr, pets);
  } else {
    pagesNav.currentPage.innerText = +pagesNav.currentPage.innerText - 1;
    pagesNav.nextPage.classList.remove('animal__nav_deactivate');
    pagesNav.nextPage.classList.add('animal__nav_active');
    pagesNav.lastPage.classList.remove('animal__nav_deactivate');
    pagesNav.lastPage.classList.add('animal__nav_active');
  }
}
