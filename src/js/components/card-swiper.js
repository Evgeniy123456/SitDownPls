
if(document.querySelector('.mySwiper') == null) {
  console.error("Нет такого селектора");
} else {

  //нижний слайдер
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      300: {               // от 576px до 300px
        // slidesPerGroup: 1,
        slidesPerView: 3,
      },

      577: {              // от 768px до 576px
        slidesPerView: 4,
        // direction: 'vertical',
      },
      769: {              // от 1024px до 769px
        slidesPerGroup: 3,
      },
      1025: {            // от 3000px до 1025px
        slidesPerGroup: 4,
      }
    },

  });
  //модальное окно (нижний слайдер)
  var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      300: {               // от 576px до 300px
        // slidesPerGroup: 1,
        slidesPerView: 3,
      },

      577: {              // от 768px до 576px
        slidesPerView: 4,
        // direction: 'vertical',
      },
      769: {              // от 1024px до 769px
        slidesPerGroup: 3,
      },
      1025: {            // от 3000px до 1025px
        slidesPerGroup: 4,
      }
    },

  });

  //верхний слайдер
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });


}
