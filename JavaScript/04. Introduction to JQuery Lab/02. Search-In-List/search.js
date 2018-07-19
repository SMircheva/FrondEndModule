function search() {
    let towns = $('#towns li');
    let searched = $('#searchText').val();
    let counter = 0;

    for (let town of towns) {
        let currentTown = town.textContent;

        if (currentTown.includes(searched)) {
            counter++;
            $(town).css('font-weight', 'bold');
        }
        else {
            $(town).css('font-weight', '');
        }
    }

    $('#result').text(`${counter} matches found`)
}