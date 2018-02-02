        var leftArrow = document.querySelector('.slider__links-left');
        var burgerSlide = document.querySelector('.slider__item');

        leftArrow.addEventListener('click', function (e) {
            e.preventDefault();
            var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));

            if (!currentLeft) {
                currentLeft = 600;
                console.log(currentLeft);
            }

            burgerSlide.style.left = currentLeft + 'px';
            console.log(getComputedStyle(burgerSlide).left);
        })