const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

var MobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = MobileDetect.mobile();

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;


    if (inScroll)
        return;

    inScroll = true;

    sections
        .eq(sectionEq)
        .addClass('activeS')
        .siblings()
        .removeClass('activeS');

    display.css({
        'transform': `translate(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
    })
    setActiveMenuItem(sectionEq);

    setTimeout(() => {
        inScroll = false;
    }, 1300); //1300 - это длительность анимации + инерция

}

const scrollToSection = direction => {

    if (isMobileMenuOpen) {return;}

    const activeSection = sections.filter('.activeS');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == 'up' && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction == 'down' && prevSection.length) {
        performTransition(prevSection.index());
    }
}

$(".wrapper").on({
    wheel: e => {
        console.log('wheel');
        const deltaY = e.originalEvent.deltaY;
        const direction = deltaY > 0 ?
            'up' :
            'down';

        scrollToSection(direction);
    },

    touchmove: function (e) {
        return e.preventDefault()
    }

})

$(document).on({
    keydown: e => {
        console.log('Key');
        switch (e.keyCode) {
            case 40:
                scrollToSection('up');
            case 38:
                scrollToSection('down');
        }
    }
})

//Формируем точки
const paginator = $('.paginator');

sections.each(e => {
    var li = $('<li></li>')
        .prop('className', ' paginator__item')
        .html(`<a href="#" class="paginator__link" data-scroll-to="${e}"></a>`);

    // .html(`<a href="#" class="paginator__link" data-scroll-to="${e}"></a>`);
    // paginator.append(`<li class="paginator__item"><a href="#" class="paginator__link" data-scroll-to="${e}"></a></li>`);
    paginator.append(li);
})


//Навигация
$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    performTransition(target);
})

if (isMobile) {
    $(document).swipe({

        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            // Плагин возвращает фактическое движение пальца, а нам нужно направление
            // движение страницы
            const scrollDirection = direction == 'down' ?
                'up' :
                'down';

            scrollToSection(direction);
        }

    });

}

//Выделяем активные точки
const setActiveMenuItem = itemEq => {
    $('.paginator__item').eq(itemEq).addClass('active')
        .siblings()
        .removeClass('active');
}