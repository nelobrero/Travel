const swiper = new Swiper(".coverflow-swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",     // use the CSS width of each slide
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

const flatSlider = new Swiper(".flat-slider", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  breakpoints: {
    0:   { slidesPerView: 1.3 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  }
});


