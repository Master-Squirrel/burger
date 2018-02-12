// //Horizontal Acco
// var AllSliderHorizontItems = document.querySelectorAll(".team__item");

// function hideAllMenuHorizontTabs() {

//     AllSliderHorizontItems.forEach(function (item) {

//        item.classList.remove('team__item--active');

//     })

// }

// AllSliderHorizontItems.forEach(function (item) {

//     item.addEventListener('click', function (e) {
//         e.preventDefault();

//         if (item.classList.contains('team__item--active')) {
//             hideAllMenuHorizontTabs();
//         } else {
//             hideAllMenuHorizontTabs();
//             item.classList.add('team__item--active');
//         }

//     })

// })

//New
var accordion = document.getElementById("team__area"),
    items = accordion.getElementsByClassName("team__item"),
    contents = accordion.getElementsByClassName("team__member"),
    i;

accordion.addEventListener("click", function(e) {
  if (e.target.classList.contains("team__link")) {
      e.preventDefault();
    var trigger = e.target;
    
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;
    

    if (!item.classList.contains("team__item--active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items.length; i++) {
         
        items[i].classList.remove("team__item--active");
      }
      // добавляем active для текущего li
      item.classList.add("team__item--active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents.length; i++) {
        contents[i].style.height = null;
      }
      // открываем текущий блок с контентом
      content.style.height = content.scrollHeight + "px";
      
    } else { // активный
      // удаляем класс active для текущего li
      item.classList.remove("team__item--active");
      
      // закрываем текущий блок с контентом
      content.style.height = null;
    }
  }
});
