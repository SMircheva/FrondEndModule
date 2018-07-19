

function extractText() {
    let results = [];


   let listImets = $('#items li')
       .toArray()
       .map(x=> results.push(x.textContent));
    $('#result').text(results.join(', '));

}
