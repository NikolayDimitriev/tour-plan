document.addEventListener('DOMContentLoaded', function () {
    const hotelSlider = new Swiper('.hotel-slider', {
        loop: true,
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
    });
    const packagesSlider = new Swiper('.packages-slider', {
        loop: true,
        navigation: {
            nextEl: '.packages-slider__button--next',
            prevEl: '.packages-slider__button--prev',
        },
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        loop: true,
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
    });
    document.body.addEventListener('click', function (e) {
        const target = e.target;
        if (target.closest('#map')) {
            const map = target.closest('#map');
            map.children[0].remove();
            map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1353737578034!2d98.29867252922972!3d7.838252399647018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1600872554721!5m2!1sru!2sru"style="border:0; width:100%; height: 100%;"allowfullscreen=""aria-hidden="false"tabindex="0"></iframe>`
        }
    });
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function () {
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible')
    });
    const modalButton = document.querySelectorAll('.modal-btn'),
        modal = document.querySelector('.modal'),
        closeModalButton = modal.querySelector('.modal__close');
    modalButton.forEach(function (item) {
        item.addEventListener('click', function () {
            modal.classList.add('modal--visible');
            document.body.classList.add('modal--open')
        })
    });
    closeModalButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('modal--visible');
        document.body.classList.remove('modal--open')
    });
    modal.addEventListener('click', function (e) {
        const target = e.target;
        if (target.closest('.modal__overlay')) {
            modal.classList.remove('modal--visible');
            document.body.classList.remove('modal--open')
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 37) {
            hotelSlider.slidePrev()
        } else if (e.keyCode === 39) {
            hotelSlider.slideNext()
        } else if (e.keyCode === 27) {
            modal.classList.remove('modal--visible');
            document.body.classList.remove('modal--open')
        }
    });
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
        })
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
        $(this).mask('+7 (000) 000-00-00')
    });
    AOS.init()
});