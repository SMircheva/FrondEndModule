function addItem() {
    let newItemText = document.getElementById('newText').value;
    if (newItemText === '') {
        return;
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItemText +' '));

    let span = document.createElement('span');
    span.innerHTML = ('<a href="#">[Delete]</a>');
    span.addEventListener('click', deleteItem);
    function deleteItem() {
        let currentItem = this.parentNode;
        let list = currentItem.parentNode;
        list.removeChild(li);
    }

    li.appendChild(span);

    let ul = document.getElementById('items');
    ul.appendChild(li);
    document.getElementById('newText').value = '';

}