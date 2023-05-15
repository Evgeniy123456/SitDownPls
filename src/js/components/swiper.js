if(document.querySelector('.swiper') == null) {
  console.error("Нет такого селектора");
} else {
  // hero swiper //
  const swiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // offers swiper //
  const offersSwiper = new Swiper('.offers__swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      300: {               // от 576px до 300px
        slidesPerGroup: 1,
        slidesPerView: 1,
      },

      577: {              // от 768px до 576px
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 32
      },
      769: {              // от 1024px до 769px
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 32
      },
      1025: {            // от 3000px до 1025px
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        spaceBetween: 32
      }
    },

    navigation: {
      nextEl: '.offers__swiper-button-next',
      prevEl: '.offers__swiper-button-prev',
    },

  });

  // useful swiper
  const usefulSwiper = new Swiper('.useful__swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
      300: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },

      576: {              //до 576
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 32
      },
      769: {              //до 769
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 32
      },
      1025: {            //до 1025
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 32
      }
    },

    navigation: {
      nextEl: '.useful__swiper-button-next',
      prevEl: '.useful__swiper-button-prev',
    },
  })
}
