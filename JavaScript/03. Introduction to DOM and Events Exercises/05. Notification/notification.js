function notify(message) {
    let notifyDiv = document.getElementById('notification');
    notifyDiv.textContent = message;
    notifyDiv.style.display = 'block';

    setTimeout(hideMessage, 2000)

    function hideMessage () {
        notifyDiv.style.display = 'none';
    }
}