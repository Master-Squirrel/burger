var leftArrow = document.querySelector('.slider__links-left');
var rightArrow = document.querySelector('.slider__links-right');
var burgerSlide = document.querySelector('.slider__list');
var size = parseInt(window.getComputedStyle(document.querySelector('.slider-container')).width);

var start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));

    if (start > 1 && currentLeft % size == 0) {
        
        burgerSlide.style.left = currentLeft + size + 'px';
        start--;
    } else if (currentLeft % size == 0) {
        burgerSlide.style.left = currentLeft - 4 * size + 'px';
        start = 5;
    }

})

rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));

    if (start < 5 && currentLeft % size == 0) {

        burgerSlide.style.left = currentLeft - size + 'px';
        start++;
    } else if (currentLeft % size == 0) {
        burgerSlide.style.left = 0 + 'px';
        start = 1;
    }

})

window.addEventListener('resize', function() {
    size = parseInt(window.getComputedStyle(document.querySelector('.slider-container')).width);
    
    currentLeft = (parseInt(getComputedStyle(burgerSlide).left));
    burgerSlide.style.left = -size*(start-1) + 'px';
})
