// БУРГЕР-МЕНЮ
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger-container').classList.toggle('burger-container__display');
})
// МОДАЛЬНОЕ ОКНО
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');
   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {
         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click
   }); // end foreach
   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
}); // end ready

//МАСКА ДЛЯ ТЕЛЕФОНА 

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        let keyCode;
        let FormText = document.getElementById('text');
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+375 (__)___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            if (new_value[6] == 5 || new_value[6] == 6 || new_value[6] == 7 || new_value[6] == 8 || new_value[6] == 9 ||
                new_value[6] == 0) {
                FormText.textContent = 'Пожалуйста, ведите номер в верном формате';
            } else if (new_value[7] == 1 || new_value[7] == 2 || new_value[7] == 6 || new_value[7] == 8 || new_value[7] == 0 ||
                new_value[7] == 5 || new_value[7] == 7 || new_value[7] == 4) {
                FormText.textContent = 'Пожалуйста, ведите номер в верном формате';
            }
            if (new_value[6] == 1 && new_value[7] == 7 || new_value[6] == 2 && new_value[7] == 5 || new_value[6] == 2 &&
                new_value[7] == 9 || new_value[6] == 3 && new_value[7] == 3 || new_value[6] == 4 && new_value[7] == 4) {
                FormText.textContent = '';
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});

// ПРИМЕРЫ НАШИХ РАБОТ

const btn2 = document.querySelector ('.works-btn-2');
const btn1 = document.querySelector ('.works-btn-1');
const slider = document.querySelector('.slider');
const sliderGatesBtn2 = document.querySelector('.slider-gates-btn-2');
const sliderFances = document.querySelector('.slider-fances');
const sliderFancesBtn2 = document.querySelector('.slider-fances-btn-2');
const sliderStairs = document.querySelector('.slider-stairs');
const sliderStairsBtn2 = document.querySelector('.slider-stairs-btn-2');
const sliderCanopy = document.querySelector('.slider-canopy');
const sliderCanopyBtn2 = document.querySelector('.slider-canopy-btn-2');
const sliderBalcony = document.querySelector('.slider-balcony');
const sliderBalconyBtn2 = document.querySelector('.slider-balcony-btn-2');
const sliderBrazier = document.querySelector('.slider-brazier');
const sliderBrazierBtn2 = document.querySelector('.slider-brazier-btn-2');
const sliderWindow = document.querySelector('.slider-window');
const sliderWindowBtn2 = document.querySelector('.slider-window-btn-2');
const sliderSketch = document.querySelector('.slider-sketch');
const sliderSketchBtn2 = document.querySelector('.slider-sketch-btn-2');
function ChangeColorBtn2 (){
    btn2.classList.add('works-btn-2-change-color');
    btn2.classList.remove('works-btn-2');
    btn1.classList.add('works-btn-1-change-color');
    btn1.classList.remove('works-btn-1');
    slider.style.display = 'none';
    sliderFances.style.display = 'none';
    sliderStairs.style.display = 'none';
    sliderCanopy.style.display = 'none';
    sliderBalcony.style.display = 'none';
    sliderBrazier.style.display = 'none';
    sliderWindow.style.display = 'none';
    sliderSketch.style.display = 'none';
    sliderGatesBtn2.style.display = 'block';
    sliderFancesBtn2.style.display = 'block';
    sliderStairsBtn2.style.display = 'block';
    sliderCanopyBtn2.style.display = 'block';
    sliderBalconyBtn2.style.display = 'block';
    sliderBrazierBtn2.style.display = 'block';
    sliderWindowBtn2.style.display = 'block';
    sliderSketchBtn2.style.display = 'block';
}

function ChangeColorBtn1 (){
    btn2.classList.add('works-btn-2');
    btn2.classList.remove('works-btn-2-change-color');
    btn1.classList.add('works-btn-1');
    btn1.classList.remove('works-btn-1-change-color');
    slider.style.display = 'block';
    sliderFances.style.display = 'block';
    sliderStairs.style.display = 'block';
    sliderCanopy.style.display = 'block';
    sliderBalcony.style.display = 'block';
    sliderBrazier.style.display = 'block';
    sliderWindow.style.display = 'block';
    sliderSketch.style.display = 'block';
    sliderGatesBtn2.style.display = 'none';
    sliderFancesBtn2.style.display = 'none';
    sliderStairsBtn2.style.display = 'none';
    sliderCanopyBtn2.style.display = 'none';
    sliderBalconyBtn2.style.display = 'none';
    sliderBrazierBtn2.style.display = 'none';
    sliderWindowBtn2.style.display = 'none';
    sliderSketchBtn2.style.display = 'none';
}

btn2.addEventListener('click', ChangeColorBtn2);
btn1.addEventListener('click', ChangeColorBtn1);

/**
 * SimpleAdaptiveSlider by Itchief v2.0.0 (https://github.com/itchief/ui-components/tree/master/simple-adaptive-slider)
 * Copyright 2020 - 2021 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 */

 (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return e;
    }
    window.CustomEvent = CustomEvent;
})();

// базовые классы и селекторы
var WRAPPER_SELECTOR = '.slider__wrapper';
var ITEMS_SELECTOR = '.slider__items';
var ITEM_SELECTOR = '.slider__item';
var ITEM_CLASS_ACTIVE = 'slider__item_active';
var CONTROL_SELECTOR = '.slider__control';
var CONTROL_CLASS_SHOW = 'slider__control_show';
// индикаторы
var INDICATOR_WRAPPER_ELEMENT = 'ol';
var INDICATOR_WRAPPER_CLASS = 'slider__indicators';
var INDICATOR_ITEM_ELEMENT = 'li';
var INDICATOR_ITEM_CLASS = 'slider__indicator';
var INDICATOR_ITEM_CLASS_ACTIVE = 'slider__indicator_active';
// порог для переключения слайда (40%)
var SWIPE_THRESHOLD = 20;
// класс для отключения transition
var TRANSITION_NONE = 'transition-none';

function SimpleAdaptiveSlider(selector, config) {
    // .slider
    this._$root = document.querySelector(selector);
    // .slider__wrapper
    this._$wrapper = this._$root.querySelector(WRAPPER_SELECTOR);
    // .slider__items
    this._$items = this._$root.querySelector(ITEMS_SELECTOR);
    // .slider__item
    this._$itemList = this._$root.querySelectorAll(ITEM_SELECTOR);
    // текущий индекс
    this._currentIndex = 0;
    // экстремальные значения слайдов
    this._minOrder = 0;
    this._maxOrder = 0;
    this._$itemWithMinOrder = null;
    this._$itemWithMaxOrder = null;
    this._minTranslate = 0;
    this._maxTranslate = 0;
    // направление смены слайдов (по умолчанию)
    this._direction = 'next';
    // флаг, который показывает, что идёт процесс уравновешивания слайдов
    this._balancingItemsFlag = false;
    // текущее значение трансформации
    this._transform = 0;
    // swipe параметры
    this._hasSwipeState = false;
    this._swipeStartPosX = 0;
    // id таймера
    this._intervalId = null;
    // конфигурация слайдера (по умолчанию)
    this._config = {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    };
    // изменяем конфигурацию слайдера в соответствии с переданными настройками
    for (var key in config) {
        if (this._config.hasOwnProperty(key)) {
            this._config[key] = config[key];
        }
    }
    // добавляем к слайдам data-атрибуты
    for (var i = 0, length = this._$itemList.length; i < length; i++) {
        this._$itemList[i].dataset.order = i;
        this._$itemList[i].dataset.index = i;
        this._$itemList[i].dataset.translate = 0;
    }
    // перемещаем последний слайд перед первым
    if (this._config.loop) {
        var count = this._$itemList.length - 1;
        var translate = -this._$itemList.length * 100;
        this._$itemList[count].dataset.order = -1;
        this._$itemList[count].dataset.translate = -this._$itemList.length * 100;
        var transformValue = 'translateX('.concat(translate, '%)');
        this._$itemList[count].style.transform = transformValue;
    }
    // добавляем индикаторы к слайдеру
    this._addIndicators();
    // обновляем экстремальные значения переменных
    this._refreshExtremeValues();
    // помечаем активные элементы
    this._setActiveClass();
    // назначаем обработчики
    this._addEventListener();
    // запускаем автоматическую смену слайдов
    this._autoplay();
}

// set active class
SimpleAdaptiveSlider.prototype._setActiveClass = function () {
    // slides
    var i;
    var length;
    var $item;
    var index;
    for (i = 0, length = this._$itemList.length; i < length; i++) {
        $item = this._$itemList[i];
        index = parseInt($item.dataset.index);
        if (this._currentIndex === index) {
            $item.classList.add(ITEM_CLASS_ACTIVE);
        } else {
            $item.classList.remove(ITEM_CLASS_ACTIVE);
        }
    }
    // indicators
    var $indicators = this._$root.querySelectorAll('.' + INDICATOR_ITEM_CLASS);
    if ($indicators.length) {
        for (i = 0, length = $indicators.length; i < length; i++) {
            $item = $indicators[i];
            index = parseInt($item.dataset.slideTo);
            if (this._currentIndex === index) {
                $item.classList.add(INDICATOR_ITEM_CLASS_ACTIVE);
            } else {
                $item.classList.remove(INDICATOR_ITEM_CLASS_ACTIVE);
            }
        }
    }
    // controls
    var $controls = this._$root.querySelectorAll(CONTROL_SELECTOR);
    if (!$controls.length) {
        return;
    }
    if (this._config.loop) {
        for (i = 0, length = $controls.length; i < length; i++) {
            $controls[i].classList.add(CONTROL_CLASS_SHOW);
        }
    } else {
        if (this._currentIndex === 0) {
            $controls[0].classList.remove(CONTROL_CLASS_SHOW);
            $controls[1].classList.add(CONTROL_CLASS_SHOW);
        } else if (this._currentIndex === this._$itemList.length - 1) {
            $controls[0].classList.add(CONTROL_CLASS_SHOW);
            $controls[1].classList.remove(CONTROL_CLASS_SHOW);
        } else {
            $controls[0].classList.add(CONTROL_CLASS_SHOW);
            $controls[1].classList.add(CONTROL_CLASS_SHOW);
        }
    }
};

// смена слайдов
SimpleAdaptiveSlider.prototype._move = function () {
    if (this._direction === 'none') {
        this._$items.classList.remove(TRANSITION_NONE);
        this._$items.style.transform = 'translateX('.concat(this._transform, '%)');
        return;
    }
    if (!this._config.loop) {
        var condition = this._currentIndex + 1 >= this._$itemList.length;
        if (condition && this._direction === 'next') {
            this._autoplay('stop');
            return;
        }
        if (this._currentIndex <= 0 && this._direction === 'prev') {
            return;
        }
    }
    var step = this._direction === 'next' ? -100 : 100;
    var transform = this._transform + step;
    if (this._direction === 'next') {
        if (++this._currentIndex > this._$itemList.length - 1) {
            this._currentIndex -= this._$itemList.length;
        }
    } else {
        if (--this._currentIndex < 0) {
            this._currentIndex += this._$itemList.length;
        }
    }
    this._transform = transform;
    this._$items.style.transform = 'translateX('.concat(transform, '%)');
    this._setActiveClass();
};

// функция для перемещения к слайду по индексу
SimpleAdaptiveSlider.prototype._moveTo = function (index) {
    var currentIndex = this._currentIndex;
    this._direction = index > currentIndex ? 'next' : 'prev';
    for (var i = 0; i < Math.abs(index - currentIndex); i++) {
        this._move();
    }
};

// метод для автоматической смены слайдов
SimpleAdaptiveSlider.prototype._autoplay = function (action) {
    if (!this._config.autoplay) {
        return;
    }
    if (action === 'stop') {
        clearInterval(this._intervalId);
        this._intervalId = null;
        return;
    }
    if (this._intervalId === null) {
        this._intervalId = setInterval(function () {
            this._direction = 'next';
            this._move();
        }.bind(this),
            this._config.interval
        );
    }
};

// добавление индикаторов
SimpleAdaptiveSlider.prototype._addIndicators = function () {
    if (this._$root.querySelector('.' + INDICATOR_WRAPPER_CLASS)) {
        return;
    }
    var $wrapper = document.createElement(INDICATOR_WRAPPER_ELEMENT);
    $wrapper.className = INDICATOR_WRAPPER_CLASS;
    for (var i = 0, length = this._$itemList.length; i < length; i++) {
        var $item = document.createElement(INDICATOR_ITEM_ELEMENT);
        $item.className = INDICATOR_ITEM_CLASS;
        $item.dataset.slideTo = i;
        $wrapper.appendChild($item);
    }
    this._$root.appendChild($wrapper);
};

// refresh extreme values
SimpleAdaptiveSlider.prototype._refreshExtremeValues = function () {
    var $itemList = this._$itemList;
    this._minOrder = parseInt($itemList[0].dataset.order);
    this._maxOrder = this._minOrder;
    this._$itemWithMinOrder = $itemList[0];
    this._$itemWithMaxOrder = this._$itemWithMinOrder;
    this._minTranslate = parseInt($itemList[0].dataset.translate);
    this._maxTranslate = this._minTranslate;
    for (var i = 0, length = $itemList.length; i < length; i++) {
        var $item = $itemList[i];
        var order = parseInt($item.dataset.order);
        if (order < this._minOrder) {
            this._minOrder = order;
            this._$itemWithMinOrder = $item;
            this._minTranslate = parseInt($item.dataset.translate);
        } else if (order > this._maxOrder) {
            this._maxOrder = order;
            this._$itemWithMaxOrder = $item;
            this._minTranslate = parseInt($item.dataset.translate);
        }
    }
};

// balancing items
SimpleAdaptiveSlider.prototype._balancingItems = function () {
    if (!this._balancingItemsFlag) {
        return;
    }
    var $wrapper = this._$wrapper;
    var wrapperRect = $wrapper.getBoundingClientRect();
    var halfWidthItem = wrapperRect.width / 2;
    var count = this._$itemList.length;
    var translate;
    var clientRect;
    if (this._direction === 'next') {
        var wrapperLeft = wrapperRect.left;
        var $min = this._$itemWithMinOrder;
        translate = this._minTranslate;
        clientRect = $min.getBoundingClientRect();
        if (clientRect.right < wrapperLeft - halfWidthItem) {
            $min.dataset.order = this._minOrder + count;
            translate += count * 100;
            $min.dataset.translate = translate;
            $min.style.transform = 'translateX('.concat(translate, '%)');
            this._refreshExtremeValues();
        }
    } else if (this._direction === 'prev') {
        var wrapperRight = wrapperRect.right;
        var $max = this._$itemWithMaxOrder;
        translate = this._maxTranslate;
        clientRect = $max.getBoundingClientRect();
        if (clientRect.left > wrapperRight + halfWidthItem) {
            $max.dataset.order = this._maxOrder - count;
            translate -= count * 100;
            $max.dataset.translate = translate;
            $max.style.transform = 'translateX('.concat(translate, '%)');
            this._refreshExtremeValues();
        }
    }
    requestAnimationFrame(this._balancingItems.bind(this));
};

// adding listeners
SimpleAdaptiveSlider.prototype._addEventListener = function () {
    var $items = this._$items;
    function onClick(e) {
        var $target = e.target;
        this._autoplay('stop');
        if ($target.classList.contains('slider__control')) {
            e.preventDefault();
            this._direction = $target.dataset.slide;
            this._move();
        } else if ($target.dataset.slideTo) {
            e.preventDefault();
            var index = parseInt($target.dataset.slideTo);
            this._moveTo(index);
        }
        if (this._config.loop) {
            this._autoplay();
        }
    }
    function onTransitionStart() {
        this._balancingItemsFlag = true;
        window.requestAnimationFrame(this._balancingItems.bind(this));
    }
    function onTransitionEnd() {
        this._balancingItemsFlag = false;
        this._$root.dispatchEvent(new CustomEvent('slider.transition.end',
            { bubbles: true }));
    }
    function onMouseEnter() {
        this._autoplay('stop');
    }
    function onMouseLeave() {
        if (this._config.loop) {
            this._autoplay();
        }
    }
    function onSwipeStart(e) {
        this._autoplay('stop');
        var event = e.type.search('touch') === 0 ? e.touches[0] : e;
        this._swipeStartPosX = event.clientX;
        this._swipeStartPosY = event.clientY;
        this._hasSwipeState = true;
        this._hasSwiping = false;
    }
    function onSwipeMove(e) {
        if (!this._hasSwipeState) {
            return;
        }
        var event = e.type.search('touch') === 0 ? e.touches[0] : e;
        var diffPosX = this._swipeStartPosX - event.clientX;
        var diffPosY = this._swipeStartPosY - event.clientY;
        if (!this._hasSwiping) {
            if (Math.abs(diffPosY) > Math.abs(diffPosX)) {
                this._hasSwipeState = false;
                return;
            }
            this._hasSwiping = true;
        }
        e.preventDefault();
        if (!this._config.loop) {
            if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
                diffPosX = diffPosX / 4;
            }
            if (this._currentIndex <= 0 && diffPosX <= 0) {
                diffPosX = diffPosX / 4;
            }
        }
        var value = (diffPosX / this._$wrapper.getBoundingClientRect().width) * 100;
        var translateX = this._transform - value;
        this._$items.classList.add(TRANSITION_NONE);
        this._$items.style.transform = 'translateX('.concat(translateX, '%)');
    }
    function onSwipeEnd(e) {
        if (!this._hasSwipeState) {
            return;
        }
        var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
        var diffPosX = this._swipeStartPosX - event.clientX;
        if (!this._config.loop) {
            if (this._currentIndex + 1 >= this._$itemList.length && diffPosX >= 0) {
                diffPosX = diffPosX / 4;
            }
            if (this._currentIndex <= 0 && diffPosX <= 0) {
                diffPosX = diffPosX / 4;
            }
        }
        var value = (diffPosX / this._$wrapper.getBoundingClientRect().width) * 100;
        this._$items.classList.remove(TRANSITION_NONE);
        if (value > SWIPE_THRESHOLD) {
            this._direction = 'next';
            this._move();
        } else if (value < -SWIPE_THRESHOLD) {
            this._direction = 'prev';
            this._move();
        } else {
            this._direction = 'none';
            this._move();
        }
        this._hasSwipeState = false;
        if (this._config.loop) {
            this._autoplay();
        }
    }
    function onDragStart(e) {
        e.preventDefault();
    }
    function onVisibilityChange() {
        if (document.visibilityState === 'hidden') {
            this._autoplay('stop');
        } else if (document.visibilityState === 'visible') {
            if (this._config.loop) {
                this._autoplay();
            }
        }
    }
    // click
    this._$root.addEventListener('click', onClick.bind(this));
    // transitionstart and transitionend
    if (this._config.loop) {
        $items.addEventListener('transitionstart', onTransitionStart.bind(this));
        $items.addEventListener('transitionend', onTransitionEnd.bind(this));
    }
    // mouseenter and mouseleave
    if (this._config.autoplay) {
        this._$root.addEventListener('mouseenter', onMouseEnter.bind(this));
        this._$root.addEventListener('mouseleave', onMouseLeave.bind(this));
    }
    // swipe
    if (this._config.swipe) {
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                },
            });
            window.addEventListener('testPassiveListener', null, opts);
        } catch (err) { }
        this._$root.addEventListener('touchstart', onSwipeStart.bind(this),
            supportsPassive ? { passive: false } : false);
        this._$root.addEventListener('touchmove', onSwipeMove.bind(this),
            supportsPassive ? { passive: false } : false);
        this._$root.addEventListener('mousedown', onSwipeStart.bind(this));
        this._$root.addEventListener('mousemove', onSwipeMove.bind(this));
        document.addEventListener('touchend', onSwipeEnd.bind(this));
        document.addEventListener('mouseup', onSwipeEnd.bind(this));
    }
    this._$root.addEventListener('dragstart', onDragStart.bind(this));
    // при изменении активности вкладки
    document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
};

// перейти к следующему слайду
SimpleAdaptiveSlider.prototype.next = function () {
    this._direction = 'next';
    this._move();
};

// перейти к предыдущему слайду
SimpleAdaptiveSlider.prototype.prev = function () {
    this._direction = 'prev';
    this._move();
};

// управление автоматической сменой слайдов
SimpleAdaptiveSlider.prototype.autoplay = function (action) {
    this._autoplay('stop');
};

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });

    new SimpleAdaptiveSlider('.slider-gates-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-fances', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-fances-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-stairs', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-stairs-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-canopy', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-canopy-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-balcony', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-balcony-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-brazier', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-brazier-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-window', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-window-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-sketch', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-sketch-btn-2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    new SimpleAdaptiveSlider('.slider-about-us', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});

// ПЛАВНОСТЬ НАВИГАЦИИ

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
        })
    })
}

// КОММЕНТАРИИ
// const BtnComments = document.getElementById('btn-comments');
// const BtnCommentName1 = document.querySelector('.comments-name-1');

// function ChangeComment () {
//     BtnCommentName1.innerHTML = 'Hanna';
// }
// BtnComments.addEventListener('click', ChangeComment);