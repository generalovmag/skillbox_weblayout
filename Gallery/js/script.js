// SimpleBar

document.querySelectorAll(".art-styles__list").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})



// Choises

const gallerySelect = () => {
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

gallerySelect();

// Swiper Gallery

const swiper = new Swiper('.gallery__slider', {
  slidesPerView: 1,
  loop: true,

  // навигация
  navigation: {
    nextEl: '.gallery__slider .swiper-button-next',
    prevEl: '.gallery__slider .swiper-button-prev',
  },
});

// Popup Gallery... не работает

const popUp = document.querySelector('.popup');
const popUpItem = document.querySelector('.popup__item-2');
const openPopUp = document.querySelector('.gallery__popup-link');
const closePopUp = document.querySelector('.popup__item-close');

openPopUp.addEventListener('click', function (evt){
  evt.preventDefault();
  popUp.classList.add('popup-active');
  popUpItem.classList.add('popup-item-active');

});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('popup-active');
  popUpItem.classList.remove('popup-active');
});



// Переменные слайдера "Галерея"
let tabsBtn = document.querySelectorAll('.catalog__right-link');
let tabsItem = document.querySelectorAll('.catalog__content');


tabsBtn.forEach(function(element) {
  element.addEventListener('click', 
    function(e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn) {
        btn.classList.remove('catalog__right-link-active')
      });
      e.currentTarget.classList.add('catalog__right-link-active');

      tabsItem.forEach(
        function(element) {
          element.classList.remove('catalog__content-active');
      });
      document.querySelector('.catalog__content[data-target=' + path +']').classList.add('catalog__content-active');
    });
});

// Swiper Hero

const swiperHero = new Swiper('.hero__swiper-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

// Swiper Events

const swiperEvents = new Swiper('.events__slider', {
  slidesPerView: 1,
  loop: true,

  // навигация
  navigation: {
    nextEl: '.events .container .swiper-button-next',
  },
});

// Swiper Projects

const swiperProjects = new Swiper('.projects__slider', {
  slidesPerView: 1,
  loop: true,

  // навигация
  navigation: {
    nextEl: '.projects__slider .swiper-button-next',
    prevEl: '.projects__slider .swiper-button-prev',
  },
});

// Akkordion

$(".accordion").accordion({
  heightStyle: "content",
  active: 0
  });
  
// Yandex map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("yndex-map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.60],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([55.76, 37.60], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/1920px/map-icon.png',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
};