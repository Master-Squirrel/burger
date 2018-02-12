$(function () {

    var currentSection = 0;
    var iScrollPos,
        isAnimated;
    var sections = $('.section');
    var len = $(sections).length - 1;

    $('html').on('DOMMouseScroll mousewheel scroll', function (event) {

        event.preventDefault();

        if (!isAnimated) {

            if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
                //scroll down
                console.log('Down');
                if (currentSection < len) {
                    isAnimated = true;
                    
                    var next = $(sections[currentSection])
                        .next()
                        .offset()
                        .top;
                    currentSection++;
                    scrollPage(next);
                    setNextDots('down');
                }

            } else {
                //scroll up
                console.log('Up');
                if (currentSection > 0) {
                    isAnimated = true;
                    if ($(sections[currentSection])) {
                        var next = $(sections[currentSection])
                            .prev()
                            .offset()
                            .top;
                        currentSection--;
                        scrollPage(next);
                        setNextDots('up');
                    }

                }

            }
        }

        function scrollPage(next) {

            $('html').animate({
                scrollTop: next

            }, 1500, function () {
                isAnimated = false;
            })

        }

        //prevent page fom scrolling
        return false;
    });

    //Setting dots
    function setDots(index) {

        $('.paginator')
            .find('.paginator__item')
            .eq(index)
            .addClass(' active')
            .siblings()
            .removeClass('active');
    }

    function setNextDots(direction) {

        var currentDot = $('.paginator')
            .find('.active')

        if (direction == 'down'){
            currentDot.next().addClass('active').siblings().removeClass('active');
        }
        if (direction == 'up'){
            currentDot.prev().addClass('active').siblings().removeClass('active');
        }

    }

    function generateDots() {

        $('.section').each(function () {

            var dot = $('<li>', {
                attr: {
                    class: 'paginator__item'
                },
                html: '<a href="#" class="paginator__link"></a>'
            });

            $('.paginator').append(dot);
        })
    }
    generateDots();
    setDots(0);

    //Dots click
    $('body').on('click', '.paginator__item', function() {
        var $this = $(this),
        index = $this.index();
        console.log(index);

        var next = $(sections[index])
        .offset()
        .top;
    
        isAnimated = false;

        $('html').animate({
            scrollTop: next

        }, 1500, function () {
            isAnimated = false;
        })

    })

    //Keyboard off
    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
})