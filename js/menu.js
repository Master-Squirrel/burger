$('.accordion__item').on('click', e => {

    e.preventDefault();
    sticks = $('.accordion__item');
    stick = $(e.currentTarget);
    stickText = $(stick).find('.accordion__description');


    console.log(stickText);
     if (stick.hasClass('accordion__item--active')) {
        $(stick).removeClass('accordion__item--active');
        $(stickText).css('width', '0');
     } else {
        
        $(sticks).each(e => {
            $(sticks).eq(e).find('.accordion__description').css('width', '0')
            $(sticks).eq(e).removeClass('accordion__item--active');
        });
        $(stick).addClass('accordion__item--active');
        console.log($(stickText)[0].scrollWidth);
        $(stickText).css('width',  + (stickText)[0].scrollWidth + 'px');
     }

})