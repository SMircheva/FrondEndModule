function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let rows = document.getElementsByTagName('td');
    let messageField = document.getElementById('result');
    for (let row of rows) {
        if (row.textContent === email) {
            let parentRow = row.parentNode;
            let table = parentRow.parentNode;
            table.removeChild(parentRow);
            messageField.textContent = 'DELETED';
            document.getElementsByName('email')[0].value = '';
            return;
        }
    }

    document.getElementsByName('email')[0].value = '';
    messageField.textContent = 'Not found.';

}