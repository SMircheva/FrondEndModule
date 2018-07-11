function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    console.log(inputText, inputValue);

    let option = document.createElement('option');
    option.value = inputValue;
    option.textContent = inputText;

    let dropdown = document.getElementById('menu');
    dropdown.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}