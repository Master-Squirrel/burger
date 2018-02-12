//Vertical Acco
var allSliderItems = document.querySelectorAll(".accordion__item");

function hideAllMenuTabs() {

    allSliderItems.forEach(function (item) {

        let slide = item.children[1];

        let width = parseInt(getComputedStyle(slide).width);
        

        // for (let i = width; i > 0; i--) {
        
        //     slide.style.width = i+'px';            
        // }
        
        item.classList.remove('accordion__item--active');       
        item.children[1].classList.add('visually-hidden');
        

    })

}

allSliderItems.forEach(function (item) {

    item.addEventListener('click', function (e) {
        
        e.preventDefault();

        if (item.classList.contains('accordion__item--active')) {
            
            hideAllMenuTabs();
        } else {
            hideAllMenuTabs();
            item.classList.add('accordion__item--active');
            item.children[1].classList.remove('visually-hidden');
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