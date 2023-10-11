import {createElements} from './createElements.js';

export function toLastPage(pagesNav, width, randArr, arr, pets) {
  if (pagesNav.lastPage.classList.contains('animal__nav_active')) {
    createElements(randArr, arr, pets)
  }

  if (width >= 1280) {
    pagesNav.currentPage.innerText = '6';
  } else if (width >= 768 && width < 1280) {
    pagesNav.currentPage.innerText = '8';
  } else {
    pagesNav.currentPage.innerText = '16';
  }
  pagesNav.firstPage.classList.add('animal__nav_active');
  pagesNav.firstPage.classList.remove('animal__nav_deactivate');
  pagesNav.prevPage.classList.add('animal__nav_active');
  pagesNav.prevPage.classList.remove('animal__nav_deactivate');
  pagesNav.nextPage.classList.add('animal__nav_deactivate');
  pagesNav.nextPage.classList.remove('animal__nav_active');
  pagesNav.lastPage.classList.add('animal__nav_deactivate');
  pagesNav.lastPage.classList.remove('animal__nav_active');
}
