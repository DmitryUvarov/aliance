// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItems.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                spanOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        }
    });
}

if (document.querySelector('.slider-rooms__body')) {
    new Swiper('.slider-rooms__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-rooms .slider-arrow_next',
            prevEl: '.slider-rooms .slider-arrow_prev',
        }
    });
}

if (document.querySelector('.slider-tips__body')) {
    new Swiper('.slider-tips__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 3,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        watchOverflow: true,
        // Dotts
        pagination: {
            el: '.slider-tips__dotts',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-tips .slider-arrow_next',
            prevEl: '.slider-tips .slider-arrow_prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            },
        }
    });
}
if (document.querySelector('.main__slider')) {
    var swiper = new Swiper(".main__slider", {
        observer: true,
        observerParents: true,

        watchOverflow: true,
        speed: 500,
        navigation: {
            nextEl: ".main__slider-control .swiper-button-next",
            prevEl: ".main__slider-control .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            850: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },

        }
    });
}


if (document.querySelector('.sec1__slider')) {
    var swiper = new Swiper(".sec1__slider", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".sec1__slider-control .swiper-button-next",
            prevEl: ".sec1__slider-control .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.18,
            },
            480: {
                slidesPerView: 1.5,
            },
            640: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 4,
            }
        }
    });
}


if (document.querySelector('.slider-sec6')) {
    var swiper = new Swiper(".slider-sec6", {
        observer: true,
        observerParents: true,

        watchOverflow: true,
        speed: 800,
        navigation: {
            nextEl: ".slider-sec6 .button-next",
            prevEl: ".slider-sec6 .button-prev",
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 1.3,
                spaceBetween: 30,
            },
            1150: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
}