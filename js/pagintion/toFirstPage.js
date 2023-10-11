import {createElements} from './createElements.js';

export function toFirstPage(pagesNav, randArr, arr, pets) {
  if ( +pagesNav.currentPage.innerText > 1) {
    createElements(randArr, arr, pets);
  }

  pagesNav.currentPage.innerHTML = '1';
  pagesNav.firstPage.classList.remove('animal__nav_active');
  pagesNav.firstPage.classList.add('animal__nav_deactivate');
  pagesNav.prevPage.classList.remove('animal__nav_active');
  pagesNav.prevPage.classList.add('animal__nav_deactivate');
  pagesNav.nextPage.classList.remove('animal__nav_deactivate');
  pagesNav.nextPage.classList.add('animal__nav_active');
  pagesNav.lastPage.classList.remove('animal__nav_deactivate');
  pagesNav.lastPage.classList.add('animal__nav_active');
}
