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

    // Инициализация слайдера в блоке packages
    const packagesSlider = new Swiper('.packages-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.packages-slider__button--next',
            prevEl: '.packages-slider__button--prev',
        },
    });

    // Инициализация слайдера в блоке reviews
    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
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
            document.body.classList.add('modal--open');
        });
    });

    closeModalButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('modal--visible');
        document.body.classList.remove('modal--open');
    });

    modal.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('.modal__overlay')) {
            modal.classList.remove('modal--visible');
            document.body.classList.remove('modal--open');
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
            document.body.classList.remove('modal--open');
        }
    });

    // Обработка формы
    $('.form').each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "The name must be at least two letters"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "We need your phone to contact you",
                }
            }
        });
    });
    $('.form-email').validate({
        errorClass: "email-invalid",
        errorElement: "em",
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        }
    });

    $('.phone-number').each(function () {
        $(this).mask('+7 (000) 000-00-00');
    });

});