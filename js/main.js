const menuBtn = document.querySelector('.menu__btn'),
  menuMobile = document.querySelector('.header__menu-list');


menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');

});

const swiperOne = new Swiper('.feedback__slider', {


  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

});

const swiperTwo = new Swiper('.sertificates__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },


});



