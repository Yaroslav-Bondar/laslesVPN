const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    autoHeight: true,
    breakpoints : {
      0: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      667: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      870: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
    },    
    // If we need pagination
    pagination: {
      el: '.customer__pagination',
      bulletClass: 'customer__pagination-bullet',
      bulletElement: 'div',
      bulletActiveClass: 'customer__pagination-bullet_active',
      clickable : true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });