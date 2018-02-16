
            //Modal windows - Order
            var doOverlay = section => {

                var overlay = $('<div></div>').addClass('overlay');
                $('.section')
                    .filter(section)
                    .append(overlay);

            }

            //Display Reviewes
            var reviewesButtons = document.querySelectorAll('.reviews__button');
            var fullReviewBock = document.querySelector('.reviews__fullreview');
            var closeButtonReviewBock = document.querySelector('.review__close');

            reviewesButtons.forEach(function (item) {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    doOverlay('.reviews');
                    fullReviewBock.style.display = "block";
                    fullReviewBock
                        .childNodes[1]
                        .childNodes[1]
                        .textContent = item
                        .parentNode
                        .childNodes[1]
                        .textContent;
                    fullReviewBock
                        .childNodes[1]
                        .childNodes[2]
                        .textContent = item.nextElementSibling.textContent;

                })
            });

            closeButtonReviewBock.addEventListener('click', function (item) {

                $('.reviews__fullreview').hide();
                $('.overlay').remove();

            })
        

            var mobMenuButton = document.querySelector(".mob-menu");
            var smallMenu = document.querySelector(".smallmenu");

            mobMenuButton.addEventListener('click', function (e) {
                e.preventDefault;
                smallMenu.style.display = "flex";
            })

            smallMenu.addEventListener('click', function (e) {
                e.preventDefault();
                smallMenu.style.display = "none";
            })