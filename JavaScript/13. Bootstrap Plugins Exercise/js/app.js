$('.btn-facebook').on('click', function () {
    swal({
            title: "Leave this site?",
            text: "If you click 'OK', you will be redirected to http://facebook.com",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: true
        },
        function(){
            window.location.href = "http://facebook.com";
        }
        );
})

$('.btn-google').on('click', function () {
    swal({
            title: "Leave this site?",
            text: "If you click 'OK', you will be redirected to http://google.com",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: true
        },
        function(){
            window.location.href = "http://google.com";
        }
    );
})

$('.dropify').dropify();

$('#submitForm').on('click', function () {
    $('input').val('');
    $('#submitForm').val('Submit');
    $('.dropify-clear').click();
})