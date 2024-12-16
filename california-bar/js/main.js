// Initialize Swiper 

new Swiper('.gallery__swiper', {

  spaceBetween: 15,
  slidesPerView: 2,


  navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
  },

  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }
});
