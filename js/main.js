const swiper = new Swiper('.main-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
     375:  {
      slidesPerView: 1,
      
    },
      991: {
      slidesPerView: 2
    },

    
  },
  navigation: {
    nextEl: '.main-slider__arrow',
  },


});