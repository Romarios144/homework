// Initialize Swiper 

new Swiper('.gallery__swiper', {

  spaceBetween: 15,
  slidesPerView: 1,


  navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
  },

  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});
