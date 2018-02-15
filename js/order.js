var req = new XMLHttpRequest();
var error = false;
var response;

var closeButton = $('#closeButton');


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

//
$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
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
   
    //
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');       

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            displayModal(mes);
        } else{
            displayModal(mes);
        }
    }).fail(function(jqXHR, textStatus) {
        displayModal("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};
