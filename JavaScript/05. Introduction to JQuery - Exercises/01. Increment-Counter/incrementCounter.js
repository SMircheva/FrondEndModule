function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBnt = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //format text area
    textArea.addClass('counter');
    textArea.val(0);
    textArea.attr('disabled', true);

    //format buttons
    incrementBnt.addClass('btn');
    incrementBnt.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    // format list
    list.addClass('results');

    //add events
    $(incrementBnt).on('click', function() {
        textArea.val(+textArea.val() + 1);
    });

    $(addBtn).on('click', function() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    //append fragment to DOM

    textArea.appendTo(fragment);
    incrementBnt.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
