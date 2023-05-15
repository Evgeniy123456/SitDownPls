if(document.querySelector('.products__swiper') == null) {
  console.error("Нет такого селектора");
} else {

  //products swiper
  const usefulSwiper = new Swiper('.products__swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      300: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 16
      },

      576: {              //до 576
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 32
      },
      769: {              //до 769
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 32
      },
      1025: {            //до 1025
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 32
      }
    },

    navigation: {
      nextEl: '.products__swiper-button-next',
      prevEl: '.products__swiper-button-prev',
    },

  })
};
