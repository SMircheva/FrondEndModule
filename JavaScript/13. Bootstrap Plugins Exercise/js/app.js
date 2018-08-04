$('.btn-facebook').on('click', function () {
    swal({
            title: "Leave this site?",
            text: "If you click 'OK', you will be redirected to http://facebook.com",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: true
        }
        // function(){
        //     window.open(url, 'http://facebook.com');
        // }
        );
})

$('.dropify').dropify();

$('#submitForm').on('click', function () {
    $('input').val('');
    $('#submitForm').val('Submit');
    $('.dropify').dropify();
})