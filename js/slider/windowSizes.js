export function displayWindowSize(pagesNav, setWidth) {
  if (!pagesNav.nextPage) return;
  setWidth(window.innerWidth);
  changeWidth(window.innerWidth, pagesNav);
}


function changeWidth(width, pagesNav) {
  if (width < 768 && +pagesNav.currentPage.innerText < 16 || width < 1280 && +pagesNav.currentPage.innerText < 8) {
    pagesNav.nextPage.classList.add('animal__nav_active');
    pagesNav.lastPage.classList.add('animal__nav_active');
  } else if (width < 1280 && width >= 768 && +pagesNav.currentPage.innerText >= 8) {
    pagesNav.nextPage.classList.add('animal__nav_deactivated');
    pagesNav.lastPage.classList.add('animal__nav_deactivated');
    pagesNav.currentPage.innerText = '8';
  } else if (width >= 1280 && +pagesNav.currentPage.innerText >= 6) {
    pagesNav.nextPage.classList.add('animal__nav_deactivated');
    pagesNav.lastPage.classList.add('animal__nav_deactivated');
    pagesNav.currentPage.innerText = '6';
  }
}
