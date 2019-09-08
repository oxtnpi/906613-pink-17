var body = document.querySelector('body');
var menuMain = document.querySelector('.main-menu');
var menuToggle = document.querySelector('.main-menu__toggle');

body.classList.remove('no-js');
menuMain.classList.remove('main-menu--nojs');

menuToggle.addEventListener('click', function() {
  if (menuMain.classList.contains('main-menu--closed')) {
    menuMain.classList.remove('main-menu--closed');
    menuMain.classList.add('main-menu--opened');
  } else {
    menuMain.classList.add('main-menu--closed');
    menuMain.classList.remove('main-menu--opened');
  }
});
