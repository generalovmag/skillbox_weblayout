// Connection Selector

const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnable: false
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

// Form

var selector = document.getElementById("input[type='tel']");
var im = new Inputmask("+7-(999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function(name, value) {
        const phone = selector.inputmusk.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  }
});
