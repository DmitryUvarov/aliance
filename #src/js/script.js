//@@include('spoller.js');
@@include('sliders.js');
@@include('jquery.maskedinput.js');
//@@include('dynamic_adapt.js'); // Динамический адаптив


$("#phone").mask("+380 (99) 999-99-99");


// Функция для проверки на мобильные устрайства добавляет класс _touch к тегу html
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// \\\ Функция для проверки на мобильные устрайства добавляет класс _touch к тегу html

// Функция для проверки поддерживает ли браузер формат изображений .webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//  \\\ Функция для проверки поддерживает ли браузер формат изображений .webp



// BURGER

const iconMenu = document.querySelector('.icon-menu');
let body = document.querySelector('body');
if (iconMenu) {
    const menuBody = document.querySelector('header.header nav');
    iconMenu.addEventListener("click", function (e) {
        let targetElement = e.target;
        document.body.classList.toggle('_lock');
        document.body.classList.toggle('burger-active');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


// BURGER           //////////

// HEADER

const headerElement = document.querySelector('.header');
if (headerElement) {
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    };
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);



    let headerWrapper = document.querySelector('.header__wrapper');
    let bodyWidth = document.body.clientWidth;
    headerWrapper.style.width = bodyWidth + "px";
    window.addEventListener('resize', function (e) {
        let bodyWidth = document.body.clientWidth;
        headerWrapper.style.width = bodyWidth + "px";
    });

}


// скрипт добавит класс _active к label если инпут после ввода пустой
let forms = document.forms;
if (forms) {
    for (const form of forms) {
        const inputsForm = form.querySelectorAll('input');
        for (const input of inputsForm) {
            input.addEventListener('click', (e) => {
                const label = input.closest('label');
                label.classList.add('_active');

                input.onblur = function () {
                    if (input.value.length <= 0) {
                        label.classList.remove('_active');
                    }
                };
            });
        }
    }
}
///////////////////////////////////////////////////////////////////

