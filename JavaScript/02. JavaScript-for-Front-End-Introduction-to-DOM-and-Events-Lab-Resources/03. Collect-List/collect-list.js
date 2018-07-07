function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let result = '';

    for (let i = 0; i < listItems.length; i++) {
        let item = listItems[i].textContent;
        result = result + item + '\n';
    }

    document.getElementById('result').textContent = result;
}