function validate() {
    let companyCheck = $('#company');
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyNum = $('#companyNumber');
    let allFine = true;

    let submitButton = $('#submit').on('click', function(e) {
        e.preventDefault();
        let checkUsername = /^[a-zA-Z0-9]{3,20}$/;
        let checkEmail = /^.+@.*\..*$/;
        let checkPass = /^.{5,15}$/;
        let checkCompNum = /^[1-9][0-9]{3}$/;


        if (!checkUsername.test(username.val())) {
            username.css('border-color', 'red');
            allFine = false;
        }

        if (!checkEmail.test(email.val())){
            email.css('border-color', 'red');
            allFine = false;
        }

        if(!checkPass.test(password.val())) {
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
            allFine = false;
        }

        if (password.val() !== confirmPass.val()) {
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
            allFine = false;

        }
        if(companyCheck.is(':checked')) {
            if (!checkCompNum.test(companyNum.val())) {
                companyNum.css('border-color', 'red');
                allFine = false;
            }
        }


        if (allFine) {
            $('#valid').css('display', 'block');
        }
    });

    $(companyCheck).on('change', company);

    function company() {
        if(companyCheck.is(':checked')) {
            $('#companyInfo').css('display', 'block');
        }
        else {
            $('#companyInfo').css('display', 'none');
        }
    }




}
