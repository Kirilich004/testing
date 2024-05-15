// Функция для проверки видимости элементов при прокрутке
function checkVisible(element) {
    var rect = element.getBoundingClientRect(); // Получаем размеры и позицию элемента
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight); // Высота окна браузера
    var windowScrollTop = (window.pageYOffset || document.documentElement.scrollTop); // Прокрутка страницы

    // Проверяем, если верхняя граница элемента находится в видимой части экрана
    return (rect.top <= windowHeight && rect.top >= 0) || (rect.bottom <= windowHeight && rect.bottom >= 0);
  }

  // Функция для проверки видимости элементов и добавления класса при достижении
  function checkAndAddClass() {
    var items = document.querySelectorAll('.s_2_item'); // Получаем все элементы
    items.forEach(function(item) {
      if (checkVisible(item)) { // Проверяем видимость каждого элемента
        item.classList.add('visible'); // Добавляем класс, если элемент видим
      }
    });
  }

  // Обработчик события прокрутки страницы
  window.addEventListener('scroll', function() {
    checkAndAddClass(); // Проверяем видимость элементов при прокрутке
  });

  // Проверяем видимость элементов при загрузке страницы
  checkAndAddClass();



//   HEADER 

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'white';
      header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
    }
  });









  document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });