        //Modal windows - Order
        doOverlay = section => {

            var overlay = $('<div></div>').addClass('overlay');
            $('.section')
                .filter(section)
                .append(overlay);

        }