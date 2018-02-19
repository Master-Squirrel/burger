sticks = $('.accordion__item');

$('.accordion__item').on('click', e => {

    var stick = $(e.currentTarget);

    stickText = $(stick).find('.accordion__description');

    e.preventDefault();

    if (stick.hasClass('accordion__item--active')) {
        $(stick).removeClass('accordion__item--active');
        $(stickText).css('width', '0');
    } else {

        $(sticks).each(e => {
            $(sticks)
                .eq(e)
                .find('.accordion__description')
                .css('width', '0')
            $(sticks)
                .eq(e)
                .removeClass('accordion__item--active');
        });
        $(stick).addClass('accordion__item--active');

        $(stickText).css('width', + (stickText)[0].scrollWidth + 'px');
    }

})

$('.menu').on('click', e => {

    let flag = false;

    $(e.originalEvent.path).each(item => {

        if ($(e.originalEvent.path).eq(item).hasClass('accordion__item')) {

            flag = true;
        }

    })

    if (flag == false) {
        $(sticks).each(e => {
            $(sticks)
                .eq(e)
                .find('.accordion__description')
                .css('width', '0')
            $(sticks)
                .eq(e)
                .removeClass('accordion__item--active');
        });
    }
})