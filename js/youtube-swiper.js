var swiper = new Swiper('.youtube-wrap', {
  loop: true,
  navigation: {
    // < > 버튼
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  speee: 5000,
  slidesPerView: 4.5,
  // 사이 간격
  spaceBetween: 20,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    1021: {
      slidesPerView: 4.5,
      // spaceBetween: 20,
    },
  },
});
