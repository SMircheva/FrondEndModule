$.validate({
    lang: 'en',
});

$('#bold-btn').on('click', boldText);
let isBold = false;

function boldText() {
    if (isBold) {
        $('#text-input').css('font-weight', '');
        isBold = false;
    } else {
        $('#text-input').css('font-weight', 'bold');
        isBold = true;
    }
}

$('#italic-btn').on('click', italicText);
let isItalic = false;

function italicText() {
    if (isItalic) {
        $('#text-input').css('font-style', '');
        isItalic = false;
    } else {
        $('#text-input').css('font-style', 'italic');
        isItalic = true;
    }
}