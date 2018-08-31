$('#logMsg').on('click', logMessage);
$('#setUsername').on('click', setUsername);
let logs = $('#logs');
let username = 'Anonymous';

function logMessage() {
    let messageText = $('#message').val();
    let div = $('<div class="text-white py-2 row rounded mb-1"></div>');
    let messageDiv = $('<div class="col-6 text-left border-right border-dark font-weight-bold"></div>');
    let usernameDiv = $(`<div class="col-3 text-center border-right border-dark">${username}</div>`);
    let archiveDiv = $('<div class="col-3 text-center">Archive</div>');
    archiveDiv.on('click', removeMessage);


    if ($('#successBtn').is(':checked')) {
        div.addClass('bg-success');
        messageDiv.text(`Success: ${messageText}`);
    }
    else if ($('#infoBtn').is(':checked')) {
        div.addClass('bg-info');
        messageDiv.text(`Info: ${messageText}`);
    }
    else if ($('#errorBtn').is(':checked')) {
        div.addClass('bg-danger');
        messageDiv.text(`Error: ${messageText}`);
    }

    messageDiv.appendTo(div);
    usernameDiv.appendTo(div);
    archiveDiv.appendTo(div);
    div.appendTo(logs);
    $('#emptyDb').css('display', 'none');
    $('#message').val('');
}

function removeMessage() {
    $(this).parent().remove();

    let count = $('#logs div');

    if (count.length === 0) {
        $('#emptyDb').css('display', 'block');
    }
}

function setUsername() {
    let userInput = $('#username');
    if(userInput.hasClass('form-control-plaintext')) {
        //if the field is already disabled - remove username and enable it
        userInput.removeClass('form-control-plaintext bg-white');
        userInput.removeAttr('disabled');
        username = "Anonymous";
        userInput.val('');
        $('#setUsername').text('Set Username');
        userInput.attr('placeholder', 'Username');

    }
    else {
        // if it's not disabled - set username and disable it
        userInput.addClass('form-control-plaintext bg-white');
        userInput.attr('disabled', 'disabled');
        userInput.attr('placeholder', '');
        username = userInput.val();
        $('#setUsername').text('Logout');
    }
}