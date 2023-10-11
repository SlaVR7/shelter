import {createElements} from './createElements.js';
import {toLastPage} from './toLastPage.js';

export function toNextPage(pagesNav, width, randArr, arr, pets) {
  if (pagesNav.nextPage.classList.contains('animal__nav_active')) {
    createElements(randArr, arr, pets);
  }
  const currentPageValue = pagesNav.currentPage.innerText;

  if (currentPageValue === '1') {
    pagesNav.currentPage.innerText = '2';

    pagesNav.firstPage.classList.add('animal__nav_active');
    pagesNav.firstPage.classList.remove('animal__nav_deactivate');
    pagesNav.prevPage.classList.add('animal__nav_active');
    pagesNav.prevPage.classList.remove('animal__nav_deactivate');

  } else if (width >= 1280 && +currentPageValue >= 5 || width >= 768 && width < 1280 && +currentPageValue >= 7 || width < 768 && +currentPageValue >= 15) {
    toLastPage(pagesNav, width, randArr, arr, pets);
  } else {
    pagesNav.currentPage.innerText = +currentPageValue + 1;

    pagesNav.firstPage.classList.add('animal__nav_active');
    pagesNav.firstPage.classList.remove('animal__nav_deactivate');
    pagesNav.prevPage.classList.add('animal__nav_active');
    pagesNav.prevPage.classList.remove('animal__nav_deactivate');
  }
}
