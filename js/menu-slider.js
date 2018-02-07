//Vertical Acco
var allSliderItems = document.querySelectorAll(".accordion__item");

function hideAllMenuTabs() {

    allSliderItems.forEach(function (item) {

        item.classList.remove('accordion__item--active');
        item.children[1].classList.add('visually-hidden');

    })

}

allSliderItems.forEach(function (item) {

    item.addEventListener('click', function (e) {
        
        e.preventDefault();

        if (item.classList.contains('accordion__item--active')) {
            console.log ("Contain");
            hideAllMenuTabs();
        } else {
            hideAllMenuTabs();
            item.classList.add('accordion__item--active');
            item.children[1].classList.remove('visually-hidden');
        }
      
    })

})

//Horizontal Acco
var AllSliderHorizontItems = document.querySelectorAll(".team__item");

function hideAllMenuHorizontTabs() {

    AllSliderHorizontItems.forEach(function (item) {

       item.classList.remove('team__item--active');

    })

}

AllSliderHorizontItems.forEach(function (item) {

    item.addEventListener('click', function (e) {
        e.preventDefault();

        if (item.classList.contains('team__item--active')) {
            hideAllMenuHorizontTabs();
        } else {
            hideAllMenuHorizontTabs();
            item.classList.add('team__item--active');
        }

    })

})

//Slider Menu Button
var ingrButton = document.querySelectorAll('.slider__menu');
var ingrSubMenu = document.querySelectorAll('.slider__submenu');

ingrButton.forEach(function(item) {

    item.addEventListener('mouseover', function () {
 
    item.nextElementSibling.style.display = "block";
    })
    item.addEventListener('mouseout', function () {
      
        item.nextElementSibling.style.display = "none";
    })
});