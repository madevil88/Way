var navMain = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.page-header__main-nav-toggle');

navMain.classList.remove('page-header__main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('page-header__main-nav--closed')
});
