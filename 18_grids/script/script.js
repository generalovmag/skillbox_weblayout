let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav__burger');
let menuLink = document.querySelectorAll('.nav__item-link');

burger.addEventListener("click",

  function () {
    burger.classList.toggle('header__burger--active');

    nav.classList.toggle('nav__burger--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLink.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    nav.classList.remove('nav__burger--active');

    document.body.classList.remove('stop-scroll');
  })
})