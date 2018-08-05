$('#firstName').on('keyup', generate);
$('#lastName').on('keyup', generate);
$('#branch').on('keyup', generate);
$('#company').on('keyup', generate);

function generate() {
    let initial = $('#firstName').val().toLowerCase()[0];
    if (initial === undefined) {
        initial = '';
    }
    let lastName = $('#lastName').val().toLowerCase();
    if (lastName === undefined) {
        lastName = '';
    }
    let branch = $('#branch').val().toLowerCase();
    if (branch === undefined) {
        branch = '';
    }
    let company = $('#company').val().toLowerCase();
    if (company === undefined) {
        company = '';
    }
    let workEmail = `${initial}.${lastName}@${branch}-${company}.com`;
    $('#workEmail').val(workEmail);
}