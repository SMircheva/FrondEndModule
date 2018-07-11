function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let extra = document.getElementById('extra');

    if (buttonText === 'More') {
        extra.style.display = "block";
        document.getElementsByClassName('button')[0].textContent = 'Less';
    } else {
        extra.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }
}