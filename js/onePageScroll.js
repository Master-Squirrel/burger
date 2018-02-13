const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

var MobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = MobileDetect.mobile();

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;
    console.log(position);

    if (inScroll) 
        return;
    
    inScroll = true;

    sections
        .eq(sectionEq)
        .addClass('activeS')
        .siblings()
        .removeClass('activeS');

    display.css(
        {'transform': `translate(0, ${position})`, '-webkit-transform': `translate(0, ${position})`}
    )
    setActiveMenuItem(sectionEq);

    setTimeout(() => {
        inScroll = false;        
    }, 1300); //1300 - это длительность анимации + инерция

}

const scrollToSection = direction => {

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

$(document).on({
    wheel: e => {

        const deltaY = e.originalEvent.deltaY;
        const direction = deltaY > 0
            ? 'up'
            : 'down';

        scrollToSection(direction);
    },
    keydown: e => {
        switch (e.keyCode) {
            case 40:
                scrollToSection('up');
            case 38:
                scrollToSection('down');
        }
    },
    touchmove: e => e.preventDefault()

})

//Формируем точки
const paginator = $('.paginator');

sections.each(e => {
    var li = $("<li></li>")
    .html(`<a href="#" class="paginator__link" data-scroll-to="${e}"></a>`);
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
            const scrollDirection = direction == 'down'
                ? 'up'
                : 'down';
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