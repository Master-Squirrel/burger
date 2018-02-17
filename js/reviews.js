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