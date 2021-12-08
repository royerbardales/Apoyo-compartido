let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        380: {
            slidesPerView: 2,
        }
    }

});
//----
var swiper10 = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
//---
let swiper2 = new Swiper(".container__portafolio", {
    cssMode: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {

        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        380: {
            slidesPerView: 2,
        }
    }

});

