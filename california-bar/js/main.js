// Initialize Swiper 


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});