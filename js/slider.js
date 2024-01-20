// PORTFOLIO SLIDER
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 32,
    slidesPerView: 1,
    navigation: {
      nextEl: ".next--arrow",
      prevEl: ".prev--arrow",
    },
    breakpoints: {
      601: {
          slidesPerView: 1,
      },
      801: {
        slidesPerView: 1,
      },
      1101: {
          slidesPerView: 2,
      }
    }
  });