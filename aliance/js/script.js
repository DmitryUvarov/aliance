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
};
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var ua = navigator.userAgent,
		iPhone = /iphone/i.test(ua),
		chrome = /chrome/i.test(ua),
		android = /android/i.test(ua),
		caretTimeoutId;

	$.mask = {
		//Predefined character definitions
		definitions: {
			'9': "[0-9]",
			'a': "[A-Za-z]",
			'*': "[A-Za-z0-9]"
		},
		autoclear: true,
		dataName: "rawMaskFn",
		placeholder: '_'
	};

	$.fn.extend({
		//Helper Function for Caret positioning
		caret: function (begin, end) {
			var range;

			if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
				return;
			}

			if (typeof begin == 'number') {
				end = (typeof end === 'number') ? end : begin;
				return this.each(function () {
					if (this.setSelectionRange) {
						this.setSelectionRange(begin, end);
					} else if (this.createTextRange) {
						range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if (this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return { begin: begin, end: end };
			}
		},
		unmask: function () {
			return this.trigger("unmask");
		},
		mask: function (mask, settings) {
			var input,
				defs,
				tests,
				partialPosition,
				firstNonMaskPos,
				lastRequiredNonMaskPos,
				len,
				oldVal;

			if (!mask && this.length > 0) {
				input = $(this[0]);
				var fn = input.data($.mask.dataName)
				return fn ? fn() : undefined;
			}

			settings = $.extend({
				autoclear: $.mask.autoclear,
				placeholder: $.mask.placeholder, // Load default placeholder
				completed: null
			}, settings);


			defs = $.mask.definitions;
			tests = [];
			partialPosition = len = mask.length;
			firstNonMaskPos = null;

			mask = String(mask);

			$.each(mask.split(""), function (i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(new RegExp(defs[c]));
					if (firstNonMaskPos === null) {
						firstNonMaskPos = tests.length - 1;
					}
					if (i < partialPosition) {
						lastRequiredNonMaskPos = tests.length - 1;
					}
				} else {
					tests.push(null);
				}
			});

			return this.trigger("unmask").each(function () {
				var input = $(this),
					buffer = $.map(
						mask.split(""),
						function (c, i) {
							if (c != '?') {
								return defs[c] ? getPlaceholder(i) : c;
							}
						}),
					defaultBuffer = buffer.join(''),
					focusText = input.val();

				function tryFireCompleted() {
					if (!settings.completed) {
						return;
					}

					for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
						if (tests[i] && buffer[i] === getPlaceholder(i)) {
							return;
						}
					}
					settings.completed.call(input);
				}

				function getPlaceholder(i) {
					if (i < settings.placeholder.length)
						return settings.placeholder.charAt(i);
					return settings.placeholder.charAt(0);
				}

				function seekNext(pos) {
					while (++pos < len && !tests[pos]);
					return pos;
				}

				function seekPrev(pos) {
					while (--pos >= 0 && !tests[pos]);
					return pos;
				}

				function shiftL(begin, end) {
					var i,
						j;

					if (begin < 0) {
						return;
					}

					for (i = begin, j = seekNext(end); i < len; i++) {
						if (tests[i]) {
							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
								buffer[j] = getPlaceholder(j);
							} else {
								break;
							}

							j = seekNext(j);
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, begin));
				}

				function shiftR(pos) {
					var i,
						c,
						j,
						t;

					for (i = pos, c = getPlaceholder(pos); i < len; i++) {
						if (tests[i]) {
							j = seekNext(i);
							t = buffer[i];
							buffer[i] = c;
							if (j < len && tests[j].test(t)) {
								c = t;
							} else {
								break;
							}
						}
					}
				}

				function androidInputEvent(e) {
					var curVal = input.val();
					var pos = input.caret();
					if (oldVal && oldVal.length && oldVal.length > curVal.length) {
						// a deletion or backspace happened
						checkVal(true);
						while (pos.begin > 0 && !tests[pos.begin - 1])
							pos.begin--;
						if (pos.begin === 0) {
							while (pos.begin < firstNonMaskPos && !tests[pos.begin])
								pos.begin++;
						}
						input.caret(pos.begin, pos.begin);
					} else {
						var pos2 = checkVal(true);
						var lastEnteredValue = curVal.charAt(pos.begin);
						if (pos.begin < len) {
							if (!tests[pos.begin]) {
								pos.begin++;
								if (tests[pos.begin].test(lastEnteredValue)) {
									pos.begin++;
								}
							} else {
								if (tests[pos.begin].test(lastEnteredValue)) {
									pos.begin++;
								}
							}
						}
						input.caret(pos.begin, pos.begin);
					}
					tryFireCompleted();
				}


				function blurEvent(e) {
					checkVal();

					if (input.val() != focusText)
						input.change();
				}

				function keydownEvent(e) {
					if (input.prop("readonly")) {
						return;
					}

					var k = e.which || e.keyCode,
						pos,
						begin,
						end;
					oldVal = input.val();
					//backspace, delete, and escape get special treatment
					if (k === 8 || k === 46 || (iPhone && k === 127)) {
						pos = input.caret();
						begin = pos.begin;
						end = pos.end;

						if (end - begin === 0) {
							begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
							end = k === 46 ? seekNext(end) : end;
						}
						clearBuffer(begin, end);
						shiftL(begin, end - 1);

						e.preventDefault();
					} else if (k === 13) { // enter
						blurEvent.call(this, e);
					} else if (k === 27) { // escape
						input.val(focusText);
						input.caret(0, checkVal());
						e.preventDefault();
					}
				}

				function keypressEvent(e) {
					if (input.prop("readonly")) {
						return;
					}

					var k = e.which || e.keyCode,
						pos = input.caret(),
						p,
						c,
						next;

					if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
						return;
					} else if (k && k !== 13) {
						if (pos.end - pos.begin !== 0) {
							clearBuffer(pos.begin, pos.end);
							shiftL(pos.begin, pos.end - 1);
						}

						p = seekNext(pos.begin - 1);
						if (p < len) {
							c = String.fromCharCode(k);
							if (tests[p].test(c)) {
								shiftR(p);

								buffer[p] = c;
								writeBuffer();
								next = seekNext(p);

								if (android) {
									//Path for CSP Violation on FireFox OS 1.1
									var proxy = function () {
										$.proxy($.fn.caret, input, next)();
									};

									setTimeout(proxy, 0);
								} else {
									input.caret(next);
								}
								if (pos.begin <= lastRequiredNonMaskPos) {
									tryFireCompleted();
								}
							}
						}
						e.preventDefault();
					}
				}

				function clearBuffer(start, end) {
					var i;
					for (i = start; i < end && i < len; i++) {
						if (tests[i]) {
							buffer[i] = getPlaceholder(i);
						}
					}
				}

				function writeBuffer() { input.val(buffer.join('')); }

				function checkVal(allow) {
					//try to place characters where they belong
					var test = input.val(),
						lastMatch = -1,
						i,
						c,
						pos;

					for (i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = getPlaceholder(i);
							while (pos++ < test.length) {
								c = test.charAt(pos - 1);
								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if (pos > test.length) {
								clearBuffer(i + 1, len);
								break;
							}
						} else {
							if (buffer[i] === test.charAt(pos)) {
								pos++;
							}
							if (i < partialPosition) {
								lastMatch = i;
							}
						}
					}
					if (allow) {
						writeBuffer();
					} else if (lastMatch + 1 < partialPosition) {
						if (settings.autoclear || buffer.join('') === defaultBuffer) {
							// Invalid value. Remove it and replace it with the
							// mask, which is the default behavior.
							if (input.val()) input.val("");
							clearBuffer(0, len);
						} else {
							// Invalid value, but we opt to show the value to the
							// user and allow them to correct their mistake.
							writeBuffer();
						}
					} else {
						writeBuffer();
						input.val(input.val().substring(0, lastMatch + 1));
					}
					return (partialPosition ? i : firstNonMaskPos);
				}

				input.data($.mask.dataName, function () {
					return $.map(buffer, function (c, i) {
						return tests[i] && c != getPlaceholder(i) ? c : null;
					}).join('');
				});


				input
					.one("unmask", function () {
						input
							.off(".mask")
							.removeData($.mask.dataName);
					})
					.on("focus.mask", function () {
						if (input.prop("readonly")) {
							return;
						}

						clearTimeout(caretTimeoutId);
						var pos;

						focusText = input.val();

						pos = checkVal();

						caretTimeoutId = setTimeout(function () {
							if (input.get(0) !== document.activeElement) {
								return;
							}
							writeBuffer();
							if (pos == mask.replace("?", "").length) {
								input.caret(0, pos);
							} else {
								input.caret(pos);
							}
						}, 10);
					})
					.on("blur.mask", blurEvent)
					.on("keydown.mask", keydownEvent)
					.on("keypress.mask", keypressEvent)
					.on("input.mask paste.mask", function () {
						if (input.prop("readonly")) {
							return;
						}

						setTimeout(function () {
							var pos = checkVal(true);
							input.caret(pos);
							tryFireCompleted();
						}, 0);
					});
				if (chrome && android) {
					input
						.off('input.mask')
						.on('input.mask', androidInputEvent);
				}
				checkVal(); //Perform initial check for existing values
			});
		}
	});
}));

;


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

