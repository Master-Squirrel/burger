        var leftArrow = document.querySelector('.slider__links-left');
        var rightArrow = document.querySelector('.slider__links-right');
        var burgerSlide = document.querySelector('.slider__list');
        var start = 1;

        leftArrow.addEventListener('click', function (e) {
            e.preventDefault();
            var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));

     

            if (start > 1) {

                burgerSlide.style.left = currentLeft + 1100 + 'px';
                start--;
            } else {
                burgerSlide.style.left = currentLeft - 4*1100 + 'px';
                start = 5;
            }
            




        })

        rightArrow.addEventListener('click', function (e) {
            e.preventDefault();
            var currentLeft = (parseInt(getComputedStyle(burgerSlide).left));


            
        

            if (start < 5) {

                burgerSlide.style.left = currentLeft - 1100 + 'px';
                start++;
            } else {
                burgerSlide.style.left = 0 + 'px';
                start = 1;
            }
            





        })