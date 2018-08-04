$('#register').on('click', function() {
    swal("Good job!", "You are registered!", "success")
});

$('#register').on('click', addUser);


function addUser () {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();

    let user = `${firstName} ${lastName} - ${email}`;

    let users = $('#list-group');

    let li = $(`<li>${user}</li>`);
    li.addClass('list-group-item');

    let closeBtn = $('<button>x</button>');
    closeBtn.addClass('float-right btn btn-danger text-white rounded-circle btnDelete');

    closeBtn.appendTo(li);
    li.appendTo(users);
}


$('.btnDelete').on('click', function () {
    console.log('we are in');
    swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this user!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        function(){
            swal("Deleted!", "Your user has been deleted.", "success");
            //deleteUser();
        });
});

function deleteUser() {
    $(this).parent('.li').remove();
}