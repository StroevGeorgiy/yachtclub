//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//yandex map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [43.564083, 39.751475],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });


    var myPlacemark = new ymaps.Placemark([43.564083, 39.751475],
        {
            balloonContent: `
        <div class="balloon">
        <div class="balloon__address">г. Сочи, ул. Бзугу, 9</div>
        <div class="balloon__contacts">
            <a href="tel:+78121234567">8 (622) 62-05-63</a>
        </div>
    </div>
    ` },
        {
            iconLayout: 'default#image',
            iconImageHref: './images/contmap/map-pin.svg',
            icon_imagesize: [40, 48],
            iconImageOffset: [-20, -48]
        });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();
}

// phone mask

mask('[data-tel-input]')
// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});


//burger 

document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('header-open')

})