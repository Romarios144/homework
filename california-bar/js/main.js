// Initialize Swiper 

new Swiper('.gallery__swiper', {

  spaceBetween: 30,
  slidesPerView: 3,


  navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
  },

  // breakpoints: {
  //     601: {
  //         slidesPerView: 3,
  //     },
  //     801: {
  //         spaceBetween: 32,
  //     },
  //     1101: {
  //         slidesPerView: 4,
  //     }
  // }
});
