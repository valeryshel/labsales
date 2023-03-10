console.log("hello");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    // },
    //  when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
