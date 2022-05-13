// Переменные бургер-меню
let burger = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-list');
let menuLinks = menu.querySelectorAll('.header__link');

// Переменные слайдера "Как мы рабоатем"
let tabsBtn = document.querySelectorAll('.how-work__step');
let tabsItem = document.querySelectorAll('.how-work__consultation');


//Переменные поиск
let searchBtnActive = document.querySelector('.header__search');
let searchContainer = document.querySelector('.header__search-container-active');
let searchBtnClose = document.querySelector('.header__search-close');


// Клик по бургеру
burger.addEventListener('click',

function() {

  burger.classList.toggle('header__burger-btn-active');

  menu.classList.toggle('header__burger-list-active');

  document.body.classList.toggle('stop-scroll');
});

// Удаление меню
menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('header__burger-btn-active');

    menu.classList.remove('header__burger-list-active');

    document.body.classList.remove('stop-scroll');
  });
});

// Слайдер "Как мы работаем"
tabsBtn.forEach(function(element) {
  element.addEventListener('click', 
    function(e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn) {
        btn.classList.remove('how-work__step-active')
      });
      e.currentTarget.classList.add('how-work__step-active');

      tabsItem.forEach(
        function(element) {
          element.classList.remove('how-work__consultation-active');
      });
      document.querySelector('[data-target=' + path +']').classList.add('how-work__consultation-active');
    });
});

// Свайпер

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true,
  },
  // автосмена
  autoplay: {
    delay: 5000,
  },
});

// Аккордеон

new Accordion('.accordion-container');

// Поиск

searchBtnActive.addEventListener('click', 
  function() {
    searchContainer.classList.toggle('header__search--active');
});

searchBtnClose.addEventListener('click', 
  function(){
    searchContainer.classList.remove('header__search--active');
  });