// Connection Selector

const element = document.querySelector(".choices")

const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  classNames: {
    containerOuter: 'choices header_choices',
  },
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
    center: [48.87, 2.35],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });

  var myPlacemark = new ymaps.Placemark([48.87, 2.35], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/Subtract.png',
    iconImageSize: [28, 40],
  });

  myMap.geoObjects.add(myPlacemark);
};

// SimpleBar

document.querySelectorAll(".scroll__text").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
})

// Form

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7-(999) 999-99-99");

im.mask(selector);

new JustValidate('.form', {
  colorWrong: '#FF5C00',
  errorFieldCssClass: 'is-invalid',

  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30
    },
    phone: {
      required: true,
      function: (name, value) => {
        const tel = selector.inputmusk.unmaskedvalue()
        return Number(tel) && phone.length === 10;
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Вы не ввели имя",
    email: {
      required: "Вы не ввели e-mail"
    },
    phone: {
      required: "Вы не ввели телефон",
      function: "Не достаточное количество символов"
    }
  }
});
