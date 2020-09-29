const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },
});
const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
})

document.addEventListener('keyup', e => {
    if (e.keyCode === 37) {
        hotelSlider.slidePrev();
    } else if (e.keyCode === 39) {
        hotelSlider.slideNext();
    }
});

// Открытие меню
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible');
});