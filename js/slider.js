var leftArrow = document.querySelector('.slider__links-left');
var rightArrow = document.querySelector('.slider__links-right');
var burgerSlide = document.querySelector('.slider__list');
var size = parseInt(window.getComputedStyle(document.querySelector('.slider-container')).width);
var sliderDirection;
var start = 1;

$(".slider__list").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

        console.log(event);
        if (event.type == 'touchend')   {
            scrollToSlide(direction);
        }
        

    }
})

function scrollToSlide(sliderDirection) {
    
    var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));

    if (sliderDirection == 'right') {

        if (start > 1 && currentLeft % size == 0) {

            burgerSlide.style.left = currentLeft + size + 'px';
            start--;
        } else if (currentLeft % size == 0) {
            burgerSlide.style.left = currentLeft - 4 * size + 'px';
            start = 5;
        }
    }

    if (sliderDirection == 'left') {

        if (start < 5 && currentLeft % size == 0) {

            burgerSlide.style.left = currentLeft - size + 'px';
            start++;
        } else if (currentLeft % size == 0) {
            burgerSlide.style.left = 0 + 'px';
            start = 1;
        }
    }

}

$(leftArrow).on({
    click : function (e) {
    e.preventDefault();
    scrollToSlide('right');
}});

$(rightArrow).on({
    click : function (e) {
        e.preventDefault();
    scrollToSlide('left');
}});


window.addEventListener('resize', function () {
    size = parseInt(window.getComputedStyle(document.querySelector('.slider-container')).width);

    currentLeft = (parseInt(getComputedStyle(burgerSlide).left));
    burgerSlide.style.left = -size * (start - 1) + 'px';

    //Закрыть вертикальный аакордион
    sticks = $('.accordion__item');

    $(sticks).each(e => {
        $(sticks).eq(e).find('.accordion__description').css('width', '0')
        $(sticks).eq(e).removeClass('accordion__item--active');
    });
})

//Slider Menu Button
var ingrButton = document.querySelectorAll('.slider__menu');
var ingrSubMenu = document.querySelectorAll('.slider__submenu');

ingrButton.forEach(function (item) {

    item.addEventListener('mouseover', function () {

        item.nextElementSibling.style.display = "block";
    })
    item.addEventListener('mouseout', function () {

        item.nextElementSibling.style.display = "none";
    })
});