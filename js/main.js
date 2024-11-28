//меню

const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const navLink = document.querySelectorAll(".nav-list a"); // Получаем все ссылки в меню

// Обработчик клика для кнопки гамбургера
burger.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  burger.classList.toggle("active");
});

// Обработчик клика для ссылок в меню
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("active"); // Закрываем меню
    burger.classList.remove("active"); // Изменяем состояние кнопки
  });
});

//карусель

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// Добавляем обработчики для кнопок
$('.slider__btn--next').click(function() {
  $('.owl-carousel').trigger('next.owl.carousel');
});

$('.slider__btn--prev').click(function() {
  $('.owl-carousel').trigger('prev.owl.carousel');
});

// Добавляем обработчики для  мобильных кнопок
$('.mobile-next').click(function() {
  $('.owl-carousel').trigger('next.owl.carousel');
});

$('.mobile-prev').click(function() {
  $('.owl-carousel').trigger('prev.owl.carousel');
});


// для прокрутки карусели колесом мыши
$('.owl-carousel').on('mousewheel', '.owl-stage', function(e) {
  if (e.deltaY > 0) {
      $('.owl-carousel').trigger('next.owl.carousel', [300]); // 300ms на анимацию
  } else {
      $('.owl-carousel').trigger('prev.owl.carousel', [300]); // 300ms на анимацию
  }
  e.preventDefault();
});


//курсор 

const gridItems = document.querySelectorAll('.training__grid-item');

gridItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    document.body.style.cursor = `url('/img/main-page/section-training/cursor.png'), auto`;
  });
  item.addEventListener('mouseout', () => {
    document.body.style.cursor = 'default'; // Возвращаем стандартный курсор
  });
});

// карусель №2

$('.special-offers__carousel-control--prev').click(function() {
  $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.special-offers__carousel-control--next').click(function() {
  $('.owl-carousel').trigger('next.owl.carousel');
});

$('.special-offers .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  responsive: {
      0: {
          items: 2.2,
          center: true
      },
      480: {
          items: 3,
          center: true
      },
      768: {
          items: 3
      }
    
  }
});


// карта на footer

ymaps.ready(init);
function init () {
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        center: [50.4501, 30.5234], // Замените на координаты Харькова, Клочковская, 3
        zoom: 16, // Уровень масштабирования (регулируйте по необходимости)
        controls: [] // Убираем стандартные элементы управления (при необходимости)
    }, {
        suppressMapOpenBlock: true // Предотвращает появление блокирующего всплывающего окна при загрузке
    });

    // Создаем метку и устанавливаем ее на карту
    var myPlacemark = new ymaps.Placemark([50.4501, 30.5234], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'your-marker-icon.png', // Замените на URL вашей иконки
      iconImageSize: [30, 42], // Размер иконки
      iconImageOffset: [-15, -42] // Смещение иконки
    });

    myMap.geoObjects.add(myPlacemark);
    
    // Опционально: добавить управление масштабом
    myMap.controls.add('zoomControl');

}


// анимация
// AOS.init();











