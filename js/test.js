var accordion = document.getElementById("team__area"),
    items = accordion.getElementsByClassName("team__item"),
    contents = accordion.getElementsByClassName("team__member"),
    i;

accordion.addEventListener("click", function(e) {
  if (e.target.classList.contains("team__link")) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents.length; i++) {
        contents[i].style.height = null;
      }
      // открываем текущий блок с контентом
      flexOrientation = $('.team__member').css('flex-direction');
      console.log(flexOrientation);

      if (flexOrientation == 'column') {
        content.style.height = content.scrollHeight + 75 + "px";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
      
    } else { // активный
      // удаляем класс active для текущего li
      item.classList.remove("active");
      
      // закрываем текущий блок с контентом
      content.style.height = null;
    }
  }
});
