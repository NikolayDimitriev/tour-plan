document.addEventListener('DOMContentLoaded', function () {

    // Инициализация слайдера в блоке hotel
    const hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
    });

    // Инициализация слайдера в блоке reviews
    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        autoHeight: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
    });

    // Открытие меню
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function () {
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible');
    });

    // Открытие модального окна
    const modalButton = document.querySelectorAll('.modal-btn'),
        modal = document.querySelector('.modal'),
        closeModalButton = modal.querySelector('.modal__close');

    modalButton.forEach(function (item) {
        item.addEventListener('click', function () {
            modal.classList.add('modal--visible');
        });
    });

    closeModalButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('modal--visible');
    });

    modal.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('.modal__overlay')) {
            modal.classList.remove('modal--visible');
        }
    });

    // Отлов события нажатия на кнопки, для переключения слайдера и закрытия модального окна по кнопке Esc
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 37) {
            hotelSlider.slidePrev();
        } else if (e.keyCode === 39) {
            hotelSlider.slideNext();
        } else if (e.keyCode === 27) {
            modal.classList.remove('modal--visible');
        }
    });

});