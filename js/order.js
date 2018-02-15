var req = new XMLHttpRequest();
var error = false;
var response;
var orderButton = $('#orderButton');
var closeButton = $('#closeButton');

orderButton.on('click', e => {

    function checkForm(e) {
        var unfilled = false;
        var form = $('.order__form');
        var formFields = form.find('.order__input');
        formFields.each(item => {

            //formFields.eq(e).prop("type") == 'textarea' &&
            if (formFields.eq(item).val() == '') {
                unfilled = true;
            }
        })
        if (unfilled == true) {
            return false;
        } else {
            return true;
        }
    }

    e.preventDefault();
    
    response = sendOrder();
    console.log(response);
    // displayModal(response);
    
})

const sendOrder = e => {

    var req = jQuery.ajax({
       url: 'http://burger.questbusters.ru/answer.php',
       success: result => {
        return result;
       }
    })

    
    

}

const displayModal = messageResponse => {

    doOverlay('.order');
    $('.modal').css('display', 'flex');
    $('.modal')
        .children('.modal__text')
        .text(messageResponse);

    closeButton.on('click', e => {
        e.preventDefault();
        $('.modal').css('display', 'none');
        $('.overlay').remove();
    })

}
