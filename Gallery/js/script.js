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


// Akkordion

$(".accordion").accordion({
  heightStyle: "content",
  active: 0
  });
  