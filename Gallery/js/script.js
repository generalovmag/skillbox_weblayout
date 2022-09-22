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

// Swiper Events

const swiperEvents = new Swiper('.events__slider', {
  slidesPerView: 1,
  loop: true,

  // навигация
  navigation: {
    nextEl: '.events__slider .swiper-button-next',
    prevEl: '.events__slider .swiper-button-prev',
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